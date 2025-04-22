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

const buildButton = (
  button: HTMLButtonElement,
  logo: Element | null,
  text: string
) => {
  while (button.firstChild) {
    button.removeChild(button.firstChild);
  }

  const image = document.createElement("img");
  image.src = logo?.getAttribute("src") ?? "";
  image.alt = text;
  button.appendChild(image);

  const p = document.createElement("p");
  p.textContent = text;
  button.appendChild(p);
};

export const displayExternalCityLinks = (node: HTMLElement) => {
  if (!store["external-city-links"].length) return;

  if (!node.getAttribute("x-ajax-href")?.startsWith("/jx/soul/obituary/"))
    return;

  const existing = document.querySelector(".zen-external-link");
  if (existing) return;

  for (const site of store["external-city-links"]) {
    const siteData = ExternalSite[site];
    if (!siteData.townUrl) continue;

    const button = document.createElement("button");
    button.classList.add("zen-external-link", "center");
    button.setAttribute("data-id", site);

    const translation = t(T, "link", { site });
    const logo = document.querySelector(
      `.app-external[data-id="${siteData.id}"] img`
    );

    buildButton(button, logo, translation);

    button.addEventListener("click", async () => {
      if (!siteData.townUrl) return;

      // Get town name
      const townName = document
        .querySelector(".soul .view-town h5")
        ?.textContent?.trim();
      if (!townName) return;

      // Replace button content with loading div
      while (button.firstChild) {
        button.removeChild(button.firstChild);
      }

      const loadingDiv = document.createElement("div");
      loadingDiv.classList.add("loading");
      button.appendChild(loadingDiv);

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
        buildButton(button, logo, translation);

        const townID = city.cid;
        window.open(siteData.townUrl.replace("{{townId}}", townID.toString()));
      } catch (error) {
        // Display error
        buildButton(
          button,
          logo,
          error instanceof Error ? error.message : "Error"
        );
      }
    });

    node.after(button);
  }
};
