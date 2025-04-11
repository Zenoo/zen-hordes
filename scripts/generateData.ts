import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import {
  Api,
  JSONBuildingPrototypeObject,
  JSONItemPrototypeObject,
  JSONPictoPrototypeObject,
  JSONRuinPrototypeObject,
} from "./ApiTypes";
import { exportActionEffects } from "./exportActionEffects";
import { overwriteItemData } from "./itemOverwrites";
import { overwriteRecipeData } from "./recipeOverwrites";
import { overwriteRuinData } from "./ruinOverwrites";

const CONFIG = {
  callApi: false,
};

enum Lang {
  EN = "en",
  FR = "fr",
  ES = "es",
  DE = "de",
}

export enum ItemActionType {
  Eat,
  Drink,
  Open,
  Use,
  Death,
  Steal,
}

export enum ItemActionCondition {
  Ghoul,
  BrokenItem,
  Technician,
  BoxOpener,
  OnARuin,
  Thirsty,
  Dehydrated,
  HaveBattery,
  Shaman,
}

export enum ItemActionEffectType {
  AP,
  SP,
  MP,
  CP,
  Ghoulify,
  UnGhoulify,
  Infect,
  CreateItem,
  ReduceGhoulHunger,
  GetPicto,
  AddWaterToWell,
  Defense,
  UnlockBuilding,
  RemoveRuinDebris,
  GetEscapeTime,
  Kill,
  HomeDefense,
  HomeStorage,
  RemoveStatus,
  AddStatus,
  Death,
  EP,
}

type ItemActionEffect = {
  type: ItemActionEffectType;
  value?: number | string;
  count?: number | string;
  odds?: number;
};

type ItemAction = {
  type: ItemActionType;
  conditions: ItemActionCondition[];
  effects: ItemActionEffect[];
};

export type Item = {
  id: string;
  numericalId: number;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  info?: Record<Lang, string>;
  categories: string[];
  icon: string;
  decoration: number;
  heavy: boolean;
  watchPoints: number;
  event?: string;
  available?: boolean;
  actions: ItemAction[];
};

