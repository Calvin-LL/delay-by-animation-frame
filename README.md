# delay-by-animation-frame

[![npm](https://img.shields.io/npm/v/delay-by-animation-frame?style=flat)](https://www.npmjs.com/package/delay-by-animation-frame) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](https://opensource.org/licenses/MIT)

This library exports `() => new Promise((resolve) => requestAnimationFrame(resolve))`

Resolves to a [`DOMHighResTimeStamp`](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp) which is a `double`

## Install

Install with npm:

```bash
npm install delay-by-animation-frame
```

Install with yarn:

```bash
yarn add delay-by-animation-frame
```

## Example

```javascript
import delayByAnimationFrame from "delay-by-animation-frame";

async function animate() {
  const element = document.getElementById("element-id");
  let start;

  while (true) {
    const timestamp = await delayByAnimationFrame();

    if (start === undefined) start = timestamp;

    const elapsed = timestamp - start;

    if (elapsed > 2000) break;

    element.style.transform =
      "translateX(" + Math.min(0.1 * elapsed, 200) + "px)";
  }
}

animate();
```
