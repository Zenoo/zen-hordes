// These overwrites are needed since
// the source does not contain accurate data

import {
  Item,
  ItemActionCondition,
  ItemActionEffectType,
  ItemActionType,
} from "./generateData";

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
              odds: 99,
            },
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
        item.actions.push(
          ...[
            {
              type: ItemActionType.Use,
              conditions: [],
              effects: [
                {
                  type: ItemActionEffectType.EP,
                  value: 8,
                },
                {
                  type: ItemActionEffectType.AddStatus,
                  value: "thirst1",
                },
              ],
            },
            {
              type: ItemActionType.Use,
              conditions: [ItemActionCondition.Thirsty],
              effects: [
                {
                  type: ItemActionEffectType.EP,
                  value: 8,
                },
                {
                  type: ItemActionEffectType.AddStatus,
                  value: "thirst2",
                },
              ],
            },
            {
              type: ItemActionType.Use,
              conditions: [ItemActionCondition.Dehydrated],
              effects: [
                {
                  type: ItemActionEffectType.EP,
                  value: 8,
                },
              ],
            },
          ]
        );
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
            },
          ],
        });
        // info
        item.info = {
          en: "Usable once a day. Not usable if exhausted.",
          fr: "Utilisable une fois par jour. Non utilisable si épuisé.",
          de: "Einmal täglich verwendbar. Nicht verwendbar, wenn erschöpft.",
          es: "Utilizable una vez al día. No utilizable si está agotado.",
        };
        break;
      }
      case "flag_#00": {
        // info
        item.info = {
          en: "All citizens who have used the flag receive a penalty until next morning: 2.5% of the zombies attacking the citizens will get directed to their house instead.",
          fr: "Tous les citoyens qui ont utilisé le drapeau reçoivent une pénalité jusqu'au matin suivant : 2,5 % des zombies attaquant les citoyens seront dirigés vers leur maison à la place.",
          de: "Alle Bürger, die die Flagge benutzt haben, erhalten bis zum nächsten Morgen eine Strafe: 2,5 % der Zombies, die die Bürger angreifen, werden stattdessen zu ihrem Haus geleitet.",
          es: "Todos los ciudadanos que hayan usado la bandera reciben una penalización hasta la mañana siguiente: el 2,5% de los zombis que atacan a los ciudadanos serán dirigidos a su casa en su lugar.",
        };
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

        // info
        item.info = {
          en: "Daily {{EP}} gain increased by 2. Items giving at least 4{{AP}} give 2 additional {{EP}}.",
          fr: "Gain quotidien de {{EP}} augmenté de 2. Les objets donnant au moins 4{{AP}} donnent 2 {{EP}} supplémentaires.",
          de: "Täglicher {{EP}}-Gewinn um 2 erhöht. Gegenstände, die mindestens 4{{AP}} geben, geben zusätzlich 2 {{EP}}.",
          es: "Aumento diario de {{EP}} en 2. Los objetos que dan al menos 4{{AP}} dan 2 {{EP}} adicionales.",
        };
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

        // info
        item.info = {
          en: "Daily {{EP}} gain increased by 1. Items giving at least 4{{AP}} give 1 additional {{EP}}.",
          fr: "Gain quotidien de {{EP}} augmenté de 1. Les objets donnant au moins 4{{AP}} donnent 1 {{EP}} supplémentaire.",
          de: "Täglicher {{EP}}-Gewinn um 1 erhöht. Gegenstände, die mindestens 4{{AP}} geben, geben zusätzlich 1 {{EP}}.",
          es: "Aumento diario de {{EP}} en 1. Los objetos que dan al menos 4{{AP}} dan 1 {{EP}} adicional.",
        };
        break;
      }
      case "noodle_prints_#00":
      case "noodle_prints_#01":
      case "noodle_prints_#02": {
        // Eating instant blanks gives 6 AP
        const eatEffect = item.actions
          .find((action) => action.type === ItemActionType.Eat)
          ?.effects.find((effect) => effect.type === ItemActionEffectType.AP);

        if (eatEffect) {
          eatEffect.value = 6;
        }
        break;
      }
      case "alarm_1_#00": {
        // Use
        item.actions.push({
          type: ItemActionType.Use,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.AP,
              value: 1,
            },
            {
              type: ItemActionEffectType.CreateItem,
              value: "alarm_off_#00",
            },
          ],
        });

        // info
        item.info = {
          en: "Automatically used during the attack if equipped.",
          fr: "Utilisé automatiquement pendant l'attaque s'il est équipé.",
          de: "Automatisch verwendet während des Angriffs, wenn es ausgestattet ist.",
          es: "Utilizado automáticamente durante el ataque si está equipado.",
        };
        break;
      }
      case "alarm_2_#00": {
        // Use
        item.actions.push({
          type: ItemActionType.Use,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.AP,
              value: 1,
            },
            {
              type: ItemActionEffectType.CreateItem,
              value: "alarm_1_#00",
            },
          ],
        });

        // info
        item.info = {
          en: "Automatically used during the attack if equipped.",
          fr: "Utilisé automatiquement pendant l'attaque s'il est équipé.",
          de: "Automatisch verwendet während des Angriffs, wenn es ausgestattet ist.",
          es: "Utilizado automáticamente durante el ataque si está equipado.",
        };
        break;
      }
      case "alarm_3_#00": {
        // Use
        item.actions.push({
          type: ItemActionType.Use,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.AP,
              value: 1,
            },
            {
              type: ItemActionEffectType.CreateItem,
              value: "alarm_2_#00",
            },
          ],
        });

        // info
        item.info = {
          en: "Automatically used during the attack if equipped.",
          fr: "Utilisé automatiquement pendant l'attaque s'il est équipé.",
          de: "Automatisch verwendet während des Angriffs, wenn es ausgestattet ist.",
          es: "Utilizado automáticamente durante el ataque si está equipado.",
        };
        break;
      }
      case "xmas_gift_#01": {
        // Death
        item.actions.push({
          type: ItemActionType.Death,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.GetPicto,
              value: "r_decofeist_#00",
            },
          ],
        });
        break;
      }
      case "pumpkin_tasty_#00": {
        // Use
        item.actions.push({
          type: ItemActionType.Eat,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.AP,
              value: 7,
            },
          ],
        });

        // info
        item.info = {
          en: "Increase a watchman's safety by 1%.",
          fr: "Augmente la sécurité d'un veilleur de 1%.",
          de: "Erhöht die Sicherheit eines Wächters um 1%.",
          es: "Aumenta la seguridad de un vigilante en un 1%.",
        };
        break;
      }
      case "april_drug_#00": {
        // info
        item.info = {
          en: "The infection is triggered after the next attack.",
          fr: "L'infection se déclenche après la prochaine attaque.",
          de: "Die Infektion wird nach dem nächsten Angriff ausgelöst.",
          es: "La infección se desencadena después del siguiente ataque.",
        };
        break;
      }
      case "alarm_on_#00": {
        // Unavailable
        item.available = false;
        break;
      }
      case "christmas_candy_#00": {
        // Eating effects
        const eatAction = item.actions.find(
          (action) => action.type === ItemActionType.Eat
        );

        if (eatAction) {
          eatAction.effects = [
            {
              type: ItemActionEffectType.GetPicto,
              value: "r_cobaye_#00"
            },
            {
              type: ItemActionEffectType.EP,
              value: 3
            },
            {
              type: ItemActionEffectType.AP,
              value: 8
            },
            {
              type: ItemActionEffectType.AddStatus,
              value: "terror",
              odds: 41
            },
            {
              type: ItemActionEffectType.AddStatus,
              value: "infection",
              odds: 25
            },
            {
              type: ItemActionEffectType.AddStatus,
              value: "addict",
              odds: 15
            },
            {
              type: ItemActionEffectType.Death,
              odds: 2
            }
          ];
        }
        break;
      }
    }
  }
};
