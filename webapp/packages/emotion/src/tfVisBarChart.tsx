import { render } from "@tensorflow/tfjs-vis";
import React, { type FC, useEffect, useRef } from "react";

export const TfVisBarChart: FC<{
  data: Array<{
    index: number;
    value: number;
  }>;
}> = ({ data }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const renderBarChart = async (): Promise<void> => {
    const el = ref.current;
    if (el != null)
      await render.barchart(
        el,
        data
        // tfVisor().surface({ name: "Result", tab: "Charts" })
      );
  };

  useEffect(() => {
    if (ref.current != null)
      renderBarChart().catch((e) => {
        console.log(e);
      });
  }, [ref.current]);

  return <div ref={ref}></div>;
};
