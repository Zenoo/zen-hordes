export type ItemDrop = {
id: ItemId;
odds: number;
event?: GameEvent;
};

export enum ItemId {
  WATER = "water_#00",
  PILE = "pile_#00",
  CAN = "can_#00",
  CAN_OPEN = "can_open_#00",
  PILEGUN = "pilegun_#00",
  TASER = "taser_#00",
  WATERGUN_OPT_EMPTY = "watergun_opt_empty_#00",
  MIXERGUN = "mixergun_#00",
  CHAINSAW = "chainsaw_#00",
  LAWN = "lawn_#00",
  WRENCH = "wrench_#00",
  SCREW = "screw_#00",
  STAFF = "staff_#00",
  KNIFE = "knife_#00",
  CUTCUT = "cutcut_#00",
  SMALL_KNIFE = "small_knife_#00",
  SWISS_KNIFE = "swiss_knife_#00",
  CUTTER = "cutter_#00",
  CART = "cart_#00",
  CAN_OPENER = "can_opener_#00",
  BAG = "bag_#00",
  LIGHTS = "lights_#00",
  XANAX = "xanax_#00",
  CHAIR = "chair_#00",
  RP_BOOK = "rp_book_#00",
  BED = "bed_#00",
  LAMP = "lamp_#00",
  CARPET = "carpet_#00",
  MUSIC_PART = "music_part_#00",
  LOCK = "lock_#00",
  DOOR_CARPET = "door_carpet_#00",
  DICE = "dice_#00",
  ENGINE = "engine_#00",
  COURROIE = "courroie_#00",
  MECA_PARTS = "meca_parts_#00",
  PET_CHICK = "pet_chick_#00",
  PET_PIG = "pet_pig_#00",
  PET_RAT = "pet_rat_#00",
  PET_DOG = "pet_dog_#00",
  PET_CAT = "pet_cat_#00",
  PET_SNAKE = "pet_snake_#00",
  VIBR = "vibr_#00",
  DRUG = "drug_#00",
  MEAT = "meat_#00",
  UNDEF = "undef_#00",
  SHEET = "sheet_#00",
  BAGXL = "bagxl_#00",
  JERRYCAN = "jerrycan_#00",
  WOOD2 = "wood2_#00",
  METAL = "metal_#00",
  GRENADE = "grenade_#00",
  PLATE = "plate_#00",
  JERRYGUN_PART = "jerrygun_part_#00",
  BANDAGE = "bandage_#00",
  VODKA_DE = "vodka_de_#00",
  JERRYGUN_OFF = "jerrygun_off_#00",
  CINEMA = "cinema_#00",
  EXPLO = "explo_#00",
  HMEAT = "hmeat_#00",
  GRENADE_EMPTY = "grenade_empty_#00",
  BGRENADE = "bgrenade_#00",
  BGRENADE_EMPTY = "bgrenade_empty_#00",
  CHAINSAW_PART = "chainsaw_part_#00",
  MIXERGUN_PART = "mixergun_part_#00",
  RUSTINE = "rustine_#00",
  LAWN_PART = "lawn_part_#00",
  TUBE = "tube_#00",
  CART_PART = "cart_part_#00",
  POCKET_BELT = "pocket_belt_#00",
  DRUG_HERO = "drug_hero_#00",
  CHEST = "chest_#00",
  CHEST_XL = "chest_xl_#00",
  CHEST_TOOLS = "chest_tools_#00",
  LAMP_ON = "lamp_on_#00",
  MUSIC = "music_#00",
  PHARMA = "pharma_#00",
  PLATE_RAW = "plate_raw_#00",
  RHUM = "rhum_#00",
  COFFEE = "coffee_#00",
  COFFEE_MACHINE = "coffee_machine_#00",
  COFFEE_MACHINE_PART = "coffee_machine_part_#00",
  ELECTRO = "electro_#00",
  CHEST_CITIZEN = "chest_citizen_#00",
  DRUG_WATER = "drug_water_#00",
  RADIO_OFF = "radio_off_#00",
  RADIO_ON = "radio_on_#00",
  CYANURE = "cyanure_#00",
  DOOR = "door_#00",
  VEGETABLE = "vegetable_#00",
  REPAIR_KIT_PART = "repair_kit_part_#00",
  REPAIR_KIT = "repair_kit_#00",
  WATERGUN_EMPTY = "watergun_empty_#00",
  WATERGUN_OPT_3 = "watergun_opt_3_#00",
  WATERGUN_OPT_2 = "watergun_opt_2_#00",
  WATERGUN_OPT_1 = "watergun_opt_1_#00",
  MIXERGUN_EMPTY = "mixergun_empty_#00",
  CHAINSAW_EMPTY = "chainsaw_empty_#00",
  PILEGUN_EMPTY = "pilegun_empty_#00",
  TASER_EMPTY = "taser_empty_#00",
  SPORT_ELEC_EMPTY = "sport_elec_empty_#00",
  SPORT_ELEC = "sport_elec_#00",
  BIG_PGUN_EMPTY = "big_pgun_empty_#00",
  BIG_PGUN = "big_pgun_#00",
  BIG_PGUN_PART = "big_pgun_part_#00",
  TAGGER = "tagger_#00",
  FLARE = "flare_#00",
  JERRYGUN = "jerrygun_#00",
  CHAIR_BASIC = "chair_basic_#00",
  GUN = "gun_#00",
  MACHINE_GUN = "machine_gun_#00",
  DETO = "deto_#00",
  CONCRETE = "concrete_#00",
  CONCRETE_WALL = "concrete_wall_#00",
  DRUG_RANDOM = "drug_random_#00",
  DISINFECT = "disinfect_#00",
  DIGGER = "digger_#00",
  CHEST_FOOD = "chest_food_#00",
  FOOD_BAG = "food_bag_#00",
  FOOD_BAR1 = "food_bar1_#00",
  FOOD_BAR2 = "food_bar2_#00",
  FOOD_BAR3 = "food_bar3_#00",
  FOOD_BISCUIT = "food_biscuit_#00",
  FOOD_CHICK = "food_chick_#00",
  FOOD_PIMS = "food_pims_#00",
  FOOD_TARTE = "food_tarte_#00",
  FOOD_SANDW = "food_sandw_#00",
  FOOD_NOODLES = "food_noodles_#00",
  SPICES = "spices_#00",
  FOOD_NOODLES_HOT = "food_noodles_hot_#00",
  CARDS = "cards_#00",
  GAME_BOX = "game_box_#00",
  WATERGUN_OPT_PART = "watergun_opt_part_#00",
  VIBR_EMPTY = "vibr_empty_#00",
  BONE_MEAT = "bone_meat_#00",
  BONE = "bone_#00",
  WOOD_BEAM = "wood_beam_#00",
  METAL_BEAM = "metal_beam_#00",
  METAL_BAD = "metal_bad_#00",
  WOOD_BAD = "wood_bad_#00",
  SAW_TOOL = "saw_tool_#00",
  WOOD_LOG = "wood_log_#00",
  ELECTRO_BOX = "electro_box_#00",
  DECO_BOX = "deco_box_#00",
  SAW_TOOL_PART = "saw_tool_part_#00",
  MECANISM = "mecanism_#00",
  TRESTLE = "trestle_#00",
  TABLE = "table_#00",
  WATER_CLEANER = "water_cleaner_#00",
  VEGETABLE_TASTY = "vegetable_tasty_#00",
  POWDER = "powder_#00",
  FLASH = "flash_#00",
  TEDDY = "teddy_#00",
  WOOD_PLATE_PART = "wood_plate_part_#00",
  WOOD_PLATE = "wood_plate_#00",
  MONEY = "money_#00",
  REPAIR_KIT_PART_RAW = "repair_kit_part_raw_#00",
  RADIUS_MK2_PART = "radius_mk2_part_#00",
  RADIUS_MK2 = "radius_mk2_#00",
  REPAIR_ONE = "repair_one_#00",
  ENGINE_PART = "engine_part_#00",
  MACHINE_1 = "machine_1_#00",
  MACHINE_2 = "machine_2_#00",
  MACHINE_3 = "machine_3_#00",
  RP_LETTER = "rp_letter_#00",
  RP_SCROLL = "rp_scroll_#00",
  RP_MANUAL = "rp_manual_#00",
  RP_BOOK2 = "rp_book2_#00",
  RP_BOOK_01 = "rp_book_#01",
  RP_SHEETS = "rp_sheets_#00",
  CHAIN = "chain_#00",
  DISH = "dish_#00",
  DISH_TASTY = "dish_tasty_#00",
  HOME_BOX_XL = "home_box_xl_#00",
  HOME_BOX = "home_box_#00",
  HOME_DEF = "home_def_#00",
  BOOK_GEN_LETTER = "book_gen_letter_#00",
  BOOK_GEN_BOX = "book_gen_box_#00",
  FENCE = "fence_#00",
  WATERGUN_3 = "watergun_3_#00",
  WATERGUN_2 = "watergun_2_#00",
  WATERGUN_1 = "watergun_1_#00",
  WATERGUN_OPT_5 = "watergun_opt_5_#00",
  WATERGUN_OPT_4 = "watergun_opt_4_#00",
  CIGS = "cigs_#00",
  PILEGUN_UPKIT = "pilegun_upkit_#00",
  PILEGUN_UP_EMPTY = "pilegun_up_empty_#00",
  PILEGUN_UP = "pilegun_up_#00",
  PILE_BROKEN = "pile_broken_#00",
  RSC_PACK_3 = "rsc_pack_3_#00",
  RSC_PACK_2 = "rsc_pack_2_#00",
  RSC_PACK_1 = "rsc_pack_1_#00",
  CAR_DOOR = "car_door_#00",
  CAR_DOOR_PART = "car_door_part_#00",
  POISON = "poison_#00",
  POISON_PART = "poison_part_#00",
  CHEST_HERO = "chest_hero_#00",
  POSTAL_BOX = "postal_box_#00",
  FOOD_ARMAG = "food_armag_#00",
  FOOD_CANDIES = "food_candies_#00",
  OUT_DEF = "out_def_#00",
  TORCH = "torch_#00",
  TORCH_OFF = "torch_off_#00",
  CHAMA = "chama_#00",
  CHAMA_TASTY = "chama_tasty_#00",
  PC = "pc_#00",
  SAFE = "safe_#00",
  RP_TWIN = "rp_twin_#00",
  WATER_CAN_EMPTY = "water_can_empty_#00",
  WATER_CAN_1 = "water_can_1_#00",
  WATER_CAN_2 = "water_can_2_#00",
  WATER_CAN_3 = "water_can_3_#00",
  BETA_DRUG_BAD = "beta_drug_bad_#00",
  BETA_DRUG = "beta_drug_#00",
  FRUIT_SUB_PART = "fruit_sub_part_#00",
  FRUIT_PART = "fruit_part_#00",
  FLESH_PART = "flesh_part_#00",
  FLESH = "flesh_#00",
  PHARMA_PART = "pharma_part_#00",
  FRUIT = "fruit_#00",
  WATER_CUP_PART = "water_cup_part_#00",
  WATER_CUP = "water_cup_#00",
  BANNED_NOTE = "banned_note_#00",
  INFECT_POISON_PART = "infect_poison_part_#00",
  TEDDY_01 = "teddy_#01",
  WOODSTEAK = "woodsteak_#00",
  CHRISTMAS_SUIT_1 = "christmas_suit_1_#00",
  CHRISTMAS_SUIT_2 = "christmas_suit_2_#00",
  CHRISTMAS_SUIT_3 = "christmas_suit_3_#00",
  CHRISTMAS_SUIT_FULL = "christmas_suit_full_#00",
  IPHONE = "iphone_#00",
  SMELLY_MEAT = "smelly_meat_#00",
  MAGLITE_OFF = "maglite_off_#00",
  MAGLITE_1 = "maglite_1_#00",
  MAGLITE_2 = "maglite_2_#00",
  CADAVER = "cadaver_#00",
  CADAVER_REMAINS = "cadaver_remains_#00",
  SMOKE_BOMB = "smoke_bomb_#00",
  SAND_BALL = "sand_ball_#00",
  BPLAN_C = "bplan_c_#00",
  BPLAN_U = "bplan_u_#00",
  BPLAN_R = "bplan_r_#00",
  BPLAN_E = "bplan_e_#00",
  BPLAN_BOX = "bplan_box_#00",
  BPLAN_BOX_E = "bplan_box_e_#00",
  EGG = "egg_#00",
  APPLE = "apple_#00",
  BOOMFRUIT = "boomfruit_#00",
  BPLAN_DROP = "bplan_drop_#00",
  MAGNETICKEY = "magneticKey_#00",
  BUMPKEY = "bumpKey_#00",
  CLASSICKEY = "classicKey_#00",
  PRINTS = "prints_#00",
  PRINTS_01 = "prints_#01",
  PRINTS_02 = "prints_#02",
  VAGOUL = "vagoul_#00",
  HBPLAN_U = "hbplan_u_#00",
  HBPLAN_R = "hbplan_r_#00",
  HBPLAN_E = "hbplan_e_#00",
  BBPLAN_U = "bbplan_u_#00",
  BBPLAN_R = "bbplan_r_#00",
  BBPLAN_E = "bbplan_e_#00",
  MBPLAN_U = "mbplan_u_#00",
  MBPLAN_R = "mbplan_r_#00",
  MBPLAN_E = "mbplan_e_#00",
  SOUL_BLUE = "soul_blue_#00",
  SOUL_RED = "soul_red_#00",
  SOUL_BLUE_01 = "soul_blue_#01",
  FEST = "fest_#00",
  BRETZ = "bretz_#00",
  TEKEL = "tekel_#00",
  RLAUNC = "rlaunc_#00",
  KALACH = "kalach_#00",
  BUREAU = "bureau_#00",
  DISTRI = "distri_#00",
  RENNE = "renne_#00",
  PAQUES = "paques_#00",
  BADGE = "badge_#00",
  KALACH_01 = "kalach_#01",
  WIRE = "wire_#00",
  OILCAN = "oilcan_#00",
  LENS = "lens_#00",
  ANGRYC = "angryc_#00",
  CLAYMO = "claymo_#00",
  DIODE = "diode_#00",
  GUITAR = "guitar_#00",
  LSD = "lsd_#00",
  LPOINT4 = "lpoint4_#00",
  LPOINT3 = "lpoint3_#00",
  LPOINT2 = "lpoint2_#00",
  LPOINT1 = "lpoint1_#00",
  LPOINT = "lpoint_#00",
  SCOPE = "scope_#00",
  TRAPMA = "trapma_#00",
  CHUDOL = "chudol_#00",
  LILBOO = "lilboo_#00",
  RYEBAG = "ryebag_#00",
  FUNGUS = "fungus_#00",
  HMBREW = "hmbrew_#00",
  HIFIEV = "hifiev_#00",
  CDPHIL = "cdphil_#00",
  BQUIES = "bquies_#00",
  STAFF_01 = "staff_#01",
  CDBRIT = "cdbrit_#00",
  CDELVI = "cdelvi_#00",
  DFHIFI = "dfhifi_#00",
  DFHIFI_01 = "dfhifi_#01",
  CATBOX = "catbox_#00",
  CHKSPK = "chkspk_#00",
  PET_SNAKE2 = "pet_snake2_#00",
  CHEST_CHRISTMAS_3 = "chest_christmas_3_#00",
  CHEST_CHRISTMAS_2 = "chest_christmas_2_#00",
  CHEST_CHRISTMAS_1 = "chest_christmas_1_#00",
  OMG_THIS_WILL_KILL_YOU = "omg_this_will_kill_you_#00",
  RP_SCROLL_01 = "rp_scroll_#01",
  BASIC_SUIT = "basic_suit_#00",
  BASIC_SUIT_DIRT = "basic_suit_dirt_#00",
  VEST_ON = "vest_on_#00",
  VEST_OFF = "vest_off_#00",
  PELLE = "pelle_#00",
  TAMED_PET = "tamed_pet_#00",
  TAMED_PET_DRUG = "tamed_pet_drug_#00",
  TAMED_PET_OFF = "tamed_pet_off_#00",
  SURV_BOOK = "surv_book_#00",
  KEYMOL = "keymol_#00",
  SHIELD = "shield_#00",
  SHAMAN = "shaman_#00",
  FIREWORK_POWDER = "firework_powder_#00",
  FIREWORK_TUBE = "firework_tube_#00",
  FIREWORK_BOX = "firework_box_#00",
  PUMPKIN_OFF = "pumpkin_off_#00",
  PUMPKIN_ON = "pumpkin_on_#00",
  XMAS_GIFT = "xmas_gift_#00",
  STAFF2 = "staff2_#00",
  VODKA = "vodka_#00",
  POTION = "potion_#00",
  PHOTO_3 = "photo_3_#00",
  PHOTO_2 = "photo_2_#00",
  PHOTO_1 = "photo_1_#00",
  PHOTO_OFF = "photo_off_#00",
  SOUL_YELLOW = "soul_yellow_#00",
  FOOD_XMAS = "food_xmas_#00",
  WOOD_XMAS = "wood_xmas_#00",
  LEPRECHAUN_SUIT = "leprechaun_suit_#00",
  BROKEN = "broken_#00",
  BULLETS = "bullets_#00",
  POSTAL_BOX_01 = "postal_box_#01",
  POSTAL_BOX_XL = "postal_box_xl_#00",
  CHRISTMAS_CANDY = "christmas_candy_#00",
  ALARM_OFF = "alarm_off_#00",
  ALARM_ON = "alarm_on_#00",
  PUMPKIN_RAW = "pumpkin_raw_#00",
  HURLING_STICK = "hurling_stick_#00",
  GUINESS = "guiness_#00",
  APRIL_DRUG = "april_drug_#00",
  INFECT_POISON = "infect_poison_#00",
  PUMPKIN_TASTY = "pumpkin_tasty_#00",
  MEDIC = "medic_#00",
  XMAS_GIFT_01 = "xmas_gift_#01",
  TAMED_PET_GONE = "tamed_pet_gone_#00",
  ALARM_1 = "alarm_1_#00",
  ALARM_2 = "alarm_2_#00",
  ALARM_3 = "alarm_3_#00",
  NOODLE_PRINTS = "noodle_prints_#00",
  NOODLE_PRINTS_01 = "noodle_prints_#01",
  NOODLE_PRINTS_02 = "noodle_prints_#02",
  SHOE = "shoe_#00",
  BIKE_PART = "bike_part_#00",
  BIKE = "bike_#00",
  FLAG = "flag_#00",
  SOCCER = "soccer_#00",
  SOCCER_PART = "soccer_part_#00",
  QUANTUM = "quantum_#00",
  PHOTO_4 = "photo_4_#00",
  CELLO_BOX = "cello_box_#00",
  APPLE_BLUE = "apple_blue_#00",
  SAW_TOOL_TEMP = "saw_tool_temp_#00",
  MOLDY_FOOD_SUBPART = "moldy_food_subpart_#00",
  MOLDY_FOOD_SPICY = "moldy_food_spicy_#00",
  MOLDY_FOOD_PART = "moldy_food_part_#00",
  MOLDY_FOOD = "moldy_food_#00"
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

export enum RuinId {
  CITIZEN_S_HOME = 1,
  SCOTTISH_SMITH_S_SUPERSTORE = 2,
  ONCE_INHABITED_CAVE = 3,
  OLD_HYDRAULIC_PUMP = 4,
  OLD_BICYCLE_HIRE_SHOP = 5,
  DESERTED_FREIGHT_YARD = 6,
  OLD_FIELD_HOSPITAL = 7,
  OLD_AERODROME = 8,
  OLD_POLICE_STATION = 9,
  NUCLEAR_BUNKER = 10,
  MAC_S_ATOMIC_CAFE = 11,
  MOTORWAY_SERVICES = 12,
  WRECKED_CARS = 13,
  THE__SHATTERED_ILLUSIONS__BAR = 14,
  HOME_DEPOT = 15,
  CONSTRUCTION_SITE_SHELTER = 16,
  FRASER_D_S_KEBAB_ISH = 17,
  DUKE_S_VILLA = 18,
  DARK_WOODS = 19,
  COLLAPSED_MINESHAFT = 20,
  COLLAPSED_QUARRY = 21,
  STRANGE_CIRCULAR_DEVICE = 22,
  PI_KEYA_FURNITURE = 23,
  FAMILY_TOMB = 24,
  FAST_FOOD_RESTAURANT = 25,
  PLANE_CRASH_SITE = 26,
  GARDEN_SHED = 27,
  LOOTED_SUPERMARKET = 28,
  CAVE = 29,
  INDIAN_BURIAL_GROUND = 30,
  FAIRGROUND_STALL = 31,
  SMALL_HOUSE = 32,
  WATER_PROCESSING_PLANT = 33,
  COSMETICS_LAB = 34,
  AMBULANCE = 35,
  WAREHOUSE = 36,
  DISUSED_CAR_PARK = 37,
  BROKEN_DOWN_TANK = 38,
  MOTEL_666_DUSK = 39,
  ARMY_OUTPOST = 40,
  POST_OFFICE = 41,
  SMUGGLERS_CACHE = 42,
  EQUIPPED_TRENCH = 43,
  TOWN_LIBRARY = 44,
  MINI_MARKET = 45,
  THE__MAYOR_MOBILE_ = 46,
  WRECKED_TRANSPORTER = 47,
  BURNT_SCHOOL = 48,
  DILAPIDATED_BUILDING = 49,
  DERELICT_VILLA = 50,
  ABANDONED_CONSTRUCTION_SITE = 51,
  ABANDONED_WELL = 52,
  DISUSED_SILOS = 53,
  BLOCKED_ROAD = 54,
  ABANDONED_PARK = 55,
  GUNS__N__ZOMBIES_ARMOURY = 56,
  DISUSED_WAREHOUSE = 57,
  CITIZEN_S_TENT = 58,
  DESTROYED_PHARMACY = 59,
  SHADY_BAR = 60,
  ABANDONED_BUNKER = 61,
  ABANDONED_HOTEL = 62,
  ABANDONED_HOSPITAL = 63,
  CROWS_FIT_GYM = 64
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

export type RecipeItem = {
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
  pictos?: PictoId[];
};

export enum BuildingId {
  SMALL_WATERHOLE = "small_waterhole_#00",
  SMALL_GATHER = "small_gather_#00",
  ITEM_PLATE = "item_plate_#00",
  SMALL_SPEARS = "small_spears_#00",
  SMALL_MEATBARBED = "small_meatbarbed_#00",
  SMALL_BARBED = "small_barbed_#00",
  SMALL_WALLIMPROVE_01 = "small_wallimprove_#01",
  ITEM_PLATE_03 = "item_plate_#03",
  ITEM_PLATE_02 = "item_plate_#02",
  ITEM_PLATE_05 = "item_plate_#05",
  ITEM_PLATE_04 = "item_plate_#04",
  SMALL_WALLIMPROVE_02 = "small_wallimprove_#02",
  ITEM_HOME_DEF = "item_home_def_#00",
  ITEM_PLATE_01 = "item_plate_#01",
  SMALL_GRATER = "small_grater_#00",
  SMALL_GATHER_01 = "small_gather_#01",
  SMALL_FENCE = "small_fence_#00",
  SMALL_FENCE_01 = "small_fence_#01",
  ITEM_PLATE_06 = "item_plate_#06",
  ITEM_PLATE_07 = "item_plate_#07",
  ITEM_PLATE_08 = "item_plate_#08",
  ITEM_PLATE_09 = "item_plate_#09",
  ITEM_PLATE_10 = "item_plate_#10",
  SMALL_WALLIMPROVE_03 = "small_wallimprove_#03",
  SMALL_GAZSPRAY = "small_gazspray_#00",
  SMALL_ACIDSPRAY = "small_acidspray_#00",
  SMALL_WATERSPRAY = "small_waterspray_#00",
  SMALL_WALLIMPROVE = "small_wallimprove_#00",
  ITEM_BGRENADE = "item_bgrenade_#00",
  ITEM_JERRYCAN_01 = "item_jerrycan_#01",
  ITEM_JERRYCAN = "item_jerrycan_#00",
  ITEM_DIGGER = "item_digger_#00",
  ITEM_BGRENADE_01 = "item_bgrenade_#01",
  ITEM_VEGETABLE_TASTY = "item_vegetable_tasty_#00",
  SMALL_EDEN = "small_eden_#00",
  SMALL_WATER_01 = "small_water_#01",
  SMALL_WATERSPRAY_01 = "small_waterspray_#01",
  SMALL_GRINDER = "small_grinder_#00",
  SMALL_SPRINKLER = "small_sprinkler_#00",
  SMALL_SHOWER = "small_shower_#00",
  ITEM_FIREWORK_TUBE = "item_firework_tube_#00",
  ITEM_TUBE = "item_tube_#00",
  ITEM_TUBE_01 = "item_tube_#01",
  SMALL_WATERCANON = "small_watercanon_#00",
  SMALL_SHOWER_01 = "small_shower_#01",
  SMALL_SHOWER_02 = "small_shower_#02",
  SMALL_ROCKETPERF = "small_rocketperf_#00",
  SMALL_WATERDETECT = "small_waterdetect_#00",
  SMALL_APPLETREE = "small_appletree_#00",
  SMALL_WATER = "small_water_#00",
  ITEM_HMEAT = "item_hmeat_#00",
  ITEM_MEAT = "item_meat_#00",
  ITEM_MECA_PARTS = "item_meca_parts_#00",
  SMALL_CANON = "small_canon_#00",
  SMALL_CANON_01 = "small_canon_#01",
  SMALL_CANON_02 = "small_canon_#02",
  SMALL_CANON_03 = "small_canon_#03",
  SMALL_DIG = "small_dig_#00",
  ITEM_WOOD_BEAM = "item_wood_beam_#00",
  SMALL_FACTORY = "small_factory_#00",
  SMALL_SAW = "small_saw_#00",
  SMALL_REFINE_01 = "small_refine_#01",
  ITEM_RP_BOOK2 = "item_rp_book2_#00",
  R_DHANG = "r_dhang_#00",
  SMALL_CAFET = "small_cafet_#00",
  SMALL_COFFIN = "small_coffin_#00",
  SMALL_CEMETERY = "small_cemetery_#00",
  SMALL_CHICKEN = "small_chicken_#00",
  SMALL_SLAUGHTERHOUSE = "small_slaughterhouse_#00",
  ITEM_SHIELD = "item_shield_#00",
  SMALL_CAFET_01 = "small_cafet_#01",
  SMALL_STRATEGY = "small_strategy_#00",
  SMALL_STRATEGY_01 = "small_strategy_#01",
  SMALL_INFIRMARY = "small_infirmary_#00",
  ITEM_ACID = "item_acid_#00",
  SMALL_REFINE = "small_refine_#00",
  ITEM_TAGGER_01 = "item_tagger_#01",
  ITEM_ELECTRO = "item_electro_#00",
  ITEM_TAGGER_02 = "item_tagger_#02",
  SMALL_GATHER_02 = "small_gather_#02",
  SMALL_TRAP = "small_trap_#00",
  ITEM_WOOD_PLATE = "item_wood_plate_#00",
  SMALL_TRAP_01 = "small_trap_#01",
  SMALL_DIG_02 = "small_dig_#02",
  SMALL_DIG_01 = "small_dig_#01",
  SMALL_TRAP_02 = "small_trap_#02",
  SMALL_TNT = "small_tnt_#00",
  STATUS_TERROR_01 = "status_terror_#01",
  SMALL_BAMBA = "small_bamba_#00",
  SMALL_HOLYRAIN = "small_holyrain_#00",
  SMALL_VAUDOUDOLL = "small_vaudoudoll_#00",
  SMALL_SPIRITMIRAGE = "small_spiritmirage_#00",
  SMALL_BOKORSWORD = "small_bokorsword_#00",
  STATUS_TERROR = "status_terror_#00",
  ITEM_COURROIE_01 = "item_courroie_#01",
  ITEM_COURROIE = "item_courroie_#00",
  SMALL_ARMOR = "small_armor_#00",
  SMALL_IKEA = "small_ikea_#00",
  SMALL_TOURELLO = "small_tourello_#00",
  SMALL_CATAPULT3 = "small_catapult3_#00",
  SMALL_WATCHMEN = "small_watchmen_#00",
  SMALL_WATCHMEN_01 = "small_watchmen_#01",
  ITEM_TAGGER = "item_tagger_#00",
  SMALL_DERRICK = "small_derrick_#00",
  SMALL_FALSECITY = "small_falsecity_#00",
  SMALL_VALVE = "small_valve_#00",
  SMALL_MOVING = "small_moving_#00",
  SMALL_SCARECROW = "small_scarecrow_#00",
  SMALL_FLESHCAGE = "small_fleshcage_#00",
  SMALL_COURT = "small_court_#00",
  SMALL_CITY_UP = "small_city_up_#00",
  SMALL_TRASH_01 = "small_trash_#01",
  SMALL_TRASH_02 = "small_trash_#02",
  SMALL_HOWLINGBAIT = "small_howlingbait_#00",
  SMALL_TRASHCLEAN = "small_trashclean_#00",
  SMALL_TRASH_03 = "small_trash_#03",
  SMALL_TRASH_04 = "small_trash_#04",
  SMALL_TRASH_05 = "small_trash_#05",
  SMALL_TRASH_06 = "small_trash_#06",
  SMALL_TRASH = "small_trash_#00",
  SMALL_LIGHTHOUSE = "small_lighthouse_#00",
  SMALL_REDEMPTION = "small_redemption_#00",
  SMALL_CASTLE = "small_castle_#00",
  SMALL_SCORE = "small_score_#00",
  SMALL_SLAVE = "small_slave_#00",
  SMALL_ARMA = "small_arma_#00",
  SMALL_LABYRINTH = "small_labyrinth_#00",
  SMALL_LASTCHANCE = "small_lastchance_#00",
  SMALL_PMVBIG = "small_pmvbig_#00",
  SMALL_WHEEL = "small_wheel_#00",
  SMALL_FIREWORKS = "small_fireworks_#00",
  SMALL_CROW = "small_crow_#00",
  SMALL_CINEMA = "small_cinema_#00",
  SMALL_ROCKET = "small_rocket_#00",
  SMALL_BALLOON = "small_balloon_#00",
  SMALL_DERRICK_01 = "small_derrick_#01",
  SMALL_BUILDING = "small_building_#00",
  ITEM_PLATE_11 = "item_plate_#11",
  SMALL_DOOR_CLOSED_02 = "small_door_closed_#02",
  SMALL_DOOR_CLOSED_01 = "small_door_closed_#01",
  SMALL_VENTILATION = "small_ventilation_#00",
  SMALL_DOOR_CLOSED = "small_door_closed_#00",
  SMALL_ROUND_PATH = "small_round_path_#00",
  SMALL_SPA4SOULS = "small_spa4souls_#00",
  SMALL_EASTERCROSS = "small_eastercross_#00",
  SMALL_NOVLAMPS = "small_novlamps_#00",
  SMALL_GALLERY = "small_gallery_#00",
  SMALL_SURVAREA = "small_survarea_#00",
  ITEM_BOOMFRUIT = "item_boomfruit_#00",
  ITEM_BOOMFRUIT_01 = "item_boomfruit_#01",
  ITEM_PUMPKIN_RAW = "item_pumpkin_raw_#00",
  SMALL_TECHTABLE = "small_techtable_#00",
  ITEM_SCOPE = "item_scope_#00",
  SMALL_UNDERGROUND = "small_underground_#00",
  SMALL_URBAN = "small_urban_#00",
  SMALL_SPA4SOULS_01 = "small_spa4souls_#01",
  ITEM_SOUL_BLUE_STATIC = "item_soul_blue_static_#00",
  SMALL_POOL = "small_pool_#00",
  SMALL_THERMAL = "small_thermal_#00",
  ITEM_PET_PIG = "item_pet_pig_#00",
  SMALL_WATCHMEN_02 = "small_watchmen_#02",
  SMALL_GRINDER2 = "small_grinder2_#00",
  SMALL_ANIMFENCE = "small_animfence_#00",
  SMALL_SEWERS = "small_sewers_#00",
  SMALL_PET = "small_pet_#00"
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

export enum PictoId {
  HEROAC = "r_heroac_#00",
  ALCOOL = "r_alcool_#00",
  HOMEUP = "r_homeup_#00",
  REFINE = "r_refine_#00",
  CWATER = "r_cwater_#00",
  SOLBAN = "r_solban_#00",
  BAN = "r_ban_#00",
  WOUND = "r_wound_#00",
  COOKR = "r_cookr_#00",
  ANIMAL = "r_animal_#00",
  CMPLST = "r_cmplst_#00",
  CAMP = "r_camp_#00",
  CANNIB = "r_cannib_#00",
  WATGUN = "r_watgun_#00",
  CHSTXL = "r_chstxl_#00",
  BUILDR = "r_buildr_#00",
  NODRUG = "r_nodrug_#00",
  COLLEC = "r_collec_#00",
  WRESTL = "r_wrestl_#00",
  EBUILD = "r_ebuild_#00",
  COOKED = "r_cooked_#00",
  DIGGER = "r_digger_#00",
  DECO = "r_deco_#00",
  SURGRP = "r_surgrp_#00",
  DRUG = "r_drug_#00",
  COBAYE = "r_cobaye_#00",
  RUINE = "r_ruine_#00",
  EXPLOR = "r_explor_#00",
  EXPLO2 = "r_explo2_#00",
  SHARE = "r_share_#00",
  GUIDE = "r_guide_#00",
  DRGMKR = "r_drgmkr_#00",
  THEFT = "r_theft_#00",
  BROKEN = "r_broken_#00",
  MASO = "r_maso_#00",
  BGUM = "r_bgum_#00",
  EBCSTL = "r_ebcstl_#00",
  EBPMV = "r_ebpmv_#00",
  EBGROS = "r_ebgros_#00",
  EBCROW = "r_ebcrow_#00",
  FORUM = "r_forum_#00",
  JTAMER = "r_jtamer_#00",
  JRANGR = "r_jrangr_#00",
  JERMIT = "r_jermit_#00",
  JCOLLE = "r_jcolle_#00",
  JGUARD = "r_jguard_#00",
  JTECH = "r_jtech_#00",
  DCITY = "r_dcity_#00",
  DWATER = "r_dwater_#00",
  DINFEC = "r_dinfec_#00",
  DNUCL = "r_dnucl_#00",
  DDRUG = "r_ddrug_#00",
  SURLST = "r_surlst_#00",
  SUHARD = "r_suhard_#00",
  MYSTIC = "r_mystic_#00",
  DOUTSD = "r_doutsd_#00",
  DOOR = "r_door_#00",
  DHANG = "r_dhang_#00",
  PLUNDR = "r_plundr_#00",
  WONDRS = "r_wondrs_#00",
  REPAIR = "r_repair_#00",
  BREP = "r_brep_#00",
  RP = "r_rp_#00",
  CGARB = "r_cgarb_#00",
  BATGUN = "r_batgun_#00",
  PANDE = "r_pande_#00",
  HBUILD = "r_hbuild_#00",
  TRONCO = "r_tronco_#00",
  GUARD = "r_guard_#00",
  WINBAS = "r_winbas_#00",
  WINTOP = "r_wintop_#00",
  WINTHI = "r_winthi_#00",
  KILLZ = "r_killz_#00",
  BETA = "r_beta_#00",
  SANDB = "r_sandb_#00",
  PAQUES = "r_paques_#00",
  SANTAC = "r_santac_#00",
  CHAMAN = "r_chaman_#00",
  ARMAG = "r_armag_#00",
  GINFEC = "r_ginfec_#00",
  PTAME = "r_ptame_#00",
  JSHAM = "r_jsham_#00",
  RREFER = "r_rrefer_#00",
  FJVANI = "r_fjvani_#00",
  FJV2 = "r_fjv2_#00",
  FJV = "r_fjv_#00",
  COMU = "r_comu_#00",
  COMU2 = "r_comu2_#00",
  COTT = "r_cott_#00",
  CDH = "r_cdh_#00",
  DERWIN = "r_derwin_#00",
  ERMWIN = "r_ermwin_#00",
  CDHWIN = "r_cdhwin_#00",
  DEFWIN = "r_defwin_#00",
  KOHLMB = "r_kohlmb_#00",
  LEPRE = "r_lepre_#00",
  GOODG = "r_goodg_#00",
  BETA2 = "r_beta2_#00",
  RANGWIN = "r_rangwin_#00",
  GSP = "r_gsp_#00",
  COLLEC2 = "r_collec2_#00",
  MYSTIC2 = "r_mystic2_#00",
  UFC = "r_ufc_#00",
  RIPFLASH = "r_ripflash_#00",
  TAMWIN = "r_tamwin_#00",
  JBASIC = "r_jbasic_#00",
  SCADDH = "r_scaddh_#00",
  DDH = "r_ddh_#00",
  EVENTWIN = "r_eventwin_#00",
  EVENTPART = "r_eventpart_#00",
  THERMAL = "r_thermal_#00",
  CBURN = "r_cburn_#00",
  DECOFEIST = "r_decofeist_#00",
  TECHWIN = "r_techwin_#00"
}

export type Picto = {
  id: PictoId;
  numericalId: number;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  icon: string;
  community: boolean;
  rare: boolean;
};