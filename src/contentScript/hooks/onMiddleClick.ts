export const onMiddleClick = (callback: (node: HTMLElement, event: MouseEvent) => void) => {
  document.addEventListener("mousedown", (event) => {
    // Middle click only
    if (event.button !== 1) return;

    const node = event.target;
    if (!(node instanceof HTMLElement)) return;

    callback(node, event);
  });
};
