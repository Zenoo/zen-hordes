import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Checkbox,
  CssBaseline,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  GlobalStyles,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Toggle } from "./components/Toggle";
import { ExternalSite, ExternalSiteName } from "./contentScript/externalSites";
import { store, Store } from "./contentScript/store";
import gameVersion from "./data/game-version.json";
import { Version } from "./utils/Version";
import { setFeature } from "./utils/popup/setFeature";
import { theme } from "./utils/theme";
import { t as _t } from "./utils/translate";
import { sendMessage } from "./utils/popup/sendMessage";

const T: Translations = {
  en: {
    "enhance-css": "UI Enhancements",
    "bank-tracker": "Bank Tracker",
    "map-preview": "Available cities map preview",
    "shaman-souls-button": "Souls positions copy button",
    "better-tooltips": "Better tooltips",
    "camping-calculator": "Camping calculator",
    "shopping-list": "Shopping list",
    "better-reward-titles": "Better reward titles",
    "max-ap-investment": "Max AP investment in buildings",
    "full-logs": "Show full logs",
    "auto-open-bag": "Auto open bag outside",
    "default-internal-map": "Open Zen Hordes map by default",
    "external-city-links": "External city history links",
    "update-sites": "External sites to update",
    "user-key": "User key",
  },
  fr: {
    "enhance-css": "Améliorations de l'interface",
    "bank-tracker": "Suivi de la banque",
    "map-preview": "Aperçu de la carte des villes disponibles",
    "shaman-souls-button": "Bouton de copie des positions des âmes",
    "better-tooltips": "Meilleures infobulles",
    "camping-calculator": "Calculateur de camping",
    "shopping-list": "Liste de courses",
    "better-reward-titles": "Meilleurs titres de distinctions",
    "max-ap-investment": "PA max investis dans les bâtiments",
    "full-logs": "Afficher les journaux complets",
    "auto-open-bag": "Ouverture automatique du sac à l'extérieur",
    "default-internal-map": "Ouvrir la carte Zen Hordes par défaut",
    "external-city-links": "Liens externes des historiques des villes",
    "update-sites": "Sites externes à mettre à jour",
    "user-key": "Clé utilisateur",
  },
  de: {
    "enhance-css": "UI-Verbesserungen",
    "bank-tracker": "Bank-Tracker",
    "map-preview": "Vorschau der verfügbaren Städte auf der Karte",
    "shaman-souls-button": "Schaltfläche zum Kopieren von Seelenpositionen",
    "better-tooltips": "Bessere Tooltips",
    "camping-calculator": "Camping-Rechner",
    "shopping-list": "Einkaufsliste",
    "better-reward-titles": "Bessere Belohnungstitel",
    "max-ap-investment": "Maximale AP-Investition in Gebäude",
    "full-logs": "Vollständige Protokolle anzeigen",
    "auto-open-bag": "Rucksack im Freien automatisch öffnen",
    "default-internal-map": "Zen Hordes-Karte standardmäßig öffnen",
    "external-city-links": "Externe Stadtverlauf-Links",
    "update-sites": "Externe Sites aktualisieren",
    "user-key": "Benutzerschlüssel",
  },
  es: {
    "enhance-css": "Mejoras de la interfaz de usuario",
    "bank-tracker": "Rastreador de banco",
    "map-preview": "Vista previa del mapa de ciudades disponibles",
    "shaman-souls-button": "Botón de copia de posiciones de almas",
    "better-tooltips": "Mejores tooltips",
    "camping-calculator": "Calculadora de camping",
    "shopping-list": "Lista de compras",
    "better-reward-titles": "Mejores títulos de recompensas",
    "max-ap-investment": "Máxima inversión de AP en edificios",
    "full-logs": "Mostrar registros completos",
    "auto-open-bag": "Abrir bolsa automáticamente afuera",
    "default-internal-map": "Abrir el mapa de Zen Hordes por defecto",
    "external-city-links": "Enlaces externos de historiales de ciudades",
    "update-sites": "Sitios externos para actualizar",
    "user-key": "Clave de usuario",
  },
};

const toggles: (keyof Store)[] = [
  "enhance-css",
  "bank-tracker",
  "map-preview",
  "shaman-souls-button",
  "better-tooltips",
  "camping-calculator",
  "shopping-list",
  "better-reward-titles",
  "max-ap-investment",
  "full-logs",
  "auto-open-bag",
  "default-internal-map",
];

