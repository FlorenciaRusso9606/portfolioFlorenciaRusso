import { FaReact } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const linkClass = `
  relative inline-block transition-all duration-300 hover:scale-105 
  text-[var(--primary-color)] hover:text-[var(--primary-hover-color)]
  before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2
  before:h-[2px] before:w-0 before:bg-[var(--primary-hover-color)]
  before:transition-all before:duration-300 hover:before:w-full
`;

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-[var(--navbar-bg)] shadow px-6 py-4 flex justify-between items-center">

    <a
      href="#home"
      className="flex items-center gap-2 text-xl font-bold text-[var(--primary-color)] hover:text-[var(--primary-hover-color)] hover:scale-105 transition-transform"
    >
      <FaReact className="text-2xl animate-spin-slow text-[var(--logo-color)]" />
      Flor Dev
    </a>

    <div className="space-x-10 text-md font-medium">
      <a href="#about" className={linkClass}>Sobre mí</a>
      <a href="#projects" className={linkClass}>Proyectos</a>
      <a href="#contact" className={linkClass}>Contacto</a>
      <ThemeToggle />
    </div>
  </nav>
);

export default Navbar;
