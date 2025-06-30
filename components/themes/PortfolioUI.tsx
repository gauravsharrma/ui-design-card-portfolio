
import React from 'react';
import { ThemeCardProps } from '../../types';

const PortfolioUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-6 flex flex-col justify-center items-center text-center bg-white text-gray-800 border border-gray-200 ${className}`}>
        <img src="https://picsum.photos/seed/portfolio/100" alt="Avatar" className="w-24 h-24 rounded-full mb-4 ring-4 ring-gray-200" />
        <h3 className="text-2xl font-bold">Jane Doe</h3>
        <p className="text-gray-500 mb-6">Product Designer & Web Developer</p>
        
        <div className="w-full space-y-3 text-left">
            <a href="#portfolio" className="block w-full p-3 bg-gray-100 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Featured Project: Aura UI
            </a>
            <a href="#portfolio" className="block w-full p-3 bg-gray-100 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Case Study: Fintech App
            </a>
        </div>
        
        <button className="w-full text-center mt-8 p-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-black transition-colors">
            Contact Me
        </button>
    </div>
  );
};

export default PortfolioUI;
