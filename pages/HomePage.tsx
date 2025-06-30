import React, { useState } from 'react';
import { THEME_DETAILS } from '../constants';

interface HomePageProps {
  onThemeSelect: (themeId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onThemeSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThemeClick = (themeId: string) => {
    onThemeSelect(themeId);
  };

  const handleModalLinkClick = (themeId: string) => {
    setIsModalOpen(false); // Close modal first
    onThemeSelect(themeId);
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 bg-cover bg-fixed text-white font-inter" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')"}}>
      <main className="p-4 sm:p-8">
        <header className="text-center mb-10 relative">
          <div className="absolute top-0 right-0 z-20">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 text-sm text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
              aria-label="View all theme pages"
            >
              View All Pages
            </button>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Modern UI Design Showcase
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-400">
            A curated collection of modern UI styles. Click any card to see a full-page concept.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8">
          {THEME_DETAILS.map((theme) => {
            const ThemeCardComponent = theme.cardComponent;
            return (
              <div 
                key={theme.id}
                onClick={() => handleThemeClick(theme.id)}
                className="flex flex-col group transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleThemeClick(theme.id); }}
              >
                <div className="flex-grow">
                   <ThemeCardComponent />
                </div>
                <h2 className="text-center mt-4 text-lg font-semibold text-gray-300 tracking-wide group-hover:text-white transition-colors duration-300">{theme.name}</h2>
              </div>
            );
          })}
        </div>
        
        <footer className="text-center mt-16 pb-8 text-gray-500">
          <p>Designed and built for demonstration.</p>
        </footer>
      </main>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700 flex-shrink-0">
              <h2 id="modal-title" className="text-xl font-bold">All Theme Pages</h2>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-gray-400 hover:text-white p-2 rounded-full"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <ul className="divide-y divide-gray-700/50">
                {THEME_DETAILS.map((theme) => (
                  <li key={theme.id}>
                    <button
                      onClick={() => handleModalLinkClick(theme.id)}
                      className="w-full flex justify-between items-center py-4 hover:bg-gray-800/50 rounded-lg -mx-4 px-4 transition-colors duration-200 text-left"
                    >
                      <span className="font-semibold">{theme.name}</span>
                      <span className="text-sm text-blue-400">View Page →</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
