import React from 'react';
import { Palette } from '../../../types';
import Icon from '../../shared/Icon';

const DarkDevContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold" style={{ color: palette.accent }}>Precision Tooling</h2>
            <p style={{ color: palette.text, opacity: 0.8 }}>
              Our developer-centric components are designed for maximum efficiency and readability.
              From syntax-highlighted code blocks to integrated terminal views, everything you need is right here.
            </p>
          </div>
          <div className="font-fira-code rounded-lg border" style={{ borderColor: 'rgba(255,255,255,0.1)'}}>
            <div className="p-2 border-b flex items-center space-x-2" style={{ borderColor: 'rgba(255,255,255,0.1)'}}>
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="p-4 bg-black/50 text-sm">
                <p><span style={{ color: palette.primary }}>const</span> <span className='text-teal-300'>theme</span> = {'{'}</p>
                <p className='ml-4'><span className='text-red-400'>palette</span>: {'{'}</p>
                <p className='ml-8'><span className='text-red-400'>background</span>: <span style={{ color: palette.secondary }}>'{palette.background}'</span>,</p>
                <p className='ml-8'><span className='text-red-400'>text</span>: <span style={{ color: palette.secondary }}>'{palette.text}'</span>,</p>
                <p className='ml-4'>{'}'},</p>
                <p>{'}'};</p>
            </div>
            <div className="p-4 bg-black/20 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)'}}>
                <p className='text-green-400'><Icon name="check-circle" className="inline-block w-4 h-4 mr-2" />Compilation successful.</p>
                <p style={{color: palette.text}}>> Ready for deployment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DarkDevContent;
