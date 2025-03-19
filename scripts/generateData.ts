import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

type Lang = 'en' | 'fr' | 'de' | 'es';

type ItemData = {
  id: number;
  name: string;
  desc: string;
  cat: string;
  img: string;
}

type Item = {
  id: number;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  category: string;
  icon: string;
}

const sanitizeItemId = (item?: Item) => {
  if (!item) {
    throw new Error('Item is undefined');
  }

  // Duplicates
  switch (item.id) {
    case 333: return 'BROKEN_STAFF_2';
    case 338: return 'PRE_WAR_CAMERA_3';
    case 339: return 'PRE_WAR_CAMERA_2';
    case 340: return 'PRE_WAR_CAMERA_1';
    case 341: return 'PRE_WAR_CAMERA_OFF';
    case 348: return 'CHRISTMAS_GIFT_PARCEL';
    case 375: return 'PRE_WAR_CAMERA_4';
  }

  return item.name.en.replace(/\(|\)/g, '').replace(/[^a-zA-Z0-9]/g, '_').toUpperCase()
};

const languages: Lang[] = ['en', 'fr', 'de', 'es'];

const generateItems = () => {
  const items: Record<number, Item> = {};

  languages.forEach((lang) => {
    const filePath = path.join(__dirname, 'data', `items-${lang}.json`);
    const data: Record<string, ItemData> = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Record<string, ItemData>;

    Object.values(data).forEach((itemData) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!items[itemData.id]) {
        items[itemData.id] = {
          id: itemData.id,
          name: {} as Record<Lang, string>,
          description: {} as Record<Lang, string>,
          category: itemData.cat,
          icon: itemData.img,
        };
      }

      const item = items[itemData.id];
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!item) {
        throw new Error(`Item with id ${itemData.id} not found`);
      }
      item.name[lang] = itemData.name.replace(/"/g, '\\"');
      item.description[lang] = itemData.desc.replace(/"/g, '\\"');
    });
  });

  const itemCategories = Array.from(new Set(Object.values(items).map(item => item.category)));

  const itemCategoryEnum = `export enum ItemCategory {
  ${itemCategories.map(cat => `${cat} = "${cat}"`).join(',\n  ')}
}`;

  const itemIdEnum = `export enum ItemId {
  ${Object.values(items).map(item => `${sanitizeItemId(item)} = ${item.id}`).join(',\n  ')}
}`;

  const itemType = `export type Item = {
  id: ItemId;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  category: ItemCategory;
  icon: string;
};`;

  const itemsArray = `export const items: Record<ItemId, Item> = {
  ${Object.values(items).map(item => `[ItemId.${sanitizeItemId(item)}]: {
    id: ItemId.${sanitizeItemId(item)},
    name: {
      ${languages.map(lang => `[Lang.${lang.toUpperCase()}]: "${item.name[lang]}"`).join(',\n      ')}
    },
    description: {
      ${languages.map(lang => `[Lang.${lang.toUpperCase()}]: "${item.description[lang]}"`).join(',\n      ')}
    },
    category: ItemCategory.${item.category},
    icon: "${item.icon}"
  }`).join(',\n  ')}
};`;

const output = `${itemCategoryEnum}

${itemIdEnum}

${itemType}

${itemsArray}`;

  fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'items.ts'), output, 'utf-8');
  console.log('items.ts file has been generated.');

  return items;
};

type ZoneBuildingData = {
  id: number;
  name: string;
  desc: string;
  km_min: number;
  km_max: number;
  explorable: number;
}

enum Event {
  StPatrick = 0,
  Infective = 1,
  Christmas = 2,
}

type ZoneBuilding = {
  id: number;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  icon: string;
  campingModifier: number,
  spawnChance: number,
  emptyChance: number,
  km: {
    min: number;
    max: number;
  }
  explorable: boolean;
  drops: {
    id: number;
    odds: number;
    event?: number;
  }[];
}


const sanitizeBuildingId = (building: ZoneBuilding) => {
  // Duplicates
  switch (building.id) {
    case 42: return 'SMUGGLERS_CACHE';
  }

  return building.name.en.replace(/\(|\)/g, '').replace(/[^a-zA-Z0-9]/g, '_').toUpperCase()
};

