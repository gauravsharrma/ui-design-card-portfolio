import React from 'react';
import { ThemeDetail } from '../../types';
import OriginalIcon from '../shared/Icon';

interface FooterProps {
  theme: ThemeDetail;
}

// Add social icons to the main Icon component and define it before it's used in Footer
const Icon: React.FC<{ name: string; className?: string; style?: React.CSSProperties }> = ({ name, className, style }) => {
  switch(name) {
    case 'twitter': return <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>;
    case 'github': return <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
    case 'dribbble': return <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 12.42 5.47 18.24m-3.6-1.55c-1.55-5.23-4.3-9.52-8.13-12.4m13.2 9.03c-3.37-2.3-7.4-3.4-11.85-2.9"></path></svg>;
    default: return <OriginalIcon name={name} className={className} style={style} />;
  }
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
    
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Use string manipulation to remove the query string, which is more reliable for blob URLs.
    const newUrl = window.location.href.split('?')[0];
    window.history.pushState({}, '', newUrl);
    window.dispatchEvent(new Event('navigate'));
  };

  return (
    <footer className="py-12" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
          <div>
            <a href="/" onClick={handleLogoClick} className="flex items-center justify-center md:justify-start space-x-2">
                <Icon name="zap" className="w-7 h-7" style={{ color: 'var(--primary)' }} />
                <span className="text-xl font-bold" style={{ color: 'var(--text)' }}>{theme.name.split(' ')[0]}</span>
            </a>
            <p className="mt-2 text-sm opacity-60" style={{ color: 'var(--text)' }}>
              © {new Date().getFullYear()} UI Showcase. All Rights Reserved.
            </p>
          </div>
          <div className="flex justify-center space-x-6" style={{ color: 'var(--text)' }}>
            <a href="#" aria-label="Twitter" className="opacity-80 hover:opacity-100 transition-opacity"><Icon name="twitter" className="w-6 h-6" /></a>
            <a href="#" aria-label="GitHub" className="opacity-80 hover:opacity-100 transition-opacity"><Icon name="github" className="w-6 h-6" /></a>
            <a href="#" aria-label="Dribbble" className="opacity-80 hover:opacity-100 transition-opacity"><Icon name="dribbble" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;