const sanitizeItemId = (item?: Item | string) => {
  const sanitize = (id: string) =>
    id
      .replace("_#00", "")
      .replace(/_#(\d+)/, "_$1")
      .toUpperCase();

  if (typeof item === "string") {
    return sanitize(item);
  }

  if (!item) {
    throw new Error("Item is undefined");
  }

  return sanitize(item.id);
};

const sanitizePictoId = (picto?: Picto) => {
  if (!picto) {
    throw new Error("Picto is undefined");
  }

  return picto.id
    .replace(/^r_/, "")
    .replace("_#00", "")
    .replace(/_#(\d+)/, "_$1")
    .toUpperCase();
};

const sanitizeItemCategory = (category?: string) => {
  if (!category) {
    throw new Error("Category is undefined");
  }

  return category.replace(/ /g, "_");
};

const sanitizeText = (text: string) => {
  return text.replace(/"/g, '\\"');
};

const getItemByUid = (items: Record<string, Item>, item: string) => {
  const found = items[item];

  if (!found) {
    throw new Error(`Item with id ${item} not found`);
  }

  return found;
};

const languages: Lang[] = [Lang.EN, Lang.FR, Lang.DE, Lang.ES];

const generateItems = async () => {
  const items: Record<string, Item> = {};

  const filePath = path.join(__dirname, "data", "items.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8")) as Record<
    string,
    Required<JSONItemPrototypeObject>
  >;

  Object.entries(data).forEach(([id, itemData]) => {
    // All languages are available
    if (
      typeof itemData.cat !== "object" ||
      typeof itemData.name !== "object" ||
      typeof itemData.desc !== "object"
    ) {
      throw new Error(`Item with id ${id} is missing translations`);
    }

    items[id] = {
      id,
      numericalId: itemData.id,
      name: {
        [Lang.EN]: itemData.name.en ?? "",
        [Lang.FR]: itemData.name.fr ?? "",
        [Lang.DE]: itemData.name.de ?? "",
        [Lang.ES]: itemData.name.es ?? "",
      },
      description: {
        [Lang.EN]: itemData.desc.en ?? "",
        [Lang.FR]: itemData.desc.fr ?? "",
        [Lang.DE]: itemData.desc.de ?? "",
        [Lang.ES]: itemData.desc.es ?? "",
      },
      categories: itemData.cat.en
        ? [sanitizeItemCategory(itemData.cat.en)]
        : [],
      icon: /item\/(.+)\..+\.gif/.exec(itemData.img)?.[1] ?? "",
      decoration: itemData.deco,
      heavy: itemData.heavy,
      watchPoints: itemData.guard,
      actions: [],
    };
  });

  // Export actions from the main repo
  execSync("php scripts/exportActions.php", { stdio: "inherit" });

  const actionsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "actions.json"), "utf-8")
  ) as {
    items: Partial<Record<string, string[]>>;
    results: {
      group: Partial<Record<string, [[string], number][]>>;
    };
    actions: Partial<
      Record<
        string,
        {
          label: string;
          priority?: number;
          cover?: boolean;
          at00?: boolean;
          allow_when_terrorized?: boolean;
          poison?: number;
          meta: string[];
          result: (
            | string
            | {
                group: string | [string[] | string, number][];
              }
          )[];
          escort_message_key?: string;
          escort_message?: string;
          message_key?: string;
          message?: string;
          target?: {
            broken?: boolean;
            type?: number;
            property?: string;
            poison?: boolean;
          };
          renderer?: string;
          tooltip?: string;
          confirm?: boolean;
          confirmMsg?: string;
        }
      >
    >;
  };

  // Export action effects from the main repo
  const effectsData = await exportActionEffects();

  // Get buildings data
  const buildingsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "buildings.json"), "utf-8")
  ) as Partial<Record<string, JSONBuildingPrototypeObject>>;

  // Get action type from action meta
  const getActionType = (
    actionId: string,
    action: (typeof actionsData.actions)[keyof typeof actionsData.actions]
  ) => {
    if (action?.meta.includes("eat_ap")) {
      return ItemActionType.Eat;
    }
    if (
      actionId.startsWith("potion_") ||
      action?.result.some((result) => String(result).startsWith("drink_")) ||
      actionId === "water_g" ||
      (actionId.startsWith("watercan") && actionId.endsWith("_g"))
    ) {
      return ItemActionType.Drink;
    }
    if (actionId.startsWith("open_")) {
      return ItemActionType.Open;
    }

    return ItemActionType.Use;
  };

  // Get action conditions from action meta
  const getActionConditions = (
    action: (typeof actionsData.actions)[keyof typeof actionsData.actions]
  ) => {
    const conditions: ItemActionCondition[] = [];

    if (action?.meta.includes("profession_tech")) {
      conditions.push(ItemActionCondition.Technician);
    }
    if (action?.meta.includes("role_ghoul")) {
      conditions.push(ItemActionCondition.Ghoul);
    }
    if (action?.meta.includes("have_battery")) {
      conditions.push(ItemActionCondition.HaveBattery);
    }
    if (
      [
        "have_can_opener_hd",
        "have_can_opener",
        "have_box_opener_hd",
        "have_box_opener",
      ].some((condition) => action?.meta.includes(condition))
    ) {
      conditions.push(ItemActionCondition.BoxOpener);
    }

    return conditions;
  };

  // Add effect from its name
  const addEffect = (
    item: Item,
    effects: ItemActionEffect[],
    effectName: string,
    _odds?: number
  ) => {
    const odds = _odds ? { odds: _odds } : {};

    // AP regen
    const apRegen =
      /plus_(\d+)ap(?:_\d+)?|plus_ap(\d+)(?:_\d+)?|just_ap(\d+)|eat_ap(\d+)(?:_\w+)?/.exec(
        effectName
      );
    if (apRegen) {
      const ap = apRegen[1] ?? apRegen[2] ?? apRegen[3] ?? apRegen[4];
      effects.push({
        type: ItemActionEffectType.AP,
        value: +(ap ?? 0),
        ...odds,
      });
      return;
    } else if (effectName === "just_ap_sw") {
      effects.push({
        type: ItemActionEffectType.AP,
        value: 0,
        ...odds,
      });
      effects.push({
        type: ItemActionEffectType.SP,
        value: 6,
        ...odds,
      });
      return;
    } else if (effectName === "drink_ap_1") {
      effects.push({
        type: ItemActionEffectType.AP,
        value: 6,
        ...odds,
      });
      return;
    }

    // AP use
    const apUse = /minus_(\d+)ap/.exec(effectName);
    if (apUse) {
      effects.push({
        type: ItemActionEffectType.AP,
        value: -+(apUse[1] ?? 0),
        ...odds,
      });
      return;
    }

    // MP Use
    const mpUse = /minus_(\d+)mp/.exec(effectName);
    if (mpUse) {
      effects.push({
        type: ItemActionEffectType.MP,
        value: -+(mpUse[1] ?? 0),
        ...odds,
      });
      return;
    }

    // CP Use
    const cpUse = /minus_(\d+)cp/.exec(effectName);
    if (cpUse) {
      effects.push({
        type: ItemActionEffectType.CP,
        value: -+(cpUse[1] ?? 0),
        ...odds,
      });
      return;
    }

    // Infect
    if (effectName === "infect") {
      effects.push({
        type: ItemActionEffectType.Infect,
        ...odds,
      });
      return;
    }

    // Special effects
    switch (effectName) {
      case "consume_matches": {
        effects.push({
          type: ItemActionEffectType.CreateItem,
          value: "lights_#00",
          odds: 100 - (_odds ?? 100),
        });
        return;
      }
      case "consume_item": {
        if (_odds) {
          effects.push({
            type: ItemActionEffectType.CreateItem,
            value: item.id,
            odds: 100 - (_odds ?? 100),
          });
        }
        return;
      }
      case "produce_watercan0": {
        effects.push({
          type: ItemActionEffectType.CreateItem,
          value: "water_can_empty_#00",
          ...odds,
        });
        return;
      }
      case "heal_ghoul": {
        effects.push({
          type: ItemActionEffectType.UnGhoulify,
          ...odds,
        });
        return;
      }
    }

    // Check if the effect is known from the exported data
    if (effectsData[effectName]) {
      switch (effectsData[effectName].type) {
        case "picto": {
          const data =
            typeof effectsData[effectName].data === "string"
              ? [effectsData[effectName].data]
              : (effectsData[effectName].data as string[]);

          data.forEach((picto) => {
            if (!picto.includes("'")) return;

            effects.push({
              type: ItemActionEffectType.GetPicto,
              value: picto.replace(/'/g, ""),
              ...odds,
            });
          });
          break;
        }
        case "well": {
          const min = Array.isArray(effectsData[effectName].data)
            ? Number(effectsData[effectName].data[0])
            : Number(effectsData[effectName].data);
          const max = Array.isArray(effectsData[effectName].data)
            ? Number(effectsData[effectName].data[1])
            : Number(effectsData[effectName].data);

          effects.push({
            type: ItemActionEffectType.AddWaterToWell,
            value: `${min}-${max}`,
            ...odds,
          });
          break;
        }
        case "soulDefense": {
          effects.push({
            type: ItemActionEffectType.Defense,
            value: Number(effectsData[effectName].data),
            ...odds,
          });
          break;
        }
        case "unlockBlueprint": {
          const buildings = Array.isArray(effectsData[effectName].data)
            ? effectsData[effectName].data.map((b) => String(b))
            : Object.keys(buildingsData).filter(
                (buildingId) =>
                  buildingsData[buildingId]?.rarity ===
                  effectsData[effectName]?.data
              );
          effects.push(
            ...buildings.map((building) => ({
              type: ItemActionEffectType.UnlockBuilding,
              value: building,
              ...odds,
            }))
          );
          break;
        }
        case "clean": {
          effects.push({
            type: ItemActionEffectType.RemoveRuinDebris,
            value: (effectsData[effectName].data as number[]).join("-"),
            ...odds,
          });
          break;
        }
        case "kills": {
          effects.push({
            type: ItemActionEffectType.Kill,
            value: Array.isArray(effectsData[effectName].data)
              ? effectsData[effectName].data.join("-")
              : String(effectsData[effectName].data),
            ...odds,
          });
          break;
        }
        case "defense": {
          effects.push({
            type: ItemActionEffectType.HomeDefense,
            value: Number(effectsData[effectName].data),
            ...odds,
          });
          break;
        }
        case "storage": {
          effects.push({
            type: ItemActionEffectType.HomeStorage,
            value: Number(effectsData[effectName].data),
            ...odds,
          });
          break;
        }
        case "morphSource": {
          if (
            String(effectsData[effectName].data).startsWith("equip:") ||
            String(effectsData[effectName].data).startsWith("poison:")
          ) {
            // Ignore
            break;
          }

          effects.push({
            type: ItemActionEffectType.CreateItem,
            value: String(effectsData[effectName].data).slice(1, -1),
            ...odds,
          });
          break;
        }
        case "removesStatus": {
          effects.push({
            type: ItemActionEffectType.RemoveStatus,
            value: String(effectsData[effectName].data).slice(1, -1),
            ...odds,
          });
          break;
        }
        case "addsStatus": {
          // If array, we have [status, picto]
          if (Array.isArray(effectsData[effectName].data)) {
            effects.push(
              {
                type: ItemActionEffectType.AddStatus,
                value: String(effectsData[effectName].data[0]).slice(1, -1),
                ...odds,
              },
              {
                type: ItemActionEffectType.GetPicto,
                value: String(effectsData[effectName].data[1]).slice(1, -1),
                ...odds,
              }
            );
            break;
          }

          // Ignore some statuses
          const effectData = String(effectsData[effectName].data).slice(1, -1);
          if (["tg_teddy", "tg_betadrug", "tg_sbook"].includes(effectData)) {
            break;
          }

          effects.push({
            type: ItemActionEffectType.AddStatus,
            value: effectData,
            ...odds,
          });
          break;
        }
        case "ghoulHunger": {
          effects.push({
            type: ItemActionEffectType.ReduceGhoulHunger,
            value: Number(effectsData[effectName].data),
            ...odds,
          });
          break;
        }
        case "kill": {
          effects.push({
            type: ItemActionEffectType.Death,
            ...odds,
          });
          break;
        }
        case "ghoul": {
          effects.push({
            type: ItemActionEffectType.Ghoulify,
            odds: (effectsData[effectName].data as number[])[0],
          });
          break;
        }
        case "find_rp": {
          effects.push({
            type: ItemActionEffectType.GetPicto,
            value: "r_rp_#00",
            ...odds,
          });
          break;
        }
        case "spawn": {
          // Create a single item
          if (typeof effectsData[effectName].data === "string") {
            effects.push({
              type: ItemActionEffectType.CreateItem,
              value: effectsData[effectName].data,
              ...odds,
            });
            break;
          }

          // Create multiple items
          const data = effectsData[effectName].data;
          if (Array.isArray(data)) {
            // If { items: string[], odds?: number, count?: number }
            if (data[0]?.items) {
              const totalOdds = data.reduce(
                (acc, innerData) => acc + (innerData.odds ?? 888),
                0
              );

              const grouped = data.reduce<[string, number, number][]>(
                (acc, innerData) => {
                  if (Array.isArray(innerData.items)) {
                    const currentInnerData = innerData as {
                      items: string[];
                      odds?: number;
                      count?: number;
                    };
                    const count = currentInnerData.count ?? 1;
                    const odds = currentInnerData.odds ?? 888;

                    currentInnerData.items.forEach((item) => {
                      const existingItem = acc.find((i) => i[0] === item);
                      const innerOdds =
                        (odds / currentInnerData.items.length / totalOdds) *
                        100;

                      if (existingItem) {
                        existingItem[2] += innerOdds;
                      } else {
                        acc.push([item, count, innerOdds]);
                      }
                    });
                    return acc;
                  }

                  return acc;
                },
                []
              );

              grouped.forEach(([item, count, odds]) => {
                effects.push(
                  ...Array(count)
                    .fill(0)
                    .map(() => ({
                      type: ItemActionEffectType.CreateItem,
                      value: item,
                      odds: Math.round(odds),
                    }))
                );
              });

              break;
            }

            // If string[]
            data.forEach((item) => {
              effects.push({
                type: ItemActionEffectType.CreateItem,
                value: item,
                odds: Math.round((1 / data.length) * 100),
              });
            });
            break;
          }

          // If string
          effects.push({
            type: ItemActionEffectType.CreateItem,
            value: String(data),
            ...odds,
          });
          break;
        }
        case "escape": {
          effects.push({
            type: ItemActionEffectType.GetEscapeTime,
            value: Number(effectsData[effectName].data),
            ...odds,
          });
          break;
        }
        case "chatSilence":
        case "improveLevel":
        case "morphTarget":
        case "consume":
        case "morphsStatus":
        case "count":
        case "effectIndex":
        case "point":
          // Nothing to add, or not linked to an item
          break;
        default: {
          throw new Error(
            `Unknown effect type: ${effectsData[effectName].type}`
          );
        }
      }
    }
  };

  // Get action effects from action result
  const getActionEffects = (
    item: Item,
    action: (typeof actionsData.actions)[keyof typeof actionsData.actions]
  ) => {
    const effects: ItemActionEffect[] = [];

    action?.result.forEach((result) => {
      if (typeof result === "object") {
        if (typeof result.group === "string") {
          // Look up the group name from the exported data
          const group = actionsData.results.group[result.group];
          if (!group) {
            throw new Error(`Group with name ${result.group} not found`);
          }

          const grouped = group.reduce<[string, number][]>(
            (acc, [[effect], odds]) => {
              const existingEffect = acc.find((e) => e[0] === effect);

              if (existingEffect) {
                existingEffect[1] += odds;
              } else {
                acc.push([effect, odds]);
              }

              return acc;
            },
            []
          );

          const totalOdds = grouped.reduce((acc, [, odds]) => acc + odds, 0);
          grouped.forEach(([effect, odds]) => {
            addEffect(
              item,
              effects,
              effect,
              Math.round((odds / totalOdds) * 100)
            );
          });
          return;
        }

        // Transform group into an array of effect/odds
        const grouped = result.group.reduce<[string, number][]>(
          (acc, [groupEffects, odds]) => {
            (typeof groupEffects === "string"
              ? [groupEffects]
              : groupEffects
            ).forEach((effect) => {
              const existingEffect = acc.find((e) => e[0] === effect);

              if (existingEffect) {
                existingEffect[1] += odds;
              } else {
                acc.push([effect, odds]);
              }
            });

            return acc;
          },
          []
        );

        const totalOdds = result.group.reduce((acc, [, odds]) => acc + odds, 0);

        grouped.forEach(([effect, odds]) => {
          addEffect(
            item,
            effects,
            effect,
            Math.round((odds / totalOdds) * 100)
          );
        });
        return;
      }

      addEffect(item, effects, result);
    });

    return effects;
  };

  // Parse item actions
  Object.entries(actionsData.items).forEach(([itemId, actionIds]) => {
    const item = getItemByUid(items, itemId);

    actionIds?.forEach((actionId) => {
      // Actions to ignore
      switch (actionId) {
        case "pumpkin":
        case "open_metalbox_t1":
        case "open_toolbox_t1":
        case "drug_hyd_1":
        case "drug_hyd_2":
          return;
      }

      const actionData = actionsData.actions[actionId];
      if (!actionData) {
        throw new Error(`Action with id ${actionId} not found`);
      }

      const actionType = getActionType(actionId, actionData);
      if (actionType === null) {
        console.log("Missing action type", actionId);
        return;
      }
      const actionConditions = getActionConditions(actionData);
      const actionEffects = getActionEffects(item, actionData);

      if (!actionEffects.length) {
        return;
      }

      // Check if this type of action already exists
      const existingAction = item.actions.find(
        (a) =>
          a.type === actionType &&
          a.conditions.every((c) => actionConditions.includes(c)) &&
          a.conditions.length === actionConditions.length
      );

      // Merge effects if it already exists
      if (existingAction) {
        actionEffects.forEach((effect) => {
          const existingEffect = existingAction.effects.find(
            (e) => e.type === effect.type
          );

          if (existingEffect) {
            return;
          }

          existingAction.effects.push(effect);
        });

        return;
      }

      const action: ItemAction = {
        type: actionType,
        conditions: actionConditions,
        effects: actionEffects,
      };

      item.actions.push(action);
    });
  });

  Object.values(items).forEach((item) => {
    // Add events
    switch (item.id) {
      case "april_drug_#00":
        item.event = "AprilFools";
        break;
      case "pumpkin_raw_#00":
      case "pumpkin_off_#00":
      case "pumpkin_on_#00":
        item.event = "Halloween";
        break;
      case "wood_xmas_#00":
      case "christmas_candy_#00":
      case "christmas_suit_1_#00":
      case "christmas_suit_2_#00":
      case "christmas_suit_3_#00":
      case "christmas_suit_full_#00":
      case "food_xmas_#00":
      case "xmas_gift_#00":
      case "xmas_gift_#01":
      case "sand_ball_#00":
      case "omg_this_will_kill_you_#00":
      case "renne_#00":
        item.event = "Christmas";
        break;
      case "paques_#00":
        item.event = "Easter";
        break;
      case "leprechaun_suit_#00":
      case "hurling_stick_#00":
      case "guiness_#00":
        item.event = "StPatrick";
        break;
      case "chest_christmas_3_#00":
      case "chest_christmas_2_#00":
      case "chest_christmas_1_#00":
        item.event = "NewYear";
    }

    // Add custom categories
    if (item.heavy) {
      item.categories.push("Heavy");
    }

    if (item.watchPoints) {
      item.categories.push("GuardWeapon");
    }

    if (item.decoration) {
      item.categories.push("Decoration");
    }

    if (
      ["bag_#00", "bagxl_#00", "cart_part_#00", "pocket_belt_#00"].includes(
        item.id
      )
    ) {
      item.categories.push("BagExtension");
    }

    if (
      item.actions.some((action) =>
        action.effects.some(
          (effect) => effect.type === ItemActionEffectType.HomeStorage
        )
      )
    ) {
      item.categories.push("ChestExtension");
    }

    if (
      item.actions.some((action) =>
        action.effects.some(
          (effect) =>
            effect.type === ItemActionEffectType.AP && +(effect.value ?? 0) > 0
        )
      )
    ) {
      item.categories.push("APSource");
    }

    if (
      item.actions.some(
        (action) =>
          action.type === ItemActionType.Drink &&
          action.effects.some(
            (effect) =>
              effect.type === ItemActionEffectType.RemoveStatus &&
              effect.value === "thirst1"
          )
      )
    ) {
      item.categories.push("Water");
    }

    if (
      item.actions.some((action) =>
        action.effects.some(
          (effect) =>
            effect.type === ItemActionEffectType.AddStatus &&
            effect.value === "drugged"
        )
      )
    ) {
      item.categories.push("Drug");
    }

    if (
      item.actions.some((action) =>
        action.effects.some(
          (effect) =>
            effect.type === ItemActionEffectType.AddStatus &&
            effect.value === "drunk"
        )
      )
    ) {
      item.categories.push("Alcohol");
    }

    if (
      item.actions.some((action) =>
        action.effects.some(
          (effect) =>
            effect.type === ItemActionEffectType.GetPicto &&
            effect.value === "r_animal_#00"
        )
      )
    ) {
      item.categories.push("Animal");
    }

    if (
      item.actions.some((action) =>
        action.effects.some(
          (effect) => effect.type === ItemActionEffectType.UnlockBuilding
        )
      )
    ) {
      item.categories.push("Blueprint");
    }

    if (
      item.actions.some((action) =>
        action.effects.some(
          (effect) =>
            effect.type === ItemActionEffectType.GetPicto &&
            effect.value === "r_rp_#00"
        )
      )
    ) {
      item.categories.push("RP");
    }

    if (
      [
        "smelly_meat_#00",
        "sheet_#00",
        "table_#00",
        "bed_#00",
        "door_#00",
        "plate_#00",
        "out_def_#00",
        "wood_plate_#00",
        "trestle_#00",
      ].includes(item.id)
    ) {
      item.categories.push("CampingBoost");
    }

    if (
      [
        "banned_note_#00",
        "fruit_sub_part_#00",
        "flesh_part_#00",
        "water_cup_part_#00",
        "fruit_part_#00",
        "pharma_part_#00",
      ].includes(item.id)
    ) {
      item.categories.push("ShunnedItem");
    }

    if (item.event) {
      item.categories.push("Event");
    }

    if (
      item.actions.some((action) =>
        action.effects.some(
          (effect) =>
            effect.type === ItemActionEffectType.GetPicto &&
            effect.value === "r_broken_#00"
        )
      )
    ) {
      item.categories.push("Breakable");
    }

    if (
      [
        "drug_#00",
        "fruit_#00",
        "can_open_#00",
        "vegetable_#00",
        "water_#00",
      ].includes(item.id)
    ) {
      item.categories.push("Poisonable");
    }
  });

  overwriteItemData(items);

  const itemIdEnum = `export enum ItemId {
  ${Object.values(items)
    .map((item) => `${sanitizeItemId(item)} = "${item.id}"`)
    .join(",\n  ")}
}`;

  const itemType = `export type Item = {
  id: ItemId;
  numericalId: number;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  info?: Record<Lang, string>;
  categories: ItemCategory[];
  icon: string;
  decoration: number;
  heavy: boolean;
  watchPoints: number;
  event?: GameEvent;
  available?: boolean;
  actions: ItemAction[];
};`;

  const itemsObject = `export const items: Record<ItemId, Item> = {
  ${Object.values(items)
    .map(
      (item) => `[ItemId.${sanitizeItemId(item)}]: {
    id: ItemId.${sanitizeItemId(item)},
    numericalId: ${item.numericalId},
    name: {
      ${languages
        .map(
          (lang) =>
            `[Lang.${lang.toUpperCase()}]: "${sanitizeText(item.name[lang])}"`
        )
        .join(",\n      ")}
    },
    description: {
      ${languages
        .map(
          (lang) =>
            `[Lang.${lang.toUpperCase()}]: "${sanitizeText(
              item.description[lang]
            )}"`
        )
        .join(",\n      ")}
    },${
      item.info
        ? `\n    info: {\n      ${languages
            .map(
              (lang) =>
                `[Lang.${lang.toUpperCase()}]: "${sanitizeText(
                  item.info?.[lang] ?? ""
                )}"`
            )
            .join(",\n      ")}\n    },`
        : ""
    }
    categories: [${item.categories
      .map((category) => `ItemCategory.${category}`)
      .join(", ")}],
    icon: "${item.icon}",
    decoration: ${item.decoration},
    heavy: ${item.heavy},
    watchPoints: ${item.watchPoints},${
        item.event ? `\n    event: GameEvent.${item.event},` : ""
      }${
        typeof item.available !== "undefined"
          ? `\n    available: ${item.available},`
          : ""
      }
    actions: [
      ${item.actions
        .map(
          (action) => `{
        type: ItemActionType.${ItemActionType[action.type]},
        conditions: [${action.conditions
          .map((c) => `ItemActionCondition.${ItemActionCondition[c]}`)
          .join(", ")}],
        effects: [
          ${action.effects
            .map(
              (effect) => `{
            type: ItemActionEffectType.${ItemActionEffectType[effect.type]}${
                effect.value
                  ? `,\n            value: ${
                      typeof effect.value === "string"
                        ? `"${effect.value}"`
                        : effect.value
                    }`
                  : ""
              }${
                effect.count
                  ? `,\n            count: ${
                      typeof effect.count === "string"
                        ? `"${effect.count}"`
                        : effect.count
                    }`
                  : ""
              }${effect.odds ? `,\n            odds: ${effect.odds}` : ""}
          }`
            )
            .join(",\n          ")}
        ]
      }`
        )
        .join(",\n      ")}
    ]
  }`
    )
    .join(",\n  ")}
};`;

  const output = `${itemIdEnum}

