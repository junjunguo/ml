import * as fs from "fs";
import * as path from "path";
// @vitest-environment jsdom
import { describe, it } from "vitest";

// import { predictEmotion } from "./emotionDetector";

// All tests within this suite will be run in parallel
describe("Emotion tetector", () => {
  it("predictEmotion", async ({ expect }) => {
    const imgEl = document.createElement("img");
    const imgPath = path.join(__dirname, "../mock/happy.png");
    imgEl.src = `data:image/png;base64, ${fs.readFileSync(imgPath, "base64")}`;
    imgEl.alt = "happy face";

    // console.log(imgEl.src);

    // await new Promise((resolve) => {
    //   imgEl.onloadeddata = () => {
    //     resolve(imgEl);
    //   };
    // });

    // console.log(imgEl.src);

    // const actual = await predictEmotion(imgEl);
    // console.log(actual);
  });
  // it("concurrent test 2", async ({ expect }) => {
  //   /* ... */
  // });
});

// todo
// ReferenceError: fetch is not defined
//  ❯ HTTPRequest.PlatformBrowser.fetch node_modules/@tensorflow/tfjs/tfjs-core/src/platforms/platform_browser.ts
