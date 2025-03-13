import { ExternalSite } from "./externalSites";
import { store } from "./store";
import { t } from "./translate";

const T: Translations = {
  en: {
    link: "{{site}} link",
  },
  fr: {
    link: "Lien {{site}}",
  },
  de: {
    link: "{{site}}-Link",
  },
  es: {
    link: "Enlace {{site}}",
  },
};

export const displayExternalCityLinks = (node: HTMLElement) => {
  if (!store["external-city-links"].length) return;

  if (
    node.matches(".soul .view-town > .row .cell button:not(.zen-external-link)")
  ) {
    const existing = document.querySelector(".zen-external-link");
    if (existing) return;

    for (const site of store["external-city-links"]) {
      const siteData = ExternalSite[site];
      if (!siteData.url) continue;

      const button = document.createElement("button");
      button.classList.add("zen-external-link", "center");

      const translation = t(T, "link", { site });
      const logo = document.querySelector(
        `.app-external[data-id="${siteData.id}"] img`
      );

      button.innerHTML = /*html*/ `
        <img src="${logo?.getAttribute("src")}" alt="${translation}" />
        <p>${translation}</p>
      `;

      button.addEventListener("click", async () => {
        if (!siteData.url) return;

        // Get town name
        const townName = document
          .querySelector(".soul .view-town h5")
          ?.textContent?.trim();
        if (!townName) return;

        // Replace button with loading div
        button.innerHTML = /*html*/ `<div class="loading"></div>`;

        try {
          // Fetch town ID
          const response = await fetch(
            `https://bbh.fred26.fr/?pg=cities&search=${encodeURIComponent(
              townName
            )}`
          );
          const text = await response.text();
          const match = /var a_cities = \[(.*?)\];/gms.exec(text);
          if (!match) throw new Error("Failed to find town ID");

          const cities = JSON.parse(`[${match[1]}]`) as unknown[];
          const city = cities[0];
          if (
            !city ||
            typeof city !== "object" ||
            !("cid" in city) ||
            typeof city.cid !== "number"
          )
            throw new Error("Failed to parse town ID");

          // Replace button text
          button.innerHTML = /*html*/ `
            <img src="${logo?.getAttribute("src")}" alt="${translation}" />
            <p>${translation}</p>
          `;

          const townID = city.cid;
          window.open(siteData.url.replace("{{townId}}", townID.toString()));
        } catch (error) {
          // Display error
          button.innerHTML = /*html*/ `
            <img src="${logo?.getAttribute("src")}" alt="${translation}" />
            <p>${error instanceof Error ? error.message : "Error"}</p>
          `;
        }
      });

      node.before(button);
    }
  }
};
