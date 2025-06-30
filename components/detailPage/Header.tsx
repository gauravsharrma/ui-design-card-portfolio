import React from 'react';
import { ThemeDetail } from '../../types';
import Icon from '../shared/Icon';

interface HeaderProps {
  theme: ThemeDetail;
}

const Header: React.FC<HeaderProps> = ({ theme }) => {
    
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Use string manipulation to remove the query string, which is more reliable for blob URLs.
    const newUrl = window.location.href.split('?')[0];
    window.history.pushState({}, '', newUrl);
    window.dispatchEvent(new Event('navigate'));
  };

  const navLinkStyle: React.CSSProperties = {
    color: 'var(--header-text)',
  };

  const ctaButtonStyle: React.CSSProperties = {
    backgroundColor: 'var(--primary)',
    color: theme.palette.background,
  };
    
  // A bit of logic to make sure button text is readable
  const isPrimaryDark = theme.palette.primary.startsWith('#') && parseInt(theme.palette.primary.substring(1), 16) < 0xaaaaaa;
  const ctaTextColor = isPrimaryDark ? '#FFFFFF' : '#000000';
  if(theme.id === 'neomorphism' || theme.id === 'minimalist' || theme.id === 'monochrome' || theme.id === 'paper-collage' || theme.id === 'legal' || theme.id === 'ios-light' || theme.id === 'bento') {
    ctaButtonStyle.color = '#FFFFFF';
  } else {
    ctaButtonStyle.color = ctaTextColor;
  }
  if (theme.id === 'fintech') ctaButtonStyle.color = '#000000';


  return (
    <header className="p-4 md:p-6" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" onClick={handleLogoClick} className="flex items-center space-x-2">
          <Icon name="zap" className="w-8 h-8" style={{ color: 'var(--primary)' }} />
          <span className="text-2xl font-bold" style={navLinkStyle}>{theme.name.split(' ')[0]}</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="font-medium hover:opacity-75 transition-opacity" style={navLinkStyle}>Features</a>
          <a href="#" className="font-medium hover:opacity-75 transition-opacity" style={navLinkStyle}>Pricing</a>
          <a href="#" className="font-medium hover:opacity-75 transition-opacity" style={navLinkStyle}>Contact</a>
        </nav>
        <button
          className="px-6 py-2 rounded-lg font-bold shadow-md hover:opacity-90 transition-all duration-300 active:scale-95"
          style={ctaButtonStyle}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;