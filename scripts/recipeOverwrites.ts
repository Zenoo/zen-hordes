// These overwrites are needed since
// the source does not contain accurate data

import { Item, Recipe, RecipeType } from "./generateData";

export const overwriteRecipeData = (
  recipes: Recipe[],
  items: Record<number, Item>
) => {
  // Noodle prints recipe
  recipes.push({
    type: RecipeType.ExplorableRuinDoor,
    in: [{ item: "food_noodles_#00" }, { item: "pharma_#00" }],
    out: [{ item: "noodle_prints_#00" }],
  });
  recipes.push({
    type: RecipeType.ExplorableRuinDoor,
    in: [{ item: "food_noodles_#00" }, { item: "pharma_#00" }],
    out: [{ item: "noodle_prints_#01" }],
  });
  recipes.push({
    type: RecipeType.ExplorableRuinDoor,
    in: [{ item: "food_noodles_#00" }, { item: "pharma_#00" }],
    out: [{ item: "noodle_prints_#02" }],
  });

  // Crow garland
  recipes.push({
    type: RecipeType.ManualInside,
    in: [{ item: "xmas_gift_#00" }],
    out: [{ item: "xmas_gift_#01" }],
  });

  // Toxin recipes
  recipes.push(
    ...Object.values(items)
      .filter((item) => item.categories.includes("Poisonable"))
      .map((item) => ({
        type: RecipeType.ManualAnywhere,
        in: [{ item: item.id }, { item: "infect_poison_#00" }],
        out: [{ item: item.id, infected: true }],
      }))
  );

  // Add picto to SOUL_YELLOW recipe
  const soulYellowRecipe = recipes.find(
    (recipe) =>
      recipe.type === RecipeType.WorkshopShaman &&
      recipe.in[0]?.item === "soul_blue_#00" &&
      recipe.out[0]?.item === "soul_yellow_#00"
  );

  if (soulYellowRecipe) {
    soulYellowRecipe.pictos = ["r_mystic2_#00"];
  }

  // Prints recipe
  recipes.push({
    type: RecipeType.ExplorableRuinDoor,
    in: [{ item: "keymol_#00" }],
    out: [{ item: "prints_#00" }],
  });
  recipes.push({
    type: RecipeType.ExplorableRuinDoor,
    in: [{ item: "keymol_#00" }],
    out: [{ item: "prints_#01" }],
  });
  recipes.push({
    type: RecipeType.ExplorableRuinDoor,
    in: [{ item: "keymol_#00" }],
    out: [{ item: "prints_#02" }],
  });

  // Poison recipes
  recipes.push(
    ...Object.values(items)
      .filter((item) => item.categories.includes("Poisonable"))
      .map((item) => ({
        type: RecipeType.ManualAnywhere,
        in: [{ item: item.id }, { item: "poison_#00" }],
        out: [{ item: item.id, poisoned: true }],
      }))
  );
};
