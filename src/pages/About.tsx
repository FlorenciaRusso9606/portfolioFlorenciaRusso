import Reveal from '../components/Reveal';
import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaPaintBrush,
  FaRocket,
  FaCode,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaPlayCircle,
  FaReact,
  FaBook
} from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 text-center">
      <Reveal y={-30}>
        <h2 className="text-3xl font-bold mb-8">Sobre mí 💁‍♀️</h2>
      </Reveal>

      <Reveal>
        <p className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed text-balance">
          <span className="inline-flex items-center gap-2 justify-center">
            <FaLaptopCode className="text-[var(--primary-hover-color)]" />
            Soy Flor, desarrolladora front-end apasionada por crear interfaces que brillan.
          </span>
          <br />
          <span className="inline-flex items-center gap-2 justify-center">
            <FaPaintBrush className="text-pink-500" />
            Amante del diseño, el código limpio y los desafíos creativos.
          </span>
          <br />
          <span className="inline-flex items-center gap-2 justify-center">
            <FaRocket className="text-yellow-500" />
            En mis ratos libres experimento con IA y APIs locas.
          </span>
        </p>
      </Reveal>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Reveal delay={0.3}>
          <div className="bg-[var(--bg-color)] min-h-[260px] border border-[var(--border-color)] shadow-md rounded-lg p-6 w-full max-w-sm hover:scale-105 transition-transform">
            <h3 className="flex items-center gap-2 text-2xl font-semibold mb-4 text-[var(--primary-color)] group-hover:underline">
              <FaBriefcase />
              Experiencia
            </h3>
            <ul className="text-left text-md flex flex-col gap-5">
              <li className="flex items-center gap-2">
                <FaProjectDiagram className="text-indigo-500" />
                Proyecto freelance - 2024
              </li>
              <li className="flex items-center gap-2">
                <FaChalkboardTeacher className="text-blue-500" />
                Ayudante en curso de programación - 2023
              </li>
              <li className="flex items-center gap-2">
                <FaPaintBrush className="text-pink-500" />
                Diseño de interfaces para proyectos propios
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="bg-[var(--bg-color)] min-h-[260px] border border-[var(--border-color)] shadow-md rounded-lg p-6 w-full max-w-sm hover:scale-105 transition-transform">
            <h3 className="flex items-center gap-2 text-2xl font-semibold mb-4 text-[var(--primary-color)] group-hover:underline">
              <FaGraduationCap  />
              Estudios
            </h3>
            <ul className="text-left text-md flex flex-col gap-5">
              <li className="flex items-center gap-2">
                <FaCode className="text-purple-500" />
                Desarrollo Web Full Stack - 2023/2025
              </li>
              <li className="flex items-center gap-2">
                <FaBook className="text-rose-500" />
                Autodidacta en React, Tailwind y TypeScript
              </li>
              <li className="flex items-center gap-2">
                <FaPlayCircle className="text-yellow-500" />
                Amante de los cursos online y la práctica constante
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
