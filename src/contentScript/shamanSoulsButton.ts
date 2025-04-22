import { notify, Severity } from "./notify";
import { store } from "./store";
import { t } from "./translate";

const T: Translations = {
  en: {
    copySouls: "Souls",
    townNotFound: "Town not found",
    coordinatesNotFound: "Coordinates not found",
    soulsLocationsCopied: "Souls locations copied to clipboard",
  },
  fr: {
    copySouls: "Âmes",
    townNotFound: "Ville non trouvée",
    coordinatesNotFound: "Coordonnées non trouvées",
    soulsLocationsCopied: "Emplacements des âmes copiés dans le presse-papiers",
  },
  de: {
    copySouls: "Seelen",
    townNotFound: "Stadt nicht gefunden",
    coordinatesNotFound: "Koordinaten nicht gefunden",
    soulsLocationsCopied: "Seelenstandorte in die Zwischenablage kopiert",
  },
  es: {
    copySouls: "Almas",
    townNotFound: "Ciudad no encontrada",
    coordinatesNotFound: "Coordenadas no encontradas",
    soulsLocationsCopied: "Ubicaciones de almas copiadas al portapapeles",
  },
};

export const displayShamanSoulsButton = (_node: HTMLElement) => {
  if (!store["shaman-souls-button"]) return;

  if (!_node.classList.contains("tilemap_controls")) return;

  const node = _node.querySelector<HTMLDivElement>(".float-left");
  if (!node) return;

  if (node.matches(".map+.controls .tilemap_controls .float-left")) {
    const existing = node.querySelector(".zen-shaman-souls-button");
    if (existing) return;

    // Ignore if not shaman
    if (!document.querySelector(".status.link>img[src*='/images/roles/shaman.']")) return;

    const button = document.createElement("button");
    button.classList.add("zen-shaman-souls-button", "small", "inline", "hide-tags", "map_button", "map_button_left");
    node.appendChild(button);

    const text = document.createElement("div");
    text.textContent = t(T, "copySouls");
    button.appendChild(text);

    button.addEventListener("click", async () => {
      // Get town coordinates relative to top left corner
      const town = document.querySelector<HTMLDivElement>(".map .zone.town");

      if (!town) {
        notify(t(T, "townNotFound"), Severity.ERROR);
        return;
      }

      const [townY, townX] = town.style.gridArea.replace(/ /g, "").split("/");

      if (!townY || !townX) {
        notify(t(T, "coordinatesNotFound"), Severity.ERROR);
        return
      }

      const souls = document.querySelectorAll<HTMLDivElement>(".map .zone.soul");

      const soulData = Array.from(souls).map((soul) => {
        const [soulY, soulX] = soul.style.gridArea.replace(/ /g, "").split("/");

        if (!soulY || !soulX) {
          notify(t(T, "coordinatesNotFound"), Severity.ERROR);
          return;
        }

        return `:middot: ${+soulX - +townX}/${-(+soulY - +townY)}`;
      }).filter(Boolean).join("\n");

      await navigator.clipboard.writeText(soulData);

      notify(t(T, "soulsLocationsCopied"));
      button.classList.remove("hide-tags");
      button.classList.add("show-tags");

      // Reset button after 5 seconds
      setTimeout(() => {
        button.classList.remove("show-tags");
        button.classList.add("hide-tags");
      }, 5000);
    });
  }
};
