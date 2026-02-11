"use client";
import IconGrid from "./IconGrid";
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
import { useTranslation } from "react-i18next";

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
   const { t } = useTranslation();
  
  return (
  <IconGrid
  id="tech"
  title={t("technologiesSection.title")}
  items={techs}
/>
  );
}
