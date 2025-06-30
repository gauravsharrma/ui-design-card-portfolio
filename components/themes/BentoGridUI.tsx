import React from 'react';
import { ThemeCardProps } from '../../types';

const BentoGridUI: React.FC<ThemeCardProps> = ({ className }) => {
  const BentoBox: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className: boxClassName }) => (
    <div className={`bg-neutral-100 rounded-xl p-4 flex flex-col justify-between border border-neutral-200/50 ${boxClassName}`}>
      {children}
    </div>
  );

  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-4 flex flex-col bg-white text-black ${className}`}>
      <div className="grid grid-cols-3 grid-rows-4 gap-3 h-full w-full">
        <BentoBox className="col-span-2 row-span-2">
          <p className="font-bold text-lg">Your Day</p>
          <p className="text-3xl font-extrabold text-blue-600">75%</p>
        </BentoBox>
        <BentoBox className="col-span-1 row-span-1">
          <p className="font-bold">Weather</p>
          <p className="text-2xl font-bold">24°</p>
        </BentoBox>
        <BentoBox className="col-span-1 row-span-1 flex items-center justify-center bg-yellow-300">
           <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        </BentoBox>
        <BentoBox className="col-span-1 row-span-2">
           <p className="font-bold">Music</p>
            <div className="flex-grow flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
            </div>
        </BentoBox>
        <BentoBox className="col-span-2 row-span-2 bg-neutral-800 text-white">
          <p className="font-bold">Next Meeting</p>
          <div>
            <p className="text-lg font-semibold">Project Sync</p>
            <p className="text-sm text-neutral-400">10:30 AM</p>
          </div>
        </BentoBox>
      </div>
    </div>
  );
};
export default BentoGridUI;