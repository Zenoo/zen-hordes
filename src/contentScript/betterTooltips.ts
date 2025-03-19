import { Item, items } from "../data/items";
import { recipes, RecipeType } from "../data/recipes";
import { ASSETS } from "../utils/constants";
import { store } from "./store";

const findItem = (node: HTMLElement) => {
  return Object.values(items).find((item) => {
    return item.name[store["hordes-lang"]] === node.querySelector('h1')?.textContent?.trim();
  });
}

const findRecipes = (item: Item) => {
  return recipes.filter((recipe) => {
    return recipe.in.some((inItem) => inItem.item === item.id) || recipe.out.some((outItem) => outItem.item === item.id);
  });
}

const getRecipeTypeIcon = (type: RecipeType) => {
  switch (type) {
    case RecipeType.ManualAnywhere:
    case RecipeType.ManualInside:
    case RecipeType.ManualOutside:
      return "small_next.gif";
    case RecipeType.Workshop:
    case RecipeType.WorkshopShaman:
    case RecipeType.WorkshopTech:
      return "small_refine.gif";
  }
}

export const insertBetterTooltips = (node: HTMLElement) => {
  if (!store["better-tooltips"]) return;

  if (
    node.classList.contains("tooltip") && node.classList.contains("item")
  ) {
    const existing = node.querySelector(".zen-better-tooltip");
    if (existing) return;

    const tooltip = document.createElement("div");
    tooltip.classList.add("zen-better-tooltip");

    const item = findItem(node);
    if (!item) return;

    const itemRecipes = findRecipes(item);
    if (!itemRecipes.length) return;

    console.log(itemRecipes);

    const recipesTable = document.createElement("table");
    const recipesBody = document.createElement("tbody");
    recipesTable.append(recipesBody);

    itemRecipes.forEach((recipe) => {
      const recipeLine = document.createElement("tr");
      const ingredientsCell = document.createElement("td");
      ingredientsCell.classList.add("ingredients");

      recipe.in.forEach((inItem) => {
        const wrapper = document.createElement("div");
        ingredientsCell.append(wrapper);
        const ingredient = document.createElement("img");
        ingredient.src = `${ASSETS}/icons/item/${items[inItem.item].icon}.gif`;
        ingredient.alt = items[inItem.item].name[store["hordes-lang"]];

        // Highlight the ingredient if it's the current item
        if (inItem.item === item.id) {
          ingredient.classList.add("highlight");
        }

        wrapper.append(ingredient);
      });

      recipeLine.append(ingredientsCell);

      const actionCell = document.createElement("td");
      actionCell.classList.add("action");
      recipeLine.append(actionCell);
      const icon = document.createElement("img");
      icon.src = `${ASSETS}/icons/${getRecipeTypeIcon(recipe.type)}`;
      icon.alt = "→";
      actionCell.append(icon);

      const outputCell = document.createElement("td");
      outputCell.classList.add("output");

      recipe.out.forEach((outItem) => {
        const wrapper = document.createElement("div");
        outputCell.append(wrapper);
        const output = document.createElement("img");
        output.src = `${ASSETS}/icons/item/${items[outItem.item].icon}.gif`;
        output.alt = items[outItem.item].name[store["hordes-lang"]];

        // Highlight the ingredient if it's the current item
        if (outItem.item === item.id) {
          output.classList.add("highlight");
        }

        if (outItem.odds) {
          const totalOdds = recipe.out.reduce((acc, out) => acc + (out.odds ?? 0), 0);
          const odds = Math.round((outItem.odds / totalOdds) * 100);
          wrapper.setAttribute('data-odds', `${odds}%`);
        }

        wrapper.append(output);
        outputCell.append(wrapper);
      });

      recipeLine.append(outputCell);
      recipesTable.append(recipeLine);
    });

    tooltip.append(recipesTable);
    node.append(tooltip);
  }
};
