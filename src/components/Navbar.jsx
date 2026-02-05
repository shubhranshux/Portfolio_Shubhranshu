import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex items-center justify-between ${isScrolled ? 'glass rounded-full px-6 py-3' : ''}`}>
            {/* Logo */}
            <a href="#" className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Shubhranshu
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(link.id)}
                >
                  {link.label}
                </a>
              ))}

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="flex items-center gap-2 ml-4 px-3 py-1.5 rounded-full text-sm transition-all"
                style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
                aria-label="Toggle theme"
              >
                <span className={`transition-opacity ${isDark ? 'opacity-50' : 'opacity-100 font-medium'}`} style={{ color: 'var(--text-secondary)' }}>☀️</span>
                <div className={`w-10 h-5 rounded-full relative transition-colors ${isDark ? 'bg-blue-500' : 'bg-gray-300'}`}>
                  <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all shadow-md ${isDark ? 'right-0.5' : 'left-0.5'}`} />
                </div>
                <span className={`transition-opacity ${isDark ? 'opacity-100 font-medium' : 'opacity-50'}`} style={{ color: 'var(--text-secondary)' }}>🌙</span>
              </button>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Download Resume Button */}
              <a 
                href="/resume.pdf" 
                download="Shubhranshu_Behera_Resume.pdf"
                className="flex items-center gap-2 py-2.5 px-5 rounded-full text-sm font-medium transition-all hover:scale-105"
                style={{
                  background: isDark ? 'rgba(96, 165, 250, 0.1)' : 'rgba(37, 99, 235, 0.1)',
                  border: `1px solid ${isDark ? 'rgba(96, 165, 250, 0.3)' : 'rgba(37, 99, 235, 0.3)'}`,
                  color: isDark ? '#60A5FA' : '#2563EB',
                }}
              >
                <Download size={16} />
                Resume
              </a>
              
              <a href="#contact" className="btn-primary text-sm py-2.5 px-6">
                Contact Me
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-3 rounded-xl transition-all"
              style={{ 
                background: 'var(--glass-bg)', 
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)'
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Separate from nav for proper z-index */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Menu Panel */}
          <div 
            className="absolute top-20 left-4 right-4 rounded-2xl p-6 animate-fade-in-up"
            style={{ 
              background: isDark ? 'rgba(17, 17, 17, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              border: '1px solid var(--glass-border)',
              backdropFilter: 'blur(20px)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="block py-4 px-5 rounded-xl text-lg font-medium transition-all hover:bg-white/10"
                  style={{ 
                    color: activeSection === link.id ? 'var(--accent-hover)' : 'var(--text-primary)',
                    background: activeSection === link.id ? 'rgba(96, 165, 250, 0.1)' : 'transparent'
                  }}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Divider */}
              <div className="my-2 border-t" style={{ borderColor: 'var(--glass-border)' }} />

              {/* Theme Toggle in Mobile */}
              <button 
                onClick={toggleTheme}
                className="flex items-center justify-between w-full px-5 py-4 rounded-xl transition-all hover:bg-white/5"
              >
                <span style={{ color: 'var(--text-secondary)' }}>Theme</span>
                <div className="flex items-center gap-3">
                  <span className={`text-lg ${isDark ? 'opacity-50' : 'opacity-100'}`}>☀️</span>
                  <div className={`w-12 h-6 rounded-full relative transition-colors ${isDark ? 'bg-blue-500' : 'bg-gray-300'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-md ${isDark ? 'right-1' : 'left-1'}`} />
                  </div>
                  <span className={`text-lg ${isDark ? 'opacity-100' : 'opacity-50'}`}>🌙</span>
                </div>
              </button>

              {/* Contact CTA */}
              <a 
                href="#contact" 
                className="btn-primary text-center mt-3 py-4 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
