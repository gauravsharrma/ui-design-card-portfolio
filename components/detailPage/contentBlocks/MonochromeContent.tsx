import React from 'react';
import { Palette } from '../../../types';

const MonochromeContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  const GalleryImage = ({ imgSeed }: { imgSeed: string }) => (
    <div className="aspect-square bg-slate-200 overflow-hidden">
        <img 
            src={`https://picsum.photos/seed/${imgSeed}/400`}
            alt="Monochrome gallery"
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
        />
    </div>
  );

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold" style={{ color: palette.text }}>Shades of Gray</h2>
          <p className="max-w-xl mx-auto mt-2" style={{ color: palette.text, opacity: 0.7 }}>
            A gallery exploring form and texture without the distraction of color.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            <GalleryImage imgSeed="mono1"/>
            <GalleryImage imgSeed="mono2"/>
            <GalleryImage imgSeed="mono3"/>
            <GalleryImage imgSeed="mono4"/>
            <GalleryImage imgSeed="mono5"/>
            <GalleryImage imgSeed="mono6"/>
            <GalleryImage imgSeed="mono7"/>
            <GalleryImage imgSeed="mono8"/>
        </div>
      </div>
    </section>
  );
};
export default MonochromeContent;
