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
import dotenv from "dotenv";
import { addHiddenRewardTitles, exportTitles } from "./exportTitles";
import { exportRules, RulesConfig } from "./exportRules";

let types = "";

export enum Lang {
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
  Butcher,
  Find,
}

export enum ItemActionConditionEnum {
  Ghoul,
  BrokenItem,
  Technician,
  BoxOpener,
  OnARuin,
  Thirsty,
  Dehydrated,
  Shaman,
  Inside,
}

export type ItemActionCondition =
  | ItemActionConditionEnum
  | {
      item: string;
    }
  | {
      building: string;
    };

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
  GetReward,
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
  CampingChances,
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
  drops?: Record<string, number>;
  opens?: string[];
  openableBy?: string[];
};

type ActionResult =
  | (
      | string
      | {
          group: string | [string[] | string, number][];
        }
    )[]
  | ({
      chances: {
        group: string | [string | string[], number][];
      };
    } & Record<string, string>);

const getEffectNamesFromResult = (result?: ActionResult) => {
  if (!result) {
    return [];
  }

  if (typeof result === "string") {
    return [result];
  }

  if (Array.isArray(result)) {
    return result.reduce<string[]>((acc, item) => {
      if (typeof item === "string") {
        acc.push(item);
      } else if (typeof item.group === "string") {
        acc.push(item.group);
      } else {
        item.group.forEach((groupItem) => {
          const groupEffects = groupItem[0];
          if (!groupEffects) {
            return acc;
          }
          if (typeof groupEffects === "string") {
            acc.push(groupEffects);
          } else {
            acc.push(...groupEffects);
          }
        });
      }
      return acc;
    }, []);
  }

  return Object.values(result).reduce<string[]>((acc, item) => {
    if (typeof item === "string") {
      acc.push(item);
    } else if (typeof item.group === "string") {
      acc.push(item.group);
    } else {
      item.group.forEach((groupItem) => {
        const groupEffects = groupItem[0];
        if (!groupEffects) {
          return acc;
        }
        if (typeof groupEffects === "string") {
          acc.push(groupEffects);
        } else {
          acc.push(...groupEffects);
        }
      });
    }
    return acc;
  }, []);
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

const sanitizeRewardId = (reward?: Reward) => {
  if (!reward) {
    throw new Error("Reward is undefined");
  }

  return reward.id
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

export const languages: Lang[] = [Lang.EN, Lang.FR, Lang.DE, Lang.ES];

type ItemDrop = {
  id: string;
  odds: number;
  event?: string;
};

const generateItemDrops = () => {
  // Get item drops from the main repo
  execSync("php scripts/exportDrops.php", { stdio: "inherit" });

  const dropsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "itemDrops.json"), "utf-8")
  ) as Record<string, Record<string, number | [number, number]>>;

  // Merge trash_good and trash_bad into trash
  // 12.5% for trash_good and 87.5% for trash_bad
  dropsData.trash = {
    ...Object.fromEntries(
      Object.entries(dropsData.trash_good ?? {}).map(([key, value]) => [
        key,
        (Array.isArray(value) ? value[0] : value) * 125,
      ])
    ),
    ...Object.fromEntries(
      Object.entries(dropsData.trash_bad ?? {}).map(([key, value]) => [
        key,
        (Array.isArray(value) ? value[0] : value) * 875,
      ])
    ),
  };

  const mapDrops = ([key, value]: [string, number | [number, number]]) => {
    const odds = Array.isArray(value) ? value[0] : value;
    const eventId = Array.isArray(value) ? value[1] : undefined;

    const drop: ItemDrop = {
      id: key,
      odds,
    };

    switch (eventId) {
      // Ignore some events
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 201:
      case undefined:
        break;
      case 101:
        drop.event = "Easter";
        break;
      case 102:
        drop.event = "Christmas";
        break;
      case 103:
        drop.event = "StPatrick";
        break;
      case 104:
        drop.event = "Halloween";
        break;
      default:
        throw new Error(`Unknown event id ${eventId}`);
    }

    return drop;
  };

  const drops = {
    DepletedZone: Object.entries(dropsData.empty_dig ?? {}).map(mapDrops),
    Zone: Object.entries(dropsData.base_dig ?? {}).map(mapDrops),
    Trash: Object.entries(dropsData.trash ?? {}).map(mapDrops),
  };

  types += `export type ItemDrop = {
id: ItemId;
odds: number;
event?: GameEvent;
};

`;

  const itemDropObject = `export const itemDrops: Record<DropLocation, ItemDrop[]> = {
  ${Object.entries(drops)
    .map(
      ([key, value]) => `[DropLocation.${key}]: [
    ${value
      .map(
        (drop) =>
          `{ id: ItemId.${sanitizeItemId(drop.id)}, odds: ${drop.odds}${
            drop.event ? `, event: GameEvent.${drop.event}` : ""
          }}`
      )
      .join(",\n    ")}
  ],`
    )
    .join("\n  ")}
};`;

  const ouput = `import { DropLocation, ItemDrop, ItemId } from "./types";

${itemDropObject}`;

  fs.writeFileSync(
    path.join(__dirname, "..", "src", "data", "itemDrops.ts"),
    ouput,
    "utf-8"
  );
  console.log("itemDrops.ts file has been generated.");

  return drops;
};

