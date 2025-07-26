export const positionElement = ({
  element,
  relativeTo,
  anchor,
  xPosition = "center",
  yPosition = "top",
  offset = 8,
}: {
  element: HTMLElement;
  relativeTo: HTMLElement;
  anchor: HTMLElement;
  xPosition?: "left" | "right" | "center";
  yPosition?: "top" | "bottom" | "middle";
  offset?: number;
}) => {
  const relativeRect = relativeTo.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();
  const anchorRect = anchor.getBoundingClientRect();

  let left = 0;
  let top = 0;
  switch (xPosition) {
    case "center":
      left =
        anchorRect.left -
        relativeRect.left -
        elementRect.width / 2 +
        anchorRect.width / 2;
      break;
    case "left":
      left = anchorRect.left - relativeRect.left - elementRect.width - offset;
      break;
    case "right":
      left = anchorRect.right - relativeRect.left + offset;
      break;
  }
  switch (yPosition) {
    case "top":
      top = anchorRect.top - relativeRect.top - elementRect.height - offset;
      break;
    case "bottom":
      top = anchorRect.bottom - relativeRect.top + offset;
      break;
    case "middle":
      top =
        anchorRect.top -
        relativeRect.top +
        anchorRect.height / 2 -
        elementRect.height / 2;
      break;
  }

  element.style.left = `${left}px`;
  element.style.top = `${top}px`;

  // Snap to window edges

  // Bottom edge
  if (
    relativeRect.top + top + elementRect.height >
    window.innerHeight - offset
  ) {
    element.style.top = `${
      window.innerHeight - relativeRect.top - elementRect.height - offset
    }px`;
  }

  // Top edge
  if (relativeRect.top + top < offset) {
    element.style.top = `${offset}px`;
  }

  // Right edge
  if (
    relativeRect.left + left + elementRect.width >
    window.innerWidth - offset
  ) {
    element.style.left = `${
      window.innerWidth - relativeRect.left - elementRect.width - offset
    }px`;
  }

  // Left edge
  if (relativeRect.left + left < offset) {
    element.style.left = `${offset}px`;
  }
};
