
import React from 'react';
import { ThemeCardProps } from '../../types';

const AuroraUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-6 flex flex-col justify-between text-white overflow-hidden relative ${className}`}>
        {/* Background */}
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-teal-500 via-cyan-400 to-blue-500 rounded-full filter blur-3xl opacity-40 animate-pulse [animation-delay:2s]"></div>
        
        {/* Content */}
        <div className="relative z-10 flex justify-between items-center">
            <h3 className="text-xl font-bold">Aurora</h3>
            <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M4 17v4M2 19h4M17 3v4M15 5h4M19 17v4M17 19h4" /></svg>
            </div>
        </div>

        <div className="relative z-10 text-center">
            <h2 className="text-4xl font-extrabold tracking-tighter">1,204</h2>
            <p className="text-white/70">Points Collected</p>
        </div>

        <div className="relative z-10 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <p className="font-semibold">Next Reward</p>
            <p className="text-sm text-white/70">Unlock at 2,000 points</p>
            <div className="w-full h-2 bg-white/20 rounded-full mt-2">
                <div className="w-3/5 h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
            </div>
        </div>
    </div>
  );
};
export default AuroraUI;