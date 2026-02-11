"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";


const items = [
  { labelKey: "nav.home", id: "home" },
  { labelKey: "nav.projects", id: "projects" },
  { labelKey: "nav.tech", id: "tech" },
  { labelKey: "nav.tools", id: "tools" },
  { labelKey: "nav.contact", id: "contact" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

 const { t } = useTranslation();

  function handleScroll(id: string) {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="
        fixed top-0 left-0 right-0 z-50
        backdrop-blur
       bg-neutral-950/80
      "
    >
         
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => handleScroll("home")}
          className="font-poppins text-lg font-semibold text-neutral-200 hover:text-emerald-400 transition cursor-pointer"
        >
          &lt;FlorenciaRusso/&gt;
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          {items.map((item) => (
            <li key={item.id} className="group">
              <button
                onClick={() => handleScroll(item.id)}
                className="relative text-neutral-300 hover:text-emerald-400 transition cursor-pointer"
              >
               {t(item.labelKey)}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full " />
              </button>
            </li>
          ))}
        </ul>

      
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle/>
          {/* Hamburger */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden text-neutral-200 cursor-pointer"
            aria-label="Abrir menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
   <AnimatePresence>
  {open && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="
        md:hidden
        overflow-hidden
        relative
      "
    >
    
      {/* Content */}
      <ul className="relative z-10 flex flex-col gap-6 px-6 py-6 border-t border-neutral-600">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleScroll(item.id)}
              className="text-neutral-300 cursor-pointer text-base hover:text-emerald-400 transition "
            >
              {t(item.labelKey)}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  )}
</AnimatePresence>

    </motion.nav>
  );
}
