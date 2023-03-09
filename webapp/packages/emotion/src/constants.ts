/**
 * Pretrained Graph model URL.
 */
export const graphModelUrl = "emotion_detection.json";

/**
 * Ordered list of emotion labels.
 */
export const emotionLabels = [
  "anger",
  "contempt",
  "disgust",
  "fear",
  "happiness",
  "neutral",
  "sadness",
  "surprise",
] as const;

export const modelInputImg2Dshape = [48, 48] as const;
