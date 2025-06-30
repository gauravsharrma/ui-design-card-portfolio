import React from 'react';
import { Palette } from '../../../types';

const BlogContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  const ArticlePreview = ({ title, excerpt, imgSeed, tag }: { title: string; excerpt: string; imgSeed: string; tag: string }) => (
    <div className="group">
      <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
        <img src={`https://picsum.photos/seed/${imgSeed}/600/400`} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <p className="mt-4 text-sm font-bold" style={{ color: palette.primary }}>{tag}</p>
      <h3 className="mt-1 text-xl font-playfair font-bold group-hover:underline" style={{ color: palette.text }}>{title}</h3>
      <p className="mt-2 text-md" style={{ color: palette.text, opacity: 0.7 }}>{excerpt}</p>
    </div>
  );

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-playfair" style={{ color: palette.text }}>From the Blog</h2>
          <p className="max-w-xl mx-auto mt-2" style={{ color: palette.text, opacity: 0.7 }}>
            Insights, stories, and tips on design, technology, and creativity.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <ArticlePreview 
            title="The Psychology of Color in UI Design"
            excerpt="Discover how color impacts user emotion and behavior."
            imgSeed="blog-1"
            tag="Design Theory"
          />
          <ArticlePreview 
            title="A Guide to Responsive Typography"
            excerpt="Mastering fluid type scales for any screen size."
            imgSeed="blog-2"
            tag="Web Development"
          />
          <ArticlePreview 
            title="My Favorite VS Code Extensions for 2024"
            excerpt="Boost your productivity with these essential tools."
            imgSeed="blog-3"
            tag="Productivity"
          />
        </div>
      </div>
    </section>
  );
};
export default BlogContent;
