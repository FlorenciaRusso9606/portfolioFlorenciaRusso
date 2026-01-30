"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        group relative rounded-2xl p-6
        border
        bg-neutral-100 text-neutral-900
        border-neutral-300
        shadow-sm
        transition
        dark:bg-neutral-900 dark:text-neutral-500
        dark:border-neutral-800
      "
    >
      {/* Glow verde */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100">
        <div className="
          absolute inset-0 rounded-2xl
          shadow-[0_0_40px_-12px_rgba(16,185,129,0.6)] dark:shadow-[0_0_40px_-12px_rgba(16,185,129,0.3)]

        " />
      </div>

      <video
        src={demoUrl}
        controls
        className="
          relative z-10 mb-4 rounded-xl
          border border-neutral-200
          dark:border-neutral-800
        "
      />

      <h3 className="relative z-10 text-xl font-medium">
        {title}
      </h3>

      <p className="
        relative z-10 mt-2
        text-neutral-600
        dark:text-neutral-400
      ">
        {description}
      </p>

      <ul className="relative z-10 mt-4 flex flex-wrap gap-2 text-sm">
        {tech.map((t) => (
          <li
            key={t}
            className="
              rounded-full px-3 py-1
              bg-neutral-100 text-neutral-700
              transition-colors
              group-hover:text-emerald-600    
              dark:bg-neutral-800 dark:text-neutral-300
              dark:group-hover:text-emerald-400
            "
          >
            {t}
          </li>
        ))}
      </ul>

      <motion.a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 4 }}
        className="
          relative z-10 mt-5 inline-flex items-center gap-2 text-sm
          text-neutral-700
          transition-colors
          group-hover:text-emerald-600
          dark:text-neutral-300
          dark:group-hover:text-emerald-400
        "
      >
        <ExternalLink size={16} />
        Ver demo
      </motion.a>
    </motion.article>
  );
}
