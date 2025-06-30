import React from 'react';
import { Palette } from '../../../types';
import Icon from '../../shared/Icon';

const MemphisContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: palette.background, color: palette.text }}>
        <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-black rounded-full"></div>
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-pink-500 transform rotate-45"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto p-6 border-4 border-black bg-white">
            <h2 className="text-3xl font-black bg-yellow-300 inline-block p-2 border-2 border-black">EVENTS!</h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-4 border-2 border-black p-3 bg-cyan-300">
                    <p className="text-2xl font-black">24</p>
                    <p className="font-bold">Design Conference</p>
                </div>
                <div className="flex items-center space-x-4 border-2 border-black p-3">
                    <p className="text-2xl font-black">27</p>
                    <p className="font-bold">Workshop: Get Funky</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default MemphisContent;
