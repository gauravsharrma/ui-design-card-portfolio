import React from 'react';
import { Palette } from '../../../types';

const SkeuomorphismContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  const Book = ({ title, imgSeed, color }: { title: string; imgSeed: string; color: string }) => (
    <div className="relative w-24 h-32 rounded-md flex-shrink-0 shadow-lg group" style={{ backgroundColor: color }}>
        <img src={`https://picsum.photos/seed/${imgSeed}/100/150`} alt={title} className="w-full h-full object-cover rounded-md"/>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-2 left-2 text-white font-bold text-sm">{title}</div>
    </div>
  );

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#DCCDA5', backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')" }}>
      <div className="container mx-auto px-4">
        <div className="p-8 rounded-lg" style={{ backgroundColor: 'rgba(0,0,0,0.1)', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)' }}>
            <h2 className="text-3xl font-playfair font-bold text-white text-center mb-8" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>Digital Bookshelf</h2>
            <div className="bg-[#4a3728] p-4 rounded-md shadow-inner">
                <div className="flex space-x-4 overflow-x-auto pb-4">
                    <Book title="Design" imgSeed="book1" color="#4A90E2" />
                    <Book title="Code" imgSeed="book2" color="#D0021B" />
                    <Book title="Create" imgSeed="book3" color="#F5A623" />
                    <Book title="Innovate" imgSeed="book4" color="#7ED321" />
                    <Book title="Inspire" imgSeed="book5" color="#BD10E0" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default SkeuomorphismContent;
