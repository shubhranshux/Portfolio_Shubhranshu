import { GitBranch, Check, AlertCircle } from 'lucide-react';

const StatusBar = () => {
  return (
    <footer className="status-bar px-4 py-1 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <GitBranch size={14} />
          <span>main</span>
        </div>
        <div className="flex items-center gap-1 text-green-400">
          <Check size={14} />
          <span>0 problems</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <span>UTF-8</span>
        <span>React + Vite</span>
        <span className="text-[#58a6ff]">⟨ ⟩ Portfolio v1.0</span>
      </div>
    </footer>
  );
};

export default StatusBar;
