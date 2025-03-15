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

      // Empty error message
      const error = document.querySelector(".zen-update-error");
      if (error) {
        while (error.firstChild) {
          error.removeChild(error.firstChild);
        }
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
            updateParams = {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: `key=${store["user-key"]}`,
            };

            // TODO: add &chaosx=X&chaosy=Y if chaos mode
            // TODO: add &deadzombies=Z with the amount of zombies killed
            break;
          }
          case ExternalSiteName.GH: {
            updateParams = {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: `key=${store["user-key"]}`,
            };
            break;
          }
          default: {
            console.error(`Unknown site: ${site}`);
            return;
          }
        }

        // Update external site
        fetch(updateUrl.replace("{{userKey}}", store["user-key"]), updateParams)
          .then(async (response) => {
            console.log(response);
            const contentType = response.headers.get("content-type");
            let responseBody;
            if (contentType?.includes("application/json")) {
              responseBody = await response.json() as unknown;
            } else {
              responseBody = await response.text();
            }
            console.log("Response body:", responseBody);

            if (site === ExternalSiteName.BBH) {
              // Special case for BBH, read XML response
              const parser = new DOMParser();
              const xml = parser.parseFromString(responseBody as string, "text/xml");
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
