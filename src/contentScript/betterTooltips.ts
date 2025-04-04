import { Item, ItemId, items } from "../data/items";
import { Recipe, recipes } from "../data/recipes";
import { ASSETS } from "../utils/constants";
import { store } from "./store";

const findItem = (node: HTMLElement) => {
  return Object.values(items).find((item) => {
    return (
      item.name[store["hordes-lang"]] ===
      node.querySelector("h1")?.textContent?.trim() &&
      (/item\/(.+)\..+\.gif/.exec((node.querySelector("h1 img") as HTMLImageElement | undefined)?.src ?? '')?.[1] ?? "") === item.icon
    );
  });
};

const findRecipes = (item: Item) => {
  return recipes.filter((recipe) => {
    return (
      recipe.in.some((inItem) => inItem.item === item.id) ||
      recipe.out.some((outItem) => outItem.item === item.id)
    );
  });
};

const findItemsWithRelatedActions = (item: Item) => {
  return Object.values(items)
    .filter((otherItem) => {
      // Ignore the current item
      if (otherItem.id === item.id) {
        return false;
      }

      return otherItem.actions.some((action) => {
        return action.effects.some((effect) => {
          return (
            effect.type === ItemActionEffectType.CreateItem &&
            effect.value === item.id
          );
        });
      });
    })
    .map((otherItem) => {
      return {
        ...otherItem,
        actions: otherItem.actions.filter((action) => {
          return action.effects.some((effect) => {
            return (
              effect.type === ItemActionEffectType.CreateItem &&
              effect.value === item.id
            );
          });
        }),
      };
    });
};

const getRecipeTypeIcon = (type: RecipeType) => {
  switch (type) {
    case RecipeType.ManualAnywhere:
    case RecipeType.ManualInside:
    case RecipeType.ManualOutside:
      return "icons/small_next.gif";
    case RecipeType.Workshop:
    case RecipeType.WorkshopShaman:
    case RecipeType.WorkshopTech:
      return "icons/small_refine.gif";
  }
};

const getActionTypeIcon = (type: ItemActionType) => {
  switch (type) {
    case ItemActionType.Eat:
      return "icons/actions/eat.gif";
    case ItemActionType.Open:
      return "icons/item/item_can_opener.gif";
    default:
      return "icons/small_next.gif";
  }
};

type DisplayedIcon = {
  id?: ItemId;
  icon: string;
  amount?: number | string;
  text?: string;
  crossed?: boolean;
};

