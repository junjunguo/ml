
import os
import sys
import scipy.io
import scipy.misc
import matplotlib.pyplot as plt
from matplotlib.pyplot import imshow
from PIL import Image
import numpy as np
import tensorflow as tf
from tensorflow.python.framework.ops import EagerTensor
import pprint
import datetime

# path to 'art-generation' e.g. : '/Users/Junjun/Repository/ml/art-generation/'
path = ''

def compute_content_cost(content_output, generated_output):
    """
    Computes the content cost
    
    Arguments:
    a_C -- tensor of dimension (1, n_H, n_W, n_C), hidden layer activations representing content of the image C 
    a_G -- tensor of dimension (1, n_H, n_W, n_C), hidden layer activations representing content of the image G
    
    Returns: 
    J_content -- scalar that you compute using equation 1 above.
    """
    a_C = content_output[-1]
    a_G = generated_output[-1]
        
    # Retrieve dimensions from a_G (≈1 line)
    m, n_H, n_W, n_C = a_G.get_shape().as_list()
    
    # Reshape a_C and a_G (≈2 lines)
    a_C_unrolled = tf.reshape(a_C, [m, -1, n_C])
    a_G_unrolled = tf.reshape(a_G, [m, -1, n_C])
    
    # compute the cost with tensorflow (≈1 line)
    J_content =  (1 / (4 * n_H * n_W * n_C)) * tf.reduce_sum(tf.square(tf.subtract(a_C_unrolled, a_G_unrolled)))
        
    return J_content

def gram_matrix(A):
    """
    Argument:
    A -- matrix of shape (n_C, n_H*n_W)
    
    Returns:
    GA -- Gram matrix of A, of shape (n_C, n_C)
    """  
    
    GA = tf.matmul(A, tf.transpose(A))
    
    return GA

def compute_layer_style_cost(a_S, a_G):
    """
    Arguments:
    a_S -- tensor of dimension (1, n_H, n_W, n_C), hidden layer activations representing style of the image S 
    a_G -- tensor of dimension (1, n_H, n_W, n_C), hidden layer activations representing style of the image G
    
    Returns: 
    J_style_layer -- tensor representing a scalar value, style cost defined above by equation (2)
    """
    
    # Retrieve dimensions from a_G 
    m, n_H, n_W, n_C = a_G.get_shape().as_list()
    
    # Reshape the images to have them of shape (n_C, n_H*n_W)
    a_S = tf.transpose(tf.reshape(a_S, [-1, n_C]))
    a_G = tf.transpose(tf.reshape(a_G, [-1, n_C]))

    # Computing gram_matrices for both images S and G
    GS = gram_matrix(a_S)
    GG = gram_matrix(a_G)

    # Computing the loss (≈1 line)
    J_style_layer = (1 / (4 * (n_C**2 * (n_H * n_W)**2))) * tf.reduce_sum(tf.square(tf.subtract(GS, GG)))
        
    return J_style_layer

@tf.function()
def total_cost(J_content, J_style, alpha = 10, beta = 40):
    """
    Computes the total cost function
    
    Arguments:
    J_content -- content cost coded above
    J_style -- style cost coded above
    alpha -- hyperparameter weighting the importance of the content cost
    beta -- hyperparameter weighting the importance of the style cost
    
    Returns:
    J -- total cost as defined by the formula above.
    """
    
    J = alpha * J_content + beta * J_style
    
    return J

def clip_0_1(image):
    """
    Truncate all the pixels in the tensor to be between 0 and 1
    
    Arguments:
    image -- Tensor
    J_style -- style cost coded above

    Returns:
    Tensor
    """
    return tf.clip_by_value(image, clip_value_min=0.0, clip_value_max=1.0)

def tensor_to_image(tensor):
    """
    Converts the given tensor into a PIL image
    
    Arguments:
    tensor -- Tensor
    
    Returns:
    Image: A PIL image
    """
    tensor = tensor * 255
    tensor = np.array(tensor, dtype=np.uint8)
    if np.ndim(tensor) > 3:
        assert tensor.shape[0] == 1
        tensor = tensor[0]
    return Image.fromarray(tensor)

