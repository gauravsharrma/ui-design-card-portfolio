
import React from 'react';
import { ThemeCardProps } from '../../types';

const IOSLightUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-3xl p-4 flex flex-col justify-between bg-gray-100 text-black ${className}`}>
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
          </div>
          <div>
            <p className="font-semibold text-lg">Health Stats</p>
            <p className="text-sm text-gray-500">Updated just now</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="bg-white rounded-2xl p-4 flex justify-between items-center shadow-sm">
          <p className="font-medium">Daily Steps</p>
          <p className="text-gray-500">8,240</p>
        </div>
        <div className="bg-white rounded-2xl p-4 flex justify-between items-center shadow-sm">
          <p className="font-medium">Sleep Analysis</p>
          <p className="text-gray-500">7h 45m</p>
        </div>
      </div>

      <button className="w-full text-center p-3 rounded-2xl bg-blue-500 text-white font-semibold text-lg shadow-sm hover:bg-blue-600 transition-colors active:scale-[0.98]">
        View Full Report
      </button>
    </div>
  );
};

export default IOSLightUI;
