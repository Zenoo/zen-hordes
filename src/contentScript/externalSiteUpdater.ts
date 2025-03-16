import { ASSETS } from "../utils/constants";
import { ExternalSite, ExternalSiteName } from "./externalSites";
import { store } from "./store";
import { t } from "./translate";

const T = {
  en: {
    noUserKey:
      "You need to set your user key in the extension options to update external sites. You can find your user key here, in the Advanced section:",
    settings: "Settings",
  },
  fr: {
    noUserKey:
      "Vous devez définir votre clé utilisateur dans les options de l'extension pour mettre à jour les sites externes. Vous pouvez trouver votre clé utilisateur ici, dans la section Avancé :",
    settings: "Paramètres",
  },
  de: {
    noUserKey:
      "Sie müssen Ihren Benutzerschlüssel in den Erweiterungsoptionen festlegen, um externe Websites zu aktualisieren. Sie finden Ihren Benutzerschlüssel hier, im Abschnitt Erweitert:",
    settings: "Einstellungen",
  },
  es: {
    noUserKey:
      "Necesitas establecer tu clave de usuario en las opciones de la extensión para actualizar los sitios externos. Puedes encontrar tu clave de usuario aquí, en la sección Avanzado:",
    settings: "Ajustes",
  },
};

const replaceString = (
  str: string,
  replacements: Record<string, string | undefined>
) => {
  return str.replace(/{{(.*?)}}/g, (_match, key) => {
    const text = String(key);
    return replacements[text] ?? text;
  });
};

const displayError = (error: string) => {
  const text = document.createElement("p");
  text.textContent = error;

  const existing = document.querySelector(".zen-update-error");
  if (existing) {
    existing.appendChild(text);
  } else {
    // Display error
    const notice = document.createElement("div");
    notice.classList.add("zen-update-error", "note", "note-critical");

    notice.appendChild(text);

    const button = document.querySelector(".zen-update-button");
    if (button) {
      button.after(notice);
    }
  }
};

export const displayUpdateButton = (node: HTMLElement) => {
  if (!store["external-sites-to-update"].length) return;

  if (node.matches(".inventory.desert")) {
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
        wrapper
          .querySelector(".status")
          ?.setAttribute("src", `${ASSETS}/icons/loading.png`);

        // Generate update params
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
            const deadZombies =
              document.querySelectorAll(".actor.splatter").length;
            const chaos = !!document.querySelector(
              'body[data-theme-secondary-modifier="chaos"]'
            );
            const position = {
              x: 0,
              y: 0,
            };

            if (chaos) {
              const displayedPosition = document.querySelector(
                ".map .current-location"
              );

              if (displayedPosition) {
                const [x, y] = displayedPosition.textContent
                  ?.split(":")
                  .pop()
                  ?.split("/")
                  .map((coord) => Number(coord.trim())) ?? [0, 0];
                position.x = x;
                position.y = y;
              }
            }

            updateParams = {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: `key=${store["user-key"]}&deadzombies=${deadZombies}${
                chaos ? `&chaosx=${position.x}&chaosy=${position.y}` : ""
              }`,
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
                  townId: store["town-id"],
                },
              }),
            };
            break;
          }
          default: {
            console.error("Unknown site", site);
            return;
          }
        }

        // Get user ID (only used for MHO for now)
        const mercureAuthJson = JSON.parse(
          document.documentElement.getAttribute("data-mercure-auth") ?? "{}"
        ) as Record<string, unknown>;
        const userId = mercureAuthJson.u ? Number(mercureAuthJson.u) : 0;

        // Update external site
        fetch(
          replaceString(updateUrl, {
            userKey: store["user-key"],
            userId: String(userId),
          }),
          updateParams
        )
          .then(async (response) => {
            const contentType = response.headers.get("content-type");
            let responseBody;
            if (contentType?.includes("application/json")) {
              responseBody = (await response.json()) as unknown;
            } else {
              responseBody = await response.text();
            }

            if (site === ExternalSiteName.BBH) {
              // Special case for BBH, read XML response
              const parser = new DOMParser();
              const xml = parser.parseFromString(
                responseBody as string,
                "text/xml"
              );
              const error = xml.querySelector("error");
              if (!error) {
                wrapper
                  .querySelector(".status")
                  ?.setAttribute("src", `${ASSETS}/icons/error.png`);
                displayError(`${site}: no error code`);
                return;
              }

              if (error.getAttribute("code") !== "ok") {
                wrapper
                  .querySelector(".status")
                  ?.setAttribute("src", `${ASSETS}/icons/error.png`);
                displayError(`${site}: ${error.getAttribute("code")}`);
                return;
              }
            } else if (site === ExternalSiteName.GH) {
              // Special case for GH, read JSON response
              const data = responseBody as Record<string, unknown>;
              if (data.retour !== 1) {
                wrapper
                  .querySelector(".status")
                  ?.setAttribute("src", `${ASSETS}/icons/error.png`);
                displayError(`${site}: ${data.lib as string}`);
                return;
              }
            } else if (site === ExternalSiteName.MHO) {
              // Special case for MHO, read JSON response
              const data = responseBody as Partial<
                Record<string, Partial<Record<string, string>>>
              >;

              if (data.mapResponseDto?.mhoApiStatus !== "Ok") {
                wrapper
                  .querySelector(".status")
                  ?.setAttribute("src", `${ASSETS}/icons/error.png`);
                displayError(`${site}: ${data.mapResponseDto?.mhoApiStatus}`);
                return;
              }
            }

            if (!response.ok) {
              wrapper
                .querySelector(".status")
                ?.setAttribute("src", `${ASSETS}/icons/error.png`);
              displayError(
                `${site}: ${response.statusText} (${response.status})`
              );
              return;
            }

            // Update status
            wrapper
              .querySelector(".status")
              ?.setAttribute("src", `${ASSETS}/icons/success.png`);
          })
          .catch((error: unknown) => {
            wrapper
              .querySelector(".status")
              ?.setAttribute("src", `${ASSETS}/icons/error.png`);
            displayError(
              `${site}: ${
                error instanceof Error ? error.message : String(error)
              }`
            );
          });
      });
    });

    node.after(button);
  }
};
