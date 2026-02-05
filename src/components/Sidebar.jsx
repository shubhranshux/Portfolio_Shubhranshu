import { FolderOpen, Folder, File, User, Briefcase, GraduationCap, Code, Mail, ChevronRight, ChevronDown, Github, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';
import { socialLinks } from '../data/portfolio';

const Sidebar = ({ activeTab, activeFile, setActiveFile, setActiveTab }) => {
  const [expandedFolders, setExpandedFolders] = useState({
    'personal-info': true,
    'projects': false,
    'education': false,
    'skills': false,
    'contacts': true,
  });

  const toggleFolder = (folder) => {
    setExpandedFolders(prev => ({ ...prev, [folder]: !prev[folder] }));
  };

  const handleFileClick = (file, tab) => {
    setActiveFile(file);
    setActiveTab(tab);
  };

  return (
    <aside className="w-64 glass border-r border-[#30363d] flex flex-col">
      {/* Explorer header */}
      <div className="p-3 border-b border-[#30363d]">
        <span className="text-xs text-[#8b949e] uppercase tracking-wider">Explorer</span>
      </div>

      {/* File tree */}
      <div className="flex-1 overflow-y-auto p-2">
        {/* Username */}
        <div className="px-3 py-2 text-sm font-semibold text-[#c9d1d9]">
          shubhranshux
        </div>

        {/* Personal Info Folder */}
        <div className="mt-2">
          <div 
            className="tree-item flex items-center gap-2"
            onClick={() => toggleFolder('personal-info')}
          >
            {expandedFolders['personal-info'] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            {expandedFolders['personal-info'] ? <FolderOpen size={16} className="folder-personal" /> : <Folder size={16} className="folder-personal" />}
            <span>personal-info</span>
          </div>
          
          {expandedFolders['personal-info'] && (
            <div className="ml-4 mt-1 space-y-1">
              <div 
                className={`tree-item flex items-center gap-2 ${activeFile === 'bio' ? 'active' : ''}`}
                onClick={() => handleFileClick('bio', '_hello')}
              >
                <File size={14} className="text-[#f9826c]" />
                <span>bio</span>
              </div>
              <div 
                className={`tree-item flex items-center gap-2 ${activeFile === 'interests' ? 'active' : ''}`}
                onClick={() => handleFileClick('interests', '_about-me')}
              >
                <File size={14} className="text-[#f9826c]" />
                <span>interests</span>
              </div>
              
              {/* Education subfolder */}
              <div 
                className="tree-item flex items-center gap-2"
                onClick={() => toggleFolder('education')}
              >
                {expandedFolders['education'] ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                {expandedFolders['education'] ? <FolderOpen size={14} className="folder-education" /> : <Folder size={14} className="folder-education" />}
                <span>education</span>
              </div>
              {expandedFolders['education'] && (
                <div className="ml-4 space-y-1">
                  <div 
                    className={`tree-item flex items-center gap-2 ${activeFile === 'college' ? 'active' : ''}`}
                    onClick={() => handleFileClick('college', '_about-me')}
                  >
                    <File size={14} className="text-[#a371f7]" />
                    <span>college</span>
                  </div>
                  <div 
                    className={`tree-item flex items-center gap-2 ${activeFile === 'certifications' ? 'active' : ''}`}
                    onClick={() => handleFileClick('certifications', '_about-me')}
                  >
                    <File size={14} className="text-[#a371f7]" />
                    <span>certifications</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Skills Folder */}
        <div className="mt-2">
          <div 
            className="tree-item flex items-center gap-2"
            onClick={() => toggleFolder('skills')}
          >
            {expandedFolders['skills'] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            {expandedFolders['skills'] ? <FolderOpen size={16} className="folder-skills" /> : <Folder size={16} className="folder-skills" />}
            <span>skills</span>
          </div>
          
          {expandedFolders['skills'] && (
            <div className="ml-4 mt-1 space-y-1">
              <div 
                className={`tree-item flex items-center gap-2 ${activeFile === 'languages' ? 'active' : ''}`}
                onClick={() => handleFileClick('languages', '_about-me')}
              >
                <File size={14} className="text-[#58a6ff]" />
                <span>languages</span>
              </div>
              <div 
                className={`tree-item flex items-center gap-2 ${activeFile === 'frameworks' ? 'active' : ''}`}
                onClick={() => handleFileClick('frameworks', '_about-me')}
              >
                <File size={14} className="text-[#58a6ff]" />
                <span>frameworks</span>
              </div>
            </div>
          )}
        </div>

        {/* Projects Folder */}
        <div className="mt-2">
          <div 
            className="tree-item flex items-center gap-2"
            onClick={() => { toggleFolder('projects'); setActiveTab('_projects'); }}
          >
            {expandedFolders['projects'] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            {expandedFolders['projects'] ? <FolderOpen size={16} className="folder-projects" /> : <Folder size={16} className="folder-projects" />}
            <span>projects</span>
          </div>
        </div>

        {/* Contacts Folder */}
        <div className="mt-2">
          <div 
            className="tree-item flex items-center gap-2"
            onClick={() => toggleFolder('contacts')}
          >
            {expandedFolders['contacts'] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            {expandedFolders['contacts'] ? <FolderOpen size={16} className="folder-contact" /> : <Folder size={16} className="folder-contact" />}
            <span>contacts</span>
          </div>
          
          {expandedFolders['contacts'] && (
            <div className="ml-4 mt-1 space-y-1">
              <div className={`tree-item flex items-center gap-2 ${activeFile === 'email' ? 'active' : ''}`}
                onClick={() => handleFileClick('email', '_contact-me')}
              >
                <Mail size={14} className="text-[#f778ba]" />
                <span>email</span>
              </div>
              <div className="tree-item flex items-center gap-2 text-[#8b949e]">
                <File size={14} />
                <span>shubhranshu1012@gmail.com</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Social Links */}
      <div className="p-4 border-t border-[#30363d]">
        <p className="text-xs text-[#8b949e] mb-3">find me in:</p>
        <div className="flex gap-3">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-[#8b949e] hover:text-[#c9d1d9] transition-colors">
            <Github size={18} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#8b949e] hover:text-[#c9d1d9] transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-[#8b949e] hover:text-[#c9d1d9] transition-colors">
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
