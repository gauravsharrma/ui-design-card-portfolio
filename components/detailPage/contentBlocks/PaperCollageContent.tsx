import React from 'react';
import { Palette } from '../../../types';

const PaperCollageContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <section className="py-16 md:py-24 relative" style={{ backgroundColor: palette.background, backgroundImage: "url('https://www.transparenttextures.com/patterns/paper.png')" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto h-[500px] relative">
            {/* Element 1 */}
            <div className="absolute top-10 left-10 w-48 h-64 bg-white p-2 shadow-lg transform -rotate-6 hover:rotate-0 hover:scale-105 transition-transform">
                <img src="https://picsum.photos/seed/collage1/200/300" className="w-full h-full object-cover"/>
            </div>
             {/* Element 2 */}
            <div className="absolute top-24 right-10 w-56 h-40 bg-white p-2 shadow-lg transform rotate-3 hover:rotate-0 hover:scale-105 transition-transform">
                <img src="https://picsum.photos/seed/collage2/300/200" className="w-full h-full object-cover"/>
            </div>
            {/* Element 3 (Note) */}
            <div className="absolute bottom-16 left-20 w-64 p-4 bg-[#fffbe6] shadow-md transform rotate-2" style={{ fontFamily: "'Caveat', cursive" }}>
                <h3 className="text-2xl font-bold">Inspiration Board</h3>
                <p className="text-lg mt-1">Collecting ideas & textures for the next big project.</p>
            </div>
             {/* Washi Tape */}
            <div className="absolute top-8 right-32 w-24 h-6 bg-teal-200/70 opacity-80 transform -rotate-45 shadow-sm" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/washi.png')"}}></div>
        </div>
      </div>
    </section>
  );
};
export default PaperCollageContent;