const generateItems = async (
  rules: RulesConfig,
  drops: Record<string, ItemDrop[]>
) => {
  const openers = {
    melee: [
      "chair_basic_#00",
      "pc_#00",
      "wrench_#00",
      "cutter_#00",
      "bone_#00",
      "cutcut_#00",
      "small_knife_#00",
      "chain_#00",
      "knife_#00",
      "staff_#00",
      "can_opener_#00",
      "screw_#00",
      "swiss_knife_#00",
      "hurling_stick_#00",
    ],
    main: ["saw_tool_#00", "can_opener_#00", "screw_#00", "swiss_knife_#00"],
  };

  const openableItems = {
    main: ["can_#00", "chest_xl_#00", "catbox_#00", "chest_#00"],
    melee: ["chest_food_#00", "chest_tools_#00"],
  };

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

    // Openable items
    Object.entries(openableItems).forEach(([key, value]) => {
      if (value.some((item) => id === item)) {
        if (!items[id]) {
          throw new Error(`Item with id ${id} not found`);
        }

        if (!items[id].openableBy) {
          items[id].openableBy = [];
        }

        items[id].openableBy.push(...openers[key as keyof typeof openers]);
      }
    });

    Object.entries(openers).forEach(([key, value]) => {
      if (value.some((item) => id === item)) {
        if (!items[id]) {
          throw new Error(`Item with id ${id} not found`);
        }

        if (!items[id].opens) {
          items[id].opens = [];
        }

        items[id].opens.push(
          ...openableItems[key as keyof typeof openableItems]
        );
      }
    });
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
          result: ActionResult;
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
    const resultEffects = getEffectNamesFromResult(action?.result);

    if (action?.meta.includes("eat_ap")) {
      return ItemActionType.Eat;
    }
    if (
      actionId.startsWith("potion_") ||
      resultEffects.some((result) => result.startsWith("drink_")) ||
      actionId === "water_g" ||
      (actionId.startsWith("watercan") && actionId.endsWith("_g"))
    ) {
      return ItemActionType.Drink;
    }
    if (actionId.startsWith("open_")) {
      return ItemActionType.Open;
    }
    if (action?.meta.includes("must_have_slaughter")) {
      return ItemActionType.Butcher;
    }

    return ItemActionType.Use;
  };

  // Get action conditions from action meta
  const getActionConditions = (
    action: (typeof actionsData.actions)[keyof typeof actionsData.actions]
  ) => {
    const conditions: ItemActionCondition[] = [];

    if (action?.meta.includes("profession_tech")) {
      conditions.push(ItemActionConditionEnum.Technician);
    }
    if (action?.meta.includes("role_ghoul")) {
      conditions.push(ItemActionConditionEnum.Ghoul);
    }
    if (action?.meta.includes("have_battery")) {
      conditions.push({ item: "PILE" });
    }
    if (action?.meta.includes("have_water")) {
      conditions.push({ item: "WATER" });
    }
    if (action?.meta.includes("must_be_inside_bp")) {
      conditions.push(ItemActionConditionEnum.Inside);
    }
    if (
      action?.meta.includes("must_have_micropur") ||
      action?.meta.includes("must_have_micropur_in")
    ) {
      conditions.push({ item: "WATER_CLEANER" });

      if (action?.meta.includes("must_be_inside")) {
        conditions.push(ItemActionConditionEnum.Inside);
      }
    }
    if (action?.meta.includes("must_have_steak")) {
      conditions.push({ item: "MEAT" });
    }
    if (action?.meta.includes("must_have_purifier")) {
      conditions.push({ building: "ITEM_JERRYCAN" });
    }
    if (action?.meta.includes("must_have_filter")) {
      conditions.push({ building: "ITEM_JERRYCAN_01" });
    }
    if (action?.meta.includes("have_canister")) {
      conditions.push({ item: "JERRYCAN" });
    }

    if (
      [
        "have_can_opener_hd",
        "have_can_opener",
        "have_box_opener_hd",
        "have_box_opener",
        "have_parcel_opener",
        "have_parcel_opener_home",
      ].some((condition) => action?.meta.includes(condition))
    ) {
      conditions.push(ItemActionConditionEnum.BoxOpener);
    }
    if (action?.meta.includes("must_have_ruin_with_bp")) {
      conditions.push(ItemActionConditionEnum.OnARuin);
    }
    if (action?.meta.includes("role_shaman")) {
      conditions.push(ItemActionConditionEnum.Shaman);
    }
    if (action?.meta.includes("drink_tl1")) {
      conditions.push(ItemActionConditionEnum.Thirsty);
    }
    if (action?.meta.includes("drink_tl2")) {
      conditions.push(ItemActionConditionEnum.Dehydrated);
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
    const mpUse = /minus_(\d+)mp|minus_(\d+)pm/.exec(effectName);
    if (mpUse) {
      effects.push({
        type: ItemActionEffectType.MP,
        value: -+(mpUse[1] ?? mpUse[2] ?? 0),
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

    // EP regen
    const epRegen = /plus_(\d+)sp_e/.exec(effectName);
    if (epRegen) {
      const ep = epRegen[1];
      effects.push({
        type: ItemActionEffectType.EP,
        value: +(ep ?? 0),
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
      const statusesToIgnore = [
        "tg_teddy",
        "tg_betadrug",
        "tg_sbook",
        "tg_soccer",
        "tg_has_bike",
        "tg_had_bike",
        "tg_bike_first",
        "tg_has_shoe",
        "tg_had_shoe",
        "tg_shoe_first",
        "tamer_guard_1",
        "tg_tomb",
      ];

      // Remove clean status on drug consumption
      if (effectName === "drug_any") {
        effects.push({
          type: ItemActionEffectType.RemoveStatus,
          value: "clean",
          ...odds,
        });
      }

      switch (effectsData[effectName].type) {
        case "picto": {
          const data =
            typeof effectsData[effectName].data === "string"
              ? [effectsData[effectName].data]
              : (effectsData[effectName].data as string[]);

          data.forEach((reward) => {
            if (!reward.includes("'")) return;

            // Check if the reward is already in the list
            const existingEffect = effects.find(
              (effect) =>
                effect.type === ItemActionEffectType.GetReward &&
                effect.value === reward.replace(/'/g, "")
            );

            if (existingEffect) {
              existingEffect.odds = Math.round(
                (existingEffect.odds ?? 100) + (_odds ?? 100)
              );
              return;
            }

            effects.push({
              type: ItemActionEffectType.GetReward,
              value: reward.replace(/'/g, ""),
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
            value: min === max ? min : `${min}-${max}`,
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
          const data = effectsData[effectName].data;
          let buildings: string[] = [];

          // If [xxx, yyy], we have the building ids directly in the data
          if (Array.isArray(data)) {
            buildings = data.map((b) => String(b));
          } else if (/'(.+)'/.test(String(data))) {
            // If 'xxx', we have to find the buildings from the rules
            buildings =
              rules.parameters?.rules?.default?.explorable_ruin_params
                ?.plan_limits?.lists?.[
                String(data).match(/'(.+)'/)?.[1] ?? ""
              ] ?? [];
          } else {
            // If xxx, it's the rarity of the building to unlock
            buildings = Object.keys(buildingsData).filter(
              (buildingId) =>
                buildingsData[buildingId]?.rarity ===
                effectsData[effectName]?.data
            );
          }

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
        case "defense":
        case "temporaryDefense": {
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
          if (
            statusesToIgnore.includes(
              String(effectsData[effectName].data).slice(1, -1)
            )
          ) {
            break;
          }

          effects.push({
            type: ItemActionEffectType.RemoveStatus,
            value: String(effectsData[effectName].data).slice(1, -1),
            ...odds,
          });
          break;
        }
        case "addsStatus": {
          // If array, we have [status, reward]
          const statusData = effectsData[effectName].data;
          if (Array.isArray(statusData)) {
            effects.push({
              type: ItemActionEffectType.AddStatus,
              value: String(statusData[0]).slice(1, -1),
              ...odds,
            });

            // Check if the reward is already in the list
            const existingEffect = effects.find(
              (effect) =>
                effect.type === ItemActionEffectType.GetReward &&
                effect.value === String(statusData[1]).slice(1, -1)
            );

            if (existingEffect) {
              existingEffect.odds = Math.round(
                (existingEffect.odds ?? 100) + (_odds ?? 100)
              );
            } else {
              effects.push({
                type: ItemActionEffectType.GetReward,
                value: String(statusData[1]).slice(1, -1),
                ...odds,
              });
            }
            break;
          }

          // Ignore some statuses
          const effectData = String(effectsData[effectName].data).slice(1, -1);
          if (statusesToIgnore.includes(effectData)) {
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
            odds:
              (((effectsData[effectName].data as number[])[0] ?? 100) *
                (_odds ?? 100)) /
              100,
          });
          break;
        }
        case "find_rp": {
          effects.push({
            type: ItemActionEffectType.GetReward,
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
              let totalOdds = 0;
              const grouped = data.reduce<[string, number, number][]>(
                (acc, innerData) => {
                  if (Array.isArray(innerData.items)) {
                    const currentInnerData = innerData as {
                      items: string[];
                      odds?: number;
                      count?: number;
                    };
                    const count = currentInnerData.count ?? 1;
                    const innerOdds =
                      currentInnerData.odds ??
                      100 / currentInnerData.items.length;

                    currentInnerData.items.forEach((item) => {
                      const existingItem = acc.find((i) => i[0] === item);

                      totalOdds += innerOdds;

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

              grouped.forEach(([item, count, innerOdds]) => {
                const odds = (innerOdds / totalOdds) * (_odds ?? 100);

                const effect: ItemActionEffect = {
                  type: ItemActionEffectType.CreateItem,
                  value: item,
                  odds: odds < 1 ? +odds.toFixed(1) : Math.round(odds),
                };

                if (count > 1) {
                  effect.count = count;
                }

                effects.push(effect);
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
        case "improveLevel": {
          effects.push({
            type: ItemActionEffectType.CampingChances,
            value: `+${String(effectsData[effectName].data)}%`,
            ...odds,
          });
          break;
        }
        case "chatSilence":
        case "morphTarget":
        case "consume":
        case "morphsStatus":
        case "count":
        case "effectIndex":
        case "point":
        case "setsTag":
        case "stopDigTimers":
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

    (typeof action?.result === "object"
      ? Object.values(action.result)
      : action?.result ?? []
    ).forEach((result) => {
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

    // Add some unlinked actions
    switch (itemId) {
      case "water_#00": {
        actionIds?.push("brew_shamanic_potion");
        break;
      }
      default: {
        break;
      }
    }

    actionIds?.forEach((actionId) => {
      // Actions to ignore
      switch (actionId) {
        case "drug_hyd_1":
        case "drug_hyd_2":
        case "watercup_1b":
        case "watercup_2":
        case "watercup_3":
        case "throw_animal_t1":
        case "throw_animal_t2":
        case "wagging_flag":
        case "fill_ksplash1":
        case "jerrycan_1b":
        case "fill_splash1":
        case "fill_asplash1":
        case "fill_exgrenade2":
        case "fill_grenade2":
          return;
        // Openers
        case "can":
        case "can_t1":
        case "can_t2":
        case "can_t3":
        case "open_metalbox":
        case "open_metalbox_t1":
        case "open_metalbox_t2":
        case "open_metalbox2":
        case "open_metalbox2_t1":
        case "open_metalbox2_t2":
        case "open_toolbox":
        case "open_toolbox_t1":
        case "open_toolbox_t2":
        case "open_foodbox_in":
        case "open_foodbox_out":
        case "open_foodbox_in_t1":
        case "open_foodbox_out_t1":
        case "open_foodbox_in_t2":
        case "open_foodbox_out_t2":
        case "open_catbox":
        case "open_catbox_t1":
        case "open_catbox_t2":
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
      case "scary_mask_#00":
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

    // Add drops
    ["DepletedZone", "Zone", "Trash"].forEach((dropLocation) => {
      const itemDrop = drops[dropLocation]?.find((drop) => drop.id === item.id);
      if (itemDrop) {
        const totalOdds =
          drops[dropLocation]
            ?.filter(
              (drop) =>
                typeof drop.event === "undefined" || item.event === drop.event
            )
            .reduce((acc, drop) => acc + drop.odds, 0) ?? 0;

        if (!item.drops) {
          item.drops = {};
        }

        item.drops[dropLocation] = +((itemDrop.odds / totalOdds) * 100).toFixed(
          2
        );
      }
    });

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
            effect.type === ItemActionEffectType.GetReward &&
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
            effect.type === ItemActionEffectType.GetReward &&
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
            effect.type === ItemActionEffectType.GetReward &&
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

    // Order item action effects
    item.actions.forEach((action) => {
      action.effects.sort((a, b) => {
        // Rewards first
        if (
          a.type === ItemActionEffectType.GetReward &&
          b.type !== ItemActionEffectType.GetReward
        ) {
          return -1;
        }

        if (
          a.type !== ItemActionEffectType.GetReward &&
          b.type === ItemActionEffectType.GetReward
        ) {
          return 1;
        }

        // Order by item odds
        if (
          a.type === ItemActionEffectType.CreateItem &&
          b.type === ItemActionEffectType.CreateItem
        ) {
          if (a.odds && b.odds) {
            return b.odds - a.odds;
          }
          if (a.odds) {
            return 1;
          }
          if (b.odds) {
            return -1;
          }
        }

        // Change nothing
        return 0;
      });
    });
  });

  overwriteItemData(items);

  types += `export enum ItemId {
  ${Object.values(items)
    .map((item) => `${sanitizeItemId(item)} = "${item.id}"`)
    .join(",\n  ")}
};

export enum DropLocation {
  DepletedZone,
  Zone,
  Trash,
};

export type Item = {
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
  drops?: Partial<Record<DropLocation, number>>;
  opens?: ItemId[];
  openableBy?: ItemId[];
};

`;

  const itemsObject = `export const items: Readonly<Record<ItemId, Item>> = {
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
        conditions: [
          ${action.conditions
            .map((condition) =>
              typeof condition === "object"
                ? "item" in condition
                  ? `{ item: ItemId.${condition.item} }`
                  : `{ building: BuildingId.${condition.building} }`
                : `ItemActionConditionEnum.${ItemActionConditionEnum[condition]}`
            )
            .join(",\n          ")}
        ],
        effects: [
          ${action.effects
            .map(
              (effect) => `{
            type: ItemActionEffectType.${ItemActionEffectType[effect.type]}${
                typeof effect.value !== "undefined"
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
    ],${
      item.drops
        ? `
    drops: {
      ${Object.entries(item.drops)
        .map(([location, odds]) => `[DropLocation.${location}]: ${odds}`)
        .join(",\n      ")}
    },`
        : ""
    }${
        item.opens
          ? `
    opens: [
      ${item.opens
        .map((open) => `ItemId.${sanitizeItemId(getItemByUid(items, open))}`)
        .join(",\n      ")}
    ],`
          : ""
      }${
        item.openableBy
          ? `
    openableBy: [
      ${item.openableBy
        .map(
          (openableBy) =>
            `ItemId.${sanitizeItemId(getItemByUid(items, openableBy))}`
        )
        .join(",\n      ")}
    ],`
          : ""
      }
  }`
    )
    .join(",\n  ")}
};`;

  const output = `import { BuildingId, DropLocation, Item, ItemId } from "./types";

${itemsObject}`;

  fs.writeFileSync(
    path.join(__dirname, "..", "src", "data", "items.ts"),
    output,
    "utf-8"
  );
  console.log("items.ts file has been generated.");

  return items;
};

export type Ruin = {
  id: number;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  icon: string;
  camping: {
    baseValue: number;
    spots: number;
  };
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
  Infective = 51,
  Easter = 101,
  Christmas = 102,
  ChristmasAlt1 = 1021,
  ChristmasAlt2 = 1022,
  StPatrick = 103,
  AprilFools = 999,
  Halloween = 104,
  NewYear = 998,
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

const generateRuins = async (items: Record<number, Item>) => {
  const ruins: Record<number, Ruin> = {};

  // Add buried ruin
  ruins[9999] = {
    id: 9999,
    name: {
      en: "Buried building",
      fr: "Bâtiment non déterré",
      de: "Verschüttete Ruine",
      es: "Sector inexplotable",
    },
    description: {
      en: "",
      fr: "",
      de: "",
      es: "",
    },
    icon: "burried",
    camping: {
      baseValue: 15,
      spots: 0,
    },
    spawnChance: 0,
    emptyChance: 0,
    km: {
      min: 0,
      max: 0,
    },
    explorable: false,
    drops: [],
  };

  // Parse MH API ruin data
  const mhRuinsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "ruins.json"), "utf-8")
  ) as Record<string, JSONRuinPrototypeObject>;

  Object.values(mhRuinsData).forEach((ruinData) => {
    if (!ruinData.id) {
      console.log("Missing id for ruin", ruinData);
      throw new Error();
    }

    // Check if translations are available
    if (
      typeof ruinData.name !== "object" ||
      typeof ruinData.desc !== "object"
    ) {
      console.log("Missing translations for ruin", ruinData);
      throw new Error();
    }

    ruins[ruinData.id] = {
      id: ruinData.id,
      name: {
        en: ruinData.name.en ?? "",
        fr: ruinData.name.fr ?? "",
        de: ruinData.name.de ?? "",
        es: ruinData.name.es ?? "",
      },
      description: {
        en: ruinData.desc.en ?? "",
        fr: ruinData.desc.fr ?? "",
        de: ruinData.desc.de ?? "",
        es: ruinData.desc.es ?? "",
      },
      icon: /ruin\/(.+)\..+\.gif/.exec(ruinData.img ?? "")?.[1] ?? "",
      camping: {
        baseValue: 0,
        spots: 0,
      },
      spawnChance: 0,
      emptyChance: 0,
      km: {
        min: 0,
        max: 0,
      },
      explorable: ruinData.explorable ?? false,
      drops: [],
    };
  });

  // Update ruins with data from the main repo
  execSync("php scripts/exportRuins.php", { stdio: "inherit" });

  const ruinsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "mainRepoRuins.json"), "utf-8")
  ) as Record<
    string,
    {
      label: string;
      icon: string;
      camping: number;
      min_dist: number;
      max_dist: number;
      chance: number;
      empty: number;
      capacity: number;
      drops: Record<string, number | [number, number]>;
    }
  >;

  Object.values(ruinsData).forEach((ruinData) => {
    const germanName = ruinData.label;

    const ruin = Object.values(ruins).find(
      (b) => b.name.de.toLowerCase() === germanName.toLowerCase()
    );
    if (!ruin) {
      throw new Error(`Ruin with name ${germanName} not found`);
    }

    ruin.icon = ruinData.icon;
    ruin.camping.baseValue = ruinData.camping;
    ruin.camping.spots = ruinData.capacity;
    ruin.km.min = ruinData.min_dist;
    ruin.km.max = ruinData.max_dist;
    ruin.spawnChance = ruinData.chance;
    ruin.emptyChance = ruinData.empty;
    ruin.drops = Object.entries(ruinData.drops)
      .filter(([itemId]) => {
        // Ignore some edge case items
        switch (itemId) {
          case "postal_box_#01_xmas_alt_1":
          case "postal_box_xl_#00_xmas_alt_2":
            return false;
        }
        return true;
      })
      .map(([itemId, dropData]) => {
        const item = getItemByUid(items, itemId);

        return {
          id: item.id,
          odds: Array.isArray(dropData) ? dropData[0] : dropData,
          event: Array.isArray(dropData) ? dropData[1] : undefined,
        };
      });
  });

  overwriteRuinData(ruins);

  types += `export enum RuinId {
  ${Object.values(ruins)
    .map((ruin) => `${sanitizeRuinId(ruin)} = ${ruin.id}`)
    .join(",\n  ")}
}

export type Ruin = {
  id: RuinId;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  icon: string;
  camping: {
    baseValue: number;
    spots: number;
  };
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
};

`;

  const ruinsObject = `export const ruins: Readonly<Record<RuinId, Ruin>> = {
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
            `[Lang.${lang.toUpperCase()}]: "${building.description[
              lang
            ].replace(/"/g, '\\"')}"` // Escape double quotes
        )
        .join(",\n      ")}
    },
    icon: "${building.icon}",
    camping: {
      baseValue: ${building.camping.baseValue},
      spots: ${building.camping.spots}
    },
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

  const output = `import { ItemId, Ruin, RuinId } from './types';

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
    multi_out?: boolean;
  }
>;

type RecipeItem = {
  item: string;
  odds?: number;
  infected?: boolean;
  poisoned?: boolean;
  broken?: boolean;
};

export type Recipe = {
  type: RecipeType;
  in: RecipeItem[];
  out: RecipeItem[];
  rewards?: string[];
};

const generateRecipes = (items: Record<number, Item>) => {
  let recipes: Recipe[] = [];

  // Export recipes data from the main repo
  execSync("php scripts/exportRecipes.php", { stdio: "inherit" });

  const recipesData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "recipes.json"), "utf-8")
  ) as ExportedRecipeData;

  Object.entries(recipesData).forEach(([recipeId, recipeData]) => {
    // Ignore some recipes
    switch (recipeId) {
      case "com046":
      case "com047":
        return;
      default:
        break;
    }

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
        const odds = Array.isArray(o)
          ? o[1]
          : Array.isArray(recipeData.out) && !recipeData.multi_out
          ? 1
          : undefined;
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

  // Order recipe outputs by odds
  recipes.forEach((recipe) => {
    recipe.out.sort((a, b) => {
      if (a.odds && b.odds) {
        return b.odds - a.odds;
      }
      if (a.odds) {
        return 1;
      }
      if (b.odds) {
        return -1;
      }
      return 0;
    });
  });

  recipes = overwriteRecipeData(recipes, items);

  types += `export type RecipeItem = {
  item: ItemId;
  odds?: number;
  infected?: boolean;
  poisoned?: boolean;
  broken?: boolean;
}

export type Recipe = {
  type: RecipeType;
  in: RecipeItem[];
  out: RecipeItem[];
  rewards?: RewardId[];
};

`;

  const recipesArray = `export const recipes: Readonly<Recipe>[] = [
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
            }${o.poisoned ? `, poisoned: true` : ""}${
              o.broken ? `, broken: true` : ""
            }}`
        )
        .join(",\n      ")}
    ],${
      recipe.rewards
        ? `\n    rewards: [${recipe.rewards
            .map((r) => `RewardId.${sanitizeRewardId({ id: r } as Reward)}`)
            .join(", ")}],`
        : ""
    }
  }`
    )
    .join(",\n  ")}
];`;

  const output = `import { ItemId, RewardId, Recipe } from './types';

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
  order: number;
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
      order: buildingData.order,
      resources: buildingData.resources.map((r) => ({
        id:
          Object.values(items).find((i) => i.numericalId === r.rsc?.id)?.id ??
          "",
        amount: r.amount ?? 0,
      })),
    };
  });

  types += `export enum BuildingId {
  ${Object.values(buildings)
    .map((building) => `${sanitizeBuildingId(building)} = "${building.id}"`)
    .join(",\n  ")}
}

export type Building = {
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
  order: number;
  resources: {
    id: ItemId;
    amount: number;
  }[];
};

`;

  const buildingsObject = `export const buildings: Readonly<Record<BuildingId, Building>> = {
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
    order: ${building.order},
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

  const output = `import { Building, BuildingId, ItemId } from './types';

${buildingsObject}`;

  fs.writeFileSync(
    path.join(__dirname, "..", "src", "data", "buildings.ts"),
    output,
    "utf-8"
  );
  console.log("buildings.ts file has been generated.");
};

export type Reward = {
  id: string;
  numericalId: number;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  icon: string;
  community: boolean;
  rare: boolean;
  titles: {
    name: Record<Lang, string | string[]>;
    quantity: number;
    points?: number;
  }[];
};

const generateRewards = async () => {
  const rewards: Record<string, Reward> = {};

  const titles = await exportTitles();
  const filePath = path.join(__dirname, "data", "rewards.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8")) as Record<
    string,
    Required<JSONPictoPrototypeObject>
  >;

  Object.entries(data).forEach(([id, rewardData]) => {
    // All languages are available
    if (
      typeof rewardData.name !== "object" ||
      typeof rewardData.desc !== "object"
    ) {
      throw new Error(`Reward with id ${id} is missing translations`);
    }

    rewards[id] = {
      id,
      numericalId: rewardData.id,
      icon: /pictos\/(.+)\..+\.gif/.exec(rewardData.img)?.[1] ?? "",
      name: {
        [Lang.EN]: rewardData.name.en ?? "",
        [Lang.FR]: rewardData.name.fr ?? "",
        [Lang.DE]: rewardData.name.de ?? "",
        [Lang.ES]: rewardData.name.es ?? "",
      },
      description: {
        [Lang.EN]: rewardData.desc.en ?? "",
        [Lang.FR]: rewardData.desc.fr ?? "",
        [Lang.DE]: rewardData.desc.de ?? "",
        [Lang.ES]: rewardData.desc.es ?? "",
      },
      community: rewardData.community,
      rare: rewardData.rare,
      titles: titles[id] ?? [],
    };
  });

  addHiddenRewardTitles(rewards);

  types += `export enum RewardId {
  ${Object.values(rewards)
    .map((reward) => `${sanitizeRewardId(reward)} = "${reward.id}"`)
    .join(",\n  ")}
}

export type Reward = {
  id: RewardId;
  numericalId: number;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  icon: string;
  community: boolean;
  rare: boolean;
  titles?: {
    name: Record<Lang, string | string[]>;
    quantity: number;
    points?: number;
  }[];
};`;

  const rewardsObject = `export const rewards: Readonly<Record<RewardId, Reward>> = {
  ${Object.values(rewards)
    .map(
      (reward) => `[RewardId.${sanitizeRewardId(reward)}]: {
    id: RewardId.${sanitizeRewardId(reward)},
    numericalId: ${reward.numericalId},
    name: {
      ${languages
        .map(
          (lang) =>
            `[Lang.${lang.toUpperCase()}]: "${sanitizeText(reward.name[lang])}"`
        )
        .join(",\n      ")}
    },
    description: {
      ${languages
        .map(
          (lang) =>
            `[Lang.${lang.toUpperCase()}]: "${sanitizeText(
              reward.description[lang]
            )}"`
        )
        .join(",\n      ")}
    },
    icon: "${reward.icon}",
    community: ${reward.community},
    rare: ${reward.rare}${
        reward.titles.length > 0
          ? `,
    titles: [
      ${reward.titles
        .map(
          (title) => `{
        name: {
          ${Object.entries(title.name)
            .map(
              ([lang, name]) =>
                `[Lang.${lang.toUpperCase()}]: ${
                  Array.isArray(name)
                    ? `["${name.join('", "')}"]`
                    : `"${sanitizeText(name)}"`
                }`
            )
            .join(",\n          ")}
        },
        quantity: ${title.quantity}${
            title.points !== undefined
              ? `,
        points: ${title.points}`
              : ""
          }
      }`
        )
        .join(",\n      ")}
    ]`
          : ""
      }
  }`
    )
    .join(",\n  ")}

};`;

  const output = `import { Reward, RewardId } from './types';

${rewardsObject}`;

  fs.writeFileSync(
    path.join(__dirname, "..", "src", "data", "rewards.ts"),
    output,
    "utf-8"
  );
  console.log("rewards.ts file has been generated.");
};

const generateTypes = () => {
  fs.writeFileSync(
    path.join(__dirname, "..", "src", "data", "types.ts"),
    types,
    "utf-8"
  );
  console.log("types.ts file has been generated.");
};

(async () => {
  // Get last API game version stored in game-version.json
  const gameVersionFilePath = path.join(
    __dirname,
    "..",
    "src",
    "data",
    "game-version.json"
  );
  const gameVersionFile = fs.readFileSync(gameVersionFilePath, "utf-8");
  const gameVersion = JSON.parse(gameVersionFile) as {
    version: string;
  };

  dotenv.config();
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

  // Fetch APi status
  const apiStatus = await api.json.statusList();

  // Check if the game version has changed
  if (
    apiStatus.data.version &&
    apiStatus.data.version !== gameVersion.version
  ) {
    console.log(
      `New game version available: ${apiStatus.data.version}. Fetching new data...`
    );

    // Fetch items
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

    // Fetch buildings
    const buildingsResponse = await api.json.buildingsList({
      fields:
        "id,img,name,desc,pa,maxLife,breakable,def,hasUpgrade,rarity,temporary,parent,order,resources.rsc.fields(id)",
    });

    const buildings = buildingsResponse.data;

    // Save buildings to a file
    fs.writeFileSync(
      path.join(__dirname, "data", "buildings.json"),
      JSON.stringify(buildings, null, 2),
      "utf-8"
    );

    // Fetch rewards
    const rewardsResponse = await api.json.pictosList({
      fields: "id,img,name,desc,community,rare",
    });

    const rewards = rewardsResponse.data;

    // Save rewards to a file
    fs.writeFileSync(
      path.join(__dirname, "data", "rewards.json"),
      JSON.stringify(rewards, null, 2),
      "utf-8"
    );

    // Fetch ruins
    const ruinsResponse = await api.json.ruinsList({
      fields: "id,img,name,desc,explorable",
    });

    const ruins = ruinsResponse.data;

    fs.writeFileSync(
      path.join(__dirname, "data", "ruins.json"),
      JSON.stringify(ruins, null, 2),
      "utf-8"
    );
  }

  const rules = await exportRules();
  const drops = generateItemDrops();
  const items = await generateItems(rules, drops);
  await generateRuins(items);
  generateRecipes(items);
  await generateBuildings(items);
  await generateRewards();
  generateTypes();

  // Update game version file
  if (apiStatus.data.version) {
    fs.writeFileSync(
      gameVersionFilePath,
      JSON.stringify(
        {
          version: apiStatus.data.version,
        },
        null,
        2
      ),
      "utf-8"
    );
  }

  console.log("Data generation completed.");
  process.exit(0);
})().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
