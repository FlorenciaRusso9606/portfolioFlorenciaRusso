"use client";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: "social",
    tech: ["Next.js", "TypeScript", "Express", "PostgreSQL", "JWT", "Material UI"],
    demoUrl: "/videos/red-social-demo.mp4",
  },
  {
    id: "ecommerce",
    tech: ["Next.js", "TypeScript", "Express", "PostgreSQL"],
    demoUrl: "/videos/ecommerce-demo.mp4",
  },
  {
    id: "spotify",
    tech: ["React", "Vite", "Spotify API", "PKCE OAuth",],
    demoUrl: "/videos/spotify-demo.mp4",
  },
  {
    id: "inta",
    tech: ["React", "Vite", "Tailwind", "Chart.js", "React Router"],
    demoUrl: "/videos/inta-demo.mp4",
  },
];




export default function Projects() {
     const { t } = useTranslation();

return (
<section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold mb-12 font-poppins"> {t("projectsSection.title")}</h2>
<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
{projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={t(`projects.${p.id}.title`)}
            description={t(`projects.${p.id}.description`)}
            tech={p.tech}
            demoUrl={p.demoUrl}
          />
        ))}
</div>
</section>
);
}