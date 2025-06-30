import React from 'react';
import { ThemeDetail } from '../../types';
import Icon from '../shared/Icon';

interface FeatureSectionProps {
  theme: ThemeDetail;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ theme }) => {
  const { features } = theme;

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl text-center md:text-left flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
              style={{ backgroundColor: 'var(--card-bg)', color: 'var(--card-text)' }}
            >
              <div
                className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--background)' }}
              >
                <Icon name={feature.icon} className="w-8 h-8" style={{ color: 'var(--primary)' }} />
              </div>
              <div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 opacity-80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
