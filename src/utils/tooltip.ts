export const tooltip = (target: HTMLElement, content: string) => {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip", "zen-tooltip", "zen-update-tooltip");
  tooltip.textContent = content;

  document.body.appendChild(tooltip);

  target.addEventListener("mousemove", (event) => {
    tooltip.style.top = `${event.clientY}px`;
    tooltip.style.left = `${event.clientX}px`;
    tooltip.classList.add("visible");
  });

  target.addEventListener("mouseleave", () => {
    tooltip.classList.remove("visible");
  });
};
