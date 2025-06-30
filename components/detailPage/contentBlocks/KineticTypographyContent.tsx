import React from 'react';
import { Palette } from '../../../types';

const KineticTypographyContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: palette.background, color: palette.text }}>
      <div className="container mx-auto px-4 relative h-96">
        <h2 className="absolute top-0 left-0 text-8xl md:text-9xl font-black tracking-tighter opacity-10" style={{ transform: 'translateX(-20%)' }}>EXPRESSIVE</h2>
        <h2 className="absolute top-1/4 left-1/4 text-7xl md:text-8xl font-bold tracking-tight" style={{ color: palette.primary }}>TYPOGRAPHY</h2>
        <h2 className="absolute bottom-1/4 right-0 text-8xl md:text-9xl font-black tracking-tighter opacity-30" style={{ transform: 'translateX(20%)' }}>IN MOTION</h2>
        <h2 className="absolute bottom-0 left-1/2 text-6xl md:text-7xl font-light tracking-widest" style={{ transform: 'translateX(-50%)' }}>CREATES</h2>
      </div>
    </section>
  );
};
export default KineticTypographyContent;
