// These overwrites are needed since
// the source does not contain accurate data

import { Item, ItemActionEffectType, ItemActionType } from "./generateData";

const survivalistBookChances = [
  { period: '1-4', odds: 100 },
  { period: '5-9', odds: 85 },
  { period: '10-12', odds: 80 },
  { period: '13-14', odds: 70 },
  { period: '15-19', odds: 60 },
  { period: '20-99', odds: 50 },
];

export const overwriteItemData = (items: Record<string, Item>) => {
  for (const item of Object.values(items)) {
    switch (item.id) {
      case 'lpoint_#00': {
        // The action to fill it up is added as a recipe instead
        item.actions = [];
        break;
      }
      case 'surv_book_#00': {
        // Book success chances
        item.actions = [
          {
            type: ItemActionType.Drink,
            conditions: [],
            effects: survivalistBookChances.map((data => ({
              type: ItemActionEffectType.AddStatus,
              value: "hasdrunk",
              count: data.period,
              odds: data.odds,
            }))),
          },
          {
            type: ItemActionType.Eat,
            conditions: [],
            effects: survivalistBookChances.map((data => ({
              type: ItemActionEffectType.AddStatus,
              value: "haseaten",
              count: data.period,
              odds: data.odds,
            }))),
          }
        ];
        break;
      }
    }
  }
};
