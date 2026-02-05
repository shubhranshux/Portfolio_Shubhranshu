import { aboutMe, skills, education, certifications, techStack } from '../../data/portfolio';
import { Award, GraduationCap, Code } from 'lucide-react';

const AboutTab = ({ activeFile }) => {
  const renderEducation = () => (
    <div className="space-y-4">
      {education.map((edu) => (
        <div key={edu.id} className="glass-card p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#a371f7]/20 flex items-center justify-center">
              <GraduationCap size={20} className="text-[#a371f7]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-[#c9d1d9]">{edu.degree}</h3>
                {edu.current && (
                  <span className="px-2 py-0.5 text-xs bg-[#3fb950]/20 text-[#3fb950] rounded">current</span>
                )}
              </div>
              <p className="text-sm text-[#8b949e]">{edu.school}</p>
              <div className="flex gap-4 mt-2 text-xs text-[#8b949e]">
                <span>{edu.duration}</span>
                <span className="text-[#58a6ff]">{edu.grade}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCertifications = () => (
    <div className="grid grid-cols-2 gap-4">
      {certifications.map((cert) => (
        <a key={cert.id} href={cert.link} target="_blank" rel="noopener noreferrer" className="glass-card p-5 group">
          <div className="w-10 h-10 rounded-lg bg-[#f0883e]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Award size={20} className="text-[#f0883e]" />
          </div>
          <h3 className="font-medium text-[#c9d1d9] text-sm mb-1">{cert.title}</h3>
          <p className="text-xs text-[#8b949e]">{cert.issuer}</p>
        </a>
      ))}
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-6">
      {/* Languages */}
      <div>
        <h3 className="text-sm text-[#8b949e] mb-3 flex items-center gap-2">
          <Code size={14} /> Languages & Core
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.languages.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      {/* GenAI */}
      <div>
        <h3 className="text-sm text-[#8b949e] mb-3">// GenAI & LLMs</h3>
        <div className="flex flex-wrap gap-2">
          {skills.genai.map((skill, i) => (
            <span key={i} className="skill-tag" style={{ borderColor: 'rgba(63, 185, 80, 0.3)' }}>{skill}</span>
          ))}
        </div>
      </div>

      {/* Data Analytics */}
      <div>
        <h3 className="text-sm text-[#8b949e] mb-3">// Data Analytics</h3>
        <div className="flex flex-wrap gap-2">
          {skills.dataAnalytics.map((skill, i) => (
            <span key={i} className="skill-tag" style={{ borderColor: 'rgba(136, 146, 157, 0.3)' }}>{skill}</span>
          ))}
        </div>
      </div>

      {/* Frontend & Backend */}
      <div>
        <h3 className="text-sm text-[#8b949e] mb-3">// Web Development</h3>
        <div className="flex flex-wrap gap-2">
          {[...skills.frontend, ...skills.backend].map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      {/* Cloud & DevOps */}
      <div>
        <h3 className="text-sm text-[#8b949e] mb-3">// Cloud & DevOps</h3>
        <div className="flex flex-wrap gap-2">
          {[...skills.cloud, ...skills.devops].map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBio = () => (
    <div className="space-y-6">
      {/* Bio code style */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#30363d]">
          <div className="w-3 h-3 rounded-full bg-[#f85149]" />
          <div className="w-3 h-3 rounded-full bg-[#f0883e]" />
          <div className="w-3 h-3 rounded-full bg-[#3fb950]" />
          <span className="ml-3 text-sm text-[#8b949e]">about.md</span>
        </div>
        
        <div className="code-line text-sm leading-relaxed">
          <p className="text-[#8b949e] mb-4">
            <span className="text-[#a371f7]">#</span> About Me
          </p>
          <p className="text-[#c9d1d9] mb-4">{aboutMe.description}</p>
          <p className="text-[#8b949e] mb-2">
            <span className="text-[#a371f7]">##</span> Highlights
          </p>
          <ul className="space-y-1 text-[#c9d1d9]">
            {aboutMe.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-[#3fb950]">-</span> {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack Progress */}
      <div className="glass-card p-6">
        <h3 className="text-sm text-[#8b949e] mb-4">// proficiency levels</h3>
        <div className="space-y-4">
          {techStack.map((tech, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-[#c9d1d9]">{tech.name}</span>
                <span className="text-[#58a6ff]">{tech.percentage}%</span>
              </div>
              <div className="h-2 bg-[#21262d] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#58a6ff] to-[#a371f7] rounded-full transition-all duration-1000"
                  style={{ width: `${tech.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 h-full overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#c9d1d9] mb-2">
            <span className="text-[#8b949e]">// </span>
            {activeFile === 'bio' && 'About Me'}
            {activeFile === 'interests' && 'My Interests'}
            {activeFile === 'college' && 'Education'}
            {activeFile === 'certifications' && 'Certifications'}
            {activeFile === 'languages' && 'Skills & Technologies'}
            {activeFile === 'frameworks' && 'Frameworks & Tools'}
          </h2>
          <p className="text-sm text-[#8b949e]">
            personal-info / {activeFile}
          </p>
        </div>

        {/* Content based on active file */}
        {(activeFile === 'bio' || activeFile === 'interests') && renderBio()}
        {activeFile === 'college' && renderEducation()}
        {activeFile === 'certifications' && renderCertifications()}
        {(activeFile === 'languages' || activeFile === 'frameworks') && renderSkills()}
      </div>
    </div>
  );
};

export default AboutTab;
