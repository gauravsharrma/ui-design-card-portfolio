import React from 'react';
import { ThemeDetail } from '../../types';

interface NewsletterProps {
  theme: ThemeDetail;
}

const Newsletter: React.FC<NewsletterProps> = ({ theme }) => {
    
  const buttonStyle: React.CSSProperties = {
    backgroundColor: 'var(--primary)',
    color: '#FFFFFF',
  };
  const inputStyle: React.CSSProperties = {
    backgroundColor: 'var(--secondary)',
    borderColor: 'var(--accent)',
    color: 'var(--text)',
  };
    
  const isPrimaryDark = theme.palette.primary.startsWith('#') && parseInt(theme.palette.primary.substring(1), 16) < 0xaaaaaa;
  const ctaTextColor = isPrimaryDark ? '#FFFFFF' : '#000000';
  if(theme.id === 'neomorphism' || theme.id === 'minimalist' || theme.id === 'monochrome' || theme.id === 'paper-collage' || theme.id === 'legal' || theme.id === 'ios-light' || theme.id === 'bento') {
    buttonStyle.color = '#FFFFFF';
  } else {
    buttonStyle.color = ctaTextColor;
  }
  if (theme.id === 'fintech') buttonStyle.color = '#000000';

  return (
    <section className="py-16" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Stay Updated</h2>
          <p className="mt-2 opacity-80">
            Join our newsletter to get the latest design trends and updates.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2"
              style={inputStyle}
            />
            <button
              className="px-6 py-3 rounded-md font-bold hover:opacity-90 transition-opacity"
              style={buttonStyle}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
