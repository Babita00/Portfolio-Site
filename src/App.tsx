import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience/>
         <Projects />
        <Skills/>
        <Contact />
      </main>
    </div>
  );
}

export default App;