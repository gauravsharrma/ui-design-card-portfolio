
import React from 'react';
import { ThemeCardProps } from '../../types';

const KineticTypographyUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-6 flex flex-col justify-center bg-black text-white overflow-hidden relative ${className}`}>
        <h1 className="absolute top-8 left-6 text-8xl font-black text-white/30 tracking-tighter -translate-x-1/4">MOTION</h1>
        <h1 className="relative z-10 text-7xl font-black text-white tracking-tighter">MOVE</h1>
        <h1 className="relative z-20 text-5xl font-bold text-yellow-300 tracking-normal ml-8 -mt-4">MENT</h1>
        <h1 className="absolute bottom-12 right-6 text-9xl font-black text-white/20 tracking-tighter translate-x-1/4">DESIGN</h1>
    </div>
  );
};
export default KineticTypographyUI;