
import React from 'react';
import { ThemeCardProps } from '../../types';

const EdTechUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-4 flex flex-col bg-gray-50 text-gray-800 border border-gray-200 ${className}`}>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Continue Learning</h3>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <p className="text-xs font-semibold text-purple-600">SCIENCE</p>
            <h4 className="font-bold text-lg mt-1">Introduction to Astrophysics</h4>
            <div className="flex items-center space-x-2 mt-3">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <span className="text-sm font-semibold text-gray-600">65%</span>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="font-semibold text-gray-600 text-sm mb-2">Next up:</h5>
            <div className="bg-white rounded-lg p-3 border border-gray-100/50 flex items-center justify-between">
              <p className="font-medium">Chapter 4: Black Holes</p>
              <div className="w-6 h-6 rounded-full border-2 border-purple-500"></div>
            </div>
          </div>
        </div>

        <button className="w-full mt-6 text-center p-3 rounded-xl bg-purple-500 text-white font-bold hover:bg-purple-600 transition-colors active:scale-[0.98]">
          Resume Course
        </button>
      </div>
    </div>
  );
};

export default EdTechUI;