${itemType}

${itemsObject}`;

  fs.writeFileSync(
    path.join(__dirname, "..", "src", "data", "items.ts"),
    output,
    "utf-8"
  );
  console.log("items.ts file has been generated.");

  return items;
};

type ExportedZoneBuildingData = {
  id: number;
  name: string;
  desc: string;
  km_min: number;
  km_max: number;
  explorable: number;
};

export type Ruin = {
  id: number;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  icon: string;
  campingModifier: number;
  spawnChance: number;
  emptyChance: number;
  km: {
    min: number;
    max: number;
  };
  explorable: boolean;
  drops: {
    id: string;
    odds: number;
    event?: number;
  }[];
};

enum GameEvent {
  StPatrick,
  Infective,
  Christmas,
  AprilFools,
  Easter,
  Halloween,
  NewYear,
}

const sanitizeRuinId = (building: Ruin) => {
  // Duplicates
  switch (building.id) {
    case 42:
      return "SMUGGLERS_CACHE";
  }

  return building.name.en
    .replace(/\(|\)/g, "")
    .replace(/[^a-zA-Z0-9]/g, "_")
    .toUpperCase();
};

const generateRuins = (items: Record<number, Item>) => {
  const ruins: Record<number, Ruin> = {};

  languages.forEach((lang) => {
    const filePath = path.join(
      __dirname,
      "data",
      `zone_buildings-${lang}.json`
    );
    const data: Record<string, ExportedZoneBuildingData> = JSON.parse(
      fs.readFileSync(filePath, "utf-8")
    ) as Record<string, ExportedZoneBuildingData>;

    Object.values(data).forEach((ruinData) => {
      if (!ruins[ruinData.id]) {
        ruins[ruinData.id] = {
          id: ruinData.id,
          name: {} as Record<Lang, string>,
          description: {} as Record<Lang, string>,
          icon: "",
          campingModifier: 0,
          spawnChance: 0,
          emptyChance: 0,
          km: {
            min: ruinData.km_min,
            max: ruinData.km_max,
          },
          explorable: ruinData.explorable === 1,
          drops: [],
        };
      }

      const building = ruins[ruinData.id];
      if (!building) {
        throw new Error(`Ruin with id ${ruinData.id} not found`);
      }
      building.name[lang] = ruinData.name.replace(/"/g, '\\"');
      building.description[lang] = ruinData.desc.replace(/"/g, '\\"');
    });
  });

  // Export ruin data from the main repo
  execSync("php scripts/exportZoneBuildings.php", { stdio: "inherit" });

  const ruinsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "zoneBuildings.json"), "utf-8")
  ) as Record<
    string,
    {
      label: string;
      icon: string;
      camping: number;
      chance: number;
      empty: number;
      drops: Record<string, number | [number, number]>;
    }
  >;

  Object.values(ruinsData).forEach((ruinData) => {
    const germanName = ruinData.label;

    const ruin = Object.values(ruins).find((b) => b.name.de === germanName);
    if (!ruin) {
      throw new Error(`Ruin with name ${germanName} not found`);
    }

    ruin.icon = ruinData.icon;
    ruin.campingModifier = ruinData.camping;
    ruin.spawnChance = ruinData.chance;
    ruin.emptyChance = ruinData.empty;
    ruin.drops = Object.entries(ruinData.drops).map(([itemId, dropData]) => {
      const item = getItemByUid(items, itemId);

      return {
        id: item.id,
        odds: Array.isArray(dropData) ? dropData[0] : dropData,
        event: Array.isArray(dropData) ? dropData[1] : undefined,
      };
    });
  });

  // Update with MH ruin data
  const mhRuinsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "ruins.json"), "utf-8")
  ) as Record<string, JSONRuinPrototypeObject>;

  Object.values(mhRuinsData).forEach((ruinData) => {
    const ruin = ruins[ruinData.id ?? -99];
    if (!ruin) {
      throw new Error(`Ruin with id ${ruinData.id} not found`);
    }

    ruin.icon = /ruin\/(.+)\..+\.gif/.exec(ruinData.img ?? "")?.[1] ?? "";
    if (typeof ruinData.explorable === "boolean") {
      ruin.explorable = ruinData.explorable;
    }
  });

  overwriteRuinData(ruins);

  const ruinIdEnum = `export enum RuinId {
  ${Object.values(ruins)
    .map((ruin) => `${sanitizeRuinId(ruin)} = ${ruin.id}`)
    .join(",\n  ")}
}`;

  const types = `import { ItemId } from './items';

