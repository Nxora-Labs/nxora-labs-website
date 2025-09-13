import React from 'react';

const HeroComponent = () => {
  const techIcons = [
    // Frontend Technologies
    { name: 'React', symbol: '⚛️', color: '#61DAFB' },
    { name: 'Vue.js', symbol: '💚', color: '#4FC08D' },
    { name: 'HTML', symbol: '📄', color: '#E34F26' },
    { name: 'CSS', symbol: '🎨', color: '#1572B6' },
    { name: 'Tailwind', symbol: '💨', color: '#06B6D4' },
    { name: 'TypeScript', symbol: '🔷', color: '#3178C6' },
    { name: 'JavaScript', symbol: '🟨', color: '#F7DF1E' },
    
    // Backend Technologies
    { name: 'Node.js', symbol: '🟢', color: '#339933' },
    { name: 'Python', symbol: '🐍', color: '#3776AB' },
    { name: 'PHP', symbol: '🐘', color: '#777BB4' },
    { name: 'Java', symbol: '☕', color: '#ED8B00' },
    { name: 'C#', symbol: '🔵', color: '#239120' },
    
    // Databases
    { name: 'MongoDB', symbol: '🍃', color: '#47A248' },
    { name: 'MySQL', symbol: '🐬', color: '#4479A1' },
    { name: 'PostgreSQL', symbol: '🐘', color: '#336791' },
    { name: 'Redis', symbol: '🔴', color: '#DC382D' },
    
    // Cloud & DevOps
    { name: 'AWS', symbol: '☁️', color: '#FF9900' },
    { name: 'Docker', symbol: '🐳', color: '#2496ED' },
    { name: 'Kubernetes', symbol: '⚓', color: '#326CE5' },
    { name: 'Git', symbol: '🌿', color: '#F05032' },
    
    // AI & ML
    { name: 'TensorFlow', symbol: '🧠', color: '#FF6F00' },
    { name: 'PyTorch', symbol: '🔥', color: '#EE4C2C' },
    { name: 'OpenAI', symbol: '🤖', color: '#412991' },
    { name: 'Jupyter', symbol: '📓', color: '#F37626' },
  ];

  return (
    <div 
      className="min-h-screen flex items-center justify-center overflow-hidden relative"
      style={{
        background: `
          radial-gradient(ellipse at center, 
            rgba(75, 0, 130, 0.9) 0%, 
            rgba(25, 25, 112, 0.9) 25%, 
            rgba(0, 0, 139, 0.8) 50%, 
            rgba(72, 61, 139, 0.7) 75%, 
            rgba(0, 0, 0, 0.9) 100%
          ),
          linear-gradient(45deg, 
            rgba(138, 43, 226, 0.3) 0%, 
            rgba(75, 0, 130, 0.2) 50%, 
            rgba(25, 25, 112, 0.3) 100%
          )
        `
      }}
    >
      {/* Enhanced Milky Way Stars */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => {
          const left = (i * 7.3429) % 100;
          const top = (i * 11.7841) % 100;
          const delay = (i * 0.123) % 4;
          const duration = 3 + ((i * 0.087) % 5);
          const size = i % 3 === 0 ? 'w-0.5 h-0.5' : i % 7 === 0 ? 'w-1 h-1' : 'w-px h-px';
          const opacity = i % 5 === 0 ? 'opacity-80' : i % 3 === 0 ? 'opacity-60' : 'opacity-30';
          
          return (
            <div
              key={i}
              className={`absolute ${size} bg-white rounded-full ${opacity} animate-pulse`}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                boxShadow: i % 7 === 0 ? '0 0 4px rgba(255, 255, 255, 0.8)' : 'none'
              }}
            />
          );
        })}
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-80"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              animation: `shootingStar 8s ease-in-out infinite`,
              animationDelay: `${i * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main container */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Expanded Orbital system with centered logo */}
        <div className="relative w-[800px] h-[800px] md:w-[900px] md:h-[900px] lg:w-[1000px] lg:h-[1000px]">
          {/* Central logo container */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            {/* NXORA LABS Logo with White Stroke */}
            <div
              className="relative"
              style={{
                filter: `
                  drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))
                  drop-shadow(0 0 16px rgba(255, 255, 255, 0.6))
                  drop-shadow(0 0 24px rgba(255, 255, 255, 0.3))
                `,
              }}
            >
              <img 
                src="/NEXORA_LOGO8_resized_for_business_card.png" 
                alt="NXORA LABS"
                className="h-24 md:h-32 lg:h-40 w-auto relative z-10"
                style={{
                  filter: 'brightness(1.1) contrast(1.2)',
                }}
              />
              {/* White stroke effect */}
              <img 
                src="/NEXORA_LOGO8_resized_for_business_card.png" 
                alt=""
                className="absolute top-0 left-0 h-24 md:h-32 lg:h-40 w-auto"
                style={{
                  filter: `
                    blur(1px) brightness(0) invert(1)
                    drop-shadow(1px 1px 0 white)
                    drop-shadow(-1px -1px 0 white)
                    drop-shadow(1px -1px 0 white)
                    drop-shadow(-1px 1px 0 white)
                  `,
                  zIndex: -1
                }}
              />
            </div>
          </div>
          
          {/* Milky Way inspired orbital rings */}
          <div className="absolute inset-0 border-2 rounded-full" style={{borderColor: 'rgba(255, 192, 203, 0.3)'}}></div>
          <div className="absolute inset-16 border-2 rounded-full" style={{borderColor: 'rgba(221, 160, 221, 0.25)'}}></div>
          <div className="absolute inset-32 border-2 rounded-full" style={{borderColor: 'rgba(186, 85, 211, 0.2)'}}></div>
          <div className="absolute inset-48 border-2 rounded-full" style={{borderColor: 'rgba(147, 112, 219, 0.15)'}}></div>
          <div className="absolute inset-64 border-2 rounded-full" style={{borderColor: 'rgba(123, 104, 238, 0.1)'}}></div>
          <div className="absolute inset-80 border-2 rounded-full" style={{borderColor: 'rgba(72, 61, 139, 0.08)'}}></div>

          {/* Orbiting tech icons with much larger spacing */}
          {techIcons.map((tech, index) => {
            // Create 6 different orbital rings with much larger spacing
            const orbitLevel = index % 6;
            const radius = 200 + (orbitLevel * 80); // Much larger spacing between orbits
            const animationDuration = 30 + (orbitLevel * 12); // Slower, more majestic rotation
            const delay = (index * 2);
            
            return (
              <div
                key={tech.name}
                className="absolute inset-0 animate-spin"
                style={{
                  animationDuration: `${animationDuration}s`,
                  animationDelay: `-${delay}s`,
                  animationTimingFunction: 'linear',
                }}
              >
                <div
                  className="absolute flex items-center justify-center"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) translateY(-${radius}px)`,
                  }}
                >
                  <div className="group relative">
                    <div 
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-xl md:text-2xl lg:text-4xl shadow-2xl transform hover:scale-125 transition-all duration-500 border-3 backdrop-blur-sm"
                      style={{
                        backgroundColor: `${tech.color}15`,
                        borderColor: tech.color,
                        boxShadow: `
                          0 0 20px ${tech.color}60, 
                          0 0 40px ${tech.color}40,
                          0 8px 32px rgba(0, 0, 0, 0.3)
                        `,
                        borderWidth: '2px'
                      }}
                    >
                      {tech.symbol}
                    </div>
                    
                    {/* Enhanced Tooltip */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-4 py-2 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-30 border border-purple-400/30"
                         style={{
                           backdropFilter: 'blur(10px)',
                           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
                         }}>
                      {tech.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Tagline */}
        <div className="mt-16 text-center z-10 max-w-5xl">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-white mb-8 font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Innovating the Future with Technology
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-purple-200 mb-10 font-light">
            Full-Stack Development • AI/ML Solutions • Cloud Computing • DevOps
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm lg:text-base text-purple-100 max-w-6xl mx-auto">
            {techIcons.map((tech, index) => (
              <span 
                key={tech.name} 
                className="px-4 py-2 rounded-full backdrop-blur-sm hover:scale-110 transition-all duration-300 border"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  backgroundColor: `${tech.color}20`,
                  borderColor: `${tech.color}60`,
                  boxShadow: `0 4px 15px ${tech.color}30`
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Milky Way Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-pink-400/15 via-purple-400/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-white/10 to-transparent rounded-full blur-xl"></div>
      </div>

      <style jsx>{`
        @keyframes shootingStar {
          0% { transform: translateX(-100px) translateY(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100px) translateY(100px); opacity: 0; }
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default HeroComponent;