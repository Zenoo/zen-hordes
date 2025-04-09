// These overwrites are needed since
// the source does not contain accurate data

import { Item, ItemActionCondition, ItemActionEffectType, ItemActionType } from "./generateData";

const survivalistBookChances = [
  { period: "1-4", odds: 100 },
  { period: "5-9", odds: 85 },
  { period: "10-12", odds: 80 },
  { period: "13-14", odds: 70 },
  { period: "15-19", odds: 60 },
  { period: "20-99", odds: 50 },
];

export const overwriteItemData = (items: Record<string, Item>) => {
  for (const item of Object.values(items)) {
    switch (item.id) {
      case "lpoint_#00": {
        // The action to fill it up is added as a recipe instead
        item.actions = [];
        break;
      }
      case "surv_book_#00": {
        // Book success chances
        item.actions = [
          {
            type: ItemActionType.Drink,
            conditions: [],
            effects: survivalistBookChances.map((data) => ({
              type: ItemActionEffectType.AddStatus,
              value: "hasdrunk",
              count: data.period,
              odds: data.odds,
            })),
          },
          {
            type: ItemActionType.Eat,
            conditions: [],
            effects: survivalistBookChances.map((data) => ({
              type: ItemActionEffectType.AddStatus,
              value: "haseaten",
              count: data.period,
              odds: data.odds,
            })),
          },
        ];
        break;
      }
      case "cello_box_#00": {
        // Open box
        item.actions.push({
          type: ItemActionType.Open,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.CreateItem,
              value: "gun_#00",
              odds: 1,
            },
            {
              type: ItemActionEffectType.CreateItem,
              value: "machine_gun_#00",
              odds: 1,
            },
            {
              type: ItemActionEffectType.CreateItem,
              value: "knife_#00",
              odds: 1,
            },
            {
              type: ItemActionEffectType.CreateItem,
              value: "money_#00",
              odds: 1,
            },
            {
              type: ItemActionEffectType.CreateItem,
              value: "pet_cat_#00",
              odds: 1,
            },
          ],
        });
        break;
      }
      case "photo_4_#00": {
        // Use
        item.actions.push({
          type: ItemActionType.Use,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.CreateItem,
              value: "photo_3_#00",
            },
            {
              type: ItemActionEffectType.GetEscapeTime,
              value: 180,
              odds: 99
            }
          ],
        });

        // Use on a ruin
        item.actions.push({
          type: ItemActionType.Use,
          conditions: [ItemActionCondition.OnARuin],
          effects: [
            {
              type: ItemActionEffectType.CreateItem,
              value: "bplan_c_#00",
            },
          ],
        });
        break;
      }
      case "quantum_#00": {
        // Use
        item.actions.push({
          type: ItemActionType.Use,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.EP,
              value: 8
            },
            {
              type: ItemActionEffectType.AddStatus,
              value: "thirst1",
            }
          ],
        });
        break;
      }
      case "soccer_#00": {
        // Use
        item.actions.push({
          type: ItemActionType.Use,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.AP,
              value: 1,
              odds: 17,
            },
            {
              type: ItemActionEffectType.CreateItem,
              value: "soccer_part_#00",
              odds: 7,
            }
          ],
        });
        break;
      }
      case "flag_#00": {
        // info
        item.info = {
          en: "All citizens who have used the flag receive a penalty until next morning: 2.5% of the zombies attacking the citizens will get directed to their house instead.",
          fr: "Tous les citoyens qui ont utilisé le drapeau reçoivent une pénalité jusqu'au matin suivant : 2,5 % des zombies attaquant les citoyens seront dirigés vers leur maison à la place.",
          de: "Alle Bürger, die die Flagge benutzt haben, erhalten bis zum nächsten Morgen eine Strafe: 2,5 % der Zombies, die die Bürger angreifen, werden stattdessen zu ihrem Haus geleitet.",
          es: "Todos los ciudadanos que hayan usado la bandera reciben una penalización hasta la mañana siguiente: el 2,5% de los zombis que atacan a los ciudadanos serán dirigidos a su casa en su lugar.",
        }
        break;
      }
      case "bike_#00": {
        // Use
        item.actions.push({
          type: ItemActionType.Use,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.EP,
              value: 2,
            },
          ],
        });
        break;
      }
      case "shoe_#00": {
        // Use
        item.actions.push({
          type: ItemActionType.Use,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.EP,
              value: 1,
            },
          ],
        });
        break;
      }
    }
  }
};
