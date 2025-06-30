
import React from 'react';
import { ThemeCardProps } from '../../types';

const SkeuomorphismUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-4 flex flex-col justify-start bg-[#DCCDA5] border-[16px] border-[#8B4513] shadow-[inset_0_0_15px_rgba(0,0,0,0.5),0_10px_20px_rgba(0,0,0,0.4)] ${className}`} style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/leather.png')"}}>
      <div className="w-full h-full bg-gradient-to-b from-[#F5EEDC] to-[#E8DDCB] p-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] relative">
        {/* Binder rings */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/10 to-transparent"></div>
        <div className="absolute -left-2 top-1/4 h-6 w-4 rounded-r-full bg-[#c0c0c0] shadow-[inset_-2px_0px_2px_rgba(0,0,0,0.3)]"></div>
        <div className="absolute -left-2 top-1/2 h-6 w-4 rounded-r-full bg-[#c0c0c0] shadow-[inset_-2px_0px_2px_rgba(0,0,0,0.3)]"></div>
        
        <div className="text-center mb-4">
            <h3 className="text-2xl text-[#5a3e2b]" style={{fontFamily: "'Playfair Display', serif"}}>My Notes</h3>
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#c44d56] to-transparent mt-1"></div>
        </div>

        <div className="space-y-4 text-lg text-blue-800" style={{fontFamily: "'Caveat', cursive"}}>
            <p className="border-b border-blue-200 pb-1">□ Call the electrician</p>
            <p className="border-b border-blue-200 pb-1">□ Finish design portfolio</p>
            <p className="border-b border-blue-200 pb-1 opacity-50 line-through">□ Water the plants</p>
        </div>
        
        <div className="absolute bottom-4 right-4">
            <button className="px-4 py-2 bg-gradient-to-b from-[#789e4a] to-[#5e8533] text-white rounded-md shadow-[0_2px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] border border-[#4d6b2a] active:scale-95 active:shadow-inner">
                Add Note
            </button>
        </div>
      </div>
    </div>
  );
};
export default SkeuomorphismUI;