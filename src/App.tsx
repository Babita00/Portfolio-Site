import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import TechStacks from './components/sections/TechStacks';
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
        <TechStacks/>
        <Contact />
      </main>
    </div>
  );
}

export default App;