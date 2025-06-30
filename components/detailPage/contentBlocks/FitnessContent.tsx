import React from 'react';
import { Palette } from '../../../types';
import Icon from '../../shared/Icon';

const FitnessContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background, color: palette.text }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto p-8 rounded-2xl" style={{ backgroundColor: palette.secondary }}>
            <h2 className="text-3xl font-bold mb-6">Workout History</h2>
            <div className="space-y-4">
                <div className="p-4 rounded-lg flex justify-between items-center" style={{backgroundColor: palette.background}}>
                    <div>
                        <p className="font-bold">Chest Day</p>
                        <p className="text-sm opacity-60">Mon, Oct 21</p>
                    </div>
                    <p className="font-bold" style={{color: palette.primary}}>45 min</p>
                </div>
                <div className="p-4 rounded-lg flex justify-between items-center" style={{backgroundColor: palette.background}}>
                    <div>
                        <p className="font-bold">Leg Day</p>
                        <p className="text-sm opacity-60">Wed, Oct 23</p>
                    </div>
                    <p className="font-bold" style={{color: palette.primary}}>60 min</p>
                </div>
                 <div className="p-4 rounded-lg flex justify-between items-center" style={{backgroundColor: palette.background}}>
                    <div>
                        <p className="font-bold">Cardio</p>
                        <p className="text-sm opacity-60">Fri, Oct 25</p>
                    </div>
                    <p className="font-bold" style={{color: palette.primary}}>30 min</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default FitnessContent;
