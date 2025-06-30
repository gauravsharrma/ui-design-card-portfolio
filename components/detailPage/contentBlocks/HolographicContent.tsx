import React from 'react';
import { Palette } from '../../../types';

const HolographicContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  const HoloCard = ({ name, id, imgSeed }: { name: string, id: string, imgSeed: string }) => (
    <div className="aspect-[3/4] p-1 rounded-2xl relative group" style={{ background: 'conic-gradient(from 180deg at 50% 50%, #FF00FF 0deg, #00FFFF 120deg, #FFFF00 240deg, #FF00FF 360deg)', animation: 'spin 4s linear infinite' }}>
        <div className="w-full h-full p-4 rounded-[14px] flex flex-col justify-between" style={{ backgroundColor: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(4px)' }}>
            <img src={`https://picsum.photos/seed/${imgSeed}/400`} alt={name} className="w-full aspect-square object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="text-center mt-4">
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="text-xs opacity-60 font-fira-code">{id}</p>
            </div>
        </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 font-orbitron" style={{ backgroundColor: palette.background, color: palette.text }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase">Digital Collectibles</h2>
          <p className="max-w-xl mx-auto mt-2 opacity-70">A showcase of rare, holographic edition assets.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <HoloCard name="Chrono-Tiger" id="XT-77A" imgSeed="holo1" />
            <HoloCard name="Aether-Whale" id="AW-01X" imgSeed="holo2" />
            <HoloCard name="Void-Serpent" id="VS-99B" imgSeed="holo3" />
            <HoloCard name="Grid-Runner" id="GR-42C" imgSeed="holo4" />
        </div>
      </div>
    </section>
  );
};
export default HolographicContent;
