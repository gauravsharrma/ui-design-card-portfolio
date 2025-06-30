
import React from 'react';
import { ThemeCardProps } from '../../types';
import Icon from '../shared/Icon';

const LegalUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-lg p-5 flex flex-col bg-gray-50 text-gray-900 border border-gray-300 ${className}`}>
      <div className="border-b border-gray-300 pb-3 mb-4">
        <h3 className="font-playfair text-2xl font-bold">Case Documents</h3>
        <p className="text-sm text-gray-500">Case ID: #LN-2024-8812</p>
      </div>

      <div className="flex-grow space-y-3 overflow-y-auto">
        <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-md">
          <div className="flex items-center space-x-3">
            <Icon name="file-text" className="w-5 h-5 text-red-600" />
            <span className="font-medium">Initial_Petition.pdf</span>
          </div>
          <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">Approved</span>
        </div>
         <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-md">
          <div className="flex items-center space-x-3">
            <Icon name="file-text" className="w-5 h-5 text-blue-600" />
            <span className="font-medium">Discovery_Request.docx</span>
          </div>
          <span className="text-xs font-semibold text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded-full">Pending</span>
        </div>
         <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-md">
          <div className="flex items-center space-x-3">
            <Icon name="file-text" className="w-5 h-5 text-gray-500" />
            <span className="font-medium">Exhibit_A.pdf</span>
          </div>
          <span className="text-xs font-semibold text-gray-700 bg-gray-200 px-2 py-0.5 rounded-full">Archived</span>
        </div>
      </div>

      <button className="w-full mt-5 text-center p-2.5 rounded-md bg-gray-800 text-white font-semibold hover:bg-black transition-colors active:scale-[0.98]">
        Upload Document
      </button>
    </div>
  );
};

export default LegalUI;
