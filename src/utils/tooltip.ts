export type TooltipOptions = {
  target: HTMLElement;
  content: string;
  position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  classList?: string[];
};

export const tooltip = ({
  target,
  content,
  position = "bottomRight",
  classList = [],
}: TooltipOptions) => {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip", "zen-tooltip", ...classList);
  tooltip.textContent = content;

  document.body.appendChild(tooltip);

  target.addEventListener("mousemove", (event) => {
    const offset = 4; // Offset to prevent the tooltip from being too close to the cursor
    switch (position) {
      case "topLeft":
        tooltip.style.left = 'unset';
        tooltip.style.top = 'unset';
        tooltip.style.right = `${window.innerWidth - event.clientX - offset * 2}px`;
        tooltip.style.bottom = `${window.innerHeight - event.clientY + offset}px`;
        break;
      case "topRight":
        tooltip.style.left = `${event.clientX + offset}px`;
        tooltip.style.top = 'unset';
        tooltip.style.right = 'unset';
        tooltip.style.bottom = `${window.innerHeight - event.clientY + offset}px`;
        break;
      case "bottomLeft":
        tooltip.style.left = 'unset';
        tooltip.style.top = `${event.clientY + offset * 4}px`;
        tooltip.style.right = `${window.innerWidth - event.clientX}px`;
        tooltip.style.bottom = 'unset';
        break;
      case "bottomRight":
        tooltip.style.left = `${event.clientX + offset * 4}px`;
        tooltip.style.top = `${event.clientY + offset * 4}px`;
        tooltip.style.right = 'unset';
        tooltip.style.bottom = 'unset';
        break;
      default:
        tooltip.style.left = `${event.clientX + offset}px`;
        tooltip.style.top = `${event.clientY + offset}px`;
        tooltip.style.right = 'unset';
        tooltip.style.bottom = 'unset';
        break;
    }

    if (!tooltip.classList.contains("visible")) {
      tooltip.classList.add("visible");
    }
  });

  target.addEventListener("mouseleave", () => {
    tooltip.classList.remove("visible");
  });
};
