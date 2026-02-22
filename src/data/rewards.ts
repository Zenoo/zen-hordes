import { Reward, RewardId } from './types';

export const rewards: Readonly<Record<RewardId, Reward>> = {
  [RewardId.HEROAC]: {
    id: RewardId.HEROAC,
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
        name: {
          [Lang.DE]: "X-Men Leser",
          [Lang.EN]: "Comic book fan",
          [Lang.FR]: "Fan des X-Men",
          [Lang.ES]: "Fan de X-Men"
        },
        quantity: 15,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Aussergewöhnlicher Bürger",
          [Lang.EN]: "Extraordinary citizen",
          [Lang.FR]: "Citoyen hors norme",
          [Lang.ES]: "Habitante fuera de serie"
        },
        quantity: 30,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Wunder",
          [Lang.EN]: "Prodigy",
          [Lang.FR]: "Prodige",
          [Lang.ES]: "Prodigio"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Werdender Superheld",
          [Lang.EN]: "Superhero in training",
          [Lang.FR]: "Super-héros en devenir",
          [Lang.ES]: "Aspirante a superhéroe"
        },
        quantity: 70
      },
      {
        name: {
          [Lang.DE]: "Volksheld",
          [Lang.EN]: "Champion of the people",
          [Lang.FR]: "Héros du peuple",
          [Lang.ES]: "Héroe popular"
        },
        quantity: 90
      },
      {
        name: {
          [Lang.DE]: "Neo",
          [Lang.EN]: "I'm Batman",
          [Lang.FR]: "L'incroyable citoyen",
          [Lang.ES]: "Soy una leyenda"
        },
        quantity: 120
      },
      {
        name: {
          [Lang.DE]: "Erlöser der Menschheit",
          [Lang.EN]: "Saviour of Citizenkind",
          [Lang.FR]: "Sauveur de l’humanité",
          [Lang.ES]: "Salvador de la humanidad"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Außenweltlegende",
          [Lang.EN]: "Legend of the World Beyond",
          [Lang.FR]: "Légende de l’Outre-Monde",
          [Lang.ES]: "Superhéroe"
        },
        quantity: 200
      },
      {
        name: {
          [Lang.DE]: "Messie der verlorenen Welt",
          [Lang.EN]: "Lost World Messiah",
          [Lang.FR]: "Messie du monde perdu",
          [Lang.ES]: "Mesías del Mundo Perdido"
        },
        quantity: 500
      },
      {
        name: {
          [Lang.DE]: "Mein Name ist Nobody",
          [Lang.EN]: "My name is nobody",
          [Lang.FR]: "Mon nom est personne",
          [Lang.ES]: "Mi nombre es ninguno"
        },
        quantity: 850
      },
      {
        name: {
          [Lang.DE]: "Ein Sternbild trägt meinen Namen",
          [Lang.EN]: "They named a constellation after me",
          [Lang.FR]: "J'ai donné mon nom à une constellation",
          [Lang.ES]: "Una constelación lleva mi nombre"
        },
        quantity: 1000
      }
    ]
  },
  [RewardId.ALCOOL]: {
    id: RewardId.ALCOOL,
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
        name: {
          [Lang.DE]: "Nur ein Finger",
          [Lang.EN]: "Just one finger!",
          [Lang.FR]: "Juste un doigt !",
          [Lang.ES]: "¡Solo un dedo!"
        },
        quantity: 30
      },
      {
        name: {
          [Lang.DE]: "Plünderer der Schnapsläden",
          [Lang.EN]: "Pilager of the liquor store.",
          [Lang.FR]: "Pilier de comptoir",
          [Lang.ES]: "Ladron de la licorería."
        },
        quantity: 60
      },
      {
        name: {
          [Lang.DE]: "Hennessy Highwayman",
          [Lang.EN]: "Tavern robber",
          [Lang.FR]: "Routier du rhum",
          [Lang.ES]: "Salteador de tabernas"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Barney Gumble der Außenwelt",
          [Lang.EN]: "Barney Gumble of the world beyond",
          [Lang.FR]: "Barney Gumble de l'Outre-Monde",
          [Lang.ES]: "Barney Gumble del Ultramundo"
        },
        quantity: 300
      },
      {
        name: {
          [Lang.DE]: "Fass das Saufen lieber sein",
          [Lang.EN]: "Absinthe from drinking next time eh?!",
          [Lang.FR]: "Absinthe toi la prochaine fois",
          [Lang.ES]: "Absenta de beber la próxima vez, ¿eh?"
        },
        quantity: 400
      },
      {
        name: {
          [Lang.DE]: "Gib mir was zu saufen oder es knallt!",
          [Lang.EN]: "Gimme a drink or the dog gets it!",
          [Lang.FR]: "A boire ou j'tue le chien !",
          [Lang.ES]: "¡Dame un trago o el perro sufrira las consecuencias!"
        },
        quantity: 500
      },
      {
        name: {
          [Lang.DE]: "Alles unter 55% ist Wasser",
          [Lang.EN]: "If it's under 55 proof it's water!",
          [Lang.FR]: "Avant 55°, c'est de l'eau",
          [Lang.ES]: "Si son menos de 55 tragos, ¡es agua!"
        },
        quantity: 600
      },
      {
        name: {
          [Lang.DE]: "Dialyse",
          [Lang.EN]: "Dialysis",
          [Lang.FR]: "Sans Foie ni Loi",
          [Lang.ES]: "Diálisis"
        },
        quantity: 800
      }
    ]
  },
  [RewardId.HOMEUP]: {
    id: RewardId.HOMEUP,
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
  [RewardId.REFINE]: {
    id: RewardId.REFINE,
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
  [RewardId.CWATER]: {
    id: RewardId.CWATER,
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
        name: {
          [Lang.DE]: "Nein, das Ding fasse ich nicht an.",
          [Lang.EN]: "Silver Showerer",
          [Lang.FR]: "Grand arroseur",
          [Lang.ES]: "Regador Ocasional"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Leichenhygieniker",
          [Lang.EN]: "Golden Showerer",
          [Lang.FR]: "Mouilleur de cadavres",
          [Lang.ES]: "¿Un chorrito más señor?"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Ich liebe den Geruch von gewaschenen Leichen am Morgen.",
          [Lang.EN]: "Platinum Showerer",
          [Lang.FR]: "Pasteur du village",
          [Lang.ES]: "Amo el olor a Cadaver remojado por la mañana"
        },
        quantity: 200
      }
    ]
  },
  [RewardId.SOLBAN]: {
    id: RewardId.SOLBAN,
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
        name: {
          [Lang.DE]: "Abstauber",
          [Lang.EN]: "Bin Raker",
          [Lang.FR]: "Fouineur de décharge",
          [Lang.ES]: "Rastrillador del vertedero"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Müllkind",
          [Lang.EN]: "Dumpster Diver",
          [Lang.FR]: "Enquiquineur débrouillard",
          [Lang.ES]: "Recolector de basura"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Autonomer Müll",
          [Lang.EN]: "Autonomous junk",
          [Lang.FR]: "Indésirable autonome",
          [Lang.ES]: "Investigador ingenioso"
        },
        quantity: 200
      },
      {
        name: {
          [Lang.DE]: "Freier Bürger",
          [Lang.EN]: "Free citizen!",
          [Lang.FR]: "Citoyen libre !",
          [Lang.ES]: "¡Habitante libre!"
        },
        quantity: 300
      },
      {
        name: {
          [Lang.DE]: "Alles für meinen Mund",
          [Lang.EN]: "Everything for my mouth",
          [Lang.FR]: "Tout pour ma gueule",
          [Lang.ES]: "Todo para mi boca"
        },
        quantity: 400
      },
      {
        name: {
          [Lang.DE]: "Ich brauche niemanden",
          [Lang.EN]: "I do not need anyone",
          [Lang.FR]: "Je n'ai besoin de personne",
          [Lang.ES]: "No necesito a nadie"
        },
        quantity: 550
      },
      {
        name: {
          [Lang.DE]: "Unabhängiger Großeinsiedler",
          [Lang.EN]: "Great Independent Hermit",
          [Lang.FR]: "Grand Ermite indépendant",
          [Lang.ES]: "Gran Eremita independiente"
        },
        quantity: 700
      },
      {
        name: {
          [Lang.DE]: "Che Guevara der Wüste",
          [Lang.EN]: "Che Guevara of the World Beyond",
          [Lang.FR]: "Che Guevara du désert",
          [Lang.ES]: "Che Guevara del Ultramundo"
        },
        quantity: 1000
      }
    ]
  },
  [RewardId.BAN]: {
    id: RewardId.BAN,
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
  [RewardId.WOUND]: {
    id: RewardId.WOUND,
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
  [RewardId.COOKR]: {
    id: RewardId.COOKR,
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
        name: {
          [Lang.DE]: "Kantinenkoch",
          [Lang.EN]: "Cantine Cook",
          [Lang.FR]: "Cuistot de cantine",
          [Lang.ES]: "Ayudante de cocina"
        },
        quantity: 10,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Kleiner Küchenchef",
          [Lang.EN]: "Commis Chef",
          [Lang.FR]: "Petit chef cuistot",
          [Lang.ES]: "Cocinerillo"
        },
        quantity: 25,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Meister Eintopf",
          [Lang.EN]: "Demi Chef de Partie",
          [Lang.FR]: "Cordon bleu du village",
          [Lang.ES]: "Cordon bleu del barrio"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Großer Wüstenkonditor",
          [Lang.EN]: "Mama's Finest",
          [Lang.FR]: "Grand pâtissier du désert",
          [Lang.ES]: "Cordon bleu del pueblo"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Begnadeter Wüstenkonditor",
          [Lang.EN]: "Under Chef",
          [Lang.FR]: "Maître pâtissier du désert",
          [Lang.ES]: "Cuchara-brava"
        },
        quantity: 250
      },
      {
        name: {
          [Lang.DE]: "Cooking Mama",
          [Lang.EN]: "Cooking Papa",
          [Lang.FR]: "Cooking-papa",
          [Lang.ES]: "Cooking Papa"
        },
        quantity: 500
      },
      {
        name: {
          [Lang.DE]: "Meisterhafter Kochlöffelschwinger",
          [Lang.EN]: "Pukka Chef",
          [Lang.FR]: "Expert de la cuillère",
          [Lang.ES]: "Maestro Cocinero"
        },
        quantity: 1000
      },
      {
        name: {
          [Lang.DE]: "Meisterkoch der Sterne",
          [Lang.EN]: "Marco Pierre Die2Nite",
          [Lang.FR]: "Top-Chef de lʼoutre-monde",
          [Lang.ES]: "MasterChef"
        },
        quantity: 2000
      }
    ]
  },
  [RewardId.ANIMAL]: {
    id: RewardId.ANIMAL,
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
        name: {
          [Lang.DE]: "Stadtmetzger",
          [Lang.EN]: "Local Butcher",
          [Lang.FR]: "30 millions d’ennemis",
          [Lang.ES]: "Amigo de los animales"
        },
        quantity: 30,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Spezialität: Hundesteaks",
          [Lang.EN]: "Anyone for a fat-cat-kebab?",
          [Lang.FR]: "Responsable d'extinctions",
          [Lang.ES]: "Encargado de extinciones"
        },
        quantity: 60,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Miezi? Jaaaa, komm her...",
          [Lang.EN]: "Scourge of the animal kingdom...",
          [Lang.FR]: "Fléau du monde animal",
          [Lang.ES]: "Amenaza del mundo animal"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Fleisch ist mein Gemüse",
          [Lang.EN]: "If we're meant to eat vegetables, why are animals so tasty?",
          [Lang.FR]: "Spécialité : steak de chaton",
          [Lang.ES]: "Especialidad: Puré de gato"
        },
        quantity: 300
      },
      {
        name: {
          [Lang.EN]: "30 millions d'ennemis",
          [Lang.FR]: "30 millions d'ennemis",
          [Lang.DE]: "30 millions d'ennemis",
          [Lang.ES]: "30 millions d'ennemis"
        },
        quantity: 500
      }
    ]
  },
  [RewardId.CMPLST]: {
    id: RewardId.CMPLST,
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
        name: {
          [Lang.DE]: "Furchtloser Camper",
          [Lang.EN]: "Unshakeable Camper",
          [Lang.FR]: "Campeur inébranlable",
          [Lang.ES]: "Campista inquebrantable"
        },
        quantity: 10,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Waisenkind der Wüste",
          [Lang.EN]: "Desert Orphan",
          [Lang.FR]: "Orphelin du désert",
          [Lang.ES]: "Huérfano del desierto"
        },
        quantity: 25,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Unglaubliche Entschlossenheit",
          [Lang.EN]: "Incredible determination",
          [Lang.FR]: "Incroyable détermination",
          [Lang.ES]: "Increíble determinación"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Der letzte Überlebende",
          [Lang.EN]: "The Last Survivor",
          [Lang.FR]: "Le dernier survivant",
          [Lang.ES]: "El último superviviente"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Ich gehe alleine.",
          [Lang.EN]: "I walk alone.",
          [Lang.FR]: "Je marche seul.",
          [Lang.ES]: "Voy solo."
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Neil Armstrong der Außenwelt",
          [Lang.EN]: "Neil Armstrong of the World Beyond",
          [Lang.FR]: "Neil Armstrong de l'Outre Monde",
          [Lang.ES]: "Neil Armstrong del Ultramundo"
        },
        quantity: 200
      }
    ]
  },
  [RewardId.CAMP]: {
    id: RewardId.CAMP,
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
        name: {
          [Lang.DE]: "Außenweltschläfer",
          [Lang.EN]: "Suicide Sleeper",
          [Lang.FR]: "Dormeur suicidaire",
          [Lang.ES]: "Campista suicida"
        },
        quantity: 10,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Allein in dieser Welt",
          [Lang.EN]: "Alone in the Dark",
          [Lang.FR]: ["Seule au monde…", "Seul au monde…", "Seul(e) au monde…"],
          [Lang.ES]: "Carpa diem"
        },
        quantity: 25,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Der mit den Zombies tanzt",
          [Lang.EN]: "Dances with zombies",
          [Lang.FR]: "Danse avec les zombies",
          [Lang.ES]: "Carnada para zombies"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Ich sehe überall Tote!",
          [Lang.EN]: "I see dead people - everywhere!",
          [Lang.FR]: "Je vois des morts partout",
          [Lang.ES]: "¡Desafío aceptado!"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Ich komme heute Nacht nicht heim...",
          [Lang.EN]: "Don't wait up...",
          [Lang.FR]: "Je ne rentrerai pas ce soir…",
          [Lang.ES]: "Todo terreno"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Ein Mann gegen die Außenwelt",
          [Lang.EN]: "Man vs World Beyond",
          [Lang.FR]: "Une fois, au stage d’été…",
          [Lang.ES]: "¡Fuera de mi camino!"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Stadtallergie",
          [Lang.EN]: "I'm allergic to something in town.",
          [Lang.FR]: "Allergique à la ville",
          [Lang.ES]: "Soy alérgico a algo en el pueblo."
        },
        quantity: 200
      },
      {
        name: {
          [Lang.DE]: "Wo ich hinguck, seh ich Gegend.",
          [Lang.EN]: "So I guess we're not waiting for Bob?",
          [Lang.FR]: "Bah alors on n'attend pas Patrick ?",
          [Lang.ES]: "¿Entonces supongo que no estamos esperando a Bob?"
        },
        quantity: 250
      },
      {
        name: {
          [Lang.DE]: "Runaway Michael",
          [Lang.EN]: "Bear Grylls",
          [Lang.FR]: "Michel Fugueur",
          [Lang.ES]: "Sin techo ni dientes"
        },
        quantity: 300
      },
      {
        name: {
          [Lang.DE]: "Ohne Dach oder Leber",
          [Lang.EN]: "Without a roof or a tooth.",
          [Lang.FR]: "Sans toit ni foie",
          [Lang.ES]: "Sin techo ni hígado"
        },
        quantity: 350
      },
      {
        name: {
          [Lang.EN]: "Je ne suis pas là",
          [Lang.FR]: "Je ne suis pas là",
          [Lang.DE]: "Je ne suis pas là",
          [Lang.ES]: "Je ne suis pas là"
        },
        quantity: 400
      },
      {
        name: {
          [Lang.EN]: "Juste moi et les étoiles...",
          [Lang.FR]: "Juste moi et les étoiles...",
          [Lang.DE]: "Juste moi et les étoiles...",
          [Lang.ES]: "Juste moi et les étoiles..."
        },
        quantity: 450
      },
      {
        name: {
          [Lang.EN]: "Immunisé contre les moustiques",
          [Lang.FR]: "Immunisé contre les moustiques",
          [Lang.DE]: "Immunisé contre les moustiques",
          [Lang.ES]: "Immunisé contre les moustiques"
        },
        quantity: 499
      },
      {
        name: {
          [Lang.EN]: "Dormir en ville ? Pourquoi ?",
          [Lang.FR]: "Dormir en ville ? Pourquoi ?",
          [Lang.DE]: "Dormir en ville ? Pourquoi ?",
          [Lang.ES]: "Dormir en ville ? Pourquoi ?"
        },
        quantity: 600
      },
      {
        name: {
          [Lang.EN]: "J'irai dormir chez vous",
          [Lang.FR]: "J'irai dormir chez vous",
          [Lang.DE]: "J'irai dormir chez vous",
          [Lang.ES]: "J'irai dormir chez vous"
        },
        quantity: 700
      },
      {
        name: {
          [Lang.EN]: "Mieux seul que mal accompagné",
          [Lang.FR]: "Mieux seul que mal accompagné",
          [Lang.DE]: "Mieux seul que mal accompagné",
          [Lang.ES]: "Mieux seul que mal accompagné"
        },
        quantity: 800
      },
      {
        name: {
          [Lang.EN]: "SDF",
          [Lang.FR]: "SDF",
          [Lang.DE]: "SDF",
          [Lang.ES]: "SDF"
        },
        quantity: 900
      },
      {
        name: {
          [Lang.EN]: "Roi du désert",
          [Lang.FR]: "Roi du désert",
          [Lang.DE]: "Roi du désert",
          [Lang.ES]: "Roi du désert"
        },
        quantity: 1000
      }
    ]
  },
  [RewardId.CANNIB]: {
    id: RewardId.CANNIB,
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
        name: {
          [Lang.DE]: "Menschenfleischliebhaber",
          [Lang.EN]: "Meat Muncher",
          [Lang.FR]: "Amateur de viande humaine",
          [Lang.ES]: "Devorador de hombres"
        },
        quantity: 10,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Hannibalfan",
          [Lang.EN]: "Dr Death's Dietician",
          [Lang.FR]: "Fan d’Hannibal",
          [Lang.ES]: "Fan de Hannibal"
        },
        quantity: 40,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Totmacher",
          [Lang.EN]: "Check out my skin sombrero!",
          [Lang.FR]: "Dévoreur de citoyens",
          [Lang.ES]: "Creador de la muerte"
        },
        quantity: 80
      },
      {
        name: {
          [Lang.DE]: "Jeffrey Dahmer",
          [Lang.EN]: "Lunches like Lecter",
          [Lang.FR]: "Croque-mort",
          [Lang.ES]: "Jeffrey Dahmer"
        },
        quantity: 120
      },
      {
        name: {
          [Lang.DE]: "Fast schon ein Zombie...",
          [Lang.EN]: "Wannabe Zombie...",
          [Lang.FR]: "Zombie en devenir",
          [Lang.ES]: "Aspirante a zombi..."
        },
        quantity: 180
      },
      {
        name: {
          [Lang.DE]: "Schmeckt am besten wenn's noch schreit!",
          [Lang.EN]: "It's better when they scream.",
          [Lang.FR]: "C’est meilleur si ça hurle.",
          [Lang.ES]: "Es mejor cuando gritan."
        },
        quantity: 250
      },
      {
        name: {
          [Lang.DE]: "Die Macht der Proteine",
          [Lang.EN]: "Full of protein.",
          [Lang.FR]: "Le plein de protéines.",
          [Lang.ES]: "Lleno de proteínas."
        },
        quantity: 500
      },
      {
        name: {
          [Lang.DE]: "Nackt und Zerfleischt",
          [Lang.EN]: "Holocaust cannibals",
          [Lang.FR]: "Cannibales Holocauste",
          [Lang.ES]: "Caníbal del Holocausto"
        },
        quantity: 1000
      }
    ]
  },
  [RewardId.WATGUN]: {
    id: RewardId.WATGUN,
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
        name: {
          [Lang.DE]: "Super Soaker",
          [Lang.EN]: "Super Soaker",
          [Lang.FR]: "Pistolereau",
          [Lang.ES]: "Pistolero de agua"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Wasserwaffen-Spezialist",
          [Lang.EN]: "H2Operative",
          [Lang.FR]: "Spécialiste en pistolets à eau",
          [Lang.ES]: "Especialista con armas de agua"
        },
        quantity: 25
      },
      {
        name: {
          [Lang.DE]: "Hydraulik-Engineering",
          [Lang.EN]: "Hydraulics Engineer",
          [Lang.FR]: "Ingénierie hydraulique",
          [Lang.ES]: "Ingeniero Hidráulico"
        },
        quantity: 35
      },
      {
        name: {
          [Lang.DE]: "Abstieg der Atlanteaner",
          [Lang.EN]: "Atlantean Ancestry",
          [Lang.FR]: "Descendant des atlantes",
          [Lang.ES]: "Descendiente de los Atlantes"
        },
        quantity: 60
      }
    ]
  },
  [RewardId.CHSTXL]: {
    id: RewardId.CHSTXL,
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
        name: {
          [Lang.DE]: "Hans im Glück",
          [Lang.EN]: "The name's Nate Fortu",
          [Lang.FR]: "Spécialiste en aubaine",
          [Lang.ES]: "Golpe de Suerte"
        },
        quantity: 5,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Vierklettriges Kleeblatt",
          [Lang.EN]: "Do you feel lucky, punk?",
          [Lang.FR]: "Maître du coup de bol",
          [Lang.ES]: "Maestro del Azar"
        },
        quantity: 10,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Fortuna",
          [Lang.EN]: "Windfall Catcher",
          [Lang.FR]: "Grand veinard en chef",
          [Lang.ES]: "Afortunado"
        },
        quantity: 15
      },
      {
        name: {
          [Lang.DE]: "Gontran Happiness",
          [Lang.EN]: "Jack Pott",
          [Lang.FR]: "Gontran Bonheur",
          [Lang.ES]: "Bestia salvaje"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Lucky 7",
          [Lang.EN]: "Lucky 7",
          [Lang.FR]: "Lucky 7",
          [Lang.ES]: "7 de la Suerte"
        },
        quantity: 30
      },
      {
        name: {
          [Lang.DE]: "Money for Nothing",
          [Lang.EN]: "Money for Nothing",
          [Lang.FR]: "Money for Nothing",
          [Lang.ES]: "Dinero para Nada"
        },
        quantity: 50
      }
    ]
  },
  [RewardId.BUILDR]: {
    id: RewardId.BUILDR,
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
        name: {
          [Lang.DE]: "Maurerlehrling",
          [Lang.EN]: "Labourer",
          [Lang.FR]: "Ouvrier",
          [Lang.ES]: "Obrero"
        },
        quantity: 100,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Maurer",
          [Lang.EN]: "Builder",
          [Lang.FR]: "Bâtisseur",
          [Lang.ES]: "Urbanista"
        },
        quantity: 200,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Polier",
          [Lang.EN]: "Site Manager",
          [Lang.FR]: "Chef de chantier",
          [Lang.ES]: "Jefe de construcción"
        },
        quantity: 400
      },
      {
        name: {
          [Lang.DE]: "Baustellenleiter",
          [Lang.EN]: "Architect",
          [Lang.FR]: "Architecte",
          [Lang.ES]: "Maestro constructor"
        },
        quantity: 700
      },
      {
        name: {
          [Lang.DE]: "Architekt (title)",
          [Lang.EN]: "Master Architect",
          [Lang.FR]: "Maître-architecte",
          [Lang.ES]: "Arquitecto"
        },
        quantity: 1300
      },
      {
        name: {
          [Lang.DE]: "Meisterarchitekt",
          [Lang.EN]: "Town Planner",
          [Lang.FR]: "Créateur de villes",
          [Lang.ES]: "Magnate del ladrillo"
        },
        quantity: 2000
      },
      {
        name: {
          [Lang.DE]: "Oscar Niemeyer",
          [Lang.EN]: "Bob the builder",
          [Lang.FR]: "Captain Parpaing",
          [Lang.ES]: "Ramsés del siglo XXI"
        },
        quantity: 3000
      },
      {
        name: {
          [Lang.DE]: "Zement & Garfunkel",
          [Lang.EN]: "Cement & Garfunkle",
          [Lang.FR]: "Ciment & Garfunkel",
          [Lang.ES]: "Cemento y Garfunkle"
        },
        quantity: 4000
      },
      {
        name: {
          [Lang.DE]: "Menschliche Ameisenkolonie",
          [Lang.EN]: "The human ant",
          [Lang.FR]: "Colonie de fourmis humaine",
          [Lang.ES]: "La hormiga humana"
        },
        quantity: 5000
      },
      {
        name: {
          [Lang.DE]: "Arbeiterhelm und Kupferstiefel",
          [Lang.EN]: "The Great Wall of what?",
          [Lang.FR]: "Chapeau moellon et bottes de cuivre",
          [Lang.ES]: "¿La Gran Muralla de qué?"
        },
        quantity: 6000
      },
      {
        name: {
          [Lang.DE]: "Arbeit ist Gesundheit",
          [Lang.EN]: "Pyramid shmyramid",
          [Lang.FR]: "Le travail, c'est la santé",
          [Lang.ES]: "El trabajo es salud"
        },
        quantity: 8000
      },
      {
        name: {
          [Lang.DE]: "Bob der Baumeister",
          [Lang.EN]: "I'm working on the Sagrada",
          [Lang.FR]: "L’abbé Tonière",
          [Lang.ES]: "Bob el constructor"
        },
        quantity: 10000
      }
    ]
  },
  [RewardId.NODRUG]: {
    id: RewardId.NODRUG,
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
        name: {
          [Lang.DE]: "Twinoid ist tabu",
          [Lang.EN]: "Twinoid is taboo",
          [Lang.FR]: "La twinoïde, c’est tabou",
          [Lang.ES]: "Me siento bien"
        },
        quantity: 20,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Keine Macht den Drogen",
          [Lang.EN]: "Happy as Larry",
          [Lang.FR]: "Bien dans sa peau",
          [Lang.ES]: "Me basto y me sobro"
        },
        quantity: 75,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Sowas fasse ICH nicht an",
          [Lang.EN]: "Never touch the stuff, me.",
          [Lang.FR]: "Je touche pas à ça, MOI.",
          [Lang.ES]: "Limpio de polvo y paja"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Vorbild für die Jugend",
          [Lang.EN]: "Just Say No!",
          [Lang.FR]: "Exemple pour la jeunesse",
          [Lang.ES]: "Yo sé cuidar mi cuerpo"
        },
        quantity: 500
      },
      {
        name: {
          [Lang.DE]: "Champions nehmen keine Drogen!",
          [Lang.EN]: "Winners don't use drugs!",
          [Lang.FR]: "Winners don’t use drugs !",
          [Lang.ES]: "Ejemplo para los jóvenes"
        },
        quantity: 1000
      },
      {
        name: {
          [Lang.EN]: "Breaking Good",
          [Lang.FR]: "Breaking Good",
          [Lang.DE]: "Breaking Good",
          [Lang.ES]: "Breaking Good"
        },
        quantity: 1500
      },
      {
        name: {
          [Lang.EN]: "Trop clean pour être honnête",
          [Lang.FR]: "Trop clean pour être honnête",
          [Lang.DE]: "Trop clean pour être honnête",
          [Lang.ES]: "Trop clean pour être honnête"
        },
        quantity: 2500
      },
      {
        name: {
          [Lang.EN]: "Garanti sans OGM",
          [Lang.FR]: "Garanti sans OGM",
          [Lang.DE]: "Garanti sans OGM",
          [Lang.ES]: "Garanti sans OGM"
        },
        quantity: 3333
      },
      {
        name: {
          [Lang.EN]: "Antivax",
          [Lang.FR]: "Antivax",
          [Lang.DE]: "Antivax",
          [Lang.ES]: "Antivax"
        },
        quantity: 4500
      },
      {
        name: {
          [Lang.EN]: "La drogue c'est mal, m'voyez",
          [Lang.FR]: "La drogue c'est mal, m'voyez",
          [Lang.DE]: "La drogue c'est mal, m'voyez",
          [Lang.ES]: "La drogue c'est mal, m'voyez"
        },
        quantity: 6666
      },
      {
        name: {
          [Lang.EN]: "Accro à mon point de contrôle",
          [Lang.FR]: "Accro à mon point de contrôle",
          [Lang.DE]: "Accro à mon point de contrôle",
          [Lang.ES]: "Accro à mon point de contrôle"
        },
        quantity: 8500
      },
      {
        name: {
          [Lang.EN]: "Prix Nobel de Santé",
          [Lang.FR]: "Prix Nobel de Santé",
          [Lang.DE]: "Prix Nobel de Santé",
          [Lang.ES]: "Prix Nobel de Santé"
        },
        quantity: 10000
      }
    ]
  },
  [RewardId.COLLEC]: {
    id: RewardId.COLLEC,
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
        name: {
          [Lang.DE]: "Treffen der 4. Art",
          [Lang.EN]: "Type 4 Encounter",
          [Lang.FR]: "Rencontre du 4ème type",
          [Lang.ES]: "Encuentros de otro mundo"
        },
        quantity: 2
      },
      {
        name: {
          [Lang.DE]: "Hast Du mal Feuer?",
          [Lang.EN]: "Have you got a light?",
          [Lang.FR]: "Vous avez du feu ?",
          [Lang.ES]: "¿Tienes fuego?"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Medium mit Preisnachlass",
          [Lang.EN]: "Psychic for rent",
          [Lang.FR]: "Médium au rabais",
          [Lang.ES]: "Medium principiante"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Amophilis Psychotropes",
          [Lang.EN]: "Amophilis psychotropia",
          [Lang.FR]: "Amophilis psychotropes",
          [Lang.ES]: "Medium profesional"
        },
        quantity: 30
      },
      {
        name: {
          [Lang.DE]: "Blauer Feuerspucker",
          [Lang.EN]: "Blue Fire-breather",
          [Lang.FR]: "Cracheur de flamme bleue",
          [Lang.ES]: "Pescador de Almas"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "I see dead people 0_0",
          [Lang.EN]: "I see dead people 0_0",
          [Lang.FR]: "I see dead people 0_0",
          [Lang.ES]: "Veo gente muerta"
        },
        quantity: 80
      },
      {
        name: {
          [Lang.DE]: "Soul Man",
          [Lang.EN]: "Who you gonna call?",
          [Lang.FR]: "Aspi-rituel",
          [Lang.ES]: "Hombre de Alma"
        },
        quantity: 120
      },
      {
        name: {
          [Lang.DE]: "Lebenssammler",
          [Lang.EN]: "Don't cross the streams",
          [Lang.FR]: "Collectionneur de vie",
          [Lang.ES]: "No cruces los arroyos"
        },
        quantity: 180
      },
      {
        name: {
          [Lang.DE]: "Schnitter der Aussenwelt",
          [Lang.EN]: "I ain't afraid of no ghost",
          [Lang.FR]: "Faucheur de l'outre-monde",
          [Lang.ES]: "No le tengo miedo a ningún fantasma"
        },
        quantity: 300
      }
    ]
  },
  [RewardId.WRESTL]: {
    id: RewardId.WRESTL,
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
        name: {
          [Lang.DE]: "Ultimate Fighter",
          [Lang.EN]: "Ultimate Fighter",
          [Lang.FR]: "Promeneur désespéré",
          [Lang.ES]: "Golpeador de zombies"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Wilde Bestie",
          [Lang.EN]: "Wild Beast",
          [Lang.FR]: "Bête sauvage",
          [Lang.ES]: "Bestia salvaje"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Rambos Großvater",
          [Lang.EN]: "Rambo's ancestor",
          [Lang.FR]: "Ancêtre de Rambo",
          [Lang.ES]: "Antepasado de Rambo"
        },
        quantity: 200
      },
      {
        name: {
          [Lang.DE]: "Absolut keine Angst!",
          [Lang.EN]: "Not even afraid!",
          [Lang.FR]: "Même pas peur !",
          [Lang.ES]: "¡No tengas miedo en absoluto!"
        },
        quantity: 400
      },
      {
        name: {
          [Lang.DE]: "Barhändiger Stripper",
          [Lang.EN]: "Bare-handed stripper",
          [Lang.FR]: "Étripeur à mains nues",
          [Lang.ES]: "Stripper con las manos desnudas"
        },
        quantity: 600
      }
    ]
  },
  [RewardId.EBUILD]: {
    id: RewardId.EBUILD,
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
        name: {
          [Lang.DE]: "Bauherr ohne Sinn und Verstand",
          [Lang.EN]: "Nonsense builder",
          [Lang.FR]: "Bâtisseur du non-sens",
          [Lang.ES]: "Obrero Amateur"
        },
        quantity: 1,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Erbauer der verlorenen Zeit",
          [Lang.EN]: "Founder of Timewasting",
          [Lang.FR]: "Fondateur du temps perdu",
          [Lang.ES]: "Obrero Iluminado"
        },
        quantity: 3,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Erleuchteter Baumeister",
          [Lang.EN]: "Enlightened Builder",
          [Lang.FR]: "Édificateur illuminé",
          [Lang.ES]: "Obrero Optimista"
        },
        quantity: 7
      },
      {
        name: {
          [Lang.DE]: "Maurer aus Leidenschaft",
          [Lang.EN]: "Soul Mason",
          [Lang.FR]: "Maçon du coeur",
          [Lang.ES]: "Top Chef"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Das Unnütze mit dem Angenehmen verbinden",
          [Lang.EN]: "Chief DIY",
          [Lang.FR]: "Joindre l'inutile à l'agréable",
          [Lang.ES]: "Jefe de Manualidades"
        },
        quantity: 15
      },
      {
        name: {
          [Lang.DE]: "Verrückter Architekten-Visionär",
          [Lang.EN]: "Visionary Architect",
          [Lang.FR]: "Architecte visionnaire fou",
          [Lang.ES]: "Arquitecto visionario"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Ich habe einen Plan",
          [Lang.EN]: "I have a plan",
          [Lang.FR]: "J'ai un plan",
          [Lang.ES]: "Tengo un plan"
        },
        quantity: 30
      },
      {
        name: {
          [Lang.DE]: "Hirnverbrannter Baumeister",
          [Lang.EN]: "Demented Master Builder",
          [Lang.FR]: "Maître d'oeuvre dément",
          [Lang.ES]: "Maestro constructor demente"
        },
        quantity: 40
      },
      {
        name: {
          [Lang.DE]: "Meister der Nutzlosigkeit",
          [Lang.EN]: "Master of futility",
          [Lang.FR]: "Maître de l'inutilité",
          [Lang.ES]: "Maestro de la Inutilidad"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Vereister Ingenieur",
          [Lang.EN]: "Fruit Loop Engineer",
          [Lang.FR]: "Ingénieur complètement givré",
          [Lang.ES]: "Ingeniero de Fruit Loop"
        },
        quantity: 60
      },
      {
        name: {
          [Lang.DE]: "Wundervoll nutzlos",
          [Lang.EN]: "Wonderfully futile",
          [Lang.FR]: "Merveilleusement futile",
          [Lang.ES]: "Maravillosamente inútil"
        },
        quantity: 80
      },
      {
        name: {
          [Lang.DE]: "Der Bruce Lee des Spachtels",
          [Lang.EN]: "Bruce Lee of the trowel",
          [Lang.FR]: "Le Bruce Lee de la truelle",
          [Lang.ES]: "El Bruce Lee de la Espatula"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Es ist Zeit für Kathedralen",
          [Lang.EN]: "The time for cathedrals has come",
          [Lang.FR]: "Il est venu le temps des cathédrales",
          [Lang.ES]: "Ha llegado el momento de las catedrales"
        },
        quantity: 120
      },
      {
        name: {
          [Lang.DE]: "Hast du nichts besseres zu tun?",
          [Lang.EN]: "Don't you have better things to do?",
          [Lang.FR]: "Z'avez pas mieux à faire ?",
          [Lang.ES]: "¿No tienes algo mejor que hacer?"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Hohepriesterin des Sonnentempels",
          [Lang.EN]: "High Priest of the Sun Temple",
          [Lang.FR]: "Grand prêtre du temple du soleil",
          [Lang.ES]: "Templo del Sumo Sacerdote del Sol"
        },
        quantity: 200
      }
    ]
  },
  [RewardId.COOKED]: {
    id: RewardId.COOKED,
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
  [RewardId.DIGGER]: {
    id: RewardId.DIGGER,
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
        name: {
          [Lang.DE]: "Archäologielehrling",
          [Lang.EN]: "Archaeologist",
          [Lang.FR]: "Forçat du désert",
          [Lang.ES]: "Fuerzudo del desierto"
        },
        quantity: 50,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Archäologe",
          [Lang.EN]: "Sand Shifter",
          [Lang.FR]: "Ouvrier des sables",
          [Lang.ES]: "Conan de las arenas"
        },
        quantity: 300,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Grabungsleiter",
          [Lang.EN]: "Ruin Restorer",
          [Lang.FR]: "Découvreur de bâtiments",
          [Lang.ES]: "Hombre Caterpillar"
        },
        quantity: 750
      },
      {
        name: {
          [Lang.DE]: "Großer Löcherbuddler",
          [Lang.EN]: "Indiana Jones",
          [Lang.FR]: "Creuseur de grands trous",
          [Lang.ES]: "Excavadora de agujeros grandes"
        },
        quantity: 1000
      },
      {
        name: {
          [Lang.DE]: "Riesenmaulwurf",
          [Lang.EN]: "Desert Rat",
          [Lang.FR]: "Taupe géante",
          [Lang.ES]: "Rata del desierto"
        },
        quantity: 1500
      }
    ]
  },
  [RewardId.DECO]: {
    id: RewardId.DECO,
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
        name: {
          [Lang.DE]: "Ästhet",
          [Lang.EN]: "Coquette",
          [Lang.FR]: "Coquet",
          [Lang.ES]: "Detallista"
        },
        quantity: 100,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Schaufenstergestalter",
          [Lang.EN]: "Good taste personified",
          [Lang.FR]: "Citoyen de bon goût",
          [Lang.ES]: "Habitante con buen gusto"
        },
        quantity: 250,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Innenarchitekt",
          [Lang.EN]: "Interior designer",
          [Lang.FR]: "Architecte d’intérieur",
          [Lang.ES]: "Decorador de interiores"
        },
        quantity: 500
      },
      {
        name: {
          [Lang.DE]: "Möbelgourmet",
          [Lang.EN]: "Marquee Master",
          [Lang.FR]: "Maître-décorateur de tentes",
          [Lang.ES]: "Decorador con estilo"
        },
        quantity: 1000
      },
      {
        name: {
          [Lang.DE]: "Ordnung muss sein!",
          [Lang.EN]: "Aesthetics Expert",
          [Lang.FR]: "Maître Es-thète",
          [Lang.ES]: "Maestro de la estética"
        },
        quantity: 1500
      },
      {
        name: {
          [Lang.DE]: "Ein schöneres Leben",
          [Lang.EN]: "Style is eternal...",
          [Lang.FR]: "Plus belle la vie !",
          [Lang.ES]: "El estilo es eterno..."
        },
        quantity: 2000
      },
      {
        name: {
          [Lang.DE]: "Großer E-KEA Katalog",
          [Lang.EN]: "Welcome to the palace.",
          [Lang.FR]: "Grand Catalogue Kiela",
          [Lang.ES]: "Bienvenidos al palacio. "
        },
        quantity: 2500
      }
    ]
  },
  [RewardId.SURGRP]: {
    id: RewardId.SURGRP,
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
        name: {
          [Lang.DE]: "Ewiger Zweiter",
          [Lang.EN]: "Eternally second",
          [Lang.FR]: "Éternel second",
          [Lang.ES]: "Eterno segundo"
        },
        quantity: 5
      },
      {
        name: {
          [Lang.DE]: "Ein Wächter stirbt, aber gibt niemals auf",
          [Lang.EN]: "The guard may perish, but he never gives up!",
          [Lang.FR]: "La garde meurt, mais ne se rend pas !",
          [Lang.ES]: "La guardia puede morir, ¡pero nunca se rinde!"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Der Zweitletzte Mohikaner",
          [Lang.EN]: "The second last of the Mohicans",
          [Lang.FR]: "L'avant-dernier des Mohicans",
          [Lang.ES]: "El segundo último de los mohicanos"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Faaaaaaaast, ach verdammt",
          [Lang.EN]: "Allllllmooooooost, ah nope, damn it!",
          [Lang.FR]: "Eeeeeeeet ben non",
          [Lang.ES]: "Casi!!!, ah no, ¡maldita sea!"
        },
        quantity: 30
      },
      {
        name: {
          [Lang.DE]: "Bis zum Ende und einen Schritt weiter",
          [Lang.EN]: "All the way to the end and a bit further",
          [Lang.FR]: "Jusqu'au bout, et même un peu moins loin",
          [Lang.ES]: "Todo el camino hasta el final y un poco más lejos"
        },
        quantity: 40
      },
      {
        name: {
          [Lang.DE]: "Schließt die Ränke und haltet durch",
          [Lang.EN]: "Close ranks and hold on!",
          [Lang.FR]: "Serrez les rangs... et les fesses...",
          [Lang.ES]: "¡Cierra filas y aguanta!"
        },
        quantity: 60
      },
      {
        name: {
          [Lang.DE]: "Hallo... ist da draußen jemand?",
          [Lang.EN]: "Hello... Is there anybody out there?",
          [Lang.FR]: "Vous êtes là les copains ?",
          [Lang.ES]: "¿Hola, hay alguien ahí afuera?"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Haltet eure Position!",
          [Lang.EN]: "Hold your positions!",
          [Lang.FR]: "Tenez vos positions !",
          [Lang.ES]: "¡Mantenga sus posiciones!"
        },
        quantity: 150
      }
    ]
  },
  [RewardId.DRUG]: {
    id: RewardId.DRUG,
    numericalId: 25,
    name: {
      [Lang.EN]: "Drugs",
      [Lang.FR]: "Drogues",
      [Lang.DE]: "Drogen",
      [Lang.ES]: "Estimulantes"
    },
    description: {
      [Lang.EN]: "The number of funny little pills you have swallowed (or hidden elsewhere...).",
      [Lang.FR]: "Nombre de petits cachets rigolos que vous avez avalés (ou placés ailleurs…).",
      [Lang.DE]: "Anzahl kleiner lustiger Pillen, die du geschluckt oder sonstwie eingenommen hast.",
      [Lang.ES]: "Cantidad de pequeñas pildoritas de colores que has tragado (o colocado en otra parte...)"
    },
    icon: "r_drug",
    community: false,
    rare: false
  },
  [RewardId.COBAYE]: {
    id: RewardId.COBAYE,
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
        name: {
          [Lang.DE]: "Medikamentetester",
          [Lang.EN]: "Guinea Pig",
          [Lang.FR]: "Cobaye de laboratoire",
          [Lang.ES]: "Conejillo de Indias"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Laborratte",
          [Lang.EN]: "Lab Rat",
          [Lang.FR]: "Expérience dangereuse",
          [Lang.ES]: "Rata de laboratorio"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Pille palle, 3 Tage wach!",
          [Lang.EN]: "Product Tester!",
          [Lang.FR]: "Testeur de produits",
          [Lang.ES]: "¡Probador de productos!"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Timothy Leary",
          [Lang.EN]: "What do you mean these ain't skittles",
          [Lang.FR]: "Je n’aurais pas dû gober ça.",
          [Lang.ES]: "¿Qué quieres decir con que estos no son caramelos?"
        },
        quantity: 200
      },
      {
        name: {
          [Lang.DE]: "Ich sehe ein Blauuuuuuues Tal",
          [Lang.EN]: "The sky is falling!!!",
          [Lang.FR]: "Je vois une Vallée Bleuûuue !",
          [Lang.ES]: "¡¡¡El cielo se está cayendo!!!"
        },
        quantity: 250
      }
    ]
  },
  [RewardId.RUINE]: {
    id: RewardId.RUINE,
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
        name: {
          [Lang.DE]: "Wenn ich das nur vorher gewusst hätte...",
          [Lang.EN]: "Sneaky Voyager",
          [Lang.FR]: "Si j'aurais su, j'aurais po v'nu",
          [Lang.ES]: "¡Mamá, no me dejes aquí!"
        },
        quantity: 5,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Verwegener Wanderer",
          [Lang.EN]: "Tunnel Visionary",
          [Lang.FR]: "Voyageur téméraire",
          [Lang.ES]: "Explorador por accidente"
        },
        quantity: 10,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Tunnelblicker",
          [Lang.EN]: "Regularly A-mazed!",
          [Lang.FR]: "Apnéiste confirmé",
          [Lang.ES]: "Explorador de ruinas"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Im Irrgarten",
          [Lang.EN]: "Compass Included",
          [Lang.FR]: "J'ai la dé-dale !",
          [Lang.ES]: "Ruina Man"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Inklusive Kompass",
          [Lang.EN]: "Buried Voluntarily",
          [Lang.FR]: "Boussole sur patte",
          [Lang.ES]: "Brújula andante"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Begrabener Freiwilliger",
          [Lang.EN]: "Tombstone Toppler",
          [Lang.FR]: "Enterré volontaire",
          [Lang.ES]: "Voluntario enterrado"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Tomb Raider",
          [Lang.EN]: "Gollum of the Labyrinths",
          [Lang.FR]: "Pilleur de tombeau",
          [Lang.ES]: "Tomb Raider"
        },
        quantity: 200
      },
      {
        name: {
          [Lang.DE]: "Labyrinth-Gollum",
          [Lang.EN]: "Labyrinth Master PhD",
          [Lang.FR]: "Gollum des labyrinthes",
          [Lang.ES]: "Master del Laberinto"
        },
        quantity: 250
      },
      {
        name: {
          [Lang.DE]: "Labyrinth-Meister MB",
          [Lang.EN]: "Don't call me Junior",
          [Lang.FR]: "Labyrinthe master",
          [Lang.ES]: "No me llames junior"
        },
        quantity: 400
      }
    ]
  },
  [RewardId.EXPLOR]: {
    id: RewardId.EXPLOR,
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
        name: {
          [Lang.DE]: "Stürmischer Kundschafter",
          [Lang.EN]: "Dora the Explorer",
          [Lang.FR]: "Explorateur impétueux",
          [Lang.ES]: "Explorador Impetuoso"
        },
        quantity: 15,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Furchtloser Abenteurer",
          [Lang.EN]: "Fearless adventurer",
          [Lang.FR]: "Aventurier sans peur",
          [Lang.ES]: "Viajero sin miedo"
        },
        quantity: 30,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Wagemutiger Trapper",
          [Lang.EN]: "Guide to the World Beyond",
          [Lang.FR]: "Guide de l'Outre-Monde",
          [Lang.ES]: "Guía del Ultramundo"
        },
        quantity: 70
      },
      {
        name: {
          [Lang.DE]: "Wikinger",
          [Lang.EN]: "Brave Prospector",
          [Lang.FR]: "Prospecteur courageux",
          [Lang.ES]: "Aventurero Temerario"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Außenweltreiseführer",
          [Lang.EN]: "Tenzing Norgay",
          [Lang.FR]: "L’Outre-Monde est mon bac à sable",
          [Lang.ES]: "Dora la Exploradora"
        },
        quantity: 200
      },
      {
        name: {
          [Lang.DE]: "Ich habe die Erde umrundet... zweimal!",
          [Lang.EN]: "I've been round the world... Twice!",
          [Lang.FR]: "J'ai fait le tour du monde... 2 fois !",
          [Lang.ES]: "He dado la vuelta al mundo ... ¡dos veces!"
        },
        quantity: 250
      },
      {
        name: {
          [Lang.DE]: "Internet Explorer",
          [Lang.EN]: "Internet Explorer",
          [Lang.FR]: "Internet Explorer",
          [Lang.ES]: "Internet Explorer"
        },
        quantity: 300
      },
      {
        name: {
          [Lang.DE]: "Ich hab sogar das Klo abgesucht!",
          [Lang.EN]: "I've even dug through a public toilet!",
          [Lang.FR]: "J'ai même fouillé les WC !",
          [Lang.ES]: "¡Incluso busqué en el baño!"
        },
        quantity: 350
      },
      {
        name: {
          [Lang.DE]: "Sind wir schon da?",
          [Lang.EN]: "Are we there yet?",
          [Lang.FR]: "Quand est-ce qu’on arrive ?",
          [Lang.ES]: "¿Ya llegamos?"
        },
        quantity: 400
      }
    ]
  },
  [RewardId.EXPLO2]: {
    id: RewardId.EXPLO2,
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
        name: {
          [Lang.DE]: "Lebensmüder Kundschafter",
          [Lang.EN]: "Extreme Explorer",
          [Lang.FR]: "Explorateur vraiment impétueux",
          [Lang.ES]: "Caminante del Horizonte"
        },
        quantity: 5,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Draufgängerischer Expeditionsreisender",
          [Lang.EN]: "Expedition Expert",
          [Lang.FR]: "Expéditionnaire au long cours",
          [Lang.ES]: "Explorador impetuosísimo"
        },
        quantity: 15,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Nervenkitzelsucher",
          [Lang.EN]: "Horizon traveller",
          [Lang.FR]: "Au-delà du réel",
          [Lang.ES]: "Expedicionario"
        },
        quantity: 30
      },
      {
        name: {
          [Lang.DE]: "Christopher Kolumbus",
          [Lang.EN]: "Desert Shackleton",
          [Lang.FR]: "Champollion du désert",
          [Lang.ES]: "Cristobal Colón"
        },
        quantity: 70
      },
      {
        name: {
          [Lang.DE]: "Bis zur Unendlichkeit... und noch viel weiter!",
          [Lang.EN]: "To infinity and beyond!",
          [Lang.FR]: "Vers l'infini et au-delà !",
          [Lang.ES]: "¡Hasta el infinito y más allá!"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Indiana Jones und die Ruinen der Aussenwelt",
          [Lang.EN]: "Indiana Jones and the ruins of the World Beyond",
          [Lang.FR]: "Indiana jones et les ruines de l'outre-monde",
          [Lang.ES]: "Indiana Jones y las ruinas del Ultramundo"
        },
        quantity: 300
      }
    ]
  },
  [RewardId.SHARE]: {
    id: RewardId.SHARE,
    numericalId: 30,
    name: {
      [Lang.EN]: "Generosity",
      [Lang.FR]: "Générosité",
      [Lang.DE]: "Großzügigkeit",
      [Lang.ES]: "Generosidad"
    },
    description: {
      [Lang.EN]: "Number of acts of selflessness towards other citizens in need.",
      [Lang.FR]: "Nombre de vos actes d'altruisme envers d'autres citoyens dans le besoin.",
      [Lang.DE]: "Anzahl deiner Akte von Selbstlosigkeit gegenüber anderen Bürgern in Not.",
      [Lang.ES]: "Cantidad de actos de altruismo hacia otros habitantes en necesidad."
    },
    icon: "r_share",
    community: false,
    rare: false,
    titles: [
      {
        name: {
          [Lang.DE]: "Nobler Spender",
          [Lang.EN]: "Noble Heart",
          [Lang.FR]: "Âme noble",
          [Lang.ES]: "Alma noble"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Immer zur Stelle",
          [Lang.EN]: "Charitable Soul",
          [Lang.FR]: "Donateur universel",
          [Lang.ES]: "Alma caritativa"
        },
        quantity: 25
      },
      {
        name: {
          [Lang.DE]: "Samariter",
          [Lang.EN]: "Social Support",
          [Lang.FR]: "Assistant social",
          [Lang.ES]: "Apoyo social"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Freigiebiger Bürger",
          [Lang.EN]: "Samaritan",
          [Lang.FR]: "Citoyen qui tombe à pic",
          [Lang.ES]: "Samaritano"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Messias",
          [Lang.EN]: "All you need is love... and Hero days",
          [Lang.FR]: "Messie",
          [Lang.ES]: "Mesías"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Mein Körper ist bereit!",
          [Lang.EN]: "Take my body!",
          [Lang.FR]: "Prenez mon corps !",
          [Lang.ES]: "¡Mi cuerpo está listo!"
        },
        quantity: 250
      },
      {
        name: {
          [Lang.DE]: "Ultimatives Opfer",
          [Lang.EN]: "Ultimate Sacrifice",
          [Lang.FR]: "Sacrifice ultime",
          [Lang.ES]: "El último sacrificio"
        },
        quantity: 400
      }
    ]
  },
  [RewardId.GUIDE]: {
    id: RewardId.GUIDE,
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
        name: {
          [Lang.DE]: "Wegweiser",
          [Lang.EN]: "Daylight Lantern",
          [Lang.FR]: "Lanterne de jour",
          [Lang.ES]: "Linterna de luz diurna"
        },
        quantity: 300,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Praktischer Begleiter",
          [Lang.EN]: "Pocket Companion",
          [Lang.FR]: "Compagnon de poche",
          [Lang.ES]: "Compañero de bolsillo"
        },
        quantity: 1000,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Erleuchteter Anführer",
          [Lang.EN]: "Illuminated Guide",
          [Lang.FR]: "Guide éclairé",
          [Lang.ES]: "Guía iluminado"
        },
        quantity: 2500
      },
      {
        name: {
          [Lang.DE]: "Erleuchteter Prediger",
          [Lang.EN]: "Enlightened Preacher",
          [Lang.FR]: "Prêcheur illuminé",
          [Lang.ES]: "Predicador iluminado"
        },
        quantity: 5000
      },
      {
        name: {
          [Lang.DE]: "Guru der Liebe",
          [Lang.EN]: "Love guru",
          [Lang.FR]: "Love Gourou",
          [Lang.ES]: "Gurú del amor"
        },
        quantity: 8000
      },
      {
        name: {
          [Lang.DE]: "Höret meine Stimme",
          [Lang.EN]: "Listen to my voice",
          [Lang.FR]: "Écoutez ma voix",
          [Lang.ES]: "Escucha mi voz"
        },
        quantity: 15000
      },
      {
        name: {
          [Lang.DE]: "Universelle Muse",
          [Lang.EN]: "Mr Motivator",
          [Lang.FR]: "Inspirateur universel",
          [Lang.ES]: "Sr. Inspirador"
        },
        quantity: 30000
      }
    ]
  },
  [RewardId.DRGMKR]: {
    id: RewardId.DRGMKR,
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
        name: {
          [Lang.DE]: "Amateur-Laborratte",
          [Lang.EN]: "Amateur Lab Rat",
          [Lang.FR]: "Laborantin amateur",
          [Lang.ES]: "Laboratorista amateur"
        },
        quantity: 10,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Kleiner Präparator",
          [Lang.EN]: "Potion Preparer",
          [Lang.FR]: "Petit préparateur",
          [Lang.ES]: "Laboratorista autodidacta"
        },
        quantity: 25,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Chemiker von um die Ecke",
          [Lang.EN]: "Corner Chemist",
          [Lang.FR]: "Chimiste du coin",
          [Lang.ES]: "Químico de barrio"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Produkttester",
          [Lang.EN]: "Product Tester",
          [Lang.FR]: "Orfèvre gobeur",
          [Lang.ES]: "Catador de productos"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Wüstenstadt-Dealer",
          [Lang.EN]: "Local Dealer",
          [Lang.FR]: "Dealer du village",
          [Lang.ES]: "Distribuidor local"
        },
        quantity: 250
      },
      {
        name: {
          [Lang.DE]: "Ich koste alle meine Produkte",
          [Lang.EN]: "I taste all my products",
          [Lang.FR]: "Je goûte tous mes produits",
          [Lang.ES]: "Pruebo todos mis productos"
        },
        quantity: 500
      },
      {
        name: {
          [Lang.DE]: "Rauchts? Dann ist es meins.",
          [Lang.EN]: "Does it smoke? It is from me.",
          [Lang.FR]: "Ça se fume ? c'est de moi.",
          [Lang.ES]: "¿Fumas? Este va por mi cuenta"
        },
        quantity: 1000
      },
      {
        name: {
          [Lang.DE]: "Offizieller AP-Versorger",
          [Lang.EN]: "Official AP Provider",
          [Lang.FR]: "Fournisseur officiel de PA",
          [Lang.ES]: "Proveedor oficial de PA"
        },
        quantity: 2000
      }
    ]
  },
  [RewardId.THEFT]: {
    id: RewardId.THEFT,
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
        name: {
          [Lang.DE]: "Maulheld",
          [Lang.EN]: "Tea Leaf",
          [Lang.FR]: "Petite frappe",
          [Lang.ES]: "Cleptómano"
        },
        quantity: 10,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Lump",
          [Lang.EN]: "Artful Dodger",
          [Lang.FR]: "Fripouille",
          [Lang.ES]: "Bandido"
        },
        quantity: 30,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Schaumschläger",
          [Lang.EN]: "Chiseler",
          [Lang.FR]: "Crapule",
          [Lang.ES]: "Pillo"
        },
        quantity: 40
      },
      {
        name: {
          [Lang.DE]: "Dieb",
          [Lang.EN]: "Ali Baba",
          [Lang.FR]: "Monte-en-l’air",
          [Lang.ES]: "Ratero"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Fantomas",
          [Lang.EN]: "Rusty Ryan",
          [Lang.FR]: "Voleur",
          [Lang.ES]: "Amante de lo ajeno"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Ali Baba",
          [Lang.EN]: "Danny Ocean",
          [Lang.FR]: "Maître cambrioleur",
          [Lang.ES]: "Chorizo temible"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Meisterdieb",
          [Lang.EN]: "Master Thief",
          [Lang.FR]: "Passe-muraille",
          [Lang.ES]: "Caco"
        },
        quantity: 500
      },
      {
        name: {
          [Lang.DE]: "Kleptomane",
          [Lang.EN]: "Kleptomaniac",
          [Lang.FR]: "Arsène Lupin du désert",
          [Lang.ES]: "Saqueador"
        },
        quantity: 1000
      },
      {
        name: {
          [Lang.DE]: "Dein Haus ist mein Haus",
          [Lang.EN]: "Your home is my home",
          [Lang.FR]: "Ta maison est ma maison",
          [Lang.ES]: "Tu casa es mi casa"
        },
        quantity: 2000
      }
    ]
  },
  [RewardId.BROKEN]: {
    id: RewardId.BROKEN,
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
  [RewardId.MASO]: {
    id: RewardId.MASO,
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
        name: {
          [Lang.DE]: "SM Anhänger",
          [Lang.EN]: "Casual S+M Enthusiast",
          [Lang.FR]: "Adepte SM",
          [Lang.ES]: "Adepto del SM"
        },
        quantity: 20,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "SM Spezialist",
          [Lang.EN]: "Whip me harder!",
          [Lang.FR]: "Maître du PMV",
          [Lang.ES]: "Amo de la COSA"
        },
        quantity: 40,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Nenn mich Herrin",
          [Lang.EN]: "Attach the testicle clamps!",
          [Lang.FR]: "Appelez-moi Maître",
          [Lang.ES]: "Apriétame las esposas"
        },
        quantity: 60
      },
      {
        name: {
          [Lang.DE]: "Ich möchte dein Objekt sein.",
          [Lang.EN]: "Bring out the gimp!",
          [Lang.FR]: "Fais de moi ton objet",
          [Lang.ES]: "Quiero ser un objeto"
        },
        quantity: 100
      }
    ]
  },
  [RewardId.BGUM]: {
    id: RewardId.BGUM,
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
        name: {
          [Lang.DE]: "Jedes Los gewinnt",
          [Lang.EN]: "Community Companion",
          [Lang.FR]: "Compagnon de la communauté",
          [Lang.ES]: "Compañero de comunidad"
        },
        quantity: 1
      },
      {
        name: {
          [Lang.DE]: "Zinker",
          [Lang.EN]: "Community Spirit",
          [Lang.FR]: "Animé de bonnes intentions",
          [Lang.ES]: "Espíritu de la comunidad"
        },
        quantity: 5
      },
      {
        name: {
          [Lang.DE]: "Bingo",
          [Lang.EN]: "Social Animal",
          [Lang.FR]: "Animal social",
          [Lang.ES]: "Bingo"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Sudoku ist anders",
          [Lang.EN]: "Animated Corpse",
          [Lang.FR]: "Défunt animé",
          [Lang.ES]: "Cadáver animado"
        },
        quantity: 15
      },
      {
        name: {
          [Lang.DE]: "Siebenseitiger Würfel",
          [Lang.EN]: "Community Über-Activist",
          [Lang.FR]: "Hyper-activiste communautaire",
          [Lang.ES]: "Hiperactivista comunitario"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Einarmiger Bandit",
          [Lang.EN]: "Winner at heart!",
          [Lang.FR]: "Gagnant dans l’âme !",
          [Lang.ES]: "¡Ganador de corazón!"
        },
        quantity: 30
      },
      {
        name: {
          [Lang.DE]: "Seelenführer der Gemeinschaft",
          [Lang.EN]: "Community Soul Guide",
          [Lang.FR]: "Guide des âmes communautaires",
          [Lang.ES]: "Guía del alma comunitaria"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Charismatischer Prophet",
          [Lang.EN]: "Charismatic prophet",
          [Lang.FR]: "Prophète charismatique",
          [Lang.ES]: "Profeta carismático"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Liebling des Raben",
          [Lang.EN]: "Crow's Favourite",
          [Lang.FR]: "Favori du Corbeau",
          [Lang.ES]: "Favorito del Cuervo"
        },
        quantity: 150
      }
    ]
  },
  [RewardId.EBCSTL]: {
    id: RewardId.EBCSTL,
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
        name: {
          [Lang.DE]: "Das hast du nicht wirklich gebaut?",
          [Lang.EN]: "You really built that?",
          [Lang.FR]: "Vous avez vraiment construit ça ?",
          [Lang.ES]: "¿Realmente has construido eso?"
        },
        quantity: 5
      },
      {
        name: {
          [Lang.DE]: "Eimerhalter",
          [Lang.EN]: "Guard of the seals",
          [Lang.FR]: "Garde des seaux",
          [Lang.ES]: "Guardia de las focas"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Sandverkäufer",
          [Lang.EN]: "Snake oil salesman",
          [Lang.FR]: "Marchand de sable",
          [Lang.ES]: "Vendedor de Arena"
        },
        quantity: 15
      },
      {
        name: {
          [Lang.DE]: "Martinet am Strand",
          [Lang.EN]: "Martine at the beach",
          [Lang.FR]: "Martine à la plage",
          [Lang.ES]: "Martini en la playa"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Ein Spiel für echte Kinder",
          [Lang.EN]: "A real children's game!",
          [Lang.FR]: "Un vrai jeu d'enfants !",
          [Lang.ES]: "¡Un verdadero juego de niños!"
        },
        quantity: 25
      },
      {
        name: {
          [Lang.DE]: "Dauermitglied in Micky's Club",
          [Lang.EN]: "Permanent member of the Mickey Club",
          [Lang.FR]: "Membre permanent du club Mickey",
          [Lang.ES]: "Miembro permanente del Club de Mickey"
        },
        quantity: 30
      },
      {
        name: {
          [Lang.DE]: "Niemals ohne meinen Eimer",
          [Lang.EN]: "Never without my bucket",
          [Lang.FR]: "Jamais sans mon seau",
          [Lang.ES]: "Nunca sin mi cubo"
        },
        quantity: 40
      },
      {
        name: {
          [Lang.DE]: "Ein Korn fehlt noch",
          [Lang.EN]: "I know I have a grain",
          [Lang.FR]: "Je sais, j'ai un grain",
          [Lang.ES]: "Todavia falta un grano"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Mister Sandman ♫♪",
          [Lang.EN]: "Mister Sandman ♫♪",
          [Lang.FR]: "Mister Sandman ♫♪",
          [Lang.ES]: "Mister Sandman ♫♪"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Nutzt das Vergängliche",
          [Lang.EN]: "Exploit the ephemeral",
          [Lang.FR]: "Exploit de l'éphèmère",
          [Lang.ES]: "Proeza de lo efímero"
        },
        quantity: 100
      }
    ]
  },
  [RewardId.EBPMV]: {
    id: RewardId.EBPMV,
    numericalId: 38,
    name: {
      [Lang.EN]: "Wonder: Giant BRD",
      [Lang.FR]: "Merveille : PMV géant",
      [Lang.DE]: "Wunderwerk: Riesiger KVF",
      [Lang.ES]: "Maravilla: gran COSA"
    },
    description: {
      [Lang.EN]: "BRDs for everyone! The people demand BRDs!",
      [Lang.FR]: "Gloire au PMV géant !",
      [Lang.DE]: "Huldigt den Riesigen KVF!",
      [Lang.ES]: "¡Gloria a la gran COSA!"
    },
    icon: "r_ebpmv",
    community: false,
    rare: true,
    titles: [
      {
        name: {
          [Lang.DE]: "Huldigt den riesigen KVF!",
          [Lang.EN]: "BRDs for everyone! The people demand BRDs!",
          [Lang.FR]: "Gloire au PMV !",
          [Lang.ES]: "¡Gloria a la COSA!"
        },
        quantity: 5
      },
      {
        name: {
          [Lang.DE]: "Obelisk der heutigen Zeit!",
          [Lang.EN]: "Modern obelisk!",
          [Lang.FR]: "Obélisque des temps modernes !",
          [Lang.ES]: "¡Obelisco moderno!"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Lebhafter Tribut",
          [Lang.EN]: "Standing ovation",
          [Lang.FR]: "Vibrant hommage",
          [Lang.ES]: "Ovación de pie"
        },
        quantity: 15
      },
      {
        name: {
          [Lang.DE]: "Wird in die Annalen eingehen",
          [Lang.EN]: "One for the books",
          [Lang.FR]: "Restera dans les annales",
          [Lang.ES]: "Uno para los libros"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Extra viel Liebe",
          [Lang.EN]: "Extra large love",
          [Lang.FR]: "L'amour extra large",
          [Lang.ES]: "Amor extra grande"
        },
        quantity: 25
      },
      {
        name: {
          [Lang.DE]: "Es ist kleiner als im Katalog",
          [Lang.EN]: "It was smaller on the catalog",
          [Lang.FR]: "Ça faisait plus petit sur le catalogue",
          [Lang.ES]: "Era más pequeño en el catálogo."
        },
        quantity: 30
      },
      {
        name: {
          [Lang.DE]: "Freude der Stärke 8",
          [Lang.EN]: "Happiness of magnitude 8",
          [Lang.FR]: "Bonheur de magnitude 8",
          [Lang.ES]: "Felicidad de magnitud 8"
        },
        quantity: 40
      },
      {
        name: {
          [Lang.DE]: "Bewahrer der Freuden",
          [Lang.EN]: "Keeper of pleasures",
          [Lang.FR]: "Gardien des plaisirs",
          [Lang.ES]: "Guardián de los placeres"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Ein bisschen näher an den Sternen",
          [Lang.EN]: "A little closer to the stars",
          [Lang.FR]: "Un peu plus près des étoiles",
          [Lang.ES]: "Un poco más cerca de las estrellas"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Himmel! Was werden die Nachbarn sagen?",
          [Lang.EN]: "Heavens! What will the neighbours say?",
          [Lang.FR]: "Ciel ! Que vont dire les voisins ?",
          [Lang.ES]: "¡Cielos! ¿Qué dirán los vecinos?"
        },
        quantity: 100
      }
    ]
  },
  [RewardId.EBGROS]: {
    id: RewardId.EBGROS,
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
        name: {
          [Lang.DE]: "Hey wir können die Zombies von hier oben sehen",
          [Lang.EN]: "I can see the zeds from here!",
          [Lang.FR]: "Oh on voit les zombies d'ici",
          [Lang.ES]: "¡Puedo ver a los zombies desde aquí arriba!"
        },
        quantity: 5
      },
      {
        name: {
          [Lang.DE]: "Fröhlicher Hamster",
          [Lang.EN]: "Happy hamster",
          [Lang.FR]: "Hamster jovial",
          [Lang.ES]: "Hámster feliz"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Showman aus der Anderen Welt!",
          [Lang.EN]: "Desert showman!",
          [Lang.FR]: "Forain de l'Outre Monde !",
          [Lang.ES]: "Empresario del Ultramundo!"
        },
        quantity: 15
      },
      {
        name: {
          [Lang.DE]: "5. Rad am Wagen",
          [Lang.EN]: "5th wheel of the caravan",
          [Lang.FR]: "5e roue du carrosse",
          [Lang.ES]: "Quinta rueda de la caravana"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Mir ist schwindelig",
          [Lang.EN]: "I'm dizzy",
          [Lang.FR]: "J'ai le vertige",
          [Lang.ES]: "Estoy mareado"
        },
        quantity: 25
      },
      {
        name: {
          [Lang.DE]: "Hier oben",
          [Lang.EN]: "Up there",
          [Lang.FR]: "Là-haut",
          [Lang.ES]: "Aquí arriba"
        },
        quantity: 30
      },
      {
        name: {
          [Lang.DE]: "Auge der Wüste",
          [Lang.EN]: "Eye of the desert",
          [Lang.FR]: "L'œil du désert",
          [Lang.ES]: "Ojo del Ultramundo"
        },
        quantity: 40
      },
      {
        name: {
          [Lang.DE]: "4000 Zombies starren uns an",
          [Lang.EN]: "4000 zombies gaze at us",
          [Lang.FR]: "4000 zombies nous contemplent",
          [Lang.ES]: "4000 zombies nos miran"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Wir drehen frei!",
          [Lang.EN]: "Freewheeling",
          [Lang.FR]: "En roue libre",
          [Lang.ES]: "Sin rumbo y desenfadado"
        },
        quantity: 75
      }
    ]
  },
  [RewardId.EBCROW]: {
    id: RewardId.EBCROW,
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
        name: {
          [Lang.DE]: "Huldigt den Raben!",
          [Lang.EN]: "Glory to the Crow!",
          [Lang.FR]: "Gloire au Corbeau !",
          [Lang.ES]: "¡Gloria al cuervo!"
        },
        quantity: 5
      },
      {
        name: {
          [Lang.DE]: "Taube aus der Unterwelt",
          [Lang.EN]: "Pigeon from the outer world.",
          [Lang.FR]: "Pigeon de l'Outre-Monde",
          [Lang.ES]: "Paloma del Ultramundo"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Corvid-Spezialist",
          [Lang.EN]: "Corvidæ specialist",
          [Lang.FR]: "Spécialiste ès corvidés",
          [Lang.ES]: "Especialista en córvidos"
        },
        quantity: 15
      },
      {
        name: {
          [Lang.DE]: "Phoenix des Unterholzes",
          [Lang.EN]: "Phoenix of the desert",
          [Lang.FR]: "Phoenix des hôtes de ces bois",
          [Lang.ES]: "Fénix del Ultramundo"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Edit Piaf",
          [Lang.EN]: "Edit Piaf",
          [Lang.FR]: "Edit Piaf",
          [Lang.ES]: "Edit Piaf"
        },
        quantity: 25
      },
      {
        name: {
          [Lang.DE]: "Vogel der schlechten Vorzeichen",
          [Lang.EN]: "Bird of bad omen",
          [Lang.FR]: "Oiseau de mauvais augure",
          [Lang.ES]: "Ave de mal augurio"
        },
        quantity: 30
      },
      {
        name: {
          [Lang.DE]: "Kraaaah!",
          [Lang.EN]: "CroooAAwW!",
          [Lang.FR]: "Crôôôaa !",
          [Lang.ES]: "¡Wraaaaahh!"
        },
        quantity: 40
      },
      {
        name: {
          [Lang.DE]: "Er war Leber ...",
          [Lang.EN]: "He was a liver...",
          [Lang.FR]: "Il était un foie...",
          [Lang.ES]: "Era una calavera..."
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "John Snow",
          [Lang.EN]: "John Snow",
          [Lang.FR]: "John Snow",
          [Lang.ES]: "John Snow"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Der Rabinator",
          [Lang.EN]: "The crowinator",
          [Lang.FR]: "Le Corbeausier",
          [Lang.ES]: "El cuervinador"
        },
        quantity: 100
      }
    ]
  },
  [RewardId.FORUM]: {
    id: RewardId.FORUM,
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
  [RewardId.JTAMER]: {
    id: RewardId.JTAMER,
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
        name: {
          [Lang.DE]: "Tierliebhaber",
          [Lang.EN]: "Talks to the animals",
          [Lang.FR]: "Ami des bêtes",
          [Lang.ES]: "Amigo de los Animales"
        },
        quantity: 10,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Malteserzüchter",
          [Lang.EN]: "Legend of Labradoodle",
          [Lang.FR]: "Maître-bichon",
          [Lang.ES]: "Maestro Domador"
        },
        quantity: 25,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Ich bändige Bestien",
          [Lang.EN]: "Wild Beast Tamer",
          [Lang.FR]: "Dresseur de bêtes sauvages",
          [Lang.ES]: "Domador de Bestias"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Nie ohne meinen Hund!",
          [Lang.EN]: "Not without my dog!",
          [Lang.FR]: "Jamais sans mon chien !",
          [Lang.ES]: "Manimal"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Hundewurst schmeckt gar nicht schlecht!",
          [Lang.EN]: "Dog food doesn't taste so bad",
          [Lang.FR]: "La pâtée, c’est pas si mauvais",
          [Lang.ES]: "La comida para perros no sabe tan mal"
        },
        quantity: 300
      },
      {
        name: {
          [Lang.DE]: "Meser (halb Mensch, halb Malteser)",
          [Lang.EN]: "Homosapien / Labradoodle cross",
          [Lang.FR]: "Bichon-garou susceptible",
          [Lang.ES]: "Cinocéfalo"
        },
        quantity: 800
      },
      {
        name: {
          [Lang.DE]: "Personalisierter Titel - Dompteur (T-ID: 1725642)",
          [Lang.EN]: "Certified Were-doodle",
          [Lang.FR]: "Buffy contre les zombies",
          [Lang.ES]: "Maestria en Labradoodles"
        },
        quantity: 1500
      }
    ]
  },
  [RewardId.JRANGR]: {
    id: RewardId.JRANGR,
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
        name: {
          [Lang.DE]: "Pfadfinder",
          [Lang.EN]: "Sneaky",
          [Lang.FR]: "Furtif",
          [Lang.ES]: "Furtivo"
        },
        quantity: 10,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Ninja",
          [Lang.EN]: "Shadow Master",
          [Lang.FR]: "Maître des ombres",
          [Lang.ES]: "Maestro de la oscuridad"
        },
        quantity: 25,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Green Beret",
          [Lang.EN]: "Dune Ranger",
          [Lang.FR]: "Ranger du risque",
          [Lang.ES]: "Amante del riesgo"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Schattenmann",
          [Lang.EN]: "Sand Phantom",
          [Lang.FR]: "Fantôme des sables",
          [Lang.ES]: "Fantasma de arena"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Wüstenphantom",
          [Lang.EN]: "Taught Sam Fisher everything he knows!",
          [Lang.FR]: "Plus fort que Sam Fisher",
          [Lang.ES]: "Más fuerte que Sam Fisher"
        },
        quantity: 300
      },
      {
        name: {
          [Lang.DE]: "Solid Snake war gestern...",
          [Lang.EN]: "I think you are underestimating the sneakiness...",
          [Lang.FR]: "Disciple de Garrett",
          [Lang.ES]: "Ayer fue Serpiente Sólida..."
        },
        quantity: 800
      },
      {
        name: {
          [Lang.DE]: "Der unsichtbare Mann",
          [Lang.EN]: "The Invisible Man",
          [Lang.FR]: "Lady in Red",
          [Lang.ES]: "El hombre invisible"
        },
        quantity: 1500
      }
    ]
  },
  [RewardId.JERMIT]: {
    id: RewardId.JERMIT,
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
        name: {
          [Lang.DE]: "Wurmfresser",
          [Lang.EN]: "Wormfinder General",
          [Lang.FR]: "Dégoteur de vers",
          [Lang.ES]: "Comegusanos"
        },
        quantity: 10,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Meister im Würmerfinden",
          [Lang.EN]: "Master Rootfinder",
          [Lang.FR]: "Maître dégoteur",
          [Lang.ES]: "Degustador"
        },
        quantity: 25,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Gefräßiger Bürger",
          [Lang.EN]: "Insatiable Citizen",
          [Lang.FR]: "Insatiable citoyen",
          [Lang.ES]: "Paladar insaciable"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Wüstenwurmzüchter",
          [Lang.EN]: "Rat Roaster",
          [Lang.FR]: "Grand Mange-vermines",
          [Lang.ES]: "Devorador de insectos"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Ich brauche niemanden!",
          [Lang.EN]: "Friends? Who needs 'em!",
          [Lang.FR]: "Hermitamor",
          [Lang.ES]: "Omnívoro"
        },
        quantity: 300
      },
      {
        name: {
          [Lang.DE]: "Heraklit der Außenwelt",
          [Lang.EN]: "Lonely...I'm so lonely",
          [Lang.FR]: "I'm a poor lonesome hermit...",
          [Lang.ES]: "Solo... estoy tan solo"
        },
        quantity: 800
      },
      {
        name: {
          [Lang.DE]: "Gepanzerter Fakir",
          [Lang.EN]: "Hardened Hermit",
          [Lang.FR]: "Cocodile dundee",
          [Lang.ES]: "Ermitaño Experimentado"
        },
        quantity: 1500
      }
    ]
  },
  [RewardId.JCOLLE]: {
    id: RewardId.JCOLLE,
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
        name: {
          [Lang.DE]: "Sandarbeiter",
          [Lang.EN]: "Seeker",
          [Lang.FR]: "Trouveur",
          [Lang.ES]: "Husmeador"
        },
        quantity: 10,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Wüstenspringmaus",
          [Lang.EN]: "Master Scavenger",
          [Lang.FR]: "Maître dénicheur",
          [Lang.ES]: "Descubridor"
        },
        quantity: 25,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Großer Ameisenbär",
          [Lang.EN]: "Check out my knick-knacks",
          [Lang.FR]: "Exhumeur de babioles",
          [Lang.ES]: "Jefe Excavador"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Wüstenfuchs",
          [Lang.EN]: "Ultra Scavenger",
          [Lang.FR]: "Trouveur en chef",
          [Lang.ES]: "Maestro Excavador"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Ich sehe Alles!",
          [Lang.EN]: "I don't miss anything.",
          [Lang.FR]: "Rien ne m’échappe.",
          [Lang.ES]: "Nada se me escapa"
        },
        quantity: 300
      },
      {
        name: {
          [Lang.DE]: "Ein BMW? Kein Problem!",
          [Lang.EN]: "I've got everything you need.",
          [Lang.FR]: "Une BMW ? Pas de p’oblème !",
          [Lang.ES]: "¿Un BMW? ¡No hay problema!"
        },
        quantity: 800
      },
      {
        name: {
          [Lang.DE]: "Où est Larchi ?",
          [Lang.EN]: "A BMW M3? Too easy!",
          [Lang.FR]: "Où est Larchi ?",
          [Lang.ES]: "¿Dónde está Larchi?"
        },
        quantity: 1500
      }
    ]
  },
  [RewardId.JGUARD]: {
    id: RewardId.JGUARD,
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
        name: {
          [Lang.DE]: "Die Mauer",
          [Lang.EN]: "Defender",
          [Lang.FR]: "Défenseur",
          [Lang.ES]: "Defensor"
        },
        quantity: 10,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Höllenwächter",
          [Lang.EN]: "Master Guardian",
          [Lang.FR]: "Maître gardien",
          [Lang.ES]: "Gran Guardián"
        },
        quantity: 25,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Kerberos",
          [Lang.EN]: "Wandering Knight",
          [Lang.FR]: "Paladin",
          [Lang.ES]: "Paladín"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Die letzte Verteidigungslinie",
          [Lang.EN]: "Last Bastion",
          [Lang.FR]: "Dernier rempart",
          [Lang.ES]: "Último escudero"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Du kommst hier NICHT durch!",
          [Lang.EN]: "You... shall... not...PASS!",
          [Lang.FR]: "Vous… ne… passerez… PAS !",
          [Lang.ES]: "¡Usted no entra!"
        },
        quantity: 300
      },
      {
        name: {
          [Lang.DE]: "Hekatoncheir",
          [Lang.EN]: "Insurmountable citizen",
          [Lang.FR]: "Citoyen infranchissable",
          [Lang.ES]: "Habitante insuperable"
        },
        quantity: 800
      },
      {
        name: {
          [Lang.DE]: "Holy F***ing Iceberg",
          [Lang.EN]: "Holy F***ing Iceberg",
          [Lang.FR]: "Holy F***ing Iceberg",
          [Lang.ES]: "¡Maldita sea, un Iceberg!"
        },
        quantity: 1500
      }
    ]
  },
  [RewardId.JTECH]: {
    id: RewardId.JTECH,
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
        name: {
          [Lang.DE]: "Yo, wir schaffen das!",
          [Lang.EN]: "I'll let myself in...",
          [Lang.FR]: "Bricol' girl travesti",
          [Lang.ES]: "Bricoloco"
        },
        quantity: 10,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Kleiner Schraubendreher",
          [Lang.EN]: "The BRD Screwdriver Combo",
          [Lang.FR]: "Amateur du PMV tournevis",
          [Lang.ES]: "Destornillador Humano"
        },
        quantity: 25,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Schweizer Taschenmesser",
          [Lang.EN]: "Spanners and Bump keys",
          [Lang.FR]: "Nuchuk à molette",
          [Lang.ES]: "Mascafierros"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Unermüdlicher Schrauber",
          [Lang.EN]: "Tireless tumbler tickler",
          [Lang.FR]: "Constructeur increvable",
          [Lang.ES]: "Técnico Inagotable"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Seele des Handwerks",
          [Lang.EN]: "TechnicoMecanoMegalo",
          [Lang.FR]: "TechnicoMecanoMegalo",
          [Lang.ES]: "TecnicoMecanoMegalomano"
        },
        quantity: 300
      },
      {
        name: {
          [Lang.DE]: "Seele eines Profis",
          [Lang.EN]: "Soul of the professional",
          [Lang.FR]: "Âme du professionnel",
          [Lang.ES]: "Alma de un profesional"
        },
        quantity: 800
      },
      {
        name: {
          [Lang.DE]: "Personalisierter Titel - Techniker (T-ID: 631944)",
          [Lang.EN]: "Never walk without his keys",
          [Lang.FR]: "Se balade jamais sans ses clefs",
          [Lang.ES]: "Nunca camines sin tus llaves"
        },
        quantity: 1500
      }
    ]
  },
  [RewardId.DCITY]: {
    id: RewardId.DCITY,
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
  [RewardId.DWATER]: {
    id: RewardId.DWATER,
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
  [RewardId.DINFEC]: {
    id: RewardId.DINFEC,
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
        name: {
          [Lang.DE]: "Teilweise verrottet",
          [Lang.EN]: "Partially Putrified",
          [Lang.FR]: "Partiellement putréfié",
          [Lang.ES]: "Parcialmente putrefacto"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Virenschleuder",
          [Lang.EN]: "Infected with a poison",
          [Lang.FR]: "Porteur de la Maladie",
          [Lang.ES]: "Esparcidor de virus"
        },
        quantity: 40
      },
      {
        name: {
          [Lang.DE]: "Gedärmeauskotzer",
          [Lang.EN]: "Blood 'n' Bile Spitter",
          [Lang.FR]: "Vomisseur de tripes",
          [Lang.ES]: "Escupidor de sangre y bilis"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Seuchenherd",
          [Lang.EN]: "Harbinger of the Plague",
          [Lang.FR]: "Annonciateur du fléau",
          [Lang.ES]: "Foco Epidémico"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Ich habe Magenschmerzen...",
          [Lang.EN]: "I've got a sore tummy...",
          [Lang.FR]: "J'ai mal au ventre...",
          [Lang.ES]: "Tengo dolor de estómago..."
        },
        quantity: 150
      }
    ]
  },
  [RewardId.DNUCL]: {
    id: RewardId.DNUCL,
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
        name: {
          [Lang.DE]: "Rauch? Welcher Rauch?",
          [Lang.EN]: "Smoke? What smoke?",
          [Lang.FR]: "De la fumée ? Quelle fumée ?",
          [Lang.ES]: "¿Humo? ¿Qué humo?"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Leckstopper",
          [Lang.EN]: "Leak Plugger",
          [Lang.FR]: "Colmateur de fuites",
          [Lang.ES]: "Taponador de fugas"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Licht in der Nacht",
          [Lang.EN]: "Light in the night",
          [Lang.FR]: "Lumière dans la nuit",
          [Lang.ES]: "Luz en la noche"
        },
        quantity: 30
      },
      {
        name: {
          [Lang.DE]: "RadioactiveMan",
          [Lang.EN]: "RadioactiveMan",
          [Lang.FR]: "RadioactiveMan",
          [Lang.ES]: "Hombre radiactivo"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Strahlender Bürger",
          [Lang.EN]: "Radiant citizen",
          [Lang.FR]: "Citoyen rayonnant",
          [Lang.ES]: "Habitante radiante"
        },
        quantity: 60
      },
      {
        name: {
          [Lang.DE]: "Kabum! Der Reaktor mach KABUM!!!",
          [Lang.EN]: "Boom! When the reactor goes BOOM!!!",
          [Lang.FR]: "Boum ! Quand notre réacteur fait Boum !",
          [Lang.ES]: "¡Kaboom! Cuando nuestro reactor hace ¡Kaboom!"
        },
        quantity: 80
      },
      {
        name: {
          [Lang.DE]: "Atompilzsammler",
          [Lang.EN]: "Atomic mushroom muncher",
          [Lang.FR]: "Cueilleur de champignons atomiques",
          [Lang.ES]: "Recolector de hongos atómicos"
        },
        quantity: 90
      },
      {
        name: {
          [Lang.DE]: "Bis auf die Seele verstrahlt",
          [Lang.EN]: "Irradiated right to the soul",
          [Lang.FR]: "Irradié jusque dans l'âme",
          [Lang.ES]: "Irradiado hasta el alma"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Ich steh auf Fusion!",
          [Lang.EN]: "I fricken love fission",
          [Lang.FR]: "La fission ça m'éclate !",
          [Lang.ES]: "¡La fisión me encanta!"
        },
        quantity: 120
      },
      {
        name: {
          [Lang.DE]: "Kung-Fu-Sion",
          [Lang.EN]: "Fiiii-ssion",
          [Lang.FR]: "Fiiii-ssion",
          [Lang.ES]: "King-Fu-Sión"
        },
        quantity: 150
      }
    ]
  },
  [RewardId.DDRUG]: {
    id: RewardId.DDRUG,
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
  [RewardId.SURLST]: {
    id: RewardId.SURLST,
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
        name: {
          [Lang.DE]: "Zombieliebling",
          [Lang.EN]: "Zombie favourite",
          [Lang.FR]: "Favori des zombies",
          [Lang.ES]: "Favorito de los zombies"
        },
        quantity: 10,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Letzter Überlebender",
          [Lang.EN]: "Last Boy Scout",
          [Lang.FR]: "Last man standing",
          [Lang.ES]: "Último Superviviente"
        },
        quantity: 15,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Unzerstörbar",
          [Lang.EN]: "Dances with Hordes",
          [Lang.FR]: "Increvable",
          [Lang.ES]: "Indestructible"
        },
        quantity: 30,
        points: 10
      },
      {
        name: {
          [Lang.DE]: "Allein gegen die Horde",
          [Lang.EN]: "Me vs. the Horde!",
          [Lang.FR]: "Seul(e) contre les Hordes",
          [Lang.ES]: "¡Solo contra la Horda!"
        },
        quantity: 50,
        points: 13
      },
      {
        name: {
          [Lang.DE]: "Chuck Norris' Ebenbild",
          [Lang.EN]: "Equal to Chuck Norris",
          [Lang.FR]: "Égal de Chuck Norris",
          [Lang.ES]: "Igual a Chuck Norris"
        },
        quantity: 100,
        points: 16.5
      }
    ]
  },
  [RewardId.SUHARD]: {
    id: RewardId.SUHARD,
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
        name: {
          [Lang.DE]: "Ich bin in der Hölle aufgewachsen.",
          [Lang.EN]: "Hell is a walk in the park.",
          [Lang.FR]: "L’enfer, c’est mon quotidien.",
          [Lang.ES]: "Crecí en el infierno"
        },
        quantity: 5,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Es war wirklich zu einfach.",
          [Lang.EN]: "It's just too easy.",
          [Lang.FR]: "C’était vraiment trop facile.",
          [Lang.ES]: "Es demasiado fácil."
        },
        quantity: 10,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Ich fresse Nägel und scheiße Kugeln!",
          [Lang.EN]: "I eat nails and sh*t bullets!",
          [Lang.FR]: "Je mâche le silex !",
          [Lang.ES]: "¡Como clavos y cago balas!"
        },
        quantity: 20,
        points: 10
      },
      {
        name: {
          [Lang.DE]: "Pandämonium? Hah. Einfach.",
          [Lang.EN]: "Hardcore? Candy from babies...",
          [Lang.FR]: "Le pandémonium ? Pff. Easy.",
          [Lang.ES]: "¿Pandemonio? Ahh, Facil"
        },
        quantity: 40,
        points: 13
      },
      {
        name: {
          [Lang.DE]: "Apostel des Pandämoniums",
          [Lang.EN]: "Hardcore Apostle",
          [Lang.FR]: "Apôtre du Pandémonium",
          [Lang.ES]: "Apóstol del Pandemonio"
        },
        quantity: 100
      }
    ]
  },
  [RewardId.MYSTIC]: {
    id: RewardId.MYSTIC,
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
        name: {
          [Lang.DE]: "Verrückter Skeptiker",
          [Lang.EN]: "Keen Sceptic",
          [Lang.FR]: "Septicis-mite aïgu",
          [Lang.ES]: "Capataz"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Seelenknipser",
          [Lang.EN]: "Soul Callipers",
          [Lang.FR]: "Agnos-tic",
          [Lang.ES]: "Capataz Espiritista"
        },
        quantity: 25
      },
      {
        name: {
          [Lang.DE]: "Wächter der Seelen",
          [Lang.EN]: "Watches with Scouts",
          [Lang.FR]: "Veille avec les Scouts",
          [Lang.ES]: "Guardian de las Almas"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Die Wahrheit ist irgendwo da draußen",
          [Lang.EN]: "The truth is elsewhere",
          [Lang.FR]: "La vérité est ailleurs",
          [Lang.ES]: "La verdad está ahí fuera en algún lugar"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Ich glaube!",
          [Lang.EN]: "I'm a believer",
          [Lang.FR]: "I’m a believer",
          [Lang.ES]: "¡Yo Creo!"
        },
        quantity: 300
      },
      {
        name: {
          [Lang.DE]: "Sektenmitglied",
          [Lang.EN]: "Sect Member",
          [Lang.FR]: "Membre de la secte",
          [Lang.ES]: "Miembro de la secta"
        },
        quantity: 800
      },
      {
        name: {
          [Lang.DE]: "Kosmischer Anführer",
          [Lang.EN]: "Cosmic Sponsor",
          [Lang.FR]: "Parrain cosmique",
          [Lang.ES]: "Lider cósmico"
        },
        quantity: 1500
      }
    ]
  },
  [RewardId.DOUTSD]: {
    id: RewardId.DOUTSD,
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
        name: {
          [Lang.DE]: "Verirrter Ausflügler",
          [Lang.EN]: "Moonlight Stroller",
          [Lang.FR]: "Randonneur égaré",
          [Lang.ES]: "Caminante perdido"
        },
        quantity: 20,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Nächtlicher Spaziergänger",
          [Lang.EN]: "Wild-eyed Wanderer",
          [Lang.FR]: "Flâneur nocturne",
          [Lang.ES]: "Holgazan Nocturno"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Mir ist kalt hier draußen...",
          [Lang.EN]: "Baby it's cold outside...",
          [Lang.FR]: "J'ai froid, dehors...",
          [Lang.ES]: "Tengo frio aquí..."
        },
        quantity: 250
      }
    ]
  },
  [RewardId.DOOR]: {
    id: RewardId.DOOR,
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
        name: {
          [Lang.DE]: "Wo klemmt's?",
          [Lang.EN]: "Key hee hee!",
          [Lang.FR]: "Un p'tit Bricard ?",
          [Lang.ES]: "Ganzúa"
        },
        quantity: 1,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Dietrich",
          [Lang.EN]: "How about some Chubb-ly?",
          [Lang.FR]: "Une petite tranche de Vachette ?",
          [Lang.ES]: "Hijo de cerrajero"
        },
        quantity: 5,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Sesam, öffne dich...",
          [Lang.EN]: "Sesame, shift your A...",
          [Lang.FR]: "Sésame, bouge ton c...",
          [Lang.ES]: "Con o sin llaves, yo entro"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Türöffner",
          [Lang.EN]: "Deadbolt Dick",
          [Lang.FR]: "Dentiste serrurier",
          [Lang.ES]: "Ábrete Sésamo"
        },
        quantity: 15
      },
      {
        name: {
          [Lang.DE]: "Gentleman-Einbrecher",
          [Lang.EN]: "Gentleman Robber",
          [Lang.FR]: "Gentleman Cambrioleur",
          [Lang.ES]: "Abridor de puertas"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Schlüsseldienst",
          [Lang.EN]: "Captain Hook",
          [Lang.FR]: "Capitaine Crochet",
          [Lang.ES]: "Terror de las puertas"
        },
        quantity: 30
      },
      {
        name: {
          [Lang.DE]: "Zerberus",
          [Lang.EN]: "Shim Surgeon",
          [Lang.FR]: "Cerbère de la porte",
          [Lang.ES]: "Cerbero"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Meister der Schlüssel",
          [Lang.EN]: "Grand Key Master",
          [Lang.FR]: "Maître des clés",
          [Lang.ES]: "Gran Maestro de Llaves"
        },
        quantity: 100
      }
    ]
  },
  [RewardId.DHANG]: {
    id: RewardId.DHANG,
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
  [RewardId.PLUNDR]: {
    id: RewardId.PLUNDR,
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
        name: {
          [Lang.DE]: "Plünderer",
          [Lang.EN]: "Pillager",
          [Lang.FR]: "Pillard",
          [Lang.ES]: "Robamuertos"
        },
        quantity: 30,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Aasgeier",
          [Lang.EN]: "Plunderer",
          [Lang.FR]: "Vautour",
          [Lang.ES]: "Buitre"
        },
        quantity: 60,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Hyäne",
          [Lang.EN]: "Viking",
          [Lang.FR]: "Charognard",
          [Lang.ES]: "Carroñero"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Wegelagerer post mortem",
          [Lang.EN]: "Post-mortem Pickpocket",
          [Lang.FR]: "Écumeur post-mortem",
          [Lang.ES]: "Ladrón post-mortem"
        },
        quantity: 200
      },
      {
        name: {
          [Lang.DE]: "Hungriger Schakal",
          [Lang.EN]: "Hungry Jackal",
          [Lang.FR]: "Chacal affamé",
          [Lang.ES]: "Chacal"
        },
        quantity: 400
      },
      {
        name: {
          [Lang.DE]: "Kojote der kargen Steppen",
          [Lang.EN]: "Fleet-footed Coyote",
          [Lang.FR]: "Coyote des steppes arides",
          [Lang.ES]: "Canalla"
        },
        quantity: 600
      },
      {
        name: {
          [Lang.DE]: "Fingerschmied",
          [Lang.EN]: "Solicitor of the World Beyond",
          [Lang.FR]: "Notaire de l’Outre-Monde",
          [Lang.ES]: "Rata Infame"
        },
        quantity: 1000
      }
    ]
  },
  [RewardId.WONDRS]: {
    id: RewardId.WONDRS,
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
        name: {
          [Lang.DE]: "Großer Baumeister",
          [Lang.EN]: "Master Builder",
          [Lang.FR]: "Grand bâtisseur",
          [Lang.ES]: "Constructor idealista"
        },
        quantity: 20,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Großer Architekt",
          [Lang.EN]: "Great Architect",
          [Lang.FR]: "Grand architecte",
          [Lang.ES]: "Constructor visionario"
        },
        quantity: 50,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Freimauer",
          [Lang.EN]: "Great Mason",
          [Lang.FR]: "Franc-maçon",
          [Lang.ES]: "Arquitecto estrambótico"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Terraformingspezialist",
          [Lang.EN]: "Terraforming Specialist",
          [Lang.FR]: "Spécialiste en terraformation",
          [Lang.ES]: "Gaudí de Zombinoia"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Allmächtiger Schöpfer",
          [Lang.EN]: "Great, benevolent, all-powerful creator",
          [Lang.FR]: "Grand créateur tout-puissant",
          [Lang.ES]: "Albañil Dominguero"
        },
        quantity: 200
      },
      {
        name: {
          [Lang.DE]: "Archi-Mädlicher Illustrator von Pi",
          [Lang.EN]: "I can recite pi to infinity!",
          [Lang.FR]: "Archi-maid illustrateur de Pi",
          [Lang.ES]: "Ilustradora archi-maid de Pi"
        },
        quantity: 250
      },
      {
        name: {
          [Lang.DE]: "Muad'Dib",
          [Lang.EN]: "Three rivers dam... That's adorable.",
          [Lang.FR]: "Muad'Dib",
          [Lang.ES]: "Muad'Dib"
        },
        quantity: 300
      },
      {
        name: {
          [Lang.DE]: "Am 7. Tag erschuf er den Fleischkäfig",
          [Lang.EN]: "And on the 7th day, he did not rest!",
          [Lang.FR]: "Le 7ème jour, il créa la cage à viande",
          [Lang.ES]: "¡Y al séptimo día, no descansó!"
        },
        quantity: 350
      }
    ]
  },
  [RewardId.REPAIR]: {
    id: RewardId.REPAIR,
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
        name: {
          [Lang.DE]: "Hobby-Heimwerker",
          [Lang.EN]: "Home Depot Regular",
          [Lang.FR]: "Bricoleur du dimanche",
          [Lang.ES]: "Reparador Dominguero"
        },
        quantity: 15
      },
      {
        name: {
          [Lang.DE]: "Techniker",
          [Lang.EN]: "Technician",
          [Lang.FR]: ["Technicienne", "Technicien", "Technicien"],
          [Lang.ES]: "Técnico"
        },
        quantity: 30
      },
      {
        name: {
          [Lang.DE]: "Meisterbastler ",
          [Lang.EN]: "Fitter",
          [Lang.FR]: "Maître ingénieur",
          [Lang.ES]: "Manitas hábiles"
        },
        quantity: 60
      },
      {
        name: {
          [Lang.DE]: "Sowas wirft man doch nicht weg!",
          [Lang.EN]: "Craftsman",
          [Lang.FR]: "Ré-assembleur de choses",
          [Lang.ES]: "Ingeniero Espacial"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Mac Gyver der Außenwelt",
          [Lang.EN]: "MacGyver of the World beyond",
          [Lang.FR]: "Mac Gyver de l'Outre-Monde",
          [Lang.ES]: "Reparador Supremo"
        },
        quantity: 400
      }
    ]
  },
  [RewardId.BREP]: {
    id: RewardId.BREP,
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
        name: {
          [Lang.DE]: "Spachtler",
          [Lang.EN]: "Town plasterer",
          [Lang.FR]: "Plâtrier de la ville",
          [Lang.ES]: "Manitas hábiles"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Gewissenhafter Maurer",
          [Lang.EN]: "All-round Handyman",
          [Lang.FR]: "Briqueteur conscienceux",
          [Lang.ES]: "Reparador aficionado"
        },
        quantity: 250
      },
      {
        name: {
          [Lang.DE]: "Meisterwerke in Gefahr",
          [Lang.EN]: "Masterpieces in Peril",
          [Lang.FR]: "Chef d'oeuvre en péril",
          [Lang.ES]: "Reparador arriesgado"
        },
        quantity: 500
      },
      {
        name: {
          [Lang.DE]: "Ein Flicken und alles ist wie neu",
          [Lang.EN]: "Get some Duct Tape in there.",
          [Lang.FR]: "Une rustine et ça repart.",
          [Lang.ES]: "Ponga cinta adhesiva allí."
        },
        quantity: 1000
      },
      {
        name: {
          [Lang.DE]: "Pisa-Geraderichter",
          [Lang.EN]: "The Fixer",
          [Lang.FR]: "Redresseur de Pise",
          [Lang.ES]: "El reparador"
        },
        quantity: 1500
      },
      {
        name: {
          [Lang.DE]: "Großer Renovator",
          [Lang.EN]: "Renovator to the stars",
          [Lang.FR]: "Grand rénovateur",
          [Lang.ES]: "Gran Renovador"
        },
        quantity: 2000
      },
      {
        name: {
          [Lang.DE]: "Ein Patch, kein Spiel",
          [Lang.EN]: "Patch-up Specialist",
          [Lang.FR]: "Patch-day, no-play",
          [Lang.ES]: "Especialista en parches"
        },
        quantity: 2500
      },
      {
        name: {
          [Lang.DE]: "Ein Riss? Welcher Riss?",
          [Lang.EN]: "A crack? What crack?",
          [Lang.FR]: "Une fissure ? Quelle fissure ?",
          [Lang.ES]: "¿Una grieta? ¿Qué grieta?"
        },
        quantity: 3000
      },
      {
        name: {
          [Lang.DE]: "Das braucht noch 10 Jahre!",
          [Lang.EN]: "That'll last another 10 years!",
          [Lang.FR]: "Ça tiendra encore 10 ans !",
          [Lang.ES]: "¡Eso llevara otros 10 años!"
        },
        quantity: 3500
      }
    ]
  },
  [RewardId.RP]: {
    id: RewardId.RP,
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
        name: {
          [Lang.DE]: "Neugieriger Leser",
          [Lang.EN]: "Curious reader",
          [Lang.FR]: "Lecteur curieux",
          [Lang.ES]: "Lector curioso"
        },
        quantity: 5,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Eifriger Leser",
          [Lang.EN]: "Storyteller",
          [Lang.FR]: "Conteur d’histoires",
          [Lang.ES]: "Cuentacuentos"
        },
        quantity: 10,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Wüstenhistoriker",
          [Lang.EN]: "Desert Historian",
          [Lang.FR]: "Historien du désert",
          [Lang.ES]: "Historiador del desierto"
        },
        quantity: 20,
        points: 10
      },
      {
        name: {
          [Lang.DE]: "Bibliothekar",
          [Lang.EN]: "Librarian",
          [Lang.FR]: "Gardien des archives",
          [Lang.ES]: "Guardián de los archivos"
        },
        quantity: 30,
        points: 13
      },
      {
        name: {
          [Lang.DE]: "Archivar",
          [Lang.EN]: "Archivist",
          [Lang.FR]: "Maitre rôliste",
          [Lang.ES]: "Maestro Rolista"
        },
        quantity: 40,
        points: 16.5
      },
      {
        name: {
          [Lang.DE]: "Erinnerungsträger",
          [Lang.EN]: "Souvenir Collector",
          [Lang.FR]: "Porteur du Souvenir",
          [Lang.ES]: "Coleccionista de Recuerdos"
        },
        quantity: 60,
        points: 20
      },
      {
        name: {
          [Lang.DE]: "Erinnerungen an die Zivilisation",
          [Lang.EN]: "Memory of civilization",
          [Lang.FR]: "Mémoire de la civilisation",
          [Lang.ES]: "Memoria de la civilización"
        },
        quantity: 100
      }
    ]
  },
  [RewardId.CGARB]: {
    id: RewardId.CGARB,
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
        name: {
          [Lang.DE]: "Müllmann",
          [Lang.EN]: "Corpse Cop",
          [Lang.FR]: "Éboueur",
          [Lang.ES]: "Basurero"
        },
        quantity: 60
      },
      {
        name: {
          [Lang.DE]: "Erfahrener Müllmann",
          [Lang.EN]: "Body Bouncer",
          [Lang.FR]: "Sorteur en chef",
          [Lang.ES]: "Lanzador de cadáveres"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Entsorgungsfachmann",
          [Lang.EN]: "Stiff Shifter",
          [Lang.FR]: "Expulseur de cadavres",
          [Lang.ES]: "Cañón lanzamuertos"
        },
        quantity: 200
      },
      {
        name: {
          [Lang.DE]: "Maccabees-Vertreiber",
          [Lang.EN]: "Apocalyptic Garbageman",
          [Lang.FR]: "Refouleur de macchabées",
          [Lang.ES]: "Repelente de Macchabees"
        },
        quantity: 300
      }
    ]
  },
  [RewardId.BATGUN]: {
    id: RewardId.BATGUN,
    numericalId: 65,
    name: {
      [Lang.EN]: "Battery Launcher Builder",
      [Lang.FR]: "Super lance-piles",
      [Lang.DE]: "Batteriewerferfabrikant",
      [Lang.ES]: "Super lanzapilas"
    },
    description: {
      [Lang.EN]: "The number of battery launchers you have built.",
      [Lang.FR]: "Nombre de puissants lance-piles que vous avez fabriqués.",
      [Lang.DE]: "Anzahl der Batteriewerfer, die du gebaut hast.",
      [Lang.ES]: "Cantidad de lanza-pilas que has fabricado."
    },
    icon: "r_batgun",
    community: false,
    rare: true,
    titles: [
      {
        name: {
          [Lang.DE]: "Durazell",
          [Lang.EN]: "There's a battery with your name on it...",
          [Lang.FR]: "Gardien de la Pile",
          [Lang.ES]: "Lanzador de Pilas"
        },
        quantity: 15
      },
      {
        name: {
          [Lang.DE]: "Hüter der Heiligen Batterie",
          [Lang.EN]: "Zen-ergizer",
          [Lang.FR]: "Détenteur de la Pile Sacrée",
          [Lang.ES]: "Cañón de Pilas"
        },
        quantity: 25
      },
      {
        name: {
          [Lang.DE]: "Der Batterienator",
          [Lang.EN]: "The batterinator.",
          [Lang.FR]: "C’était pas ma guerre",
          [Lang.ES]: "El generador de batería"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Ist es ein Vogel? Ist es ein Flugzeug? Nein, es ist der super Batteriewerfer!",
          [Lang.EN]: "Is it a bird? Is it a plane? No, it's the super battery launcher!",
          [Lang.FR]: "C’est un oiseau, c’est un avion ? Non, c’est super lance-pile !",
          [Lang.ES]: "¿Es un pajaro? Es un avion? No, ¡es el súper lanzapilas!"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Aufgeladen und kampfbereit",
          [Lang.EN]: "Amped up and ready to roll",
          [Lang.FR]: "Ampère et contre tous",
          [Lang.ES]: "Amplificada y lista para rodar"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Hey! Willst du meine... Batterie sehen?",
          [Lang.EN]: "Hey hey, wanna see my... Battery?",
          [Lang.FR]: "Coucou ! Tu veux voir ma pile ?",
          [Lang.ES]: "Oye, oye, ¿quieres ver mi... pila?"
        },
        quantity: 150
      }
    ]
  },
  [RewardId.PANDE]: {
    id: RewardId.PANDE,
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
        name: {
          [Lang.DE]: "Hölle, das esse ich jeden Morgen.",
          [Lang.EN]: "Hell? I eat a little bit of it for breakfast",
          [Lang.FR]: "L’enfer, j’en mange un peu chaque matin",
          [Lang.ES]: "¿Infierno? Desayuno esto todas las mañanas"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Abonnent der Pandämoniumsauna",
          [Lang.EN]: "Regular at the Pandemonium Sauna",
          [Lang.FR]: "Abonné au sauna du Pandémonium",
          [Lang.ES]: "Suscriptor en el Sauna Pandemonio"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Pandämonium ist meine Liebe!",
          [Lang.EN]: "Hardcore my love!",
          [Lang.FR]: "Pandémonium mon amour !",
          [Lang.ES]: "¡Pandemonio mi amor!"
        },
        quantity: 300
      },
      {
        name: {
          [Lang.DE]: "Luzifers Tanzpartner",
          [Lang.EN]: "Lucifer's dance partner",
          [Lang.FR]: "Partenaire de danse de Lucifer",
          [Lang.ES]: "La pareja de baile de Lucifer"
        },
        quantity: 500
      },
      {
        name: {
          [Lang.DE]: "Ultimativer Horden-Erkunder",
          [Lang.EN]: "Ultimate Hordian Explorer",
          [Lang.FR]: "Ultime explorateur hordien",
          [Lang.ES]: "Explorador hordiano definitivo"
        },
        quantity: 1000
      }
    ]
  },
  [RewardId.HBUILD]: {
    id: RewardId.HBUILD,
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
  [RewardId.TRONCO]: {
    id: RewardId.TRONCO,
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
        name: {
          [Lang.DE]: "Kettensägenmassaker",
          [Lang.EN]: "Chainsaw Massacre",
          [Lang.FR]: "Massacre à la tronçonneuse",
          [Lang.ES]: "Masacre de la motosierra"
        },
        quantity: 5
      },
      {
        name: {
          [Lang.DE]: "Fleisch-Schuldner",
          [Lang.EN]: "There ain't nothing I can't take this chainsaw to...",
          [Lang.FR]: "Débiteur de viande",
          [Lang.ES]: "No hay nada a lo que no me pueda llevar esta motosierra..."
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Bruce Campbell",
          [Lang.EN]: "Bruce Campbell",
          [Lang.FR]: "Bruce Campbell",
          [Lang.ES]: "Bruce Campbell"
        },
        quantity: 30
      }
    ]
  },
  [RewardId.GUARD]: {
    id: RewardId.GUARD,
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
        name: {
          [Lang.DE]: "Immer ein Auge offen",
          [Lang.EN]: "One Eye Open",
          [Lang.FR]: "Un Oeil ouvert",
          [Lang.ES]: "Un ojo abierto"
        },
        quantity: 20,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Mit offenen Augen schlafen? Kein Problem!",
          [Lang.EN]: "Both Eyes Open",
          [Lang.FR]: "Deux yeux ouverts",
          [Lang.ES]: "Dos ojos abiertos"
        },
        quantity: 40,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Immer alles im Blick",
          [Lang.EN]: "Long-sighted",
          [Lang.FR]: "Longue Vue",
          [Lang.ES]: "Largavista"
        },
        quantity: 80
      },
      {
        name: {
          [Lang.DE]: "Wachsam",
          [Lang.EN]: "Uber-Aware",
          [Lang.FR]: "Aware",
          [Lang.ES]: "Consciente"
        },
        quantity: 120
      },
      {
        name: {
          [Lang.DE]: "Paranoid",
          [Lang.EN]: "Paranoid and Proud",
          [Lang.FR]: "Parano",
          [Lang.ES]: "Paranoico"
        },
        quantity: 200
      },
      {
        name: {
          [Lang.DE]: "Fels in der Brandung",
          [Lang.EN]: "The Rock!",
          [Lang.FR]: "Le Roc !",
          [Lang.ES]: "La roca!"
        },
        quantity: 400
      },
      {
        name: {
          [Lang.DE]: "Uneinnehmbare Festung",
          [Lang.EN]: "Impenetrable Fortress",
          [Lang.FR]: "Forteresse imprenable",
          [Lang.ES]: "Fortaleza impenetrable"
        },
        quantity: 600
      }
    ]
  },
  [RewardId.WINBAS]: {
    id: RewardId.WINBAS,
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
        name: {
          [Lang.DE]: "Vertrauenswürdiger Bürger",
          [Lang.EN]: "Trusted Neighbour",
          [Lang.FR]: "Concitoyen de confiance",
          [Lang.ES]: "Compañero de confianza"
        },
        quantity: 2,
        points: 13
      },
      {
        name: {
          [Lang.DE]: "Sehr erfahrener Bürger",
          [Lang.EN]: "Inspiration for the people",
          [Lang.FR]: "Inspiration pour le peuple",
          [Lang.ES]: "Inspiración para el pueblo"
        },
        quantity: 5,
        points: 20
      },
      {
        name: {
          [Lang.DE]: "Vorbild für das Volk",
          [Lang.EN]: "Highly experienced player",
          [Lang.FR]: "Joueur très expérimenté",
          [Lang.ES]: "Jugador experimentado"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Richtwert der Gemeinschaft",
          [Lang.EN]: "Pillar of the community",
          [Lang.FR]: "Référence communautaire",
          [Lang.ES]: "Modelo para la comunidad"
        },
        quantity: 15
      },
      {
        name: {
          [Lang.DE]: "Berühmter Veteran",
          [Lang.EN]: "Decorated Veteran",
          [Lang.FR]: "Illustre vétéran",
          [Lang.ES]: "Ilustre veterano"
        },
        quantity: 20
      }
    ]
  },
  [RewardId.WINTOP]: {
    id: RewardId.WINTOP,
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
        name: {
          [Lang.DE]: "Lebender Mythos",
          [Lang.EN]: "Myth in the making",
          [Lang.FR]: "Mythe vivant",
          [Lang.ES]: "Héroe urbano"
        },
        quantity: 1,
        points: 20
      },
      {
        name: {
          [Lang.DE]: "Ich bin eine Legende",
          [Lang.EN]: "I am legend.",
          [Lang.FR]: "Je suis une légende.",
          [Lang.ES]: "El Salvador del Pueblo"
        },
        quantity: 2
      },
      {
        name: {
          [Lang.DE]: "Hör auf mich, wenn du überleben möchtest",
          [Lang.EN]: "If you want to live... Follow me!",
          [Lang.FR]: "Suis-moi si tu veux vivre",
          [Lang.ES]: "Sígueme si quieres sobrevivir"
        },
        quantity: 3
      }
    ]
  },
  [RewardId.WINTHI]: {
    id: RewardId.WINTHI,
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
        name: {
          [Lang.DE]: "Anfängerleiche",
          [Lang.EN]: "Beginner Corpse",
          [Lang.FR]: "Cadavre débutant",
          [Lang.ES]: "Cadáver de principiante"
        },
        quantity: 2
      },
      {
        name: {
          [Lang.DE]: "Rabenfreund",
          [Lang.EN]: "Crows' buddy",
          [Lang.FR]: "Copain des corbeaux",
          [Lang.ES]: "Amigo de los cuervos"
        },
        quantity: 5
      },
      {
        name: {
          [Lang.DE]: "Dehydrationskollege",
          [Lang.EN]: "Dehydrated fellow",
          [Lang.FR]: "Concitoyen déshydraté",
          [Lang.ES]: "Colega de la deshidratación"
        },
        quantity: 10
      }
    ]
  },
  [RewardId.KILLZ]: {
    id: RewardId.KILLZ,
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
        name: {
          [Lang.DE]: "Brutalo",
          [Lang.EN]: "Mutilator",
          [Lang.FR]: "Grosse brute",
          [Lang.ES]: "Brutal"
        },
        quantity: 100,
        points: 3.5
      },
      {
        name: {
          [Lang.DE]: "Verstümmler",
          [Lang.EN]: "Exterminator",
          [Lang.FR]: "Mutilateur",
          [Lang.ES]: "Mutilador"
        },
        quantity: 200,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Killer",
          [Lang.EN]: "Corpse Crusher",
          [Lang.FR]: "Exterminateur",
          [Lang.ES]: "Exterminador"
        },
        quantity: 300,
        points: 10
      },
      {
        name: {
          [Lang.DE]: "Kadaverentsorger",
          [Lang.EN]: "The Hitman",
          [Lang.FR]: "Broyeur de cadavres",
          [Lang.ES]: "Descuartizador"
        },
        quantity: 800,
        points: 13
      },
      {
        name: {
          [Lang.DE]: "Vernichter",
          [Lang.EN]: "The Peacemaker",
          [Lang.FR]: "Total annihilation",
          [Lang.ES]: "Aniquilador"
        },
        quantity: 2000
      },
      {
        name: {
          [Lang.DE]: "Schlächter",
          [Lang.EN]: "Chuck Norris",
          [Lang.FR]: "Le Tueur",
          [Lang.ES]: "Masacrador"
        },
        quantity: 4000
      },
      {
        name: {
          [Lang.DE]: "Friedensstifter",
          [Lang.EN]: "Jean Claude Van Damned",
          [Lang.FR]: "Le Pacificateur",
          [Lang.ES]: "Pacificador"
        },
        quantity: 6000
      },
      {
        name: {
          [Lang.DE]: "Alptraum der Traumlosen",
          [Lang.EN]: "Go ahead, make my day!",
          [Lang.FR]: "J'aime les bandes décimées",
          [Lang.ES]: "Mordedor de muertos"
        },
        quantity: 10000
      },
      {
        name: {
          [Lang.DE]: "Du nennst das ein Messer? DAS ist ein Messer!",
          [Lang.EN]: "Call that a knife? THAT's a knife!",
          [Lang.FR]: "T'appelles ça un couteau ? ÇA c'est un couteau !",
          [Lang.ES]: "¿Llamas a eso un cuchillo? ¡ESTO es un cuchillo!"
        },
        quantity: 15000
      }
    ]
  },
  [RewardId.BETA]: {
    id: RewardId.BETA,
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
        name: {
          [Lang.DE]: "Alter Hase",
          [Lang.EN]: "In with the bricks",
          [Lang.FR]: "Grand ancien",
          [Lang.ES]: "Probador beta"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.SANDB]: {
    id: RewardId.SANDB,
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
        name: {
          [Lang.DE]: "Sandmann",
          [Lang.EN]: "Sandman",
          [Lang.FR]: "Ensableur",
          [Lang.ES]: "Hombre de la arena"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Sandy Maverick",
          [Lang.EN]: "Sandy Maverick",
          [Lang.FR]: "Franc-tireur sablonneux",
          [Lang.ES]: "Sandy Maverick"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Sandsteiniger",
          [Lang.EN]: "Christmas Stonings... over here!",
          [Lang.FR]: "Lapidations de Noël",
          [Lang.ES]: "Decoración navideña"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Sandkasten-Scharfschütze",
          [Lang.EN]: "Sandstorm Sniper",
          [Lang.FR]: "Sniper des bacs à sable",
          [Lang.ES]: "Francotirador aislado"
        },
        quantity: 250
      }
    ]
  },
  [RewardId.PAQUES]: {
    id: RewardId.PAQUES,
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
        name: {
          [Lang.DE]: "Mitglied des Roten Kreuzes",
          [Lang.EN]: "Member of the Red Cross",
          [Lang.FR]: "Membre de la Croix Rouge",
          [Lang.ES]: "Miembro de la Cruz Roja"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.SANTAC]: {
    id: RewardId.SANTAC,
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
        name: {
          [Lang.DE]: "Der Weihnachtsmann ist ein Schlawiner",
          [Lang.EN]: "Father Christmas is a little rascal",
          [Lang.FR]: "Le Père Noël est un coquin",
          [Lang.ES]: "Santa es un pillo"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Santa Klaus ist ein Schummler",
          [Lang.EN]: "Santa is a crook",
          [Lang.FR]: "Le Père Noël est un filou",
          [Lang.ES]: "Santa es un ladrón"
        },
        quantity: 25
      },
      {
        name: {
          [Lang.DE]: "Santa Klaus ist Abfall",
          [Lang.EN]: "Old Saint Nick is a little **it",
          [Lang.FR]: "Le Père Noël est une ordure",
          [Lang.ES]: "Santa es basura"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Santa Klaus ist Abschaum",
          [Lang.EN]: "Santa Claus is a thieving b*****d",
          [Lang.FR]: "Le Père Noël est une raclure",
          [Lang.ES]: "Santa es Escoria"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Hängt Santa Klaus!",
          [Lang.EN]: "Prepare the gallows - we're hanging Santa!",
          [Lang.FR]: "Pendez le Père Noël !",
          [Lang.ES]: "Preparen la horca, ¡vamos a colgar a Santa!"
        },
        quantity: 100
      }
    ]
  },
  [RewardId.CHAMAN]: {
    id: RewardId.CHAMAN,
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
  [RewardId.ARMAG]: {
    id: RewardId.ARMAG,
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
        name: {
          [Lang.DE]: "Zeuge des Armageddon",
          [Lang.EN]: "Armageddon Witness",
          [Lang.FR]: "Témoin de l'Armageddon",
          [Lang.ES]: "Testigo de Armagedón"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.GINFEC]: {
    id: RewardId.GINFEC,
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
        name: {
          [Lang.DE]: "Zeuge der großen Verseuchung",
          [Lang.EN]: "Witness to the Great Contamination",
          [Lang.FR]: "Témoin de la Grande Contamination",
          [Lang.ES]: "Testigo de la Gran Contaminación"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.PTAME]: {
    id: RewardId.PTAME,
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
        name: {
          [Lang.DE]: "Bei meiner Seel",
          [Lang.EN]: "O Soul-e Mio",
          [Lang.FR]: "Leerd’âmeur nauséabond",
          [Lang.ES]: "Carne débil"
        },
        quantity: 100,
        points: 13
      },
      {
        name: {
          [Lang.DE]: "Für immer und seelich",
          [Lang.EN]: "Tin-soul town",
          [Lang.FR]: "Fan-tomme râpé",
          [Lang.ES]: "Simple Mortal"
        },
        quantity: 500,
        points: 33
      },
      {
        name: {
          [Lang.DE]: "Noble Seele",
          [Lang.EN]: "Noble Soul",
          [Lang.FR]: "Âme digne",
          [Lang.ES]: "Alma digna"
        },
        quantity: 1000,
        points: 66
      },
      {
        name: {
          [Lang.DE]: "Beseelt",
          [Lang.EN]: "Soul-dier",
          [Lang.FR]: "Spider-Âme",
          [Lang.ES]: "Inspirado"
        },
        quantity: 2000,
        points: 132
      },
      {
        name: {
          [Lang.DE]: "Reinkarnator",
          [Lang.EN]: "Reincarnator",
          [Lang.FR]: "Réincarnator",
          [Lang.ES]: "Reencarnator X"
        },
        quantity: 3000,
        points: 198
      },
      {
        name: {
          [Lang.DE]: "Göttliche Seele",
          [Lang.EN]: "Divine Soul",
          [Lang.FR]: "Âme divine",
          [Lang.ES]: "Alma Divina"
        },
        quantity: 5000
      },
      {
        name: {
          [Lang.DE]: "Open-chakra",
          [Lang.EN]: "Open-chakra",
          [Lang.FR]: "Open-chakra",
          [Lang.ES]: "Chakra-Man"
        },
        quantity: 7000
      },
      {
        name: {
          [Lang.DE]: "Tausend-und-ein-Leben",
          [Lang.EN]: "Thousand I-lived",
          [Lang.FR]: "Les mille et une vies",
          [Lang.ES]: "Mil y Una Vidas"
        },
        quantity: 9000
      },
      {
        name: {
          [Lang.DE]: "Buddha",
          [Lang.EN]: "Buddha",
          [Lang.FR]: "Bouddha",
          [Lang.ES]: "El Inmortal"
        },
        quantity: 12000
      }
    ]
  },
  [RewardId.JSHAM]: {
    id: RewardId.JSHAM,
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
        name: {
          [Lang.DE]: "Diplomierter Scharlatan",
          [Lang.EN]: "Certified Charlatan",
          [Lang.FR]: "Aborigène curieux",
          [Lang.ES]: "Aborigen curioso"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Schlimmer Finger",
          [Lang.EN]: "Accursed Soothsayer",
          [Lang.FR]: "Charlatan diplômé",
          [Lang.ES]: "Charlatán Amateur"
        },
        quantity: 25
      },
      {
        name: {
          [Lang.DE]: "Seelenverwerter",
          [Lang.EN]: "Soul Recycler",
          [Lang.FR]: "Aruspice maudit",
          [Lang.ES]: "Charlatán Profesional"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Mystischer Seher",
          [Lang.EN]: "Divine Mystic",
          [Lang.FR]: "Recycleur d’âmes",
          [Lang.ES]: "Reciclador de almas"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.DE]: "Voodoo Sorceror",
          [Lang.EN]: "Voodoo Sorceror",
          [Lang.FR]: "Sorcier vaudou",
          [Lang.ES]: "Hechicero vudú"
        },
        quantity: 300
      },
      {
        name: {
          [Lang.DE]: "Allwissender Schamane",
          [Lang.EN]: "Omniscient Shaman",
          [Lang.FR]: "Chaman omniscient",
          [Lang.ES]: "Chamán omnisciente"
        },
        quantity: 800
      },
      {
        name: {
          [Lang.DE]: "Anführer der verlorenen Seelen",
          [Lang.EN]: "Guide of lost souls",
          [Lang.FR]: "Guide des âmes perdues",
          [Lang.ES]: "Guía de las almas perdidas"
        },
        quantity: 1500
      }
    ]
  },
  [RewardId.RREFER]: {
    id: RewardId.RREFER,
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
        name: {
          [Lang.DE]: "Kleiner Guru",
          [Lang.EN]: "Fund re-allocation specialist",
          [Lang.FR]: "Détourneur de fonds",
          [Lang.ES]: "Especialista en reasignación de fondos"
        },
        quantity: 1
      },
      {
        name: {
          [Lang.DE]: "Überzeugender Guru",
          [Lang.EN]: "Citizen trafficker",
          [Lang.FR]: "Trafiquant de citoyens",
          [Lang.ES]: "Traficante de habitantes"
        },
        quantity: 3
      },
      {
        name: {
          [Lang.DE]: "Frischfleischhändler",
          [Lang.EN]: "Fresh flesh peddler",
          [Lang.FR]: "Négociant en chair fraîche",
          [Lang.ES]: "Comerciante de carne fresca"
        },
        quantity: 5
      },
      {
        name: {
          [Lang.DE]: "Seelenhändler",
          [Lang.EN]: "Soul salesman",
          [Lang.FR]: "Marchand d'âmes",
          [Lang.ES]: "Vendedor de almas"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Sehr überzeugender Pate",
          [Lang.EN]: "Very convincing sponsor",
          [Lang.FR]: "Parrain très convaincant",
          [Lang.ES]: "Patrocinador muy convincente"
        },
        quantity: 15
      },
      {
        name: {
          [Lang.DE]: "Wüstenspekulant",
          [Lang.EN]: "Desert speculator",
          [Lang.FR]: "Spéculateur du désert",
          [Lang.ES]: "Especulador del Ultramundo"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Seelentrader",
          [Lang.EN]: "Top trader",
          [Lang.FR]: "Trader très efficace",
          [Lang.ES]: "Comerciante audaz"
        },
        quantity: 25
      },
      {
        name: {
          [Lang.DE]: "Scientologe",
          [Lang.EN]: "Persuadotron",
          [Lang.FR]: "Persuadotron-powa",
          [Lang.ES]: "Persuadotron"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Komm auf die dunkle Seite der Macht!",
          [Lang.EN]: "Come to the dark side!",
          [Lang.FR]: "Passe du côté obscur !",
          [Lang.ES]: "¡Ven al lado oscuro!"
        },
        quantity: 100
      },
      {
        name: {
          [Lang.DE]: "Warren Buffet der Außenwelt",
          [Lang.EN]: "Golden Glaoui",
          [Lang.FR]: "Golden Glaouis",
          [Lang.ES]: "Warren Buffet del Ultramundo"
        },
        quantity: 150
      }
    ]
  },
  [RewardId.FJVANI]: {
    id: RewardId.FJVANI,
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
        name: {
          [Lang.DE]: "Verdammt in Saarbrücken",
          [Lang.EN]: "Geeks tracker",
          [Lang.FR]: "Traqueur de geeks",
          [Lang.ES]: "Rastreador friki"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.FJV2]: {
    id: RewardId.FJV2,
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
        name: {
          [Lang.DE]: "Motivierter Messebesucher",
          [Lang.EN]: "Motivated Hordian festival-goer",
          [Lang.FR]: "Festivalier hordien motivé",
          [Lang.ES]: "Aficionado motivado al festival de las hordas"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.FJV]: {
    id: RewardId.FJV,
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
        name: {
          [Lang.DE]: "FJV'08 Kanonenfutter",
          [Lang.EN]: "FJV'08 cannon fodder",
          [Lang.FR]: "Chair à canon du FJV'08",
          [Lang.ES]: "Carne de cañón FJV'08"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.COMU]: {
    id: RewardId.COMU,
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
        name: {
          [Lang.DE]: "Held der Community!",
          [Lang.EN]: "In at the deep end!",
          [Lang.FR]: "Dedans jusqu’au cou !",
          [Lang.ES]: "¡En el fondo!"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.COMU2]: {
    id: RewardId.COMU2,
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
        name: {
          [Lang.DE]: "Bringt Sachen ins Rollen!",
          [Lang.EN]: "Making things happen!",
          [Lang.FR]: "Fais bouger les choses!",
          [Lang.ES]: "¡Hacer que las cosas sucedan!"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.COTT]: {
    id: RewardId.COTT,
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
        name: {
          [Lang.DE]: "Eine Stadt sie zu knechten!",
          [Lang.EN]: "One town to rule them all!",
          [Lang.FR]: "Une ville pour les gouverner tous !",
          [Lang.ES]: "¡Un pueblo para gobernarlos!"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.CDH]: {
    id: RewardId.CDH,
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
  [RewardId.DERWIN]: {
    id: RewardId.DERWIN,
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
        name: {
          [Lang.DE]: "Es ist der Tod der mich fürchten sollte!",
          [Lang.EN]: "It is death that should be afraid of me!",
          [Lang.FR]: "La mort a peur de moi !",
          [Lang.ES]: "¡Es la muerte la que debería tenerme miedo!"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.ERMWIN]: {
    id: RewardId.ERMWIN,
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
        name: {
          [Lang.DE]: "Ich bin ein Gott! Ich werde ewig leben!",
          [Lang.EN]: "I am a god! I will live forever!",
          [Lang.FR]: "Chef-Ascète",
          [Lang.ES]: "¡Soy un dios! ¡Viviré por siempre!"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.CDHWIN]: {
    id: RewardId.CDHWIN,
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
        name: {
          [Lang.DE]: "Schaufelführer",
          [Lang.EN]: "Head Shoveler",
          [Lang.FR]: "Chef-Pelleteur",
          [Lang.ES]: "Pala de cabeza"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.DEFWIN]: {
    id: RewardId.DEFWIN,
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
        name: {
          [Lang.DE]: "Chef der Mauer",
          [Lang.EN]: "Rampart Chief",
          [Lang.FR]: "Chef-Rempart",
          [Lang.ES]: "Jefe de muralla"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.KOHLMB]: {
    id: RewardId.KOHLMB,
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
    rare: false,
    titles: [
      {
        name: {
          [Lang.EN]: "Citoyen Koh-Lambdais",
          [Lang.FR]: "Citoyen Koh-Lambdais",
          [Lang.DE]: "Citoyen Koh-Lambdais",
          [Lang.ES]: "Citoyen Koh-Lambdais"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.LEPRE]: {
    id: RewardId.LEPRE,
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
        name: {
          [Lang.DE]: "Irische Taschen sind prall gefüllt!",
          [Lang.EN]: "Irish pockets are bulging!",
          [Lang.FR]: "Les poches irlandaises sont blindées !",
          [Lang.ES]: "¡Los bolsillos irlandeses están llenos hasta el tope!"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "Wo ist mein Topf voll Gold, diebische Elster!",
          [Lang.EN]: "Where's my pot of gold, thieving pikey!",
          [Lang.FR]: "Où est mon pot d’or, maudit voleur ?",
          [Lang.ES]: "¿Dónde está mi olla de oro, escurridizo ladrón?"
        },
        quantity: 25
      },
      {
        name: {
          [Lang.DE]: "Dieser Kobold ist unaufhaltbar.",
          [Lang.EN]: "This leprechaun is unstoppable.",
          [Lang.FR]: "Ce lutin est imparable !",
          [Lang.ES]: "Este duende es imparable."
        },
        quantity: 50
      },
      {
        name: {
          [Lang.DE]: "Verbrennt ihn! Sieh nach ob seine Asche grün wird!",
          [Lang.EN]: "Burn him, see if his ashes turn green!",
          [Lang.FR]: "Brûlez-le, voyez si ses cendres deviennent vertes !",
          [Lang.ES]: "¡Quémalo, mira si sus cenizas se vuelven verdes!"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.DE]: "Ein Wohnwagen ohne Räder???",
          [Lang.EN]: "A caravan with no wheels???",
          [Lang.FR]: "Une caravane sans roues ???",
          [Lang.ES]: "¿¿¿Una caravana sin ruedas???"
        },
        quantity: 100
      }
    ]
  },
  [RewardId.GOODG]: {
    id: RewardId.GOODG,
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
        name: {
          [Lang.DE]: "Netter Kerl",
          [Lang.EN]: "Good Guy",
          [Lang.FR]: "Good Guy",
          [Lang.ES]: "Buen chico"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.BETA2]: {
    id: RewardId.BETA2,
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
        name: {
          [Lang.DE]: "Patient Null",
          [Lang.EN]: "Patient Zero",
          [Lang.FR]: "Patient Zéro",
          [Lang.ES]: "Paciente cero"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.RANGWIN]: {
    id: RewardId.RANGWIN,
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
        name: {
          [Lang.DE]: "Tarnexperte",
          [Lang.EN]: "Camo Chief",
          [Lang.FR]: "Chef-Camouflage",
          [Lang.ES]: "Amo del Camuflaje"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.GSP]: {
    id: RewardId.GSP,
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
        name: {
          [Lang.DE]: "Ich bin geheilt",
          [Lang.EN]: "I am healed",
          [Lang.FR]: "Je suis guéri(e)",
          [Lang.ES]: "Estoy curado"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.COLLEC2]: {
    id: RewardId.COLLEC2,
    numericalId: 101,
    name: {
      [Lang.EN]: "Soul Collector",
      [Lang.FR]: "Collecteur d’âmes",
      [Lang.DE]: "Kernsammler",
      [Lang.ES]: "Recolector de Almas"
    },
    description: {
      [Lang.EN]: "The number of dead citizens' souls collected in the World Beyond.",
      [Lang.FR]: "Nombres d’âmes de citoyens décédés collectées dans l’Outre-Monde.",
      [Lang.DE]: "Anzahl der im Ausland gesammelten Seelen verstorbener Bürger",
      [Lang.ES]: "Cantidad de almas recolectadas de habitantes fallecidos en el Ultramundo."
    },
    icon: "r_collec2",
    community: false,
    rare: false
  },
  [RewardId.MYSTIC2]: {
    id: RewardId.MYSTIC2,
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
  [RewardId.UFC]: {
    id: RewardId.UFC,
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
  [RewardId.RIPFLASH]: {
    id: RewardId.RIPFLASH,
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
        name: {
          [Lang.DE]: "Keine Fehler hi&e%12;r",
          [Lang.EN]: "No bugs h&e%12;re",
          [Lang.FR]: "Plus d&​apos;erreurs ici",
          [Lang.ES]: "Sin bugs a&q%12;uí"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.TAMWIN]: {
    id: RewardId.TAMWIN,
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
        name: {
          [Lang.DE]: "Ich bin ein Biest!",
          [Lang.EN]: "Chief Tamer",
          [Lang.FR]: "Chef-Bêbête",
          [Lang.ES]: "¡Soy una fiera!"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.JBASIC]: {
    id: RewardId.JBASIC,
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
    rare: false,
    titles: [
      {
        name: {
          [Lang.EN]: "Aucun titre à débloquer",
          [Lang.FR]: "Aucun titre à débloquer",
          [Lang.DE]: "Aucun titre à débloquer",
          [Lang.ES]: "Aucun titre à débloquer"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.EN]: "Même gratuit, je ne paie pas.",
          [Lang.FR]: "Même gratuit, je ne paie pas.",
          [Lang.DE]: "Même gratuit, je ne paie pas.",
          [Lang.ES]: "Même gratuit, je ne paie pas."
        },
        quantity: 25
      },
      {
        name: {
          [Lang.EN]: "Moldu",
          [Lang.FR]: "Moldu",
          [Lang.DE]: "Moldu",
          [Lang.ES]: "Moldu"
        },
        quantity: 75
      },
      {
        name: {
          [Lang.EN]: "Norman Normal",
          [Lang.FR]: "Norman Normal",
          [Lang.DE]: "Norman Normal",
          [Lang.ES]: "Norman Normal"
        },
        quantity: 150
      },
      {
        name: {
          [Lang.EN]: "Point fort : trop faible.",
          [Lang.FR]: "Point fort : trop faible.",
          [Lang.DE]: "Point fort : trop faible.",
          [Lang.ES]: "Point fort : trop faible."
        },
        quantity: 299
      }
    ]
  },
  [RewardId.SCADDH]: {
    id: RewardId.SCADDH,
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
        name: {
          [Lang.DE]: "DdA Beste Buddler",
          [Lang.EN]: "DoE Winning Scavenger",
          [Lang.FR]: "Fwinneur du DDH",
          [Lang.ES]: "DdO Mejor Excavador"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.DDH]: {
    id: RewardId.DDH,
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
  [RewardId.EVENTWIN]: {
    id: RewardId.EVENTWIN,
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
  [RewardId.EVENTPART]: {
    id: RewardId.EVENTPART,
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
    rare: false,
    titles: [
      {
        name: {
          [Lang.EN]: "Veni, vidi, perdidi",
          [Lang.FR]: "Veni, vidi, perdidi",
          [Lang.DE]: "Veni, vidi, perdidi",
          [Lang.ES]: "Veni, vidi, perdidi"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.THERMAL]: {
    id: RewardId.THERMAL,
    numericalId: 111,
    name: {
      [Lang.EN]: "Wonder: Blue Gold Thermal baths",
      [Lang.FR]: "Merveille : Thermes de l'Or bleu",
      [Lang.DE]: "Wunderwerk: Blaugoldige Thermalbäder",
      [Lang.ES]: "Maravilla: Baños Termales de Oro Azul"
    },
    description: {
      [Lang.EN]: "Hey, you should have brought your soap!",
      [Lang.FR]: "Hé, tu aurais dû penser à ton savon !",
      [Lang.DE]: "Hey, du hättest an deine Seife denken sollen!",
      [Lang.ES]: "¡Oye, deberías haber previsto jabón!"
    },
    icon: "r_thermal",
    community: false,
    rare: true,
    titles: [
      {
        name: {
          [Lang.EN]: "Ils sont fous ces romains!",
          [Lang.FR]: "Ils sont fous ces romains!",
          [Lang.DE]: "Ils sont fous ces romains!",
          [Lang.ES]: "Ils sont fous ces romains!"
        },
        quantity: 5
      },
      {
        name: {
          [Lang.EN]: "Aqua ça sert ?",
          [Lang.FR]: "Aqua ça sert ?",
          [Lang.DE]: "Aqua ça sert ?",
          [Lang.ES]: "Aqua ça sert ?"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.EN]: "Comme un poney dans l'eau",
          [Lang.FR]: "Comme un poney dans l'eau",
          [Lang.DE]: "Comme un poney dans l'eau",
          [Lang.ES]: "Comme un poney dans l'eau"
        },
        quantity: 15
      },
      {
        name: {
          [Lang.EN]: "Qui m'Hammam me suive!",
          [Lang.FR]: "Qui m'Hammam me suive!",
          [Lang.DE]: "Qui m'Hammam me suive!",
          [Lang.ES]: "Qui m'Hammam me suive!"
        },
        quantity: 20
      }
    ]
  },
  [RewardId.CBURN]: {
    id: RewardId.CBURN,
    numericalId: 112,
    name: {
      [Lang.EN]: "Body cremators",
      [Lang.FR]: "Crémateur de corps",
      [Lang.DE]: "Leichenverbrenner",
      [Lang.ES]: "Cremación de cuerpos"
    },
    description: {
      [Lang.EN]: "Performed fiery burial rituals on the corpses of citizens.",
      [Lang.FR]: "Nombre de rituels funéraires effectués sur les cadavres des citoyens.",
      [Lang.DE]: "Durchgeführte feurige Begräbnisrituale an den Leichen von Bürgern",
      [Lang.ES]: "Rituales funerarios ardientes realizados con los cuerpos de habitantes."
    },
    icon: "r_cburn",
    community: false,
    rare: false,
    titles: [
      {
        name: {
          [Lang.EN]: "Tout va bien",
          [Lang.FR]: "Tout va bien",
          [Lang.DE]: "Tout va bien",
          [Lang.ES]: "Tout va bien"
        },
        quantity: 50
      },
      {
        name: {
          [Lang.EN]: "Cendrier de l'Outre-Monde",
          [Lang.FR]: "Cendrier de l'Outre-Monde",
          [Lang.DE]: "Cendrier de l'Outre-Monde",
          [Lang.ES]: "Cendrier de l'Outre-Monde"
        },
        quantity: 100
      }
    ]
  },
  [RewardId.DECOFEIST]: {
    id: RewardId.DECOFEIST,
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
    rare: false,
    titles: [
      {
        name: {
          [Lang.EN]: "Enguirlandé",
          [Lang.FR]: "Enguirlandé",
          [Lang.DE]: "Enguirlandé",
          [Lang.ES]: "Enguirlandé"
        },
        quantity: 25
      }
    ]
  },
  [RewardId.TECHWIN]: {
    id: RewardId.TECHWIN,
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
        name: {
          [Lang.DE]: "Meisteringenieur",
          [Lang.EN]: "Handyman Chief",
          [Lang.FR]: "Chef-Bricoleur",
          [Lang.ES]: "Jefe de Manitas"
        },
        quantity: 1
      }
    ]
  },
  [RewardId.EXPLOT]: {
    id: RewardId.EXPLOT,
    numericalId: 116,
    name: {
      [Lang.EN]: "Total Exploration",
      [Lang.FR]: "Explorations totales",
      [Lang.DE]: "Vollständige Erkundung",
      [Lang.ES]: "Exploración Total"
    },
    description: {
      [Lang.EN]: "The number of times you have seen a map fully revealed, and each of its initial ruins and e-ruins searched or explored at least once.",
      [Lang.FR]: "Nombre de fois où le désert n'a plus eu aucun secret pour votre ville.",
      [Lang.DE]: "Anzahl der Karten, die du vollständig aufgedeckt erlebt hast und auf der sämtliche initialen Ruinen und begehbaren Ruinen zumindest einmal besucht oder betreten worden.",
      [Lang.ES]: "Número de veces que has visto un mapa completamente revelado en el que todas sus ruinas y ruinas explorables iniciales han sido exploradas al menos una vez."
    },
    icon: "r_explot",
    community: false,
    rare: true,
    titles: [
      {
        name: {
          [Lang.DE]: "Leidenschaftlicher Entdecker",
          [Lang.EN]: "Totally impetuous explorer",
          [Lang.FR]: "Explorateur totalement impétueux",
          [Lang.ES]: "Explorador totalmente impetuoso"
        },
        quantity: 5,
        points: 6.5
      },
      {
        name: {
          [Lang.DE]: "Kartograph",
          [Lang.EN]: "Cartographer",
          [Lang.FR]: "Cartographe",
          [Lang.ES]: "Cartógrafo"
        },
        quantity: 10
      },
      {
        name: {
          [Lang.DE]: "100%",
          [Lang.EN]: "100%",
          [Lang.FR]: "100%",
          [Lang.ES]: "100%"
        },
        quantity: 15
      },
      {
        name: {
          [Lang.DE]: "TBD",
          [Lang.EN]: "TBD",
          [Lang.FR]: "TBD",
          [Lang.ES]: "TBD"
        },
        quantity: 20
      },
      {
        name: {
          [Lang.DE]: "Total Exploration",
          [Lang.EN]: "Total Exploration",
          [Lang.FR]: "Total Exploration",
          [Lang.ES]: "Total Exploration"
        },
        quantity: 1,
        points: 3.5
      }
    ]
  }

};