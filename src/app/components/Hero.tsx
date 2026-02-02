"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import  Rocket  from "./Rocket";
import { useRef } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
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
  id="home" className="flex min-h-screen justify-center px-10 items-center">

  <div
  className="
    flex flex-col items-center justify-center px-6 text-center
   
    transition-colors
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

      <div className="mt-8 flex items-center gap-6">
        {/* GitHub */}
 <motion.a
  custom={0}
  variants={itemVariants}
  initial="hidden"
  animate="visible"
  whileHover={{ scale: 1.15 }}
  whileTap={{ scale: 0.95 }}
  href="https://github.com/FlorenciaRusso9606"
  aria-label="GitHub"
  className="
   text-neutral-700
          dark:text-neutral-400

    opacity-80
    hover:opacity-100
    hover:text-emerald-600 dark:hover:text-emerald-400
     transition-opacity
  "
>
  <Github size={28} strokeWidth={2} />
</motion.a>

<motion.a
  custom={1}
  variants={itemVariants}
  initial="hidden"
  animate="visible"
  whileHover={{ scale: 1.15 }}
  whileTap={{ scale: 0.95 }}
  href="https://www.linkedin.com/in/florencia-russo-65976b287/"
  aria-label="LinkedIn"
  className="
  text-neutral-700
          dark:text-neutral-400
    opacity-80
    hover:opacity-100
    hover:text-emerald-400
    transition-opacity
  "
>
  <Linkedin size={28} strokeWidth={2} />
</motion.a>


        {/* Download CV */}
      <motion.a
  custom={2}
  variants={itemVariants}
  initial="hidden"
  animate="visible"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.97 }}
  href="/cv/Florencia_Russo_CV.pdf"
  download
    className="
          inline-flex items-center gap-2 px-6 py-3 rounded-xl
         border
          text-neutral-800
          dark:text-neutral-300
          font-medium transition
          hover:bg-emerald-400 hover:text-neutral-900
          dark:hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:shadow-[0_0_20px_rgba(52,211,153,0.8)]
          focus-visible:outline-none
          focus-visible:ring-2  focus-visible:ring-emerald-400
        "
>
  <Download size={16} />
  Descargar CV
</motion.a>
      </div>
      </div>
   <motion.div
  style={{ y: rocketY }}
>
  <Rocket />
</motion.div>

    </section>
  );
}
