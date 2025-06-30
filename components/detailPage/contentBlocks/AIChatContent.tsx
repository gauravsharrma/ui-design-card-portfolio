import React from 'react';
import { Palette } from '../../../types';
import Icon from '../../shared/Icon';

const AIChatContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.secondary }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto h-[600px] flex flex-col p-4 rounded-2xl shadow-lg" style={{ backgroundColor: palette.background }}>
            <div className="flex-grow space-y-6 overflow-y-auto pr-2">
                {/* AI */}
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: palette.accent, color: 'white' }}><Icon name="bot" className="w-6 h-6"/></div>
                    <div className="p-4 rounded-lg rounded-tl-none" style={{ backgroundColor: palette.secondary, color: palette.text }}>Hello! I'm a conversational AI. Ask me to design a component.</div>
                </div>
                {/* User */}
                <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="w-10 h-10 rounded-full flex-shrink-0 bg-gray-200 flex items-center justify-center text-gray-500 font-bold">U</div>
                    <div className="p-4 rounded-lg rounded-tr-none text-white" style={{ backgroundColor: palette.primary }}>Create a pricing table with three tiers.</div>
                </div>
                 {/* AI */}
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: palette.accent, color: 'white' }}><Icon name="bot" className="w-6 h-6"/></div>
                    <div className="p-4 rounded-lg rounded-tl-none" style={{ backgroundColor: palette.secondary, color: palette.text }}>Of course. Should one of the tiers be highlighted as "recommended"?</div>
                </div>
            </div>
            <div className="mt-4 flex items-center space-x-2 p-2 rounded-lg border focus-within:ring-2" style={{borderColor: 'var(--accent)'}}>
                <input type="text" placeholder="Send a message..." className="flex-grow bg-transparent focus:outline-none" style={{color: palette.text}}/>
                <button className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-md text-white hover:opacity-90 transition-colors" style={{backgroundColor: palette.primary}}>
                    <Icon name="send" className="w-5 h-5"/>
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};
export default AIChatContent;
