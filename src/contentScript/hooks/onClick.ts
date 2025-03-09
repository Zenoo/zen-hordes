export const onClick = (callback: (node: HTMLElement) => void) => {
  document.addEventListener("click", (event) => {
    const node = event.target;
    if (!(node instanceof HTMLElement)) return;

    callback(node);
  });
};
