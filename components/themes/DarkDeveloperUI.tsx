
import React from 'react';
import { ThemeCardProps } from '../../types';

const DarkDeveloperUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-fira-code rounded-2xl p-6 flex flex-col justify-between bg-black text-gray-300 relative overflow-hidden border border-green-500/20 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(42,168,102,0.1)_0%,_rgba(42,168,102,0)_60%)]"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-center">
          <p className="text-sm text-green-400">/v1/projects/query</p>
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-yellow-400">200 OK</span>
            <span className="text-gray-500">88ms</span>
          </div>
        </div>
      </div>
      <div className="relative z-10 space-y-4">
        <p className="text-sm">
          <span className="text-purple-400">const</span> <span className="text-blue-400">result</span> = <span className="text-purple-400">await</span> <span className="text-yellow-300">fetch</span>(...);
        </p>
        <div className="bg-gray-900/50 rounded p-3 text-xs border border-gray-700">
          <p>{`{`}</p>
          <p className="ml-4"><span className="text-red-400">"status"</span>: <span className="text-green-400">"success"</span>,</p>
          <p className="ml-4"><span className="text-red-400">"data"</span>: [...]</p>
          <p>{`}`}</p>
        </div>
        <button className="w-full text-center p-3 rounded-lg bg-green-500/10 text-green-400 border border-green-500/30 transition-all duration-300 hover:bg-green-500/20 hover:shadow-[0_0_20px_rgba(74,222,128,0.5)]">
          Execute Query
        </button>
      </div>
    </div>
  );
};

export default DarkDeveloperUI;
