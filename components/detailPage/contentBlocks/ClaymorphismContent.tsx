import React from 'react';
import { Palette } from '../../../types';
import Icon from '../../shared/Icon';

const ClaymorphismContent: React.FC<{ palette: Palette }> = ({ palette }) => {

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background, color: palette.text }}>
      <div className="container mx-auto px-4">
        <div className="max-w-sm mx-auto p-8 rounded-[50px]" style={{ backgroundColor: palette.background, boxShadow: '20px 20px 40px #d1d9e6, -20px -20px 40px #ffffff' }}>
            <div className="text-center">
                <img src="https://picsum.photos/seed/clay-avatar/120" alt="Avatar" className="w-28 h-28 mx-auto rounded-[40px] mb-6" style={{boxShadow: '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff'}}/>
                <h2 className="text-2xl font-bold">Olivia White</h2>
                <p className="opacity-70">Product Designer</p>
            </div>
            <div className="mt-8 space-y-4">
                <button 
                  className="w-full py-4 rounded-3xl font-bold transition-shadow clay-button-detail" 
                  style={{ backgroundColor: palette.primary, color: 'white', boxShadow: '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff' }}
                >
                  Follow
                </button>
                <button 
                  className="w-full py-4 rounded-3xl font-bold transition-shadow clay-button-detail" 
                  style={{ backgroundColor: palette.background, color: palette.text, boxShadow: '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff' }}
                >
                  Message
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};
export default ClaymorphismContent;