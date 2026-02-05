import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * Premium Starfield Background with Enhanced Parallax
 * - Full-screen fixed background with depth layers
 * - Enhanced mouse parallax effect on desktop
 * - GPU-optimized CSS transforms
 * - Mobile-friendly with reduced motion
 */
export default function StarfieldBackground() {
  const containerRef = useRef(null);
  const { isDark } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Disable parallax on mobile for performance
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      // Calculate mouse position relative to center (-0.5 to 0.5)
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);
      
      setMousePos({ x, y });

      // Apply parallax to stars with different depths
      const stars = container.querySelectorAll(".star");
      stars.forEach((star, i) => {
        const depth = (i % 3) + 1; // 1, 2, or 3
        const moveX = x * (60 / depth);
        const moveY = y * (60 / depth);
        star.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate star data once - memoized positions
  const stars = useRef([...Array(150)].map((_, i) => {
    const depth = i % 3;
    const size = depth === 0 ? "1px" : depth === 1 ? "2px" : "3px";
    const duration = depth === 0 ? "100s" : depth === 1 ? "70s" : "45s";
    const opacity = depth === 0 ? 0.3 : depth === 1 ? 0.5 : 0.85;
    const isBlue = Math.random() > 0.75;
    const top = Math.random() * 150 - 25; // -25% to 125% for overflow
    const left = Math.random() * 100;

    return { size, duration, opacity, isBlue, top, left, depth };
  })).current;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden transition-colors duration-500"
      style={{
        background: isDark 
          ? 'radial-gradient(ellipse at 50% 0%, #0a0a1a 0%, #050505 50%, #000000 100%)' 
          : 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)'
      }}
    >
      {/* Stars with parallax */}
      {stars.map((star, i) => (
        <span
          key={i}
          className="star absolute rounded-full will-change-transform transition-transform duration-100 ease-out"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}vh`,
            left: `${star.left}vw`,
            opacity: isDark ? star.opacity : star.opacity * 0.25,
            backgroundColor: star.isBlue 
              ? (isDark ? '#60A5FA' : '#3B82F6')
              : (isDark ? '#ffffff' : '#64748B'),
            animation: `starDrift ${star.duration} linear infinite`,
            boxShadow: star.depth === 2 && isDark
              ? "0 0 8px rgba(96,165,250,0.9), 0 0 16px rgba(96,165,250,0.4)"
              : star.depth === 1 && isDark
                ? "0 0 4px rgba(255,255,255,0.3)"
                : "none",
          }}
        />
      ))}

      {/* Subtle nebula clouds */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl transition-transform duration-300 ease-out"
        style={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
          top: '10%',
          left: '20%',
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-3xl transition-transform duration-300 ease-out"
        style={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)',
          bottom: '20%',
          right: '15%',
          transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)`,
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-3xl transition-transform duration-300 ease-out"
        style={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(244, 114, 182, 0.25) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(219, 39, 119, 0.1) 0%, transparent 70%)',
          top: '50%',
          left: '60%',
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * 20}px)`,
        }}
      />

      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 100% 80% at 50% 30%, transparent, rgba(0,0,0,0.5) 100%)'
            : 'radial-gradient(ellipse 100% 80% at 50% 30%, transparent, rgba(226,232,240,0.3) 100%)'
        }}
      />
    </div>
  );
}
