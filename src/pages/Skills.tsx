import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import Reveal from '../components/Reveal';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaBootstrap,
  FaPhp,
  FaNodeJs,
  FaTools
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMysql } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-[#00758F]" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
  { name: 'PHP', icon: <FaPhp className="text-indigo-700" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 text-center">
        <Reveal>
            <h2 className="text-3xl font-bold mb-12 flex justify-center gap-2 items-center">
        <FaTools /> Habilidades
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            data-tooltip-id={skill.name}
            data-tooltip-content={skill.name}
            className="text-5xl hover:scale-110 transition-transform cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            {skill.icon}
            <Tooltip id={skill.name} className="my-tooltip" />
          </motion.div>
        ))}
      </div>
        </Reveal>
      

      
    </section>
  );
};

export default Skills;
