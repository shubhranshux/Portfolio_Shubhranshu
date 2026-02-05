import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports hover (not touch)
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    setIsVisible(true);

    // Smooth ring follow animation
    let animationId;
    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;
      
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      animationId = requestAnimationFrame(animateRing);
    };
    animateRing();

    const moveCursor = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnter = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, .clickable')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, .clickable')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small subtle dot */}
      <div 
        ref={dotRef} 
        style={{
          width: isHovering ? '6px' : '5px',
          height: isHovering ? '6px' : '5px',
          background: 'rgba(96, 165, 250, 0.8)',
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease, height 0.2s ease',
        }}
      />
      {/* Subtle trailing ring */}
      <div 
        ref={ringRef} 
        style={{
          width: isHovering ? '40px' : '28px',
          height: isHovering ? '40px' : '28px',
          border: `1px solid rgba(96, 165, 250, ${isHovering ? '0.4' : '0.25'})`,
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;
