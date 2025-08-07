export type TooltipOptions = {
  target: Element;
  /**
   * Should be unique within the document
   */
  id: string;
  content: Element[] | string;
  position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  classes?: string[];
};

export const tooltip = ({
  target,
  id,
  content,
  position = "bottomRight",
  classes = [],
}: TooltipOptions) => {
  if (!(target instanceof HTMLElement)) {
    console.warn(`Tooltip target is not an HTMLElement: ${target.outerHTML}`);
    return;
  }

  let tooltipElement: HTMLElement | null = null;

  target.addEventListener("mouseenter", () => {
    if (!tooltipElement) {
      tooltipElement = document.getElementById(id);

      if (!tooltipElement) {
        tooltipElement = document.createElement("div");
        tooltipElement.classList.add("tooltip", "zen-tooltip", ...classes);
        tooltipElement.id = id;

        if (typeof content === "string") {
          tooltipElement.textContent = content;
        } else {
          for (const item of content) {
            tooltipElement.appendChild(item);
          }
        }

        document.body.appendChild(tooltipElement);
      }
    }

    tooltipElement.classList.add("visible");
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
  });

  target.addEventListener("mouseleave", () => {
    tooltipElement?.classList.remove("visible");
    tooltipElement = null;
  });
};
