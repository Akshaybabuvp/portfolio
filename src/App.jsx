import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ProjectsTwo from './components/ProjectTwo';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ProjectsTwo />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
