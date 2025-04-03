/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** This schema has not been defined yet. */
export type XMLGeneralResponse = object;

/** List of available endpoints */
export interface XMLEndpointList {
  /** @example "https:/myhordes.de/api/x/v2/xml/user" */
  user?: string;
  /** @example "https:/myhordes.de/api/x/v2/xml/items" */
  items?: string;
  /** @example "https:/myhordes.de/api/x/v2/xml/buildings" */
  buildings?: string;
  /** @example "https:/myhordes.de/api/x/v2/xml/ruins" */
  ruins?: string;
  /** @example "https:/myhordes.de/api/x/v2/xml/pictos" */
  pictos?: string;
  /** @example "https:/myhordes.de/api/x/v2/xml/town" */
  town?: string;
}

/** Contains information regarding the current user. */
export interface XMLUserResponse {
  /** Common information about the API and the current user */
  headers?: XMLHeaderObject;
  data?: {
    /**
     * Date at which this object was generated
     * @format datetime
     * @example "2022-07-16 20:00:00"
     */
    "cache-date"?: string;
    /**
     * Will usually be 0.
     * @min 0
     * @max 0
     * @example 0
     */
    "cache-fast"?: number;
    /** List of pictos */
    rewards?: XMLRewardListObject;
    /** List of maps */
    maps?: XMLMapListObject;
    /** List of imported maps (imported into MyHordes, but for the primary soul) */
    "imported-maps"?: XMLImportedMapListObject;
  };
}

/** Contains information about all available items on MyHordes */
export interface XMLItemResponse {
  /** Common information about the API and the current user */
  headers?: XMLHeaderObject;
  data?: {
    /**
     * Date at which this object was generated
     * @format datetime
     * @example "2022-07-16 20:00:00"
     */
    "cache-date"?: string;
    /**
     * Will usually be 0.
     * @min 0
     * @max 0
     * @example 0
     */
    "cache-fast"?: number;
    /** List of item types available on MyHordes */
    items?: XMLItemPrototypeListObject;
  };
}

/** Contains information about all available constructions on MyHordes */
export interface XMLBuildingResponse {
  /** Common information about the API and the current user */
  headers?: XMLHeaderObject;
  data?: {
    /**
     * Date at which this object was generated
     * @format datetime
     * @example "2022-07-16 20:00:00"
     */
    "cache-date"?: string;
    /**
     * Will usually be 0.
     * @min 0
     * @max 0
     * @example 0
     */
    "cache-fast"?: number;
    /** List of construction sites available on MyHordes */
    items?: XMLBuildingPrototypeListObject;
  };
}

/** Contains information about all ruin types on MyHordes */
export interface XMLRuinResponse {
  /** Common information about the API and the current user */
  headers?: XMLHeaderObject;
  data?: {
    /**
     * Date at which this object was generated
     * @format datetime
     * @example "2022-07-16 20:00:00"
     */
    "cache-date"?: string;
    /**
     * Will usually be 0.
     * @min 0
     * @max 0
     * @example 0
     */
    "cache-fast"?: number;
    /** List of ruins that can spawn on MyHordes */
    items?: XMLRuinPrototypeListObject;
  };
}

/** Contains information about picto types on MyHordes */
export interface XMLPictoResponse {
  /** Common information about the API and the current user */
  headers?: XMLHeaderObject;
  data?: {
    /**
     * Date at which this object was generated
     * @format datetime
     * @example "2022-07-16 20:00:00"
     */
    "cache-date"?: string;
    /**
     * Will usually be 0.
     * @min 0
     * @max 0
     * @example 0
     */
    "cache-fast"?: number;
    /** List of pictos that can be obtained on MyHordes */
    items?: XMLPictoPrototypeListObject;
  };
}

/** Contains information regarding the user's current town. */
export interface XMLTownResponse {
  /** Common information about the API and the current user */
  headers?: XMLHeaderObject;
  data?: {
    /**
     * Date at which this object was generated
     * @format datetime
     * @example "2022-07-16 20:00:00"
     */
    "cache-date"?: string;
    /**
     * Will usually be 0.
     * @min 0
     * @max 0
     * @example 0
     */
    "cache-fast"?: number;
    /** City details */
    city?: XMLCityObject;
    /** Town bank */
    bank?: XMLBankObject;
    /** List of current expeditions in this town */
    expeditions?: XMLExpeditionListObject;
    /** Lists all citizens of the town */
    citizens?: XMLCitizenListObject;
    /** Lists all cadavers of the town */
    cadavers?: XMLCadaverListObject;
    /** Town map */
    map?: XMLChartObject;
  };
}

/** Describes a citizen. */
export interface XMLCitizenObject {
  /**
   * Is this citizen dead (1) or alive (0)
   * @min 0
   * @max 1
   * @example 0
   */
  dead?: number;
  /**
   * Does this citizen play with a heroic profession (1) or not (0)
   * @min 0
   * @max 1
   * @example 0
   */
  hero?: number;
  /**
   * Player name
   * @example "Dayan"
   */
  name?: string;
  /**
   * Avatar URL
   * @example "42/e8b3ac08be0c72dba1a9731fc48c4eff.jpeg"
   */
  avatar?: string;
  /**
   * Unique user ID
   * @example 42
   */
  id?: number;
  /**
   * Is this citizen shunned (1) or not (0)
   * @min 0
   * @max 1
   * @example 0
   */
  ban?: number;
  /**
   * Job identifier
   * @example "collec"
   */
  job?: "none" | "basic" | "collec" | "guardian" | "hunter" | "tamer" | "tech" | "shaman" | "survivalist";
  /**
   * Is this citizen outside (1) or in town (0)
   * @min 0
   * @max 1
   * @example 0
   */
  out?: number;
  /**
   * X Position on the map (when outside)
   * @example 5
   */
  x?: number;
  /**
   * Y Position on the map (when outside)
   * @example -2
   */
  y?: number;
}

