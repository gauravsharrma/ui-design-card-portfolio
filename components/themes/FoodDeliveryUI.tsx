
import React from 'react';
import { ThemeCardProps } from '../../types';
import Icon from '../shared/Icon';

const FoodDeliveryUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl flex flex-col bg-white text-black overflow-hidden border border-gray-200 shadow-md ${className}`}>
        <div className="relative h-2/5">
            <img src="https://picsum.photos/seed/food/400/300" alt="Delicious Burger" className="w-full h-full object-cover"/>
        </div>
        <div className="p-4 flex-grow flex flex-col justify-between">
            <div>
                <h3 className="font-bold text-2xl mt-1">The Goliath Burger</h3>
                <p className="text-sm text-gray-500">by Burger Palace</p>
                <div className="flex items-center mt-2 space-x-4">
                    <div className="flex items-center text-sm">
                        <Icon name="star" className="w-5 h-5 text-yellow-400 mr-1" />
                        <span className="font-bold">4.8</span>
                        <span className="text-gray-400 ml-1">(2k+)</span>
                    </div>
                    <div className="text-sm">
                        <span className="font-bold">20-30 min</span>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-between items-center mt-4">
                <p className="text-3xl font-extrabold">$14.50</p>
                <button className="px-6 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-colors active:scale-95">
                    Add to Order
                </button>
            </div>
        </div>
    </div>
  );
};

export default FoodDeliveryUI;
