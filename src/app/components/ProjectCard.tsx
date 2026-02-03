"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
  tech: string[];
  demoUrl: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  demoUrl,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 300)}
      transition={{ duration: 0.3 }}
      className={`
        group relative rounded-2xl p-6
        border
        bg-neutral-100 text-neutral-900
        border-neutral-300
        shadow-sm
        transition-all duration-300
        dark:bg-neutral-900 dark:text-neutral-400
        dark:border-neutral-800
        touch-manipulation
        active:scale-[0.99] active:border-emerald-400/40
        dark:active:border-emerald-400/30
        ${isHovered ? 'border-emerald-400/30 dark:border-emerald-400/20' : ''}
        
        /* Contenedor flex para alinear contenido */
        flex flex-col h-full
      `}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {/* Glow verde */}
      <div className={`
        pointer-events-none absolute inset-0 rounded-2xl 
        transition-opacity duration-300
        ${isHovered ? 'opacity-100' : 'opacity-0'}
        group-active:opacity-100
      `}>
        <div className="
          absolute inset-0 rounded-2xl
          shadow-[0_0_40px_-12px_rgba(16,185,129,0.6)] 
          dark:shadow-[0_0_40px_-12px_rgba(16,185,129,0.3)]
        " />
      </div>

      {/* Contenido que se expande */}
      <div className="relative z-10 flex-1">
        <video
          src={demoUrl}
          controls
          playsInline
          className="
            mb-4 rounded-xl w-full
            border border-neutral-200
            dark:border-neutral-800
          "
        />

        <h3 className={`
          text-xl font-medium mb-2
          transition-colors duration-300
          ${isHovered 
            ? 'text-emerald-600 dark:text-emerald-400' 
            : 'text-neutral-700 dark:text-neutral-300'
          }
        `}>
          {title}
        </h3>

        <p className={`
          mb-4
          transition-colors duration-300
          text-neutral-600 dark:text-neutral-400
          ${isHovered ? 'dark:text-emerald-300/90' : ''}
        `}>
          {description}
        </p>

        <ul className="mb-6 flex flex-wrap gap-2 text-sm">
          {tech.map((t) => (
            <li
              key={t}
              className={`
                rounded-full px-3 py-1
                transition-all duration-300
                bg-neutral-100 text-neutral-700
                dark:bg-neutral-800 dark:text-neutral-300
                ${isHovered 
                  ? 'text-emerald-600 dark:text-emerald-400' 
                  : 'text-neutral-700 dark:text-neutral-300'
                }
              `}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Botón siempre abajo */}
      <div className="relative z-10 mt-auto pt-4 border-t border-neutral-300/50 dark:border-neutral-700/50">
        <motion.a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 4 }}
          whileTap={{ x: 2, scale: 0.95 }}
          className={`
            inline-flex items-center justify-center gap-2 
             p-2 rounded-xl text-sm font-medium
            transition-all duration-300
            
           
            text-neutral-700 dark:text-neutral-300
            
            hover:text-emerald-600 hover:border-emerald-400/50
            dark:hover:text-emerald-400 dark:hover:border-emerald-400/30
            active:scale-95 active:text-emerald-700
            dark:active:text-emerald-300
            
            focus-visible:outline-none focus-visible:ring-2 
            focus-visible:ring-emerald-400 focus-visible:ring-offset-2
            
            ${isHovered 
              ? 'border-emerald-400/40 dark:border-emerald-400/30' 
              : ''
            }
          `}
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <ExternalLink size={16} />
          Ver demo
        </motion.a>
      </div>
    </motion.article>
  );
}