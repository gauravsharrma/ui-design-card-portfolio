import React from 'react';
import { Palette } from '../../../types';
import Icon from '../../shared/Icon';

const PortfolioContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  const ProjectCard = ({ title, category, imgSeed }: { title: string; category: string; imgSeed: string }) => (
    <div className="group relative aspect-video rounded-lg overflow-hidden" style={{ backgroundColor: palette.secondary }}>
      <img src={`https://picsum.photos/seed/${imgSeed}/400/300`} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-white/80">{category}</p>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold" style={{ color: palette.text }}>Selected Works</h2>
          <p className="max-w-xl mx-auto mt-2" style={{ color: palette.text, opacity: 0.7 }}>
            A collection of my favorite projects. Each one represents a unique challenge and a story of creative problem-solving.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard title="Aura UI Kit" category="Web Design" imgSeed="port-1" />
            <ProjectCard title="Fintech Mobile App" category="UX/UI Design" imgSeed="port-2" />
            <ProjectCard title="Branding for Nova" category="Identity" imgSeed="port-3" />
            <ProjectCard title="E-commerce Platform" category="Development" imgSeed="port-4" />
        </div>
      </div>
    </section>
  );
};
export default PortfolioContent;
