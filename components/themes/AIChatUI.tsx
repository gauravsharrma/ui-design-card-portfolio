
import React from 'react';
import { ThemeCardProps } from '../../types';

const AIChatUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl p-4 flex flex-col justify-between bg-white border border-gray-200 text-sm ${className}`}>
        <div className="flex-grow space-y-4 overflow-y-auto pr-2">
            {/* AI Bubble */}
            <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">AI</div>
                <div className="p-3 rounded-lg rounded-tl-none bg-gray-100 text-gray-800 max-w-[80%]">
                    <p>Hello! How can I help you design something amazing today?</p>
                </div>
            </div>
            {/* User Bubble */}
             <div className="flex items-start space-x-2 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs">U</div>
                <div className="p-3 rounded-lg rounded-tr-none bg-blue-500 text-white max-w-[80%]">
                    <p>Create a UI card for an AI chat interface.</p>
                </div>
            </div>
             {/* AI Typing... */}
            <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">AI</div>
                <div className="p-3 rounded-lg rounded-tl-none bg-gray-100 text-gray-800 max-w-[80%]">
                    <div className="flex items-center space-x-1">
                        <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                        <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                        <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-4 flex items-center space-x-2 p-2 rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
            <input type="text" placeholder="Send a message..." className="flex-grow bg-transparent focus:outline-none"/>
            <button className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-md text-white hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            </button>
        </div>
    </div>
  );
};
export default AIChatUI;