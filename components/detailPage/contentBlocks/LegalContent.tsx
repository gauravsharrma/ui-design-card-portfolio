import React from 'react';
import { Palette } from '../../../types';
import Icon from '../../shared/Icon';

const LegalContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background, color: palette.text }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex gap-8">
            {/* Sidebar */}
            <div className="w-1/4 p-4 bg-white border rounded-md">
                <h3 className="font-bold font-playfair">Case #8812</h3>
                <ul className="mt-4 space-y-2 text-sm">
                    <li className="font-semibold" style={{color: palette.primary}}>Petition.pdf</li>
                    <li className="opacity-70">Exhibit_A.pdf</li>
                    <li className="opacity-70">Discovery.docx</li>
                </ul>
            </div>
            {/* Document Viewer */}
            <div className="w-3/4 p-6 bg-white border rounded-md">
                <h2 className="text-xl font-bold font-playfair border-b pb-2 mb-4">Petition.pdf</h2>
                <div className="opacity-60 space-y-3">
                    <p>IN THE CIRCUIT COURT OF THE NINETEENTH JUDICIAL CIRCUIT,</p>
                    <p>Comes now the Plaintiff, by and through their undersigned counsel, and for their causes of action against the Defendant, states and alleges as follows...</p>
                    <div className="p-3 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 text-sm">
                        <p><span className="font-bold">Annotation by J. Doe:</span> Need to verify this date.</p>
                    </div>
                </div>
                 <button className="mt-6 py-2 px-4 rounded-md font-semibold text-white" style={{backgroundColor: palette.primary}}>Sign Document</button>
            </div>
        </div>
      </div>
    </section>
  );
};
export default LegalContent;
