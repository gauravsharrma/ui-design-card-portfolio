import React from 'react';
import { Palette } from '../../../types';
import OriginalIcon from '../../shared/Icon';

// Helper icons
const Icon: React.FC<{name: string, className: string, style?: any}> = ({name, ...props}) => {
    switch (name) {
        case 'volume-2': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>;
        case 'rewind': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon></svg>;
        case 'play': return <svg {...props} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>;
        case 'fast-forward': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon></svg>;
        default: return <OriginalIcon name={name} {...props} />;
    }
}

const NeomorphismContent: React.FC<{ palette: Palette }> = ({ palette }) => {

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold" style={{ color: palette.text }}>Tactile Controls</h2>
          <p className="max-w-xl mx-auto mt-2" style={{ color: palette.text, opacity: 0.8 }}>
            Interact with UI that feels like it's part of the physical world.
          </p>
        </div>
        <div 
            className="max-w-md mx-auto p-8 rounded-3xl"
            style={{ backgroundColor: palette.background, boxShadow: '7px 7px 15px #bec8e4, -7px -7px 15px #ffffff' }}
        >
            <div className='flex justify-between items-center'>
                <p className='font-bold' style={{ color: palette.text }}>Music Volume</p>
                <div className="p-3 rounded-full" style={{ backgroundColor: palette.background, boxShadow: 'inset 7px 7px 15px #bec8e4, inset -7px -7px 15px #ffffff' }}>
                    <Icon name="volume-2" className="w-6 h-6" style={{ color: palette.text }} />
                </div>
            </div>
            <div className="w-full h-4 rounded-full my-6" style={{ backgroundColor: palette.background, boxShadow: 'inset 7px 7px 15px #bec8e4, inset -7px -7px 15px #ffffff' }}>
                <div 
                    className="w-3/4 h-full rounded-full"
                    style={{backgroundColor: palette.primary, boxShadow: '7px 7px 15px #bec8e4, -7px -7px 15px #ffffff'}}
                ></div>
            </div>
            <div className='flex justify-around items-center'>
                <button className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 neo-button-detail" style={{ backgroundColor: palette.background, boxShadow: '7px 7px 15px #bec8e4, -7px -7px 15px #ffffff' }}>
                     <Icon name="rewind" className="w-8 h-8" style={{ color: palette.text }} />
                </button>
                <button className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-200 neo-button-detail" style={{ backgroundColor: palette.background, boxShadow: '7px 7px 15px #bec8e4, -7px -7px 15px #ffffff' }}>
                     <Icon name="play" className="w-10 h-10" style={{ color: palette.primary }} />
                </button>
                <button className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 neo-button-detail" style={{ backgroundColor: palette.background, boxShadow: '7px 7px 15px #bec8e4, -7px -7px 15px #ffffff' }}>
                     <Icon name="fast-forward" className="w-8 h-8" style={{ color: palette.text }} />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};
export default NeomorphismContent;