def get_layer_outputs(vgg, layer_names):
    """ Creates a vgg model that returns a list of intermediate output values."""
    outputs = [vgg.get_layer(layer[0]).output for layer in layer_names]

    model = tf.keras.Model([vgg.input], outputs)
    return model

def compute_style_cost(style_image_output, generated_image_output, STYLE_LAYERS):
    """
    Computes the overall style cost from several chosen layers
    
    Arguments:
    style_image_output -- our tensorflow model
    generated_image_output --
    STYLE_LAYERS -- A python list containing:
                        - the names of the layers we would like to extract style from
                        - a coefficient for each of them
    
    Returns: 
    J_style -- tensor representing a scalar value, style cost defined above by equation (2)
    """
    
    # initialize the overall style cost
    J_style = 0

    # Set a_S to be the hidden layer activation from the layer we have selected.
    # The last element of the array contains the content layer image, which must not to be used.
    a_S = style_image_output[:-1]

    # Set a_G to be the output of the choosen hidden layers.
    # The last element of the array contains the content layer image, which must not to be used.
    a_G = generated_image_output[:-1]
    for i, weight in zip(range(len(a_S)), STYLE_LAYERS):  
        # Compute style_cost for the current layer
        J_style_layer = compute_layer_style_cost(a_S[i], a_G[i])

        # Add weight * J_style_layer of this layer to overall style cost
        J_style += weight[1] * J_style_layer

    return J_style

def initialize(content_image, style_image, generated_image, vgg):

    STYLE_LAYERS = [
        ('block1_conv1', 0.25),
        ('block2_conv1', 0.2),
        ('block3_conv1', 0.1),
        ('block4_conv1', 0.2),
        ('block5_conv1', 0.25)]

    content_layer = [('block5_conv4', 1)]
    tf.random.set_seed(272) # DO NOT CHANGE THIS VALUE
    pp = pprint.PrettyPrinter(indent=4)

    vgg.trainable = False
    vgg_model_outputs = get_layer_outputs(vgg, STYLE_LAYERS + content_layer)

    # # Assign the input of the model to be the "style" image 

    noise = tf.random.uniform(tf.shape(generated_image), 0, 0.5)
    generated_image = tf.add(generated_image, noise)
    generated_image = tf.clip_by_value(generated_image, clip_value_min=0.0, clip_value_max=1.0)

    # Assign the content image to be the input of the VGG model.  
    # Set a_C to be the hidden layer activation from the layer we have selected
    preprocessed_content =  tf.Variable(tf.image.convert_image_dtype(content_image, tf.float32))
    a_C = vgg_model_outputs(preprocessed_content)

    # Set a_G to be the hidden layer activation from same layer. Here, a_G references model['conv4_2'] 
    # and isn't evaluated yet. Later in the code, we'll assign the image G as the model input.
    a_G = vgg_model_outputs(generated_image)

    preprocessed_style =  tf.Variable(tf.image.convert_image_dtype(style_image, tf.float32))
    a_S = vgg_model_outputs(preprocessed_style)

    return vgg_model_outputs, a_S, a_C, STYLE_LAYERS

@tf.function()
def train_step(generated_image, vgg_model_outputs, optimizer, a_S, a_C, STYLE_LAYERS, alpha = 10, beta = 40):

    with tf.GradientTape() as tape:
        # In this function you must use the precomputed encoded images a_S and a_C
        # Compute a_G as the vgg_model_outputs for the current generated image
                
        a_G = vgg_model_outputs(generated_image)
        
        # Compute the style cost
        J_style = compute_style_cost(a_S, a_G, STYLE_LAYERS)

        # Compute the content cost
        J_content = compute_content_cost(a_C, a_G)
        # Compute the total cost
        J = total_cost(J_content, J_style, alpha, beta)  
                
    grad = tape.gradient(J, generated_image)

    optimizer.apply_gradients([(grad, generated_image)])
    generated_image.assign(clip_0_1(generated_image))
    # For grading purposes
    return J

