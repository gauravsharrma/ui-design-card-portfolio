import React from 'react';
import { Palette } from '../../../types';

const CyberpunkContent: React.FC<{ palette: Palette }> = ({ palette }) => {
    const GlitchText: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => (
        <div className={`relative inline-block ${className}`}>
          <span className="relative z-10">{children}</span>
          <span className="absolute top-0 left-0 w-full h-full z-0 opacity-70 animate-pulse" style={{ color: palette.text, clipPath: 'inset(20% 0 50% 0)' }}>{children}</span>
          <span className="absolute top-0 left-0 w-full h-full z-20 opacity-70 animate-pulse" style={{ color: palette.primary, clipPath: 'inset(50% 0 20% 0)' }}>{children}</span>
        </div>
      );

  return (
    <section className="py-16 md:py-24 font-orbitron" style={{ backgroundColor: palette.background, color: palette.text }}>
      <div className="container mx-auto px-4">
         <div className="text-center mb-12">
          <GlitchText className="text-3xl font-black uppercase">
            System Diagnostics
          </GlitchText>
          <p className="font-fira-code text-sm mt-2" style={{color: palette.accent}}>[//_LIVE_FEED_]</p>
        </div>
        <div className="grid md:grid-cols-3 gap-px" style={{backgroundColor: palette.primary, boxShadow: `0 0 20px ${palette.primary}`}}>
            <div className="p-8 text-center" style={{backgroundColor: palette.background}}>
                <p className="text-lg font-bold" style={{color: palette.primary}}>CORE TEMP</p>
                <p className="text-5xl font-black mt-2">98.6°</p>
            </div>
             <div className="p-8 text-center" style={{backgroundColor: palette.background}}>
                <p className="text-lg font-bold" style={{color: palette.primary}}>NETWORK PING</p>
                <p className="text-5xl font-black mt-2">12ms</p>
            </div>
             <div className="p-8 text-center" style={{backgroundColor: palette.background}}>
                <p className="text-lg font-bold" style={{color: palette.primary}}>SIGNAL STR</p>
                <p className="text-5xl font-black mt-2">99.8%</p>
            </div>
        </div>
      </div>
    </section>
  );
};
export default CyberpunkContent;
