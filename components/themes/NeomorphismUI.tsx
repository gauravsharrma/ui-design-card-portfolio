
import React from 'react';
import { ThemeCardProps } from '../../types';

const NeomorphismUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-6 flex flex-col justify-between bg-[#e0e5ec] text-[#555] ${className}`}>
      <div className="flex justify-between items-center">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#e0e5ec]" style={{boxShadow: '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff'}}>
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#e0e5ec]" style={{boxShadow: 'inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff'}}>
             <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-600">Soft UI</h3>
        <p className="text-gray-500 mt-1">Playing with shadows</p>
      </div>
      
      <div className="flex justify-around items-center">
        <button className="w-16 h-16 rounded-full flex items-center justify-center bg-[#e0e5ec] transition-shadow duration-150 neo-button-card" style={{boxShadow: '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff'}}>
           <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        </button>
        <button className="w-16 h-16 rounded-full flex items-center justify-center bg-[#e0e5ec] transition-shadow duration-150 neo-button-card" style={{boxShadow: '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff'}}>
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default NeomorphismUI;