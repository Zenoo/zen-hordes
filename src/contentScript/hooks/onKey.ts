// Track the mouse position
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

export const onKey = (
  key: string,
  callback: (node: HTMLElement, event: KeyboardEvent) => void
) => {
  // Listen for the keydown event
  document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === key.toLowerCase()) {
      // Get the element under the mouse pointer
      const hoveredElement = document.elementFromPoint(
        mouseX,
        mouseY
      ) as HTMLElement | null;

      if (!hoveredElement) return;

      // Trigger the callback with the hovered element and the event
      callback(hoveredElement, event);
    }
  });
};
