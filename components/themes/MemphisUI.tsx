
import React from 'react';
import { ThemeCardProps } from '../../types';

const MemphisUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-fira-code rounded-lg p-4 flex flex-col justify-between bg-[#F8E54A] border-4 border-black text-black overflow-hidden relative ${className}`}>
        {/* Background shapes */}
        <div className="absolute -top-4 -left-8 w-24 h-24 bg-[#FF4E8D] rounded-full opacity-80"></div>
        <div className="absolute -bottom-10 -right-6 w-28 h-28 border-8 border-black transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-0 w-12 h-6 bg-[#00BFA5]"></div>
        
        <div className="relative z-10">
            <h3 className="text-3xl font-black bg-white inline-block p-2 border-2 border-black">ZOWIE!</h3>
        </div>

        <div className="relative z-10 w-3/4 self-center p-3 bg-white border-2 border-black text-center">
            <p className="font-bold">A Radical Design Experience.</p>
        </div>

        <button className="relative z-10 w-full p-3 bg-[#00BFA5] text-white font-bold text-lg border-2 border-black hover:bg-[#FF4E8D] hover:text-black transition-colors">
            Get Funky
        </button>
    </div>
  );
};
export default MemphisUI;