${ruinIdEnum}

export type Ruin = {
  id: RuinId;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  icon: string;
  campingModifier: number,
  spawnChance: number,
  emptyChance: number,
  km: {
    min: number;
    max: number;
  };
  explorable: boolean;
  drops: {
    item: ItemId;
    odds: number;
    event?: GameEvent;
  }[];
};`;

  const ruinsObject = `export const ruins: Record<RuinId, Ruin> = {
  ${Object.values(ruins)
    .map(
      (building) => `[RuinId.${sanitizeRuinId(building)}]: {
    id: RuinId.${sanitizeRuinId(building)},
    name: {
      ${languages
        .map((lang) => `[Lang.${lang.toUpperCase()}]: "${building.name[lang]}"`)
        .join(",\n      ")}
    },
    description: {
      ${languages
        .map(
          (lang) =>
            `[Lang.${lang.toUpperCase()}]: "${building.description[lang]}"`
        )
        .join(",\n      ")}
    },
    icon: "${building.icon}",
    campingModifier: ${building.campingModifier},
    spawnChance: ${building.spawnChance},
    emptyChance: ${building.emptyChance},
    km: {
      min: ${building.km.min},
      max: ${building.km.max}
    },
    explorable: ${building.explorable},
    drops: [
      ${building.drops
        .map(
          (drop) => `{
        item: ItemId.${sanitizeItemId(
          Object.values(items).find((i) => i.id === drop.id)
        )},
        odds: ${drop.odds},${
            drop.event
              ? `\n        event: GameEvent.${GameEvent[drop.event]}`
              : ""
          }
      }`
        )
        .join(",\n      ")}
    ]
  }`
    )
    .join(",\n  ")}
};`;

  const output = `${types}

