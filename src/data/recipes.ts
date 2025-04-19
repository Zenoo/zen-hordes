import { ItemId } from './items';
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
};

export const recipes: Readonly<Recipe>[] = [
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.REPAIR_KIT_PART }
    ],
    out: [
      { item: ItemId.REPAIR_KIT }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.CAN }
    ],
    out: [
      { item: ItemId.CAN_OPEN }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.PLATE_RAW }
    ],
    out: [
      { item: ItemId.PLATE }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.WOOD_LOG }
    ],
    out: [
      { item: ItemId.WOOD2 }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.WOOD_BAD }
    ],
    out: [
      { item: ItemId.WOOD2 }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.WOOD2 }
    ],
    out: [
      { item: ItemId.WOOD_BEAM }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.WOOD_BEAM }
    ],
    out: [
      { item: ItemId.WOOD2 }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.METAL_BAD }
    ],
    out: [
      { item: ItemId.METAL }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.METAL }
    ],
    out: [
      { item: ItemId.METAL_BEAM }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.METAL_BEAM }
    ],
    out: [
      { item: ItemId.METAL }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.ELECTRO_BOX }
    ],
    out: [
      { item: ItemId.ELECTRO, odds: 23 },
      { item: ItemId.MECA_PARTS, odds: 18 },
      { item: ItemId.PILEGUN_EMPTY, odds: 16 },
      { item: ItemId.PILE, odds: 15 },
      { item: ItemId.TAGGER, odds: 14 },
      { item: ItemId.DETO, odds: 14 }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.MECANISM }
    ],
    out: [
      { item: ItemId.METAL, odds: 51 },
      { item: ItemId.MECA_PARTS, odds: 32 },
      { item: ItemId.TUBE, odds: 9 },
      { item: ItemId.METAL_BAD, odds: 8 }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.CHEST }
    ],
    out: [
      { item: ItemId.BANDAGE, odds: 28 },
      { item: ItemId.VODKA, odds: 20 },
      { item: ItemId.DRUG, odds: 16 },
      { item: ItemId.DRUG_HERO, odds: 16 },
      { item: ItemId.EXPLO, odds: 8 },
      { item: ItemId.RHUM, odds: 8 },
      { item: ItemId.LIGHTS, odds: 4 }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.CHEST_XL }
    ],
    out: [
      { item: ItemId.WATERGUN_OPT_PART, odds: 19 },
      { item: ItemId.MIXERGUN_PART, odds: 19 },
      { item: ItemId.POCKET_BELT, odds: 12 },
      { item: ItemId.CHAINSAW_PART, odds: 12 },
      { item: ItemId.LAWN_PART, odds: 12 },
      { item: ItemId.PILEGUN_UPKIT, odds: 10 },
      { item: ItemId.CUTCUT, odds: 10 },
      { item: ItemId.BIG_PGUN_PART, odds: 7 }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.CHEST_TOOLS }
    ],
    out: [
      { item: ItemId.PHARMA, odds: 25 },
      { item: ItemId.EXPLO, odds: 19 },
      { item: ItemId.MECA_PARTS, odds: 17 },
      { item: ItemId.RUSTINE, odds: 13 },
      { item: ItemId.TUBE, odds: 13 },
      { item: ItemId.PILE, odds: 12 }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.CHEST_FOOD }
    ],
    out: [
      { item: ItemId.HMEAT, odds: 13 },
      { item: ItemId.CAN, odds: 11 },
      { item: ItemId.FOOD_BAG, odds: 8 },
      { item: ItemId.VEGETABLE, odds: 8 },
      { item: ItemId.MEAT, odds: 7 }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.DECO_BOX }
    ],
    out: [
      { item: ItemId.CHAIR_BASIC, odds: 60 },
      { item: ItemId.CHAIR, odds: 46 },
      { item: ItemId.DOOR, odds: 44 },
      { item: ItemId.TRESTLE, odds: 35 },
      { item: ItemId.TABLE, odds: 35 }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.CATBOX }
    ],
    out: [
      { item: ItemId.POISON_PART },
      { item: ItemId.PET_CAT },
      { item: ItemId.ANGRYC }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.PRINTS }
    ],
    out: [
      { item: ItemId.MAGNETICKEY }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.PRINTS_01 }
    ],
    out: [
      { item: ItemId.BUMPKEY }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.PRINTS_02 }
    ],
    out: [
      { item: ItemId.CLASSICKEY }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.FOOD_XMAS }
    ],
    out: [
      { item: ItemId.WOOD_XMAS }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.NOODLE_PRINTS }
    ],
    out: [
      { item: ItemId.MAGNETICKEY }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.NOODLE_PRINTS_01 }
    ],
    out: [
      { item: ItemId.BUMPKEY }
    ],
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.NOODLE_PRINTS_02 }
    ],
    out: [
      { item: ItemId.CLASSICKEY }
    ],
  },
  {
    type: RecipeType.WorkshopShaman,
    in: [
      { item: ItemId.SOUL_BLUE }
    ],
    out: [
      { item: ItemId.SOUL_YELLOW }
    ],
    pictos: [PictoId.MYSTIC2],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.COFFEE_MACHINE_PART },
      { item: ItemId.CYANURE },
      { item: ItemId.ELECTRO },
      { item: ItemId.MECA_PARTS },
      { item: ItemId.RUSTINE },
      { item: ItemId.METAL },
      { item: ItemId.TUBE }
    ],
    out: [
      { item: ItemId.COFFEE_MACHINE }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.MUSIC_PART },
      { item: ItemId.PILE },
      { item: ItemId.ELECTRO }
    ],
    out: [
      { item: ItemId.MUSIC }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.WIRE },
      { item: ItemId.OILCAN },
      { item: ItemId.STAFF2 }
    ],
    out: [
      { item: ItemId.GUITAR }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CAR_DOOR_PART },
      { item: ItemId.MECA_PARTS },
      { item: ItemId.RUSTINE },
      { item: ItemId.METAL }
    ],
    out: [
      { item: ItemId.CAR_DOOR }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.LIGHTS },
      { item: ItemId.WOOD_BAD }
    ],
    out: [
      { item: ItemId.TORCH }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.WOOD_PLATE_PART },
      { item: ItemId.WOOD2 }
    ],
    out: [
      { item: ItemId.WOOD_PLATE }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CONCRETE },
      { item: ItemId.WATER }
    ],
    out: [
      { item: ItemId.CONCRETE_WALL }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CHAMA },
      { item: ItemId.TORCH }
    ],
    out: [
      { item: ItemId.CHAMA_TASTY }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.FOOD_NOODLES },
      { item: ItemId.SPICES },
      { item: ItemId.WATER }
    ],
    out: [
      { item: ItemId.FOOD_NOODLES_HOT }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.COFFEE_MACHINE },
      { item: ItemId.PILE },
      { item: ItemId.PHARMA },
      { item: ItemId.WOOD_BAD }
    ],
    out: [
      { item: ItemId.COFFEE_MACHINE },
      { item: ItemId.COFFEE }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.WATERGUN_OPT_PART },
      { item: ItemId.TUBE },
      { item: ItemId.DETO },
      { item: ItemId.GRENADE_EMPTY },
      { item: ItemId.RUSTINE }
    ],
    out: [
      { item: ItemId.WATERGUN_OPT_EMPTY }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.PILEGUN_UPKIT },
      { item: ItemId.PILEGUN_EMPTY },
      { item: ItemId.MECA_PARTS },
      { item: ItemId.ELECTRO },
      { item: ItemId.RUSTINE }
    ],
    out: [
      { item: ItemId.PILEGUN_UP_EMPTY }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.MIXERGUN_PART },
      { item: ItemId.MECA_PARTS },
      { item: ItemId.ELECTRO },
      { item: ItemId.RUSTINE }
    ],
    out: [
      { item: ItemId.MIXERGUN_EMPTY }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.JERRYGUN_PART },
      { item: ItemId.JERRYCAN },
      { item: ItemId.RUSTINE }
    ],
    out: [
      { item: ItemId.JERRYGUN }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CHAINSAW_PART },
      { item: ItemId.ENGINE },
      { item: ItemId.MECA_PARTS },
      { item: ItemId.COURROIE },
      { item: ItemId.RUSTINE }
    ],
    out: [
      { item: ItemId.CHAINSAW_EMPTY }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.EXPLO },
      { item: ItemId.GRENADE_EMPTY },
      { item: ItemId.DETO },
      { item: ItemId.RUSTINE }
    ],
    out: [
      { item: ItemId.BGRENADE_EMPTY }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.LAWN_PART },
      { item: ItemId.MECA_PARTS },
      { item: ItemId.METAL },
      { item: ItemId.RUSTINE }
    ],
    out: [
      { item: ItemId.LAWN }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.POWDER },
      { item: ItemId.GRENADE_EMPTY },
      { item: ItemId.RUSTINE }
    ],
    out: [
      { item: ItemId.FLASH }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.BIG_PGUN_PART },
      { item: ItemId.MECA_PARTS },
      { item: ItemId.COURROIE }
    ],
    out: [
      { item: ItemId.BIG_PGUN_EMPTY }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CART_PART },
      { item: ItemId.RUSTINE },
      { item: ItemId.METAL },
      { item: ItemId.TUBE }
    ],
    out: [
      { item: ItemId.CART }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.POISON_PART },
      { item: ItemId.PILE },
      { item: ItemId.PHARMA }
    ],
    out: [
      { item: ItemId.POISON }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.FLESH_PART },
      { item: ItemId.FLESH_PART }
    ],
    out: [
      { item: ItemId.FLESH }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.SAW_TOOL_PART },
      { item: ItemId.RUSTINE },
      { item: ItemId.MECA_PARTS }
    ],
    out: [
      { item: ItemId.SAW_TOOL }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.ENGINE_PART },
      { item: ItemId.RUSTINE },
      { item: ItemId.MECA_PARTS },
      { item: ItemId.METAL },
      { item: ItemId.DETO },
      { item: ItemId.BONE }
    ],
    out: [
      { item: ItemId.ENGINE }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.REPAIR_KIT_PART_RAW },
      { item: ItemId.RUSTINE },
      { item: ItemId.MECA_PARTS },
      { item: ItemId.WOOD2 }
    ],
    out: [
      { item: ItemId.REPAIR_KIT }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.FRUIT_SUB_PART },
      { item: ItemId.FRUIT_SUB_PART }
    ],
    out: [
      { item: ItemId.FRUIT_PART }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.PHARMA },
      { item: ItemId.PHARMA }
    ],
    out: [
      { item: ItemId.DRUG_HERO, odds: 49 },
      { item: ItemId.DRUG_RANDOM, odds: 46 },
      { item: ItemId.DRUG_WATER, odds: 46 },
      { item: ItemId.WATER_CLEANER, odds: 43 },
      { item: ItemId.DRUG, odds: 42 },
      { item: ItemId.XANAX, odds: 40 }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.PHARMA_PART },
      { item: ItemId.PHARMA_PART }
    ],
    out: [
      { item: ItemId.PHARMA, odds: 7 },
      { item: ItemId.DRUG_RANDOM, odds: 2 },
      { item: ItemId.DRUG_WATER, odds: 2 },
      { item: ItemId.DRUG, odds: 1 },
      { item: ItemId.XANAX, odds: 1 },
      { item: ItemId.WATER_CLEANER, odds: 1 }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CLAYMO },
      { item: ItemId.DOOR_CARPET }
    ],
    out: [
      { item: ItemId.TRAPMA }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.WIRE },
      { item: ItemId.EXPLO },
      { item: ItemId.MECA_PARTS },
      { item: ItemId.RUSTINE }
    ],
    out: [
      { item: ItemId.CLAYMO }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.TUBE },
      { item: ItemId.LENS }
    ],
    out: [
      { item: ItemId.SCOPE }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.RYEBAG },
      { item: ItemId.LENS }
    ],
    out: [
      { item: ItemId.FUNGUS }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.FUNGUS },
      { item: ItemId.POISON_PART }
    ],
    out: [
      { item: ItemId.LSD }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CHUDOL },
      { item: ItemId.LSD }
    ],
    out: [
      { item: ItemId.CHKSPK }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.FRUIT_SUB_PART },
      { item: ItemId.FRUIT_PART }
    ],
    out: [
      { item: ItemId.FRUIT }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CDELVI },
      { item: ItemId.MUSIC }
    ],
    out: [
      { item: ItemId.DFHIFI }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CDPHIL },
      { item: ItemId.MUSIC }
    ],
    out: [
      { item: ItemId.HIFIEV }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CDBRIT },
      { item: ItemId.MUSIC }
    ],
    out: [
      { item: ItemId.HIFIEV }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.HIFIEV },
      { item: ItemId.BQUIES }
    ],
    out: [
      { item: ItemId.DFHIFI_01 }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.WIRE },
      { item: ItemId.MECA_PARTS },
      { item: ItemId.TUBE },
      { item: ItemId.MAGLITE_2 },
      { item: ItemId.DIODE }
    ],
    out: [
      { item: ItemId.LPOINT4 }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.FUNGUS },
      { item: ItemId.VODKA },
      { item: ItemId.OILCAN }
    ],
    out: [
      { item: ItemId.HMBREW }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.FOOD_XMAS },
      { item: ItemId.CAN_OPEN }
    ],
    out: [
      { item: ItemId.WOOD_XMAS }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.GUN },
      { item: ItemId.BULLETS }
    ],
    out: [
      { item: ItemId.GUN }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.MACHINE_GUN },
      { item: ItemId.BULLETS }
    ],
    out: [
      { item: ItemId.MACHINE_GUN }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CHRISTMAS_SUIT_1 },
      { item: ItemId.CHRISTMAS_SUIT_2 },
      { item: ItemId.CHRISTMAS_SUIT_3 }
    ],
    out: [
      { item: ItemId.CHRISTMAS_SUIT_FULL }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.PUMPKIN_OFF },
      { item: ItemId.LIGHTS },
      { item: ItemId.PHARMA }
    ],
    out: [
      { item: ItemId.PUMPKIN_ON }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.PET_SNAKE2 },
      { item: ItemId.CUTTER }
    ],
    out: [
      { item: ItemId.ANGRYC }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.PUMPKIN_RAW },
      { item: ItemId.SMALL_KNIFE }
    ],
    out: [
      { item: ItemId.PUMPKIN_OFF }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.INFECT_POISON_PART },
      { item: ItemId.DRUG },
      { item: ItemId.PHARMA },
      { item: ItemId.WATER },
      { item: ItemId.DRUG_WATER }
    ],
    out: [
      { item: ItemId.INFECT_POISON }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.LPOINT },
      { item: ItemId.PILE }
    ],
    out: [
      { item: ItemId.LPOINT2, odds: 1 },
      { item: ItemId.LPOINT3, odds: 1 },
      { item: ItemId.LPOINT4, odds: 1 }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CELLO_BOX }
    ],
    out: [
      { item: ItemId.GUN, odds: 1 },
      { item: ItemId.MACHINE_GUN, odds: 1 },
      { item: ItemId.KNIFE, odds: 1 },
      { item: ItemId.MONEY, odds: 1 },
      { item: ItemId.PET_CAT, odds: 1 }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.SOCCER_PART },
      { item: ItemId.RUSTINE }
    ],
    out: [
      { item: ItemId.SOCCER }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.RUSTINE },
      { item: ItemId.CHAIN },
      { item: ItemId.METAL },
      { item: ItemId.BIKE_PART }
    ],
    out: [
      { item: ItemId.BIKE }
    ],
  },
  {
    type: RecipeType.ExplorableRuinDoor,
    in: [
      { item: ItemId.FOOD_NOODLES },
      { item: ItemId.PHARMA }
    ],
    out: [
      { item: ItemId.NOODLE_PRINTS }
    ],
  },
  {
    type: RecipeType.ExplorableRuinDoor,
    in: [
      { item: ItemId.FOOD_NOODLES },
      { item: ItemId.PHARMA }
    ],
    out: [
      { item: ItemId.NOODLE_PRINTS_01 }
    ],
  },
  {
    type: RecipeType.ExplorableRuinDoor,
    in: [
      { item: ItemId.FOOD_NOODLES },
      { item: ItemId.PHARMA }
    ],
    out: [
      { item: ItemId.NOODLE_PRINTS_02 }
    ],
  },
  {
    type: RecipeType.ManualInside,
    in: [
      { item: ItemId.XMAS_GIFT }
    ],
    out: [
      { item: ItemId.XMAS_GIFT_01 }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.MEDIC }
    ],
    out: [
      { item: ItemId.XANAX, odds: 37 },
      { item: ItemId.DRUG_WATER, odds: 37 },
      { item: ItemId.WATER_CLEANER, odds: 37 },
      { item: ItemId.RYEBAG, odds: 37 },
      { item: ItemId.DISINFECT, odds: 28 },
      { item: ItemId.PHARMA, odds: 20 },
      { item: ItemId.CYANURE, odds: 2 },
      { item: ItemId.DRUG, odds: 1 },
      { item: ItemId.BANDAGE, odds: 1 }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.WATER },
      { item: ItemId.INFECT_POISON }
    ],
    out: [
      { item: ItemId.WATER, infected: true }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CAN_OPEN },
      { item: ItemId.INFECT_POISON }
    ],
    out: [
      { item: ItemId.CAN_OPEN, infected: true }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.DRUG },
      { item: ItemId.INFECT_POISON }
    ],
    out: [
      { item: ItemId.DRUG, infected: true }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.VEGETABLE },
      { item: ItemId.INFECT_POISON }
    ],
    out: [
      { item: ItemId.VEGETABLE, infected: true }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.FRUIT },
      { item: ItemId.INFECT_POISON }
    ],
    out: [
      { item: ItemId.FRUIT, infected: true }
    ],
  },
  {
    type: RecipeType.ExplorableRuinDoor,
    in: [
      { item: ItemId.KEYMOL }
    ],
    out: [
      { item: ItemId.PRINTS }
    ],
  },
  {
    type: RecipeType.ExplorableRuinDoor,
    in: [
      { item: ItemId.KEYMOL }
    ],
    out: [
      { item: ItemId.PRINTS_01 }
    ],
  },
  {
    type: RecipeType.ExplorableRuinDoor,
    in: [
      { item: ItemId.KEYMOL }
    ],
    out: [
      { item: ItemId.PRINTS_02 }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.WATER },
      { item: ItemId.POISON }
    ],
    out: [
      { item: ItemId.WATER, poisoned: true }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CAN_OPEN },
      { item: ItemId.POISON }
    ],
    out: [
      { item: ItemId.CAN_OPEN, poisoned: true }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.DRUG },
      { item: ItemId.POISON }
    ],
    out: [
      { item: ItemId.DRUG, poisoned: true }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.VEGETABLE },
      { item: ItemId.POISON }
    ],
    out: [
      { item: ItemId.VEGETABLE, poisoned: true }
    ],
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.FRUIT },
      { item: ItemId.POISON }
    ],
    out: [
      { item: ItemId.FRUIT, poisoned: true }
    ],
  }
];