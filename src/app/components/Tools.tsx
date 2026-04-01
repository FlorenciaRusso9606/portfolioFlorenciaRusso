"use client";
import { motion } from "framer-motion";
import IconGrid from "./IconGrid"
import { useTranslation } from "react-i18next";

import {
  SiGithub,
  SiFigma,
  SiVercel,
  SiRailway,
  SiPostman,
  SiAmazon
} from "react-icons/si";

const tools = [
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },
  { name: "Vercel", icon: SiVercel },
  { name: "Railway", icon: SiRailway },
  { name: "Postman", icon: SiPostman },
  { name: "AWS S3", icon: SiAmazon },
];

export default function Tools() {
   const { t } = useTranslation();

  return (
   <IconGrid
  id="tools"
  title={t("toolsSection.title")}
  items={tools}
/>
  );
}