const convertEffectToDisplayedItem = (effect: ItemActionEffect) => {
  const displayedIcon: DisplayedIcon = {
    icon: "",
  };

  switch (effect.type) {
    case ItemActionEffectType.AP: {
      displayedIcon.icon = `icons/ap_small${
        store["hordes-lang"] !== Lang.DE ? `_${store["hordes-lang"]}` : ""
      }.gif`;
      displayedIcon.amount = Number(effect.value);
      break;
    }
    case ItemActionEffectType.SP: {
      displayedIcon.icon = `icons/sp_small${
        store["hordes-lang"] !== Lang.DE ? `_${store["hordes-lang"]}` : ""
      }.gif`;
      displayedIcon.amount = effect.value?.toString();
      break;
    }
    case ItemActionEffectType.MP: {
      displayedIcon.icon = `icons/sp_small${
        store["hordes-lang"] !== Lang.DE ? `_${store["hordes-lang"]}` : ""
      }.gif`;
      displayedIcon.amount = effect.value?.toString();
      break;
    }
    case ItemActionEffectType.CP: {
      displayedIcon.icon = `icons/pc_small${
        store["hordes-lang"] !== Lang.DE ? `_${store["hordes-lang"]}` : ""
      }.gif`;
      displayedIcon.amount = effect.value?.toString();
      break;
    }
    case ItemActionEffectType.Ghoulify: {
      displayedIcon.icon = "role/ghoul.gif";
      break;
    }
    case ItemActionEffectType.UnGhoulify: {
      displayedIcon.icon = "role/ghoul.gif";
      displayedIcon.crossed = true;
      break;
    }
    case ItemActionEffectType.Infect: {
      displayedIcon.icon = "status/status_infection.gif";
      break;
    }
    case ItemActionEffectType.CreateItem: {
      if (!effect.value) {
        throw new Error("CreateItem effect must have a value");
      }
      const item = items[effect.value as ItemId];

      if (!item) {
        throw new Error(`Item not found: ${effect.value}`);
      }

      displayedIcon.id = item.id;
      displayedIcon.icon = `icons/item/${item.icon}.gif`;
      break;
    }
    case ItemActionEffectType.ReduceGhoulHunger: {
      displayedIcon.icon = "role/ghoul.gif";
      displayedIcon.amount = effect.value;
      break;
    }
    case ItemActionEffectType.GetPicto: {
      displayedIcon.icon = `picto/${effect.value}.gif`;
      displayedIcon.amount = 1;
      break;
    }
    case ItemActionEffectType.AddWaterToWell: {
      displayedIcon.icon = "icons/small_well.gif";
      displayedIcon.amount = effect.value;
      break;
    }
    case ItemActionEffectType.Defense: {
      displayedIcon.icon = "icons/small_def.gif";
      displayedIcon.amount = effect.value;
      break;
    }
    case ItemActionEffectType.UnlockBuilding: {
      displayedIcon.icon = `building/${effect.value}.gif`;
      break;
    }
    case ItemActionEffectType.RemoveRuinDebris: {
      displayedIcon.icon = "building/small_dig.gif";
      displayedIcon.amount = effect.value;
      break;
    }
    case ItemActionEffectType.GetEscapeTime: {
      displayedIcon.icon = "professions/stranger.gif";
      break;
    }
    case ItemActionEffectType.Kill: {
      displayedIcon.icon = "icons/small_zombie.gif";
      displayedIcon.amount = effect.value;
      break;
    }
    case ItemActionEffectType.HomeDefense: {
      displayedIcon.icon = "icons/small_homedef.gif";
      displayedIcon.amount = effect.value;
      break;
    }
    case ItemActionEffectType.HomeStorage: {
      displayedIcon.icon = "icons/small_homeup.gif";
      displayedIcon.amount = effect.value;
      break;
    }
    case ItemActionEffectType.RemoveStatus: {
      displayedIcon.icon = `status/status_${effect.value}.gif`;
      displayedIcon.crossed = true;
      break;
    }
    case ItemActionEffectType.AddStatus: {
      displayedIcon.icon = `status/status_${effect.value}.gif`;
      break;
    }
    case ItemActionEffectType.Death: {
      displayedIcon.icon = "icons/death.gif";
      break;
    }
    default:
      console.log("Unknown effect type:", effect.type);
      throw new Error("Unknown effect type");
  }

  if (!displayedIcon.text) {
    displayedIcon.text = effect.odds ? `${effect.odds}%` : undefined;
  }

  return displayedIcon;
};

