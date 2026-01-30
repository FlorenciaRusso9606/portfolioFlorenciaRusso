"use client";
import { motion } from "framer-motion";
import {
  SiGithub,
  SiFigma,
  SiVercel,
  SiRailway,
  SiPostman,
} from "react-icons/si";

const tools = [
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },
  { name: "Vercel", icon: SiVercel },
  { name: "Railway", icon: SiRailway },
  { name: "Postman", icon: SiPostman },
];

export default function Tools() {
  return (
    <section id="tools" className="px-6 py-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10 font-poppins">
        Herramientas / Workflow
      </h2>

      <ul className="flex flex-wrap gap-x-8 gap-y-10">
        {tools.map(({ name, icon: Icon }, i) => (
          <motion.li
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -6, scale: 1.05 }}
className="
  group relative flex h-16 w-16 items-center justify-center
  rounded-2xl cursor-default

  bg-neutral-100 border border-neutral-200
  dark:bg-neutral-900 dark:border-neutral-800

  transition
"             aria-label={name}
          >
            <Icon
              size={28}
className="
    text-neutral-700
    dark:text-neutral-300
    transition-colors
    group-hover:text-emerald-600  dark:group-hover:text-emerald-400
  "            />

            {/* Tooltip */}
            <span   className="
    pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2
    whitespace-nowrap rounded-md px-2 py-1 text-xs
    bg-neutral-200 text-neutral-800
    dark:bg-neutral-800 dark:text-neutral-100
    opacity-0 transition-opacity
    group-hover:opacity-100
  ">
              {name}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