const Popup = () => {
  const [storeData, setStoreData] = useState<Store>(structuredClone(store));

  // Fetch lang
  useEffect(() => {
    const syncStorage = async () => {
      const data = await chrome.storage.sync.get();
      setStoreData(
        (prev) =>
          ({
            ...prev,
            ...data,
          } as Store)
      );
    };

    syncStorage().catch(console.error);
  }, []);

  const t = (key: string) => _t(T, key, undefined, storeData["hordes-lang"]);

  const handleExternalSiteLinksChange =
    (name: ExternalSiteName) =>
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedExternalSiteLinks = event.target.checked
        ? [...storeData["external-city-links"], name]
        : storeData["external-city-links"].filter((link) => link !== name);

      setStoreData((prev) => ({
        ...prev,
        "external-city-links": updatedExternalSiteLinks,
      }));
      await setFeature("external-city-links", updatedExternalSiteLinks);
    };

  const handleExternalSitesToUpdateChange =
    (name: ExternalSiteName) =>
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedExternalSitesToUpdate = event.target.checked
        ? [...storeData["external-sites-to-update"], name]
        : storeData["external-sites-to-update"].filter((site) => site !== name);

      setStoreData((prev) => ({
        ...prev,
        "external-sites-to-update": updatedExternalSitesToUpdate,
      }));
      await setFeature(
        "external-sites-to-update",
        updatedExternalSitesToUpdate
      );
    };

  const handleUserKeyChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStoreData((prev) => ({
      ...prev,
      "user-key": event.target.value,
    }));
    await sendMessage({
      action: Action.SetStorage,
      value: { name: "user-key", value: event.target.value },
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "#root": {
            minWidth: 350,
          },
        }}
      />
      <Typography variant="h6" sx={{ textAlign: "center", mt: 1 }}>
        Zen Hordes
      </Typography>
      <FormGroup>
        {toggles.map((feature) => (
          <Toggle
            key={feature}
            data={storeData}
            feature={feature}
            getter={
              feature === "shopping-list"
                ? (data) => typeof data[feature] === "string"
                : undefined
            }
            setter={setStoreData}
            setterFormatter={
              feature === "shopping-list"
                ? (value) => (value ? "" : undefined)
                : undefined
            }
            label={t(feature)}
          />
        ))}
        <Divider sx={{ my: 1 }} />
        <FormControl component="fieldset" size="small" sx={{ mx: 1 }}>
          <FormLabel component="legend" sx={{ typography: "body2" }}>
            {t("external-city-links")}
          </FormLabel>
          <FormGroup aria-label="position" row>
            {Object.values(ExternalSiteName).map(
              (name) =>
                !!ExternalSite[name].townUrl && (
                  <FormControlLabel
                    key={name}
                    value={name}
                    control={
                      <Checkbox
                        checked={storeData["external-city-links"].includes(
                          name
                        )}
                        onChange={handleExternalSiteLinksChange(name)}
                        size="small"
                      />
                    }
                    label={name}
                    labelPlacement="end"
                    sx={{
                      "& .MuiFormControlLabel-label": { typography: "body2" },
                    }}
                  />
                )
            )}
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset" size="small" sx={{ mx: 1 }}>
          <FormLabel component="legend" sx={{ typography: "body2" }}>
            {t("update-sites")}
          </FormLabel>
          <FormGroup aria-label="position" row>
            {Object.values(ExternalSiteName).map(
              (name) =>
                !!ExternalSite[name].updateUrl && (
                  <FormControlLabel
                    key={name}
                    value={name}
                    control={
                      <Checkbox
                        checked={storeData["external-sites-to-update"].includes(
                          name
                        )}
                        onChange={handleExternalSitesToUpdateChange(name)}
                        size="small"
                      />
                    }
                    label={name}
                    labelPlacement="end"
                    sx={{
                      "& .MuiFormControlLabel-label": { typography: "body2" },
                    }}
                  />
                )
            )}
          </FormGroup>
        </FormControl>
        <Divider sx={{ my: 1 }} />
        <TextField
          label={t("user-key")}
          value={storeData["user-key"]}
          onChange={handleUserKeyChange}
          size="small"
          sx={{ m: 1 }}
        />
      </FormGroup>
      <Typography
        variant="caption"
        sx={{ display: "block", opacity: 0.8, textAlign: "center" }}
      >
        v{Version} | MyHordes v{gameVersion.version}
      </Typography>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Popup />
    </React.StrictMode>
  );
}
