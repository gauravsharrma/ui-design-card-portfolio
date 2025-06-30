
import React from 'react';
import { ThemeCardProps } from '../../types';

const MonochromeUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-6 flex flex-col justify-between bg-slate-50 border border-slate-100 ${className}`}>
        <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-800">Mono</h3>
            <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-500"></div>
                <div className="w-3 h-3 rounded-full bg-slate-800"></div>
            </div>
        </div>

        <div className="space-y-4">
            <div className="p-4 rounded-lg bg-slate-200">
                <p className="font-semibold text-slate-900">Primary Action</p>
                <p className="text-sm text-slate-600">The most important element.</p>
            </div>
             <div className="p-4 rounded-lg bg-slate-100">
                <p className="font-semibold text-slate-700">Secondary Action</p>
                <p className="text-sm text-slate-500">Less emphasis but still clear.</p>
            </div>
        </div>
        
        <button className="w-full py-3 rounded-lg bg-slate-800 text-slate-50 font-semibold hover:bg-slate-900 transition-colors">
            Submit
        </button>
    </div>
  );
};
export default MonochromeUI;