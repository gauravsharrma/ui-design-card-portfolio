import React from 'react';
import { Palette } from '../../../types';
import Icon from '../../shared/Icon';

const BentoGridContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  const Box = ({ className = '', children, style }: { className?: string; children: React.ReactNode; style?: React.CSSProperties }) => (
    <div className={`rounded-2xl p-6 ${className}`} style={{ backgroundColor: palette.secondary, ...style }}>
      {children}
    </div>
  );

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background, color: palette.text }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Your Dashboard, Your Way</h2>
          <p className="max-w-xl mx-auto mt-2 opacity-70">A modular layout to see what matters most to you.</p>
        </div>
        <div className="grid md:grid-cols-4 auto-rows-[120px] gap-4">
          <Box className="md:col-span-2 md:row-span-2 flex flex-col justify-between">
            <h3 className="font-bold text-lg">Project Progress</h3>
            <div className="w-full bg-gray-200 rounded-full h-4"><div className="bg-blue-500 h-4 rounded-full" style={{ width: '75%' }}></div></div>
          </Box>
          <Box className="md:col-span-1 md:row-span-1 flex items-center justify-center" style={{ backgroundColor: palette.primary, color: 'white' }}>
            <Icon name="check-circle" className="w-12 h-12" />
          </Box>
          <Box className="md:col-span-1 md:row-span-2 flex flex-col">
            <h3 className="font-bold text-lg">Upcoming</h3>
            <p className="text-sm mt-2 opacity-80">10:00 - Team Sync</p>
            <p className="text-sm mt-1 opacity-80">12:30 - Lunch</p>
          </Box>
          <Box className="md:col-span-1 md:row-span-1 text-center">
            <h3 className="font-bold">Tasks</h3>
            <p className="text-4xl font-extrabold">12</p>
          </Box>
          <Box className="md:col-span-2 md:row-span-1 flex items-center justify-between">
            <h3 className="font-bold text-lg">New Messages</h3>
            <div className="flex -space-x-2">
                <img src="https://picsum.photos/seed/avatar1/40" className="w-8 h-8 rounded-full border-2 border-white"/>
                <img src="https://picsum.photos/seed/avatar2/40" className="w-8 h-8 rounded-full border-2 border-white"/>
            </div>
          </Box>
        </div>
      </div>
    </section>
  );
};
export default BentoGridContent;