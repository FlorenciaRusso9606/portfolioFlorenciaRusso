"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
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
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="
          inline-flex items-center gap-2 px-6 py-3 rounded-xl
         border
          text-neutral-800
          dark:text-neutral-300
          font-medium transition
          hover:bg-emerald-400 hover:text-neutral-900
          hover:shadow-[0_0_20px_rgba(52,211,153,0.8)] dark:hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]
          focus-visible:outline-none
          focus-visible:ring-2  focus-visible:ring-emerald-400
        "
      >
        <Mail size={18} />
        Escribime
      </motion.a>
    </section>
  );
}
