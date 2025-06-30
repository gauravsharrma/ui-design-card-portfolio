
import React from 'react';
import { ThemeCardProps } from '../../types';

const CyberpunkUI: React.FC<ThemeCardProps> = ({ className }) => {
  const GlitchText: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <div className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span className="absolute top-0 left-0 w-full h-full z-0 text-cyan-400 opacity-70 animate-pulse" style={{ clipPath: 'inset(20% 0 50% 0)' }}>{children}</span>
      <span className="absolute top-0 left-0 w-full h-full z-20 text-pink-500 opacity-70 animate-pulse" style={{ clipPath: 'inset(50% 0 20% 0)' }}>{children}</span>
    </div>
  );

  return (
    <div className={`aspect-[3/4] font-orbitron rounded-lg p-1 flex flex-col bg-black text-cyan-300 border-2 border-pink-500/50 shadow-[0_0_15px_rgba(219,39,119,0.6)] overflow-hidden ${className}`}
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}
    >
      <div className="p-4 bg-black/80 flex-grow flex flex-col justify-between relative">
        <div className="absolute top-2 right-2 text-xs font-mono text-yellow-300">
            [SYS_LINK_ESTABLISHED]
        </div>
        <div className="border-b-2 border-cyan-400/50 pb-2">
            <h3 className="text-2xl font-black uppercase text-pink-500">
                <GlitchText>NET.RUNNER</GlitchText>
            </h3>
            <p className="text-xs text-cyan-300 tracking-widest">_DECK_INTERFACE_v4.2</p>
        </div>
        
        <div className="font-fira-code text-sm space-y-2">
            <p>&gt; Accessing security node...</p>
            <p className="text-green-400">&gt; ICE bypassed. [2 layers remaining]</p>
            <p className="text-yellow-400">&gt; Warning: Trace detected. 45.7s</p>
        </div>

        <button className="w-full text-center p-2 bg-cyan-400 text-black font-bold uppercase transition-all duration-200 hover:bg-pink-500 hover:text-white"
          style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 10px) 100%, 10px 100%)' }}
        >
          Engage Black ICE
        </button>
      </div>
    </div>
  );
};

export default CyberpunkUI;
