import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  CssBaseline,
  FormControlLabel,
  FormGroup,
  GlobalStyles,
  Switch,
  ThemeProvider,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Version } from "./utils/Version";
import { theme } from "./utils/theme";

const T: Translations = {
  en: {
    "enhance-css": "UI Enhancements",
    "bank-blocker": "Bank Blocker",
  },
  fr: {
    "enhance-css": "Améliorations de l'interface",
    "bank-blocker": "Bloqueur de banque",
  },
  de: {
    "enhance-css": "UI-Verbesserungen",
    "bank-blocker": "Bank Blocker",
  },
  es: {
    "enhance-css": "Mejoras de la interfaz de usuario",
    "bank-blocker": "Bloqueador de banco",
  },
};

const Popup = () => {
  const [enhanceCss, setEnhanceCss] = useState(true);
  const [bankBlocker, setBankBlocker] = useState(true);
  const [lang, setLang] = useState<Lang>(Lang.En);

  // Fetch lang
  useEffect(() => {
    chrome.storage.sync.get("lang", (data) => {
      const lang = data.lang as Lang;
      setLang(lang);
    });
  }, []);

  const t = (key: string, replacements?: Record<string, string>) => {
    console.log("t", lang);
    let translation = T[lang][key] || key;

    if (replacements) {
      for (const [placeholder, value] of Object.entries(replacements)) {
        translation = translation.replace(
          new RegExp(`{{${placeholder}}}`, "g"),
          value
        );
      }
    }

    return translation;
  };

  const toggleFeature = (feature: string) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab.id) {
        chrome.tabs.sendMessage<Message>(tab.id, {
          action: Action.ToggleFeature,
          value: feature,
        });
      }
    });
  };

  const handleEnhanceCssChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnhanceCss(event.target.checked);
    toggleFeature("enhanceCss");
  };

  const handleBankBlockerChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBankBlocker(event.target.checked);
    toggleFeature("bankBlocker");
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
      <FormGroup sx={{ ml: 2 }}>
        <FormControlLabel
          control={
            <Switch
              checked={enhanceCss}
              onChange={handleEnhanceCssChange}
              size="small"
            />
          }
          label={
            <Typography variant="body2" sx={{ ml: 0.5 }}>
              {t("enhance-css")}
            </Typography>
          }
        />
        <FormControlLabel
          control={
            <Switch
              checked={bankBlocker}
              onChange={handleBankBlockerChange}
              size="small"
            />
          }
          label={
            <Typography variant="body2" sx={{ ml: 0.5 }}>
              {t("bank-blocker")}
            </Typography>
          }
        />
      </FormGroup>
      <Typography variant="caption" sx={{ display: 'block', opacity: 0.8, textAlign: "center" }}>
        v{Version}
      </Typography>
    </ThemeProvider>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
