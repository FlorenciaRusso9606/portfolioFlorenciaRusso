"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import Rocket from "./Rocket";
import { useRef, useState } from "react";

export default function Hero() {
  const [isTapped, setIsTapped] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll();

  const rocketY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, -800]
  );

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.4 + i * 0.1 },
    }),
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="flex min-h-screen items-center justify-center gap-10 px-10
             flex-col md:flex-row"
    >
      <motion.div
        style={{ y: rocketY }}
        className="order-1 md:order-2"
      >
        <Rocket />
      </motion.div>

      <div
        className="
            flex flex-col items-center justify-center px-6 text-center
   
    transition-colors order-2 md:order-1
        "
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        className="font-poppins text-4xl md:text-6xl font-bold"
        >
          Florencia Russo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        className="
          mt-6 max-w-xl
          text-neutral-700
          dark:text-neutral-400
        "
        >
          Desarrolladora Web Full Stack con foco en Frontend,
          creando experiencias modernas, funcionales y cuidadas.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {/* GitHub */}
          <motion.a
            custom={0}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            href="https://github.com/FlorenciaRusso9606"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            className="
              relative p-3 rounded-2xl
              text-neutral-700 dark:text-neutral-400
              hover:text-emerald-600 dark:hover:text-emerald-400
              active:scale-90 active:bg-emerald-200 dark:active:bg-emerald-800/40
              transition-all duration-200 ease-out
              touch-manipulation select-none
              focus-visible:outline-none focus-visible:ring-2 
              focus-visible:ring-emerald-400
            "
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <Github size={28} strokeWidth={2} />
            <span className="sr-only">GitHub</span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            href="https://www.linkedin.com/in/florencia-russo-65976b287/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            className="
              relative p-3 rounded-2xl
              text-neutral-700 dark:text-neutral-400
              hover:text-emerald-600 dark:hover:text-emerald-400
              active:scale-90 active:bg-emerald-200 dark:active:bg-emerald-800/40
              transition-all duration-200 ease-out
              touch-manipulation select-none
              focus-visible:outline-none focus-visible:ring-2 
              focus-visible:ring-emerald-400
            "
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <Linkedin size={28} strokeWidth={2} />
            <span className="sr-only">LinkedIn</span>
          </motion.a>

          {/* Download CV */}
          <motion.a
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            href="/cv/Florencia_Russo_CV.pdf"
            download="Florencia_Russo_CV.pdf"
            aria-label="Descargar CV"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onTapStart={() => setIsTapped(true)}
            onTap={() => setIsTapped(false)}
            onTapCancel={() => setIsTapped(false)}
            onTouchStart={() => setIsTapped(true)}
            onTouchEnd={() => setTimeout(() => setIsTapped(false), 200)}
            className={`
              relative inline-flex items-center gap-2 px-4 py-3 rounded-xl
              border-2 border-emerald-400/30
              text-neutral-800 dark:text-neutral-300
              font-medium transition-all duration-200 ease-out
              
              bg-white dark:bg-neutral-900
              hover:bg-emerald-400 hover:text-neutral-900 
              dark:hover:bg-emerald-400 dark:hover:text-neutral-900
              
              active:scale-95 active:bg-emerald-400 active:text-neutral-900
              dark:active:bg-emerald-400 dark:active:text-neutral-900
              
              focus-visible:outline-none focus-visible:ring-2 
              focus-visible:ring-emerald-400 focus-visible:ring-offset-2
              
              touch-manipulation select-none
              min-w-45 justify-center
              
              ${isTapped ? 'shadow-[0_0_25px_rgba(52,211,153,0.8)] dark:shadow-[0_0_30px_rgba(52,211,153,0.9)]' : 
                'shadow-md shadow-emerald-100/50 dark:shadow-neutral-800/50'}
            `}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {/* Efecto de pulso cuando está activo */}
            {isTapped && (
              <motion.div
                className="absolute inset-0 rounded-xl bg-emerald-400/20"
                initial={{ opacity: 0.5, scale: 1 }}
                animate={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            )}

            <Download size={18} className="shrink-0" />
            <span className="whitespace-nowrap">Descargar CV</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}