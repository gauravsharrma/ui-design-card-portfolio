import React from 'react';
import { Palette } from '../../../types';
import Icon from '../../shared/Icon';

const JobBoardContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background, color: palette.text }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
            {/* Main Job Description */}
            <div className="w-full md:w-2/3 p-8 bg-white rounded-lg shadow-sm">
                <h2 className="text-3xl font-bold">Senior Frontend Engineer</h2>
                <p className="text-lg" style={{color: palette.primary}}>Innovate Inc.</p>
                <div className="mt-6">
                    <h3 className="font-bold text-lg mb-2">Responsibilities</h3>
                    <ul className="list-disc list-inside opacity-80 space-y-1">
                        <li>Develop and maintain user-facing features.</li>
                        <li>Build reusable code and libraries for future use.</li>
                        <li>Ensure the technical feasibility of UI/UX designs.</li>
                    </ul>
                </div>
            </div>
            {/* Apply Card */}
            <div className="w-full md:w-1/3">
                 <div className="p-6 bg-white rounded-lg shadow-sm border" style={{borderColor: palette.primary}}>
                    <h3 className="font-bold text-lg text-center">Apply Now</h3>
                    <div className="mt-4 space-y-3">
                        <button className="w-full py-2 border rounded-md flex items-center justify-center gap-2"><Icon name="upload-cloud" className="w-5 h-5"/> Upload Resume</button>
                        <button className="w-full py-2 rounded-md text-white font-bold" style={{backgroundColor: palette.primary}}>Apply with Profile</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default JobBoardContent;
