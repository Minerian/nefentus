import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  // language resources
  resources: {
    en: {
      translation: {
        homeHeroTitle: "Level-up Business with Nefentus",
      },
    },
    de: {
      translation: {
        homeHeroTitle: "Chào mừng đến với bình nguyên vô tận",
      },
    },
  },
});

export default i18n;
