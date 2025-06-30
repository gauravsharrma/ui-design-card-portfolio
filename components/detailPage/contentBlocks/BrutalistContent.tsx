import React from 'react';
import { Palette } from '../../../types';

const BrutalistContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background, color: palette.text }}>
      <div className="container mx-auto px-4 border-4 border-black">
        <div className="grid md:grid-cols-5 gap-4 p-4">
            <div className="md:col-span-2 p-4 border-2 border-black" style={{backgroundColor: palette.accent}}>
                <h3 className="text-2xl font-bold uppercase">INDEX</h3>
                <ul className="list-disc list-inside mt-4 underline">
                    <li><a href="#">ITEM_1</a></li>
                    <li><a href="#">ITEM_2</a></li>
                    <li><a href="#">ITEM_3</a></li>
                </ul>
            </div>
            <div className="md:col-span-3 p-4 border-2 border-black bg-white">
                <h3 className="text-2xl font-bold uppercase">CONTENT_BLOCK</h3>
                <p className='mt-4 font-mono'>THIS IS THE MAIN CONTENT. IT IS PRESENTED WITHOUT ORNAMENTATION. THE STRUCTURE IS CLEAR. THE HIERARCHY IS OBVIOUS. FUNCTION OVER FORM.</p>
                <button className='mt-6 p-2 border-2 border-black font-bold' style={{backgroundColor: palette.primary}}>SUBMIT</button>
            </div>
            <div className="h-16 border-2 border-black" style={{backgroundColor: palette.secondary}}></div>
            <div className="h-16 border-2 border-black" style={{backgroundColor: palette.primary}}></div>
            <div className="h-16 border-2 border-black bg-white"></div>
            <div className="h-16 border-2 border-black" style={{backgroundColor: palette.accent}}></div>
            <div className="h-16 border-2 border-black" style={{backgroundColor: palette.secondary}}></div>
        </div>
      </div>
    </section>
  );
};
export default BrutalistContent;
