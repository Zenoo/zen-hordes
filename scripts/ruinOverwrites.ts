// These overwrites are needed since
// the source does not contain accurate data

import { Ruin } from "./generateData";

export const overwriteRuinData = (ruins: Record<number, Ruin>) => {
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
