import React from 'react';
import { Palette } from '../../../types';
import OriginalIcon from '../../shared/Icon';

const Icon: React.FC<{name: string, className: string}> = ({name, ...props}) => {
    switch(name) {
        case 'chevron-down': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>;
        default: return <OriginalIcon name={name} {...props} />;
    }
}

const EdTechContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  const Module = ({ title, lessons, completed }: { title: string; lessons: number; completed: number }) => (
    <div className="p-4 rounded-lg" style={{ backgroundColor: palette.secondary }}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm opacity-60">{completed} / {lessons} lessons completed</p>
        </div>
        <Icon name="chevron-down" className="w-5 h-5" />
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
        <div className="h-2 rounded-full" style={{ width: `${(completed/lessons)*100}%`, backgroundColor: palette.primary }}></div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background, color: palette.text }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Course Curriculum</h2>
          <div className="space-y-4">
            <Module title="Module 1: Introduction" lessons={5} completed={5} />
            <Module title="Module 2: Core Concepts" lessons={8} completed={3} />
            <Module title="Module 3: Advanced Topics" lessons={6} completed={0} />
            <Module title="Module 4: Final Project" lessons={2} completed={0} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdTechContent;