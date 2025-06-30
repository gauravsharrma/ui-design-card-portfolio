
import React from 'react';
import { ThemeCardProps } from '../../types';

const HolographicUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-orbitron rounded-2xl p-1 flex flex-col bg-black overflow-hidden relative group ${className}`}>
      {/* Iridescent Border */}
      <div className="absolute inset-0 z-0 opacity-60 group-hover:opacity-100 transition-opacity" style={{background: 'conic-gradient(from 180deg at 50% 50%, #FF00FF 0deg, #00FFFF 120deg, #FFFF00 240deg, #FF00FF 360deg)', animation: 'spin 4s linear infinite'}}></div>
      <div className="m-0.5 rounded-[14px] p-6 h-full w-full bg-gray-900/80 backdrop-blur-sm flex flex-col justify-between relative text-white">
        <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold uppercase tracking-widest">HOLO-CARD</h3>
            <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00FFFF]"></div>
        </div>

        <div className="text-center">
            <div className="w-32 h-32 mx-auto border-2 border-white/30 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-30" style={{background: 'linear-gradient(45deg, #FF00FF, #00FFFF, #FFFF00)', animation: 'spin 2s linear infinite'}}></div>
                <p className="relative z-10 text-5xl font-black">X7</p>
            </div>
            <p className="mt-4 text-white/70">Access Key</p>
        </div>

        <div className="text-center text-xs text-white/50 font-fira-code">
            <p>ID: 7B-3A-9C-E4-F0-1D</p>
            <p>STATUS: <span className="text-green-400">ACTIVE</span></p>
        </div>
      </div>
    </div>
  );
};
export default HolographicUI;