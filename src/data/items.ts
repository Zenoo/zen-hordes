import { BuildingId, DropLocation, Item, ItemId } from "./types";

export const items: Readonly<Record<ItemId, Item>> = {
  [ItemId.WATER]: {
    id: ItemId.WATER,
    numericalId: 1,
    name: {
      [Lang.EN]: "Water Ration",
      [Lang.FR]: "Ration d'eau",
      [Lang.DE]: "Ration Wasser",
      [Lang.ES]: "Ración de agua"
    },
    description: {
      [Lang.EN]: "Drinking your water ration will quench your thirst when you're in the World Beyond. This will refresh you, and more importantly, your action points once per day.",
      [Lang.FR]: "La gourde vous permet de vous désaltérer en dehors de la ville. L'eau permet de récupérer ses points d'action (1 fois par jour) et d'étancher la soif (pas de limitation par jour).",
      [Lang.DE]: "Das Wasser gibt dir einmal pro Tag deine Aktionpunkte zurück oder löscht alternativ deinen Durst (unbegrenzt).",
      [Lang.ES]: "El agua te hace recuperar Puntos de Acción (1 vez al día) y calmará tu sed (sin limitaciones diarias)."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource, ItemCategory.Water, ItemCategory.Poisonable],
    icon: "item_water",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Drink,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "thirst1"
          }
        ]
      },
      {
        type: ItemActionType.Drink,
        conditions: [
          ItemActionConditionEnum.Ghoul
        ],
        effects: [
          {
            type: ItemActionEffectType.AddStatus,
            value: "tg_meta_wound"
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.Shaman
        ],
        effects: [
          {
            type: ItemActionEffectType.MP,
            value: -1
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "potion_#00",
            odds: 100
          }
        ]
      }
    ],
  },
  [ItemId.PILE]: {
    id: ItemId.PILE,
    numericalId: 2,
    name: {
      [Lang.EN]: "Battery",
      [Lang.FR]: "Pile",
      [Lang.DE]: "Batterie",
      [Lang.ES]: "Pila"
    },
    description: {
      [Lang.EN]: "The battery is a very useful item. However, sometimes they run down all too quickly...",
      [Lang.FR]: "La Pile sert à plein de trucs. Mais ça se décharge parfois trop vite...",
      [Lang.DE]: "Die Batterie ist für vieles nützlich. Allerdings ist sie auch ziemlich schnell leer ...",
      [Lang.ES]: "Sirve para muchas cosas, pero se descarga muy rápido..."
    },
    categories: [ItemCategory.Resources],
    icon: "item_pile",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 4.29
    },
  },
  [ItemId.CAN]: {
    id: ItemId.CAN,
    numericalId: 3,
    name: {
      [Lang.EN]: "Can",
      [Lang.FR]: "Boîte de conserve",
      [Lang.DE]: "Konservendose",
      [Lang.ES]: "Lata de conservas"
    },
    description: {
      [Lang.EN]: "There is a picture on the can of a very appetising plate of beans ! Now you just need to find something to open it with...",
      [Lang.FR]: "L'image imprimée sur la boite montre un plat de haricots très appétissants ! Mais il faudrait d'abord trouver un outil pour l'ouvrir…",
      [Lang.DE]: "Auf dem vergilbtem Etikettenbild erkennst du ein leckeres Bohnengericht! Allerdings brauchst du ein Werkzeug, um die Dose öffnen zu können...",
      [Lang.ES]: "¡La etiqueta tiene una imagen de frijoles muy apetitosos! Pero primero hay que encontrar con qué abrirla..."
    },
    categories: [ItemCategory.Food],
    icon: "item_can",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 2.15
    },
    openableBy: [
      ItemId.SAW_TOOL,
      ItemId.CAN_OPENER,
      ItemId.SCREW,
      ItemId.SWISS_KNIFE
    ],
  },
  [ItemId.CAN_OPEN]: {
    id: ItemId.CAN_OPEN,
    numericalId: 4,
    name: {
      [Lang.EN]: "Open Can",
      [Lang.FR]: "Boîte de conserve ouverte",
      [Lang.DE]: "Offene Konservendose",
      [Lang.ES]: "Lata de conservas abierta"
    },
    description: {
      [Lang.EN]: "You close your eyes, open your mouth wide and swallow the lot. You feel infinitely better now.",
      [Lang.FR]: "Allez, on ferme les yeux, on ouvre bien grand la bouche et on avale tout. On se sent toujours mieux après.",
      [Lang.DE]: "Jetzt mach mal kein Gezeter, schließ dein Augen, mach deinen Mund ganz weit auf und runter damit! Du wirst sehen, dass es dir danach besser geht.",
      [Lang.ES]: "Vamos, abre la boca y traga tapándote la nariz. Después te sentirás mejor."
    },
    categories: [ItemCategory.Food, ItemCategory.GuardWeapon, ItemCategory.APSource, ItemCategory.Poisonable],
    icon: "item_can_open",
    decoration: 0,
    heavy: false,
    watchPoints: 2,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
  },
  [ItemId.PILEGUN]: {
    id: ItemId.PILEGUN,
    numericalId: 5,
    name: {
      [Lang.EN]: "Battery Launcher 1-ITF (loaded)",
      [Lang.FR]: "Lance-Pile 1-PDTG (chargé)",
      [Lang.DE]: "Batteriewerfer 1-PDTG (geladen)",
      [Lang.ES]: "Lanzapilas 1-PDTG (cargado)"
    },
    description: {
      [Lang.EN]: "A little creative recycling of the resources at hand enables the Battery Launcher 1-ITF to use batteries as piercing projectiles.",
      [Lang.FR]: "Imaginé avec les moyens du bord, le Lance-Pile 1-PDTG permet, par un savant recyclage, de transformer des piles en projectiles perforants.",
      [Lang.DE]: "Der Batteriewerfer 1-PDTG (geladen) wurde äußerst einfallsreich zusammengeschraubt. Dank einer virtuosen Recyclingprozedur ist er in der Lage, harmlose Batterien in mächtige Geschosse zu verwandeln.",
      [Lang.ES]: "Totalmente hecho a mano, el Lanzapilas 1-PDTG convierte las pilas en proyectiles perforadores."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_pilegun",
    decoration: 0,
    heavy: false,
    watchPoints: 8,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "pilegun_empty_#00"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "pile_broken_#00",
            odds: 100
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1",
            odds: 90
          }
        ]
      }
    ],
  },
  [ItemId.TASER]: {
    id: ItemId.TASER,
    numericalId: 6,
    name: {
      [Lang.EN]: "Taser",
      [Lang.FR]: "Taser d'auto-défense",
      [Lang.DE]: "Taser",
      [Lang.ES]: "Táser de autodefensa"
    },
    description: {
      [Lang.EN]: "A handheld gadget which delivers a frightful electric shock into the victim's body. Not so effective when you consider that zombies don't feel pain... However, you can always hope to take out a limb or a vital organ.",
      [Lang.FR]: "Un gadget de poing qui lâche une décharge électrique effroyable dans le corps de la victime. Pas très efficace quand on sait que les zombies ne craignent pas la douleur. Mais vous pouvez toujours espérer faire éclater un membre ou un organe vital avec cette décharge ?",
      [Lang.DE]: "Der Taser ist eine kleine technische Spielerei, mit der man grässliche Elektrostöße in dem Körper seines Opfers jagen kann. Allerdings ist er nicht sehr effektiv, wenn man bedennkt dass den Zombies Schmerzen nichts ausmachen. Vielleicht gelingt es dir ja mit einem Stromstoß ein wichtiges Körperglied oder Organ zum Platzen zu bringen?",
      [Lang.ES]: "Un arma capaz de paralizar el cuerpo de la víctima con una terrible descarga eléctrica. No es muy eficaz sabiendo que los zombies no le temen al dolor. Pero siempre puedes intentar hacer colapsar un órgano vital con él."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_taser",
    decoration: 0,
    heavy: false,
    watchPoints: 5,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.Kill,
            value: "1",
            odds: 30
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "taser_empty_#00",
            odds: 70
          }
        ]
      }
    ],
  },
  [ItemId.WATERGUN_OPT_EMPTY]: {
    id: ItemId.WATERGUN_OPT_EMPTY,
    numericalId: 7,
    name: {
      [Lang.EN]: "Aqua-Splash (empty)",
      [Lang.FR]: "Aqua-Splash (vide)",
      [Lang.DE]: "Aqua-Splash (leer)",
      [Lang.ES]: "Rifle de agua (vacío)"
    },
    description: {
      [Lang.EN]: "A formidable weapon, when filled correctly with fresh water.",
      [Lang.FR]: "Une arme redoutable, pour peu qu'elle soit chargée correctement en eau pure.",
      [Lang.DE]: "Eine furchterregende Waffe, die nur noch etwas reines Wasser benötigt.",
      [Lang.ES]: "Un arma temible, pero le falta estar cargada con agua pura."
    },
    categories: [ItemCategory.Armoury],
    icon: "item_watergun_opt_empty",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.WATER }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "watergun_opt_5_#00"
          }
        ]
      }
    ],
  },
  [ItemId.MIXERGUN]: {
    id: ItemId.MIXERGUN,
    numericalId: 8,
    name: {
      [Lang.EN]: "Electric Whisk (loaded)",
      [Lang.FR]: "Batteur électrique (chargé)",
      [Lang.DE]: "Handmixer (geladen)",
      [Lang.ES]: "Batidora eléctrica (cargada)"
    },
    description: {
      [Lang.EN]: "It's a (really powerful) whisk and it's electric, what else is there to say? Well, the good part is that it only needs one battery, and only has limited chance of running down.",
      [Lang.FR]: "Il bat (très fort) et il est électrique, que dire de plus ? Le bon point, c'est qu'il ne nécessite qu'une pile et a une certaine chance de l'épuiser.",
      [Lang.DE]: "Rührt elektrisch und sehr schnell - was gibt's sonst noch zu sagen? Er hat den Vorteil, dass er nur eine Batterie braucht, die sich nicht mal mit Sicherheit entlädt.",
      [Lang.ES]: "Tan sencillo como eso. La buena noticia es que sólo necesitas una batería y tienes cierta posibilidad de agotarla."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_mixergun",
    decoration: 0,
    heavy: false,
    watchPoints: 18,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "mixergun_empty_#00",
            odds: 40
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
  },
  [ItemId.CHAINSAW]: {
    id: ItemId.CHAINSAW,
    numericalId: 9,
    name: {
      [Lang.EN]: "Chainsaw (loaded)",
      [Lang.FR]: "Tronçonneuse",
      [Lang.DE]: "Kettensäge (geladen)",
      [Lang.ES]: "Sierra eléctrica (cargada)"
    },
    description: {
      [Lang.EN]: "With this bad boy, you know there's going to be a wholesale zombie chop-fest. Know, however, that even though you may be victorious, you won't be entirely unscathed... This diabolical machine has been modified to work (somewhat incredibly) with a simple battery !",
      [Lang.FR]: "Avec ça, vous allez faire un vrai massacre. Mais sachez qu'on en ressort peut-être victorieux mais pas tout à fait indemne... Cette machine infernale a été modifiée et fonctionne (chose incroyable) avec une simple pile !",
      [Lang.DE]: "Damit richtest du ein wahres Massaker an. Ob du das aber zu 100% unversehrt überstehst ist eine andere Frage... Diese umgebaute Höllenmaschine funktioniert - man glaubt es kaum - mit einer gewöhnlichen Batterie!",
      [Lang.ES]: "Con eso puedes darte el gusto de masacrar a tus atacantes. Recuerda que puedes salir victorioso pero no siempre ileso... Esta máquina infernal ha sido modificada y funciona (increíblemente) ¡con una sola pila!"
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_chainsaw",
    decoration: 0,
    heavy: true,
    watchPoints: 30,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "chainsaw_empty_#00",
            odds: 30
          },
          {
            type: ItemActionEffectType.Kill,
            value: "3"
          }
        ]
      }
    ],
  },
  [ItemId.LAWN]: {
    id: ItemId.LAWN,
    numericalId: 10,
    name: {
      [Lang.EN]: "Lawnmower",
      [Lang.FR]: "Tondeuse à gazon",
      [Lang.DE]: "Rasenmäher",
      [Lang.ES]: "Cortacésped"
    },
    description: {
      [Lang.EN]: "You like it when it's nice and clean, when it smells of freshly cut grass ? In this instance, forget it - when you use it, it won't be like that at all.",
      [Lang.FR]: "Vous aimez quand c'est propre droit et que ça sent le frais ? En l'occurrence, oubliez tout ça ! Quand vous l'utiliserez ça ne sera pas le cas.",
      [Lang.DE]: "Du magst es wenn es sauber ist und frisch nach Gras duftet? Vergiss das mal lieber ganz schnell. Wenn du ihn verwendest, wird es ganz anders riechen...",
      [Lang.ES]: "¿Te gusta que quede parejo, limpio y que huela a jardín primaveral? Olvídalo, cuando lo utilices será todo lo contrario."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon, ItemCategory.Breakable],
    icon: "item_lawn",
    decoration: 0,
    heavy: true,
    watchPoints: 20,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 20
          },
          {
            type: ItemActionEffectType.Kill,
            value: "2"
          }
        ]
      }
    ],
  },
  [ItemId.WRENCH]: {
    id: ItemId.WRENCH,
    numericalId: 11,
    name: {
      [Lang.EN]: "Adjustable Spanner",
      [Lang.FR]: "Clé à Molette",
      [Lang.DE]: "Verstellbarer Schraubenschlüssel",
      [Lang.ES]: "Llave inglesa"
    },
    description: {
      [Lang.EN]: "With an adjustable spanner, you can choose between building something and breaking something. Something might not necessarily be an object...",
      [Lang.FR]: "Avec une clé à Molette, vous pouvez au choix bricoler un objet ou détruire quelque chose. Pas forcément un objet d'ailleurs…",
      [Lang.DE]: "Mit einem verstellbaren Schraubenschlüssel kannst du wahlweise an einem Gegenstand herumbasteln oder etwas zerstören (muss nicht unbedingt ein Gegenstand sein...)",
      [Lang.ES]: "Con ella puedes armar un objeto o destruir lo que quieras. No necesariamente tiene que ser un objeto..."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon, ItemCategory.Breakable],
    icon: "item_wrench",
    decoration: 0,
    heavy: false,
    watchPoints: 5,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 20
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1",
            odds: 33
          }
        ]
      }
    ],
    opens: [
      ItemId.CHEST_FOOD,
      ItemId.CHEST_TOOLS
    ],
  },
  [ItemId.SCREW]: {
    id: ItemId.SCREW,
    numericalId: 12,
    name: {
      [Lang.EN]: "Screwdriver",
      [Lang.FR]: "Tournevis",
      [Lang.DE]: "Schraubenzieher",
      [Lang.ES]: "Destornillador"
    },
    description: {
      [Lang.EN]: "Bizarrely enough, the screwdriver was invented to screw and unscrew screws. However, it also allows you to open cans and put certain objects back together. As a last resort, plant in someone's skull: it might just save your life...",
      [Lang.FR]: "Le tournevis visse et dévisse, il vous permet de réparer des choses et à la limite, d'ouvrir des boîtes de conserve. En dernier ressort, plantez-le dans une tête : ça pourrait bien vous sauver la vie…",
      [Lang.DE]: "Um Schrauben festzudrehen oder zu lösen. Du kannst mit ihm etwas reparieren und zur Not auch eine Konservendose aufmachen. Wenn du ihn mit voller Wucht in einen Kopf rammst, kann er dir in Extremsituationen auch mal das Leben retten...",
      [Lang.ES]: "Sirve para reparar cosas, ¡ah! y también puedes abrir latas con él. Como último recurso, clávaselo en la cabeza de alguien, bien podría salvarte la vida..."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon, ItemCategory.Breakable],
    icon: "item_screw",
    decoration: 0,
    heavy: false,
    watchPoints: 5,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 40
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1",
            odds: 20
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.26
    },
    opens: [
      ItemId.CHEST_FOOD,
      ItemId.CHEST_TOOLS,
      ItemId.CAN,
      ItemId.CHEST_XL,
      ItemId.CATBOX
    ],
  },
  [ItemId.STAFF]: {
    id: ItemId.STAFF,
    numericalId: 13,
    name: {
      [Lang.EN]: "Staff",
      [Lang.FR]: "Grand Bâton Sec",
      [Lang.DE]: "Großer trockener Stock",
      [Lang.ES]: "Gran estaca"
    },
    description: {
      [Lang.EN]: "A big pointy stick. Pointy enough to skewer something, but it's fragile... Just pray it holds up!",
      [Lang.FR]: "Le Grand Bâton Sec. Il est suffisamment pointu pour empaler quelque chose, mais pas vraiment très résistant… Priez simplement pour qu'il tienne le choc.",
      [Lang.DE]: "Ein ziemlich großer trockener Stock, mit dem man etwas aufspießen kann. Allerdings sieht er etwas zerbrechlich aus... bete, dass er den Stoß übersteht und nicht bricht.",
      [Lang.ES]: "Es suficientemente puntiagudo para atravesar lo que quieras, pero es frágil... Reza para que resista cuando la necesites."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_staff",
    decoration: 0,
    heavy: false,
    watchPoints: 5,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "staff2_#00",
            odds: 50
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1",
            odds: 40
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.86
    },
    opens: [
      ItemId.CHEST_FOOD,
      ItemId.CHEST_TOOLS
    ],
  },
  [ItemId.KNIFE]: {
    id: ItemId.KNIFE,
    numericalId: 14,
    name: {
      [Lang.EN]: "Serrated Knife",
      [Lang.FR]: "Couteau à dents",
      [Lang.DE]: "Jagdmesser",
      [Lang.ES]: "Cuchillo dentado"
    },
    description: {
      [Lang.EN]: "Skinner, Buck, Bowie... Whatever, they all cut.",
      [Lang.FR]: "Skinner, Buck, Bowie… Dans tous les cas ça coupe.",
      [Lang.DE]: "Skinner, Buck, Bowie ... , völlig egal, Hauptsache es schneidet.",
      [Lang.ES]: "Solo las mejores marcas: Skinner, Buck y Bowie... Lo importante es que cortan, y bien."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon, ItemCategory.Breakable],
    icon: "item_knife",
    decoration: 0,
    heavy: false,
    watchPoints: 10,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 33
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.17
    },
    opens: [
      ItemId.CHEST_FOOD,
      ItemId.CHEST_TOOLS
    ],
  },
  [ItemId.CUTCUT]: {
    id: ItemId.CUTCUT,
    numericalId: 15,
    name: {
      [Lang.EN]: "Machete",
      [Lang.FR]: "Coupe-Coupe",
      [Lang.DE]: "Machete",
      [Lang.ES]: "Machete"
    },
    description: {
      [Lang.EN]: "In the beginning these were used to cut a path. It's the same here, although the vegetation here is vindictive and ominously noisy...",
      [Lang.FR]: "Au départ on se frayait un chemin avec. Ici aussi c'est le cas, mais la végétation est très vindicative et sinistrement bruyante...",
      [Lang.DE]: "Wird für die Entfernung von Unkraut und Pflanzengeflecht benutzt. Das ist auch hier der Fall. Allerdings ist die \"Vegetation\" hier ziemlich rachsüchtig und laut...",
      [Lang.ES]: "Sirve para abrirse camino, solo que aquí los obstáculos pueden ser muy vengativos y siniestramente chillones..."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon, ItemCategory.Breakable],
    icon: "item_cutcut",
    decoration: 0,
    heavy: false,
    watchPoints: 15,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.Kill,
            value: "2"
          }
        ]
      }
    ],
    opens: [
      ItemId.CHEST_FOOD,
      ItemId.CHEST_TOOLS
    ],
  },
  [ItemId.SMALL_KNIFE]: {
    id: ItemId.SMALL_KNIFE,
    numericalId: 16,
    name: {
      [Lang.EN]: "Pathetic Penknife",
      [Lang.FR]: "Canif dérisoire",
      [Lang.DE]: "Lächerliches Taschenmesser",
      [Lang.ES]: "Navaja"
    },
    description: {
      [Lang.EN]: "Penknife [n.m.] : A small pocket knife with a blade that can be hidden for safety purposes. If you're the one carrying it, you should do likewise...",
      [Lang.FR]: "Canif [n.m.] : petit couteau de poche dont la lame se replie. Son porteur se replie aussi généralement s'il est intelligent.",
      [Lang.DE]: "Taschenmesser [Substantiv, n]: Ein Taschenmesser ist ein Messer, dessen Klinge zum gefahrlosen Transport in den Griff eingeklappt werden kann. Wenn du schlau bist, lässt du es bei diesem Messer besser nicht drauf ankommen...",
      [Lang.ES]: "Según la RAE: Cuchillo cuya hoja puede doblarse sobre el mango para que el filo quede... blablabla... Alguien con sentido común sabrá que es algo peligroso."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon, ItemCategory.Breakable],
    icon: "item_small_knife",
    decoration: 0,
    heavy: false,
    watchPoints: 5,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 45
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1",
            odds: 15
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.43
    },
    opens: [
      ItemId.CHEST_FOOD,
      ItemId.CHEST_TOOLS
    ],
  },
  [ItemId.SWISS_KNIFE]: {
    id: ItemId.SWISS_KNIFE,
    numericalId: 17,
    name: {
      [Lang.EN]: "Swiss Army Knife",
      [Lang.FR]: "Couteau suisse",
      [Lang.DE]: "Schweizer Taschenmesser",
      [Lang.ES]: "Navaja suiza"
    },
    description: {
      [Lang.EN]: "The Swiss Army Knife can pretty much be used to take care of any minor job, except perhaps decapitating a horde of zombies.",
      [Lang.FR]: "Le Couteau Suisse pourra sans soucis vous dépanner pour tous les petits travaux manuels, sauf peut-être découper une horde de mort-vivants.",
      [Lang.DE]: "Das Schweizer Taschenmesser ist für viele kleinere Arbeiten nützlich. Für eine Horde lebender Untoter reicht es allerdings nicht ganz aus.",
      [Lang.ES]: "Siempre útil para pequeños trabajos manuales, pero no ante una turba de muertos vivientes."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon, ItemCategory.Breakable],
    icon: "item_swiss_knife",
    decoration: 0,
    heavy: false,
    watchPoints: 5,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 50
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1",
            odds: 15
          }
        ]
      }
    ],
    opens: [
      ItemId.CHEST_FOOD,
      ItemId.CHEST_TOOLS,
      ItemId.CAN,
      ItemId.CHEST_XL,
      ItemId.CATBOX
    ],
  },
  [ItemId.CUTTER]: {
    id: ItemId.CUTTER,
    numericalId: 18,
    name: {
      [Lang.EN]: "Box Cutter",
      [Lang.FR]: "Cutter",
      [Lang.DE]: "Teppichmesser",
      [Lang.ES]: "Cutter"
    },
    description: {
      [Lang.EN]: "This small knife with a retractable blade is available in a very fetching candy-floss pink colour, which goes surpisingly well with the colour of the entrails of your living-dead friends. If it gets that far...",
      [Lang.FR]: "Ce petit couteau à lame rétractable disponible en coloris mauve ou fushia s'accordera très bien avec la couleur des viscères de vos ennemis. Pour peu qu'il traverse.",
      [Lang.DE]: "Dieses kleine kükengelbe Messer mit ausfahrbarer Klinge passt hervorragend zu der Eingeweidenfarbe deiner untoten Freunde. Vorausgesetzt du kommst so weit.",
      [Lang.ES]: "Con una fina lámina afilada retráctil, solo está disponible en \"amarillo patito\". Así los muertos vivientes no se podrán quejar del color cuando lo tengan clavado en el torso."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon, ItemCategory.Breakable],
    icon: "item_cutter",
    decoration: 0,
    heavy: false,
    watchPoints: 7,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 70
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1",
            odds: 60
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.43
    },
    opens: [
      ItemId.CHEST_FOOD,
      ItemId.CHEST_TOOLS
    ],
  },
  [ItemId.CART]: {
    id: ItemId.CART,
    numericalId: 19,
    name: {
      [Lang.EN]: "Shopping Trolley",
      [Lang.FR]: "Caddie",
      [Lang.DE]: "Einkaufswagen",
      [Lang.ES]: "Carrito"
    },
    description: {
      [Lang.EN]: "A shopping trolley from Bullworths' market. Nobody really knows what it could be used for apart from putting things in an ill-advised downhill race (to hospital). Useful, but it doesn't work well in the sand.",
      [Lang.FR]: "On l'appelle « Le Caddie ». Personne ne sait à quoi ça pouvait bien servir à part mettre des objets dedans, mais le nom inscrit dessus était rigolo. Bon, par contre, ça ne roule pas bien dans le sable.",
      [Lang.DE]: "Man nennt ihn auch \"Caddy\". Niemand weiß so recht, wozu er gut ist, außer um ein paar Gegenstände herumzufahren. Im Sand rollt er leider nicht ganz so gut.",
      [Lang.ES]: "Solo sirve para poner cosas dentro. Lo malo es que no rueda muy bien en la arena."
    },
    info: {
      [Lang.EN]: "+3 backpack spaces, 1 is used by the trolley allowing +2 items to be carried.",
      [Lang.FR]: "+3 espaces dans le sac à dos, 1 est utilisé par le caddie permettant de transporter +2 objets.",
      [Lang.DE]: "+3 Rucksackplätze, 1 wird von dem Wagen verwendet, was +2 Gegenstände ermöglicht.",
      [Lang.ES]: "+3 espacios en la mochila, 1 es utilizado por el carrito permitiendo llevar +2 objetos."
    },
    categories: [ItemCategory.Containers_and_boxes, ItemCategory.GuardWeapon],
    icon: "item_cart",
    decoration: 0,
    heavy: true,
    watchPoints: 15,
    actions: [
      
    ],
  },
  [ItemId.CAN_OPENER]: {
    id: ItemId.CAN_OPENER,
    numericalId: 20,
    name: {
      [Lang.EN]: "Can Opener",
      [Lang.FR]: "Ouvre-boîte",
      [Lang.DE]: "Dosenöffner",
      [Lang.ES]: "Abrelatas"
    },
    description: {
      [Lang.EN]: "Very appropriately named, it is ideal for opening cans. Unfortunately it is a bit too small to properly open up your hominoid chums in the desert.",
      [Lang.FR]: "Il porte bien son nom, idéal pour les boîtes de conserve. Malheureusement, il est un peu petit pour ouvrir correctement vos camarades bipèdes dans le désert.",
      [Lang.DE]: "Wie der Name schon sagt: Bestens dafür geeignet, um eine Konservendose aufzumachen. Leider ist er etwas zu klein, um auch deine zweibeinigen Kameraden in der Wüste korrekt zu \"öffnen\".",
      [Lang.ES]: "Su nombre lo dice todo. Desgraciadamente no servirá de mucho ante las amenazas que encontrarás en el desierto."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon, ItemCategory.Breakable],
    icon: "item_can_opener",
    decoration: 0,
    heavy: false,
    watchPoints: 5,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1",
            odds: 50
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.43
    },
    opens: [
      ItemId.CHEST_FOOD,
      ItemId.CHEST_TOOLS,
      ItemId.CAN,
      ItemId.CHEST_XL,
      ItemId.CATBOX
    ],
  },
  [ItemId.BAG]: {
    id: ItemId.BAG,
    numericalId: 21,
    name: {
      [Lang.EN]: "Manbag",
      [Lang.FR]: "Sac supplémentaire",
      [Lang.DE]: "Extra Tasche",
      [Lang.ES]: "Mochila adicional"
    },
    description: {
      [Lang.EN]: "It's not a handbag, purse or murse! An incredibly practical invention which allows you to carry more essentials: chemical, biological, nuclear... you get the picture. It's very manly.",
      [Lang.FR]: "Idéal pour vos randonnées entre amis, il vous permet de stocker plus de souvenirs : biologiques, nucléaires ou autres.",
      [Lang.DE]: "Diese Tasche eignet sich bestens für ausgedehnte Wanderungen unter Freunden, denn sie erlaubt dir, noch mehr Souvenirstücke jeglicher Art (biologische, nukleare, usw..) mitzunehmen.",
      [Lang.ES]: "Muy práctica para los paseos entre amigos, en ella puedes llevar más cosas útiles."
    },
    info: {
      [Lang.EN]: "+2 backpack spaces, 1 is used by the bag allowing +1 item to be carried.",
      [Lang.FR]: "+2 espaces dans le sac à dos, 1 est utilisé par le sac permettant de transporter +1 objet.",
      [Lang.DE]: "+2 Rucksackplätze, 1 wird von der Tasche verwendet, was +1 Gegenstände ermöglicht.",
      [Lang.ES]: "+2 espacios en la mochila, 1 es utilizado por la bolsa permitiendo llevar +1 objetos."
    },
    categories: [ItemCategory.Containers_and_boxes, ItemCategory.BagExtension],
    icon: "item_bag",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.69
    },
  },
  [ItemId.LIGHTS]: {
    id: ItemId.LIGHTS,
    numericalId: 22,
    name: {
      [Lang.EN]: "Box of Matches",
      [Lang.FR]: "Boîte d'allumettes",
      [Lang.DE]: "Streichholzschachtel",
      [Lang.ES]: "Caja de cerillas"
    },
    description: {
      [Lang.EN]: "As the saying goes: Fire is a good servant but a bad master. Easy Baby - You're almost a fire hazard!",
      [Lang.FR]: "Comme dit le dicton : on ne peut pas faire feu de tout bois. Faites le mentir...",
      [Lang.DE]: "Gib es ruhig zu: Die Zombies sind für dich schon immer Feuer und Flamme gewesen.",
      [Lang.ES]: "No es necesario explicarlo..."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_lights",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.34
    },
  },
  [ItemId.XANAX]: {
    id: ItemId.XANAX,
    numericalId: 23,
    name: {
      [Lang.EN]: "Valium Shot",
      [Lang.FR]: "Piqure de calmant",
      [Lang.DE]: "Beruhigungsspritze",
      [Lang.ES]: "Inyección calmante"
    },
    description: {
      [Lang.EN]: "Relax, no big deal... this won't be the last one you'll take.",
      [Lang.FR]: "Allez calmez-vous... Vous en verrez bien d'autres.",
      [Lang.DE]: "Entspann dich... das wird nicht die letzte sein, die du brauchst.",
      [Lang.ES]: "Respira profundo, después te sentirás mejor."
    },
    categories: [ItemCategory.Pharmacy, ItemCategory.Drug],
    icon: "item_xanax",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_drug_#00"
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "clean"
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "drugged"
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "terror"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.34
    },
  },
  [ItemId.CHAIR]: {
    id: ItemId.CHAIR,
    numericalId: 24,
    name: {
      [Lang.EN]: "Rocking Chair",
      [Lang.FR]: "Rocking Chair",
      [Lang.DE]: "Schaukelstuhl",
      [Lang.ES]: "Mecedora"
    },
    description: {
      [Lang.EN]: "ZZzzzz... Creak... ZZzzzz... Creeeeak...",
      [Lang.FR]: "ZZzzzz... Couinement... ZZzzzz... Couinement...",
      [Lang.DE]: "ZZzzzz... Knarr knarr... ZZzzzz... Knarr knarr...",
      [Lang.ES]: "ZZzzzz... Chillido... ZZzzzz... Chillido..."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration],
    icon: "item_chair",
    decoration: 5,
    heavy: true,
    watchPoints: 15,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.26
    },
  },
  [ItemId.RP_BOOK]: {
    id: ItemId.RP_BOOK,
    numericalId: 25,
    name: {
      [Lang.EN]: "Dusty Book",
      [Lang.FR]: "Livre poussiéreux",
      [Lang.DE]: "Staubiges Buch",
      [Lang.ES]: "Libro empolvado"
    },
    description: {
      [Lang.EN]: "Most of the pages in this old tome are torn or stuck together from the humidity. It must be possible to read some of them though...",
      [Lang.FR]: "Un vieux livre dont les pages sont pour la plupart déchirées ou collées entre elles par l'humidité. Il doit toutefois être possible d'en lire quelques unes...",
      [Lang.DE]: "Ein altes Buch, dessen Seiten größtenteils zerrissen oder verklebt sind. Ein paar sind jedoch lesbar...",
      [Lang.ES]: "Un viejo libro cuyas páginas están rotas o pegadas entre ellas por la humedad. a veces es posible leer algo interesante entre ellas..."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.RP],
    icon: "item_rp_book",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_rp_#00"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.BED]: {
    id: ItemId.BED,
    numericalId: 26,
    name: {
      [Lang.EN]: "Mattress",
      [Lang.FR]: "Matelas",
      [Lang.DE]: "Matratze",
      [Lang.ES]: "Colchón"
    },
    description: {
      [Lang.EN]: "ZZzzzz... Shhhhhh... ZZzzzz... Shhhhhh...",
      [Lang.FR]: "ZZzzzz... Grincement... ZZzzzz... Grincement...",
      [Lang.DE]: "ZZzzzz ... Quietsch ... ZZzzzz ... Quietsch",
      [Lang.ES]: "No te importa saber con qué fue rellenado, lo que importa es que es suave."
    },
    categories: [ItemCategory.Defences, ItemCategory.GuardWeapon, ItemCategory.Decoration, ItemCategory.CampingBoost],
    icon: "item_bed",
    decoration: 3,
    heavy: true,
    watchPoints: 20,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: -1
          },
          {
            type: ItemActionEffectType.CampingChances,
            value: "+9%"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.43
    },
  },
  [ItemId.LAMP]: {
    id: ItemId.LAMP,
    numericalId: 27,
    name: {
      [Lang.EN]: "Bedside Lamp",
      [Lang.FR]: "Lampe de chevet éteinte",
      [Lang.DE]: "Ausgeschaltete Nachttischlampe",
      [Lang.ES]: "Lámpara de mesa apagada"
    },
    description: {
      [Lang.EN]: "It's a nice bedside lamp, but it won't work without a new battery...",
      [Lang.FR]: "C'est une jolie lampe de chevet, mais elle ne fonctionnera pas sans une pile neuve...",
      [Lang.DE]: "Das ist eine hübsche Nachttischlampe. Allerdings brauchst du eine Batterie, um sie benutzen zu können...",
      [Lang.ES]: "Es muy bonita, pero no funcionará sin una pila..."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration],
    icon: "item_lamp",
    decoration: 1,
    heavy: false,
    watchPoints: 5,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.PILE }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "lamp_on_#00"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.26
    },
  },
  [ItemId.CARPET]: {
    id: ItemId.CARPET,
    numericalId: 28,
    name: {
      [Lang.EN]: "Persian Rug",
      [Lang.FR]: "Tapis persan",
      [Lang.DE]: "Perser",
      [Lang.ES]: "Alfombra persa"
    },
    description: {
      [Lang.EN]: "This lets you cover up all the nastiness which now adorns your floor...",
      [Lang.FR]: "Ça vous évitera de voir toutes ces choses horribles qui jonchent le sol de votre maison...",
      [Lang.DE]: "Leg ihn dir ins Wohnzimmer dann fallen dir all die grässlichen Dinge, die überall am Boden herum liegen nicht mehr so auf...",
      [Lang.ES]: "Servirá para esconder la suciedad que cubre el suelo de tu casa."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration],
    icon: "item_carpet",
    decoration: 10,
    heavy: true,
    watchPoints: 8,
    actions: [
      
    ],
  },
  [ItemId.MUSIC_PART]: {
    id: ItemId.MUSIC_PART,
    numericalId: 29,
    name: {
      [Lang.EN]: "Mini HI-Fi (Broken)",
      [Lang.FR]: "Petite chaîne Hi-Fi en panne",
      [Lang.DE]: "Mini Hi-Fi Anlage (defekt)",
      [Lang.ES]: "Equipo de sonido malogrado"
    },
    description: {
      [Lang.EN]: "A busted low-budget stereo system. Nonetheless, it's a shame when all it needs is a battery...",
      [Lang.FR]: "Un chaîne HiFi \"petit budget\", mais on ne va pas faire les difficiles... Dommage qu'il lui manque une pile pour fonctionner.",
      [Lang.DE]: "Eine kleine Hi-Fi Anlage vom Discounter nebenan. Schade, dass keine Batterien mehr drin sind, aber vielleicht kannst du ja welche auftreiben...",
      [Lang.ES]: "De los baratos... pero necesita una pila para funcionar."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_music_part",
    decoration: 1,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.17
    },
  },
  [ItemId.LOCK]: {
    id: ItemId.LOCK,
    numericalId: 30,
    name: {
      [Lang.EN]: "Padlock and Chain",
      [Lang.FR]: "Chaîne de Porte + cadenas",
      [Lang.DE]: "Kette + Vorhängeschloss",
      [Lang.ES]: "Cadena + candado"
    },
    description: {
      [Lang.EN]: "A solid padlock and chain should secure the door... Now you just need to worry about the walls...",
      [Lang.FR]: "Avec une bonne grosse chaîne et un cadenas on se sent rassuré pour la porte. Pas pour les murs...",
      [Lang.DE]: "Eine schwere Kette mit passendem Vorhängeschloss. Sie gibt dir ein beruhigendes Gefühl, wenn du mal nicht daheim bist. Für das Stadttor ist sie leider viel zu klein.",
      [Lang.ES]: "Con eso uno se siente más seguro en casa."
    },
    info: {
      [Lang.EN]: "Prevents other players from stealing from your house.",
      [Lang.FR]: "Empêche les autres joueurs de voler dans votre maison.",
      [Lang.DE]: "Verhindert, dass andere Spieler in Ihr Haus stehlen.",
      [Lang.ES]: "Evita que otros jugadores roben en tu casa."
    },
    categories: [ItemCategory.Furniture],
    icon: "item_lock",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.34
    },
  },
  [ItemId.DOOR_CARPET]: {
    id: ItemId.DOOR_CARPET,
    numericalId: 31,
    name: {
      [Lang.EN]: "Doormat",
      [Lang.FR]: "Paillasson",
      [Lang.DE]: "Fußabstreifer",
      [Lang.ES]: "Felpudo"
    },
    description: {
      [Lang.EN]: "It'll be nice to wipe your feet on something clean for a change.",
      [Lang.FR]: "Ça vous changera d'essuyer vos chaussures sur quelque chose de propre pour une fois.",
      [Lang.DE]: "Du trittst mal ausnahmsweise nicht auf Leichen rum. Ein gutes Gefühl.",
      [Lang.ES]: "Siempre es bueno limpiarse los zapatos antes de entrar, díselo a los zombies cuando vengan a visitarte."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_door_carpet",
    decoration: 5,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.DICE]: {
    id: ItemId.DICE,
    numericalId: 32,
    name: {
      [Lang.EN]: "Dice",
      [Lang.FR]: "Dés",
      [Lang.DE]: "Ein paar Würfel",
      [Lang.ES]: "Dados"
    },
    description: {
      [Lang.EN]: "Play dice with other losers like you.",
      [Lang.FR]: "Jouez aux dés avec d’autres perdants.",
      [Lang.DE]: "Spiele ne Runde mit den anderen Losern.",
      [Lang.ES]: "Juega con otros perdedores como tú."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.GuardWeapon],
    icon: "item_dice",
    decoration: 0,
    heavy: false,
    watchPoints: -10,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 1,
            odds: 17
          }
        ]
      }
    ],
  },
  [ItemId.ENGINE]: {
    id: ItemId.ENGINE,
    numericalId: 33,
    name: {
      [Lang.EN]: "Engine",
      [Lang.FR]: "Moteur",
      [Lang.DE]: "Motor",
      [Lang.ES]: "Motor"
    },
    description: {
      [Lang.EN]: "It's a small engine of some sort, covered in splashes of burnt oil and other unidentified substances. However, it's pretty heavy.",
      [Lang.FR]: "C'est un genre de petit moteur plein de traces d'huile brulée et matières calcinées indéfinissables. Par contre, il pèse son poids et il semble lui manquer pas mal de pièces…",
      [Lang.DE]: "Es handelt sich um einen kleinen Motor, der mit Ölspuren und undefinierbaren Brennresten verschmutzt ist und der schwer wie Blei ist.",
      [Lang.ES]: "Está lleno de aceite y suena a piezas sueltas cuando lo sacudes. Pesa."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.GuardWeapon],
    icon: "item_engine",
    decoration: 0,
    heavy: true,
    watchPoints: 30,
    actions: [
      
    ],
  },
  [ItemId.COURROIE]: {
    id: ItemId.COURROIE,
    numericalId: 34,
    name: {
      [Lang.EN]: "Belt",
      [Lang.FR]: "Courroie",
      [Lang.DE]: "Riemen",
      [Lang.ES]: "Correa"
    },
    description: {
      [Lang.EN]: "A belt... it's surely got to be good for something.",
      [Lang.FR]: "Une courroie… Ça doit sûrement servir à quelque chose.",
      [Lang.DE]: "Ein Riemen... Der ist bestimmt für irgendetwas nützlich.",
      [Lang.ES]: "Encuéntrale un uso."
    },
    categories: [ItemCategory.Resources],
    icon: "item_courroie",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.17
    },
  },
  [ItemId.MECA_PARTS]: {
    id: ItemId.MECA_PARTS,
    numericalId: 35,
    name: {
      [Lang.EN]: "Handful of nuts and bolts",
      [Lang.FR]: "Poignée de vis et écrous",
      [Lang.DE]: "Handvoll Schrauben und Muttern",
      [Lang.ES]: "Puñado de tornillos y tuercas"
    },
    description: {
      [Lang.EN]: "Some are rusty, some are covered in a greenish scum, but at least they're all still good for their intended purpose. More or less.",
      [Lang.FR]: "Certaines pièces sont rouillées, d'autres sont couvertes de mousse verdâtre, mais elles ont toutes au moins le mérite de continuer à remplir leur rôle. Plus ou moins.",
      [Lang.DE]: "Ein paar Teile sind verrostet, andere von einem moosartigen Flaum überzogen... aber sie funktionieren noch halbwegs.",
      [Lang.ES]: "Algunas están oxidadas, otras están desgastadas, pero al menos cumplen con su misión."
    },
    categories: [ItemCategory.Resources],
    icon: "item_meca_parts",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.86
    },
  },
  [ItemId.PET_CHICK]: {
    id: ItemId.PET_CHICK,
    numericalId: 36,
    name: {
      [Lang.EN]: "Chicken",
      [Lang.FR]: "Poule",
      [Lang.DE]: "Huhn",
      [Lang.ES]: "Gallina"
    },
    description: {
      [Lang.EN]: "OK, now we just need to find a butcher. Alternatively you could throw it at a zombie...",
      [Lang.FR]: "Bon, il n'y a plus qu'à trouver un boucher. Accessoirement, ça peut aussi se lancer sur un zombie...",
      [Lang.DE]: "Sehr schön! Jetzt musst du nur noch einen Metzger finden. Nebenbei bemerkt: Du kannst es auch auf einen Zombie werfen...",
      [Lang.ES]: "Bueno, solo queda encontrar a un carnicero. Si te sirve, también puedes lanzarlo contra un zombie..."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.GuardWeapon, ItemCategory.Animal],
    icon: "item_pet_chick",
    decoration: 0,
    heavy: false,
    watchPoints: 8,
    actions: [
      {
        type: ItemActionType.Butcher,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_animal_#00"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "undef_#00",
            count: 2,
            odds: 100
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_animal_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.43
    },
  },
  [ItemId.PET_PIG]: {
    id: ItemId.PET_PIG,
    numericalId: 37,
    name: {
      [Lang.EN]: "Stinking Pig",
      [Lang.FR]: "Cochon malodorant",
      [Lang.DE]: "Übelriechendes Schwein",
      [Lang.ES]: "Cerdo apestoso"
    },
    description: {
      [Lang.EN]: "Great! Where is the nearest butcher ? Or, how about rolling it at a zombie...",
      [Lang.FR]: "Bon, il n'y a plus qu'à trouver un boucher. Accessoirement, ça peut aussi se lancer sur un zombie...",
      [Lang.DE]: "Sehr schön! Jetzt musst du nur noch einen Metzger finden. Nebenbei bemerkt: Du kannst es auch auf einen Zombie werfen ...",
      [Lang.ES]: "Bueno, solo queda encontrar a un carnicero. Si te sirve, también puedes lanzarlo contra un zombie..."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.GuardWeapon, ItemCategory.Animal],
    icon: "item_pet_pig",
    decoration: 0,
    heavy: true,
    watchPoints: 25,
    actions: [
      {
        type: ItemActionType.Butcher,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_animal_#00"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "undef_#00",
            count: 4,
            odds: 100
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_animal_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.43
    },
  },
  [ItemId.PET_RAT]: {
    id: ItemId.PET_RAT,
    numericalId: 38,
    name: {
      [Lang.EN]: "Giant Rat",
      [Lang.FR]: "Rat géant",
      [Lang.DE]: "Riesige Ratte",
      [Lang.ES]: "Rata gigante"
    },
    description: {
      [Lang.EN]: "OK, now we just need to find a butcher. Alternatively, you could throw it at a zombie...",
      [Lang.FR]: "Bon, il n'y a plus qu'à trouver un boucher. Accessoirement, ça peut aussi se lancer sur un zombie...",
      [Lang.DE]: "Sehr schön! Jetzt musst du nur noch einen Metzger finden. Nebenbei bemerkt: Du kannst sie auch auf einen Zombie werfen...",
      [Lang.ES]: "Bueno, solo queda encontrar a un carnicero. Si te sirve, también puedes lanzarla contra un zombie..."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.GuardWeapon, ItemCategory.Animal],
    icon: "item_pet_rat",
    decoration: 0,
    heavy: false,
    watchPoints: 12,
    actions: [
      {
        type: ItemActionType.Butcher,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_animal_#00"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "undef_#00",
            count: 2,
            odds: 100
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_animal_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.6
    },
  },
  [ItemId.PET_DOG]: {
    id: ItemId.PET_DOG,
    numericalId: 39,
    name: {
      [Lang.EN]: "Guard Dog",
      [Lang.FR]: "Chien hargneux (alias Pepette)",
      [Lang.DE]: "Bissiger Hund",
      [Lang.ES]: "Perro guardián"
    },
    description: {
      [Lang.EN]: "Man's best friend. You can choose whether he guards your house, saves you from a marauding zombie or ends up as tasty burgers...",
      [Lang.FR]: "Le meilleur ami de l'homme. Au choix, il peut garder votre maison, finir chez le boucher ou vous sauver d'un zombie en lui sautant à la gorge...",
      [Lang.DE]: "Der beste Freund des Menschen. Du kannst ihn wahlweise dein Haus bewachen lassen, ihn auf Zombies hetzen oder dir ein paar leckere Steaks braten...",
      [Lang.ES]: "Mejor amigo del hombre. Puedes elegir si protege tu casa, te salva de un zombi merodeador o termina como sabrosas hamburguesas..."
    },
    categories: [ItemCategory.Defences, ItemCategory.GuardWeapon, ItemCategory.Animal],
    icon: "item_pet_dog",
    decoration: 0,
    heavy: false,
    watchPoints: 25,
    actions: [
      {
        type: ItemActionType.Butcher,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_animal_#00"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "meat_#00",
            count: 2,
            odds: 100
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_animal_#00",
            odds: 10
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "pet_dog_#00",
            odds: 90
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
  },
  [ItemId.PET_CAT]: {
    id: ItemId.PET_CAT,
    numericalId: 40,
    name: {
      [Lang.EN]: "Fat Cat",
      [Lang.FR]: "Gros chat mignon",
      [Lang.DE]: "Großer knuddeliger Kater",
      [Lang.ES]: "Gato bonito"
    },
    description: {
      [Lang.EN]: "He's really cute, makes your house more homely and can just about fight a zombie. And if you get really hungry...",
      [Lang.FR]: "C'est mignon, ça fait joli chez soi et ça sait à peu près se battre contre un zombie. Et puis, si vous avez faim...",
      [Lang.DE]: "Ist der knuddelig! Ein wahres Prachtstück für daheim, das dich im Notfall auch gegen Zombies verteidigt. Und wenn du mal Hunger hast ...",
      [Lang.ES]: "Acompaña muy bien en la casa y sabe más o menos pelear contra un zombie. Y si tienes hambre..."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration, ItemCategory.Animal],
    icon: "item_pet_cat",
    decoration: 5,
    heavy: false,
    watchPoints: 12,
    actions: [
      {
        type: ItemActionType.Butcher,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_animal_#00"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "meat_#00",
            count: 2,
            odds: 100
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_animal_#00",
            odds: 20
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "pet_cat_#00",
            odds: 80
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.34
    },
  },
  [ItemId.PET_SNAKE]: {
    id: ItemId.PET_SNAKE,
    numericalId: 41,
    name: {
      [Lang.EN]: "Huge Snake (Ophiophagus trouser)",
      [Lang.FR]: "Serpent de 2 mètres",
      [Lang.DE]: "Zwei-Meter Schlange",
      [Lang.ES]: "Serpiente de 2 metros"
    },
    description: {
      [Lang.EN]: "It's green, it hisses and it bites. Drag it to the butcher for some snake steaks. Or you could pitch it at some zombies...",
      [Lang.FR]: "C'est vert, ça mord et ça siffle. Il n'y a plus qu'à trouver un boucher pour se tailler un steak de reptile. Accessoirement, ça peut aussi se lancer sur un zombie...",
      [Lang.DE]: "Sie ist grün, beißt und zischt. Du brauchst nur einen Metzger, dann kannst du dir ein paar Reptiliensteaks machen. Auf einen Zombie kannst du sie auch werfen...",
      [Lang.ES]: "Es verde, muerde y hace zzzt-zzzt. Solo falta encontrar a un carnicero que nos la rebane para la merienda. También puedes lanzarla sobre un zombie..."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.GuardWeapon, ItemCategory.Animal],
    icon: "item_pet_snake",
    decoration: 0,
    heavy: true,
    watchPoints: 25,
    actions: [
      {
        type: ItemActionType.Butcher,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_animal_#00"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "meat_#00",
            count: 4,
            odds: 100
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_animal_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.69
    },
  },
  [ItemId.VIBR]: {
    id: ItemId.VIBR,
    numericalId: 42,
    name: {
      [Lang.EN]: "Pocket Vibrator (charged)",
      [Lang.FR]: "Petit manche vibrant (chargé)",
      [Lang.DE]: "Vibrator (geladen)",
      [Lang.ES]: "Pequeño vibrador (cargado)"
    },
    description: {
      [Lang.EN]: "It vibrates, tickles and titillates you and even makes you forget all your worries for a short while. (Requires 1 battery).",
      [Lang.FR]: "Il vibre, vous titille et vous chatouille et vous fait oublier tous vos soucis pendant quelques instants (nécessite 1 pile par utilisation).",
      [Lang.DE]: "Er vibriert und kitzelt dich am ganzen Körper und lässt dich für einen Augenblick all deine Sorgen vergessen (benötigt 1 Batterie).",
      [Lang.ES]: "Vibra, hace cosquillas y te hace olvidar tus problemas por unos instantes (necesita 1 pila)."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.GuardWeapon],
    icon: "item_vibr",
    decoration: 0,
    heavy: false,
    watchPoints: -10,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_maso_#00"
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "terror"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "vibr_empty_#00"
          }
        ]
      }
    ],
  },
  [ItemId.DRUG]: {
    id: ItemId.DRUG,
    numericalId: 43,
    name: {
      [Lang.EN]: "Anabolic Steroids",
      [Lang.FR]: "Stéroïdes Anabolisants",
      [Lang.DE]: "Anaboles Steroid",
      [Lang.ES]: "Esteroides anabólicos"
    },
    description: {
      [Lang.EN]: "This drug is great, if you want to see the world through rose-tinted Ray Bans and don't mind occasional convulsions and drooling... Don't get addicted though...",
      [Lang.FR]: "Cette drogue est idéale pour vous faire voir la vie en rose : plus de Fatigue au prix de seulement quelques convulsions et d'un peu de bave aux lèvres... Gare à l'accoutumance !",
      [Lang.DE]: "Mit dieser Droge siehst Du alles rosa: Du spürst keine Müdigkeit mehr und strotzt nur so vor Kraft! Das bisschen Herzrasen und der verstärkt auftretende Speichelfluss - geschenkt! Vorschicht: Bei übermäßiger Einnahme droht eine Abhängigkeit! Diese wundersamen Pillen füllen eure Aktivitätspunkte von 0 auf 6 wieder auf! Ein Teufelszeug! Leider kann man von den Pillen abhängig werden...",
      [Lang.ES]: "Ideal para hacerte ver la vida color de rosa: Ya no hay cansancio, pero te puede provocar algunas convulsiones con un poco de espuma en la boca... ¡Cuidado con la adicción!"
    },
    categories: [ItemCategory.Pharmacy, ItemCategory.APSource, ItemCategory.Drug, ItemCategory.Poisonable],
    icon: "item_drug",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_drug_#00"
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "clean"
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "drugged"
          },
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.86
    },
  },
  [ItemId.MEAT]: {
    id: ItemId.MEAT,
    numericalId: 44,
    name: {
      [Lang.EN]: "Tasty-looking Steak",
      [Lang.FR]: "Steak appétissant",
      [Lang.DE]: "Leckeres Steak",
      [Lang.ES]: "Bistec jugoso"
    },
    description: {
      [Lang.EN]: "It's a bit rubbery, and smells a bit fishy... You ask yourself what kind of meat it could be, but decide that it's got to be full of vitamins (and nothing else, you hope).",
      [Lang.FR]: "C'est un peu élastique et ça sent même le poisson… On se demande bien ce que ça peut être, mais c'est surement plein de vitamines (et pas d'autres choses, espérez-vous).",
      [Lang.DE]: "Es ist labbrig wie weiches Gummi und es riecht nach Fisch ... Was das wohl für ein Fleisch ist? Jedenfalls hat es bestimmt viele Vitamine und Proteine (und sonst hoffentlich nichts).",
      [Lang.ES]: "Tiene muchas proteínas, pero parece ser más duro que una suela de zapato, más vale que tengas buena dentadura."
    },
    categories: [ItemCategory.Food, ItemCategory.GuardWeapon, ItemCategory.APSource],
    icon: "item_meat",
    decoration: 0,
    heavy: false,
    watchPoints: 4,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 7
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.43
    },
  },
  [ItemId.UNDEF]: {
    id: ItemId.UNDEF,
    numericalId: 45,
    name: {
      [Lang.EN]: "Unspecified Meat",
      [Lang.FR]: "Viande indéfinissable",
      [Lang.DE]: "Undefinierbares Fleisch",
      [Lang.ES]: "Carne irreconocible"
    },
    description: {
      [Lang.EN]: "You are fairly sure that this wet, sticky thing can be eaten. Either way, it doesn't smell too bad and it's not moving.",
      [Lang.FR]: "Vous êtes quasiment certain que cette chose molle et visqueuse peut se manger. En tous cas, ça ne sent pas mauvais et ça ne bouge pas.",
      [Lang.DE]: "Du bist dir so gut wie sicher, dass man dieses weiche und glibbrige Etwas essen kann. Zumindest riecht es nicht sooo schlecht und es bewegt sich auch nicht.",
      [Lang.ES]: "Estás casi seguro de que esa cosa amarillenta pegada a un hueso se puede comer. En todo caso no huele mal."
    },
    categories: [ItemCategory.Food, ItemCategory.GuardWeapon, ItemCategory.APSource],
    icon: "item_undef",
    decoration: 0,
    heavy: false,
    watchPoints: 2,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
  },
  [ItemId.SHEET]: {
    id: ItemId.SHEET,
    numericalId: 46,
    name: {
      [Lang.EN]: "Groundsheet",
      [Lang.FR]: "Toile de tente",
      [Lang.DE]: "Zeltplane",
      [Lang.ES]: "Tela de carpa"
    },
    description: {
      [Lang.EN]: "A large, thick camping groundsheet, but it's not exactly waterproof any more. Ideal if you want to spend the night under the stars (if you forget about the vermin, the zombies, diseases, storms and the cold). It significantly increases your chances of survival when camping. You must have the sheet on your person while camping to obtain this bonus.",
      [Lang.FR]: "Une grande toile de tente solide mais plus très étanche. Idéal pour passer une bonne nuit dehors, à la belle étoile (si on fait abstraction de la vermine, des zombies, des maladies, des tempêtes et du froid). Elle augmente sensiblement vos chances de survie en cas de camping : vous devez la garder sur vous pour profiter de ce bonus.",
      [Lang.DE]: "Eine große, solide Zeltplane, die auch noch wasserdicht ist. Sie eignet sich bestens dazu die Löcher in deinem Hausdach zu schließen. ANMERKUNG: Dieser Gegenstand ist für die Verbesserung deines Hauses zwingend vorgeschrieben.",
      [Lang.ES]: "Una tela muy resistente e impermeable. Ideal para pasar la noche afuera (sin olvidar los bichos, zombies, enfermedades, tormentas y el frío). Aumenta tus posibilidades de sobrevivir al acampar, debes llevarla contigo para recibir el bonus."
    },
    info: {
      [Lang.EN]: "Increases the chances of survival while camping by 5%. Stackable.",
      [Lang.FR]: "Augmente les chances de survie lors du camping de 5%. Cumulable.",
      [Lang.DE]: "Erhöht die Überlebenschancen beim Campen um 5 %. Stapelbar.",
      [Lang.ES]: "Aumenta las posibilidades de supervivencia mientras acampa en un 5%. Apilable."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.GuardWeapon, ItemCategory.CampingBoost],
    icon: "item_sheet",
    decoration: 0,
    heavy: false,
    watchPoints: 10,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.BAGXL]: {
    id: ItemId.BAGXL,
    numericalId: 47,
    name: {
      [Lang.EN]: "Ultra-Rucksack",
      [Lang.FR]: "Sac super-pratique",
      [Lang.DE]: "Superpraktischer Rucksack",
      [Lang.ES]: "Mochila super-práctica"
    },
    description: {
      [Lang.EN]: "The ideal travel companion! Waterproof, reinforced shoulders, side pockets, gives you a massage while you walk, and has a nice chrome \"Desert Junkie\" logo.",
      [Lang.FR]: "Le compagnon de voyage idéal ! Poches latérales, étanche, renforcé aux épaules, auto-massant pendant la marche et avec un joli logo \"Desert Addict\" chromé.",
      [Lang.DE]: "Dein idealer Begleiter für unterwegs! Massage im Schulter- und Lendenbereich, zweistufig regulierbar und mit großen Seitentaschen. Ein hübsches Logo aus Chrom mit der Auffschrift \"Desert Addict\" verziert ihn zusätzlich.",
      [Lang.ES]: "¡El accesorio de viaje ideal! Bolsillos laterales, impermeable, ergonómica, masajea la espalda mientras caminas y lleva un bonito logo \"Man vs Wild\""
    },
    info: {
      [Lang.EN]: "+3 backpack spaces, 1 is used by the bag allowing +2 items to be carried.",
      [Lang.FR]: "+3 espaces dans le sac à dos, 1 est utilisé par le sac permettant de transporter +2 objet.",
      [Lang.DE]: "+3 Rucksackplätze, 1 wird von der Tasche verwendet, was +2 Gegenstände ermöglicht.",
      [Lang.ES]: "+3 espacios en la mochila, 1 es utilizado por la bolsa permitiendo llevar +2 objetos."
    },
    categories: [ItemCategory.Containers_and_boxes, ItemCategory.BagExtension],
    icon: "item_bagxl",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.JERRYCAN]: {
    id: ItemId.JERRYCAN,
    numericalId: 48,
    name: {
      [Lang.EN]: "Full Jerrycan",
      [Lang.FR]: "Jerrycan",
      [Lang.DE]: "Kanister",
      [Lang.ES]: "Cantimplora llena"
    },
    description: {
      [Lang.EN]: "The Jerrycan holds multiple rations of unpurified water. To make the water drinkable, the town must have a building which can carry out water filtration.",
      [Lang.FR]: "Le Jerrycan contient plusieurs rations d'eau non-potable (non-purifiée). Toutefois, il faut que la ville dispose du bâtiment de filtrage adapté pour en faire de l'eau potable.",
      [Lang.DE]: "Der \"Jerrycan\" kann mehrere Rationen nicht-trinkbares Wasser aufnehmen. Sobald die Stadt über eine passende Filteranlage verfügt, kann dieses Wasser trinkbar gemacht werden.",
      [Lang.ES]: "Contiene varias raciones de agua no potable (sin purificar). Para eso es necesario que el pueblo tenga un edificio de filtrado de agua."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_jerrycan",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.WATER_CLEANER },
          ItemActionConditionEnum.Inside
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "water_#00",
            count: 2,
            odds: 75
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "water_#00",
            count: 3,
            odds: 25
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          { building: BuildingId.ITEM_JERRYCAN }
        ],
        effects: [
          {
            type: ItemActionEffectType.AddWaterToWell,
            value: 2,
            odds: 40
          },
          {
            type: ItemActionEffectType.AddWaterToWell,
            value: 3,
            odds: 35
          },
          {
            type: ItemActionEffectType.AddWaterToWell,
            value: 4,
            odds: 25
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          { building: BuildingId.ITEM_JERRYCAN_01 }
        ],
        effects: [
          {
            type: ItemActionEffectType.AddWaterToWell,
            value: 3,
            odds: 5
          },
          {
            type: ItemActionEffectType.AddWaterToWell,
            value: 4,
            odds: 15
          },
          {
            type: ItemActionEffectType.AddWaterToWell,
            value: 5,
            odds: 20
          },
          {
            type: ItemActionEffectType.AddWaterToWell,
            value: 6,
            odds: 20
          },
          {
            type: ItemActionEffectType.AddWaterToWell,
            value: 7,
            odds: 20
          },
          {
            type: ItemActionEffectType.AddWaterToWell,
            value: 8,
            odds: 15
          },
          {
            type: ItemActionEffectType.AddWaterToWell,
            value: 9,
            odds: 5
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.WATER_CLEANER }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "water_#00",
            odds: 100
          },
          {
            type: ItemActionEffectType.AP,
            value: -1
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 1.29
    },
  },
  [ItemId.WOOD2]: {
    id: ItemId.WOOD2,
    numericalId: 49,
    name: {
      [Lang.EN]: "Twisted Plank",
      [Lang.FR]: "Planche tordue",
      [Lang.DE]: "Krummes Holzbrett",
      [Lang.ES]: "Tabla torcida"
    },
    description: {
      [Lang.EN]: "It's a plank of wood which is soaking wet but still more or less solid... Note: The wood is used for the construction of buildings in the town (deposit it in the Bank).",
      [Lang.FR]: "Une planche de bois complètement moisie mais encore à peu près solide… Note : le bois est utilisé pour la construction de bâtiments en ville (ramenez-le dans la Section Banque).",
      [Lang.DE]: "Ein total verschimmeltes Holzbrett, das noch einigermaßen stabil ist...",
      [Lang.ES]: "Un poco enmohecida pero sólida... Nota: La madera se emplea en la construcción (llévala al Almacén)."
    },
    categories: [ItemCategory.Resources],
    icon: "item_wood2",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 14.59,
      [DropLocation.Trash]: 0.23
    },
  },
  [ItemId.METAL]: {
    id: ItemId.METAL,
    numericalId: 50,
    name: {
      [Lang.EN]: "Wrought Iron",
      [Lang.FR]: "Ferraille",
      [Lang.DE]: "Alteisen",
      [Lang.ES]: "Chatarra"
    },
    description: {
      [Lang.EN]: "Wrought Iron... It's bloody heavy, but it's always useful ! Note: Wrought Iron is used for the construction of buildings in the town (deposit it in the Bank).",
      [Lang.FR]: "Du métal… Un peu lourd, mais ça sert toujours ! Note : le métal est utilisé pour la construction de bâtiments en ville (ramenez-le à la Section Banque).",
      [Lang.DE]: "Stinknormales Metall, das zwar schwer ist, aber immer verwendet werden kann!",
      [Lang.ES]: "Un montón de metales pesados, ¡pero útiles! Nota: El metal se emplea en la construcción (llévalo al Almacén)."
    },
    categories: [ItemCategory.Resources],
    icon: "item_metal",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 9.01,
      [DropLocation.Trash]: 0.08
    },
  },
  [ItemId.GRENADE]: {
    id: ItemId.GRENADE,
    numericalId: 51,
    name: {
      [Lang.EN]: "Water Bomb",
      [Lang.FR]: "Bombe à eau",
      [Lang.DE]: "Wasserbombe",
      [Lang.ES]: "Globo de agua"
    },
    description: {
      [Lang.EN]: "Throw it at a zombie and hope it bursts. Then wait for it to burst again.",
      [Lang.FR]: "Jetez-la sur un zombie et priez pour que ça éclate. Puis attendez que ça éclate à nouveau.",
      [Lang.DE]: "Gebrauchsanweisung: Auf einen Zombie werfen und beten, dass sie platzt. Anschließend warten bis es \"Splatsch!!\" macht.",
      [Lang.ES]: "Lánzala sobre un zombie y reza para que explote... espera a que vuelva a explotar."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_grenade",
    decoration: 0,
    heavy: false,
    watchPoints: 8,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.Kill,
            value: "2-4"
          }
        ]
      }
    ],
  },
  [ItemId.PLATE]: {
    id: ItemId.PLATE,
    numericalId: 52,
    name: {
      [Lang.EN]: "Sheet Metal",
      [Lang.FR]: "Plaque de tôle",
      [Lang.DE]: "Blechplatte",
      [Lang.ES]: "Lámina de metal"
    },
    description: {
      [Lang.EN]: "There's nothing like a bit of rusty sheet metal to stop zombies from getting to you... Note: Defensive items give better bonuses if they are installed in town as opposed to in your home.",
      [Lang.FR]: "Rien ne vaut une plaque de tôle rouillée pour empêcher les zombies de vous atteindre… Note : les défenses comptent double si elles sont installées en ville plutôt que chez soi.",
      [Lang.DE]: "Fast nichts ist besser als eine rostige Blechplatte, um die Zombies am Eindringen zu hindern... Anmerkung: Verteidigungsgegenstände zählen mehr Punkte, wenn sie in der Bank aufbewahrt werden anstatt daheim.",
      [Lang.ES]: "Muy buena para protegerte de los zombies... Nota: Las defensas valen más puntos si son instaladas en el pueblo en vez de en tu casa."
    },
    categories: [ItemCategory.Defences, ItemCategory.CampingBoost],
    icon: "item_plate",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: -1
          },
          {
            type: ItemActionEffectType.CampingChances,
            value: "+9%"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.26
    },
  },
  [ItemId.JERRYGUN_PART]: {
    id: ItemId.JERRYGUN_PART,
    numericalId: 53,
    name: {
      [Lang.EN]: "Jerrycan Gun (unattached)",
      [Lang.FR]: "Pompe à Jerrycan (démontée)",
      [Lang.DE]: "Kanisterpumpe (zerlegt)",
      [Lang.ES]: "Bomba para cantimplora incompleta"
    },
    description: {
      [Lang.EN]: "Once upon a time, this gadget was the laughing stock of the DIY department. The epitome of uselessness. These days, (with the nozzle fitted to a Jerrycan) it becomes a formidable weapon which converts unpurified water into a jet of pure water vapour !",
      [Lang.FR]: "Avant, ce gadget faisait rire tout le monde au rayon bricolage. Summum de l'inutilité. Aujourd'hui, c'est une arme redoutable qui utilise de l'eau non-purifiée (l'embout s'adapte sur un jerrycan) pour la projeter sous forme de vapeur d'eau pure !",
      [Lang.DE]: "Früher konntest du einem solchen Gegenstand gerade mal ein fades Lächeln abgewinnen. er war so sinnlos wie ein Kropf. Inzwischen hat sich diese Pumpe in eine gefürchtete Waffe verwandelt, um nicht gereinigtes Wasser auf Zombies zu versprühen (das Ansatzstück passt auf einen Kanister).",
      [Lang.ES]: "Nadie le daba importancia a esta cosa en las tiendas de bricolaje, considerada inútil. Hoy, es un arma muy eficaz. ¡Se enrosca a una cantimplora con agua no purificada y pulveriza agua pura!"
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_jerrygun_part",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.BANDAGE]: {
    id: ItemId.BANDAGE,
    numericalId: 54,
    name: {
      [Lang.EN]: "Bandage",
      [Lang.FR]: "Bandage rudimentaire",
      [Lang.DE]: "Bandage",
      [Lang.ES]: "Vendaje rudimentario"
    },
    description: {
      [Lang.EN]: "It smells awful, and it has traces of mould on it, but you're in no position to be fussy. This bandage can be used to dress a wound.",
      [Lang.FR]: "Ça sent mauvais, il y a des traces de moisissure, mais franchement, vous n'êtes pas en position de faire votre difficile. Ce bandage permet de panser une blessure.",
      [Lang.DE]: "Sie riecht schlecht und weist ein paar Schimmelspuren auf, aber jetzt mal ganz ehrlich: In dieser Lage kannst du nicht rumnörgeln. Mit der Bandage kannst du eine Wunde verbinden.",
      [Lang.ES]: "Huele mal y tiene manchas de moho, pero no estamos aquí para hacernos los difíciles. Te ayudará a cubrir tus heridas."
    },
    categories: [ItemCategory.Pharmacy],
    icon: "item_bandage",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "tg_meta_wound"
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "healed"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.26
    },
  },
  [ItemId.VODKA_DE]: {
    id: ItemId.VODKA_DE,
    numericalId: 55,
    name: {
      [Lang.EN]: "Green Beer Bottle",
      [Lang.FR]: "Bière",
      [Lang.DE]: "Grüne Bierflasche",
      [Lang.ES]: "Vodka Rosquetoff"
    },
    description: {
      [Lang.EN]: "After spending forever under the sun, this bottle is completely discolored. You have the intuition that it must have been green in the past. Ah, here's the label!... okay, just a pale lager. \"Keep away from light and all sources of heat\", well, let's try... (You take a huge sip and release a giant burp shortly after!) - \"Cheers, Pap Finn!\"",
      [Lang.FR]: "Après avoir passé une éternité au soleil, cette bouteille s'est complètement décolorée. Vous avez l'intuition qu'elle devait être verte par le passé. Ah, voilà l'étiquette! ...d'accord, une simple blonde. \"À conserver à l'écart de la lumière et de toute source de chaleur\", eh bien, tentons... (Vous avalez une énorme gorgée et relâchez un rot géant peu de temps après!) - \"À la tienne, Étienne!\"",
      [Lang.DE]: "Das Glas dieser gut erhaltenen Bierflasche ist ziemlich verfärbt. Du vermutest, dass es früher mal grün war. Ah, da, das Etikett! Roter Rand...\"Welcome to the Feck's experience\"... okay, ein Pils. Na dann lass uns doch mal das \"Experiment\" wagen... .(Mit einem kräftigen Schluck kippst du dir den Saft hinter die Binde und lässt kurz darauf einen Riesenrülpser los!) - \"Prost Kameraden!\"",
      [Lang.ES]: "Un buen trago que quema la garganta y te quita el cansancio, ¡recuperando además puntos de Acción!... 85° de alcohol puro, con algunos bichos flotando en el fondo. ¡Salud camarada!"
    },
    categories: [ItemCategory.Food, ItemCategory.APSource, ItemCategory.Alcohol],
    icon: "item_vodka_de",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_alcool_#00"
          },
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "drunk"
          }
        ]
      }
    ],
  },
  [ItemId.JERRYGUN_OFF]: {
    id: ItemId.JERRYGUN_OFF,
    numericalId: 56,
    name: {
      [Lang.EN]: "Jerrycan Gun (empty)",
      [Lang.FR]: "Pompe à Jerrycan (vide)",
      [Lang.DE]: "Kanisterpumpe (leer)",
      [Lang.ES]: "Bomba para cantimplora (vacía)"
    },
    description: {
      [Lang.EN]: "Once upon a time, this gadget was the laughing stock of the DIY department. The epitome of uselessness. These days, (with the nozzle fitted to a Jerrycan) it becomes a formidable weapon which converts unpurified water into a jet of pure water vapour !",
      [Lang.FR]: "Avant, ce gadget faisait rire tout le monde au rayon bricolage. Summum de l'inutilité. Aujourd'hui, c'est une arme redoutable qui utilise de l'eau non-purifiée (l'embout s'adapte sur un jerrycan) pour la projeter sous forme de vapeur d'eau pure !",
      [Lang.DE]: "Früher konntest du einem solchen Gegenstand gerade mal ein fades Lächeln abgewinnen. er war so sinnlos wie ein Kropf. Inzwischen hat sich diese Pumpe in eine gefürchtete Waffe verwandelt, um nicht gereinigtes Wasser auf Zombies zu versprühen (das Ansatzstück passt auf einen Kanister).",
      [Lang.ES]: "Nadie le daba importancia a esta cosa en las tiendas de bricolaje, considerada inútil. Hoy, es un arma muy eficaz. ¡Se enrosca a una cantimplora con agua no purificada y pulveriza agua pura!"
    },
    categories: [ItemCategory.Armoury],
    icon: "item_jerrygun_off",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.JERRYCAN }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "jerrygun_#00"
          }
        ]
      }
    ],
  },
  [ItemId.CINEMA]: {
    id: ItemId.CINEMA,
    numericalId: 57,
    name: {
      [Lang.EN]: "Retro Overhead Projector",
      [Lang.FR]: "Rétroprojecteur rétro",
      [Lang.DE]: "Retro-Projektor",
      [Lang.ES]: "Retroproyector antiguo"
    },
    description: {
      [Lang.EN]: "This faulty projector can no longer be used for anything. However, the lens still seems relatively intact... unfortunately you have nothing to take it apart with...",
      [Lang.FR]: "Ce rétroprojecteur défectueux ne peut plus être utilisé pour rien. Cependant, l'objectif semble encore relativement intact... Malheureusement vous n'avez rien pour le démonter...",
      [Lang.DE]: "Dieser defekte Videoprojektor ist zu nichts mehr zu gebrauchen. Die Linse sieht allerdings noch halbwegs intakt aus....nur hast du nichts, um sie zu entfernen...",
      [Lang.ES]: "Este proyector defectuoso ya no se puede utilizar para nada. Sin embargo, la lente todavía parece relativamente intacta... Desafortunadamente no tienes nada para desarmarla..."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_cinema",
    decoration: 0,
    heavy: true,
    watchPoints: 10,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "lens_#00",
            odds: 100
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.EXPLO]: {
    id: ItemId.EXPLO,
    numericalId: 58,
    name: {
      [Lang.EN]: "Semtex",
      [Lang.FR]: "Explosifs bruts",
      [Lang.DE]: "Sprengstoff",
      [Lang.ES]: "Explosivos"
    },
    description: {
      [Lang.EN]: "Boom !",
      [Lang.FR]: "Boum !",
      [Lang.DE]: "Booom!",
      [Lang.ES]: "¡Bum!"
    },
    categories: [ItemCategory.Resources],
    icon: "item_explo",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.77
    },
  },
  [ItemId.HMEAT]: {
    id: ItemId.HMEAT,
    numericalId: 59,
    name: {
      [Lang.EN]: "Human Flesh",
      [Lang.FR]: "Viande humaine",
      [Lang.DE]: "Menschenfleisch",
      [Lang.ES]: "Carne humana"
    },
    description: {
      [Lang.EN]: "Erm... It's probably best to forget you ate this and move on...",
      [Lang.FR]: "Allez on oublie ce qu'on vient de manger et on passe à autre chose.",
      [Lang.DE]: "Denk am besten gar nicht daran, was du soeben geschluckt hast und mach einfach weiter...",
      [Lang.ES]: "Trata de tragarla rápidamente sin pensar en lo que es... ¡Si te gusta, tienes un problema!"
    },
    categories: [ItemCategory.Food, ItemCategory.GuardWeapon, ItemCategory.APSource],
    icon: "item_hmeat",
    decoration: 0,
    heavy: false,
    watchPoints: 15,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_cannib_#00"
          },
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.Ghoulify,
            odds: 5
          }
        ]
      },
      {
        type: ItemActionType.Eat,
        conditions: [
          ItemActionConditionEnum.Ghoul
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_cannib_#00"
          },
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.ReduceGhoulHunger,
            value: -15
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.17
    },
  },
  [ItemId.GRENADE_EMPTY]: {
    id: ItemId.GRENADE_EMPTY,
    numericalId: 60,
    name: {
      [Lang.EN]: "Plastic Bag",
      [Lang.FR]: "Sac plastique",
      [Lang.DE]: "Plastiktüte",
      [Lang.ES]: "Bolsa de plástico"
    },
    description: {
      [Lang.EN]: "An old plastic bag from the supermarket which can be transformed into a formidable weapon if you fill it with water...",
      [Lang.FR]: "Un vieux sac plastique de supermarché qui peut se transformer en arme redoutable si vous le remplissez d'eau...",
      [Lang.DE]: "Eine alte Plastiktüte aus dem Supermarkt. Wenn du sie mit Wasser füllst, verwandelt sie sich in eine gefürchtete Waffe...",
      [Lang.ES]: "Una vieja bolsa de supermercado que puedes convertir en un arma fatal si la llenas de agua..."
    },
    categories: [ItemCategory.Armoury],
    icon: "item_grenade_empty",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.WATER }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "grenade_#00"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 6.01
    },
  },
  [ItemId.BGRENADE]: {
    id: ItemId.BGRENADE,
    numericalId: 61,
    name: {
      [Lang.EN]: "Exploding Water Bomb",
      [Lang.FR]: "Bombe à eau explosive",
      [Lang.DE]: "Explodierende Wasserbombe",
      [Lang.ES]: "Bolsa de agua explosiva"
    },
    description: {
      [Lang.EN]: "A plastic bag, some explosives, and some water. It's home-made, but it's an enormously powerful weapon of mass destruction to throw into a zombie horde... Guaranteed carnage.",
      [Lang.FR]: "Un sac plastique, de l'explosif et de l'eau. C'est artisanal, mais c'est surtout une arme de destruction massive d'une extrême puissance à jeter dans les hordes de zombies...",
      [Lang.DE]: "Aus einer Plastiktüte, Wasser und etwas Sprengstoff bastelst du dir eine Massenvernichtungswaffe, die du nur noch in eine Zombiehorde werfen brauchst. Gibt ein nettes Massaker.",
      [Lang.ES]: "Una bolsa de plástico llena de agua, amarrada a un explosivo. Ingenioso, ¿verdad? Esta es una verdadera arma de destrucción masiva contra las turbas de zombies."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_bgrenade",
    decoration: 0,
    heavy: false,
    watchPoints: 20,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.Kill,
            value: "6-10"
          }
        ]
      }
    ],
  },
  [ItemId.BGRENADE_EMPTY]: {
    id: ItemId.BGRENADE_EMPTY,
    numericalId: 62,
    name: {
      [Lang.EN]: "Plastic Bag and Semtex",
      [Lang.FR]: "Sac plastique + explosif",
      [Lang.DE]: "Plastiktüte mit Sprengstoff",
      [Lang.ES]: "Bolsa de plástico con explosivo"
    },
    description: {
      [Lang.EN]: "A plastic bag fitted with an explosive charge. It takes some doing, but is simple and effective. You just have to fill it up....",
      [Lang.FR]: "Un sac plastique fixé à une charge explosive. Tout un programme, simple et efficace. Reste à le remplir...",
      [Lang.DE]: "Eine Ladung Sprengstoff, die an eine Plastiktüte befestigt wurde - simpel und effektiv. Jetzt brauchst du nur noch Wasser...",
      [Lang.ES]: "Una bolsa amarrada a un explosivo. Simple y eficaz. Ahora solo queda llenarla de agua..."
    },
    categories: [ItemCategory.Armoury],
    icon: "item_bgrenade_empty",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.WATER }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "bgrenade_#00"
          }
        ]
      }
    ],
  },
  [ItemId.CHAINSAW_PART]: {
    id: ItemId.CHAINSAW_PART,
    numericalId: 63,
    name: {
      [Lang.EN]: "Incomplete Chainsaw",
      [Lang.FR]: "Tronçonneuse incomplète",
      [Lang.DE]: "Unvollständige Kettensäge",
      [Lang.ES]: "Sierra eléctrica incompleta"
    },
    description: {
      [Lang.EN]: "Now this thing is great fun, but it seems to be missing a belt and some other bits and bobs to get it going...",
      [Lang.FR]: "Un outil hautement amusant, mais il semblerait qu'il manque une courroie et quelques babioles pour qu'elle fonctionne...",
      [Lang.DE]: "Das ist ein richtig lustiges Spielzeug. Allerdings brauchst du noch einen Riemen und noch ein paar andere Kleinigkeiten, um sie zum Laufen zu bringen...",
      [Lang.ES]: "Una herramienta muy divertida, pero le faltan algunas piezas para que funcione..."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_chainsaw_part",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.MIXERGUN_PART]: {
    id: ItemId.MIXERGUN_PART,
    numericalId: 64,
    name: {
      [Lang.EN]: "Electric Whisk (incomplete)",
      [Lang.FR]: "Batteur électrique incomplet",
      [Lang.DE]: "Unvollständiger Handmixer",
      [Lang.ES]: "Batidora incompleta"
    },
    description: {
      [Lang.EN]: "This could be a good weapon. If only you had the missing parts to repair the gadget...",
      [Lang.FR]: "Ça pourrait faire une bonne arme, si seulement vous aviez les pièces manquantes pour réparer ce gadget...",
      [Lang.DE]: "Das könnte eine gute Waffe ergeben, wenn du auch die fehlenden Teile auftreibst....",
      [Lang.ES]: "Sería una buena arma, si tuviese las piezas que le faltan..."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_mixergun_part",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.RUSTINE]: {
    id: ItemId.RUSTINE,
    numericalId: 65,
    name: {
      [Lang.EN]: "Duct Tape",
      [Lang.FR]: "Rustine",
      [Lang.DE]: "Klebeband",
      [Lang.ES]: "Adhesivo"
    },
    description: {
      [Lang.EN]: "Always useful for when you want to stick things together.",
      [Lang.FR]: "Toujours pratique pour coller des choses ensemble.",
      [Lang.DE]: "Immer nützlich, wenn man etwas kleben möchte.",
      [Lang.ES]: "Siempre útil para pegar cosas."
    },
    categories: [ItemCategory.Resources],
    icon: "item_rustine",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 2.32
    },
  },
  [ItemId.LAWN_PART]: {
    id: ItemId.LAWN_PART,
    numericalId: 66,
    name: {
      [Lang.EN]: "Dismantled Mower",
      [Lang.FR]: "Tondeuse démontée",
      [Lang.DE]: "Zerlegter Rasenmäher",
      [Lang.ES]: "Cortacésped incompleto"
    },
    description: {
      [Lang.EN]: "A classic garden tool, it needs no power, but comes in kit form... If you want to use it, you just need to finish building it.",
      [Lang.FR]: "Un outil de jardin classique, qui fonctionne sans énergie, mais qui est fourni en kit... Il faudrait finir le montage pour s'en servir.",
      [Lang.DE]: "DAS klassische Gerät für die Gartenarbeit. Es funktioniert ohne Strom und ist in seine Einzelteile zerlegt...Du musst ihn zusammenbauen.",
      [Lang.ES]: "Una herramienta indispensable, funciona sin energía, pero requiere ser armada."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_lawn_part",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.TUBE]: {
    id: ItemId.TUBE,
    numericalId: 67,
    name: {
      [Lang.EN]: "Copper Pipe",
      [Lang.FR]: "Tube de cuivre",
      [Lang.DE]: "Kupferrohr",
      [Lang.ES]: "Tubo de cobre"
    },
    description: {
      [Lang.EN]: "A rather dirty copper pipe which doesn't seem to have any obvious application...",
      [Lang.FR]: "Un tube en cuivre, un peu sale et dont l'utilité vous échappe…",
      [Lang.DE]: "Ein schmutziges Rohr aus Kupfer, für das dir noch keine Verwendung einfällt...",
      [Lang.ES]: "¿Para qué podría servir...?"
    },
    categories: [ItemCategory.Resources],
    icon: "item_tube",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 1.03
    },
  },
  [ItemId.CART_PART]: {
    id: ItemId.CART_PART,
    numericalId: 68,
    name: {
      [Lang.EN]: "Wonky Shopping Trolley",
      [Lang.FR]: "Caddie bancal",
      [Lang.DE]: "Wackliger Einkaufswagen",
      [Lang.ES]: "Carrito cojo"
    },
    description: {
      [Lang.EN]: "A big metal basket on wheels, which could be useful if you could link the wheels somehow... it appears to be missing an axel. Surely you can find something to do the job...",
      [Lang.FR]: "Un genre de gros chariot métallique, mais l'un des essieux est manquant. Il faudrait quelque chose pour le remplacer...",
      [Lang.DE]: "Eine Art Einkaufswagen aus Metall. Leider fehlt ihm eine Radachse. Du müsstest sie durch irgendetwas ersetzen...",
      [Lang.ES]: "Una especie de carrito metálico al que le falta un eje. Habría que repararlo..."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.BagExtension],
    icon: "item_cart_part",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.26
    },
  },
  [ItemId.POCKET_BELT]: {
    id: ItemId.POCKET_BELT,
    numericalId: 69,
    name: {
      [Lang.EN]: "Utility Belt",
      [Lang.FR]: "Ceinture à poches",
      [Lang.DE]: "Gürtel mit Tasche",
      [Lang.ES]: "Cinturón de herramientas"
    },
    description: {
      [Lang.EN]: "This belt allows you to carry one additional item. In addition, it is particulary well designed in that it doesn't stop you from carrying an additional bag later on. Or... you can just pretend that you're Batman (Batarang not included).",
      [Lang.FR]: "Cette ceinture vous permet de disposer d'un emplacement de sac à dos supplémentaire. De plus, elle est particulièrement bien conçue car elle ne vous empêchera pas de prendre un autre sac plus tard...",
      [Lang.DE]: "Mit diesem Gürtel kannst du einen weiteren Platz in deinem Rucksack freimachen. Außerdem ist der Gürtel äußerst ergonomisch entworfen worden, denn er gestattet dir, später noch eine weitere Tasche tragen zu können.",
      [Lang.ES]: "Te brinda un compartimento adicional junto a tu mochila. Otra ventaja: te deja las manos libres para llevar otro contenedor (mochila)."
    },
    info: {
      [Lang.EN]: "+2 backpack spaces, 1 is used by the belt allowing +1 item to be carried.",
      [Lang.FR]: "+2 espaces dans le sac à dos, 1 est utilisé par la ceinture permettant de transporter +1 objet.",
      [Lang.DE]: "+2 Rucksackplätze, 1 wird von dem Gürtel verwendet, was +1 Gegenstand ermöglicht.",
      [Lang.ES]: "+2 espacios en la mochila, 1 es utilizado por el cinturón permitiendo llevar +1 objeto."
    },
    categories: [ItemCategory.Containers_and_boxes, ItemCategory.BagExtension],
    icon: "item_pocket_belt",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.DRUG_HERO]: {
    id: ItemId.DRUG_HERO,
    numericalId: 70,
    name: {
      [Lang.EN]: "Twinoid 500mg",
      [Lang.FR]: "Twinoïde 500mg",
      [Lang.DE]: "Twinoid 500mg",
      [Lang.ES]: "Twinoid 500mg"
    },
    description: {
      [Lang.EN]: "A combination of caffeine, theine, various chemicals and boiled bull's testicles (taurine?), this is a great pick-me-up for the end of the day, or for when you want to flee from a horde of zombies who want your liver.",
      [Lang.FR]: "Un concentré de caféïne, de théine, de diverses drogues chimiques et de testicules de taureau broyées. La drogue idéale pour les coups de fouets en fin de journée, ou quand il s'agit de fuir face à une horde de zombies qui en veulent à votre foie.",
      [Lang.DE]: "Eine Mischung aus konzentriertem Koffein, verschiedenen chemischen Drogen und zermahlenen Stierhoden. Die ideale Droge für den kleinen Energieschub am Abend, wenn du vor einer Zombiemeute flüchten musst, die es auf deine Leber abgesehen hat.",
      [Lang.ES]: "Un concentrado de cafeína, teína, diversas sustancias multicolores y testículos de toro en polvo. Una dosis permite empezar el día con energía o huir rápidamente de una turba de zombies."
    },
    categories: [ItemCategory.Pharmacy, ItemCategory.APSource, ItemCategory.Drug],
    icon: "item_drug_hero",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_drug_#00"
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "clean"
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "drugged"
          },
          {
            type: ItemActionEffectType.AP,
            value: 8
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.52
    },
  },
  [ItemId.CHEST]: {
    id: ItemId.CHEST,
    numericalId: 71,
    name: {
      [Lang.EN]: "Metal Chest",
      [Lang.FR]: "Boîte en métal",
      [Lang.DE]: "Metallkiste",
      [Lang.ES]: "Caja de metal"
    },
    description: {
      [Lang.EN]: "An old rusty metal chest that is covered in dents. Who knows what could be inside?",
      [Lang.FR]: "Une vieille boîte métallique couverte de rouille et complètement cabossée. Qui sait ce qu'elle peut bien contenir ?",
      [Lang.DE]: "Eine komplett zerbeulte, alte rostige Kiste. Was könnte da wohl drin sein?",
      [Lang.ES]: "Una vieja caja metálica bastante oxidada y golpeada. ¿Qué podrá contener?"
    },
    categories: [ItemCategory.Containers_and_boxes, ItemCategory.GuardWeapon],
    icon: "item_chest",
    decoration: 0,
    heavy: true,
    watchPoints: 8,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.69,
      [DropLocation.Trash]: 0.08
    },
  },
  [ItemId.CHEST_XL]: {
    id: ItemId.CHEST_XL,
    numericalId: 72,
    name: {
      [Lang.EN]: "Large Metal Chest",
      [Lang.FR]: "Gros coffre en métal",
      [Lang.DE]: "Großer Metallkoffer",
      [Lang.ES]: "Gran cofre de metal"
    },
    description: {
      [Lang.EN]: "It's properly heavy and definitely contains something of value... You just need to find something a bit more suitable than your teeth to open it.",
      [Lang.FR]: "C'est particulièrement lourd et ça contient sûrement quelque chose de précieux... Reste à trouver un outil plus adapté que vos dents pour l'ouvrir.",
      [Lang.DE]: "Der Koffer ist wirklich schwer und enthält bestimmt etwas Wertvolles....Jetzt musst du nur noch das passende Werkzeug finden, denn mit deinen Zähnen bekommst du das nicht auf.",
      [Lang.ES]: "Pesa mucho y seguramente contiene algo precioso... Encuentra algo mejor que tus dientes para abrirlo."
    },
    categories: [ItemCategory.Containers_and_boxes, ItemCategory.GuardWeapon],
    icon: "item_chest_xl",
    decoration: 0,
    heavy: true,
    watchPoints: 10,
    actions: [
      {
        type: ItemActionType.Find,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_chstxl_#00"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
    openableBy: [
      ItemId.SAW_TOOL,
      ItemId.CAN_OPENER,
      ItemId.SCREW,
      ItemId.SWISS_KNIFE
    ],
  },
  [ItemId.CHEST_TOOLS]: {
    id: ItemId.CHEST_TOOLS,
    numericalId: 73,
    name: {
      [Lang.EN]: "Toolbox",
      [Lang.FR]: "Caisse de matériel",
      [Lang.DE]: "Werkzeugkiste",
      [Lang.ES]: "Caja con cachivaches"
    },
    description: {
      [Lang.EN]: "This old wooden toolbox must contain some useful bits and pieces...",
      [Lang.FR]: "Cette vieille caisse en bois doit contenir des babioles utiles...",
      [Lang.DE]: "Diese alte Holzkiste enthält sicher ein paar brauchbare Kleinigkeiten...",
      [Lang.ES]: "Esta vieja caja de madera seguramente contiene cosas útiles..."
    },
    categories: [ItemCategory.Containers_and_boxes, ItemCategory.GuardWeapon],
    icon: "item_chest_tools",
    decoration: 0,
    heavy: true,
    watchPoints: 5,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 1.29
    },
    openableBy: [
      ItemId.CHAIR_BASIC,
      ItemId.PC,
      ItemId.WRENCH,
      ItemId.CUTTER,
      ItemId.BONE,
      ItemId.CUTCUT,
      ItemId.SMALL_KNIFE,
      ItemId.CHAIN,
      ItemId.KNIFE,
      ItemId.STAFF,
      ItemId.CAN_OPENER,
      ItemId.SCREW,
      ItemId.SWISS_KNIFE,
      ItemId.HURLING_STICK
    ],
  },
  [ItemId.LAMP_ON]: {
    id: ItemId.LAMP_ON,
    numericalId: 74,
    name: {
      [Lang.EN]: "Bedside Lamp (on)",
      [Lang.FR]: "Lampe de chevet (Allumée)",
      [Lang.DE]: "Nachttischlampe (an)",
      [Lang.ES]: "Lámpara encendida"
    },
    description: {
      [Lang.EN]: "With a bedside lamp, you'll be less scared at night so you'll sleep better.",
      [Lang.FR]: "Avec une lampe de chevet, vous aurez moins peur la nuit et vous dormirez peut-être mieux ainsi.",
      [Lang.DE]: "Mit einer Nachttischlampe hast du nachts weniger Angst und kannst so besser schlafen.",
      [Lang.ES]: "Con ella tendrás menos miedo en las noches y seguramente dormirás mejor."
    },
    info: {
      [Lang.EN]: "Prevents being {{status:terror}} Terrorised if the house is breached during the attack. Decreases the night time penalty from -10% to -2.5% while scavenging if on the ground in a zone.",
      [Lang.FR]: "Empêche d'être {{status:terror}} Terrorisé si la maison est ciblée pendant l'attaque. Diminue la pénalité de nuit de -10% à -2,5% lors de la fouille si elle est au sol dans une zone.",
      [Lang.DE]: "Verhindert, dass Sie während des Angriffs {{status:terror}} Terrorisiert werden, wenn das Haus während des Angriffs durchbrochen wird. Verringert die Nachtzeitstrafe von -10 % auf -2,5 %, während Sie in einer Zone nach Schätzen suchen.",
      [Lang.ES]: "Evita ser {{status:terror}} Aterrorizado si la casa es asaltada durante el ataque. Disminuye la penalización nocturna del -10% al -2.5% mientras se busca si está en el suelo en una zona."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration],
    icon: "item_lamp_on",
    decoration: 3,
    heavy: false,
    watchPoints: 5,
    actions: [
      
    ],
  },
  [ItemId.MUSIC]: {
    id: ItemId.MUSIC,
    numericalId: 75,
    name: {
      [Lang.EN]: "Mini Hi-Fi (on)",
      [Lang.FR]: "Petite chaîne HiFi (Allumée)",
      [Lang.DE]: "Mini Hi-Fi Anlage (an)",
      [Lang.ES]: "Pequeño equipo de sonido encendido"
    },
    description: {
      [Lang.EN]: "Why not relax a little by listening to some classic hits: The Cranberries - Zombie, Rob Zombie - Living Dead Girl or Kernkraft 400 - Zombie Nation...",
      [Lang.FR]: "Accordez-vous un peu de détente en écoutant les derniers succès : Zombies IYA ou Peur Bleue Au Fond à Gauche.",
      [Lang.DE]: "Gönn dir etwas Entspannung und höre dir ein bisschen Musik an. Hmmm... Ne Maxi-CD mit \"Zombie Eaters\" von Faith No More befindet sich noch im CD-Fach.",
      [Lang.ES]: "Relájate un poco escuchando los últimos \"hits\" del momento: \"Zombie de mi corazón\" o \"El Baile del Zombie - Versión Remix\"."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration],
    icon: "item_music",
    decoration: 10,
    heavy: true,
    watchPoints: -30,
    actions: [
      
    ],
  },
  [ItemId.PHARMA]: {
    id: ItemId.PHARMA,
    numericalId: 76,
    name: {
      [Lang.EN]: "Pharmaceutical Products",
      [Lang.FR]: "Produits Pharmaceutiques",
      [Lang.DE]: "Pharmazeutische Substanz",
      [Lang.ES]: "Productos farmacéuticos"
    },
    description: {
      [Lang.EN]: "A small flask and some mysterious items wrapped in plastic. No idea what they could be for though... Maybe if you mix them with something else...",
      [Lang.FR]: "Un petit flacon et des produits mystérieux emballés sous plastique. Aucune idée de ce à quoi ça peut bien servir… Peut-être qu'en le mélangeant avec un autre produit ?",
      [Lang.DE]: "Ein paar geheimnisvolle Substanzen und ein kleines Fläschchen. Alles ist in Plastik eingepackt. Kein Plan, wozu du das gebrauchen kannst... Vielleicht kann man einige der Substanzen mit anderen Produkten mischen?",
      [Lang.ES]: "Un frasco con unas misteriosas bolitas dentro. No tienes idea de lo que son... ¿Y si las mezclas con otras cosas?"
    },
    categories: [ItemCategory.Pharmacy],
    icon: "item_pharma",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 3.43,
      [DropLocation.Trash]: 0.08
    },
  },
  [ItemId.PLATE_RAW]: {
    id: ItemId.PLATE_RAW,
    numericalId: 77,
    name: {
      [Lang.EN]: "Sheet Metal (parts)",
      [Lang.FR]: "Fragments de tôle",
      [Lang.DE]: "Unverarbeitete Blechplatten",
      [Lang.ES]: "Pedazos de láminas de metal"
    },
    description: {
      [Lang.EN]: "These pieces of sheet metal are perfect for protecting your home... if you assemble them correctly.",
      [Lang.FR]: "Des morceaux de tôle qui ne demandent qu'à servir de protection dans votre maison… Pour peu que vous les assembliez correctement.",
      [Lang.DE]: "Ein paar Blechplatten, die nur darauf warten, von dir daheim verbaut zu werden... Du musst sie nur noch korrekt zusammensetzen.",
      [Lang.ES]: "Bien podrían servir para reforzar las defensas de tu casa si los unes correctamente"
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_plate_raw",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.86
    },
  },
  [ItemId.RHUM]: {
    id: ItemId.RHUM,
    numericalId: 78,
    name: {
      [Lang.EN]: "“Wake The Dead”",
      [Lang.FR]: "« Debout-les-morts »",
      [Lang.DE]: "'Wake The Dead'",
      [Lang.ES]: "« Levantamuertos »"
    },
    description: {
      [Lang.EN]: "A cocktail invented by someone called Chuck if you believe the label. A mixture of rum, red chilli peppers and whisky, with a pickled finger floating in the middle...",
      [Lang.FR]: "Un cocktail inventé par un certain Joey si on en croit l'étiquette. Mélange de rhum, de piment rouge et de whiskey, avec un doigt mariné qui flotte entre deux eaux...",
      [Lang.DE]: "Ein Cocktail, der Tote weckt und der von Chuck erfunden wurde (wenn man dem Etikett glaubt...). Man nehme einen guten Schuss Rum, etwas roten Chili, Whisky und einen marinierten Finger, der in einer Flüssigkeit schwimmt...",
      [Lang.ES]: "Un cóctel inventado por un tal Etilio según la etiqueta. Mezcla de ron, pisco, tequila, cachaza y chile picante, finamente decorado con un dedo flotando para darle un detalle exótico..."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource, ItemCategory.Alcohol],
    icon: "item_rhum",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_alcool_#00"
          },
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "drunk"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.26
    },
  },
  [ItemId.COFFEE]: {
    id: ItemId.COFFEE,
    numericalId: 79,
    name: {
      [Lang.EN]: "Bloody Hot Coffee",
      [Lang.FR]: "Café brûlant",
      [Lang.DE]: "Heißer Kaffee",
      [Lang.ES]: "Café caliente"
    },
    description: {
      [Lang.EN]: "Who knows how this thermos has managed to stay warm for so long... In any case, it's strong coffee, REALLY strong coffee. It's clearly homemade, and not exactly a premium blend... Not for the faint-hearted!",
      [Lang.FR]: "On se demande comment cette thermos a pu rester chaude aussi longtemps. Quoi qu'il en soit, elle contient suffisamment de café pour vous remettre en forme.",
      [Lang.DE]: "Wie konnte diese Thermoskanne solange heiss bleiben?Das spielt jetzt keine Rolle,es ist jedenfalls starker Kaffee,SEHR starker Kaffe,der auf irgendeine Weise von jemandem gebrüht wurde.Nichts für kleine Mädchen!",
      [Lang.ES]: "Nos preguntamos cómo este termo pudo mantenerse caliente tanto tiempo. Sea como fuere, es un café fuerte, tan fuerte que parece haber sido preparado con mucha ira. ¡Estómagos frágiles, abstenerse!"
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_coffee",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 4
          }
        ]
      }
    ],
  },
  [ItemId.COFFEE_MACHINE]: {
    id: ItemId.COFFEE_MACHINE,
    numericalId: 80,
    name: {
      [Lang.EN]: "Cafetière",
      [Lang.FR]: "Cafetière",
      [Lang.DE]: "Kaffeekocher",
      [Lang.ES]: "Cafetera"
    },
    description: {
      [Lang.EN]: "The ultimate weapon to awaken the sleeping adventurer within you. Its unique filtration system allows you to make great coffee from the most surprising ingredients...",
      [Lang.FR]: "L'arme absolue pour l'aventurier en vous. Son système de filtrage unique permet de fabriquer le meilleur café à partir d'ingrédients pour le moins… inattendus.",
      [Lang.DE]: "Das ultimative Gerät für den Abenteuerer, der in dir schlummert. Sein einzigartiges Filtersystem stellt den besten Kaffee her, den man mit den hier erhältlichen Zutaten brühen kann. Frag besser nicht nach....",
      [Lang.ES]: "Ideal para despertar al aventurero que hay en ti. Su sistema de filtrado te permite preparar un delicioso café a base de ingredientes... Insólitos. Nota: Debes estar en el pueblo para poder usarla."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_coffee_machine",
    decoration: 5,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.COFFEE_MACHINE_PART]: {
    id: ItemId.COFFEE_MACHINE_PART,
    numericalId: 81,
    name: {
      [Lang.EN]: "Incomplete Cafetière",
      [Lang.FR]: "Cafetière incomplète",
      [Lang.DE]: "Unvollständiger Kaffeekocher",
      [Lang.ES]: "Cafetera desarmada"
    },
    description: {
      [Lang.EN]: "This cafetiere could be of great use to you, but unfortunately it has been dismantled...",
      [Lang.FR]: "Cette cafetière pourrait vous être d'une très grande utilité, mais malheureusement elle est en pièces détachées.",
      [Lang.DE]: "Diese Kaffeemaschine könnte sehr nützlich sein, nur ist sie komplett zerlegt.",
      [Lang.ES]: "Podría ser de una gran utilidad, pero está desarmada."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_coffee_machine_part",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.ELECTRO]: {
    id: ItemId.ELECTRO,
    numericalId: 82,
    name: {
      [Lang.EN]: "Electronic component",
      [Lang.FR]: "Composant électronique",
      [Lang.DE]: "Elektronisches Bauteil",
      [Lang.ES]: "Componente electrónico"
    },
    description: {
      [Lang.EN]: "An old circuit board probably from a radio or some other electronic gadget.",
      [Lang.FR]: "Une vieille plaque probablement sortie d'un poste de radio ou d'un quelconque gadget électrique.",
      [Lang.DE]: "Eine alte elektronische Platine, die wahrscheinlich aus einem Radioempfänger oder aus einem sonstigen Gerät stammt.",
      [Lang.ES]: "Una vieja placa extraída de alguna radio o gadget electrónico."
    },
    categories: [ItemCategory.Resources],
    icon: "item_electro",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.43
    },
  },
  [ItemId.CHEST_CITIZEN]: {
    id: ItemId.CHEST_CITIZEN,
    numericalId: 83,
    name: {
      [Lang.EN]: "Citizen's Welcome Pack",
      [Lang.FR]: "Affaires d'un citoyen",
      [Lang.DE]: "Habseligkeiten eines Bürgers",
      [Lang.ES]: "Objetos de un habitante"
    },
    description: {
      [Lang.EN]: "This is a small box given to every citizen upon joining a community. A bit like a lucky bag, although you'll need more than luck to make it through the night...",
      [Lang.FR]: "C'est le petit conteneur standard donné à tout citoyen qui arrive en ville. Un peu comme une pochette surprise, blague un peu dérisoire dans un monde sans perspective d'avenir.",
      [Lang.DE]: "Diese kleine Box enthält alles, was man so als neuer Bürger braucht! Sie ist wie eine Wundertüte oder eine Pralinenschachtel: Man weiß nie was man bekommt. Aber eigentlich ist sie'n Witz...",
      [Lang.ES]: "Es lo que recibe todo habitante cuando llega al pueblo. Es como una cajita de sorpresas."
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_chest_citizen",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "pile_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "radio_off_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "pharma_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "lights_#00",
            odds: 25
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.26
    },
  },
  [ItemId.DRUG_WATER]: {
    id: ItemId.DRUG_WATER,
    numericalId: 84,
    name: {
      [Lang.EN]: "Hydratone 100mg",
      [Lang.FR]: "Hydratone 100mg",
      [Lang.DE]: "Hydraton 100mg",
      [Lang.ES]: "Hydratone 100mg"
    },
    description: {
      [Lang.EN]: "Hydratone is pretty useful, it's a tablet which, a few minutes after ingestion, quenches your thirst. However, it does NOT relieve tiredness, and it does NOT restore action points.",
      [Lang.FR]: "Pratique, l'Hydratone tient dans la poche et peut étancher votre soif quelques minutes après l'ingestion. Toutefois, elle ne retire PAS les effets de la fatigue et ne régénère PAS les points d'action.",
      [Lang.DE]: "Eine äußerst praktische Tablette, die du überall einstecken kannst. Kurz nach ihrer Einnahme verschwindet dein Durst. Trotzdem kann sie WEDER deine Erschöpfung lindern, NOCH gibt sie dir Aktionspunkte zurück.",
      [Lang.ES]: "Muy práctica, esta pastillita puede quitarte la sed. Sin embargo no quita el cansancio ni regenera tus Puntos de Acción."
    },
    info: {
      [Lang.EN]: "Will not reset the step counter (if you walk 6 steps in the desert and take a {{item:drug_water}} Hydratone 100mg. You will still get {{status:thirst1}} Thirsty at the 11th step).",
      [Lang.FR]: "Ne réinitialisera pas le compteur de pas (si vous marchez 6 pas dans le désert et que vous prenez un {{item:drug_water}} Hydratone 100mg. Vous aurez toujours {{status:thirst1}} Soif au 11ème pas).",
      [Lang.DE]: "Setzt den Schrittzähler nicht zurück (wenn Sie 6 Schritte in der Wüste gehen und ein {{item:drug_water}} Hydratone 100mg nehmen. Sie werden immer {{status:thirst1}} Durstig beim 11. Schritt).",
      [Lang.ES]: "No reiniciará el contador de pasos (si caminas 6 pasos en el desierto y tomas un {{item:drug_water}} Hydratone 100mg. Aún tendrás {{status:thirst1}} Sed en el 11º paso)."
    },
    categories: [ItemCategory.Pharmacy, ItemCategory.Water, ItemCategory.Drug],
    icon: "item_drug_water",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Drink,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_drug_#00"
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "clean"
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "drugged"
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "thirst1"
          }
        ]
      }
    ],
  },
  [ItemId.RADIO_OFF]: {
    id: ItemId.RADIO_OFF,
    numericalId: 85,
    name: {
      [Lang.EN]: "Radio Cassette Player (no battery)",
      [Lang.FR]: "Radio K7 (éteint)",
      [Lang.DE]: "Kassettenradio (ohne Strom)",
      [Lang.ES]: "Radio casetera apagada"
    },
    description: {
      [Lang.EN]: "An old transistor radio with a Belle and Sebastian cassette stuck in it. The radio itself is useless as it doesn't pick anything up these days... It's always better to be able to listen to some good music at home than to listen to your neighbours screams as they are devoured by zombies. You just need to find a battery for it...",
      [Lang.FR]: "Un ancien transistor sans pile avec une cassette de blues dedans. La radio elle-même est inutile car on ne capte plus rien de nos jours.. Mais avoir un peu de musique chez soi pour couvrir les hurlements de ses voisins en train de se faire dévorer est toujours appréciable. Reste à trouver une pile.",
      [Lang.DE]: "Ein altes Transistorradio mit Kassettenfach. Es ist ein Blues-Klasette drin. Mit dem Radio wirst du nicht viel anfangen können, da du hier sowieso nichts empfängst, aber du kannst ein bisschen Musik hören. Das übertönt das Geschrei deiner Nachbarn... Jetzt brauchst du nur noch eine Batterie.",
      [Lang.ES]: "Un viejo aparato con un cassette de tangos en el interior. La radio no capta nada, pero sería mejor escuchar a Gardel que a un montón de gente haciéndose devorar. Solo queda encontrar una pila."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_radio_off",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.PILE }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "radio_on_#00"
          }
        ]
      }
    ],
  },
  [ItemId.RADIO_ON]: {
    id: ItemId.RADIO_ON,
    numericalId: 86,
    name: {
      [Lang.EN]: "Radio Cassette Player",
      [Lang.FR]: "Radio K7",
      [Lang.DE]: "Kassettenradio",
      [Lang.ES]: "Radio casetera"
    },
    description: {
      [Lang.EN]: "An old transistor radio with a Belle and Sebastian cassette stuck in it. The radio itself is useless as it doesn't pick anything up these days... It's always better to be able to listen to some good music at home than to listen to your neighbours screams as they are devoured by zombies. Better crank it up!",
      [Lang.FR]: "Un ancien transistor avec une cassette de blues dedans. La radio elle-même est inutile car on ne capte plus rien de nos jours.. Mais avoir un peu de musique chez soi pour couvrir les hurlements de ses voisins en train de se faire dévorer est toujours appréciable.",
      [Lang.DE]: "Ein altes Transistorradio mit Kassettenfach. Es ist ein Blues-Klasette drin. Mit dem Radio wirst du nicht viel anfangen können, da du hier sowieso nichts empfängst, aber du kannst ein bisschen Musik hören. Das übertönt das Geschrei deiner Nachbarn...",
      [Lang.ES]: "Un viejo aparato con un cassette de tangos en el interior. Siempre es preferible escuchar a Gardel que a un montón de gente haciéndose devorar."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration],
    icon: "item_radio_on",
    decoration: 2,
    heavy: false,
    watchPoints: -15,
    actions: [
      
    ],
  },
  [ItemId.CYANURE]: {
    id: ItemId.CYANURE,
    numericalId: 87,
    name: {
      [Lang.EN]: "Cyanide",
      [Lang.FR]: "Cyanure",
      [Lang.DE]: "Zyanid",
      [Lang.ES]: "Cianuro"
    },
    description: {
      [Lang.EN]: "When everything has gone to hell, take a small cyanide capsule, a large glass of water, and just wait for all to go away with a peaceful smile.",
      [Lang.FR]: "Quand rien ne va plus, une petite capsule de cyanure, un grand verre d'eau et on attend que ça passe avec un sourire apaisé.",
      [Lang.DE]: "Wenn wirklich gar nichts mehr geht, schluckst du diese Kapsel mit einem großen Glas Wasser. Danach einfach warten und sich mit einem zufriedenen Grinsen von dieser Welt verabschieden.",
      [Lang.ES]: "Cuando nada va bien, una capsulita de cianuro, un buen vaso de agua y a esperar con una sonrisa de alivio. :)"
    },
    categories: [ItemCategory.Pharmacy],
    icon: "item_cyanure",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.Death
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.17
    },
  },
  [ItemId.DOOR]: {
    id: ItemId.DOOR,
    numericalId: 88,
    name: {
      [Lang.EN]: "Old Door",
      [Lang.FR]: "Vieille porte",
      [Lang.DE]: "Alte Tür",
      [Lang.ES]: "Vieja puerta"
    },
    description: {
      [Lang.EN]: "It's a wooden door. A classic design, formerly white, but now covered in dirt. It's still useful though...",
      [Lang.FR]: "C'est une porte en bois. Modèle classique, autrefois blanche, mais couverte de terre aujourd'hui. Ça pourra toujours servir…",
      [Lang.DE]: "Eine alte Holztür. Das klassische Modell in weiß. Sie ist zwar total verdreckt, aber wer weiß, wozu du sie noch gebrauchen kannst...",
      [Lang.ES]: "Pues eso, una vieja puerta de madera... Podría ser útil."
    },
    categories: [ItemCategory.Defences, ItemCategory.GuardWeapon, ItemCategory.CampingBoost],
    icon: "item_door",
    decoration: 0,
    heavy: true,
    watchPoints: 15,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: -1
          },
          {
            type: ItemActionEffectType.CampingChances,
            value: "+9%"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.77
    },
  },
  [ItemId.VEGETABLE]: {
    id: ItemId.VEGETABLE,
    numericalId: 89,
    name: {
      [Lang.EN]: "Suspicious-looking Vegetable",
      [Lang.FR]: "Légume suspect",
      [Lang.DE]: "Verdächtiges Gemüse",
      [Lang.ES]: "Verdura sospechosa"
    },
    description: {
      [Lang.EN]: "Well it's clearly a... uh... erm... vegetable? It's hard to say who would try to grow something like this but the main thing is that it seems edible. Or not.",
      [Lang.FR]: "Un genre de… légume. Difficile à dire ce qui a essayé de pousser comme ça, mais le principal c'est que ça semble comestible. Ou pas.",
      [Lang.DE]: "Sieht wie Gemüse aus, allerdings wunderst du dich, wie es so krumm wachsen konnte. Wichtig ist, dass du es essen kannst – oder besser nicht?",
      [Lang.ES]: "Una especie de... verdura. Es difícil saber lo que es, no se parece a nada, pero lo importante es que es comestible. ¿O no?"
    },
    categories: [ItemCategory.Food, ItemCategory.APSource, ItemCategory.Poisonable],
    icon: "item_vegetable",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
  },
  [ItemId.REPAIR_KIT_PART]: {
    id: ItemId.REPAIR_KIT_PART,
    numericalId: 90,
    name: {
      [Lang.EN]: "Repair Kit (damaged)",
      [Lang.FR]: "Kit de bricolage (abimé)",
      [Lang.DE]: "Reparaturset (kaputt)",
      [Lang.ES]: "Kit de herramientas en mal estado"
    },
    description: {
      [Lang.EN]: "This repair kit is damaged, it needs to be patched up in the workshop before it can be used again.",
      [Lang.FR]: "Ce kit de réparation est abimé. Il faudrait le retaper un peu à l'atelier avant de pouvoir l'utiliser à nouveau.",
      [Lang.DE]: "Dieses Reparaturset ist kaputt. Du müsstest es in der Werkstatt reparieren, bevor du es wieder benutzen kannst.",
      [Lang.ES]: "Habría que darle unos martillazos en el taller para que pueda servir de nuevo."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_repair_kit_part",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.REPAIR_KIT]: {
    id: ItemId.REPAIR_KIT,
    numericalId: 91,
    name: {
      [Lang.EN]: "Repair Kit",
      [Lang.FR]: "Kit de bricolage",
      [Lang.DE]: "Reparaturset",
      [Lang.ES]: "Kit de herramientas"
    },
    description: {
      [Lang.EN]: "This metal box contains basically all the essentials you might need to put pretty much anything back together. Except your dead neighbours...",
      [Lang.FR]: "Cette boîte en ferraille contient tout le nécessaire de base pour remettre en état à peu près n'importe quoi. Sauf vos voisins morts.",
      [Lang.DE]: "Diese Eisenkiste enthält alle wichtigen Werkzeuge und Materialien um so ziemlich alles zur reparieren... außer vielleicht deinen toten Nachbarn.",
      [Lang.ES]: "Esta caja de metal contiene todo lo necesario para reparar casi cualquier cosa... excepto a tus vecinos muertos."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_repair_kit",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_repair_#00"
          },
          {
            type: ItemActionEffectType.AP,
            value: -1
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "repair_kit_part_#00"
          }
        ]
      }
    ],
  },
  [ItemId.WATERGUN_EMPTY]: {
    id: ItemId.WATERGUN_EMPTY,
    numericalId: 92,
    name: {
      [Lang.EN]: "Water Pistol (empty)",
      [Lang.FR]: "Pistolet à eau (vide)",
      [Lang.DE]: "Wasserpistole (leer)",
      [Lang.ES]: "Pistola de agua (vacía)"
    },
    description: {
      [Lang.EN]: "A water pistol is really effective against zombies! Unless it's empty, like this one...",
      [Lang.FR]: "Un Pistolet à eau, c'est efficace contre les zombies ! Sauf quand il est vide, comme celui-ci...",
      [Lang.DE]: "Eine Wasserpistole ist gegen Zombies äußerst wirksam! Es sei denn sie ist leer.",
      [Lang.ES]: "Tu primer arma letal cuando eras un niño... Solo falta llenarla con agua pura (la de una Ración de agua por ejemplo)."
    },
    categories: [ItemCategory.Armoury],
    icon: "item_watergun_empty",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.WATER }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "watergun_3_#00"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.86
    },
  },
  [ItemId.WATERGUN_OPT_3]: {
    id: ItemId.WATERGUN_OPT_3,
    numericalId: 93,
    name: {
      [Lang.EN]: "Aqua-Splash (3 shots)",
      [Lang.FR]: "Aqua-Splash (3 charges)",
      [Lang.DE]: "Aqua-Splash (3 Ladungen)",
      [Lang.ES]: "Rifle de agua (3 cargas)"
    },
    description: {
      [Lang.EN]: "The Aqua-Splash is a massively overpowered water gun, ideal for long walks in the World Beyond ! Not suitable for children under 8 years of age.",
      [Lang.FR]: "L'Aqua-Splash est un fusil à eau surpuissant pour toute personne en balade dans l'Outre-Monde ! Ne convient pas à un enfant de moins 8 ans.",
      [Lang.DE]: "Die Aqua-Splash-Kanone ist die Lieblingswaffe aller Wüstenwanderer! Nicht geeignet für Kinder unter 8 Jahren.",
      [Lang.ES]: "¡Un arma super poderosa en el Ultramundo! La etiqueta dice de 8 años a más."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_watergun_opt_3",
    decoration: 0,
    heavy: false,
    watchPoints: 6,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "watergun_opt_2_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
  },
  [ItemId.WATERGUN_OPT_2]: {
    id: ItemId.WATERGUN_OPT_2,
    numericalId: 94,
    name: {
      [Lang.EN]: "Aqua-Splash (2 shots)",
      [Lang.FR]: "Aqua-Splash (2 charges)",
      [Lang.DE]: "Aqua-Splash (2 Ladungen)",
      [Lang.ES]: "Rifle de agua (2 cargas)"
    },
    description: {
      [Lang.EN]: "The Aqua-Splash is a massively overpowered water gun, ideal for long walks in the World Beyond ! Not suitable for children under 8 years of age.",
      [Lang.FR]: "L'Aqua-Splash est un fusil à eau surpuissant pour toute personne en balade dans l'Outre-Monde ! Ne convient pas à un enfant de moins 8 ans.",
      [Lang.DE]: "Die Aqua-Splash-Kanone ist die Lieblingswaffe aller Wüstenwanderer! Nicht geeignet für Kinder unter 8 Jahren.",
      [Lang.ES]: "¡Un arma super poderosa en el Ultramundo! La etiqueta dice de 8 años a más."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_watergun_opt_2",
    decoration: 0,
    heavy: false,
    watchPoints: 4,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "watergun_opt_1_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
  },
  [ItemId.WATERGUN_OPT_1]: {
    id: ItemId.WATERGUN_OPT_1,
    numericalId: 95,
    name: {
      [Lang.EN]: "Aqua-Splash (1 shot)",
      [Lang.FR]: "Aqua-Splash (1 charge)",
      [Lang.DE]: "Aqua-Splash (1 Ladung)",
      [Lang.ES]: "Rifle de agua (1 carga)"
    },
    description: {
      [Lang.EN]: "The Aqua-Splash is a massively overpowered water gun, ideal for long walks in the World Beyond ! Not suitable for children under 8 years of age.",
      [Lang.FR]: "L'Aqua-Splash est un fusil à eau surpuissant pour toute personne en balade dans l'Outre-Monde ! Ne convient pas à un enfant de moins 8 ans.",
      [Lang.DE]: "Die Aqua-Splash-Kanone ist die Lieblingswaffe aller Wüstenwanderer! Nicht geeignet für Kinder unter 8 Jahren.",
      [Lang.ES]: "¡Un arma super poderosa en el Ultramundo! La etiqueta dice de 8 años a más."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_watergun_opt_1",
    decoration: 0,
    heavy: false,
    watchPoints: 2,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "watergun_opt_empty_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
  },
  [ItemId.MIXERGUN_EMPTY]: {
    id: ItemId.MIXERGUN_EMPTY,
    numericalId: 96,
    name: {
      [Lang.EN]: "Electric Whisk (no battery)",
      [Lang.FR]: "Batteur électrique (éteint)",
      [Lang.DE]: "Handmixer (ohne Strom)",
      [Lang.ES]: "Batidora eléctrica (apagada)"
    },
    description: {
      [Lang.EN]: "It's a (really powerful) whisk and it's electric, what else is there to say? Well, the good part is that it only needs one battery, and only has limited chance of running down.",
      [Lang.FR]: "Il bat (très fort) et il est électrique, que dire de plus ? Le bon point, c'est qu'il ne nécessite qu'une pile et a une certaine chance de l'épuiser.",
      [Lang.DE]: "Rührt elektrisch und sehr schnell - was gibt's sonst noch zu sagen? Er hat den Vorteil, dass er nur eine Batterie braucht, die sich nicht mal mit Sicherheit entlädt.",
      [Lang.ES]: "Tan sencillo como eso. La buena noticia es que sólo necesitas una batería y tienes cierta posibilidad de agotarla."
    },
    categories: [ItemCategory.Armoury],
    icon: "item_mixergun_empty",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.PILE }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "mixergun_#00"
          }
        ]
      }
    ],
  },
  [ItemId.CHAINSAW_EMPTY]: {
    id: ItemId.CHAINSAW_EMPTY,
    numericalId: 97,
    name: {
      [Lang.EN]: "Chainsaw (empty)",
      [Lang.FR]: "Tronçonneuse (éteinte)",
      [Lang.DE]: "Kettensäge (ohne Strom)",
      [Lang.ES]: "Sierra eléctrica (apagada)"
    },
    description: {
      [Lang.EN]: "With this bad boy, you know there's going to be a wholesale zombie chop-fest. Know, however, that even though you may be victorious, you won't be entirely unscathed... This diabolical machine has been modified to work (somewhat incredibly) with a simple battery !",
      [Lang.FR]: "Avec ça, vous allez faire un vrai massacre. Mais sachez qu'on en ressort peut-être victorieux mais pas tout à fait indemne... Cette machine infernale a été modifiée et fonctionne (chose incroyable) avec une simple pile !",
      [Lang.DE]: "Damit richtest du ein wahres Massaker an. Ob du das aber zu 100% unversehrt überstehst ist eine andere Frage... Diese umgebaute Höllenmaschine funktioniert - man glaubt es kaum - mit einer gewöhnlichen Batterie!",
      [Lang.ES]: "Con eso puedes darte el gusto de masacrar a tus atacantes. Recuerda que puedes salir victorioso pero no siempre ileso... Esta máquina infernal ha sido modificada y funciona (increíblemente) ¡con una sola pila!"
    },
    categories: [ItemCategory.Armoury],
    icon: "item_chainsaw_empty",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.PILE }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "chainsaw_#00"
          }
        ]
      }
    ],
  },
  [ItemId.PILEGUN_EMPTY]: {
    id: ItemId.PILEGUN_EMPTY,
    numericalId: 98,
    name: {
      [Lang.EN]: "Battery Launcher 1-ITF (empty)",
      [Lang.FR]: "Lance-Pile 1-PDTG (vide)",
      [Lang.DE]: "Batteriewerfer 1-PDTG (entladen)",
      [Lang.ES]: "Lanzapilas 1-PDTG (vacío)"
    },
    description: {
      [Lang.EN]: "A little creative recycling of the resources at hand enables the Battery Launcher 1-ITF to use batteries as piercing projectiles.",
      [Lang.FR]: "Imaginé avec les moyens du bord, le Lance-Pile 1-PDTG permet, par un savant recyclage, de transformer des piles en projectiles perforants.",
      [Lang.DE]: "Der Batteriewerfer 1-PDTG wurde äußerst einfallsreich zusammengeschraubt. Dank einer virtuosen Recyclingprozedur ist er in der Lage, harmlose Batterien in mächtige Geschosse zu verwandeln.",
      [Lang.ES]: "Imaginado con mucho ingenio, sirve para convertir una simple pila en un temible proyectil."
    },
    categories: [ItemCategory.Armoury],
    icon: "item_pilegun_empty",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.PILE }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "pilegun_#00"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.69
    },
  },
  [ItemId.TASER_EMPTY]: {
    id: ItemId.TASER_EMPTY,
    numericalId: 99,
    name: {
      [Lang.EN]: "Taser (incomplete)",
      [Lang.FR]: "Taser d'auto-défense (éteint)",
      [Lang.DE]: "Taser (ohne Strom)",
      [Lang.ES]: "Táser de autodefensa (apagado)"
    },
    description: {
      [Lang.EN]: "A handheld gadget which delivers a frightful electric shock into the victim's body. Not so effective when you consider that zombies don't feel pain... However, you can always hope to take out a limb or a vital organ.",
      [Lang.FR]: "Un gadget de poing qui lâche une décharge électrique effroyable dans le corps de la victime. Pas très efficace quand on sait que les zombies ne craignent pas la douleur. Mais vous pouvez toujours espérer faire éclater un membre ou un organe vital avec cette décharge ?",
      [Lang.DE]: "Der Taser ist eine kleine technische Spielerei, mit der man grässliche Elektrostöße in dem Körper seines Opfers jagen kann. Allerdings ist er nicht sehr effektiv, wenn man bedennkt dass den Zombies Schmerzen nichts ausmachen. Vielleicht gelingt es dir ja mit einem Stromstoß ein wichtiges Körperglied oder Organ zum Platzen zu bringen?",
      [Lang.ES]: "Un arma capaz de paralizar el cuerpo de la víctima con una terrible descarga eléctrica. No es muy eficaz sabiendo que los zombies no le temen al dolor. Pero siempre puedes intentar hacer colapsar un órgano vital con él."
    },
    categories: [ItemCategory.Armoury],
    icon: "item_taser_empty",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.PILE }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "taser_#00"
          }
        ]
      }
    ],
  },
  [ItemId.SPORT_ELEC_EMPTY]: {
    id: ItemId.SPORT_ELEC_EMPTY,
    numericalId: 100,
    name: {
      [Lang.EN]: "EMS System (incomplete)",
      [Lang.FR]: "Sport-élec (éteint)",
      [Lang.DE]: "Elektrischer Bauchmuskeltrainer (ohne Strom)",
      [Lang.ES]: "ElectroGym (apagado)"
    },
    description: {
      [Lang.EN]: "The military version of a gadget which builds muscle through bursts of electrical stimulation. It relieves tiredness and restores your action points, but causes massive trauma (even causing death in agonising pain).",
      [Lang.FR]: "La version militaire d'un gadget pour se muscler à coups de décharges électriques. Il retire la fatigue et régénère vos points d'action, mais cause des lésions graves (voire vous fait mourir dans d'atroces souffrances).",
      [Lang.DE]: "Die militärische Ausführung eines 'body shapers', der dazu dient, seinen Körper mittels schwacher Stromstöße zu stählen. Er regeneriert deine Erschöpfung und gibt dir deine Aktionspunkte wieder. Allerdings verursacht er auch schwere Verletzungen und du kannst unter Umständen sogar qualvoll sterben...",
      [Lang.ES]: "La versión militar de un gagdet utilizado para ejercitarse con descargas eléctricas. Quita el cansancio y regenera los Puntos de Acción, pero puede causar lesiones graves (o incluso una muerte dolorosa)."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_sport_elec_empty",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.PILE }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "sport_elec_#00"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.34
    },
  },
  [ItemId.SPORT_ELEC]: {
    id: ItemId.SPORT_ELEC,
    numericalId: 101,
    name: {
      [Lang.EN]: "EMS System (charged)",
      [Lang.FR]: "Sport-élec (chargé)",
      [Lang.DE]: "Elektrischer Bauchmuskeltrainer (geladen)",
      [Lang.ES]: "ElectroGym (cargado)"
    },
    description: {
      [Lang.EN]: "The military version of a gadget which builds muscle through bursts of electrical stimulation. It relieves tiredness and restores your action points, but causes massive trauma (even causing death in agonising pain).",
      [Lang.FR]: "La version militaire d'un gadget pour se muscler à coups de décharges électriques. Il retire la fatigue et régénère vos points d'action, mais cause des lésions graves (voire vous fait mourir dans d'atroces souffrances).",
      [Lang.DE]: "Die militärische Ausführung eines 'body shapers', der dazu dient, seinen Körper mittels schwacher Stromstöße zu stählen. Er regeneriert deine Erschöpfung und gibt dir deine Aktionspunkte wieder. Allerdings verursacht er auch schwere Verletzungen und du kannst unter Umständen sogar qualvoll sterben...",
      [Lang.ES]: "La versión militar de un gagdet utilizado para ejercitarse con descargas eléctricas. Quita el cansancio y regenera los Puntos de Acción, pero puede causar lesiones graves (o incluso una muerte dolorosa)."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.GuardWeapon, ItemCategory.APSource],
    icon: "item_sport_elec",
    decoration: 0,
    heavy: false,
    watchPoints: -10,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_maso_#00"
          },
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "tg_meta_wound"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "sport_elec_empty_#00"
          }
        ]
      }
    ],
  },
  [ItemId.BIG_PGUN_EMPTY]: {
    id: ItemId.BIG_PGUN_EMPTY,
    numericalId: 102,
    name: {
      [Lang.EN]: "Devastator (empty)",
      [Lang.FR]: "Devastator (vide)",
      [Lang.DE]: "Zerstörer (entladen)",
      [Lang.ES]: "Devastador (vacío)"
    },
    description: {
      [Lang.EN]: "The military version of the Battery Launcher 1-ITF. It's massively powerful piston can launch a battery at a phenomenal speed and allow it to pierce pretty much anything. In short, this thing will make a hole the size of a fist in 2 zombies, if they're lined up right...",
      [Lang.FR]: "La version militaire du Lance-Pile 1-PDTG. Son piston surpuissant peut projeter une pile à une vitesse phénoménale et percer à peu près n'importe quelle matière. Cette version peut faire un trou gros comme un poing dans 2 zombies, s'ils sont alignés.",
      [Lang.DE]: "Die militärische Ausführung des Batteriewerfers 1-PDTG. Sein übermächtiger Kolben ist in der Lage, eine Batterie derart schnell zu beschleunigen, dass sie fast jedes Material durchstößt. Das Gerät reißt faustgroße Löcher in bis zu zwei Zombies, vorausgesetzt sie stehen hintereinander.",
      [Lang.ES]: "La versión militar del lanza-pilas 1-PDTG. Su pistón ultrapoderoso puede disparar una pila con una velocidad fenomenal y perforar prácticamente cualquier material. Esta maquinilla puede hacer un agujero del tamaño de un puño en 2 zombies al mismo tiempo, si están alineados."
    },
    categories: [ItemCategory.Armoury],
    icon: "item_big_pgun_empty",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.PILE }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "big_pgun_#00"
          }
        ]
      }
    ],
  },
  [ItemId.BIG_PGUN]: {
    id: ItemId.BIG_PGUN,
    numericalId: 103,
    name: {
      [Lang.EN]: "Devastator (loaded)",
      [Lang.FR]: "Devastator (chargé)",
      [Lang.DE]: "Zerstörer (geladen)",
      [Lang.ES]: "Devastador (cargado)"
    },
    description: {
      [Lang.EN]: "The military version of the Battery Launcher 1-ITF. It's massively powerful piston can launch a battery at a phenomenal speed and allow it to pierce pretty much anything. In short, this thing will make a hole the size of a fist in 2 zombies, if they're lined up right...",
      [Lang.FR]: "La version militaire du Lance-Pile 1-PDTG. Son piston surpuissant peut projeter une pile à une vitesse phénoménale et percer à peu près n'importe quelle matière. Cette version peut faire un trou gros comme un poing dans 2 zombies, s'ils sont alignés.",
      [Lang.DE]: "Die militärische Ausführung des Batteriewerfers 1-PDGT. Sein übermächtiger Kolben ist in der Lage ein Batterie derart schnell zu beschleunigen, dass sie fast jedes Material durchstößt. Das Gerät reißt faustgroße Löcher in bis zu zwei Zombies, vorausgesetzt sie stehen hintereinander.",
      [Lang.ES]: "La versión militar del lanza-pilas 1-PDTG. Su pistón ultrapoderoso puede disparar una pila con una velocidad fenomenal y perforar prácticamente cualquier material. Esta maquinilla puede hacer un agujero del tamaño de un puño en 2 zombies al mismo tiempo, si están alineados."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_big_pgun",
    decoration: 0,
    heavy: false,
    watchPoints: 11,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "big_pgun_empty_#00",
            odds: 100
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "pile_broken_#00",
            odds: 50
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "pile_#00",
            odds: 50
          },
          {
            type: ItemActionEffectType.Kill,
            value: "2"
          }
        ]
      }
    ],
  },
  [ItemId.BIG_PGUN_PART]: {
    id: ItemId.BIG_PGUN_PART,
    numericalId: 104,
    name: {
      [Lang.EN]: "Devastator (incomplete)",
      [Lang.FR]: "Devastator incomplet",
      [Lang.DE]: "Unvollständiger Zerstörer",
      [Lang.ES]: "Devastador incompleto"
    },
    description: {
      [Lang.EN]: "The military version of the Battery Launcher 1-ITF. It's massively powerful piston can launch a battery at a phenomenal speed and allow it to pierce pretty much anything. In short, this thing will make a hole the size of a fist in 2 zombies, if they're lined up right...",
      [Lang.FR]: "La version militaire du Lance-Pile 1-PDTG. Son piston surpuissant peut projeter une pile à une vitesse phénoménale et percer à peu près n'importe quelle matière. Cette version peut faire un trou gros comme un poing dans 2 zombies, s'ils sont alignés.",
      [Lang.DE]: "Die militärische Ausführung des Batteriewerfers 1-PDTG. Sein übermächtiger Kolben ist in der Lage, eine Batterie derart schnell zu beschleunigen, dass sie fast jedes Material durchstößt. Das Gerät reißt faustgroße Löcher in bis zu zwei Zombies, vorausgesetzt sie stehen hintereinander.",
      [Lang.ES]: "La versión militar del lanza-pilas 1-PDTG. Su pistón ultrapoderoso puede disparar una pila con una velocidad fenomenal y perforar prácticamente cualquier material. Esta maquinilla puede hacer un agujero del tamaño de un puño en 2 zombies al mismo tiempo, si están alineados."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_big_pgun_part",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.TAGGER]: {
    id: ItemId.TAGGER,
    numericalId: 105,
    name: {
      [Lang.EN]: "Radius Radar Beacon",
      [Lang.FR]: "Balise « Radius »",
      [Lang.DE]: "Zonenmarker 'Radius'",
      [Lang.ES]: "Transmisor « Radius »"
    },
    description: {
      [Lang.EN]: "The beacon lets you uncover all squares on the map adjacent to your current location.",
      [Lang.FR]: "La balise « Radius » permet de dévoiler sur la carte toutes les zones environnant la zone dans laquelle vous vous trouvez.",
      [Lang.DE]: "Der Zonenmarker 'Radius' zeigt dir auf der Karte alle Zonen an, die an deine aktuelle Position angrenzen.",
      [Lang.ES]: "Este instrumento te mostrará en el mapa todas las zonas que rodean el lugar donde te encuentras."
    },
    info: {
      [Lang.EN]: "Reveals the 8 zones surrounding your current location. Disappears after use.",
      [Lang.FR]: "Révèle les 8 zones entourant votre position actuelle. Disparaît après utilisation.",
      [Lang.DE]: "Enthüllt die 8 Zonen um Ihren aktuellen Standort. Verschwinden nach Gebrauch.",
      [Lang.ES]: "Revela las 8 zonas que rodean tu ubicación actual. Desaparece después de usarlo."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_tagger",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.69
    },
  },
  [ItemId.FLARE]: {
    id: ItemId.FLARE,
    numericalId: 106,
    name: {
      [Lang.EN]: "Spy Flare",
      [Lang.FR]: "Fusée éclairante",
      [Lang.DE]: "Leuchtrakete",
      [Lang.ES]: "Bengala"
    },
    description: {
      [Lang.EN]: "The spy rocket allows you to gather information on distant zones. Once the rocket has landed, a transmitter is deployed which immediately relays the information.",
      [Lang.FR]: "La Fusée Éclairante vous permet de réveler les informations d'une zone éloignée de la ville. Une fois retombée elle libère un petit emetteur qui transmet de suite les informations.",
      [Lang.DE]: "Die Leuchtrakete ermöglicht dir Informationen über weit entfernte Zonen zu bekommen. Sobald die Rakete am Boden aufschlägt, wird ein kleiner Sender freigesetzt, der Informationen über die Umgebung sendet.",
      [Lang.ES]: "Este pequeñín te permitirá recoger información sobre zonas lejanas. Tan pronto como toca el suelo, cae un pequeño transmisor, que envía información del entorno."
    },
    info: {
      [Lang.EN]: "Reveals a random distant unexplored zone in the desert.",
      [Lang.FR]: "Révèle une zone éloignée inexplorée au hasard dans le désert.",
      [Lang.DE]: "Enthüllt eine zufällige entfernte unerforschte Zone in der Wüste.",
      [Lang.ES]: "Revela una zona alejada inexplorada al azar en el desierto."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.GuardWeapon],
    icon: "item_flare",
    decoration: 0,
    heavy: false,
    watchPoints: 15,
    actions: [
      
    ],
  },
  [ItemId.JERRYGUN]: {
    id: ItemId.JERRYGUN,
    numericalId: 107,
    name: {
      [Lang.EN]: "Jerrycan Gun (ready)",
      [Lang.FR]: "Pompe à jerrycan (prête)",
      [Lang.DE]: "Kanisterpumpe (einsatzbereit)",
      [Lang.ES]: "Bomba para cantimplora (lista)"
    },
    description: {
      [Lang.EN]: "Once upon a time, this gadget was the laughing stock of the DIY department. The epitome of uselessness. These days, (with the nozzle fitted to a Jerrycan) it becomes a formidable weapon which converts unpurified water into a jet of pure water vapour !",
      [Lang.FR]: "Avant, ce gadget faisait rire tout le monde au rayon bricolage. Summum de l'inutilité. Aujourd'hui, c'est une arme redoutable qui utilise de l'eau non-purifiée (l'embout s'adapte sur un jerrycan) pour la projeter sous forme de vapeur d'eau pure !",
      [Lang.DE]: "Früher konntest du einem solchen Gegenstand gerade mal ein fades Lächeln abgewinnen. er war so sinnlos wie ein Kropf. Inzwischen hat sich diese Pumpe in eine gefürchtete Waffe verwandelt, um nicht gereinigtes Wasser auf Zombies zu versprühen (das Ansatzstück passt auf einen Kanister).",
      [Lang.ES]: "Nadie le daba importancia a esta cosa en las tiendas de bricolaje, considerada inútil. Hoy, es un arma muy eficaz. ¡Se enrosca a una cantimplora con agua no purificada y pulveriza agua pura!"
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_jerrygun",
    decoration: 0,
    heavy: false,
    watchPoints: 20,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "jerrygun_off_#00",
            odds: 15
          }
        ]
      }
    ],
  },
  [ItemId.CHAIR_BASIC]: {
    id: ItemId.CHAIR_BASIC,
    numericalId: 108,
    name: {
      [Lang.EN]: "Ektorp-Gluten Chair",
      [Lang.FR]: "Chaise Ektörp-Gluten",
      [Lang.DE]: "Ektorp-Gluten Stuhl",
      [Lang.ES]: "Silla Ektörp-Gluten"
    },
    description: {
      [Lang.EN]: "A fairly normal chair, with a particularly brutal sounding Swedish name. You could hit people with it, but it works far better for the task it was designed for. Send it home Happy... send it home.",
      [Lang.FR]: "Une banale chaise de fabrication suédoise. On peut taper des gens avec, mais ça fonctionnera mieux si c'est simplement rangé en sécurité chez soi…",
      [Lang.DE]: "Ein schlichter Stuhl mit lustigem Namen aus schwedischer Herstellung. Man kann damit Leute vermöbeln, aber besser du stellst ihn dir ins Wohnzimmer...",
      [Lang.ES]: "Una simple silla con nombre raro, de fabricación sueca. Puedes usarla para defenderte, pero es más útil si la guardas en tu casa..."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration, ItemCategory.Breakable],
    icon: "item_chair_basic",
    decoration: 2,
    heavy: true,
    watchPoints: 10,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 50
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1",
            odds: 50
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.34
    },
    opens: [
      ItemId.CHEST_FOOD,
      ItemId.CHEST_TOOLS
    ],
  },
  [ItemId.GUN]: {
    id: ItemId.GUN,
    numericalId: 109,
    name: {
      [Lang.EN]: "Revolver (unloaded)",
      [Lang.FR]: "Revolver (vide)",
      [Lang.DE]: "Revolver (entladen)",
      [Lang.ES]: "Revólver (vacío)"
    },
    description: {
      [Lang.EN]: "A handgun: A model P-22, reknowned[sic] for its reliability and precision. It's totally worthless without bullets though...",
      [Lang.FR]: "Une arme de poing : le modèle P-22, très réputé pour sa fiabilité et sa grande précision. Mais ça ne sert strictement à rien sans munition...",
      [Lang.DE]: "Eine Faustfeuerwaffe vom Modelltyp P-22. Sie ist für ihre Treffgenauigkeit und Zuverlässigkeit berühmt. Ohne Munition kannst du damit aber überhaupt nichts anfangen...",
      [Lang.ES]: "El famoso modelo P-22, conocido por su fiabilidad y gran precisión. Pero no sirve de nada sin municiones..."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration],
    icon: "item_gun",
    decoration: 5,
    heavy: false,
    watchPoints: -20,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.MACHINE_GUN]: {
    id: ItemId.MACHINE_GUN,
    numericalId: 110,
    name: {
      [Lang.EN]: "Assault Rifle (unloaded)",
      [Lang.FR]: "Fusil d'assaut (vide)",
      [Lang.DE]: "Sturmgewehr (entladen)",
      [Lang.ES]: "Fusil de asalto (vacío)"
    },
    description: {
      [Lang.EN]: "A modified, more compact version of the AK-47, probably destined to \"civilian\" use... not the most accurate gun though... watch out for \"friendly fire\"!",
      [Lang.FR]: "Une version peu courante du M16. Plus compacte, probablement destiné à un usage \"civil\"... La chasse à la Galinette Cendrée diront certains.",
      [Lang.DE]: "Eine umgebaute Version des AK-47. Dieses Gewehr ist kompakter und wahrscheinlich für den \"zivilen\" Einsatz entworfen worden... Manche sagen man könne damit sehr gut 'Problembären' kalt machen.",
      [Lang.ES]: "Una versión modificada del AK-47, más compacta, probablemente diseñada para un uso \"civil\"..."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration],
    icon: "item_machine_gun",
    decoration: 15,
    heavy: false,
    watchPoints: -25,
    actions: [
      
    ],
  },
  [ItemId.DETO]: {
    id: ItemId.DETO,
    numericalId: 111,
    name: {
      [Lang.EN]: "Compact detonator",
      [Lang.FR]: "Détonateur compact",
      [Lang.DE]: "Zünder",
      [Lang.ES]: "Detonador compacto"
    },
    description: {
      [Lang.EN]: "A compact tool which can detonate a small explosive charge.",
      [Lang.FR]: "Un dispositif compact qui peut faire exploser une petite charge d'explosif...",
      [Lang.DE]: "Ein kleiner, kompakter Zünder, mit dem man eine kleine Sprengladung explodieren lassen kann.",
      [Lang.ES]: "Un dispositivo que puede hacer volar una pequeña carga de explosivos..."
    },
    categories: [ItemCategory.Resources],
    icon: "item_deto",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.77
    },
  },
  [ItemId.CONCRETE]: {
    id: ItemId.CONCRETE,
    numericalId: 112,
    name: {
      [Lang.EN]: "Bag of Cement",
      [Lang.FR]: "Sac de ciment",
      [Lang.DE]: "Zementsack",
      [Lang.ES]: "Saco de cemento"
    },
    description: {
      [Lang.EN]: "A big bag of reasonable quality cement... Once it is mixed with water, it dries quickly into super strong concrete!",
      [Lang.FR]: "Un gros sac de ciment de qualité très moyenne… Une fois dilué dans de l'eau, ça sèche rapidement pour donner du béton particulièrement résistant !",
      [Lang.DE]: "Ein großer Zementsack von mittelmäßiger Qualität... Wenn du den Zement in Wasser auflöst trocknet er ziemlich schnell und du erhälst einen besonders festen Beton, den du für allerhand Konstruktionen verwenden kannst!",
      [Lang.ES]: "Al mezclarlo con agua, se endurece rápidamente y se hace muy resistente."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_concrete",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 1.46
    },
  },
  [ItemId.CONCRETE_WALL]: {
    id: ItemId.CONCRETE_WALL,
    numericalId: 113,
    name: {
      [Lang.EN]: "Unshaped Concrete Blocks",
      [Lang.FR]: "Pavés de béton informes",
      [Lang.DE]: "Unförmige Zementblöcke",
      [Lang.ES]: "Adoquín de hormigón"
    },
    description: {
      [Lang.EN]: "These don't look anything like bricks, but they are made of reinforced concrete, and can be used to improve defences... Worst-case scenario, lob them at some zombies – it'll be like the Tiananmen Square demonstrations. With less tanks. And zombies.",
      [Lang.FR]: "Ça ne ressemble pas le moins du monde à des briques, mais c'est en béton armé et ça doit pouvoir servir de défenses chez soi… Au pire, jetez-les sur des zombies, ça sera un peu comme une manifestation.",
      [Lang.DE]: "Sie ähneln in keinster Weise Bauziegeln, aber es handelt sich um Stahlbeton, welchen du sicherlich für die Verbesserung der Verteidigung deines Hauses verwenden kannst... Schlimmstenfalls kannst du sie auch auf ein paar Zombies werfen, so wie bei einer Demo.",
      [Lang.ES]: "Hormigón armado. Puede servir para reforzar las defensas de tu casa... o para ser lanzado sobre un zombie."
    },
    categories: [ItemCategory.Defences, ItemCategory.GuardWeapon, ItemCategory.Breakable],
    icon: "item_concrete_wall",
    decoration: 0,
    heavy: true,
    watchPoints: 17,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 50
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
  },
  [ItemId.DRUG_RANDOM]: {
    id: ItemId.DRUG_RANDOM,
    numericalId: 114,
    name: {
      [Lang.EN]: "Unlabelled Drug",
      [Lang.FR]: "Médicament sans étiquette",
      [Lang.DE]: "Etikettenloses Medikament",
      [Lang.ES]: "Medicamento sin etiqueta"
    },
    description: {
      [Lang.EN]: "The label has been completely destroyed, and most of the tablets are mouldy. Nonetheless you manage to find some that are still edible... ish. Are you sure you're sick enough to justify swallowing them though?",
      [Lang.FR]: "Une boîte de médicaments dont l'étiquette est complètement effacée... Les cachets dedans sont pour la plupart moisis, mais vous en trouver quelques uns qui soient encore \"consommables\". Mais êtes-vous suffisamment mal pour pouvoir avaler ça ?",
      [Lang.DE]: "Eine Medikamentenschachtel, dessen Etikett abgerissen wurde... Die darin eingepackten Pillen sind größtenteils verschimmelt. Allerdings findest du welche, die noch einigermaßen \"genießbar\" sind. Um das zu schlucken, muss es dir schon wirklich schlecht gehen...",
      [Lang.ES]: "Una caja de medicinas con una etiqueta borrosa... Las pastillas que tiene dentro están enmohecidas, pero te parece que algunas no están tan mal. ¿Realmente piensas tragar eso?"
    },
    categories: [ItemCategory.Pharmacy, ItemCategory.APSource, ItemCategory.Drug],
    icon: "item_drug_random",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_cobaye_#00"
          },
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_drug_#00",
            odds: 100
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "clean",
            odds: 80
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "drugged",
            odds: 80
          },
          {
            type: ItemActionEffectType.AP,
            value: 6,
            odds: 40
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "terror",
            odds: 20
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "addict",
            odds: 20
          },
          {
            type: ItemActionEffectType.AP,
            value: 7,
            odds: 20
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.69
    },
  },
  [ItemId.DISINFECT]: {
    id: ItemId.DISINFECT,
    numericalId: 115,
    name: {
      [Lang.EN]: "Paracetoid 7g",
      [Lang.FR]: "Paracétoïde 7g",
      [Lang.DE]: "Paracetoid 7g",
      [Lang.ES]: "Paracetoide 7g"
    },
    description: {
      [Lang.EN]: "A powerful antibiotic capable of dealing with any infection. The label states, \"This medication may occasionally cause unwanted side-effects including acne, vomiting, convulsions and violent death\".",
      [Lang.FR]: "Un antipyrétique puissant capable d'enrayer n'importe quelle infection. La notice précise : « ce médicament peut parfois provoquer quelques effets secondaires gênants (acné, vomissements, convulsions et mort violente) ».",
      [Lang.DE]: "Ein starkes Antibiotikum, das jede Infektion platt macht. Auf dem Beipackzettel steht: \"Dieses Medikament kann manchmal unerwünschte und unberechenbare Nebenwirkugen hervorrufen (Akne, Erbrechen, Krämpfe und Herzstillstand)\".",
      [Lang.ES]: "Un potente antibiótico capaz de eliminar cualquier infección. La caja dice: «Este medicamento puede provocar efectos secundarios (acné, manchas en la piel, una muerte violenta, entre otros)»."
    },
    categories: [ItemCategory.Pharmacy, ItemCategory.Drug],
    icon: "item_disinfect",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_drug_#00"
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "clean"
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "drugged"
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "immune"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.26
    },
  },
  [ItemId.DIGGER]: {
    id: ItemId.DIGGER,
    numericalId: 116,
    name: {
      [Lang.EN]: "Ness-Quick Weedkiller",
      [Lang.FR]: "Désherbant Ness-Quick",
      [Lang.DE]: "Unkrautbekämpfungsmittel Ness-Quick",
      [Lang.ES]: "Herbicida Ness-Quick"
    },
    description: {
      [Lang.EN]: "The label on this bag of weedkiller implies that it is also edible when added to milk. What are you worried about ?",
      [Lang.FR]: "L'étiquette collée sur ce sac de désherbant laisse entendre que le produit est également comestible s'il est mélangé avec du lait. Vous avez comme un doute...",
      [Lang.DE]: "Das auf den Sack geklebte Etikett besagt, dass das Produkt genießbar sei wenn man es in Milch auflöst. Ein leichter Zweifel befällt dich...",
      [Lang.ES]: "La etiqueta que lleva pegada hace pensar que este producto es comestible si se mezcla con leche. A ti te da ciertas dudas..."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_digger",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_digger_#00"
          },
          {
            type: ItemActionEffectType.RemoveRuinDebris,
            value: "2-3"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 1.03
    },
  },
  [ItemId.CHEST_FOOD]: {
    id: ItemId.CHEST_FOOD,
    numericalId: 117,
    name: {
      [Lang.EN]: "Food Parcel",
      [Lang.FR]: "Caisse de nourriture",
      [Lang.DE]: "Nahrungsmittelkiste",
      [Lang.ES]: "Caja de alimentos"
    },
    description: {
      [Lang.EN]: "There's an abominable stench of mould and rotting flesh coming from this box... but you are almost certain that there is something edible inside. At least you hope so...",
      [Lang.FR]: "Une odeur abominable de moisi et de charogne émane de cette caisse... Mais vous êtes presque sûr(e) qu'elle contient un petit quelque chose de comestible. Du moins vous espérez.",
      [Lang.DE]: "Ein unerträglicher Verwesungsgestank kitzelt deine Nase als du die Kiste anfasst. Du bist dir fast sicher, dass sie etwas Essbares enthält. Du hoffst es zumindest.",
      [Lang.ES]: "Un horrible olor a comida descompuesta sale de esa caja... Pero estás casi seguro de que aún queda algo comestible..."
    },
    categories: [ItemCategory.Food],
    icon: "item_chest_food",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.34
    },
    openableBy: [
      ItemId.CHAIR_BASIC,
      ItemId.PC,
      ItemId.WRENCH,
      ItemId.CUTTER,
      ItemId.BONE,
      ItemId.CUTCUT,
      ItemId.SMALL_KNIFE,
      ItemId.CHAIN,
      ItemId.KNIFE,
      ItemId.STAFF,
      ItemId.CAN_OPENER,
      ItemId.SCREW,
      ItemId.SWISS_KNIFE,
      ItemId.HURLING_STICK
    ],
  },
  [ItemId.FOOD_BAG]: {
    id: ItemId.FOOD_BAG,
    numericalId: 118,
    name: {
      [Lang.EN]: "Doggy Bag",
      [Lang.FR]: "Doggy-bag",
      [Lang.DE]: "Doggybag",
      [Lang.ES]: "Doggy-bag"
    },
    description: {
      [Lang.EN]: "An old, greasy paper bag which must contain something to eat... It does smell horrific though...",
      [Lang.FR]: "Un vieux sac tout graisseux en papier qui doit bien contenir quelque chose à manger… Notez qu'il sent mauvais.",
      [Lang.DE]: "Eine fettverschmierte alte Papiertüte, in der wohl irgendetwas zum Essen drin ist... Sie riecht aber schlecht.",
      [Lang.ES]: "Una vieja bolsa de papel con restos de comida enmohecida y maloliente..."
    },
    categories: [ItemCategory.Food],
    icon: "item_food_bag",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "food_bar2_#00",
            odds: 15
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "food_chick_#00",
            odds: 13
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "food_biscuit_#00",
            odds: 13
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "food_pims_#00",
            odds: 13
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "food_bar3_#00",
            odds: 12
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "food_tarte_#00",
            odds: 12
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "food_bar1_#00",
            odds: 11
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "food_sandw_#00",
            odds: 11
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 4.29
    },
  },
  [ItemId.FOOD_BAR1]: {
    id: ItemId.FOOD_BAR1,
    numericalId: 119,
    name: {
      [Lang.EN]: "Packet of Soft Crisps",
      [Lang.FR]: "Paquet de chips molles",
      [Lang.DE]: "Tüte mit labbrigen Chips",
      [Lang.ES]: "Bolsa de papas fritas rancias"
    },
    description: {
      [Lang.EN]: "The crisps are soft and taste like dry paper, but let's not be fussy... a meal is a meal.",
      [Lang.FR]: "Les chips de ce paquet sont molles et ont un goût de papier séché, mais on ne va pas faire le difficile... Un repas est un repas.",
      [Lang.DE]: "Die Kartoffelchips sind total weich und schmecken nach trockenem Papier. Du hast aber keine Wahl: Essen ist Essen.",
      [Lang.ES]: "Han perdido su textura crujiente y parecen más pedazos de cartón húmedo, pero no vas a hacerte el difícil... Comida es comida."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_food_bar1",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
  },
  [ItemId.FOOD_BAR2]: {
    id: ItemId.FOOD_BAR2,
    numericalId: 120,
    name: {
      [Lang.EN]: "Mouldy Twinkies",
      [Lang.FR]: "Napolitains moisis",
      [Lang.DE]: "Verschimmelte Waffeln",
      [Lang.ES]: "Bizcochos enmohecidos"
    },
    description: {
      [Lang.EN]: "A chocolate and vanilla cake wrapped in plastic. If you shake the packet, it seems like something has liquified inside...",
      [Lang.FR]: "Une pâtisserie sous plastique : chocolat-vanille. Si vous agitez l'emballage, vous avez l'impression que quelque chose s'est liquéfié là-dedans...",
      [Lang.DE]: "Ein leckeres in Alupapier eingepacktes Gebäck. Als Geschmack wird \"Vanille-Schoko\" angegeben. Wenn du es schüttelst hört es sich an, als ob da auch eine Flüssigkeit drin wäre...",
      [Lang.ES]: "La bolsita de plástico está inflada, ¿estará tan descompuesto que ya emana gases...?"
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_food_bar2",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
  },
  [ItemId.FOOD_BAR3]: {
    id: ItemId.FOOD_BAR3,
    numericalId: 121,
    name: {
      [Lang.EN]: "Dried Chewing Gum",
      [Lang.FR]: "Chewing-gums séchés",
      [Lang.DE]: "Trockene Kaugummis",
      [Lang.ES]: "Chicles secos"
    },
    description: {
      [Lang.EN]: "A fistful of dried chewing gum. Theoretically, this should be chewed, but not swallowed. However, in this hole, you're in no position to be picky!",
      [Lang.FR]: "Une pleine poignée de chewing-gums tout séchés. En théorie, ça se mâche, mais ça ne s'avale pas. Seulement, dans cet enfer, vous n'êtes pas en position de faire le ou la difficile...",
      [Lang.DE]: "Eine handvoll staubtrockener Kaugummis. Normalerweise werden sie gekaut und nicht geschluckt, aber du solltest besser nicht rumnörgeln ... viel anderes gibt es nicht.",
      [Lang.ES]: "Un puñado de chicles duros como piedras. En teoría deben poder masticarse aún, pero no tragarse. Piensa que en esta situación no estamos para lujos..."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_food_bar3",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
  },
  [ItemId.FOOD_BISCUIT]: {
    id: ItemId.FOOD_BISCUIT,
    numericalId: 122,
    name: {
      [Lang.EN]: "Rancid Shortbread Pack",
      [Lang.FR]: "Petits beurres rances",
      [Lang.DE]: "Ranzige Butterkekse",
      [Lang.ES]: "Galletas rancias"
    },
    description: {
      [Lang.EN]: "They're dry and even look stale. You'd give anything to get rid of the taste now...",
      [Lang.FR]: "C'est sec et ça a un aspect rassi. Vous donneriez n'importe quoi pour faire passer le gout de ces biscuits…",
      [Lang.DE]: "Sie sehen trocken aus. Was würdest du nicht alles geben, um diese Kekse nicht schmecken zu müssen...",
      [Lang.ES]: "Tiene además manchas verdes muy oscuras y están algo ácidas. Afortunadamente son de la marca que solías comer de niño..."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_food_biscuit",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
  },
  [ItemId.FOOD_CHICK]: {
    id: ItemId.FOOD_CHICK,
    numericalId: 123,
    name: {
      [Lang.EN]: "Half-eaten Chicken Wings",
      [Lang.FR]: "Ailerons de poulet entamés",
      [Lang.DE]: "Angebissene Hähnchenflügel",
      [Lang.ES]: "Alitas de pollo mordidas"
    },
    description: {
      [Lang.EN]: "Two chicken wings that someone started eating then threw away... Hmmm...",
      [Lang.FR]: "Deux ailerons de poulet que quelqu'un a déja commencé à manger avant de les jeter… Hmmm …",
      [Lang.DE]: "Zwei Hähnchenflügel, die schon jemand vor dir angebissen hat, bevor er sie weggeworfen hat... Hmmm...",
      [Lang.ES]: "Alguien les dio un mordisco y decidió tirarlas... Hmmm…"
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_food_chick",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
  },
  [ItemId.FOOD_PIMS]: {
    id: ItemId.FOOD_PIMS,
    numericalId: 124,
    name: {
      [Lang.EN]: "Out-of-Date Jaffa Cakes",
      [Lang.FR]: "Pim's périmé",
      [Lang.DE]: "Abgelaufene Pim's Kekse",
      [Lang.ES]: "Chocolate vencido"
    },
    description: {
      [Lang.EN]: "A handful of biscuits filled with jam... of some description... maybe some kind of fruit. It tastes kinda meaty though.",
      [Lang.FR]: "Une poignée de biscuits fourrés à la confiture de… en fait vous l'ignorez… Peut-être un fruit. Mais ça a un gout de viande maintenant.",
      [Lang.DE]: "Eine Handvoll Kekse, die mit ... schwer zu sagen, was es ist... gefüllt sind.",
      [Lang.ES]: "Lleva en la etiqueta el logotipo de España 82. Aunque su olor te pique la nariz, un chocolate aquí es un manjar..."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_food_pims",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
  },
  [ItemId.FOOD_TARTE]: {
    id: ItemId.FOOD_TARTE,
    numericalId: 125,
    name: {
      [Lang.EN]: "Stale Tart",
      [Lang.FR]: "Biscuit fade",
      [Lang.DE]: "Fades Gebäck",
      [Lang.ES]: "Tarta descompuesta"
    },
    description: {
      [Lang.EN]: "A really strong-smelling tart... To be avoided as a rule, but in this case you just think nice thoughts and tuck in.",
      [Lang.FR]: "Une tartelette qui sent vraiment fort… Pensez à quelque chose d'agréable pendant que vous l'avalerez.",
      [Lang.DE]: "Ein streng riechendes Törtchen... Denk einfach an etwas Leckeres.",
      [Lang.ES]: "Este postre barato ni siquiera tuvo buen sabor estando fresco... Hoy su olor y su aspecto son aún más desagradables."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_food_tarte",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
  },
  [ItemId.FOOD_SANDW]: {
    id: ItemId.FOOD_SANDW,
    numericalId: 126,
    name: {
      [Lang.EN]: "Mouldy Ham Sandwich",
      [Lang.FR]: "Jambon-beurre moisi",
      [Lang.DE]: "Verschimmelte Stulle",
      [Lang.ES]: "Sandwich misterioso"
    },
    description: {
      [Lang.EN]: "Part of a sandwich which tastes nothing like you had expected, or hoped...",
      [Lang.FR]: "Un reste de casse-croute qui n'a d'appétissant que son souvenir...",
      [Lang.DE]: "Der Rest eines Schinkenbrötchens. Die grünlich-weiß verschimmelten Schinkenecken lassen sich kurzerhand unter dem Brot verstecken und dann nichts wie runter damit...",
      [Lang.ES]: "Está muy viejo. No se sabe si lo que tiene dentro son los restos de una hamburguesa o los de una rata que murió allí dentro... ¿Eso blanco, es mayonesa?"
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_food_sandw",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
  },
  [ItemId.FOOD_NOODLES]: {
    id: ItemId.FOOD_NOODLES,
    numericalId: 127,
    name: {
      [Lang.EN]: "Chinese Noodles",
      [Lang.FR]: "Nouilles chinoises",
      [Lang.DE]: "Chinesische Nudeln",
      [Lang.ES]: "Tallarines chinos"
    },
    description: {
      [Lang.EN]: "Despite years spent in the desert, these chinese noodles still look and taste exactly the same.",
      [Lang.FR]: "Malgré les années passées dans le désert, ces nouilles chinoises ont toujours le même gout et le même aspect.",
      [Lang.DE]: "Trotz all der Jahre, die sie wahrscheinlich schon in dieser Wüste liegen, haben diese Nudeln ihr Aussehen und ihren Geschmack behalten. Erstaunlich.",
      [Lang.ES]: "A pesar del tiempo, este platillo ha mantenido su aspecto, sabor y textura. ¡No cabe duda, la cocina china es la mejor!"
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_food_noodles",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.69
    },
  },
  [ItemId.SPICES]: {
    id: ItemId.SPICES,
    numericalId: 128,
    name: {
      [Lang.EN]: "Strong Spices",
      [Lang.FR]: "Epices fortes",
      [Lang.DE]: "Starke Gewürze",
      [Lang.ES]: "Salsa picante"
    },
    description: {
      [Lang.EN]: "A small sachet of mixed spices...",
      [Lang.FR]: "Un petit sachet d'épices...",
      [Lang.DE]: "Ein Säckchen mit starken Gewürzen ...",
      [Lang.ES]: "¡Nadie puede vivir sin esto!"
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_spices",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.43
    },
  },
  [ItemId.FOOD_NOODLES_HOT]: {
    id: ItemId.FOOD_NOODLES_HOT,
    numericalId: 129,
    name: {
      [Lang.EN]: "Spicy Chinese Noodles",
      [Lang.FR]: "Nouilles chinoises épicées",
      [Lang.DE]: "Gewürzte chinesische Nudeln",
      [Lang.ES]: "Tallarines chinos picantes"
    },
    description: {
      [Lang.EN]: "Heavily seasoned chinese noodles! This makes a pleasant change from eating things that are decomposing.",
      [Lang.FR]: "Des nouilles copieusement assaisonnées ! Hmm, ça va vous changer de vos repas à base de chose en décomposition.",
      [Lang.DE]: "Richtig gut gewürzte chinesische Nudeln! Das ist mal'ne Abwechslung von dem sonstigen verschimmelten Fraß.",
      [Lang.ES]: "Mmmmm ¡La comida descompuesta es para los pobres!"
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_food_noodles_hot",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 7
          }
        ]
      }
    ],
  },
  [ItemId.CARDS]: {
    id: ItemId.CARDS,
    numericalId: 130,
    name: {
      [Lang.EN]: "Incomplete Deck of Cards",
      [Lang.FR]: "Jeu de cartes incomplet",
      [Lang.DE]: "Unvollständiges Kartenspiel",
      [Lang.ES]: "Juego de cartas incompleto"
    },
    description: {
      [Lang.EN]: "What should be a 54 card deck is, well, not. The missing cards don't stop you playing with them though, because every moment of enjoyment is to be treasured in this hellhole... Go big or go broke !",
      [Lang.FR]: "Un jeu de 54 cartes tout écorné auquel il manque quelques cartes… Rien qui vous empêcherait de jouer avec, tant les moments de détente sont rares dans ce monde… Voyez grand ou faites faillite !",
      [Lang.DE]: "Ein Kartenset mit 54 abgegriffenen Karten, die ein paar Eselsohren haben... Du solltest gleich mal eine Runde zocken, denn oft wirst du hier nicht zum Spielen kommen. Groß rauskommen oder Pleite gehen!",
      [Lang.ES]: "A pesar de la ausencia de algunas cartas, te ayudará a distraerte en el pueblo... ¡Hazlo a lo grande o arruinate!"
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.GuardWeapon],
    icon: "item_cards",
    decoration: 0,
    heavy: false,
    watchPoints: -10,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 1,
            odds: 11
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "terror",
            odds: 2
          }
        ]
      }
    ],
  },
  [ItemId.GAME_BOX]: {
    id: ItemId.GAME_BOX,
    numericalId: 131,
    name: {
      [Lang.EN]: "Box of Games",
      [Lang.FR]: "Boîte de jeu",
      [Lang.DE]: "Gesellschaftsspiel",
      [Lang.ES]: "Caja de juegos"
    },
    description: {
      [Lang.EN]: "The box contains a game... probably !",
      [Lang.FR]: "Cette boîte contient un jeu quelconque... Chic. Une surprise.",
      [Lang.DE]: "Ein altes Spiel welches du noch nicht kennst. Wow!",
      [Lang.ES]: "Te servirá para entretenerte en medio de tanta desgracia, ¡claro que sí!"
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_game_box",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "dice_#00",
            odds: 50
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "cards_#00",
            odds: 50
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.17
    },
  },
  [ItemId.WATERGUN_OPT_PART]: {
    id: ItemId.WATERGUN_OPT_PART,
    numericalId: 132,
    name: {
      [Lang.EN]: "Aqua-Splash (incomplete)",
      [Lang.FR]: "Aqua-Splash (démonté)",
      [Lang.DE]: "Aqua-Splash (zerlegt)",
      [Lang.ES]: "Rifle de agua incompleto"
    },
    description: {
      [Lang.EN]: "A formidable weapon, but it needs a few more parts to get it working...",
      [Lang.FR]: "Une arme redoutable, mais il manque quelques morceaux pour qu'elle soit fonctionnelle...",
      [Lang.DE]: "Eine furchterregende Waffe, der nur ein paar Teile fehlen...",
      [Lang.ES]: "Un arma temible, pero le faltan algunas piezas para que funcione..."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_watergun_opt_part",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.VIBR_EMPTY]: {
    id: ItemId.VIBR_EMPTY,
    numericalId: 133,
    name: {
      [Lang.EN]: "Pocket Vibrator (incomplete)",
      [Lang.FR]: "Petit manche vibrant (déchargé)",
      [Lang.DE]: "Vibrator (entladen)",
      [Lang.ES]: "Pequeño vibrador (apagado)"
    },
    description: {
      [Lang.EN]: "It vibrates, tickles and titillates you and even makes you forget all your worries for a short while. (Requires 1 battery).",
      [Lang.FR]: "Il vibre, vous titille et vous chatouille et vous fait oublier tous vos soucis pendant quelques instants (nécessite 1 pile par utilisation).",
      [Lang.DE]: "Er vibriert und kitzelt dich am ganzen Körper und lässt dich für einen Augenblick all deine Sorgen vergessen (benötigt 1 Batterie).",
      [Lang.ES]: "Vibra, hace cosquillas y te hace olvidar tus problemas por unos instantes (necesita 1 pila)."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_vibr_empty",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.PILE }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "vibr_#00"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.17
    },
  },
  [ItemId.BONE_MEAT]: {
    id: ItemId.BONE_MEAT,
    numericalId: 134,
    name: {
      [Lang.EN]: "Meaty Bone",
      [Lang.FR]: "Os charnu",
      [Lang.DE]: "Knochen mit Fleisch",
      [Lang.ES]: "Hueso con carne"
    },
    description: {
      [Lang.EN]: "A bone still with some flesh on it... strange. It still seems fresh too. Maybe it's from an animal that was killed during the night...",
      [Lang.FR]: "Un os avec encore un peu de viande autour… Bizarre. Ça a l'air encore frais en plus. Peut-être un animal tué pendant la nuit ?",
      [Lang.DE]: "Ein Knochen, an dem noch Fleisch ist... Komisch, er riecht sogar noch frisch. Vielleicht stammt er von einem Tier, das letzte Nacht getötet wurde?",
      [Lang.ES]: "Qué raro, la carne parece fresca aún. ¿Será de un animal muerto anoche?"
    },
    info: {
      [Lang.EN]: "A citizen that dies in the desert (except from dehydration {{status:thirst2}}) will drop this item.",
      [Lang.FR]: "Un citoyen qui meurt dans le désert (sauf de déshydratation {{status:thirst2}}) laissera tomber cet objet.",
      [Lang.DE]: "Ein Bürger, der in der Wüste stirbt (außer an Dehydrierung {{status:thirst2}}), lässt diesen Gegenstand fallen.",
      [Lang.ES]: "Un ciudadano que muere en el desierto (excepto por deshidratación {{status:thirst2}}) dejará caer este objeto."
    },
    categories: [ItemCategory.Food, ItemCategory.GuardWeapon, ItemCategory.APSource],
    icon: "item_bone_meat",
    decoration: 0,
    heavy: false,
    watchPoints: 10,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_cannib_#00"
          },
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "bone_#00"
          },
          {
            type: ItemActionEffectType.Infect,
            odds: 50
          },
          {
            type: ItemActionEffectType.Ghoulify,
            odds: 3
          }
        ]
      },
      {
        type: ItemActionType.Eat,
        conditions: [
          ItemActionConditionEnum.Ghoul
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_cannib_#00"
          },
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "bone_#00"
          },
          {
            type: ItemActionEffectType.ReduceGhoulHunger,
            value: -10
          }
        ]
      }
    ],
  },
  [ItemId.BONE]: {
    id: ItemId.BONE,
    numericalId: 135,
    name: {
      [Lang.EN]: "Broken Human Bone",
      [Lang.FR]: "Os humain fêlé",
      [Lang.DE]: "Angeknackster menschlicher Knochen",
      [Lang.ES]: "Hueso humano"
    },
    description: {
      [Lang.EN]: "A dried bone (a tibia by the looks of it) which it seems that someone has been chewing recently... it should still be useful.",
      [Lang.FR]: "Un os (un tibia sans doute) tout séché que quelqu'un a rongé récemment semble-t-il… Ça doit pouvoir encore servir.",
      [Lang.DE]: "Ein trockener Knochen (wahrscheinlich ein Schienbein ), den jemand vor Kurzem abgenagt hat... Den kannst du bestimmt für etwas gebrauchen.",
      [Lang.ES]: "Una tibia, sin duda. Está todo roído. El zombie o quien se lo haya comido debe haber tenido mucha hambre... Para algo servirá."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon, ItemCategory.Breakable],
    icon: "item_bone",
    decoration: 0,
    heavy: false,
    watchPoints: 5,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 80
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
    opens: [
      ItemId.CHEST_FOOD,
      ItemId.CHEST_TOOLS
    ],
  },
  [ItemId.WOOD_BEAM]: {
    id: ItemId.WOOD_BEAM,
    numericalId: 136,
    name: {
      [Lang.EN]: "Patchwork Beam",
      [Lang.FR]: "Poutre rafistolée",
      [Lang.DE]: "Zusammengeschusterter Holzbalken",
      [Lang.ES]: "Viga reforzada"
    },
    description: {
      [Lang.EN]: "A relatively solid beam made from an assortment of scrap wood.",
      [Lang.FR]: "Un assemblage de bois qui forme une poutre de soutien relativement solide.",
      [Lang.DE]: "Notdürftig zusammengebundene Holzstücke, die einen relativ stabilen Stützbalken abgeben.",
      [Lang.ES]: "Varias piezas de madera unidas para ser muy resistentes."
    },
    categories: [ItemCategory.Resources],
    icon: "item_wood_beam",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 1.03
    },
  },
  [ItemId.METAL_BEAM]: {
    id: ItemId.METAL_BEAM,
    numericalId: 137,
    name: {
      [Lang.EN]: "Metal Support",
      [Lang.FR]: "Structures métalliques",
      [Lang.DE]: "Metallstruktur",
      [Lang.ES]: "Estructuras metálicas"
    },
    description: {
      [Lang.EN]: "Rudimentary crucible steel scaffolding made from the carburization of wrought iron.",
      [Lang.FR]: "Du métal assemblé pour former une structure de soutien.",
      [Lang.DE]: "Eine schnell zusammengebaute Metallstruktur, die ein gutes stützendes Bauteil abgibt.",
      [Lang.ES]: "Un sólido soporte para una construcción."
    },
    categories: [ItemCategory.Resources],
    icon: "item_metal_beam",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.52
    },
  },
  [ItemId.METAL_BAD]: {
    id: ItemId.METAL_BAD,
    numericalId: 138,
    name: {
      [Lang.EN]: "Scrap Metal",
      [Lang.FR]: "Débris métalliques",
      [Lang.DE]: "Metalltrümmer",
      [Lang.ES]: "Restos de metal"
    },
    description: {
      [Lang.EN]: "Rusty scraps of metal, wire mesh and screws... Nothing immediately useful, but if you take it back to the town maybe it can be recycled.",
      [Lang.FR]: "Des bouts de ferrailles rouillées, du grillage, des vis… Rien d'utilisable tel quel, il faudrait d'abord retaper ça en ville.",
      [Lang.DE]: "Ein paar verrostete Metallstangen, ein Gitter, ein paar Schrauben... Nichts, was du sofort benutzen könntest. Du musst es erst in der Stadt ein wenig bearbeiten.",
      [Lang.ES]: "Pedazos de metal oxidado, mallas, tornillos... Nada útil en ese estado, habrá que transformarlos en el taller."
    },
    categories: [ItemCategory.Resources],
    icon: "item_metal_bad",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.DepletedZone]: 37.5
    },
  },
  [ItemId.WOOD_BAD]: {
    id: ItemId.WOOD_BAD,
    numericalId: 139,
    name: {
      [Lang.EN]: "Rotting Log",
      [Lang.FR]: "Souche de bois pourrie",
      [Lang.DE]: "Verrotteter Baumstumpf",
      [Lang.ES]: "Tronco podrido"
    },
    description: {
      [Lang.EN]: "A decent-sized log covered in sticky mushrooms. It's no good for anything until it is cut properly in town...",
      [Lang.FR]: "Une grosse souche de bois couverte de champignons visqueux. On ne pourra sans doute rien en faire, à moins de la découper proprement en ville…",
      [Lang.DE]: "Ein großer Baumstumpf, der von schleimigen Pilzen bedeckt ist. Damit kannst du nichts anfangen, es sei denn, du schneidest ihn dir in der Stadt zurecht.",
      [Lang.ES]: "Un gran tronco cubierto por hongos. En su estado actual no es muy útil, a menos que sea cortado y trabajado en el pueblo..."
    },
    categories: [ItemCategory.Resources],
    icon: "item_wood_bad",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.DepletedZone]: 62.5
    },
  },
  [ItemId.SAW_TOOL]: {
    id: ItemId.SAW_TOOL,
    numericalId: 140,
    name: {
      [Lang.EN]: "Hacksaw",
      [Lang.FR]: "Scie à métaux",
      [Lang.DE]: "Metallsäge",
      [Lang.ES]: "Sierra de metal"
    },
    description: {
      [Lang.EN]: "Most of the teeth on this saw are bent, but it still does a decent job of cutting things up (the saw reduces the number of action points needed for any task at the workshop by 1 point. The saw must be carried in your backpack.)",
      [Lang.FR]: "Une scie dont les dents sont pour la plupart tordues, mais qui fera bien l'affaire pour couper des choses (la scie réduit de 1 PA le coût des transformations à l'atelier, vous devez la placer dans votre Sac à Dos).",
      [Lang.DE]: "Eine Säge, dessen Zacken größtenteils verbogen sind. Du kannst mit ihr aber noch verschiedene Sachen zerteilen (Die Säge verringert die Verarbeitungskosten in der Werkstatt um 1 AP. Dafür musst du sie in deinem Rucksack haben.",
      [Lang.ES]: "Tiene la mayoría de los dientes torcidos, pero servirá para cortar muchas cosas (reduce en 1 PA el costo de las transformaciones en el taller, debes colocarla en tu mochila)."
    },
    info: {
      [Lang.EN]: "Reduces the number of {{AP}} needed in the Workshop by 1 when in the rucksack (non stackable).",
      [Lang.FR]: "Réduit le nombre de {{AP}} nécessaires dans l'atelier de 1 lorsqu'elle est dans le sac à dos (non cumulable).",
      [Lang.DE]: "Reduziert die Anzahl der {{AP}}, die im Workshop benötigt werden, um 1, wenn sie im Rucksack ist (nicht stapelbar).",
      [Lang.ES]: "Reduce el número de {{AP}} necesarios en el taller en 1 cuando está en la mochila (no apilable)."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_saw_tool",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    opens: [
      ItemId.CAN,
      ItemId.CHEST_XL,
      ItemId.CATBOX
    ],
  },
  [ItemId.WOOD_LOG]: {
    id: ItemId.WOOD_LOG,
    numericalId: 141,
    name: {
      [Lang.EN]: "Quality Log",
      [Lang.FR]: "Bûche en bon état",
      [Lang.DE]: "Gut erhaltener Holzscheit",
      [Lang.ES]: "Leña en buen estado"
    },
    description: {
      [Lang.EN]: "A decent log which could be used as a stool. Look - it's better than nothing...",
      [Lang.FR]: "Une belle buche qui pourrait tout à fait servir de tabouret à la maison. Après tout… C'est mieux que rien.",
      [Lang.DE]: "Ein schöner Holzscheit, den du als Hocker für deine Einrichtung verwenden kannst. Was willst du mehr? Ist doch besser als nichts.",
      [Lang.ES]: "Un buen pedazo de madera que puede servir de taburete en tu casa. Después de todo, es mejor que nada."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_wood_log",
    decoration: 2,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.17
    },
  },
  [ItemId.ELECTRO_BOX]: {
    id: ItemId.ELECTRO_BOX,
    numericalId: 142,
    name: {
      [Lang.EN]: "Broken Electronic Device",
      [Lang.FR]: "Appareil électronique en panne",
      [Lang.DE]: "Defektes Elektrogerät",
      [Lang.ES]: "Aparato electrónico descompuesto"
    },
    description: {
      [Lang.EN]: "An old, unidentifiable household appliance. Maybe if you dismantle it you can find something useful?",
      [Lang.FR]: "Un vieil appareil électro-ménager impossible à identifier. Peut-être qu'en le démontant vous pourriez obtenir quelque chose ?",
      [Lang.DE]: "Ein uraltes Haushaltsgerät, von dem du aber nicht weißt, für welchen Zweck es bestimmt war. Vielleicht erhälst du ein paar nützliche Sachen wenn du es auseinanderbaust?",
      [Lang.ES]: "No se sabe ni para qué sirve, pero desarmándolo quizás puedas extraer algo útil."
    },
    categories: [ItemCategory.Resources],
    icon: "item_electro_box",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.77
    },
  },
  [ItemId.DECO_BOX]: {
    id: ItemId.DECO_BOX,
    numericalId: 143,
    name: {
      [Lang.EN]: "Flatpacked Furniture",
      [Lang.FR]: "Meuble en kit",
      [Lang.DE]: "Möbelpackung",
      [Lang.ES]: "Mueble para armar"
    },
    description: {
      [Lang.EN]: "A piece of furniture, as yet unassembled, which could well be anything...",
      [Lang.FR]: "Un meuble en pièces détachées, difficile à identifier...",
      [Lang.DE]: "Ein Möbelstück, das in seine Einzelteile zerlegt ist. Schwer zu sagen, was es ist...",
      [Lang.ES]: "Una caja con muchas piezas, no sabes lo que es..."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.GuardWeapon],
    icon: "item_deco_box",
    decoration: 0,
    heavy: true,
    watchPoints: 15,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 1.12
    },
  },
  [ItemId.SAW_TOOL_PART]: {
    id: ItemId.SAW_TOOL_PART,
    numericalId: 144,
    name: {
      [Lang.EN]: "Damaged Hacksaw",
      [Lang.FR]: "Scie à métaux abimée",
      [Lang.DE]: "Beschädigte Metallsäge",
      [Lang.ES]: "Sierra de metal en mal estado"
    },
    description: {
      [Lang.EN]: "This saw could be very useful if it was patched up...",
      [Lang.FR]: "Une scie qui pourrait être pratique, si elle était rafistolée.",
      [Lang.DE]: "Diese Säge könnte nützlich sein, wenn du es schaffst, sie zu reparieren.",
      [Lang.ES]: "Una sierra siempre ayuda. Necesitas repararla."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_saw_tool_part",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.MECANISM]: {
    id: ItemId.MECANISM,
    numericalId: 145,
    name: {
      [Lang.EN]: "Mechanism",
      [Lang.FR]: "Mécanisme",
      [Lang.DE]: "Getriebe",
      [Lang.ES]: "Mecanismo"
    },
    description: {
      [Lang.EN]: "This mechanism looks like it is a part of something much larger, like a machine or some kind of vehicle... It's pretty much useless on its own.",
      [Lang.FR]: "Ce mécanisme devait faire partie d'un ensemble plus gros : une machine ou un véhicule quelconque... Il ne sert plus à rien tel quel.",
      [Lang.DE]: "Dieses Getriebe war wohl mal Teil einer größeren Maschine oder eines Fahrzeugs... In dieser Form kannst du aber nichts mehr damit anfangen.",
      [Lang.ES]: "Esta cosa debió formar parte de algo más grande: una máquina o un vehículo... Así no sirve de nada."
    },
    categories: [ItemCategory.Resources],
    icon: "item_mecanism",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.86
    },
  },
  [ItemId.TRESTLE]: {
    id: ItemId.TRESTLE,
    numericalId: 146,
    name: {
      [Lang.EN]: "Trestle",
      [Lang.FR]: "Tréteau",
      [Lang.DE]: "Holzbock",
      [Lang.ES]: "Caballete"
    },
    description: {
      [Lang.EN]: "A pretty solid trestle which can be used to improve your home defences or those of the town.",
      [Lang.FR]: "Un tréteau relativement solide qui devrait s'avérer utile pour consolider vos défenses personnelles ou celles de la ville.",
      [Lang.DE]: "Ein relativ solider Holzbock, den du zweifelsohne für deine persönliche Verteidigung oder für die Stadtverteidigung gebrauchen kannst.",
      [Lang.ES]: "Puede servir muy bien para sostener las defensas de tu casa o del pueblo."
    },
    categories: [ItemCategory.Defences, ItemCategory.GuardWeapon, ItemCategory.Decoration, ItemCategory.CampingBoost],
    icon: "item_trestle",
    decoration: 1,
    heavy: true,
    watchPoints: 15,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: -1
          },
          {
            type: ItemActionEffectType.CampingChances,
            value: "+9%"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.69
    },
  },
  [ItemId.TABLE]: {
    id: ItemId.TABLE,
    numericalId: 147,
    name: {
      [Lang.EN]: "Järpen Table",
      [Lang.FR]: "Table Järpen",
      [Lang.DE]: "Järpen-Tisch",
      [Lang.ES]: "Mesa Järpen"
    },
    description: {
      [Lang.EN]: "Held together entirely with elastic bands and wedges of wood, this table would look great in your \"living room\". Also, if you place it upright, it could even save your life...",
      [Lang.FR]: "Entièrement assemblée avec des élastiques et des picots de bois, cette table fera sûrement très joli dans votre \"salon\". Et mise à la verticale, elle pourrait bien aussi vous sauver la vie, un soir.",
      [Lang.DE]: "Der Tisch lässt sich ganz leicht mit Gummizügen und Holzstiften zusammenbauen. In deinem Wohnzimmer wird er ein richtiger Hingucker sein. Und wenn du ihn senkrecht stellst, kann er dir eines Nachts vielleicht sogar das Leben retten.",
      [Lang.ES]: "Armada con elásticos y pedazos de madera, irá muy bien en el \"salón\" de tu casa. Y colocada verticalmente podría salvarte la vida una de estas noches."
    },
    categories: [ItemCategory.Defences, ItemCategory.GuardWeapon, ItemCategory.Decoration, ItemCategory.CampingBoost],
    icon: "item_table",
    decoration: 3,
    heavy: true,
    watchPoints: 15,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: -1
          },
          {
            type: ItemActionEffectType.CampingChances,
            value: "+9%"
          }
        ]
      }
    ],
  },
  [ItemId.WATER_CLEANER]: {
    id: ItemId.WATER_CLEANER,
    numericalId: 148,
    name: {
      [Lang.EN]: "Water Purifying Tablets",
      [Lang.FR]: "Micropur effervescent",
      [Lang.DE]: "Micropur Brausetablette",
      [Lang.ES]: "Desinfectante efervescente"
    },
    description: {
      [Lang.EN]: "When added to water, these disinfectant capsules make water safe to drink. These were previously used for cleaning toilets. You start to imagine how the water is going to taste afterwards... (NOTE: The yield of this product is much lower than that of the Industrial Purifier).",
      [Lang.FR]: "Une capsule de produit désinfectant à mettre dans de l'eau pour la nettoyer. Avant, c'était utilisé pour récurer les toilettes. Vous imaginez aisément le goût de l'eau après... (ATTENTION: le rendement de ce produit est faible en comparaison d'un Purificateur industriel)",
      [Lang.DE]: "Eine desinfizierende Brausetablette, mit der man Wasser reinigen kann. Eigentlich handelt es sich um ein Reinigungstab für Toiletten. Den Geschmack kannst du dir ja ausmalen... (ACHTUNG: Die Ausbeute dieses Produkts ist im Vergleich zum industriellen Reiniger wesentlich geringer.)",
      [Lang.ES]: "Purifica el agua. Antes se usaba para desinfectar los inodoros, ya sabes el sabor que tendrá el agua... (Atención: El rendimiento de este objeto es inferior al de un Purificador Industrial)"
    },
    categories: [ItemCategory.Pharmacy],
    icon: "item_water_cleaner",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.69
    },
  },
  [ItemId.VEGETABLE_TASTY]: {
    id: ItemId.VEGETABLE_TASTY,
    numericalId: 149,
    name: {
      [Lang.EN]: "Intestine Melon",
      [Lang.FR]: "Melon d'intestin",
      [Lang.DE]: "Darmmelone",
      [Lang.ES]: "Melón de intestino"
    },
    description: {
      [Lang.EN]: "Normally, the intestine melon grows in the stomachs of corpses, near the large colon. However, it seems that your vegetable garden is doing surprisingly well... maybe you built it on the site of an ancient Indian graveyard?",
      [Lang.FR]: "Habituellement le Melon d'intestin pousse dans le ventre des cadavres, au niveau du gros colon. Il semblerait pourtant que votre potager en ait donné de très jolis… Peut-être avez-vous cultivé sur un vieux cimetière indien ?",
      [Lang.DE]: "Normalerweise \"wächst\" die Darmmelone im Grimmdarm von Kadavern, doch es sieht so aus, als ob dein Gemüsebeet dir ein paar hübsche Exemplare beschert hätte. Kann es vielleicht sein, dass dein Gemüsebeet auf einem alten Indianerfriedhof liegt?",
      [Lang.ES]: "Se sabe que crece en el intestino de los cadáveres, cerca del colon. Sin embargo, tu huerta presenta varios de estos frutos... ¿Los habrás cultivado en algún antiguo cementerio?"
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_vegetable_tasty",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 7
          }
        ]
      }
    ],
  },
  [ItemId.POWDER]: {
    id: ItemId.POWDER,
    numericalId: 150,
    name: {
      [Lang.EN]: "Flash Powder",
      [Lang.FR]: "Poudre-comète brute",
      [Lang.DE]: "Raketenpulver",
      [Lang.ES]: "Pólvora brillante"
    },
    description: {
      [Lang.EN]: "This firework powder makes a good distraction if it's used correctly...",
      [Lang.FR]: "Cette poudre de feux d'artifice pourrait faire une bonne distraction, si elle était utilisée correctement...",
      [Lang.DE]: "Dieses Feuerwerkraketenpulver könnte als Ablenkung dienen, wenn du es korrekt verwendest ...",
      [Lang.ES]: "Esta pólvora de fuegos artificiales podría brindarte un buen espectáculo, si es usada correctamente..."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_powder",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 1.03
    },
  },
  [ItemId.FLASH]: {
    id: ItemId.FLASH,
    numericalId: 151,
    name: {
      [Lang.EN]: "Flash Grenade",
      [Lang.FR]: "Bombe Pulvérine",
      [Lang.DE]: "Schießpulverbombe",
      [Lang.ES]: "Bomba de carnaval"
    },
    description: {
      [Lang.EN]: "This homemade grenade will distract nearby zombies and make them concentrate on something other than your oh-so-tasty flesh... giving you precious seconds to do your thing... running away probably.",
      [Lang.FR]: "Cette grenade artisanale permet d'attirer l'attention des zombies dans le secteur sur autre chose que votre belle chair appétissante... Vous avez alors quelques instants pour profiter de cette distraction.",
      [Lang.DE]: "Diese improvisierte Granate ermöglicht dir, die Zombies in einer Zone abzulenken. Nutze die sich bietende Gelegenheit um dich zu verdrücken.",
      [Lang.ES]: "Este simpático artefacto puede servirte para desviar la atención de los zombies hacia otra cosa que no sea tus queridos huesos... Tendrás unos instantes para aprovechar su distracción."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.GuardWeapon],
    icon: "item_flash",
    decoration: 0,
    heavy: false,
    watchPoints: 5,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetEscapeTime,
            value: 300
          }
        ]
      }
    ],
  },
  [ItemId.TEDDY]: {
    id: ItemId.TEDDY,
    numericalId: 152,
    name: {
      [Lang.EN]: "Teddy Bear",
      [Lang.FR]: "Teddy n'Ours",
      [Lang.DE]: "Teddybär",
      [Lang.ES]: "Osito cariñosito"
    },
    description: {
      [Lang.EN]: "A small plush teddy bear which would have been a child's pride and joy... once upon a time...",
      [Lang.FR]: "Un petit doudou en peluche qui a dû faire le bonheur d'un enfant… Un jour…",
      [Lang.DE]: "Ein kleines Stoffkuscheltier, das einem Kind vor langer Zeit viel Freude bereitet hat...",
      [Lang.ES]: "Un peluche que habrá dado mucha felicidad a un niño... o tal vez no."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration],
    icon: "item_teddy",
    decoration: 8,
    heavy: false,
    watchPoints: -15,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "terror",
            odds: 30
          }
        ]
      }
    ],
  },
  [ItemId.WOOD_PLATE_PART]: {
    id: ItemId.WOOD_PLATE_PART,
    numericalId: 153,
    name: {
      [Lang.EN]: "Crate Lid",
      [Lang.FR]: "Morceau de caisse",
      [Lang.DE]: "Holzkistendeckel",
      [Lang.ES]: "Pedazo de caja"
    },
    description: {
      [Lang.EN]: "This was formerly used to seal a large crate. Nothing complicated, just some old planks nailed together. If you can patch it up, it could be very useful for the town's defences.",
      [Lang.FR]: "Un vieil assemblage de planches qui était utilisé pour fermer une grosse caisse, autrefois. Ça pourrait bien servir de défense, si seulement vous trouviez de quoi le consolider.",
      [Lang.DE]: "Eine lose Ansammlung von Brettern, die früher wahrscheinlich einen Holzdeckel formten. Du könntest ihn gut für die Verteidigung gebrauchen, allerdings brauchst du etwas, um die Bretter zu fixieren.",
      [Lang.ES]: "Una vieja parrilla de tablas que servía para tapar una gran caja. Podría serte útil como defensa si encontrases algo para reforzarla."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_wood_plate_part",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 1.37
    },
  },
  [ItemId.WOOD_PLATE]: {
    id: ItemId.WOOD_PLATE,
    numericalId: 154,
    name: {
      [Lang.EN]: "Solid Wooden Board",
      [Lang.FR]: "Plaque de bois solide",
      [Lang.DE]: "Solide Holzplatte",
      [Lang.ES]: "Plancha de madera"
    },
    description: {
      [Lang.EN]: "This large crate lid is just the thing to barricade yourself in your home or to help keep the undead outside the town...",
      [Lang.FR]: "Ce gros couvercle de caisse fera bien l'affaire pour bloquer une fenêtre ou une porte chez vous ou en ville...",
      [Lang.DE]: "Dieser große Kistendeckel könnte dir gute Dienste leisten, um ein Fenster oder eine Tür bei dir daheim zu verriegeln...",
      [Lang.ES]: "Está muy sólida. Protegerá alguna ventana o puerta de tu casa..."
    },
    categories: [ItemCategory.Defences, ItemCategory.CampingBoost],
    icon: "item_wood_plate",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: -1
          },
          {
            type: ItemActionEffectType.CampingChances,
            value: "+9%"
          }
        ]
      }
    ],
  },
  [ItemId.MONEY]: {
    id: ItemId.MONEY,
    numericalId: 155,
    name: {
      [Lang.EN]: "Wad of Cash",
      [Lang.FR]: "Liasse de billets",
      [Lang.DE]: "Geldbündel",
      [Lang.ES]: "Fajo de billetes"
    },
    description: {
      [Lang.EN]: "A wad of dyed paper and some copper disks that formerly served as a currency of sorts. It may feel good to have America's deficit in your sky rocket but anything you can't eat or shoot up is pretty much worthless now...",
      [Lang.FR]: "Une liasse de papiers teintés et quelques rondelles de cuivre qui servaient autrefois de monnaie d'échange. Aujourd'hui, tout ce qui ne se mange pas ou ne peut pas s'injecter dans le sang n'a aucune véritable valeur...",
      [Lang.DE]: "Ein bedrucktes Bündel Papierscheine und ein paar Kupferstücke. Beides diente früher mal als Währung, doch hier ist es wertlos. Alles, was du nicht essen oder dir ins Blut spritzen kannst ist uninteressant...",
      [Lang.ES]: "Un montón de papelitos con números y dibujos impresos, que alguna vez sirvieron como salario. Hoy, todo lo que no se come o no te protege no vale nada..."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_money",
    decoration: 7,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.REPAIR_KIT_PART_RAW]: {
    id: ItemId.REPAIR_KIT_PART_RAW,
    numericalId: 156,
    name: {
      [Lang.EN]: "Tool Bag",
      [Lang.FR]: "Outils en vrac",
      [Lang.DE]: "Loses Werkzeug",
      [Lang.ES]: "Herramientas sueltas"
    },
    description: {
      [Lang.EN]: "A bag of assorted tools. Some are missing a handle, some need re-assembled... They really need some attention if you want to use them.",
      [Lang.FR]: "Un paquet d'outils en vrac, auxquels il manque parfois un manche par ci, une vis de serrage par là... Il faudrait les retaper sérieusement pour pouvoir les utiliser.",
      [Lang.DE]: "Eine Tasche mit verschiedenen Werkzeugen, denen hier und da ein Griff oder eine Schraube fehlt. Du müsstest es reparieren, wenn du es ernsthaft gebrauchen willst.",
      [Lang.ES]: "Herramientas diversas, a las que les falta siempre algo: un mango, un tornillo... Habría que repararlas en el taller para que sean útiles."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_repair_kit_part_raw",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.26
    },
  },
  [ItemId.RADIUS_MK2_PART]: {
    id: ItemId.RADIUS_MK2_PART,
    numericalId: 157,
    name: {
      [Lang.EN]: "Radius Mark II (incomplete)",
      [Lang.FR]: "Radius Mark II (déchargé)",
      [Lang.DE]: "Radius Mark II (entladen)",
      [Lang.ES]: "Radius Mark II descargado"
    },
    description: {
      [Lang.EN]: "The Radius Mark II beacon is a device which has been cobbled together from the limited equipment available that detects any creatures within a given area. Some say it causes cancer and kills brain cells, but you won't live long enough for that to be a concern.",
      [Lang.FR]: "La balise Radius Mark II est un appareil très rustique bricolé avec les moyens du bord qui permet de détecter la présence de créatures dans les environs. On raconte qu'il donne le cancer et grille les neurones, mais vous ne vivrez pas assez longtemps pour que cela soit un véritable problème. Et puis de toute façon, il lui manque une pile.",
      [Lang.DE]: "Der Radar-Marker 'Radius Mark II' ist ein fantasievoll zusammengeschraubtes Gerät, das dir ermöglicht, Lebewesen in deiner Umgebung ausfindig zu machen. Es wird behauptet, dass er Krebs verursache und Gehirnzellen irreparabel schädige, doch das kann dir egal sein, da du eh nicht lang genug leben wirst... und überhaupt: Um ihn zu benutzen brauchst du erstmal eine Batterie.",
      [Lang.ES]: "El transmisor Radius Mark II es un aparato arcaico pero eficaz para detectar la presencia de zombies en los alrededores. Se dice que da cáncer y que quema las neuronas si se usa por mucho tiempo, pero como tu vida no será muy larga no hay problema. Y de todos modos le hacen falta pilas."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_radius_mk2_part",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.PILE }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "radius_mk2_#00"
          }
        ]
      }
    ],
  },
  [ItemId.RADIUS_MK2]: {
    id: ItemId.RADIUS_MK2,
    numericalId: 158,
    name: {
      [Lang.EN]: "Radius Mark II",
      [Lang.FR]: "Radius Mark II",
      [Lang.DE]: "Radius Mark II",
      [Lang.ES]: "Radius Mark II"
    },
    description: {
      [Lang.EN]: "The Radius Mark II Radar Beacon is a device which has been cobbled together from the limited equipment available which detects any creatures withing a given area. Some say it causes cancer and kills brain cells, but you won't live long enough for that to be a concern.",
      [Lang.FR]: "La balise Radius Mark II est un appareil très rustique bricolé avec les moyens du bord qui permet de détecter la présence de créatures dans les environs. On raconte qu'il donne le cancer et grille les neurones, mais vous ne vivrez pas assez longtemps pour que cela soit un véritable problème.",
      [Lang.DE]: "Der Radar-Marker 'Radius Mark II' ist ein fantasievoll zusammengeschraubtes Gerät, das dir ermöglicht, Lebewesen in deiner Umgebung ausfindig zu machen. Es wird behauptet, dass er Krebs verursache und Gehirnzellen irreparabel schädige, doch das kann dir egal sein, da du eh nicht lang genug leben wirst...",
      [Lang.ES]: "El transmisor Radius Mark II es un aparato arcaico pero eficaz para detectar la presencia de zombies en los alrededores. Se dice que da cáncer y que quema las neuronas si se usa por mucho tiempo, pero como tu vida no será muy larga no hay problema."
    },
    info: {
      [Lang.EN]: "Reveals the 8 zones surrounding your current location.",
      [Lang.FR]: "Révèle les 8 zones entourant votre position actuelle.",
      [Lang.DE]: "Enthüllt die 8 Zonen um Ihren aktuellen Standort.",
      [Lang.ES]: "Revela las 8 zonas que rodean tu ubicación actual."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_radius_mk2",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "radius_mk2_part_#00",
            odds: 33
          }
        ]
      }
    ],
  },
  [ItemId.REPAIR_ONE]: {
    id: ItemId.REPAIR_ONE,
    numericalId: 159,
    name: {
      [Lang.EN]: "Kwik-fix",
      [Lang.FR]: "Brico'Facile",
      [Lang.DE]: "Reparatur Fix",
      [Lang.ES]: "Repara-fácil"
    },
    description: {
      [Lang.EN]: "Kwik-Fix is a small repair kit which can be used to repair anything and everything. It contains some basic tools, spare plastic parts and \"DIY for beginners\" printed in 7 languages.",
      [Lang.FR]: "Un petit kit à usage unique pour réparer tout et n'importe quoi. Il contient quelques outils basiques, des pièces plastique de recharge et un guide du petit bricoleur imprimé en 7 langues.",
      [Lang.DE]: "'Reparatur Fix' ist ein kleines Reparaturkit für den einmaligen Gebrauch, mit dem du fast alles richten kannst. Es enthält das übliche Grundwerkzeug, ein paar Plastikersatzteile und eine Do-it-yourself-Anleitung in sieben Sprachen.",
      [Lang.ES]: "Un pequeño kit de un solo uso que permite reparar cualquier cosa. Contiene herramientas básicas, piezas de repuesto y un manual en 7 idiomas."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_repair_one",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_repair_#00"
          },
          {
            type: ItemActionEffectType.AP,
            value: -1
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.77,
      [DropLocation.Trash]: 0.08
    },
  },
  [ItemId.ENGINE_PART]: {
    id: ItemId.ENGINE_PART,
    numericalId: 160,
    name: {
      [Lang.EN]: "Engine (incomplete)",
      [Lang.FR]: "Moteur incomplet",
      [Lang.DE]: "Unvollständiger Motor",
      [Lang.ES]: "Motor incompleto"
    },
    description: {
      [Lang.EN]: "It's a small engine of some sort, covered in splashes of burnt oil and other unidentified substances. However, it's pretty heavy.",
      [Lang.FR]: "C'est un genre de petit moteur plein de traces d'huile brulée et matières calcinées indéfinissables. Par contre, il pèse son poids et il semble lui manquer pas mal de pièces…",
      [Lang.DE]: "Es handelt sich um einen kleinen Motor, der mit Ölspuren und undefinierbaren Brennresten verschmutzt ist und der schwer wie Blei ist.",
      [Lang.ES]: "Está lleno de aceite y suena a piezas sueltas cuando lo sacudes. Pesa."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_engine_part",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.17
    },
  },
  [ItemId.MACHINE_1]: {
    id: ItemId.MACHINE_1,
    numericalId: 161,
    name: {
      [Lang.EN]: "Old Washing Machine",
      [Lang.FR]: "Vieille machine à laver",
      [Lang.DE]: "Alte Waschmaschine",
      [Lang.ES]: "Vieja lavadora"
    },
    description: {
      [Lang.EN]: "An old machine for washing dirty linen and clothing. An artefact from days gone by when civilisations considered cleanliness to be next to godliness (of paramount importance). Nowadays that just seems ridiculous...",
      [Lang.FR]: "Une antique machine à laver le linge, artéfact d'une antique civilisation qui plaçait la propreté au dessus de toute autre préoccupation. Ça vous fait bien rigoler aujourd'hui…",
      [Lang.DE]: "Diese uralte Waschmaschine ist das Relikt einer Ära, in der die Menschen noch Wert auf Sauberkeit legten. Heute kannst du nur noch darüber lachen...",
      [Lang.ES]: "Uno de esos artefactos del hogar que representaba el sueño de muchas familias. Hoy, solo te causa risa..."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration, ItemCategory.Breakable],
    icon: "item_machine_1",
    decoration: 2,
    heavy: true,
    watchPoints: 15,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 40
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.69
    },
  },
  [ItemId.MACHINE_2]: {
    id: ItemId.MACHINE_2,
    numericalId: 162,
    name: {
      [Lang.EN]: "Carcinogenic Oven",
      [Lang.FR]: "Four cancérigène",
      [Lang.DE]: "Krebserregender Ofen",
      [Lang.ES]: "Horno cancerígeno"
    },
    description: {
      [Lang.EN]: "Legends state that microwave technology was one of the reasons for the decline of civilisation. Some also say that the existence of zombies isn't unrelated.",
      [Lang.FR]: "Les légendes racontent que la technologie à Micro-Ondes serait l'une des raisons du déclin de la civilisation. Certains disent même que l'existence même des morts-vivants n'y serait pas étrangère.",
      [Lang.DE]: "Legenden erzählen, dass die Mikrowellentechnologie einer der Gründe für den Untergang der menschlichen Zivilisation waren. Manche behaupten sogar, dass Mikrowellenöfen für das Auftauchen der Untoten verantwortlich seien...",
      [Lang.ES]: "Quienes salían en la tele diciendo que el horno microondas causaría la decadencia de nuestra sociedad, tal vez tenían razón. Incluso se dice que la existencia de muertos vivientes no sería ajena a su uso."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration, ItemCategory.Breakable],
    icon: "item_machine_2",
    decoration: 2,
    heavy: true,
    watchPoints: 15,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 43
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.69
    },
  },
  [ItemId.MACHINE_3]: {
    id: ItemId.MACHINE_3,
    numericalId: 163,
    name: {
      [Lang.EN]: "Beer Fridge",
      [Lang.FR]: "Réfrigérateur d'étudiant",
      [Lang.DE]: "Minibar",
      [Lang.ES]: "Frigorífico"
    },
    description: {
      [Lang.EN]: "A magical box which keeps the Britneys cool. I suppose it could also be used for other things though. It doesn't work any more, but maybe if you take it apart you might find something of use...",
      [Lang.FR]: "Une grosse machine pour garder les choses fraiches et les empêcher de pourrir trop vite. Elle ne fonctionne plus mais on doit bien pouvoir en tirer quelque chose.",
      [Lang.DE]: "Leider enthält dieser kleine Kühlschrank keinen Alkohol mehr. Zudem funktioniert er nicht mehr. Allerdings könnte er ein gutes Wurfgeschoss abgeben.",
      [Lang.ES]: "Aún tiene la foto de una pareja de novios pegada con un imán. Ya no funciona pero algún uso le has de encontrar."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration, ItemCategory.Breakable],
    icon: "item_machine_3",
    decoration: 2,
    heavy: true,
    watchPoints: 15,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 40
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.69
    },
  },
  [ItemId.RP_LETTER]: {
    id: ItemId.RP_LETTER,
    numericalId: 164,
    name: {
      [Lang.EN]: "A letter with no address",
      [Lang.FR]: "Une lettre sans adresse",
      [Lang.DE]: "Ein Brief ohne Adresse",
      [Lang.ES]: "Una carta"
    },
    description: {
      [Lang.EN]: "An envelope which has been splashed with blood where the address should be, so it is no longer legible... It has never been opened.",
      [Lang.FR]: "Une enveloppe tâchée de sang, dont l'adresse est devenue illisible... Elle n'a jamais été ouverte.",
      [Lang.DE]: "Ein blutbefleckter Briefumschlag, auf dem die Empfängeradresse nicht mehr lesbar ist... Der Umschlag ist noch zu.",
      [Lang.ES]: "Un sobre que se ha salpicado de sangre donde debería de estar la dirección."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.RP],
    icon: "item_rp_letter",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_rp_#00"
          }
        ]
      }
    ],
  },
  [ItemId.RP_SCROLL]: {
    id: ItemId.RP_SCROLL,
    numericalId: 165,
    name: {
      [Lang.EN]: "Scroll",
      [Lang.FR]: "Feuille raccornie",
      [Lang.DE]: "Aufgewelltes Blatt",
      [Lang.ES]: "Hoja de papel embarrada"
    },
    description: {
      [Lang.EN]: "It's soaking wet and covered in mud. No idea what it is, or was... Maybe there's something interesting to read if you can clean it up...",
      [Lang.FR]: "Trempée et couverte de boue. Une sorte de... vous ignorez ce que c'est à vrai dire. Peut-être qu'en la nettoyant un peu, vous parviendrez à en tirer quelque chose d'intéressant ?",
      [Lang.DE]: "Ein aufgewelltes, sprödes Blatt Papier. Du hast nicht den blassesten Schimmer, was es sein könnte. Versuche es vorsichtig zu reinigen, vielleicht kannst du ja was eintziffern.",
      [Lang.ES]: "Cayó en un charco de lodo y se secó. No sabes realmente lo que es. ¿Quizás limpiándola un poco encuentres alguna información interesante?"
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.RP],
    icon: "item_rp_scroll",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_rp_#00"
          }
        ]
      }
    ],
  },
  [ItemId.RP_MANUAL]: {
    id: ItemId.RP_MANUAL,
    numericalId: 166,
    name: {
      [Lang.EN]: "Instruction Manual",
      [Lang.FR]: "Manuel d'instructions",
      [Lang.DE]: "Betriebsanleitung",
      [Lang.ES]: "Manual de instrucciones"
    },
    description: {
      [Lang.EN]: "A collection of technical texts detailing how to build or repair God-knows-what. Some pages have notes and memos on them...",
      [Lang.FR]: "Un ensemble de feuillets techniques, pour bricoler ou réparer dieu-sait-quoi. Certaines feuilles comportent des notes ou des inscriptions...",
      [Lang.DE]: "Eine Gebrauchsanweisung mit komplizierten Diagrammen, die detailliert beschreiben, wie man eine obskure Maschine zusammensetzt. Es scheint schlecht aus einer asiatischen Sprache übersetzt zu sein, aber auf der Rückseite ist eine interessantere Handschrift von jemandem zu finden.",
      [Lang.ES]: "Una serie de hojas con instrucciones para reparar y armar cosas. Algunas páginas tienen notas..."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.RP],
    icon: "item_rp_manual",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_rp_#00"
          }
        ]
      }
    ],
  },
  [ItemId.RP_BOOK2]: {
    id: ItemId.RP_BOOK2,
    numericalId: 167,
    name: {
      [Lang.EN]: "Illegible Notebook",
      [Lang.FR]: "Carnet illisible",
      [Lang.DE]: "Unleserliches Notizbuch",
      [Lang.ES]: "Libreta ilegible"
    },
    description: {
      [Lang.EN]: "A small notebook, which must have belonged to another citizen. He lost it, so it's now yours. Who knows what secrets might be revealed within?",
      [Lang.FR]: "Un petit carnet, qui devait appartenir à un autre citoyen. Il l'a perdu, il est donc à vous. Que peut-il bien contenir ?",
      [Lang.DE]: "Wer weiß, was in diesem Notizbuch stehen könnte? Die dunkelsten Geheimnisse von jemandem? Eine Schatzkarte? Wenn du es nur lesen könntest...",
      [Lang.ES]: "Debió pertenecer a otro habitante. Si la perdió, ahora es tuya. ¿Qué contendrá?"
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.RP],
    icon: "item_rp_book2",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_rp_#00"
          }
        ]
      }
    ],
  },
  [ItemId.RP_BOOK_01]: {
    id: ItemId.RP_BOOK_01,
    numericalId: 168,
    name: {
      [Lang.EN]: "Photo Album",
      [Lang.FR]: "Album photo",
      [Lang.DE]: "Fotoalbum",
      [Lang.ES]: "Álbum de fotos"
    },
    description: {
      [Lang.EN]: "An old High School yearbook, or something like that: The photos are mind-numbingly boring. However, in flicking through the pages, you see another sheet that has been hidden inside...",
      [Lang.FR]: "Un vieil almanach de lycée, ou quelque chose dans le genre : les photos sont ennuyeuses au possible. Mais en feuilletant les pages vous remarquez une feuille glissée à l'intérieur...",
      [Lang.DE]: "Sieht wie ein alter Schuljahresbericht aus. Die Fotos sind stinklangweilig. Beim Durchblättern fällt dir ein dazwischengeschobenes Blatt in die Hände...",
      [Lang.ES]: "Un viejo álbum de fotos de escuela o algo así, hay muchos rostros casi borrados por el tiempo. Pero al ojearlo, un papel cae de su interior..."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.RP],
    icon: "item_rp_book",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_rp_#00"
          }
        ]
      }
    ],
  },
  [ItemId.RP_SHEETS]: {
    id: ItemId.RP_SHEETS,
    numericalId: 169,
    name: {
      [Lang.EN]: "Stack of Papers",
      [Lang.FR]: "Pile de feuilles",
      [Lang.DE]: "Blätterstapel",
      [Lang.ES]: "Pila de papeles"
    },
    description: {
      [Lang.EN]: "A stack of red-tape, bureaucracy and uninteresting bumph. However, you notice the notes on certain pages...",
      [Lang.FR]: "De la paperasse administrative sans grand intérêt. Toutefois, vous remarquez des inscriptions sur certaines pages...",
      [Lang.DE]: "Ein Haufen Papierkram, das aus einer Verwaltung stammt.Nichts Interessantes, wobei manche Blätter Handnotizen erkennen lassen...",
      [Lang.ES]: "Muchos documentos de todo tipo, nada interesante. Espera, algunos llevan anotaciones curiosas..."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.RP],
    icon: "item_rp_sheets",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_rp_#00"
          }
        ]
      }
    ],
  },
  [ItemId.CHAIN]: {
    id: ItemId.CHAIN,
    numericalId: 170,
    name: {
      [Lang.EN]: "Rusty Chain",
      [Lang.FR]: "Grosse chaîne rouillée",
      [Lang.DE]: "Große rostige Kette",
      [Lang.ES]: "Cadena oxidada"
    },
    description: {
      [Lang.EN]: "This old iron chain is completely twisted, so is not of much use... I suppose you could strangle someone with it though.",
      [Lang.FR]: "Cette vieille chaîne en fer est complètement distordue et n'a plus grande utilité… Mais on doit bien pouvoir étrangler quelqu'un avec.",
      [Lang.DE]: "Diese alte Eisenkette ist total krumm und ist nicht mehr von großem Nutzen... Aber vielleicht kannst du jemanden damit erwürgen?",
      [Lang.ES]: "Tal vez te sirva... para estrangular a alguien."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon, ItemCategory.Breakable],
    icon: "item_chain",
    decoration: 0,
    heavy: false,
    watchPoints: 7,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1",
            odds: 50
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.43,
      [DropLocation.Trash]: 0.08
    },
    opens: [
      ItemId.CHEST_FOOD,
      ItemId.CHEST_TOOLS
    ],
  },
  [ItemId.DISH]: {
    id: ItemId.DISH,
    numericalId: 171,
    name: {
      [Lang.EN]: "Dodgy Homemade Dish",
      [Lang.FR]: "Plat fait-maison douteux",
      [Lang.DE]: "Verdächtige Speise",
      [Lang.ES]: "Plato casero extraño"
    },
    description: {
      [Lang.EN]: "Random ingredients thrown together, a hint of cooking, seasoned with desert sand. Dodgy dish. Done...",
      [Lang.FR]: "Des ingrédients combinés un peu n'importe comment, une ébauche de cuisson et un assaisonnement au sable du désert. Hmmm…",
      [Lang.DE]: "Eine nicht ganz durchgegarte wilde Mischung verschiedenster Zutaten, fein abgeschmeckt mit Wüstensand. Hhhmmm...",
      [Lang.ES]: "Ingredientes variados sazonados con arena del desierto. Hmmm..."
    },
    info: {
      [Lang.EN]: "Created by a failed cooking in your home Kitchen {{item:machine_2}}.",
      [Lang.FR]: "Créé par une cuisson ratée dans votre cuisine à domicile {{item:machine_2}}.",
      [Lang.DE]: "Erstellt durch misslungenes Kochen in Ihrer heimischen Küche {{item:machine_2}}.",
      [Lang.ES]: "Creado por una cocción fallida en tu cocina en casa {{item:machine_2}}."
    },
    categories: [ItemCategory.Food, ItemCategory.GuardWeapon, ItemCategory.APSource],
    icon: "item_dish",
    decoration: 0,
    heavy: false,
    watchPoints: 4,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
  },
  [ItemId.DISH_TASTY]: {
    id: ItemId.DISH_TASTY,
    numericalId: 172,
    name: {
      [Lang.EN]: "Tasty Homemade Dish",
      [Lang.FR]: "Bon plat fait-maison",
      [Lang.DE]: "Leckere Speise",
      [Lang.ES]: "Plato casero delicioso"
    },
    description: {
      [Lang.EN]: "At first glance, it looks no better than the usual rations. In reality though, it tastes great and makes you feel infinitely better!",
      [Lang.FR]: "En apparence, ça n'est guère mieux qu'une ration quotidienne. Mais en réalité ça a très bon goût et ça nourrit bien.",
      [Lang.DE]: "Auf den ersten Blick sieht es kaum besser aus als das, was du sonst zu dir nimmst. In Wirklichkeit schmeckt es jedoch sehr sehr gut und ist sättigend!",
      [Lang.ES]: "No parece nada extraordinario, ¡pero tiene buen sabor y alimenta muy bien!"
    },
    info: {
      [Lang.EN]: "Created by a successful cooking in your home Kitchen {{item:machine_2}}.",
      [Lang.FR]: "Créé par une cuisson réussie dans votre cuisine à domicile {{item:machine_2}}.",
      [Lang.DE]: "Erstellt durch erfolgreiches Kochen in Ihrer heimischen Küche {{item:machine_2}}.",
      [Lang.ES]: "Creado por una cocción exitosa en tu cocina en casa {{item:machine_2}}."
    },
    categories: [ItemCategory.Food, ItemCategory.GuardWeapon, ItemCategory.APSource],
    icon: "item_dish_tasty",
    decoration: 0,
    heavy: false,
    watchPoints: 6,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 7
          }
        ]
      }
    ],
  },
  [ItemId.HOME_BOX_XL]: {
    id: ItemId.HOME_BOX_XL,
    numericalId: 173,
    name: {
      [Lang.EN]: "Iron Chest",
      [Lang.FR]: "Cantine en fer",
      [Lang.DE]: "Schrankkoffer",
      [Lang.ES]: "Baúl de metal"
    },
    description: {
      [Lang.EN]: "Heavy but practical, this iron chest is perfect for storing all your belongings at home.",
      [Lang.FR]: "Lourde mais pratique, cette grosse malle en ferraille ferait parfaitement office de rangement chez soi.",
      [Lang.DE]: "Dieser Schrankkoffer ist zwar schwer, aber äußerst praktisch, um daheim mal aufzuräumen.",
      [Lang.ES]: "Pesado pero práctico para llevar a casa."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.ChestExtension],
    icon: "item_home_box_xl",
    decoration: 0,
    heavy: true,
    watchPoints: 8,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_hbuild_#00"
          },
          {
            type: ItemActionEffectType.HomeStorage,
            value: 2
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.HOME_BOX]: {
    id: ItemId.HOME_BOX,
    numericalId: 174,
    name: {
      [Lang.EN]: "Boxes",
      [Lang.FR]: "Cartons",
      [Lang.DE]: "Kartons",
      [Lang.ES]: "Cajas de cartón"
    },
    description: {
      [Lang.EN]: "Some cardboard boxes previously from domestic appliances. Even if they're partially rotten and clearly smell of mould, they can still be used in your home... as furniture.",
      [Lang.FR]: "Quelques cartons qui devaient autrefois être des boîtes de rangement pour des appareils électroménagers. Même s'ils sont à moitié pourris et sentent le moisi à plein nez, ils pourront toujours servir chez vous... comme meuble.",
      [Lang.DE]: "Ein paar Haushaltsgerätekartons, die stark nach Schimmel riechen. Du kannst sie aber immer noch verwenden - als Möbel zum Beispiel.",
      [Lang.ES]: "Diversas cajas de artefactos eléctricos y muebles. Podrían servir en tu casa como muebles."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.ChestExtension],
    icon: "item_home_box",
    decoration: 0,
    heavy: false,
    watchPoints: 4,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_hbuild_#00"
          },
          {
            type: ItemActionEffectType.HomeStorage,
            value: 1
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.26,
      [DropLocation.Trash]: 0.08
    },
  },
  [ItemId.HOME_DEF]: {
    id: ItemId.HOME_DEF,
    numericalId: 175,
    name: {
      [Lang.EN]: "Makeshift Barricade",
      [Lang.FR]: "Barricades à clouer",
      [Lang.DE]: "Nagelbare Barrikade",
      [Lang.ES]: "Barricadas"
    },
    description: {
      [Lang.EN]: "This wood and sheet metal construction must have previously been used as a barricade by another citizen. Judging by the cracks, the blood and the repairs, it wasn't sufficient...",
      [Lang.FR]: "Cet assemblage de bois et de tôle devait autrefois servir de barricade chez un autre citoyen. À en juger par les déformations, le sang et les rafistolages, ça ne devait pas être suffisant...",
      [Lang.DE]: "Dieser lustige Blech- und Holzverbund hat wohl einem anderen Einwohner als Schutz gedient. Den Beulen und Blutflecken nach zu urteilen, hat sie wohl nicht ganz gereicht...",
      [Lang.ES]: "Una estructura de madera y hierro que seguramente sirvió a un antiguo habitante. A juzgar por las manchas de sangre y golpes, no debió ser suficiente..."
    },
    categories: [ItemCategory.Furniture],
    icon: "item_home_def",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_hbuild_#00"
          },
          {
            type: ItemActionEffectType.HomeDefense,
            value: 1
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.26,
      [DropLocation.Trash]: 0.08
    },
  },
  [ItemId.BOOK_GEN_LETTER]: {
    id: ItemId.BOOK_GEN_LETTER,
    numericalId: 176,
    name: {
      [Lang.EN]: "Envelope",
      [Lang.FR]: "Une enveloppe",
      [Lang.DE]: "Ein Briefumschlag",
      [Lang.ES]: "Un sobre"
    },
    description: {
      [Lang.EN]: "A large sealed envelope containing... papers. Or so you'd expect.",
      [Lang.FR]: "Une grande enveloppe scellée contenant... des papiers. Peut-être.",
      [Lang.DE]: "Ein großer, versiegelter Briefumschlag ... Dem Tasten nach zu urteilen enthält er Papier oder doch etwas anderes?",
      [Lang.ES]: "Un gran sobre sellado conteniendo... papeles, tal vez."
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_book_gen_letter",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "rp_book2_#00",
            odds: 17
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rp_manual_#00",
            odds: 17
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rp_scroll_#00",
            odds: 17
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rp_scroll_#01",
            odds: 17
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rp_sheets_#00",
            odds: 17
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rp_letter_#00",
            odds: 17
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.26
    },
  },
  [ItemId.BOOK_GEN_BOX]: {
    id: ItemId.BOOK_GEN_BOX,
    numericalId: 177,
    name: {
      [Lang.EN]: "Parcel",
      [Lang.FR]: "Un colis",
      [Lang.DE]: "Ein Paket",
      [Lang.ES]: "Un paquete"
    },
    description: {
      [Lang.EN]: "There appears to be no address or any forwarding details on this parcel. You shake it, and hear something rattling inside...",
      [Lang.FR]: "Ce colis postal ne comporte aucune adresse lisible, pas de mention particulière. En le secouant, vous entendez quelque chose à l'intérieur...",
      [Lang.DE]: "Die Adresse ist nicht mehr lesbar. Beim Schütteln hörst du ein raschelndes Geräusch...",
      [Lang.ES]: "Parece que no hay dirección ni detalles de reenvío en este paquete. Lo sacudes y escuchas algo traqueteando en el interior."
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_book_gen_box",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "money_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rp_book_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rp_book_#01",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rp_sheets_#00",
            odds: 25
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.17
    },
  },
  [ItemId.FENCE]: {
    id: ItemId.FENCE,
    numericalId: 178,
    name: {
      [Lang.EN]: "Wire Mesh",
      [Lang.FR]: "Morceau de grillage",
      [Lang.DE]: "Maschendrahtzaunstück",
      [Lang.ES]: "Pedazo de rejilla"
    },
    description: {
      [Lang.EN]: "A small rusty piece of mesh. It's seen better days...",
      [Lang.FR]: "Une petite partie d'une clôture grillagée, rouillée et abimée.",
      [Lang.DE]: "Ein kleines, verrostetes Stück Maschendrahtzaun.",
      [Lang.ES]: "Oxidada y torcida, puede servir para algo."
    },
    categories: [ItemCategory.Furniture],
    icon: "item_fence",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.26,
      [DropLocation.Trash]: 0.77
    },
  },
  [ItemId.WATERGUN_3]: {
    id: ItemId.WATERGUN_3,
    numericalId: 179,
    name: {
      [Lang.EN]: "Water Pistol (3 shots)",
      [Lang.FR]: "Pistolet à eau (3 charges)",
      [Lang.DE]: "Wasserpistole (3 Ladungen)",
      [Lang.ES]: "Pistola de agua (3 cargas)"
    },
    description: {
      [Lang.EN]: "The water pistol... When all is said and done, the desert is really just a huge sandpit... Please note: This toy only works with fresh water (eg. from a flask).",
      [Lang.FR]: "Le Pistolet à Eau... Finalement, le Désert n'est qu'un grand Bac à Sable... Notez que ce jouet n'est efficace qu'avec de l'eau pure (celle d'une gourde par exemple).",
      [Lang.DE]: "Die Wasserpistole erinnert dich irgendwie an Räuber und Gendarmen... Nur mit sauberem Wasser benutzen(zum Beispiel aus einer Trinkflasche).",
      [Lang.ES]: "Tu primer arma letal cuando eras niño... Solo es eficaz con agua pura (la de una Ración de agua por ejemplo)."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_watergun_3",
    decoration: 0,
    heavy: false,
    watchPoints: 6,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "watergun_2_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
  },
  [ItemId.WATERGUN_2]: {
    id: ItemId.WATERGUN_2,
    numericalId: 180,
    name: {
      [Lang.EN]: "Water Pistol (2 shots)",
      [Lang.FR]: "Pistolet à eau (2 charges)",
      [Lang.DE]: "Wasserpistole (2 Ladungen)",
      [Lang.ES]: "Pistola de agua (2 cargas)"
    },
    description: {
      [Lang.EN]: "The water pistol... When all is said and done, the desert is really just a huge sandpit... Please note: This toy only works with fresh water (eg. from a flask).",
      [Lang.FR]: "Le Pistolet à Eau... Finalement, le Désert n'est qu'un grand Bac à Sable... Notez que ce jouet n'est efficace qu'avec de l'eau pure (celle d'une gourde par exemple).",
      [Lang.DE]: "Die Wasserpistole erinnert dich irgendwie an Räuber und Gendarmen... Nur mit sauberem Wasser benutzen(zum Beispiel aus einer Trinkflasche).",
      [Lang.ES]: "Tu primer arma letal cuando eras niño... Solo es eficaz con agua pura (la de una Ración de agua por ejemplo)."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_watergun_2",
    decoration: 0,
    heavy: false,
    watchPoints: 4,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "watergun_1_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
  },
  [ItemId.WATERGUN_1]: {
    id: ItemId.WATERGUN_1,
    numericalId: 181,
    name: {
      [Lang.EN]: "Water Pistol (1 shot)",
      [Lang.FR]: "Pistolet à eau (1 charge)",
      [Lang.DE]: "Wasserpistole (1 Ladung)",
      [Lang.ES]: "Pistola de agua (1 carga)"
    },
    description: {
      [Lang.EN]: "The water pistol... When all is said and done, the desert is really just a huge sandpit... Please note: This toy only works with fresh water (eg. from a flask).",
      [Lang.FR]: "Le Pistolet à Eau... Finalement, le Désert n'est qu'un grand Bac à Sable... Notez que ce jouet n'est efficace qu'avec de l'eau pure (celle d'une gourde par exemple).",
      [Lang.DE]: "Die Wasserpistole erinnert dich irgendwie an Räuber und Gendarmen... Nur mit sauberem Wasser benutzen(zum Beispiel aus einer Trinkflasche).",
      [Lang.ES]: "Tu primer arma letal cuando eras niño... Solo es eficaz con agua pura (la de una Ración de agua por ejemplo)."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_watergun_1",
    decoration: 0,
    heavy: false,
    watchPoints: 2,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "watergun_empty_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
  },
  [ItemId.WATERGUN_OPT_5]: {
    id: ItemId.WATERGUN_OPT_5,
    numericalId: 182,
    name: {
      [Lang.EN]: "Aqua-Splash (5 shots)",
      [Lang.FR]: "Aqua-Splash (5 charges)",
      [Lang.DE]: "Aqua-Splash (5 Ladungen)",
      [Lang.ES]: "Rifle de agua (5 cargas)"
    },
    description: {
      [Lang.EN]: "The Aqua-Splash is a massively overpowered water gun, ideal for long walks in the World Beyond ! Not suitable for children under 8 years of age.",
      [Lang.FR]: "L'Aqua-Splash est un fusil à eau surpuissant pour toute personne en balade dans l'Outre-Monde ! Ne convient pas à un enfant de moins 8 ans.",
      [Lang.DE]: "Die Aqua-Splash-Kanone ist die Lieblingswaffe aller Wüstenwanderer! Nicht geeignet für Kinder unter 8 Jahren.",
      [Lang.ES]: "¡Un arma super poderosa en el Ultramundo! La etiqueta dice de 8 años a más."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_watergun_opt_5",
    decoration: 0,
    heavy: false,
    watchPoints: 12,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "watergun_opt_4_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
  },
  [ItemId.WATERGUN_OPT_4]: {
    id: ItemId.WATERGUN_OPT_4,
    numericalId: 183,
    name: {
      [Lang.EN]: "Aqua-Splash (4 shots)",
      [Lang.FR]: "Aqua-Splash (4 charges)",
      [Lang.DE]: "Aqua-Splash (4 Ladungen)",
      [Lang.ES]: "Rifle de agua (4 cargas)"
    },
    description: {
      [Lang.EN]: "The Aqua-Splash is a massively overpowered water gun, ideal for long walks in the World Beyond ! Not suitable for children under 8 years of age.",
      [Lang.FR]: "L'Aqua-Splash est un fusil à eau surpuissant pour toute personne en balade dans l'Outre-Monde ! Ne convient pas à un enfant de moins 8 ans.",
      [Lang.DE]: "Die Aqua-Splash-Kanone ist die Lieblingswaffe aller Wüstenwanderer! Nicht geeignet für Kinder unter 8 Jahren.",
      [Lang.ES]: "¡Un arma super poderosa en el Ultramundo! La etiqueta dice de 8 años a más."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_watergun_opt_4",
    decoration: 0,
    heavy: false,
    watchPoints: 9,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "watergun_opt_3_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
  },
  [ItemId.CIGS]: {
    id: ItemId.CIGS,
    numericalId: 184,
    name: {
      [Lang.EN]: "Opened packet of Cigarettes",
      [Lang.FR]: "Paquet de cigarettes entamé",
      [Lang.DE]: "Angefangene Zigarettenschachtel",
      [Lang.ES]: "Cajetilla de cigarrillos abierta"
    },
    description: {
      [Lang.EN]: "An old packet of cigarettes that smells of rotting flesh and mould. They're a rare find these days though... Alongside several skulls and crossbones, the warning : \"Smoking Kills\" is printed in red...",
      [Lang.FR]: "Un vieux paquet de cigarettes qui sent la charogne et la moisissure. Mais c'est tellement rare d'en trouver de nos jours... Il porte une mention en rouge ainsi qu'une demi-douzaine de têtes de morts : \"Fumer tue\".",
      [Lang.DE]: "Eine gammelige alte Zigarettenschachtel, die nach Aas riecht. Du kannst dich richtig glücklich schätzen, sowas findet man heutzutage nur noch sehr selten. Auf der Packung ist ein Warnhinweis: \"Rauchen ist tödlich\".",
      [Lang.ES]: "El tabaco ya huele muy mal, pero es tan raro encontrar algo así en estos días... Lleva escrito: \"Fumar mata\". Sí, claro..."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_cigs",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "cigs_#00",
            odds: 67
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "lights_#00",
            odds: 33
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "terror"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.17
    },
  },
  [ItemId.PILEGUN_UPKIT]: {
    id: ItemId.PILEGUN_UPKIT,
    numericalId: 185,
    name: {
      [Lang.EN]: "PUTA Mark II Calibrator",
      [Lang.FR]: "Calibrateur PDTT Mark II",
      [Lang.DE]: "Druckregler PDTT Mark II",
      [Lang.ES]: "Calibrador PDTT Mark II"
    },
    description: {
      [Lang.EN]: "This antique calibrator is designed to be mounted on the Battery Launcher 1-ITF. It allows the pressure in the firing chamber to be accurately adjusted and regulated.",
      [Lang.FR]: "Cet antique calibrateur est exclusivement prévu pour être monté sur un Lance-pile 1-PDTG. Il permet d'ajuster précisément la pression dans la chambre de tir de l'arme.",
      [Lang.DE]: "Mit diesem veralteten Druckregler kannst du den Druck in der Schusskammer des Batteriewerfer 1-PDTG regeln.",
      [Lang.ES]: "Fue concebido para ser instalado en el Lanza-pilas 1-PDTG. Permite ajustar el disparo del arma."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_pilegun_upkit",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.PILEGUN_UP_EMPTY]: {
    id: ItemId.PILEGUN_UP_EMPTY,
    numericalId: 186,
    name: {
      [Lang.EN]: "Battery Launcher Mk. II (empty)",
      [Lang.FR]: "Lance-pile Mark II (vide)",
      [Lang.DE]: "Batteriewerfer Mark II (leer)",
      [Lang.ES]: "Lanza-pilas Mark II (vacío)"
    },
    description: {
      [Lang.EN]: "This upgraded version of the Battery Launcher 1-ITF features a PDTT Mark II Calibrator. By precisely regulating the firepower, this feature sometimes allows batteries which have already been fired to be recovered.",
      [Lang.FR]: "Cette version améliorée du Lance-pile comporte un canon équipé d'un Calibrateur PDTT Mark II. En dosant précisément la puissance de tir, ce canon permet (parfois) de récupérer la pile qui a été tirée.",
      [Lang.DE]: "Bei dieser verbesserten Version des normalen Batteriewerfers 1-PDTG ist der PDTT Mark II-Druckregler schon eingebaut. Durch Feinjustierung der Schusskraft ist es manchmal sogar möglich die verschossene Batterie wieder einzusammeln.",
      [Lang.ES]: "Esta versión mejorada del temible lanza-pilas lleva un cañón equipado con el Calibrador PDTT Mark II. Ajustando la potencia del tiro, el cañón permite, a veces, recuperar la pila disparada."
    },
    categories: [ItemCategory.Armoury],
    icon: "item_pilegun_up_empty",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.PILE }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "pilegun_up_#00"
          }
        ]
      }
    ],
  },
  [ItemId.PILEGUN_UP]: {
    id: ItemId.PILEGUN_UP,
    numericalId: 187,
    name: {
      [Lang.EN]: "Battery Launcher Mk. II (loaded)",
      [Lang.FR]: "Lance-pile Mark II (chargé)",
      [Lang.DE]: "Batteriewerfer Mark II (geladen)",
      [Lang.ES]: "Lanza-pilas Mark II (cargado)"
    },
    description: {
      [Lang.EN]: "This upgraded version of the Battery Launcher 1-ITF features a PDTT Mark II Calibrator. By precisely regulating the firepower, this feature sometimes allows batteries which have already been fired to be recovered.",
      [Lang.FR]: "Cette version améliorée du Lance-pile comporte un canon équipé d'un Calibrateur PDTT Mark II. En dosant précisément la puissance de tir, ce canon permet (parfois) de récupérer la pile qui a été tirée.",
      [Lang.DE]: "Bei dieser verbesserten Version des normalen Batteriewerfers 1-PDTG ist der PDTT Mark II-Druckregler schon eingebaut. Durch Feinjustierung der Schusskraft ist es manchmal sogar möglich die verschossene Batterie wieder einzusammeln.",
      [Lang.ES]: "Esta versión mejorada del temible lanza-pilas lleva un cañón equipado con el Calibrador PDTT Mark II. Ajustando la potencia del tiro, el cañón permite, a veces, recuperar la pila disparada."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_pilegun_up",
    decoration: 0,
    heavy: false,
    watchPoints: 11,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "pilegun_up_empty_#00",
            odds: 100
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "pile_#00",
            odds: 80
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "pile_broken_#00",
            odds: 20
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
  },
  [ItemId.PILE_BROKEN]: {
    id: ItemId.PILE_BROKEN,
    numericalId: 188,
    name: {
      [Lang.EN]: "Crushed Battery",
      [Lang.FR]: "Pile broyée",
      [Lang.DE]: "Zerquetschte Batterie",
      [Lang.ES]: "Pila molida"
    },
    description: {
      [Lang.EN]: "This used to be a battery. Now it's just a lump of squashed metal...",
      [Lang.FR]: "Autrefois, c'était une pile. Maintenant, c'est un vieux bout de ferraille complètement écrasé...",
      [Lang.DE]: "Das war mal eine Batterie. Jetzt ist es nur noch ein komplett zerdrücktes Stück Metall...",
      [Lang.ES]: "Antes era una pila. Ahora es un pedazo de metal aplastado..."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_pile_broken",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.RSC_PACK_3]: {
    id: ItemId.RSC_PACK_3,
    numericalId: 189,
    name: {
      [Lang.EN]: "Construction Kit (3)",
      [Lang.FR]: "Carton de matériaux (3)",
      [Lang.DE]: "Kiste mit Materialien (3)",
      [Lang.ES]: "Caja de materiales (3)"
    },
    description: {
      [Lang.EN]: "This large box is covered in printed labels and wrapped in cellophane. It most likely contains construction materials.",
      [Lang.FR]: "Ce gros carton est couvert d'étiquettes imprimées et emballé dans du cellophane transparent. Il doit contenir des matériaux de construction..",
      [Lang.DE]: "Diese große Kiste ist in Zellophan eingeschweißt und mit bedruckten Etiketten nur so zugepflastert. Sie enthält wahrscheinlich Baumaterialien.",
      [Lang.ES]: "Esta gran cajota está muy bien empacada y debe contener materiales de construcción."
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_rsc_pack_3",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "rsc_pack_2_#00"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "wood2_#00",
            odds: 50
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "metal_#00",
            odds: 50
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.RSC_PACK_2]: {
    id: ItemId.RSC_PACK_2,
    numericalId: 190,
    name: {
      [Lang.EN]: "Construction Kit (2)",
      [Lang.FR]: "Carton de matériaux (2)",
      [Lang.DE]: "Kiste mit Materialien (2)",
      [Lang.ES]: "Caja de materiales (2)"
    },
    description: {
      [Lang.EN]: "This large box is covered in printed labels and wrapped in cellophane. It most likely contains construction materials.",
      [Lang.FR]: "Ce gros carton est couvert d'étiquettes imprimées et emballé dans du cellophane transparent. Il doit contenir des matériaux de construction..",
      [Lang.DE]: "Diese große Kiste ist in Zellophan eingeschweißt und mit bedruckten Etiketten nur so zugepflastert. Sie enthält wahrscheinlich Baumaterialien.",
      [Lang.ES]: "Esta gran cajota está muy bien empacada y debe contener materiales de construcción."
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_rsc_pack_2",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "rsc_pack_1_#00"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "wood2_#00",
            odds: 50
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "metal_#00",
            odds: 50
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.26
    },
  },
  [ItemId.RSC_PACK_1]: {
    id: ItemId.RSC_PACK_1,
    numericalId: 191,
    name: {
      [Lang.EN]: "Construction Kit (1)",
      [Lang.FR]: "Carton de matériaux (1)",
      [Lang.DE]: "Kiste mit Materialien (1)",
      [Lang.ES]: "Caja de materiales (1)"
    },
    description: {
      [Lang.EN]: "This large box is covered in printed labels and wrapped in cellophane. It most likely contains construction materials.",
      [Lang.FR]: "Ce gros carton est couvert d'étiquettes imprimées et emballé dans du cellophane transparent. Il doit contenir des matériaux de construction..",
      [Lang.DE]: "Diese große Kiste ist in Zellophan eingeschweißt und mit bedruckten Etiketten nur so zugepflastert. Sie enthält wahrscheinlich Baumaterialien.",
      [Lang.ES]: "Esta gran cajota está muy bien empacada y debe contener materiales de construcción."
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_rsc_pack_1",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "wood2_#00",
            odds: 50
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "metal_#00",
            odds: 50
          }
        ]
      }
    ],
  },
  [ItemId.CAR_DOOR]: {
    id: ItemId.CAR_DOOR,
    numericalId: 192,
    name: {
      [Lang.EN]: "Car Door",
      [Lang.FR]: "Portière de voiture",
      [Lang.DE]: "Autotür",
      [Lang.ES]: "Puerta de coche"
    },
    description: {
      [Lang.EN]: "This hefty door will make an excellent improvised shield for when you need to get through crowds of zombies intent on munching your tasty brain (on one small cracker, as an aperitif presumably...).",
      [Lang.FR]: "Cette grosse portière fera parfaitement office de bouclier improvisé dans le désert, quand il s'agira de passer en force dans des hordes de cadavres avides de votre délicieux cerveau.",
      [Lang.DE]: "Diese Autotür kann dir als Schutzschild dienen, wenn du eine Reihe hungriger Kadaver durchqueren musst. Die haben nämlich nur eines im Sinn: Dein köstliches Gehirn zu verschlingen.",
      [Lang.ES]: "Esta buena puerta de coche estadounidense te servirá como escudo para pasar entre las turbas de muertos vivientes deseosos de darte mordiscos."
    },
    info: {
      [Lang.EN]: "+1 {{item:shield}} while in the rucksack.",
      [Lang.FR]: "+1 {{item:shield}} lorsqu'elle est dans le sac à dos.",
      [Lang.DE]: "+1 {{item:shield}} im Rucksack.",
      [Lang.ES]: "+1 {{item:shield}} mientras está en la mochila."
    },
    categories: [ItemCategory.Defences, ItemCategory.GuardWeapon],
    icon: "item_car_door",
    decoration: 0,
    heavy: true,
    watchPoints: 25,
    actions: [
      
    ],
  },
  [ItemId.CAR_DOOR_PART]: {
    id: ItemId.CAR_DOOR_PART,
    numericalId: 193,
    name: {
      [Lang.EN]: "Car Door (incomplete)",
      [Lang.FR]: "Portière de voiture incomplète",
      [Lang.DE]: "Beschädigte Autotür",
      [Lang.ES]: "Puerta de coche incompleta"
    },
    description: {
      [Lang.EN]: "A car door, but it's missing some parts which would allow it to be carried properly...",
      [Lang.FR]: "Une portière de voiture, mais à laquelle il manque certaines parties pour pouvoir la tenir en main...",
      [Lang.DE]: "Eine Autotür, bei der ein entscheidendes Teil fehlt: Der Türgriff. Schlecht...",
      [Lang.ES]: "Una buena puerta de coche estadounidense, te serviría como escudo, pero le faltan piezas para poder ser sostenida..."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_car_door_part",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.POISON]: {
    id: ItemId.POISON,
    numericalId: 194,
    name: {
      [Lang.EN]: "Vial of Poison",
      [Lang.FR]: "Fiole de poison",
      [Lang.DE]: "Giftfläschchen",
      [Lang.ES]: "Frasco de veneno"
    },
    description: {
      [Lang.EN]: "This tiny quantity of poison is sufficient to kill any of your fellow citizens. Add it to some food, a flask or a drug and it will become contaminated, turning it into a deadly weapon...",
      [Lang.FR]: "Cette minuscule quantité de poison suffira à tuer n'importe quel concitoyen. Mélangez son contenu avec un aliment, une gourde ou une drogue et celle-ci sera contaminée, devenant ainsi une arme mortelle…",
      [Lang.DE]: "Diese winzig kleine Dosis Gift reicht aus, um jeden deiner Mitbürger umzubringen. Wenn du es mit etwas Essen oder einer Droge vermischt, oder wenn du es in eine Trinkflasche kippst, ist dieses Gift eine tödliche Waffe.",
      [Lang.ES]: "Las pocas gotas que quedan dentro matarían a cualquier compañero. Tiene un gran poder de contaminación, ya sea en alimentos, estimulantes o una Ración de agua..."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_poison",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.POISON_PART]: {
    id: ItemId.POISON_PART,
    numericalId: 195,
    name: {
      [Lang.EN]: "Corrosive Liquid",
      [Lang.FR]: "Produit corrosif",
      [Lang.DE]: "Ätzmittel",
      [Lang.ES]: "Producto corrosivo"
    },
    description: {
      [Lang.EN]: "With the right ingredients, this acid could be transformed into a dangerous poison. but you'd really have to want to kill someone... You don't want that, do you?",
      [Lang.FR]: "Avec les bons ingrédients, cet acide pourrait devenir un dangereux poison. Encore faut-il vraiment vouloir tuer quelqu'un... Vous ne le souhaitez pas, n'est-ce pas ?",
      [Lang.DE]: "Mit den richtigen Zutaten kannst du dir ein schönes Gift mischen. Musst du denn unbedingt jemanden umbringen? Das willst du doch nicht wirklich... oder doch?",
      [Lang.ES]: "Mezclándolo con otros ingredientes este ácido puede volverse un potente veneno. Pero no deseas matar a alguien... ¿verdad?"
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_poison_part",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.CHEST_HERO]: {
    id: ItemId.CHEST_HERO,
    numericalId: 196,
    name: {
      [Lang.EN]: "Shrewd Citizen's Stash",
      [Lang.FR]: "Réserves d’un citoyen avisé",
      [Lang.DE]: "Vorräte eines umsichtigen Bürgers",
      [Lang.ES]: "Reservas de habitante precavido"
    },
    description: {
      [Lang.EN]: "When you garner a certain amount of experience of the world in which we live, you quickly learn to put some useful bits and pieces aside, because who knows, one day they just might save your life...",
      [Lang.FR]: "Quand on acquiert une certaine expérience du monde dans lequel on vit, on apprend vite à mettre de côté des petites babioles utiles. Car on sait qu'un jour, elles nous sauveront la vie.",
      [Lang.DE]: "Sobald du in dieser Welt ein wenig Erfahrung gesammelt hast, weißt du, dass es wichtig ist, ein paar Gegenstände bei sich zu behalten. Denn eines Tages könnten sie dir das Leben retten.",
      [Lang.ES]: "Cuando se adquiere una cierta experiencia en este mundo, uno comprende la importancia de guardar algunos objetos, porque un día podrían salvarnos la vida."
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_chest_hero",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "watergun_empty_#00",
            odds: 20
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "pilegun_empty_#00",
            odds: 20
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "flash_#00",
            odds: 20
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "repair_one_#00",
            odds: 20
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "smoke_bomb_#00",
            odds: 20
          }
        ]
      }
    ],
  },
  [ItemId.POSTAL_BOX]: {
    id: ItemId.POSTAL_BOX,
    numericalId: 197,
    name: {
      [Lang.EN]: "Gift Parcel",
      [Lang.FR]: "Colis postal",
      [Lang.DE]: "Postpaket",
      [Lang.ES]: "Paquete postal"
    },
    description: {
      [Lang.EN]: "The address has become illegible, but there's definitely something inside... Merry Christmas!!!",
      [Lang.FR]: "Un colis dont l'adresse est aujourd'hui illisible. Et on dirait bien qu'il y a quelque chose à l'intérieur… C'est Noël.",
      [Lang.DE]: "Die Adresse ist nicht mehr lesbar. Es scheint etwas drin zu sein... Das ist ja besser als Weihnachten!",
      [Lang.ES]: "Un paquete perdido por el correo (para variar). Hay algo dentro... ¿qué será?"
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_postal_box",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "money_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rp_book_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rp_book_#01",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rp_sheets_#00",
            odds: 25
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.FOOD_ARMAG]: {
    id: ItemId.FOOD_ARMAG,
    numericalId: 198,
    name: {
      [Lang.EN]: "Lunch Box",
      [Lang.FR]: "Boîte-déjeuner",
      [Lang.DE]: "Lunch-Box",
      [Lang.ES]: "Lonchera"
    },
    description: {
      [Lang.EN]: "In the absence of a proper meal, sat round a nicely-set table with friends, you'll have to make do with this emergency lunch box which you hid under the bed some time ago...",
      [Lang.FR]: "À défaut d'un vrai repas autour d'une table, avec des couverts et des amis, vous avez cette boite-déjeuner Armaggedon que vous aviez caché il y a un bon moment sous votre lit…",
      [Lang.DE]: "Da Du hier kein richtiges Dinner mit Freunden erleben kannst, hast du dir ein paar leckere Happen beiseite gelegt und in dieser Lunch-Box aufbewahrt. Ab und zu muss man sich mal was gönnen ...",
      [Lang.ES]: "A falta de una buena comida en una mesa. con cubiertos y amigos, tienes esta lonchera Armagedón que habías escondido hace un tiempo bajo tu cama..."
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_food_armag",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "food_candies_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "food_noodles_hot_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "vegetable_tasty_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "meat_#00",
            odds: 25
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.FOOD_CANDIES]: {
    id: ItemId.FOOD_CANDIES,
    numericalId: 199,
    name: {
      [Lang.EN]: "Handful of Sweets",
      [Lang.FR]: "Poignée de bonbons",
      [Lang.DE]: "Eine Handvoll Bonbons",
      [Lang.ES]: "Puñado de caramelos"
    },
    description: {
      [Lang.EN]: "Just thinking about these delicious sweets brings a tear to your eye...",
      [Lang.FR]: "Vous avez une petite larme à l'oeil en contemplant cette poignée de délicieux bonbons…",
      [Lang.DE]: "Beim Anblick dieser Bonbons kommen dir die Tränen...",
      [Lang.ES]: "Se te salen las lágrimas al ver todos esos caramelitos de colores..."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_food_candies",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 7
          }
        ]
      }
    ],
  },
  [ItemId.OUT_DEF]: {
    id: ItemId.OUT_DEF,
    numericalId: 200,
    name: {
      [Lang.EN]: "Sheet of Plywood",
      [Lang.FR]: "Morceau de contreplaqué",
      [Lang.DE]: "Sperrholzstück",
      [Lang.ES]: "Pedazo de contrachapado"
    },
    description: {
      [Lang.EN]: "This old sheet of plywood came from some old building. With a little effort, it could be used to make a good hideout.",
      [Lang.FR]: "Ce vieux morceau de contreplaqué vient d'un quelconque bâtiment. Au prix de quelques efforts, il devrait pouvoir servir à aménager une planque dehors.",
      [Lang.DE]: "Dieses alte Sperrholzstück stammt aus irgendeinem alten Gebäude. Mit ein wenig Einfallsreichtum könntest du es für eine neue Konstruktion wiederverwerten.",
      [Lang.ES]: "Debe haber salido de un antiguo edificio. Con un poco de ingenio puede servir para hacer un escondite."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.CampingBoost],
    icon: "item_out_def",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: -1
          },
          {
            type: ItemActionEffectType.CampingChances,
            value: "+9%"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.17
    },
  },
  [ItemId.TORCH]: {
    id: ItemId.TORCH,
    numericalId: 201,
    name: {
      [Lang.EN]: "Torch",
      [Lang.FR]: "Torche",
      [Lang.DE]: "Fackel",
      [Lang.ES]: "Antorcha"
    },
    description: {
      [Lang.EN]: "This can stay alight for hours, so it can be used to keep zombies away. In addition, if you place it on the ground in the desert, it will reduce the penalty to night searches in this sector.",
      [Lang.FR]: "Elle doit bien brûler quelques heures… Ça sera toujours ça de plus pour éloigner les zombies. De plus, si vous la posez au sol dans le désert, elle permettra de réduire la pénalité aux fouilles de nuit dans ce secteur.",
      [Lang.DE]: "Die brennt bestimmt noch ein paar Stunden... Selbst damit kannst du dir die Zombies vom Leib halten.",
      [Lang.ES]: "Debe poder quedar encendida unas horas... Servirá para alejar a los zombies. Además, si la colocas en el suelo en el desierto, reducirá la penalización que impide realizar búsquedas de noche."
    },
    categories: [ItemCategory.Defences, ItemCategory.GuardWeapon],
    icon: "item_torch",
    decoration: 0,
    heavy: false,
    watchPoints: 15,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "torch_off_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
  },
  [ItemId.TORCH_OFF]: {
    id: ItemId.TORCH_OFF,
    numericalId: 202,
    name: {
      [Lang.EN]: "Burnt out Torch",
      [Lang.FR]: "Torche consumée",
      [Lang.DE]: "Verbrauchte Fackel",
      [Lang.ES]: "Antorcha consumida"
    },
    description: {
      [Lang.EN]: "A stick, basically, which is surely no good for anything now...",
      [Lang.FR]: "Un vieux bout de bois calciné qui ne vous servira sûrement plus à grand chose…",
      [Lang.DE]: "Mit diesem alten verbranntem Stück Holz kannst du wahrscheinlich nicht mehr viel anfangen...",
      [Lang.ES]: "Un viejo pedazo de madera calcinada que no tendrá mucha utilidad..."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon, ItemCategory.Breakable],
    icon: "item_torch_off",
    decoration: 0,
    heavy: false,
    watchPoints: 5,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 75
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1",
            odds: 10
          }
        ]
      }
    ],
  },
  [ItemId.CHAMA]: {
    id: ItemId.CHAMA,
    numericalId: 203,
    name: {
      [Lang.EN]: "Dried Marshmallows",
      [Lang.FR]: "Chamallows séchés",
      [Lang.DE]: "Getrocknete Marshmallows",
      [Lang.ES]: "Malvaviscos secos"
    },
    description: {
      [Lang.EN]: "A handful of hardened marshmallows that smell of dead rat. As they are now, they're completely inedible...",
      [Lang.FR]: "Quelques chamallows tout durcis et qui sentent le rat mort. C'est complètement immangeable tel quel...",
      [Lang.DE]: "Eine Handvoll steinharte Marshmallows, die nach Rattengift riechen. So wie sie jetzt sind, kannst du sie nicht essen...",
      [Lang.ES]: "Están tan duros que son difíciles de comer..."
    },
    categories: [ItemCategory.Food],
    icon: "item_chama",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.CHAMA_TASTY]: {
    id: ItemId.CHAMA_TASTY,
    numericalId: 204,
    name: {
      [Lang.EN]: "Burnt Marshmallows",
      [Lang.FR]: "Chamallows calcinés",
      [Lang.DE]: "Geröstete Marshmallows",
      [Lang.ES]: "Malvaviscos quemados"
    },
    description: {
      [Lang.EN]: "A handful of hardened marshmallows that smell of dead rat. Now they are completely burnt, I guess you could say they are edible. You could maybe say they taste good if you really think about it...",
      [Lang.FR]: "Quelques chamallows tout durcis et qui sentent le rat mort. Maintenant qu'ils sont complètement calcinés, on peut dire qu'ils sont mangeables. On peut même dire qu'ils sont appétissants, quand on y réfléchit bien…",
      [Lang.DE]: "Eine Handvoll steinharter Marshmallows, die nach Rattengift riechen. Jetzt, da sie komplett geröstet sind, kannst du sie essen, und wenn du es dir genau überlegst, sind sie sogar richtig lecker...",
      [Lang.ES]: "Estarán secos y quemados, pero hagamos cuenta de que aún son comestibles."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_chama_tasty",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 7
          }
        ]
      }
    ],
  },
  [ItemId.PC]: {
    id: ItemId.PC,
    numericalId: 205,
    name: {
      [Lang.EN]: "PC Base Unit",
      [Lang.FR]: "Unité centrale",
      [Lang.DE]: "PC-Gehäuse",
      [Lang.ES]: "Unidad central"
    },
    description: {
      [Lang.EN]: "This old metal box used to be full of electronic components. It doesn't seem to have any obvious use now...",
      [Lang.FR]: "Cette vieille boîte en ferraille contenait tout un tas de composants électroniques auparavant. Elle ne semble plus avoir aucune utilité maintenant…",
      [Lang.DE]: "Diese alte Blechkiste war mal mit verschiedenen elektronischen Bauteilen gefüllt (CPU, Hauptplatine, Hardwareschnittstellen etc ...). Was willst du jetzt noch damit anfangen?",
      [Lang.ES]: "Esta vieja caja metálica contiene un montón de componentes eléctricos. Debe ser de algún antiguo servidor de Eternaltwin, ahora no sirve de mucho..."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration, ItemCategory.Breakable],
    icon: "item_pc",
    decoration: 3,
    heavy: true,
    watchPoints: 15,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 50
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.17
    },
    opens: [
      ItemId.CHEST_FOOD,
      ItemId.CHEST_TOOLS
    ],
  },
  [ItemId.SAFE]: {
    id: ItemId.SAFE,
    numericalId: 206,
    name: {
      [Lang.EN]: "Safe",
      [Lang.FR]: "Coffre-fort",
      [Lang.DE]: "Safe",
      [Lang.ES]: "Caja fuerte"
    },
    description: {
      [Lang.EN]: "Who could even hazard a guess as to what the safe may contain? Not you in any case, not unless you know the secret combination...",
      [Lang.FR]: "Qui peut bien dire ce que ce lourd coffre-fort contient ? Sûrement pas vous en tous cas, à moins que vous ne connaissiez la combinaison secrète d'ouverture.",
      [Lang.DE]: "Toll... und wie findest du jetzt raus, was da drin ist? Ohne die Geheimkombination dürfte das etwas schwierig werden.",
      [Lang.ES]: "¿Qué tendrá dentro? Ah, claro, necesitas conocer la clave secreta para averiguarlo."
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_safe",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: -1
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "safe_#00",
            odds: 95
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "pocket_belt_#00",
            odds: 0.8
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "watergun_opt_part_#00",
            odds: 0.5
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "lawn_part_#00",
            odds: 0.5
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "chainsaw_part_#00",
            odds: 0.5
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "mixergun_part_#00",
            odds: 0.5
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "cutcut_#00",
            odds: 0.5
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "pilegun_upkit_#00",
            odds: 0.5
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "meca_parts_#00",
            odds: 0.5
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "big_pgun_part_#00",
            odds: 0.3
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "book_gen_letter_#00",
            odds: 0.3
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.RP_TWIN]: {
    id: ItemId.RP_TWIN,
    numericalId: 207,
    name: {
      [Lang.EN]: "Encyclopedia",
      [Lang.FR]: "Une encyclopédie",
      [Lang.DE]: "Eine Enzyklopädie",
      [Lang.ES]: "Una enciclopedia"
    },
    description: {
      [Lang.EN]: "This mighty tome is a volume from a series of encyclopedias known as Twinpedia. The pages are covered in strange markings and annotations as if the book has passed through the hands of many others before reaching you...",
      [Lang.FR]: "Ce gros bouquin poussiéreux est un volume d'une série d'encyclopédie baptisée Twinpedia. Les pages sont couvertes d'innombrables annotations mystérieuses, comme si elle était passée entre les mains de plusieurs personnes.",
      [Lang.DE]: "Dieser große staubige Schinken gehört zu einer Lexikonausgabe mit dem Titel \"Twinpedia\". Die Seiten sind mit Anmerkungen unterschiedlicher Handschriften vollgeschrieben.Es scheint als ob mehrere Personen daran und darin gearbeitet hätten.",
      [Lang.ES]: "Un libro muy gordo y empolvado. Sus páginas tienen muchas anotaciones misteriosas, como si hubiese pasado por las manos de varias personas."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.RP],
    icon: "item_rp_twin",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_rp_#00"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.WATER_CAN_EMPTY]: {
    id: ItemId.WATER_CAN_EMPTY,
    numericalId: 208,
    name: {
      [Lang.EN]: "Water Cooler Bottle (Empty)",
      [Lang.FR]: "Bonbonne d'eau (vide)",
      [Lang.DE]: "Wasserspender (leer)",
      [Lang.ES]: "Bombona de agua (vacía)"
    },
    description: {
      [Lang.EN]: "You'd usually expect to find one of these in some office somewhere, but by no small miracle it has fallen into your grubby paws. This could be most useful...",
      [Lang.FR]: "Cette bonbonne en plastique devait se trouver dans un quelconque bureau d'entreprise. Elle a échoué entre vos mains par on-ne-sait quel miracle et elle pourrait bien s'avérer très utile de nos jours...",
      [Lang.DE]: "Ein typischer Wasserspender, wie man ihn in jedem Großraumbüro antreffen kann. Wie durch ein Wunder ist er dir in die Hände gefallen. So ein Ding könnte hier gut nützlich sein...",
      [Lang.ES]: "Tuviste suerte al encontrarla, no es común ver eso por aquí... -- USO: si llevas una Ración de agua, será colocada en la bombona. Si no, la acción será beber el contenido de la bombona."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_water_can_empty",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.WATER }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "water_can_1_#00"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.WATER_CAN_1]: {
    id: ItemId.WATER_CAN_1,
    numericalId: 209,
    name: {
      [Lang.EN]: "Water Cooler Bottle (1 Ration)",
      [Lang.FR]: "Bonbonne d'eau (1 ration)",
      [Lang.DE]: "Wasserspender (1 Ration)",
      [Lang.ES]: "Bombona de agua (1 Ración)"
    },
    description: {
      [Lang.EN]: "You'd usually expect to find one of these in some office somewhere, but by no small miracle it has fallen into your grubby paws. This could be most useful...",
      [Lang.FR]: "Cette bonbonne en plastique devait se trouver dans un quelconque bureau d'entreprise. Elle a échoué entre vos mains par on-ne-sait quel miracle et elle pourrait bien s'avérer très utile de nos jours...",
      [Lang.DE]: "Ein typischer Wasserspender, wie man ihn in jedem Großraumbüro antreffen kann. Wie durch ein Wunder ist er dir in die Hände gefallen. So ein Ding könnte hier gut nützlich sein...",
      [Lang.ES]: "Tuviste suerte al encontrarla, no es común ver eso por aquí... -- USO: si llevas una Ración de agua, será colocada en la bombona. Si no, la acción será beber el contenido de la bombona."
    },
    categories: [ItemCategory.Food, ItemCategory.GuardWeapon, ItemCategory.APSource, ItemCategory.Water],
    icon: "item_water_can_1",
    decoration: 0,
    heavy: true,
    watchPoints: 8,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.WATER }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "water_can_2_#00"
          }
        ]
      },
      {
        type: ItemActionType.Drink,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "water_can_empty_#00"
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "thirst1"
          }
        ]
      },
      {
        type: ItemActionType.Drink,
        conditions: [
          ItemActionConditionEnum.Ghoul
        ],
        effects: [
          {
            type: ItemActionEffectType.AddStatus,
            value: "tg_meta_wound"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "water_can_empty_#00"
          }
        ]
      }
    ],
  },
  [ItemId.WATER_CAN_2]: {
    id: ItemId.WATER_CAN_2,
    numericalId: 210,
    name: {
      [Lang.EN]: "Water Cooler Bottle (2 Rations)",
      [Lang.FR]: "Bonbonne d'eau (2 rations)",
      [Lang.DE]: "Wasserspender (2 Rationen)",
      [Lang.ES]: "Bombona de agua (2 Raciones)"
    },
    description: {
      [Lang.EN]: "You'd usually expect to find one of these in some office somewhere, but by no small miracle it has fallen into your grubby paws. This could be most useful...",
      [Lang.FR]: "Cette bonbonne en plastique devait se trouver dans un quelconque bureau d'entreprise. Elle a échoué entre vos mains par on-ne-sait quel miracle et elle pourrait bien s'avérer très utile de nos jours...",
      [Lang.DE]: "Ein typischer Wasserspender, wie man ihn in jedem Großraumbüro antreffen kann. Wie durch ein Wunder ist er dir in die Hände gefallen. So ein Ding könnte hier gut nützlich sein...",
      [Lang.ES]: "Tuviste suerte al encontrarla, no es común ver eso por aquí... -- USO: si llevas una Ración de agua, será colocada en la bombona. Si no, la acción será beber el contenido de la bombona."
    },
    categories: [ItemCategory.Food, ItemCategory.GuardWeapon, ItemCategory.APSource, ItemCategory.Water],
    icon: "item_water_can_2",
    decoration: 0,
    heavy: true,
    watchPoints: 16,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.WATER }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "water_can_3_#00"
          }
        ]
      },
      {
        type: ItemActionType.Drink,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "water_can_1_#00"
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "thirst1"
          }
        ]
      },
      {
        type: ItemActionType.Drink,
        conditions: [
          ItemActionConditionEnum.Ghoul
        ],
        effects: [
          {
            type: ItemActionEffectType.AddStatus,
            value: "tg_meta_wound"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "water_can_1_#00"
          }
        ]
      }
    ],
  },
  [ItemId.WATER_CAN_3]: {
    id: ItemId.WATER_CAN_3,
    numericalId: 211,
    name: {
      [Lang.EN]: "Water Cooler Bottle (3 Rations)",
      [Lang.FR]: "Bonbonne d'eau (3 rations)",
      [Lang.DE]: "Wasserspender (3 Rationen)",
      [Lang.ES]: "Bombona de agua (3 Raciones)"
    },
    description: {
      [Lang.EN]: "You'd usually expect to find one of these in some office somewhere, but by no small miracle it has fallen into your grubby paws. This could be most useful...",
      [Lang.FR]: "Cette bonbonne en plastique devait se trouver dans un quelconque bureau d'entreprise. Elle a échoué entre vos mains par on-ne-sait quel miracle et elle pourrait bien s'avérer très utile de nos jours...",
      [Lang.DE]: "Ein typischer Wasserspender, wie man ihn in jedem Großraumbüro antreffen kann. Wie durch ein Wunder ist er dir in die Hände gefallen. So ein Ding könnte hier gut nützlich sein...",
      [Lang.ES]: "Tuviste suerte al encontrarla, no es común ver eso por aquí... -- USO: si llevas una Ración de agua, será colocada en la bombona. Si no, la acción será beber el contenido de la bombona."
    },
    categories: [ItemCategory.Food, ItemCategory.GuardWeapon, ItemCategory.APSource, ItemCategory.Water],
    icon: "item_water_can_3",
    decoration: 0,
    heavy: true,
    watchPoints: 24,
    actions: [
      {
        type: ItemActionType.Drink,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "water_can_2_#00"
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "thirst1"
          }
        ]
      },
      {
        type: ItemActionType.Drink,
        conditions: [
          ItemActionConditionEnum.Ghoul
        ],
        effects: [
          {
            type: ItemActionEffectType.AddStatus,
            value: "tg_meta_wound"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "water_can_2_#00"
          }
        ]
      }
    ],
  },
  [ItemId.BETA_DRUG_BAD]: {
    id: ItemId.BETA_DRUG_BAD,
    numericalId: 212,
    name: {
      [Lang.EN]: "Betapropine 5mg (expired)",
      [Lang.FR]: "Betapropine 5mg périmée",
      [Lang.DE]: "Abgelaufene Betapropin-Tablette 5mg",
      [Lang.ES]: "Betapropín 5mg vencido"
    },
    description: {
      [Lang.EN]: "The effects of this little pill are mysterious to say the least... On the box, it states: \"not to be taken by testers under 18 years of age\". Strange...",
      [Lang.FR]: "Ce petit cachet a un effet pour le moins mystérieux... Sur la boîte, il est écrit : « ne pas donner à un testeur de moins de 18 ans ». Étrange.",
      [Lang.DE]: "Die Wirkung dieser Tablette ist höchst zweifelhaft... Auf der Schachtel steht: \"Für BETA-Tester unter 18 Jahren nicht geeignet\". Seltsam...",
      [Lang.ES]: "Tiene un efecto misterioso... En la caja dice: \"No recomendado para beta-testers menores de 18 años\". Extraño."
    },
    categories: [ItemCategory.Pharmacy, ItemCategory.APSource, ItemCategory.Drug, ItemCategory.Alcohol],
    icon: "item_beta_drug_bad",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_cobaye_#00"
          },
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_drug_#00",
            odds: 100
          },
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_alcool_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "clean",
            odds: 100
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "drugged",
            odds: 100
          },
          {
            type: ItemActionEffectType.AP,
            value: 6,
            odds: 25
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "terror",
            odds: 25
          },
          {
            type: ItemActionEffectType.AP,
            value: 4,
            odds: 25
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "drunk",
            odds: 25
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.BETA_DRUG]: {
    id: ItemId.BETA_DRUG,
    numericalId: 213,
    name: {
      [Lang.EN]: "Betapropine 5mg",
      [Lang.FR]: "Betapropine 5mg",
      [Lang.DE]: "Betapropin-Tablette 5mg",
      [Lang.ES]: "Betapropín 5mg"
    },
    description: {
      [Lang.EN]: "On the box, it states: \"not to be taken by testers under 18 years of age\". Strange...",
      [Lang.FR]: "Sur la boîte, il est écrit : « ne pas donner à un testeur de moins de 18 ans ». Étrange.",
      [Lang.DE]: "Auf der Schachtel steht: \"Für BETA-Tester unter 18 Jahren nicht geeignet\". Seltsam...",
      [Lang.ES]: "En la caja dice: \"No recomendado para beta-testers menores de 18 años\". Extraño."
    },
    categories: [ItemCategory.Pharmacy, ItemCategory.APSource, ItemCategory.PrivateTown],
    icon: "item_beta_drug",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 26
          }
        ]
      }
    ],
  },
  [ItemId.FRUIT_SUB_PART]: {
    id: ItemId.FRUIT_SUB_PART,
    numericalId: 214,
    name: {
      [Lang.EN]: "Fleshrooms",
      [Lang.FR]: "Charognardes",
      [Lang.DE]: "Aasbeeren",
      [Lang.ES]: "Hongos carroñeros"
    },
    description: {
      [Lang.EN]: "These are berry-like plants which grow on decomposing corpses: it's not unusual to see them on zombies or on dead animals... Are you sure they're ok to eat?",
      [Lang.FR]: "Les Charognardes sont des baies qui poussent généralement sur les corps en décomposition : il n'est pas rare d'en apercevoir sur des zombies ou sur les cadavres d'animaux divers… Vous êtes sûr(e) que ça se mange ?",
      [Lang.DE]: "Aasbeeren sind Beeren, die auf verwesten Leichen wachsen. Man findet sie oft auf Zombies, aber erst recht auf Tierkadavern...Willst du sie wirklich essen?",
      [Lang.ES]: "Crecen generalmente en los cuerpos en descomposición: no es raro verlos en los zombies o en cadáveres de animales diversos... ¿Estás seguro de que eso se come?"
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.ShunnedItem],
    icon: "item_fruit_sub_part",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Trash]: 29.59
    },
  },
  [ItemId.FRUIT_PART]: {
    id: ItemId.FRUIT_PART,
    numericalId: 215,
    name: {
      [Lang.EN]: "Sticky Pastry Ball",
      [Lang.FR]: "Boule de pâtes visqueuse",
      [Lang.DE]: "Schleimige Kugel",
      [Lang.ES]: "Bola viscosa"
    },
    description: {
      [Lang.EN]: "A cake made from \"Fleshrooms\", a berry which basically grows on corpses...",
      [Lang.FR]: "Un agrégat de \"Charognardes\", une baie qui pousse essentiellement sur des cadavres...",
      [Lang.DE]: "Eine glitschige Kugel aus zusammengeklebten \"Aasbeeren\" \"Aasbeeren\" wachsen hauptsächtlich auf Kadavern.",
      [Lang.ES]: "Una colonia de hongos carroñeros que crecen generalmente en los cuerpos en descomposición..."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.ShunnedItem],
    icon: "item_fruit_part",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Trash]: 8.07
    },
  },
  [ItemId.FLESH_PART]: {
    id: ItemId.FLESH_PART,
    numericalId: 216,
    name: {
      [Lang.EN]: "Pound of Flesh",
      [Lang.FR]: "Lambeau de chair",
      [Lang.DE]: "Fleischfetzen",
      [Lang.ES]: "Trozo de pellejo"
    },
    description: {
      [Lang.EN]: "An old lump of flesh and skin of origin unknown. What do you propose doing with it?",
      [Lang.FR]: "Un vieux bout de peau, ou de quoi que ce soit d'autre qui appartenait à un être vivant. Mais qu'est-ce que vous faites avec ça ?",
      [Lang.DE]: "Ein altes Hautstück oder irgend etwas anderes, das mal zu einem Lebewesen gehörte. Was willst du damit anstellen?",
      [Lang.ES]: "Un viejo pedazo de piel u otra cosa que perteneció al cuerpo de un ser vivo. ¿Pero qué puedes hacer con eso?"
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.ShunnedItem],
    icon: "item_flesh_part",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Trash]: 37.66
    },
  },
  [ItemId.FLESH]: {
    id: ItemId.FLESH,
    numericalId: 217,
    name: {
      [Lang.EN]: "Grisly Bomb",
      [Lang.FR]: "Bombe macabre",
      [Lang.DE]: "Makabre Bombe",
      [Lang.ES]: "Bomba macabra"
    },
    description: {
      [Lang.EN]: "The best thing about this deformed lump of flesh is that the stench of decay hits you from ten metres away. Ideal for distracting zombies while you get the hell outta there!",
      [Lang.FR]: "L'avantage de cette boule de chair difforme, c'est qu'elle sent la charogne à 10 mètres à la ronde. Pratique pour occuper les zombies quelques instants.",
      [Lang.DE]: "Das tolle an dieser unförmigen Fleischkugel ist, dass sie auf 10 Meter nach Aas stinkt. Damit kannst du die Zombies 'ne Zeit lang beschäftigen.",
      [Lang.ES]: "La ventaja de esta bola deforme de carne, es que huele a carroña en 10 metros a la redonda. Muy útil para entretener a los zombies por unos instantes."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_flesh",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetEscapeTime,
            value: 40
          }
        ]
      }
    ],
  },
  [ItemId.PHARMA_PART]: {
    id: ItemId.PHARMA_PART,
    numericalId: 218,
    name: {
      [Lang.EN]: "Thick Solution",
      [Lang.FR]: "Substance épaisse",
      [Lang.DE]: "Dickflüssige Substanz",
      [Lang.ES]: "Sustancia espesa"
    },
    description: {
      [Lang.EN]: "This flask contains an oily liquid with incredible colours. Maybe if it is combined with something else, you can make something useful?",
      [Lang.FR]: "Ce flacon contient un liquide aux couleurs... étonnantes. Peut-être qu'en le mélangeant avec autre chose, vous pourriez obtenir quelque chose d'utile ?",
      [Lang.DE]: "Dieses kleine Fläschen enthält eine fluoresziernde Flüssigkeit. Erstaunlich! Vielleicht kannst du ja was Nützliches brauen, wenn du die Substanz mit etwas anderem mischst?",
      [Lang.ES]: "Este frasco contiene un líquido de colores... sorprendentes. Tal vez mezclándolo con otra cosa obtengas algo útil."
    },
    categories: [ItemCategory.Pharmacy, ItemCategory.ShunnedItem],
    icon: "item_pharma_part",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Trash]: 21.52
    },
  },
  [ItemId.FRUIT]: {
    id: ItemId.FRUIT,
    numericalId: 219,
    name: {
      [Lang.EN]: "Fleshroom Puree",
      [Lang.FR]: "Purée de charognardes",
      [Lang.DE]: "Aasbeerenbrei",
      [Lang.ES]: "Puré de hongos carroñeros"
    },
    description: {
      [Lang.EN]: "Oh my god this smells vile! It's made from \"fleshroom berries\" which grow on corpses. If you're not worried about dying from a virulent infection, it just might stop you being hungry... maybe permanently.",
      [Lang.FR]: "Ça sent vraiment très mauvais. Cette boule est un agrégat de “Baies charognardes” qui ont poussé sur un cadavre quelconque. Si vous n'avez pas peur de mourir d'une infection virulente, peut-être qu'elle pourrait vous rassasier si vous la mangiez ?",
      [Lang.DE]: "Dieser Brei stinkt wie die Pest, da die dafür verarbeiteten Beeren für gewöhnlich auf Kadavern wachsen. Wenn du vor einer akuten Infektion keine Angst hast könntest du ihn ja mal vorsichtig probieren. Vielleicht macht er ja satt?",
      [Lang.ES]: "Realmente esto apesta. Es una bola aplastada de hongos que crecieron en algún cadáver. Si no le tienes miedo a nada, ¿crees que esto podrá calmar tu hambre?"
    },
    categories: [ItemCategory.Food, ItemCategory.APSource, ItemCategory.Poisonable],
    icon: "item_fruit",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.Ghoulify,
            odds: 4
          }
        ]
      },
      {
        type: ItemActionType.Eat,
        conditions: [
          ItemActionConditionEnum.Ghoul
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
  },
  [ItemId.WATER_CUP_PART]: {
    id: ItemId.WATER_CUP_PART,
    numericalId: 220,
    name: {
      [Lang.EN]: "Stagnant Water Can",
      [Lang.FR]: "Eau croupie",
      [Lang.DE]: "Eisengefäß mit modrigem Wasser",
      [Lang.ES]: "Agua estancada"
    },
    description: {
      [Lang.EN]: "A metal coil allows small amounts of water to be condensed and collected from water vapour in the air. The problem is that the water is not drinkable as it is...",
      [Lang.FR]: "Ce bout de ferraille tordue a permis de capter de l'eau, en petite quantité. Le problème, c'est qu'elle n'est pas potable, en l'état.",
      [Lang.DE]: "Dieser total verformte Eisenbehälter hat eine kleine Menge Wasser aufgefangen.Das Problem ist, das du es nicht trinken kannst, da es schmutzig ist.",
      [Lang.ES]: "Una pieza de metal oxidado ha conservado una pequeña cantidad de agua. El problema es que no es potable."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.ShunnedItem],
    icon: "item_water_cup_part",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.WATER_CLEANER },
          ItemActionConditionEnum.Inside
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_solban_#00"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "water_cup_#00",
            odds: 100
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Trash]: 1.61
    },
  },
  [ItemId.WATER_CUP]: {
    id: ItemId.WATER_CUP,
    numericalId: 221,
    name: {
      [Lang.EN]: "Purified Stagnant Water",
      [Lang.FR]: "Eau croupie purifiée",
      [Lang.DE]: "Gereinigtes modriges Wasser",
      [Lang.ES]: "Agua estancada purificada"
    },
    description: {
      [Lang.EN]: "A metal coil allows small amounts of water to be condensed and collected from water vapor in the air. It's a very small amount actually, but it's better than nothing.",
      [Lang.FR]: "Ce bout de ferraille tordue a permis de capter de l'eau, en petite quantité. C'est peu, mais c'est mieux que rien…",
      [Lang.DE]: "Dieser total verformte Eisenbehälter enthält eine kleine Menge gereinigtes Wasser. Es ist nicht viel, aber besser als nichts.)",
      [Lang.ES]: "Una pieza de metal oxidado ha conservado una pequeña cantidad de agua. No es mucha, pero es mejor que nada."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource, ItemCategory.Water],
    icon: "item_water_cup",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Drink,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "thirst1"
          }
        ]
      },
      {
        type: ItemActionType.Drink,
        conditions: [
          ItemActionConditionEnum.Ghoul
        ],
        effects: [
          {
            type: ItemActionEffectType.AddStatus,
            value: "tg_meta_wound"
          }
        ]
      }
    ],
  },
  [ItemId.BANNED_NOTE]: {
    id: ItemId.BANNED_NOTE,
    numericalId: 222,
    name: {
      [Lang.EN]: "Banned Citizen's Note",
      [Lang.FR]: "Note d'un citoyen banni",
      [Lang.DE]: "Notizzettel eines Verbannten",
      [Lang.ES]: "Nota de un habitante desterrado"
    },
    description: {
      [Lang.EN]: "This note was written by a banned citizen... Who knows what he could have written ?",
      [Lang.FR]: "Ce bout de papier appartenait à un <em>citoyen banni</em>… Qui sait ce qu'il a bien pu y écrire ?",
      [Lang.DE]: "Dieser Notizzettel gehörte einem <em>Verbannten</em>. Mal sehen, was er geschrieben hat...",
      [Lang.ES]: "Esta nota pertenecía a un Desterrado. ¿Qué pudo haber escrito?"
    },
    info: {
      [Lang.EN]: "Can contain the x,y coordinates of the shunned citizen's buried stash.",
      [Lang.FR]: "Peut contenir les coordonnées x,y de la cachette enterrée du citoyen banni.",
      [Lang.DE]: "Kann die x,y-Koordinaten des vergrabenen Verstecks des verbannten Bürgers enthalten.",
      [Lang.ES]: "Puede contener las coordenadas x,y del escondite enterrado del ciudadano desterrado."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.ShunnedItem],
    icon: "item_banned_note",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.INFECT_POISON_PART]: {
    id: ItemId.INFECT_POISON_PART,
    numericalId: 223,
    name: {
      [Lang.EN]: "Bloody Dressing",
      [Lang.FR]: "Pansement ensanglanté",
      [Lang.DE]: "Blutdurchtränkter Verband",
      [Lang.ES]: "Tirita ensangrentada"
    },
    description: {
      [Lang.EN]: "This blood-soaked bandage belonged to an infected citizen...",
      [Lang.FR]: "Le sang qui couvre ce pansement est celui d'un citoyen infecté...",
      [Lang.DE]: "Dieser blutdurchtränkte Verband wurde vormals von einem infizierten Bürger getragen...",
      [Lang.ES]: "Esta tirita ensangrentada fue previamente usada en la gangrena de un habitante infectado..."
    },
    categories: [ItemCategory.Pharmacy, ItemCategory.PrivateTown],
    icon: "item_infect_poison_part",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.TEDDY_01]: {
    id: ItemId.TEDDY_01,
    numericalId: 224,
    name: {
      [Lang.EN]: "Cursed Cuddly Toy",
      [Lang.FR]: "Teddy n'Ours maudit",
      [Lang.DE]: "Verfluchter Teddybär",
      [Lang.ES]: "Osito cariñosito maldito"
    },
    description: {
      [Lang.EN]: "A small plush teddy bear which would have been a child's pride and joy... or not...",
      [Lang.FR]: "Un petit doudou en peluche qui a dû faire le petit bonheur d'un enfant... Ou pas...",
      [Lang.DE]: "Das alleinige Ansehen des Teddys macht dich verrückt.Vielleicht solltest du ihn aus dem Fenster werfen? Immerhin befindest du dich in einem verlassenen Hotel...",
      [Lang.ES]: "Un peluche que habrá dado mucha \"felicidad\" a un niño... o pudo haberlo poseído..."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_teddy",
    decoration: 1,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AddStatus,
            value: "terror"
          }
        ]
      }
    ],
  },
  [ItemId.WOODSTEAK]: {
    id: ItemId.WOODSTEAK,
    numericalId: 225,
    name: {
      [Lang.EN]: "Sawdust Steak",
      [Lang.FR]: "Steak de sciure",
      [Lang.DE]: "Sägemehlsteak",
      [Lang.ES]: "Bistec de serrín"
    },
    description: {
      [Lang.EN]: "A slice of meat, covered in sawdust and wood chippings... Only they're not chips, but rather woodworm, which is logical enough seeing as the thing won't stop moving.",
      [Lang.FR]: "Une tranche de viande recouverte de sciure et de copeaux de bois... À moins que ce ne soit pas des copeaux, mais des vers à bois, ce qui semblerait logique puisque ça n'arrête pas de bouger.",
      [Lang.DE]: "Man nehme eine Scheibe Fleisch, paniere das Ganze mit Sägemehl und streue anschließend einige Holzstücke darüber... et Voilà! Im Holz scheinen auch einige Holzwürmer gewesen zu sein, denn das Ding hört nicht auf sich zu bewegen.",
      [Lang.ES]: "Una rebanada de carne cubierta con serrín y viruta de madera... Pero tal vez no sean virutas, sino gusanos, lo que parece más lógico porque no dejan de moverse."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_woodsteak",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 7
          }
        ]
      }
    ],
  },
  [ItemId.CHRISTMAS_SUIT_1]: {
    id: ItemId.CHRISTMAS_SUIT_1,
    numericalId: 226,
    name: {
      [Lang.EN]: "Second-hand Red Coat",
      [Lang.FR]: "Veste rouge usée",
      [Lang.DE]: "Abgetragene rote Jacke",
      [Lang.ES]: "Chaqueta roja usada"
    },
    description: {
      [Lang.EN]: "It's a bit big for you: it seems to have been previously owned by someone with a big belly and bad taste, as can clearly be seen from the white for on the collar and cuffs...",
      [Lang.FR]: "C'est un peu large pour vous : cette veste a, semble-t-il, été taillée pour une personne bedonnante et au mauvais goût certain, comme en atteste la moumoute blanche au col et aux manches...",
      [Lang.DE]: "Ein wenig zu gross für dich. Sieht so aus als waren seine Vorbesitzer ein wenig beleibter und hatten schlechten Geschmack...was man ohne Zweifel erkennen kann.",
      [Lang.ES]: "Es un poco grande para ti: parece haber pertenecido a alguien con una gran barriga y mal gusto, como se puede ver claramente en el blanco del cuello y los puños."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Event],
    icon: "item_christmas_suit_1",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    event: GameEvent.Christmas,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.66
    },
  },
  [ItemId.CHRISTMAS_SUIT_2]: {
    id: ItemId.CHRISTMAS_SUIT_2,
    numericalId: 227,
    name: {
      [Lang.EN]: "Ripped Red Trousers",
      [Lang.FR]: "Pantalon rouge déchiré",
      [Lang.DE]: "Zerrissene rote Hose",
      [Lang.ES]: "Pantalones rojos usados"
    },
    description: {
      [Lang.EN]: "These old strides reek of urine, and have been repaired regularly. They probably look better on... (ON FIRE!) They'll suit you perfectly!",
      [Lang.FR]: "Ce vieux pantalon sent l'urine, est taché à plusieurs endroits et est tout juste bon à servir de combustible. Il vous va à merveille.",
      [Lang.DE]: "Diese alten Fetzen riechen nach Urin und wurden mehrmals geflickt. Besser aussehen würden sie....ohh, sie passt Dir perfekt.",
      [Lang.ES]: "Estos viejos pantalones huelen a orina y se han reparado con regularidad. Probablemente se vean mejor en... (¡ENCENDIDO!) ¡Te quedarán perfectamente!"
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Event],
    icon: "item_christmas_suit_2",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    event: GameEvent.Christmas,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.58
    },
  },
  [ItemId.CHRISTMAS_SUIT_3]: {
    id: ItemId.CHRISTMAS_SUIT_3,
    numericalId: 228,
    name: {
      [Lang.EN]: "Foul-smelling Red Hat",
      [Lang.FR]: "Bonnet rouge malodorant",
      [Lang.DE]: "Schweißtriefende rote Mütze",
      [Lang.ES]: "Gorro rojo maloliente"
    },
    description: {
      [Lang.EN]: "A hat which have been used as a nest by several generations of pigeons and other malodorous wildlife. The interior lining of dried droppings gives it a strange texture... and makes your head itch when you put it on.",
      [Lang.FR]: "Un bonnet qui a dû servir de nid à plusieurs générations de pigeons et autres nuisibles malodorants. Les fientes séchées tapissées à l'intérieur lui confère une texture étrange... Et ça vous gratte la tête quand vous l'enfilez.",
      [Lang.DE]: "Viele seltsame Gestalten haben diese stinkende Mütze schon getragen, und trotzdem geht dein Herz auf, als du sie aufsetzt.",
      [Lang.ES]: "Un sombrero que ha sido utilizado como nido por varias generaciones de palomas y otros animales malolientes. El revestimiento interior de excrementos secos le da una textura extraña... Y te pica la cabeza cuando te lo pones."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Event],
    icon: "item_christmas_suit_3",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    event: GameEvent.Christmas,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.5
    },
  },
  [ItemId.CHRISTMAS_SUIT_FULL]: {
    id: ItemId.CHRISTMAS_SUIT_FULL,
    numericalId: 229,
    name: {
      [Lang.EN]: "Foul-smelling Vintage Suit",
      [Lang.FR]: "Costume malodorant d'une autre époque",
      [Lang.DE]: "Übelriechender Anzug aus einer anderen Zeit",
      [Lang.ES]: "Traje de Papá Noel"
    },
    description: {
      [Lang.EN]: "This outfit suits you down to the ground (some say that it even smells like you). You suddenly feel like you should be bringing joy to your neighbours by sliding discretely down their chimney with your arms full of gifts. You can use this tactic to burgle, pillage and loot your way to happiness at your neighbours' expense. Ah, the magic of Cristmas...",
      [Lang.FR]: "Ce costume vous va comme un charme (les mauvaises langues diront que c'est lié à l'odeur). Vous vous sentez soudainement l'envie d'apporter le bonheur dans la maison de vos voisins en vous y glissant discrètement par la cheminée avec des cadeaux plein les bras. Vous pouvez aussi choisir d'utiliser cet avantage pour piller sans vergogne leurs taudis pour repartir avec des cadeaux plein les poches. C'est un peu ça, la magie de Noël.",
      [Lang.DE]: "Als du diesen Anzug anziehst, verspürst du den Drang, deinen Nachbarn eine Freude zu machen und seltsame Eintrittswege zu wählen. Nutze die Chance und bestehle deine Nachbarn nach Herzenslust.",
      [Lang.ES]: "Este atuendo te queda hasta el suelo (algunos dicen que incluso huele a ti). De repente sientes que deberías alegrar a tus vecinos deslizandote discretamente por sus chimeneas con los brazos llenos de regalos. Puedes usar esto como una táctica para robar, saquear y birlar tu camino hacia la felicidad a tus vecinos. Ah, la magia de la Navidad..."
    },
    info: {
      [Lang.EN]: "Allows you to anonymously steal from other players' houses.",
      [Lang.FR]: "Vous permet de voler anonymement dans les maisons d'autres joueurs.",
      [Lang.DE]: "Erlaubt es Ihnen, anonym in die Häuser anderer Spieler zu stehlen.",
      [Lang.ES]: "Te permite robar anónimamente en las casas de otros jugadores."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Event],
    icon: "item_christmas_suit_full",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    event: GameEvent.Christmas,
    actions: [
      {
        type: ItemActionType.Steal,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_santac_#00"
          }
        ]
      }
    ],
  },
  [ItemId.IPHONE]: {
    id: ItemId.IPHONE,
    numericalId: 230,
    name: {
      [Lang.EN]: "Mobile Phone",
      [Lang.FR]: "Téléphone portable",
      [Lang.DE]: "Mobiltelefon",
      [Lang.ES]: "Teléfono móvil"
    },
    description: {
      [Lang.EN]: "This antique gadget was a very well known model. Right up until the point where they all exploded, killing millions of people and wiping great cities off the map. This should surely make a quality grenade!",
      [Lang.FR]: "Cet antique appareil était un modèle de téléphone très réputé. C'était jusqu'à ce qu'il cause la mort de millions de personnes en explosant et rayant de la carte plusieurs grandes villes, à travers le monde. Ça fera sûrement une bonne grenade.",
      [Lang.DE]: "Dieses uralte Modell, war mal ein ziemlich angesagtes Handy. Eines Tages jedoch fingen die Dinger urplötzlich zu explodieren an... Da das Handy weit verbreitet war, sind Millionen Menschen bei diesen Explosionen gestorben. Ganze Städte wurden von der Landkarte ausgelöscht. Hhmmm... Das gibt bestimmt eine gute Granate ab.",
      [Lang.ES]: "Es un modelo muy famoso... por haber explotado causando la muerte de miles de personas y borrando del mapa muchas ciudades en todo el mundo. Servirá como granada."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_iphone",
    decoration: 0,
    heavy: false,
    watchPoints: 5,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "deto_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "metal_bad_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "pile_broken_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "electro_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1-2"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.SMELLY_MEAT]: {
    id: ItemId.SMELLY_MEAT,
    numericalId: 231,
    name: {
      [Lang.EN]: "Festering Flesh",
      [Lang.FR]: "Pelures de peau",
      [Lang.DE]: "Ekliger Hautfetzen",
      [Lang.ES]: "Pellejo humano"
    },
    description: {
      [Lang.EN]: "This disgusting lump of flesh must have been torn off another citizen and left with the worms for a while. The odious stench could probably even cover your own atrocious body odour! This item will significantly increase your chances of surviving a little camping trip (you must be carrying the item to benefit from the bonus).",
      [Lang.FR]: "Cet horrible lambeau de chair a dû être arraché à un autre citoyen, avant d'être abandonné aux vers pendant quelques temps. Son odeur atroce devrait pouvoir couvrir votre propre odeur corporelle : cet objet augmente sensiblement vos chances de survie en cas de camping (vous devez le garder sur vous pour profiter de cet avantage).",
      [Lang.DE]: "Dieser übelriechende Hautfetzen gehörte früher mal einem deiner Mitbürger. Jetzt gehört er den Maden... Mit seinem unerträglichen Gestank kannst du deinen eigenen Körpergeruch überdecken, so dass dich die Untoten nicht mehr so gut riechen können. Benutze diesen Gegenstand, um deine Überlebenschancen beim Campen zu verbessern (Dazu musst du den Hautfetzen bei Dir tragen).",
      [Lang.ES]: "Esta horripilante bolsa de piel fue arrancada a algún pobre hombre. Su mal olor te servirá para camuflar tu aroma a carne fresca. Aumenta las probabilidades de sobrevivir al acampar. Debes llevarlo puesto para recibir el bonus."
    },
    info: {
      [Lang.EN]: "Increases the chances of survival while camping by 5%. Stackable.",
      [Lang.FR]: "Augmente les chances de survie lors du camping de 5%. Cumulable.",
      [Lang.DE]: "Erhöht die Überlebenschancen beim Campen um 5 %. Stapelbar.",
      [Lang.ES]: "Aumenta las posibilidades de supervivencia mientras acampa en un 5%. Apilable."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.CampingBoost],
    icon: "item_smelly_meat",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.MAGLITE_OFF]: {
    id: ItemId.MAGLITE_OFF,
    numericalId: 232,
    name: {
      [Lang.EN]: "Novelty Torch (off)",
      [Lang.FR]: "Maglite Pif'Gadget (éteinte)",
      [Lang.DE]: "MagLite Kinderlampe (aus)",
      [Lang.ES]: "Linterna Gagdet (apagada)"
    },
    description: {
      [Lang.EN]: "This big, dubiously designed pocket torch would be really useful for your searches in the desert were it not for the fact that day and night are but concepts in MyHordes. You might be able to find another use for it though.",
      [Lang.FR]: "Cette grosse lampe de poche au design douteux pourrait bien vous être utile pour vos fouilles dans le désert. Pour l'allumer, il suffit d'appuyer sur le nez du gros chien jaune, sur la poignée.",
      [Lang.DE]: "Diese große Taschenlampe ist wirklich nützlich für die Suche in der Wüste, vor allem Nachts. Möglicherweise kan man noch eine andere Verwendung für sie finden, wenn sie angehen würde....",
      [Lang.ES]: "Esta gran linterna de forma rara puede serte útil en tus búsquedas en el desierto. Si solo tuvieras una pila..."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_maglite_off",
    decoration: 5,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.PILE }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "maglite_2_#00"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.MAGLITE_1]: {
    id: ItemId.MAGLITE_1,
    numericalId: 233,
    name: {
      [Lang.EN]: "Novelty Torch (1 charge)",
      [Lang.FR]: "Maglite Pif'Gadget (1 charge)",
      [Lang.DE]: "MagLite Kinderlampe (1 Ladung)",
      [Lang.ES]: "Linterna Gagdet (1 carga)"
    },
    description: {
      [Lang.EN]: "This big, dubiously designed pocket torch would be really useful for your searches in the desert were it not for the fact that day and night are but concepts in MyHordes. You might be able to find another use for it though.",
      [Lang.FR]: "Cette grosse lampe de poche au design douteux pourrait bien vous être utile pour vos fouilles dans le désert. Pour l'allumer, il suffit d'appuyer sur le nez du gros chien jaune, sur la poignée. Vous notez que la lampe fait maintenant \"ouh ouh ouh\" quand vous la secouez.",
      [Lang.DE]: "Diese große Taschenlampe ist wirklich nützlich für die Suche in der Wüste, vor allem Nachts. Möglicherweise kann man noch eine andere Verwendung für sie finden.",
      [Lang.ES]: "Esta gran linterna de forma rara puede serte útil en tus búsquedas en el desierto."
    },
    info: {
      [Lang.EN]: "Decreases the night time penalty from -10% to -2.5% while scavenging if on the ground in a zone.",
      [Lang.FR]: "Diminue la pénalité de nuit de -10% à -2,5% lors de la fouille si elle est au sol dans une zone.",
      [Lang.DE]: "Verringert die Nachtzeitstrafe von -10 % auf -2,5 %, während Sie in einer Zone nach Schätzen suchen.",
      [Lang.ES]: "Disminuye la penalización nocturna del -10% al -2.5% mientras se busca si está en el suelo en una zona."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_maglite_1",
    decoration: 5,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.PILE }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "maglite_2_#00"
          }
        ]
      }
    ],
  },
  [ItemId.MAGLITE_2]: {
    id: ItemId.MAGLITE_2,
    numericalId: 234,
    name: {
      [Lang.EN]: "Novelty Torch (2 charges)",
      [Lang.FR]: "Maglite Pif'Gadget (2 charges)",
      [Lang.DE]: "MagLite Kinderlampe (2 Ladungen)",
      [Lang.ES]: "Linterna Gagdet (2 cargas)"
    },
    description: {
      [Lang.EN]: "This big, dubiously designed pocket torch would be really useful for your searches in the desert were it not for the fact that day and night are but concepts in MyHordes. You might be able to find another use for it though.",
      [Lang.FR]: "Cette grosse lampe de poche au design douteux pourrait bien vous être utile pour vos fouilles dans le désert. Pour l'allumer, il suffit d'appuyer sur le nez du gros chien jaune, sur la poignée. Vous notez que la lampe fait maintenant \"ouh ouh ouh\" quand vous la secouez.",
      [Lang.DE]: "Diese große Taschenlampe ist wirklich nützlich für die Suche in der Wüste, vor allem Nachts. Möglicherweise kann man noch eine andere Verwendung für sie finden.",
      [Lang.ES]: "Esta gran linterna de forma rara puede serte útil en tus búsquedas en el desierto."
    },
    info: {
      [Lang.EN]: "Decreases the night time penalty from -10% to -2.5% while scavenging if on the ground in a zone.",
      [Lang.FR]: "Diminue la pénalité de nuit de -10% à -2,5% lors de la fouille si elle est au sol dans une zone.",
      [Lang.DE]: "Verringert die Nachtzeitstrafe von -10 % auf -2,5 %, während Sie in einer Zone nach Schätzen suchen.",
      [Lang.ES]: "Disminuye la penalización nocturna del -10% al -2.5% mientras se busca si está en el suelo en una zona."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_maglite_2",
    decoration: 5,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.CADAVER]: {
    id: ItemId.CADAVER,
    numericalId: 235,
    name: {
      [Lang.EN]: "Traveller's Corpse",
      [Lang.FR]: "Cadavre d'un voyageur",
      [Lang.DE]: "Leiche eines Reisenden",
      [Lang.ES]: "Cadáver de un viajero"
    },
    description: {
      [Lang.EN]: "This corpse isn't from yesterday: the worms have already eaten a decent amount of whoever it was... Are you sure you want to wander around with this monstrosity on your shoulders?",
      [Lang.FR]: "Ce cadavre ne date pas d'hier : les vers ont déjà bouffé une bonne partie de ce qui pouvait l'être... Vous êtes sûr(e) que vous voulez vous promener avec cette horreur sur les épaules ?",
      [Lang.DE]: "Diese Leiche liegt hier schon ein bisschen länger rum: Fliegenmaden haben sich schon an ihm zu schaffen gemacht und den größten Teil gegessen... Bist du sicher, dass du DIESES DING schultern möchtest?",
      [Lang.ES]: "Los gusanos no han dejado mucho... ¿Estás seguro de querer llevar eso en los hombros?"
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_cadaver",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_cannib_#00"
          },
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "cadaver_remains_#00"
          },
          {
            type: ItemActionEffectType.Infect,
            odds: 10
          },
          {
            type: ItemActionEffectType.Ghoulify,
            odds: 90
          }
        ]
      },
      {
        type: ItemActionType.Eat,
        conditions: [
          ItemActionConditionEnum.Ghoul
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_cannib_#00"
          },
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "cadaver_remains_#00"
          },
          {
            type: ItemActionEffectType.ReduceGhoulHunger,
            value: -30
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.CADAVER_REMAINS]: {
    id: ItemId.CADAVER_REMAINS,
    numericalId: 236,
    name: {
      [Lang.EN]: "Gnawed Corpse",
      [Lang.FR]: "Cadavre rongé",
      [Lang.DE]: "Angenagte Leiche",
      [Lang.ES]: "Cadáver carcomido"
    },
    description: {
      [Lang.EN]: "Bones which appear to have been chewed by a beast or... someone. Something unpleasant is going on in town.",
      [Lang.FR]: "Des ossements qui ont l'air d'avoir été rongés par une bête ou... quelqu'un. Il y a quelque chose de pas très net dans cette ville.",
      [Lang.DE]: "Loses herumliegendes Gebein. Sieht aus, als ob es von einem 'wilden Tier' angenagt worden wäre... Die Bissspuren sehen aber menschlich aus. Irgendetwas stimmt hier nicht...",
      [Lang.ES]: "Los huesos han sido roídos por algo o... alguien. Este pueblo me sorprende cada vez más."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_cadaver_remains",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.SMOKE_BOMB]: {
    id: ItemId.SMOKE_BOMB,
    numericalId: 237,
    name: {
      [Lang.EN]: "« Pine Fresh » Smoke Bomb",
      [Lang.FR]: "Fumigène « Senteur Sapin »",
      [Lang.DE]: "Rauchgranate 'Tannenduft'",
      [Lang.ES]: "Bomba de humo «Aroma de pino»"
    },
    description: {
      [Lang.EN]: "A very popular model among smoke-bomb fans, this one smells of pine trees. Please note: this object deletes all entries in the register from the last 3 minutes. It also conceals your next movements for one minute after use. WARNING: use this object AFTER having carried out the actions you wish to conceal...",
      [Lang.FR]: "Un modèle très courant de fumigènes, celui-ci ayant la particularité de sentir le conifère. NOTE : cet objet efface les entrées du registre des 3 dernières minutes. Il dissimule aussi votre prochain mouvement s'il est effectué au plus tard 1 minute après l'utilisation du fumigène. ATTENTION : utilisez cet objet APRÈS avoir réalisé les actions que vous souhaitez masquer...",
      [Lang.DE]: "Es handelt sich um eine bekannte Rauchgranatenmarke, die herzlich frisch nach Tannenzapfen riecht. BEACHTE: Dieser Gegenstand löscht drei Minuten lange alle Registereinträge. Die letzte Bewegungsaktion wird gelöscht, wenn sie spätestens eine Minute nach Benutzung der Rauchgranate erfolgt. ACHTUNG: Die Rauchgranate bitte erst NACH deiner Verheimlichungsaktion werfen.",
      [Lang.ES]: "Además de perfumar el ambiente, te permite borrar las notas en el Registro de los 3 últimos minutos y ocultar también tu próximo movimiento si es realizado en el minuto después de su uso. Atención: úsalo DESPUÉS de haber realizado las acciones que deseas ocultar, y en el Ultramundo..."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_smoke_bomb",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.77
    },
  },
  [ItemId.SAND_BALL]: {
    id: ItemId.SAND_BALL,
    numericalId: 238,
    name: {
      [Lang.EN]: "Sand Ball",
      [Lang.FR]: "Boule de sable",
      [Lang.DE]: "Sandball",
      [Lang.ES]: "Bola de arena"
    },
    description: {
      [Lang.EN]: "A harmless ball of sand (with some gravel for good measure) which you are just itching to launch into another citizen's face. You have no idea where this bizarre craving came from.",
      [Lang.FR]: "Une banale boule de sable (avec quelques graviers en prime) qu'il vous démange de jeter au visage d'un autre citoyen. Vous ignorez d'où vous vient cette envie bizarre.",
      [Lang.DE]: "Du hältst eine schlichte Sandkugel in der Hand, die du vorher mit ein paar fiesen Kieselsteinchen angereicherst hast. HeHe! Irgendwie verspürst du gerade eine unglaubliche Lust diesen Ball jemanden ins Gesicht zu werfen. Wenn schon kein Schnee, dann wenigstens 'ne Sandballschlacht!",
      [Lang.ES]: "Una bola de arena inofensiva (con un poco de grava por si acaso) que estás deseando lanzar a la cara de otro. No tienes idea de dónde vino este extraño deseo."
    },
    info: {
      [Lang.EN]: "Can be thrown every 30 minutes outside of the town. If there are multiple players in the same zone, the target will be chosen randomly. Can injure the target in hardcore towns.",
      [Lang.FR]: "Peut être lancée toutes les 30 minutes hors de la ville. Si plusieurs joueurs se trouvent dans la même zone, la cible sera choisie aléatoirement. Peut blesser la cible en Pandémonium.",
      [Lang.DE]: "Kann alle 30 Minuten außerhalb der Stadt geworfen werden. Wenn mehrere Spieler in derselben Zone sind, wird das Ziel zufällig ausgewählt. Kann das Ziel in Hardcore-Städten verletzen.",
      [Lang.ES]: "Se puede lanzar cada 30 minutos fuera del pueblo. Si hay varios jugadores en la misma zona, el objetivo se elegirá aleatoriamente. Puede herir al objetivo en pueblos difíciles."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Event],
    icon: "item_sand_ball",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    event: GameEvent.Christmas,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_sandb_#00"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.83
    },
  },
  [ItemId.BPLAN_C]: {
    id: ItemId.BPLAN_C,
    numericalId: 239,
    name: {
      [Lang.EN]: "Construction Blueprint (common)",
      [Lang.FR]: "Plan de chantier (commun)",
      [Lang.DE]: "Normaler Bauplan (gewöhnlich)",
      [Lang.ES]: "Plano de construcción (común)"
    },
    description: {
      [Lang.EN]: "You are holding what appears to be a construction blueprint! It's difficult to say exactly what type of project it is for though, it needs to be studied before it will become any use whatsoever.",
      [Lang.FR]: "Vous tenez entre vos mains ce qui ressemble à un projet de chantier ! Difficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit.",
      [Lang.DE]: "Dieser Bauplan ermöglicht es, ein neues Gebäude in der Stadt zu bauen.",
      [Lang.ES]: "¡Tienes entre tus manos lo que parece un plano de construcción! Es difícil entender lo que es, habría que estudiarlo para sacar conclusiones."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Blueprint],
    icon: "item_bplan_c",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.Inside
        ],
        effects: [
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_plate_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_plate_#03"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_plate_#02"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_plate_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_grater_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_fence_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_plate_#10"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_gazspray_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_acidspray_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_bgrenade_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_waterspray_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_grinder_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_shower_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_tube_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_shower_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_shower_#02"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_canon_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_canon_#02"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_canon_#03"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_wood_beam_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_cafet_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_slaughterhouse_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_cafet_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_strategy_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_acid_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_tagger_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_electro_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_tagger_#02"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_dig_#02"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_tnt_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "status_terror_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_bamba_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_courroie_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_courroie_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_tourello_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_trash_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_redemption_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_door_closed_#02"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_door_closed_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_ventilation_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_novlamps_#00"
          }
        ]
      }
    ],
  },
  [ItemId.BPLAN_U]: {
    id: ItemId.BPLAN_U,
    numericalId: 240,
    name: {
      [Lang.EN]: "Construction Blueprint (uncommon)",
      [Lang.FR]: "Plan de chantier (inhabituel)",
      [Lang.DE]: "Normaler Bauplan (ungewöhnlich)",
      [Lang.ES]: "Plano de construcción (inusual)"
    },
    description: {
      [Lang.EN]: "You are holding what appears to be a construction blueprint! It's difficult to say exactly what type of project it is for though, it needs to be studied before it will become any use whatsoever.",
      [Lang.FR]: "Vous tenez entre vos mains ce qui ressemble à un projet de chantier ! Difficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit.",
      [Lang.DE]: "Dieser Bauplan ermöglicht es, ein neues Gebäude in der Stadt zu bauen.",
      [Lang.ES]: "¡Tienes entre tus manos lo que parece un plano de construcción! Es difícil entender lo que es, habría que estudiarlo para sacar conclusiones."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Blueprint],
    icon: "item_bplan_u",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.Inside
        ],
        effects: [
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_plate_#04"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_wallimprove_#02"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_bgrenade_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_eden_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_watercanon_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_rocketperf_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_hmeat_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_canon_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_saw_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_cemetery_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_chicken_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_shield_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_catapult3_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_city_up_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_score_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_spa4souls_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_pumpkin_raw_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_urban_#00"
          }
        ]
      }
    ],
  },
  [ItemId.BPLAN_R]: {
    id: ItemId.BPLAN_R,
    numericalId: 241,
    name: {
      [Lang.EN]: "Construction Blueprint (rare)",
      [Lang.FR]: "Plan de chantier (rare)",
      [Lang.DE]: "Normaler Bauplan (selten)",
      [Lang.ES]: "Plano de construcción (raro)"
    },
    description: {
      [Lang.EN]: "You are holding what appears to be a construction blueprint! It's difficult to say exactly what type of project it is for though, it needs to be studied before it will become any use whatsoever.",
      [Lang.FR]: "Vous tenez entre vos mains ce qui ressemble à un projet de chantier ! Difficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit.",
      [Lang.DE]: "Dieser Bauplan ermöglicht es, ein neues Gebäude in der Stadt zu bauen.",
      [Lang.ES]: "¡Tienes entre tus manos lo que parece un plano de construcción! Es difícil entender lo que es, habría que estudiarlo para sacar conclusiones."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Blueprint],
    icon: "item_bplan_r",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.Inside
        ],
        effects: [
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_plate_#05"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_home_def_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_jerrycan_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_digger_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_sprinkler_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_tube_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_appletree_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_coffin_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_strategy_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_infirmary_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_ikea_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_watchmen_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_watchmen_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_derrick_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_falsecity_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_valve_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_moving_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_scarecrow_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_court_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_trashclean_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_lighthouse_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_labyrinth_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_rocket_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_gallery_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_survarea_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_boomfruit_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_boomfruit_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_techtable_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_underground_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_pet_pig_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_watchmen_#02"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_grinder2_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_animfence_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_sewers_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_pet_#00"
          }
        ]
      }
    ],
  },
  [ItemId.BPLAN_E]: {
    id: ItemId.BPLAN_E,
    numericalId: 242,
    name: {
      [Lang.EN]: "Construction Blueprint (very rare!)",
      [Lang.FR]: "Plan de chantier (très rare !)",
      [Lang.DE]: "Normaler Bauplan (sehr selten!)",
      [Lang.ES]: "Plano de construcción (¡muy raro!)"
    },
    description: {
      [Lang.EN]: "You are holding what appears to be a construction blueprint! It's difficult to say exactly what type of project it is for though, it needs to be studied before it will become any use whatsoever.",
      [Lang.FR]: "Vous tenez entre vos mains ce qui ressemble à un projet de chantier ! Difficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit.",
      [Lang.DE]: "Dieser Bauplan ermöglicht es, ein neues Gebäude in der Stadt zu bauen.",
      [Lang.ES]: "¡Tienes entre tus manos lo que parece un plano de construcción! Es difícil entender lo que es, habría que estudiarlo para sacar conclusiones."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Blueprint],
    icon: "item_bplan_e",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.Inside
        ],
        effects: [
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_waterdetect_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_trash_#06"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_castle_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_slave_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_arma_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_pmvbig_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_wheel_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_crow_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_cinema_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_balloon_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_derrick_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_pool_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_thermal_#00"
          }
        ]
      }
    ],
  },
  [ItemId.BPLAN_BOX]: {
    id: ItemId.BPLAN_BOX,
    numericalId: 243,
    name: {
      [Lang.EN]: "Architect's Chest",
      [Lang.FR]: "Coffre d'architecte",
      [Lang.DE]: "Architektenkoffer",
      [Lang.ES]: "Maletín de arquitecto"
    },
    description: {
      [Lang.EN]: "An Architect's Chest. Not that kind of chest.",
      [Lang.FR]: "Ce coffre contient nombre de documents obscurs et d'ustensiles désuets (crayons, compas, règles en plastique...). Rien qui ne vous servira à survivre dans le désert... À première vue.",
      [Lang.DE]: "Dieser Koffer enthält mehrere Dokumente und obskure Gegenstände (Bleistift, Kompass, Plastiklineale,...). Nichts was dir irgendwie helfen würde, in der Wüste zu überleben. ...zumindest auf den ersten Blick.",
      [Lang.ES]: "Contiene documentos y artículos de escritorio (lápices, compás, reglas...). Nada útil para sobrevivir en el desierto... O eso parece."
    },
    info: {
      [Lang.EN]: "Five of them are scattered in random zones 6-15km away from the town.",
      [Lang.FR]: "Cinq d'entre eux sont éparpillés dans des zones aléatoires à 6-15 km de la ville.",
      [Lang.DE]: "Fünf davon sind in zufälligen Zonen 6–15 km von der Stadt entfernt verstreut.",
      [Lang.ES]: "Cinco de ellos están esparcidos en zonas aleatorias a 6-15 km de la ciudad."
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_bplan_box",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "bplan_r_#00",
            odds: 100
          }
        ]
      }
    ],
  },
  [ItemId.BPLAN_BOX_E]: {
    id: ItemId.BPLAN_BOX_E,
    numericalId: 244,
    name: {
      [Lang.EN]: "Sealed Architect's Chest",
      [Lang.FR]: "Coffre d'architecte scellé",
      [Lang.DE]: "Versiegelter Architektenkoffer",
      [Lang.ES]: "Cofre de arquitecto sellado"
    },
    description: {
      [Lang.EN]: "This sealed chest almost certainly contains a rare and valuable document...",
      [Lang.FR]: "Ce coffre scellé contient très certainement un document très important et rare.",
      [Lang.DE]: "Dieser Koffer enthält höchstwahrscheinlich ein sehr seltenes und kostbares Dokument...",
      [Lang.ES]: "Contiene seguramente un documento importante y raro..."
    },
    info: {
      [Lang.EN]: "Two of them are scattered in random zones 9-21km away from the town.",
      [Lang.FR]: "Deux d'entre eux sont éparpillés dans des zones aléatoires à 9-21 km de la ville.",
      [Lang.DE]: "Zwei davon sind in zufälligen Zonen 9–21 km von der Stadt entfernt verstreut.",
      [Lang.ES]: "Dos de ellos están esparcidos en zonas aleatorias a 9-21 km de la ciudad."
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_bplan_box_e",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: -1
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "bplan_box_e_#00",
            odds: 95
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "bplan_e_#00",
            odds: 5
          }
        ]
      }
    ],
  },
  [ItemId.EGG]: {
    id: ItemId.EGG,
    numericalId: 245,
    name: {
      [Lang.EN]: "Egg",
      [Lang.FR]: "Œuf",
      [Lang.DE]: "Ei",
      [Lang.ES]: "Huevo"
    },
    description: {
      [Lang.EN]: "Now finding an egg should be comforting, but one thought won't leave your mind, where is the bloody chicken...",
      [Lang.FR]: "Un œuf voilà qui devrait vous réconforter, mais une seule idée hante votre esprit, où est donc cette satanée poule...",
      [Lang.DE]: "Hier in dieser Einöde ein Ei zu finden, sollte dich eigentlich glücklich machen. Aber eine Frage lässt dir einfach keine Ruhe: Wo zum Teufel steckt das verdammte Huhn...",
      [Lang.ES]: "Eso sí que va a mejorar tu vida, pero una pregunta te viene a la mente: ¿Dónde está esa condenada gallina?..."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_egg",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 7
          }
        ]
      }
    ],
  },
  [ItemId.APPLE]: {
    id: ItemId.APPLE,
    numericalId: 246,
    name: {
      [Lang.EN]: "Overly tempting apple",
      [Lang.FR]: "Pomme trop tentante",
      [Lang.DE]: "Übermäßig verführerischer Apfel",
      [Lang.ES]: "Manzana demasiado tentadora"
    },
    description: {
      [Lang.EN]: "It's round, it's red, it's shiny, and you feel an almost irresistible temptation to sink your teeth into it. Uh, is that really just an apple? That's what the old hag of the town claims...",
      [Lang.FR]: "C'est rond, c'est rouge, c'est brillant, et on ressent une irrésistible tentation d'y croquer. Euh, est-ce vraiment une pomme ? C'est ce que prétend la vieille du coin…",
      [Lang.DE]: "Er ist rund, er ist rot, er glänzt, und du fühlst eine fast unwiderstehliche Versuchung, deine Zähne in ihn zu schlagen. Äh, ist das wirklich nur ein normaler Apfel? Das behauptet jedenfalls die alte Vettel in der Stadt...",
      [Lang.ES]: "Es redondo, es rojo, es brillante y sientes una irresistible tentación de morderlo. Uh, ¿eso es realmente una manzana? Eso es lo que dice la anciana de la calle..."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_apple",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 8
          },
          {
            type: ItemActionEffectType.Infect,
            odds: 15
          }
        ]
      }
    ],
  },
  [ItemId.BOOMFRUIT]: {
    id: ItemId.BOOMFRUIT,
    numericalId: 247,
    name: {
      [Lang.EN]: "Exploding Grapefruit",
      [Lang.FR]: "Pamplemousse explosif",
      [Lang.DE]: "Explosive Pampelmuse",
      [Lang.ES]: "Pomelo explosivo"
    },
    description: {
      [Lang.EN]: "It is large, juicy and makes a \"tic tac\" noise.",
      [Lang.FR]: "Il est très gros, juteux et il fait “tic tac”.",
      [Lang.DE]: "Sie ist sehr groß, fruchtig und macht \"tick-tack\".",
      [Lang.ES]: "Fresco, jugoso y hace \"tic tac\"."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_boomfruit",
    decoration: 0,
    heavy: false,
    watchPoints: 12,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.Kill,
            value: "5-9"
          }
        ]
      }
    ],
  },
  [ItemId.BPLAN_DROP]: {
    id: ItemId.BPLAN_DROP,
    numericalId: 248,
    name: {
      [Lang.EN]: "Worn Leather Bag",
      [Lang.FR]: "Sacoche usée",
      [Lang.DE]: "Abgenutzte Kuriertasche",
      [Lang.ES]: "Maletín usado"
    },
    description: {
      [Lang.EN]: "This small leather bag would appear to contain documents of some sort. You pray harder than you've ever prayed before that it contains some adult literature... or the blueprints for a new, all-powerful building, and not a faded facsimile of the shipping forecast...",
      [Lang.FR]: "Cette petite sacoche en cuir semble contenir des documents. Vous priez très fort pour que cela soit un magazine adulte ou le plan d'un nouveau chantier surpuissant, et pas un quelconque relevé comptable...",
      [Lang.DE]: "Diese kleine Ledertasche scheint Unterlagen zu enthalten. Du betest inständig, dass es sich dabei um ein Männermagazin handelt, oder den Bauplan für ein neues, mächiges Gebäude. ...und nicht um die verblichenen Kopien einer Umsatzschätzung der Buchhaltung.",
      [Lang.ES]: "Parece que tiene documentos. Rezas por que tenga una revista para adultos o los planos de algo poderoso. Por favor, todo menos dinero..."
    },
    info: {
      [Lang.EN]: "A maximum of 3 can be found townwide per day",
      [Lang.FR]: "Un maximum de 3 peut être trouvé dans toute la ville par jour",
      [Lang.DE]: "Maximal 3 können pro Tag in der Stadt gefunden werden",
      [Lang.ES]: "Se puede encontrar un máximo de 3 en toda la ciudad por día"
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_bplan_drop",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "bplan_c_#00",
            odds: 50
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "bplan_u_#00",
            odds: 35
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "bplan_r_#00",
            odds: 10
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "bplan_e_#00",
            odds: 5
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 1.29
    },
  },
  [ItemId.MAGNETICKEY]: {
    id: ItemId.MAGNETICKEY,
    numericalId: 249,
    name: {
      [Lang.EN]: "Magnetic Key",
      [Lang.FR]: "Clé magnétique",
      [Lang.DE]: "Magnet-Schlüssel",
      [Lang.ES]: "Llave magnética"
    },
    description: {
      [Lang.EN]: "This hi-tech key allows you to open doors secured up until level 6.2 AOC, only elite technicians are deigned to have one in their possession. Unfortunately, as yours is in pitiful condition, this key will only open one more door.",
      [Lang.FR]: "Cette clé high-tech permet d'ouvrir les portes sécurisées de niveau 6.2 AOC, seuls les membres appartenant à l'élite peuvent se targuer d'avoir une de ces clés en leur possession. Malheureusement, étant en piteux état, cette clé ne pourra ouvrir qu'une seule porte.",
      [Lang.DE]: "Mit diesem HighTech-Schlüssel lassen sich Türen der Sicherheitsklasse 6.2 AOC öffnen. Nur Angehörige der Elite können sich damit brüsten, so einen Schlüssel zu besitzen. Leider ist der Schlüssel in einem so schlechten Zustand, dass er nur eine einzige Tür öffnet.",
      [Lang.ES]: "Esta llave de alta tecnología te permite abrir puertas aseguradas hasta el nivel 6.2 AOC, solo los técnicos de élite son dignos de tener una en su poder. Desafortunadamente, como la llave está en lamentables condiciones, solo te servirá para abrir una puerta más."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_magneticKey",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.BUMPKEY]: {
    id: ItemId.BUMPKEY,
    numericalId: 250,
    name: {
      [Lang.EN]: "Bump Key",
      [Lang.FR]: "Clé à percussion",
      [Lang.DE]: "Schlagschlüssel",
      [Lang.ES]: "Llave de percusión"
    },
    description: {
      [Lang.EN]: "This key, a favourite amongst up-and-coming burglars, allows you to open any door in a matter of seconds. So easily in fact you might ask yourself what is the point in having normal keys. Unfortunately, as yours is in pitiful condition, this key will only open one more door.",
      [Lang.FR]: "Cette clé, grand apanage des cambrioleurs en herbe, permet d'ouvrir n'importe quelle porte en quelques secondes, c'est à se demander à quoi peuvent bien servir les clés traditionnelles. Malheureusement, étant en piteux état, cette clé ne pourra ouvrir qu'une seule porte.",
      [Lang.DE]: "Dieser Schlüssel ist der Liebling aller Einbrecher und öffnet Türen so rasend schnell, dass man sich glatt fragt, warum man überhaupt noch normale Schlüssel benutzt. Leider ist der Schlüssel in einem so schlechten Zustand, dass er nur eine einzige Tür öffnet.",
      [Lang.ES]: "Esta llave, muy apreciada por los ladrones de casas, abre cualquier puerta en segundos. Entonces, ¿para qué sirven las llaves tradicionales? Desgraciadamente, su mal estado solo permite abrir una puerta."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_bumpKey",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.CLASSICKEY]: {
    id: ItemId.CLASSICKEY,
    numericalId: 251,
    name: {
      [Lang.EN]: "Bottle Opener",
      [Lang.FR]: "Décapsuleur",
      [Lang.DE]: "Flaschenöffner",
      [Lang.ES]: "Abrebotellas"
    },
    description: {
      [Lang.EN]: "This blank allows you to obtain a bump key, a favourite amongst up-and-coming burglars, which will allow you to open any door in a matter of seconds...",
      [Lang.FR]: "Certaines pièces sont de vraies boîtes de conserve, rien de mieux qu'un outil approprié pour aller à la pêche aux objets utiles ! Malheureusement, étant en piteux état, ce décapsuleur ne pourra ouvrir qu'une seule porte.",
      [Lang.DE]: "Einige der Zimmer sind wahre Flaschenhälse. Darum ist das das perfekte Werkzeug, um sich Zutritt zu verschaffen und den einen oder anderen nützlichen Gegenstand herauszuholen! Leider ist der Flaschenöffner in einem so schlechten Zustand, dass er nur eine einzige Tür öffnet.",
      [Lang.ES]: "Como no tienes cervezas que abrir, mejor te pones a abrir puertas en busca de objetos útiles. Debido a su mal estado, solo puedes abrir una puerta con él."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_classicKey",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.PRINTS]: {
    id: ItemId.PRINTS,
    numericalId: 252,
    name: {
      [Lang.EN]: "Magnetic Key Blank",
      [Lang.FR]: "Empreinte de clé magnétique",
      [Lang.DE]: "Abdruck vom Magnet-Schlüssel",
      [Lang.ES]: "Molde para llave magnética"
    },
    description: {
      [Lang.EN]: "This hi-tech blank will allow you to open secured doored rated up to level 6.2 AOC.",
      [Lang.FR]: "Cette empreinte de clé high-tech permettra d'ouvrir les portes sécurisées de niveau 6.2 AOC.",
      [Lang.DE]: "Mit diesem Abdruck des HighTech-Schlüssels lassen sich Türen der Sicherheitsklasse 6.2 AOC öffnen.",
      [Lang.ES]: "La llave de alta tecnología de este molde te permitirá abrir puertas seguras clasificadas hasta el nivel 6.2 AOC."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_magnetic_print",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.PRINTS_01]: {
    id: ItemId.PRINTS_01,
    numericalId: 253,
    name: {
      [Lang.EN]: "Bump Key Blank",
      [Lang.FR]: "Empreinte de clé à percussion",
      [Lang.DE]: "Abdruck vom Schlagschlüssel",
      [Lang.ES]: "Molde para llave de percusión"
    },
    description: {
      [Lang.EN]: "This blank allows you to obtain a bump key, a favourite amongst up-and-coming burglars, which allows you to open any door in a matter of seconds...",
      [Lang.FR]: "Cette empreinte de clé vous permettra d'obtenir une clé à percussion, grand apanage des cambrioleurs en herbe, elle permet d'ouvrir n'importe quelle porte en quelques secondes.",
      [Lang.DE]: "Mit diesem Abdruck kannst du einen Schlagschlüssel, den Liebling aller Einbrecher, herstellen. Damit lassen sich Türen so rasend schnell öffnen, dass man sich glatt fragt, warum man überhaupt noch normale Schlüssel benutzt.",
      [Lang.ES]: "Este molde te permitirá obtener una llave de percusión, dicha llave es muy apreciada por los ladrones incipientes y permite abrir cualquier puerta en segundos."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_prints",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.PRINTS_02]: {
    id: ItemId.PRINTS_02,
    numericalId: 254,
    name: {
      [Lang.EN]: "Bottle Opener Blank",
      [Lang.FR]: "Empreinte de décapsuleur",
      [Lang.DE]: "Abdruck vom Flaschenöffner",
      [Lang.ES]: "Molde para abrebotellas"
    },
    description: {
      [Lang.EN]: "Some of the rooms here are a tight squeeze to say the least, so this would appear to be the perfect tool with which to gain access and get down to some serious rummaging. Thanks to this blank, you'll be able to obtain one!",
      [Lang.FR]: "Certaines pièces sont de vraies boîtes de conserve, rien de mieux qu’un outil approprié pour aller à la pêche aux objets utiles ; et grâce à cette empreinte, vous pourrez l’obtenir !",
      [Lang.DE]: "Einige der Zimmer sind wahre Flaschenhälse. Darum ist das das perfekte Werkzeug, um sich Zutritt zu verschaffen und den einen oder anderen nützlichen Gegenstand herauszuholen! Dank dieses Abdrucks kannst du einen solchen Schlüssel herstellen.",
      [Lang.ES]: "Como no tienes cervezas que abrir, mejor te pones a abrir puertas en busca de objetos útiles. Debido a su mal estado, solo puedes abrir una puerta con él."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_bottle_print",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.VAGOUL]: {
    id: ItemId.VAGOUL,
    numericalId: 255,
    name: {
      [Lang.EN]: "Ghoul Vaccine",
      [Lang.FR]: "Sérum pour Goule",
      [Lang.DE]: "Ghul-Serum",
      [Lang.ES]: "Vacuna para mutante"
    },
    description: {
      [Lang.EN]: "This extremely rare serum has been developed from the DNA of an almost immune specimen that has withstood an infectious bite for more than 3 days. It allows a ghoul to return to its normal human state.",
      [Lang.FR]: "Ce Sérum extrêmement rare a été mis au point à partir de l'ADN d'un spécimen presque immunisé ayant résisté plus de 3 jours à une morsure infectieuse, il permet de rendre à une goule son état d'être humain normal.",
      [Lang.DE]: "Dieses extrem seltene Serum wurde durch der Untersuchung der DNA eines fast immunen Wesens gewonnen. Es hatte zuvor 3 Tage überlebt, obwohl es von einem Infizierten gebissen wurde. Mit dem Serum kann man einen Ghul wieder in einen normalen Menschen verwandeln.",
      [Lang.ES]: "Este suero extremadamente raro se ha desarrollado a partir del ADN de una muestra casi inmune que ha resistido una picadura infecciosa durante más de 3 días. Permite que un mutante vuelva a su estado humano normal."
    },
    categories: [ItemCategory.Pharmacy],
    icon: "item_vagoul",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.UnGhoulify
          }
        ]
      }
    ],
  },
  [ItemId.HBPLAN_U]: {
    id: ItemId.HBPLAN_U,
    numericalId: 256,
    name: {
      [Lang.EN]: "Hotel Blueprint (uncommon)",
      [Lang.FR]: "Plan de chantier (inhabituel)",
      [Lang.DE]: "Hotel-Bauplan (ungewöhnlich)",
      [Lang.ES]: "Plano de construcción de hotel (inusual)"
    },
    description: {
      [Lang.EN]: "You are holding what appears to be a construction blueprint! It's difficult to say exactly what type of project it is for though, it needs to be studied before it will become any use whatsoever.",
      [Lang.FR]: "Vous tenez entre vos mains ce qui ressemble à un projet de chantier ! Difficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit.",
      [Lang.DE]: "Dieser Bauplan ermöglicht es, ein neues Gebäude in der Stadt zu bauen.",
      [Lang.ES]: "¡Tienes entre tus manos lo que parece un plano de construcción! Es difícil entender lo que es, habría que estudiarlo para sacar conclusiones."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Blueprint],
    icon: "item_hbplan_u",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.Inside
        ],
        effects: [
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_pumpkin_raw_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_urban_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_shield_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_canon_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_wallimprove_#02"
          }
        ]
      }
    ],
  },
  [ItemId.HBPLAN_R]: {
    id: ItemId.HBPLAN_R,
    numericalId: 257,
    name: {
      [Lang.EN]: "Hotel Blueprint (rare)",
      [Lang.FR]: "Plan de chantier (rare)",
      [Lang.DE]: "Hotel-Bauplan (selten)",
      [Lang.ES]: "Plano de construcción de hotel (raro)"
    },
    description: {
      [Lang.EN]: "You are holding what appears to be a construction blueprint! It's difficult to say exactly what type of project it is for though, it needs to be studied before it will become any use whatsoever.",
      [Lang.FR]: "Vous tenez entre vos mains ce qui ressemble à un projet de chantier ! Difficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit.",
      [Lang.DE]: "Dieser Bauplan ermöglicht es, ein neues Gebäude in der Stadt zu bauen.",
      [Lang.ES]: "¡Tienes entre tus manos lo que parece un plano de construcción! Es difícil entender lo que es, habría que estudiarlo para sacar conclusiones."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Blueprint],
    icon: "item_hbplan_r",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.Inside
        ],
        effects: [
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_valve_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_appletree_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_scarecrow_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_ikea_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_moving_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_labyrinth_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_pet_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_plate_#05"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_court_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_coffin_#00"
          }
        ]
      }
    ],
  },
  [ItemId.HBPLAN_E]: {
    id: ItemId.HBPLAN_E,
    numericalId: 258,
    name: {
      [Lang.EN]: "Hotel Blueprint (very rare!)",
      [Lang.FR]: "Plan de chantier (très rare !)",
      [Lang.DE]: "Hotel-Bauplan (sehr selten!)",
      [Lang.ES]: "Plano de construcción de hotel (¡muy raro!)"
    },
    description: {
      [Lang.EN]: "You are holding what appears to be a construction blueprint! It's difficult to say exactly what type of project it is for though, it needs to be studied before it will become any use whatsoever.",
      [Lang.FR]: "Vous tenez entre vos mains ce qui ressemble à un projet de chantier ! Difficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit.",
      [Lang.DE]: "Dieser Bauplan ermöglicht es, ein neues Gebäude in der Stadt zu bauen.",
      [Lang.ES]: "¡Tienes entre tus manos lo que parece un plano de construcción! Es difícil entender lo que es, habría que estudiarlo para sacar conclusiones."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Blueprint],
    icon: "item_hbplan_e",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.Inside
        ],
        effects: [
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_waterdetect_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_thermal_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_wheel_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_cinema_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_pool_#00"
          }
        ]
      }
    ],
  },
  [ItemId.BBPLAN_U]: {
    id: ItemId.BBPLAN_U,
    numericalId: 259,
    name: {
      [Lang.EN]: "Bunker Blueprint (uncommon)",
      [Lang.FR]: "Plan de chantier (inhabituel)",
      [Lang.DE]: "Bunker-Bauplan (ungewöhnlich)",
      [Lang.ES]: "Plano de construcción de búnker (inusual)"
    },
    description: {
      [Lang.EN]: "You are holding what appears to be a construction blueprint! It's difficult to say exactly what type of project it is for though, it needs to be studied before it will become any use whatsoever.",
      [Lang.FR]: "Vous tenez entre vos mains ce qui ressemble à un projet de chantier ! Difficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit.",
      [Lang.DE]: "Dieser Bauplan ermöglicht es, ein neues Gebäude in der Stadt zu bauen.",
      [Lang.ES]: "¡Tienes entre tus manos lo que parece un plano de construcción! Es difícil entender lo que es, habría que estudiarlo para sacar conclusiones."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Blueprint],
    icon: "item_bbplan_u",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.Inside
        ],
        effects: [
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_rocketperf_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_watercanon_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_bgrenade_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_catapult3_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_hmeat_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_city_up_#00"
          }
        ]
      }
    ],
  },
  [ItemId.BBPLAN_R]: {
    id: ItemId.BBPLAN_R,
    numericalId: 260,
    name: {
      [Lang.EN]: "Bunker Blueprint (rare)",
      [Lang.FR]: "Plan de chantier (rare)",
      [Lang.DE]: "Bunker-Bauplan (selten)",
      [Lang.ES]: "Plano de construcción de búnker (raro)"
    },
    description: {
      [Lang.EN]: "You are holding what appears to be a construction blueprint! It's difficult to say exactly what type of project it is for though, it needs to be studied before it will become any use whatsoever.",
      [Lang.FR]: "Vous tenez entre vos mains ce qui ressemble à un projet de chantier ! Difficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit.",
      [Lang.DE]: "Dieser Bauplan ermöglicht es, ein neues Gebäude in der Stadt zu bauen.",
      [Lang.ES]: "¡Tienes entre tus manos lo que parece un plano de construcción! Es difícil entender lo que es, habría que estudiarlo para sacar conclusiones."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Blueprint],
    icon: "item_bbplan_r",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.Inside
        ],
        effects: [
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_tube_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_boomfruit_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_pet_pig_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_watchmen_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_grinder2_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_underground_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_rocket_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_techtable_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_home_def_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_coffin_#00"
          }
        ]
      }
    ],
  },
  [ItemId.BBPLAN_E]: {
    id: ItemId.BBPLAN_E,
    numericalId: 261,
    name: {
      [Lang.EN]: "Bunker Blueprint (very rare!)",
      [Lang.FR]: "Plan de chantier (très rare !)",
      [Lang.DE]: "Bunker-Bauplan (sehr selten!)",
      [Lang.ES]: "Plano de construcción de búnker (¡muy raro!)"
    },
    description: {
      [Lang.EN]: "You are holding what appears to be a construction blueprint! It's difficult to say exactly what type of project it is for though, it needs to be studied before it will become any use whatsoever.",
      [Lang.FR]: "Vous tenez entre vos mains ce qui ressemble à un projet de chantier ! Difficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit.",
      [Lang.DE]: "Dieser Bauplan ermöglicht es, ein neues Gebäude in der Stadt zu bauen.",
      [Lang.ES]: "¡Tienes entre tus manos lo que parece un plano de construcción! Es difícil entender lo que es, habría que estudiarlo para sacar conclusiones."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Blueprint],
    icon: "item_bbplan_e",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.Inside
        ],
        effects: [
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_pool_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_castle_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_arma_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_slave_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_pmvbig_#00"
          }
        ]
      }
    ],
  },
  [ItemId.MBPLAN_U]: {
    id: ItemId.MBPLAN_U,
    numericalId: 262,
    name: {
      [Lang.EN]: "Hospital Blueprint (uncommon)",
      [Lang.FR]: "Plan de chantier (inhabituel)",
      [Lang.DE]: "Hospital-Bauplan (ungewöhnlich)",
      [Lang.ES]: "Plano de construcción de hospital (inusual)"
    },
    description: {
      [Lang.EN]: "You are holding what appears to be a construction blueprint! It's difficult to say exactly what type of project it is for though, it needs to be studied before it will become any use whatsoever.",
      [Lang.FR]: "Vous tenez entre vos mains ce qui ressemble à un projet de chantier ! Difficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit.",
      [Lang.DE]: "Dieser Bauplan ermöglicht es, ein neues Gebäude in der Stadt zu bauen.",
      [Lang.ES]: "¡Tienes entre tus manos lo que parece un plano de construcción! Es difícil entender lo que es, habría que estudiarlo para sacar conclusiones."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Blueprint],
    icon: "item_mbplan_u",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.Inside
        ],
        effects: [
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_plate_#04"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_eden_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_chicken_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_cemetery_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_spa4souls_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_saw_#00"
          }
        ]
      }
    ],
  },
  [ItemId.MBPLAN_R]: {
    id: ItemId.MBPLAN_R,
    numericalId: 263,
    name: {
      [Lang.EN]: "Hospital Blueprint (rare)",
      [Lang.FR]: "Plan de chantier (rare)",
      [Lang.DE]: "Hospital-Bauplan (selten)",
      [Lang.ES]: "Plano de construcción de hospital (raro)"
    },
    description: {
      [Lang.EN]: "You are holding what appears to be a construction blueprint! It's difficult to say exactly what type of project it is for though, it needs to be studied before it will become any use whatsoever.",
      [Lang.FR]: "Vous tenez entre vos mains ce qui ressemble à un projet de chantier ! Difficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit.",
      [Lang.DE]: "Dieser Bauplan ermöglicht es, ein neues Gebäude in der Stadt zu bauen.",
      [Lang.ES]: "¡Tienes entre tus manos lo que parece un plano de construcción! Es difícil entender lo que es, habría que estudiarlo para sacar conclusiones."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Blueprint],
    icon: "item_mbplan_r",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.Inside
        ],
        effects: [
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_digger_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "item_boomfruit_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_watchmen_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_sewers_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_falsecity_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_trashclean_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_infirmary_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_survarea_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_sprinkler_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_coffin_#00"
          }
        ]
      }
    ],
  },
  [ItemId.MBPLAN_E]: {
    id: ItemId.MBPLAN_E,
    numericalId: 264,
    name: {
      [Lang.EN]: "Hospital Blueprint (very rare!)",
      [Lang.FR]: "Plan de chantier (très rare !)",
      [Lang.DE]: "Hospital-Bauplan (sehr selten!)",
      [Lang.ES]: "Plano de construcción de hospital (¡muy raro!)"
    },
    description: {
      [Lang.EN]: "You are holding what appears to be a construction blueprint! It's difficult to say exactly what type of project it is for though, it needs to be studied before it will become any use whatsoever.",
      [Lang.FR]: "Vous tenez entre vos mains ce qui ressemble à un projet de chantier ! Difficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit.",
      [Lang.DE]: "Dieser Bauplan ermöglicht es, ein neues Gebäude in der Stadt zu bauen.",
      [Lang.ES]: "¡Tienes entre tus manos lo que parece un plano de construcción! Es difícil entender lo que es, habría que estudiarlo para sacar conclusiones."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Blueprint],
    icon: "item_mbplan_e",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.Inside
        ],
        effects: [
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_derrick_#01"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_crow_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_pmvbig_#00"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_trash_#06"
          },
          {
            type: ItemActionEffectType.UnlockBuilding,
            value: "small_balloon_#00"
          }
        ]
      }
    ],
  },
  [ItemId.SOUL_BLUE]: {
    id: ItemId.SOUL_BLUE,
    numericalId: 265,
    name: {
      [Lang.EN]: "Lost Soul",
      [Lang.FR]: "Âme errante",
      [Lang.DE]: "Verirrte Seele",
      [Lang.ES]: "Alma errante"
    },
    description: {
      [Lang.EN]: "You encounter a vaporous form that seems to be lamenting there. Perhaps you could collect it and find some use for it.",
      [Lang.FR]: "Vous rencontrez une forme vaporeuse qui semble se lamenter sur place, peut-être pourriez-vous la récupérer et en trouver une quelconque utilité.",
      [Lang.DE]: "Eine Schwache Seele. Einmal in der Bank abgelegt, kann ein Schamane sie nehmen und in eine starke Seele umwandeln. Sie kann einen Schamanen noch in vielen anderen Situationen nützen.",
      [Lang.ES]: "Encuentras una forma vaporosa que parece lamentarse en su sitio. Quizás podrías recogerla y encontrarle alguna utilidad."
    },
    info: {
      [Lang.EN]: "If not purified, it will turn into a {{item:soul_red}} Tortured Soul after X nights (no matter where it is).",
      [Lang.FR]: "Si elle n'est pas purifiée, elle se transformera en une {{item:soul_red}} Âme torturée après X nuits (peu importe où elle se trouve).",
      [Lang.DE]: "Wenn sie nicht gereinigt wird, verwandelt sie sich nach X Nächten (egal wo sie sich befindet) in eine {{item:soul_red}} Gequälte Seele.",
      [Lang.ES]: "Si no se purifica, se convertirá en un {{item:soul_red}} Alma Torturada después de X noches (sin importar dónde esté)."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_soul_blue",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_collec_#00"
          },
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_mystic_#00"
          },
          {
            type: ItemActionEffectType.Defense,
            value: 5
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "soul_red_#00",
            count: 1,
            odds: 10
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "soul_red_#00",
            count: 2,
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "soul_red_#00",
            count: 3,
            odds: 50
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "soul_red_#00",
            count: 4,
            odds: 75
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "soul_red_#00",
            count: 5,
            odds: 100
          }
        ]
      }
    ],
  },
  [ItemId.SOUL_RED]: {
    id: ItemId.SOUL_RED,
    numericalId: 266,
    name: {
      [Lang.EN]: "Tortured Soul",
      [Lang.FR]: "Âme torturée",
      [Lang.DE]: "Gequälte Seele",
      [Lang.ES]: "Alma torturada"
    },
    description: {
      [Lang.EN]: "This doesn't look like your average lost soul... Maybe you should be a little careful with this one. In fact maybe you should talk to your resident voodooman...",
      [Lang.FR]: "Cette âme de citoyen a été abandonnée, sans considération, trop longtemps. Aujourd'hui cette entité emplie de haine vient alimenter les mauvaises ondes de l'Outre-Monde, vous devriez vite vous en occuper !",
      [Lang.DE]: "Die Seele dieses Bürgers wurde schon zu lange ohne Rücksicht auf Rücksicht verlassen. Heute kommt dieses von Hass erfüllte Wesen, um die schlechten Vibes der Überseewelt zu nähren, ihr solltet euch schnell darum kümmern!",
      [Lang.ES]: "Esto no se parece al alma perdida promedio ... Tal vez deberías tener un poco de cuidado con esta. De hecho, tal vez deberías hablar con el Chamán de tu pueblo..."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_soul_red",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_collec_#00"
          },
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_mystic_#00"
          },
          {
            type: ItemActionEffectType.Defense,
            value: 5
          }
        ]
      }
    ],
  },
  [ItemId.SOUL_BLUE_01]: {
    id: ItemId.SOUL_BLUE_01,
    numericalId: 267,
    name: {
      [Lang.EN]: "Weak Soul",
      [Lang.FR]: "Âme faible",
      [Lang.DE]: "Schwache Seele",
      [Lang.ES]: "Alma débil"
    },
    description: {
      [Lang.EN]: "You encounter a vaporous form that seems to be lamenting there. Perhaps you could collect it and find some use for it.",
      [Lang.FR]: "Vous rencontrez une forme vaporeuse qui semble se lamenter sur place, peut-être pourriez-vous la récupérer et en trouver une quelconque utilité.",
      [Lang.DE]: "Eine Schwache Seele. Einmal in der Bank abgelegt, kann ein Schamane sie nehmen und in eine starke Seele umwandeln. Sie kann einen Schamanen noch in vielen anderen Situationen nützen.",
      [Lang.ES]: "Encuentras una forma vaporosa que parece lamentarse en su sitio. Quizás podrías recogerla y encontrarle alguna utilidad."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.PrivateTown],
    icon: "item_soul_blue",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_collec_#00"
          },
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_mystic_#00"
          },
          {
            type: ItemActionEffectType.Defense,
            value: 5
          }
        ]
      }
    ],
  },
  [ItemId.FEST]: {
    id: ItemId.FEST,
    numericalId: 268,
    name: {
      [Lang.EN]: "Mug of lukewarm liquid",
      [Lang.FR]: "Chope de liquide tiédasse",
      [Lang.DE]: "Becher mit lauwarmer Flüssigkeit",
      [Lang.ES]: "Jarra de cerveza"
    },
    description: {
      [Lang.EN]: "You look at this oversized mug of beer with melancholy... Warm and tasteless, but surely the best thing you will have drunk since the Apocalypse. Something to remember the good old Oktoberfest days...",
      [Lang.FR]: "Vous regardez avec mélancolie cette chope de bière surdimensionnée... Chaude et insipide, mais sûrement la meilleure chose que vous aurez bue depuis l'Apocalypse. De quoi se remémorer avec émotion l'Oktoberfest...",
      [Lang.DE]: "In Wehmut versunken starrst du diesen überdimensionalen Bierkrug an... Sicher warm und geschmacklos, aber das Beste, das du seit der Apokalypse getrunken hast. Du musst wieder an all die verrückten Tage in München denken...",
      [Lang.ES]: "Sumergido en tu desesperación, te topas con un jarro de cerveza. ¡Aleluya!, quisieras decir, pero está caliente, no tiene espuma y sabe a orina. Al fin y al cabo es lo mejor que te pudo suceder hoy. ¿Salud?"
    },
    categories: [ItemCategory.Food, ItemCategory.APSource, ItemCategory.Alcohol],
    icon: "item_fest",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_alcool_#00"
          },
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "drunk"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.34
    },
  },
  [ItemId.BRETZ]: {
    id: ItemId.BRETZ,
    numericalId: 269,
    name: {
      [Lang.EN]: "Sandy Pretzel",
      [Lang.FR]: "Bretzel sableux",
      [Lang.DE]: "Sandige Bretzel",
      [Lang.ES]: "Pretzel arenoso"
    },
    description: {
      [Lang.EN]: "A tasty and edible snack... even after hanging around the ground for months. It tastes as if it was soaked in petrol (unfortunately too little to be used for the tank to the southwest of the city...) Beyond making you full, it can also amuse: it strongly reminds you of the hat of Princess Beatrice's wedding.",
      [Lang.FR]: "Une collation savoureuse et comestible... même après avoir traîné partout au sol des mois durant. Il sent comme s'il était imbibé d'essence (malheureusement trop peu pour être utilisé pour le réservoir au sud-ouest de la ville...) Au delà de rendre rassasié, il peut aussi amuser : il vous rappelle fortement le chapeau de mariage de la princesse Béatrice.",
      [Lang.DE]: "Ein leckerer, essbarer Snack... zumindest war es das einmal. Auf dieser Brezel wurde herumgetreten, sie riecht, als würde sie in Benzin getränkt (leider zu wenig, um sie für den Panzer im Südwesten der Stadt zu verwenden - schade) und es scheint, als wäre sie als Hammer oder als Zuhause für einen Holzwurm verwendet zu sein. Auf jedenfall erinnert sie dich jetzt stark an Prinzessin Beatrices Hochzeitshut.",
      [Lang.ES]: "Un delicioso bollo, o al menos lo fue una vez. Fue pisado, lamido y escupido y hasta usado para rascarse la espalda (algunos vellos pegados hacen pensar eso). Las larvas que le rodean se agitan, tan malo no debe ser. Alguna utilidad le encontrarás."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_bretz",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.69
    },
  },
  [ItemId.TEKEL]: {
    id: ItemId.TEKEL,
    numericalId: 270,
    name: {
      [Lang.EN]: "Mangy Dachshund",
      [Lang.FR]: "Teckel galeux",
      [Lang.DE]: "Räudiger Dackel",
      [Lang.ES]: "Perro salchicha pulgoso"
    },
    description: {
      [Lang.EN]: "The only form of life who can really give you love in this cursed hell. As far as you are familiar with dogs, this one is loyal, with sharp jaws and can grunt wonderfully. In the worst case, the butcher will be happy to \"take care\" of this \"sausage dog\"...",
      [Lang.FR]: "Le seul être qui pourra vraiment vous donner de l'amour dans ce maudit enfer. Pour autant que vous soyez familier avec les chiens, celui-ci est fidèle, avec des mâchoires acérées et peut grogner à merveille. Dans le pire des cas, le boucher se fera un plaisir de \"prendre soin\" de ce \"chien-saucisse\"...",
      [Lang.DE]: "Der einzige in diesem gottverlassenen Ort, der dir wirklich Liebe schenken kann, ohne dir danach deine Pillen zu stehlen. Soweit du dich mit Hunden auskennst, sieht er ziemlich seltsam aus, aber er ist treu, hat scharfe Zähne und kann wunderbar knurren. Und sollte es doch mal zum schlimmsten Fall kommen, wird sich der Metzger sicher freuen, sich um ihn zu \"kümmern\"...",
      [Lang.ES]: "Pateando latas y basura, le das a algo blando y con el golpe chilló. ¡Oh, qué lindo, un perrito! Te mira con sus enormes y tiernos ojos. En este lugar olvidado por Dios, solo tú podrías darle cariño. Sus dientes son afilados y te demuestra que sabe cuidar la casa haciendo un gruñido. En el peor de los casos, el carnicero... no, no."
    },
    categories: [ItemCategory.Defences, ItemCategory.GuardWeapon, ItemCategory.Animal],
    icon: "item_tekel",
    decoration: 0,
    heavy: false,
    watchPoints: 18,
    actions: [
      {
        type: ItemActionType.Butcher,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_animal_#00"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "meat_#00",
            count: 2,
            odds: 100
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_animal_#00",
            odds: 15
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "tekel_#00",
            odds: 85
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.34
    },
  },
  [ItemId.RLAUNC]: {
    id: ItemId.RLAUNC,
    numericalId: 271,
    name: {
      [Lang.EN]: "Stake Launcher",
      [Lang.FR]: "Lance-pieu",
      [Lang.DE]: "Pfahlwerfer",
      [Lang.ES]: "Lanzadardos"
    },
    description: {
      [Lang.EN]: "A stake launcher can be used to reinforce barricades or to defend against any manner of creature. Unfortunately there is only one stake left in the launcher.",
      [Lang.FR]: "Un lance-pieux qui a dû servir pour renforcer les barricades sommaires des hôtels, des bunkers ou encore à lutter contre n'importe quel type de créatures. Il ne reste malheureusement qu'un seul pieu dans l'appareil.",
      [Lang.DE]: "Der Pfahlwerfer kann dazu verwendet werden, Barrikaden zu verstärken oder jede Art von Gegner abzuwehren. Leider ist nur noch ein Pfahl übrig...",
      [Lang.ES]: "Esta arma debió ser construida por algún maniático de las armas y el bricolage. Solo queda un dardo dentro del aparato."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_rlaunc",
    decoration: 0,
    heavy: true,
    watchPoints: 30,
    actions: [
      
    ],
  },
  [ItemId.KALACH]: {
    id: ItemId.KALACH,
    numericalId: 272,
    name: {
      [Lang.EN]: "Kalashni-Splash",
      [Lang.FR]: "Kalachnik'eau",
      [Lang.DE]: "Kalaschni-Splash",
      [Lang.ES]: "Aguashnikov"
    },
    description: {
      [Lang.EN]: "A powerful water weapon, whose broken mechanism is only enough for one shot.",
      [Lang.FR]: "Une puissante sulfateuse à eau, son mécanisme grippé ne résistera pas à plus d'un assaut.",
      [Lang.DE]: "Eine mächtige Wasserwaffe, dessen defeker Mechanismus nur noch für einen Schuss reicht.",
      [Lang.ES]: "Una poderosa arma de agua, cuyo mecanismo roto solo alcanza para un disparo."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_kalach",
    decoration: 0,
    heavy: true,
    watchPoints: 24,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "kalach_#01"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "3"
          }
        ]
      }
    ],
  },
  [ItemId.BUREAU]: {
    id: ItemId.BUREAU,
    numericalId: 273,
    name: {
      [Lang.EN]: "Hastily-built Desk",
      [Lang.FR]: "Bureau monté à la rache",
      [Lang.DE]: "Schnellgebauter Tisch",
      [Lang.ES]: "Escritorio mal montado"
    },
    description: {
      [Lang.EN]: "This rickety desk was clearly built in a rush. Dropped from the top of the ramparts, however, it could prove most useful by crushing some zombies.",
      [Lang.FR]: "Ce bureau monté approximativement est bancal et peu élégant. Lâché du haut d'un rempart, il pourra se rendre utile en écrasant des zombies.",
      [Lang.DE]: "Dieser wackelige Tisch wurde offensichtlich in Eile gebaut. Doch könnte er, von den Barrikaden geworfen, bestimmt gut einige Zombies zerquetschen.",
      [Lang.ES]: "Este escritorio destartalado fue claramente construido con prisa. Sin embargo, lanzado desde lo alto de las murallas podría resultar más útil aplastando a algunos zombies."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration],
    icon: "item_bureau",
    decoration: 2,
    heavy: true,
    watchPoints: 20,
    actions: [
      
    ],
  },
  [ItemId.DISTRI]: {
    id: ItemId.DISTRI,
    numericalId: 274,
    name: {
      [Lang.EN]: "Empty Vending Machine",
      [Lang.FR]: "Distributeur vide",
      [Lang.DE]: "Leerer Automat",
      [Lang.ES]: "Cajero vacío"
    },
    description: {
      [Lang.EN]: "This vending machine has been of no use since the pillaging started, it can become very useful very quickly should you decide to toss it off the top of the ramparts.",
      [Lang.FR]: "Ce distributeur n'a plus aucune utilité depuis la fin des pillages, il peut faire cependant des ravages une fois balancé du haut d'un rempart.",
      [Lang.DE]: "Ich weiß was du denkst: \"Kann dieser Automat nicht 20 Rationen Wasser und 50 Tüten Chips enthalten?!?\" Dummerweise sieht das nicht so aus...aber immerhin ist er sehr klotzig und enthält ein paar Knochen.",
      [Lang.ES]: "Es tan inútil como pesado, sin embargo podría ayudarte a aplastar algunos zombies si lo lanzas desde una muralla."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration],
    icon: "item_distri",
    decoration: 4,
    heavy: true,
    watchPoints: 25,
    actions: [
      
    ],
  },
  [ItemId.RENNE]: {
    id: ItemId.RENNE,
    numericalId: 275,
    name: {
      [Lang.EN]: "Santa's Reindeer",
      [Lang.FR]: "Renne du papa noyel",
      [Lang.DE]: "Santas Rentier",
      [Lang.ES]: "Reno de Papá Noel"
    },
    description: {
      [Lang.EN]: "There was a time when this magnificent animal was associated with marvellous legends... Those days are gone, but they are good for something else...",
      [Lang.FR]: "Il fut un temps où l'on associait ce bel animal à des légendes merveilleuses… Ce temps est bien révolu, il a désormais une tout autre utilité.",
      [Lang.DE]: "Es gab eine Zeit, da waren diese edlen Tiere legendär. Naja...diese Zeiten sind zwar vorbei, aber edel sind sie trotzdem noch.",
      [Lang.ES]: "Hubo un tiempo en que este magnífico animal se asoció con maravillosas leyendas... Esos días ya pasaron, pero sirven para otra cosa..."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.GuardWeapon, ItemCategory.Event],
    icon: "item_renne",
    decoration: 0,
    heavy: true,
    watchPoints: 25,
    event: GameEvent.Christmas,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.83
    },
  },
  [ItemId.PAQUES]: {
    id: ItemId.PAQUES,
    numericalId: 276,
    name: {
      [Lang.EN]: "Easter Egg",
      [Lang.FR]: "Oeuf de Pâques",
      [Lang.DE]: "Osterei",
      [Lang.ES]: "Huevo de Pascua"
    },
    description: {
      [Lang.EN]: "A largely mouldy easter egg, its putrid stench is a little like gunpowder, could the mould have changed its physical properties? Might be worth testing on the zombies.",
      [Lang.FR]: "Un oeuf de Pâques largement moisi, son odeur putride rappelle celle de la poudre, se pourrait-il que la moisissure ait changé ses propriétés physiques ? Ça vaut le coup d'essayer sur des zombies.",
      [Lang.DE]: "Ein weitgehend verschimmeltes Osterei. Sein fauliger Gestank erinnert ein wenig an Schießpulver. Hat der Schimmel etwa seine physikalischen Eigenschaften verändert? Könnte sich lohnen, auf einen Zombie zu werfen.",
      [Lang.ES]: "Un huevo de Pascua en gran parte mohoso, su hedor pútrido es un poco como la pólvora, ¿podría el moho haber cambiado sus propiedades físicas? Podría valer la pena probar con los zombies."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.GuardWeapon, ItemCategory.Event],
    icon: "item_paques",
    decoration: 0,
    heavy: false,
    watchPoints: 18,
    event: GameEvent.Easter,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 2.1
    },
  },
  [ItemId.BADGE]: {
    id: ItemId.BADGE,
    numericalId: 277,
    name: {
      [Lang.EN]: "Collector Pins",
      [Lang.FR]: "Pins de collectionneur",
      [Lang.DE]: "Sammler-Pins",
      [Lang.ES]: "Medalla de un soldado"
    },
    description: {
      [Lang.EN]: "Rummaging through the wastes a dull glint catches your eye. On closer inspection you find it to be an ANZAC Badge. You immediately feel the strength of ten warriors within you. Guard this badge with your life, and the lives of those who have fallen before you. This legendary item must have some kind of effect on the evil horde...",
      [Lang.FR]: "En fouillant dans le désert de l'Outre-Monde, vous tombez face à une petite lumière étincelante et étrangement rassurante. En regardant de plus près, il se trouve que cela ressemble à une étoile de shérif. À sa vue, vous sentez naître le pouvoir d'un guerrier d'antan. L'utilisation de cet objet du passé pourrait bien vous donner plus de courage lors des veilles.",
      [Lang.DE]: "Du siehst ein glitzernden Gegenstand. Beim näheren Betrachten fällt dir auf, dass es ein Abzeichen ist. Das Abzeichen gibt dir die Kraft von 10 Männern. Du fühlst, dass dieser legendäre Gegenstand was besonderes ist.",
      [Lang.ES]: "Hurgando en los desperdicios, un destello tenue te llama la atención. En una inspección más detallada, descubres que es una insignia ANZAC. Inmediatamente sientes la fuerza de diez guerreros dentro de ti. Guarda esta insignia con tu vida y la vida de aquellos que han caído antes que tú. Este objeto legendario debe tener algún tipo de efecto sobre la horda malvada..."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_badge",
    decoration: 0,
    heavy: false,
    watchPoints: 14,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.26
    },
  },
  [ItemId.KALACH_01]: {
    id: ItemId.KALACH_01,
    numericalId: 278,
    name: {
      [Lang.EN]: "Kalashni-Splash (empty)",
      [Lang.FR]: "Kalachnik'eau (vide)",
      [Lang.DE]: "Kalaschni-Splash (leer)",
      [Lang.ES]: "Aguashnikov (vacío)"
    },
    description: {
      [Lang.EN]: "A powerful water gun against zombies. However, it does not kill many people when it is empty...",
      [Lang.FR]: "Une arme à eau est toujours très efficace contre les zombies, mais jamais lorsqu'elle est vide...",
      [Lang.DE]: "Eine Wasserwaffe ist immer sehr effektiv gegen Zombies.Das zählt allerdings nicht für leere...",
      [Lang.ES]: "Una poderosa arma de agua contra zombies. Como sea, no mata a mucha gente estando vacío..."
    },
    categories: [ItemCategory.Armoury],
    icon: "item_kalach",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.WATER }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "kalach_#00"
          }
        ]
      }
    ],
  },
  [ItemId.WIRE]: {
    id: ItemId.WIRE,
    numericalId: 279,
    name: {
      [Lang.EN]: "Wire Reel",
      [Lang.FR]: "Bobine de fil de fer",
      [Lang.DE]: "Drahtspule",
      [Lang.ES]: "Bobina de hilo metálico"
    },
    description: {
      [Lang.EN]: "Make sure you don't get tangled up in this, we'd hate to have to cut off your fingers to set you free.",
      [Lang.FR]: "Attention à ne pas s'emmêler avec, on ne voudrait pas avoir à vous couper les doigts pour vous en libérer.",
      [Lang.DE]: "Pass auf, dich nicht in den Drähten zu verstricken - wir würden dir nur ungern die Finger amputieren müssen, um dich zu befreien...",
      [Lang.ES]: "Ten cuidado con no enredarte con él, sería triste tener que cortarte los dedos para liberarte."
    },
    categories: [ItemCategory.Resources],
    icon: "item_wire",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.69
    },
  },
  [ItemId.OILCAN]: {
    id: ItemId.OILCAN,
    numericalId: 280,
    name: {
      [Lang.EN]: "Empty Oil Can",
      [Lang.FR]: "Bidon d'huile vide",
      [Lang.DE]: "Ölkännchen",
      [Lang.ES]: "Bidón de aceite vacío"
    },
    description: {
      [Lang.EN]: "From time to time we find empty oil cans in the desert, often accompanied by a corpse. When will citizens learn that motor oil is undrinkable...",
      [Lang.FR]: "On trouve de temps en temps des bidons d'huile vides dans le désert, souvent accompagné d'un cadavre. Quand est-ce que les citoyens comprendront que l'huile, ça ne se boit pas…",
      [Lang.DE]: "Ab und an finden wir diese Behälter leer in der Wüste - meistens an der Seite einer Leiche. Wann lernen die Leute endlich, dass man Motoröl nicht trinken kann?",
      [Lang.ES]: "Estos bidones provienen de antiguos restaurantes de comida chatarra, otra de las causas por las que se acabó el mundo... Siempre junto a ellos hay un cadáver. ¿Cuándo entenderán algunos que el aceite no se bebe?"
    },
    categories: [ItemCategory.Resources],
    icon: "item_oilcan",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 1.03
    },
  },
  [ItemId.LENS]: {
    id: ItemId.LENS,
    numericalId: 281,
    name: {
      [Lang.EN]: "Convex Lens",
      [Lang.FR]: "Lentille convexe",
      [Lang.DE]: "Konvexlinse",
      [Lang.ES]: "Lente convexa"
    },
    description: {
      [Lang.EN]: "This almoust flawless lens is just waiting for your ingenuity to find a use for it.",
      [Lang.FR]: "Cette lentille en bon état n'attend qu'un peu de votre ingéniosité pour être utilisée efficacement.",
      [Lang.DE]: "Diese fast makellose Linse wartet scheinbar nur darauf, von deiner Kreativität einem höheren Zweck zugeführt zu werden.",
      [Lang.ES]: "Esta lente en buen estado cuenta con tu ingeniosidad para ser utilizada eficazmente."
    },
    categories: [ItemCategory.Resources],
    icon: "item_lens",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.34
    },
  },
  [ItemId.ANGRYC]: {
    id: ItemId.ANGRYC,
    numericalId: 282,
    name: {
      [Lang.EN]: "Furious Kitten (partially digested)",
      [Lang.FR]: "Petit chaton furieux (partiellement digéré)",
      [Lang.DE]: "Wütende Mieze (halb verdaut)",
      [Lang.ES]: "Gatito furioso (digerido parcialmente)"
    },
    description: {
      [Lang.EN]: "A kitten which surely belonged a now-dead citizen. It seems pretty aggravated, maybe you shouldn't annoy it any more.",
      [Lang.FR]: "Le chat d'un concitoyen surement mort à l'heure qu'il est. Il semble partiellement en colère, mieux vaut ne pas l'énerver davantage.",
      [Lang.DE]: "Das Kätzchen sieht ein wenig angefressen aus. Du solltest es besser nicht noch mehr reizen, es faucht ja jetzt schon.",
      [Lang.ES]: "Seguramente una mascota engullida que logró escapar antes de ser totalmente digerida. Parece encolerizada, mejor mantener distancia."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration, ItemCategory.Animal],
    icon: "item_angryc",
    decoration: 1,
    heavy: false,
    watchPoints: 18,
    actions: [
      {
        type: ItemActionType.Butcher,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_animal_#00"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "flesh_#00",
            count: 2,
            odds: 100
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_animal_#00"
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "tg_meta_wound",
            odds: 50
          },
          {
            type: ItemActionEffectType.Kill,
            value: "99",
            odds: 50
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.34
    },
  },
  [ItemId.CLAYMO]: {
    id: ItemId.CLAYMO,
    numericalId: 283,
    name: {
      [Lang.EN]: "Claymore Mine",
      [Lang.FR]: "Mine Antipersonnelle",
      [Lang.DE]: "Tretmine",
      [Lang.ES]: "Mina antipersonal"
    },
    description: {
      [Lang.EN]: "We still find mines in the desert, but in general it's more common for careless citizens to step them than zombies.",
      [Lang.FR]: "On trouve encore des mines dans le désert, en général, ce sont plus les citoyens imprudents que les zombies qui marchent dessus.",
      [Lang.DE]: "Irgendwer hat sie mal in der Wüste vergraben, vermutlich um die Zombies aufzuhalten… Bisher haben sie sich nur als effektiv gegen unvorsichtige Mitbürger erwiesen.",
      [Lang.ES]: "Aún quedan minas en el desierto. En general, son más los humanos que los zombies quienes caminan sobre ellas. ¿Quién es el ser inferior en este caso?"
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_claymo",
    decoration: 0,
    heavy: false,
    watchPoints: 40,
    actions: [
      
    ],
  },
  [ItemId.DIODE]: {
    id: ItemId.DIODE,
    numericalId: 284,
    name: {
      [Lang.EN]: "Laser Diode",
      [Lang.FR]: "Diode laser",
      [Lang.DE]: "Laserdiode",
      [Lang.ES]: "Diodo láser"
    },
    description: {
      [Lang.EN]: "An electronic component from a revolutionary time. It looks like it's in good order, even if you can't see though it personally.",
      [Lang.FR]: "Un composant électronique d'une époque révolue, dans l'état on peut s'en servir de judas, même si on ne voit pas à travers.",
      [Lang.DE]: "Ein elektronisches Bauteil aus alter Zeit. Du hast nicht viel Ahnung von dem Zeug, aber es scheint noch zu funktionieren.",
      [Lang.ES]: "Un componente electrónico de una época pasada. Ahora encuéntrale un uso."
    },
    categories: [ItemCategory.Resources],
    icon: "item_diode",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.43
    },
  },
  [ItemId.GUITAR]: {
    id: ItemId.GUITAR,
    numericalId: 285,
    name: {
      [Lang.EN]: "Makeshift Guitar",
      [Lang.FR]: "Guitare artisanale",
      [Lang.DE]: "Selbstgebaute Gitarre",
      [Lang.ES]: "Guitarra artesanal"
    },
    description: {
      [Lang.EN]: "Once great for seducing the ladies while sitting in front of the campfire, they remain really popular despite the asexualization of the townsfolk. Far from a custom Les Paul '58 it may be, but it still brings joy and hope to the town. Who doesn't enjoy a sing-a-long?",
      [Lang.FR]: "Idéale pour draguer lors de nuit de feu de camp, elle reste très appréciée même depuis l'asexualisation des citoyens. Elle saura rendre joie et gaïté dans la ville.",
      [Lang.DE]: "Früher konnte man damit die Damenwelt beeindrucken... Diese Zeiten sind vorbei, doch beliebt ist die Gitarre immer noch. Sie kommt zwar nicht an eine echte Les Paul '58 heran, aber die Stadt kann ein wenig Auflockerung gebrauchen. Wer hätte denn keinen Spaß an ein bisschen Musik?",
      [Lang.ES]: "Todo indica que perteneció al trío de \"Los Panchos\". Sus cuerdas están intactas, te servirá para cantar tus desgracias en alegres melodías."
    },
    info: {
      [Lang.EN]: "Using it gives every citizen in town 1{{AP}} (2{{AP}} if drunk or drugged).",
      [Lang.FR]: "L'utiliser donne à chaque citoyen de la ville 1{{AP}} (2{{AP}} si ivre ou drogué).",
      [Lang.DE]: "Die Verwendung gibt jedem Bürger in der Stadt 1{{AP}} (2{{AP}} wenn betrunken oder unter Drogen).",
      [Lang.ES]: "Usarlo le da a cada ciudadano de la ciudad 1{{AP}} (2{{AP}} si está borracho o drogado)."
    },
    categories: [ItemCategory.Furniture, ItemCategory.GuardWeapon, ItemCategory.Decoration],
    icon: "item_guitar",
    decoration: 6,
    heavy: false,
    watchPoints: 10,
    actions: [
      
    ],
  },
  [ItemId.LSD]: {
    id: ItemId.LSD,
    numericalId: 286,
    name: {
      [Lang.EN]: "LSD",
      [Lang.FR]: "LSD",
      [Lang.DE]: "LSD",
      [Lang.ES]: "LSD"
    },
    description: {
      [Lang.EN]: "We don't know where this little pink square of paper came from, but when you put it in your mouth it sends bubbles to your brain!",
      [Lang.FR]: "On ne sait pas d'où vient ce petit papier rose, mais quand on le met dans la bouche, il fait des bulles dans le cerveau.",
      [Lang.DE]: "Keine Ahnung, wo dieses kleine, pinke Stück Papier herkommt, aber wenn Du es in den Mund nimmst kribbelt dein Gehirn!",
      [Lang.ES]: "Nadie sabe de dónde viene este papel rosado, pero al ponértelo en la lengua, sientes burbujas en el cerebro."
    },
    categories: [ItemCategory.Pharmacy, ItemCategory.APSource, ItemCategory.Drug],
    icon: "item_lsd",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_cobaye_#00"
          },
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_drug_#00",
            odds: 100
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "clean",
            odds: 100
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "drugged",
            odds: 100
          },
          {
            type: ItemActionEffectType.AP,
            value: 6,
            odds: 100
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "terror",
            odds: 25
          }
        ]
      }
    ],
  },
  [ItemId.LPOINT4]: {
    id: ItemId.LPOINT4,
    numericalId: 287,
    name: {
      [Lang.EN]: "Burning Laser Pointer (4 charges)",
      [Lang.FR]: "Pointeur laser brûlant (4 charges)",
      [Lang.DE]: "Starker Laserpointer (4 Schuss)",
      [Lang.ES]: "Puntero láser potente (4 cargas)"
    },
    description: {
      [Lang.EN]: "Banned throughout the world since someone advanced in years tried to cross the streams of two of these objects, it'll be good for slicing through putrefied flesh though!",
      [Lang.FR]: "Interdit dans le monde après qu'une personne d'âge avancé ait perdu la vue en croisant le faisceau de ce petit objet, il saura être utile pour trancher de la chair putréfiée !",
      [Lang.DE]: "In der alten Welt war er verboten.In den Jahren wurde er weiter verbessert und die Strahlen gebündelt. Heute eignet er sich gut, um durch verrottetes Fleisch zu schneiden.",
      [Lang.ES]: "Prohibido en las universidades desde que un profesor le quitó la vista a media clase cuando hizo un gesto con las manos. ¡Ahora te servirá para rebanar carne putrefacta!"
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_lpoint4",
    decoration: 0,
    heavy: false,
    watchPoints: 20,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "lpoint3_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "2"
          }
        ]
      }
    ],
  },
  [ItemId.LPOINT3]: {
    id: ItemId.LPOINT3,
    numericalId: 288,
    name: {
      [Lang.EN]: "Burning Laser Pointer (3 charges)",
      [Lang.FR]: "Pointeur laser brûlant (3 charges)",
      [Lang.DE]: "Starker Laserpointer (3 Schuss)",
      [Lang.ES]: "Puntero láser potente (3 cargas)"
    },
    description: {
      [Lang.EN]: "Banned throughout the world since someone advanced in years tried to cross the streams of two of these objects, it'll be good for slicing through putrefied flesh though!",
      [Lang.FR]: "Interdit dans le monde après qu'une personne d'âge avancé ait perdu la vue en croisant le faisceau de ce petit objet, il saura être utile pour trancher de la chair putréfiée !",
      [Lang.DE]: "In der alten Welt war er verboten.In den Jahren wurde er weiter verbessert und die Strahlen gebündelt. Heute eignet er sich gut, um durch verrottetes Fleisch zu schneiden.",
      [Lang.ES]: "Prohibido en las universidades desde que un profesor le quitó la vista a media clase cuando hizo un gesto con las manos. ¡Ahora te servirá para rebanar carne putrefacta!"
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_lpoint3",
    decoration: 0,
    heavy: false,
    watchPoints: 15,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "lpoint2_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "2"
          }
        ]
      }
    ],
  },
  [ItemId.LPOINT2]: {
    id: ItemId.LPOINT2,
    numericalId: 289,
    name: {
      [Lang.EN]: "Burning Laser Pointer (2 charges)",
      [Lang.FR]: "Pointeur laser brûlant (2 charges)",
      [Lang.DE]: "Starker Laserpointer (2 Schuss)",
      [Lang.ES]: "Puntero láser potente (2 cargas)"
    },
    description: {
      [Lang.EN]: "Banned throughout the world since someone advanced in years tried to cross the streams of two of these objects, it'll be good for slicing through putrefied flesh though!",
      [Lang.FR]: "Interdit dans le monde après qu'une personne d'âge avancé ait perdu la vue en croisant le faisceau de ce petit objet, il saura être utile pour trancher de la chair putréfiée !",
      [Lang.DE]: "In der alten Welt war er verboten.In den Jahren wurde er weiter verbessert und die Strahlen gebündelt. Heute eignet er sich gut, um durch verrottetes Fleisch zu schneiden.",
      [Lang.ES]: "Prohibido en las universidades desde que un profesor le quitó la vista a media clase cuando hizo un gesto con las manos. ¡Ahora te servirá para rebanar carne putrefacta!"
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_lpoint2",
    decoration: 0,
    heavy: false,
    watchPoints: 10,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "lpoint1_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "2"
          }
        ]
      }
    ],
  },
  [ItemId.LPOINT1]: {
    id: ItemId.LPOINT1,
    numericalId: 290,
    name: {
      [Lang.EN]: "Burning Laser Pointer (1 charge)",
      [Lang.FR]: "Pointeur laser brûlant (1 charge)",
      [Lang.DE]: "Starker Laserpointer (1 Schuss)",
      [Lang.ES]: "Puntero láser potente (1 carga)"
    },
    description: {
      [Lang.EN]: "Banned throughout the world since someone advanced in years tried to cross the streams of two of these objects, it'll be good for slicing through putrefied flesh though!",
      [Lang.FR]: "Interdit dans le monde après qu'une personne d'âge avancé ait perdu la vue en croisant le faisceau de ce petit objet, il saura être utile pour trancher de la chair putréfiée !",
      [Lang.DE]: "In der alten Welt war er verboten.In den Jahren wurde er weiter verbessert und die Strahlen gebündelt. Heute eignet er sich gut, um durch verrottetes Fleisch zu schneiden.",
      [Lang.ES]: "Prohibido en las universidades desde que un profesor le quitó la vista a media clase cuando hizo un gesto con las manos. ¡Ahora te servirá para rebanar carne putrefacta!"
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon],
    icon: "item_lpoint1",
    decoration: 0,
    heavy: false,
    watchPoints: 5,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "lpoint_#00"
          },
          {
            type: ItemActionEffectType.Kill,
            value: "2"
          }
        ]
      }
    ],
  },
  [ItemId.LPOINT]: {
    id: ItemId.LPOINT,
    numericalId: 291,
    name: {
      [Lang.EN]: "Burning Laser Pointer (Empty)",
      [Lang.FR]: "Pointeur laser brûlant déchargé",
      [Lang.DE]: "Starker Laserpointer (Leer)",
      [Lang.ES]: "Puntero láser potente descargado"
    },
    description: {
      [Lang.EN]: "Banned throughout the world since someone advanced in years tried to cross the streams of two of these objects, it'll be good for slicing through putrefied flesh though!",
      [Lang.FR]: "Interdit dans le monde après qu'une personne d'âge avancé ait perdu la vue en croisant le faisceau de ce petit objet, il saura être utile pour trancher de la chair putréfiée ! Maintenant il ne vous manque plus qu'une pile...",
      [Lang.DE]: "In der alten Welt war er verboten.In den Jahren wurde er weiter verbessert und die Strahlen gebündelt. Heute eignet er sich gut, um durch verrottetes Fleisch zu schneiden. Jetzt brauchst du nur noch eine Batterie...",
      [Lang.ES]: "Prohibido en las universidades desde que un profesor le quitó la vista a media clase cuando hizo un gesto con las manos. Pero las cabezas no ruedan solas, necesitas una pila..."
    },
    categories: [ItemCategory.Armoury],
    icon: "item_lpoint",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.PILE }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "lpoint4_#00",
            odds: 50
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "lpoint3_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "lpoint2_#00",
            odds: 25
          }
        ]
      }
    ],
  },
  [ItemId.SCOPE]: {
    id: ItemId.SCOPE,
    numericalId: 292,
    name: {
      [Lang.EN]: "Telescope",
      [Lang.FR]: "Téléscope",
      [Lang.DE]: "Teleskop",
      [Lang.ES]: "Telescopio"
    },
    description: {
      [Lang.EN]: "In days gone by, this tool was used to observe and count stars in the sky. Nowdays, the stars have been replaced by zombies. When used, the telescope halves the number of citizens required to estimate the attack.",
      [Lang.FR]: "Dans le passé, cet objet servait à compter et observer le nombre d'étoiles dans le ciel, de nos jours, on a remplacé les étoiles par les zombies. Si utilisé, permet de réduire de moitié le nombre de personnes nécessaire pour l'estimation de l'attaque.",
      [Lang.DE]: "Vor langer Zeit hat man mit diesem Werkzeug die Sterne beobachtet. Heute beobachten wir Zombies. Damit braucht die Angriffsabschätzung nur noch halb so viele Bürger.",
      [Lang.ES]: "En el pasado, este objeto servía para contar estrellas en el cielo. Hoy, remplazamos las estrellas por zombies. Al tenerlo en El almacén, se reduce a la mitad la cantidad de personas necesarias para hacer un pronóstico del ataque."
    },
    info: {
      [Lang.EN]: "Halves the number of citizens required to estimate the attack. This effect does not stack.",
      [Lang.FR]: "Divise par deux le nombre de citoyens nécessaires pour estimer l'attaque. Cet effet ne se cumule pas.",
      [Lang.DE]: "Halbiert die Anzahl der Bürger, die erforderlich sind, um den Angriff zu schätzen. Dieser Effekt ist nicht stapelbar.",
      [Lang.ES]: "Reduce a la mitad el número de ciudadanos necesarios para estimar el ataque. Este efecto no se acumula."
    },
    categories: [ItemCategory.Resources],
    icon: "item_scope",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.TRAPMA]: {
    id: ItemId.TRAPMA,
    numericalId: 293,
    name: {
      [Lang.EN]: "Impersonal Exploding Doormat",
      [Lang.FR]: "Paillasson piégé",
      [Lang.DE]: "Unpersönliche Explodierende Fußmatte",
      [Lang.ES]: "Felpudo explosivo"
    },
    description: {
      [Lang.EN]: "A great way to make someone feel really unwelcome, a bomb under the doormat! Why didn't we think of this before!",
      [Lang.FR]: "Une bien belle manière d'inviter les invités comme les non invités chez soi, une bombe sous le paillasson, pourquoi n'y avons-nous pas pensé plus tôt !",
      [Lang.DE]: "Nichts sagt \"Willkommen zuhause\" mehr als eine spontane Fußamputation.",
      [Lang.ES]: "Una excelente manera de hacer que alguien se sienta realmente mal acogido, ¡Una bomba debajo del felpudo! ¿Por qué no pensamos en esto antes?"
    },
    info: {
      [Lang.EN]: "At home, injures or kills an already injured thief.",
      [Lang.FR]: "À la maison, blesse ou tue un voleur déjà blessé.",
      [Lang.DE]: "Zu Hause verletzt oder tötet einen bereits verletzten Dieb.",
      [Lang.ES]: "En casa, hiere o mata a un ladrón ya herido."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_trapma",
    decoration: 5,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.CHUDOL]: {
    id: ItemId.CHUDOL,
    numericalId: 294,
    name: {
      [Lang.EN]: "Chuck Figurine",
      [Lang.FR]: "Figurine de Chuck",
      [Lang.DE]: "Chuck-Figur",
      [Lang.ES]: "Muñequito de Chuck"
    },
    description: {
      [Lang.EN]: "The spirit of Chuck resides in this figurine. Nothing can happen to it, and it will still be here long after your death, still unafraid of the zombie horde.",
      [Lang.FR]: "L'esprit du grand Chuck habite cette figurine, rien ne peut lui arriver, et même après votre mort, elle restera là, sans craindre les hordes.",
      [Lang.DE]: "Der Geist von Chuck lebt in dieser Figur. Nichts kann ihr schaden und sie wird noch lange nach deinem Tod hier sein, stets unerschrocken im Angesicht der Zombies.",
      [Lang.ES]: "El espíritu del gran Chuck habita en este muñequito, nada le pasará. Incluso después de tu muerte, el peligro le será esquivo."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_chudol",
    decoration: 15,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.34
    },
  },
  [ItemId.LILBOO]: {
    id: ItemId.LILBOO,
    numericalId: 295,
    name: {
      [Lang.EN]: "Little Book of Calm",
      [Lang.FR]: "Livre zen miniature",
      [Lang.DE]: "Kleine Zen-Fibel",
      [Lang.ES]: "Mini-libro de meditación"
    },
    description: {
      [Lang.EN]: "This book, which has been published in many languages, teaches you how to deal with overwhealming situations. There is a life after death! It prevents the user from becoming terrorised.",
      [Lang.FR]: "Ce livre, édité dans de nombreuses langues, vous permet d’appréhender plus calmement votre condition. Il y a une vie après la mort ! Prévient le statut terrorisé si utilisé.",
      [Lang.DE]: "Dieses Buch wurde in vielen Sprachen veröffentlicht. Es bietet Rat für aussichtslose Situationen und schützt so vor Angststarren.",
      [Lang.ES]: "Este librito fue un best-seller. Te ayuda a asimilar tranquilamente tu triste vida. Previene el estado aterrorizado si está en tu mochila."
    },
    info: {
      [Lang.EN]: "Prevents you from becoming {{status:terror}} terrorised while using items.",
      [Lang.FR]: "Vous empêche d'être {{status:terror}} terrorisé en utilisant des objets.",
      [Lang.DE]: "Verhindert, dass Sie {{status:terror}} terrorisiert werden, während Sie Gegenstände verwenden.",
      [Lang.ES]: "Evita que te {{status:terror}} aterroricen mientras usas objetos."
    },
    categories: [ItemCategory.Pharmacy, ItemCategory.RP],
    icon: "item_lilboo",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_rp_#00"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.43
    },
  },
  [ItemId.RYEBAG]: {
    id: ItemId.RYEBAG,
    numericalId: 296,
    name: {
      [Lang.EN]: "Bag of Damp Grass",
      [Lang.FR]: "Sac d'herbe fraîche",
      [Lang.DE]: "Trockene Kräuter",
      [Lang.ES]: "Costal de hierba fresca"
    },
    description: {
      [Lang.EN]: "Although it appears to be nothing but hay in the making, there must be another use for this herb apart from very disappointed cigarettes.",
      [Lang.FR]: "Puisqu'on vous dit que c'est de l'herbe banale, il y a surement une autre utilité à cette herbe qu'une simple cigarette roulée.",
      [Lang.DE]: "Scheint nicht viel besser als Heu zu sein, aber es wird sicher für irgendwas verwendbar sein. Außer ziemlich enttäuschenden Zigaretten.",
      [Lang.ES]: "Hierba común y corriente, debe tener otra utilidad, además de ser enrollada y fumada."
    },
    categories: [ItemCategory.Resources],
    icon: "item_ryebag",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.52
    },
  },
  [ItemId.FUNGUS]: {
    id: ItemId.FUNGUS,
    numericalId: 297,
    name: {
      [Lang.EN]: "Ergot Fungus",
      [Lang.FR]: "Claviceps Purpurea",
      [Lang.DE]: "Mutterkorn",
      [Lang.ES]: "Claviceps Purpurea"
    },
    description: {
      [Lang.EN]: "Sometimes we find mushrooms growing on corpses which make us say funny things, and they say that the effects on the brain are irreversible, and the state you're already in may just confirm it...",
      [Lang.FR]: "Sur les cadavres, parfois, il y a des champignons qui font dire des trucs marrants, il paraît que les effets sur le cerveau sont irréversibles, ma foi au point où vous en êtes...",
      [Lang.DE]: "Manchmal finden wir Pilze auf Leichen nach deren Genuss man die merkwürdigsten Sachen von sich gibt. Es heißt, die Schäden am Gehirn seien irreparabel und dein aktueller Zustand könnte das sogar bestätigen...",
      [Lang.ES]: "Sobre los cadáveres suelen crecer hongos que provocan delirios muy graciosos. Dicen que su efecto es irreversible. Madre mía, a qué extremo has llegado..."
    },
    categories: [ItemCategory.Food],
    icon: "item_fungus",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.HMBREW]: {
    id: ItemId.HMBREW,
    numericalId: 298,
    name: {
      [Lang.EN]: "Ergot Homebrew",
      [Lang.FR]: "Cidre Claviceps Artisanal",
      [Lang.DE]: "Korn-Bräu",
      [Lang.ES]: "Cidra claviceps artesanal"
    },
    description: {
      [Lang.EN]: "The dream of warriors, the blend of kings, the cocktail of the gods! If you doubt its strength, let one of your neighbors taste it.",
      [Lang.FR]: "Le mélange des guerriers, le cercueil des rois, le cocktail des dieux ! Si vous doutez de son effet, faîtes le goûter par un de vos voisins.",
      [Lang.DE]: "Gesöff der Krieger, Trank der Könige, Cocktail der Götter! Zweifelst Du an der Stärke dieses Getränkes, dann lass ruhig erst einmal Deine Nachbarn probieren.",
      [Lang.ES]: "\"Saltapatrás\", \"7 pecados\", \"Nos vemos en el suelo\"... Un licor exótico más, si quieres comprobar sus efectos, invítale un trago a un vecino."
    },
    info: {
      [Lang.EN]: "It can be used when hungover or already drunk, unlike other alcohols.",
      [Lang.FR]: "Il peut être utilisé en cas de gueule de bois ou déjà ivre, contrairement aux autres alcools.",
      [Lang.DE]: "Im Gegensatz zu anderen Alkoholen kann es bei einem Kater oder bereits betrunkenem Zustand konsumiert werden.",
      [Lang.ES]: "Se puede usar cuando tienes resaca o ya estás borracho, a diferencia de otros alcoholes."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource, ItemCategory.Alcohol],
    icon: "item_hmbrew",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_alcool_#00"
          },
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "drunk"
          }
        ]
      }
    ],
  },
  [ItemId.HIFIEV]: {
    id: ItemId.HIFIEV,
    numericalId: 299,
    name: {
      [Lang.EN]: "Cursed HiFi",
      [Lang.FR]: "Chaine Hifi maudite",
      [Lang.DE]: "Verfluchte HiFi",
      [Lang.ES]: "Equipo de música maldito"
    },
    description: {
      [Lang.EN]: "When used with a CD, this unit has the potential to become a weapon of mass destruction!",
      [Lang.FR]: "Combiné à un CD de musique, cette chaîne devient potentiellement une arme de destruction massive !",
      [Lang.DE]: "Wenn kombiniert mit einer CD, diese HiFi Anlage hat das Potential zu einer Massenvernichtungswaffe zu werden.",
      [Lang.ES]: "Cuando es usado con un CD, esta unidad tiene el potencial de convertirse en un arma de destrucción masiva."
    },
    categories: [ItemCategory.Furniture],
    icon: "item_hifiev",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.CDPHIL]: {
    id: ItemId.CDPHIL,
    numericalId: 300,
    name: {
      [Lang.EN]: "Phil Collins CD",
      [Lang.FR]: "CD de Phil Collins",
      [Lang.DE]: "Phil Collins CD",
      [Lang.ES]: "CD de Phil Collins"
    },
    description: {
      [Lang.EN]: "Nothing beats a little 80s retro music to liven up your tented evenings! If you're an evil b******d, open the window, turn it up LOUD and play it all night long!",
      [Lang.FR]: "Rien ne vaut le charme retro d'un artiste des années 90 pour égayer vos soirées sous tente !",
      [Lang.DE]: "Nichts ist besser, als mit ein wenig 80er Jahre Retro-Musik den Abend zu beleben! Dreh den Regler hoch und mach das Fenster auf!",
      [Lang.ES]: "Nada mejor que un poco de música ochentera para callar los gritos. ¡Sube el volumen y abre la ventana!"
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_cdphil",
    decoration: 1,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.BQUIES]: {
    id: ItemId.BQUIES,
    numericalId: 301,
    name: {
      [Lang.EN]: "Earplugs",
      [Lang.FR]: "Boules Quies",
      [Lang.DE]: "Ohrstöpsel",
      [Lang.ES]: "Tapones de oído"
    },
    description: {
      [Lang.EN]: "Had enough of the chitchat outside your door, townspeople insulting one another after too much Ergot Homebrew, citizens screaming in fear for their lives? These earplugs are your best friend!",
      [Lang.FR]: "Vous ne supportez plus les commérages à vos portes, les insultes à votre porte, les citoyens hurlant à la mort ? Les boules quiès seront vos meilleures amies !",
      [Lang.DE]: "Hast du genug von dem Gequassel vor deiner Tür, den Streitereien nach zu viel Korn-Bräu oder Bürgern, die verzweifelt um ihr Leben schreien? Diese Ohrstöpsel sind genau das Richtige für dich!",
      [Lang.ES]: "Si ya no soportas el parloteo de tus vecinos, los insultos hacia tu persona o los gritos de moribundos infelices, estos tapones te harán sentir mejor."
    },
    categories: [ItemCategory.Resources],
    icon: "item_bquies",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.26
    },
  },
  [ItemId.STAFF_01]: {
    id: ItemId.STAFF_01,
    numericalId: 302,
    name: {
      [Lang.EN]: "Broken Staff",
      [Lang.FR]: "Bâton cassé",
      [Lang.DE]: "Kaputter Stock",
      [Lang.ES]: "Palo roto"
    },
    description: {
      [Lang.EN]: "Half a staff. Too short to be a really effective weapon, but not entirely useless...",
      [Lang.FR]: "Un bout de bâton. Trop court pour servir d'arme, mais pas inutile pour autant...",
      [Lang.DE]: "Ein zerbrochener Stock. Leider zu kurz, um eine vernünftige Waffe zu sein, aber er ist nicht völlig nutzlos...",
      [Lang.ES]: "Un pedazo de palo. Demasiado corto para servir como arma, pero útil sin duda..."
    },
    categories: [ItemCategory.Resources],
    icon: "item_staff",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    available: false,
    actions: [
      
    ],
  },
  [ItemId.CDBRIT]: {
    id: ItemId.CDBRIT,
    numericalId: 303,
    name: {
      [Lang.EN]: "Britney Spears CD",
      [Lang.FR]: "CD de Britney Spears",
      [Lang.DE]: "Britney Spears CD",
      [Lang.ES]: "CD de Britney Spears"
    },
    description: {
      [Lang.EN]: "Despite an innocuous appearance, leading you to believe this is music for little girls, this is a serious defensive measure. As soon as the first waves from disk emanate from a HIFI, no normal person will be able to approach your home. That said, if our zombies were normal, MyHordes would be available on Facebook, so don't put all your faith in it...",
      [Lang.FR]: "Malgré une apparence trompeuse pouvant laisser croire à un passe-temps de petite fille, il s'agit d'une véritable arme défensive. Dès que les premières ondes sonores de cet objet maudit sortent d'une chaine HIFI, aucune personne normalement constituée ne peut approcher votre habitation. Mais bon, si les zombies étaient normalement constitués, Hordes serait disponible sur Facebook, donc méfiez-vous quand même...",
      [Lang.DE]: "Trotz dass Du glaubst, dies ist Musik für kleine Mädchen , ist das eine ernsthafte Verteidigungsmaßnahme . Sobald die ersten Töne von der Mini Hi-Fi Anlage erklingen, wird kein normaler Mensch in der Lage sein, sich deinem Haus zu nähern. Vorrausgesetzt unsere Zombies waren mal normal und kennen Facebook ....",
      [Lang.ES]: "A pesar de su inofensiva aparencia, que te lleva a creer que esto es música para niñas, esta es una seria medida defensiva. Tan pronto como las primeras ondas del disco emanen de un HIFI, ninguna persona normal podrá acercarse a tu casa. Dicho esto, si nuestros zombies fueran normales, MyHordes estaría disponible en Facebook, así que no pongas toda tu fe en ello..."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_cdbrit",
    decoration: 3,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.CDELVI]: {
    id: ItemId.CDELVI,
    numericalId: 304,
    name: {
      [Lang.EN]: "Best of The King CD",
      [Lang.FR]: "Compilation du King",
      [Lang.DE]: "Best of The King CD",
      [Lang.ES]: "Hits de Elvis"
    },
    description: {
      [Lang.EN]: "Ready to shake these hips to a little rock n' roll? This compilation from the true king of rock will kick-start the party!",
      [Lang.FR]: "Prêt à bouger votre corps suintant au rythme du rock n' roll ? Cette compilation du légendaire King of rock va mettre le feu à la scène !",
      [Lang.DE]: "Bereit deine Hüften zu ein wenig Rock 'n' Roll zu schwingen? Diese Sammlung der besten Songs des King of Rock wird Stimmung in jede Party bringen.",
      [Lang.ES]: "¡A mover las caderas con El Rey del Rock and Roll!"
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_cdelvi",
    decoration: 7,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.09
    },
  },
  [ItemId.DFHIFI]: {
    id: ItemId.DFHIFI,
    numericalId: 305,
    name: {
      [Lang.EN]: "Rock n Roll HiFi",
      [Lang.FR]: "Chaîne HI-FI Rock n'Roll",
      [Lang.DE]: "Rock n Roll HiFi",
      [Lang.ES]: "Equipo de música maldito"
    },
    description: {
      [Lang.EN]: "Spinning the hits of the King, you'll wake up more motivated and energized than ever before!",
      [Lang.FR]: "Combiné à un CD du King, vous vous réveillerez avec une pêche d'enfer tous les matins.",
      [Lang.DE]: "Beflügelt durch die Hits des Kings, bist du motivierter als jemals zuvor!",
      [Lang.ES]: "¡Girando los golpes del Rey, te despertarás más motivado y con más energía que nunca!"
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_dfhifi",
    decoration: 10,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.DFHIFI_01]: {
    id: ItemId.DFHIFI_01,
    numericalId: 306,
    name: {
      [Lang.EN]: "Anti-personnel HiFi",
      [Lang.FR]: "Chaîne Hi-Fi défensive",
      [Lang.DE]: "Verteidigende HiFi",
      [Lang.ES]: "Equipo Hi-Fi defensivo"
    },
    description: {
      [Lang.EN]: "The right CD and some good ear protection make this a powerful weapon which allows you to rest peacefully while others are kept at a safe distance!",
      [Lang.FR]: "Combiné à un CD de musique, et des boules quiès, vous serez épargné par la toute puissance de cette arme fatale pour quiconque approchera de votre domicile",
      [Lang.DE]: "Mit der richtigen CD und ein paar guten Ohrstöpseln wird diese HiFi zu einer gefährlichen Waffe, die dich und deine Mitbürger sicher schlafen lässt (zumindest in einiger Distanz)",
      [Lang.ES]: "El CD adecuado y unos buenos protectores auditivos forman esta poderosa arma que te permite descansar tranquilamente mientras otros se mantienen a una distancia segura."
    },
    info: {
      [Lang.EN]: "Prevents other players from stealing from your house.",
      [Lang.FR]: "Empêche les autres joueurs de voler dans votre maison.",
      [Lang.DE]: "Verhindert, dass andere Spieler in Ihr Haus stehlen.",
      [Lang.ES]: "Evita que otros jugadores roben en tu casa."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_dfhifi",
    decoration: 10,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.CATBOX]: {
    id: ItemId.CATBOX,
    numericalId: 307,
    name: {
      [Lang.EN]: "Schrödinger's Box",
      [Lang.FR]: "Boîte de Schrödinger",
      [Lang.DE]: "Schrödingers Box",
      [Lang.ES]: "Caja de Schrödinger"
    },
    description: {
      [Lang.EN]: "It's pretty damn heavy and almost certainly contains something useful... you just need to find something better than your teeth for opening it.",
      [Lang.FR]: "C'est particulièrement lourd et ça contient sûrement quelque chose de précieux... Reste à trouver un outil plus adapté que vos dents pour l'ouvrir.",
      [Lang.DE]: "Sie ist verdammt schwer und du bist dir fast sicher, dass da etwas nützliches drin ist... Aber erstmal brauchst du etwas um sie zu öffnen - zumindest etwas besseres als deine Zähne.",
      [Lang.ES]: "Es pesada y seguramente contiene algo valioso... Solo falta encontrar algo mejor que tus dientes para abrirla."
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_catbox",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.17
    },
    openableBy: [
      ItemId.SAW_TOOL,
      ItemId.CAN_OPENER,
      ItemId.SCREW,
      ItemId.SWISS_KNIFE
    ],
  },
  [ItemId.CHKSPK]: {
    id: ItemId.CHKSPK,
    numericalId: 308,
    name: {
      [Lang.EN]: "Psychadelic Spiritual Counsel",
      [Lang.FR]: "Discours rassurant multicoloré",
      [Lang.DE]: "Geistiger Beistand",
      [Lang.ES]: "Discurso motivador"
    },
    description: {
      [Lang.EN]: "We don't know if it's the LSD or it's just that Chuck Norris is so hard, he drinks napalm to cure his heartburn, but this speech certainly has a positive effect on the watchman!",
      [Lang.FR]: "On ne sait pas si c'est l'effet du LSD ou le fait que Chuck Norris est le mec le plus badass au monde, mais ce discours enflammé a son effet sur les troupes des veilleurs !",
      [Lang.DE]: "Keine Ahnung, ob es am LSD liegt oder daran, dass Chuck Norris so hart ist, er trinkt Napalm gegen Sodbrennen - aber diese Rede hat definitiv einen positiven Einfluss auf unsere Nachtwächter!",
      [Lang.ES]: "No sabemos si es por el efecto del LSD o de Chuck Norris, ¡pero este discurso motiva mucho a los centinelas!"
    },
    info: {
      [Lang.EN]: "If in one of the watchmen's rucksack it adds +15 defence points for every citizen on watch.",
      [Lang.FR]: "S'il est dans le sac à dos d'un des veilleurs, il ajoute +15 points de défense pour chaque citoyen en veille.",
      [Lang.DE]: "Wenn es im Rucksack eines der Wächter ist, fügt es +15 Verteidigungspunkte für jeden Bürger im Wachmodus hinzu.",
      [Lang.ES]: "Si está en la mochila de uno de los vigilantes, añade +15 puntos de defensa por cada ciudadano en vigilancia."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_chkspk",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.PET_SNAKE2]: {
    id: ItemId.PET_SNAKE2,
    numericalId: 309,
    name: {
      [Lang.EN]: "Fat Serpent",
      [Lang.FR]: "Serpent agonisant",
      [Lang.DE]: "Fette Python",
      [Lang.ES]: "Serpiente agonizante"
    },
    description: {
      [Lang.EN]: "This giant snake seems to have indigestion, it has a huge bulge in its abdomen. It's of no use to you like this...",
      [Lang.FR]: "Ce boa géant semble avoir une indigestion, une grosse bosse se dessine sur son ventre. Il ne sert à rien tel quel...",
      [Lang.DE]: "Diese riesige Schlange scheint Verdauungsprobleme zu haben... SO kannst du jedenfalls nichts mehr mit ihr anfangen.",
      [Lang.ES]: "La protuberancia en el vientre de esta boa hace pensar que sufre una severa indigestión. En ese estado no sirve de nada..."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.GuardWeapon],
    icon: "item_pet_snake2",
    decoration: 0,
    heavy: true,
    watchPoints: 15,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.34
    },
  },
  [ItemId.CHEST_CHRISTMAS_3]: {
    id: ItemId.CHEST_CHRISTMAS_3,
    numericalId: 310,
    name: {
      [Lang.EN]: "Christmas Present (3)",
      [Lang.FR]: "Caisse surprise (3)",
      [Lang.DE]: "Überraschungskiste (3 Geschenke)",
      [Lang.ES]: "Caja sorpresa (3 regalos)"
    },
    description: {
      [Lang.EN]: "It seems that a neighbour has left a small box with your name on it in front of your house... What could be inside ?",
      [Lang.FR]: "On dirait qu'un voisin a laissé une petite caisse avec votre nom inscrit dessus devant chez vous... Que peut-elle donc bien contenir ?",
      [Lang.DE]: "Sieht so aus als hätte dein Nachbar dir ein Geschenkt gemacht! Dein Name steht drauf! Was mag sie wohl enthalten?.",
      [Lang.ES]: "Tu nombre está escrito en ella, ¡parece que tienes un admirador! ¿qué puede contener?"
    },
    categories: [ItemCategory.Containers_and_boxes, ItemCategory.Event],
    icon: "item_chest_christmas_3",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    event: GameEvent.NewYear,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "chest_christmas_2_#00"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "omg_this_will_kill_you_#00",
            odds: 100
          }
        ]
      }
    ],
  },
  [ItemId.CHEST_CHRISTMAS_2]: {
    id: ItemId.CHEST_CHRISTMAS_2,
    numericalId: 311,
    name: {
      [Lang.EN]: "Christmas Present (2)",
      [Lang.FR]: "Caisse surprise (2)",
      [Lang.DE]: "Überraschungskiste (2 Geschenke)",
      [Lang.ES]: "Caja sorpresa (2 regalos)"
    },
    description: {
      [Lang.EN]: "It seems that a neighbour has left a small box with your name on it in front of your house... What could be inside ?",
      [Lang.FR]: "On dirait qu'un voisin a laissé une petite caisse avec votre nom inscrit dessus devant chez vous... Que peut-elle donc bien contenir ?",
      [Lang.DE]: "Sieht so aus als hätte dein Nachbar dir ein Geschenkt gemacht! Dein Name steht drauf! Was mag sie wohl enthalten?.",
      [Lang.ES]: "Tu nombre está escrito en ella, ¡parece que tienes un admirador! ¿qué puede contener?"
    },
    categories: [ItemCategory.Containers_and_boxes, ItemCategory.Event],
    icon: "item_chest_christmas_2",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    event: GameEvent.NewYear,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "chest_christmas_1_#00"
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rp_letter_#00",
            odds: 100
          }
        ]
      }
    ],
  },
  [ItemId.CHEST_CHRISTMAS_1]: {
    id: ItemId.CHEST_CHRISTMAS_1,
    numericalId: 312,
    name: {
      [Lang.EN]: "Christmas Present (1)",
      [Lang.FR]: "Caisse surprise (1)",
      [Lang.DE]: "Überraschungskiste (1 Geschenk)",
      [Lang.ES]: "Caja sorpresa (1 regalo)"
    },
    description: {
      [Lang.EN]: "It seems that a neighbour has left a small box with your name on it in front of your house... What could be inside ?",
      [Lang.FR]: "On dirait qu'un voisin a laissé une petite caisse avec votre nom inscrit dessus devant chez vous... Que peut-elle donc bien contenir ?",
      [Lang.DE]: "Sieht so aus als hätte dein Nachbar dir ein Geschenkt gemacht! Dein Name steht drauf! Was mag sie wohl enthalten?.",
      [Lang.ES]: "Tu nombre está escrito en ella, ¡parece que tienes un admirador! ¿qué puede contener?"
    },
    categories: [ItemCategory.Containers_and_boxes, ItemCategory.Event],
    icon: "item_chest_christmas_1",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    event: GameEvent.NewYear,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "watergun_opt_5_#00",
            odds: 100
          }
        ]
      }
    ],
  },
  [ItemId.OMG_THIS_WILL_KILL_YOU]: {
    id: ItemId.OMG_THIS_WILL_KILL_YOU,
    numericalId: 313,
    name: {
      [Lang.EN]: "Suspicious looking plum juice",
      [Lang.FR]: "Jus de mirabelle suspect",
      [Lang.DE]: "Verdächtiger Traubensaft",
      [Lang.ES]: "Mosto sospechoso"
    },
    description: {
      [Lang.EN]: "This carefully sealed vial contains plum juice. Seems suspicious if you ask me. Especially when you conside that the label reads : 'in case of ingestion, contact the nearest poisons unit'. You're not going to drink it anyway, are you? Really?",
      [Lang.FR]: "Cette fiole soigneusement scellée contient du jus de mirabelle. C'est vraiment suspect. D'autant qu'elle porte une étiquette : 'en cas d'ingestion, contacter le centre anti-poison le plus proche de chez vous'. Vous n'allez quand même pas boire ça ? Si ?",
      [Lang.DE]: "Dieses gut versiegelte Fläschen enthält Traubensaft. Das ist wirklich komisch... Warum sollte jemand Traubensaft versiegeln? Zumal ein Etikett angebracht wurde: 'Bei versehentlichen Verschlucken, bitte schnellstens die nächste Ambulanz aufsuchen'. Das willste doch nicht trinken? Oder etwa doch?!",
      [Lang.ES]: "Esta botella bien sellada contiene mosto. Extraño... ¿por qué alguien sellaría mosto? Tiene adjunta una etiqueta: \"Si se engiere, llame a una ambulancia lo antes posible\"."
    },
    categories: [ItemCategory.Food, ItemCategory.Event],
    icon: "item_omg_this_will_kill_you",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    event: GameEvent.Christmas,
    actions: [
      
    ],
  },
  [ItemId.RP_SCROLL_01]: {
    id: ItemId.RP_SCROLL_01,
    numericalId: 314,
    name: {
      [Lang.EN]: "Label",
      [Lang.FR]: "Une étiquette",
      [Lang.DE]: "Ein Etikett",
      [Lang.ES]: "Una etiqueta"
    },
    description: {
      [Lang.EN]: "A label from a bottle of something... Hang on, there's something written on the back !",
      [Lang.FR]: "Une étiquette de bouteille... Hé, il y a des choses inscrites derrière !",
      [Lang.DE]: "Ein Flaschenetikett... Auf der Rückseite ist es sogar beschrieben!",
      [Lang.ES]: "Una etiqueta de tequila... ¡Hey, tiene algo escrito detrás!"
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.RP],
    icon: "item_rp_scroll",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_rp_#00"
          }
        ]
      }
    ],
  },
  [ItemId.BASIC_SUIT]: {
    id: ItemId.BASIC_SUIT,
    numericalId: 315,
    name: {
      [Lang.EN]: "Town Uniform",
      [Lang.FR]: "Uniforme de citoyen",
      [Lang.DE]: "Bürgerbekleidung",
      [Lang.ES]: "Uniforme de habitante"
    },
    description: {
      [Lang.EN]: "A Resident is effectively a normal, everyday citizen, with no remarkable abilities to speak of...",
      [Lang.FR]: "Votre uniforme de citoyen, inchangé depuis des années. Également le dernier vêtement que vous porterez pour le restant de vos jours. Néanmoins, cette tenue est fonctionnelle et relativement confortable donc il n'y a pas trop à se plaindre non plus...",
      [Lang.DE]: "Die Klamotten, die du schon seit ein paar Jahren trägst. Sie sind abgetragen, erfüllen aber ihren Zweck: Sie sind bequem. In diesen Kleidern wirst du auch sterben, soviel steht schon einmal fest.",
      [Lang.ES]: "El mismo de siempre. El mismo que llevarás puesto hasta el final de tus días. Después de todo es cómodo para la lucha constante... ¿Qué querías? ¿una camisa floreada y un bonito sombrero de paja?"
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_basic_suit",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.BASIC_SUIT_DIRT]: {
    id: ItemId.BASIC_SUIT_DIRT,
    numericalId: 316,
    name: {
      [Lang.EN]: "Dirty Uniform",
      [Lang.FR]: "Uniforme de citoyen sale",
      [Lang.DE]: "Dreckige Bürgerbekleidung",
      [Lang.ES]: "Uniforme de habitante sucio"
    },
    description: {
      [Lang.EN]: "Your uniform : torn, dirty and covered in splashes of God-knows-what... You should really think about washing it when you get back to the town.",
      [Lang.FR]: "Votre uniforme de citoyen : abîmé, sale et couvert de taches en tous genres... Il faudra penser à le nettoyer à votre retour en ville.",
      [Lang.DE]: "Schau dich nur an! Deine Kleidung ist vollkommen verdreckt und blutbesprengt! Du solltest sie reinigen, sobald du daheim bist!",
      [Lang.ES]: "Está desgarrado, maloliente y lleno de manchas de todo tipo... No olvides lavarlo cuando vuelvas al pueblo."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_basic_suit_dirt",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "basic_suit_#00"
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "terror",
            odds: -3
          }
        ]
      }
    ],
  },
  [ItemId.VEST_ON]: {
    id: ItemId.VEST_ON,
    numericalId: 317,
    name: {
      [Lang.EN]: "Camouflage Vest",
      [Lang.FR]: "Tenue de camouflage",
      [Lang.DE]: "Tarnanzug",
      [Lang.ES]: "Camuflaje"
    },
    description: {
      [Lang.EN]: "This allows you to move freely through zombie-infested areas in the desert. Always be careful though, as there is a chance you could be spotted if you're trying to cross an area that's crawling with the undead....",
      [Lang.FR]: "Cette tenue vous permet d'avancer dans le désert au milieu des zombies sans contrainte. Prudence toutefois, vous avez une chance d'être repéré(e) si vous traversez un secteur largement contrôlé par les morts-vivants.",
      [Lang.DE]: "Mit dieser Kleidung kannst du dich in der Wüste unerkannt fortbewegen. Dennoch ist Vorsicht geboten: Wenn sich in einer Zone zu viele Zombies aufhalten, kannst du erkannt werden.",
      [Lang.ES]: "Este traje te permite avanzar en el desierto sin temer ser visto por los zombies. Pero cuidado, puede no ser tan eficaz si atraviesas una zona controlada por numerosos muertos vivientes."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_vest_on",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.VEST_OFF]: {
    id: ItemId.VEST_OFF,
    numericalId: 318,
    name: {
      [Lang.EN]: "Camouflage Vest (not equipped!)",
      [Lang.FR]: "Camouflage (inactif !)",
      [Lang.DE]: "Tarnkleidung (nicht wirksam!)",
      [Lang.ES]: "Camuflaje (inactivo)"
    },
    description: {
      [Lang.EN]: "You're not wearing your camouflage vest, so you will no longer receive your stealth bonus !",
      [Lang.FR]: "Vous ne portez pas votre tenue de camouflage, vous ne bénéficiez donc plus de vos avantages de furtivité !",
      [Lang.DE]: "Du trägst keine Tarnkleidung und hast deswegen auch keinerlei Tarnungsvorteile!",
      [Lang.ES]: "No llevas puesto tu traje de camuflaje, serás visto en el paraje... ¡Me salió una rima!"
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_vest_off",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "vest_on_#00"
          }
        ]
      }
    ],
  },
  [ItemId.PELLE]: {
    id: ItemId.PELLE,
    numericalId: 319,
    name: {
      [Lang.EN]: "Small Spade",
      [Lang.FR]: "Petite Pelle",
      [Lang.DE]: "Kleine Schaufel",
      [Lang.ES]: "Pala"
    },
    description: {
      [Lang.EN]: "The standard tool of the Scavenger. The small shovel automatically reduces searching time in the desert... The chances of finding an object are also significantly increased.",
      [Lang.FR]: "L'outil bien connu des Fouineurs. La petite pelle vous permet de réduire (automatiquement) le temps de fouille dans le désert... Les chances de trouver un objet sont également sensiblement plus élevées.",
      [Lang.DE]: "Mit der kleinen Schaufel musst du in der Wüste nicht so lange graben (automatisch aktiviert). Die Wahrscheinlichkeit einen Gegenstand zu finden ist ebenfalls größer.",
      [Lang.ES]: "La herramienta favorita de los excavadores. Sirve para reducir (automáticamente) el tiempo de búsqueda en el desierto. Y con ella, las oportunidades de encontrar algo son mucho más elevadas."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_pelle",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.TAMED_PET]: {
    id: ItemId.TAMED_PET,
    numericalId: 320,
    name: {
      [Lang.EN]: "Three-legged Labradoodle",
      [Lang.FR]: "Bichon maltais à 3 pattes",
      [Lang.DE]: "Dreibeiniger Malteser",
      [Lang.ES]: "Bichón maltés de 3 patas"
    },
    description: {
      [Lang.EN]: "He follows you everywhere, smelling of wet dog and drooling constantly. And he yaps. Often. Once a day though, you can ask him to take the contents of your rucksack back to the town from anywhere in the desert.",
      [Lang.FR]: "Il vous suit partout, sent le poil mouillé, claudique et bave abondamment. Et il jappe également. Souvent. Vous pouvez lui demander, une fois par jour, de ramener le contenu de votre sac à dos en ville, depuis n'importe quel coin du désert.",
      [Lang.DE]: "Der kleine kläffende Malteser stinkt nach nassem Fell, humpelt und sabbert ohne Ende. Einmal pro Tag kannst du ihn mit deinem Rucksackinhalt in die Stadt schicken. Dabei spielt es keine Rolle, wo du dich gerade befindest... Dein treuer Begleiter schlägt sich.",
      [Lang.ES]: "Te sigue por todas partes, huele a perro mojado, cojea y babea en abundancia. Y por supuesto, ladra demasiado. Una vez al día puedes pedirle que lleve el contenido de tu mochila al pueblo, desde cualquier lugar del desierto."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_tamed_pet",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.MEAT }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "tamed_pet_drug_#00"
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "tamed_pet_off_#00"
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "tamer_watch_1"
          }
        ]
      }
    ],
  },
  [ItemId.TAMED_PET_DRUG]: {
    id: ItemId.TAMED_PET_DRUG,
    numericalId: 321,
    name: {
      [Lang.EN]: "Well fed Labradoodle",
      [Lang.FR]: "Bichon maltais bien nourri",
      [Lang.DE]: "Gut gefüttertes Malteser Hündchen",
      [Lang.ES]: "Cachorro maltés bien alimentado"
    },
    description: {
      [Lang.EN]: "Now that you’ve given your Labradoodle a tasty treat to boost his strength, he can carry even the heaviest and bulkiest objects. You can’t help but notice the incessant drooling, and he seems poised to jump at you at any moment...",
      [Lang.FR]: "Maintenant que vous avez suffisamment renforcé votre bichon avec une friandise, il peut transporter seul des objets lourds et encombrants. Vous remarquez qu'il bave constamment. On dirait qu'il vous sauter dessus à tout moment.",
      [Lang.DE]: "Nun, da du dein Hündchen mit einem Leckerli ausreichend gestärkt hast, kann es selbst schwere und sperrige Gegenstände schleppen. Dir fällt auf, dass es ohne Ende sabbert. Es sieht aus, als würde es dich jeden Augenblick anspringen.",
      [Lang.ES]: "Ahora que has sobornado a tu perro con una golosina, puede cargar incluso objetos pesados y voluminosos. Eso sí, te das cuenta de que no para de babear... parece que va a saltarte encima en cualquier momento si te despistas..."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_tamed_pet_food",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "tamed_pet_off_#00"
          },
          {
            type: ItemActionEffectType.CampingChances,
            value: "+5%"
          }
        ]
      }
    ],
  },
  [ItemId.TAMED_PET_OFF]: {
    id: ItemId.TAMED_PET_OFF,
    numericalId: 322,
    name: {
      [Lang.EN]: "Tired Labradoodle",
      [Lang.FR]: "Bichon maltais fatigué",
      [Lang.DE]: "Müdes Malteser Hündchen",
      [Lang.ES]: "Bichón maltés cansado"
    },
    description: {
      [Lang.EN]: "Your labradoodle seems tired... panting constantly and looking at you with that exhausted stare.",
      [Lang.FR]: "Votre bichon semble épuisé... Il halète constamment et vous fixe d'un air las.",
      [Lang.DE]: "Dein Hündchen sieht <em>müde</em> aus... Es keucht die ganze Zeit und starrt dich aus erschöpften Augen an.",
      [Lang.ES]: "Tu bichón parece cansado... Jadea constantemente y te mira con ojos agotados."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_tamed_pet_off",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.SURV_BOOK]: {
    id: ItemId.SURV_BOOK,
    numericalId: 323,
    name: {
      [Lang.EN]: "Survival Book",
      [Lang.FR]: "Livre de survie",
      [Lang.DE]: "Survivalbuch",
      [Lang.ES]: "Manual de supervivencia"
    },
    description: {
      [Lang.EN]: "Your precious book entitled \"Junior Woodchuck's Scouting Manual\". Even though it may look like a children's book, it contains a wealth of useful information for anyone looking to survive in the great outdoors. It even shows you how to find food easily.",
      [Lang.FR]: "Votre précieux guide, intitulé \"le manuel des castors juniors\". Même s'il ressemble à une édition pour enfants, il contient une foule d'informations utiles pour qui veut se débrouiller seul dans la nature. Il vous permettra de trouver à manger ou à boire facilement.",
      [Lang.DE]: "Auch wenn der Titel anderes vermuten lässt: \"Tick, Trick und Tracks Schlaues Buch\" ist von unschätzbarem Wert. Es enthält zahlreiche Tipps und Tricks, wie man in der Natur am besten überleben und Nahrung finden kann.",
      [Lang.ES]: "Tu valiosa guía titulada \"El Manual de los Castores\". Hasta parece una edición para niños. Contiene una serie de consejos e instrucciones para ayudar sobrevivir en la naturaleza. Te ayudará a encontrar comida y agua fácilmente."
    },
    info: {
      [Lang.EN]: "The book success chances go from 100% on day 1 to 50% on day 20.",
      [Lang.FR]: "Les chances de succès du livre vont de 100% au jour 1 à 50% au jour 20.",
      [Lang.DE]: "Die Erfolgschancen des Buches liegen am Tag 1 bei 100 % und am Tag 20 bei 50 %.",
      [Lang.ES]: "Las posibilidades de éxito del libro van del 100% en el día 1 al 50% en el día 20."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_surv_book",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Drink,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AddStatus,
            value: "hasdrunk",
            count: "1-4",
            odds: 100
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "hasdrunk",
            count: "5-9",
            odds: 85
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "hasdrunk",
            count: "10-12",
            odds: 80
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "hasdrunk",
            count: "13-14",
            odds: 70
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "hasdrunk",
            count: "15-19",
            odds: 60
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "hasdrunk",
            count: "20-99",
            odds: 50
          }
        ]
      },
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AddStatus,
            value: "haseaten",
            count: "1-4",
            odds: 100
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "haseaten",
            count: "5-9",
            odds: 85
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "haseaten",
            count: "10-12",
            odds: 80
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "haseaten",
            count: "13-14",
            odds: 70
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "haseaten",
            count: "15-19",
            odds: 60
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "haseaten",
            count: "20-99",
            odds: 50
          }
        ]
      }
    ],
  },
  [ItemId.KEYMOL]: {
    id: ItemId.KEYMOL,
    numericalId: 324,
    name: {
      [Lang.EN]: "Handyman's Toolbelt",
      [Lang.FR]: "Clé à molette de compet'",
      [Lang.DE]: "Schraubenschlüssel",
      [Lang.ES]: "Llave inglesa profesional"
    },
    description: {
      [Lang.EN]: "This comprehensive tool kit, which includes a top-of-the-line adjustable wrench, allows the technician to build more easily. Thanks to the array of tools in the kit, the tech can also take an impression of a lock in a secured door.",
      [Lang.FR]: "Indispensable pour pulvériser les records de construction de chantier, le kit complet du bricoleur est accompagné d'une clé à molette de compétition !",
      [Lang.DE]: "Unverzichtbar, um auf den Baustellen der Stadt herumzuwuseln, kann der Schraubenschlüssel auch dazu verwendet werden, verschlossene Türen ganz einfach zu öffnen.",
      [Lang.ES]: "Este kit completo contiene una llave profesional que permite construir cosas más fácilmente. Contiene también las herramientas necesarias para hacer una llave igual a la que cerró una puerta."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_keymol",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_repair_#00"
          },
          {
            type: ItemActionEffectType.CP,
            value: -3
          }
        ]
      }
    ],
  },
  [ItemId.SHIELD]: {
    id: ItemId.SHIELD,
    numericalId: 325,
    name: {
      [Lang.EN]: "Riot Shield",
      [Lang.FR]: "Bouclier Anti-émeutes",
      [Lang.DE]: "Schutzschild",
      [Lang.ES]: "Escudo antidisturbios"
    },
    description: {
      [Lang.EN]: "It's big and it's zombie-proof. In this world who could ask for more... It allows you to face 2 additional zombies in the desert..",
      [Lang.FR]: "Dans le désert, il retient 4 zombies au lieu de 2 (pour un citoyen normal)",
      [Lang.DE]: "Ein großer Schutzschild, der keine Wünsche offen lässt, ermöglicht es dir, in der Wüste bis zu 2 zusätzliche Zombies auf Distanz zu halten.",
      [Lang.ES]: "Grande y a prueba de zombies. No se puede pedir más... Te protege de 2 zombies más en el desierto y aumenta las defensas si estás en el pueblo."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_shield",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.SHAMAN]: {
    id: ItemId.SHAMAN,
    numericalId: 326,
    name: {
      [Lang.EN]: "Voodoo Mask",
      [Lang.FR]: "Masque Voodoo",
      [Lang.DE]: "Voodoo-Maske",
      [Lang.ES]: "Máscara de vudú"
    },
    description: {
      [Lang.EN]: "This antique mask, which has been used by ancient voodoo sorcerors for thousands of years, allows the Shaman to know exactly where the souls of freshly-deceased citizens are located in the World Beyond.",
      [Lang.FR]: "Masque ultra-antique, bénéficiant du savoir-faire millénaire des anciens sorciers vaudou, permettra au Chaman de connaître l'emplacement des âmes de citoyens fraîchement décédés se promenant dans l'Outre-monde.",
      [Lang.DE]: "Diese uralte Maske ist erfüllt vom Wissen und der Macht tausender Voodoo-Priester. Mit ihr kann der Schamane ausfindig machen, wo in der Außenwelt die Seelen frisch verstorbenen Bürger herumwandeln.",
      [Lang.ES]: "Esta máscara esconde el conocimiento y el poder miles de sacerdotes vudú. El chamán la puede usar para revelar dónde deambulan las almas de los habitantes muertos en el Ultramundo."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_shaman",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.FIREWORK_POWDER]: {
    id: ItemId.FIREWORK_POWDER,
    numericalId: 327,
    name: {
      [Lang.EN]: "Super-Fuzz Powder",
      [Lang.FR]: "Poudre Super-Fuzz",
      [Lang.DE]: "Super-Flaum-Pulver",
      [Lang.ES]: "Polvo Súper-Fuzz"
    },
    description: {
      [Lang.EN]: "Depending on the era, this powder was used sequentially as a detonator for various artillery pieces, then as a cheap drug for needy citizens and finally as the main component of fireworks. In all three cases, many people have not survived.",
      [Lang.FR]: "Selon les époques, cette poudre a tour à tour servi de détonateur pour divers pièces d'artillerie, puis comme drogue bas de gamme pour citoyen en manque avant d'être utilisée comme ingrédient principal dans les feux d'artifice. Dans les 3 cas, beaucoup de gens n'y ont pas survécu.",
      [Lang.DE]: "Je nach Epoche wurde dieses Pulver nacheinander als Zünder für verschiedene Artilleriegeschütze, dann als billige Droge für bedürftige Bürger und schließlich als Hauptbestandteil von Feuerwerkskörpern verwendet. In allen drei Fällen haben viele Menschen nicht überlebt.",
      [Lang.ES]: "Dependiendo de la era, este polvo fue usado esencialmente como detonador para varias piezas de artillería, luego como una droga barata para los habitantes necesitados y, finalmente como el principal componente de los fuegos artificiales. En los tres casos, muchas personas no han sobrevivido."
    },
    info: {
      [Lang.EN]: "One is scattered in a random zone outside up to 15km from the town.",
      [Lang.FR]: "Un est éparpillé dans une zone aléatoire à l'extérieur jusqu'à 15 km de la ville.",
      [Lang.DE]: "Einer ist in einer zufälligen Zone außerhalb der Stadt bis zu 15 km verstreut.",
      [Lang.ES]: "Uno está esparcido en una zona aleatoria fuera de la ciudad hasta 15 km."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_firework_powder",
    decoration: 5,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.FIREWORK_TUBE]: {
    id: ItemId.FIREWORK_TUBE,
    numericalId: 328,
    name: {
      [Lang.EN]: "Firework Launch Tube",
      [Lang.FR]: "Tube de lancement Floush",
      [Lang.DE]: "Flush-Abschussrohr",
      [Lang.ES]: "Tubo de lanzamiento de fuegos artificiales"
    },
    description: {
      [Lang.EN]: "Several long plastic hoses without much interest.",
      [Lang.FR]: "Plusieurs longs tubes en plastique sans grand intérêt.",
      [Lang.DE]: "Mehrere lange Plastikschläuche ohne großes Interesse.",
      [Lang.ES]: "Varios largos tubos de plástico poco interesantes."
    },
    info: {
      [Lang.EN]: "One is scattered in a random zone outside up to 15km from the town.",
      [Lang.FR]: "Un est éparpillé dans une zone aléatoire à l'extérieur jusqu'à 15 km de la ville.",
      [Lang.DE]: "Einer ist in einer zufälligen Zone außerhalb der Stadt bis zu 15 km verstreut.",
      [Lang.ES]: "Uno está esparcido en una zona aleatoria fuera de la ciudad hasta 15 km."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_firework_tube",
    decoration: 2,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.FIREWORK_BOX]: {
    id: ItemId.FIREWORK_BOX,
    numericalId: 329,
    name: {
      [Lang.EN]: "Box of Fireworks",
      [Lang.FR]: "Caisse de feux d'artifice",
      [Lang.DE]: "Feuerwerkskiste",
      [Lang.ES]: "Caja de fuegos artificiales"
    },
    description: {
      [Lang.EN]: "This box contains a lot of highly toxic chemicals with startling names such as: sodium fuzz, carbopotassium bling bling or rainbow lithium cyanized.",
      [Lang.FR]: "Cette boite contient tout un attirail de produits chimiques hautement toxiques aux noms évocateurs, tels que : Sodium-Fuzz, Carbopotassium Bling Bling ou Rainbow Lithium Cyanurisé.",
      [Lang.DE]: "Diese Schachtel enthält eine ganze Reihe von hochgiftigen Chemikalien mit aufrüttelnden Namen wie: Natrium-Fuzz, Carbopotassium Bling Bling oder Rainbow Lithium Cyanurized.",
      [Lang.ES]: "Ésta caja contiene muchos químicos altamente tóxicos con nombres destacables como: Sodio Fuzz, Carbo-Potasio Bling Bling o Litio Arcoíris Cianurizado."
    },
    info: {
      [Lang.EN]: "Two of them are scattered in random zones outside up to 15km from the town.",
      [Lang.FR]: "Deux d'entre elles sont éparpillés dans des zones aléatoires à l'extérieur jusqu'à 15 km de la ville.",
      [Lang.DE]: "Zwei von ihnen sind in zufälligen Zonen außerhalb der Stadt bis zu 15 km verstreut.",
      [Lang.ES]: "Dos de ellos están esparcidos en zonas aleatorias fuera de la ciudad hasta 15 km."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration],
    icon: "item_firework_box",
    decoration: 3,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.PUMPKIN_OFF]: {
    id: ItemId.PUMPKIN_OFF,
    numericalId: 330,
    name: {
      [Lang.EN]: "Carved Soft Pumpkin",
      [Lang.FR]: "Citrouille molle sculptée",
      [Lang.DE]: "Ausgeschnitzter weicher Kürbis",
      [Lang.ES]: "Calabaza suave tallada"
    },
    description: {
      [Lang.EN]: "A kind of big, smelly orange vegetable like you've never seen before. A grimacing face is carved into his flesh: what is the barbaric tradition behind this ritual?",
      [Lang.FR]: "Une sorte de gros légume orange malodorant, comme vous n'en avez jamais vu auparavant. Un visage grimaçant a été taillé dans sa chair : quel genre de tradition barbare se cache derrière ce rituel ?",
      [Lang.DE]: "Eine Art großes, stinkendes Orangengemüse, wie Sie es noch nie zuvor gesehen haben. Ein grimassierendes Gesicht ist in sein Fleisch geritzt: Was für eine barbarische Tradition steckt hinter diesem Ritual?",
      [Lang.ES]: "Un tipo de vegetal naranja grande y maloliente como nunca has visto antes. Un rostro adusto está tallado en su carne: ¿cuál es la tradición bárbara detrás de este ritual?"
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration, ItemCategory.Event],
    icon: "item_pumpkin_off",
    decoration: 5,
    heavy: true,
    watchPoints: 0,
    event: GameEvent.Halloween,
    actions: [
      
    ],
  },
  [ItemId.PUMPKIN_ON]: {
    id: ItemId.PUMPKIN_ON,
    numericalId: 331,
    name: {
      [Lang.EN]: "Lit Pumpkin",
      [Lang.FR]: "Citrouille allumée",
      [Lang.DE]: "Leuchtender Kürbis",
      [Lang.ES]: "Calabaza encendida"
    },
    description: {
      [Lang.EN]: "Here's a crazy idea: this large, weird vegetable has been stripped of its flesh, shaped and there is a lit candle in it ...",
      [Lang.FR]: "En voila une idée saugrenue : ce gros légume bizarre a été vidé de sa chair, sculpté et il y a une bougie allumée à l'intérieur...",
      [Lang.DE]: "Hier ist eine verrückte Idee: Dieses große, seltsame Gemüse wurde von seinem Fleisch befreit, geformt und es gibt eine brennende Kerze darin...",
      [Lang.ES]: "He aquí una idea loca: este gran y extraño vegetal ha sido despojado de su carne, de su forma, y hay una vela encendida en él..."
    },
    categories: [ItemCategory.Defences, ItemCategory.Decoration, ItemCategory.Event],
    icon: "item_pumpkin_on",
    decoration: 15,
    heavy: false,
    watchPoints: 0,
    event: GameEvent.Halloween,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "pumpkin_off_#00"
          }
        ]
      }
    ],
  },
  [ItemId.XMAS_GIFT]: {
    id: ItemId.XMAS_GIFT,
    numericalId: 332,
    name: {
      [Lang.EN]: "Crow garland",
      [Lang.FR]: "Guirlande de Corbeaux",
      [Lang.DE]: "Krähengirlande",
      [Lang.ES]: "Guirnalda de cuervo"
    },
    description: {
      [Lang.EN]: "A garland of an apparently ancient tradition. It is recommended to hang it up at home as a decoration, it could be good for the town's morale.",
      [Lang.FR]: "Une guirlande de ce qui semblait être une ancienne tradition. Il est recommandé de l'accrocher chez soi en guise de décoration, ce pourrait faire du bien au moral de la ville.",
      [Lang.DE]: "Eine Girlande einer scheinbar uralten Tradition. Es wird empfohlen, es zu Hause als Dekoration aufzuhängen, es könnte gut für die Moral der Stadt sein.",
      [Lang.ES]: "Una guirnalda de una tradición aparentemente antigua. Se recomienda colgarla en casa como decoración, podría ser bueno para la moral del pueblo."
    },
    info: {
      [Lang.EN]: "After installing one or more garlands, you will regain 5{{AP}} instead of 6{{AP}} after the following attack.",
      [Lang.FR]: "Après avoir installé une ou plusieurs guirlandes, vous récupérerez 5{{AP}} au lieu de 6{{AP}} après l'attaque suivante.",
      [Lang.DE]: "Nach der Installation einer oder mehrerer Girlanden erhalten Sie nach dem folgenden Angriff 5{{AP}} anstelle von 6{{AP}}.",
      [Lang.ES]: "Después de instalar una o más guirnaldas, recuperarás 5{{AP}} en lugar de 6{{AP}} después del siguiente ataque."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration, ItemCategory.Event],
    icon: "item_xmas_gift",
    decoration: 2,
    heavy: false,
    watchPoints: 0,
    event: GameEvent.Christmas,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "xmas_gift_#01",
            odds: 100
          }
        ]
      }
    ],
  },
  [ItemId.STAFF2]: {
    id: ItemId.STAFF2,
    numericalId: 333,
    name: {
      [Lang.EN]: "Broken Staff",
      [Lang.FR]: "Bâton cassé",
      [Lang.DE]: "Kaputter Stock",
      [Lang.ES]: "Palo roto"
    },
    description: {
      [Lang.EN]: "Half a staff. Too short to be a really effective weapon, but not entirely useless...",
      [Lang.FR]: "Un bout de bâton. Trop court pour servir d'arme, mais pas inutile pour autant...",
      [Lang.DE]: "Ein zerbrochener Stock. Leider zu kurz, um eine vernünftige Waffe zu sein, aber er ist nicht völlig nutzlos...",
      [Lang.ES]: "Un pedazo de palo. Demasiado corto para servir como arma, pero útil sin duda..."
    },
    categories: [ItemCategory.Resources],
    icon: "item_staff2",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.VODKA]: {
    id: ItemId.VODKA,
    numericalId: 336,
    name: {
      [Lang.EN]: "Vodka Marinostov",
      [Lang.FR]: "Vodka Marinostov",
      [Lang.DE]: "Vodka Marinostov",
      [Lang.ES]: "Vodka Rosquetoff"
    },
    description: {
      [Lang.EN]: "A pretty violent way to overcome tiredness (and regain your action points)... 85% proof, with random, vaguely organic things floating in it. Cheers !",
      [Lang.FR]: "Un coup de fouet très violent pour oublier la fatigue (et récupérer tous ses points d'action !)… 85° d'alcool pur, avec diverses choses vaguement organiques qui flottent dedans. Santé camarade !",
      [Lang.DE]: "Nimm einen kräftigen Schluck aus der Pulle und deine Lebenskräfte werden wieder geweckt (Du erhältst alle deine AP zurück!). Da nimmt man die lose darin herum schwimmenden organischen Substanzen doch gerne in Kauf. Prost Kameraden!",
      [Lang.ES]: "Un buen trago que quema la garganta y te quita el cansancio, ¡recuperando además Puntos de Acción!... 85º de alcohol puro, con algunos bichos flotando en el fondo. ¡Salud camarada!"
    },
    categories: [ItemCategory.Food, ItemCategory.APSource, ItemCategory.Alcohol],
    icon: "item_vodka",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_alcool_#00"
          },
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "drunk"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.6
    },
  },
  [ItemId.POTION]: {
    id: ItemId.POTION,
    numericalId: 337,
    name: {
      [Lang.EN]: "Mystic Potion",
      [Lang.FR]: "Potion chamanique",
      [Lang.DE]: "Mystischer Trank",
      [Lang.ES]: "Poción chamánica"
    },
    description: {
      [Lang.EN]: "This special batch of water, \"holy water\" if you will, should allow you to interact with tortured souls without fear... Hopefully...",
      [Lang.FR]: "Cette ration d'eau préparée par votre chaman préféré devrait vous permettre d'être immunisé contre toute manipulation d'âme torturée... normalement.",
      [Lang.DE]: "Diese besondere Ration Wasser, oder genauer gesagt \"Weihwasser\", sollte es dir ermöglichen, unbeschadet mit gequälten Seelen in Kontakt zu treten... Hoffentlich...",
      [Lang.ES]: "Este frasco especial de agua, \"agua bendita\" si lo prefieres, debería permitirte interactuar con las torturadas almas sin miedo... Con suerte..."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource, ItemCategory.Water],
    icon: "item_potion",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Drink,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "tg_shaman_immune",
            odds: 98
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "thirst1"
          }
        ]
      },
      {
        type: ItemActionType.Drink,
        conditions: [
          ItemActionConditionEnum.Ghoul
        ],
        effects: [
          {
            type: ItemActionEffectType.AddStatus,
            value: "tg_meta_wound"
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "tg_shaman_immune",
            odds: 98
          }
        ]
      }
    ],
  },
  [ItemId.PHOTO_3]: {
    id: ItemId.PHOTO_3,
    numericalId: 338,
    name: {
      [Lang.EN]: "Pre-war camera",
      [Lang.FR]: "Appareil photo d'avant-guerre",
      [Lang.DE]: "Kamera aus Vorkriegs-Tagen",
      [Lang.ES]: "Cámara fotográfica de post-guerra"
    },
    description: {
      [Lang.EN]: "This authentic curio from the last century, or so it would appear, would have scorched many a retina in its day. Its poorly-calibrated flash could surely get you out of any desperate situations by blinding the zombies!",
      [Lang.FR]: "Cette authentique breloque du siècle dernier aurait à son actif, paraît-il, des centaines de rétines brûlées. Son flash mal réglé vous permettra de vous sortir de toutes les situations désespérées en aveuglant les zombies !",
      [Lang.DE]: "Diese nostalgische Knipse aus dem letzten Jahrhundert wirkt, als hätte sie schon Aberhunderten Leuten die Netzhaut verbrannt. Ihr schwacher Blitz könnte dich aus brenzligen Situationen retten, wenn du Zombies damit blendest!",
      [Lang.ES]: "Esta máquina endemoniada debió haber quemado varias retinas con su flash mal ajustado. ¡Hey! ¡Te puede servir para escapar de situaciones peligrosas cegando a los zombies!"
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_photo_3",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "photo_2_#00"
          },
          {
            type: ItemActionEffectType.GetEscapeTime,
            value: 120,
            odds: 99
          }
        ]
      }
    ],
  },
  [ItemId.PHOTO_2]: {
    id: ItemId.PHOTO_2,
    numericalId: 339,
    name: {
      [Lang.EN]: "Pre-war camera",
      [Lang.FR]: "Appareil photo d'avant-guerre",
      [Lang.DE]: "Kamera aus Vorkriegs-Tagen",
      [Lang.ES]: "Cámara fotográfica de post-guerra"
    },
    description: {
      [Lang.EN]: "This authentic curio from the last century, or so it would appear, would have scorched many a retina in its day. Its poorly-calibrated flash could surely get you out of any desperate situations by blinding the zombies!",
      [Lang.FR]: "Cette authentique breloque du siècle dernier aurait à son actif, paraît-il, des centaines de rétines brûlées. Son flash mal réglé vous permettra de vous sortir de toutes les situations désespérées en aveuglant les zombies !",
      [Lang.DE]: "Diese nostalgische Knipse aus dem letzten Jahrhundert wirkt, als hätte sie schon Aberhunderten Leuten die Netzhaut verbrannt. Ihr schwacher Blitz könnte dich aus brenzligen Situationen retten, wenn du Zombies damit blendest!",
      [Lang.ES]: "Esta máquina endemoniada debió haber quemado varias retinas con su flash mal ajustado. ¡Hey! ¡Te puede servir para escapar de situaciones peligrosas cegando a los zombies!"
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_photo_2",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "photo_1_#00"
          },
          {
            type: ItemActionEffectType.GetEscapeTime,
            value: 60,
            odds: 69
          }
        ]
      }
    ],
  },
  [ItemId.PHOTO_1]: {
    id: ItemId.PHOTO_1,
    numericalId: 340,
    name: {
      [Lang.EN]: "Pre-war camera",
      [Lang.FR]: "Appareil photo d'avant-guerre",
      [Lang.DE]: "Kamera aus Vorkriegs-Tagen",
      [Lang.ES]: "Cámara fotográfica de post-guerra"
    },
    description: {
      [Lang.EN]: "This authentic curio from the last century, or so it would appear, would have scorched many a retina in its day. Its poorly-calibrated flash could surely get you out of any desperate situations by blinding the zombies!",
      [Lang.FR]: "Cette authentique breloque du siècle dernier aurait à son actif, paraît-il, des centaines de rétines brûlées. Son flash mal réglé vous permettra de vous sortir de toutes les situations désespérées en aveuglant les zombies !",
      [Lang.DE]: "Diese nostalgische Knipse aus dem letzten Jahrhundert wirkt, als hätte sie schon Aberhunderten Leuten die Netzhaut verbrannt. Ihr schwacher Blitz könnte dich aus brenzligen Situationen retten, wenn du Zombies damit blendest!",
      [Lang.ES]: "Esta máquina endemoniada debió haber quemado varias retinas con su flash mal ajustado. ¡Hey! ¡Te puede servir para escapar de situaciones peligrosas cegando a los zombies!"
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_photo_1",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "photo_off_#00"
          },
          {
            type: ItemActionEffectType.GetEscapeTime,
            value: 30,
            odds: 35
          }
        ]
      }
    ],
  },
  [ItemId.PHOTO_OFF]: {
    id: ItemId.PHOTO_OFF,
    numericalId: 341,
    name: {
      [Lang.EN]: "Pre-war camera",
      [Lang.FR]: "Appareil photo d'avant-guerre",
      [Lang.DE]: "Kamera aus Vorkriegs-Tagen",
      [Lang.ES]: "Cámara fotográfica de post-guerra"
    },
    description: {
      [Lang.EN]: "This authentic curio from the last century, or so it would appear, would have scorched many a retina in its day. Its poorly-calibrated flash could surely get you out of any desperate situations by blinding the zombies!",
      [Lang.FR]: "Cette authentique breloque du siècle dernier aurait à son actif, paraît-il, des centaines de rétines brûlées. Son flash mal réglé vous permettra de vous sortir de toutes les situations désespérées en aveuglant les zombies !",
      [Lang.DE]: "Diese nostalgische Knipse aus dem letzten Jahrhundert wirkt, als hätte sie schon Aberhunderten Leuten die Netzhaut verbrannt. Ihr schwacher Blitz könnte dich aus brenzligen Situationen retten, wenn du Zombies damit blendest!",
      [Lang.ES]: "Esta máquina endemoniada debió haber quemado varias retinas con su flash mal ajustado. ¡Hey! ¡Te puede servir para escapar de situaciones peligrosas cegando a los zombies!"
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_photo_off",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.SOUL_YELLOW]: {
    id: ItemId.SOUL_YELLOW,
    numericalId: 342,
    name: {
      [Lang.EN]: "Powerful Soul",
      [Lang.FR]: "Âme forte",
      [Lang.DE]: "Starke Seele",
      [Lang.ES]: "Alma fuerte"
    },
    description: {
      [Lang.EN]: "Make the most of your friends' deaths! Citizens' souls can now be used in constructions, make sure to use these wisely to defend your town as fiercely as possible.",
      [Lang.FR]: "Profitez de la mort de vos amis ! L'âme de ce citoyen est devenu utilisable pour les chantiers, servez-vous en pour défendre votre ville du mieux possible.",
      [Lang.DE]: "Eine Starke Seele. Wurde von einem Schamanen aus einer Schwachen Seele hergestellt.",
      [Lang.ES]: "¡Aprovecha la muerte de tus amigos! El alma de este habitante se ha vuelto útil para las construcciones, úsala para aumentar las defensas de tu pueblo."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.PrivateTown],
    icon: "item_soul_yellow",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.FOOD_XMAS]: {
    id: ItemId.FOOD_XMAS,
    numericalId: 343,
    name: {
      [Lang.EN]: "Crow elf",
      [Lang.FR]: "Corbeau lutin",
      [Lang.DE]: "Krähenelfe",
      [Lang.ES]: "Cuervo navideño"
    },
    description: {
      [Lang.EN]: "This is some strange looking little beast... Seems to resemble a crow... But it's green, and is wearing a funny hat...",
      [Lang.FR]: "C'est une petite bête à l'apparence étrange... Ça ressemble à un corbeau... Mais en vert et il a un chapeau étrange...",
      [Lang.DE]: "Das ist eine seltsam aussehende kleine Bestie... Scheint einer Krähe zu ähneln... Aber es ist grün und trägt einen komischen Hut...",
      [Lang.ES]: "Una pequeña bestia de aspecto extraño. Se asemeja a un cuervo... pero es verde y lleva un sombrero..."
    },
    categories: [ItemCategory.Food, ItemCategory.Event],
    icon: "item_food_xmas",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    event: GameEvent.Christmas,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.41
    },
  },
  [ItemId.WOOD_XMAS]: {
    id: ItemId.WOOD_XMAS,
    numericalId: 344,
    name: {
      [Lang.EN]: "Chocolate log",
      [Lang.FR]: "Bûche de Noël",
      [Lang.DE]: "Schokoladenklumpen",
      [Lang.ES]: "Tronco de Navidad"
    },
    description: {
      [Lang.EN]: "Either a shriveled up old Christmas cake, or something a little less palatable, done on Christmas day none the less! Anyway enjoy this cake... Thing...",
      [Lang.FR]: "Soit un vieux gâteau de Noël ratatiné, soit quelque chose d'un peu moins appétissant, fait le jour de Noël tout de même ! Quoi qu'il en soit, profitez de ce... gâteau ?",
      [Lang.DE]: "Entweder ein verschrumpelter alter Weihnachtskuchen oder etwas noch weniger Schmackhaftes, was am Weihnachtstag gebacken wird! Auf jeden Fall solltest du dieses Kuchen... artige Ding genießen.",
      [Lang.ES]: "¡Oh, un viejo pastel navideño arrugado! O algo menos sabroso... ¡Pero aún así horneado el día de Navidad! De cualquier modo, disfruta de este... pastel..."
    },
    categories: [ItemCategory.Food, ItemCategory.Decoration, ItemCategory.APSource, ItemCategory.Event],
    icon: "item_wood_xmas",
    decoration: 8,
    heavy: true,
    watchPoints: 0,
    event: GameEvent.Christmas,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
  },
  [ItemId.LEPRECHAUN_SUIT]: {
    id: ItemId.LEPRECHAUN_SUIT,
    numericalId: 345,
    name: {
      [Lang.EN]: "Green Imp Suit",
      [Lang.FR]: "Costume de Lutin Vert",
      [Lang.DE]: "Grüner Kobold-Anzug",
      [Lang.ES]: "Traje de duendecillo"
    },
    description: {
      [Lang.EN]: "With this outfit on, you are so conspicuous no-one will even notice you, or think they imagined it! You wouldn't abuse it, would you?",
      [Lang.FR]: "Avec ce déguisement, vous êtes tellement voyant que personne ne vous remarquera, ou ils penseront qu'ils l'ont imaginé ! Vous n'en abuseriez pas, n'est-ce pas ?",
      [Lang.DE]: "In dieser Aufmachung bist du so auffällig, dass dich niemand bemerkt oder zumindest glaubt, sich das nur eingebildet zu haben! Das würdest du doch nicht missbrauchen, oder?",
      [Lang.ES]: "¡En este traje, eres tan llamativo que los que te miran piensan que te han imaginado! No abusarías de ello, ¿verdad?"
    },
    info: {
      [Lang.EN]: "Allows you to anonymously steal from other players' houses.",
      [Lang.FR]: "Vous permet de voler anonymement dans les maisons d'autres joueurs.",
      [Lang.DE]: "Erlaubt es Ihnen, anonym in die Häuser anderer Spieler zu stehlen.",
      [Lang.ES]: "Te permite robar anónimamente en las casas de otros jugadores."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Event],
    icon: "item_leprechaun_suit",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    event: GameEvent.StPatrick,
    actions: [
      {
        type: ItemActionType.Steal,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_lepre_#00"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 0.58
    },
  },
  [ItemId.BROKEN]: {
    id: ItemId.BROKEN,
    numericalId: 346,
    name: {
      [Lang.EN]: "Unrecognisable Remains",
      [Lang.FR]: "Débris méconnaissables",
      [Lang.DE]: "Unidentifizierbare Trümmerstücke",
      [Lang.ES]: "Restos irreconocibles"
    },
    description: {
      [Lang.EN]: "This debris is that of an unidentifiable object that appears to have been thrown at high speed against the ground.",
      [Lang.FR]: "Ces débris sont ceux d'un objet non-identifiable qui semble avoir été projeté à grande vitesse contre le sol.",
      [Lang.DE]: "Diese Trümmerstücke waren mal Teil eines Gegenstandes, den du nicht mehr identifizieren kannst. Die Verformung der Teile lassen vermuten, dass dieser Gegenstand mit hoher Geschwindigkeit am Boden aufgeprallt ist...",
      [Lang.ES]: "Estos escombros alguna vez fueron parte de un objeto que ya no eres capaz de identificar. La deformación de las piezas sugiere que el objeto golpeó el suelo a gran velocidad..."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_broken",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.BULLETS]: {
    id: ItemId.BULLETS,
    numericalId: 347,
    name: {
      [Lang.EN]: "Handful of Bullets",
      [Lang.FR]: "Poignée de cartouches",
      [Lang.DE]: "Munition",
      [Lang.ES]: "Puñado de balas"
    },
    description: {
      [Lang.EN]: "These small cylinders are extremely deadly. If only we knew how to use them...",
      [Lang.FR]: "Une poignée de munitions. Mais à quoi cela peut-il bien servir ?",
      [Lang.DE]: "Eine Handvoll Munition. Aber was hat das für einen Sinn?",
      [Lang.ES]: "Estos pequeños cilindros son extremadamente mortales. Si tan sólo supiéramos usarlos..."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_bullets",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.POSTAL_BOX_01]: {
    id: ItemId.POSTAL_BOX_01,
    numericalId: 348,
    name: {
      [Lang.EN]: "Gift Parcel",
      [Lang.FR]: "Colis de Noël",
      [Lang.DE]: "Geschenkpaket",
      [Lang.ES]: "Paquete de regalo"
    },
    description: {
      [Lang.EN]: "The address has become illegible, but there's definitely something inside... Merry Christmass !!!",
      [Lang.FR]: "Un colis dont l'adresse est aujourd'hui illisible. Et on dirait bien qu'il y a quelque chose à l'intérieur... C'est Noël.",
      [Lang.DE]: "Die Adresse ist nicht mehr lesbar. Es scheint etwas drin zu sein... Frohe Weihnachten!",
      [Lang.ES]: "La dirección se ha vuelto ilegible, pero definitivamente hay algo dentro... ¡Feliz Navidad!"
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_postal_box",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "money_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rp_book_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rp_book_#01",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rp_sheets_#00",
            odds: 25
          }
        ]
      }
    ],
  },
  [ItemId.POSTAL_BOX_XL]: {
    id: ItemId.POSTAL_BOX_XL,
    numericalId: 349,
    name: {
      [Lang.EN]: "Large Gift Parcel",
      [Lang.FR]: "Gros colis postal",
      [Lang.DE]: "Großes Geschenkpaket",
      [Lang.ES]: "Gran paquete de regalo"
    },
    description: {
      [Lang.EN]: "The address has become illegible, but there's definitely something inside... Merry Christmass !!!",
      [Lang.FR]: "Un colis dont l'adresse est aujourd'hui illisible. Et on dirait bien qu'il y a quelque chose à l'intérieur... C'est Noël.",
      [Lang.DE]: "Die Adresse ist nicht mehr lesbar. Es scheint etwas drin zu sein... Frohe Weihnachten!",
      [Lang.ES]: "La dirección se ha vuelto ilegible, pero definitivamente hay algo dentro... ¡Feliz Navidad!"
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_postal_box_xl",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "machine_gun_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rsc_pack_2_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "rhum_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "vibr_empty_#00",
            odds: 25
          }
        ]
      }
    ],
  },
  [ItemId.CHRISTMAS_CANDY]: {
    id: ItemId.CHRISTMAS_CANDY,
    numericalId: 350,
    name: {
      [Lang.EN]: "Christmas candy",
      [Lang.FR]: "Bonbon de Noël",
      [Lang.DE]: "Weihnachts-Süßigkeiten",
      [Lang.ES]: "Dulce de Navidad"
    },
    description: {
      [Lang.EN]: "It looks like a kind of little chocolate candy, which contains alcoholic liquor. Or any other product...",
      [Lang.FR]: "Ça ressemble à un genre de petit bonbon au chocolat, qui contient de la liqueur alcoolisée. Ou un quelconque autre produit...",
      [Lang.DE]: "Es sieht aus wie eine Art Schokoladenbonbon mit alkoholischem Likör darin. Oder eine andere Füllung...",
      [Lang.ES]: "Parece una especie de pequeño caramelo de chocolate, que contiene licor alcohólico. O cualquier otro producto..."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource, ItemCategory.Event],
    icon: "item_christmas_candy",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    event: GameEvent.Christmas,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_cobaye_#00"
          },
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_drug_#00",
            odds: 18
          },
          {
            type: ItemActionEffectType.AP,
            value: 8,
            odds: 98
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "addict",
            odds: 18
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "terror",
            odds: 50
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "infection",
            odds: 30
          },
          {
            type: ItemActionEffectType.Death,
            odds: 2
          }
        ]
      }
    ],
  },
  [ItemId.ALARM_OFF]: {
    id: ItemId.ALARM_OFF,
    numericalId: 351,
    name: {
      [Lang.EN]: "Screaming Alarm Clock (incomplete)",
      [Lang.FR]: "Réveil-Hurleur (éteint)",
      [Lang.DE]: "Kreischender Wecker (entladen)",
      [Lang.ES]: "Despertador chillón (apagado)"
    },
    description: {
      [Lang.EN]: "There's nothing quite like a good alarm to stimulate the old ear drums of a morning.",
      [Lang.FR]: "Rien de tel qu'un bon réveil pour vous stimuler les tympans le matin.",
      [Lang.DE]: "Es gibt morges doch nichts schöner, als einen lauten Wecker, der dein Trommelfell schön stimuliert.",
      [Lang.ES]: "Nada mejor que perforarte los tímpanos para empezar la mañana."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_alarm_off",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          { item: ItemId.PILE }
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "alarm_3_#00"
          }
        ]
      }
    ],
  },
  [ItemId.ALARM_ON]: {
    id: ItemId.ALARM_ON,
    numericalId: 352,
    name: {
      [Lang.EN]: "Screaming Alarm Clock (ready)",
      [Lang.FR]: "Réveil-Hurleur (allumé)",
      [Lang.DE]: "Kreischender Wecker (mit Strom)",
      [Lang.ES]: "Despertador chillón (encendido)"
    },
    description: {
      [Lang.EN]: "There's nothing quite like it to stimulate the old eardrums of a morning (It's ready to use). It lets you start the day on the right foot with a bonus of 1 extra AP given after the attack. It must be kept in you rucksack to work.",
      [Lang.FR]: "Rien de tel qu'un bon réveil pour vous stimuler les tympans le matin. Il vous permettra de démarrer votre journée en enfer du bon pied en recevant 1 PA supplémentaire après l'attaque.",
      [Lang.DE]: "Es gibt morges doch nichts schöner, als einen lauten Wecker, der dein Trommelfell schön stimuliert. Funktioniert einwandfrei.",
      [Lang.ES]: "Nada mejor que perforarte los tímpanos para empezar la mañana y recibir 1 Punto de Acción adicional después del ataque."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_alarm_on",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    available: false,
    actions: [
      
    ],
  },
  [ItemId.PUMPKIN_RAW]: {
    id: ItemId.PUMPKIN_RAW,
    numericalId: 353,
    name: {
      [Lang.EN]: "Soft Pumpkin",
      [Lang.FR]: "Citrouille molle",
      [Lang.DE]: "Weicher Kürbis",
      [Lang.ES]: "Calabaza suave"
    },
    description: {
      [Lang.EN]: "A kind of big, smelly, orange vegetable like you've never seen before. A sudden urge to carve it grabs you without you knowing why...",
      [Lang.FR]: "Une sorte de gros légume orange malodorant, comme vous n'en avez jamais vu auparavant. Une soudaine envie de le sculpter vous prend, sans que vous sachiez pourquoi...",
      [Lang.DE]: "Eine Art großes, stinkendes, orangefarbenes Gemüse, wie du es noch nie gesehen hast. Ein plötzlicher Drang, es auszugraben, ergreift dich, ohne dass du weißt warum...",
      [Lang.ES]: "Un tipo de verdura naranja grande y maloliente, como nunca has visto antes. Tienes un repentino impulso de tallarla, sin saber por qué..."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Event],
    icon: "item_pumpkin_raw",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    event: GameEvent.Halloween,
    actions: [
      
    ],
    drops: {
      [DropLocation.Zone]: 0.43
    },
  },
  [ItemId.HURLING_STICK]: {
    id: ItemId.HURLING_STICK,
    numericalId: 354,
    name: {
      [Lang.EN]: "Primitive Hurling Stick",
      [Lang.FR]: "Bâton de hurling primitif",
      [Lang.DE]: "Primitiver Hurlingstock",
      [Lang.ES]: "Palo de hurling clásico"
    },
    description: {
      [Lang.EN]: "A word of advice. If you're picking the wrong fight... at least pick the right weapon.",
      [Lang.FR]: "Un petit conseil. Si vous choisissez le mauvais combat... Au moins, choisissez la bonne arme.",
      [Lang.DE]: "Ein kleiner Ratschlag. Wenn du schon den falschen Kampf wählst... dann wähle wenigstens die richtige Waffe.",
      [Lang.ES]: "Solo un consejo. Si nada en este mundo es lógico no le busques razón a usar un arma como esta."
    },
    categories: [ItemCategory.Armoury, ItemCategory.GuardWeapon, ItemCategory.Event, ItemCategory.Breakable],
    icon: "item_hurling_stick",
    decoration: 0,
    heavy: false,
    watchPoints: 15,
    event: GameEvent.StPatrick,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_broken_#00",
            odds: 15
          },
          {
            type: ItemActionEffectType.Kill,
            value: "1",
            odds: 60
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 2.05
    },
    opens: [
      ItemId.CHEST_FOOD,
      ItemId.CHEST_TOOLS
    ],
  },
  [ItemId.GUINESS]: {
    id: ItemId.GUINESS,
    numericalId: 355,
    name: {
      [Lang.EN]: "Sticky Pint",
      [Lang.FR]: "Pinte collante",
      [Lang.DE]: "Klebriges Pint",
      [Lang.ES]: "Pinta pegajosa"
    },
    description: {
      [Lang.EN]: "Nothing beats a pint of the black stuff to inspire poetry, laughter and erm, fight the zombies... *Approved by Charlie Sheen",
      [Lang.FR]: "Rien de mieux qu’une pinte d'un breuvage noir pour inspirer la poésie, le rire et le combat contre les zombies... *Approuvé par Charlie Sheen",
      [Lang.DE]: "Nichts ist besser als ein Pint des schwarzen Zeugs, um Poesie, Lachen und ähm, den Kampf gegen die Zombies zu inspirieren... *Genehmigt von Charlie Sheen",
      [Lang.ES]: "No hay nada mejor como una pinta de cerveza oscura para inspirar poesía, risas y lucha de zombies... *Aprobado por Charlie Sheen"
    },
    categories: [ItemCategory.Food, ItemCategory.APSource, ItemCategory.Alcohol, ItemCategory.Event],
    icon: "item_guiness",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    event: GameEvent.StPatrick,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_alcool_#00"
          },
          {
            type: ItemActionEffectType.AP,
            value: 6
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "drunk"
          }
        ]
      }
    ],
    drops: {
      [DropLocation.Zone]: 1.64
    },
  },
  [ItemId.APRIL_DRUG]: {
    id: ItemId.APRIL_DRUG,
    numericalId: 356,
    name: {
      [Lang.EN]: "Black Neck Ooze",
      [Lang.FR]: "Suintement cervical noir",
      [Lang.DE]: "Schwarzer Nackenwirbelschleim",
      [Lang.ES]: "Moco de cuello negro"
    },
    description: {
      [Lang.EN]: "A poison which is EXTREMELY virulent when ingested, if the label is to be believed: ingestion of the cervical ooze causes death, spontaneous combustion, explosion of the lungs, and leakage of the brain from all orifices. But not necessarily in that order.",
      [Lang.FR]: "Un poison à ingérer d'une EXTRÊME virulence, si on en croit l'étiquette : l'ingestion du Suintement Cervical provoque la mort, une combustion spontanée, une explosion des poumons et un écoulement du cerveau par tous les orifices. Mais pas nécessairement dans cet ordre là.",
      [Lang.DE]: "Ein Gift welches bei der Einnahme EXTREM virulent wirkt, wenn man dem Etikett Glauben schenken darf: Die Ingestion des Zervixschleim führt zu Tod, spontaner Verbrennung, Explosion der Lunge und zum Austritt des Gehirns aus allen Körperöffnungen. Aber nicht unbedingt in dieser Reihenfolge.",
      [Lang.ES]: "Un veneno que es EXTREMADAMENTE virulento cuando se ingiere, si se debe creer en la etiqueta: la ingestión de la exudación cervical causa la muerte, combustión espontánea, explosión de los pulmones y fuga del cerebro por todos los orificios. Pero no necesariamente en ese orden."
    },
    info: {
      [Lang.EN]: "The infection is triggered after the next attack.",
      [Lang.FR]: "L'infection se déclenche après la prochaine attaque.",
      [Lang.DE]: "Die Infektion wird nach dem nächsten Angriff ausgelöst.",
      [Lang.ES]: "La infección se desencadena después del siguiente ataque."
    },
    categories: [ItemCategory.Pharmacy, ItemCategory.APSource, ItemCategory.Drug, ItemCategory.Event],
    icon: "item_april_drug",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    event: GameEvent.AprilFools,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_drug_#00"
          },
          {
            type: ItemActionEffectType.RemoveStatus,
            value: "clean"
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "drugged"
          },
          {
            type: ItemActionEffectType.AP,
            value: 8
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "tg_april_ooze"
          }
        ]
      }
    ],
  },
  [ItemId.INFECT_POISON]: {
    id: ItemId.INFECT_POISON,
    numericalId: 357,
    name: {
      [Lang.EN]: "Toxin",
      [Lang.FR]: "Toxine",
      [Lang.DE]: "Toxin",
      [Lang.ES]: "Toxina"
    },
    description: {
      [Lang.EN]: "You bring the vial close to your nose and take a whiff. Whew! The smell alone is enough to kill a horse.",
      [Lang.FR]: "La fiole contient du sang infecté et quelques autres produits. reste à trouver un truc comestible dans lequel la verser.",
      [Lang.DE]: "Du hältst das Fläschchen an deine Nase....WOOOW! Der Gestank alleine könnte ein Pferd töten.",
      [Lang.ES]: "Acercas la sustancia a tu nariz y la hueles un poco... Puajjj! Parece que podría matar incluso a un caballo."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_infect_poison",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.PUMPKIN_TASTY]: {
    id: ItemId.PUMPKIN_TASTY,
    numericalId: 358,
    name: {
      [Lang.EN]: "Impressive Pumpkin",
      [Lang.FR]: "Citrouille impressionnante",
      [Lang.DE]: "Toller Kürbis",
      [Lang.ES]: "Gran calabaza"
    },
    description: {
      [Lang.EN]: "This huge orange vegetable is the only colorful thing growing in this spooky, creepy place... it makes you want to bite into it!",
      [Lang.FR]: "Cet énorme légume orange est la seule chose colorée qui pousse dans cet endroit lugubre et angoissant... ça vous donne envie de croquer dedans à pleines dents !",
      [Lang.DE]: "Dieses riesige orangefarbene Gemüse ist das einzig Bunte, das an diesem gruseligen Ort wächst... da möchte man am liebsten hineinbeißen!",
      [Lang.ES]: "Este enorme vegetal anaranjado es lo único colorido que crece en este tétrico recinto... ¡Desearás darle un mordisco!"
    },
    info: {
      [Lang.EN]: "Increase a watchman's safety by 1%.",
      [Lang.FR]: "Augmente la sécurité d'un veilleur de 1%.",
      [Lang.DE]: "Erhöht die Sicherheit eines Wächters um 1%.",
      [Lang.ES]: "Aumenta la seguridad de un vigilante en un 1%."
    },
    categories: [ItemCategory.Food, ItemCategory.GuardWeapon, ItemCategory.APSource],
    icon: "item_pumpkin_tasty",
    decoration: 0,
    heavy: true,
    watchPoints: 15,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 7
          }
        ]
      }
    ],
  },
  [ItemId.MEDIC]: {
    id: ItemId.MEDIC,
    numericalId: 359,
    name: {
      [Lang.EN]: "First Aid Kit",
      [Lang.FR]: "Boîte à pharmacie",
      [Lang.DE]: "Erste Hilfe Tasche",
      [Lang.ES]: "Estuche de medicamentos"
    },
    description: {
      [Lang.EN]: "Where possible, don't waste bandages. Once they're cut, that's them done. However, the pills are always useful.",
      [Lang.FR]: "Si possible, ne vous encombrez pas de bandages. Une fois que c'est coupé, c'est coupé. Par contre les petites pillules ça sert toujours.",
      [Lang.DE]: "Was willst du mit diesen ganzen Verbänden? Was abgerissen wurde ist weg. Die kleine Pillen hingegen sind immer von Nutzen.",
      [Lang.ES]: "No lo llenes de tantos vendajes, disfrazarte de momia no servirá, en cambio, las pastillas siempre pueden ser útiles."
    },
    categories: [ItemCategory.Pharmacy],
    icon: "item_medic",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "water_cleaner_#00",
            odds: 22
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "drug_water_#00",
            odds: 22
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "ryebag_#00",
            odds: 17
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "xanax_#00",
            odds: 14
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "pharma_#00",
            odds: 11
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "disinfect_#00",
            odds: 11
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "cyanure_#00",
            odds: 1
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "drug_#00",
            odds: 0.6
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "bandage_#00",
            odds: 0.6
          }
        ]
      }
    ],
  },
  [ItemId.XMAS_GIFT_01]: {
    id: ItemId.XMAS_GIFT_01,
    numericalId: 360,
    name: {
      [Lang.EN]: "Hanging Crow garland",
      [Lang.FR]: "Guirlande de Corbeaux suspendue",
      [Lang.DE]: "Aufgehängte Krähengirlande",
      [Lang.ES]: "Guirnalda colgante de cuervo"
    },
    description: {
      [Lang.EN]: "A garland of an apparently ancient tradition. It is recommended to hang it up at home as a decoration, it could be good for the town's morale.",
      [Lang.FR]: "Une guirlande de ce qui semblait être une ancienne tradition. Il est recommandé de l'accrocher chez soi en guise de décoration, ce pourrait faire du bien au moral de la ville.",
      [Lang.DE]: "Eine Girlande einer scheinbar uralten Tradition. Es wird empfohlen, es zu Hause als Dekoration aufzuhängen, es könnte gut für die Moral der Stadt sein.",
      [Lang.ES]: "Una guirnalda de una tradición aparentemente antigua. Se recomienda colgarla en casa como decoración, podría ser bueno para la moral del pueblo."
    },
    categories: [ItemCategory.Furniture, ItemCategory.Decoration, ItemCategory.Event],
    icon: "item_xmas_gift",
    decoration: 5,
    heavy: false,
    watchPoints: 0,
    event: GameEvent.Christmas,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "xmas_gift_#00"
          }
        ]
      },
      {
        type: ItemActionType.Death,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.GetPicto,
            value: "r_decofeist_#00"
          }
        ]
      }
    ],
  },
  [ItemId.TAMED_PET_GONE]: {
    id: ItemId.TAMED_PET_GONE,
    numericalId: 361,
    name: {
      [Lang.EN]: "No labradoodle",
      [Lang.FR]: "Bichon maltais absent",
      [Lang.DE]: "Kein Malteser Hündchen",
      [Lang.ES]: "Ningún perro maltés"
    },
    description: {
      [Lang.EN]: "You left your doggie <em>at home</em>... I hope it's not offended.",
      [Lang.FR]: "Vous <em>avez laissé votre bichon chez vous</em>... J'espère qu'il ne s'en offusquera pas.",
      [Lang.DE]: "Du hast dein Hündchen <em>in deinem Haus zurückgelassen</em>... Hoffentlich nimmt es dir das nicht übel.",
      [Lang.ES]: "<em>Dejaste a tu cachorro en casa</em>... Espero que no se ofenda."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_tamed_pet_gone",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.ALARM_1]: {
    id: ItemId.ALARM_1,
    numericalId: 362,
    name: {
      [Lang.EN]: "Screaming Alarm Clock (1 charge)",
      [Lang.FR]: "Réveil-Hurleur (1 charge)",
      [Lang.DE]: "Kreischender Wecker (1 Schuss)",
      [Lang.ES]: "Despertador chillón (1 carga)"
    },
    description: {
      [Lang.EN]: "There’s nothing quite like the sound of an alarm going off to stimulate the old eardrums first thing in the morning. It works perfectly, rewarding you with an extra AP after the attack, so you can start your day in hell on the right foot!",
      [Lang.FR]: "Rien de tel qu'un bon réveil pour vous stimuler les tympans le matin. Fonctionne parfaitement et vous permettra de démarrer votre journée en enfer du bon pied en recevant 1 PA supplémentaire après l'attaque.",
      [Lang.DE]: "Es gibt morges doch nichts schöner, als einen lauten Wecker, der dein Trommelfell schön stimuliert. Funktioniert einwandfrei und lässt dich nach dem Angriff energetisch mit einem Bonus-AP in den Tag starten.",
      [Lang.ES]: "Nada mejor que perforarte los tímpanos para empezar la mañana. Funciona perfectamente y te permitirá empezar tu día en el infierno con el pie derecho recibiendo 1 PA adicional tras el ataque."
    },
    info: {
      [Lang.EN]: "Automatically used during the attack if equipped.",
      [Lang.FR]: "Utilisé automatiquement pendant l'attaque s'il est équipé.",
      [Lang.DE]: "Automatisch verwendet während des Angriffs, wenn es ausgestattet ist.",
      [Lang.ES]: "Utilizado automáticamente durante el ataque si está equipado."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_alarm_1",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 1
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "alarm_off_#00"
          }
        ]
      }
    ],
  },
  [ItemId.ALARM_2]: {
    id: ItemId.ALARM_2,
    numericalId: 363,
    name: {
      [Lang.EN]: "Screaming Alarm Clock (2 charges)",
      [Lang.FR]: "Réveil-Hurleur (2 charges)",
      [Lang.DE]: "Kreischender Wecker (2 Schuss)",
      [Lang.ES]: "Despertador chillón (2 cargas)"
    },
    description: {
      [Lang.EN]: "There’s nothing quite like the sound of an alarm going off to stimulate the old eardrums first thing in the morning. It works perfectly, rewarding you with an extra AP after the attack, so you can start your day in hell on the right foot!",
      [Lang.FR]: "Rien de tel qu'un bon réveil pour vous stimuler les tympans le matin. Fonctionne parfaitement et vous permettra de démarrer votre journée en enfer du bon pied en recevant 1 PA supplémentaire après l'attaque.",
      [Lang.DE]: "Es gibt morges doch nichts schöner, als einen lauten Wecker, der dein Trommelfell schön stimuliert. Funktioniert einwandfrei und lässt dich nach dem Angriff energetisch mit einem Bonus-AP in den Tag starten.",
      [Lang.ES]: "Nada mejor que perforarte los tímpanos para empezar la mañana. Funciona perfectamente y te permitirá empezar tu día en el infierno con el pie derecho recibiendo 1 PA adicional tras el ataque."
    },
    info: {
      [Lang.EN]: "Automatically used during the attack if equipped.",
      [Lang.FR]: "Utilisé automatiquement pendant l'attaque s'il est équipé.",
      [Lang.DE]: "Automatisch verwendet während des Angriffs, wenn es ausgestattet ist.",
      [Lang.ES]: "Utilizado automáticamente durante el ataque si está equipado."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_alarm_2",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 1
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "alarm_1_#00"
          }
        ]
      }
    ],
  },
  [ItemId.ALARM_3]: {
    id: ItemId.ALARM_3,
    numericalId: 364,
    name: {
      [Lang.EN]: "Screaming Alarm Clock (3 charges)",
      [Lang.FR]: "Réveil-Hurleur (3 charges)",
      [Lang.DE]: "Kreischender Wecker (3 Schuss)",
      [Lang.ES]: "Despertador chillón (3 cargas)"
    },
    description: {
      [Lang.EN]: "There’s nothing quite like the sound of an alarm going off to stimulate the old eardrums first thing in the morning. It works perfectly, rewarding you with an extra AP after the attack, so you can start your day in hell on the right foot!",
      [Lang.FR]: "Rien de tel qu'un bon réveil pour vous stimuler les tympans le matin. Fonctionne parfaitement et vous permettra de démarrer votre journée en enfer du bon pied en recevant 1 PA supplémentaire après l'attaque.",
      [Lang.DE]: "Es gibt morges doch nichts schöner, als einen lauten Wecker, der dein Trommelfell schön stimuliert. Funktioniert einwandfrei und lässt dich nach dem Angriff energetisch mit einem Bonus-AP in den Tag starten.",
      [Lang.ES]: "Nada mejor que perforarte los tímpanos para empezar la mañana. Funciona perfectamente y te permitirá empezar tu día en el infierno con el pie derecho recibiendo 1 PA adicional tras el ataque."
    },
    info: {
      [Lang.EN]: "Automatically used during the attack if equipped.",
      [Lang.FR]: "Utilisé automatiquement pendant l'attaque s'il est équipé.",
      [Lang.DE]: "Automatisch verwendet während des Angriffs, wenn es ausgestattet ist.",
      [Lang.ES]: "Utilizado automáticamente durante el ataque si está equipado."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_alarm_3",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 1
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "alarm_2_#00"
          }
        ]
      }
    ],
  },
  [ItemId.NOODLE_PRINTS]: {
    id: ItemId.NOODLE_PRINTS,
    numericalId: 365,
    name: {
      [Lang.EN]: "Magnetic Key Instant Blank",
      [Lang.FR]: "Empreinte instantanée de clé magnétique",
      [Lang.DE]: "Nudelabdruck vom Magnet-Schlüssel",
      [Lang.ES]: "Molde instantáneo para llave magnética"
    },
    description: {
      [Lang.EN]: "This high-tech key print was molded from a mixture of dehydrated noodles and a slime. You can really do ANYTHING with it!",
      [Lang.FR]: "Cette empreinte de clé high-tech a été moulée dans un mélange de nouilles déshydratées et une substance gluante. On peut vraiment TOUT faire avec !",
      [Lang.DE]: "Dieser Hightech-Schlüsselabdruck wurde aus einer Mischung von dehydrierten Nudeln und Schleim geformt. Damit kann man wirklich ALLES machen!",
      [Lang.ES]: "Esta impresión de llave de alta tecnología fue moldeada a partir de una mezcla de fideos deshidratados y una sustancia pegajosa. ¡Realmente puedes hacer CUALQUIER COSA con él!"
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_noodle_magnetic_print",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 4
          }
        ]
      }
    ],
  },
  [ItemId.NOODLE_PRINTS_01]: {
    id: ItemId.NOODLE_PRINTS_01,
    numericalId: 366,
    name: {
      [Lang.EN]: "Bump Key Instant Blank",
      [Lang.FR]: "Empreinte instantanée de clé à percussion",
      [Lang.DE]: "Nudelabdruck vom Schlagschlüssel",
      [Lang.ES]: "Molde instantáneo para llave de percusión"
    },
    description: {
      [Lang.EN]: "Eat or open, you have to choose! This key print will allow you to obtain a bump key, if you don't break it before returning to town...",
      [Lang.FR]: "Manger ou ouvrir, il faut choisir ! Cette empreinte de clé vous permettra d'obtenir une clé à percussion, si toutefois vous ne la cassez pas avant de rentrer en ville...",
      [Lang.DE]: "Essen oder öffnen, du musst dich entscheiden! Mit diesem Schlüsselabdruck können kannst du einen Schlagschlüssel herstellen, wenn du ihn nicht vor der Rückkehr in die Stadt zerbrichst...",
      [Lang.ES]: "Comer o abrir, ¡tienes que elegir! Esta impresión de llave te permitirá obtener una llave de impacto, si no la rompes antes de regresar al pueblo..."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_noodle_prints",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 4
          }
        ]
      }
    ],
  },
  [ItemId.NOODLE_PRINTS_02]: {
    id: ItemId.NOODLE_PRINTS_02,
    numericalId: 367,
    name: {
      [Lang.EN]: "Bottle Opener Instant Blank",
      [Lang.FR]: "Empreinte instantanée de décapsuleur",
      [Lang.DE]: "Nudelabdruck vom Flaschenöffner",
      [Lang.ES]: "Molde instantáneo para abrebotellas"
    },
    description: {
      [Lang.EN]: "We don't really know how this is possible, but it looks solid regardless. The noodle agglomerate PERFECTLY forms the shape of a bottle opener!",
      [Lang.FR]: "On ne sait pas trop comment c'est possible, mais ça a l'air solide malgré tout. L'agglomérat de nouille forme PARFAITEMENT la forme d'un décapsuleur !",
      [Lang.DE]: "Wir wissen nicht wirklich, wie das möglich ist, aber es sieht auf jeden Fall solide aus. Das Nudelagglomerat hat die perfekte Form eines Flaschenöffners!",
      [Lang.ES]: "No estamos seguros de cómo es posible esto, pero de todos modos parece sólido. ¡El aglomerado de fideos tiene PERFECTAMENTE la forma de un abridor de botellas!"
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_noodle_bottle_print",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 4
          }
        ]
      }
    ],
  },
  [ItemId.SHOE]: {
    id: ItemId.SHOE,
    numericalId: 368,
    name: {
      [Lang.EN]: "Worn-out sports shoes",
      [Lang.FR]: "Chaussures de sport usées",
      [Lang.DE]: "Ausgetretene Sportschuhe",
      [Lang.ES]: "Zapatillas deportivas desgastadas"
    },
    description: {
      [Lang.EN]: "They are no longer in brand new condition and smell a bit strong... Nevertheless, they can help you move more easily through the rough terrain of the World-Beyond.",
      [Lang.FR]: "Elles ne sont plus neuves et sentent un peu fort... Néanmoins, elles vous facilitent les déplacements sur les terrains accidentés de l'Outre-Monde.",
      [Lang.DE]: "Sie sind nicht mehr ganz neuwertig und riechen etwas streng... Trotzdem kannst du dich mit ihnen leichter durch das unwegsame Gelände in der Außenwelt bewegen.",
      [Lang.ES]: "No son nuevas y huelen un poco fuerte... Sin embargo, te facilitan viajar por el terreno accidentado del Ultramundo."
    },
    info: {
      [Lang.EN]: "Daily {{EP}} gain increased by 1. Items giving at least 4{{AP}} give 1 additional {{EP}}.",
      [Lang.FR]: "Gain quotidien de {{EP}} augmenté de 1. Les objets donnant au moins 4{{AP}} donnent 1 {{EP}} supplémentaire.",
      [Lang.DE]: "Täglicher {{EP}}-Gewinn um 1 erhöht. Gegenstände, die mindestens 4{{AP}} geben, geben zusätzlich 1 {{EP}}.",
      [Lang.ES]: "Aumento diario de {{EP}} en 1. Los objetos que dan al menos 4{{AP}} dan 1 {{EP}} adicional."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_shoe",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.EP,
            value: 1
          }
        ]
      }
    ],
  },
  [ItemId.BIKE_PART]: {
    id: ItemId.BIKE_PART,
    numericalId: 369,
    name: {
      [Lang.EN]: "Bicycle without handlebars",
      [Lang.FR]: "VTT sans guidon",
      [Lang.DE]: "Fahrrad ohne Lenker",
      [Lang.ES]: "Bicicleta de montaña sin manillar"
    },
    description: {
      [Lang.EN]: "A nice bike, but the most important part is missing: handlebars.",
      [Lang.FR]: "Un beau vélo, mais il manque la partie la plus importante : un guidon.",
      [Lang.DE]: "Ein schönes Fahrrad, aber der wichtigste Teil davon fehlt: ein Lenker.",
      [Lang.ES]: "Una bicicleta preciosa, pero le falta la parte más importante: el manillar."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_bike_part",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.BIKE]: {
    id: ItemId.BIKE,
    numericalId: 370,
    name: {
      [Lang.EN]: "Mountain bike",
      [Lang.FR]: "VTT",
      [Lang.DE]: "Mountainbike",
      [Lang.ES]: "Bicicleta de montaña"
    },
    description: {
      [Lang.EN]: "A tailor-made mountain bike with which you can go everywhere, wherever you want.",
      [Lang.FR]: "Un VTT sur mesure avec lequel vous pourrez aller partout, où vous voulez.",
      [Lang.DE]: "Ein Fahrrad für jeden Untergrund - damit kannst du überall dorthin kommen, wo du gerne sein möchtest.",
      [Lang.ES]: "Una bicicleta de montaña hecha a medida con la que podrás ir a todas partes, donde quieras."
    },
    info: {
      [Lang.EN]: "Daily {{EP}} gain increased by 2. Items giving at least 4{{AP}} give 2 additional {{EP}}.",
      [Lang.FR]: "Gain quotidien de {{EP}} augmenté de 2. Les objets donnant au moins 4{{AP}} donnent 2 {{EP}} supplémentaires.",
      [Lang.DE]: "Täglicher {{EP}}-Gewinn um 2 erhöht. Gegenstände, die mindestens 4{{AP}} geben, geben zusätzlich 2 {{EP}}.",
      [Lang.ES]: "Aumento diario de {{EP}} en 2. Los objetos que dan al menos 4{{AP}} dan 2 {{EP}} adicionales."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_bike",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.EP,
            value: 2
          }
        ]
      }
    ],
  },
  [ItemId.FLAG]: {
    id: ItemId.FLAG,
    numericalId: 371,
    name: {
      [Lang.EN]: "Flag",
      [Lang.FR]: "Drapeau",
      [Lang.DE]: "Flagge",
      [Lang.ES]: "Bandera"
    },
    description: {
      [Lang.EN]: "A ridiculously visible flag. Maybe if you wave it, something will happen...?",
      [Lang.FR]: "Un drapeau ridiculement visible. Peut-être que si vous l'agitez, quelque chose se passera...?",
      [Lang.DE]: "Eine lächerlich sichtbare Flagge. Vielleicht, wenn Sie es winken, wird etwas passieren ...?",
      [Lang.ES]: "Una bandera ridículamente visible. ¿Quizás si lo sacudes algo sucederá...?"
    },
    info: {
      [Lang.EN]: "All citizens who have used the flag receive a penalty until next morning: 2.5% of the zombies attacking the citizens will get directed to their house instead.",
      [Lang.FR]: "Tous les citoyens qui ont utilisé le drapeau reçoivent une pénalité jusqu'au matin suivant : 2,5 % des zombies attaquant les citoyens seront dirigés vers leur maison à la place.",
      [Lang.DE]: "Alle Bürger, die die Flagge benutzt haben, erhalten bis zum nächsten Morgen eine Strafe: 2,5 % der Zombies, die die Bürger angreifen, werden stattdessen zu ihrem Haus geleitet.",
      [Lang.ES]: "Todos los ciudadanos que hayan usado la bandera reciben una penalización hasta la mañana siguiente: el 2,5% de los zombis que atacan a los ciudadanos serán dirigidos a su casa en su lugar."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.Decoration],
    icon: "item_flag",
    decoration: 5,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.SOCCER]: {
    id: ItemId.SOCCER,
    numericalId: 372,
    name: {
      [Lang.EN]: "Soccer ball",
      [Lang.FR]: "Ballon de foot",
      [Lang.DE]: "Fußball",
      [Lang.ES]: "Balón de fútbol"
    },
    description: {
      [Lang.EN]: "For a little kick in between.",
      [Lang.FR]: "Pour un petit coup de pied entre les deux.",
      [Lang.DE]: "Für den kleinen Kick zwischendurch.",
      [Lang.ES]: "Para una pequeña patada entre los dos."
    },
    info: {
      [Lang.EN]: "Usable once a day. Not usable if exhausted.",
      [Lang.FR]: "Utilisable une fois par jour. Non utilisable si épuisé.",
      [Lang.DE]: "Einmal täglich verwendbar. Nicht verwendbar, wenn erschöpft.",
      [Lang.ES]: "Utilizable una vez al día. No utilizable si está agotado."
    },
    categories: [ItemCategory.Miscellaneous, ItemCategory.APSource],
    icon: "item_soccer",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 1,
            odds: 33
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "soccer_part_#00",
            odds: 33
          }
        ]
      }
    ],
  },
  [ItemId.SOCCER_PART]: {
    id: ItemId.SOCCER_PART,
    numericalId: 373,
    name: {
      [Lang.EN]: "Burst Soccer ball",
      [Lang.FR]: "Ballon crevé",
      [Lang.DE]: "Geplatzter Fußball",
      [Lang.ES]: "Balón de fútbol reventado"
    },
    description: {
      [Lang.EN]: "A ball to have fun with, if only it wasn't burst...",
      [Lang.FR]: "Un ballon avec lequel on pourrait s'amuser. Si seulement il n'était pas crevé...",
      [Lang.DE]: "Ein Ball, mit dem wir einiges an Spaß haben könnten. Wenn er nur nicht schon geplatzt wäre...",
      [Lang.ES]: "Una pelota con la que podríamos divertirnos mucho. Si no hubiera reventado ya..."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_soccer_part",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.QUANTUM]: {
    id: ItemId.QUANTUM,
    numericalId: 374,
    name: {
      [Lang.EN]: "Quantum Energy",
      [Lang.FR]: "Quantum Energy",
      [Lang.DE]: "Quantum Energy",
      [Lang.ES]: "Quantum Energy"
    },
    description: {
      [Lang.EN]: "\"Take the leap... enjoy a Quantum!\" The slogan on the bottle is tempting, but the glowing neon blue liquid, not so much...",
      [Lang.FR]: "« Faites le grand saut... profitez d'un Quantum ! » Le slogan sur la bouteille est tentant, mais la couleur bleu fluo l'est moins...",
      [Lang.DE]: "\"Mach den Sprung... genieße eine Quantum!\" Der Slogan auf der Flasche ist verlockend, die leuchtend blaue Farbe jedoch nicht...",
      [Lang.ES]: "\"¡Atrévete... disfruta de un Quantum!\" El eslogan de la botella es tentador, pero el color azul fosforescente te hace dudar..."
    },
    categories: [ItemCategory.Food],
    icon: "item_quantum",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.EP,
            value: 8
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "thirst1"
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.Thirsty
        ],
        effects: [
          {
            type: ItemActionEffectType.EP,
            value: 8
          },
          {
            type: ItemActionEffectType.AddStatus,
            value: "thirst2"
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.Dehydrated
        ],
        effects: [
          {
            type: ItemActionEffectType.EP,
            value: 8
          }
        ]
      }
    ],
  },
  [ItemId.PHOTO_4]: {
    id: ItemId.PHOTO_4,
    numericalId: 375,
    name: {
      [Lang.EN]: "Pre-war camera",
      [Lang.FR]: "Appareil photo d'avant-guerre",
      [Lang.DE]: "Kamera aus Vorkriegs-Tagen",
      [Lang.ES]: "Cámara fotográfica de post-guerra"
    },
    description: {
      [Lang.EN]: "This authentic curio from the last century, or so it would appear, would have scorched many a retina in its day. Its poorly-calibrated flash could surely get you out of any desperate situations by blinding the zombies! A little number on the side indicates that there is one photo remaining.",
      [Lang.FR]: "Cette authentique breloque du siècle dernier aurait à son actif, paraît-il, des centaines de rétines brûlées. Son flash mal réglé vous permettra de vous sortir de toutes les situations désespérées en aveuglant les zombies ! Un petit chiffre sur le côté indique qu’il reste une photo.",
      [Lang.DE]: "Diese nostalgische Knipse aus dem letzten Jahrhundert wirkt, als hätte sie schon Aberhunderten Leuten die Netzhaut verbrannt. Ihr schwacher Blitz könnte dich aus brenzligen Situationen retten, wenn du Zombies damit blendest! Eine kleine Zahl an der Seite zeigt an, dass noch ein Foto übrig ist.",
      [Lang.ES]: "Esta máquina endemoniada debió haber quemado varias retinas con su flash mal ajustado. ¡Hey! ¡Te puede servir para escapar de situaciones peligrosas cegando a los zombies!"
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_photo_4",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Use,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "photo_3_#00"
          },
          {
            type: ItemActionEffectType.GetEscapeTime,
            value: 120
          }
        ]
      },
      {
        type: ItemActionType.Use,
        conditions: [
          ItemActionConditionEnum.OnARuin
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "photo_3_#00"
          },
          {
            type: ItemActionEffectType.GetEscapeTime,
            value: 120
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "bplan_c_#00",
            odds: 100
          }
        ]
      }
    ],
  },
  [ItemId.CELLO_BOX]: {
    id: ItemId.CELLO_BOX,
    numericalId: 376,
    name: {
      [Lang.EN]: "Cello case",
      [Lang.FR]: "Étui pour violoncelle",
      [Lang.DE]: "Cellokasten",
      [Lang.ES]: "Estuche para chelo"
    },
    description: {
      [Lang.EN]: "You don't even know where you got this from... The paint is starting to peel. Was it really useful?",
      [Lang.FR]: "Vous ne savez même plus d'où vous traînez ça... La peinture commence à s'écailler. Était-ce vraiment utile ?",
      [Lang.DE]: "Du weißt nicht einmal mehr, wo du das her hast... Die Farbe fängt schon an, sich abzulösen. Ist das Teil wirklich nützlich?",
      [Lang.ES]: "Ni siquiera sabes de dónde lo has sacado... El color ya comienza a desteñirse. ¿Es esta cosa realmente útil?"
    },
    categories: [ItemCategory.Containers_and_boxes],
    icon: "item_cello_box",
    decoration: 0,
    heavy: true,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Open,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.CreateItem,
            value: "money_#00",
            odds: 40
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "lamp_#00",
            odds: 30
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "cutcut_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "big_pgun_empty_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "maglite_off_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "pet_cat_#00",
            odds: 25
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "gun_#00",
            odds: 20
          },
          {
            type: ItemActionEffectType.CreateItem,
            value: "machine_gun_#00",
            odds: 10
          }
        ]
      }
    ],
  },
  [ItemId.APPLE_BLUE]: {
    id: ItemId.APPLE_BLUE,
    numericalId: 377,
    name: {
      [Lang.EN]: "Apple",
      [Lang.FR]: "Pomme",
      [Lang.DE]: "Apfel",
      [Lang.ES]: "Manzana"
    },
    description: {
      [Lang.EN]: "When one of these landed on Sir Newton's head, surely the first thing to cross his mind wasn't the first Universal Law of Gravity... having said that, there should be a few vitamins in there for the munching.",
      [Lang.FR]: "Si Newton avait reçu une pomme comme celle-ci sur la tête, il aurait surement pensé à autre chose qu'à la loi de la Gravitation Universelle... Cela étant dit, il doit bien y avoir quelques vitamines là-dedans.",
      [Lang.DE]: "Als einer davon auf Sir Newton's Kopf fiel dachte er mit Sicherheit nicht zuerst an das erste universelle Gesetz der Schwerkraft... aber es sollten immerhin ein paar Vitamine enthalten sein.",
      [Lang.ES]: "Si haces que te caiga en la cabeza, tal vez te vengan ideas como a Newton... En todo caso, debe tener algunas vitaminas."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_apple_blue",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 7
          }
        ]
      }
    ],
  },
  [ItemId.SAW_TOOL_TEMP]: {
    id: ItemId.SAW_TOOL_TEMP,
    numericalId: 378,
    name: {
      [Lang.EN]: "Improvised Hacksaw",
      [Lang.FR]: "Scie improvisée",
      [Lang.DE]: "Improvisierte Säge",
      [Lang.ES]: "Sierra improvisada"
    },
    description: {
      [Lang.EN]: "The \"Do It Yourself\" craze is good, but when it comes to the tools themselves...? You don't know how long that homemade saw will last (the saw reduces the number of action points needed for any task at the workshop by 1 point. The saw must be carried in your backpack).",
      [Lang.FR]: "La mode du « Do It Yourself » a du bon, mais pour les outils en eux-mêmes..? Vous ne savez pas combien de temps va tenir cette scie artisanale (la scie réduit de 1 PA le coût des transformations à l'atelier, vous devez la placer dans votre Sac à Dos).",
      [Lang.DE]: "Der „Do It Yourself“-Wahn ist sicherlich gut, aber wenn es um die Werkzeuge selbst geht...? Niemand kann sagen, wie lange diese selbstgebaute Säge hält (Die Säge verringert die Verarbeitungskosten in der Werkstatt um 1 AP. Dafür musst du sie in deinem Rucksack haben).",
      [Lang.ES]: "La tendencia “Hazlo tú mismo” tiene sus puntos buenos, pero ¿qué pasa con las herramientas en sí? No sabes cuanto tiempo durará esta sierra casera (la sierra reduce el coste de transformaciones en el taller en 1 PA, debes colocarla en tu Mochila)."
    },
    info: {
      [Lang.EN]: "Reduces the number of {{AP}} needed in the Workshop by 1 when in the rucksack (non stackable).",
      [Lang.FR]: "Réduit le nombre de {{AP}} nécessaires dans l'atelier de 1 lorsqu'elle est dans le sac à dos (non cumulable).",
      [Lang.DE]: "Reduziert die Anzahl der {{AP}}, die im Workshop benötigt werden, um 1, wenn sie im Rucksack ist (nicht stapelbar).",
      [Lang.ES]: "Reduce el número de {{AP}} necesarios en el taller en 1 cuando está en la mochila (no apilable)."
    },
    categories: [ItemCategory.Miscellaneous],
    icon: "item_saw_tool_temp",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.MOLDY_FOOD_SUBPART]: {
    id: ItemId.MOLDY_FOOD_SUBPART,
    numericalId: 379,
    name: {
      [Lang.EN]: "Fistful of insects",
      [Lang.FR]: "Poignée d'insectes",
      [Lang.DE]: "Handvoll Insekten",
      [Lang.ES]: "Puñado de insectos"
    },
    description: {
      [Lang.EN]: "A little slimy, but appetizing.",
      [Lang.FR]: "Un peu gluant, mais appétissant.",
      [Lang.DE]: "Ziemlich schleimig, aber genießbar.",
      [Lang.ES]: "Un poco viscoso, pero apetitoso."
    },
    info: {
      [Lang.EN]: "Can be found by failing to lure an animal at the Tamer Experiment Center.",
      [Lang.FR]: "Peut être trouvé en échouant à attirer un animal au Centre d'essai des Apprivoiseurs.",
      [Lang.DE]: "Kann gefunden werden, indem man ein Tier im Experimentelle Klinik der Dompteure nicht anlockt.",
      [Lang.ES]: "Puede ser encontrado al fallar en atraer un animal en el Centro de pruebas de Domadores."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_moldy_food_subpart",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 4
          }
        ]
      }
    ],
  },
  [ItemId.MOLDY_FOOD_SPICY]: {
    id: ItemId.MOLDY_FOOD_SPICY,
    numericalId: 380,
    name: {
      [Lang.EN]: "Seasonned fistful of insects",
      [Lang.FR]: "Poignée d'insectes assaisonnée",
      [Lang.DE]: "Handvoll gewürzte Insekten",
      [Lang.ES]: "Puñado de insectos sazonados"
    },
    description: {
      [Lang.EN]: "A little slimy, but appetizing. The added hint of spice subtly enhances the overall effect.",
      [Lang.FR]: "Un peu gluant, mais appétissant. La pointe d'épice qui y a été ajoutée relève subtilement l'ensemble.",
      [Lang.DE]: "Ein wenig schleimig, aber appetitlich. Der Hauch von Gewürz verstärkt die Gesamtwirkung auf subtile Weise.",
      [Lang.ES]: "Un poco viscoso, pero apetitoso. El toque de especias añadido sutilmente realza el conjunto."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_moldy_food_spicy",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 6
          }
        ]
      }
    ],
  },
  [ItemId.MOLDY_FOOD_PART]: {
    id: ItemId.MOLDY_FOOD_PART,
    numericalId: 381,
    name: {
      [Lang.EN]: "Larvae Jam",
      [Lang.FR]: "Marmelarve",
      [Lang.DE]: "Larven-Marmelade",
      [Lang.ES]: "Mermelada de larvas"
    },
    description: {
      [Lang.EN]: "A delicious insect porridge, utterly nourishing. It's crunchy and truly succulent!",
      [Lang.FR]: "Une délicieuse bouillie d'insectes, tout ce qu'il y a de plus nourrissante. Ça croque sous la dent, c'est vraiment succulent !",
      [Lang.DE]: "Ein köstlicher Insektenbrei, der sehr nahrhaft ist. Er ist knusprig und gleichzeitig wirklich saftig!",
      [Lang.ES]: "Una deliciosa papilla de insectos, muy nutritiva. ¡Es crujiente bajo los dientes y es realmente suculento!"
    },
    categories: [ItemCategory.Food],
    icon: "item_moldy_food_part",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      
    ],
  },
  [ItemId.MOLDY_FOOD]: {
    id: ItemId.MOLDY_FOOD,
    numericalId: 382,
    name: {
      [Lang.EN]: "Crawling crumble",
      [Lang.FR]: "Crumble rampant",
      [Lang.DE]: "Krabbelnde Krümel",
      [Lang.ES]: "Crumble rastrero"
    },
    description: {
      [Lang.EN]: "A delicious protein dessert! Apparently, it's better when it's moving...",
      [Lang.FR]: "Un succulent dessert protéiné ! Il parait que c'est meilleur quand ça bouge...",
      [Lang.DE]: "Ein köstliches Protein-Dessert! Anscheinend ist es besser, wenn es sich noch bewegt...",
      [Lang.ES]: "¡Un delicioso postre proteico! Al parecer es mejor cuando se mueve..."
    },
    categories: [ItemCategory.Food, ItemCategory.APSource],
    icon: "item_moldy_food",
    decoration: 0,
    heavy: false,
    watchPoints: 0,
    actions: [
      {
        type: ItemActionType.Eat,
        conditions: [
          
        ],
        effects: [
          {
            type: ItemActionEffectType.AP,
            value: 7
          }
        ]
      }
    ],
  }
};