def train_the_model(
        content_img_path = path + "images/rain_princess.jpg", 
        style_img_path = path + "images/starry_night.jpg", 
        learning_rate=0.03, 
        img_size=0,
        alpha = 10, 
        beta = 40,
        save_step_img = True
    ):
    pil_img_content = Image.open(content_img_path)
    [filename_c, file_extension_c] = pil_img_content.filename.split('/')[-1].split('.')

    if(img_size > 0):
        img_size_h = img_size_w = img_size
    else:
        img_size_w, img_size_h = pil_img_content.size
        print("img size w, h: ", img_size_w, img_size_h)

    content_image = np.array(Image.open(content_img_path).resize((img_size_w, img_size_h)))
    content_image = tf.constant(np.reshape(content_image, ((1,) + content_image.shape)))

    # Assign the input of the model to be the "style" image
    pil_img_style = Image.open(style_img_path)
    filename_s = pil_img_style.filename.split('/')[-1].split('.')[0]
    style_image =  np.array(pil_img_style.resize((img_size_w, img_size_h)))
    style_image = tf.constant(np.reshape(style_image, ((1,) + style_image.shape)))

    # You always must run the last cell before this one. You will get an error if not.
    generated_image = tf.Variable(tf.image.convert_image_dtype(content_image, tf.float32))
    optimizer = tf.keras.optimizers.Adam(learning_rate=learning_rate)
    vgg = tf.keras.applications.VGG19(include_top=False,
                                input_shape=(img_size_w, img_size_h, 3),
                                weights= path + 'pretrained-model/vgg19_weights_tf_dim_ordering_tf_kernels_notop.h5')
    vgg_model_outputs, a_S, a_C, STYLE_LAYERS  = initialize(content_image, style_image, generated_image, vgg)

    # Show the generated image at some epochs
    # Uncoment to reset the style transfer process. You will need to compile the train_step function again 
    epochs = 2501
    for i in range(epochs):
        train_step(generated_image, vgg_model_outputs, optimizer, a_S, a_C, STYLE_LAYERS, alpha, beta)
        if i % 250 == 0:
            print(f"{filename_s} {filename_c} Epoch {i} ")
            if save_step_img:
                image = tensor_to_image(generated_image)
                image.save(f"{path}output/{filename_c}_{filename_s}_l{str(learning_rate).replace('.','')}_a{alpha}_b{beta}_s{img_size_w}_e{epochs}_i{i}.{file_extension_c}")
                # imshow(image)
                # plt.show()
        if not save_step_img and i == epochs -1:
            image = tensor_to_image(generated_image)
            # imshow(image)
            image.save(f"{path}output/{filename_c}_{filename_s}_l{str(learning_rate).replace('.','')}_a{alpha}_b{beta}_s{img_size_w}_e{epochs}_i{i}.{file_extension_c}")
            # plt.show() 

def run(c_img_paths=[], s_img_paths=[], learning_rate=0.015, img_size=50):
    start = datetime.datetime.now()
    print(f"start {start}")
    print(f"Content size: {len(c_img_paths)}; style size: {len(s_img_paths)}; learning rate: {learning_rate}; output image size: {img_size}")
    tf.config.run_functions_eagerly(True)
    for c_img_path in c_img_paths:
        for s_img_path in s_img_paths:
            train_the_model(
                content_img_path=c_img_path, 
                style_img_path=s_img_path, 
                learning_rate=learning_rate, 
                img_size=img_size,
                alpha=10, 
                beta=40
            )
    end = datetime.datetime.now()
    d = (end - start).seconds
    print(f"Done {end} ; {d//3600}H {(d%3600)//60}M {(d%3600)%60}S")
            
run(
    c_img_paths=[
#         path to your content image,
        path + "images/GJJ_6842.jpg",
    ],
    s_img_paths=[
        # path to style image,
        path + "images/starry_night.jpg",
        # path + "images/rain_princess.jpg",
        # path + "images/scream.jpg",
        # path + "images/self_portrait.jpg"
    ]
)