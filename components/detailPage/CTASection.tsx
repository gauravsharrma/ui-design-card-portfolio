import React from 'react';
import { ThemeDetail } from '../../types';

interface CTASectionProps {
  theme: ThemeDetail;
}

const CTASection: React.FC<CTASectionProps> = ({ theme }) => {
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
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: 'var(--text)' }}>
          Ready to Elevate Your Design?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: 'var(--text)', opacity: 0.8 }}>
          Explore the possibilities and start building beautiful, modern interfaces with this theme today.
        </p>
        <div className="mt-8">
          <button
            className="px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:opacity-90 transition-all duration-300 active:scale-95"
            style={ctaButtonStyle}
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
