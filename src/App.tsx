import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import ToastProvider from './components/ToastProvider';

function App() {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 bg-[var(--bg-color)] text-[var(--text-color)]">
      <Navbar />
      <ToastProvider/>
      <main className="flex-1">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