${ruinsObject}`;

  fs.writeFileSync(
    path.join(__dirname, "..", "src", "data", "ruins.ts"),
    output,
    "utf-8"
  );
  console.log("ruins.ts file has been generated.");
};

export enum RecipeType {
  Workshop = 1,
  WorkshopShaman = 2,
  WorkshopTech = 3,
  ManualOutside = 11,
  ManualInside = 12,
  ManualAnywhere = 13,
  ExplorableRuinDoor = 101,
}

type ExportedRecipeData = Record<
  string,
  {
    type: RecipeType;
    in: string | string[];
    out: string | string[] | [string, number][];
    provoking?: string;
  }
>;

type RecipeItem = {
  item: string;
  odds?: number;
  infected?: boolean;
  poisoned?: boolean;
};

export type Recipe = {
  type: RecipeType;
  in: RecipeItem[];
  out: RecipeItem[];
  pictos?: string[];
};

const generateRecipes = (items: Record<number, Item>) => {
  const recipes: Recipe[] = [];

  // Export recipes data from the main repo
  execSync("php scripts/exportRecipes.php", { stdio: "inherit" });

  const recipesData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "recipes.json"), "utf-8")
  ) as ExportedRecipeData;

  Object.values(recipesData).forEach((recipeData) => {
    const ingredients: RecipeItem[] = [];

    (Array.isArray(recipeData.in) ? recipeData.in : [recipeData.in]).forEach(
      (i) => {
        const item = getItemByUid(items, i);
        ingredients.push({ item: item.id });
      }
    );

    const outputs: RecipeItem[] = [];

    (Array.isArray(recipeData.out) ? recipeData.out : [recipeData.out]).forEach(
      (o) => {
        const odds = Array.isArray(o) ? o[1] : undefined;
        const baseItem = Array.isArray(o) ? o[0] : o;
        const item = getItemByUid(items, baseItem);

        outputs.push({ item: item.id, odds });
      }
    );

    // Handle provoking field
    if (recipeData.provoking) {
      const provokingItem = getItemByUid(items, recipeData.provoking);

      // If it's already part of the recipe, it should be ignored
      if (!ingredients.some((i) => i.item === provokingItem.id)) {
        // Otherwise, it should be added to the ingredients and output (as first)
        ingredients.unshift({ item: provokingItem.id });
        outputs.unshift({ item: provokingItem.id });
      }
    }

    recipes.push({
      type: recipeData.type,
      in: ingredients,
      out: outputs,
    });
  });

  overwriteRecipeData(recipes, items);

  const types = `import { ItemId } from './items';
