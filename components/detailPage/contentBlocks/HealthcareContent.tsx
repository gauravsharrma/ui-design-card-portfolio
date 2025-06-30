import React from 'react';
import { Palette } from '../../../types';
import Icon from '../../shared/Icon';

const HealthcareContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  const InputField = ({ label, icon }: { label: string; icon: string }) => (
    <div>
      <label className="block text-sm font-medium mb-1" style={{ color: palette.text, opacity: 0.8 }}>{label}</label>
      <div className="flex items-center p-3 rounded-lg border" style={{ backgroundColor: palette.secondary, borderColor: 'rgba(0,0,0,0.1)' }}>
        <Icon name={icon} className="w-5 h-5 mr-3" style={{ opacity: 0.5 }} />
        <input type="text" className="w-full bg-transparent focus:outline-none" />
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto p-8 rounded-2xl" style={{ backgroundColor: 'white', color: palette.text }}>
            <h2 className="text-2xl font-bold text-center">Book an Appointment</h2>
            <p className="text-center mt-1 opacity-70">Please fill out your details below.</p>
            <div className="mt-8 space-y-4">
                <InputField label="Full Name" icon="user" />
                <InputField label="Date of Birth" icon="calendar" />
                <InputField label="Reason for Visit" icon="edit-3" />
                <button className="w-full py-3 mt-4 rounded-lg font-bold text-white" style={{ backgroundColor: palette.accent }}>
                    Find Available Times
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};
export default HealthcareContent;
