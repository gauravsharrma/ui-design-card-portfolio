
import React from 'react';
import { ThemeCardProps } from '../../types';

const MinimalistUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-6 flex flex-col justify-between bg-white text-black border border-gray-100 ${className}`}>
      <div className="flex justify-between items-start">
        <h3 className="text-3xl font-black tracking-tighter">STUDIO</h3>
        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
      </div>

      <div className="space-y-6">
        <div className="space-y-1">
          <p className="font-semibold text-gray-800">Abstract Forms</p>
          <p className="text-gray-500 text-sm">A study in simplicity and shape. Modern art for the digital age.</p>
        </div>
        <div className="w-full h-0.5 bg-gray-200"></div>
        <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">2024 Edition</p>
            <p className="text-sm font-medium text-blue-500">View Project →</p>
        </div>
      </div>

      <div>
        {/* Intentionally empty for whitespace */}
      </div>
    </div>
  );
};

export default MinimalistUI;
