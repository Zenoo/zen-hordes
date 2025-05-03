import { store } from "./store";

export const enhanceUI = () => {
  if (!store["enhance-css"]) return;

  // Add custom CSS
  document.body.classList.add("zen-enhanced");
};

export const autoSelectGlobalMapSetting = (node: HTMLElement) => {
  if (!store["enhance-css"]) return;
  if (!node.classList.contains("map_button")) return;
  if (!node.closest(".zonemap_controls")) return;

  node.addEventListener("click", () => {
    if (!store["enhance-css"]) return;

    const globalButton = document.querySelector<HTMLButtonElement>(
      ".tilemap_controls .float-left button:nth-of-type(3)"
    );
    if (!globalButton) return;

    // Check if the button is already selected
    if (globalButton.classList.contains("show-tags")) return;

    globalButton.click();
  });
};

export const autoOpenBagOutside = (node: HTMLElement) => {
  if (!store["enhance-css"]) return;
  if (node.getAttribute("x-load-from") !== "/jx/beyond/partial/desert/actions")
    return;

  // Only click on it if it's displayed
  if (node.parentElement?.id !== "wb-item-action-section") return;

  node.click();
};
