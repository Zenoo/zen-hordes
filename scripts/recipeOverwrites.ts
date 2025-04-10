// These overwrites are needed since
// the source does not contain accurate data

import { Item, Recipe, RecipeType } from "./generateData";

export const overwriteRecipeData = (
  recipes: Recipe[],
  items: Record<number, Item>
) => {
  // Add laser 2-4 charges output
  recipes.push({
    type: RecipeType.ManualAnywhere,
    in: [{ item: "lpoint_#00" }, { item: "pile_#00" }],
    out: [
      { item: "lpoint2_#00", odds: 1 },
      { item: "lpoint3_#00", odds: 1 },
      { item: "lpoint4_#00", odds: 1 },
    ],
  });

  // Add cello box drops
  recipes.push({
    type: RecipeType.ManualAnywhere,
    in: [{ item: "cello_box_#00" }],
    out: [
      { item: "gun_#00", odds: 1 },
      { item: "machine_gun_#00", odds: 1 },
      { item: "knife_#00", odds: 1 },
      { item: "money_#00", odds: 1 },
      { item: "pet_cat_#00", odds: 1 },
    ],
  });

  // Add soccer recipe
  recipes.push({
    type: RecipeType.ManualAnywhere,
    in: [{ item: "soccer_part_#00" }, { item: "rustine_#00" }],
    out: [{ item: "soccer_#00" }],
  });

  // Add bike recipe
  recipes.push({
    type: RecipeType.ManualAnywhere,
    in: [
      { item: "rustine_#00" },
      { item: "chain_#00" },
      { item: "metal_#00" },
      { item: "bike_part_#00" },
    ],
    out: [{ item: "bike_#00" }],
  });

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

  // Add first aid kit drops
  recipes.push({
    type: RecipeType.ManualAnywhere,
    in: [{ item: "medic_#00" }],
    out: [
      { item: "xanax_#00", odds: 37 },
      { item: "drug_water_#00", odds: 37 },
      { item: "water_cleaner_#00", odds: 37 },
      { item: "ryebag_#00", odds: 37 },
      { item: "disinfect_#00", odds: 28 },
      { item: "pharma_#00", odds: 20 },
      { item: "cyanure_#00", odds: 2 },
      { item: "drug_#00", odds: 1 },
      { item: "bandage_#00", odds: 1 },
    ],
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
};
