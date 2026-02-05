import { Heart, Github, Linkedin, Instagram, Mail, Download, Twitter } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  
  return (
    <footer 
      className="py-12 border-t"
      style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.08)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold gradient-text mb-1">Shubhranshu Behera</p>
            <p 
              className="text-sm"
              style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)' }}
            >
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <p 
            className="text-sm flex items-center gap-1"
            style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)' }}
          >
            Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> from {personalInfo.location}
          </p>

          <div className="flex gap-3">
            {/* Resume Download */}
            <a 
              href="/resume.pdf" 
              download="Shubhranshu_Behera_Resume.pdf"
              className="icon-btn w-10 h-10"
              title="Download Resume"
              style={{
                background: isDark ? 'rgba(96, 165, 250, 0.1)' : 'rgba(37, 99, 235, 0.1)',
                borderColor: isDark ? 'rgba(96, 165, 250, 0.3)' : 'rgba(37, 99, 235, 0.3)',
              }}
            >
              <Download size={18} style={{ color: isDark ? '#60A5FA' : '#2563EB' }} />
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="icon-btn w-10 h-10">
              <Github size={18} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn w-10 h-10">
              <Linkedin size={18} />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="icon-btn w-10 h-10">
              <Instagram size={18} />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="icon-btn w-10 h-10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href={socialLinks.email} className="icon-btn w-10 h-10">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

