import { ASSETS } from "../utils/constants";
import { tooltip } from "../utils/tooltip";
import { ExternalSite, ExternalSiteName } from "./externalSites";
import { store } from "./store";
import { replaceString, t } from "./translate";

type ScoutRadar = {
  east?: number;
  west?: number;
  north?: number;
  south?: number;
};

type ScavengerDepletedZones = {
  east?: boolean;
  west?: boolean;
  north?: boolean;
  south?: boolean;
};

const T = {
  en: {
    noUserKey:
      "You need to set your user key in the extension options to update external sites. You can find your user key here, in the Advanced section:",
    settings: "Settings",
    updateExternalApps: "Update external apps",
  },
  fr: {
    noUserKey:
      "Vous devez définir votre clé utilisateur dans les options de l'extension pour mettre à jour les sites externes. Vous pouvez trouver votre clé utilisateur ici, dans la section Avancé :",
    settings: "Paramètres",
    updateExternalApps: "Mettre à jour les applications externes",
  },
  de: {
    noUserKey:
      "Sie müssen Ihren Benutzerschlüssel in den Erweiterungsoptionen festlegen, um externe Websites zu aktualisieren. Sie finden Ihren Benutzerschlüssel hier, im Abschnitt Erweitert:",
    settings: "Einstellungen",
    updateExternalApps: "Externe Apps aktualisieren",
  },
  es: {
    noUserKey:
      "Necesitas establecer tu clave de usuario en las opciones de la extensión para actualizar los sitios externos. Puedes encontrar tu clave de usuario aquí, en la sección Avanzado:",
    settings: "Ajustes",
    updateExternalApps: "Actualizar aplicaciones externas",
  },
};

/**
 * Update the status of an external app in the update button
 */
const updateAppStatus = (wrapper: Element, status: string) => {
  wrapper
    .querySelector(".status")
    ?.setAttribute("src", `${ASSETS}/icons/${status}.png`);
};

/**
 * Display an update error message
 */
const displayError = (wrapper: Element, error: string) => {
  // Update status icon
  updateAppStatus(wrapper, "error");

  // Error text
  const text = document.createElement("p");
  text.textContent = error;

  const existing = document.querySelector(".zen-update-error");
  if (existing) {
    // Add error message to existing notice
    existing.appendChild(text);
  } else {
    // Create error notice
    const notice = document.createElement("div");
    notice.classList.add("zen-update-error", "note", "note-critical");

    notice.appendChild(text);

    const button = document.querySelector(".zen-update-button");
    if (button) {
      button.after(notice);
    }
  }
};

/**
 * Get the query to update an external app
 */
const getExternalAppQuery = (site: ExternalSiteName): [string, RequestInit] => {
  const url = ExternalSite[site].updateUrl;
  if (!url) {
    throw new Error(`No update URL for ${site}`);
  }

  const urlVariables: Partial<Record<string, string>> = {
    userKey: store["user-key"],
  };
  let updateParams: RequestInit = {};

  switch (site) {
    case ExternalSiteName.BBH: {
      updateParams = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `key=${store["user-key"]}`,
      };
      break;
    }
    case ExternalSiteName.FM: {
      // Dead zombies
      const deadZombies = document.querySelectorAll(".actor.splatter").length;

      // Players present
      const playerList = Array.from(
        document.querySelectorAll(".beyond-escort-off .username[x-user-id]")
      )
        .map((el) => +(el.getAttribute("x-user-id") ?? "0"))
        .filter((id) => id > 0);

      // Player position
      const position = {
        x: 0,
        y: 0,
      };

      const displayedPosition = document.querySelector(
        ".map .current-location"
      );

      if (displayedPosition) {
        const [x, y] = displayedPosition.textContent
          ?.split(":")
          .pop()
          ?.split("/")
          .map((coord) => Number(coord.trim())) ?? [0, 0];
        position.x = x ?? 0;
        position.y = y ?? 0;
      }

      // Scout information
      const isScout = !!document.querySelector(
        "hordes-passive-inventory .item img[src^='/build/images/item/item_vest']"
      );
      const scoutRadar: ScoutRadar = {};

      document
        .querySelectorAll(".zone-plane-controls .scout-sense")
        .forEach((element) => {
          const direction = Array.from(element.classList)
            .find((className) => className.startsWith("scout-sense-"))
            ?.replace("scout-sense-", "");
          if (direction) {
            const estimate = element.querySelector("text")?.textContent;

            if (estimate) {
              scoutRadar[direction as keyof ScoutRadar] = +estimate;
            }
          }
        });

      // Scavenger information
      const isScavenger = !!document.querySelector(
        "hordes-passive-inventory .item img[src^='/build/images/item/item_pelle']"
      );

      const scavengerDepletedZones: ScavengerDepletedZones = {};

      document
        .querySelectorAll(".zone-plane-controls .scavenger-sense")
        .forEach((element) => {
          const classes = Array.from(element.classList);
          const direction = classes
            .find((className) =>
              className.match(/scavenger-sense-(east|west|north|south)/)
            )
            ?.replace("scavenger-sense-", "");
          if (direction) {
            const estimate = classes
              .find((className) => className.match(/scavenger-sense-\d+/))
              ?.replace("scavenger-sense-", "");

            if (!estimate) return;

            scavengerDepletedZones[
              direction as keyof typeof scavengerDepletedZones
            ] = estimate === "0";
          }
        });

      // Final request params
      updateParams = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          userKey: store["user-key"],
          nbrKill: deadZombies,
          x: position.x,
          y: position.y,
          scoutRadar: isScout ? scoutRadar : undefined,
          scavRadar: isScavenger ? scavengerDepletedZones : undefined,
          playerList: playerList.length ? playerList : undefined,
        }),
      };
      break;
    }
    case ExternalSiteName.GH: {
      updateParams = {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Source": "Zen-Hordes",
        },
      };
      break;
    }
    case ExternalSiteName.MHO: {
      // Get user ID
      const mercureAuthJson = JSON.parse(
        document.documentElement.getAttribute("data-mercure-auth") ?? "{}"
      ) as Record<string, unknown>;
      const userId = mercureAuthJson.u ? Number(mercureAuthJson.u) : 0;

      urlVariables.userId = String(userId);

      // Get town ID
      const townId = document
        .querySelector(".town-name")
        ?.getAttribute("data-town-id");

      if (!townId) {
        throw new Error("No town ID found");
      }

      updateParams = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          map: {
            toolsToUpdate: {
              isBigBrothHordes: "none",
              isFataMorgana: "none",
              isGestHordes: "none",
              isMyHordesOptimizer: "api",
            },
          },
          townDetails: {
            townId: +townId,
          },
        }),
      };
      break;
    }
    default: {
      throw new Error("Unknown site");
    }
  }
  return [replaceString(url, urlVariables), updateParams];
};

