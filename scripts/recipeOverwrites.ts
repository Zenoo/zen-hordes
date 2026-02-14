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
    soulYellowRecipe.rewards = ["r_mystic2_#00"];
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

  // Improvised hacksaw 15% break chance
  recipes.push({
    type: RecipeType.Workshop,
    in: [{ item: "saw_tool_temp_#00" }],
    out: [
      { item: "saw_tool_temp_#00", odds: 85 },
      { item: "saw_tool_temp_#00", odds: 15, broken: true },
    ],
  });

  // Replace duplicated CHAINSAW_EMPTY with a single ManualAnywhere recipe
  const chainsawRecipe = recipes.find(
    (recipe) =>
      recipe.in[0]?.item === "chainsaw_part_#00" &&
      recipe.out[0]?.item === "chainsaw_empty_#00"
  );

  if (chainsawRecipe) {
    recipes = recipes.filter(
      (recipe) =>
        !(
          recipe.in[0]?.item === "chainsaw_part_#00" &&
          recipe.out[0]?.item === "chainsaw_empty_#00"
        )
    );

    recipes.push({
      type: RecipeType.ManualAnywhere,
      in: chainsawRecipe.in,
      out: chainsawRecipe.out,
      // Add picto to CHAINSAW_EMPTY recipe
      rewards: ["r_tronco_#00"],
    });
  }

  // Add picto to WATERGUN_OPT_EMPTY recipe
  const watergunRecipe = recipes.find(
    (recipe) =>
      recipe.type === RecipeType.ManualAnywhere &&
      recipe.in[0]?.item === "watergun_opt_part_#00" &&
      recipe.out[0]?.item === "watergun_opt_empty_#00"
  );

  if (watergunRecipe) {
    watergunRecipe.rewards = ["r_watgun_#00"];
  }

  // Add picto to PILEGUN_UP_EMPTY recipe
  const pilegunRecipe = recipes.find(
    (recipe) =>
      recipe.type === RecipeType.ManualAnywhere &&
      recipe.in[0]?.item === "pilegun_upkit_#00" &&
      recipe.out[0]?.item === "pilegun_up_empty_#00"
  );

  if (pilegunRecipe) {
    pilegunRecipe.rewards = ["r_batgun_#00"];
  }

  // Add picto to BIG_PGUN_EMPTY recipe
  const bigPilegunRecipe = recipes.find(
    (recipe) =>
      recipe.type === RecipeType.ManualAnywhere &&
      recipe.in[0]?.item === "big_pgun_part_#00" &&
      recipe.out[0]?.item === "big_pgun_empty_#00"
  );
  if (bigPilegunRecipe) {
    bigPilegunRecipe.rewards = ["r_batgun_#00"];
  }

  return recipes;
};
