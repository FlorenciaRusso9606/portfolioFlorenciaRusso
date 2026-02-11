import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";


export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const currentLang = i18n.resolvedLanguage?.startsWith("es") ? "es" : "en";
  const nextLang = currentLang === "en" ? "es" : "en";
  const label = currentLang === "en" ? "ES" : "EN";

  const handleChangeLanguage = async () => {
    await i18n.changeLanguage(nextLang);
    localStorage.setItem("language", nextLang);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleChangeLanguage}
      className="h-10 w-10 rounded-xl border border-neutral-800 dark:border-neutral-700 bg-neutral-800 dark:bg-neutral-900 text-neutral-300 hover:text-emerald-400 hover:border-emerald-400 transition"
    >
      {label}
    </motion.button>
  );
};
