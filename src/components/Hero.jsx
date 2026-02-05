import { Github, Instagram, Linkedin } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Geometric decorations */}
      <div 
        className="absolute top-[15%] right-[15%] w-24 h-24 rotate-45 border rounded-lg"
        style={{ 
          borderColor: isDark ? 'rgba(161, 161, 170, 0.15)' : 'rgba(37, 99, 235, 0.1)',
          background: isDark ? 'transparent' : 'rgba(37, 99, 235, 0.02)'
        }}
      />
      <div 
        className="absolute bottom-[20%] right-[25%] w-16 h-16 border rounded"
        style={{ 
          borderColor: isDark ? 'rgba(161, 161, 170, 0.15)' : 'rgba(124, 58, 237, 0.1)',
          background: isDark ? 'transparent' : 'rgba(124, 58, 237, 0.02)'
        }}
      />
      <div 
        className="absolute top-[60%] right-[8%] w-3 h-3 rounded-full"
        style={{ background: isDark ? 'rgba(161, 161, 170, 0.3)' : 'rgba(37, 99, 235, 0.2)' }}
      />
      <div className="absolute top-[40%] right-[12%] flex gap-1.5">
        {[1,2,3].map(i => (
          <div 
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ background: isDark ? 'rgba(161, 161, 170, 0.3)' : 'rgba(37, 99, 235, 0.2)' }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl space-y-8">
          {/* Main Heading */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span style={{ color: isDark ? '#E5E7EB' : '#111827' }}>Hi, I'm a </span>
              <span style={{ color: isDark ? '#60A5FA' : '#2563EB' }}>CS Enthusiast</span>
              <span style={{ color: isDark ? '#E5E7EB' : '#111827' }}> and</span>
              <br />
              <span className="gradient-text">full-stack developer</span>
            </h1>
          </div>

          {/* Description */}
          <p 
            className="text-lg leading-relaxed max-w-lg"
            style={{ color: isDark ? '#9CA3AF' : '#4B5563' }}
          >
            I'm currently into Generative AI, frontend Dev, backend Dev. Building innovative web applications with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="btn-primary"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="btn-secondary"
            >
              Contact Me
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12">
            <a 
              href="#about" 
              className="inline-flex items-center gap-2 transition-colors text-sm"
              style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
              onMouseEnter={(e) => e.target.style.color = isDark ? '#60A5FA' : '#2563EB'}
              onMouseLeave={(e) => e.target.style.color = isDark ? '#9CA3AF' : '#6B7280'}
            >
              <span>Scroll Down</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-24 max-w-2xl">
          <div 
            className="relative rounded-xl p-8"
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, rgba(255,255,255, 0.02), rgba(96, 165, 250, 0.03))' 
                : 'linear-gradient(135deg, rgba(255,255,255, 0.8), rgba(37, 99, 235, 0.05))',
              border: `1px solid ${isDark ? 'rgba(255,255,255, 0.08)' : 'rgba(37, 99, 235, 0.15)'}`,
              backdropFilter: 'blur(20px)',
              boxShadow: isDark ? 'none' : '0 8px 32px rgba(37, 99, 235, 0.08)'
            }}
          >
            <span 
              className="absolute -top-3 left-6 text-5xl font-serif"
              style={{ 
                background: isDark 
                  ? 'linear-gradient(135deg, #60A5FA, #A78BFA)' 
                  : 'linear-gradient(135deg, #2563EB, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                opacity: 0.8
              }}
            >"</span>
            <p 
              className="text-lg leading-relaxed pl-4 italic"
              style={{ color: isDark ? '#9CA3AF' : '#4B5563' }}
            >
              Control can sometimes be an illusion.<br />
              But sometimes you need illusion to gain control.
            </p>
            <span 
              className="absolute -bottom-6 right-6 text-5xl font-serif"
              style={{ 
                background: isDark 
                  ? 'linear-gradient(135deg, #60A5FA, #A78BFA)' 
                  : 'linear-gradient(135deg, #2563EB, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                opacity: 0.8
              }}
            >"</span>
            <p 
              className="text-right mt-4 font-medium"
              style={{ color: isDark ? '#A1A1AA' : '#6B7280' }}
            >
              - Mr. Who
            </p>
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
