export const hexColors = [
  "#80004B",
  "#32CD32",
  "#002F49",
  "#f4000a",
  "#05668D",
  "#f79006",
  "#dab425",
  "#0a0b2a",
  "#6d0082",
  "#154c99",
  "#3e2866",
  "#224f5a",
  "#223700",
  "#CB005B",
] as const;

/**
 * https://tfhub.dev/tensorflow/tfjs-model/ssd_mobilenet_v2/1/default/1
 */
export const tfHubUrl =
  "https://tfhub.dev/tensorflow/tfjs-model/ssd_mobilenet_v2/1/default/1";

export const graphModelRoot = "ssd_mobilenet_v2_1_default_1";
export const graphModelUrl = `${graphModelRoot}/model.json`;