import { PictoId } from './pictos';

export type RecipeItem = {
  item: ItemId;
  odds?: number;
  infected?: boolean;
  poisoned?: boolean;
}

export type Recipe = {
  type: RecipeType;
  in: RecipeItem[];
  out: RecipeItem[];
  pictos?: PictoId[];
};`;

  const recipesArray = `export const recipes: Recipe[] = [
  ${recipes
    .map(
      (recipe) => `{
    type: RecipeType.${RecipeType[recipe.type]},
    in: [
      ${recipe.in
        .map(
          (i) =>
            `{ item: ItemId.${sanitizeItemId(
              Object.values(items).find((it) => it.id === i.item)
            )} }`
        )
        .join(",\n      ")}
    ],
    out: [
      ${recipe.out
        .map(
          (o) =>
            `{ item: ItemId.${sanitizeItemId(
              Object.values(items).find((it) => it.id === o.item)
            )}${o.odds ? `, odds: ${o.odds}` : ""}${
              o.infected ? `, infected: true` : ""
            }${o.poisoned ? `, poisoned: true` : ""} }`
        )
        .join(",\n      ")}
    ],${
      recipe.pictos
        ? `\n    pictos: [${recipe.pictos
            .map((p) => `PictoId.${sanitizePictoId({ id: p } as Picto)}`)
            .join(", ")}],`
        : ""
    }
  }`
    )
    .join(",\n  ")}
];`;

  const output = `${types}

