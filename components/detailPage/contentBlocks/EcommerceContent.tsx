import React from 'react';
import { Palette } from '../../../types';
import Icon from '../../shared/Icon';

const EcommerceContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  const ProductCard = ({ name, price, imgSeed }: { name: string; price: string; imgSeed: string }) => (
    <div className="border rounded-lg overflow-hidden" style={{ backgroundColor: palette.secondary, borderColor: 'rgba(0,0,0,0.05)' }}>
      <div className="aspect-square bg-gray-100">
        <img src={`https://picsum.photos/seed/${imgSeed}/400`} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold" style={{ color: palette.text }}>{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-extrabold" style={{ color: palette.text }}>{price}</p>
          <button className="p-2 rounded-md" style={{ backgroundColor: palette.primary, color: 'white' }}>
            <Icon name="shopping-cart" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold" style={{ color: palette.text }}>New Arrivals</h2>
          <p className="max-w-xl mx-auto mt-2" style={{ color: palette.text, opacity: 0.7 }}>
            Check out the latest additions to our collection.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ProductCard name="Classic Leather Watch" price="$250" imgSeed="ecom-1" />
          <ProductCard name="Wireless Headphones" price="$199" imgSeed="ecom-2" />
          <ProductCard name="Minimalist Backpack" price="$89" imgSeed="ecom-3" />
          <ProductCard name="Scented Candle" price="$35" imgSeed="ecom-4" />
        </div>
      </div>
    </section>
  );
};
export default EcommerceContent;
