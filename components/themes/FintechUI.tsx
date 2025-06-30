
import React from 'react';
import { ThemeCardProps } from '../../types';
import Icon from '../shared/Icon';

const FintechUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-5 flex flex-col justify-between bg-gray-900 text-white border border-yellow-400/20 ${className}`}>
        <div>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-gray-400 text-sm">Total Balance</p>
                    <p className="text-3xl font-bold tracking-tight">$12,450.78</p>
                </div>
                <Icon name="shield-check" className="w-7 h-7 text-yellow-400"/>
            </div>

            <div className="mt-6">
                <h4 className="text-gray-300 font-semibold mb-2">Recent Transactions</h4>
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                        <p>Starbucks</p>
                        <p className="font-medium text-red-400">-$5.25</p>
                    </div>
                     <div className="flex justify-between items-center">
                        <p>Salary Deposit</p>
                        <p className="font-medium text-green-400">+$2,100.00</p>
                    </div>
                     <div className="flex justify-between items-center">
                        <p>Amazon.com</p>
                        <p className="font-medium text-red-400">-$89.99</p>
                    </div>
                </div>
            </div>
        </div>
        
        <button className="w-full mt-6 p-3 rounded-lg bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-500 transition-colors active:scale-[0.98]">
            Transfer Funds
        </button>
    </div>
  );
};

export default FintechUI;