const generateZoneBuildings = (items: Record<number, Item>) => {
  const buildings: Record<number, ZoneBuilding> = {};

  languages.forEach((lang) => {
    const filePath = path.join(__dirname, 'data', `zone_buildings-${lang}.json`);
    const data: Record<string, ZoneBuildingData> = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Record<string, ZoneBuildingData>;

    Object.values(data).forEach((buildingData) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!buildings[buildingData.id]) {
        buildings[buildingData.id] = {
          id: buildingData.id,
          name: {} as Record<Lang, string>,
          description: {} as Record<Lang, string>,
          icon: '',
          campingModifier: 0,
          spawnChance: 0,
          emptyChance: 0,
          km: {
            min: buildingData.km_min,
            max: buildingData.km_max,
          },
          explorable: buildingData.explorable === 1,
          drops: [],
        };
      }

      const building = buildings[buildingData.id];
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!building) {
        throw new Error(`Building with id ${buildingData.id} not found`);
      }
      building.name[lang] = buildingData.name.replace(/"/g, '\\"');
      building.description[lang] = buildingData.desc.replace(/"/g, '\\"');
    });
  });

  // Export zone buildings data from the main repo
  execSync('php scripts/exportZoneBuildings.php', { stdio: 'inherit' });

  const zoneBuildingsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'zoneBuildings.json'), 'utf-8')) as Record<string, {
    label: string;
    icon: string;
    camping: number;
    chance: number;
    empty: number;
    drops: Record<string, number | [number, number]>;
  }>;

  Object.values(zoneBuildingsData).forEach((buildingData) => {
    const germanName = buildingData.label;

    const building = Object.values(buildings).find(b => b.name.de === germanName);
    if (!building) {
      throw new Error(`Building with name ${germanName} not found`);
    }

    building.icon = buildingData.icon;
    building.campingModifier = buildingData.camping;
    building.spawnChance = buildingData.chance;
    building.emptyChance = buildingData.empty;
    building.drops = Object.entries(buildingData.drops).map(([itemId, dropData]) => {
      const itemIcon = itemId.split('#')[0].slice(0, -1);
      const itemIndex = +itemId.split('#')[1];
      const item = Object.values(items).filter(i => i.icon === `item_${itemIcon}`)[itemIndex];

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!item) {
        throw new Error(`Item with itemId ${itemId} not found`);
      }

      return {
        id: item.id,
        odds: Array.isArray(dropData) ? dropData[0] : dropData,
        event: Array.isArray(dropData) ? dropData[1] : undefined,
      };
    });
  });

  const buildingIdEnum = `export enum ZoneBuildingId {
  ${Object.values(buildings).map(building => `${sanitizeBuildingId(building)} = ${building.id}`).join(',\n  ')}
}`;

  const types = `import { ItemId } from './items';

export enum Event {
  StPatrick = 0,
  Infective = 1,
  Christmas = 2,
};

${buildingIdEnum}

export type ZoneBuilding = {
  id: ZoneBuildingId;
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
    event?: Event;
  }[];
};`;

  const buildingsArray = `export const zoneBuildings: Record<ZoneBuildingId, ZoneBuilding> = {
  ${Object.values(buildings).map(building => `[ZoneBuildingId.${sanitizeBuildingId(building)}]: {
    id: ZoneBuildingId.${sanitizeBuildingId(building)},
    name: {
      ${languages.map(lang => `[Lang.${lang.toUpperCase()}]: "${building.name[lang]}"`).join(',\n      ')}
    },
    description: {
      ${languages.map(lang => `[Lang.${lang.toUpperCase()}]: "${building.description[lang]}"`).join(',\n      ')}
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
      ${building.drops.map(drop => `{
        item: ItemId.${sanitizeItemId(Object.values(items).find(i => i.id === drop.id))},
        odds: ${drop.odds},${drop.event ? `\n          event: Event.${Event[drop.event]}` : ''}
      }`).join(',\n        ')}
    ]
  }`).join(',\n  ')}
};`;

  const output = `${types}

${buildingsArray}`;

  fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'zoneBuildings.ts'), output, 'utf-8');
  console.log('zoneBuildings.ts file has been generated.');
};

