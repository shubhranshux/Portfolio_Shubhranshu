import { X } from 'lucide-react';

const TabBar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: '_hello', label: '_hello' },
    { id: '_about-me', label: '_about-me' },
    { id: '_projects', label: '_projects' },
    { id: '_contact-me', label: '_contact-me' },
  ];

  return (
    <div className="glass border-b border-[#30363d]">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab flex items-center gap-2 ${activeTab === tab.id ? 'active' : ''}`}
          >
            <span>{tab.label}</span>
            {activeTab === tab.id && (
              <X size={14} className="text-[#8b949e] hover:text-[#c9d1d9]" />
            )}
          </button>
        ))}
      </div>

      {/* Breadcrumb / File path */}
      <div className="px-4 py-2 text-xs text-[#8b949e] border-t border-[#30363d]/50">
        <span className="text-[#58a6ff]">shubhranshux</span>
        <span className="mx-2">/</span>
        <span>portfolio</span>
        <span className="mx-2">/</span>
        <span className="text-[#c9d1d9]">{activeTab}</span>
      </div>
    </div>
  );
};

export default TabBar;