/** Describes the avatar of a user. */
export interface XMLAvatarObject {
  /**
   * Avatar URL
   * @example "42/e8b3ac08be0c72dba1a9731fc48c4eff.jpeg"
   */
  url?: string;
  /**
   * Avatar image format
   * @example "jpeg"
   */
  format?: string;
  /**
   * Width of the avatar image (in px)
   * @min 0
   * @example 100
   */
  x?: number;
  /**
   * Height of the avatar image (in px)
   * @min 0
   * @example 100
   */
  y?: number;
  /**
   * Is the avatar considered to be of classic 90x30ish format (1) or not (0)
   * @min 0
   * @max 1
   * @example 0
   */
  classic?: number;
  /**
   * Compressed avatar URL; only set if the default avatar is not already in classic format and the user has chosen a manual cropping of the avatar.
   * @example "42/e8b3ac08be0c72dba1a9731fc48c4eff.jpeg"
   */
  compressed?: string;
}

/** Describes the current user. */
export interface XMLOwnerObject {
  /** Describes a citizen. */
  citizen?: XMLCitizenObject;
  /** Describes the avatar of a user. */
  avatar?: XMLAvatarObject;
  /** Current zone */
  myZone?: XMLMyZoneObject;
}

/** An item */
export interface XMLItemObject {
  /**
   * Number of items in this stack.
   * @example 1
   */
  count?: number;
  /**
   * Item type ID
   * @example 2
   */
  id?: number;
  /**
   * Item category
   * @example "Rsc"
   */
  cat?: "Armor" | "Box" | "Drug" | "Food" | "Furniture" | "Misc" | "Rsc" | "Weapon";
  /**
   * Item icon
   * @example "item/item_pile.gif"
   */
  img?: string;
  /**
   * Is this item broken (1) or not (0)
   * @min 0
   * @max 1
   * @example 0
   */
  broken?: number;
  /**
   * Item name (depends on language)
   * @example "Batterie"
   */
  name?: string;
}

/** Current zone */
export interface XMLMyZoneObject {
  /**
   * Is this zone dried (1) or not (0)
   * @min 0
   * @max 1
   * @example 0
   */
  dried?: number;
  /**
   * Human control points
   * @example 2
   */
  h?: number;
  /**
   * Number of zombies
   * @example 1
   */
  z?: number;
  item?: XMLItemObject[];
}

/** Information about the current town. */
export interface XMLShortGameObject {
  /**
   * Current day
   * @example 4
   */
  days?: number;
  /**
   * Will usually be 0. In case of a game error, this may be set to 1. We recommend to cease further processing of this stream in case this property is set to 1.
   * @min 0
   * @max 1
   * @example 0
   */
  quarantine?: number;
  /**
   * Current date
   * @format datetime
   * @example "2022-07-16 20:00:00"
   */
  datetime?: string;
  /**
   * Unique town ID
   * @example 1467
   */
  id?: number;
}

/** Common information about the API and the current user */
export interface XMLHeaderObject {
  /**
   * The current API endpoint
   * @example "https:///myhordes.localhost/api/x/v2/xml/user"
   */
  link?: string;
  /**
   * Prefix for icon URLs
   * @example "https:///myhordes.localhost/build/images"
   */
  iconurl?: string;
  /**
   * Prefix for avatar URLs
   * @example "https:///myhordes.localhost/build/images"
   */
  avatarurl?: string;
  /**
   * Is this API call authorized (1) or not (0). For non-authorized requests, the amount of available information is limited.
   * @min 0
   * @max 1
   * @example 1
   */
  secure?: number;
  /**
   * Name of the API generator
   * @example "MyHordes"
   */
  author?: string;
  /**
   * Current language
   * @example "de"
   */
  language?: "de" | "en" | "fr" | "es";
  /**
   * API version
   * @example "0.1"
   */
  version?: string;
  /**
   * API framework
   * @example "symfony"
   */
  generator?: string;
  /** Describes the current user. */
  owner?: XMLOwnerObject;
  /** Information about the current town. */
  game?: XMLShortGameObject;
}

/** Earned reward */
export interface XMLRewardObject {
  /**
   * Is this reward rare (1) or not (0).
   * @min 0
   * @max 1
   * @example 0
   */
  rare?: number;
  /**
   * Picto count
   * @example 10
   */
  n?: number;
  /**
   * Picto URL
   * @example "pictos/r_pande.gif"
   */
  img?: string;
  /**
   * Picto name (depends on language)
   * @example "Überlebende der Hölle!"
   */
  name?: string;
  /**
   * Picto description (depends on language)
   * @example "Sie sind ein wahrer Überlebenskünstler der Hölle."
   */
  desc?: string;
  title?: {
    /**
     * Title name (depends on language)
     * @example "Hölle, das esse ich jeden Morgen."
     */
    name?: string;
  }[];
  comment?: string[];
}

/** List of pictos */
export interface XMLRewardListObject {
  r?: XMLRewardObject[];
}

/** Played map */
export interface XMLMapObject {
  /**
   * Town name
   * @example "Gespenstische Soldaten"
   */
  name?: string;
  /**
   * Town season
   * @min 0
   * @example 15
   */
  season?: number;
  /**
   * Town score
   * @min 0
   * @example 21
   */
  score?: number;
  /**
   * Survived days
   * @min 0
   * @example 6
   */
  d?: number;
  /**
   * Unique Town ID
   * @min 0
   * @example 2
   */
  id?: number;
  /**
   * Old town; can only be true for imported towns.
   * @min 0
   * @max 1
   * @example 0
   */
  v1?: number;
  /**
   * Origin of an imported town
   * @example "de"
   */
  origin?: "de" | "en" | "fr" | "es";
  /**
   * Describes the origin of the town.
   * @example "alpha"
   */
  phase?: "alpha" | "beta" | "native" | "import";
}

