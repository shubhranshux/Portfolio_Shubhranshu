import { skills } from '../data/portfolio';

const Skills = () => {
  const categories = [
    { name: 'Languages', data: skills.languages, color: 'border-purple-500/30 hover:border-purple-500' },
    { name: 'GenAI & LLMs', data: skills.genai, color: 'border-green-500/30 hover:border-green-500' },
    { name: 'Data Analytics', data: skills.dataAnalytics, color: 'border-cyan-500/30 hover:border-cyan-500' },
    { name: 'Frontend', data: skills.frontend, color: 'border-pink-500/30 hover:border-pink-500' },
    { name: 'Backend', data: skills.backend, color: 'border-orange-500/30 hover:border-orange-500' },
    { name: 'Cloud & DevOps', data: [...skills.cloud, ...skills.devops], color: 'border-blue-500/30 hover:border-blue-500' },
  ];

  return (
    <section id="skills" className="section relative">
      {/* Background accent */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium mb-2">My Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className={`glass-card p-6 border ${category.color} transition-colors`}>
              <h3 className="text-lg font-semibold text-white mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.data.map((skill, i) => (
                  <span key={i} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
