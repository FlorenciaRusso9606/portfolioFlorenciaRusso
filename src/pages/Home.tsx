import { FaArrowRight } from 'react-icons/fa';
import Reveal from '../components/Reveal';

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden"
    >
     
      <div className="absolute inset-0 -z-10">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="var(--primary-color)"
            fillOpacity="0.3"
            d="M0,192L48,202.7C96,213,192,235,288,240C384,245,480,235,576,197.3C672,160,768,96,864,96C960,96,1056,160,1152,165.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Presentación */}
      <Reveal
        className="text-4xl sm:text-6xl font-bold mb-4"
      >
        Hola, soy <span className="text-[var(--primary-color)]">Flor Russo</span>
      </Reveal>

      <Reveal
        className="text-lg sm:text-xl max-w-xl"
      >
        Front-End Developer enfocada en accesibilidad, UX moderno y buenas prácticas.
      </Reveal>

      <Reveal
        className="mt-10"
      >

        <a
  href="#projects"
  className="inline-flex items-center gap-2 text-[var(--button-text-color)]  px-6 py-3 bg-[var(--primary-color)] font-semibold rounded-lg hover:scale-105 transition-transform"
>
  Ver proyectos <FaArrowRight />
</a>
      </Reveal>
    </section>
  );
};

export default Home;