/** List of maps */
export interface XMLMapListObject {
  m?: XMLMapObject[];
}

/** List of imported maps (imported into MyHordes, but for the primary soul) */
export interface XMLImportedMapListObject {
  m?: XMLMapObject[];
}

/** An item type */
export interface XMLItemPrototypeObject {
  /**
   * Item type ID
   * @example 2
   */
  id?: number;
  /**
   * Item category
   * @example "Rsc"
   */
  cat?: "Armor" | "Box" | "Drug" | "Food" | "Furniture" | "Misc" | "Rsc" | "Weapon";
  /**
   * Item icon
   * @example "item/item_pile.gif"
   */
  img?: string;
  /**
   * Item name (depends on language)
   * @example "Batterie"
   */
  name?: string;
  /**
   * Items decoration value
   * @example 0
   */
  deco?: number;
  /**
   * Is the item heavy (1) or not (0)
   * @min 0
   * @max 1
   * @example 0
   */
  heavy?: number;
  /**
   * Watchman defense
   * @example 0
   */
  guard?: number;
}

/** List of item types available on MyHordes */
export interface XMLItemPrototypeListObject {
  item?: XMLItemPrototypeObject[];
}

/** A construction site */
export interface XMLBuildingPrototypeObject {
  /**
   * Is the building temporary (1) or not (0)
   * @min 0
   * @max 1
   * @example 0
   */
  temporary?: number;
  /**
   * Construction type ID
   * @example 1
   */
  id?: number;
  /**
   * Construction site icon
   * @example "building/small_waterhole.gif"
   */
  img?: string;
  /**
   * Construction name (depends on language)
   * @example "Wassergraben"
   */
  name?: string;
  /**
   * Parent construction type ID
   * @example 2
   */
  parent?: number;
}

/** List of construction sites available on MyHordes */
export interface XMLBuildingPrototypeListObject {
  item?: XMLBuildingPrototypeObject[];
}

/** A ruin */
export interface XMLRuinPrototypeObject {
  /**
   * Ruin ID
   * @example 1
   */
  id?: number;
  /**
   * Is it possible to enter the ruin (1) or not (0)
   * @min 0
   * @max 1
   * @example 0
   */
  explorable?: number;
  /**
   * Ruin name (depends on language)
   * @example "Abgelegenes Haus"
   */
  name?: string;
}

/** List of ruins that can spawn on MyHordes */
export interface XMLRuinPrototypeListObject {
  item?: XMLRuinPrototypeObject[];
}

/** A picto */
export interface XMLPictoPrototypeObject {
  /**
   * Picto ID
   * @example 1
   */
  id?: number;
  /**
   * Picto name (depends on language)
   * @example "Heldentaten"
   */
  name?: string;
}

/** List of pictos that can be obtained on MyHordes */
export interface XMLPictoPrototypeListObject {
  item?: XMLPictoPrototypeObject[];
}

/** City details */
export interface XMLCityObject {
  /**
   * City name
   * @example "Alberner Seelenfänger"
   */
  city?: string;
  /**
   * Is the door open (1) or closed (0)
   * @min 0
   * @max 1
   * @example 0
   */
  door?: number;
  /**
   * Amount of water rations in the well
   * @min 0
   * @example 120
   */
  water?: number;
  /**
   * Has chaos erupted in town (1) or not (0)
   * @min 0
   * @max 1
   * @example 0
   */
  chaos?: number;
  /**
   * Is the town destroyed (1) or not (0)
   * @min 0
   * @max 1
   * @example 0
   */
  devast?: number;
  /**
   * Is this a pandemonium town (1) or not (0)
   * @min 0
   * @max 1
   * @example 0
   */
  hard?: number;
  /**
   * Specific town type
   * @example "remote"
   */
  type?: "small" | "remote" | "panda" | "custom";
  /**
   * Town position on the map (x)
   * @example 16
   */
  x?: number;
  /**
   * Town position on the map (y)
   * @example 7
   */
  y?: number;
  /**
   * City language
   * @example "de"
   */
  region?: "de" | "en" | "fr" | "es";
  /** Town defense details */
  defense?: {
    /**
     * Base defense
     * @min 0
     * @example 10
     */
    base?: number;
    /**
     * Item defense
     * @min 0
     * @example 0
     */
    items?: number;
    /**
     * Defense by guardians
     * @min 0
     * @example 30
     */
    guardian_citizens?: number;
    /**
     * Defense from homes
     * @min 0
     * @example 27
     */
    citizen_homes?: number;
    /**
     * Upgrade defense
     * @min 0
     * @example 0
     */
    upgrades?: number;
    /**
     * Building defense
     * @min 0
     * @example 10
     */
    buildings?: number;
    /**
     * Total defense
     * @min 0
     * @example 67
     */
    total?: number;
    /**
     * Item defense multiplier
     * @min 0
     * @example 1
     */
    itemsMul?: number;
  };
}

/** Town bank */
export interface XMLBankObject {
  item?: XMLItemObject[];
}

/** Lists all citizens of the town */
export interface XMLCitizenListObject {
  citizen?: XMLCitizenObject[];
}

/** Lists all cadavers of the town */
export interface XMLCadaverListObject {
  cadaver?: {
    /**
     * Player name
     * @example "Dayan"
     */
    name?: string;
    /**
     * Unique user ID
     * @example 42
     */
    id?: number;
    /**
     * ID of the death type
     * @example 21
     */
    dtype?: number;
    /**
     * Day of death
     * @example 2
     */
    day?: number;
  }[];
}

/** An expedition */
export interface XMLExpeditionObject {
  /**
   * Expedition name
   * @example "Brain's schlimme Nachtwanderung"
   */
  name?: string;
  /**
   * Expedition creator name
   * @example "Brainbox"
   */
  author?: string;
  /**
   * Length of the route in AP
   * @example 18
   */
  length?: number;
  /**
   * Expedition creator user ID
   * @example 94
   */
  authorId?: number;
  point?: {
    /**
     * X position
     * @example 16
     */
    x?: number;
    /**
     * Y position
     * @example 7
     */
    y?: number;
  }[];
}

