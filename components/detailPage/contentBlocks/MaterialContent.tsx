import React from 'react';
import { Palette } from '../../../types';

const MaterialContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  const InputField = ({ label, type = 'text' }: { label: string; type?: string }) => (
    <div className="relative">
      <input
        type={type}
        id={label}
        className="block w-full px-3 py-4 text-md bg-gray-100 rounded-t-lg border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
        style={{ '--tw-ring-color': palette.primary } as any}
        placeholder=" "
      />
      <label
        htmlFor={label}
        className="absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        style={{ color: 'var(--primary)' }}
      >
        {label}
      </label>
    </div>
  );

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.secondary }}>
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto p-8 rounded-lg bg-white shadow-xl">
          <h2 className="text-2xl font-medium text-center mb-6" style={{ color: palette.text }}>Contact Us</h2>
          <form className="space-y-6">
            <InputField label="Full Name" />
            <InputField label="Email Address" type="email" />
            <InputField label="Your Message" />
            <button
              className="w-full py-3 text-white font-medium rounded-md shadow-lg hover:opacity-90 focus:outline-none transition-all active:scale-95"
              style={{ backgroundColor: palette.primary }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default MaterialContent;
