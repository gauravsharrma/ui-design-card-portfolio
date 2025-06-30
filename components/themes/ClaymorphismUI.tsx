
import React from 'react';
import { ThemeCardProps } from '../../types';

const ClaymorphismUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-6 flex flex-col justify-around items-center bg-[#F1F4F9] ${className}`}>
        <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-700">Clay UI</h3>
            <p className="text-slate-500">Soft & Fluffy</p>
        </div>
      
        <div className="w-32 h-32 rounded-[40px] bg-[#F1F4F9]" style={{boxShadow: '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff'}}>
        </div>
        
        <div className="flex space-x-6">
            <button className="w-16 h-16 rounded-[24px] bg-[#F1F4F9] flex items-center justify-center transition-shadow clay-button-card" style={{boxShadow: '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff'}}>
                 <svg className="w-7 h-7 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </button>
             <button className="w-16 h-16 rounded-[24px] bg-blue-500 flex items-center justify-center transition-shadow clay-button-card-primary" style={{boxShadow: '6px 6px 12px #a6c1e8, -6px -6px 12px #d2e1ff'}}>
                 <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </button>
        </div>
    </div>
  );
};
export default ClaymorphismUI;