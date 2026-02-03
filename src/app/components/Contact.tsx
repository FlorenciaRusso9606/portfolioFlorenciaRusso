"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <section
      id="contact"
      className="px-6 py-24 text-center transition-colors"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-6 font-poppins"
      >
        Contacto
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mb-8 text-neutral-600 dark:text-neutral-400"
      >
        ¿Te interesa trabajar conmigo o tenés una propuesta?
      </motion.p>

      <motion.a
        href="mailto:russoflorencia96@gmail.com"
        aria-label="Enviar mail"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onTapStart={() => setIsTapped(true)}
        onTap={() => setIsTapped(false)}
        onTapCancel={() => setIsTapped(false)}
        onTouchStart={() => setIsTapped(true)}
        onTouchEnd={() => setTimeout(() => setIsTapped(false), 200)}
        className={`
          relative inline-flex items-center gap-2 px-6 py-3 rounded-xl
          border border-emerald-400/30
          text-neutral-800 dark:text-neutral-300
          font-medium transition-all duration-200 ease-out
          
          bg-white dark:bg-neutral-900
          
          hover:bg-emerald-400 hover:text-neutral-900 
          dark:hover:bg-emerald-400 dark:hover:text-neutral-900
          
          hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]
          dark:hover:shadow-[0_0_25px_rgba(52,211,153,0.5)]
          
          active:scale-95 active:bg-emerald-400 active:text-neutral-900
          dark:active:bg-emerald-400 dark:active:text-neutral-900
          
          ${isTapped ? 'shadow-[0_0_25px_rgba(52,211,153,0.8)] dark:shadow-[0_0_30px_rgba(52,211,153,0.9)]' : ''}
          
          /* Focus para accesibilidad */
          focus-visible:outline-none focus-visible:ring-2 
          focus-visible:ring-emerald-400 focus-visible:ring-offset-2
          
          touch-manipulation select-none
          
          shadow-md shadow-emerald-100 dark:shadow-neutral-800
        `}
        style={{
          WebkitTapHighlightColor: 'transparent', 
        }}
      >
        {/* Efecto de pulso cuando está activo */}
        {isTapped && (
          <motion.div
            className="absolute inset-0 rounded-xl  bg-emerald-600/20 dark:bg-emerald-400/20"
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        <Mail size={18} />
        Escribime
      </motion.a>
    </section>
  );
}