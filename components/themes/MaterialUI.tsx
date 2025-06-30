
import React from 'react';
import { ThemeCardProps } from '../../types';

const MaterialUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-roboto rounded-xl flex flex-col bg-white text-black overflow-hidden shadow-lg ${className}`}>
      <div className="h-1/3 bg-indigo-500 flex items-center justify-center">
         <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path></svg>
      </div>
      
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
            <h3 className="text-2xl font-medium text-gray-900">Get Things Done</h3>
            <p className="mt-2 text-gray-600">Material streamlines your workflow with intuitive components and clear hierarchy.</p>
        </div>
        
        <div className="flex justify-end space-x-4">
            <button className="px-4 py-2 rounded text-indigo-500 font-medium hover:bg-indigo-50 transition-colors">LEARN MORE</button>
            <button className="px-4 py-2 rounded bg-indigo-500 text-white font-medium shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all active:scale-95">
                GET STARTED
            </button>
        </div>
      </div>
    </div>
  );
};

export default MaterialUI;
