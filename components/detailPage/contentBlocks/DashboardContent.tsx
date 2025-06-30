import React from 'react';
import { Palette } from '../../../types';
import Icon from '../../shared/Icon';

const DashboardContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto p-6 rounded-lg" style={{ backgroundColor: palette.secondary, color: palette.text }}>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Quarterly Revenue</h2>
                <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 text-sm rounded-md" style={{backgroundColor: palette.primary, color: palette.background}}>2024</button>
                    <button className="px-3 py-1 text-sm rounded-md" style={{backgroundColor: palette.secondary, color: palette.text, border: `1px solid ${palette.text}`}}>Filters</button>
                </div>
            </div>
            <div className="relative h-64">
                {/* Chart Grid Lines */}
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="absolute w-full border-t" style={{ bottom: `${(i/4)*100}%`, borderColor: palette.text, opacity: 0.1 }}></div>
                ))}
                {/* Chart Path */}
                <svg className="absolute w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <path d="M 0 80 C 50 20, 100 90, 150 50 S 250 10, 300 40" fill="none" stroke={palette.primary} strokeWidth="2" />
                </svg>
                 {/* Chart Data Points */}
                 <div className="absolute w-3 h-3 rounded-full border-2" style={{left: '50%', top: 'calc(50% - 6px)', backgroundColor: palette.background, borderColor: palette.primary }}></div>
                 <div className="absolute w-3 h-3 rounded-full border-2" style={{left: '99%', top: 'calc(40% - 6px)', backgroundColor: palette.background, borderColor: palette.primary }}></div>

            </div>
            <div className="flex justify-between text-xs mt-2" style={{opacity: 0.7}}>
                <span>Jan</span>
                <span>Apr</span>
                <span>Jul</span>
                <span>Oct</span>
                <span>Dec</span>
            </div>
        </div>
      </div>
    </section>
  );
};
export default DashboardContent;
