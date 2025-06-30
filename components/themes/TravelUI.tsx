
import React from 'react';
import { ThemeCardProps } from '../../types';
import Icon from '../shared/Icon';

const TravelUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl flex flex-col justify-end bg-cover bg-center text-white overflow-hidden ${className}`} style={{backgroundImage: "url('https://picsum.photos/seed/travel/400/600')"}}>
      <div className="p-5 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-3xl font-extrabold mb-4 leading-tight">Find your next adventure</h3>
        <div className="space-y-3">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex items-center space-x-2">
            <Icon name="map-pin" className="w-5 h-5 text-white/80"/>
            <input type="text" defaultValue="Paris, France" className="bg-transparent w-full focus:outline-none placeholder-white/70" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg text-center">
              <p className="text-xs">Check In</p>
              <p className="font-semibold">Nov 12</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg text-center">
              <p className="text-xs">Check Out</p>
              <p className="font-semibold">Nov 19</p>
            </div>
          </div>
        </div>
        <button className="w-full mt-4 text-center p-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors active:scale-[0.98]">
          <Icon name="plane" className="w-5 h-5 inline-block mr-2 -mt-1"/>
          Find Flights
        </button>
      </div>
    </div>
  );
};

export default TravelUI;
