import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./en.json";
import translationDE from "./ger.json";
import translationAR from "./ar.json";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: translationEN
    },
    de: {
      translation: translationDE
    },
    ar: {
      translation : translationAR
    }
  },
});

export default i18n;
