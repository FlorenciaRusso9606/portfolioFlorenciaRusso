"use client";
import ProjectCard from "./ProjectCard";


const projects = [
{
title: "Red Social (TFI)",
description: "Aplicación web colaborativa full-stack con autenticación y sistema de interacciones.",
tech: ["React", "Node.js", "MongoDB", "JWT"],
demoUrl: "/videos/red-social-demo.mp4",
},
{
title: "E-commerce – La Chacra",
description: "E-commerce con carrito persistente, pagos y backend propio.",
tech: ["Next.js", "TypeScript", "Express", "PostgreSQL"],
demoUrl: "/videos/ecommerce-demo.mp4",
},
];


export default function Projects() {
return (
<section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold mb-12 font-poppins">Proyectos</h2>
<div className="grid md:grid-cols-2 gap-12">
{projects.map((p) => (
<ProjectCard key={p.title} {...p} />
))}
</div>
</section>
);
}