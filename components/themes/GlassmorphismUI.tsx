
import React from 'react';
import { ThemeCardProps } from '../../types';

const GlassmorphismUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-6 flex flex-col justify-between bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white ${className}`}>
        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-sm opacity-70">Now Playing</p>
        </div>
        
        <div className="text-center space-y-4">
            <div className="w-32 h-32 mx-auto rounded-lg bg-white/20 flex items-center justify-center shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
            </div>
            <div>
                <h3 className="text-2xl font-bold tracking-tight">Starlight</h3>
                <p className="opacity-80">Synthwave Dreams</p>
            </div>
        </div>

        <div className="flex items-center space-x-4">
            <span className="text-xs opacity-70">1:21</span>
            <div className="w-full h-1.5 bg-white/20 rounded-full">
                <div className="w-1/2 h-full bg-pink-400 rounded-full"></div>
            </div>
            <span className="text-xs opacity-70">3:45</span>
        </div>
    </div>
  );
};

export default GlassmorphismUI;
