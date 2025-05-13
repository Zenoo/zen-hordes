export type TooltipOptions = {
  target: HTMLElement;
  content: string;
  position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
};

let tooltipElement: HTMLDivElement | null = null;

export const tooltip = ({
  target,
  content,
  position = "bottomRight",
}: TooltipOptions) => {
  if (!tooltipElement) {
    tooltipElement = document.createElement("div");
    tooltipElement.classList.add("tooltip", "zen-tooltip");
    document.body.appendChild(tooltipElement);
  }

  target.addEventListener("mouseenter", () => {
    if (!tooltipElement) return;
    tooltipElement.textContent = content;
  });

  target.addEventListener("mousemove", (event) => {
    if (!tooltipElement) return;

    const offset = 4; // Offset to prevent the tooltip from being too close to the cursor
    switch (position) {
      case "topLeft":
        tooltipElement.style.left = "unset";
        tooltipElement.style.top = "unset";
        tooltipElement.style.right = `${
          window.innerWidth - event.clientX - offset * 2
        }px`;
        tooltipElement.style.bottom = `${
          window.innerHeight - event.clientY + offset
        }px`;
        break;
      case "topRight":
        tooltipElement.style.left = `${event.clientX + offset}px`;
        tooltipElement.style.top = "unset";
        tooltipElement.style.right = "unset";
        tooltipElement.style.bottom = `${
          window.innerHeight - event.clientY + offset
        }px`;
        break;
      case "bottomLeft":
        tooltipElement.style.left = "unset";
        tooltipElement.style.top = `${event.clientY + offset * 4}px`;
        tooltipElement.style.right = `${window.innerWidth - event.clientX}px`;
        tooltipElement.style.bottom = "unset";
        break;
      case "bottomRight":
        tooltipElement.style.left = `${event.clientX + offset * 4}px`;
        tooltipElement.style.top = `${event.clientY + offset * 4}px`;
        tooltipElement.style.right = "unset";
        tooltipElement.style.bottom = "unset";
        break;
      default:
        tooltipElement.style.left = `${event.clientX + offset}px`;
        tooltipElement.style.top = `${event.clientY + offset}px`;
        tooltipElement.style.right = "unset";
        tooltipElement.style.bottom = "unset";
        break;
    }

    if (!tooltipElement.classList.contains("visible")) {
      tooltipElement.classList.add("visible");
    }
  });

  target.addEventListener("mouseleave", () => {
    tooltipElement?.classList.remove("visible");
  });
};
