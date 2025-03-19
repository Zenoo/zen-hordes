import { ItemId } from './items';

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
};

export const recipes: Recipe[] = [
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.REPAIR_KIT_DAMAGED }
    ],
    out: [
      { item: ItemId.REPAIR_KIT }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.CAN }
    ],
    out: [
      { item: ItemId.OPEN_CAN }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.SHEET_METAL_PARTS }
    ],
    out: [
      { item: ItemId.SHEET_METAL }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.QUALITY_LOG }
    ],
    out: [
      { item: ItemId.TWISTED_PLANK }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.ROTTING_LOG }
    ],
    out: [
      { item: ItemId.TWISTED_PLANK }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.TWISTED_PLANK }
    ],
    out: [
      { item: ItemId.PATCHWORK_BEAM }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.PATCHWORK_BEAM }
    ],
    out: [
      { item: ItemId.TWISTED_PLANK }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.SCRAP_METAL }
    ],
    out: [
      { item: ItemId.WROUGHT_IRON }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.WROUGHT_IRON }
    ],
    out: [
      { item: ItemId.METAL_SUPPORT }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.METAL_SUPPORT }
    ],
    out: [
      { item: ItemId.WROUGHT_IRON }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.BROKEN_ELECTRONIC_DEVICE }
    ],
    out: [
      { item: ItemId.BATTERY, odds: 15 },
      { item: ItemId.BATTERY_LAUNCHER_1_ITF_EMPTY, odds: 16 },
      { item: ItemId.ELECTRONIC_COMPONENT, odds: 23 },
      { item: ItemId.HANDFUL_OF_NUTS_AND_BOLTS, odds: 18 },
      { item: ItemId.RADIUS_RADAR_BEACON, odds: 14 },
      { item: ItemId.COMPACT_DETONATOR, odds: 14 }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.MECHANISM }
    ],
    out: [
      { item: ItemId.WROUGHT_IRON, odds: 51 },
      { item: ItemId.COPPER_PIPE, odds: 9 },
      { item: ItemId.SCRAP_METAL, odds: 8 },
      { item: ItemId.HANDFUL_OF_NUTS_AND_BOLTS, odds: 32 }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.METAL_CHEST }
    ],
    out: [
      { item: ItemId.ANABOLIC_STEROIDS, odds: 16 },
      { item: ItemId.BANDAGE, odds: 28 },
      { item: ItemId.VODKA_MARINOSTOV, odds: 20 },
      { item: ItemId.SEMTEX, odds: 8 },
      { item: ItemId.BOX_OF_MATCHES, odds: 4 },
      { item: ItemId.TWINOID_500MG, odds: 16 },
      { item: ItemId._WAKE_THE_DEAD_, odds: 8 }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.LARGE_METAL_CHEST }
    ],
    out: [
      { item: ItemId.AQUA_SPLASH_INCOMPLETE, odds: 19 },
      { item: ItemId.PUTA_MARK_II_CALIBRATOR, odds: 10 },
      { item: ItemId.UTILITY_BELT, odds: 12 },
      { item: ItemId.MACHETE, odds: 10 },
      { item: ItemId.INCOMPLETE_CHAINSAW, odds: 12 },
      { item: ItemId.ELECTRIC_WHISK_INCOMPLETE, odds: 19 },
      { item: ItemId.DEVASTATOR_INCOMPLETE, odds: 7 },
      { item: ItemId.DISMANTLED_MOWER, odds: 12 }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.TOOLBOX }
    ],
    out: [
      { item: ItemId.BATTERY, odds: 12 },
      { item: ItemId.HANDFUL_OF_NUTS_AND_BOLTS, odds: 17 },
      { item: ItemId.DUCT_TAPE, odds: 13 },
      { item: ItemId.COPPER_PIPE, odds: 13 },
      { item: ItemId.PHARMACEUTICAL_PRODUCTS, odds: 25 },
      { item: ItemId.SEMTEX, odds: 19 }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.FOOD_PARCEL }
    ],
    out: [
      { item: ItemId.DOGGY_BAG, odds: 8 },
      { item: ItemId.CAN, odds: 11 },
      { item: ItemId.TASTY_LOOKING_STEAK, odds: 7 },
      { item: ItemId.HUMAN_FLESH, odds: 13 },
      { item: ItemId.SUSPICIOUS_LOOKING_VEGETABLE, odds: 8 }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.FLATPACKED_FURNITURE }
    ],
    out: [
      { item: ItemId.OLD_DOOR, odds: 44 },
      { item: ItemId.EKTORP_GLUTEN_CHAIR, odds: 60 },
      { item: ItemId.TRESTLE, odds: 35 },
      { item: ItemId.J_RPEN_TABLE, odds: 35 },
      { item: ItemId.ROCKING_CHAIR, odds: 46 }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.SCHR_DINGER_S_BOX }
    ],
    out: [
      { item: ItemId.CORROSIVE_LIQUID },
      { item: ItemId.FAT_CAT },
      { item: ItemId.FURIOUS_KITTEN_PARTIALLY_DIGESTED }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.MAGNETIC_KEY_BLANK }
    ],
    out: [
      { item: ItemId.MAGNETIC_KEY }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.BUMP_KEY_BLANK }
    ],
    out: [
      { item: ItemId.BUMP_KEY }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.BOTTLE_OPENER_BLANK }
    ],
    out: [
      { item: ItemId.BOTTLE_OPENER }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.CROW_ELF }
    ],
    out: [
      { item: ItemId.CHOCOLATE_LOG }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.MAGNETIC_KEY_INSTANT_BLANK }
    ],
    out: [
      { item: ItemId.MAGNETIC_KEY }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.BUMP_KEY_INSTANT_BLANK }
    ],
    out: [
      { item: ItemId.BUMP_KEY }
    ]
  },
  {
    type: RecipeType.Workshop,
    in: [
      { item: ItemId.BOTTLE_OPENER_INSTANT_BLANK }
    ],
    out: [
      { item: ItemId.BOTTLE_OPENER }
    ]
  },
  {
    type: RecipeType.WorkshopShaman,
    in: [
      { item: ItemId.LOST_SOUL }
    ],
    out: [
      { item: ItemId.POWERFUL_SOUL }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.INCOMPLETE_CAFETI_RE },
      { item: ItemId.CYANIDE },
      { item: ItemId.ELECTRONIC_COMPONENT },
      { item: ItemId.HANDFUL_OF_NUTS_AND_BOLTS },
      { item: ItemId.DUCT_TAPE },
      { item: ItemId.WROUGHT_IRON },
      { item: ItemId.COPPER_PIPE }
    ],
    out: [
      { item: ItemId.CAFETI_RE }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.MINI_HI_FI_BROKEN },
      { item: ItemId.BATTERY },
      { item: ItemId.ELECTRONIC_COMPONENT }
    ],
    out: [
      { item: ItemId.MINI_HI_FI_ON }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.WIRE_REEL },
      { item: ItemId.EMPTY_OIL_CAN },
      { item: ItemId.BROKEN_STAFF_2 }
    ],
    out: [
      { item: ItemId.MAKESHIFT_GUITAR }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CAR_DOOR_INCOMPLETE },
      { item: ItemId.HANDFUL_OF_NUTS_AND_BOLTS },
      { item: ItemId.DUCT_TAPE },
      { item: ItemId.WROUGHT_IRON }
    ],
    out: [
      { item: ItemId.CAR_DOOR }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.BOX_OF_MATCHES },
      { item: ItemId.ROTTING_LOG }
    ],
    out: [
      { item: ItemId.TORCH }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CRATE_LID },
      { item: ItemId.TWISTED_PLANK }
    ],
    out: [
      { item: ItemId.SOLID_WOODEN_BOARD }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.BAG_OF_CEMENT },
      { item: ItemId.WATER_RATION }
    ],
    out: [
      { item: ItemId.UNSHAPED_CONCRETE_BLOCKS }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.DRIED_MARSHMALLOWS },
      { item: ItemId.TORCH }
    ],
    out: [
      { item: ItemId.BURNT_MARSHMALLOWS }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CHINESE_NOODLES },
      { item: ItemId.STRONG_SPICES },
      { item: ItemId.WATER_RATION }
    ],
    out: [
      { item: ItemId.SPICY_CHINESE_NOODLES }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.BATTERY },
      { item: ItemId.PHARMACEUTICAL_PRODUCTS },
      { item: ItemId.ROTTING_LOG }
    ],
    out: [
      { item: ItemId.BLOODY_HOT_COFFEE }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.AQUA_SPLASH_INCOMPLETE },
      { item: ItemId.COPPER_PIPE },
      { item: ItemId.COMPACT_DETONATOR },
      { item: ItemId.PLASTIC_BAG },
      { item: ItemId.DUCT_TAPE }
    ],
    out: [
      { item: ItemId.AQUA_SPLASH_EMPTY }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.PUTA_MARK_II_CALIBRATOR },
      { item: ItemId.BATTERY_LAUNCHER_1_ITF_EMPTY },
      { item: ItemId.HANDFUL_OF_NUTS_AND_BOLTS },
      { item: ItemId.ELECTRONIC_COMPONENT },
      { item: ItemId.DUCT_TAPE }
    ],
    out: [
      { item: ItemId.BATTERY_LAUNCHER_MK__II_EMPTY }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.ELECTRIC_WHISK_INCOMPLETE },
      { item: ItemId.HANDFUL_OF_NUTS_AND_BOLTS },
      { item: ItemId.ELECTRONIC_COMPONENT },
      { item: ItemId.DUCT_TAPE }
    ],
    out: [
      { item: ItemId.ELECTRIC_WHISK_NO_BATTERY }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.JERRYCAN_GUN_UNATTACHED },
      { item: ItemId.FULL_JERRYCAN },
      { item: ItemId.DUCT_TAPE }
    ],
    out: [
      { item: ItemId.JERRYCAN_GUN_READY }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.INCOMPLETE_CHAINSAW },
      { item: ItemId.ENGINE },
      { item: ItemId.HANDFUL_OF_NUTS_AND_BOLTS },
      { item: ItemId.BELT },
      { item: ItemId.DUCT_TAPE }
    ],
    out: [
      { item: ItemId.CHAINSAW_EMPTY }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.SEMTEX },
      { item: ItemId.PLASTIC_BAG },
      { item: ItemId.COMPACT_DETONATOR },
      { item: ItemId.DUCT_TAPE }
    ],
    out: [
      { item: ItemId.PLASTIC_BAG_AND_SEMTEX }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.DISMANTLED_MOWER },
      { item: ItemId.HANDFUL_OF_NUTS_AND_BOLTS },
      { item: ItemId.WROUGHT_IRON },
      { item: ItemId.DUCT_TAPE }
    ],
    out: [
      { item: ItemId.LAWNMOWER }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.FLASH_POWDER },
      { item: ItemId.PLASTIC_BAG },
      { item: ItemId.DUCT_TAPE }
    ],
    out: [
      { item: ItemId.FLASH_GRENADE }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.DEVASTATOR_INCOMPLETE },
      { item: ItemId.HANDFUL_OF_NUTS_AND_BOLTS },
      { item: ItemId.BELT }
    ],
    out: [
      { item: ItemId.DEVASTATOR_EMPTY }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.WONKY_SHOPPING_TROLLEY },
      { item: ItemId.DUCT_TAPE },
      { item: ItemId.WROUGHT_IRON },
      { item: ItemId.COPPER_PIPE }
    ],
    out: [
      { item: ItemId.SHOPPING_TROLLEY }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CORROSIVE_LIQUID },
      { item: ItemId.BATTERY },
      { item: ItemId.PHARMACEUTICAL_PRODUCTS }
    ],
    out: [
      { item: ItemId.VIAL_OF_POISON }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.POUND_OF_FLESH },
      { item: ItemId.POUND_OF_FLESH }
    ],
    out: [
      { item: ItemId.GRISLY_BOMB }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.DAMAGED_HACKSAW },
      { item: ItemId.DUCT_TAPE },
      { item: ItemId.HANDFUL_OF_NUTS_AND_BOLTS }
    ],
    out: [
      { item: ItemId.HACKSAW }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.ENGINE_INCOMPLETE },
      { item: ItemId.DUCT_TAPE },
      { item: ItemId.HANDFUL_OF_NUTS_AND_BOLTS },
      { item: ItemId.WROUGHT_IRON },
      { item: ItemId.COMPACT_DETONATOR },
      { item: ItemId.BROKEN_HUMAN_BONE }
    ],
    out: [
      { item: ItemId.ENGINE }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.TOOL_BAG },
      { item: ItemId.DUCT_TAPE },
      { item: ItemId.HANDFUL_OF_NUTS_AND_BOLTS },
      { item: ItemId.TWISTED_PLANK }
    ],
    out: [
      { item: ItemId.REPAIR_KIT }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.FLESHROOMS },
      { item: ItemId.FLESHROOMS }
    ],
    out: [
      { item: ItemId.STICKY_PASTRY_BALL }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.PHARMACEUTICAL_PRODUCTS },
      { item: ItemId.PHARMACEUTICAL_PRODUCTS }
    ],
    out: [
      { item: ItemId.ANABOLIC_STEROIDS, odds: 42 },
      { item: ItemId.VALIUM_SHOT, odds: 40 },
      { item: ItemId.UNLABELLED_DRUG, odds: 46 },
      { item: ItemId.HYDRATONE_100MG, odds: 46 },
      { item: ItemId.WATER_PURIFYING_TABLETS, odds: 43 },
      { item: ItemId.TWINOID_500MG, odds: 49 }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.THICK_SOLUTION },
      { item: ItemId.THICK_SOLUTION }
    ],
    out: [
      { item: ItemId.ANABOLIC_STEROIDS, odds: 1 },
      { item: ItemId.VALIUM_SHOT, odds: 1 },
      { item: ItemId.UNLABELLED_DRUG, odds: 2 },
      { item: ItemId.HYDRATONE_100MG, odds: 2 },
      { item: ItemId.WATER_PURIFYING_TABLETS, odds: 1 },
      { item: ItemId.PHARMACEUTICAL_PRODUCTS, odds: 7 }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CLAYMORE_MINE },
      { item: ItemId.DOORMAT }
    ],
    out: [
      { item: ItemId.IMPERSONAL_EXPLODING_DOORMAT }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.WIRE_REEL },
      { item: ItemId.SEMTEX },
      { item: ItemId.HANDFUL_OF_NUTS_AND_BOLTS },
      { item: ItemId.DUCT_TAPE }
    ],
    out: [
      { item: ItemId.CLAYMORE_MINE }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.COPPER_PIPE },
      { item: ItemId.CONVEX_LENS }
    ],
    out: [
      { item: ItemId.TELESCOPE }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.BAG_OF_DAMP_GRASS },
      { item: ItemId.CONVEX_LENS }
    ],
    out: [
      { item: ItemId.ERGOT_FUNGUS }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.ERGOT_FUNGUS },
      { item: ItemId.CORROSIVE_LIQUID }
    ],
    out: [
      { item: ItemId.LSD }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CHUCK_FIGURINE },
      { item: ItemId.LSD }
    ],
    out: [
      { item: ItemId.PSYCHADELIC_SPIRITUAL_COUNSEL }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.FLESHROOMS },
      { item: ItemId.STICKY_PASTRY_BALL }
    ],
    out: [
      { item: ItemId.FLESHROOM_PUREE }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.BEST_OF_THE_KING_CD },
      { item: ItemId.MINI_HI_FI_ON }
    ],
    out: [
      { item: ItemId.ROCK_N_ROLL_HIFI }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.PHIL_COLLINS_CD },
      { item: ItemId.MINI_HI_FI_ON }
    ],
    out: [
      { item: ItemId.CURSED_HIFI }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.BRITNEY_SPEARS_CD },
      { item: ItemId.MINI_HI_FI_ON }
    ],
    out: [
      { item: ItemId.CURSED_HIFI }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CURSED_HIFI },
      { item: ItemId.EARPLUGS }
    ],
    out: [
      { item: ItemId.ANTI_PERSONNEL_HIFI }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.WIRE_REEL },
      { item: ItemId.HANDFUL_OF_NUTS_AND_BOLTS },
      { item: ItemId.COPPER_PIPE },
      { item: ItemId.NOVELTY_TORCH_2_CHARGES },
      { item: ItemId.LASER_DIODE }
    ],
    out: [
      { item: ItemId.BURNING_LASER_POINTER_4_CHARGES }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.ERGOT_FUNGUS },
      { item: ItemId.VODKA_MARINOSTOV },
      { item: ItemId.EMPTY_OIL_CAN }
    ],
    out: [
      { item: ItemId.ERGOT_HOMEBREW }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CROW_ELF },
      { item: ItemId.OPEN_CAN }
    ],
    out: [
      { item: ItemId.CHOCOLATE_LOG }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.REVOLVER_UNLOADED },
      { item: ItemId.HANDFUL_OF_BULLETS }
    ],
    out: [
      { item: ItemId.REVOLVER_UNLOADED }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.ASSAULT_RIFLE_UNLOADED },
      { item: ItemId.HANDFUL_OF_BULLETS }
    ],
    out: [
      { item: ItemId.ASSAULT_RIFLE_UNLOADED }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.SECOND_HAND_RED_COAT },
      { item: ItemId.RIPPED_RED_TROUSERS },
      { item: ItemId.FOUL_SMELLING_RED_HAT }
    ],
    out: [
      { item: ItemId.FOUL_SMELLING_VINTAGE_SUIT }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.SECOND_HAND_RED_COAT },
      { item: ItemId.RIPPED_RED_TROUSERS },
      { item: ItemId.FOUL_SMELLING_RED_HAT }
    ],
    out: [
      { item: ItemId.FOUL_SMELLING_VINTAGE_SUIT }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.SECOND_HAND_RED_COAT },
      { item: ItemId.RIPPED_RED_TROUSERS },
      { item: ItemId.FOUL_SMELLING_RED_HAT }
    ],
    out: [
      { item: ItemId.FOUL_SMELLING_VINTAGE_SUIT }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.CARVED_SOFT_PUMPKIN },
      { item: ItemId.BOX_OF_MATCHES },
      { item: ItemId.PHARMACEUTICAL_PRODUCTS }
    ],
    out: [
      { item: ItemId.LIT_PUMPKIN }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.FAT_SERPENT },
      { item: ItemId.BOX_CUTTER }
    ],
    out: [
      { item: ItemId.FURIOUS_KITTEN_PARTIALLY_DIGESTED }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.SOFT_PUMPKIN },
      { item: ItemId.PATHETIC_PENKNIFE }
    ],
    out: [
      { item: ItemId.CARVED_SOFT_PUMPKIN }
    ]
  },
  {
    type: RecipeType.ManualAnywhere,
    in: [
      { item: ItemId.BLOODY_DRESSING },
      { item: ItemId.ANABOLIC_STEROIDS },
      { item: ItemId.PHARMACEUTICAL_PRODUCTS },
      { item: ItemId.WATER_RATION },
      { item: ItemId.HYDRATONE_100MG }
    ],
    out: [
      { item: ItemId.TOXIN }
    ]
  }
];