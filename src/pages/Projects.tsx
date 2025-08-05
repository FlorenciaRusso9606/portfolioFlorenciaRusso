import { motion } from 'framer-motion';
import { FaRocket } from "react-icons/fa6";
import Reveal from '../components/Reveal';
const projects = [
  {
    title: 'Movie Tracker',
    image: '/img/movie-tracker.png',
    stack: ['React', 'TypeScript', 'Node.js'],
    demo: 'https://movie-tracker.vercel.app',
    github: 'https://github.com/flor/movie-tracker',
    featured: true,
  },
  {
    title: 'ToDo App',
    image: '/img/todo.png',
    stack: ['React', 'Firebase'],
    demo: 'https://todo-flor.vercel.app',
    github: 'https://github.com/flor/todo',
    featured: true,
  },
  {
    title: 'Clima App',
    image: '/img/weather.png',
    stack: ['JS', 'OpenWeather API'],
    demo: '#',
    github: '#',
    featured: false,
  },
];

const Projects = () => {
  const destacados = projects.filter(p => p.featured);
  const otros = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 text-center">
        <Reveal>
            <h2 className="text-3xl font-bold mb-12 flex justify-center gap-2 items-center"><FaRocket /> Proyectos</h2>

      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-[var(--primary-color)]">⭐ Destacados</h3>
        <div className="grid gap-8 md:grid-cols-2">
          {destacados.map((project, i) => (
            <motion.div
              key={i}
              className="bg-[var(--bg-color)] shadow-md rounded-xl overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold">{project.title}</h4>
                <p className="text-sm my-2">{project.stack.join(', ')}</p>
                <div className="flex justify-center gap-4 mt-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-[var(--text-color)] hover:text-[var(--primary-hover-color)]"
                  >
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-[var(--primary-color)] hover:text-[var(--primary-hover-color)]"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {otros.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold my-10 text-[var(--primary-color)]">📂 Otros</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {otros.map((project, i) => (
                <motion.div
                  key={i}
                  className="bg-[var(--bg-color)] shadow-md rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                >
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-xl font-bold">{project.title}</h4>
                    <p className="text-sm my-2">{project.stack.join(', ')}</p>
                    <div className="flex justify-center gap-4 mt-2">
                      <a href={project.demo} target="_blank" className="hover:text-[var(--primary-color)]">
                        Demo
                      </a>
                      <a href={project.github} target="_blank" className="hover:text-[var(--primary-color)]">
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
        </Reveal>
      
    </section>
  );
};

export default Projects;
