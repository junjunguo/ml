import { render } from "@tensorflow/tfjs-vis";
import React, { type FC, useEffect, useRef } from "react";

import { emotionLabels } from "./constants";

export const TfVisBarChart: FC<{
  data: Array<{
    index: number;
    value: number;
  }>;
}> = ({ data }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const renderBarChart = async (): Promise<void> => {
    const container = ref.current;
    if (container != null) {
      await render.barchart(container, data, {
        xLabel: emotionLabels.map((v, i) => `${i}:${v}`).join(" "),
        yLabel: "Posibility",
      });
    }
  };

  useEffect(() => {
    if (ref.current != null && data?.length > 0)
      renderBarChart().catch((e) => {});
  }, [ref.current, data]);

  return <div ref={ref}></div>;
};
