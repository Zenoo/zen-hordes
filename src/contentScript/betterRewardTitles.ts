import { rewards } from "../data/rewards";
import { Reward, RewardId } from "../data/types";
import { ASSETS } from "../utils/constants";
import { tooltip } from "../utils/tooltip";
import { store } from "./store";
import { t } from "./translate";

const T: Translations = {
  en: {
    missingPointsOnly: "Show missing points only",
    all: "Show all",
  },
  fr: {
    missingPointsOnly: "Afficher uniquement les points manquants",
    all: "Afficher tout",
  },
  de: {
    missingPointsOnly: "Nur fehlende Punkte anzeigen",
    all: "Alle anzeigen",
  },
  es: {
    missingPointsOnly: "Mostrar solo puntos faltantes",
    all: "Mostrar todo",
  },
};

const findRewardByTitle = (
  data: Reward | NonNullable<Reward["titles"]>[number],
  title: string
) => {
  // Ignore RewardId.CHAMAN, it seems like a dupe
  if ("id" in data && data.id === RewardId.CHAMAN) return false;

  if (typeof data.name[store["hordes-lang"]] === "string") {
    return data.name[store["hordes-lang"]] === title;
  }

  return data.name[store["hordes-lang"]].includes(title);
};

const getTitleName = (title: NonNullable<Reward["titles"]>[number]) => {
  const titleName = title.name[store["hordes-lang"]];
  if (typeof titleName === "string") {
    return titleName;
  }

  const lastName = titleName[titleName.length - 1];

  if (!lastName) {
    console.warn(
      `No name found for title: ${titleName.map((t) => t).join(", ")}`
    );
    return "";
  }

  return lastName;
};

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
        findRewardByTitle(r, displayedTitle)
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
      findRewardByTitle(title, displayedTitle)
    );

    if (!rewardTitle) {
      console.warn(
        `${rewards[currentReward].name.en}: Unknown title: ${displayedTitle}`
      );
      console.log(currentReward, rewards[currentReward].titles, displayedTitle);
      continue;
    }

    const pointValue = rewardTitle.points;

    if (!pointValue) continue;

    const pointSpan = document.createElement("span");
    pointSpan.classList.add("zen-title-points", "zen-added");
    pointSpan.textContent = `+${pointValue}`;
    li.appendChild(pointSpan);
    li.setAttribute("data-points", String(pointValue));
  }
};

export const displayMissingTitles = (node: HTMLElement) => {
  if (!store["better-reward-titles"]) return;
  if (!node.classList.contains("title-list")) return;

  const displayedRewards = Array.from(node.children).filter((li) =>
    li.classList.contains("chapter")
  );

  for (const reward of Object.values(rewards)) {
    // Skip rewards without titles
    if (!reward.titles) continue;

    // Check if reward is already displayed
    let rewardTitleElement = displayedRewards.find((li) => {
      const displayedTitle = li.textContent?.replace(/^"|"$/g, "").trim() ?? "";
      return findRewardByTitle(reward, displayedTitle);
    });

    // If the reward is not displayed, create a new list item for it
    if (!rewardTitleElement) {
      rewardTitleElement = document.createElement("li");
      rewardTitleElement.classList.add("chapter", "locked", "zen-added");

      const icon = document.createElement("img");
      icon.src = `${ASSETS}/pictos/${reward.icon}.gif`;
      rewardTitleElement.appendChild(icon);

      const text = document.createTextNode(
        ` ${reward.name[store["hordes-lang"]]}`
      );
      rewardTitleElement.appendChild(text);

      node.appendChild(rewardTitleElement);

      // Tooltip elements
      const tooltipTitle = document.createElement("h1");
      tooltipTitle.textContent = reward.name[store["hordes-lang"]];

      const tooltipDescription = document.createElement("em");
      tooltipDescription.textContent = reward.description[store["hordes-lang"]];

      tooltip({
        target: rewardTitleElement,
        id: `zen-reward-title-tooltip-${reward.id}`,
        content: [tooltipTitle, tooltipDescription],
        classes: ["forum-tooltip"],
      });
    }

    for (const title of reward.titles) {
      const isAlreadyDisplayed = Array.from(node.children).some((li) => {
        if (li.classList.contains("chapter")) return false;

        const displayedTitle =
          li.textContent?.replace(/^"|"$/g, "").trim() ?? "";

        return findRewardByTitle(title, displayedTitle);
      });

      if (!isAlreadyDisplayed) {
        const li = document.createElement("li");
        li.classList.add("locked", "zen-added");
        li.textContent = `"${getTitleName(title)}"`;

        // Insert before the next chapter
        let target = rewardTitleElement.nextElementSibling;
        while (target && !target.classList.contains("chapter")) {
          target = target.nextElementSibling;
        }

        node.insertBefore(li, target);

        // Tooltip elements
        const tooltipTitle = document.createElement("em");
        tooltipTitle.textContent = `${reward.name[store["hordes-lang"]]} x ${
          title.quantity
        }`;

        tooltip({
          target: li,
          id: `zen-reward-title-tooltip-${reward.id}-${title.quantity}`,
          content: [tooltipTitle],
          classes: ["forum-tooltip"],
        });
      }
    }
  }
};

export const displayMissingPointsTitlesButton = (node: HTMLElement) => {
  if (!store["better-reward-titles"]) return;
  if (!node.classList.contains("title-list")) return;

  const button = document.createElement("button");
  button.textContent = t(T, "missingPointsOnly");
  button.classList.add("missing-points-titles-button", "zen-added");
  button.dataset.state = "all";

  button.addEventListener("click", () => {
    if (button.dataset.state === "all") {
      let currentRewardTitle: Element | null = null;
      let currentRewardHasMissingPoints = false;

      for (const li of node.children) {
        // Ignore button
        if (li.classList.contains("missing-points-titles-button")) continue;

        if (li.classList.contains("chapter")) {
          if (currentRewardTitle && !currentRewardHasMissingPoints) {
            currentRewardTitle.classList.add("filtered");
          }

          currentRewardTitle = li;
          currentRewardHasMissingPoints = false;
          continue;
        }

        // If the title has no points, hide it
        if (
          !li.classList.contains("locked") ||
          !li.hasAttribute("data-points")
        ) {
          li.classList.add("filtered");
        } else {
          currentRewardHasMissingPoints = true;
        }
      }

      // Apply same filter for the last title
      if (currentRewardTitle && !currentRewardHasMissingPoints) {
        currentRewardTitle.classList.add("filtered");
      }

      button.dataset.state = "missing";
      button.textContent = t(T, "all");
    } else {
      // Show all titles
      for (const li of node.children) {
        if (li.classList.contains("filtered")) {
          li.classList.remove("filtered");
        }
      }

      button.dataset.state = "all";
      button.textContent = t(T, "missingPointsOnly");
    }
  });

  node.prepend(button);
};