${recipesArray}`;

  fs.writeFileSync(
    path.join(__dirname, "..", "src", "data", "recipes.ts"),
    output,
    "utf-8"
  );
  console.log("recipes.ts file has been generated.");
};

type Building = {
  id: string;
  numericalId: number;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  icon: string;
  apNeeded: number;
  hp: number;
  breakable: boolean;
  defense: number;
  hasUpgrade: boolean;
  rarity: number;
  temporary: boolean;
  parent?: string;
  resources: {
    id: string;
    amount: number;
  }[];
};

const sanitizeBuildingId = (building?: Building | string) => {
  const sanitize = (id: string) =>
    id
      .replace("_#00", "")
      .replace(/_#(\d+)/, "_$1")
      .toUpperCase();

  if (typeof building === "string") {
    return sanitize(building);
  }

  if (!building) {
    throw new Error("Building is undefined");
  }

  return sanitize(building.id);
};

const generateBuildings = async (items: Record<number, Item>) => {
  const buildings: Record<string, Building> = {};

  const filePath = path.join(__dirname, "data", "buildings.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8")) as Record<
    string,
    Required<JSONBuildingPrototypeObject>
  >;

  Object.entries(data).forEach(([id, buildingData]) => {
    // All languages are available
    if (
      typeof buildingData.name !== "object" ||
      typeof buildingData.desc !== "object"
    ) {
      throw new Error(`Building with id ${id} is missing translations`);
    }

    buildings[id] = {
      id,
      numericalId: buildingData.id,
      icon: /building\/(.+)\..+\.gif/.exec(buildingData.img)?.[1] ?? "",
      name: {
        [Lang.EN]: buildingData.name.en ?? "",
        [Lang.FR]: buildingData.name.fr ?? "",
        [Lang.DE]: buildingData.name.de ?? "",
        [Lang.ES]: buildingData.name.es ?? "",
      },
      description: {
        [Lang.EN]: buildingData.desc.en ?? "",
        [Lang.FR]: buildingData.desc.fr ?? "",
        [Lang.DE]: buildingData.desc.de ?? "",
        [Lang.ES]: buildingData.desc.es ?? "",
      },
      apNeeded: buildingData.pa,
      hp: buildingData.maxLife,
      breakable: buildingData.breakable,
      defense: buildingData.def,
      hasUpgrade: buildingData.hasUpgrade,
      rarity: buildingData.rarity,
      temporary: buildingData.temporary,
      parent: Object.entries(data).find(
        ([, b]) => b.id === buildingData.parent
      )?.[0],
      resources: buildingData.resources.map((r) => ({
        id:
          Object.values(items).find((i) => i.numericalId === r.rsc?.id)?.id ??
          "",
        amount: r.amount ?? 0,
      })),
    };
  });

  const buildingIdEnum = `export enum BuildingId {
  ${Object.values(buildings)
    .map((building) => `${sanitizeBuildingId(building)} = "${building.id}"`)
    .join(",\n  ")}
}`;

  const buildingType = `export type Building = {
  id: BuildingId;
  numericalId: number;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  icon: string;
  apNeeded: number;
  hp: number;
  breakable: boolean;
  defense: number;
  hasUpgrade: boolean;
  rarity: number;
  temporary: boolean;
  parent?: BuildingId;
  resources: {
    id: ItemId;
    amount: number;
  }[];
};`;

  const buildingsObject = `export const buildings: Record<BuildingId, Building> = {
  ${Object.values(buildings)
    .map(
      (building) => `[BuildingId.${sanitizeBuildingId(building)}]: {
    id: BuildingId.${sanitizeBuildingId(building)},
    numericalId: ${building.numericalId},
    name: {
      ${languages
        .map(
          (lang) =>
            `[Lang.${lang.toUpperCase()}]: "${sanitizeText(
              building.name[lang]
            )}"`
        )
        .join(",\n      ")}
    },
    description: {
      ${languages
        .map(
          (lang) =>
            `[Lang.${lang.toUpperCase()}]: "${sanitizeText(
              building.description[lang]
            )}"`
        )
        .join(",\n      ")}
    },
    icon: "${building.icon}",
    apNeeded: ${building.apNeeded},
    hp: ${building.hp},
    breakable: ${building.breakable},
    defense: ${building.defense},
    hasUpgrade: ${building.hasUpgrade},
    rarity: ${building.rarity},
    temporary: ${building.temporary},${
        building.parent
          ? `\n    parent: BuildingId.${sanitizeBuildingId(building.parent)},`
          : ""
      }
    resources: [
      ${building.resources
        .map(
          (r) => `{
        id: ItemId.${sanitizeItemId(r.id)},
        amount: ${r.amount}
      }`
        )
        .join(",\n      ")}
    ]
  }`
    )
    .join(",\n  ")}
};`;

  const output = `import { ItemId } from './items';

${buildingIdEnum}

${buildingType}

${buildingsObject}`;

  fs.writeFileSync(
    path.join(__dirname, "..", "src", "data", "buildings.ts"),
    output,
    "utf-8"
  );
  console.log("buildings.ts file has been generated.");
};

