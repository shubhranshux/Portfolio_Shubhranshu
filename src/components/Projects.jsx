import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="section relative">
      {/* Background orbs */}
      <div className="absolute left-1/4 top-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute right-1/4 bottom-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group glass-card overflow-hidden">
              {/* Image placeholder with gradient */}
              <div className="h-48 bg-gradient-to-br from-purple-900/40 to-pink-900/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-500/80 text-white text-xs font-medium backdrop-blur-sm">
                    Featured
                  </div>
                )}

                {/* Quick links on hover */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-white/5 rounded-md text-white/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-12">
          <a href="https://github.com/shubhranshux" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group">
            View all on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