/** List of current expeditions in this town */
export interface XMLExpeditionListObject {
  item?: XMLExpeditionObject[];
}

/** Town map */
export interface XMLChartObject {
  /**
   * Map height
   * @example 25
   */
  hei?: number;
  /**
   * Map height
   * @example 25
   */
  wid?: number;
  zone?: {
    /**
     * X position
     * @example 16
     */
    x?: number;
    /**
     * Y position
     * @example 7
     */
    y?: number;
    /**
     * "Not visited today", 1 if the zone has been uncovered, but nobody has visited it on the current day
     * @example 0
     */
    nvt?: number;
  }[];
}

/** Server status */
export interface JSONServerStatusResponse {
  /**
   * True if the nightly attack is currently being processed.
   * @example true
   */
  attack?: boolean;
  /**
   * True if the server is in maintenance mode. WARNING: At this moment, the API is not available in maintenance mode!
   * @example false
   */
  maintain?: boolean;
}

/** List of item types known to the server. */
export type JSONPrototypeItemsResponse = Record<string, JSONItemPrototypeObject>;

/** Localizable string */
export type JSONLanguageDependantField =
  | string
  | {
      /**
       * German localization
       * @example "DE"
       */
      de?: string;
      /**
       * English localization
       * @example "EN"
       */
      en?: string;
      /**
       * French localization
       * @example "FR"
       */
      fr?: string;
      /**
       * Spanish localization
       * @example "ES"
       */
      es?: string;
    };

/** Item type */
export interface JSONItemPrototypeObject {
  /**
   * Numeric item ID
   * @example 1
   */
  id?: number;
  /**
   * Internal item descriptor.
   * @example "water"
   */
  uid?: string;
  /**
   * Path to item icon
   * @example "item/item_water.85230dbb.gif"
   */
  img?: string;
  /**
   * Is the item heavy?
   * @example false
   */
  heavy?: boolean;
  /**
   * Decoration value
   * @example 0
   */
  deco?: number;
  /**
   * Guardian strength
   * @example 0
   */
  guard?: number;
  /** Localizable string */
  name?: JSONLanguageDependantField;
  /** Localizable string */
  desc?: JSONLanguageDependantField;
  /** Localizable string */
  cat?: JSONLanguageDependantField;
}

/** An item resource needed for an action. */
export interface JSONItemResourceObject {
  /**
   * Required amount
   * @example 12
   */
  amount?: number;
  /** Item type */
  rsc?: JSONItemPrototypeObject;
}

/** Building type */
export interface JSONBuildingPrototypeObject {
  /**
   * Numeric building ID
   * @example 1
   */
  id?: number;
  /**
   * Path to building icon
   * @example "building/small_waterhole.467957af.gif"
   */
  img?: string;
  /** Localizable string */
  name?: JSONLanguageDependantField;
  /** Localizable string */
  desc?: JSONLanguageDependantField;
  /**
   * AP requirement
   * @example 100
   */
  pa?: number;
  /**
   * HP count
   * @example 100
   */
  maxLife?: number;
  /**
   * Can take damage and be destroyed.
   * @example true
   */
  breakable?: boolean;
  /**
   * Defense value
   * @example 10
   */
  def?: number;
  /**
   * Can be voted for a daily improvement.
   * @example true
   */
  hasUpgrade?: boolean;
  /**
   * Blueprint level (0 if no blueprint, 5 if not unlockable by blueprint)
   * @example 0
   */
  rarity?: number;
  /**
   * Always breaks during the nightly attack.
   * @example true
   */
  temporary?: boolean;
  /**
   * ID of parent building (0 if no parent)
   * @example 0
   */
  parent?: number;
  resources?: JSONItemResourceObject[];
}

/** Distinction type */
export interface JSONPictoPrototypeObject {
  /**
   * Numeric distinction ID
   * @example 1
   */
  id?: number;
  /**
   * Path to distinction icon
   * @example "pictos/r_heroac.2a464a9d.gif"
   */
  img?: string;
  /** Localizable string */
  name?: JSONLanguageDependantField;
  /** Localizable string */
  desc?: JSONLanguageDependantField;
  /**
   * Can be awarded by a Crow.
   * @example true
   */
  community?: boolean;
  /**
   * Is considered rare.
   * @example true
   */
  rare?: boolean;
}

/** Ruin type */
export interface JSONRuinPrototypeObject {
  /**
   * Numeric ruin ID
   * @example 1
   */
  id?: number;
  /**
   * Path to ruin icon
   * @example "building/small_waterhole.467957af.gif"
   */
  img?: string;
  /** Localizable string */
  name?: JSONLanguageDependantField;
  /** Localizable string */
  desc?: JSONLanguageDependantField;
  /**
   * Can this ruin be entered.
   * @example true
   */
  explorable?: boolean;
}

