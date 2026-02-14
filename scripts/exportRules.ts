import YAML from "yaml";

export type RulesConfig = {
  parameters?: {
    rules_local?: unknown[];
    rules?: {
      default?: RuleSet;
      small?: Partial<RuleSet>;
      remote?: Partial<RuleSet>;
      panda?: Partial<RuleSet>;
      custom?: Partial<RuleSet>;
    };
  };
};

export type RuleSet = {
  allow_local_conf?: boolean;

  open_town_limit?: number;
  open_town_grace?: number;
  stranger_day_limit?: number;
  stranger_citizen_limit?: number;
  lock_door_until_full?: boolean;

  skill_mode?: boolean;

  qa_post?: boolean;

  well?: { min?: number; max?: number };
  map?: { min?: number; max?: number; margin?: number };
  population?: { min?: number; max?: number };

  margin_custom?: {
    enabled?: boolean;
    north?: number;
    south?: number;
    west?: number;
    east?: number;
  };

  zone_items?: {
    min?: number;
    max?: number;
    refresh_max?: number;
    plan_limits?: {
      bag?: number;
    };
  };

  ruin_items?: {
    min?: number;
    max?: number;
  };

  ruins?: number;
  explorable_ruins?: number;

  map_params?: {
    free_spawn_zones?: {
      count?: number;
      min_dist?: number;
    };
    buried_ruins?: {
      probability?: number;
      digs?: { min?: number; max?: number };
    };
    dig_chances?: {
      base?: number;
      depleted?: number;
    };
  };

  explorable_ruin_params?: {
    room_config?: {
      lock?: number;
      distance?: number;
      spacing?: number;
      total?: number;
      min?: number;
    };
    item_fillrate?: number;
    max_distance?: number;
    space?: {
      floors?: number;
      x?: number;
      y?: number;
      ox?: number;
    };
    plan_limits?: {
      unusual?: number;
      rare?: number;
      epic?: number;
      lists?: Partial<Record<string, string[]>> & {
        replace?: Partial<Record<string, string[]>>;
      };
    };
    zombies?: {
      initial?: number;
      daily?: number;
    };
  };

  initial_buildings?: string[];
  fixed_building_rsc_level?: unknown[];
  unlocked_buildings?: string[];

  spiritual_guide?: {
    enabled?: boolean;
    sp_limit?: number;
    citizen?: number;
  };

  bank_abuse?: {
    limit?: number;
    chaos_limit?: number;
    base_range_min?: number;
    lock_range_min?: number;
  };

  times?: {
    digging?: {
      normal?: string;
      collec?: string;
    };
    exploration?: {
      normal?: string;
      collec?: string;
    };
  };

  initial_chest?: unknown[];
  distribute_items?: string[] | { replace?: string[] };
  instant_pictos?: string[] | { merge?: string[] };

  distribution_distance?:
    | DistributionDistanceItem[]
    | { replace?: DistributionDistanceItem[] };

  estimation?: {
    shift?: number;
    spread?: number;
    variance?: number;
    offset?: {
      min?: number;
      max?: number;
    };
  };

  modifiers?: {
    watchtower_estimation_threshold?: number;
    watchtower_estimation_offset?: number;
    allow_redig?: boolean;
    assemble_items_from_floor?: boolean;
    preview_item_assemblage?: boolean;
    infection_death_chance?: number;
    wound_terror_penalty?: number;
    poison?: {
      stack_poisoned_items?: boolean;
      transgress?: boolean;
    };
    citizen_attack?: {
      ap?: number;
      injury?: number;
      protection?: boolean;
    };
    complaints?: {
      shun?: number;
      kill?: number;
    };
    carry_extra_bag?: boolean;
    meaty_bones_within_town?: boolean;
    building_attack_damage?: boolean;
    destroy_defense_objects_attack?: boolean;
    destroy_defense_objects_attack_ratio?: number;
    destroy_defense_objects_attack_max?: number;
    camping?: {
      default_bonus?: number;
      map?: string;
    };
    red_soul_max_factor?: number;
    wind_distance?: number;
    strict_picto_distribution?: boolean;
    sandball_nastyness?: number;
    massive_respawn_threshold?: number;
    massive_respawn_factor?: number;
    ghoul_infection_begin?: number;
    ghoul_infection_advance?: number;
    ghoul_infection_max?: number;
    daytime?: {
      range?: [number, number];
      invert?: boolean;
    };
    hide_home_upgrade?: boolean;
    home_recycling?: {
      ap?: number;
      return?: number;
    };
    generosity?: {
      from_ghoul?: number;
      from_last_death_factor?: number;
    };
    guard_tower?: {
      per_use?: number;
      max_def?: number;
    };
    strange_soil?: boolean;
    soul_generation_coef?: number;
    building_difficulty?: number;
  };

  features?: {
    camping?: boolean;
    words_of_heros?: boolean;
    escort?: {
      enabled?: boolean;
      max?: number;
    };
    nightmode?: boolean;
    shaman?: string;
    xml_feed?: boolean;
    citizen_alias?: boolean;
    ghoul_mode?: string;
    hungry_ghouls?: boolean;
    all_poison?: boolean;
    shun?: boolean;
    nightwatch?: {
      enabled?: boolean;
      instant?: boolean;
    };
    attacks?: string;
    give_all_pictos?: boolean;
    picto_classic_cull_mode?: boolean;
    enable_pictos?: boolean;
    give_soulpoints?: boolean;
    last_death?: string[] | { merge?: string[] };
    last_death_day?: number;
    survival_picto?: string | null;
    free_for_all?: boolean;
    free_from_teams?: boolean;
    blueprint_mode?: string;
  };

  disabled_jobs?: string[];
  disabled_roles?: string[];
  disabled_buildings?: string[] | { merge?: string[] };

  overrides?: {
    named_drops?: unknown[];
    item_groups?: unknown[];
    building_rarity?: Record<string, number>;
  };
};

type DistributionDistanceItem = {
  item?: string;
  min?: number;
  max?: number;
};

export const exportRules = async () => {
  // Get file from the main repo
  const response = await fetch(
    "https://gitlab.com/eternaltwin/myhordes/myhordes/-/raw/master/config/app/rules.yml"
  );
  const text = await response.text();
  return YAML.parse(text) as RulesConfig;
};
