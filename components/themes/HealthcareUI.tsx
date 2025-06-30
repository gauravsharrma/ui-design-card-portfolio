
import React from 'react';
import { ThemeCardProps } from '../../types';
import Icon from '../shared/Icon';

const HealthcareUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-4 flex flex-col bg-white text-gray-800 border border-gray-200 ${className}`}>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-blue-900">My Health</h3>
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <img src="https://picsum.photos/seed/patient/40" alt="Patient" className="w-8 h-8 rounded-full" />
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-4 mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="heart-pulse" className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-semibold text-blue-800">Vitals are Stable</p>
                <p className="text-sm text-blue-600">Last checked: 8:15 AM</p>
              </div>
            </div>
          </div>

          <h4 className="font-semibold text-gray-600 mb-2">Upcoming Appointments</h4>
          <div className="space-y-2">
            <div className="bg-gray-50 rounded-lg p-3 text-sm">
              <p className="font-medium">Dr. Evelyn Reed (Cardiology)</p>
              <p className="text-gray-500">Oct 28, 2024 at 11:00 AM</p>
            </div>
          </div>
        </div>

        <button className="w-full mt-6 text-center p-3 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition-colors active:scale-[0.98]">
          Book a New Appointment
        </button>
      </div>
    </div>
  );
};

export default HealthcareUI;