enum RecipeType {
  Workshop = 1,
  WorkshopShaman = 2,
  WorkshopTech = 3,
  ManualOutside = 11,
  ManualInside = 12,
  ManualAnywhere = 13,
}

type RecipeData = Record<string, {
  type: RecipeType;
  in: string | string[];
  out: string | string[] | [string, number][];
}>

type RecipeItem = {
  item: number;
  odds?: number;
}

type Recipe = {
  type: RecipeType;
  in: RecipeItem[];
  out: RecipeItem[];
}

const generateRecipes = (items: Record<number, Item>) => {
  const recipes: Recipe[] = [];

  const handleItemExceptions = (item: string) => {
    switch (item) {
      case 'prints_#00': return 'magnetic_print_#00';
      case 'prints_#01': return 'prints_#00';
      case 'prints_#02': return 'bottle_print_#00';
      case 'noodle_prints_#00': return 'noodle_magnetic_print_#00';
      case 'noodle_prints_#01': return 'noodle_prints_#00';
      case 'noodle_prints_#02': return 'noodle_bottle_print_#00';
    }

    return item;
  };

  // Export recipes data from the main repo
  execSync('php scripts/exportRecipes.php', { stdio: 'inherit' });

  const recipesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'recipes.json'), 'utf-8')) as RecipeData;

  Object.values(recipesData).forEach((recipeData) => {
    const ingredients: RecipeItem[] = [];

    (Array.isArray(recipeData.in) ? recipeData.in : [recipeData.in]).forEach(_i => {
      const i = handleItemExceptions(_i);
      const itemIcon = i.split('#')[0].slice(0, -1);
      const itemIndex = +i.split('#')[1];
      const item = Object.values(items).filter(i => i.icon === `item_${itemIcon}`)[itemIndex];

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!item) {
        throw new Error(`Item with itemId ${i} not found`);
      }

      ingredients.push({ item: item.id });
    });

    const outputs: RecipeItem[] = [];

    (Array.isArray(recipeData.out) ? recipeData.out : [recipeData.out]).forEach(o => {
      const odds = Array.isArray(o) ? o[1] : undefined;
      const baseItem = Array.isArray(o) ? o[0] : o;
      const itemIcon = baseItem.split('#')[0].slice(0, -1);
      const itemIndex = +baseItem.split('#')[1];
      const item = Object.values(items).filter(i => i.icon === `item_${itemIcon}`)[itemIndex];

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!item) {
        throw new Error(`Item with itemId ${baseItem} not found`);
      }

      outputs.push({ item: item.id, odds });
    });

    recipes.push({
      type: recipeData.type,
      in: ingredients,
      out: outputs,
    });
  });

  const types = `import { ItemId } from './items';

export enum RecipeType {
  Workshop = 1,
  WorkshopShaman = 2,
  WorkshopTech = 3,
  ManualOutside = 11,
  ManualInside = 12,
  ManualAnywhere = 13,
};

export type RecipeItem = {
  item: ItemId;
  odds?: number;
}

export type Recipe = {
  type: RecipeType;
  in: RecipeItem[];
  out: RecipeItem[];
};`;

  const recipesArray = `export const recipes: Recipe[] = [
  ${recipes.map(recipe => `{
    type: RecipeType.${RecipeType[recipe.type]},
    in: [
      ${recipe.in.map(i => `{ item: ItemId.${sanitizeItemId(Object.values(items).find(it => it.id === i.item))} }`).join(',\n      ')}
    ],
    out: [
      ${recipe.out.map(o => `{ item: ItemId.${sanitizeItemId(Object.values(items).find(it => it.id === o.item))}${o.odds ? `, odds: ${o.odds}` : ''} }`).join(',\n      ')}
    ]
  }`).join(',\n  ')}
];`;

  const output = `${types}

${recipesArray}`;

  fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'recipes.ts'), output, 'utf-8');
  console.log('recipes.ts file has been generated.');
}

const items = generateItems();
generateZoneBuildings(items);
generateRecipes(items);
