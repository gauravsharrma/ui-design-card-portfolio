import React from 'react';
import { Palette } from '../../../types';

const NewsContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background, color: palette.text }}>
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto">
            <p className="text-sm font-bold tracking-wider uppercase" style={{ color: palette.primary }}>Technology</p>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mt-2">The Quiet Rise of AI Companions</h1>
            <p className="mt-4 text-lg opacity-70">By Alex Rivera | Published 3 hours ago</p>
            
            <figure className="my-8">
                <img src="https://picsum.photos/seed/news-article/800/400" className="w-full rounded-lg" alt="AI"/>
                <figcaption className="text-xs text-center mt-2 opacity-60">AI is becoming more integrated into our daily lives.</figcaption>
            </figure>

            <div className="prose prose-lg max-w-none opacity-90">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </article>
      </div>
    </section>
  );
};
export default NewsContent;
