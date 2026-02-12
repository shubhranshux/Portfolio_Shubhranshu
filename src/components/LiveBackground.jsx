import { useTheme } from '../context/ThemeContext';

const LiveBackground = () => {
  const { isDark } = useTheme();

  return (
    <div 
      className={`fixed inset-0 -z-50 overflow-hidden transition-colors duration-700 ${
        isDark ? 'bg-[#0a0a0a]' : 'bg-[#f8fafc]'
      }`}
    >
      {/* Decorative Gradient Mesh (Subtle backing) */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.2), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* === GEOMETRIC SHAPES CLUSTER (Right Side) === */}
      <div className="absolute top-1/2 right-[-10%] md:right-[5%] transform -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-80 md:opacity-100 scale-75 md:scale-100">
        
        {/* 1. Large Blue/Purple Fluid Blob (The "Liquid" Base) */}
        <div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] opacity-90 animate-morph-slow"
          style={{
            background: isDark 
              ? 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' 
              : 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            filter: 'blur(40px)', // Soften it to look like the background fluid
          }}
        />

        {/* 2. Main Blue/Indigo Abstract Shape (Sharp, Morphing) */}
        <div 
           className="absolute top-[10%] right-[10%] w-[350px] h-[400px] animate-morph-medium animate-float-slow"
           style={{
             background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
             borderRadius: '43% 57% 75% 25% / 28% 54% 46% 72%',
             boxShadow: 'inset 20px 20px 60px rgba(255,255,255,0.1), 20px 20px 60px rgba(0,0,0,0.3)',
           }}
        />

        {/* 3. Cyan Sphere (Front, Overlapping) */}
        <div 
          className="absolute bottom-[10%] right-[25%] w-[180px] h-[180px] rounded-full animate-float-medium"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #67e8f9, #06b6d4)',
            boxShadow: '10px 10px 30px rgba(6, 182, 212, 0.4), inset -10px -10px 30px rgba(0,0,0,0.2)',
            zIndex: 10
          }}
        />

        {/* 4. Purple/Pink Sphere (Left, Behind) */}
        <div 
          className="absolute top-[30%] left-[5%] w-[140px] h-[140px] rounded-full animate-float-slow"
          style={{
             background: 'radial-gradient(circle at 30% 30%, #f0abfc, #c026d3)',
             boxShadow: '10px 10px 30px rgba(192, 38, 211, 0.3), inset -10px -10px 30px rgba(0,0,0,0.2)',
             animationDelay: '1s'
          }}
        />

        {/* 5. Orange Accent Sphere (Small) */}
        <div 
          className="absolute top-[15%] right-[5%] w-[60px] h-[60px] rounded-full animate-float-fast"
          style={{
             background: 'radial-gradient(circle at 30% 30%, #fdba74, #ea580c)',
             boxShadow: '5px 5px 15px rgba(234, 88, 12, 0.3)',
             zIndex: 20
          }}
        />

         {/* 6. Ring/Torus Element */}
         <div 
            className="absolute bottom-[20%] left-[20%] w-[100px] h-[100px] rounded-full border-[12px] border-indigo-500/30 animate-spin-slow blur-[2px]"
            style={{ transform: 'rotateX(60deg)' }}
         />
      </div>

      {/* Grid Pattern Overlay - Low Opacity */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(${isDark ? '#999' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#999' : '#000'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

export default LiveBackground;
