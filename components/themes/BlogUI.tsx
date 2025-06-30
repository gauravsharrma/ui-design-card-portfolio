
import React from 'react';
import { ThemeCardProps } from '../../types';

const BlogUI: React.FC<ThemeCardProps> = ({ className }) => {
  return (
    <div className={`aspect-[3/4] font-inter rounded-2xl flex flex-col bg-white text-black overflow-hidden border border-gray-200 ${className}`}>
        <div className="relative h-1/3">
            <img src="https://picsum.photos/seed/blog/400/200" alt="Blog banner" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="p-5 flex-grow flex flex-col justify-between">
            <div>
                <h3 className="font-playfair font-bold text-2xl leading-tight text-gray-900">
                    The Art of Storytelling in Digital Design
                </h3>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    Discover how narrative techniques can transform user experience, creating engaging and memorable products...
                </p>
            </div>
            
            <div className="mt-4">
                <div className="flex items-center space-x-3">
                    <span className="text-xs font-medium bg-purple-100 text-purple-700 px-2 py-1 rounded">UX Design</span>
                    <span className="text-xs font-medium bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Creativity</span>
                </div>
                 <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
                    <img src="https://picsum.photos/seed/author/40" alt="Author" className="w-10 h-10 rounded-full" />
                    <div className="ml-3">
                        <p className="font-semibold text-sm">Alex Rivera</p>
                        <p className="text-xs text-gray-500">Published on Aug 21, 2024</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BlogUI;
