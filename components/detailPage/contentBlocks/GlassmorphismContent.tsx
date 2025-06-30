import React from 'react';
import { Palette } from '../../../types';

const GlassmorphismContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  const GlassCard = ({ title, subtitle, imgSeed }: { title: string, subtitle: string, imgSeed: string }) => (
    <div className="relative aspect-square rounded-2xl overflow-hidden group">
      <img src={`https://picsum.photos/seed/${imgSeed}/400`} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/10 backdrop-blur-md border-t border-white/20">
        <h3 className="font-bold text-lg" style={{ color: palette.text }}>{title}</h3>
        <p style={{ color: palette.text, opacity: 0.8 }}>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold" style={{ color: palette.text }}>A Touch of Glass</h2>
          <p className="max-w-xl mx-auto mt-2" style={{ color: palette.text, opacity: 0.8 }}>
            Layered interfaces that create a sense of depth and focus through translucency.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard title="Project Alpha" subtitle="Web Design" imgSeed="alpha" />
          <GlassCard title="Project Beta" subtitle="Mobile App" imgSeed="beta" />
          <GlassCard title="Project Gamma" subtitle="Branding" imgSeed="gamma" />
        </div>
      </div>
    </section>
  );
};
export default GlassmorphismContent;