const readExternalAppResponse = async (
  wrapper: Element,
  site: ExternalSiteName,
  response: Response
) => {
  switch (site) {
    case ExternalSiteName.BBH: {
      const body = await response.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(body, "text/xml");
      const error = xml.querySelector("error");
      if (!error) {
        displayError(wrapper, `${site}: no error code`);
        return false;
      }

      if (error.getAttribute("code") !== "ok") {
        displayError(wrapper, `${site}: ${error.getAttribute("code")}`);
        return false;
      }
      return true;
    }
    case ExternalSiteName.FM: {
      // Nothing to check, the response code is enough
      return true;
    }
    case ExternalSiteName.GH: {
      const body = (await response.json()) as Record<string, unknown>;
      if (body.retour !== 1) {
        displayError(wrapper, `${site}: ${body.lib as string}`);
        return false;
      }
      return true;
    }
    case ExternalSiteName.MHO: {
      const data = (await response.json()) as Partial<
        Record<string, Partial<Record<string, string>>>
      >;

      if (data.mapResponseDto?.mhoApiStatus !== "Ok") {
        displayError(wrapper, `${site}: ${data.mapResponseDto?.mhoApiStatus}`);
        return false;
      }
      return true;
    }
    default: {
      throw new Error("Unknown site");
    }
  }
};

/**
 * Display the update button for external sites
 */
export const displayUpdateButton = (node: HTMLElement) => {
  if (!store["external-sites-to-update"].length) return;

  if (
    !node.classList.contains("inventory") ||
    !node.classList.contains("desert") ||
    node.classList.contains("zen-wiki-shopping-list-items")
  )
    return;

  const existing = document.querySelector(".zen-update-button");
  if (existing) return;

  // Create update button
  const button = document.createElement("button");
  button.classList.add("zen-update-button");

  // Add external sites logos
  for (const site of store["external-sites-to-update"]) {
    const siteData = ExternalSite[site];
    if (!siteData.updateUrl) continue;

    const logo = document.querySelector(
      `.app-external[data-id="${siteData.id}"] img`
    );

    const siteWrapper = document.createElement("div");
    siteWrapper.classList.add("site");
    siteWrapper.setAttribute("data-id", site);

    const siteImage = document.createElement("img");
    siteImage.src = logo?.getAttribute("src") ?? "";
    siteImage.alt = site;

    const statusImage = document.createElement("img");
    statusImage.classList.add("status");
    statusImage.src = `${ASSETS}/icons/error.png`;

    siteWrapper.appendChild(siteImage);
    siteWrapper.appendChild(statusImage);
    button.appendChild(siteWrapper);
  }

  // Hover tooltip
  tooltip({
    target: button,
    content: t(T, "updateExternalApps"),
  });

  // Click event
  button.addEventListener("click", () => {
    // Check if we have a user key
    if (!store["user-key"]) {
      const existing = document.querySelector(".zen-update-error");
      if (existing) {
        existing.remove();
      }

      // Display error
      const notice = document.createElement("div");
      notice.classList.add("zen-update-error", "note", "note-critical");

      const title = document.createElement("span");
      title.textContent = t(T, "noUserKey");
      notice.appendChild(title);

      const link = document.createElement("a");
      link.setAttribute("href", "/jx/soul/settings");
      link.textContent = t(T, "settings");
      notice.appendChild(link);

      button.after(notice);
      return;
    }

    // Remove error message
    const existing = document.querySelector(".zen-update-error");
    if (existing) {
      existing.remove();
    }

    store["external-sites-to-update"].forEach((site) => {
      const updateUrl = ExternalSite[site].updateUrl;
      if (!updateUrl) {
        console.error(`No update URL for ${site}`);
        return;
      }

      const wrapper = document.querySelector(
        `.zen-update-button div[data-id="${site}"]`
      );
      if (!wrapper) return;

      // Update status
      updateAppStatus(wrapper, "loading");

      // Get query to update external site
      fetch(...getExternalAppQuery(site))
        .then(async (response) => {
          const ok = await readExternalAppResponse(wrapper, site, response);

          // Not a success response code
          if (!ok) {
            if (response.status !== 200) {
              displayError(
                wrapper,
                `${site}: ${response.statusText} (${response.status})`
              );
            }
            return;
          }

          // Update status
          updateAppStatus(wrapper, "success");
        })
        .catch((error: unknown) => {
          displayError(
            wrapper,
            `${site}: ${error instanceof Error ? error.message : String(error)}`
          );
        });
    });
  });

  node.after(button);
};
