"use client";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiFramer,
} from "react-icons/si";

const techs = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: SiGit },
  { name: "Framer Motion", icon: SiFramer },
];

export default function Technologies() {
  return (
    <section id="tech" className="px-6 py-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10 font-poppins">
        Tecnologías
      </h2>

      <ul className="flex flex-wrap gap-x-8 gap-y-10">
        {techs.map(({ name, icon: Icon }, i) => (
          <motion.li
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -6, scale: 1.05 }}
className="
  group relative flex h-16 w-16 items-center justify-center
  rounded-2xl cursor-default

  bg-neutral-100 border border-neutral-200
  dark:bg-neutral-900 dark:border-neutral-800

  transition
"            aria-label={name}
          >
            <Icon
  size={28}
  className="
    text-neutral-700
    dark:text-neutral-300
    transition-colors
    group-hover:text-emerald-600  dark:group-hover:text-emerald-400
  "
/>

            {/* Tooltip */}
            <span
  className="
    pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2
    whitespace-nowrap rounded-md px-2 py-1 text-xs
    bg-neutral-200 text-neutral-800
    dark:bg-neutral-800 dark:text-neutral-100
    opacity-0 transition-opacity
    group-hover:opacity-100
  "
>
  {name}
</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
