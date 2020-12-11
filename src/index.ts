export default () =>
  new Promise<DOMHighResTimeStamp>((resolve) => requestAnimationFrame(resolve));
