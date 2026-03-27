import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  PlayCircle, 
  Maximize2, 
  Filter, 
  Download, 
  ChevronRight,
  Camera,
  Film
} from 'lucide-react';

const MediaGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Exhibitions', 'Manufacturing', 'Events', 'Awards'];

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      category: 'Exhibitions',
      title: 'BENGALURU Textile Expo 2026',
      url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      type: 'video',
      category: 'Manufacturing',
      title: 'Modern Looms in Action',
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      type: 'image',
      category: 'Events',
      title: 'Annual Members Meet',
      url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      type: 'image',
      category: 'Awards',
      title: 'Best Exporter Award 2025',
      url: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 5,
      type: 'image',
      category: 'Manufacturing',
      title: 'Quality Control Lab',
      url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 6,
      type: 'video',
      category: 'Exhibitions',
      title: 'Showcase: Traditional Chanderi',
      url: 'https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const filteredMedia = activeFilter === 'All' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pb-20">
      
      {/* 1. Header Section (Matches Site Theme) */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">
              Media <span className="text-amber-500">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 border-l-4 border-amber-600 pl-6 max-w-2xl mx-auto md:mx-0">
              "A visual journey of the Parekh Chamber Of Textile. Glimpse our rich heritage, advanced technology, and key events."
            </p>
          </div>
          <div className="flex gap-4">
             <div className="bg-slate-800 p-6 border border-slate-700 text-center">
                <span className="text-amber-500 text-3xl font-bold block">1.2k+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest">Media Files</span>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Filter Bar (Modern & Sticky) */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeFilter === cat 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <Filter className="w-4 h-4" /> Filter By Sector
          </div>
        </div>
      </div>

      {/* 3. Media Grid */}
      <main className="max-w-7xl mx-auto mt-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.map((item) => (
            <div key={item.id} className="group relative overflow-hidden bg-slate-100 aspect-[4/3] cursor-pointer shadow-lg">
              
              {/* Media Content */}
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-amber-500 text-[10px] font-black uppercase tracking-widest">{item.category}</span>
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                  <div className="bg-white p-3 rounded-full text-slate-900 hover:bg-amber-500 hover:text-white transition-colors">
                    {item.type === 'video' ? <PlayCircle className="w-6 h-6" /> : <Maximize2 className="w-6 h-6" />}
                  </div>
                </div>
              </div>

              {/* Type Badge (Visible always) */}
              <div className="absolute top-4 right-4 bg-slate-900/50 backdrop-blur-md p-2 text-white">
                {item.type === 'video' ? <Film className="w-4 h-4" /> : <Camera className="w-4 h-4" />}
              </div>
            </div>
          ))}
        </div>

        {/* 4. Load More / View More */}
        <div className="mt-20 text-center">
            <button className="border-2 border-slate-900 px-12 py-5 font-bold uppercase text-xs tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all flex items-center gap-4 mx-auto">
              Load More Media <ChevronRight className="w-4 h-4" />
            </button>
        </div>
      </main>

      {/* 5. Highlight Section (Matches About Us CTA) */}
      <section className="mt-24 px-6">
        <div className="max-w-5xl mx-auto bg-amber-600 p-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl font-black uppercase tracking-tight">Need High-Res Press Kit?</h2>
            <p className="text-amber-100 mt-2">Media professionals can download our official branding and asset kit here.</p>
          </div>
          <button className="bg-slate-950 text-white px-10 py-4 font-bold uppercase text-xs tracking-widest hover:bg-slate-800 transition-all border-2 border-slate-900 flex items-center gap-2">
            <Download className="w-4 h-4" /> Download Kit
          </button>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="mt-20 py-10 border-t border-slate-100 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
           Parekh Chamber Of Textile Media Archives — BENGALURU, KA Central Unit © 2026.
        </p>
      </footer>

    </div>
  );
};

export default MediaGallery;