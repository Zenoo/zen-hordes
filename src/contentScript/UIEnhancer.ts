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

export const autoOpenBagWhenMovingItems = (node: HTMLElement) => {
  if (!store["enhance-css"]) return;
  if (node.id !== "beyond-inventory") return;

  // Listen to items click
  node.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const item = target.closest(".item:not(.locked)");
    if (!item) return;

    setTimeout(() => {
      // Open the bag
      const bagButton = document.querySelector<HTMLButtonElement>(
        "#wb-item-action-section button[x-load-from='/jx/beyond/partial/desert/actions']"
      );
      if (!bagButton) return;

      bagButton.click();
    }, 200);
  });
};

export const displayRuinBuryCount = (node: HTMLElement) => {
  if (!node.classList.contains("ruin-bury-desc")) return;

  const count = document.querySelectorAll(".ruin-bury-count .sand").length;

  node.textContent = node.textContent?.replace(":", ` (${count}):`) ?? "";
};
