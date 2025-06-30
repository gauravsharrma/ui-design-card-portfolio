
import React, { useState } from 'react';
import { ThemeCardProps } from '../../types';
import Icon from '../shared/Icon';

const DashboardUI: React.FC<ThemeCardProps> = ({ className }) => {
    const [isDark, setIsDark] = useState(true);

    const baseBg = isDark ? 'bg-gray-800' : 'bg-gray-100';
    const cardBg = isDark ? 'bg-gray-900' : 'bg-white';
    const textColor = isDark ? 'text-gray-300' : 'text-gray-700';
    const headingColor = isDark ? 'text-white' : 'text-black';

  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-4 flex flex-col justify-between shadow-lg transition-colors duration-300 ${baseBg} ${textColor} ${className}`}>
        <div className={`flex justify-between items-center p-2 rounded-lg ${cardBg}`}>
            <h3 className={`font-bold text-lg ${headingColor}`}>Analytics</h3>
            <div className="flex items-center space-x-2">
                <button className="p-1 rounded hover:bg-gray-700/50">
                    <Icon name="filter" className="w-5 h-5" />
                </button>
                <button onClick={() => setIsDark(!isDark)} className="p-1.5 rounded-full bg-gray-700/50">
                    {isDark ? <Icon name="sun" className="w-4 h-4 text-yellow-300" /> : <Icon name="moon" className="w-4 h-4 text-indigo-400" />}
                </button>
            </div>
        </div>
        
        <div className={`p-4 rounded-lg space-y-3 ${cardBg}`}>
            <p className="text-sm">Revenue</p>
            <div className="flex items-baseline space-x-2">
                <p className={`text-3xl font-bold ${headingColor}`}>$4,805</p>
                <p className="text-sm font-semibold text-green-500">+12.5%</p>
            </div>
            <div className="h-20 w-full flex items-end space-x-2">
                <div className="w-1/4 h-[40%] bg-blue-500 rounded-t-sm"></div>
                <div className="w-1/4 h-[60%] bg-blue-500 rounded-t-sm"></div>
                <div className="w-1/4 h-[80%] bg-blue-500 rounded-t-sm"></div>
                <div className="w-1/4 h-[50%] bg-blue-400 rounded-t-sm"></div>
            </div>
        </div>

        <div className={`p-4 rounded-lg ${cardBg}`}>
            <p className="font-semibold ${headingColor}">Top Referrer</p>
            <p className="text-sm">google.com</p>
        </div>
    </div>
  );
};

export default DashboardUI;
