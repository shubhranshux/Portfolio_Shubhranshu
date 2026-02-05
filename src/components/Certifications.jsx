import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolio';

const Certifications = () => {
  return (
    <section className="section relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium mb-2">Achievements</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 group hover:border-purple-500/50"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-white/50 text-sm mb-4">Issued by {cert.issuer}</p>
              
              <span className="inline-flex items-center gap-2 text-purple-400 text-sm group-hover:text-purple-300 transition-colors">
                View Certificate
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
