import { Picto, PictoId } from './types';

export const pictos: Readonly<Record<PictoId, Picto>> = {
  [PictoId.HEROAC]: {
    id: PictoId.HEROAC,
    numericalId: 1,
    name: {
      [Lang.EN]: "Heroic Actions",
      [Lang.FR]: "Actions héroïques",
      [Lang.DE]: "Heldentaten",
      [Lang.ES]: "Acciones heroicas"
    },
    description: {
      [Lang.EN]: "Number of truly extraordinary things you've done.",
      [Lang.FR]: "Nombre de choses vraiment hors du commun que vous avez faites.",
      [Lang.DE]: "Anzahl deiner wirklich außergewöhnlichen Heldentaten.",
      [Lang.ES]: "Cantidad de acciones extraordinarias que has realizado."
    },
    icon: "r_heroac",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 15,
        points: 3.5
      },
      {
        quantity: 30,
        points: 6.5
      },
      {
        quantity: 50
      },
      {
        quantity: 70
      },
      {
        quantity: 90
      },
      {
        quantity: 120
      },
      {
        quantity: 150
      },
      {
        quantity: 200
      },
      {
        quantity: 500
      },
      {
        quantity: 850
      },
      {
        quantity: 1000
      }
    ]
  },
  [PictoId.ALCOOL]: {
    id: PictoId.ALCOOL,
    numericalId: 2,
    name: {
      [Lang.EN]: "Alcohol",
      [Lang.FR]: "Alcools",
      [Lang.DE]: "Alkohol",
      [Lang.ES]: "Alcoholes"
    },
    description: {
      [Lang.EN]: "The number of litres of home-made alcoholic substances you have consumed.",
      [Lang.FR]: "Litres de substances alcoolisées artisanales que vous avez avalés.",
      [Lang.DE]: "Anzahl der Liter selbstgebrannten Alkohols, den du gesoffen hast.",
      [Lang.ES]: "Litros de bebidas alcohólicas artesanales que has ingerido."
    },
    icon: "r_alcool",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 30
      },
      {
        quantity: 60
      },
      {
        quantity: 150
      },
      {
        quantity: 300
      },
      {
        quantity: 400
      },
      {
        quantity: 500
      },
      {
        quantity: 600
      },
      {
        quantity: 800
      }
    ]
  },
  [PictoId.HOMEUP]: {
    id: PictoId.HOMEUP,
    numericalId: 3,
    name: {
      [Lang.EN]: "Home Improvements",
      [Lang.FR]: "Améliora­tions de maison",
      [Lang.DE]: "Hausverbesserung",
      [Lang.ES]: "Mejoras en casa"
    },
    description: {
      [Lang.EN]: "Number of upgrades you have made to your place (improvements).",
      [Lang.FR]: "Nombre d’améliorations générales apportées à votre maison.",
      [Lang.DE]: "Anzahl der Verbesserungen und Ausbauten, die du an deinem eigenem Haus vorgenommen hast.",
      [Lang.ES]: "Cantidad de mejoras hechas a tu vivienda."
    },
    icon: "r_homeup",
    community: false,
    rare: false
  },
  [PictoId.REFINE]: {
    id: PictoId.REFINE,
    numericalId: 4,
    name: {
      [Lang.EN]: "Craftsman",
      [Lang.FR]: "Artisanat",
      [Lang.DE]: "Handwerk",
      [Lang.ES]: "Artesano"
    },
    description: {
      [Lang.EN]: "The number of objects you have assembled or dismantled at the workshop.",
      [Lang.FR]: "Nombre de petits objets bricolés ou démolis à l’atelier.",
      [Lang.DE]: "Anzahl der Gegenstände, die du in der Werkstatt zusammengebaut oder zerstört hast.",
      [Lang.ES]: "Cantidad de cachivaches armados o destruidos en el taller."
    },
    icon: "r_refine",
    community: false,
    rare: false
  },
  [PictoId.CWATER]: {
    id: PictoId.CWATER,
    numericalId: 5,
    name: {
      [Lang.EN]: "Sprinkler",
      [Lang.FR]: "Arroseur",
      [Lang.DE]: "Leichenwäscher",
      [Lang.ES]: "Mojador de muertos"
    },
    description: {
      [Lang.EN]: "The number of ceremonial showers given to corpses of citizens to ensure their non-return.",
      [Lang.FR]: "Cérémonies d’arrosage pratiquées sur des cadavres de citoyens.",
      [Lang.DE]: "Anzahl der Leichenwaschzeremonien, die du mit den Körpern deiner verstorbenen Mitbürger durchgeführt hast.",
      [Lang.ES]: "Veces que has regado con agua los cadáveres del pueblo."
    },
    icon: "r_cwater",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 50
      },
      {
        quantity: 100
      },
      {
        quantity: 200
      }
    ]
  },
  [PictoId.SOLBAN]: {
    id: PictoId.SOLBAN,
    numericalId: 6,
    name: {
      [Lang.EN]: "Emancipation of the Shunned",
      [Lang.FR]: "Banni émancipé",
      [Lang.DE]: "Autarker Verbannter",
      [Lang.ES]: "Desterrado emancipado"
    },
    description: {
      [Lang.EN]: "The number of lucky finds you have stumbled across while rummaging in the town's garbage.",
      [Lang.FR]: "Nombre d’objets de fortune confectionnés à partir de débris trouvés dans les poubelles de la ville. Il faut être banni(e) pour recevoir cette distinction.",
      [Lang.DE]: "Anzahl der brauchbaren Gegenstände, die du in der Mülldeponie vor der Stadt gefunden hast. Nur Verbannte können diese Auszeichnung erhalten.",
      [Lang.ES]: "Cantidad de objetos de fortuna fabricado con desechos encontrados en la basura del pueblo. Solo los desterrados pueden recibir este reconocimiento."
    },
    icon: "r_solban",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 20
      },
      {
        quantity: 100
      },
      {
        quantity: 200
      },
      {
        quantity: 300
      },
      {
        quantity: 400
      },
      {
        quantity: 550
      },
      {
        quantity: 700
      },
      {
        quantity: 1000
      }
    ]
  },
  [PictoId.BAN]: {
    id: PictoId.BAN,
    numericalId: 7,
    name: {
      [Lang.EN]: "Banishments",
      [Lang.FR]: "Bannisse­ments",
      [Lang.DE]: "Verbannungen",
      [Lang.ES]: "Destierros"
    },
    description: {
      [Lang.EN]: "The number of times you have been run out of town by a lynch mob.",
      [Lang.FR]: "Nombre d’exclusions définitives de la communauté.",
      [Lang.DE]: "Anzahl der Stadtverbannungen.",
      [Lang.ES]: "Cantidad de veces que fuiste expulsado de la comunidad."
    },
    icon: "r_ban",
    community: false,
    rare: false
  },
  [PictoId.WOUND]: {
    id: PictoId.WOUND,
    numericalId: 8,
    name: {
      [Lang.EN]: "Injuries",
      [Lang.FR]: "Blessures",
      [Lang.DE]: "Schwere Verletzungen",
      [Lang.ES]: "Magulladuras"
    },
    description: {
      [Lang.EN]: "Number of mutilations or dismemberments which didn't quite cost your life.",
      [Lang.FR]: "Nombre de mutilations ou démembrements qui ne vous ont pas coûté la vie.",
      [Lang.DE]: "Anzahl der Verstümmelungen und Gliedabtrennungen, die dich das Leben gekostet haben.",
      [Lang.ES]: "Cantidad de mutilaciones o desarticulaciones que no te quitaron la vida."
    },
    icon: "r_wound",
    community: false,
    rare: false
  },
  [PictoId.COOKR]: {
    id: PictoId.COOKR,
    numericalId: 9,
    name: {
      [Lang.EN]: "Tasty Dishes",
      [Lang.FR]: "Bons p’tits plats",
      [Lang.DE]: "Hausmannskost",
      [Lang.ES]: "Delicias"
    },
    description: {
      [Lang.EN]: "The number of delicious meals you have prepaired from dubious ingredients.",
      [Lang.FR]: "Délicieux mets que vous avez concoctés avec des ingrédients douteux.",
      [Lang.DE]: "Anzahl köstlicher Speisen, die du in der Küche gezaubert hast.",
      [Lang.ES]: "Platillos preparados con ingredientes de procedencia dudosa."
    },
    icon: "r_cookr",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 10,
        points: 3.5
      },
      {
        quantity: 25,
        points: 6.5
      },
      {
        quantity: 50
      },
      {
        quantity: 100
      },
      {
        quantity: 250
      },
      {
        quantity: 500
      },
      {
        quantity: 1000
      },
      {
        quantity: 2000
      }
    ]
  },
  [PictoId.ANIMAL]: {
    id: PictoId.ANIMAL,
    numericalId: 10,
    name: {
      [Lang.EN]: "Butcher",
      [Lang.FR]: "Boucherie",
      [Lang.DE]: "Metzger",
      [Lang.ES]: "Carnicería"
    },
    description: {
      [Lang.EN]: "The number of animals you have exterminated (by hand, with a mixer, with a saniflow macerator...).",
      [Lang.FR]: "Nombre d’animaux que vous avez exterminés (à la main, au mixer, au sani-broyeur…).",
      [Lang.DE]: "Anzahl der Tiere, die du umgebracht hast (mit deinen Händen, im Mixer, in der Fäkalienhebeanlage...).",
      [Lang.ES]: "Cantidad de animales que has exterminado (con las manos, con un machete, con una batidora...)"
    },
    icon: "r_animal",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 30,
        points: 3.5
      },
      {
        quantity: 60,
        points: 6.5
      },
      {
        quantity: 150
      },
      {
        quantity: 300
      }
    ]
  },
  [PictoId.CMPLST]: {
    id: PictoId.CMPLST,
    numericalId: 11,
    name: {
      [Lang.EN]: "Zen Camper",
      [Lang.FR]: "Campeur de l’au-delà",
      [Lang.DE]: "Camper im Jenseits",
      [Lang.ES]: "Campista del Más Allá"
    },
    description: {
      [Lang.EN]: "Number of nights survived after the town has been devastated!",
      [Lang.FR]: "Nombre de nuits survécues tandis que la ville était dévastée !",
      [Lang.DE]: "Anzahl der Nächte, die du draußen überlebt hast als die Stadt schon zerstört war!",
      [Lang.ES]: "Cantidad de noches sobrevividas mientras que el pueblo estaba devastado."
    },
    icon: "r_cmplst",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 10,
        points: 3.5
      },
      {
        quantity: 25,
        points: 6.5
      },
      {
        quantity: 50
      },
      {
        quantity: 100
      },
      {
        quantity: 150
      },
      {
        quantity: 200
      }
    ]
  },
  [PictoId.CAMP]: {
    id: PictoId.CAMP,
    numericalId: 12,
    name: {
      [Lang.EN]: "Daredevil Camper",
      [Lang.FR]: "Campeur téméraire",
      [Lang.DE]: "Mutiger Camper",
      [Lang.ES]: "Campista temerario"
    },
    description: {
      [Lang.EN]: "The number of nights you have spent in the World Beyond... and survived!",
      [Lang.FR]: "Nombre de nuits passées dehors et auxquelles vous avez survécu.",
      [Lang.DE]: "Anzahl der Nächte, die du draußen geschlafen und überlebt hast.",
      [Lang.ES]: "Cantidad de noches pasadas fuera del pueblo y que has sobrevivido."
    },
    icon: "r_camp",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 10,
        points: 3.5
      },
      {
        quantity: 25,
        points: 6.5
      },
      {
        quantity: 50
      },
      {
        quantity: 75
      },
      {
        quantity: 100
      },
      {
        quantity: 150
      },
      {
        quantity: 200
      },
      {
        quantity: 250
      },
      {
        quantity: 300
      },
      {
        quantity: 350
      }
    ]
  },
  [PictoId.CANNIB]: {
    id: PictoId.CANNIB,
    numericalId: 13,
    name: {
      [Lang.EN]: "Cannibalism",
      [Lang.FR]: "Cannibalisme",
      [Lang.DE]: "Kannibalismus",
      [Lang.ES]: "Canibalismo"
    },
    description: {
      [Lang.EN]: "Number of times you have dined on human flesh...",
      [Lang.FR]: "Nombre de repas à base de viande humaine…",
      [Lang.DE]: "Die Anzahl der Kilos an Menschenfleisch, die von dir verzehrt wurden...",
      [Lang.ES]: "Cantidad de veces que tragaste carne humana..."
    },
    icon: "r_cannib",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 10,
        points: 3.5
      },
      {
        quantity: 40,
        points: 6.5
      },
      {
        quantity: 80
      },
      {
        quantity: 120
      },
      {
        quantity: 180
      },
      {
        quantity: 250
      },
      {
        quantity: 500
      },
      {
        quantity: 1000
      }
    ]
  },
  [PictoId.WATGUN]: {
    id: PictoId.WATGUN,
    numericalId: 14,
    name: {
      [Lang.EN]: "Water Guns",
      [Lang.FR]: "Canons à eau",
      [Lang.DE]: "Wasserkanonen",
      [Lang.ES]: "Cañones de agua"
    },
    description: {
      [Lang.EN]: "The number of water-based toys you have built.",
      [Lang.FR]: "Nombre de gros jouets à base d’eau que vous avez fabriqués.",
      [Lang.DE]: "Anzahl an großen Wasserwaffen, die du gebaut hast.",
      [Lang.ES]: "Cantidad de grandes juguetes de agua que has fabricado."
    },
    icon: "r_watgun",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 10
      },
      {
        quantity: 25
      },
      {
        quantity: 35
      },
      {
        quantity: 60
      }
    ]
  },
  [PictoId.CHSTXL]: {
    id: PictoId.CHSTXL,
    numericalId: 15,
    name: {
      [Lang.EN]: "Luck",
      [Lang.FR]: "Chanceux",
      [Lang.DE]: "Glückspilz",
      [Lang.ES]: "Suertudo"
    },
    description: {
      [Lang.EN]: "Number of large metal chests you have uncovered during your searches.",
      [Lang.FR]: "Nombre de gros coffres en métal que vous avez dégotés lors de vos fouilles.",
      [Lang.DE]: "Anzahl der großen Metallkoffer, die du in der Außenwelt ausgegraben hast.",
      [Lang.ES]: "Cantidad de grandes cofres de metal que has encontrado durante tus búsquedas."
    },
    icon: "r_chstxl",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 5,
        points: 3.5
      },
      {
        quantity: 10,
        points: 6.5
      },
      {
        quantity: 15
      },
      {
        quantity: 20
      },
      {
        quantity: 30
      },
      {
        quantity: 50
      }
    ]
  },
  [PictoId.BUILDR]: {
    id: PictoId.BUILDR,
    numericalId: 16,
    name: {
      [Lang.EN]: "Constructions",
      [Lang.FR]: "Chantiers",
      [Lang.DE]: "Baustellen",
      [Lang.ES]: "Construcciones"
    },
    description: {
      [Lang.EN]: "The number of action / construction points you have invested in the construction projects in town.",
      [Lang.FR]: "Points d’action et/ou de chantier investis dans l’avancement d’un chantier en ville.",
      [Lang.DE]: "Anzahl der Aktionspunkte, die du für den Bau neuer Kontruktionen und Stadtgebäude verwendet hast.",
      [Lang.ES]: "Puntos de acción o de construcción invertidos en el avance de una obra en el pueblo."
    },
    icon: "r_buildr",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 100,
        points: 3.5
      },
      {
        quantity: 200,
        points: 6.5
      },
      {
        quantity: 400
      },
      {
        quantity: 700
      },
      {
        quantity: 1300
      },
      {
        quantity: 2000
      },
      {
        quantity: 3000
      },
      {
        quantity: 4000
      },
      {
        quantity: 5000
      },
      {
        quantity: 6000
      },
      {
        quantity: 8000
      },
      {
        quantity: 10000
      }
    ]
  },
  [PictoId.NODRUG]: {
    id: PictoId.NODRUG,
    numericalId: 17,
    name: {
      [Lang.EN]: "Clean",
      [Lang.FR]: "Clair(e)",
      [Lang.DE]: "Clean",
      [Lang.ES]: "Limpio"
    },
    description: {
      [Lang.EN]: "Your capacity to stay clean (take no drugs) during a lifetime.",
      [Lang.FR]: "Capacité à rester Clair(e) (aucune drogue consommée) au cours de toute une vie.",
      [Lang.DE]: "Anzahl der Punkte, die du erworben hast, indem du in einer Stadt komplett clean geblieben bist.",
      [Lang.ES]: "Capacidad de rechazar el consumo de todo estimulante en tu vida."
    },
    icon: "r_nodrug",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 20,
        points: 3.5
      },
      {
        quantity: 75,
        points: 6.5
      },
      {
        quantity: 150
      },
      {
        quantity: 500
      },
      {
        quantity: 1000
      }
    ]
  },
  [PictoId.COLLEC]: {
    id: PictoId.COLLEC,
    numericalId: 18,
    name: {
      [Lang.EN]: "Soul Purificator",
      [Lang.FR]: "Purificateur d’âmes",
      [Lang.DE]: "Seelenreiniger",
      [Lang.ES]: "Purificador de almas"
    },
    description: {
      [Lang.EN]: "The number of dead citizens' souls you purified.",
      [Lang.FR]: "Nombre d’âmes de citoyens décédés que vous avez purifiées.",
      [Lang.DE]: "Anzahl der Seelen verstorbener Bürger, die Sie gereinigt haben.",
      [Lang.ES]: "Cantidad de almas recolectadas que has purificado."
    },
    icon: "r_collec",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 2
      },
      {
        quantity: 10
      },
      {
        quantity: 20
      },
      {
        quantity: 30
      },
      {
        quantity: 50
      },
      {
        quantity: 80
      },
      {
        quantity: 120
      },
      {
        quantity: 180
      },
      {
        quantity: 300
      }
    ]
  },
  [PictoId.WRESTL]: {
    id: PictoId.WRESTL,
    numericalId: 19,
    name: {
      [Lang.EN]: "Fights of despair",
      [Lang.FR]: "Combats désespérés",
      [Lang.DE]: "Kämpfe um Leben und Tod",
      [Lang.ES]: "Combates mortales"
    },
    description: {
      [Lang.EN]: "The number of zombies you have killed with your bare hands, using no weapons or special abilities. Wow!",
      [Lang.FR]: "Zombies éliminés de vos propres mains, sans arme ni capacité spéciale. Wahou.",
      [Lang.DE]: "Anzahl der Zombies, die du mit den bloßen Händen umgebracht hast. Wow!",
      [Lang.ES]: "Zombies que mataste con tus propias manos, sin armas ni competencias especiales. ¡Eso macho!"
    },
    icon: "r_wrestl",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 20
      },
      {
        quantity: 100
      },
      {
        quantity: 200
      },
      {
        quantity: 400
      },
      {
        quantity: 600
      }
    ]
  },
  [PictoId.EBUILD]: {
    id: PictoId.EBUILD,
    numericalId: 20,
    name: {
      [Lang.EN]: "Wonder Constructions",
      [Lang.FR]: "Construction de Merveilles",
      [Lang.DE]: "Wunderwerke",
      [Lang.ES]: "Construcción de Maravillas"
    },
    description: {
      [Lang.EN]: "The number of wonders you have constructed.",
      [Lang.FR]: "Nombre de Merveilles que vous avez réussi à construire.",
      [Lang.DE]: "Anzahl der Wunderwerke, an deren Bau du mitgewirkt hast.",
      [Lang.ES]: "Cantidad de maravillas que has logrado construir."
    },
    icon: "r_ebuild",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1,
        points: 3.5
      },
      {
        quantity: 3,
        points: 6.5
      },
      {
        quantity: 7
      },
      {
        quantity: 10
      },
      {
        quantity: 15
      },
      {
        quantity: 20
      },
      {
        quantity: 30
      },
      {
        quantity: 40
      },
      {
        quantity: 50
      },
      {
        quantity: 60
      },
      {
        quantity: 80
      },
      {
        quantity: 100
      },
      {
        quantity: 120
      },
      {
        quantity: 150
      },
      {
        quantity: 200
      }
    ]
  },
  [PictoId.COOKED]: {
    id: PictoId.COOKED,
    numericalId: 21,
    name: {
      [Lang.EN]: "Extreme BBQ Chef",
      [Lang.FR]: "Cuisine exotique",
      [Lang.DE]: "Grillmeister",
      [Lang.ES]: "Cocina exótica"
    },
    description: {
      [Lang.EN]: "The number of former friends and fellow residents you have cooked and eaten.",
      [Lang.FR]: "Anciens amis que vous avez cuisinés au Crémato-Cue.",
      [Lang.DE]: "Anzahl deiner Alten Freunde, die du im Kremato-Cue gegrillt hast.",
      [Lang.ES]: "Viejos amigos a los que has cocinado en el Cremato-bar."
    },
    icon: "r_cooked",
    community: false,
    rare: false
  },
  [PictoId.DIGGER]: {
    id: PictoId.DIGGER,
    numericalId: 22,
    name: {
      [Lang.EN]: "Excavations",
      [Lang.FR]: "Déblaiement",
      [Lang.DE]: "Ausgrabungsarbeiten",
      [Lang.ES]: "Desmonte"
    },
    description: {
      [Lang.EN]: "The number of action points you have invested in excavating ruins in the World Beyond.",
      [Lang.FR]: "Points d’action investis dans le déblaiement d’un bâtiment dans l’Outre-Monde.",
      [Lang.DE]: "Anzahl der Aktionspunkte, die du verbraucht hast, um eine Gebäuderuine in der Außenwelt freizulegen.",
      [Lang.ES]: "Puntos de acción invertidos en despejar un edificio en el Ultramundo."
    },
    icon: "r_digger",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 50,
        points: 3.5
      },
      {
        quantity: 300,
        points: 6.5
      },
      {
        quantity: 750
      },
      {
        quantity: 1000
      },
      {
        quantity: 1500
      }
    ]
  },
  [PictoId.DECO]: {
    id: PictoId.DECO,
    numericalId: 23,
    name: {
      [Lang.EN]: "Decoration",
      [Lang.FR]: "Décoration",
      [Lang.DE]: "Hauseinrichtung",
      [Lang.ES]: "Decoración"
    },
    description: {
      [Lang.EN]: "The number of decoration points you have taken the trouble to add to your dwelling place.",
      [Lang.FR]: "Nombre de points de décoration que vous avez pris la peine d’ajouter à votre habitat.",
      [Lang.DE]: "Anzahl der Punkte, die du durch sinnlose Einrichtungsverschönerungen gewonnen hast.",
      [Lang.ES]: "Cantidad de puntos de decoración que has agregado a tu hogar."
    },
    icon: "r_deco",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 100,
        points: 3.5
      },
      {
        quantity: 250,
        points: 6.5
      },
      {
        quantity: 500
      },
      {
        quantity: 1000
      },
      {
        quantity: 1500
      },
      {
        quantity: 2000
      },
      {
        quantity: 2500
      }
    ]
  },
  [PictoId.SURGRP]: {
    id: PictoId.SURGRP,
    numericalId: 24,
    name: {
      [Lang.EN]: "Last line of defence",
      [Lang.FR]: "Dernière ligne",
      [Lang.DE]: "Letzte Verteidigungslinie",
      [Lang.ES]: "Última línea"
    },
    description: {
      [Lang.EN]: "You were one of the last people to see the Hordes descend on the town...",
      [Lang.FR]: "Vous faites partie des derniers à avoir vu les Hordes déferler sur la ville…",
      [Lang.DE]: "Du gehörst zu den letzten Bürgern der Stadt, die die Zombiehorde 'empfangen' hat...",
      [Lang.ES]: "Fuiste uno de los últimos en ver las hordas de zombies invadir el pueblo."
    },
    icon: "r_surgrp",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 5
      },
      {
        quantity: 10
      },
      {
        quantity: 20
      },
      {
        quantity: 30
      },
      {
        quantity: 40
      },
      {
        quantity: 60
      },
      {
        quantity: 100
      },
      {
        quantity: 150
      }
    ]
  },
  [PictoId.DRUG]: {
    id: PictoId.DRUG,
    numericalId: 25,
    name: {
      [Lang.EN]: "Drugs",
      [Lang.FR]: "Drogues",
      [Lang.DE]: "Drogen",
      [Lang.ES]: "Estimulantes"
    },
    description: {
      [Lang.EN]: "The number of funny little pills you have swallowed (or hidden elsewhere...)..",
      [Lang.FR]: "Nombre de petits cachets rigolos que vous avez avalés (ou placés ailleurs…).",
      [Lang.DE]: "Anzahl kleiner lustiger Pillen, die du geschluckt oder sonstwie eingenommen hast.",
      [Lang.ES]: "Cantidad de pequeñas pildoritas de colores que has tragado (o colocado en otra parte...)"
    },
    icon: "r_drug",
    community: false,
    rare: false
  },
  [PictoId.COBAYE]: {
    id: PictoId.COBAYE,
    numericalId: 26,
    name: {
      [Lang.EN]: "Drug Tests",
      [Lang.FR]: "Expérimen­tations",
      [Lang.DE]: "Drogenerfahrungen",
      [Lang.ES]: "Experimentaciones"
    },
    description: {
      [Lang.EN]: "The number of times you have tested dangerous drugs... on yourself.",
      [Lang.FR]: "Drogues aux effets dangereux que vous avez avalées.",
      [Lang.DE]: "Anzahl der gefährlichen Drogen, die du genommen hast.",
      [Lang.ES]: "Estimulantes con efectos peligrosos que has probado."
    },
    icon: "r_cobaye",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 50
      },
      {
        quantity: 100
      },
      {
        quantity: 150
      },
      {
        quantity: 200
      },
      {
        quantity: 250
      }
    ]
  },
  [PictoId.RUINE]: {
    id: PictoId.RUINE,
    numericalId: 27,
    name: {
      [Lang.EN]: "Ruin Explorations",
      [Lang.FR]: "Exploration de ruine",
      [Lang.DE]: "Gebäude erkunden",
      [Lang.ES]: "Exploración de ruinas"
    },
    description: {
      [Lang.EN]: "The number of times you've dared to go inside an abandoned ruin.",
      [Lang.FR]: "Nombre de fois où vous avez osé pénétrer dans une ruine abandonnée.",
      [Lang.DE]: "Anzahl der verlassenen Gebäude, die du untersucht hast.",
      [Lang.ES]: "Cantidad de veces que has osado entrar en una ruina abandonada"
    },
    icon: "r_ruine",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 5,
        points: 3.5
      },
      {
        quantity: 10,
        points: 6.5
      },
      {
        quantity: 20
      },
      {
        quantity: 50
      },
      {
        quantity: 100
      },
      {
        quantity: 150
      },
      {
        quantity: 200
      },
      {
        quantity: 250
      },
      {
        quantity: 400
      }
    ]
  },
  [PictoId.EXPLOR]: {
    id: PictoId.EXPLOR,
    numericalId: 28,
    name: {
      [Lang.EN]: "Distant Discoveries",
      [Lang.FR]: "Explorations avancées",
      [Lang.DE]: "Komplexe Expeditionen",
      [Lang.ES]: "Exploraciones avanzadas"
    },
    description: {
      [Lang.EN]: "Number of buildings you have explored in far-flung zones.",
      [Lang.FR]: "Nombre de bâtiments dans des zones éloignées que vous avez explorés.",
      [Lang.DE]: "Anzahl der entfernten Gebäude, die von dir erkundet wurden.",
      [Lang.ES]: "Cantidad de edificios en zonas alejadas que has explorado."
    },
    icon: "r_explor",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 15,
        points: 3.5
      },
      {
        quantity: 30,
        points: 6.5
      },
      {
        quantity: 70
      },
      {
        quantity: 150
      },
      {
        quantity: 200
      },
      {
        quantity: 250
      },
      {
        quantity: 300
      },
      {
        quantity: 350
      },
      {
        quantity: 400
      }
    ]
  },
  [PictoId.EXPLO2]: {
    id: PictoId.EXPLO2,
    numericalId: 29,
    name: {
      [Lang.EN]: "Expert Expeditions",
      [Lang.FR]: "Explorations très lointaines",
      [Lang.DE]: "Expertenexpeditionen",
      [Lang.ES]: "Exploraciones muy lejanas"
    },
    description: {
      [Lang.EN]: "Number of buildings explored in EXTREMELY far away places.",
      [Lang.FR]: "Nombre de bâtiments dans des zones vraiment très éloignées que vous avez explorés.",
      [Lang.DE]: "Anzahl SEHR WEIT entfernter Gebäude, die von dir erkundet wurden.",
      [Lang.ES]: "Cantidad de edificios que has explorado en zonas REALMENTE muy alejadas."
    },
    icon: "r_explo2",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 5,
        points: 3.5
      },
      {
        quantity: 15,
        points: 6.5
      },
      {
        quantity: 30
      },
      {
        quantity: 70
      },
      {
        quantity: 150
      },
      {
        quantity: 300
      }
    ]
  },
  [PictoId.SHARE]: {
    id: PictoId.SHARE,
    numericalId: 30,
    name: {
      [Lang.EN]: "Generosity",
      [Lang.FR]: "Générosité",
      [Lang.DE]: "Großzügigkeit",
      [Lang.ES]: "Generosidad"
    },
    description: {
      [Lang.EN]: "The number of Hero days/Heroic actions that you have given to another citizen in need.",
      [Lang.FR]: "Nombre de journées de mode héros/actions héroïques que vous avez offertes à un autre citoyen dans le besoin.",
      [Lang.DE]: "Anzahl der Heldentage, die du einem anderem Bürger in Not geschenkt hast.",
      [Lang.ES]: "Cantidad de días de Modo Héroe/Acciones Heroicas que regalaste a otro habitante necesitado."
    },
    icon: "r_share",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 10
      },
      {
        quantity: 25
      },
      {
        quantity: 50
      },
      {
        quantity: 100
      },
      {
        quantity: 150
      },
      {
        quantity: 250
      },
      {
        quantity: 400
      }
    ]
  },
  [PictoId.GUIDE]: {
    id: PictoId.GUIDE,
    numericalId: 31,
    name: {
      [Lang.EN]: "Spiritual Guide",
      [Lang.FR]: "Guide spirituel",
      [Lang.DE]: "Spiritueller Führer",
      [Lang.ES]: "Guía Espiritual"
    },
    description: {
      [Lang.EN]: "The number of days spent shepherding the noobs through the valleys of small maps and finding lost children.",
      [Lang.FR]: "Jours passés en tant que guide pour les noobs en Région non éloignée.",
      [Lang.DE]: "Anzahl der Tage, die du als Führer von Anfängern in den kleinen Regionen verbracht hast.",
      [Lang.ES]: "Días pasados como guía en las regiones amateur."
    },
    icon: "r_guide",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 300,
        points: 3.5
      },
      {
        quantity: 1000,
        points: 6.5
      },
      {
        quantity: 2500
      },
      {
        quantity: 5000
      },
      {
        quantity: 8000
      },
      {
        quantity: 15000
      },
      {
        quantity: 30000
      }
    ]
  },
  [PictoId.DRGMKR]: {
    id: PictoId.DRGMKR,
    numericalId: 32,
    name: {
      [Lang.EN]: "Lab Rat",
      [Lang.FR]: "Laborantin",
      [Lang.DE]: "Laborant",
      [Lang.ES]: "Laboratorio"
    },
    description: {
      [Lang.EN]: "The number of little pills created in your personal laboratory.",
      [Lang.FR]: "Cachets de Twinoïde produits dans votre Laboratoire personnel.",
      [Lang.DE]: "Anzahl der kleinen bunten Pillen aus deinem privaten Hobbylabor.",
      [Lang.ES]: "Pastillas de Twinoid elaboradas en tu laboratorio personal."
    },
    icon: "r_drgmkr",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 10,
        points: 3.5
      },
      {
        quantity: 25,
        points: 6.5
      },
      {
        quantity: 50
      },
      {
        quantity: 100
      },
      {
        quantity: 250
      },
      {
        quantity: 500
      },
      {
        quantity: 1000
      },
      {
        quantity: 2000
      }
    ]
  },
  [PictoId.THEFT]: {
    id: PictoId.THEFT,
    numericalId: 33,
    name: {
      [Lang.EN]: "Thefts",
      [Lang.FR]: "Larcins",
      [Lang.DE]: "Diebstähle",
      [Lang.ES]: "Hurtos"
    },
    description: {
      [Lang.EN]: "Number of objects you have stole from your fellow residents (alive).",
      [Lang.FR]: "Nombre d’objets volés chez vos voisins (en vie).",
      [Lang.DE]: "Anzahl der Gegenstände, die du bei deinen (lebenden) Nachbarn geklaut hast.",
      [Lang.ES]: "Cantidad de objetos robados a tus vecinos (en vida)."
    },
    icon: "r_theft",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 10,
        points: 3.5
      },
      {
        quantity: 30,
        points: 6.5
      },
      {
        quantity: 40
      },
      {
        quantity: 50
      },
      {
        quantity: 75
      },
      {
        quantity: 100
      },
      {
        quantity: 500
      },
      {
        quantity: 1000
      },
      {
        quantity: 2000
      }
    ]
  },
  [PictoId.BROKEN]: {
    id: PictoId.BROKEN,
    numericalId: 34,
    name: {
      [Lang.EN]: "Breakages",
      [Lang.FR]: "Maladresses",
      [Lang.DE]: "Schusseligkeiten",
      [Lang.ES]: "Torpezas"
    },
    description: {
      [Lang.EN]: "Number of objects you have broken through your own clumsiness.",
      [Lang.FR]: "Nombre d’objets que vous avez cassés au cours de vos expériences maladroites.",
      [Lang.DE]: "Anzahl der Gegenstände, die du durch seine Tollpatschigkeit kaputt gemacht hast.",
      [Lang.ES]: "Cantidad de objetos que has roto en tus experiencias fallidas."
    },
    icon: "r_broken",
    community: false,
    rare: false
  },
  [PictoId.MASO]: {
    id: PictoId.MASO,
    numericalId: 35,
    name: {
      [Lang.EN]: "Masochism",
      [Lang.FR]: "Masochisme",
      [Lang.DE]: "Masochismus",
      [Lang.ES]: "Masoquismo"
    },
    description: {
      [Lang.EN]: "The number of joyous moments in all this suffering.",
      [Lang.FR]: "Moments de bonheur dans la souffrance la plus totale.",
      [Lang.DE]: "Anzahl der Glücksmomente, die du glücklich oder schmerzgeplagt genossen hast.",
      [Lang.ES]: "Momentos de felicidad en el sufrimiento más profundo."
    },
    icon: "r_maso",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 20,
        points: 3.5
      },
      {
        quantity: 40,
        points: 6.5
      },
      {
        quantity: 60
      },
      {
        quantity: 100
      }
    ]
  },
  [PictoId.BGUM]: {
    id: PictoId.BGUM,
    numericalId: 36,
    name: {
      [Lang.EN]: "Community Awards",
      [Lang.FR]: "Médailles communau­­taires",
      [Lang.DE]: "Event-Auszeichnungen",
      [Lang.ES]: "Reconocimiento de la Comunidad"
    },
    description: {
      [Lang.EN]: "Rewards earned through working with the community.",
      [Lang.FR]: "Récompenses obtenues dans le cadre d’animations communautaires.",
      [Lang.DE]: "Auszeichnung für die Teilnahme an Events bei 'Die Verdammten'.",
      [Lang.ES]: "Recompensa obtenida por trabajar con la comunidad."
    },
    icon: "r_bgum",
    community: true,
    rare: true,
    titles: [
      {
        quantity: 1
      },
      {
        quantity: 5
      },
      {
        quantity: 10
      },
      {
        quantity: 15
      },
      {
        quantity: 20
      },
      {
        quantity: 30
      },
      {
        quantity: 50
      },
      {
        quantity: 100
      },
      {
        quantity: 150
      }
    ]
  },
  [PictoId.EBCSTL]: {
    id: PictoId.EBCSTL,
    numericalId: 37,
    name: {
      [Lang.EN]: "Wonder: Sandcastle",
      [Lang.FR]: "Merveille : Château de sable",
      [Lang.DE]: "Wunderwerk: Sandschloss",
      [Lang.ES]: "Maravilla: Castillo de arena"
    },
    description: {
      [Lang.EN]: "You really built that?",
      [Lang.FR]: "Vous avez vraiment construit ça ?",
      [Lang.DE]: "Das hast du nicht wirklich gebaut?",
      [Lang.ES]: "¿Realmente has construido eso?"
    },
    icon: "r_ebcstl",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 5
      },
      {
        quantity: 10
      },
      {
        quantity: 15
      },
      {
        quantity: 20
      },
      {
        quantity: 25
      },
      {
        quantity: 30
      },
      {
        quantity: 40
      },
      {
        quantity: 50
      },
      {
        quantity: 75
      },
      {
        quantity: 100
      }
    ]
  },
  [PictoId.EBPMV]: {
    id: PictoId.EBPMV,
    numericalId: 38,
    name: {
      [Lang.EN]: "Wonder: Giant BRD",
      [Lang.FR]: "Merveille : PMV géant",
      [Lang.DE]: "Wunderwerk: Riesiger KVF",
      [Lang.ES]: "Maravilla: gran COSA"
    },
    description: {
      [Lang.EN]: "BRDs for everyone! The people demand BRDs",
      [Lang.FR]: "Gloire au PMV géant !",
      [Lang.DE]: "Huldigt den Riesigen KVF!",
      [Lang.ES]: "¡Gloria a la gran COSA!"
    },
    icon: "r_ebpmv",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 5
      },
      {
        quantity: 10
      },
      {
        quantity: 15
      },
      {
        quantity: 20
      },
      {
        quantity: 25
      },
      {
        quantity: 30
      },
      {
        quantity: 40
      },
      {
        quantity: 50
      },
      {
        quantity: 75
      },
      {
        quantity: 100
      }
    ]
  },
  [PictoId.EBGROS]: {
    id: PictoId.EBGROS,
    numericalId: 39,
    name: {
      [Lang.EN]: "Wonder: Fearfulness Wheel",
      [Lang.FR]: "Merveille : Roue de Grostas",
      [Lang.DE]: "Wunderwerk: Rad des Schreckens",
      [Lang.ES]: "Maravilla: Gran Noria de Znarf"
    },
    description: {
      [Lang.EN]: "Look, I can see the zeds from up here!",
      [Lang.FR]: "Regardez, on voit les zombies de là-haut !",
      [Lang.DE]: "Sieh nur, man kann von da oben die Zombies sehen!",
      [Lang.ES]: "Increíble, ¡desde aquí los zombies se ven como hormiguitas!"
    },
    icon: "r_ebgros",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 5
      },
      {
        quantity: 10
      },
      {
        quantity: 15
      },
      {
        quantity: 20
      },
      {
        quantity: 25
      },
      {
        quantity: 30
      },
      {
        quantity: 40
      },
      {
        quantity: 50
      },
      {
        quantity: 75
      }
    ]
  },
  [PictoId.EBCROW]: {
    id: PictoId.EBCROW,
    numericalId: 40,
    name: {
      [Lang.EN]: "Wonder: Statue of the Crow",
      [Lang.FR]: "Merveille : Statue du Corbeau",
      [Lang.DE]: "Wunderwerk: Statue des Raben",
      [Lang.ES]: "Maravilla: Estatua del Cuervo"
    },
    description: {
      [Lang.EN]: "The Crow is good, the Crow is all-powerful. [edited by the Crow]",
      [Lang.FR]: "Le Corbeau est bon, le Corbeau est bienfaisant. [édité par Corbilla Fortuna]",
      [Lang.DE]: "Der Rabe ist gut, der Rabe ist ein Segen für die Stadt. [editiert vom Raben]",
      [Lang.ES]: "El Cuervo es un tipazo, el Cuervo es bondadoso. [Firmado: El Cuervo]"
    },
    icon: "r_ebcrow",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 5
      },
      {
        quantity: 10
      },
      {
        quantity: 15
      },
      {
        quantity: 20
      },
      {
        quantity: 25
      },
      {
        quantity: 30
      },
      {
        quantity: 40
      },
      {
        quantity: 50
      },
      {
        quantity: 75
      },
      {
        quantity: 100
      }
    ]
  },
  [PictoId.FORUM]: {
    id: PictoId.FORUM,
    numericalId: 41,
    name: {
      [Lang.EN]: "Messages",
      [Lang.FR]: "Messages",
      [Lang.DE]: "Nachrichten",
      [Lang.ES]: "Mensajes"
    },
    description: {
      [Lang.EN]: "The number of worthwhile (or otherwise) messages you have left on the town forums.",
      [Lang.FR]: "Quantité de messages utiles (ou pas) que vous avez laissés sur le forum de la ville.",
      [Lang.DE]: "Anzahl der sinnvollen (oder sinnlosen...) Nachrichten, die du im Stadtforum geschrieben hast.",
      [Lang.ES]: "Cantidad de mensajes útiles (o no) que has publicado en el foro del pueblo."
    },
    icon: "r_forum",
    community: false,
    rare: false
  },
  [PictoId.JTAMER]: {
    id: PictoId.JTAMER,
    numericalId: 42,
    name: {
      [Lang.EN]: "Tamer",
      [Lang.FR]: "Apprivoiseur",
      [Lang.DE]: "Dompteur",
      [Lang.ES]: "Domador"
    },
    description: {
      [Lang.EN]: "Days spent as a Tamer, torturing Labradoodles.",
      [Lang.FR]: "Jours passés à torturer des bichons maltais.",
      [Lang.DE]: "Anzahl der Tage, an denen du kleine Malteserhunde malträtiert hast.",
      [Lang.ES]: "Días pasados torturando perritos."
    },
    icon: "r_jtamer",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 10,
        points: 3.5
      },
      {
        quantity: 25,
        points: 6.5
      },
      {
        quantity: 75
      },
      {
        quantity: 150
      },
      {
        quantity: 300
      },
      {
        quantity: 800
      },
      {
        quantity: 1500
      }
    ]
  },
  [PictoId.JRANGR]: {
    id: PictoId.JRANGR,
    numericalId: 43,
    name: {
      [Lang.EN]: "Scout",
      [Lang.FR]: "Éclaireur",
      [Lang.DE]: "Aufklärer",
      [Lang.ES]: "Explorador"
    },
    description: {
      [Lang.EN]: "Days spent in the shadows as a Scout.",
      [Lang.FR]: "Jours passés dans les ombres en tant qu’Éclaireur.",
      [Lang.DE]: "Anzahl der Tage, die du als Aufklärer gespielt hast.",
      [Lang.ES]: "Días pasados en la oscuridad como Explorador."
    },
    icon: "r_jrangr",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 10,
        points: 3.5
      },
      {
        quantity: 25,
        points: 6.5
      },
      {
        quantity: 75
      },
      {
        quantity: 150
      },
      {
        quantity: 300
      },
      {
        quantity: 800
      },
      {
        quantity: 1500
      }
    ]
  },
  [PictoId.JERMIT]: {
    id: PictoId.JERMIT,
    numericalId: 44,
    name: {
      [Lang.EN]: "Survivalist",
      [Lang.FR]: "Ermite",
      [Lang.DE]: "Einsiedler",
      [Lang.ES]: "Ermitaño"
    },
    description: {
      [Lang.EN]: "Days spent as a survivalist, eating roots, worms and other such delicacies.",
      [Lang.FR]: "Jours passés à manger n’importe quoi en tant qu’Ermite.",
      [Lang.DE]: "Anzahl der Tage, die du als Einsiedler gespielt hast.",
      [Lang.ES]: "Días pasados comiendo cualquier cosa como Ermitaño."
    },
    icon: "r_jermit",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 10,
        points: 3.5
      },
      {
        quantity: 25,
        points: 6.5
      },
      {
        quantity: 75
      },
      {
        quantity: 150
      },
      {
        quantity: 300
      },
      {
        quantity: 800
      },
      {
        quantity: 1500
      }
    ]
  },
  [PictoId.JCOLLE]: {
    id: PictoId.JCOLLE,
    numericalId: 45,
    name: {
      [Lang.EN]: "Scavenger",
      [Lang.FR]: "Fouineur",
      [Lang.DE]: "Buddler",
      [Lang.ES]: "Excavador"
    },
    description: {
      [Lang.EN]: "Days spent as a scavenger foraging around.",
      [Lang.FR]: "Jours passés à gratter le sol en tant que Fouineur.",
      [Lang.DE]: "Anzahl der Tage, die du als Buddler gespielt hast.",
      [Lang.ES]: "Días pasados escarbando el suelo como Excavador."
    },
    icon: "r_jcolle",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 10,
        points: 3.5
      },
      {
        quantity: 25,
        points: 6.5
      },
      {
        quantity: 75
      },
      {
        quantity: 150
      },
      {
        quantity: 300
      },
      {
        quantity: 800
      },
      {
        quantity: 1500
      }
    ]
  },
  [PictoId.JGUARD]: {
    id: PictoId.JGUARD,
    numericalId: 46,
    name: {
      [Lang.EN]: "Guardian",
      [Lang.FR]: "Gardien",
      [Lang.DE]: "Wächter",
      [Lang.ES]: "Guardián"
    },
    description: {
      [Lang.EN]: "Days spent shepherding the weak through the valleys of darkness and finding lost children!",
      [Lang.FR]: "Jours passés avec votre bouclier en tant que Gardien.",
      [Lang.DE]: "Anzahl der Tage, die du als Wächter gespielt hast.",
      [Lang.ES]: "Días pasados con tu escudo como Guardián."
    },
    icon: "r_jguard",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 10,
        points: 3.5
      },
      {
        quantity: 25,
        points: 6.5
      },
      {
        quantity: 75
      },
      {
        quantity: 150
      },
      {
        quantity: 300
      },
      {
        quantity: 800
      },
      {
        quantity: 1500
      }
    ]
  },
  [PictoId.JTECH]: {
    id: PictoId.JTECH,
    numericalId: 47,
    name: {
      [Lang.EN]: "Technician",
      [Lang.FR]: "Technicien",
      [Lang.DE]: "Techniker",
      [Lang.ES]: "Técnico"
    },
    description: {
      [Lang.EN]: "The number of days you've spent jiggling and fiddling with pointy tools.",
      [Lang.FR]: "Jours passés à jouer avec des outils pointus.",
      [Lang.DE]: "Anzahl der Tage, die du als Techniker gespielt hast.",
      [Lang.ES]: "Días pasados jugando con herramientas."
    },
    icon: "r_jtech",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 10,
        points: 3.5
      },
      {
        quantity: 25,
        points: 6.5
      },
      {
        quantity: 75
      },
      {
        quantity: 150
      },
      {
        quantity: 300
      },
      {
        quantity: 800
      },
      {
        quantity: 1500
      }
    ]
  },
  [PictoId.DCITY]: {
    id: PictoId.DCITY,
    numericalId: 48,
    name: {
      [Lang.EN]: "Dead in your bed",
      [Lang.FR]: "Morts dans votre lit",
      [Lang.DE]: "In deinem Bett gestorben",
      [Lang.ES]: "Muertes en tu cama"
    },
    description: {
      [Lang.EN]: "Grandma, what big teeth you have... GROAR!",
      [Lang.FR]: "Mère-grand, comme vous avez de grandes dents… GROAR !",
      [Lang.DE]: "Großmutter, was hast du für große Zähne... Grrrooooaaar!",
      [Lang.ES]: "¡Si me muero, mejor que sea cómodamente!"
    },
    icon: "r_dcity",
    community: false,
    rare: false
  },
  [PictoId.DWATER]: {
    id: PictoId.DWATER,
    numericalId: 49,
    name: {
      [Lang.EN]: "Deaths by Dehydration",
      [Lang.FR]: "Morts par Dés­hydrata­tion",
      [Lang.DE]: "Dehydrationstode",
      [Lang.ES]: "Muertes por deshidratación"
    },
    description: {
      [Lang.EN]: "Number of times you have died from dehydration. Yes indeed, it turns out water is important.",
      [Lang.FR]: "Nombre de morts par déshydratation terminale. Oui oui, l’eau, c’est important.",
      [Lang.DE]: "Gibt die Anzahl der Dehydrationen an, an denen du gestorben bist. Doch, doch! Wasser ist wichtig !",
      [Lang.ES]: "Cantidad de muertes por deshidratación terminal. Sí, el agua es importante."
    },
    icon: "r_dwater",
    community: false,
    rare: false
  },
  [PictoId.DINFEC]: {
    id: PictoId.DINFEC,
    numericalId: 50,
    name: {
      [Lang.EN]: "Deaths by Infection",
      [Lang.FR]: "Morts par Infection",
      [Lang.DE]: "Tödliche Infektionen",
      [Lang.ES]: "Muertes por infección"
    },
    description: {
      [Lang.EN]: "Number of deaths from generalised infection.",
      [Lang.FR]: "Nombre d’extinctions des suites d’une infection virulente.",
      [Lang.DE]: "Anzahl der Infektionen, die dich das Leben gekostet haben.",
      [Lang.ES]: "Cantidad de fallecimientos por infecciones."
    },
    icon: "r_dinfec",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 20
      },
      {
        quantity: 40
      },
      {
        quantity: 75
      },
      {
        quantity: 100
      },
      {
        quantity: 150
      }
    ]
  },
  [PictoId.DNUCL]: {
    id: PictoId.DNUCL,
    numericalId: 51,
    name: {
      [Lang.EN]: "Atomic death",
      [Lang.FR]: "Mort par l’atome",
      [Lang.DE]: "Tod durch Radioaktivität",
      [Lang.ES]: "Muerte por radioactividad"
    },
    description: {
      [Lang.EN]: "Number of existences entirely vaporized by the all-powerful atom.",
      [Lang.FR]: "Nombre d’existences vaporisées par la toute-puissance de l’atome.",
      [Lang.DE]: "Gibt an, wie oft du unter dem Einfluß von Radioaktivität das Zeitliche gesegnet hast.",
      [Lang.ES]: "Resulta que has sido bendecido con un poco... pero sólo un poquito de radioactividad."
    },
    icon: "r_dnucl",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 10
      },
      {
        quantity: 20
      },
      {
        quantity: 30
      },
      {
        quantity: 50
      },
      {
        quantity: 60
      },
      {
        quantity: 80
      },
      {
        quantity: 90
      },
      {
        quantity: 100
      },
      {
        quantity: 120
      },
      {
        quantity: 150
      }
    ]
  },
  [PictoId.DDRUG]: {
    id: PictoId.DDRUG,
    numericalId: 52,
    name: {
      [Lang.EN]: "Deaths from withdrawal",
      [Lang.FR]: "Morts par Manque",
      [Lang.DE]: "Tod durch Entzug",
      [Lang.ES]: "Muertes por abstinencia"
    },
    description: {
      [Lang.EN]: "Nights you didn't see the other side of, due to lack of drugs.",
      [Lang.FR]: "Nuits que vous n’avez pas passées, par manque de drogue.",
      [Lang.DE]: "Die Anzahl der Male, in denen dein unfreiwilliger 'cold turkey' gescheitert ist...",
      [Lang.ES]: "Veces que has muerto por falta de estimulantes."
    },
    icon: "r_ddrug",
    community: false,
    rare: false
  },
  [PictoId.SURLST]: {
    id: PictoId.SURLST,
    numericalId: 53,
    name: {
      [Lang.EN]: "Last Man Standing",
      [Lang.FR]: "Mort Ultime",
      [Lang.DE]: "Letzter Toter",
      [Lang.ES]: "¡El Último Habitante!"
    },
    description: {
      [Lang.EN]: "You were the last to die! Very few citizens have accomplished this feat!",
      [Lang.FR]: "Vous êtes le ou la dernière à mourir ! Très peu de citoyens ont réalisé cet exploit !",
      [Lang.DE]: "Du bist die oder der letzte, die draufgeht. Diese Ehre wird nur sehr wenigen Bürgen zuteil.",
      [Lang.ES]: "Fuiste el último en morir en tu pueblo. ¡Muy pocos jugadores han logrado esta hazaña!"
    },
    icon: "r_surlst",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 10,
        points: 3.5
      },
      {
        quantity: 15,
        points: 6.5
      },
      {
        quantity: 30,
        points: 10
      },
      {
        quantity: 50,
        points: 13
      },
      {
        quantity: 100,
        points: 16.5
      }
    ]
  },
  [PictoId.SUHARD]: {
    id: PictoId.SUHARD,
    numericalId: 54,
    name: {
      [Lang.EN]: "Last Man Standing - Hardcore!",
      [Lang.FR]: "Mort Ultime du Pandé­monium !",
      [Lang.DE]: "Letzter Toter in einer Pandämoniumstadt",
      [Lang.ES]: "El Último Superviviente en Pandemonio"
    },
    description: {
      [Lang.EN]: "you were the last to bite the bullet in a Hardcore town!",
      [Lang.FR]: "Vous êtes le ou la dernière à mourir au cours d’une ville du Pandémonium !",
      [Lang.DE]: "Du bist der oder die Letzte, die in einer Pandämoniumstadt draufgeht!",
      [Lang.ES]: "¡Fuiste el último en morir en un pueblo del Pandemonio!"
    },
    icon: "r_suhard",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 5,
        points: 3.5
      },
      {
        quantity: 10,
        points: 6.5
      },
      {
        quantity: 20,
        points: 10
      },
      {
        quantity: 40,
        points: 13
      },
      {
        quantity: 100
      }
    ]
  },
  [PictoId.MYSTIC]: {
    id: PictoId.MYSTIC,
    numericalId: 55,
    name: {
      [Lang.EN]: "Mystic Points",
      [Lang.FR]: "Mysticisme",
      [Lang.DE]: "Mystic",
      [Lang.ES]: "Puntos de Misticismo"
    },
    description: {
      [Lang.EN]: "The number of souls your town has managed to recycle.",
      [Lang.FR]: "Nombre d’âmes que votre ville a pu libérer.",
      [Lang.DE]: "Anzahl der Seelen, die die Stadt befreien konnte",
      [Lang.ES]: "Cantidad de almas que tu pueblo pudo reciclar en las construcciones"
    },
    icon: "r_mystic",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 10
      },
      {
        quantity: 25
      },
      {
        quantity: 75
      },
      {
        quantity: 150
      },
      {
        quantity: 300
      },
      {
        quantity: 800
      },
      {
        quantity: 1500
      }
    ]
  },
  [PictoId.DOUTSD]: {
    id: PictoId.DOUTSD,
    numericalId: 56,
    name: {
      [Lang.EN]: "Night in the desert",
      [Lang.FR]: "Nuits dans le désert",
      [Lang.DE]: "Wüstenausflüge",
      [Lang.ES]: "Noches en el desierto"
    },
    description: {
      [Lang.EN]: "Little walks you took outside from which you never returned.",
      [Lang.FR]: "Petites promenades dehors dont vous n’êtes jamais revenu(e).",
      [Lang.DE]: "Die Auszeichnung spiegelt die Anzahl der Wüstenausflüge wieder, von denen du nicht mehr zurückgekehrt bist.",
      [Lang.ES]: "Veces en las que saliste a pasear fuera del pueblo y nunca más volviste."
    },
    icon: "r_doutsd",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 20,
        points: 3.5
      },
      {
        quantity: 100
      },
      {
        quantity: 250
      }
    ]
  },
  [PictoId.DOOR]: {
    id: PictoId.DOOR,
    numericalId: 57,
    name: {
      [Lang.EN]: "Covert Concierge",
      [Lang.FR]: "Ouvertures de porte",
      [Lang.DE]: "Geöffnete Tür",
      [Lang.ES]: "Apertura de puertas"
    },
    description: {
      [Lang.EN]: "The number of doors you've unlocked while exploring ruins.",
      [Lang.FR]: "Nombre de portes déverrouillées par vos soins dans les ruines.",
      [Lang.DE]: "Anzahl der verschlossenen Türen, die du in verlassenen Gebäuden geöffnet hast.",
      [Lang.ES]: "Cantidad de puertas abiertas en las ruinas."
    },
    icon: "r_door",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1,
        points: 3.5
      },
      {
        quantity: 5,
        points: 6.5
      },
      {
        quantity: 10
      },
      {
        quantity: 15
      },
      {
        quantity: 20
      },
      {
        quantity: 30
      },
      {
        quantity: 50
      },
      {
        quantity: 100
      }
    ]
  },
  [PictoId.DHANG]: {
    id: PictoId.DHANG,
    numericalId: 58,
    name: {
      [Lang.EN]: "Hanging",
      [Lang.FR]: "Pendaisons",
      [Lang.DE]: "Hängend",
      [Lang.ES]: "Horcas"
    },
    description: {
      [Lang.EN]: "Number of towns which, in the end, just couldn't put up with your crap anymore.",
      [Lang.FR]: "Nombre de villes au cours desquelles on ne pouvait plus vous supporter.",
      [Lang.DE]: "Anzahl der Städte, in denen Sie nicht mehr unterstützt werden konnten.",
      [Lang.ES]: "Cantidad de pueblos en los que fuiste considerado indeseable."
    },
    icon: "r_dhang",
    community: false,
    rare: false
  },
  [PictoId.PLUNDR]: {
    id: PictoId.PLUNDR,
    numericalId: 59,
    name: {
      [Lang.EN]: "Pillages",
      [Lang.FR]: "Pillages de maison",
      [Lang.DE]: "Häuserplünderungen",
      [Lang.ES]: "Saqueos en casas"
    },
    description: {
      [Lang.EN]: "Objects prised from the still-warm clutches of your former friends.",
      [Lang.FR]: "Objets arrachés au corps encore chaud de vos anciens amis.",
      [Lang.DE]: "Anzahl der Gegenstände, die du deinen noch verreckenden Freunden entrissen hast.",
      [Lang.ES]: "Objetos arrancados del cuerpo aún tibio de tus vecinos."
    },
    icon: "r_plundr",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 30,
        points: 3.5
      },
      {
        quantity: 60,
        points: 6.5
      },
      {
        quantity: 100
      },
      {
        quantity: 200
      },
      {
        quantity: 400
      },
      {
        quantity: 600
      },
      {
        quantity: 1000
      }
    ]
  },
  [PictoId.WONDRS]: {
    id: PictoId.WONDRS,
    numericalId: 60,
    name: {
      [Lang.EN]: "Extreme Projects",
      [Lang.FR]: "Projets insensés",
      [Lang.DE]: "Absurde Projekte",
      [Lang.ES]: "Proyectos delirantes"
    },
    description: {
      [Lang.EN]: "The number of extreme projects you have carried out.",
      [Lang.FR]: "Nombre de projets insensés achevés de votre vivant.",
      [Lang.DE]: "Anzahl der Absurden Projekte, deren Fertigstellung du noch erlebt hast.",
      [Lang.ES]: "Cantidad de proyectos delirantes terminados durante tu triste vida."
    },
    icon: "r_wondrs",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 20,
        points: 3.5
      },
      {
        quantity: 50,
        points: 6.5
      },
      {
        quantity: 100
      },
      {
        quantity: 150
      },
      {
        quantity: 200
      },
      {
        quantity: 250
      },
      {
        quantity: 300
      },
      {
        quantity: 350
      }
    ]
  },
  [PictoId.REPAIR]: {
    id: PictoId.REPAIR,
    numericalId: 61,
    name: {
      [Lang.EN]: "Repairs",
      [Lang.FR]: "Réparations",
      [Lang.DE]: "Reparaturen",
      [Lang.ES]: "Reparaciones"
    },
    description: {
      [Lang.EN]: "Number of broken items that you've repaired.",
      [Lang.FR]: "Objets cassés que vous avez remis en état de marche.",
      [Lang.DE]: "Anzahl kaputter Gegenstände, die du wieder repariert hast.",
      [Lang.ES]: "Objetos rotos que has reparado."
    },
    icon: "r_repair",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 15
      },
      {
        quantity: 30
      },
      {
        quantity: 60
      },
      {
        quantity: 150
      },
      {
        quantity: 400
      }
    ]
  },
  [PictoId.BREP]: {
    id: PictoId.BREP,
    numericalId: 62,
    name: {
      [Lang.EN]: "Building Repairs",
      [Lang.FR]: "Réparations de chantiers",
      [Lang.DE]: "Gebäudereparaturen",
      [Lang.ES]: "Reparación de construcciones"
    },
    description: {
      [Lang.EN]: "Action Points invested in the ongoing repairs of buildings.",
      [Lang.FR]: "Points d’action investis dans les réparations sans fin des chantiers.",
      [Lang.DE]: "Anzahl der Aktionspunkte, die du in Reparaturen auf der Baustelle gesteckt hast.",
      [Lang.ES]: "Puntos de acción invertidos en reparaciones interminables."
    },
    icon: "r_brep",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 100
      },
      {
        quantity: 250
      },
      {
        quantity: 500
      },
      {
        quantity: 1000
      },
      {
        quantity: 1500
      },
      {
        quantity: 2000
      },
      {
        quantity: 2500
      },
      {
        quantity: 3000
      },
      {
        quantity: 3500
      }
    ]
  },
  [PictoId.RP]: {
    id: PictoId.RP,
    numericalId: 63,
    name: {
      [Lang.EN]: "Roleplayer",
      [Lang.FR]: "Rôliste",
      [Lang.DE]: "Textsammler",
      [Lang.ES]: "Rolista"
    },
    description: {
      [Lang.EN]: "The number of documents and other uncovered 'roleplay' items.",
      [Lang.FR]: "Documents et autres découvertes « roleplay ».",
      [Lang.DE]: "Anzahl der Dokumente und Texte, die du in der Wüste gefunden hast.",
      [Lang.ES]: "Documentos y otros descubrimientos en el juego de rol."
    },
    icon: "r_rp",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 5,
        points: 3.5
      },
      {
        quantity: 10,
        points: 6.5
      },
      {
        quantity: 20,
        points: 10
      },
      {
        quantity: 30,
        points: 13
      },
      {
        quantity: 40,
        points: 16.5
      },
      {
        quantity: 60,
        points: 20
      },
      {
        quantity: 100
      }
    ]
  },
  [PictoId.CGARB]: {
    id: PictoId.CGARB,
    numericalId: 64,
    name: {
      [Lang.EN]: "Removals",
      [Lang.FR]: "Sorteur",
      [Lang.DE]: "Leichenentsorger",
      [Lang.ES]: "Lanzamuertos"
    },
    description: {
      [Lang.EN]: "The number of dead friends you've dragged out of town.",
      [Lang.FR]: "Nombre d’amis morts que vous avez tirés hors de la ville.",
      [Lang.DE]: "Anzahl deiner toten Freunde, die du außerhalb der Stadt entsorgt hast.",
      [Lang.ES]: "Cantidad de amigos muertos que has tirado fuera del pueblo."
    },
    icon: "r_cgarb",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 60
      },
      {
        quantity: 100
      },
      {
        quantity: 200
      },
      {
        quantity: 300
      }
    ]
  },
  [PictoId.BATGUN]: {
    id: PictoId.BATGUN,
    numericalId: 65,
    name: {
      [Lang.EN]: "Battery Launcher Builder",
      [Lang.FR]: "Super lance-piles",
      [Lang.DE]: "Batteriewerferfabrikant",
      [Lang.ES]: "Super lanzapilas"
    },
    description: {
      [Lang.EN]: "The number of Battery launchers you have built.",
      [Lang.FR]: "Nombre de puissants lance-piles que vous avez fabriqués.",
      [Lang.DE]: "Anzahl der Batteriewerfer, die du gebaut hast.",
      [Lang.ES]: "Cantidad de lanza-pilas que has fabricado."
    },
    icon: "r_batgun",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 15
      },
      {
        quantity: 25
      },
      {
        quantity: 50
      },
      {
        quantity: 75
      },
      {
        quantity: 100
      },
      {
        quantity: 150
      }
    ]
  },
  [PictoId.PANDE]: {
    id: PictoId.PANDE,
    numericalId: 66,
    name: {
      [Lang.EN]: "Survivor of Hell!",
      [Lang.FR]: "Survivant de l’enfer !",
      [Lang.DE]: "Überlebende der Hölle!",
      [Lang.ES]: "Superviviente del Infierno"
    },
    description: {
      [Lang.EN]: "You are a true survivor of hell.",
      [Lang.FR]: "Vous êtes un vrai survivant de l’enfer.",
      [Lang.DE]: "Sie sind ein wahrer Überlebenskünstler der Hölle.",
      [Lang.ES]: "Eres un verdadero superviviente del infierno"
    },
    icon: "r_pande",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 50
      },
      {
        quantity: 150
      },
      {
        quantity: 300
      },
      {
        quantity: 500
      },
      {
        quantity: 1000
      }
    ]
  },
  [PictoId.HBUILD]: {
    id: PictoId.HBUILD,
    numericalId: 67,
    name: {
      [Lang.EN]: "Homemaker",
      [Lang.FR]: "Travaux chez soi",
      [Lang.DE]: "Hausarbeiten",
      [Lang.ES]: "Trabajador hogareño"
    },
    description: {
      [Lang.EN]: "Number of DIY projects successfully completed around the house.",
      [Lang.FR]: "Nombre de petits travaux effectués dans votre maison.",
      [Lang.DE]: "Anzahl der Ausbauten, die du an deinem Haus vorgenommen hast.",
      [Lang.ES]: "Cantidad de pequeños trabajos hechos en casa."
    },
    icon: "r_hbuild",
    community: false,
    rare: false
  },
  [PictoId.TRONCO]: {
    id: PictoId.TRONCO,
    numericalId: 68,
    name: {
      [Lang.EN]: "Chainsaws",
      [Lang.FR]: "Tronçon­neuses",
      [Lang.DE]: "Kettensägen",
      [Lang.ES]: "Sierras eléctricas"
    },
    description: {
      [Lang.EN]: "The number of chainsaws you have built.",
      [Lang.FR]: "Nombre de tronçonneuses que vous avez assemblées.",
      [Lang.DE]: "Anzahl an Kettensägen, die du gebaut hast.",
      [Lang.ES]: "Cantidad de sierras eléctricas que has armado."
    },
    icon: "r_tronco",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 5
      },
      {
        quantity: 10
      },
      {
        quantity: 30
      }
    ]
  },
  [PictoId.GUARD]: {
    id: PictoId.GUARD,
    numericalId: 69,
    name: {
      [Lang.EN]: "Watchman",
      [Lang.FR]: "Veilleur",
      [Lang.DE]: "Stadtwächter",
      [Lang.ES]: "Centinela"
    },
    description: {
      [Lang.EN]: "The number of nights survived as a watchman.",
      [Lang.FR]: "Nombre de nuits survécues en tant que Veilleur.",
      [Lang.DE]: "Anzahl der Nächte, die du als Stadtwächter überlebt hast.",
      [Lang.ES]: "Cantidad de noches que sobreviviste como Centinela."
    },
    icon: "r_guard",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 20,
        points: 3.5
      },
      {
        quantity: 40,
        points: 6.5
      },
      {
        quantity: 80
      },
      {
        quantity: 120
      },
      {
        quantity: 200
      },
      {
        quantity: 400
      },
      {
        quantity: 600
      }
    ]
  },
  [PictoId.WINBAS]: {
    id: PictoId.WINBAS,
    numericalId: 70,
    name: {
      [Lang.EN]: "Ranked Towns",
      [Lang.FR]: "Ville classée",
      [Lang.DE]: "Gerankte Stadt",
      [Lang.ES]: "Habitante prestigioso"
    },
    description: {
      [Lang.EN]: "Number of towns which figured in last season's rankings.",
      [Lang.FR]: "Nombre de villes présentes dans le classement top 15 d’une saison précédente.",
      [Lang.DE]: "Anzahl der Städte, in denen Du mitgespielt hast, die es in einer vergangenen Saison ins Ranking geschafft haben.",
      [Lang.ES]: "Cantidad de veces en que has participado en pueblos presentes en una clasificación anterior."
    },
    icon: "r_winbas",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 2,
        points: 13
      },
      {
        quantity: 5,
        points: 20
      },
      {
        quantity: 10
      },
      {
        quantity: 15
      },
      {
        quantity: 20
      }
    ]
  },
  [PictoId.WINTOP]: {
    id: PictoId.WINTOP,
    numericalId: 71,
    name: {
      [Lang.EN]: "Legendary Towns!",
      [Lang.FR]: "Ville légendaire !",
      [Lang.DE]: "Legendäre Stadt",
      [Lang.ES]: "Habitante legendario"
    },
    description: {
      [Lang.EN]: "Number of towns which made the number one spot from previous seasons.",
      [Lang.FR]: "Nombre de villes arrivées en première place du classement d’une saison précédente.",
      [Lang.DE]: "Anzahl der Städte, in denen Du mitgespielt hast, die in einer vergangenen Saison als Erste abgeschnitten haben.",
      [Lang.ES]: "Cantidad de pueblos colocados en el primer lugar en una clasificación anterior."
    },
    icon: "r_wintop",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1,
        points: 20
      },
      {
        quantity: 2
      },
      {
        quantity: 3
      }
    ]
  },
  [PictoId.WINTHI]: {
    id: PictoId.WINTHI,
    numericalId: 72,
    name: {
      [Lang.EN]: "Participating Town",
      [Lang.FR]: "Ville participante",
      [Lang.DE]: "Teilnehmende Stadt",
      [Lang.ES]: "Pueblo participante"
    },
    description: {
      [Lang.EN]: "Number of towns represented in the top 35 rankings of a past season.",
      [Lang.FR]: "Nombre de villes présentes dans le classement top 35 d’une saison précédente.",
      [Lang.DE]: "Anzahl der Städte, die in der Top-35-Rangliste einer vergangenen Saison vertreten waren.",
      [Lang.ES]: "Cantidad de pueblos representadas en las primeras 35 clasificaciones de la temporada pasada"
    },
    icon: "r_winthi",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 2
      },
      {
        quantity: 5
      },
      {
        quantity: 10
      }
    ]
  },
  [PictoId.KILLZ]: {
    id: PictoId.KILLZ,
    numericalId: 73,
    name: {
      [Lang.EN]: "Zombies eliminated",
      [Lang.FR]: "Zombies éliminés",
      [Lang.DE]: "Getötete Zombies",
      [Lang.ES]: "Zombies eliminados"
    },
    description: {
      [Lang.EN]: "Total number of the living-dead you have sent back underground by whatever means.",
      [Lang.FR]: "Nombre de créatures mort-vivantes que vous avez renvoyées sous terre par n’importe quel moyen.",
      [Lang.DE]: "Gibt die Gesamtanzahl, der von dir umgebrachten Zombies an. Jede Tötungsmethode wird gezählt.",
      [Lang.ES]: "Total de muertos vivientes que volviste a enviar bajo tierra de cualquier manera."
    },
    icon: "r_killz",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 100,
        points: 3.5
      },
      {
        quantity: 200,
        points: 6.5
      },
      {
        quantity: 300,
        points: 10
      },
      {
        quantity: 800,
        points: 13
      },
      {
        quantity: 2000
      },
      {
        quantity: 4000
      },
      {
        quantity: 6000
      },
      {
        quantity: 10000
      },
      {
        quantity: 15000
      }
    ]
  },
  [PictoId.BETA]: {
    id: PictoId.BETA,
    numericalId: 74,
    name: {
      [Lang.EN]: "In with the bricks",
      [Lang.FR]: "Ancien bêta-testeur",
      [Lang.DE]: "Ehemaliger BETA-Tester",
      [Lang.ES]: "Beta-tester"
    },
    description: {
      [Lang.EN]: "An extremely rare distinction, awarded only to the very earliest citizens of 'Die2Nite'.",
      [Lang.FR]: "Distinction rarissime réservée aux tout premiers citoyens de 'Hordes'.",
      [Lang.DE]: "Dies ist eine äußerst seltene Auszeichnung, die den ersten Spielern von 'Die Verdammten' vorbehalten ist.",
      [Lang.ES]: "Distinción rarísima otorgada a quienes participaron en la fase Beta, los primeros jugadores de Zombinoia."
    },
    icon: "r_beta",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.SANDB]: {
    id: PictoId.SANDB,
    numericalId: 75,
    name: {
      [Lang.EN]: "Sand balls!",
      [Lang.FR]: "Boules de sable !",
      [Lang.DE]: "Sandbälle! Yeah!",
      [Lang.ES]: "Bolas de arena"
    },
    description: {
      [Lang.EN]: "Number of sandballs successfully thrown at another citizen's chevy chase.",
      [Lang.FR]: "Nombre de boules de sable envoyées au visage d’autres joueurs.",
      [Lang.DE]: "Anzahl der Sandbälle, die du deinen Mitspielern ins Gesicht geworfen hast. Kicher, kicher...",
      [Lang.ES]: "Cantidad de bolas de arena lanzadas a la cara de otros jugadores."
    },
    icon: "r_sandb",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 10
      },
      {
        quantity: 50
      },
      {
        quantity: 100
      },
      {
        quantity: 250
      }
    ]
  },
  [PictoId.PAQUES]: {
    id: PictoId.PAQUES,
    numericalId: 76,
    name: {
      [Lang.EN]: "Crucifixion",
      [Lang.FR]: "Crucifixion",
      [Lang.DE]: "Kreuzigung",
      [Lang.ES]: "Crucifixión"
    },
    description: {
      [Lang.EN]: "Rejoice you didn't have to walk.",
      [Lang.FR]: "Réjouissez-vous, vous n’aurez pas eu à marcher.",
      [Lang.DE]: "Freuen Sie sich, Sie hätten nicht laufen müssen.",
      [Lang.ES]: "Alégrate de que no tuviste que caminar"
    },
    icon: "r_paques",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.SANTAC]: {
    id: PictoId.SANTAC,
    numericalId: 77,
    name: {
      [Lang.EN]: "Father Christmas is a little sh*t",
      [Lang.FR]: "Le Père Noël est une ordure",
      [Lang.DE]: "Den Weihnachtsmann gibt es nicht",
      [Lang.ES]: "Maldito Papá Noel"
    },
    description: {
      [Lang.EN]: "The number of presents you have stolen from your friends.",
      [Lang.FR]: "Nombre de cadeaux volés à vos amis.",
      [Lang.DE]: "Anzahl der Geschenke, die du deinen Freunden geklaut hast.",
      [Lang.ES]: "Cantidad de regalos robados a amigos"
    },
    icon: "r_santac",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 10
      },
      {
        quantity: 25
      },
      {
        quantity: 50
      },
      {
        quantity: 75
      },
      {
        quantity: 100
      }
    ]
  },
  [PictoId.CHAMAN]: {
    id: PictoId.CHAMAN,
    numericalId: 78,
    name: {
      [Lang.EN]: "Shaman",
      [Lang.FR]: "Chaman",
      [Lang.DE]: "Schamane",
      [Lang.ES]: "Chamán"
    },
    description: {
      [Lang.EN]: "Days spent trafficking the dead souls.",
      [Lang.FR]: "Jours passés à trafiquer l’âme des morts.",
      [Lang.DE]: "Tagelang wurde an den Seelen der Toten herumgepfuscht.",
      [Lang.ES]: "Días pasados jugando con almas de muertos."
    },
    icon: "r_chaman",
    community: false,
    rare: true
  },
  [PictoId.ARMAG]: {
    id: PictoId.ARMAG,
    numericalId: 79,
    name: {
      [Lang.EN]: "Armageddon Witness",
      [Lang.FR]: "Témoin de l’Armageddon",
      [Lang.DE]: "Zeuge von Harmagedon",
      [Lang.ES]: "Testigo del Armagedón"
    },
    description: {
      [Lang.EN]: "An extremely rare distinction reserved for souls who have experienced the great Armageddon of Die2Nite!",
      [Lang.FR]: "Marque rarissime réservée aux âmes qui ont vécu le grand Armageddon de l’univers de Hordes !",
      [Lang.DE]: "Eine äußerst seltene Auszeichnung, die den Seelen vorbehalten ist, die das große Harmagedon des Universums von Die Verdammten erlebt haben!",
      [Lang.ES]: "¡Una Distinción extremadamente rara reservado para las almas que presenciaron El Gran Armagedón!"
    },
    icon: "r_armag",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.GINFEC]: {
    id: PictoId.GINFEC,
    numericalId: 80,
    name: {
      [Lang.EN]: "Witness to the Great Contamination",
      [Lang.FR]: "Témoin de la Grande Contamination",
      [Lang.DE]: "Zeuge der großen Verseuchung",
      [Lang.ES]: "Testigo de la Gran Contaminación"
    },
    description: {
      [Lang.EN]: "Extremely rare distinction reserved for souls who have experienced the Great Contamination of Die2Nite!",
      [Lang.FR]: "Marque rarissime réservée aux âmes qui ont vécu la Grande Contamination Hordienne !",
      [Lang.DE]: "Äußerst seltene Marke, die für Seelen reserviert ist, die die Große Kontamination von Die Verdammten erlebt haben!",
      [Lang.ES]: "¡Distinción extremadamente rara reservada para las almas que presenciaron La Gran Contaminación!"
    },
    icon: "r_ginfec",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.PTAME]: {
    id: PictoId.PTAME,
    numericalId: 81,
    name: {
      [Lang.EN]: "Soul Value",
      [Lang.FR]: "Valeur de l’âme",
      [Lang.DE]: "Seelenpunkte",
      [Lang.ES]: "Puntos de Alma"
    },
    description: {
      [Lang.EN]: "The number of soul points you have accumulated in the course of your many lives.",
      [Lang.FR]: "Nombre de points d’âme que vous avez obtenus au cours de vos incarnations.",
      [Lang.DE]: "Anzahl der Seelenpunkte, die du durch deine Inkarnationen erhalten hast.",
      [Lang.ES]: "Cantidad de Puntos de Alma que has ganado en tus reencarnaciones."
    },
    icon: "r_ptame",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 100,
        points: 13
      },
      {
        quantity: 500,
        points: 33
      },
      {
        quantity: 1000,
        points: 66
      },
      {
        quantity: 2000,
        points: 132
      },
      {
        quantity: 3000,
        points: 198
      },
      {
        quantity: 5000
      },
      {
        quantity: 7000
      },
      {
        quantity: 9000
      },
      {
        quantity: 12000
      }
    ]
  },
  [PictoId.JSHAM]: {
    id: PictoId.JSHAM,
    numericalId: 82,
    name: {
      [Lang.EN]: "Shaman",
      [Lang.FR]: "Chaman",
      [Lang.DE]: "Schamane",
      [Lang.ES]: "Chamán"
    },
    description: {
      [Lang.EN]: "Days spent trafficking the souls of the dead.",
      [Lang.FR]: "Jours passés à trafiquer l'âme des morts.",
      [Lang.DE]: "Anzahl der Tage, die du als Schamane gespielt hast.",
      [Lang.ES]: "Días pasados jugando con almas de muertos como Chamán."
    },
    icon: "r_jsham",
    community: false,
    rare: false,
    titles: [
      {
        quantity: 10
      },
      {
        quantity: 25
      },
      {
        quantity: 75
      },
      {
        quantity: 150
      },
      {
        quantity: 300
      },
      {
        quantity: 800
      },
      {
        quantity: 1500
      }
    ]
  },
  [PictoId.RREFER]: {
    id: PictoId.RREFER,
    numericalId: 83,
    name: {
      [Lang.EN]: "Golden Child",
      [Lang.FR]: "Riche gourou",
      [Lang.DE]: "Reicher Guru",
      [Lang.ES]: "Gurú Rico"
    },
    description: {
      [Lang.EN]: "The number of new citizens you have convinced to come to die2nite.com AND to pay for the privilege.",
      [Lang.FR]: "Nombre de nouveaux citoyens que vous avez convaincu de mourir ET de payer pour ça.",
      [Lang.DE]: "Anzahl der Bürger, die du dazu bringen konntest, bei Die Verdammten zu sterben UND dafür zu bezahlen.",
      [Lang.ES]: "Número de nuevos habitantes a los que convenció para morir Y pagar por ello."
    },
    icon: "r_rrefer",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      },
      {
        quantity: 3
      },
      {
        quantity: 5
      },
      {
        quantity: 10
      },
      {
        quantity: 15
      },
      {
        quantity: 20
      },
      {
        quantity: 25
      },
      {
        quantity: 50
      },
      {
        quantity: 100
      },
      {
        quantity: 150
      }
    ]
  },
  [PictoId.FJVANI]: {
    id: PictoId.FJVANI,
    numericalId: 84,
    name: {
      [Lang.EN]: "Geeks tracker",
      [Lang.FR]: "Traqueur de geeks",
      [Lang.DE]: "Verdammt in Saarbrücken",
      [Lang.ES]: "Rastreador friki"
    },
    description: {
      [Lang.EN]: "Extremely rare brand reserved for animators present at the Motion Twin stand of the 2008 Video Game Festival in Paris!",
      [Lang.FR]: "Marque rarissime réservée aux animateurs présents au stand Motion Twin du Festival du Jeu Vidéo 2008 à Paris !",
      [Lang.DE]: "Teilnehmer beim Community-Treffen in Saarbrücken am 6. November 2011",
      [Lang.ES]: "¡Una marca extremadamente rara reservada para los animadores presentes en el stand Motion Twin del Video Game Festival 2008 en París!"
    },
    icon: "r_fjvani",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.FJV2]: {
    id: PictoId.FJV2,
    numericalId: 85,
    name: {
      [Lang.EN]: "Video Game Festival 2010",
      [Lang.FR]: "Festival du Jeu Vidéo 2010",
      [Lang.DE]: "Video Game Festival 2010",
      [Lang.ES]: "Festival de Videojuegos 2010"
    },
    description: {
      [Lang.EN]: "You were present at the Video Game Festival in Paris in 2010: thank you!",
      [Lang.FR]: "Vous étiez présent(e) au Festival du Jeu Vidéo à Paris en 2010 : merci !",
      [Lang.DE]: "Du warst beim Video Game Festival 2010 in Paris dabei: Danke!",
      [Lang.ES]: "Estuviste presente en el Festival de Videojuegos de París en 2010: ¡gracias!"
    },
    icon: "r_fjv2",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.FJV]: {
    id: PictoId.FJV,
    numericalId: 86,
    name: {
      [Lang.EN]: "FJV'08 cannon fodder",
      [Lang.FR]: "Chair à canon du FJV'08",
      [Lang.DE]: "FJV'08 Kanonenfutter",
      [Lang.ES]: "Carne de cañón FJV'08"
    },
    description: {
      [Lang.EN]: "The bearer of this brand participated in the big hunt organized at the 2008 Video Game Festival.",
      [Lang.FR]: "Le porteur de cette marque a participé à la grande chasse organisée au Festival du Jeu Vidéo 2008.",
      [Lang.DE]: "Der Besitzer dieses Abzeichens hat an der Schnitzeljagt beim Video Game Festival 2008 teilgenommen.",
      [Lang.ES]: "El portador de esta marca participó en la gran caza organizada en el Festival de Videojuegos 2008."
    },
    icon: "r_fjv",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.COMU]: {
    id: PictoId.COMU,
    numericalId: 87,
    name: {
      [Lang.EN]: "Clash Team",
      [Lang.FR]: "Organisation du Choc",
      [Lang.DE]: "Community-Auszeichnung",
      [Lang.ES]: "Organización de Choque"
    },
    description: {
      [Lang.EN]: "Awarded for being part of the event team in the Clash of the Titans. Reporters, Video Makers, Town Leaders, we salute you.",
      [Lang.FR]: "Votre organisation sans faille lors du choc des héros a permis de créer un évènement dont on parlera encore longtemps !",
      [Lang.DE]: "Auszeichnung für außergewöhnliche Verdienste um die Community von Die Verdammten.",
      [Lang.ES]: "¡Tu organización impecable durante el Choque de Héroes creó un evento del que se hablará durante mucho tiempo!"
    },
    icon: "r_comu",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.COMU2]: {
    id: PictoId.COMU2,
    numericalId: 88,
    name: {
      [Lang.EN]: "Clash CEO",
      [Lang.FR]: "PDG du Choc",
      [Lang.DE]: "Clash CEO",
      [Lang.ES]: "Director ejecutivo de Clash"
    },
    description: {
      [Lang.EN]: "Awarded for being one of the community organizers or developers in the Clash of the Titans. Our community thanks you!",
      [Lang.FR]: "Décerné pour être l'un des organisateurs ou développeurs de la communauté dans le choc des héros. Notre communauté vous remercie !",
      [Lang.DE]: "Für die Community-Organisatoren und Entwickler des Clash of the Titans Events. Die Gemeinschaft sagt Danke!",
      [Lang.ES]: "Otorgado por ser uno de los organizadores o desarrolladores de la comunidad en Choque de Héroes. ¡Nuestra comunidad te lo agradece!"
    },
    icon: "r_comu2",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.COTT]: {
    id: PictoId.COTT,
    numericalId: 89,
    name: {
      [Lang.EN]: "Clash Titan",
      [Lang.FR]: "Titan du Choc",
      [Lang.DE]: "Schlachtenbummler",
      [Lang.ES]: "Titán de choque"
    },
    description: {
      [Lang.EN]: "A very rare distinction, awarded only to the intrepid few who participated in the very first Clash of the Titans.",
      [Lang.FR]: "Une distinction très rare, décernée uniquement aux quelques intrépides qui ont participé au tout premier Choc des Héros.",
      [Lang.DE]: "Diese seltene Auszeichnung haben nur jene Verdammten erhalten, die an der Schlacht der Berufe teilgenommen haben.",
      [Lang.ES]: "Una Distinción muy rara, otorgada solo a los pocos intrépidos que participaron en el primer Choque de Héroes."
    },
    icon: "r_cott",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.CDH]: {
    id: PictoId.CDH,
    numericalId: 90,
    name: {
      [Lang.EN]: "Shock of Heroes",
      [Lang.FR]: "Choc des héros",
      [Lang.DE]: "Shock of heroes",
      [Lang.ES]: "Choque de héroes"
    },
    description: {
      [Lang.EN]: "Honorary reward for participating in the Shock of heroes!",
      [Lang.FR]: "Récompense honorifique pour une participation au Choc des Héros !",
      [Lang.DE]: "Ehrenpreis für die Teilname am Shock of Heroes Event!",
      [Lang.ES]: "¡Recompensa honorífica por participar al Choque de Héroes!"
    },
    icon: "r_cdh",
    community: false,
    rare: false
  },
  [PictoId.DERWIN]: {
    id: PictoId.DERWIN,
    numericalId: 91,
    name: {
      [Lang.EN]: "Clash Colossus",
      [Lang.FR]: "Mort Ultime du CDH",
      [Lang.DE]: "Ultimativer Tod des SoH",
      [Lang.ES]: "Héroe de Leyenda"
    },
    description: {
      [Lang.EN]: "Distinction of the greatest hero having survived the longest during the Shock of heroes, you are now part of the legend of the World Beyond!",
      [Lang.FR]: "Distinction du plus grand héros ayant survécu le plus longtemps lors du choc des héros, vous faîtes désormais parti de la légende de l'outre-monde !",
      [Lang.DE]: "Auszeichnung für den größten Helden, der während des Shock of Heroes Events am längsten überlebt hat. Du bist nun eine Legende der Außenwelt!",
      [Lang.ES]: "Esta Distinción es entregada a un solo hombre, aquel que cumplió con su destino legendario y mantuvo a la muerte fuera de su camino en el Choque de Héroes."
    },
    icon: "r_derwin",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.ERMWIN]: {
    id: PictoId.ERMWIN,
    numericalId: 92,
    name: {
      [Lang.EN]: "Survivalist - Winner of SoH",
      [Lang.FR]: "Ermite gagnant du CDH",
      [Lang.DE]: "Einsiedler - Gewinner des SoH",
      [Lang.ES]: "Ganador Ermitaño del CDH"
    },
    description: {
      [Lang.EN]: "This rare award was given to the Survivalists who won the battle of the professions with their Town. Respect!",
      [Lang.FR]: "Victoire en tant qu'Ermite lors du Choc des Héros !",
      [Lang.DE]: "Diese seltene Auszeichnung wurde den Einsiedlern verliehen, die mit ihrer Stadt die Schlacht der Berufe gewonnen haben. Respekt!",
      [Lang.ES]: "¡Victoria como Ermitaño durante el Choque de Héroes!"
    },
    icon: "r_ermwin",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.CDHWIN]: {
    id: PictoId.CDHWIN,
    numericalId: 93,
    name: {
      [Lang.EN]: "Scavenger - Winner of SoH",
      [Lang.FR]: "Fouineur gagnant du CDH",
      [Lang.DE]: "Buddler - Gewinner des SoH",
      [Lang.ES]: "Ganador Excavador del CDH"
    },
    description: {
      [Lang.EN]: "Victory for the Scavengers at the Shock of Heroes event!",
      [Lang.FR]: "Victoire en tant que Fouineur lors du Choc des Héros !",
      [Lang.DE]: "Sieg für die Buddler beim Shock of Heroes Event!",
      [Lang.ES]: "¡Victoria como Excavador durante el choque de héroes!"
    },
    icon: "r_cdhwin",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.DEFWIN]: {
    id: PictoId.DEFWIN,
    numericalId: 94,
    name: {
      [Lang.EN]: "Guardian - Winner of SoH",
      [Lang.FR]: "Gardien gagnant du CDH",
      [Lang.DE]: "Wächter - Gewinner des SoH",
      [Lang.ES]: "Campeón de Choque de héroes"
    },
    description: {
      [Lang.EN]: "Victory as a Guardian during the Shock of heroes!",
      [Lang.FR]: "Victoire en tant que Gardien lors du Choc des Héros !",
      [Lang.DE]: "Sieg für die Wächter beim Shock of Heroes Event!",
      [Lang.ES]: "¡Victoria como Guardián durante el Choque de Héroes!"
    },
    icon: "r_defwin",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.KOHLMB]: {
    id: PictoId.KOHLMB,
    numericalId: 95,
    name: {
      [Lang.EN]: "Citizen Koh-Lambdais",
      [Lang.FR]: "Citoyen Koh-Lambdais",
      [Lang.DE]: "Bewohner Koh-Lambdas",
      [Lang.ES]: "Habitante Koh-Lambdais"
    },
    description: {
      [Lang.EN]: "This citizen was present during the Reunification (last round) of Koh-Lambda!",
      [Lang.FR]: "Ce citoyen était présent lors de la Réunification (dernier round) du Koh-Lambda !",
      [Lang.DE]: "Dieser Bürger war bei der Wiedervereinigung (letzte Runde) von Koh-Lambda dabei!",
      [Lang.ES]: "¡Este habitante estuvo presente durante la Reunificación (última ronda) de Koh-Lambda!"
    },
    icon: "r_kohlmb",
    community: false,
    rare: false
  },
  [PictoId.LEPRE]: {
    id: PictoId.LEPRE,
    numericalId: 96,
    name: {
      [Lang.EN]: "The leprechaun got you good",
      [Lang.FR]: "Le lutin vous a bien eu",
      [Lang.DE]: "Der Kobold hat dich erwischt",
      [Lang.ES]: "Duendecillo"
    },
    description: {
      [Lang.EN]: "Number of your friends' items you have stolen.",
      [Lang.FR]: "Nombre d'objets de vos amis que vous avez volés.",
      [Lang.DE]: "Anzahl der Gegenstände, die du von deinen Freunden gestohlen hast",
      [Lang.ES]: "Parece que le has robado algo a un amigo."
    },
    icon: "r_lepre",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 10
      },
      {
        quantity: 25
      },
      {
        quantity: 50
      },
      {
        quantity: 75
      },
      {
        quantity: 100
      }
    ]
  },
  [PictoId.GOODG]: {
    id: PictoId.GOODG,
    numericalId: 97,
    name: {
      [Lang.EN]: "Good Guy",
      [Lang.FR]: "Good Guy",
      [Lang.DE]: "Netter Kerl",
      [Lang.ES]: "Buen chico"
    },
    description: {
      [Lang.EN]: "You are one of the most integrated players in Die2Nite, fair play, more than a principle, it is a state of mind.",
      [Lang.FR]: "Vous faites partie des joueurs les plus intégres de Hordes, le fair-play, plus qu'un principe, c'est un état d'esprit.",
      [Lang.DE]: "Du bist einer der am besten integrierten Spieler in Die Verdammten und verhälst dich immer fair, nicht nur aus Prinzip, sondern aus Überzeugung.",
      [Lang.ES]: "Eres uno de los jugadores más integrados en Zombinoia, el juego limpio es más que un principio, es un estado de ánimo."
    },
    icon: "r_goodg",
    community: true,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.BETA2]: {
    id: PictoId.BETA2,
    numericalId: 98,
    name: {
      [Lang.EN]: "Next gen Beta-Tester",
      [Lang.FR]: "Beta-testeur next gen",
      [Lang.DE]: "Beta-Tester der neuen Zeit",
      [Lang.ES]: "Beta-tester de próxima generación"
    },
    description: {
      [Lang.EN]: "An extremely rare distinction, awarded only to the very earliest citizens of 'MyHordes'. Drugs are not good.",
      [Lang.FR]: "Distinction rarissime réservée aux tout premiers citoyens de 'MyHordes'. Les drogues c'est pas bien.",
      [Lang.DE]: "Dies ist eine äußert seltene Auszeichnung, die den ersten Spielern von 'MyHordes' vorbehalten ist. Drogen sind nicht gut.",
      [Lang.ES]: "Una Distinción extremadamente rara, otorgada solo a los primeros habitantes de 'MyHordes'. Las drogas no son buenas."
    },
    icon: "r_beta2",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.RANGWIN]: {
    id: PictoId.RANGWIN,
    numericalId: 99,
    name: {
      [Lang.EN]: "Scout - Winner of the SoH",
      [Lang.FR]: "Éclaireur gagnant du CDH",
      [Lang.DE]: "Aufklärer - Gewinner des SoH",
      [Lang.ES]: "Ganador Explorador del CDH"
    },
    description: {
      [Lang.EN]: "Victory as a Scout during the Shock of Heroes!",
      [Lang.FR]: "Victoire en tant qu'Éclaireur lors du Choc des Héros !",
      [Lang.DE]: "Sieg für die Aufklärer beim Shock of Heroes Event!",
      [Lang.ES]: "¡Victoria como Explorador durante el Choque de Héroes!"
    },
    icon: "r_rangwin",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.GSP]: {
    id: PictoId.GSP,
    numericalId: 100,
    name: {
      [Lang.EN]: "Winner of CYP",
      [Lang.FR]: "Gagnant de GSP",
      [Lang.DE]: "HAZ-Gewinner",
      [Lang.ES]: "Ganador del CTP"
    },
    description: {
      [Lang.EN]: "Honorary reward awarded to the winner of the Cure his Pictophilia.",
      [Lang.FR]: "Récompense honorifique décernée au gagnant de Guérir sa Pictophilie !",
      [Lang.DE]: "Ehrenauszeichnung für den Gewinner der Heilung für die Auszeichnungssucht.",
      [Lang.ES]: "¡Premio honorario dado al ganador de \"Curando tu Pictofilia\"!"
    },
    icon: "r_gsp",
    community: true,
    rare: false,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.COLLEC2]: {
    id: PictoId.COLLEC2,
    numericalId: 101,
    name: {
      [Lang.EN]: "Soul Collector",
      [Lang.FR]: "Collecteur d’âmes",
      [Lang.DE]: "Kernsammler",
      [Lang.ES]: "Recolector de Almas"
    },
    description: {
      [Lang.EN]: "The number of dead citizens' souls collected in the World Beyond",
      [Lang.FR]: "Nombres d’âmes de citoyens décédés collectées dans l’Outre-Monde",
      [Lang.DE]: "Anzahl der im Ausland gesammelten Seelen verstorbener Bürger",
      [Lang.ES]: "Cantidad de almas recolectadas de habitantes fallecidos en el Ultramundo"
    },
    icon: "r_collec2",
    community: false,
    rare: false
  },
  [PictoId.MYSTIC2]: {
    id: PictoId.MYSTIC2,
    numericalId: 102,
    name: {
      [Lang.EN]: "Mystical transformation",
      [Lang.FR]: "Trans­formation mystique",
      [Lang.DE]: "Mystische Transformation",
      [Lang.ES]: "Transformación Mística"
    },
    description: {
      [Lang.EN]: "Number of souls trafficked by you at the Workshop.",
      [Lang.FR]: "Nombre d’âmes trafiquées par vos soins à l’Atelier.",
      [Lang.DE]: "Anzahl der Seelen, die du in der Werkstatt umgewandelt hast",
      [Lang.ES]: "Cantidad de almas que has transformado en el Taller"
    },
    icon: "r_mystic2",
    community: false,
    rare: false
  },
  [PictoId.UFC]: {
    id: PictoId.UFC,
    numericalId: 103,
    name: {
      [Lang.EN]: "UFC",
      [Lang.FR]: "UFC",
      [Lang.DE]: "UFC",
      [Lang.ES]: "UFC"
    },
    description: {
      [Lang.EN]: "Honorary prize for participation in the UFC!",
      [Lang.FR]: "Prix d'honneur pour la participation à l'UFC!",
      [Lang.DE]: "Ehrenpreis für die Teilnahme am UFC!",
      [Lang.ES]: "¡Premio honorífico por participación en el UFC!"
    },
    icon: "r_ufc",
    community: true,
    rare: false
  },
  [PictoId.RIPFLASH]: {
    id: PictoId.RIPFLASH,
    numericalId: 104,
    name: {
      [Lang.EN]: "Are we still in the Alpha?",
      [Lang.FR]: "Sommes-nous toujours dans l'alpha?",
      [Lang.DE]: "Sind wir noch in der Alpha?",
      [Lang.ES]: "¿Ya salimos de la versión Alfa?"
    },
    description: {
      [Lang.EN]: "This is an extremely rare reward reserved for the first MyHordes players to experience the final with a capital F.",
      [Lang.FR]: "C'est une récompense extrêmement rare réservée aux premiers joueurs de MyHordes ayant vécu la fin avec un grand F.",
      [Lang.DE]: "Dies ist eine äußerst seltene Belohnung, die den ersten MyHordes-Spielern vorbehalten ist, die das Finale mit großem F erlebt haben.",
      [Lang.ES]: "Esta es una Distinción extremadamente rara reservada a los primeros jugadores de MyHordes, quienes presenciaron el final, uno con F mayúscula."
    },
    icon: "r_ripflash",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.TAMWIN]: {
    id: PictoId.TAMWIN,
    numericalId: 105,
    name: {
      [Lang.EN]: "Legendary tamer",
      [Lang.FR]: "Apprivoiseur légendaire",
      [Lang.DE]: "Legendärer Dompteur",
      [Lang.ES]: "Domador legendario"
    },
    description: {
      [Lang.EN]: "Award for the tamer members who won the Clash of the Titans event!",
      [Lang.FR]: "Victoire en tant qu'Apprivoiseur lors du Choc des Héros !",
      [Lang.DE]: "Auszeichnung für die Mitglieder der Dompteuren-Liga, die beim Shock of Heroes Event gewonnen haben!",
      [Lang.ES]: "Distinción entregada a los miembros del pueblo domador que ganó el Choque de Héroes."
    },
    icon: "r_tamwin",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.JBASIC]: {
    id: PictoId.JBASIC,
    numericalId: 106,
    name: {
      [Lang.EN]: "Resident",
      [Lang.FR]: "Habitant",
      [Lang.DE]: "Einwohner",
      [Lang.ES]: "Habitante"
    },
    description: {
      [Lang.EN]: "Number of days spent as a regular Resident.",
      [Lang.FR]: "Jours passés en tant qu'Habitant.",
      [Lang.DE]: "Anzahl der Tage, die du als Einwohner gespielt hast.",
      [Lang.ES]: "Días pasados ​​como un simple habitante."
    },
    icon: "r_jbasic",
    community: false,
    rare: false
  },
  [PictoId.SCADDH]: {
    id: PictoId.SCADDH,
    numericalId: 107,
    name: {
      [Lang.EN]: "Scavenger - Winner of DoE",
      [Lang.FR]: "Fouineur gagnant du DDH",
      [Lang.DE]: "Buddler - Gewinner des DdA",
      [Lang.ES]: "DdO - Ganador Excavador"
    },
    description: {
      [Lang.EN]: "Victory as a Scavenger during the Duel of Eights!",
      [Lang.FR]: "Victoire en tant que Fouineur lors du Duel des Huit !",
      [Lang.DE]: "Auszeichnung für die Mitglieder der Buddler-Liga, die beim Duell der Achter gewonnen haben!",
      [Lang.ES]: "Distinción entregada a los miembros del pueblo Excavador que ganó el Duelo de Ocho."
    },
    icon: "r_scaddh",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  },
  [PictoId.DDH]: {
    id: PictoId.DDH,
    numericalId: 108,
    name: {
      [Lang.EN]: "Duel of Eights",
      [Lang.FR]: "Duel des Huit",
      [Lang.DE]: "Duell der Achter",
      [Lang.ES]: "Duelo de los Ocho"
    },
    description: {
      [Lang.EN]: "Honorary reward for participating in the Duel of Eights!",
      [Lang.FR]: "Récompense honorifique pour une participation au Duel des Huit !",
      [Lang.DE]: "Ehrenpreis für die Teilname am Duell der Achter Event!",
      [Lang.ES]: "¡Recompensa honorífica por participar al Duelo de los Ocho!"
    },
    icon: "r_ddh",
    community: false,
    rare: false
  },
  [PictoId.EVENTWIN]: {
    id: PictoId.EVENTWIN,
    numericalId: 109,
    name: {
      [Lang.EN]: "Event winner",
      [Lang.FR]: "Gagnant d'évènement",
      [Lang.DE]: "Eventsieger",
      [Lang.ES]: "Ganador de evento"
    },
    description: {
      [Lang.EN]: "Distinction obtained following your designation as winner of a community event, congrats!",
      [Lang.FR]: "Distinction obtenue suite à votre désignation comme vainqueur d'un événement communautaire, bravo !",
      [Lang.DE]: "Auszeichnung für deinen Sieg in einem Community-Event, Glückwünsch!",
      [Lang.ES]: "Distinción obtenida tras su designación como ganador de un evento comunitario, ¡enhorabuena!"
    },
    icon: "r_eventwin",
    community: false,
    rare: false
  },
  [PictoId.EVENTPART]: {
    id: PictoId.EVENTPART,
    numericalId: 110,
    name: {
      [Lang.EN]: "Event participant",
      [Lang.FR]: "Participant d'évènement",
      [Lang.DE]: "Eventteilnehmer",
      [Lang.ES]: "Participante de evento"
    },
    description: {
      [Lang.EN]: "Distinction obtained following your participation in a community event.",
      [Lang.FR]: "Distinction obtenue suite à votre participation à un événement communautaire.",
      [Lang.DE]: "Auszeichnung für deine Teilnahme an einem Community-Event.",
      [Lang.ES]: "Distinción obtenida tras su participación en un evento comunitario."
    },
    icon: "r_eventpart",
    community: false,
    rare: false
  },
  [PictoId.THERMAL]: {
    id: PictoId.THERMAL,
    numericalId: 111,
    name: {
      [Lang.EN]: "Wonder: Blue Gold Thermal baths",
      [Lang.FR]: "Merveille : Thermes de l'Or bleu",
      [Lang.DE]: "Wunderwerk: Blaugoldige Thermalbäder",
      [Lang.ES]: "Maravilla: Baños Termales de Oro Azul"
    },
    description: {
      [Lang.EN]: "Hey, you should have thought about your soap!",
      [Lang.FR]: "Hé, tu aurais dû penser à ton savon !",
      [Lang.DE]: "Hey, du hättest an deine Seife denken sollen!",
      [Lang.ES]: "¡Oye, deberías haber previsto jabón!"
    },
    icon: "r_thermal",
    community: false,
    rare: true
  },
  [PictoId.CBURN]: {
    id: PictoId.CBURN,
    numericalId: 112,
    name: {
      [Lang.EN]: "Body cremators",
      [Lang.FR]: "Crémateur de corps",
      [Lang.DE]: "Leichenverbrenner",
      [Lang.ES]: "Cremación de cuerpos"
    },
    description: {
      [Lang.EN]: "Performed fiery burial rituals on the corpses of citizens",
      [Lang.FR]: "Nombre de rituels funéraires effectués sur les cadavres des citoyens",
      [Lang.DE]: "Durchgeführte feurige Begräbnisrituale an den Leichen von Bürgern",
      [Lang.ES]: "Realizaron rituales funerarios ardientes con los cuerpos de los habitantes"
    },
    icon: "r_cburn",
    community: false,
    rare: false
  },
  [PictoId.DECOFEIST]: {
    id: PictoId.DECOFEIST,
    numericalId: 113,
    name: {
      [Lang.EN]: "Festive Decoration",
      [Lang.FR]: "Décoration festive",
      [Lang.DE]: "Festliche Dekoration",
      [Lang.ES]: "Decoración festiva"
    },
    description: {
      [Lang.EN]: "Number of festivities you attended.",
      [Lang.FR]: "Nombre de festivités auxquelles vous avez assisté.",
      [Lang.DE]: "Anzahl der Feierlichkeiten, an denen Sie teilgenommen haben.",
      [Lang.ES]: "Número de festividades en las que has participado."
    },
    icon: "r_decofeist",
    community: false,
    rare: false
  },
  [PictoId.TECHWIN]: {
    id: PictoId.TECHWIN,
    numericalId: 114,
    name: {
      [Lang.EN]: "Technician - Winner of the SoH",
      [Lang.FR]: "Technicien gagnant du CDH",
      [Lang.DE]: "Techniker - Gewinner des SoH",
      [Lang.ES]: "Ganador Técnico del CDH"
    },
    description: {
      [Lang.EN]: "Victory as a Technician during the Shock of Heroes!",
      [Lang.FR]: "Victoire en tant que Technicien lors du Choc des Héros !",
      [Lang.DE]: "Sieg für die Techniker beim Shock of Heroes Event!",
      [Lang.ES]: "¡Victoria como Técnico durante el Choque de Héroes!"
    },
    icon: "r_techwin",
    community: false,
    rare: true,
    titles: [
      {
        quantity: 1
      }
    ]
  }

};