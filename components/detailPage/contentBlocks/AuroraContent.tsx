import React from 'react';
import { Palette } from '../../../types';
import Icon from '../../shared/Icon';

const AuroraContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  const PricingCard = ({ plan, price, features, recommended }: { plan: string; price: string; features: string[]; recommended?: boolean }) => (
    <div className={`relative p-8 rounded-2xl border ${recommended ? 'border-purple-500' : 'border-gray-700'}`} style={{ backgroundColor: palette.secondary }}>
      {recommended && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-3 py-1 text-sm font-bold text-white bg-purple-600 rounded-full">Recommended</div>
      )}
      <h3 className="text-2xl font-bold text-center">{plan}</h3>
      <p className="text-4xl font-extrabold text-center mt-4">{price}<span className="text-lg opacity-50">/mo</span></p>
      <ul className="mt-6 space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-center space-x-3">
            <Icon name="check-circle" className="w-5 h-5 text-teal-400" />
            <span className="opacity-80">{f}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 mt-8 rounded-lg font-bold ${recommended ? 'bg-purple-600 text-white' : 'bg-gray-700'}`}>
        Choose Plan
      </button>
    </div>
  );

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: palette.background, color: palette.text }}>
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-teal-500 via-cyan-400 to-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse [animation-delay:2s]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
          <p className="max-w-xl mx-auto mt-2 opacity-80">
            Choose the plan that's right for you. No hidden fees.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <PricingCard plan="Starter" price="$19" features={["1 Project", "10GB Storage", "Basic Analytics"]} />
          <PricingCard plan="Pro" price="$49" features={["Unlimited Projects", "100GB Storage", "Advanced Analytics", "API Access"]} recommended />
          <PricingCard plan="Enterprise" price="Contact" features={["Everything in Pro", "Dedicated Support", "Custom Integrations"]} />
        </div>
      </div>
    </section>
  );
};
export default AuroraContent;
