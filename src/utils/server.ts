import { getTownId, getUserId } from "../contentScript/externalSiteUpdater";
import { store } from "../contentScript/store";

// This value will be replaced at build time by webpack's DefinePlugin
declare const __ZEN_SERVER_URL__: string;

export const SERVER_URL = __ZEN_SERVER_URL__;

type Job =
  | "RESIDENT"
  | "GUARDIAN"
  | "SCAVENGER"
  | "SCOUT"
  | "SURVIVALIST"
  | "TAMER"
  | "TECHNICIAN";

export const Server = {
  maps: async (
    townIds: number[]
  ): Promise<{
    success: boolean;
    error?: string;
    towns?: {
      id: number;
      width: number;
      height: number;
      x: number;
      y: number;
      zones: {
        x: number;
        y: number;
        visitedToday: boolean;
        dangerLevel: number;
        buildingId: number | null;
      }[];
      citizens: {
        x: number;
        y: number;
      }[];
    }[];
  }> => {
    const response = await fetch(`${SERVER_URL}/maps`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        townIds,
        userId: getUserId(),
        key: store["user-key"],
      }),
    });

    return response.json();
  },
  town: async (): Promise<{
    success: boolean;
    error?: string;
    town: {
      id: number;
      name: string;
      start: string;
      season: number;
      phase: string;
      source: string | null;
      width: number;
      height: number;
      x: number;
      y: number;
      bonusPoints: number;
      waterInWell: number;
      type: string;
      lastUpdate: string;
      insurrected: boolean;
      custom: boolean;
      chaos: boolean;
      devastated: boolean;
      doorOpened: boolean;
      pandemonium: boolean;
      guideId: number | null;
      shamanId: number | null;
      catapultMasterId: number | null;
      bank: {
        id: number;
        quantity: number;
        broken: boolean;
      }[];
      zones: {
        x: number;
        y: number;
        visitedToday: boolean;
        dangerLevel: number;
        buildingId: number | null;
        depleted: boolean;
        zombies: number;
        updatedAt: string | null;
        updatedById: number | null;
        items: {
          id: number;
          quantity: number;
          broken: boolean;
        }[];
      }[];
      citizens: {
        userId: number;
        name: string;
        job: Job | null;
        x: number;
        y: number;
        dead: boolean;
        out: boolean;
        banned: boolean;
      }[];
    } | null;
  }> => {
    const response = await fetch(`${SERVER_URL}/town`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        townId: getTownId(),
        userId: getUserId(),
        key: store["user-key"],
      }),
    });

    return response.json();
  },
};

export type MapsResponse = Awaited<ReturnType<typeof Server.maps>>;
export type TownResponse = Awaited<ReturnType<typeof Server.town>>;
