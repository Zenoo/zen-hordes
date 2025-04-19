// These overwrites are needed since
// the source does not contain accurate data

import {
  Item,
  ItemActionConditionEnum,
  ItemActionEffectType,
  ItemActionType,
} from "./generateData";

const survivalistBookChances = [
  { period: "1-4", odds: 100 },
  { period: "5-9", odds: 85 },
  { period: "10-12", odds: 80 },
  { period: "13-14", odds: 70 },
  { period: "15-19", odds: 60 },
  { period: "20-99", odds: 50 },
];

const blueSoulTurnChances = [
  { nights: 1, odds: 10 },
  { nights: 2, odds: 25 },
  { nights: 3, odds: 50 },
  { nights: 4, odds: 75 },
  { nights: 5, odds: 100 },
];

/**
 * Overwrite item data with custom values
 * Each case is a specific item id
 */
export const overwriteItemData = (items: Record<string, Item>) => {
  for (const item of Object.values(items)) {
    switch (item.id) {
      case "surv_book_#00": {
        // Book success chances
        item.actions = [
          {
            type: ItemActionType.Drink,
            conditions: [],
            effects: survivalistBookChances.map((data) => ({
              type: ItemActionEffectType.AddStatus,
              value: "hasdrunk",
              count: data.period,
              odds: data.odds,
            })),
          },
          {
            type: ItemActionType.Eat,
            conditions: [],
            effects: survivalistBookChances.map((data) => ({
              type: ItemActionEffectType.AddStatus,
              value: "haseaten",
              count: data.period,
              odds: data.odds,
            })),
          },
        ];

        // info
        item.info = {
          en: "The book success chances go from 100% on day 1 to 50% on day 20.",
          fr: "Les chances de succès du livre vont de 100% au jour 1 à 50% au jour 20.",
          de: "Die Erfolgschancen des Buches liegen am Tag 1 bei 100 % und am Tag 20 bei 50 %.",
          es: "Las posibilidades de éxito del libro van del 100% en el día 1 al 50% en el día 20.",
        };
        break;
      }
      case "quantum_#00": {
        // Use
        item.actions.push(
          ...[
            {
              type: ItemActionType.Use,
              conditions: [ItemActionConditionEnum.Thirsty],
              effects: [
                {
                  type: ItemActionEffectType.EP,
                  value: 8,
                },
                {
                  type: ItemActionEffectType.AddStatus,
                  value: "thirst2",
                },
              ],
            },
            {
              type: ItemActionType.Use,
              conditions: [ItemActionConditionEnum.Dehydrated],
              effects: [
                {
                  type: ItemActionEffectType.EP,
                  value: 8,
                },
              ],
            },
          ]
        );
        break;
      }
      case "soccer_#00": {
        // info
        item.info = {
          en: "Usable once a day. Not usable if exhausted.",
          fr: "Utilisable une fois par jour. Non utilisable si épuisé.",
          de: "Einmal täglich verwendbar. Nicht verwendbar, wenn erschöpft.",
          es: "Utilizable una vez al día. No utilizable si está agotado.",
        };
        break;
      }
      case "flag_#00": {
        // info
        item.info = {
          en: "All citizens who have used the flag receive a penalty until next morning: 2.5% of the zombies attacking the citizens will get directed to their house instead.",
          fr: "Tous les citoyens qui ont utilisé le drapeau reçoivent une pénalité jusqu'au matin suivant : 2,5 % des zombies attaquant les citoyens seront dirigés vers leur maison à la place.",
          de: "Alle Bürger, die die Flagge benutzt haben, erhalten bis zum nächsten Morgen eine Strafe: 2,5 % der Zombies, die die Bürger angreifen, werden stattdessen zu ihrem Haus geleitet.",
          es: "Todos los ciudadanos que hayan usado la bandera reciben una penalización hasta la mañana siguiente: el 2,5% de los zombis que atacan a los ciudadanos serán dirigidos a su casa en su lugar.",
        };
        break;
      }
      case "bike_#00": {
        // info
        item.info = {
          en: "Daily {{EP}} gain increased by 2. Items giving at least 4{{AP}} give 2 additional {{EP}}.",
          fr: "Gain quotidien de {{EP}} augmenté de 2. Les objets donnant au moins 4{{AP}} donnent 2 {{EP}} supplémentaires.",
          de: "Täglicher {{EP}}-Gewinn um 2 erhöht. Gegenstände, die mindestens 4{{AP}} geben, geben zusätzlich 2 {{EP}}.",
          es: "Aumento diario de {{EP}} en 2. Los objetos que dan al menos 4{{AP}} dan 2 {{EP}} adicionales.",
        };
        break;
      }
      case "shoe_#00": {
        // info
        item.info = {
          en: "Daily {{EP}} gain increased by 1. Items giving at least 4{{AP}} give 1 additional {{EP}}.",
          fr: "Gain quotidien de {{EP}} augmenté de 1. Les objets donnant au moins 4{{AP}} donnent 1 {{EP}} supplémentaire.",
          de: "Täglicher {{EP}}-Gewinn um 1 erhöht. Gegenstände, die mindestens 4{{AP}} geben, geben zusätzlich 1 {{EP}}.",
          es: "Aumento diario de {{EP}} en 1. Los objetos que dan al menos 4{{AP}} dan 1 {{EP}} adicional.",
        };
        break;
      }
      case "alarm_1_#00": {
        // Use
        item.actions.push({
          type: ItemActionType.Use,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.AP,
              value: 1,
            },
            {
              type: ItemActionEffectType.CreateItem,
              value: "alarm_off_#00",
            },
          ],
        });

        // info
        item.info = {
          en: "Automatically used during the attack if equipped.",
          fr: "Utilisé automatiquement pendant l'attaque s'il est équipé.",
          de: "Automatisch verwendet während des Angriffs, wenn es ausgestattet ist.",
          es: "Utilizado automáticamente durante el ataque si está equipado.",
        };
        break;
      }
      case "alarm_2_#00": {
        // Use
        item.actions.push({
          type: ItemActionType.Use,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.AP,
              value: 1,
            },
            {
              type: ItemActionEffectType.CreateItem,
              value: "alarm_1_#00",
            },
          ],
        });

        // info
        item.info = {
          en: "Automatically used during the attack if equipped.",
          fr: "Utilisé automatiquement pendant l'attaque s'il est équipé.",
          de: "Automatisch verwendet während des Angriffs, wenn es ausgestattet ist.",
          es: "Utilizado automáticamente durante el ataque si está equipado.",
        };
        break;
      }
      case "alarm_3_#00": {
        // Use
        item.actions.push({
          type: ItemActionType.Use,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.AP,
              value: 1,
            },
            {
              type: ItemActionEffectType.CreateItem,
              value: "alarm_2_#00",
            },
          ],
        });

        // info
        item.info = {
          en: "Automatically used during the attack if equipped.",
          fr: "Utilisé automatiquement pendant l'attaque s'il est équipé.",
          de: "Automatisch verwendet während des Angriffs, wenn es ausgestattet ist.",
          es: "Utilizado automáticamente durante el ataque si está equipado.",
        };
        break;
      }
      case "xmas_gift_#01": {
        // Death
        item.actions.push({
          type: ItemActionType.Death,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.GetPicto,
              value: "r_decofeist_#00",
            },
          ],
        });
        break;
      }
      case "pumpkin_tasty_#00": {
        // info
        item.info = {
          en: "Increase a watchman's safety by 1%.",
          fr: "Augmente la sécurité d'un veilleur de 1%.",
          de: "Erhöht die Sicherheit eines Wächters um 1%.",
          es: "Aumenta la seguridad de un vigilante en un 1%.",
        };
        break;
      }
      case "april_drug_#00": {
        // info
        item.info = {
          en: "The infection is triggered after the next attack.",
          fr: "L'infection se déclenche après la prochaine attaque.",
          de: "Die Infektion wird nach dem nächsten Angriff ausgelöst.",
          es: "La infección se desencadena después del siguiente ataque.",
        };
        break;
      }
      case "alarm_on_#00": {
        // Unavailable
        item.available = false;
        break;
      }
      case "leprechaun_suit_#00": {
        // Use
        item.actions.push({
          type: ItemActionType.Steal,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.GetPicto,
              value: "r_lepre_#00",
            },
          ],
        });

        // info
        item.info = {
          en: "Allows you to anonymously steal from other players' houses.",
          fr: "Vous permet de voler anonymement dans les maisons d'autres joueurs.",
          de: "Erlaubt es Ihnen, anonym in die Häuser anderer Spieler zu stehlen.",
          es: "Te permite robar anónimamente en las casas de otros jugadores.",
        };
        break;
      }
      case "soul_yellow_#00": {
        // Private town only
        item.categories.push("PrivateTown");
        break;
      }
      case "xmas_gift_#00": {
        // info
        item.info = {
          en: "After installing one or more garlands, you will regain 5{{AP}} instead of 6{{AP}} after the following attack.",
          fr: "Après avoir installé une ou plusieurs guirlandes, vous récupérerez 5{{AP}} au lieu de 6{{AP}} après l'attaque suivante.",
          de: "Nach der Installation einer oder mehrerer Girlanden erhalten Sie nach dem folgenden Angriff 5{{AP}} anstelle von 6{{AP}}.",
          es: "Después de instalar una o más guirnaldas, recuperarás 5{{AP}} en lugar de 6{{AP}} después del siguiente ataque.",
        };
        break;
      }
      case "firework_box_#00": {
        // info
        item.info = {
          en: "Two of them are scattered in random zones outside up to 15km from the town.",
          fr: "Deux d'entre elles sont éparpillés dans des zones aléatoires à l'extérieur jusqu'à 15 km de la ville.",
          de: "Zwei von ihnen sind in zufälligen Zonen außerhalb der Stadt bis zu 15 km verstreut.",
          es: "Dos de ellos están esparcidos en zonas aleatorias fuera de la ciudad hasta 15 km.",
        };
        break;
      }
      case "firework_powder_#00":
      case "firework_tube_#00": {
        // info
        item.info = {
          en: "One is scattered in a random zone outside up to 15km from the town.",
          fr: "Un est éparpillé dans une zone aléatoire à l'extérieur jusqu'à 15 km de la ville.",
          de: "Einer ist in einer zufälligen Zone außerhalb der Stadt bis zu 15 km verstreut.",
          es: "Uno está esparcido en una zona aleatoria fuera de la ciudad hasta 15 km.",
        };
        break;
      }
      case "basic_suit_dirt_#00": {
        // Use
        item.actions
          .find((action) => action.type === ItemActionType.Use)
          ?.effects.push({
            type: ItemActionEffectType.AddStatus,
            value: "terror",
            odds: -3,
          });
        break;
      }
      case "chkspk_#00": {
        // info
        item.info = {
          en: "If in one of the watchmen's rucksack it adds +15 defence points for every citizen on watch.",
          fr: "S'il est dans le sac à dos d'un des veilleurs, il ajoute +15 points de défense pour chaque citoyen en veille.",
          de: "Wenn es im Rucksack eines der Wächter ist, fügt es +15 Verteidigungspunkte für jeden Bürger im Wachmodus hinzu.",
          es: "Si está en la mochila de uno de los vigilantes, añade +15 puntos de defensa por cada ciudadano en vigilancia.",
        };
        break;
      }
      case "dfhifi_#01": {
        // info
        item.info = {
          en: "Prevents other players from stealing from your house.",
          fr: "Empêche les autres joueurs de voler dans votre maison.",
          de: "Verhindert, dass andere Spieler in Ihr Haus stehlen.",
          es: "Evita que otros jugadores roben en tu casa.",
        };
        break;
      }
      case "staff_#01": {
        // Unavailable
        item.available = false;
        break;
      }
      case "hmbrew_#00": {
        // info
        item.info = {
          en: "It can be used when hungover or already drunk, unlike other alcohols.",
          fr: "Il peut être utilisé en cas de gueule de bois ou déjà ivre, contrairement aux autres alcools.",
          es: "Se puede usar cuando tienes resaca o ya estás borracho, a diferencia de otros alcoholes.",
          de: "Im Gegensatz zu anderen Alkoholen kann es bei einem Kater oder bereits betrunkenem Zustand konsumiert werden.",
        };
        break;
      }
      case "lilboo_#00": {
        // info
        item.info = {
          en: "Prevents you from becoming {{terror}} terrorised while using items.",
          fr: "Vous empêche d'être {{terror}} terrorisé en utilisant des objets.",
          de: "Verhindert, dass Sie {{terror}} terrorisiert werden, während Sie Gegenstände verwenden.",
          es: "Evita que te {{terror}} aterroricen mientras usas objetos.",
        };
        break;
      }
      case "trapma_#00": {
        // info
        item.info = {
          en: "At home, injures or kills an already injured thief.",
          fr: "À la maison, blesse ou tue un voleur déjà blessé.",
          de: "Zu Hause verletzt oder tötet einen bereits verletzten Dieb.",
          es: "En casa, hiere o mata a un ladrón ya herido.",
        };
        break;
      }
      case "scope_#00": {
        // info
        item.info = {
          en: "Halves the number of citizens required to estimate the attack. This effect does not stack.",
          fr: "Divise par deux le nombre de citoyens nécessaires pour estimer l'attaque. Cet effet ne s'accumule pas.",
          de: "Halbiert die Anzahl der Bürger, die erforderlich sind, um den Angriff zu schätzen. Dieser Effekt ist nicht stapelbar.",
          es: "Reduce a la mitad el número de ciudadanos necesarios para estimar el ataque. Este efecto no se acumula.",
        };
        break;
      }
      case "guitar_#00": {
        // info
        item.info = {
          en: "Using it gives every citizen in town 1{{AP}} (2{{AP}} if drunk or drugged).",
          fr: "L'utiliser donne à chaque citoyen de la ville 1{{AP}} (2{{AP}} si ivre ou drogué).",
          de: "Die Verwendung gibt jedem Bürger in der Stadt 1{{AP}} (2{{AP}} wenn betrunken oder unter Drogen).",
          es: "Usarlo le da a cada ciudadano de la ciudad 1{{AP}} (2{{AP}} si está borracho o drogado).",
        };
        break;
      }
      case "soul_blue_#01": {
        // Private town only
        item.categories.push("PrivateTown");
        break;
      }
      case "soul_blue_#00": {
        // Use
        item.actions.push({
          type: ItemActionType.Use,
          conditions: [],
          effects: blueSoulTurnChances.map((data) => ({
            type: ItemActionEffectType.CreateItem,
            value: "soul_red_#00",
            odds: data.odds,
            count: data.nights,
          })),
        });

        // info
        item.info = {
          en: "If not purified, it will turn into a {{item:soul_red}} Tortured Soul after X nights (no matter where it is).",
          fr: "Si elle n'est pas purifiée, elle se transformera en une {{item:soul_red}} Âme torturée après X nuits (peu importe où elle se trouve).",
          de: "Wenn sie nicht gereinigt wird, verwandelt sie sich nach X Nächten (egal wo sie sich befindet) in eine {{item:soul_red}} Gequälte Seele.",
          es: "Si no se purifica, se convertirá en un {{item:soul_red}} Alma Torturada después de X noches (sin importar dónde esté).",
        };
        break;
      }
      case "bplan_drop_#00": {
        // info
        item.info = {
          en: "A maximum of 3 can be found townwide per day",
          fr: "Un maximum de 3 peut être trouvé dans toute la ville par jour",
          de: "Maximal 3 können pro Tag in der Stadt gefunden werden",
          es: "Se puede encontrar un máximo de 3 en toda la ciudad por día",
        };
        break;
      }
      case "bplan_box_e_#00": {
        // info
        item.info = {
          en: "Two of them are scattered in random zones 9-21km away from the town.",
          fr: "Deux d'entre eux sont éparpillés dans des zones aléatoires à 9-21 km de la ville.",
          de: "Zwei davon sind in zufälligen Zonen 9–21 km von der Stadt entfernt verstreut.",
          es: "Dos de ellos están esparcidos en zonas aleatorias a 9-21 km de la ciudad.",
        };
        break;
      }
      case "bplan_box_#00": {
        // info
        item.info = {
          en: "Five of them are scattered in random zones 6-15km away from the town.",
          fr: "Cinq d'entre eux sont éparpillés dans des zones aléatoires à 6-15 km de la ville.",
          de: "Fünf davon sind in zufälligen Zonen 6–15 km von der Stadt entfernt verstreut.",
          es: "Cinco de ellos están esparcidos en zonas aleatorias a 6-15 km de la ciudad.",
        };
        break;
      }
      case "sand_ball_#00": {
        // Use
        item.actions.push({
          type: ItemActionType.Use,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.GetPicto,
              value: "r_sandb_#00",
            },
          ],
        });

        // info
        item.info = {
          en: "Can be thrown every 30 minutes outside of the town. If there are multiple players in the same zone, the target will be chosen randomly. Can injure the target in hardcore towns.",
          fr: "Peut être lancée toutes les 30 minutes hors de la ville. Si plusieurs joueurs se trouvent dans la même zone, la cible sera choisie aléatoirement. Peut blesser la cible en Pandémonium.",
          de: "Kann alle 30 Minuten außerhalb der Stadt geworfen werden. Wenn mehrere Spieler in derselben Zone sind, wird das Ziel zufällig ausgewählt. Kann das Ziel in Hardcore-Städten verletzen.",
          es: "Se puede lanzar cada 30 minutos fuera del pueblo. Si hay varios jugadores en la misma zona, el objetivo se elegirá aleatoriamente. Puede herir al objetivo en pueblos difíciles.",
        };
        break;
      }
      case "maglite_off_#00":
      case "maglite_1_#00":
      case "maglite_2_#00": {
        // info
        item.info = {
          en: "Decreases the night time penalty from -10% to -2.5% while scavenging if on the ground in a zone.",
          fr: "Diminue la pénalité de nuit de -10% à -2,5% lors de la fouille si elle est au sol dans une zone.",
          de: "Verringert die Nachtzeitstrafe von -10 % auf -2,5 %, während Sie in einer Zone nach Schätzen suchen.",
          es: "Disminuye la penalización nocturna del -10% al -2.5% mientras se busca si está en el suelo en una zona.",
        };
        break;
      }
      case "smelly_meat_#00": {
        // info
        item.info = {
          en: "Increases the chances of survival while camping by 5%. Stackable.",
          fr: "Augmente les chances de survie lors du camping de 5%. Empilable.",
          de: "Erhöht die Überlebenschancen beim Campen um 5 %. Stapelbar.",
          es: "Aumenta las posibilidades de supervivencia mientras acampa en un 5%. Apilable.",
        };
        break;
      }
      case "christmas_suit_full_#00": {
        // Use
        item.actions.push({
          type: ItemActionType.Steal,
          conditions: [],
          effects: [
            {
              type: ItemActionEffectType.GetPicto,
              value: "r_santac_#00",
            },
          ],
        });

        // info
        item.info = {
          en: "Allows you to anonymously steal from other players' houses.",
          fr: "Vous permet de voler anonymement dans les maisons d'autres joueurs.",
          de: "Erlaubt es Ihnen, anonym in die Häuser anderer Spieler zu stehlen.",
          es: "Te permite robar anónimamente en las casas de otros jugadores.",
        };
        break;
      }
      case "infect_poison_part_#00": {
        // Private town only
        item.categories.push("PrivateTown");
        break;
      }
      case "banned_note_#00": {
        // info
        item.info = {
          en: "Can contain the x,y coordinates of the shunned citizen's buried stash.",
          fr: "Peut contenir les coordonnées x,y de la cachette enterrée du citoyen banni.",
          de: "Kann die x,y-Koordinaten des vergrabenen Verstecks des verbannten Bürgers enthalten.",
          es: "Puede contener las coordenadas x,y del escondite enterrado del ciudadano desterrado.",
        };
        break;
      }
    }
  }
};
