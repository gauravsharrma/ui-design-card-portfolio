import React from 'react';
import { ThemeDetail } from '../../types';

interface HeroProps {
  theme: ThemeDetail;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const { hero } = theme;

  const ctaButtonStyle: React.CSSProperties = {
    backgroundColor: 'var(--primary)',
    color: '#FFFFFF',
  };
    
  const isPrimaryDark = theme.palette.primary.startsWith('#') && parseInt(theme.palette.primary.substring(1), 16) < 0xaaaaaa;
  const ctaTextColor = isPrimaryDark ? '#FFFFFF' : '#000000';
   if(theme.id === 'neomorphism' || theme.id === 'minimalist' || theme.id === 'monochrome' || theme.id === 'paper-collage' || theme.id === 'legal' || theme.id === 'ios-light' || theme.id === 'bento') {
    ctaButtonStyle.color = '#FFFFFF';
  } else {
    ctaButtonStyle.color = ctaTextColor;
  }
   if (theme.id === 'fintech') ctaButtonStyle.color = '#000000';


  return (
    <section className="relative text-center py-20 md:py-32" style={{ backgroundColor: 'var(--secondary)' }}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${hero.image})` }}
      ></div>
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter" style={{ color: 'var(--text)' }}>
          {hero.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl" style={{ color: 'var(--text)', opacity: 0.8 }}>
          {hero.subtitle}
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button
            className="px-8 py-3 rounded-lg font-bold shadow-lg hover:opacity-90 transition-all duration-300 active:scale-95"
            style={ctaButtonStyle}
          >
            Get Started
          </button>
          <button
            className="px-8 py-3 rounded-lg font-bold shadow-lg transition-all duration-300 active:scale-95"
            style={{ backgroundColor: 'var(--card-bg)', color: 'var(--card-text)' }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
