
import React from 'react';
import { ThemeCardProps } from '../../types';
import Icon from '../shared/Icon';

const FitnessUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-5 flex flex-col justify-between bg-gray-900 text-white border border-green-500/20 ${className}`}>
        <div>
            <h3 className="text-2xl font-bold tracking-tight">Today's Progress</h3>
            <p className="text-gray-400">Let's make it count!</p>
            
            <div className="grid grid-cols-2 gap-3 mt-6 text-center">
                <div className="bg-gray-800 p-3 rounded-lg">
                    <Icon name="flame" className="w-6 h-6 mx-auto text-orange-400"/>
                    <p className="font-bold text-lg mt-1">320</p>
                    <p className="text-xs text-gray-400">kcal</p>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg">
                    <Icon name="heart-pulse" className="w-6 h-6 mx-auto text-red-400"/>
                    <p className="font-bold text-lg mt-1">45<span className="text-sm">min</span></p>
                    <p className="text-xs text-gray-400">Workout</p>
                </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg mt-3">
              <p className="font-semibold text-sm">Weekly Activity</p>
              <div className="h-16 w-full flex items-end space-x-2 mt-2">
                  <div className="flex-1 h-[40%] bg-green-500 rounded-t-sm"></div>
                  <div className="flex-1 h-[60%] bg-green-500 rounded-t-sm"></div>
                  <div className="flex-1 h-[30%] bg-green-500 rounded-t-sm"></div>
                  <div className="flex-1 h-[80%] bg-green-500 rounded-t-sm"></div>
                  <div className="flex-1 h-[50%] bg-green-500 rounded-t-sm"></div>
              </div>
            </div>
        </div>
        
        <button className="w-full mt-6 p-3 rounded-xl bg-green-500 text-gray-900 font-bold hover:bg-green-600 transition-colors active:scale-[0.98]">
            Start New Workout
        </button>
    </div>
  );
};

export default FitnessUI;
