import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import { THEME_DETAILS } from './constants';

function App() {
  const [activeThemeId, setActiveThemeId] = useState<string | null>(null);

  const handleThemeSelect = (themeId: string) => {
    setActiveThemeId(themeId);
  };

  const handleGoHome = () => {
    setActiveThemeId(null);
  };

  const activeTheme = activeThemeId
    ? THEME_DETAILS.find((t) => t.id === activeThemeId)
    : null;

  if (activeTheme) {
    return <DetailPage theme={activeTheme} onNavigateHome={handleGoHome} />;
  }

  return <HomePage onThemeSelect={handleThemeSelect} />;
}

export default App;
