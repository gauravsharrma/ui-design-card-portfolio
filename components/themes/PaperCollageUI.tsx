
import React from 'react';
import { ThemeCardProps } from '../../types';

const PaperCollageUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-playfair rounded-lg p-4 flex flex-col justify-center bg-[#F3EFEA] relative overflow-hidden ${className}`}>
        {/* Base paper */}
        <div className="absolute inset-0 bg-repeat" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/paper.png')"}}></div>
        
        {/* Photo paper */}
        <div className="relative w-5/6 mx-auto bg-white p-2 shadow-lg transform -rotate-3 transition-transform hover:rotate-0 hover:scale-105">
            <img src="https://picsum.photos/seed/collage/300/200" alt="Collage element" className="w-full h-full object-cover" />
        </div>
        
        {/* Torn paper note */}
        <div className="relative w-2/3 bg-[#fffbe6] p-4 shadow-md mt-6 transform rotate-2 ml-auto transition-transform hover:rotate-0 hover:scale-105" style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 95% 98%, 90% 100%, 85% 97%, 80% 100%, 75% 98%, 0% 100%)'}}>
            <h3 className="text-xl font-bold text-slate-800">Field Notes</h3>
            <p className="text-sm text-slate-600 mt-1">A collection of thoughts from the wild.</p>
        </div>

        {/* Washi tape */}
        <div className="absolute top-1/4 left-0 w-16 h-8 bg-pink-300/70 opacity-80 transform -rotate-45 shadow-sm" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/washi.png')"}}></div>
    </div>
  );
};
export default PaperCollageUI;