
import React from 'react';
import { ThemeCardProps } from '../../types';

const NewsUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-roboto rounded-lg flex flex-col bg-white text-black overflow-hidden border border-gray-200 ${className}`}>
        <div className="relative h-1/3">
            <img src="https://picsum.photos/seed/news/400/200" alt="News banner" className="w-full h-full object-cover"/>
        </div>
        <div className="p-5 flex-grow flex flex-col justify-between">
            <div>
                <p className="text-sm font-bold text-red-700 tracking-wider uppercase">World News</p>
                <h3 className="font-playfair font-bold text-2xl leading-tight text-gray-900 mt-1">
                    Global Summit Concludes with Landmark Climate Accord
                </h3>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    Leaders from 190 nations have finalized a historic agreement aimed at curbing carbon emissions...
                </p>
            </div>
            
            <div className="mt-4 text-xs text-gray-500">
                By Olivia Chen / 4 hours ago
            </div>
        </div>
    </div>
  );
};

export default NewsUI;
