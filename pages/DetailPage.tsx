import React from 'react';
import { ThemeDetail } from '../types';
import Header from '../components/detailPage/Header';
import Hero from '../components/detailPage/Hero';
import FeatureSection from '../components/detailPage/FeatureSection';
import CTASection from '../components/detailPage/CTASection';
import Newsletter from '../components/detailPage/Newsletter';
import Footer from '../components/detailPage/Footer';

interface DetailPageProps {
  theme: ThemeDetail;
  onNavigateHome: () => void;
}

const DetailPage: React.FC<DetailPageProps> = ({ theme, onNavigateHome }) => {
  const DetailContentComponent = theme.detailContentComponent;

  const pageStyle: React.CSSProperties = {
    '--background': theme.palette.background,
    '--text': theme.palette.text,
    '--primary': theme.palette.primary,
    '--secondary': theme.palette.secondary,
    '--accent': theme.palette.accent,
    '--card-bg': theme.palette.cardBg || theme.palette.secondary,
    '--card-text': theme.palette.cardText || theme.palette.text,
    '--header-text': theme.palette.headerText || theme.palette.text,
  } as React.CSSProperties;

  return (
    <div className={`min-h-screen w-full ${theme.font}`} style={pageStyle}>
      <div style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }} className="transition-colors duration-500">
        <Header theme={theme} onNavigateHome={onNavigateHome} />
        <main>
          <Hero theme={theme} />
          <FeatureSection theme={theme} />
          <DetailContentComponent palette={theme.palette} />
          <CTASection theme={theme} />
          <Newsletter theme={theme} />
        </main>
        <Footer theme={theme} onNavigateHome={onNavigateHome} />
      </div>
    </div>
  );
};

export default DetailPage;
