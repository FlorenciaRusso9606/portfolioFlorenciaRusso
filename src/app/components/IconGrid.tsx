"use client";
import { motion } from "framer-motion";
import { ElementType, useState } from "react";

interface Item {
  name: string;
  icon: ElementType;
}

interface Props {
  id: string;
  title: string;
  items: Item[];
}

export default function IconGrid({ id, title, items }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id={id} className="px-6 py-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10 font-poppins">{title}</h2>

      <ul className="flex flex-wrap gap-x-8 gap-y-12">
        {items.map(({ name, icon: Icon }, i) => (
          <motion.li
            key={name}
            initial={{ opacity: 0, y: 20 }}
            tabIndex={0}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -6,  }}
            whileTap={{ scale: 0.95 }}
            onTapStart={() => setActiveIndex(i)}
            onTapCancel={() => setActiveIndex(null)}
            onTap={() => setActiveIndex(null)}
            onTouchStart={() => setActiveIndex(i)}
            onTouchEnd={() => setTimeout(() => setActiveIndex(null), 300)}
            className={`
              group relative flex h-16 w-16 items-center justify-center
              rounded-2xl cursor-pointer
              bg-neutral-100 border border-neutral-200
              dark:bg-neutral-900 dark:border-neutral-800
              transition-all duration-200 ease-out touch-manipulation
              active:scale-95
              ${
                activeIndex === i
                  ? "border-emerald-400/30 bg-emerald-50 dark:bg-emerald-950/20 shadow-md"
                  : ""
              }
            `}
            aria-label={name}
          >
            <Icon
              size={28}
              className={`
                transition-all duration-200
                ${
                  activeIndex === i
                    ? "text-emerald-600 dark:text-emerald-400 "
                    : "text-neutral-700 dark:text-neutral-300"
                }
                group-hover:text-emerald-600 dark:group-hover:text-emerald-400
              `}
            />

          
            <span
              className={`
                absolute -bottom-10 left-1/2 -translate-x-1/2
                whitespace-nowrap rounded-md px-2 py-1 text-xs 
               bg-neutral-200 text-neutral-800
    dark:bg-neutral-800 dark:text-neutral-100
                opacity-0 scale-95 transition-all duration-100
                group-hover:opacity-100 group-hover:scale-100
                ${activeIndex === i ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                z-50
                shadow-lg
              `}
            >
              {name}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
