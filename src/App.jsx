import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import StarfieldBackground from './components/StarfieldBackground';
import { useTheme } from './context/ThemeContext';

function App() {
  const { isDark } = useTheme();
  
  return (
    <div className="min-h-screen relative">
      {/* Premium Starfield Background */}
      <StarfieldBackground />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
