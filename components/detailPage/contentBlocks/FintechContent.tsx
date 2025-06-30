import React from 'react';
import { Palette } from '../../../types';
import Icon from '../../shared/Icon';

const FintechContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background, color: palette.text }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Credit Card */}
            <div className="md:col-span-1 p-6 rounded-2xl flex flex-col justify-between" style={{ background: `linear-gradient(45deg, ${palette.primary}, #FFD700)` }}>
                <div>
                    <Icon name="zap" className="w-8 h-8 text-black" />
                </div>
                <div>
                    <p className="text-xl font-mono tracking-widest text-black">.... .... .... 1234</p>
                    <p className="font-bold text-black">Jane Doe</p>
                </div>
            </div>
            {/* Transactions */}
            <div className="md:col-span-2 p-6 rounded-2xl" style={{ backgroundColor: palette.secondary }}>
                <h3 className="font-bold text-xl mb-4">Transactions</h3>
                <div className="space-y-3">
                    <div className="flex justify-between"><span>Apple</span><span className="font-bold">-$9.99</span></div>
                    <div className="flex justify-between"><span>Gas Station</span><span className="font-bold">-$45.50</span></div>
                    <div className="flex justify-between"><span>Paycheck</span><span className="font-bold text-green-400">+$2,500.00</span></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default FintechContent;
