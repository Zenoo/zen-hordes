import { rewards } from "../data/rewards";
import { RewardId } from "../data/types";
import { store } from "./store";

export const displayRewardTitlePoints = (node: HTMLElement) => {
  if (!store["better-reward-titles"]) return;
  if (!node.classList.contains("title-list")) return;

  let currentReward: RewardId | undefined;

  for (const li of node.children) {
    // Remove " surrounding quotes
    const displayedTitle = li.textContent?.replace(/^"|"$/g, "").trim() ?? "";

    // Get current reward from headers
    if (li.classList.contains("chapter")) {
      const reward = Object.values(rewards).find((r) =>
        typeof r.name[store["hordes-lang"]] === "string"
          ? r.name[store["hordes-lang"]] === displayedTitle
          : r.name[store["hordes-lang"]].includes(displayedTitle)
      );

      if (!reward) {
        console.warn(`No reward found for title: ${displayedTitle}`);
        continue;
      }

      currentReward = reward.id;
      continue;
    }

    if (!currentReward) continue;

    // Find the corresponding point value
    const rewardTitle = rewards[currentReward].titles?.find((title) =>
      typeof title.name[store["hordes-lang"]] === "string"
        ? title.name[store["hordes-lang"]] === displayedTitle
        : title.name[store["hordes-lang"]].includes(displayedTitle)
    );

    if (!rewardTitle) {
      console.warn(`No reward title found for title: ${displayedTitle}`);
      continue;
    }

    const pointValue = rewardTitle.points;

    if (!pointValue) continue;

    const pointSpan = document.createElement("span");
    pointSpan.className = "zen-title-points";
    pointSpan.textContent = `+${pointValue}`;
    li.appendChild(pointSpan);
  }
};
