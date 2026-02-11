import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translates
import translationEN from "./locals/en/translation.json";
import translationES from "./locals/es/translation.json";

// Bring language from localStorage
const savedLang =
  typeof window !== "undefined"
    ? localStorage.getItem("language")
    : null;



// Detecta navigation language
const userLang =
  typeof navigator !== "undefined"
    ? navigator.language
    : "es";
    
    const initialLang = savedLang || (userLang.startsWith("es") ? "es" : "en");

// Define translates
const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
};



i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLang, // Actual language
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;