/** A MyHordes user */
export interface JSONCitizenUserObject {
  /**
   * Numeric user ID
   * @example 1
   */
  id?: number;
  /**
   * Twinoid ID if user has a connected Twinoid Account.
   * @example 250
   */
  twinId?: number;
  /**
   * Eternal Twin ID if user has a connected ET Account.
   * @example ""
   */
  etwinId?: string;
  /**
   * User name
   * @example "Brainbox"
   */
  name?: string;
  /**
   * User language
   * @example "de"
   */
  locale?: string;
  /**
   * User avatar path
   * @example ""
   */
  avatar?: string;
  /** A user avatar */
  avatarData?: JSONAvatarObject;
  /**
   * User is currently NOT incarnated.
   * @example true
   */
  isGhost?: boolean;
  /** List of previous games played by this user. */
  playedMaps?: JSONMapObject[];
  /** Friend list */
  contacts?: JSONUserObject[];
  /** List of distinctions */
  rewards?: JSONPictoObject[];
  /** Current home message (if incarnated) */
  homeMessage?: string;
  /**
   * User is a hero (if incarnated)
   * @example true
   */
  hero?: boolean;
  /**
   * User is dead (if incarnated)
   * @example false
   */
  dead?: boolean;
  /**
   * User is outside of town (if incarnated)
   * @example true
   */
  out?: boolean;
  /**
   * User is shunned (if incarnated)
   * @example false
   */
  ban?: boolean;
  /**
   * Home base defense (if incarnated)
   * @example 5
   */
  baseDef?: number;
  /**
   * X position on map (town position if in town, if incarnated)
   * @example 12
   */
  x?: number;
  /**
   * Y position on map (town position if in town, if incarnated)
   * @example 10
   */
  y?: number;
  /**
   * Town ID (if incarnated)
   * @example 1
   */
  mapId?: number;
  /** A profession */
  job?: JSONJobObject;
}

/** A MyHordes user */
export type JSONUserObject = JSONCitizenUserObject & {
  /** A running MyHordes game */
  map?: JSONGameObject;
};

/** Information about distinctions for a user. */
export interface JSONPictoObject {
  /**
   * Numeric distinction ID
   * @example 1
   */
  id?: number;
  /**
   * Is considered rare.
   * @example true
   */
  rare?: boolean;
  /**
   * Number of distinctions.
   * @example 1
   */
  number?: number;
  /**
   * Path to distinction icon
   * @example "pictos/r_heroac.2a464a9d.gif"
   */
  img?: string;
  /** Localizable string */
  name?: JSONLanguageDependantField;
  /** Localizable string */
  desc?: JSONLanguageDependantField;
  /** List of unlocked titles. */
  titles?: JSONLanguageDependantField[];
  /** Comments attached to this distinction. Usually used to note events where instances of this distinction were earned. */
  comments?: string[];
}

/** A MyHordes game */
export interface JSONMapObject {
  /**
   * Numeric user ID
   * @example 1
   */
  id?: number;
  /**
   * Twinoid ID if user has a connected Twinoid Account.
   * @example 250
   */
  twinId?: number;
  /**
   * Eternal Twin ID if user has a connected ET Account.
   * @example ""
   */
  etwinId?: string;
  /**
   * Numeric map ID
   * @example 1
   */
  mapId?: number;
  /**
   * Specific town type
   * @example "remote"
   */
  type?: "small" | "remote" | "panda" | "custom";
  /**
   * True if this is a pandemonium town
   * @example false
   */
  hard?: boolean;
  /**
   * Number of survived days.
   * @example 1
   */
  survival?: number;
  /**
   * Number of survived days for the entire town.
   * @example 1
   */
  day?: number;
  /**
   * User avatar path
   * @example ""
   */
  avatar?: string;
  /** A user avatar */
  avatarData?: JSONAvatarObject;
  /**
   * User name
   * @example "Brainbox"
   */
  name?: string;
  /**
   * Map name
   * @example "A Town"
   */
  mapName?: string;
  /**
   * If this town is imported from Twinoid, contains the import source and season.
   * @example "de-10"
   */
  origin?: string;
  /**
   * Season
   * @example 15
   */
  season?: number;
  /**
   * Server phase (alpha, beta, import or native)
   * @example "beta"
   */
  phase?: string;
  /**
   * Death type ID
   * @example 1
   */
  dtype?: number;
  /**
   * Is always zero (exists for backwards compatibility)
   * @example 0
   */
  v1?: number;
  /**
   * Soul points earned for this town.
   * @example 1
   */
  score?: number;
  /**
   * Citizen's last words.
   * @example 1
   */
  msg?: string;
  /**
   * Citizen's town comment.
   * @example 1
   */
  comment?: string;
  /** How was the body of this citizen cleaned up? */
  cleanup?: {
    /**
     * Name of the player who did the clean up.
     * @example "MisterD"
     */
    user?: string;
    /**
     * Cleanup type ID
     * @example 1
     */
    type?: number;
  };
  /** Information about distinctions for a user. */
  rewards?: JSONPictoObject;
}

/** A MyHordes game */
export interface JSONNestedMapObject {
  /**
   * Numeric user ID
   * @example 1
   */
  id?: number;
  /**
   * Twinoid ID if user has a connected Twinoid Account.
   * @example 250
   */
  twinId?: number;
  /**
   * Eternal Twin ID if user has a connected ET Account.
   * @example ""
   */
  etwinId?: string;
  /**
   * Number of survived days.
   * @example 1
   */
  survival?: number;
  /**
   * User avatar path
   * @example ""
   */
  avatar?: string;
  /** A user avatar */
  avatarData?: JSONAvatarObject;
  /**
   * User name
   * @example "Brainbox"
   */
  name?: string;
  /**
   * Death type ID
   * @example 1
   */
  dtype?: number;
  /**
   * Soul points earned for this town.
   * @example 1
   */
  score?: number;
  /**
   * Citizen's last words.
   * @example 1
   */
  msg?: string;
  /**
   * Citizen's town comment.
   * @example 1
   */
  comment?: string;
}

/** A MyHordes ranking entry */
export interface JSONTownObject {
  /**
   * Numeric town ID
   * @example 1
   */
  id?: number;
  /**
   * Numeric map ID
   * @example 1
   */
  mapId?: number;
  /**
   * Number of survived days for the town.
   * @example 1
   */
  day?: number;
  /**
   * Map name
   * @example "A Town"
   */
  mapName?: string;
  /**
   * Map language
   * @example "de"
   */
  language?: string;
  /**
   * Season
   * @example 15
   */
  season?: number;
  /**
   * Server phase (alpha, beta, import or native)
   * @example "beta"
   */
  phase?: string;
  /**
   * Is always zero (exists for backwards compatibility)
   * @example 0
   */
  v1?: number;
  /**
   * Town score
   * @example 1
   */
  score?: number;
  /**
   * Soul points given by the town
   * @example 1
   */
  sp?: number;
  citizens?: JSONNestedMapObject[];
}

