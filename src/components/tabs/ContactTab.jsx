import { useState } from 'react';
import { personalInfo, socialLinks } from '../../data/portfolio';
import { Send, Github, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const ContactTab = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  // Code preview
  const codeLines = [
    { num: 1, content: <><span className="keyword">const</span> <span className="variable">button</span> = <span className="function">document</span>.<span className="property">querySelector</span>(<span className="string">'#sendBtn'</span>);</> },
    { num: 2, content: '' },
    { num: 3, content: <><span className="keyword">const</span> <span className="variable">message</span> = <span className="punctuation">{'{'}</span></> },
    { num: 4, content: <><span className="ml-4 property">name</span>: <span className="string">"{formData.name || 'Your Name'}"</span>,</> },
    { num: 5, content: <><span className="ml-4 property">email</span>: <span className="string">"{formData.email || ''}"</span>,</> },
    { num: 6, content: <><span className="ml-4 property">message</span>: <span className="string">""</span>,</> },
    { num: 7, content: <><span className="ml-4 property">date</span>: <span className="string">"{new Date().toDateString()}"</span></> },
    { num: 8, content: <><span className="punctuation">{'}'}</span></> },
    { num: 9, content: '' },
    { num: 10, content: <><span className="variable">button</span>.<span className="function">addEventListener</span>(<span className="string">'click'</span>, () <span className="keyword">=&gt;</span> <span className="punctuation">{'{'}</span></> },
    { num: 11, content: <><span className="ml-4 function">form</span>.<span className="property">send</span>(<span className="variable">message</span>);</> },
    { num: 12, content: <><span className="punctuation">{'}'}</span>)</> },
  ];

  return (
    <div className="flex h-full">
      {/* Left - Contact Info & Form */}
      <div className="flex-1 border-r border-[#30363d]">
        {/* Contacts tree */}
        <div className="p-4 border-b border-[#30363d]">
          <p className="text-xs text-[#8b949e] mb-3">contacts</p>
          <div className="space-y-2 text-sm">
            <p className="text-[#8b949e]">
              <span className="text-[#f778ba]">@</span> {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Find me also in */}
        <div className="p-4 border-b border-[#30363d]">
          <p className="text-xs text-[#8b949e] mb-3">find-me-also-in</p>
          <div className="space-y-3">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#8b949e] hover:text-[#c9d1d9] transition-colors">
              <Github size={16} /> GitHub
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#8b949e] hover:text-[#c9d1d9] transition-colors">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#8b949e] hover:text-[#c9d1d9] transition-colors">
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-[#8b949e] mb-2">_name:</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-[#c9d1d9] placeholder-[#484f58] focus:outline-none focus:border-[#58a6ff] transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm text-[#8b949e] mb-2">_email:</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-[#c9d1d9] placeholder-[#484f58] focus:outline-none focus:border-[#58a6ff] transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm text-[#8b949e] mb-2">_message:</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-[#c9d1d9] placeholder-[#484f58] focus:outline-none focus:border-[#58a6ff] transition-colors resize-none"
                placeholder="your message here..."
              />
            </div>

            <button
              type="submit"
              className="btn-primary flex items-center gap-2"
            >
              submit-message
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>

      {/* Right - Code Preview */}
      <div className="flex-1 p-6">
        <div className="glass-card p-6 h-full">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#30363d]">
            <div className="w-3 h-3 rounded-full bg-[#f85149]" />
            <div className="w-3 h-3 rounded-full bg-[#f0883e]" />
            <div className="w-3 h-3 rounded-full bg-[#3fb950]" />
            <span className="ml-3 text-sm text-[#8b949e]">contact.js</span>
          </div>

          <div className="code-line space-y-1 text-sm">
            {codeLines.map((line) => (
              <div key={line.num} className="flex">
                <span className="line-number">{line.num}</span>
                <span>{line.content}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTab;
