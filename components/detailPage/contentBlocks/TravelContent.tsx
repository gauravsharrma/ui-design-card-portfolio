import React from 'react';
import { Palette } from '../../../types';
import Icon from '../../shared/Icon';

const TravelContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.secondary, color: palette.text }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
            {/* Search and Filters */}
            <div className="w-full md:w-1/3 p-6 rounded-lg bg-white shadow-md">
                <h3 className="font-bold text-xl mb-4">Book your trip</h3>
                <div className="space-y-4">
                    <div><label className="text-sm font-medium">Destination</label><input type="text" defaultValue="Tokyo, Japan" className="w-full p-2 mt-1 border rounded-md"/></div>
                    <div><label className="text-sm font-medium">Dates</label><input type="text" defaultValue="Nov 12 - Nov 19" className="w-full p-2 mt-1 border rounded-md"/></div>
                    <button className="w-full py-3 rounded-lg text-white font-bold" style={{backgroundColor: palette.primary}}>Search</button>
                </div>
            </div>
            {/* Results */}
            <div className="w-full md:w-2/3">
                <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-white rounded-lg shadow-md">
                        <img src="https://picsum.photos/seed/hotel1/150" className="w-32 h-32 object-cover rounded-md"/>
                        <div>
                            <h4 className="font-bold text-lg">Shinjuku Grand Hotel</h4>
                            <p className="text-sm opacity-70">Tokyo, Japan</p>
                            <p className="font-bold text-xl mt-4" style={{color: palette.primary}}>$250<span className="font-normal text-sm opacity-70">/night</span></p>
                        </div>
                    </div>
                     <div className="flex gap-4 p-4 bg-white rounded-lg shadow-md">
                        <img src="https://picsum.photos/seed/hotel2/150" className="w-32 h-32 object-cover rounded-md"/>
                        <div>
                            <h4 className="font-bold text-lg">Shibuya Boutique Inn</h4>
                            <p className="text-sm opacity-70">Tokyo, Japan</p>
                            <p className="font-bold text-xl mt-4" style={{color: palette.primary}}>$180<span className="font-normal text-sm opacity-70">/night</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default TravelContent;
