
import React from 'react';
import { ThemeCardProps } from '../../types';
import Icon from '../shared/Icon';

const RealEstateUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl flex flex-col bg-white text-black overflow-hidden border border-gray-200 shadow-lg ${className}`}>
        <div className="relative h-1/2">
            <img src="https://picsum.photos/seed/house/400/300" alt="Modern House" className="w-full h-full object-cover"/>
            <div className="absolute top-3 left-3 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-full">FOR SALE</div>
        </div>
        <div className="p-4 flex-grow flex flex-col justify-between">
            <div>
                <p className="font-bold text-2xl text-gray-900">$780,000</p>
                <p className="text-sm text-gray-600 mt-1">123 Maple Street, Anytown, USA</p>
                <div className="flex items-center mt-4 pt-4 border-t border-gray-200 text-sm space-x-4">
                    <div className="flex items-center space-x-1.5">
                       <Icon name="bed" className="w-5 h-5 text-gray-500" />
                       <span className="font-medium">4 beds</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                       <Icon name="bath" className="w-5 h-5 text-gray-500" />
                       <span className="font-medium">3 baths</span>
                    </div>
                </div>
            </div>
            
            <button className="w-full mt-4 text-center p-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors active:scale-95">
                View Details
            </button>
        </div>
    </div>
  );
};

export default RealEstateUI;