/** A profession */
export interface JSONJobObject {
  /**
   * Numeric profession ID
   * @example 1
   */
  id?: number;
  /**
   * Internal identifier
   * @example ""
   */
  uid?: string;
  /** Localizable string */
  name?: JSONLanguageDependantField;
  /** Localizable string */
  desc?: JSONLanguageDependantField;
}

/** A user avatar */
export interface JSONAvatarObject {
  /**
   * Avatar URL
   * @example ""
   */
  url?: string;
  /**
   * Avatar image format
   * @example "jpeg"
   */
  format?: string;
  /**
   * Width of the avatar image (in px)
   * @min 0
   * @example 100
   */
  x?: number;
  /**
   * Height of the avatar image (in px)
   * @min 0
   * @example 100
   */
  y?: number;
  /**
   * Is the avatar considered to be of classic 90x30ish format (true) or not (false)
   * @example false
   */
  classic?: boolean;
  /**
   * Compressed avatar URL; only set if the default avatar is not already in classic format and the user has chosen a manual cropping of the avatar.
   * @example ""
   */
  compressed?: string;
}

export interface JSONEstimationObject {
  /**
   * Estimation day
   * @example 1
   */
  days?: number;
  /**
   * Estimation min
   * @example 10
   */
  min?: number;
  /**
   * Estimation max
   * @example 20
   */
  max?: number;
  /**
   * Has the estimation reached max precision?
   * @example true
   */
  maxed?: boolean;
}

export type JSONItemListObject = (JSONItemPrototypeObject & {
  /**
   * Item count
   * @example 4
   */
  count?: number;
  /**
   * Is this item broken?
   * @example false
   */
  broken?: boolean;
})[];

