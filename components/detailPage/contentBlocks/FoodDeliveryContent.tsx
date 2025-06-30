import React from 'react';
import { Palette } from '../../../types';
import OriginalIcon from '../../shared/Icon';

const Icon: React.FC<{name: string, className: string}> = ({name, ...props}) => {
    switch(name) {
        case 'plus': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
        default: return <OriginalIcon name={name} {...props} />;
    }
}

const FoodDeliveryContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  const MenuItem = ({ name, price, imgSeed }: { name: string; price: string; imgSeed: string }) => (
    <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50">
        <img src={`https://picsum.photos/seed/${imgSeed}/80`} className="w-20 h-20 object-cover rounded-md"/>
        <div className="flex-grow">
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm font-bold mt-1" style={{color: palette.primary}}>{price}</p>
        </div>
        <button className="p-2 border rounded-full"><Icon name="plus" className="w-5 h-5"/></button>
    </div>
  );

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.secondary, color: palette.text }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex md:flex-row flex-col gap-8">
            {/* Menu */}
            <div className="w-full md:w-2/3 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold">Burger Palace Menu</h2>
                <div className="mt-6 space-y-4">
                    <MenuItem name="Goliath Burger" price="$14.50" imgSeed="food1" />
                    <MenuItem name="Classic Cheeseburger" price="$10.00" imgSeed="food2" />
                    <MenuItem name="Fries" price="$4.00" imgSeed="food3" />
                </div>
            </div>
            {/* Cart */}
            <div className="w-full md:w-1/3 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">Your Order</h3>
                <div className="mt-4 space-y-2 text-sm border-b pb-4">
                    <div className="flex justify-between"><span>1x Goliath Burger</span><span>$14.50</span></div>
                </div>
                <div className="flex justify-between font-bold mt-4"><span>Total</span><span>$14.50</span></div>
                <button className="w-full py-3 mt-6 text-white font-bold rounded-lg" style={{backgroundColor: palette.primary}}>Checkout</button>
            </div>
        </div>
      </div>
    </section>
  );
};
export default FoodDeliveryContent;