
import React from 'react';
import { ThemeCardProps } from '../../types';
import Icon from '../shared/Icon';

const JobBoardUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-5 flex flex-col bg-white text-gray-800 border border-gray-200 ${className}`}>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <Icon name="briefcase" className="w-7 h-7 text-gray-500" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Senior Frontend Engineer</h3>
              <p className="text-sm text-gray-600">Innovate Inc.</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="text-xs font-medium bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">Remote</div>
            <div className="text-xs font-medium bg-green-100 text-green-800 px-2.5 py-1 rounded-full">Full-Time</div>
            <div className="text-xs font-medium bg-gray-100 text-gray-800 px-2.5 py-1 rounded-full">$120k-$150k</div>
          </div>

          <p className="text-sm text-gray-500 mt-4 border-t border-gray-200 pt-4">
            We're looking for a passionate engineer to build the future of our design systems and user-facing products...
          </p>
        </div>

        <div className="flex items-center space-x-3 mt-6">
          <button className="flex-1 text-center p-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors active:scale-[0.98]">
            Apply Now
          </button>
          <button className="p-3 rounded-xl border-2 border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors active:scale-[0.98]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobBoardUI;
