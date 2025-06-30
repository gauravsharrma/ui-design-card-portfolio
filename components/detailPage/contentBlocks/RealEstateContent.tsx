import React from 'react';
import { Palette } from '../../../types';
import Icon from '../../shared/Icon';

const RealEstateContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <section className="h-[700px] flex flex-col" style={{ backgroundColor: palette.background, color: palette.text }}>
      <div className="p-4 border-b" style={{backgroundColor: palette.secondary, borderColor: 'rgba(0,0,0,0.1)'}}>
        <div className="container mx-auto flex gap-2">
            <input type="text" placeholder="Anytown, USA" className="w-1/3 p-2 border rounded-md"/>
            <select className="p-2 border rounded-md"><option>Price Range</option></select>
            <select className="p-2 border rounded-md"><option>Beds & Baths</option></select>
        </div>
      </div>
      <div className="flex-grow container mx-auto p-4 relative">
        <div className="absolute inset-4 bg-gray-300 rounded-lg">
            {/* Dummy Map */}
            <img src="https://picsum.photos/seed/map/1200/600" className="w-full h-full object-cover rounded-lg opacity-50"/>
            {/* Map Pin */}
            <div className="absolute" style={{top: '40%', left: '50%'}}>
                 <div className="p-2 rounded-md font-bold text-white shadow-lg" style={{backgroundColor: palette.primary}}>$780k</div>
                 <Icon name="map-pin" className="w-8 h-8 -ml-1 -mt-2 text-red-500" fill="currentColor"/>
            </div>
        </div>
      </div>
    </section>
  );
};
export default RealEstateContent;
