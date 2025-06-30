import React from 'react';
import { Palette } from '../../../types';

const MinimalistContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-1 mb-8" style={{backgroundColor: palette.primary}}></div>
          <h2 className="font-playfair text-4xl" style={{ color: palette.text }}>
            "Simplicity is the ultimate sophistication. This design embodies that principle perfectly."
          </h2>
          <p className="mt-6 font-bold text-lg" style={{ color: palette.text }}>
            - Jane Doe
          </p>
          <p className="text-md" style={{ color: palette.text, opacity: 0.7 }}>
            Head of Design, Abstract Co.
          </p>
        </div>
      </div>
    </section>
  );
};
export default MinimalistContent;