/** A running MyHordes game */
export interface JSONGameObject {
  /**
   * Numeric user ID
   * @example 1
   */
  id?: number;
  /** Town start date */
  date?: string;
  /**
   * Map width
   * @example 25
   */
  wid?: number;
  /**
   * Map height
   * @example 25
   */
  hei?: number;
  /**
   * Has an insurrection happened.
   * @example false
   */
  conspiracy?: boolean;
  /**
   * Current day
   * @example 1
   */
  days?: number;
  /**
   * Season
   * @example 15
   */
  season?: number;
  /**
   * Server phase (alpha, beta, import or native)
   * @example "beta"
   */
  phase?: string;
  /**
   * If this town is imported from Twinoid, contains the import source
   * @example "www.dieverdammten.de"
   */
  source?: string;
  /**
   * Bonus points for this town (usually 0)
   * @example 0
   */
  bonusPts?: number;
  /**
   * User ID of the current guide
   * @example 1
   */
  guide?: number;
  /**
   * User ID of the current shaman
   * @example 1
   */
  shaman?: number;
  /**
   * Town is a private town
   * @example false
   */
  custom?: boolean;
  citizens?: JSONCitizenUserObject[];
  city?: {
    /**
     * City name
     * @example "Alberner Seelenfänger"
     */
    name?: string;
    /**
     * Is the door open (true) or closed
     * @example true
     */
    door?: boolean;
    /**
     * Amount of water rations in the well
     * @min 0
     * @example 120
     */
    water?: number;
    /**
     * Has chaos erupted in town (true) or not
     * @example false
     */
    chaos?: boolean;
    /**
     * Is the town destroyed (true)
     * @example false
     */
    devast?: boolean;
    /**
     * Is this a pandemonium town (true)
     * @example false
     */
    hard?: boolean;
    /**
     * Specific town type
     * @example "remote"
     */
    type?: "small" | "remote" | "panda" | "custom";
    /**
     * Town position on the map (x)
     * @example 16
     */
    x?: number;
    /**
     * Town position on the map (y)
     * @example 7
     */
    y?: number;
    /** Town buildings. */
    buildings?: (JSONBuildingPrototypeObject & {
      /**
       * Current HP
       * @example 10
       */
      life?: number;
      /**
       * How many people have voted to improve this building (0 if non-upgradeable)
       * @example 0
       */
      votes?: number;
      /**
       * Current upgrade level (0 if non-upgradeable)
       * @example 0
       */
      hasLevels?: number;
    })[];
    /** Current news article */
    news?: {
      /**
       * Attack strength
       * @example 100
       */
      z?: number;
      /**
       * Defense
       * @example 100
       */
      def?: number;
      /**
       * Amount of lost water.
       * @example 0
       */
      water?: number;
      /** Localizable string */
      content?: JSONLanguageDependantField;
      /** Localizable string */
      regenDir?: JSONLanguageDependantField;
    };
    /** Current town defense */
    defense?: {
      /**
       * Total defense
       * @example 0
       */
      total?: number;
      /**
       * Base town defense
       * @example 0
       */
      base?: number;
      /**
       * Defense from buildings
       * @example 0
       */
      buildings?: number;
      /**
       * Defense from upgrades
       * @example 0
       */
      upgrades?: number;
      /**
       * Defense from items
       * @example 0
       */
      items?: number;
      /**
       * Item defense multiplier
       * @example 1
       */
      itemsMul?: number;
      /**
       * Defense from citizen homes
       * @example 0
       */
      citizenHomes?: number;
      /**
       * Defense from guardians
       * @example 0
       */
      citizenGuardians?: number;
      /**
       * Defense from watchmen
       * @example 0
       */
      watchmen?: number;
      /**
       * Defense from souls
       * @example 0
       */
      souls?: number;
      /**
       * Temp defense
       * @example 0
       */
      temp?: number;
      /**
       * Defense from the cemetery.
       * @example 0
       */
      cadavers?: number;
      /**
       * Defense bonus multiplier
       * @example 0
       */
      bonus?: number;
    };
    /** Town building upgrades */
    upgrades?: {
      /**
       * Total number of upgrades
       * @example 1
       */
      total?: number;
      list?: {
        /** Localizable string */
        name?: JSONLanguageDependantField;
        /**
         * Upgrade level
         * @example 1
         */
        level?: number;
        /** Localizable string */
        update?: JSONLanguageDependantField;
        /**
         * The building ID
         * @example 1
         */
        buildingId?: number;
      }[];
    };
    estimations?: JSONEstimationObject;
    estimationsNext?: JSONEstimationObject;
    bank?: JSONItemListObject;
  };
  expeditions?: {
    author?: {
      /**
       * Author user ID
       * @example 1
       */
      id?: number;
      /**
       * Author name
       * @example "Brainbox"
       */
      name?: string;
      /**
       * Author avatar URL
       * @example ""
       */
      avatar?: string;
      /** A user avatar */
      avatarData?: JSONAvatarObject;
    };
    /** Route name */
    name?: string;
    /**
     * Route length (in AP)
     * @example 18
     */
    length?: number;
    points?: {
      /** X position */
      x?: number;
      /** Y position */
      y?: number;
    }[];
  }[];
  zones?: {
    /**
     * X Position on the map (when outside)
     * @example 5
     */
    x?: number;
    /**
     * Y Position on the map (when outside)
     * @example -2
     */
    y?: number;
    /**
     * Distance to town (in KM)
     * @example 10
     */
    km?: number;
    /**
     * Number of zombies on this zone
     * @example 0
     */
    zombies?: number;
    /**
     * True if this is the town zone
     * @example false
     */
    is_town?: boolean;
    building?: {
      /**
       * Remaining number of sand piles that must be cleared to uncover the zone.
       * @example 0
       */
      sandpile?: number;
      /**
       * Name of the ruin
       * @example "Abgelegenes Haus"
       */
      name?: string;
      /**
       * Ruin type ID
       * @example 1
       */
      id?: number;
    };
    items?: (JSONItemPrototypeObject & {
      /**
       * Item count
       * @example 4
       */
      count?: number;
      /**
       * Is this item broken?
       * @example false
       */
      broken?: boolean;
    })[];
  }[];
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "/api/x/";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    // Hack to auth using query here
    query = {
      ...query,
      ...this.securityData,
    };

    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    console.log(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`);
    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title MyHordes External API
 * @version 2.1.12
 * @license AGPL3 (https://spdx.org/licenses/AGPL-3.0-or-later.html)
 * @baseUrl /api/x/
 *
 * This documentation describes the MyHordes external API. There are two APIs available to use - JSON and XML. Although it's possible to mix them, this is not recommended.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v2 = {
    /**
     * No description
     *
     * @tags XML API
     * @name GetV2
     * @summary Returns a list of available endpoints
     * @request GET:/v2/xml
     * @secure
     */
    getV2: (params: RequestParams = {}) =>
      this.request<XMLEndpointList, any>({
        path: `/v2/xml`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags XML API
     * @name XmlUserList
     * @summary User information.
     * @request GET:/v2/xml/user
     * @secure
     */
    xmlUserList: (params: RequestParams = {}) =>
      this.request<XMLUserResponse, any>({
        path: `/v2/xml/user`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags XML API
     * @name XmlItemsList
     * @summary Item information.
     * @request GET:/v2/xml/items
     * @secure
     */
    xmlItemsList: (params: RequestParams = {}) =>
      this.request<XMLItemResponse, any>({
        path: `/v2/xml/items`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags XML API
     * @name XmlBuildingsList
     * @summary Building information.
     * @request GET:/v2/xml/buildings
     * @secure
     */
    xmlBuildingsList: (params: RequestParams = {}) =>
      this.request<XMLBuildingResponse, any>({
        path: `/v2/xml/buildings`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags XML API
     * @name XmlRuinsList
     * @summary Ruin information.
     * @request GET:/v2/xml/ruins
     * @secure
     */
    xmlRuinsList: (params: RequestParams = {}) =>
      this.request<XMLRuinResponse, any>({
        path: `/v2/xml/ruins`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags XML API
     * @name XmlPictosList
     * @summary Picto information.
     * @request GET:/v2/xml/pictos
     * @secure
     */
    xmlPictosList: (params: RequestParams = {}) =>
      this.request<XMLPictoResponse, any>({
        path: `/v2/xml/pictos`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags XML API
     * @name XmlTownList
     * @summary Town information.
     * @request GET:/v2/xml/town
     * @secure
     */
    xmlTownList: (
      query?: {
        /** Set true to only fetch the header node. Speeds up response time immensely. */
        header_only?: boolean;
        /** Set true to allow the data node to be rendered from a cache. Speeds up response time. */
        cache?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<XMLTownResponse, any>({
        path: `/v2/xml/town`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  json = {
    /**
     * No description
     *
     * @tags JSON API
     * @name StatusList
     * @summary Server status
     * @request GET:/json/status
     */
    statusList: (params: RequestParams = {}) =>
      this.request<JSONServerStatusResponse, any>({
        path: `/json/status`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JSON API
     * @name ItemsList
     * @summary Prototypes API (item types)
     * @request GET:/json/items
     * @secure
     */
    itemsList: (
      query?: {
        /** Comma-separated list of fields to fetch for the result set. Check the example below for a list of valid fields. To fetch fields from a nested object, use the syntax `a,b.fields(c,d)` *(fetch fields c and d from nested object b)* */
        fields?: string;
        /** Reduce the output list to the given UIDs. Multiple values can be separated by commas. */
        filters?: string;
        /** Comma-separated list of languages to fetch the content in. Note that passing only a single language will turn all language-dependant fields to a single string. */
        languages?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<JSONPrototypeItemsResponse, any>({
        path: `/json/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JSON API
     * @name BuildingsList
     * @summary Prototypes API (buildings)
     * @request GET:/json/buildings
     * @secure
     */
    buildingsList: (
      query?: {
        /** Comma-separated list of fields to fetch for the result set. Check the example below for a list of valid fields. To fetch fields from a nested object, use the syntax `a,b.fields(c,d)` *(fetch fields c and d from nested object b)* */
        fields?: string;
        /** Reduce the output list to the given UIDs. Multiple values can be separated by commas. */
        filters?: string;
        /** Comma-separated list of languages to fetch the content in. Note that passing only a single language will turn all language-dependant fields to a single string. */
        languages?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<JSONBuildingPrototypeObject, any>({
        path: `/json/buildings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JSON API
     * @name PictosList
     * @summary Prototypes API (distinctions)
     * @request GET:/json/pictos
     * @secure
     */
    pictosList: (
      query?: {
        /** Comma-separated list of fields to fetch for the result set. Check the example below for a list of valid fields. To fetch fields from a nested object, use the syntax `a,b.fields(c,d)` *(fetch fields c and d from nested object b)* */
        fields?: string;
        /** Reduce the output list to the given UIDs. Multiple values can be separated by commas. */
        filters?: string;
        /** Comma-separated list of languages to fetch the content in. Note that passing only a single language will turn all language-dependant fields to a single string. */
        languages?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<JSONPictoPrototypeObject, any>({
        path: `/json/pictos`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JSON API
     * @name RuinsList
     * @summary Prototypes API (ruins)
     * @request GET:/json/ruins
     * @secure
     */
    ruinsList: (
      query?: {
        /** Comma-separated list of fields to fetch for the result set. Check the example below for a list of valid fields. To fetch fields from a nested object, use the syntax `a,b.fields(c,d)` *(fetch fields c and d from nested object b)* */
        fields?: string;
        /** Reduce the output list to the given UIDs. Multiple values can be separated by commas. */
        filters?: string;
        /** Comma-separated list of languages to fetch the content in. Note that passing only a single language will turn all language-dependant fields to a single string. */
        languages?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<JSONRuinPrototypeObject, any>({
        path: `/json/ruins`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JSON API
     * @name GetJson
     * @summary Information about the current user.
     * @request GET:/json/me
     * @secure
     */
    getJson: (
      query?: {
        /** Comma-separated list of fields to fetch for the result set. Check the example below for a list of valid fields. To fetch fields from a nested object, use the syntax `a,b.fields(c,d)` *(fetch fields c and d from nested object b)* */
        fields?: string;
        /** Comma-separated list of languages to fetch the content in. Note that passing only a single language will turn all language-dependant fields to a single string. */
        languages?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<JSONUserObject, any>({
        path: `/json/me`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JSON API
     * @name UserList
     * @summary Information about the current user.
     * @request GET:/json/user
     * @secure
     */
    userList: (
      query: {
        /** User ID */
        id: number;
        /** Comma-separated list of fields to fetch for the result set. Check the example below for a list of valid fields. To fetch fields from a nested object, use the syntax `a,b.fields(c,d)` *(fetch fields c and d from nested object b)* */
        fields?: string;
        /** Comma-separated list of languages to fetch the content in. Note that passing only a single language will turn all language-dependant fields to a single string. */
        languages?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<JSONUserObject, any>({
        path: `/json/user`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JSON API
     * @name UsersList
     * @summary Information about multiple users at once.
     * @request GET:/json/users
     * @secure
     */
    usersList: (
      query: {
        /** Comma-separated list of user IDs */
        ids: string;
        /** Comma-separated list of fields to fetch for the result set. Check the example below for a list of valid fields. To fetch fields from a nested object, use the syntax `a,b.fields(c,d)` *(fetch fields c and d from nested object b)* */
        fields?: string;
        /** Comma-separated list of languages to fetch the content in. Note that passing only a single language will turn all language-dependant fields to a single string. */
        languages?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<JSONUserObject[], any>({
        path: `/json/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JSON API
     * @name GetJson2
     * @summary Information about a current game.
     * @request GET:/json/map
     * @originalName getJson
     * @duplicate
     * @secure
     */
    getJson2: (
      query: {
        /** Map ID */
        mapId: number;
        /** Comma-separated list of fields to fetch for the result set. Check the example below for a list of valid fields. To fetch fields from a nested object, use the syntax `a,b.fields(c,d)` *(fetch fields c and d from nested object b)* */
        fields?: string;
        /** Comma-separated list of languages to fetch the content in. Note that passing only a single language will turn all language-dependant fields to a single string. */
        languages?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<JSONGameObject, any>({
        path: `/json/map`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JSON API
     * @name TownlistList
     * @summary Get a list of town IDs for a specific season. NOTE: This endpoint is NOT AVAILABLE when using demo keys.
     * @request GET:/json/townlist
     * @secure
     */
    townlistList: (
      query?: {
        /** Season. Defaults to current season. Use 'a' to select the MyHordes alpha Season and 'b' to select the MyHordes beta season, otherwise enter a season number. */
        season?: number | string;
        /** Optional town language filter. */
        language?: "de" | "fr" | "es" | "en" | "multi";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          towns?: number[];
        },
        any
      >({
        path: `/json/townlist`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JSON API
     * @name TownsList
     * @summary Information about multiple towns at once. NOTE: This endpoint is NOT AVAILABLE when using demo keys.
     * @request GET:/json/towns
     * @secure
     */
    townsList: (
      query: {
        /** Comma-separated list of town IDs (max 50). */
        ids: string;
        /** Comma-separated list of fields to fetch for the result set. Check the example below for a list of valid fields. To fetch fields from a nested object, use the syntax `a,b.fields(c,d)` *(fetch fields c and d from nested object b)* */
        fields?: string;
        /** Comma-separated list of languages to fetch the content in. Note that passing only a single language will turn all language-dependant fields to a single string. */
        languages?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<JSONTownObject[], any>({
        path: `/json/towns`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
