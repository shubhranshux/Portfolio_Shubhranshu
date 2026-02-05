import { useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section relative">
      {/* Background orbs */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute right-0 top-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div className="space-y-8">
            <p className="text-lg text-white/60 leading-relaxed">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Feel free to reach out if you have any questions or just want to say hi!
            </p>

            <div className="space-y-4">
              <a href={`mailto:${personalInfo.email}`} className="glass-card p-5 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Email</p>
                  <p className="text-white font-medium group-hover:text-purple-400 transition-colors">{personalInfo.email}</p>
                </div>
              </a>

              <div className="glass-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Location</p>
                  <p className="text-white font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="icon-btn">
                <Github size={20} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn">
                <Linkedin size={20} />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="icon-btn">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-white/60 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