type Picto = {
  id: string;
  numericalId: number;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  icon: string;
  community: boolean;
  rare: boolean;
};

const generatePictos = async () => {
  const pictos: Record<string, Picto> = {};

  const filePath = path.join(__dirname, "data", "pictos.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8")) as Record<
    string,
    Required<JSONPictoPrototypeObject>
  >;

  Object.entries(data).forEach(([id, pictoData]) => {
    // All languages are available
    if (
      typeof pictoData.name !== "object" ||
      typeof pictoData.desc !== "object"
    ) {
      throw new Error(`Picto with id ${id} is missing translations`);
    }

    pictos[id] = {
      id,
      numericalId: pictoData.id,
      icon: /pictos\/(.+)\..+\.gif/.exec(pictoData.img)?.[1] ?? "",
      name: {
        [Lang.EN]: pictoData.name.en ?? "",
        [Lang.FR]: pictoData.name.fr ?? "",
        [Lang.DE]: pictoData.name.de ?? "",
        [Lang.ES]: pictoData.name.es ?? "",
      },
      description: {
        [Lang.EN]: pictoData.desc.en ?? "",
        [Lang.FR]: pictoData.desc.fr ?? "",
        [Lang.DE]: pictoData.desc.de ?? "",
        [Lang.ES]: pictoData.desc.es ?? "",
      },
      community: pictoData.community,
      rare: pictoData.rare,
    };
  });

  const pictoIdEnum = `export enum PictoId {
  ${Object.values(pictos)
    .map((picto) => `${sanitizePictoId(picto)} = "${picto.id}"`)
    .join(",\n  ")}
}`;

  const pictoType = `export type Picto = {
  id: PictoId;
  numericalId: number;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  icon: string;
  community: boolean;
  rare: boolean;
};`;

  const pictosObject = `export const pictos: Record<PictoId, Picto> = {
  ${Object.values(pictos)
    .map(
      (picto) => `[PictoId.${sanitizePictoId(picto)}]: {
    id: PictoId.${sanitizePictoId(picto)},
    numericalId: ${picto.numericalId},
    name: {
      ${languages
        .map(
          (lang) =>
            `[Lang.${lang.toUpperCase()}]: "${sanitizeText(picto.name[lang])}"`
        )
        .join(",\n      ")}
    },
    description: {
      ${languages
        .map(
          (lang) =>
            `[Lang.${lang.toUpperCase()}]: "${sanitizeText(
              picto.description[lang]
            )}"`
        )
        .join(",\n      ")}
    },
    icon: "${picto.icon}",
    community: ${picto.community},
    rare: ${picto.rare}
  }`
    )
    .join(",\n  ")}
};`;

  const output = `${pictoIdEnum}

${pictoType}

${pictosObject}`;

  fs.writeFileSync(
    path.join(__dirname, "..", "src", "data", "pictos.ts"),
    output,
    "utf-8"
  );
  console.log("pictos.ts file has been generated.");
};

(async () => {
  // Update the API data
  if (CONFIG.callApi) {
    if (!process.env.API_APPKEY || !process.env.API_USERKEY) {
      throw new Error("API_APPKEY and API_USERKEY env variables are required");
    }

    const api = new Api({
      baseUrl: "https://myhordes.eu/api/x",
    });

    api.setSecurityData({
      appkey: process.env.API_APPKEY,
      userkey: process.env.API_USERKEY,
    });

    const itemsResponse = await api.json.itemsList({
      fields: "id,uid,img,heavy,deco,guard,name,desc,cat",
    });

    const items = itemsResponse.data;

    // Save items to a file
    fs.writeFileSync(
      path.join(__dirname, "data", "items.json"),
      JSON.stringify(items, null, 2),
      "utf-8"
    );

    const buildingsResponse = await api.json.buildingsList({
      fields:
        "id,img,name,desc,pa,maxLife,breakable,def,hasUpgrade,rarity,temporary,parent,resources.rsc.fields(id)",
    });

    const buildings = buildingsResponse.data;

    // Save buildings to a file
    fs.writeFileSync(
      path.join(__dirname, "data", "buildings.json"),
      JSON.stringify(buildings, null, 2),
      "utf-8"
    );
  }

  const items = await generateItems();
  generateRuins(items);
  generateRecipes(items);
  generateBuildings(items);
  generatePictos();

  console.log("Data generation completed.");
})().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
