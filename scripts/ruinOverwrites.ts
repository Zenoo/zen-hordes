// These overwrites are needed since
// the source does not contain accurate data

import { Ruin } from "./generateData";

export const overwriteRuinData = (ruins: Record<number, Ruin>) => {
  // CITIZEN_S_HOME drops
  ruins[1]?.drops.push(...[
    { id: "shoe_#00", odds: 0 },
    { id: "bike_part_#00", odds: 0 },
  ]);

  // OLD_BICYCLE_HIRE_SHOP drops
  ruins[5]?.drops.push(...[
    { id: "bike_part_#00", odds: 0 },
  ]);

  // MAC_S_ATOMIC_CAFE drops
  ruins[11]?.drops.push(...[
    { id: "quantum_#00", odds: 0 },
  ]);

  // DUKE_S_VILLA drops
  ruins[18]?.drops.push(...[
    { id: "bike_part_#00", odds: 0 },
  ]);

  // PLANE_CRASH_SITE drops
  ruins[26]?.drops.push(...[
    { id: "soccer_#00", odds: 0 },
    { id: "shoe_#00", odds: 0 },
  ]);

  // GARDEN_SHED drops
  ruins[27]?.drops.push(...[
    { id: "soccer_#00", odds: 0 },
  ]);

  // LOOTED_SUPERMARKET drops
  ruins[28]?.drops.push(...[
    { id: "quantum_#00", odds: 0 },
  ]);

  // FAIRGROUND_STALL drops
  ruins[31]?.drops.push(...[
    { id: "soccer_#00", odds: 0 },
  ]);

  // ARMY_OUTPOST drops
  ruins[40]?.drops.push(...[
    { id: "flag_#00", odds: 3 },
    { id: "shoe_#00", odds: 0 },
    { id: "soccer_#00", odds: 0 },
  ]);

  // CITIZEN_S_TENT drops
  ruins[58]?.drops.push(...[
    { id: "shoe_#00", odds: 0 },
  ]);

  // CROWS_FIT_GYM drops
  ruins[64]?.drops.push(...[
    { id: "drug_#00", odds: 16.7 },
    { id: "water_#00", odds: 15.2 },
    { id: "shoe_#00", odds: 12.1 },
    { id: "metal_bad_#00", odds: 9.1 },
    { id: "food_bag_#00", odds: 5.7 },
    { id: "flag_#00", odds: 5.7 },
    { id: "quantum_#00", odds: 5.7 },
    { id: "sport_elec_#00", odds: 4.6 },
    { id: "pharma_#00", odds: 4.6 },
    { id: "taser_#00", odds: 4.6 },
    { id: "bike_part_#00", odds: 3 },
    { id: "drug_hero_#00", odds: 3 },
    { id: "coffee_#00", odds: 1.5 },
    { id: "metal_beam_#00", odds: 1.5 },
    { id: "pocket_belt_#00", odds: 1.5 },
  ]);
};
