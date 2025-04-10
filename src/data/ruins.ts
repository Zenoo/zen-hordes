import { ItemId } from './items';

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
  CROWS_FIT_GYM = 64,
  BURIED_BUILDING = -1
}

export type Ruin = {
  id: RuinId;
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
    event?: GameEvent;
  }[];
};

export const ruins: Record<RuinId, Ruin> = {
  [RuinId.CITIZEN_S_HOME]: {
    id: RuinId.CITIZEN_S_HOME,
    name: {
      [Lang.EN]: "Citizen's Home",
      [Lang.FR]: "Maison d’un citoyen",
      [Lang.DE]: "Abgelegenes Haus",
      [Lang.ES]: "Casa de un habitante"
    },
    description: {
      [Lang.EN]: "This was home to a citizen who decided to settle down outside the town, thinking they would survive for longer unaffected by the quarrels and betrayals inherent in town life. Half of their corpse is still in the living room.",
      [Lang.FR]: "Ici vivait un Citoyen qui avait décidé de s'installer hors de la ville, pensant survivre plus longtemps, loin des querelles et des trahisons. <strong>La moitié de son corps est toujours dans le salon</strong>.",
      [Lang.DE]: "Hier wohnte ein Bürger, der sich außerhalb der Stadt niedergelassen hat, weil er den Streitigkeiten und dem Verrat, die das Stadtleben mit sich bringt, entfliehen wollte. Die Hälfte seiner Leiche liegt immer noch im Wohnzimmer.",
      [Lang.ES]: "Aquí vivió un habitante que se instaló en el desierto, pensando empezar una nueva vida, lejos de la traición y de las intrigas de sus compañeros. <strong>La mitad de su cuerpo aún está tirado en un rincón</strong>."
    },
    icon: "home",
    campingModifier: 10,
    spawnChance: 686,
    emptyChance: 0.25,
    km: {
      min: 1,
      max: 4
    },
    explorable: false,
    drops: [
      {
        item: ItemId.CHEST_CITIZEN,
        odds: 50,
      },
      {
        item: ItemId.CAN,
        odds: 100,
      },
      {
        item: ItemId.LOCK,
        odds: 2,
      },
      {
        item: ItemId.ELECTRO_BOX,
        odds: 8,
      },
      {
        item: ItemId.CHAIR_BASIC,
        odds: 5,
      },
      {
        item: ItemId.CDELVI,
        odds: 1,
      },
      {
        item: ItemId.SHOE,
        odds: 0,
      },
      {
        item: ItemId.BIKE_PART,
        odds: 0,
      }
    ]
  },
  [RuinId.SCOTTISH_SMITH_S_SUPERSTORE]: {
    id: RuinId.SCOTTISH_SMITH_S_SUPERSTORE,
    name: {
      [Lang.EN]: "Scottish Smith's Superstore",
      [Lang.FR]: "Épicerie Fargo",
      [Lang.DE]: "Albi Supermarkt",
      [Lang.ES]: "Tienda Don Chicho"
    },
    description: {
      [Lang.EN]: "One of the many Smith's Superstores that proliferated around the year 2010 then disappeared... specialising in making things as cheap as possible, you should be able to find whatever you need here. Whether you're potless or just being tighter than two coats of paint, shop at Smiths!",
      [Lang.FR]: "Une enseigne de la chaîne de magasins Brian Fargo. On y trouve généralement tout ce qu'il faut pour nettoyer et entretenir sa maison. Les plus démunis y trouveront de quoi manger...",
      [Lang.DE]: "Einer der vielen Albi Supermarkt, die um das Jahr 2010 herum aus dem Boden schossen und später dann verschwanden... spezialisiert darauf, Dinge so billig wie möglich zu verscherbeln. Hier findest du alles finden, was du brauchst - egal ob du einfach pleite bist oder eisern auf ein neues Stück Seife sparst, kaufe bei ALBI ein!",
      [Lang.ES]: "Ahí se encuentran muchos productos de limpieza. Los más desfavorecidos encontrarán algo de comer..."
    },
    icon: "albi",
    campingModifier: 10,
    spawnChance: 686,
    emptyChance: 0.05,
    km: {
      min: 6,
      max: 9
    },
    explorable: false,
    drops: [
      {
        item: ItemId.DRUG_HERO,
        odds: 20,
      },
      {
        item: ItemId.MEAT,
        odds: 20,
      },
      {
        item: ItemId.FOOD_NOODLES_HOT,
        odds: 20,
      },
      {
        item: ItemId.VEGETABLE_TASTY,
        odds: 20,
      },
      {
        item: ItemId.ELECTRO_BOX,
        odds: 5,
      },
      {
        item: ItemId.POWDER,
        odds: 5,
      },
      {
        item: ItemId.FOOD_BAG,
        odds: 5,
      },
      {
        item: ItemId.DOOR_CARPET,
        odds: 5,
      },
      {
        item: ItemId.LIGHTS,
        odds: 5,
      }
    ]
  },
  [RuinId.ONCE_INHABITED_CAVE]: {
    id: RuinId.ONCE_INHABITED_CAVE,
    name: {
      [Lang.EN]: "Once-inhabited Cave",
      [Lang.FR]: "Caverne anciennement habitée",
      [Lang.DE]: "Alte Höhle",
      [Lang.ES]: "Cueva"
    },
    description: {
      [Lang.EN]: "Some actions cannot be forgiven. Take, for example, the case of the cavern: your group are being followed and you stupidly rush into a cave to hide. For how long can you cry while you wait for your pursuers to catch up ? The guy lagging behind, who is half-blind, didn't have to cry for long...",
      [Lang.FR]: "Il y a des réflexes qui ne pardonnent pas. Prenez par exemple le coup de la caverne : vous êtes poursuivi(e) et vous vous engouffrez bêtement dans une caverne pour vous mettre à l'abri. Le problème qui se pose alors : maintenant que vous êtes dans une impasse, combien de temps allez-vous pouvoir hurler en attendant que vos poursuivants vous rattrapent ? Le type au fond, à qui il manque la moitié du visage, n'a pas dû crier bien longtemps.",
      [Lang.DE]: "Manche Fehler enden zwangsläufig tödlich. Nehmt als Beispiel diese Höhle. Stellt euch vor, ihr werdet von einer Zombiemeute verfolgt und eilt überstürzt in eine Höhle, um Schutz zu suchen. Ihr werdet dann folgendes Problem haben: Wie kommt ihr heil wieder raus, wenn die Biester euch gefolgt sind? Der zerfledderte Typ an der Wand dort hinten scheint dies nicht bedacht zu haben...",
      [Lang.ES]: "El típico caso de un hombre que se mete en una cueva huyendo de una turba de zombies. Todo bien hasta allí, hasta que el hombre recuerda que tenía 2 zombies abrazados a su espalda. El pobre gritó de todo menos «Por favor»."
    },
    icon: "cave",
    campingModifier: 10,
    spawnChance: 184,
    emptyChance: 0.1,
    km: {
      min: 16,
      max: 19
    },
    explorable: false,
    drops: [
      {
        item: ItemId.MONEY,
        odds: 50,
      },
      {
        item: ItemId.FLASH,
        odds: 10,
      },
      {
        item: ItemId.COFFEE,
        odds: 10,
      },
      {
        item: ItemId.CHAIR_BASIC,
        odds: 10,
      },
      {
        item: ItemId.TABLE,
        odds: 5,
      },
      {
        item: ItemId.TEDDY,
        odds: 1,
      },
      {
        item: ItemId.MACHINE_1,
        odds: 10,
      },
      {
        item: ItemId.MACHINE_2,
        odds: 10,
      },
      {
        item: ItemId.MACHINE_3,
        odds: 10,
      },
      {
        item: ItemId.RP_LETTER,
        odds: 2,
      },
      {
        item: ItemId.RP_SHEETS,
        odds: 2,
      },
      {
        item: ItemId.RADIUS_MK2_PART,
        odds: 1,
      },
      {
        item: ItemId.REPAIR_KIT_PART_RAW,
        odds: 1,
      }
    ]
  },
  [RuinId.OLD_HYDRAULIC_PUMP]: {
    id: RuinId.OLD_HYDRAULIC_PUMP,
    name: {
      [Lang.EN]: "Old Hydraulic Pump",
      [Lang.FR]: "Vieille pompe hydraulique",
      [Lang.DE]: "Alte Hydraulikpumpe",
      [Lang.ES]: "Vieja Bomba hidráulica"
    },
    description: {
      [Lang.EN]: "An old pump which is rusting away, but is nonetheless capable of drawing water in the desert... The only problem is that even if you manage to get it working, the water will generally be undrinkable and will need to be purified in town with the appropriate equipment...",
      [Lang.FR]: "Une antique pompe rongée par la rouille, capable de puiser de l'eau dans le désert... Le seul problème c'est que même si vous arrivez à la faire fonctionner, cette eau sera généralement <strong>non-potable</strong> et devra être <strong>purifiée en ville</strong> avec les produits adéquats.",
      [Lang.DE]: "Eine alte Pumpe, die zwar vor sich hin rostet, aber dennoch in der Lage ist, in der Wüste Wasser zu schöpfen... Das einzige Problem ist, dass das Wasser, selbst wenn Sie es zum Funktionieren bringen, im Grunde genommen ungenießbar ist und in der Stadt mit den entsprechenden Geräten gereinigt werden muss.",
      [Lang.ES]: "Esta bomba hidráulica está bastante corroída y tiene aún la capacidad de extraer agua en el desierto... Si llegas a hacerla funcionar, el agua <strong>no será potable</strong> y deberá ser <strong>purificada en el pueblo</strong> con los productos necesarios."
    },
    icon: "pump",
    campingModifier: 10,
    spawnChance: 401,
    emptyChance: 0.1,
    km: {
      min: 3,
      max: 6
    },
    explorable: false,
    drops: [
      {
        item: ItemId.JERRYCAN,
        odds: 60,
      },
      {
        item: ItemId.TUBE,
        odds: 4,
      },
      {
        item: ItemId.METAL_BEAM,
        odds: 4,
      },
      {
        item: ItemId.ELECTRO,
        odds: 1,
      },
      {
        item: ItemId.JERRYGUN_PART,
        odds: 2,
      },
      {
        item: ItemId.OILCAN,
        odds: 6,
      }
    ]
  },
  [RuinId.OLD_BICYCLE_HIRE_SHOP]: {
    id: RuinId.OLD_BICYCLE_HIRE_SHOP,
    name: {
      [Lang.EN]: "Old Bicycle Hire Shop",
      [Lang.FR]: "Ancien Vélib’",
      [Lang.DE]: "Alter Fahrradverleih",
      [Lang.ES]: "Taller de bicicletas"
    },
    description: {
      [Lang.EN]: "An old bicycle hire warehouse, littered with pieces of metal, tools and all kinds of debris.",
      [Lang.FR]: "Une ancienne gare à vélo jonchée de pièces de ferrailles, d'outils et de débris en tous genres.",
      [Lang.DE]: "Ein altes Fahrradverleihlager, das mit Metallstücken, Werkzeugen und allen Arten von Schutt übersät ist.",
      [Lang.ES]: "Un antiguo taller de reparación de bicicletas repleta de herramientas y chatarra de todo tipo."
    },
    icon: "bike",
    campingModifier: 10,
    spawnChance: 159,
    emptyChance: 0.25,
    km: {
      min: 4,
      max: 7
    },
    explorable: false,
    drops: [
      {
        item: ItemId.MECA_PARTS,
        odds: 2,
      },
      {
        item: ItemId.TUBE,
        odds: 10,
      },
      {
        item: ItemId.COURROIE,
        odds: 10,
      },
      {
        item: ItemId.POCKET_BELT,
        odds: 10,
      },
      {
        item: ItemId.RADIO_OFF,
        odds: 5,
      },
      {
        item: ItemId.BIKE_PART,
        odds: 0,
      }
    ]
  },
  [RuinId.DESERTED_FREIGHT_YARD]: {
    id: RuinId.DESERTED_FREIGHT_YARD,
    name: {
      [Lang.EN]: "Deserted Freight Yard",
      [Lang.FR]: "Gare de triage désertée",
      [Lang.DE]: "Alter Rangierbahnhof",
      [Lang.ES]: "Plataforma ferroviaria"
    },
    description: {
      [Lang.EN]: "The turntable in the middle of this rail depot constantly dispatched and received merchandise from all over the world, 24 hours a day. Today, all that remains is a 150 metre long section, maybe a bit more if you include the remaining rails.",
      [Lang.FR]: "Cette plaque tournante centrale du réseau ferroviaire du pays dispatchait et aiguillait les marchandises venues de tous les horizons, sans interruption, 24h/24. Aujourd'hui, le 'vaste réseau' en question mesure environ 150 mètres de long, si on compte les vestiges de rails, un peu plus loin.",
      [Lang.DE]: "Dieser Rangierbahnhof war einmal das zentrale Drehkreuz des Landes. Waren aus aller Herren Länder wurden hier rund um die Uhr umgeladen und in alle Himmelsrichtungen versendet. Das 'weitverzweigte Netzt' ist heute noch ungefähr 150 Meter lang, vorausgesetzt man zählt die Gleisüberbleibsel da hinten noch mit.",
      [Lang.ES]: "Esta plataforma ferroviaria se dedicaba a la distribución de mercancías. Ya que estás aquí, ¿por qué no echarle un vistazo?"
    },
    icon: "freight",
    campingModifier: 10,
    spawnChance: 464,
    emptyChance: 0.1,
    km: {
      min: 10,
      max: 13
    },
    explorable: false,
    drops: [
      {
        item: ItemId.METAL_BEAM,
        odds: 3,
      },
      {
        item: ItemId.WOOD_BEAM,
        odds: 3,
      },
      {
        item: ItemId.WRENCH,
        odds: 3,
      },
      {
        item: ItemId.WOOD2,
        odds: 10,
      },
      {
        item: ItemId.METAL,
        odds: 10,
      },
      {
        item: ItemId.COURROIE,
        odds: 1,
      },
      {
        item: ItemId.COFFEE,
        odds: 1,
      },
      {
        item: ItemId.CHAIN,
        odds: 5,
      }
    ]
  },
  [RuinId.OLD_FIELD_HOSPITAL]: {
    id: RuinId.OLD_FIELD_HOSPITAL,
    name: {
      [Lang.EN]: "Old Field Hospital",
      [Lang.FR]: "Vieil hôpital de campagne",
      [Lang.DE]: "Altes Feldkrankenhaus",
      [Lang.ES]: "Hospital de campaña"
    },
    description: {
      [Lang.EN]: "The remains which litter the corridors of this improvised hospital must be what is left of the patients. It's difficult to say how many must have died here on the night of the attack... Maybe if you count the number of arms on the ground and divide by two ?",
      [Lang.FR]: "Les restes qui jonchent les allées de cet hôpital improvisé devaient être des patients. Difficile de savoir combien ils avaient pu être à mourir ici, le soir de l'attaque… Peut-être qu'en comptant le nombre de bras et en divisant par deux ?",
      [Lang.DE]: "Die menschlichen Überreste, die in der Auffahrt liegen gehören den ehemaligen Patienten dieses improvisierten Krankenhauses. Schwer zu sagen, wie viele Menschen hier beim abendlichen Angriff gestorben sind... Wenn du die Anzahl der Arme durch zwei teilst, vielleicht bekommst du dann eine grobe Schätzung?",
      [Lang.ES]: "Entre los cuerpos regados en los pasillos de este hospital improvisado se encuentran pacientes, enfermeras y víctimas del ataque... Es difícil saber cuántos hay. ¿Tal vez contando la cantidad de brazos y dividiéndolas entre dos?"
    },
    icon: "hospital",
    campingModifier: 10,
    spawnChance: 205,
    emptyChance: 0.1,
    km: {
      min: 16,
      max: 19
    },
    explorable: false,
    drops: [
      {
        item: ItemId.PHARMA,
        odds: 20,
      },
      {
        item: ItemId.DRUG_RANDOM,
        odds: 30,
      },
      {
        item: ItemId.VODKA,
        odds: 10,
      },
      {
        item: ItemId.DRUG_WATER,
        odds: 10,
      },
      {
        item: ItemId.BETA_DRUG_BAD,
        odds: 15,
      },
      {
        item: ItemId.XANAX,
        odds: 5,
      },
      {
        item: ItemId.DRUG,
        odds: 10,
      },
      {
        item: ItemId.DRUG_HERO,
        odds: 5,
      },
      {
        item: ItemId.DISINFECT,
        odds: 10,
      },
      {
        item: ItemId.CYANURE,
        odds: 10,
      },
      {
        item: ItemId.FUNGUS,
        odds: 5,
      }
    ]
  },
  [RuinId.OLD_AERODROME]: {
    id: RuinId.OLD_AERODROME,
    name: {
      [Lang.EN]: "Old Aerodrome",
      [Lang.FR]: "Ancien aérodrome",
      [Lang.DE]: "Altes Flugfeld",
      [Lang.ES]: "Antiguo aeródromo"
    },
    description: {
      [Lang.EN]: "The only things taking off or landing at this crumbling aerodrome are the flies. Maybe if you forage around in the warehouses you will find something useful. Like, say, an A380 in working order.",
      [Lang.FR]: "Tout ce qui décolle de cet aérodrome pourrissant, ce sont les mouches. Peut-être qu'en fouinant dans les entrepôts, vous parviendrez à mettre la main sur un truc utile. Genre, un A360 en état de marche.",
      [Lang.DE]: "Das Einzige, was auf diesem bröckelnden Flugplatz startet oder landet, sind die Fliegen. Vielleicht finden Sie etwas Nützliches, wenn Sie in den Lagerhallen herumstöbern. Zum Beispiel einen A380 in funktionstüchtigem Zustand.",
      [Lang.ES]: "Lo único que vuela en este lugar son las moscas. Tal vez hurgando en el depósito encuentres algo útil. Algo como un Boeing 747 que funcione."
    },
    icon: "aerodrome",
    campingModifier: 10,
    spawnChance: 129,
    emptyChance: 0.1,
    km: {
      min: 12,
      max: 15
    },
    explorable: false,
    drops: [
      {
        item: ItemId.METAL_BEAM,
        odds: 30,
      },
      {
        item: ItemId.REPAIR_ONE,
        odds: 10,
      },
      {
        item: ItemId.ELECTRO_BOX,
        odds: 15,
      },
      {
        item: ItemId.MECA_PARTS,
        odds: 10,
      },
      {
        item: ItemId.ENGINE_PART,
        odds: 1,
      },
      {
        item: ItemId.COURROIE,
        odds: 1,
      },
      {
        item: ItemId.TUBE,
        odds: 1,
      },
      {
        item: ItemId.RP_MANUAL,
        odds: 1,
      },
      {
        item: ItemId.PLATE_RAW,
        odds: 1,
      },
      {
        item: ItemId.FENCE,
        odds: 1,
      },
      {
        item: ItemId.JERRYCAN,
        odds: 1,
      },
      {
        item: ItemId.WIRE,
        odds: 3,
      },
      {
        item: ItemId.OILCAN,
        odds: 4,
      }
    ]
  },
  [RuinId.OLD_POLICE_STATION]: {
    id: RuinId.OLD_POLICE_STATION,
    name: {
      [Lang.EN]: "Old Police Station",
      [Lang.FR]: "Ancien commissariat",
      [Lang.DE]: "Altes Polizeipräsidium",
      [Lang.ES]: "Antigua comisaría"
    },
    description: {
      [Lang.EN]: "This imposing building stretches over several hundred metres. It is split into numerous rooms but many of them collapsed a long time ago. If you look at the number of bullet holes and improvised barricades, it seems that this police station was the scene of some particularly violent confrontations.",
      [Lang.FR]: "L'imposant bâtiment s'étend sur plusieurs centaines de mètres. Il est divisé en nombreuses salles mais beaucoup se sont effondrées il y a bien longtemps. Si on en croit les nombreux impacts de balles et les barricades improvisées, <strong>ce commissariat a été le théâtre d'affrontements particulièrement violents</strong>.",
      [Lang.DE]: "Dieses beeindruckende Gebäude erstreckt sich auf mehrere Hundert Meter. Es enthält zahlreiche Räume, die größtenteils eingestürzt sind. Die große Anzahl an Einschusslöchern in den Wänden und die improvisierten Barrikaden lassen vermuten, dass das Gebäude vor einiger Zeit Schauplatz heftiger Gefechte gewesen ist.",
      [Lang.ES]: "Este impresionante edificio se extiende por varios cientos de metros. Posee numerosas habitaciones, la mayoría de las cuales se han derrumbado casi por completo. La gran cantidad de agujeros de bala en las paredes y las barricadas improvisadas sugieren que el edificio fue escenario de feroces combates hace ya un tiempo."
    },
    icon: "police",
    campingModifier: 30,
    spawnChance: 640,
    emptyChance: 0.1,
    km: {
      min: 6,
      max: 9
    },
    explorable: false,
    drops: [
      {
        item: ItemId.GUN,
        odds: 5,
      },
      {
        item: ItemId.MACHINE_GUN,
        odds: 2,
      },
      {
        item: ItemId.TASER_EMPTY,
        odds: 7,
      },
      {
        item: ItemId.PILEGUN_EMPTY,
        odds: 5,
      },
      {
        item: ItemId.DRUG_HERO,
        odds: 10,
      },
      {
        item: ItemId.BIG_PGUN_PART,
        odds: 7,
      },
      {
        item: ItemId.WATERGUN_EMPTY,
        odds: 7,
      },
      {
        item: ItemId.KNIFE,
        odds: 5,
      },
      {
        item: ItemId.BANDAGE,
        odds: 4,
      },
      {
        item: ItemId.BAG,
        odds: 5,
      },
      {
        item: ItemId.BAGXL,
        odds: 1,
      },
      {
        item: ItemId.CUTCUT,
        odds: 5,
      },
      {
        item: ItemId.CHEST_XL,
        odds: 2,
      },
      {
        item: ItemId.REPAIR_KIT,
        odds: 7,
      },
      {
        item: ItemId.BED,
        odds: 4,
      },
      {
        item: ItemId.TAGGER,
        odds: 5,
      },
      {
        item: ItemId.WATERGUN_OPT_PART,
        odds: 5,
      },
      {
        item: ItemId.CHAIR_BASIC,
        odds: 4,
      },
      {
        item: ItemId.DETO,
        odds: 5,
      },
      {
        item: ItemId.WIRE,
        odds: 3,
      }
    ]
  },
  [RuinId.NUCLEAR_BUNKER]: {
    id: RuinId.NUCLEAR_BUNKER,
    name: {
      [Lang.EN]: "Nuclear Bunker",
      [Lang.FR]: "Abri anti-atomique",
      [Lang.DE]: "Atombunker",
      [Lang.ES]: "Refugio Anti-atómico"
    },
    description: {
      [Lang.EN]: "The number has been partially worn away, but this was in all likelihood shelter number 14. Judging by the crumbling bodies inside, the airlock system couldn't have worked as expected. Shit happens.",
      [Lang.FR]: "Le numéro est à moitié effacé, mais il s'agissait vraisemblablement de l'<strong>abri 14</strong>. Si on en juge par les corps décrépis à l'intérieur, le système de fermeture du sas <strong>n'a pas dû fonctionner comme prévu</strong>. Ça arrive.",
      [Lang.DE]: "Die Farbe der am Bunkereingang gepinselten Zahl ist fast vollständig abgeblättert, aber es handelt sich wahrscheinlich um den Bunker 14. Im Inneren liegen überall verweste Leichen herum. Scheint so, als ob der Schließmechanismus versagt hätte. Das kommt vor.",
      [Lang.ES]: "El número en la puerta no se distingue bien... Pero se puede notar que se trata del <strong>Refugio 14</strong>. Viendo el estado de los cadáveres en su interior, todo indica que el sistema de cierre del Portal <strong>no funcionó correctamente</strong>. Suele pasar..."
    },
    icon: "bunker",
    campingModifier: 50,
    spawnChance: 499,
    emptyChance: 0.1,
    km: {
      min: 10,
      max: 13
    },
    explorable: false,
    drops: [
      {
        item: ItemId.PLATE_RAW,
        odds: 5,
      },
      {
        item: ItemId.MACHINE_GUN,
        odds: 4,
      },
      {
        item: ItemId.JERRYGUN_PART,
        odds: 5,
      },
      {
        item: ItemId.JERRYCAN,
        odds: 5,
      },
      {
        item: ItemId.CAN,
        odds: 5,
      },
      {
        item: ItemId.CHAINSAW_PART,
        odds: 2,
      },
      {
        item: ItemId.MIXERGUN_PART,
        odds: 5,
      },
      {
        item: ItemId.PHARMA,
        odds: 6,
      },
      {
        item: ItemId.REPAIR_KIT,
        odds: 9,
      },
      {
        item: ItemId.DRUG_HERO,
        odds: 20,
      },
      {
        item: ItemId.CHEST,
        odds: 10,
      },
      {
        item: ItemId.ELECTRO,
        odds: 8,
      },
      {
        item: ItemId.TASER_EMPTY,
        odds: 8,
      },
      {
        item: ItemId.BIG_PGUN_PART,
        odds: 5,
      },
      {
        item: ItemId.CHEST_XL,
        odds: 1,
      },
      {
        item: ItemId.TAGGER,
        odds: 10,
      },
      {
        item: ItemId.RADIUS_MK2_PART,
        odds: 5,
      }
    ]
  },
  [RuinId.MAC_S_ATOMIC_CAFE]: {
    id: RuinId.MAC_S_ATOMIC_CAFE,
    name: {
      [Lang.EN]: "Mac's Atomic Cafe",
      [Lang.FR]: "Atomic’ Café",
      [Lang.DE]: "Atomic Cafe",
      [Lang.ES]: "Atomic Café"
    },
    description: {
      [Lang.EN]: "The Atomic Cafe is (or was) the place to be: A faded poster invites you to come to the summer party on 2 May 2010: Hawaiian Theme, Prize for Best Dressed (Half Naked Girls + Guys) DJ Dave from 1pm, Free BBQ, Improved Look Beer Garden, Party Games, Live Football, Cocktails, £2 Bottled Beer, £2 Alcopop, £1 Tequila... Get Involved!",
      [Lang.FR]: "Le rendez-vous branché du désert : venez goûter notre Nuka-Cola, spécialité de la maison, aux vrais extraits d'hormones animales.",
      [Lang.DE]: "Das Atomic Cafe ist (oder war) der Ort, an dem man sein sollte: Ein verblichenes Plakat lädt Sie zum Sommerfest am 2. Mai 2010 ein: Hawaiianisches Thema, Preis für den bestangezogenen (halbnackten Mädchen + Jungs) DJ Dave ab 13.00 Uhr, kostenloses BBQ, Biergarten mit verbessertem Look, Partyspiele, Live-Fußball, Cocktails, £2 Flaschenbier, £2 Alcopop, £1 Tequila... Beteiligen Sie sich!",
      [Lang.ES]: "El lugar de moda en el desierto, famoso por la Toro-Cola, la especialidad de la casa preparada con hormonas animales."
    },
    icon: "cafe",
    campingModifier: 10,
    spawnChance: 320,
    emptyChance: 0.1,
    km: {
      min: 6,
      max: 9
    },
    explorable: false,
    drops: [
      {
        item: ItemId.COFFEE,
        odds: 20,
      },
      {
        item: ItemId.DRUG,
        odds: 5,
      },
      {
        item: ItemId.PHARMA,
        odds: 5,
      },
      {
        item: ItemId.FOOD_CHICK,
        odds: 20,
      },
      {
        item: ItemId.RHUM,
        odds: 10,
      },
      {
        item: ItemId.VODKA,
        odds: 10,
      },
      {
        item: ItemId.PET_RAT,
        odds: 10,
      },
      {
        item: ItemId.COFFEE_MACHINE_PART,
        odds: 1,
      },
      {
        item: ItemId.CDELVI,
        odds: 1,
      },
      {
        item: ItemId.QUANTUM,
        odds: 0,
      }
    ]
  },
  [RuinId.MOTORWAY_SERVICES]: {
    id: RuinId.MOTORWAY_SERVICES,
    name: {
      [Lang.EN]: "Motorway Services",
      [Lang.FR]: "Relais autoroutier",
      [Lang.DE]: "Autobahnraststätte",
      [Lang.ES]: "Restaurante de autopista"
    },
    description: {
      [Lang.EN]: "At one time, this would certainly have been one of the most trendy joints on the M25, with watered-down drinks, the aroma of stale piss and dead rats on the bar. You must be the first person to set foot in here in years.",
      [Lang.FR]: "À une certaine époque, c'était sûrement le coin le plus branché de toute l'autoroute A217, avec ses bières frelatées, son odeur d'urine et ses rats morts sur le comptoir. Personne avant vous ne semble s'y être arrêté depuis des lustres.",
      [Lang.DE]: "Früher wäre dies sicherlich einer der trendigsten Joints auf der M25 gewesen, mit verwässerten Getränken, dem Aroma von abgestandener Pisse und toten Ratten auf der Bar. Sie müssen seit Jahren der erste Mensch sein, der hier einen Fuß hinein gesetzt hat.",
      [Lang.ES]: "En una época, fue una parada obligatoria en la A-667. Apreciado por su variedad de carnes, a pesar de su olor a orina y las ratas muertas en los rincones. Es una pena que ya no haya restaurantes así..."
    },
    icon: "autobahn",
    campingModifier: 10,
    spawnChance: 460,
    emptyChance: 0.33,
    km: {
      min: 8,
      max: 11
    },
    explorable: false,
    drops: [
      {
        item: ItemId.FOOD_BAR1,
        odds: 10,
      },
      {
        item: ItemId.FOOD_BAR2,
        odds: 10,
      },
      {
        item: ItemId.FOOD_BAR3,
        odds: 10,
      },
      {
        item: ItemId.FOOD_BISCUIT,
        odds: 10,
      },
      {
        item: ItemId.FOOD_CHICK,
        odds: 10,
      },
      {
        item: ItemId.FOOD_PIMS,
        odds: 10,
      },
      {
        item: ItemId.FOOD_TARTE,
        odds: 10,
      },
      {
        item: ItemId.RHUM,
        odds: 7,
      },
      {
        item: ItemId.COFFEE,
        odds: 1,
      },
      {
        item: ItemId.RADIO_OFF,
        odds: 3,
      },
      {
        item: ItemId.PET_RAT,
        odds: 20,
      },
      {
        item: ItemId.TABLE,
        odds: 1,
      },
      {
        item: ItemId.OILCAN,
        odds: 1,
      }
    ]
  },
  [RuinId.WRECKED_CARS]: {
    id: RuinId.WRECKED_CARS,
    name: {
      [Lang.EN]: "Wrecked Cars",
      [Lang.FR]: "Carcasses de voitures",
      [Lang.DE]: "Autowracks",
      [Lang.ES]: "Carrocerías de autos"
    },
    description: {
      [Lang.EN]: "Looks like an altercation between a small van and a station wagon... This minor accident seems to have caused a substantial pile-up judging by the number of burnt corpses lying around.",
      [Lang.FR]: "Un modèle plutôt commun de <strong>break familial</strong> encastré dans un modèle tout aussi commun de <strong>fourgonnette</strong>... Ce petit accident semble avoir provoqué un <strong>carambolage</strong> de grande envergure si on en juge par l'amas de carcasses calcinées tout autour.",
      [Lang.DE]: "Ein Kombi, der sich in einen Kleintransporter verkeilt hat. Der großen Anzahl an verkohlten Leichen nach zu urteilen, hat hier ein Unfall eine richtig große Karambolage verursacht.",
      [Lang.ES]: "Un modelo común de <strong>automóvil familiar</strong> empotrado en otro modelo común de <strong>furgoneta</strong>... Este choque debió provocar un <strong>accidente</strong> de gran envergadura a juzgar por la cadena de coches semi-destruidos que se encuentran alrededor."
    },
    icon: "cars",
    campingModifier: 10,
    spawnChance: 304,
    emptyChance: 0.1,
    km: {
      min: 3,
      max: 6
    },
    explorable: false,
    drops: [
      {
        item: ItemId.METAL,
        odds: 50,
      },
      {
        item: ItemId.MECA_PARTS,
        odds: 5,
      },
      {
        item: ItemId.REPAIR_ONE,
        odds: 5,
      },
      {
        item: ItemId.VODKA,
        odds: 2,
      },
      {
        item: ItemId.RHUM,
        odds: 2,
      },
      {
        item: ItemId.JERRYCAN,
        odds: 2,
      },
      {
        item: ItemId.PLATE_RAW,
        odds: 10,
      },
      {
        item: ItemId.COURROIE,
        odds: 3,
      },
      {
        item: ItemId.TUBE,
        odds: 8,
      },
      {
        item: ItemId.CHEST,
        odds: 9,
      },
      {
        item: ItemId.ENGINE_PART,
        odds: 1,
      },
      {
        item: ItemId.OILCAN,
        odds: 6,
      }
    ]
  },
  [RuinId.THE__SHATTERED_ILLUSIONS__BAR]: {
    id: RuinId.THE__SHATTERED_ILLUSIONS__BAR,
    name: {
      [Lang.EN]: "The 'Shattered Illusions' Bar",
      [Lang.FR]: "Le bar des illusions perdues",
      [Lang.DE]: "Bar der verlorenen Hoffnungen",
      [Lang.ES]: "El bar de las ilusiones perdidas"
    },
    description: {
      [Lang.EN]: "This bar is hidden behind a small hill in such a location that you could easily have walked straight past it without realising. The interior is decorated with countless black and white portraits and photos. There is often a guy in the pictures wearing some striped pyjama-type outfit standing next to various other people.",
      [Lang.FR]: "Ce bar étrange se trouve caché derrière une petite colline et vous auriez tout aussi bien pu passer à côté sans le remarquer. L'intérieur est décoré d'innombrables portraits et photos en noir et blanc. On y retrouve souvent un type habillé dans une sorte de pyjama rayé sur les bords, debout aux côtés de diverses personnes.",
      [Lang.DE]: "Diese Bar ist hinter einem kleinen Hügel an einer solchen Stelle versteckt, dass man leicht direkt daran vorbeigehen könnte, ohne es zu merken. Der Innenraum ist mit unzähligen Schwarzweiß-Portraits und Fotos geschmückt. Auf den Bildern ist oft ein Typ in gestreifter Pyjama-Kleidung zu sehen, der neben verschiedenen anderen Personen steht.",
      [Lang.ES]: "Este extraño bar se encuentra detrás de una colina y nadie se había dado cuenta de su existencia. El interior está decorado con muchísimas fotos en blanco y negro, en todas ellas hay un hombre vestido con un traje a rayas junto a diversas personas."
    },
    icon: "bar2",
    campingModifier: 20,
    spawnChance: 41,
    emptyChance: 0.1,
    km: {
      min: 21,
      max: 28
    },
    explorable: false,
    drops: [
      {
        item: ItemId.RP_SHEETS,
        odds: 5,
      },
      {
        item: ItemId.RP_MANUAL,
        odds: 5,
      },
      {
        item: ItemId.RP_SCROLL,
        odds: 5,
      },
      {
        item: ItemId.RP_BOOK2,
        odds: 5,
      },
      {
        item: ItemId.RP_BOOK,
        odds: 5,
      },
      {
        item: ItemId.CIGS,
        odds: 5,
      },
      {
        item: ItemId.RHUM,
        odds: 10,
      },
      {
        item: ItemId.PET_DOG,
        odds: 10,
      }
    ]
  },
  [RuinId.HOME_DEPOT]: {
    id: RuinId.HOME_DEPOT,
    name: {
      [Lang.EN]: "Home Depot",
      [Lang.FR]: "Bricotout",
      [Lang.DE]: "Baumarkt",
      [Lang.ES]: "La casa del constructor"
    },
    description: {
      [Lang.EN]: "A veritable Mecca for the DIY enthusiast. A paradise full of invaluable treasures for a world like ours... Their advertising slogan is even more appropriate nowadays: Pillage our store before someone else beats you to it!",
      [Lang.FR]: "Le relais des <strong>bricoleurs</strong>. Véritable petit paradis rempli de trésors inestimables pour un monde comme le nôtre... Leur slogan est tout à fait d'actualité : « Pillez-nous avant que d'autres ne s'en chargent pour vous ! »",
      [Lang.DE]: "Der Baumarkt ist das zweite Zuhause eines jeden Handwerkers. In dieser Welt avanciert er jedoch zu einem wahren Paradies! Gegenstände von unschätzbarem Wert warten nur darauf von dir entdeckt zu werden... Der Werbespruch auf dem Dach hat zudem nichts von seiner Aktualität eingebüßt: 'Plündern Sie uns bevor es andere tun!'",
      [Lang.ES]: "Un paraíso para los amantes de las tuercas y destornilladores... Su eslogan sigue siendo vigente: « Más barato, imposible »"
    },
    icon: "obi",
    campingModifier: 10,
    spawnChance: 409,
    emptyChance: 0.1,
    km: {
      min: 5,
      max: 8
    },
    explorable: false,
    drops: [
      {
        item: ItemId.MECA_PARTS,
        odds: 5,
      },
      {
        item: ItemId.PLATE_RAW,
        odds: 15,
      },
      {
        item: ItemId.SAW_TOOL_PART,
        odds: 2,
      },
      {
        item: ItemId.CHEST,
        odds: 20,
      },
      {
        item: ItemId.REPAIR_KIT,
        odds: 40,
      },
      {
        item: ItemId.WRENCH,
        odds: 5,
      },
      {
        item: ItemId.SWISS_KNIFE,
        odds: 15,
      },
      {
        item: ItemId.LOCK,
        odds: 5,
      },
      {
        item: ItemId.CHEST_XL,
        odds: 1,
      },
      {
        item: ItemId.TRESTLE,
        odds: 8,
      },
      {
        item: ItemId.PILE,
        odds: 5,
      },
      {
        item: ItemId.CHEST_TOOLS,
        odds: 20,
      },
      {
        item: ItemId.TUBE,
        odds: 3,
      },
      {
        item: ItemId.POCKET_BELT,
        odds: 1,
      },
      {
        item: ItemId.EXPLO,
        odds: 5,
      },
      {
        item: ItemId.ELECTRO_BOX,
        odds: 10,
      },
      {
        item: ItemId.CONCRETE,
        odds: 15,
      },
      {
        item: ItemId.DIGGER,
        odds: 10,
      },
      {
        item: ItemId.LIGHTS,
        odds: 5,
      },
      {
        item: ItemId.OILCAN,
        odds: 5,
      },
      {
        item: ItemId.WIRE,
        odds: 7,
      }
    ]
  },
  [RuinId.CONSTRUCTION_SITE_SHELTER]: {
    id: RuinId.CONSTRUCTION_SITE_SHELTER,
    name: {
      [Lang.EN]: "Construction Site Shelter",
      [Lang.FR]: "Abri de chantier",
      [Lang.DE]: "Baustellencontainer",
      [Lang.ES]: "Refugio en construcción"
    },
    description: {
      [Lang.EN]: "A huge metal box-like creation stuck in the middle of nowhere. It would usually be found beside a building site, and once upon a time it probably was, but there is no sign of it today. Well, except this 'cabin'...",
      [Lang.FR]: "Un très grand container métallique posé au milieu de nulle part. Il devait se trouver à côté d'un chantier, à une époque, mais il n'en reste rien aujourd'hui. À part cette 'cabane'.",
      [Lang.DE]: "Dieser riesige gelbe Metallcontainer macht einen verlorenen Eindruck. Weit und breit keine Baustelle. Der Gemeinschaftsraum im Inneren ist mit leeren Bierflaschen übersät",
      [Lang.ES]: "Un gran container de metal en medio del desierto. Aquí debió haber gente tabajando, pero hoy no queda nada más que esta \"cabaña\"."
    },
    icon: "container",
    campingModifier: 10,
    spawnChance: 475,
    emptyChance: 0.05,
    km: {
      min: 6,
      max: 9
    },
    explorable: false,
    drops: [
      {
        item: ItemId.CONCRETE,
        odds: 7,
      },
      {
        item: ItemId.METAL_BEAM,
        odds: 10,
      },
      {
        item: ItemId.REPAIR_KIT_PART_RAW,
        odds: 5,
      },
      {
        item: ItemId.JERRYCAN,
        odds: 10,
      },
      {
        item: ItemId.CHAIN,
        odds: 10,
      },
      {
        item: ItemId.HOME_BOX,
        odds: 8,
      },
      {
        item: ItemId.RSC_PACK_2,
        odds: 10,
      },
      {
        item: ItemId.RSC_PACK_3,
        odds: 2,
      },
      {
        item: ItemId.HOME_DEF,
        odds: 7,
      },
      {
        item: ItemId.TRESTLE,
        odds: 10,
      },
      {
        item: ItemId.SAW_TOOL_PART,
        odds: 2,
      },
      {
        item: ItemId.MECA_PARTS,
        odds: 8,
      },
      {
        item: ItemId.DOOR,
        odds: 5,
      },
      {
        item: ItemId.SCREW,
        odds: 8,
      },
      {
        item: ItemId.WRENCH,
        odds: 8,
      },
      {
        item: ItemId.MECANISM,
        odds: 8,
      },
      {
        item: ItemId.OILCAN,
        odds: 2,
      }
    ]
  },
  [RuinId.FRASER_D_S_KEBAB_ISH]: {
    id: RuinId.FRASER_D_S_KEBAB_ISH,
    name: {
      [Lang.EN]: "Fraser D's Kebab-ish",
      [Lang.FR]: "Kebab « Chez Coluche »",
      [Lang.DE]: "Dönerbude Utsel-Brutzel",
      [Lang.ES]: "Sándwiches «San Guchito»"
    },
    description: {
      [Lang.EN]: "If you're a bit peckish, esurient or just plain hungry, whatever you do, don't stop here! Here it's the chef that wants to eat... you... after he cuts off your head with a circular saw.",
      [Lang.FR]: "Si vous avez un petit creux, ne vous arrêtez surtout pas ici ! Ou c'est le cuistot lui même qui viendra vous dévorer, après vous avoir découpé à la scie circulaire.",
      [Lang.DE]: "Von wegen Döner macht schöner. Scheint so als hätte der Besitzer dieser Bude das mit den Dönern und den Spießen missverstanden. Wer hier reingeht kommt garantiert nicht mehr raus.",
      [Lang.ES]: "¿Tienes ganas de comer algo rico? ¡Ni se te ocurra venir aquí! o será el propio cocinero quien saldrá a devorarte!"
    },
    icon: "doner",
    campingModifier: 10,
    spawnChance: 181,
    emptyChance: 0.1,
    km: {
      min: 3,
      max: 6
    },
    explorable: false,
    drops: [
      {
        item: ItemId.MEAT,
        odds: 100,
      },
      {
        item: ItemId.VEGETABLE,
        odds: 80,
      },
      {
        item: ItemId.PET_RAT,
        odds: 20,
      },
      {
        item: ItemId.KNIFE,
        odds: 40,
      },
      {
        item: ItemId.JERRYCAN,
        odds: 40,
      },
      {
        item: ItemId.VODKA,
        odds: 5,
      },
      {
        item: ItemId.CHAINSAW_PART,
        odds: 2,
      },
      {
        item: ItemId.MIXERGUN_PART,
        odds: 4,
      },
      {
        item: ItemId.PET_PIG,
        odds: 1,
      },
      {
        item: ItemId.CYANURE,
        odds: 1,
      },
      {
        item: ItemId.COFFEE_MACHINE_PART,
        odds: 1,
      },
      {
        item: ItemId.CHEST_FOOD,
        odds: 10,
      }
    ]
  },
  [RuinId.DUKE_S_VILLA]: {
    id: RuinId.DUKE_S_VILLA,
    name: {
      [Lang.EN]: "Duke's Villa",
      [Lang.FR]: "Villa de Duke",
      [Lang.DE]: "Dukes Villa",
      [Lang.ES]: "Mansión de Duke"
    },
    description: {
      [Lang.EN]: "The home of a certain Duke R. Cooke, and if one is to believe the plaque on the door... a home for Heroes... this place is much bigger than a villa, it's a fully equipped fortress!",
      [Lang.FR]: "La maison d'un certain « Duke » si on en croit la plaque d'entrée calcinée, ancien « Héros Pour Toujours » ... Plus qu'une villa, l'endroit semble être une vaste <strong>forteresse aménagée</strong>.",
      [Lang.DE]: "Das Heim eines gewissen Duke R. Cooke, und wenn man der Gedenktafel an der Tür glauben darf... ein Heim für Helden... dieser Ort ist viel größer als eine Villa, es ist eine voll ausgestattete Festung !",
      [Lang.ES]: "El hogar de un tal Duke R. Cooke, y si puedes creer en la placa en la puerta... un hogar para héroes... ¡Este lugar es mucho más grande que una mansión, es una fortaleza completamente equipada!"
    },
    icon: "duke",
    campingModifier: 10,
    spawnChance: 148,
    emptyChance: 0.1,
    km: {
      min: 12,
      max: 15
    },
    explorable: false,
    drops: [
      {
        item: ItemId.VIBR_EMPTY,
        odds: 10,
      },
      {
        item: ItemId.DRUG_HERO,
        odds: 20,
      },
      {
        item: ItemId.VODKA,
        odds: 10,
      },
      {
        item: ItemId.RHUM,
        odds: 10,
      },
      {
        item: ItemId.SPORT_ELEC_EMPTY,
        odds: 7,
      },
      {
        item: ItemId.BIG_PGUN_PART,
        odds: 5,
      },
      {
        item: ItemId.RADIUS_MK2_PART,
        odds: 5,
      },
      {
        item: ItemId.PILE,
        odds: 10,
      },
      {
        item: ItemId.CHEST_XL,
        odds: 1,
      },
      {
        item: ItemId.BGRENADE_EMPTY,
        odds: 8,
      },
      {
        item: ItemId.LPOINT1,
        odds: 1,
      },
      {
        item: ItemId.BIKE_PART,
        odds: 0,
      }
    ]
  },
  [RuinId.DARK_WOODS]: {
    id: RuinId.DARK_WOODS,
    name: {
      [Lang.EN]: "Dark Woods",
      [Lang.FR]: "Petit bois obscur",
      [Lang.DE]: "Dunkler Hain",
      [Lang.ES]: "Bosque oscuro"
    },
    description: {
      [Lang.EN]: "The burnt remains of a small forest. It was probably a nice area beforehand... Now you're just hoping you won't have to spend the night here.",
      [Lang.FR]: "Les restes <strong>calcinés</strong> d'une forêt. C'était probablement un endroit agréable avant... Aujourd'hui, on prie juste pour ne jamais s'y perdre la nuit.",
      [Lang.DE]: "Die verbrannten Überreste eines kleinen Waldes. Es war wahrscheinlich vorher eine schöne Gegend... Jetzt hoffen Sie nur noch, dass Sie hier nicht übernachten müssen.",
      [Lang.ES]: "Los restos <strong>carbonizados</strong> de un bosque. Antes debió ser un lugar agradable... Hoy, sería una pesadilla perderse en él."
    },
    icon: "woods",
    campingModifier: 10,
    spawnChance: 70,
    emptyChance: 0,
    km: {
      min: 2,
      max: 5
    },
    explorable: false,
    drops: [
      {
        item: ItemId.WOOD_BAD,
        odds: 100,
      },
      {
        item: ItemId.HMEAT,
        odds: 10,
      },
      {
        item: ItemId.VEGETABLE,
        odds: 10,
      },
      {
        item: ItemId.PET_RAT,
        odds: 5,
      },
      {
        item: ItemId.SAW_TOOL_PART,
        odds: 1,
      },
      {
        item: ItemId.PET_CHICK,
        odds: 5,
      },
      {
        item: ItemId.GRENADE_EMPTY,
        odds: 5,
      },
      {
        item: ItemId.PLATE_RAW,
        odds: 5,
      },
      {
        item: ItemId.RYEBAG,
        odds: 6,
      },
      {
        item: ItemId.PET_SNAKE2,
        odds: 4,
      }
    ]
  },
  [RuinId.COLLAPSED_MINESHAFT]: {
    id: RuinId.COLLAPSED_MINESHAFT,
    name: {
      [Lang.EN]: "Collapsed Mineshaft",
      [Lang.FR]: "Mine effondrée",
      [Lang.DE]: "Eingestürzte Mine",
      [Lang.ES]: "Mina colapsada"
    },
    description: {
      [Lang.EN]: "An old mine which has not resisted the ravages of time well. God knows what caprice could have led people to look so deep underground to find something useful. Especially when you only just have to scratch the surface to find some delicious cockroaches to crunch on! You start to feel hungry just thinking about it...",
      [Lang.FR]: "Une ancienne mine qui n'a pas résisté aux outrages du temps. Dieu sait quel genre de lubie pouvait pousser les gens de l'époque à creuser si profond pour trouver quelque chose d'utile. Surtout quand il suffit d'à peine gratter le sol pour dégoter un délicieux cafard à manger. « Tiens, j'ai faim », pensez-vous.",
      [Lang.DE]: "Diese alte Mine hat es nicht vermocht den Wetterwidrigkeiten Stand zu halten. Nur Gott weiß, was die Menschen damals angetrieben hat, so tief zu graben, um der Erde nützliche Rohstoffe zu entreißen. Dabei reicht es mit den Füßen leicht am Boden zu kratzen und schon kommt eine leckere Kakerlake vorbeigehuscht. Du denkst dir: 'Lecker, die esse ich doch mal gleich'",
      [Lang.ES]: "Una antigua mina destruida seguramente por la avaricia de sus trabajadores. ¿Pero qué interés tendrían de excavar tan profundo? Sobre todo cuando escarbando en el suelo se encuentran deliciosas cucarachas. \"Por cierto, ya es hora de la merienda\" te dices..."
    },
    icon: "mine",
    campingModifier: 10,
    spawnChance: 341,
    emptyChance: 0.1,
    km: {
      min: 12,
      max: 15
    },
    explorable: false,
    drops: [
      {
        item: ItemId.POWDER,
        odds: 30,
      },
      {
        item: ItemId.CONCRETE_WALL,
        odds: 2,
      },
      {
        item: ItemId.DETO,
        odds: 5,
      },
      {
        item: ItemId.EXPLO,
        odds: 5,
      },
      {
        item: ItemId.MECANISM,
        odds: 5,
      },
      {
        item: ItemId.HMEAT,
        odds: 1,
      }
    ]
  },
  [RuinId.COLLAPSED_QUARRY]: {
    id: RuinId.COLLAPSED_QUARRY,
    name: {
      [Lang.EN]: "Collapsed Quarry",
      [Lang.FR]: "Carrière effondrée",
      [Lang.DE]: "Eingestürzter Steinbruch",
      [Lang.ES]: "Cantera derrumbada"
    },
    description: {
      [Lang.EN]: "This mineral extraction zone bears all the hallmarks of a terrible accident: the hillside seems to have collapsed onto the workers, machines and buildings below.",
      [Lang.FR]: "Une <strong>zone d'extraction de minéraux</strong> qui porte les stigmates d'un <strong>terrible accident</strong> : tout un flanc semble s'être <strong>effondré</strong> sur les hommes, les machines et les bâtiments.",
      [Lang.DE]: "Diese Mineralienabbauzone trägt alle Merkmale eines schrecklichen Unglücks : der Hang scheint auf die Arbeiter, Maschinen und Gebäude darunter eingestürzt zu sein.",
      [Lang.ES]: "Una <strong>zona de extracción de minerales</strong> que lleva las marcas de un <strong>terrible accidente</strong>: toda una ladera se <strong>derrumbó</strong> sobre la gente, las máquinas y los edificios."
    },
    icon: "quarry",
    campingModifier: 10,
    spawnChance: 71,
    emptyChance: 0.3,
    km: {
      min: 3,
      max: 6
    },
    explorable: false,
    drops: [
      {
        item: ItemId.CONCRETE,
        odds: 35,
      },
      {
        item: ItemId.METAL_BEAM,
        odds: 10,
      },
      {
        item: ItemId.PLATE_RAW,
        odds: 10,
      },
      {
        item: ItemId.CHEST_TOOLS,
        odds: 15,
      },
      {
        item: ItemId.CHEST,
        odds: 5,
      },
      {
        item: ItemId.HMEAT,
        odds: 2,
      },
      {
        item: ItemId.LOCK,
        odds: 4,
      },
      {
        item: ItemId.CHEST_XL,
        odds: 1,
      }
    ]
  },
  [RuinId.STRANGE_CIRCULAR_DEVICE]: {
    id: RuinId.STRANGE_CIRCULAR_DEVICE,
    name: {
      [Lang.EN]: "Strange Circular Device",
      [Lang.FR]: "Un étrange appareil circulaire",
      [Lang.DE]: "Ein seltsames kreisförmiges Gerät",
      [Lang.ES]: "Un extraño aparato circular"
    },
    description: {
      [Lang.EN]: "It looks like a large metal disk with what appears to be some kind of cockpit mounted on top. It could also be some type of high-tech combine harvester.",
      [Lang.FR]: "Ça ressemble à un large disque métallique surmonté de ce qui devait être un poste de pilotage. Cela pourrait tout aussi bien être un genre de moissonneuse batteuse un peu high-tech.",
      [Lang.DE]: "Das Ganze sieht wie eine komische runde Metallscheibe aus, die mal zu einen Flugzeugcockpit gehörte. Aber du bist dir nicht ganz sicher, denn es könnte sich auch um ein Mähdrescherteil handeln...",
      [Lang.ES]: "Parece un enorme disco metálico de lo que pudo haber sido una trilladora acgrícola..."
    },
    icon: "ufo",
    campingModifier: 10,
    spawnChance: 15,
    emptyChance: 0.1,
    km: {
      min: 21,
      max: 28
    },
    explorable: false,
    drops: [
      {
        item: ItemId.METAL_BAD,
        odds: 40,
      },
      {
        item: ItemId.PLATE_RAW,
        odds: 10,
      },
      {
        item: ItemId.IPHONE,
        odds: 5,
      },
      {
        item: ItemId.CHEST_XL,
        odds: 1,
      },
      {
        item: ItemId.BAGXL,
        odds: 1,
      }
    ]
  },
  [RuinId.PI_KEYA_FURNITURE]: {
    id: RuinId.PI_KEYA_FURNITURE,
    name: {
      [Lang.EN]: "PI-KEYA Furniture",
      [Lang.FR]: "Meubles Kiela",
      [Lang.DE]: "E-KEA",
      [Lang.ES]: "Muebles Kiela"
    },
    description: {
      [Lang.EN]: "PI-KEYA: These enormous stores used to be in every city (always rather annoyingly situated on the outskirts). They specialised in the manufacture and sale of cheap furniture, usually with one bolt / screw / fastener missing. It is said that the poor quality of their products was one of the reasons for society going to ruin...",
      [Lang.FR]: "La chaîne de magasins Kiela était autrefois spécialisée dans la fabrication et la vente de meubles bons marchés. On dit que la piètre qualité de leurs produits serait l'une des raisons qui a poussé le monde à sa perte...",
      [Lang.DE]: "E-KEA: Diese riesigen Geschäfte gab es früher in jeder Stadt (immer ziemlich ärgerlich am Stadtrand gelegen). Sie spezialisierten sich auf die Herstellung und den Verkauf von Billigmöbeln, denen meist ein Bolzen / Schraube / Verbindungselement fehlte. Es wird gesagt, dass die schlechte Qualität ihrer Produkte einer der Gründe für den Niedergang der Gesellschaft war...",
      [Lang.ES]: "Estas enormes tiendas solían estar en todos los pueblos (siempre a las afueras, en el peor lugar posible). Se especializaron en la fabricación y venta de muebles baratos, que en su mayoría carecían de tornillos. Se dice que la mala calidad de sus productos fue una de las razones del declive de la sociedad..."
    },
    icon: "ekea",
    campingModifier: 10,
    spawnChance: 242,
    emptyChance: 0.1,
    km: {
      min: 4,
      max: 7
    },
    explorable: false,
    drops: [
      {
        item: ItemId.WOOD_PLATE_PART,
        odds: 20,
      },
      {
        item: ItemId.DECO_BOX,
        odds: 40,
      },
      {
        item: ItemId.TRESTLE,
        odds: 10,
      },
      {
        item: ItemId.SAW_TOOL_PART,
        odds: 1,
      },
      {
        item: ItemId.TABLE,
        odds: 10,
      },
      {
        item: ItemId.CHAIR_BASIC,
        odds: 10,
      },
      {
        item: ItemId.MECA_PARTS,
        odds: 5,
      },
      {
        item: ItemId.DOOR,
        odds: 5,
      },
      {
        item: ItemId.CUTTER,
        odds: 10,
      },
      {
        item: ItemId.SCREW,
        odds: 10,
      },
      {
        item: ItemId.BED,
        odds: 10,
      },
      {
        item: ItemId.WOOD2,
        odds: 5,
      }
    ]
  },
  [RuinId.FAMILY_TOMB]: {
    id: RuinId.FAMILY_TOMB,
    name: {
      [Lang.EN]: "Family Tomb",
      [Lang.FR]: "Caveau familial",
      [Lang.DE]: "Familiengrab",
      [Lang.ES]: "Cripta familiar"
    },
    description: {
      [Lang.EN]: "A dilapidated family crypt. You can only just make out the entrance, as it's almost completely obscured by decaying vegetation. Apparently the bodies got up and left some time ago...",
      [Lang.FR]: "Un <strong>caveau familial</strong> décrépi. C'est à peine si on distingue encore l'entrée, presque entièrement dissimulée sous la <strong>végétation pourrissante</strong>. Les <strong>cadavres</strong>, quant à eux, se sont levés et sont sortis depuis bien longtemps...",
      [Lang.DE]: "Eine verfallene Familiengruft. Man kann den Eingang gerade noch erkennen, da er fast vollständig von verrottender Vegetation verdeckt ist. Anscheinend sind die Leichen vor einiger Zeit aufgestanden und gegangen...",
      [Lang.ES]: "Una <strong>cripta familiar</strong> decadente. Apenas se distingue la entrada detrás de la <strong>vegetación descompuesta</strong>. Los <strong>cadáveres</strong> salieron temprano..."
    },
    icon: "tomb",
    campingModifier: -15,
    spawnChance: 68,
    emptyChance: 0.1,
    km: {
      min: 3,
      max: 6
    },
    explorable: false,
    drops: [
      {
        item: ItemId.HMEAT,
        odds: 40,
      },
      {
        item: ItemId.PET_RAT,
        odds: 5,
      },
      {
        item: ItemId.MACHINE_GUN,
        odds: 10,
      },
      {
        item: ItemId.GUN,
        odds: 25,
      },
      {
        item: ItemId.DIGGER,
        odds: 3,
      }
    ]
  },
  [RuinId.FAST_FOOD_RESTAURANT]: {
    id: RuinId.FAST_FOOD_RESTAURANT,
    name: {
      [Lang.EN]: "Fast Food Restaurant",
      [Lang.FR]: "Fast-food",
      [Lang.DE]: "Fast Food Restaurant",
      [Lang.ES]: "Restaurante «Burger Twin»"
    },
    description: {
      [Lang.EN]: "There is a horrendous stench of decaying bodies coming from this building: The stocks of meat have transformed into disgusting mounds of mouldy white flesh which are leaking a thick pungent liquid which now covers the floor and has even started to run out the door...",
      [Lang.FR]: "Une odeur atroce de cadavre faisandé émane de ce bâtiment : les réserves de viande se sont transformées en répugnants <strong>monticules de moisissure blanche</strong> qui ont commencé à \"s'écouler\" par les portes...",
      [Lang.DE]: "Aus diesem Gebäude strömt ein entsetzlicher Gestank von verwesenden Leichen : Die Fleischvorräte haben sich in ekelerregende Hügel aus schimmeligem, weißem Fleisch verwandelt, aus denen eine dicke, scharfe Flüssigkeit austritt, die nun den Boden bedeckt und sogar begonnen hat, aus der Tür zu laufen...",
      [Lang.ES]: "Un olor atroz a cadáver sale de este edificio. La carne guardada se ha transformado en <strong>montículos de podredumbre blanca</strong> que comenzó a gelatinizarse..."
    },
    icon: "mczombie",
    campingModifier: 10,
    spawnChance: 710,
    emptyChance: 0.1,
    km: {
      min: 6,
      max: 9
    },
    explorable: false,
    drops: [
      {
        item: ItemId.CAN,
        odds: 10,
      },
      {
        item: ItemId.VEGETABLE,
        odds: 10,
      },
      {
        item: ItemId.FOOD_BAG,
        odds: 10,
      },
      {
        item: ItemId.HMEAT,
        odds: 10,
      },
      {
        item: ItemId.PHARMA,
        odds: 10,
      },
      {
        item: ItemId.MEAT,
        odds: 40,
      },
      {
        item: ItemId.COFFEE,
        odds: 70,
      },
      {
        item: ItemId.COFFEE_MACHINE_PART,
        odds: 1,
      },
      {
        item: ItemId.DIGGER,
        odds: 4,
      },
      {
        item: ItemId.CHEST_FOOD,
        odds: 5,
      }
    ]
  },
  [RuinId.PLANE_CRASH_SITE]: {
    id: RuinId.PLANE_CRASH_SITE,
    name: {
      [Lang.EN]: "Plane Crash Site",
      [Lang.FR]: "Carlingue d’avion",
      [Lang.DE]: "Flugzeugwrack",
      [Lang.ES]: "Fuselaje de avión"
    },
    description: {
      [Lang.EN]: "This long-haul aircraft has crashed in the middle of nowhere... It's difficult to know what it was carrying, the desert sand has almost entirely eroded the fuselage. The presence of some seats suggests there were at least some passengers on board. There is no trace of the bodies though...",
      [Lang.FR]: "Un <strong>long courrier</strong> s'est écrasé au milieu de nulle part... Difficile de savoir ce qu'il transportait, le sable du désert l'a presque totalement rongé. La présence de quelques sièges suggère toutefois qu'il avait à son bord des passagers, entre autres. Aucune trace des corps...",
      [Lang.DE]: "Dieser Langstreckenflieger ist mitten im nirgendwo abgestürzt... Da der Wüstensand das Wrack fast vollkommen eingegraben hat und sich der Zahn der Zeit in das Material gefressen hat, lässt sich nicht mehr sagen, was das Flugzeug transportierte. Du lässt deinen Blick schweifen, es sind jedoch weit und breit keine Leichen erkennbar...",
      [Lang.ES]: "Este avión comercial se estrelló en medio del desierto... Es difícil saber lo que transportaba, la arena ha cubierto casi todo. La presencia de asientos hace pensar que habían pasajeros, pero no hay rastro de cuerpos..."
    },
    icon: "plane",
    campingModifier: 10,
    spawnChance: 155,
    emptyChance: 0.1,
    km: {
      min: 4,
      max: 7
    },
    explorable: false,
    drops: [
      {
        item: ItemId.ELECTRO_BOX,
        odds: 10,
      },
      {
        item: ItemId.MECA_PARTS,
        odds: 10,
      },
      {
        item: ItemId.METAL_BEAM,
        odds: 30,
      },
      {
        item: ItemId.METAL,
        odds: 10,
      },
      {
        item: ItemId.PLATE_RAW,
        odds: 30,
      },
      {
        item: ItemId.SCREW,
        odds: 10,
      },
      {
        item: ItemId.TUBE,
        odds: 20,
      },
      {
        item: ItemId.COURROIE,
        odds: 10,
      },
      {
        item: ItemId.VIBR_EMPTY,
        odds: 4,
      },
      {
        item: ItemId.TAGGER,
        odds: 8,
      },
      {
        item: ItemId.RADIUS_MK2_PART,
        odds: 3,
      },
      {
        item: ItemId.REPAIR_ONE,
        odds: 10,
      },
      {
        item: ItemId.REPAIR_KIT_PART_RAW,
        odds: 4,
      },
      {
        item: ItemId.CHEST_TOOLS,
        odds: 20,
      },
      {
        item: ItemId.CHEST,
        odds: 15,
      },
      {
        item: ItemId.ENGINE_PART,
        odds: 2,
      },
      {
        item: ItemId.PET_SNAKE,
        odds: 2,
      },
      {
        item: ItemId.WIRE,
        odds: 5,
      },
      {
        item: ItemId.CHUDOL,
        odds: 2,
      },
      {
        item: ItemId.CATBOX,
        odds: 1,
      },
      {
        item: ItemId.SOCCER,
        odds: 0,
      },
      {
        item: ItemId.SHOE,
        odds: 0,
      }
    ]
  },
  [RuinId.GARDEN_SHED]: {
    id: RuinId.GARDEN_SHED,
    name: {
      [Lang.EN]: "Garden Shed",
      [Lang.FR]: "Cabane de jardin",
      [Lang.DE]: "Gartenhaus",
      [Lang.ES]: "Cabaña de jardín"
    },
    description: {
      [Lang.EN]: "In the middle of a completely derelict square, you find a sizeable garden shed. The door gives way easily, revealing a vast space full of shelf units and all kinds of tools.",
      [Lang.FR]: "Au milieu d'un petit square totalement décrépi, vous trouvez un vaste abri de jardin. La porte cède facilement, révélant une vaste pièce remplie d'étagères et d'outillages en tous genres.",
      [Lang.DE]: "Mitten auf einem völlig verfallenen Platz befindet sich ein großer Gartenschuppen. Die Tür gibt leicht nach und gibt den Blick frei auf einen riesigen Raum voller Regale und allerlei Werkzeug.",
      [Lang.ES]: "En medio de lo que fue un parque encuentras una pequeña cabaña. La puerta se abre fácilmente, revelando estantes con herramientas de todo tipo."
    },
    icon: "shed",
    campingModifier: 10,
    spawnChance: 624,
    emptyChance: 0.05,
    km: {
      min: 6,
      max: 9
    },
    explorable: false,
    drops: [
      {
        item: ItemId.DIGGER,
        odds: 30,
      },
      {
        item: ItemId.LAWN_PART,
        odds: 5,
      },
      {
        item: ItemId.STAFF2,
        odds: 1,
      },
      {
        item: ItemId.LIGHTS,
        odds: 5,
      },
      {
        item: ItemId.JERRYGUN_PART,
        odds: 2,
      },
      {
        item: ItemId.CHAINSAW_PART,
        odds: 1,
      },
      {
        item: ItemId.CHEST_TOOLS,
        odds: 10,
      },
      {
        item: ItemId.VEGETABLE_TASTY,
        odds: 10,
      },
      {
        item: ItemId.CONCRETE,
        odds: 3,
      },
      {
        item: ItemId.WOOD_LOG,
        odds: 4,
      },
      {
        item: ItemId.ELECTRO_BOX,
        odds: 10,
      },
      {
        item: ItemId.JERRYCAN,
        odds: 10,
      },
      {
        item: ItemId.RSC_PACK_3,
        odds: 3,
      },
      {
        item: ItemId.RYEBAG,
        odds: 4,
      },
      {
        item: ItemId.ANGRYC,
        odds: 2,
      },
      {
        item: ItemId.SOCCER,
        odds: 0,
      }
    ]
  },
  [RuinId.LOOTED_SUPERMARKET]: {
    id: RuinId.LOOTED_SUPERMARKET,
    name: {
      [Lang.EN]: "Looted Supermarket",
      [Lang.FR]: "Supermarché pillé",
      [Lang.DE]: "Geplünderte Mall",
      [Lang.ES]: "Supermercado saqueado"
    },
    description: {
      [Lang.EN]: "This hulking mass of metal and brisk was probably a large shopping centre, swarming with activity and illuminated by a thousand lights. Today nothing swarms except the vermin and other crawling filth... There's no doubt though that it contains lots of goodies...",
      [Lang.FR]: "Ce gigantesque amas de brique et de métal était probablement autrefois un grand centre commercial grouillant d'activité et illuminé de mille feux. Aujourd'hui il n'y grouille que de la vermine et autres immondices rampants… Nul doute toutefois qu'il recèle aussi bon nombre de richesses.",
      [Lang.DE]: "Dieser riesige Haufen aus Schutt und Metall war früher mal ein hell erleuchtetes Einkaufszentrum, das vor Menschen nur so wimmelte. Das Einzige, was hier noch herumwimmelt, sind Würmer und anderes Gekreuch und Gefleuch... Du bist jedoch zuversichtlich, hier allerhand nützliche Gegenstände zu finden.",
      [Lang.ES]: "Este gran terreno de escombros fue seguramente un enorme centro comercial, de esos que tenían gente circulando como hormigas. Hoy no queda más que eso: insectos y otros bichos... Debe contener más de un tesoro."
    },
    icon: "supermarket",
    campingModifier: 0,
    spawnChance: 466,
    emptyChance: 0.1,
    km: {
      min: 4,
      max: 7
    },
    explorable: false,
    drops: [
      {
        item: ItemId.RUSTINE,
        odds: 10,
      },
      {
        item: ItemId.ELECTRO_BOX,
        odds: 5,
      },
      {
        item: ItemId.SAW_TOOL_PART,
        odds: 1,
      },
      {
        item: ItemId.MECA_PARTS,
        odds: 6,
      },
      {
        item: ItemId.MEAT,
        odds: 20,
      },
      {
        item: ItemId.DRUG_HERO,
        odds: 5,
      },
      {
        item: ItemId.GRENADE_EMPTY,
        odds: 20,
      },
      {
        item: ItemId.CART_PART,
        odds: 20,
      },
      {
        item: ItemId.WATER,
        odds: 5,
      },
      {
        item: ItemId.PILE,
        odds: 8,
      },
      {
        item: ItemId.JERRYCAN,
        odds: 5,
      },
      {
        item: ItemId.REPAIR_KIT,
        odds: 8,
      },
      {
        item: ItemId.VODKA,
        odds: 4,
      },
      {
        item: ItemId.RHUM,
        odds: 4,
      },
      {
        item: ItemId.JERRYGUN_PART,
        odds: 4,
      },
      {
        item: ItemId.BED,
        odds: 2,
      },
      {
        item: ItemId.CAN_OPENER,
        odds: 5,
      },
      {
        item: ItemId.DRUG_RANDOM,
        odds: 2,
      },
      {
        item: ItemId.CHAINSAW_PART,
        odds: 2,
      },
      {
        item: ItemId.MIXERGUN_PART,
        odds: 3,
      },
      {
        item: ItemId.DIGGER,
        odds: 4,
      },
      {
        item: ItemId.MONEY,
        odds: 7,
      },
      {
        item: ItemId.CHAMA,
        odds: 5,
      },
      {
        item: ItemId.QUANTUM,
        odds: 0,
      }
    ]
  },
  [RuinId.CAVE]: {
    id: RuinId.CAVE,
    name: {
      [Lang.EN]: "Cave",
      [Lang.FR]: "Caverne",
      [Lang.DE]: "Höhle",
      [Lang.ES]: "Caverna"
    },
    description: {
      [Lang.EN]: "Some kind of stone cavern which must previously have served as a burial place or shelter... Go and take a look. Inside, it is absolutely pitch black, the air is icy and there is a strong smell of rotting flesh...",
      [Lang.FR]: "Une sorte de <strong>tumulus</strong> qui devait autrefois servir de sépulture ou d'abri... Allez savoir. L'intérieur est plongé dans <strong>le noir le plus total</strong>, l'air y est <strong>glacial</strong> et une odeur insupportable de <strong>charogne</strong> en émane...",
      [Lang.DE]: "Eine Art Steinhöhle, die früher als Grabstätte oder Unterschlupf gedient haben muss... Schauen Sie sich das an. Im Inneren ist es absolut stockfinster, die Luft ist eisig und es riecht stark nach verfaulendem Fleisch...",
      [Lang.ES]: "Una especie de <strong>gruta</strong> que debió servir como sepulcro o refugio... Su interior presenta una <strong>oscuridad total</strong>, el aire es <strong>glacial</strong> y huele a <strong>carroña</strong>."
    },
    icon: "cave2",
    campingModifier: 10,
    spawnChance: 73,
    emptyChance: 0.1,
    km: {
      min: 3,
      max: 6
    },
    explorable: false,
    drops: [
      {
        item: ItemId.HMEAT,
        odds: 20,
      },
      {
        item: ItemId.CHEST_CITIZEN,
        odds: 15,
      },
      {
        item: ItemId.CHEST_TOOLS,
        odds: 15,
      },
      {
        item: ItemId.CHEST,
        odds: 15,
      },
      {
        item: ItemId.PET_RAT,
        odds: 5,
      },
      {
        item: ItemId.PET_SNAKE,
        odds: 5,
      },
      {
        item: ItemId.TAGGER,
        odds: 5,
      }
    ]
  },
  [RuinId.INDIAN_BURIAL_GROUND]: {
    id: RuinId.INDIAN_BURIAL_GROUND,
    name: {
      [Lang.EN]: "Indian Burial Ground",
      [Lang.FR]: "Cimetière indien",
      [Lang.DE]: "Indianerfriedhof",
      [Lang.ES]: "Cementerio indio"
    },
    description: {
      [Lang.EN]: "An ancient Indian burial ground which is almost entirely covered in sand and decaying vegetation. In comparison with the rest of the world, you feel strangely at ease here...",
      [Lang.FR]: "Un ancien cimetière presque entièrement recouvert de sable et de végétation pourrissante. C'est finalement un endroit plutôt rassurant en comparaison du reste du monde...",
      [Lang.DE]: "Ein altes indianisches Gräberfeld, das fast vollständig mit Sand und verrottender Vegetation bedeckt ist. Im Vergleich zum Rest der Welt fühlt man sich hier seltsam wohl...",
      [Lang.ES]: "Un antiguo cementerio cubierto de arena y mala hierba. Es un lugar reconfortante, comparándolo con el pueblo..."
    },
    icon: "cemetary",
    campingModifier: -50,
    spawnChance: 181,
    emptyChance: 0.2,
    km: {
      min: 3,
      max: 6
    },
    explorable: false,
    drops: [
      {
        item: ItemId.BONE,
        odds: 100,
      },
      {
        item: ItemId.HMEAT,
        odds: 10,
      },
      {
        item: ItemId.BONE_MEAT,
        odds: 10,
      },
      {
        item: ItemId.BAG,
        odds: 4,
      },
      {
        item: ItemId.CHEST_XL,
        odds: 2,
      },
      {
        item: ItemId.PET_RAT,
        odds: 5,
      }
    ]
  },
  [RuinId.FAIRGROUND_STALL]: {
    id: RuinId.FAIRGROUND_STALL,
    name: {
      [Lang.EN]: "Fairground Stall",
      [Lang.FR]: "Stand de fête foraine",
      [Lang.DE]: "Jahrmarktstand",
      [Lang.ES]: "Stand de feria de atracciones"
    },
    description: {
      [Lang.EN]: "Places like this are a godsend these days... You are guaranteed all the plastic toys you could want here... and maybe some other useful gadgets.",
      [Lang.FR]: "Un endroit comme celui-ci est une aubaine de nos jours… Nul doute que vous trouverez ici de quoi vous équiper décemment en jouets en plastique et autres gadgets utiles.",
      [Lang.DE]: "Orte wie dieser sind heutzutage ein Geschenk des Himmels... Hier gibt es garantiert alles an Plastikspielzeug, was man sich wünschen kann... und vielleicht noch ein paar andere nützliche Gadgets.",
      [Lang.ES]: "Este lugar es una bendición... Aquí podrás encontrar lo necesario para equiparte con juguetes de plástico y otras cosas indispensables."
    },
    icon: "fair",
    campingModifier: 10,
    spawnChance: 215,
    emptyChance: 0.1,
    km: {
      min: 5,
      max: 8
    },
    explorable: false,
    drops: [
      {
        item: ItemId.GRENADE_EMPTY,
        odds: 30,
      },
      {
        item: ItemId.WATERGUN_EMPTY,
        odds: 10,
      },
      {
        item: ItemId.PILE,
        odds: 7,
      },
      {
        item: ItemId.VIBR_EMPTY,
        odds: 5,
      },
      {
        item: ItemId.PILEGUN_EMPTY,
        odds: 5,
      },
      {
        item: ItemId.BIG_PGUN_PART,
        odds: 5,
      },
      {
        item: ItemId.MUSIC_PART,
        odds: 5,
      },
      {
        item: ItemId.GAME_BOX,
        odds: 5,
      },
      {
        item: ItemId.WATERGUN_OPT_PART,
        odds: 5,
      },
      {
        item: ItemId.CHAMA,
        odds: 7,
      },
      {
        item: ItemId.FOOD_CANDIES,
        odds: 5,
      },
      {
        item: ItemId.CHUDOL,
        odds: 2,
      },
      {
        item: ItemId.HURLING_STICK,
        odds: 2,
      },
      {
        item: ItemId.SOCCER,
        odds: 0,
      }
    ]
  },
  [RuinId.SMALL_HOUSE]: {
    id: RuinId.SMALL_HOUSE,
    name: {
      [Lang.EN]: "Small House",
      [Lang.FR]: "Petite maison",
      [Lang.DE]: "Kleines Haus",
      [Lang.ES]: "Casita"
    },
    description: {
      [Lang.EN]: "An old shack which has been uninhabited for years. Almost completely buried in sand, but you can still hear some unsettling groaning noises coming from what must be the cellar...",
      [Lang.FR]: "Une vieille bicoque laissée à l'abandon depuis des années. Presque entièrement ensevelie sous le sable. Parfois, vous pouvez entendre des <strong>grattements inquiétants</strong> venant de ce qui doit être la cave...",
      [Lang.DE]: "Eine alte Hütte, die seit Jahren unbewohnt ist. Fast vollständig im Sand begraben, aber man hört immer noch einige beunruhigende Stöhngeräusche aus dem, was der Keller sein muss...",
      [Lang.ES]: "Una vieja casa abandonada que se tambalea con el viento. Está llena de arena. A veces puedes oir <strong>algo que se mueve</strong> en lo que sería el sótano..."
    },
    icon: "house",
    campingModifier: 10,
    spawnChance: 381,
    emptyChance: 0.1,
    km: {
      min: 2,
      max: 5
    },
    explorable: false,
    drops: [
      {
        item: ItemId.FOOD_BAG,
        odds: 10,
      },
      {
        item: ItemId.CHAIR_BASIC,
        odds: 5,
      },
      {
        item: ItemId.ELECTRO_BOX,
        odds: 3,
      },
      {
        item: ItemId.PET_RAT,
        odds: 6,
      },
      {
        item: ItemId.JERRYCAN,
        odds: 6,
      },
      {
        item: ItemId.PHARMA,
        odds: 12,
      },
      {
        item: ItemId.RUSTINE,
        odds: 10,
      },
      {
        item: ItemId.LAMP,
        odds: 2,
      },
      {
        item: ItemId.WATER,
        odds: 10,
      },
      {
        item: ItemId.CHAIR,
        odds: 2,
      },
      {
        item: ItemId.DOOR_CARPET,
        odds: 1,
      },
      {
        item: ItemId.CARPET,
        odds: 5,
      },
      {
        item: ItemId.TABLE,
        odds: 8,
      },
      {
        item: ItemId.VEGETABLE,
        odds: 4,
      },
      {
        item: ItemId.BED,
        odds: 3,
      }
    ]
  },
  [RuinId.WATER_PROCESSING_PLANT]: {
    id: RuinId.WATER_PROCESSING_PLANT,
    name: {
      [Lang.EN]: "Water Processing Plant",
      [Lang.FR]: "Centrale hydraulique",
      [Lang.DE]: "Kleinwasserkraftwerk",
      [Lang.ES]: "Central hidráulica"
    },
    description: {
      [Lang.EN]: "This plant collects groundwater from the surrounding area and transfers it into enormous concrete reservoirs. The filtration system seems to be broken, but you should be able to recover the contaminated water that is stored here...",
      [Lang.FR]: "Cette centrale capte les eaux des nappes phréatiques environnantes et les transvase dans de gigantesques réservoirs en béton. Le <strong>système de filtrage semble en panne</strong>, mais on doit pouvoir récupérer l'eau contaminée stockée ici.",
      [Lang.DE]: "Das Kraftwerk sammelt das benachbarte Grundwasser in einem Stauraum. Die Energie der Bewegung des fließenden Wassers wird auf eine Turbine übertragen, wodurch dieses in Drehbewegung mit hohem Drehmoment versetzt wird. Das Filtersystem scheint kaputt zu sein, aber das schmutzige Wasser kann trotzdem eingesammelt werden.",
      [Lang.ES]: "Esta central extrae el agua de las capas freáticas y la deposita en un reservorio de concreto. El <strong>sistema de filtrado parece no funcionar</strong>, pero se debe poder recuperar el agua contaminada que se encuentra almacenada aquí."
    },
    icon: "water",
    campingModifier: 10,
    spawnChance: 472,
    emptyChance: 0.1,
    km: {
      min: 5,
      max: 8
    },
    explorable: false,
    drops: [
      {
        item: ItemId.JERRYCAN,
        odds: 85,
      },
      {
        item: ItemId.WATER,
        odds: 5,
      },
      {
        item: ItemId.PLATE_RAW,
        odds: 4,
      },
      {
        item: ItemId.JERRYGUN_PART,
        odds: 4,
      },
      {
        item: ItemId.DRUG_WATER,
        odds: 1,
      }
    ]
  },
  [RuinId.COSMETICS_LAB]: {
    id: RuinId.COSMETICS_LAB,
    name: {
      [Lang.EN]: "Cosmetics Lab",
      [Lang.FR]: "Laboratoire cosmétique",
      [Lang.DE]: "Kosmetiklabor",
      [Lang.ES]: "Laboratorio de cosméticos"
    },
    description: {
      [Lang.EN]: "This depressing building once served as an animal testing facility (rabbits doing mid-terms etc...). It smells of camphor, ether and rotting carcasses. And you've not even gone inside yet...",
      [Lang.FR]: "Ce bâtiment lugubre a servi autrefois pour divers tests de produits sur des animaux. Ça sent le camphre, l'ether et la charogne. Et ce n'est que l'entrée...",
      [Lang.DE]: "Dieses bedrückende Gebäude diente einst als Einrichtung für Tierversuche (Kaninchen in Zwischenprüfungen etc...). Es riecht nach Kampfer, Äther und verrottenden Kadavern. Und Sie sind noch nicht einmal hineingegangen...",
      [Lang.ES]: "Este frío edificio sirvió alguna vez para elaborar cosméticos y probarlos en animales. Los cadáveres de las ratas tienen la piel llena de brotes asquerosos. Esperas no haber usado nunca una de esas cremas..."
    },
    icon: "lab",
    campingModifier: 10,
    spawnChance: 180,
    emptyChance: 0.1,
    km: {
      min: 2,
      max: 5
    },
    explorable: false,
    drops: [
      {
        item: ItemId.PHARMA,
        odds: 40,
      },
      {
        item: ItemId.DRUG_HERO,
        odds: 5,
      },
      {
        item: ItemId.DRUG_RANDOM,
        odds: 4,
      },
      {
        item: ItemId.DISINFECT,
        odds: 5,
      },
      {
        item: ItemId.MEAT,
        odds: 20,
      },
      {
        item: ItemId.SPORT_ELEC_EMPTY,
        odds: 8,
      },
      {
        item: ItemId.PET_DOG,
        odds: 3,
      },
      {
        item: ItemId.PET_CHICK,
        odds: 3,
      },
      {
        item: ItemId.PET_SNAKE,
        odds: 5,
      },
      {
        item: ItemId.PET_RAT,
        odds: 20,
      },
      {
        item: ItemId.PET_PIG,
        odds: 10,
      },
      {
        item: ItemId.PET_CAT,
        odds: 5,
      },
      {
        item: ItemId.XANAX,
        odds: 8,
      },
      {
        item: ItemId.ANGRYC,
        odds: 4,
      }
    ]
  },
  [RuinId.AMBULANCE]: {
    id: RuinId.AMBULANCE,
    name: {
      [Lang.EN]: "Ambulance",
      [Lang.FR]: "Ambulance",
      [Lang.DE]: "Krankenwagen",
      [Lang.ES]: "Ambulancia"
    },
    description: {
      [Lang.EN]: "This ambulance has been abandoned in the middle of the road. The wheels are gone, as is the engine... There are no signs of a struggle, and no signs of an accident. There are no bodies either come to that...",
      [Lang.FR]: "Une ambulance arrêtée au milieu de la route. Elle ne comporte plus de roue, ni de moteur... Aucune trace de lutte, ni d'accident. Pourtant vous ne trouvez aucun corps non plus...",
      [Lang.DE]: "Dieser Krankenwagen ist mitten auf der Straße stehen geblieben. Er hat keine Reifen mehr und auch der Motor fehlt... Außerdem finden sich keinerlei Anzeichen für einen Kampf oder Unfall... Höchst seltsam...",
      [Lang.ES]: "Una ambulancia detenida en medio de la vía. Ya no tiene ruedas ni motor... No hay huellas de pelea, ni de accidente. Tampoco encuentras cuerpos..."
    },
    icon: "ambulance",
    campingModifier: 10,
    spawnChance: 183,
    emptyChance: 0.1,
    km: {
      min: 2,
      max: 5
    },
    explorable: false,
    drops: [
      {
        item: ItemId.DRUG_RANDOM,
        odds: 50,
      },
      {
        item: ItemId.BANDAGE,
        odds: 7,
      },
      {
        item: ItemId.PHARMA,
        odds: 30,
      },
      {
        item: ItemId.SAW_TOOL_PART,
        odds: 1,
      },
      {
        item: ItemId.CUTCUT,
        odds: 1,
      },
      {
        item: ItemId.RADIUS_MK2_PART,
        odds: 4,
      },
      {
        item: ItemId.LILBOO,
        odds: 5,
      }
    ]
  },
  [RuinId.WAREHOUSE]: {
    id: RuinId.WAREHOUSE,
    name: {
      [Lang.EN]: "Warehouse",
      [Lang.FR]: "Hangars de stockage",
      [Lang.DE]: "Lagerhalle",
      [Lang.ES]: "Hangares"
    },
    description: {
      [Lang.EN]: "This was the storage unit for a department store which went to the wall some time ago. So this would lead you to think that the thirty corpses hanging in stockroom 2 were the board of directors. Now you just need to work out if it was a mass suicide (the fact that they all have their hands tied together confuses you though...).",
      [Lang.FR]: "Le dépôt d'un grand magasin qui a certainement déposé son bilan il y a bien longtemps. Enfin, c'est ce que laisse supposer la présence d'une trentaine de corps pendus dans le hangar numéro 2. Vous supposez qu'il s'agit du conseil d'administration ; reste à savoir s'il s'agit d'un suicide collectif (le fait qu'ils aient les mains attachées vous laisse perplexe).",
      [Lang.DE]: "Die letzte Inventur hat hier schon vor einiger Zeit stattgefunden... Die 30 Leichen, die in Halle 2 hängen, lassen darauf vermuten, dass mit den Bilanzen etwas nicht stimmte. Dem Umfang ihrer Bäuche nach zu urteilen, handelt es sich wahrscheinlich um den Verwaltungsrat. War es ein kollektiver Selbstmord? Ihr gefesselten Hände sprechen nicht dafür.",
      [Lang.ES]: "El depósito de una gran tienda que quebró hace mucho tiempo. Es lo que hace pensar la cantidad de cuerpos colgados en el hangar número 2. Supones que fue un suicidio colectivo de los miembros del consejo de dirección, pero el hecho de que tengan las manos atadas te deja perplejo."
    },
    icon: "warehouse",
    campingModifier: 10,
    spawnChance: 219,
    emptyChance: 0.1,
    km: {
      min: 15,
      max: 18
    },
    explorable: false,
    drops: [
      {
        item: ItemId.CHEST_TOOLS,
        odds: 15,
      },
      {
        item: ItemId.CHEST_FOOD,
        odds: 15,
      },
      {
        item: ItemId.RSC_PACK_1,
        odds: 15,
      },
      {
        item: ItemId.WOOD_PLATE_PART,
        odds: 5,
      },
      {
        item: ItemId.HOME_BOX,
        odds: 5,
      },
      {
        item: ItemId.RSC_PACK_2,
        odds: 5,
      },
      {
        item: ItemId.RSC_PACK_3,
        odds: 2,
      },
      {
        item: ItemId.BOOK_GEN_BOX,
        odds: 2,
      },
      {
        item: ItemId.FENCE,
        odds: 1,
      }
    ]
  },
  [RuinId.DISUSED_CAR_PARK]: {
    id: RuinId.DISUSED_CAR_PARK,
    name: {
      [Lang.EN]: "Disused Car Park",
      [Lang.FR]: "Parking désaffecté",
      [Lang.DE]: "Leeres Parkhaus",
      [Lang.ES]: "Parqueadero abandonado"
    },
    description: {
      [Lang.EN]: "An almost completely buried underground parking lot. An ideal venue to 'go quietly into the night' as long as nobody hears you...",
      [Lang.FR]: "Un parking souterrain presque entièrement enseveli. Idéal pour <strong>mourir dans le noir</strong>, sans que personne ne vous entende...",
      [Lang.DE]: "Ein unterirdisches Parkhaus, das fast vollständig vom Sand begraben wurde - der ideale Ort, um alleine zu sterben. Niemand wird dich hören...",
      [Lang.ES]: "Un estacionamiento subterráneo cubierto de arena. Ideal para <strong>morir en la oscuridad</strong>, sin que nadie te escuche..."
    },
    icon: "carpark",
    campingModifier: 10,
    spawnChance: 335,
    emptyChance: 0.1,
    km: {
      min: 3,
      max: 6
    },
    explorable: false,
    drops: [
      {
        item: ItemId.METAL_BEAM,
        odds: 40,
      },
      {
        item: ItemId.MECA_PARTS,
        odds: 5,
      },
      {
        item: ItemId.REPAIR_ONE,
        odds: 12,
      },
      {
        item: ItemId.JERRYCAN,
        odds: 2,
      },
      {
        item: ItemId.PLATE_RAW,
        odds: 8,
      },
      {
        item: ItemId.COURROIE,
        odds: 5,
      },
      {
        item: ItemId.TUBE,
        odds: 10,
      },
      {
        item: ItemId.CHEST_TOOLS,
        odds: 6,
      },
      {
        item: ItemId.CHEST,
        odds: 10,
      },
      {
        item: ItemId.ENGINE_PART,
        odds: 2,
      },
      {
        item: ItemId.TRESTLE,
        odds: 8,
      },
      {
        item: ItemId.CONCRETE,
        odds: 7,
      }
    ]
  },
  [RuinId.BROKEN_DOWN_TANK]: {
    id: RuinId.BROKEN_DOWN_TANK,
    name: {
      [Lang.EN]: "Broken-down Tank",
      [Lang.FR]: "Char d’assaut en panne",
      [Lang.DE]: "Liegengebliebener Kampfpanzer",
      [Lang.ES]: "Tanque averiado"
    },
    description: {
      [Lang.EN]: "This military vehicle is like the metaphorical food can. The soldier is inside, playing the role of a sardine, and a hundred zombies outside are playing the hungry citizen. The citizen wins...",
      [Lang.FR]: "Ce char militaire est un peu une métaphore de la <strong>boîte de conserve</strong>, avec le soldat dans le rôle de la sardine et la centaine de zombies dans le rôle du citoyen affamé. C'est le citoyen qui a gagné.",
      [Lang.DE]: "Dieses militärische Vehikel ist wie die metaphorische Konservendose. Der Soldat ist drinnen und spielt die Rolle einer Sardine, und hundert Zombies draußen spielen den hungrigen Bürger. Der Bürger gewinnt...",
      [Lang.ES]: "Metafóricamente sería: <strong>Una lata de sardinas</strong> en manos de una centena de zombies hambrientos. Y de la sardina no quedó nada..."
    },
    icon: "tank",
    campingModifier: 20,
    spawnChance: 83,
    emptyChance: 0.1,
    km: {
      min: 21,
      max: 28
    },
    explorable: false,
    drops: [
      {
        item: ItemId.GUN,
        odds: 5,
      },
      {
        item: ItemId.MACHINE_GUN,
        odds: 1,
      },
      {
        item: ItemId.POWDER,
        odds: 10,
      },
      {
        item: ItemId.MECANISM,
        odds: 10,
      },
      {
        item: ItemId.ELECTRO_BOX,
        odds: 10,
      },
      {
        item: ItemId.CHAIN,
        odds: 10,
      },
      {
        item: ItemId.COFFEE_MACHINE_PART,
        odds: 1,
      },
      {
        item: ItemId.HOME_DEF,
        odds: 10,
      },
      {
        item: ItemId.HOME_BOX_XL,
        odds: 1,
      },
      {
        item: ItemId.REPAIR_KIT_PART_RAW,
        odds: 1,
      },
      {
        item: ItemId.DETO,
        odds: 1,
      },
      {
        item: ItemId.EXPLO,
        odds: 3,
      },
      {
        item: ItemId.TAGGER,
        odds: 5,
      },
      {
        item: ItemId.PILEGUN_UPKIT,
        odds: 1,
      }
    ]
  },
  [RuinId.MOTEL_666_DUSK]: {
    id: RuinId.MOTEL_666_DUSK,
    name: {
      [Lang.EN]: "Motel 666 Dusk",
      [Lang.FR]: "Motel « Dusk »",
      [Lang.DE]: "Motel 'Dusk'",
      [Lang.ES]: "Hostal «Hollywood Inn»"
    },
    description: {
      [Lang.EN]: "You ask yourself what kind of person would enjoy spending a night in a shabby hole like this motel. No doubt some sleazy sales rep whose dodgy past will catch up with him sooner or later. I really must check out room 215, you think to yourself, without really knowing why'.",
      [Lang.FR]: "Vous vous demandez quel genre de personne pouvait bien venir passer sa nuit dans un trou aussi paumé que ce motel miteux. Sans doute le genre : représentant pour une obscure société de livraison fuyant un passé qui le rattrapera tôt ou tard. « Faudra que je pense à vérifier la chambre 215, au cas où », pensez-vous, sans trop savoir pourquoi.",
      [Lang.DE]: "Beim Anblick des Gebäudes stellst du dir die Frage, wer in diesem schäbigen Motel früher übernachtet hat. Bilder und Szenen verschiedener Roadmovies schießen dir durch den Kopf: Thelma&Louise, Natural Born Killers... Du denkst dir: 'Vielleicht sollte ich als Erstes Zimmer 215 kontrollieren. Man weiß ja nie...'.",
      [Lang.ES]: "Te preguntas a quién se le podría ocurrir venir a alojarse en un hostal tan lejano y miserable... Mirando el registro de huéspedes, sí hay alguien: Un tal Valedres, en la habitación 215. Tal vez valga la pena explorar..."
    },
    icon: "motel",
    campingModifier: 10,
    spawnChance: 292,
    emptyChance: 0.1,
    km: {
      min: 12,
      max: 15
    },
    explorable: false,
    drops: [
      {
        item: ItemId.CHEST_FOOD,
        odds: 10,
      },
      {
        item: ItemId.MECANISM,
        odds: 10,
      },
      {
        item: ItemId.BED,
        odds: 10,
      },
      {
        item: ItemId.DOOR_CARPET,
        odds: 10,
      },
      {
        item: ItemId.CARPET,
        odds: 10,
      },
      {
        item: ItemId.PET_SNAKE,
        odds: 10,
      },
      {
        item: ItemId.LAWN_PART,
        odds: 3,
      },
      {
        item: ItemId.CHEST,
        odds: 7,
      },
      {
        item: ItemId.COFFEE,
        odds: 10,
      },
      {
        item: ItemId.TABLE,
        odds: 2,
      },
      {
        item: ItemId.LILBOO,
        odds: 2,
      }
    ]
  },
  [RuinId.ARMY_OUTPOST]: {
    id: RuinId.ARMY_OUTPOST,
    name: {
      [Lang.EN]: "Army Outpost",
      [Lang.FR]: "Avant-poste militaire",
      [Lang.DE]: "Militärischer Wachposten",
      [Lang.ES]: "Puesto militar"
    },
    description: {
      [Lang.EN]: "The soldiers stationed here were prepared for anything: weapons, supplies, and a 150m security perimeter. Anything except their lieutenant eating them during the night. Joking aside, with a solid wall and a healthy dictatorship, (from a survival point of view) there's nothing like it!",
      [Lang.FR]: "Ha ça, ils étaient sûrement préparés à tout, les soldats installés ici : armes, provisions et périmètre de sécurité de 150m. Sauf peut-être au fait que leur lieutenant comptait les dévorer pendant la nuit. Non franchement, un bon mur et une bonne dictature des familles, rien de tel pour survivre ici.",
      [Lang.DE]: "Die hier stationierten Soldaten waren auf alles vorbereitet: Waffen, Vorräte und eine 150 m lange Sicherheitszone. Auf alles, außer darauf, dass ihr Leutnant sie während der Nacht verspeiste. Spaß beiseite, mit einer soliden Mauer und einer gesunden Diktatur gibt es (unter dem Gesichtspunkt des Überlebens) nichts Vergleichbares !",
      [Lang.ES]: "Soldados armados hasta los dientes, entrenamientos diarios, provisiones y perímetro de seguridad de 150m. Todo estaba bien preparado, solo que no contaban con que el general los devorase a todos una noche de abril..."
    },
    icon: "army",
    campingModifier: 20,
    spawnChance: 212,
    emptyChance: 0.1,
    km: {
      min: 16,
      max: 19
    },
    explorable: false,
    drops: [
      {
        item: ItemId.GUN,
        odds: 10,
      },
      {
        item: ItemId.MACHINE_GUN,
        odds: 10,
      },
      {
        item: ItemId.CHEST_FOOD,
        odds: 10,
      },
      {
        item: ItemId.FENCE,
        odds: 10,
      },
      {
        item: ItemId.COFFEE,
        odds: 10,
      },
      {
        item: ItemId.RSC_PACK_3,
        odds: 2,
      },
      {
        item: ItemId.WIRE,
        odds: 4,
      },
      {
        item: ItemId.FLAG,
        odds: 3,
      },
      {
        item: ItemId.SHOE,
        odds: 0,
      },
      {
        item: ItemId.SOCCER,
        odds: 0,
      }
    ]
  },
  [RuinId.POST_OFFICE]: {
    id: RuinId.POST_OFFICE,
    name: {
      [Lang.EN]: "Post Office",
      [Lang.FR]: "Bureau de poste",
      [Lang.DE]: "Postfiliale",
      [Lang.ES]: "Oficina de correos"
    },
    description: {
      [Lang.EN]: "This building seems to have resisted the ravages of time, a vestige of the postal service of years ago. It's unlikely that you'll find anything of great interest here, unless you like reading...",
      [Lang.FR]: "Un bâtiment qui semble avoir résisté aux affres du temps, vestige d'un antique service postal. Peu de chances que vous y trouviez quoi que ce soit de grand intérêt, sauf si vous aimez la lecture...",
      [Lang.DE]: "Dieses Gebäude scheint von den turbulenten Ereignissen der Vergangenheit verschont worden zu sein. Es ist noch vollkommen intakt und erinnert an ein klassisches Postbüro mit doppelten Schalterfenstern und durchsiebtem Sprechfenster. Hier wirst du kaum etwas Nützliches finden außer etwas zum Lesen...",
      [Lang.ES]: "El edificio resistió bien el paso del tiempo. Además de reliquias del servicio postal, no crees encontrar nada interesante, a menos que te guste leer..."
    },
    icon: "post",
    campingModifier: 10,
    spawnChance: 177,
    emptyChance: 0.15,
    km: {
      min: 8,
      max: 11
    },
    explorable: false,
    drops: [
      {
        item: ItemId.BOOK_GEN_LETTER,
        odds: 20,
      },
      {
        item: ItemId.BOOK_GEN_BOX,
        odds: 20,
      },
      {
        item: ItemId.RP_LETTER,
        odds: 20,
      },
      {
        item: ItemId.POSTAL_BOX_XL,
        odds: 6,
      },
      {
        item: ItemId.POSTAL_BOX,
        odds: 20,
      },
      {
        item: ItemId.MONEY,
        odds: 3,
      },
      {
        item: ItemId.CARDS,
        odds: 1,
      },
      {
        item: ItemId.CHAIR_BASIC,
        odds: 3,
      },
      {
        item: ItemId.TABLE,
        odds: 3,
      },
      {
        item: ItemId.POSTAL_BOX_01,
        odds: 3,
          event: GameEvent.Christmas
      }
    ]
  },
  [RuinId.SMUGGLERS_CACHE]: {
    id: RuinId.SMUGGLERS_CACHE,
    name: {
      [Lang.EN]: "Once-inhabited Cave",
      [Lang.FR]: "Cache de contrebandiers",
      [Lang.DE]: "Räuberhöhle",
      [Lang.ES]: "Escondite de contrabandistas"
    },
    description: {
      [Lang.EN]: "A hole in the ground that has been somewhat concealed by some planks and some sand. It opens out into a large humid cavern filled with all kinds of debris, no doubt the result of pillaging by a neighbouring town. Who could say that your town wasn't built using ill-gotten gains from such pillaging ? Perhaps the first citizens were responsible for these attacks...",
      [Lang.FR]: "Un trou dans le sol vaguement <strong>dissimulé</strong> par quelques planches et du sable. Il débouche sur une large caverne humide remplie de <strong>débris en tous genres</strong>, résultats de <strong>pillages dans une ville voisine</strong>, probablement. Qui sait si <strong>votre ville</strong> ne s'est pas construite sur ces pillages ? Peut-être que les <strong>premiers citoyens</strong> ont participé à ces attaques...",
      [Lang.DE]: "Der Zugang zu dieser Höhle ist ein notdürftig abgedecktes Loch in der Erde. Er führt in eine übergroße feuchte Grotte, die mit allerlei Trümmern und Gerümpel gefüllt ist. Höchstwahrscheinlich handelt es sich um Beutegut, das bei der Plünderung einer benachbarten Stadt eingesackt wurde. Vielleicht wurde deine Stadt mit diesem Raubgut errichtet? Und wer weiß: Womöglich haben die ersten Einwohner deiner Stadt an diesen Raubzügen teilgenommen...",
      [Lang.ES]: "Un hoyo <strong>se esconde</strong> en el suelo detrás de tablas y arena. Lleva a una caverna húmeda llena de <strong>cachivaches</strong> acumulados probablemente con los <strong>robos a un pueblo vecino</strong>. Quién sabe si <strong>tu pueblo</strong> se construyó con base en objetos robados. Puede ser que los <strong>primeros habitantes</strong> hayan sido los autores de todo esto..."
    },
    icon: "cave3",
    campingModifier: 15,
    spawnChance: 196,
    emptyChance: 0.25,
    km: {
      min: 2,
      max: 5
    },
    explorable: false,
    drops: [
      {
        item: ItemId.CHEST,
        odds: 10,
      },
      {
        item: ItemId.CHEST_TOOLS,
        odds: 40,
      },
      {
        item: ItemId.CHEST_CITIZEN,
        odds: 60,
      },
      {
        item: ItemId.CHEST_HERO,
        odds: 2,
      },
      {
        item: ItemId.MONEY,
        odds: 5,
      },
      {
        item: ItemId.CHEST_XL,
        odds: 2,
      },
      {
        item: ItemId.CATBOX,
        odds: 1,
      }
    ]
  },
  [RuinId.EQUIPPED_TRENCH]: {
    id: RuinId.EQUIPPED_TRENCH,
    name: {
      [Lang.EN]: "Equipped Trench",
      [Lang.FR]: "Tranchée aménagée",
      [Lang.DE]: "Schützengraben",
      [Lang.ES]: "Trincheras militares"
    },
    description: {
      [Lang.EN]: "Numerous craters and splashes of dried blood lead you to think that a large - scale battle took place here. Most of the trenches are buried, but there are still some that are worth exploring...",
      [Lang.FR]: "Les nombreux <strong>cratères</strong> et autres <strong>taches de sang séché</strong> laissent à penser qu'une <strong>bataille de grande envergure</strong> s'est déroulée ici. La plupart des tranchées se sont effondrées, mais il reste <strong>quelques trous à fouiller</strong>.",
      [Lang.DE]: "Dieser von Einschusskratern und schwarzen getrockneten Blutlachen übersäte Schützengraben lässt erahnen, was sich hier abgespielt hat. Der größte Teil des Grabens ist in sich zusammengestürzt, doch hier und dort erblickst du noch ein paar begehbare Stellen, die sich nach nutzbaren Gegenständen absuchen lassen.",
      [Lang.ES]: "Los numerosos <strong>cráteres</strong> y <strong>manchas de sangre seca</strong> hacen pensar que una <strong>gran batalla</strong> tuvo lugar aquí. La mayoría de las trincheras fueron saqueadas, pero quedan aún <strong>algunas que pueden contener algo interesante</strong>."
    },
    icon: "trench",
    campingModifier: 20,
    spawnChance: 216,
    emptyChance: 0.1,
    km: {
      min: 5,
      max: 8
    },
    explorable: false,
    drops: [
      {
        item: ItemId.CONCRETE,
        odds: 40,
      },
      {
        item: ItemId.BGRENADE_EMPTY,
        odds: 10,
      },
      {
        item: ItemId.GUN,
        odds: 5,
      },
      {
        item: ItemId.MACHINE_GUN,
        odds: 3,
      }
    ]
  },
  [RuinId.TOWN_LIBRARY]: {
    id: RuinId.TOWN_LIBRARY,
    name: {
      [Lang.EN]: "Town Library",
      [Lang.FR]: "Bibliothèque de quartier",
      [Lang.DE]: "Stadtbücherei",
      [Lang.ES]: "Biblioteca de barrio"
    },
    description: {
      [Lang.EN]: "What was once the local library is now a collection of several small houses. Today, the books are mostly torn or burnt, the ground is littered with torn pages and the shelves have been knocked over.",
      [Lang.FR]: "Un ensemble de plusieurs petites maisons qui constituaient autrefois une bibliothèque de quartier. Aujourd'hui, les livres sont, pour la plupart, déchirés ou brûlés, le sol est jonché de pages arrachées et les étagères sont renversées.",
      [Lang.DE]: "Was einst die örtliche Bibliothek war, ist heute eine Ansammlung von mehreren kleinen Häusern. Heute sind die Bücher größtenteils zerrissen oder verbrannt, der Boden ist mit zerrissenen Seiten übersät und die Regale sind umgestoßen worden.",
      [Lang.ES]: "Un pequeño edificio que servía de biblioteca para los vecinos. Hoy la mayoría de libros están quemados o rotos, el piso está lleno de hojas arrancadas y estanterías caídas."
    },
    icon: "dll",
    campingModifier: 10,
    spawnChance: 204,
    emptyChance: 0.05,
    km: {
      min: 6,
      max: 9
    },
    explorable: false,
    drops: [
      {
        item: ItemId.RP_SHEETS,
        odds: 10,
      },
      {
        item: ItemId.RP_MANUAL,
        odds: 10,
      },
      {
        item: ItemId.RP_SCROLL,
        odds: 10,
      },
      {
        item: ItemId.RP_BOOK2,
        odds: 10,
      },
      {
        item: ItemId.RP_BOOK,
        odds: 10,
      },
      {
        item: ItemId.PET_RAT,
        odds: 2,
      },
      {
        item: ItemId.CIGS,
        odds: 2,
      },
      {
        item: ItemId.LAMP,
        odds: 1,
      },
      {
        item: ItemId.CHAIR_BASIC,
        odds: 10,
      },
      {
        item: ItemId.DECO_BOX,
        odds: 100,
      },
      {
        item: ItemId.LENS,
        odds: 2,
      }
    ]
  },
  [RuinId.MINI_MARKET]: {
    id: RuinId.MINI_MARKET,
    name: {
      [Lang.EN]: "Mini-market",
      [Lang.FR]: "Mini-market",
      [Lang.DE]: "Tante Emma Laden",
      [Lang.ES]: "Minimercado «Ocxo»"
    },
    description: {
      [Lang.EN]: "This small convenience store sold pretty much all the day-to-day necessities: Food, drinks, cleaning products... Open 24/7 365 days a year if you believe the printing on the window. The gaping hole in said window makes this statement 100% correct!",
      [Lang.FR]: "Ce petit magasin proposait toutes sortes de produits de consommation courants : nourriture, boissons, produits d'entretien… Ouvert 24h/24 et 7j/7 si on en croit ce qui est imprimé sur la vitrine. Le trou béant dans la façade lui donne raison.",
      [Lang.DE]: "In diesem Geschäft konnte man früher allerlei Produkte des täglichen Bedarfs kaufen: Lebensmittel, Getränke, Reinigungsmittel... An der Tür steht: Rund um die Uhr geöffnet (auch am Wochenende). In der Tat, das klaffenden Loch in der Mauer bestätigt dies.",
      [Lang.ES]: "Esta tienda vendía todo tipo de productos de consumo diario: comida, bebidas, productos de limpieza... Abierto las 24 horas, los 7 días de la semana, según lo que dice en la entrada. La puerta destrozada le da la razón."
    },
    icon: "emma",
    campingModifier: 10,
    spawnChance: 913,
    emptyChance: 0.05,
    km: {
      min: 8,
      max: 11
    },
    explorable: false,
    drops: [
      {
        item: ItemId.CAN,
        odds: 10,
      },
      {
        item: ItemId.LIGHTS,
        odds: 10,
      },
      {
        item: ItemId.CIGS,
        odds: 10,
      },
      {
        item: ItemId.DOOR_CARPET,
        odds: 3,
      },
      {
        item: ItemId.DRUG,
        odds: 10,
      },
      {
        item: ItemId.JERRYCAN,
        odds: 10,
      },
      {
        item: ItemId.FOOD_BAR1,
        odds: 10,
      },
      {
        item: ItemId.FOOD_NOODLES,
        odds: 10,
      },
      {
        item: ItemId.SPICES,
        odds: 5,
      },
      {
        item: ItemId.MONEY,
        odds: 10,
      },
      {
        item: ItemId.POISON_PART,
        odds: 1,
      },
      {
        item: ItemId.FOOD_CANDIES,
        odds: 2,
      },
      {
        item: ItemId.CHAMA,
        odds: 2,
      },
      {
        item: ItemId.DIODE,
        odds: 5,
      }
    ]
  },
  [RuinId.THE__MAYOR_MOBILE_]: {
    id: RuinId.THE__MAYOR_MOBILE_,
    name: {
      [Lang.EN]: "The 'Mayor-Mobile'",
      [Lang.FR]: "Camion « Mairie-mobile »",
      [Lang.DE]: "Truck 'Rathaus auf Rädern'",
      [Lang.ES]: "Bus turístico"
    },
    description: {
      [Lang.EN]: "Your representative on your doorstep. The zombies thoroughly approved of this concept if you notice the claw marks on the upholstery in the cab and the human remains sprayed everywhere.",
      [Lang.FR]: "« Vos démarches citoyennes juste en bas de chez vous ». Pas de doute, les zombies ont complètement adhéré au concept si on croit les traces de griffe un peu partout à l'intérieur du camion et les restes humains soigneusement éparpillés dans les rayonnages.",
      [Lang.DE]: "Ihr Vertreter vor Ihrer Haustür. Die Zombies stimmten diesem Konzept voll und ganz zu, wenn man die Krallenspuren auf den Polstern der Kabine und die überall versprühten menschlichen Überreste bemerkt.",
      [Lang.ES]: "Un buen día los pobladores salieron a hacer una excursión por el desierto en este bus cantando alegremente: «Vamo' pa' la playa, pa' curarte el alma», pero cuando cantaron la famosa canción de The Cranberries: «...in your head...zombie, zombie... » Una turba de muertos vivientes se unió al coro... dejando 40 muertos."
    },
    icon: "mayor",
    campingModifier: 10,
    spawnChance: 81,
    emptyChance: 0.1,
    km: {
      min: 16,
      max: 19
    },
    explorable: false,
    drops: [
      {
        item: ItemId.BOOK_GEN_LETTER,
        odds: 10,
      },
      {
        item: ItemId.RP_MANUAL,
        odds: 10,
      },
      {
        item: ItemId.RP_SCROLL,
        odds: 10,
      },
      {
        item: ItemId.RP_SHEETS,
        odds: 10,
      },
      {
        item: ItemId.RP_LETTER,
        odds: 10,
      },
      {
        item: ItemId.MECANISM,
        odds: 10,
      }
    ]
  },
  [RuinId.WRECKED_TRANSPORTER]: {
    id: RuinId.WRECKED_TRANSPORTER,
    name: {
      [Lang.EN]: "Wrecked Transporter",
      [Lang.FR]: "Camion en panne",
      [Lang.DE]: "Umgekippter Laster",
      [Lang.ES]: "Camión averiado"
    },
    description: {
      [Lang.EN]: "A soviet transporter from the 'Trastwin' corporation. The driver's cab is wrapped round a tree, but the slashes in the seat and the blood-soaked interior would suggest that the crash was not the cause of death...",
      [Lang.FR]: "Un camion de transport du groupe soviétique <strong>Transtwinä</strong>. La cabine du conducteur est totalement <strong>encastrée dans un arbre</strong>, mais les <strong>entailles</strong> profondes dans le siège et le <strong>sang</strong> qui tapisse toutes les parois laissent supposer que l'accident n'est pas la cause de la mort...",
      [Lang.DE]: "Es handelt sich um einen Transportlaster der sowjetischen Firma Transtwinï. Die Fahrerkabine hat sich komplett in einem Baum verkeilt. Der aufgeschlitzte Fahrersitz, sowie die großflächigen Blutspuren an den Wänden, lassen darauf schließen, dass der Unfall nicht die Todesursache war...",
      [Lang.ES]: "Un camión de la empresa rusa <strong>Transtwina</strong>. La cabina del conductor está totalmente <strong>encastrada en un árbol</strong>, pero los <strong>arañazos</strong> profundos en el asiento y la <strong>sangre</strong> en las paredes hacen pensar que no fue un accidente..."
    },
    icon: "lkw",
    campingModifier: 10,
    spawnChance: 177,
    emptyChance: 0,
    km: {
      min: 2,
      max: 5
    },
    explorable: false,
    drops: [
      {
        item: ItemId.CHEST_FOOD,
        odds: 60,
      },
      {
        item: ItemId.CHEST_TOOLS,
        odds: 20,
      },
      {
        item: ItemId.WRENCH,
        odds: 5,
      },
      {
        item: ItemId.GAME_BOX,
        odds: 7,
      },
      {
        item: ItemId.COURROIE,
        odds: 1,
      },
      {
        item: ItemId.RHUM,
        odds: 4,
      },
      {
        item: ItemId.PLATE_RAW,
        odds: 5,
      },
      {
        item: ItemId.RADIO_OFF,
        odds: 2,
      },
      {
        item: ItemId.JERRYCAN,
        odds: 5,
      },
      {
        item: ItemId.RADIUS_MK2_PART,
        odds: 5,
      },
      {
        item: ItemId.MECANISM,
        odds: 1,
      },
      {
        item: ItemId.WIRE,
        odds: 3,
      }
    ]
  },
  [RuinId.BURNT_SCHOOL]: {
    id: RuinId.BURNT_SCHOOL,
    name: {
      [Lang.EN]: "Burnt School",
      [Lang.FR]: "École maternelle brûlée",
      [Lang.DE]: "Verbrannte Grundschule",
      [Lang.ES]: "Escuela quemada"
    },
    description: {
      [Lang.EN]: "The childish drawings painted on the charred walls provide a stark contrast to the vaguely human remains strewn here and there. At times, you believe you can hear sinister laughter coming from beneath the rubble.",
      [Lang.FR]: "Les dessins enfantins peints sur les parois calcinées contrastent effroyablement avec les restes vaguement humains dispersés çà et là. Par moment, on croirait même entendre des <strong>rires lugubres</strong> sous les décombres.",
      [Lang.DE]: "Die fröhlichen Kinderzeichnungen an den Wänden stehen im starken Kontrast zu den nicht identifizierbaren menschlichen Überresten am Boden. Du hast das Gefühl, ein dunkles Kichern aus dem Bauschutt zu hören.",
      [Lang.ES]: "Era una escuela de niños muy pequeños, los dibujos en las paredes lo indican. El contraste con los restos de cuerpos humanos en el suelo es desolador. Por momentos te parece oir <strong>ecos de risas</strong> entre los escombros."
    },
    icon: "school",
    campingModifier: 10,
    spawnChance: 165,
    emptyChance: 0.1,
    km: {
      min: 3,
      max: 6
    },
    explorable: false,
    drops: [
      {
        item: ItemId.HMEAT,
        odds: 80,
      },
      {
        item: ItemId.BANDAGE,
        odds: 5,
      },
      {
        item: ItemId.PILE,
        odds: 20,
      },
      {
        item: ItemId.PET_RAT,
        odds: 5,
      },
      {
        item: ItemId.WATERGUN_EMPTY,
        odds: 20,
      },
      {
        item: ItemId.WATERGUN_OPT_PART,
        odds: 2,
      },
      {
        item: ItemId.GAME_BOX,
        odds: 10,
      },
      {
        item: ItemId.CYANURE,
        odds: 5,
      },
      {
        item: ItemId.LENS,
        odds: 4,
      }
    ]
  },
  [RuinId.DILAPIDATED_BUILDING]: {
    id: RuinId.DILAPIDATED_BUILDING,
    name: {
      [Lang.EN]: "Dilapidated Building",
      [Lang.FR]: "Immeuble délabré",
      [Lang.DE]: "Verfallenes Bürogebäude",
      [Lang.ES]: "Edificio deteriorado"
    },
    description: {
      [Lang.EN]: "A nice office building where people used to get on with their work, starting early in the morning, surrounded by anonymous colleagues, trying to finish who knows what project but with one clear goal: their own survival. You think to yourself that maybe things haven't really changed all that much...",
      [Lang.FR]: "Un bel immeuble de bureau où il devait faire bon venir travailler au petit matin, entouré de ses collègues anonymes pour accomplir on ne sait trop quel but global et avec pour seule préoccupation : sa propre survie. Vous vous dites que les choses n'ont peut-être finalement pas tant changé que ça...",
      [Lang.DE]: "In dieses schöne Gebäude gingen die Menschen früher zur Arbeit. Pünktlichkeit und Dresscode waren Pflicht. Die tägliche Routine bestand darin, mit einer Gruppe unbekannter Kollegen Zielvorgaben zu erreichen und um sein eigenes Überleben zu kämpfen... Hhmmm, wenn du so drüber nachdenkst: So viel hat sich gar nicht geändert - bis auf den Dresscode vielleicht.",
      [Lang.ES]: "El edificio de una gran empresa donde la gente venía a trabajar, con compañeros anónimos y con un solo objetivo: sobrevivir. Vaya, las cosas no han cambiado mucho..."
    },
    icon: "office",
    campingModifier: 10,
    spawnChance: 519,
    emptyChance: 0.1,
    km: {
      min: 10,
      max: 13
    },
    explorable: false,
    drops: [
      {
        item: ItemId.DOOR,
        odds: 8,
      },
      {
        item: ItemId.CHAIR_BASIC,
        odds: 15,
      },
      {
        item: ItemId.ELECTRO_BOX,
        odds: 15,
      },
      {
        item: ItemId.MECANISM,
        odds: 15,
      },
      {
        item: ItemId.RP_MANUAL,
        odds: 1,
      },
      {
        item: ItemId.RP_SHEETS,
        odds: 1,
      },
      {
        item: ItemId.CIGS,
        odds: 1,
      },
      {
        item: ItemId.FOOD_ARMAG,
        odds: 1,
      },
      {
        item: ItemId.SAFE,
        odds: 1,
      },
      {
        item: ItemId.MACHINE_1,
        odds: 2,
      },
      {
        item: ItemId.MACHINE_2,
        odds: 2,
      },
      {
        item: ItemId.MACHINE_3,
        odds: 2,
      },
      {
        item: ItemId.MONEY,
        odds: 10,
      },
      {
        item: ItemId.IPHONE,
        odds: 2,
      },
      {
        item: ItemId.WATER_CAN_EMPTY,
        odds: 1,
      },
      {
        item: ItemId.TABLE,
        odds: 1,
      }
    ]
  },
  [RuinId.DERELICT_VILLA]: {
    id: RuinId.DERELICT_VILLA,
    name: {
      [Lang.EN]: "Derelict Villa",
      [Lang.FR]: "Villa délabrée",
      [Lang.DE]: "Verfallene Villa",
      [Lang.ES]: "Pueblo fantasma"
    },
    description: {
      [Lang.EN]: "Someone lived here a LONG time ago. Perhaps someone who was surrounded by a family who loved them and with whom they spent many happy hours together ? Today, all that remains is a little dust and utter desolation... and the occasional corpse who trudges towards you, gnashing its teeth.",
      [Lang.FR]: "Quelqu'un a vécu ici, il y a très longtemps. Peut-être même que cette personne était entourée d'une famille qui l'aimait et qu'ils y ont coulé des jours heureux tous ensemble ? Aujourd'hui il n'en reste rien ; un peu de poussière et la désolation la plus totale. Et parfois même un cadavre qui marche vers vous en grinçant des dents.",
      [Lang.DE]: "Jemand hat hier vor langer Zeit gelebt. Vielleicht jemand, der von einer Familie umgeben war, die ihn liebte und mit der er viele glückliche Stunden zusammen verbrachte ? Heute ist alles, was bleibt, ein wenig Staub und völlige Verwüstung... und gelegentlich eine Leiche, die mit den Zähnen knirschend auf einen zustürmt.",
      [Lang.ES]: "Alguien vivió aquí hace mucho tiempo. ¿Habrá tenido una familia que le amaba y un hogar feliz? Hoy no queda nada, solo polvo y una desolación total. De vez en cuando, un cadáver tiembla rechinando los dientes."
    },
    icon: "villa",
    campingModifier: 10,
    spawnChance: 338,
    emptyChance: 0.1,
    km: {
      min: 3,
      max: 6
    },
    explorable: false,
    drops: [
      {
        item: ItemId.CAN,
        odds: 40,
      },
      {
        item: ItemId.LOCK,
        odds: 7,
      },
      {
        item: ItemId.BED,
        odds: 5,
      },
      {
        item: ItemId.TABLE,
        odds: 8,
      },
      {
        item: ItemId.PILE,
        odds: 20,
      },
      {
        item: ItemId.PHARMA,
        odds: 12,
      },
      {
        item: ItemId.SCREW,
        odds: 9,
      },
      {
        item: ItemId.CHEST_CITIZEN,
        odds: 20,
      },
      {
        item: ItemId.LAMP,
        odds: 7,
      },
      {
        item: ItemId.REPAIR_KIT,
        odds: 9,
      },
      {
        item: ItemId.CARPET,
        odds: 4,
      },
      {
        item: ItemId.DOOR_CARPET,
        odds: 7,
      },
      {
        item: ItemId.CHAIR,
        odds: 5,
      },
      {
        item: ItemId.CHAIR_BASIC,
        odds: 9,
      },
      {
        item: ItemId.CAN_OPENER,
        odds: 7,
      },
      {
        item: ItemId.PET_DOG,
        odds: 2,
      },
      {
        item: ItemId.VODKA,
        odds: 2,
      },
      {
        item: ItemId.RHUM,
        odds: 2,
      },
      {
        item: ItemId.MIXERGUN_PART,
        odds: 1,
      },
      {
        item: ItemId.SPORT_ELEC_EMPTY,
        odds: 4,
      },
      {
        item: ItemId.BQUIES,
        odds: 1,
      },
      {
        item: ItemId.CDELVI,
        odds: 1,
      }
    ]
  },
  [RuinId.ABANDONED_CONSTRUCTION_SITE]: {
    id: RuinId.ABANDONED_CONSTRUCTION_SITE,
    name: {
      [Lang.EN]: "Abandoned Construction Site",
      [Lang.FR]: "Chantier à l’abandon",
      [Lang.DE]: "Verlassene Baustelle",
      [Lang.ES]: "Sitio de construcción abandonado"
    },
    description: {
      [Lang.EN]: "It's impossible to guess what they were wanting to build here. It could have been a school, a car park, a department store... The rusting metal supports are the only remaining evidence of whatever mysterious project was underway here.",
      [Lang.FR]: "Il est impossible de déterminer ce qu'ils voulaient bâtir ici. Une école, un parking, un grand magasin... Seules les structures métalliques rouillées témoignent encore du <strong>mystérieux projet</strong> qui se tramait ici.",
      [Lang.DE]: "Soll das eine Schule, ein Parkhaus oder vielleicht ein Kaufhaus sein? Du kannst es nicht erkennen... Das einzige, was von diesem geheimnisvollen Projekt noch übrig ist, sind ein paar verrostete Metallstrukturen.",
      [Lang.ES]: "Te cuesta imaginar lo que se quiso construir aquí. ¿Una escuela, una prisión?... Solo las estructuras metálicas fueron testigos de ese <strong>misterioso proyecto</strong>."
    },
    icon: "construction",
    campingModifier: 10,
    spawnChance: 481,
    emptyChance: 0.1,
    km: {
      min: 4,
      max: 7
    },
    explorable: false,
    drops: [
      {
        item: ItemId.MECA_PARTS,
        odds: 2,
      },
      {
        item: ItemId.SAW_TOOL_PART,
        odds: 1,
      },
      {
        item: ItemId.ELECTRO_BOX,
        odds: 5,
      },
      {
        item: ItemId.TRESTLE,
        odds: 15,
      },
      {
        item: ItemId.METAL_BEAM,
        odds: 100,
      },
      {
        item: ItemId.PLATE_RAW,
        odds: 40,
      },
      {
        item: ItemId.CHEST,
        odds: 20,
      },
      {
        item: ItemId.REPAIR_KIT,
        odds: 40,
      },
      {
        item: ItemId.WRENCH,
        odds: 10,
      },
      {
        item: ItemId.SCREW,
        odds: 12,
      },
      {
        item: ItemId.LOCK,
        odds: 5,
      },
      {
        item: ItemId.CHEST_XL,
        odds: 1,
      },
      {
        item: ItemId.POCKET_BELT,
        odds: 3,
      },
      {
        item: ItemId.RADIO_OFF,
        odds: 10,
      },
      {
        item: ItemId.CONCRETE,
        odds: 40,
      },
      {
        item: ItemId.FENCE,
        odds: 8,
      }
    ]
  },
  [RuinId.ABANDONED_WELL]: {
    id: RuinId.ABANDONED_WELL,
    name: {
      [Lang.EN]: "Abandoned Well",
      [Lang.FR]: "Puits abandonné",
      [Lang.DE]: "Verlassener Brunnen",
      [Lang.ES]: "Pozo abandonado"
    },
    description: {
      [Lang.EN]: "Wow - this is a bloody godsend! A well which still works! Completely lost in the middle of nowhere there is nobody here with their rulebook to tell you 'Don't do this, don't do that, don't take too much water, blah blah blah...' Go on, take a drink, it'll be our little secret...",
      [Lang.FR]: "En voilà, une sacré aubaine ! <strong>Un puits encore en état de marche</strong>, complètement perdu au milieu de nulle part. Et personne avec son Registre à la main pour vous dire « fais pas ci, fais pas ça, prends pas trop d'eau, gnagnagna... ». Allez, une petite rasade, ça sera notre petit secret.",
      [Lang.DE]: "Wow - das ist ein verdammtes Geschenk des Himmels! Ein Brunnen, der immer noch funktioniert ! Völlig verloren in der Mitte von Nirgendwo gibt es hier niemanden mit seinem Regelwerk, der Ihnen sagt: 'Tun Sie dies nicht, tun Sie das nicht, nehmen Sie nicht zu viel Wasser, bla bla bla bla...'. Na los, nimm einen Drink, es wird unser kleines Geheimnis sein...",
      [Lang.ES]: "¡Gracias Frocoa! <strong>Un pozo</strong> totalmente perdido en medio del desierto y que además se ve muy bien. Nadie con un Registro en mano que te diga «oye, ¿A dónde vás, qué llevas? no tomes mucha agua...». Pero, shhhh, no se lo digas a nadie."
    },
    icon: "well",
    campingModifier: -20,
    spawnChance: 221,
    emptyChance: 0.33,
    km: {
      min: 17,
      max: 20
    },
    explorable: false,
    drops: [
      {
        item: ItemId.JERRYCAN,
        odds: 2,
      },
      {
        item: ItemId.WATER,
        odds: 30,
      },
      {
        item: ItemId.WATER_CUP_PART,
        odds: 10,
      }
    ]
  },
  [RuinId.DISUSED_SILOS]: {
    id: RuinId.DISUSED_SILOS,
    name: {
      [Lang.EN]: "Disused Silos",
      [Lang.FR]: "Silos à l’abandon",
      [Lang.DE]: "Verlassene Silos",
      [Lang.ES]: "Silos abandonados"
    },
    description: {
      [Lang.EN]: "Originally constructed for storing grain, but as time passed and the grain ran out, the tanks filled with rainwater (and a dead rat). You'll need the right kit to make use of it though...",
      [Lang.FR]: "Cet endroit devait servir de stockage pour le grain, mais avec le temps, les cuves ont fini par se remplir d'eau de pluie (c'était il y a bien longtemps...). Il doit il y avoir de quoi s'approvisionner par ici..",
      [Lang.DE]: "Ursprünglich zur Lagerung von Getreide konstruiert, aber als die Zeit verging und das Getreide knapp wurde, füllten sich die Tanks mit Regenwasser (und einer toten Ratte). Sie brauchen allerdings den richtigen Bausatz, um sie zu benutzen...",
      [Lang.ES]: "Este lugar debió servir para almacenar los granos. Pero con el tiempo, los depósitos se llenaron con agua de lluvia. Aquí podrías abastecerte."
    },
    icon: "silo",
    campingModifier: 10,
    spawnChance: 482,
    emptyChance: 0.08,
    km: {
      min: 8,
      max: 11
    },
    explorable: false,
    drops: [
      {
        item: ItemId.JERRYCAN,
        odds: 20,
      },
      {
        item: ItemId.MECA_PARTS,
        odds: 1,
      }
    ]
  },
  [RuinId.BLOCKED_ROAD]: {
    id: RuinId.BLOCKED_ROAD,
    name: {
      [Lang.EN]: "Blocked Road",
      [Lang.FR]: "Route barrée",
      [Lang.DE]: "Versperrte Straße",
      [Lang.ES]: "Pista bloqueada"
    },
    description: {
      [Lang.EN]: "Something truly bizarre seems to have happened here: a huge rock seems to have crash landed in the middle of the road, like some kind of tombstone...",
      [Lang.FR]: "Ce qui s'est déroulé ici est assez <strong>incompréhensible</strong> : un énorme <strong>rocher</strong> semble s'être écrasé en plein milieu d'une route, comme <strong>tombé de nulle part</strong>...",
      [Lang.DE]: "Was hier passiert ist erschließt sich dir nicht so ganz... Ein riesiger Felsen ist mit voller Wucht auf die Straße geschleudert worden - doch woher kam er? Rings um dich ist nichts als Wüste...",
      [Lang.ES]: "Lo que sucedió aquí es <strong>incomprensible</strong>: una enorme <strong>roca</strong> cayó en medio del camino, como <strong>caída del cielo</strong>..."
    },
    icon: "street",
    campingModifier: 10,
    spawnChance: 42,
    emptyChance: 0.2,
    km: {
      min: 4,
      max: 7
    },
    explorable: false,
    drops: [
      {
        item: ItemId.CONCRETE_WALL,
        odds: 40,
      },
      {
        item: ItemId.MECA_PARTS,
        odds: 5,
      },
      {
        item: ItemId.REPAIR_ONE,
        odds: 5,
      },
      {
        item: ItemId.PLATE_RAW,
        odds: 10,
      },
      {
        item: ItemId.COURROIE,
        odds: 3,
      },
      {
        item: ItemId.TUBE,
        odds: 8,
      },
      {
        item: ItemId.CHEST,
        odds: 9,
      },
      {
        item: ItemId.TRESTLE,
        odds: 5,
      },
      {
        item: ItemId.ENGINE_PART,
        odds: 1,
      }
    ]
  },
  [RuinId.ABANDONED_PARK]: {
    id: RuinId.ABANDONED_PARK,
    name: {
      [Lang.EN]: "Abandoned Park",
      [Lang.FR]: "Parc à l’abandon",
      [Lang.DE]: "Verwilderter Park",
      [Lang.ES]: "Parque abandonado"
    },
    description: {
      [Lang.EN]: "A place of peace and serenity... If you are armed and ready to fight for your life. The surrounding vegetation is sinister and smells strongly of death, unidentified creatures lurk in the shadows... You have the overwhelming feeling that some creature is going to burst out from a hedge and attack you.",
      [Lang.FR]: "Un lieu de recueillement et de sérénité... Pour peu que vous soyez armé(e) et prêt(e) à lutter pour votre survie. La végétation locale est <strong>sinistre</strong> et <strong>sent la mort</strong> à plein nez, des <strong>créatures</strong> indéfinissables se déplacent dans les ombres... Vous avez constamment la sensation qu'une saleté va vous <strong>bondir</strong> dessus depuis un fourré.",
      [Lang.DE]: "Ein Ort des Friedens und der Gelassenheit... Wenn Sie bewaffnet und bereit sind, um Ihr Leben zu kämpfen. Die umgebende Vegetation ist unheimlich und riecht stark nach Tod, unidentifizierte Kreaturen lauern im Schatten... Sie haben das überwältigende Gefühl, dass eine Kreatur aus einer Hecke ausbrechen und Sie angreifen wird.",
      [Lang.ES]: "Un lugar de paz y serenidad... siempre y cuando estés armado para sobrevivir. La vegetación es <strong>siniestra</strong> y <strong>huele a muerte</strong>, <strong>criaturas</strong> indescriptibles se mueven entre las sombras... Sientes constantemente que algo horrible va a <strong>lanzarse sobre ti</strong> desde la maleza."
    },
    icon: "park",
    campingModifier: 10,
    spawnChance: 102,
    emptyChance: 0.2,
    km: {
      min: 4,
      max: 7
    },
    explorable: false,
    drops: [
      {
        item: ItemId.VEGETABLE,
        odds: 35,
      },
      {
        item: ItemId.PET_SNAKE,
        odds: 10,
      },
      {
        item: ItemId.PET_PIG,
        odds: 5,
      },
      {
        item: ItemId.CHAIR_BASIC,
        odds: 5,
      },
      {
        item: ItemId.WOOD2,
        odds: 10,
      },
      {
        item: ItemId.GAME_BOX,
        odds: 5,
      },
      {
        item: ItemId.CUTCUT,
        odds: 5,
      },
      {
        item: ItemId.LAWN_PART,
        odds: 10,
      },
      {
        item: ItemId.WATERGUN_OPT_PART,
        odds: 2,
      },
      {
        item: ItemId.WATERGUN_EMPTY,
        odds: 20,
      },
      {
        item: ItemId.JERRYGUN_PART,
        odds: 2,
      },
      {
        item: ItemId.DIGGER,
        odds: 10,
      },
      {
        item: ItemId.RYEBAG,
        odds: 4,
      }
    ]
  },
  [RuinId.GUNS__N__ZOMBIES_ARMOURY]: {
    id: RuinId.GUNS__N__ZOMBIES_ARMOURY,
    name: {
      [Lang.EN]: "Guns 'n' Zombies Armoury",
      [Lang.FR]: "Armurerie Guns’n’Zombies",
      [Lang.DE]: "Waffengeschäft Guns'n'Zombies",
      [Lang.ES]: "Armería «Guns'n'Zombies»"
    },
    description: {
      [Lang.EN]: "If you like to menace, maim or murder, you've hit the mother lode here... The shrapnel stuck in the walls, bullet holes and wreckage all around give you a good idea of what genre of 'events' took place here...",
      [Lang.FR]: "Un filon d'armes pour qui aime bien tuer ou menacer. Les crevasses, impacts de balles et décombres en disent long sur les <strong>évènements</strong> qui sont survenus ici...",
      [Lang.DE]: "Wenn Sie drohen, verstümmeln oder morden wollen, haben Sie hier die Hauptader getroffen... Die in den Wänden steckenden Schrapnelle, Einschusslöcher und Trümmer ringsum geben Ihnen eine gute Vorstellung davon, welche Art von 'Ereignissen' sich hier abgespielt haben...",
      [Lang.ES]: "Como un niño en una tienda de juguetes. Así se sienten los aficionados a los balazos en este lugar. Los agujeros en las paredes dicen mucho sobre el <strong>ambiente</strong> que se vivía aquí..."
    },
    icon: "guns",
    campingModifier: 10,
    spawnChance: 121,
    emptyChance: 0.25,
    km: {
      min: 5,
      max: 8
    },
    explorable: false,
    drops: [
      {
        item: ItemId.GUN,
        odds: 30,
      },
      {
        item: ItemId.MACHINE_GUN,
        odds: 10,
      },
      {
        item: ItemId.KNIFE,
        odds: 20,
      },
      {
        item: ItemId.CHAINSAW_PART,
        odds: 2,
      },
      {
        item: ItemId.BIG_PGUN_PART,
        odds: 5,
      },
      {
        item: ItemId.PILEGUN_EMPTY,
        odds: 20,
      },
      {
        item: ItemId.CUTCUT,
        odds: 20,
      },
      {
        item: ItemId.WATERGUN_EMPTY,
        odds: 20,
      },
      {
        item: ItemId.WATERGUN_OPT_PART,
        odds: 5,
      },
      {
        item: ItemId.DETO,
        odds: 5,
      }
    ]
  },
  [RuinId.DISUSED_WAREHOUSE]: {
    id: RuinId.DISUSED_WAREHOUSE,
    name: {
      [Lang.EN]: "Disused Warehouse",
      [Lang.FR]: "Entrepôt désaffecté",
      [Lang.DE]: "Warenlager",
      [Lang.ES]: "Depósito abandonado"
    },
    description: {
      [Lang.EN]: "The door to this supermarket stockroom has thus far resisted would-be pillagers... surely there must be something tasty inside worth having...",
      [Lang.FR]: "L'entrepôt de stockage d'un ancien supermarché dont la <strong>porte a résisté aux tentatives de pillages</strong>. Il doit sûrement contenir <strong>diverses babioles</strong> intéressantes...",
      [Lang.DE]: "Das Schiebetor dieses Supermarktlagers hat allen Plünderungsversuchen erfolgreich getrotzt. Durch einen etwas versteckten Seiteneingang gelangst du ins Innere und machst dich sofort auf die Suche nach Dingen, die du noch gebrauchen kannst...",
      [Lang.ES]: "Servía para almacenar los productos de un antiguo supermercado y <strong>su puerta resistió a los saqueos</strong>. Debe contener <strong>algunas cosillas</strong> interesantes..."
    },
    icon: "warehouse2",
    campingModifier: 10,
    spawnChance: 181,
    emptyChance: 0.2,
    km: {
      min: 2,
      max: 5
    },
    explorable: false,
    drops: [
      {
        item: ItemId.CHEST_TOOLS,
        odds: 40,
      },
      {
        item: ItemId.CHEST_CITIZEN,
        odds: 60,
      },
      {
        item: ItemId.CHEST_FOOD,
        odds: 60,
      }
    ]
  },
  [RuinId.CITIZEN_S_TENT]: {
    id: RuinId.CITIZEN_S_TENT,
    name: {
      [Lang.EN]: "Citizen's Tent",
      [Lang.FR]: "Tente d’un citoyen",
      [Lang.DE]: "Zelt eines Bürgers",
      [Lang.ES]: "Tienda de un habitante"
    },
    description: {
      [Lang.EN]: "A good hideout, that's for sure. Whoever put this up certainly knew how to keep his ass well away from zombie clutches: natural camouflage, good all-round visibility, multiple exits and even a hole to hide underground if need be. The name 'C. Norris' has been written on the canvas in unicorn's tears.",
      [Lang.FR]: "Une bonne planque, c'est certain. Le type qui a monté ce camp savait comment mettre ses fesses à l'abri des zombies : camouflage naturel, bonne visibilité alentours, plusieurs issues et même un trou pour se cacher sous terre au besoin. Le nom « Shenji » est brodé dans la toile de la tente.",
      [Lang.DE]: "Dieses Zelt macht einen wirklich soliden Eindruck und war bestimmt mal ein gutes Versteck. Derjenige, der es aufgestellt hat, wusste wie man sich vor Zombies schützt. Das Zelt verfügt über ein farblich abgestimmtes Tarnnetz, mehrere Ein- und Ausgänge, sowie über ein unterirdisches Notversteck für brenzlige Situation. Bei näherem Hinsehen entdeckst du auf der Zeltplane einen eingestickten Namen: 'Shenji'",
      [Lang.ES]: "Un buen escondite. El tipo que construyó esto sabía esconder muy bien su trasero de los zombies: Camuflaje natural, buena visibilidad de los alrededores desde el interior, varias posibilidades de escape y de esconderse bajo la tierra si fuese necesario. El nombre «Shenji» está bordado en la tela."
    },
    icon: "tent",
    campingModifier: 30,
    spawnChance: 202,
    emptyChance: 0.05,
    km: {
      min: 12,
      max: 15
    },
    explorable: false,
    drops: [
      {
        item: ItemId.CHEST_CITIZEN,
        odds: 3,
      },
      {
        item: ItemId.CHEST_HERO,
        odds: 30,
      },
      {
        item: ItemId.VODKA,
        odds: 7,
      },
      {
        item: ItemId.RHUM,
        odds: 7,
      },
      {
        item: ItemId.LAMP,
        odds: 15,
      },
      {
        item: ItemId.LIGHTS,
        odds: 7,
      },
      {
        item: ItemId.BANDAGE,
        odds: 3,
      },
      {
        item: ItemId.CHEST,
        odds: 5,
      },
      {
        item: ItemId.COFFEE,
        odds: 5,
      },
      {
        item: ItemId.CHAMA_TASTY,
        odds: 2,
      },
      {
        item: ItemId.RP_LETTER,
        odds: 5,
      },
      {
        item: ItemId.HOME_BOX,
        odds: 5,
      },
      {
        item: ItemId.XANAX,
        odds: 3,
      },
      {
        item: ItemId.WATERGUN_OPT_PART,
        odds: 1,
      },
      {
        item: ItemId.CHEST_FOOD,
        odds: 15,
      },
      {
        item: ItemId.DOOR_CARPET,
        odds: 1,
      },
      {
        item: ItemId.BANNED_NOTE,
        odds: 10,
      },
      {
        item: ItemId.BAGXL,
        odds: 1,
      },
      {
        item: ItemId.LSD,
        odds: 1,
      },
      {
        item: ItemId.SHOE,
        odds: 0,
      }
    ]
  },
  [RuinId.DESTROYED_PHARMACY]: {
    id: RuinId.DESTROYED_PHARMACY,
    name: {
      [Lang.EN]: "Destroyed Pharmacy",
      [Lang.FR]: "Pharmacie détruite",
      [Lang.DE]: "Zerstörte Apotheke",
      [Lang.ES]: "Farmatodito destruido"
    },
    description: {
      [Lang.EN]: "A small local pharmacy... serving the erm... middle of the desert apparently. The unmentionable smells make you think of everything except medicines.",
      [Lang.FR]: "Une petite pharmacie de quartier... perdue au milieu du désert. Les <strong>odeurs innommables</strong> font penser à tout sauf à des médicaments.",
      [Lang.DE]: "Mitten in der Wüste entdeckst du eine kleine Stadtviertelapotheke – grotesk! Ein unbeschreibbarer Gestank liegt in der Luft und es riecht nach allem möglichen, außer nach Gesundheit.",
      [Lang.ES]: "Una pequeña farmacia de barrio perdida en medio del desierto. Los <strong>olores innombrables</strong> hacen pensar que aquí no solo habían medicamentos."
    },
    icon: "pharma",
    campingModifier: 10,
    spawnChance: 458,
    emptyChance: 0.1,
    km: {
      min: 4,
      max: 7
    },
    explorable: false,
    drops: [
      {
        item: ItemId.PHARMA,
        odds: 100,
      },
      {
        item: ItemId.DRUG,
        odds: 10,
      },
      {
        item: ItemId.CYANURE,
        odds: 10,
      },
      {
        item: ItemId.DRUG_HERO,
        odds: 4,
      },
      {
        item: ItemId.DISINFECT,
        odds: 6,
      },
      {
        item: ItemId.XANAX,
        odds: 10,
      },
      {
        item: ItemId.DRUG_RANDOM,
        odds: 3,
      },
      {
        item: ItemId.DIGGER,
        odds: 5,
      },
      {
        item: ItemId.BQUIES,
        odds: 2,
      },
      {
        item: ItemId.LSD,
        odds: 1,
      }
    ]
  },
  [RuinId.SHADY_BAR]: {
    id: RuinId.SHADY_BAR,
    name: {
      [Lang.EN]: "Shady Bar",
      [Lang.FR]: "Bar miteux",
      [Lang.DE]: "ZomBIER Bar",
      [Lang.ES]: "Bar de mala muerte"
    },
    description: {
      [Lang.EN]: "It doesn't really look like a bar anymore, but the half-buried sign in the sand and the presence of some broken glass don't leave much doubt. Most of the bottles are broken, but you can almost certainly find something useful here...",
      [Lang.FR]: "Ça ne ressemble plus vraiment à un bar, mais la présence d'une enseigne à demi enfouie dans le sable et d'un comptoir ne laisse pas trop planer le doute. La plupart des bouteilles sont <strong>cassées</strong>, mais on doit pouvoir y trouver des choses utiles...",
      [Lang.DE]: "Es sieht eigentlich nicht mehr wie eine Bar aus, aber das halb im Sand vergrabene Schild und das Vorhandensein einiger zerbrochener Optiken lassen keinen großen Zweifel aufkommen. Die meisten Flaschen sind zerbrochen, aber Sie können hier mit ziemlicher Sicherheit etwas Nützliches finden...",
      [Lang.ES]: "Lo único que indica que se trata de un bar es el panel con el logo de una cerveza y la gran cantidad de <strong>botellas rotas</strong>. Algo interesante podrías encontrar aquí..."
    },
    icon: "bar",
    campingModifier: 10,
    spawnChance: 432,
    emptyChance: 0.2,
    km: {
      min: 5,
      max: 8
    },
    explorable: false,
    drops: [
      {
        item: ItemId.VODKA,
        odds: 12,
      },
      {
        item: ItemId.RHUM,
        odds: 15,
      },
      {
        item: ItemId.MEAT,
        odds: 8,
      },
      {
        item: ItemId.DRUG,
        odds: 4,
      },
      {
        item: ItemId.PET_RAT,
        odds: 5,
      },
      {
        item: ItemId.JERRYCAN,
        odds: 3,
      },
      {
        item: ItemId.CHAIR_BASIC,
        odds: 4,
      },
      {
        item: ItemId.FOOD_BAG,
        odds: 5,
      },
      {
        item: ItemId.CAN_OPENER,
        odds: 4,
      }
    ]
  },
  [RuinId.ABANDONED_BUNKER]: {
    id: RuinId.ABANDONED_BUNKER,
    name: {
      [Lang.EN]: "Abandoned Bunker",
      [Lang.FR]: "Bunker abandonné",
      [Lang.DE]: "Verlassener Bunker",
      [Lang.ES]: "Bunker Abandonado"
    },
    description: {
      [Lang.EN]: "Bunkers are old refuges built by the military to contain the pandemic. If the soldiers at the time were still human, they would surely have advised their officers against trying to \"educate\" the first carriers of the virus.",
      [Lang.FR]: "Ce bâtiment délabré semble avoir été un bunker. Vous découvrez une entrée dans le bâtiment, une odeur de moisi vous frappe. Vous faites la grimace, mais vous pourriez presque certainement trouver quelque chose d'utile ici...",
      [Lang.DE]: "Diese heruntergekommene Gebäude scheint einmal ein Bunker gewesen zu sein. Du entdeckst einen Einstieg ins Gebäude, modriger Gestank schlägt dir entgegen. Du verziehst das Gesicht, aber hier könntest du mit ziemlicher Sicherheit etwas Nützliches finden...",
      [Lang.ES]: "Los bunkers son refugios antiguos construidos por los militares para contener la pandemia. Si los soldados en ese momento todavía fueran humanos, seguramente habrían aconsejado a sus oficiales que no trataran de \"educar\" a los primeros portadores del virus."
    },
    icon: "deserted_bunker",
    campingModifier: 10,
    spawnChance: 0,
    emptyChance: 1,
    km: {
      min: 5,
      max: 28
    },
    explorable: true,
    drops: [
      {
        item: ItemId.BBPLAN_U,
        odds: 14,
      },
      {
        item: ItemId.BBPLAN_R,
        odds: 8,
      },
      {
        item: ItemId.BBPLAN_E,
        odds: 7,
      },
      {
        item: ItemId.WATER,
        odds: 4,
      },
      {
        item: ItemId.CONCRETE_WALL,
        odds: 21,
      },
      {
        item: ItemId.WOOD_BAD,
        odds: 4,
      },
      {
        item: ItemId.KALACH_01,
        odds: 2,
      },
      {
        item: ItemId.MECA_PARTS,
        odds: 11,
      },
      {
        item: ItemId.WOOD2,
        odds: 6,
      },
      {
        item: ItemId.METAL,
        odds: 8,
      },
      {
        item: ItemId.DETO,
        odds: 1,
      },
      {
        item: ItemId.MAGNETICKEY,
        odds: 9,
      },
      {
        item: ItemId.MONEY,
        odds: 1,
      },
      {
        item: ItemId.PILE,
        odds: 2,
      },
      {
        item: ItemId.BIG_PGUN_EMPTY,
        odds: 3,
      },
      {
        item: ItemId.GUN,
        odds: 5,
      },
      {
        item: ItemId.WOOD_LOG,
        odds: 8,
      },
      {
        item: ItemId.WATER_CUP_PART,
        odds: 3,
      },
      {
        item: ItemId.METAL_BAD,
        odds: 2,
      },
      {
        item: ItemId.METAL_BEAM,
        odds: 3,
      },
      {
        item: ItemId.ELECTRO_BOX,
        odds: 1,
      },
      {
        item: ItemId.MACHINE_GUN,
        odds: 1,
      },
      {
        item: ItemId.FLARE,
        odds: 1,
      },
      {
        item: ItemId.WOOD_PLATE,
        odds: 1,
      },
      {
        item: ItemId.CONCRETE,
        odds: 4,
      },
      {
        item: ItemId.RSC_PACK_1,
        odds: 4,
      },
      {
        item: ItemId.RSC_PACK_2,
        odds: 2,
      },
      {
        item: ItemId.RSC_PACK_3,
        odds: 1,
      },
      {
        item: ItemId.WOOD_BEAM,
        odds: 1,
      },
      {
        item: ItemId.RLAUNC,
        odds: 1,
      },
      {
        item: ItemId.TAGGER,
        odds: 1,
      },
      {
        item: ItemId.BIG_PGUN,
        odds: 1,
      },
      {
        item: ItemId.BIG_PGUN_PART,
        odds: 4,
      },
      {
        item: ItemId.BUMPKEY,
        odds: 3,
      },
      {
        item: ItemId.REPAIR_KIT_PART_RAW,
        odds: 2,
      },
      {
        item: ItemId.CLASSICKEY,
        odds: 3,
      },
      {
        item: ItemId.ALARM_OFF,
        odds: 3,
      },
      {
        item: ItemId.INFECT_POISON_PART,
        odds: 10,
          event: GameEvent.Infective
      }
    ]
  },
  [RuinId.ABANDONED_HOTEL]: {
    id: RuinId.ABANDONED_HOTEL,
    name: {
      [Lang.EN]: "Abandoned Hotel",
      [Lang.FR]: "Hôtel abandonné",
      [Lang.DE]: "Verlassenes Hotel",
      [Lang.ES]: "Hotel Abandonado"
    },
    description: {
      [Lang.EN]: "Formerly luxury hotels, which no doubt welcomed some highly privileged guests over the years. However, it didn't take long for these buildings to come under attack from the two hordes, firstly the horde of immigrants from contaminated countries and secondly their putrefied pursuers.",
      [Lang.FR]: "Ce bâtiment délabré semble avoir été un hôtel. Vous découvrez une entrée dans le bâtiment, une odeur de moisi vous frappe. Vous faites la grimace, mais vous pourriez presque certainement trouver quelque chose d'utile ici...",
      [Lang.DE]: "Diese heruntergekommene Gebäude scheint einmal ein Hotel gewesen zu sein. Du entdeckst einen Einstieg ins Gebäude, modriger Gestank schlägt dir entgegen. Du verziehst das Gesicht, aber hier könntest du mit ziemlicher Sicherheit etwas Nützliches finden...",
      [Lang.ES]: "Antiguos hoteles de lujo que acogieron a los ricos en alguna época, no mucho después el edificio fue atacado por las hordas de indigentes zombies infectados en las calles."
    },
    icon: "deserted_hotel",
    campingModifier: 10,
    spawnChance: 0,
    emptyChance: 1,
    km: {
      min: 5,
      max: 28
    },
    explorable: true,
    drops: [
      {
        item: ItemId.HBPLAN_U,
        odds: 6900,
      },
      {
        item: ItemId.HBPLAN_R,
        odds: 4600,
      },
      {
        item: ItemId.HBPLAN_E,
        odds: 2300,
      },
      {
        item: ItemId.WATER,
        odds: 9000,
      },
      {
        item: ItemId.BUMPKEY,
        odds: 3000,
      },
      {
        item: ItemId.CLASSICKEY,
        odds: 3000,
      },
      {
        item: ItemId.CAN,
        odds: 6000,
      },
      {
        item: ItemId.FOOD_BAG,
        odds: 6000,
      },
      {
        item: ItemId.CHAIR_BASIC,
        odds: 3000,
      },
      {
        item: ItemId.TABLE,
        odds: 2000,
      },
      {
        item: ItemId.FOOD_BAR2,
        odds: 4000,
      },
      {
        item: ItemId.SPICES,
        odds: 3000,
      },
      {
        item: ItemId.BED,
        odds: 2000,
      },
      {
        item: ItemId.CHEST_FOOD,
        odds: 3000,
      },
      {
        item: ItemId.CONCRETE_WALL,
        odds: 3000,
      },
      {
        item: ItemId.BAG,
        odds: 3000,
      },
      {
        item: ItemId.FOOD_NOODLES,
        odds: 4000,
      },
      {
        item: ItemId.FOOD_PIMS,
        odds: 3000,
      },
      {
        item: ItemId.FOOD_BAR1,
        odds: 3000,
      },
      {
        item: ItemId.FOOD_BAR3,
        odds: 3000,
      },
      {
        item: ItemId.FOOD_CHICK,
        odds: 3000,
      },
      {
        item: ItemId.DISTRI,
        odds: 2000,
      },
      {
        item: ItemId.RLAUNC,
        odds: 2000,
      },
      {
        item: ItemId.DISH,
        odds: 3000,
      },
      {
        item: ItemId.FOOD_SANDW,
        odds: 3000,
      },
      {
        item: ItemId.BUREAU,
        odds: 2000,
      },
      {
        item: ItemId.DECO_BOX,
        odds: 4000,
      },
      {
        item: ItemId.LAMP,
        odds: 4000,
      },
      {
        item: ItemId.TEDDY_01,
        odds: 2,
      },
      {
        item: ItemId.TEDDY,
        odds: 2000,
      },
      {
        item: ItemId.CARPET,
        odds: 2000,
      },
      {
        item: ItemId.GAME_BOX,
        odds: 2000,
      },
      {
        item: ItemId.INFECT_POISON_PART,
        odds: 5000,
          event: GameEvent.Infective
      }
    ]
  },
  [RuinId.ABANDONED_HOSPITAL]: {
    id: RuinId.ABANDONED_HOSPITAL,
    name: {
      [Lang.EN]: "Abandoned Hospital",
      [Lang.FR]: "Hôpital abandonné",
      [Lang.DE]: "Verlassenes Hospital",
      [Lang.ES]: "Hospital Abandonado"
    },
    description: {
      [Lang.EN]: "This dilapidated building seems to have once been a hospital. When you discover an entrance into the building, musty stench hits you. You grimace, but here you could almost certainly find something useful...",
      [Lang.FR]: "Ce bâtiment délabré semble avoir été un hôpital. Vous découvrez une entrée dans le bâtiment, une odeur de moisi vous frappe. Vous faites la grimace, mais vous pourriez presque certainement trouver quelque chose d'utile ici...",
      [Lang.DE]: "Diese heruntergekommene Gebäude scheint einmal ein Hospital gewesen zu sein. Du entdeckst einen Einstieg ins Gebäude, modriger Gestank schlägt dir entgegen. Du verziehst das Gesicht, aber hier könntest du mit ziemlicher Sicherheit etwas Nützliches finden...",
      [Lang.ES]: "Este edificio en ruinas parece haber sido un hospital. Descubres una entrada al edificio, te golpea un olor a humedad. Haces una mueca, pero es casi seguro que encontrarás algo útil aquí..."
    },
    icon: "deserted_hospital",
    campingModifier: 10,
    spawnChance: 0,
    emptyChance: 1,
    km: {
      min: 5,
      max: 28
    },
    explorable: true,
    drops: [
      {
        item: ItemId.MBPLAN_U,
        odds: 20,
      },
      {
        item: ItemId.MBPLAN_R,
        odds: 12,
      },
      {
        item: ItemId.MBPLAN_E,
        odds: 5,
      },
      {
        item: ItemId.WATER,
        odds: 9,
      },
      {
        item: ItemId.DRUG_RANDOM,
        odds: 10,
      },
      {
        item: ItemId.OUT_DEF,
        odds: 14,
      },
      {
        item: ItemId.DRUG,
        odds: 3,
      },
      {
        item: ItemId.XANAX,
        odds: 16,
      },
      {
        item: ItemId.WATER_CAN_EMPTY,
        odds: 4,
      },
      {
        item: ItemId.MAGNETICKEY,
        odds: 9,
      },
      {
        item: ItemId.PC,
        odds: 2,
      },
      {
        item: ItemId.DRUG_WATER,
        odds: 3,
      },
      {
        item: ItemId.DISTRI,
        odds: 2,
      },
      {
        item: ItemId.DISINFECT,
        odds: 6,
      },
      {
        item: ItemId.PHARMA,
        odds: 3,
      },
      {
        item: ItemId.CHAINSAW_EMPTY,
        odds: 2,
      },
      {
        item: ItemId.BUREAU,
        odds: 1,
      },
      {
        item: ItemId.CYANURE,
        odds: 4,
      },
      {
        item: ItemId.CLASSICKEY,
        odds: 3,
      },
      {
        item: ItemId.WATER_CAN_3,
        odds: 2,
      },
      {
        item: ItemId.WATER_CAN_2,
        odds: 2,
      },
      {
        item: ItemId.WATER_CAN_1,
        odds: 3,
      },
      {
        item: ItemId.BED,
        odds: 2,
      },
      {
        item: ItemId.BUMPKEY,
        odds: 3,
      },
      {
        item: ItemId.VAGOUL,
        odds: 3,
      },
      {
        item: ItemId.INFECT_POISON_PART,
        odds: 15,
          event: GameEvent.Infective
      }
    ]
  },
  [RuinId.CROWS_FIT_GYM]: {
    id: RuinId.CROWS_FIT_GYM,
    name: {
      [Lang.EN]: "Crows'fit Gym",
      [Lang.FR]: "Le Corbeau Sportif",
      [Lang.DE]: "Die Sportkrähe",
      [Lang.ES]: "El Cuervo deportivo"
    },
    description: {
      [Lang.EN]: "The grave of former athletes...",
      [Lang.FR]: "La tombe des anciens sportifs...",
      [Lang.DE]: "Das Grab der ehemaligen Sportler...",
      [Lang.ES]: "La tumba de ex-deportistas..."
    },
    icon: "sports_crow",
    campingModifier: 0,
    spawnChance: 0,
    emptyChance: 0,
    km: {
      min: 10,
      max: 12
    },
    explorable: false,
    drops: [
      {
        item: ItemId.DRUG,
        odds: 16.7,
      },
      {
        item: ItemId.WATER,
        odds: 15.2,
      },
      {
        item: ItemId.SHOE,
        odds: 12.1,
      },
      {
        item: ItemId.METAL_BAD,
        odds: 9.1,
      },
      {
        item: ItemId.FOOD_BAG,
        odds: 5.7,
      },
      {
        item: ItemId.FLAG,
        odds: 5.7,
      },
      {
        item: ItemId.QUANTUM,
        odds: 5.7,
      },
      {
        item: ItemId.SPORT_ELEC,
        odds: 4.6,
      },
      {
        item: ItemId.PHARMA,
        odds: 4.6,
      },
      {
        item: ItemId.TASER,
        odds: 4.6,
      },
      {
        item: ItemId.BIKE_PART,
        odds: 3,
      },
      {
        item: ItemId.DRUG_HERO,
        odds: 3,
      },
      {
        item: ItemId.COFFEE,
        odds: 1.5,
      },
      {
        item: ItemId.METAL_BEAM,
        odds: 1.5,
      },
      {
        item: ItemId.POCKET_BELT,
        odds: 1.5,
      }
    ]
  },
  [RuinId.BURIED_BUILDING]: {
    id: RuinId.BURIED_BUILDING,
    name: {
      [Lang.EN]: "Buried building",
      [Lang.FR]: "Bâtiment non déterré",
      [Lang.DE]: "Verschüttete Ruine",
      [Lang.ES]: "Sector inexplotable"
    },
    description: {
      [Lang.EN]: "The zone is completely covered with <strong>rotting vegetation</strong>, <strong>sand</strong> and all manner of <strong>debris</strong>. You are certain that there is something hidden here, but the whole sector needs to be cleared before it can be searched properly...",
      [Lang.FR]: "Toute la zone est envahie par une <strong>végétation pourrissante</strong>, du <strong>sable</strong> et des <strong>débris</strong> de toutes sortes. Vous êtes sûr(e) que quelque chose se cache ici, mais il faudrait déblayer tout le secteur pour commencer les fouilles à proprement parler...",
      [Lang.DE]: "Die gesamte Zone ist von einer <strong>stinkenden Vegetation</strong>, <strong>Sand</strong> und <strong>Trümmern</strong> verschiedenster Art bedeckt. Du bist dir hunderprozentig sicher, dass hier etwas zu finden ist, allerdings muss du zuerst den gesamten Sektor aufräumen, bevor du mit dem Graben anfangen kannst...",
      [Lang.ES]: "Toda la zona está cubierta por una <strong>vegetación putrefacta</strong>, con <strong>arena</strong> y <strong>chatarra</strong> de todo tipo. Estás seguro de que algo se esconde aquí, pero habría que despejar todo el terreno para empezar una verdadera búsqueda..."
    },
    icon: "",
    campingModifier: 0,
    spawnChance: 0,
    emptyChance: 0,
    km: {
      min: 1,
      max: 28
    },
    explorable: false,
    drops: [
      
    ]
  }
};