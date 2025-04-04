// These overwrites are needed since
// the source does not contain accurate data

import { Recipe, RecipeType } from "./generateData";

export const overwriteRecipeData = (recipes: Recipe[]) => {
  // Add laser 2-4 charges output
  recipes.push({
    type: RecipeType.ManualAnywhere,
    in: [
      {item: "lpoint_#00"},
      {item: "pile_#00"},
    ],
    out: [
      {item: "lpoint2_#00", odds: 1},
      {item: "lpoint3_#00", odds: 1},
      {item: "lpoint4_#00", odds: 1},
    ],
  })
};
