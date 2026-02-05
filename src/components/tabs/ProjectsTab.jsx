import { projects, skills } from '../../data/portfolio';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { useState } from 'react';

const ProjectsTab = () => {
  const [selectedTech, setSelectedTech] = useState([]);

  const allTech = ['React', 'Python', 'JavaScript', 'Node.js', 'HTML', 'CSS'];

  const toggleTech = (tech) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const filteredProjects = selectedTech.length === 0 
    ? projects 
    : projects.filter(p => p.tech.some(t => selectedTech.includes(t)));

  return (
    <div className="flex h-full">
      {/* Left filter panel */}
      <div className="w-56 border-r border-[#30363d] p-4">
        <p className="text-xs text-[#8b949e] uppercase tracking-wider mb-4">Filter by Tech</p>
        
        <div className="space-y-2">
          {allTech.map((tech) => (
            <label key={tech} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedTech.includes(tech)}
                onChange={() => toggleTech(tech)}
                className="w-4 h-4 rounded border-[#30363d] bg-[#21262d] text-[#58a6ff] focus:ring-[#58a6ff] focus:ring-offset-0"
              />
              <span className="text-sm text-[#8b949e] group-hover:text-[#c9d1d9]">{tech}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-6">
          <p className="text-xs text-[#8b949e]">
            // showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group">
              {/* Project header */}
              <div className="h-40 bg-gradient-to-br from-[#21262d] to-[#161b22] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-[#30363d] group-hover:text-[#58a6ff] transition-colors" />
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-[#58a6ff]/20 text-[#58a6ff] text-xs rounded flex items-center gap-1">
                    <Sparkles size={12} />
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-[#8b949e] mb-1">
                  Project {project.id} <span className="text-[#30363d]">//</span> _{project.title.toLowerCase().replace(/\s+/g, '-')}
                </p>
                <h3 className="font-semibold text-[#c9d1d9] mb-3">{project.title}</h3>
                <p className="text-sm text-[#8b949e] line-clamp-2 mb-4">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-[#21262d] text-[#8b949e] rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 text-xs">
                    view-project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsTab;
