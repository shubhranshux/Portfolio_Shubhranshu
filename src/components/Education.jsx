import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useState, useRef } from 'react';

const Education = () => {
  const { isDark } = useTheme();
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate items sequentially
            education.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 300);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="section relative py-24" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p 
            className="font-medium mb-3 text-sm tracking-wider uppercase"
            style={{ color: isDark ? '#A78BFA' : '#7C3AED' }}
          >
            My Journey
          </p>
          <h2 
            className="text-4xl md:text-5xl font-bold"
            style={{ color: isDark ? '#E5E7EB' : '#111827' }}
          >
            Education <span className="gradient-text">Roadmap</span>
          </h2>
        </div>

        {/* Timeline Roadmap */}
        <div className="relative">
          {/* Animated vertical line */}
          <div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2"
            style={{
              background: isDark 
                ? 'linear-gradient(180deg, rgba(96, 165, 250, 0.5), rgba(167, 139, 250, 0.5), rgba(244, 114, 182, 0.3))'
                : 'linear-gradient(180deg, rgba(37, 99, 235, 0.4), rgba(124, 58, 237, 0.4), rgba(219, 39, 119, 0.3))',
            }}
          >
            {/* Animated glow effect on the line */}
            <div 
              className="absolute inset-0 w-full animate-pulse"
              style={{
                background: 'linear-gradient(180deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                animation: 'roadmapGlow 3s ease-in-out infinite',
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={edu.id} 
                className={`relative flex items-center gap-8 transition-all duration-700 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{
                  opacity: visibleItems.includes(index) ? 1 : 0,
                  transform: visibleItems.includes(index) 
                    ? 'translateY(0)' 
                    : `translateY(50px)`,
                }}
              >
                {/* Timeline Node */}
                <div 
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20"
                >
                  {/* Outer ring with pulse animation */}
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                      edu.current ? 'animate-pulse' : ''
                    }`}
                    style={{
                      background: edu.current 
                        ? 'linear-gradient(135deg, #60A5FA, #A78BFA, #F472B6)'
                        : isDark 
                          ? 'rgba(255, 255, 255, 0.05)' 
                          : 'rgba(255, 255, 255, 0.9)',
                      border: `2px solid ${edu.current 
                        ? 'transparent' 
                        : isDark 
                          ? 'rgba(96, 165, 250, 0.3)' 
                          : 'rgba(37, 99, 235, 0.3)'}`,
                      boxShadow: edu.current 
                        ? '0 0 30px rgba(96, 165, 250, 0.5), 0 0 60px rgba(167, 139, 250, 0.3)'
                        : isDark 
                          ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
                          : '0 4px 20px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <GraduationCap 
                      className="w-7 h-7"
                      style={{ 
                        color: edu.current 
                          ? 'white' 
                          : isDark 
                            ? '#60A5FA' 
                            : '#2563EB' 
                      }}
                    />
                  </div>
                  
                  {/* Connecting dot animation */}
                  {edu.current && (
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #60A5FA, #A78BFA)',
                        animation: 'roadmapPing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                      }}
                    />
                  )}
                </div>

                {/* Content Card */}
                <div 
                  className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}
                >
                  <div 
                    className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] group"
                    style={{
                      background: isDark 
                        ? 'rgba(255, 255, 255, 0.03)' 
                        : 'rgba(255, 255, 255, 0.8)',
                      border: `1px solid ${isDark 
                        ? 'rgba(255, 255, 255, 0.08)' 
                        : 'rgba(37, 99, 235, 0.15)'}`,
                      backdropFilter: 'blur(20px)',
                      boxShadow: isDark 
                        ? 'none' 
                        : '0 8px 32px rgba(37, 99, 235, 0.08)',
                    }}
                  >
                    {/* Year Badge */}
                    <div 
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
                      style={{
                        background: isDark 
                          ? 'rgba(96, 165, 250, 0.1)' 
                          : 'rgba(37, 99, 235, 0.1)',
                        color: isDark ? '#60A5FA' : '#2563EB',
                      }}
                    >
                      <Calendar size={12} />
                      {edu.duration}
                    </div>

                    {/* Degree Title */}
                    <div className="flex items-center gap-3 mb-2">
                      <h3 
                        className="text-lg font-bold"
                        style={{ color: isDark ? '#E5E7EB' : '#111827' }}
                      >
                        {edu.degree}
                      </h3>
                      {edu.current && (
                        <span 
                          className="px-2 py-0.5 text-xs rounded-full font-medium"
                          style={{
                            background: 'rgba(34, 197, 94, 0.15)',
                            color: '#22C55E',
                          }}
                        >
                          In Progress
                        </span>
                      )}
                    </div>

                    {/* School */}
                    <p 
                      className="flex items-center gap-2 mb-3"
                      style={{ color: isDark ? '#9CA3AF' : '#4B5563' }}
                    >
                      <MapPin size={14} />
                      {edu.school}
                    </p>

                    {/* Grade */}
                    {edu.grade && (
                      <div 
                        className="inline-block px-3 py-1 rounded-lg text-sm font-medium"
                        style={{
                          background: isDark 
                            ? 'linear-gradient(135deg, rgba(167, 139, 250, 0.15), rgba(244, 114, 182, 0.1))'
                            : 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(219, 39, 119, 0.08))',
                          color: isDark ? '#A78BFA' : '#7C3AED',
                        }}
                      >
                        {edu.grade}
                      </div>
                    )}

                    {/* Decorative gradient line at bottom */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: 'linear-gradient(90deg, #60A5FA, #A78BFA, #F472B6)',
                      }}
                    />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>

          {/* Road end marker */}
          <div 
            className="absolute left-8 md:left-1/2 -bottom-8 transform -translate-x-1/2 w-4 h-4 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #F472B6, #A78BFA)',
              boxShadow: '0 0 20px rgba(244, 114, 182, 0.5)',
            }}
          />
        </div>
      </div>

      {/* Custom keyframes via style tag */}
      <style>{`
        @keyframes roadmapPing {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          75%, 100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
        
        @keyframes roadmapGlow {
          0%, 100% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
