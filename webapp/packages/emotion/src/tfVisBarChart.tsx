// import { render } from "@tensorflow/tfjs-vis";
// import React, { type FC, useEffect, useRef } from "react";

// import { emotionLabels } from "./constants";

// /**
//  * TODO: wait to new vision wich can fix :
//  * npm WARN deprecated @types/fast-json-stable-stringify@2.1.0: This is a stub types definition. fast-json-stable-stringify provides its own type definitions, so you do not need this installed.
// npm WARN deprecated core-js@1.2.7: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual version of core-js.
//  */
// export const TfVisBarChart: FC<{
//   data: Array<{
//     index: number;
//     value: number;
//   }>;
// }> = ({ data }) => {
//   const ref = useRef<HTMLDivElement | null>(null);

//   const renderBarChart = async (): Promise<void> => {
//     const container = ref.current;
//     if (container != null) {
//       await render.barchart(container, data, {
//         xLabel: emotionLabels.map((v, i) => `${i}:${v}`).join(" "),
//         yLabel: "Posibility",
//       });
//     }
//   };

//   useEffect(() => {
//     if (ref.current != null && data?.length > 0)
//       renderBarChart().catch((e) => {});
//   }, [ref.current, data]);

//   return <div ref={ref}></div>;
// };
