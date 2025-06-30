
import React from 'react';
import { ThemeCardProps } from '../../types';

const BrutalistUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-times p-4 flex flex-col justify-between bg-yellow-300 text-black border-4 border-black ${className}`}>
      <div className="border-2 border-black p-2 flex justify-between items-center">
        <h1 className="text-3xl font-bold uppercase">System_Online</h1>
        <div className="w-10 h-10 bg-red-600 border-2 border-black"></div>
      </div>
      
      <div className="space-y-3">
        <p className="bg-white border-2 border-black p-2">This is information. It is important. Read it carefully.</p>
        <p className="font-mono text-sm">[LOG] User action detected.</p>
        <a href="#brutal" className="block text-blue-700 underline font-bold hover:bg-cyan-300">CLICK HERE NOW</a>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="h-12 bg-green-500 border-2 border-black"></div>
        <div className="h-12 bg-blue-500 border-2 border-black"></div>
        <div className="h-12 bg-pink-500 border-2 border-black"></div>
      </div>
    </div>
  );
};

export default BrutalistUI;
