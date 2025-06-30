
import React from 'react';
import Icon from '../shared/Icon';
import { ThemeCardProps } from '../../types';

const EcommerceUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl flex flex-col bg-white text-black overflow-hidden border border-gray-200 ${className}`}>
        <div className="relative h-1/2">
            <img src="https://picsum.photos/seed/ecommerce/400/300" alt="Product" className="w-full h-full object-cover"/>
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">-20%</div>
        </div>
        <div className="p-4 flex-grow flex flex-col justify-between">
            <div>
                <p className="text-sm text-gray-500">HEADPHONES</p>
                <h3 className="font-bold text-xl mt-1">Acoustic Pro</h3>
                <div className="flex items-center mt-2">
                    <div className="flex text-yellow-400">
                        <Icon name="star" className="w-5 h-5" />
                        <Icon name="star" className="w-5 h-5" />
                        <Icon name="star" className="w-5 h-5" />
                        <Icon name="star" className="w-5 h-5" />
                        <Icon name="star" className="w-5 h-5 text-gray-300" />
                    </div>
                    <span className="text-xs text-gray-500 ml-2">(128 reviews)</span>
                </div>
            </div>
            
            <div className="flex justify-between items-center mt-4">
                <div>
                    <p className="text-2xl font-extrabold">$199.99</p>
                    <p className="text-sm text-gray-400 line-through">$249.99</p>
                </div>
                <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors active:scale-95">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
  );
};

export default EcommerceUI;
