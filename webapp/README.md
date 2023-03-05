# WebApp

## Technologies

- Vitejs
- React
- Typescripts
- TensorflowJS

## TensorflowJS

### [tfjs converter](https://github.com/tensorflow/tfjs/tree/master/tfjs-converter)

To load a pretrained TensorFlow SavedModel or TensorFlow Hub module into the browser and run inference through TensorFlow.js.

#### colab

Easy way to run converter on colab:

```ipynb
!python --version  # tested Python 3.8.10 works
!pip install tensorflowjs
from tensorflowjs import converters
converters.convert_tf_saved_model("saved_py_model", "out_js_model")
```
