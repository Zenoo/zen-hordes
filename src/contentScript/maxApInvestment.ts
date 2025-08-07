import { store } from "./store";

export const prefillApPromptWithMaxAp = (node: HTMLElement) => {
  if (!store["max-ap-investment"]) return;
  if (!node.classList.contains("ap-prompt")) return;

  const currentAp = document
    .querySelector(".ulcont .ap b")
    ?.getAttribute("data-value");
  const currentBp = document
    .querySelector(".ulcont .bp b")
    ?.getAttribute("data-value");

  const total = +(currentAp ?? 0) + +(currentBp ?? 0);

  const input = node.querySelector("input");
  if (input) {
    input.value = total.toString();
  }
};
