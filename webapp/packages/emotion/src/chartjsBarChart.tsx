import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { type FC } from "react";
import { Bar } from "react-chartjs-2";

import { emotionLabels } from "./constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const ChartjsBarChart: FC<{
  data: number[];
  performanceMode?: boolean;
}> = ({ data, performanceMode = false }) => {
  return (
    <Bar
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            text: "Emotion Detiction",
          },
        },
        animation: performanceMode ? false : undefined,
        scales: {
          x: {
            type: "category",
          },
          y: {
            type: "linear",
            max: 1,
            min: 0,
          },
        },
      }}
      data={{
        labels: [...emotionLabels],
        datasets: [
          {
            label: "Emotion",
            data,
            backgroundColor: "rgba(255, 99, 132, 0.8)",
          },
        ],
      }}
    />
  );
};
