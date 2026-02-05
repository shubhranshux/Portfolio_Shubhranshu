import { personalInfo } from '../../data/portfolio';

const HelloTab = () => {
  const codeLines = [
    { num: 1, content: <span className="comment">/**</span> },
    { num: 2, content: <span className="comment"> * Welcome to my portfolio</span> },
    { num: 3, content: <span className="comment"> * I'm a Full Stack Developer</span> },
    { num: 4, content: <span className="comment"> */</span> },
    { num: 5, content: '' },
    { num: 6, content: <><span className="keyword">const</span> <span className="variable">developer</span> <span className="punctuation">=</span> <span className="punctuation">{'{'}</span></> },
    { num: 7, content: <><span className="ml-4 property">name</span><span className="punctuation">:</span> <span className="string">"{personalInfo.name}"</span><span className="punctuation">,</span></> },
    { num: 8, content: <><span className="ml-4 property">role</span><span className="punctuation">:</span> <span className="string">"{personalInfo.title}"</span><span className="punctuation">,</span></> },
    { num: 9, content: <><span className="ml-4 property">location</span><span className="punctuation">:</span> <span className="string">"{personalInfo.location}"</span><span className="punctuation">,</span></> },
    { num: 10, content: <><span className="ml-4 property">available</span><span className="punctuation">:</span> <span className="keyword">true</span><span className="punctuation">,</span></> },
    { num: 11, content: <span className="punctuation">{'}'}</span> },
    { num: 12, content: '' },
    { num: 13, content: <><span className="comment">// Currently working on GenAI & Web Apps</span></> },
    { num: 14, content: '' },
    { num: 15, content: <><span className="keyword">function</span> <span className="function">getSkills</span><span className="punctuation">()</span> <span className="punctuation">{'{'}</span></> },
    { num: 16, content: <><span className="ml-4 keyword">return</span> <span className="punctuation">[</span></> },
    { num: 17, content: <><span className="ml-8 string">"React"</span><span className="punctuation">,</span> <span className="string">"Node.js"</span><span className="punctuation">,</span> <span className="string">"Python"</span><span className="punctuation">,</span></> },
    { num: 18, content: <><span className="ml-8 string">"AWS"</span><span className="punctuation">,</span> <span className="string">"GenAI"</span><span className="punctuation">,</span> <span className="string">"LangChain"</span></> },
    { num: 19, content: <><span className="ml-4 punctuation">]</span><span className="punctuation">;</span></> },
    { num: 20, content: <span className="punctuation">{'}'}</span> },
  ];

  return (
    <div className="flex h-full">
      {/* Code Editor */}
      <div className="flex-1 p-6">
        <div className="glass-card p-6 h-full">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#30363d]">
            <div className="w-3 h-3 rounded-full bg-[#f85149]" />
            <div className="w-3 h-3 rounded-full bg-[#f0883e]" />
            <div className="w-3 h-3 rounded-full bg-[#3fb950]" />
            <span className="ml-3 text-sm text-[#8b949e]">personal-info.js</span>
          </div>
          
          <div className="code-line space-y-1">
            {codeLines.map((line) => (
              <div key={line.num} className="flex">
                <span className="line-number">{line.num}</span>
                <span>{line.content}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Welcome Message */}
      <div className="w-96 p-6 border-l border-[#30363d]">
        <div className="mb-8">
          <p className="text-[#8b949e] text-sm mb-2">Hi there! I am</p>
          <h1 className="text-4xl font-bold gradient-text mb-2">{personalInfo.name}</h1>
          <p className="text-xl text-[#58a6ff]">&gt; {personalInfo.title}</p>
        </div>

        <div className="glass-card p-5 mb-6">
          <p className="text-sm text-[#8b949e] mb-3">// find my profile on GitHub:</p>
          <p className="text-[#c9d1d9] font-mono text-sm">
            <span className="keyword">const</span> <span className="variable">github</span> = <span className="string">"shubhranshux"</span>
          </p>
        </div>

        <div className="space-y-3">
          <a href="#_projects" className="block btn-primary text-center">
            _view-projects
          </a>
          <a href="#_contact-me" className="block btn-primary text-center opacity-70 hover:opacity-100">
            _contact-me
          </a>
        </div>

        {/* Blinking cursor */}
        <div className="mt-8 flex items-center gap-1 text-[#8b949e]">
          <span>&gt;</span>
          <span className="w-2 h-4 bg-[#58a6ff] cursor-blink" />
        </div>
      </div>
    </div>
  );
};

export default HelloTab;
