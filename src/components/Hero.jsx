import { Github, Instagram, Linkedin, ArrowDown } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';
import LiveBackground from './LiveBackground';

const Hero = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <LiveBackground />
      
      {/* Decorative elements are now handled by LiveBackground, keeping clean layout */}


      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 pt-20 flex flex-col md:flex-row items-start md:items-center min-h-[80vh]">
        {/* Left Content */}
        <div className="max-w-3xl space-y-8 text-left md:w-1/2">
          {/* Main Heading with subtle backing for contrast */}
          <div className="relative z-10 inline-block">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                Shubhranshu
              </span>
              <span className="block text-4xl md:text-5xl mt-4 font-light text-foreground opacity-90">
                Full Stack Developer
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl leading-relaxed max-w-xl text-muted font-light drop-shadow-md">
            Crafting digital experiences with <span className="font-semibold text-blue-400">code</span> and <span className="font-semibold text-purple-400">creativity</span>. 
            Specializing in modern web technologies and AI-driven solutions.
          </p>

          {/* CTA Buttons - Styled to match background */}
          <div className="flex flex-wrap gap-6 pt-4">
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-md rounded-full overflow-hidden border border-white/20 transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.6)]"
            >
              <span className="relative z-10 font-semibold text-white">View Projects</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            <a 
              href="#contact" 
              className="group px-8 py-4 rounded-full border border-white/10 hover:border-white/30 transition-all bg-black/20 backdrop-blur-sm hover:bg-white/10"
            >
              <span className="font-medium text-foreground group-hover:text-purple-400 transition-colors">Contact Me</span>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-20 animate-bounce">
            <a 
              href="#about" 
              className="inline-flex flex-col items-center gap-2 text-muted hover:text-purple-400 transition-colors"
            >
              <span className="text-sm tracking-widest uppercase opacity-70">Scroll</span>
              <ArrowDown size={20} className="opacity-70" />
            </a>
          </div>
        </div>



      </div>

      {/* Social Links - Right Side */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {[
          { icon: Github, href: socialLinks.github },
          { icon: Instagram, href: socialLinks.instagram },
          { icon: Linkedin, href: socialLinks.linkedin },
        ].map(({ icon: Icon, href }, i) => (
          <a 
            key={i}
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: isDark ? 'rgba(255,255,255, 0.03)' : 'rgba(255,255,255, 0.8)',
              border: `1px solid ${isDark ? 'rgba(255,255,255, 0.08)' : 'rgba(37, 99, 235, 0.15)'}`,
              color: isDark ? '#9CA3AF' : '#4B5563',
              boxShadow: isDark ? 'none' : '0 4px 20px rgba(37, 99, 235, 0.08)'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = isDark ? '#60A5FA' : '#2563EB';
              e.target.style.borderColor = isDark ? 'rgba(96, 165, 250, 0.5)' : 'rgba(37, 99, 235, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = isDark ? '#9CA3AF' : '#4B5563';
              e.target.style.borderColor = isDark ? 'rgba(255,255,255, 0.08)' : 'rgba(37, 99, 235, 0.15)';
            }}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
