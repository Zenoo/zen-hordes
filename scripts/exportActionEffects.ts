import * as fs from "fs";
import * as path from "path";

export const exportActionEffects = async () => {
  // Get file from the main repo
  const response = await fetch(
    "https://gitlab.com/eternaltwin/myhordes/myhordes/-/raw/master/packages/myhordes-fixtures/src/templates/Data/ActionEffectProvider.php"
  );
  const text = await response.text();

  // Get various effects
  // https://regex101.com/r/IPNnu1/3
  const effectsRegex =
    /effects_container->add\(\)->identifier\('([^)]+)'\)\s*(?:->add\(\s*\(new (?:(?!Message)\w+)Effect\((?:\w+::\w+\(\))?\)\)->(\w+)\(([^)]*)\)(?:->\w+\([^)]+\))?\)\s*)(?:->add\(\s*\(new (?:(?!Message)\w+)Effect\(\)\)->(\w+)\(([^)]*)\)(?:->\w+\([^)]+\))?\)\s*)?/gm;
  const effectsList = [...text.matchAll(effectsRegex)].reduce<
    Record<
      string,
      { type: string; data: number | number[] | string | string[] }
    >
  >((acc, [, effectName, methodName, args, methodName2, args2]) => {
    if (!effectName || !methodName) {
      throw new Error("Effect name or method name not found");
    }

    [
      [methodName, args],
      [methodName2, args2],
    ].forEach(([method, params]) => {
      if (!method) return;

      // Exceptions handled elsewhere
      if (
        /plus_(\d+)ap(?:_\d+)?|plus_ap(\d+)(?:_\d+)?|just_ap(\d+)|eat_ap(\d+)(?:_\w+)?|minus_(\d+)ap|minus_(\d+)mp|minus_(\d+)cp|plus_(\d+)sp_e/.test(
          effectName
        )
      ) {
        return;
      }

      // String array
      if (params?.includes("[")) {
        if (acc[effectName]) {
          acc[effectName].data = [
            ...(acc[effectName].data as string[]),
            ...(JSON.parse(params.replace(/'/g, '"')) as string[]),
          ];
        } else {
          acc[effectName] = {
            type: method,
            data: JSON.parse(params.replace(/'/g, '"')) as string[],
          };
        }
      }

      // Number array
      else if (params?.includes(",")) {
        if (acc[effectName]) {
          acc[effectName].data = [
            ...(acc[effectName].data as number[]),
            ...params.split(",").map((arg) => +arg),
          ];
        } else {
          acc[effectName] = {
            type: method,
            data: params.split(",").map((arg) => +arg),
          };
        }
      }

      // Number
      else if (params && !isNaN(+params)) {
        if (acc[effectName]) {
          acc[effectName].data = [
            ...(acc[effectName].data instanceof Array
              ? (acc[effectName].data as number[])
              : [acc[effectName].data as number]),
            +params,
          ];
        } else {
          acc[effectName] = { type: method, data: +params };
        }
      }

      // String
      else if (params) {
        if (acc[effectName]) {
          acc[effectName].data = [
            ...(acc[effectName].data instanceof Array
              ? (acc[effectName].data as string[])
              : [acc[effectName].data as string]),
            params,
          ];
        } else {
          acc[effectName] = { type: method, data: params };
        }
      }
    });
    return acc;
  }, {});

  // Additional hard to parse effects
  const additionalEffects = {
    zone_kill_punch: { type: "kills", data: 2 },
    ghoul_25_4: { type: "ghoul", data: [4, 25] },
    ghoul_25_5: { type: "ghoul", data: [5, 25] },
    ghoul_25_100: { type: "ghoul", data: [100, 25] },
    ghoul_5_100: { type: "ghoul", data: [100, 25] },
    find_rp: { type: "find_rp", data: 1 },
    home_lab_success: { type: "spawn", data: "drug_hero_#00" },
    home_lab_failure: {
      type: "spawn",
      data: [
        "drug_#00",
        "xanax_#00",
        "drug_random_#00",
        "drug_water_#00",
        "water_cleaner_#00",
      ],
    },
    home_kitchen_success: { type: "spawn", data: "dish_tasty_#00" },
    home_kitchen_failure: { type: "spawn", data: "dish_#00" },
    // Clones
    drug_addict: effectsList["drug_addict_no_msg"]
      ? { ...effectsList["drug_addict_no_msg"] }
      : undefined,
    infect: effectsList["infect_no_msg"]
      ? { ...effectsList["infect_no_msg"] }
      : undefined,
    kill_1_zombie: effectsList["kill_1_zombie_s"]
      ? { ...effectsList["kill_1_zombie_s"] }
      : undefined,
    give_ruin_bp: {
      type: "spawn",
      data: [{ items: ["bplan_c_#00"], odds: null }],
    },
  };

  // Spawn effects
  const spawnEffets = {
    spawn_doggy: {
      type: "spawn",
      data: [
        { items: ["food_bar2_#00"], odds: 222 },
        { items: ["food_chick_#00"], odds: 194 },
        { items: ["food_biscuit_#00"], odds: 188 },
        { items: ["food_pims_#00"], odds: 186 },
        { items: ["food_bar3_#00"], odds: 181 },
        { items: ["food_tarte_#00"], odds: 174 },
        { items: ["food_bar1_#00"], odds: 168 },
        { items: ["food_sandw_#00"], odds: 162 },
      ],
    },
    spawn_lunch: {
      type: "spawn",
      data: [
        {
          items: [
            "food_candies_#00",
            "food_noodles_hot_#00",
            "vegetable_tasty_#00",
            "meat_#00",
          ],
          odds: null,
        },
      ],
    },
    spawn_c_chest: {
      type: "spawn",
      data: [
        {
          items: ["pile_#00", "radio_off_#00", "pharma_#00", "lights_#00"],
          odds: null,
        },
      ],
    },
    spawn_h_chest: {
      type: "spawn",
      data: [
        {
          items: [
            "watergun_empty_#00",
            "pilegun_empty_#00",
            "flash_#00",
            "repair_one_#00",
            "smoke_bomb_#00",
          ],
          odds: null,
        },
      ],
    },
    spawn_postbox: {
      type: "spawn",
      data: [
        {
          items: ["money_#00", "rp_book_#00", "rp_book_#01", "rp_sheets_#00"],
          odds: null,
        },
      ],
    },
    spawn_postbox_xl: {
      type: "spawn",
      data: [
        {
          items: [
            "machine_gun_#00",
            "rsc_pack_2_#00",
            "rhum_#00",
            "vibr_empty_#00",
          ],
          odds: null,
        },
      ],
    },
    spawn_letterbox: {
      type: "spawn",
      data: [
        {
          items: [
            "rp_book2_#00",
            "rp_manual_#00",
            "rp_scroll_#00",
            "rp_scroll_#01",
            "rp_sheets_#00",
            "rp_letter_#00",
          ],
          odds: null,
        },
      ],
    },
    spawn_justbox: {
      type: "spawn",
      data: [
        {
          items: ["money_#00", "rp_book_#00", "rp_book_#01", "rp_sheets_#00"],
          odds: null,
        },
      ],
    },
    spawn_gamebox: {
      type: "spawn",
      data: [{ items: ["dice_#00", "cards_#00"], odds: null }],
    },
    spawn_abox: {
      type: "spawn",
      data: [{ items: ["bplan_r_#00"], odds: null }],
    },
    spawn_cbox: {
      type: "spawn",
      data: [
        { items: ["bplan_c_#00"], odds: 50 },
        { items: ["bplan_u_#00"], odds: 35 },
        { items: ["bplan_r_#00"], odds: 10 },
        { items: ["bplan_e_#00"], odds: 5 },
      ],
    },
    spawn_xmas_dv: {
      type: "spawn",
      data: [
        {
          items: [
            "omg_this_will_kill_you_#00",
            "pocket_belt_#00",
            "christmas_candy_#00",
          ],
          odds: 8,
        },
        {
          items: [
            "rp_manual_#00",
            "rp_sheets_#00",
            "rp_letter_#00",
            "rp_scroll_#00",
            "rp_book_#00",
            "rp_book_#01",
            "rp_book2_#00",
          ],
          odds: null,
        },
      ],
    },
    spawn_xmas_3: {
      type: "spawn",
      data: [{ items: ["omg_this_will_kill_you_#00"], odds: null }],
    },
    spawn_xmas_2: {
      type: "spawn",
      data: [{ items: ["rp_letter_#00"], odds: null }],
    },
    spawn_xmas_1: {
      type: "spawn",
      data: [{ items: ["watergun_opt_5_#00"], odds: null }],
    },
    spawn_matbox: {
      type: "spawn",
      data: [{ items: ["wood2_#00", "metal_#00"], odds: null }],
    },
    spawn_metalbox: {
      type: "spawn",
      data: [
        { items: ["bandage_#00"], odds: 28 },
        { items: ["vodka_#00"], odds: 20 },
        { items: ["drug_hero_#00", "drug_#00"], odds: 16 },
        { items: ["explo_#00", "rhum_#00"], odds: 8 },
        { items: ["lights_#00"], odds: 4 },
      ],
    },
    spawn_metalbox2: {
      type: "spawn",
      data: [
        { items: ["mixergun_part_#00", "watergun_opt_part_#00"], odds: 19 },
        {
          items: ["pocket_belt_#00", "chainsaw_part_#00", "lawn_part_#00"],
          odds: 12,
        },
        { items: ["pilegun_upkit_#00", "cutcut_#00"], odds: 10 },
        { items: ["big_pgun_part_#00"], odds: 7 },
      ],
    },
    spawn_catbox: {
      type: "spawn",
      data: [
        { items: ["poison_part_#00", "pet_cat_#00", "angryc_#00"], odds: null },
      ],
    },
    spawn_toolbox: {
      type: "spawn",
      data: [
        { items: ["pharma_#00"], odds: 25 },
        { items: ["explo_#00"], odds: 19 },
        { items: ["meca_parts_#00"], odds: 17 },
        { items: ["rustine_#00"], odds: 13 },
        { items: ["tube_#00"], odds: 13 },
        { items: ["pile_#00"], odds: 12 },
      ],
    },
    spawn_foodbox: {
      type: "spawn",
      data: [
        { items: ["hmeat_#00"], odds: 13 },
        { items: ["can_#00"], odds: 11 },
        { items: ["food_bag_#00", "vegetable_#00"], odds: 8 },
        { items: ["meat_#00"], odds: 7 },
      ],
    },
    spawn_phone: {
      type: "spawn",
      data: [
        {
          items: [
            "deto_#00",
            "metal_bad_#00",
            "pile_broken_#00",
            "electro_#00",
          ],
          odds: null,
        },
      ],
    },
    spawn_phone_nw: {
      type: "spawn",
      data: [
        {
          items: [
            "deto_#00",
            "metal_bad_#00",
            "pile_broken_#00",
            "electro_#00",
          ],
          odds: null,
        },
      ],
    },
    spawn_proj: {
      type: "spawn",
      data: [{ items: ["lens_#00"], odds: null }],
    },
    spawn_empty_battery: {
      type: "spawn",
      data: [{ items: ["pile_broken_#00"], odds: null }],
    },
    spawn_battery: {
      type: "spawn",
      data: [{ items: ["pile_#00"], odds: null }],
    },
    spawn_safe: {
      type: "spawn",
      data: [
        { items: ["pocket_belt_#00"], odds: 15 },
        {
          items: [
            "watergun_opt_part_#00",
            "lawn_part_#00",
            "chainsaw_part_#00",
            "mixergun_part_#00",
            "cutcut_#00",
            "pilegun_upkit_#00",
            "meca_parts_#00",
          ],
          odds: 10,
        },
        { items: ["big_pgun_part_#00", "book_gen_letter_#00"], odds: 5 },
      ],
    },
    spawn_asafe: {
      type: "spawn",
      data: [{ items: ["bplan_e_#00"], odds: null }],
    },
    spawn_meat_4xs: {
      type: "spawn",
      data: [{ items: ["meat_#00"], count: 4 }],
    },
    spawn_meat_4x: {
      type: "spawn",
      data: [{ items: ["undef_#00"], count: 4 }],
    },
    spawn_meat_2xs: {
      type: "spawn",
      data: [{ items: ["meat_#00"], count: 2 }],
    },
    spawn_meat_2x: {
      type: "spawn",
      data: [{ items: ["undef_#00"], count: 2 }],
    },
    spawn_meat_bmb: {
      type: "spawn",
      data: [{ items: ["flesh_#00"], count: 2 }],
    },
    spawn_potion: {
      type: "spawn",
      data: [{ items: ["potion_#00"], odds: null }],
    },
    spawn_1_watercup: {
      type: "spawn",
      data: [{ items: ["water_cup_#00"], odds: null }],
    },
    spawn_2_watercup: {
      type: "spawn",
      data: [{ items: ["water_cup_#00"], count: 2 }],
    },
    spawn_1_water: {
      type: "spawn",
      data: [{ items: ["water_#00"], odds: null }],
    },
    spawn_1_water_inv: {
      type: "spawn",
      data: [{ items: ["water_#00"], odds: null }],
    },
    spawn_2_water: {
      type: "spawn",
      data: [{ items: ["water_#00"], count: 2 }],
    },
    spawn_3_water: {
      type: "spawn",
      data: [{ items: ["water_#00"], count: 3 }],
    },
    spawn_xmas_gift_1: {
      type: "spawn",
      data: [{ items: ["xmas_gift_#01"], odds: null }],
    },
    spawn_cello_box: {
      type: "spawn",
      data: [
        { items: ["cutcut_#00"], odds: 25 },
        { items: ["big_pgun_empty_#00"], odds: 25 },
        { items: ["maglite_off_#00"], odds: 1 },
        { items: ["pet_cat_#00"], odds: 1 },
      ],
    },
    spawn_cello_box_extra: {
      type: "spawn",
      data: [
        { items: ["money_#00"], odds: 40 },
        { items: ["lamp_#00"], odds: 30 },
        { items: ["gun_#00"], odds: 20 },
        { items: ["machine_gun_#00"], odds: 10 },
      ],
    },
    spawn_drugkit: {
      type: "spawn",
      data: [
        { items: ["water_cleaner_#00", "drug_water_#00"], odds: 200 },
        { items: ["ryebag_#00"], odds: 150 },
        { items: ["xanax_#00"], odds: 130 },
        { items: ["pharma_#00", "disinfect_#00"], odds: 100 },
        { items: ["cyanure_#00"], odds: 10 },
        { items: ["drug_#00", "bandage_#00"], odds: 5 },
      ],
    },
  };

  const effects: Partial<
    Record<
      string,
      {
        type: string;
        data: unknown;
      }
    >
  > = {
    ...effectsList,
    ...additionalEffects,
    ...spawnEffets,
  };

  // Overwrite some effects
  if (effects["kill_all_zombie"]) {
    effects["kill_all_zombie"].data = 99;
  }

  // Save items to a file
  fs.writeFileSync(
    path.join(__dirname, "data", "effects.json"),
    JSON.stringify(effects, null, 2),
    "utf-8"
  );

  console.log("effects.json file has been generated.");

  return effects;
};
