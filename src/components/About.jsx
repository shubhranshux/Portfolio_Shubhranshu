import { Code, Cloud, Cpu, Zap } from 'lucide-react';
import { aboutMe, techStack } from '../data/portfolio';

const About = () => {
  const highlights = [
    { icon: Code, label: 'Full Stack', desc: 'React, Node.js, APIs', color: 'from-purple-500 to-pink-500' },
    { icon: Cpu, label: 'GenAI & ML', desc: 'LLMs, LangChain, RAG', color: 'from-cyan-500 to-blue-500' },
    { icon: Cloud, label: 'Cloud', desc: 'AWS, Docker, DevOps', color: 'from-green-500 to-teal-500' },
    { icon: Zap, label: 'Analytics', desc: 'Pandas, Alteryx', color: 'from-orange-500 to-yellow-500' },
  ];

  return (
    <section id="about" className="section relative">
      {/* Background orb */}
      <div className="absolute -left-40 top-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Info */}
          <div className="space-y-8">
            <div>
              <p className="text-purple-400 font-medium mb-2">About Me</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Passionate Developer &<br />
                <span className="gradient-text-cyan">AI Enthusiast</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">
                {aboutMe.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center glass-card p-4">
                <p className="text-3xl font-bold gradient-text">3+</p>
                <p className="text-sm text-white/50 mt-1">Projects</p>
              </div>
              <div className="text-center glass-card p-4">
                <p className="text-3xl font-bold gradient-text">8.2</p>
                <p className="text-sm text-white/50 mt-1">CGPA</p>
              </div>
              <div className="text-center glass-card p-4">
                <p className="text-3xl font-bold gradient-text">3</p>
                <p className="text-sm text-white/50 mt-1">Certs</p>
              </div>
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="glass-card p-6 group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{item.label}</h3>
                <p className="text-sm text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Progress */}
        <div className="mt-20 glass-card p-8">
          <h3 className="text-xl font-semibold text-white mb-8">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((tech, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-white/80 font-medium">{tech.name}</span>
                  <span className="text-purple-400 font-semibold">{tech.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${tech.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