const createLine = (
  currentItemId: ItemId,
  item: Item,
  data: Recipe | ItemAction
) => {
  const line = document.createElement("tr");

  // Inputs
  const inputCell = document.createElement("td");
  inputCell.classList.add("input");

  let inputIcons: DisplayedIcon[] = [];

  if ("in" in data) {
    // Recipe
    inputIcons = data.in.map((inItem) => ({
      id: items[inItem.item].id,
      icon: `icons/item/${items[inItem.item].icon}.gif`,
      text: inItem.odds?.toString(),
    }));
  } else {
    // Item action
    inputIcons.push(...data.conditions.map((condition) => {
      switch (condition) {
        case ItemActionCondition.Technician:
          return { icon: "professions/tech.gif" };
        default:
          return { icon: "icons/item/item_broken.gif" };
      }
    }));

    inputIcons.push({
      id: items[item.id].id,
      icon: `icons/item/${items[item.id].icon}.gif`,
    });
  }

  inputIcons.forEach((inputIcon) => {
    const wrapper = document.createElement("div");
    inputCell.append(wrapper);
    const inputImg = document.createElement("img");
    inputImg.src = `${ASSETS}/${inputIcon.icon}`;
    inputImg.alt = inputIcon.id
      ? items[inputIcon.id].name[store["hordes-lang"]]
      : inputIcon.icon;

    // Highlight the item if it's the current item
    if (inputIcon.id === currentItemId) {
      inputImg.classList.add("highlight");
    }

    if (inputIcon.text) {
      wrapper.setAttribute("data-text", inputIcon.text);
    }

    if (inputIcon.amount) {
      wrapper.setAttribute("data-zen-amount", inputIcon.amount.toString());
    }

    if (inputIcon.crossed) {
      wrapper.classList.add("crossed");
    }

    wrapper.append(inputImg);
  });

  line.append(inputCell);

  // Action
  const actionCell = document.createElement("td");
  actionCell.classList.add("action");
  line.append(actionCell);
  const icon = document.createElement("img");
  let actionIcon = "";
  if ("in" in data) {
    // Recipe
    actionIcon = getRecipeTypeIcon(data.type);
  } else {
    // Item action
    actionIcon = getActionTypeIcon(data.type);
  }
  icon.src = `${ASSETS}/${actionIcon}`;
  icon.alt = "→";
  actionCell.append(icon);

  // Outputs
  const outputCell = document.createElement("td");
  outputCell.classList.add("output");

  let outputIcons: DisplayedIcon[] = [];

  if ("out" in data) {
    // Recipe
    const total = data.out.reduce(
      (acc, outItem) => acc + (outItem.odds ?? 0),
      0
    );

    outputIcons = data.out.map((outItem) => ({
      id: items[outItem.item].id,
      icon: `icons/item/${items[outItem.item].icon}.gif`,
      text: outItem.odds
        ? `${Math.round((outItem.odds / total) * 100)}%`
        : undefined,
    }));
  } else {
    // Item action
    outputIcons = data.effects.map((effect) =>
      convertEffectToDisplayedItem(effect)
    );
  }

  outputIcons.forEach((outputIcon) => {
    const wrapper = document.createElement("div");
    outputCell.append(wrapper);
    const output = document.createElement("img");
    output.src = `${ASSETS}/${outputIcon.icon}`;
    output.alt = outputIcon.id
      ? items[outputIcon.id].name[store["hordes-lang"]]
      : outputIcon.icon;

    // Highlight the ingredient if it's the current item
    if (outputIcon.id === currentItemId) {
      output.classList.add("highlight");
    }

    if (outputIcon.text) {
      wrapper.setAttribute("data-text", outputIcon.text);
    }

    if (outputIcon.amount) {
      wrapper.setAttribute("data-zen-amount", outputIcon.amount.toString());
    }

    if (outputIcon.crossed) {
      wrapper.classList.add("crossed");
    }

    wrapper.append(output);
    outputCell.append(wrapper);
  });

  line.append(outputCell);

  return line;
};

export const insertBetterTooltips = (node: HTMLElement) => {
  if (!store["better-tooltips"]) return;

  if (node.classList.contains("tooltip") && node.classList.contains("item")) {
    const processed = node.classList.contains("zen-better-tooltip");
    if (processed) return;

    node.classList.add("zen-better-tooltip");

    const item = findItem(node);
    if (!item) return;

    // Decoration
    if (item.decoration) {
      const decorationNode = node.querySelector(".item-tag-deco");

      if (!decorationNode) {
        console.error(`Decoration node not found for item: ${item.id}`);
        return;
      }

      const span = document.createElement("span");
      span.classList.add("zen-item-decoration");
      const startText = document.createTextNode(`(${item.decoration} `);
      const icon = document.createElement("img");
      icon.src = `${ASSETS}/icons/deco.gif`;
      const endText = document.createTextNode(")");
      span.append(startText, icon, endText);
      decorationNode.append(span);
    }

    // Recipes/Actions
    const itemRecipes = findRecipes(item);
    if (!itemRecipes.length && !item.actions.length) return;

    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    table.append(tbody);

    // Add a row for each recipe
    itemRecipes.forEach((recipe) => {
      tbody.append(createLine(item.id, item, recipe));
    });

    // Add a row for each action
    item.actions.forEach((action) => {
      tbody.append(createLine(item.id, item, action));
    });

    // Add a row for each related action
    const relatedItems = findItemsWithRelatedActions(item);
    relatedItems.forEach((otherItem) => {
      otherItem.actions.forEach((action) => {
        tbody.append(createLine(item.id, otherItem, action));
      });
    });

    node.append(table);
  }
};
