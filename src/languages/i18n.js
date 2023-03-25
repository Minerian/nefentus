import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./en.json";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: translationEN,
    },
    de: {
      translation: {
        homeHeroTitle: "Chào mừng đến với bình nguyên vô tận",
      },
    },
  },
});

export default i18n;
