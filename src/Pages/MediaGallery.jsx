import React, { useState, useEffect } from 'react';
import { mediaApi, IMAGE_BASE_URL } from '../utils/api';
import {
  Image as ImageIcon,
  PlayCircle,
  Maximize2,
  Filter,
  Download,
  ChevronRight,
  Camera,
  Film,
  Loader2
} from 'lucide-react';

const MediaGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [backendMedia, setBackendMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = "ParekhChamberofTextile01";

  const categories = ['All', 'Exhibitions', 'Manufacturing', 'Events', 'Awards'];

  const mockMediaItems = [
    {
      id: 1,
      type: 'image',
      category: 'Exhibitions',
      title: 'BENGALURU Textile Expo 2026',
      url: 'https://img.freepik.com/premium-photo/indian-saris_163782-4521.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80'
    },
    {
      id: 2,
      type: 'video',
      category: 'Manufacturing',
      title: 'Modern Looms in Action',
      url: 'https://img.freepik.com/premium-photo/draped-orange-tweed-wool-fabric-as-background-texture_492824-2611.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80'
    },
    {
      id: 3,
      type: 'image',
      category: 'Events',
      title: 'Annual Members Meet',
      url: 'https://img.freepik.com/premium-photo/colorful-rolled-fabrics-displayed-market-sunset_868797-52239.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80'
    },
    {
      id: 4,
      type: 'image',
      category: 'Awards',
      title: 'Best Exporter Award 2025',
      url: 'https://img.freepik.com/free-photo/realistic-satin-silk-red-color-ai-generated-image_511042-663.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80'
    },
    {
      id: 5,
      type: 'image',
      category: 'Manufacturing',
      title: 'Quality Control Lab',
      url: 'https://media.istockphoto.com/id/105680592/photo/indian-scarves-in-many-colors-for-display.jpg?s=612x612&w=0&k=20&c=eGIl-xZv6K7miZSCQjvezFqSoas3H6uVZ4OR7cAhDxs='
    },
    {
      id: 6,
      type: 'video',
      category: 'Exhibitions',
      title: 'Showcase: Traditional Chanderi',
      url: 'https://media.istockphoto.com/id/131399882/photo/sewing-background.jpg?s=612x612&w=0&k=20&c=LB0OtfNMK6IJxblacckKDkpSbLvtMCk_MCS7kmqYLkI='
    }
  ];

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await mediaApi.getMedia(siteId);
        if (response.data.success) {
          setBackendMedia(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching media events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  // Use backend data if available, otherwise use mock data
  const mediaItems = backendMedia.map(item => ({
    id: item._id,
    type: item.type || 'image',
    category: item.category,
    title: item.title,
    url: item.image?.startsWith("http") ? item.image : `${IMAGE_BASE_URL}/${item.image}`
  }));

  const filteredMedia = activeFilter === 'All'
    ? mediaItems
    : mediaItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pb-20">

      {/* 1. Header Section */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">
              Media <span className="text-amber-500">Gallery</span>
            </h1>
            {/* <p className="text-lg md:text-xl text-slate-400 border-l-4 border-amber-600 pl-6 max-w-2xl mx-auto md:mx-0">
              "A visual journey of the Parekh Chamber Of Textile. Glimpse our rich heritage, advanced technology, and key events."
            </p> */}
          </div>
          <div className="flex gap-4">
            <div className="bg-slate-800 p-6 border border-slate-700 text-center">
              <span className="text-amber-500 text-3xl font-bold block">{backendMedia.length > 0 ? backendMedia.length : '1.2k+'}</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">{backendMedia.length > 0 ? 'Events Added' : 'Media Files'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter Bar */}
      {/* <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === cat
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div> */}

      {/* 3. Media Grid */}
      <main className="max-w-7xl mx-auto mt-5 px-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-amber-500 animate-spin mb-4" />
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">
              Aesthetically loading media...
            </p>
          </div>
        ) : mediaItems.length === 0 ? (

          // 🔥 EMPTY STATE UI
          <div className="flex flex-col items-center justify-center py-24 text-center">

            <div className="bg-slate-100 p-6 rounded-full mb-6">
              <ImageIcon className="w-10 h-10 text-amber-500" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
              No Media Available
            </h3>

            <p className="text-slate-500 text-sm md:text-base max-w-md mb-6">
              At present, No event photos to be uploaded
            </p>

            <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">
              Please check back later
            </div>

          </div>

        ) : (

          // 🔥 NORMAL GRID
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia.map((item) => (
              <div key={item.id} className="group relative overflow-hidden bg-slate-100 aspect-[4/3] cursor-pointer shadow-lg">

                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <span className="text-amber-500 text-[10px] font-black uppercase tracking-widest">
                        {item.category}
                      </span>
                      <h3 className="text-white text-xl font-bold">
                        {item.title}
                      </h3>
                    </div>
                    <div className="bg-white p-3 rounded-full text-slate-900 hover:bg-amber-500 hover:text-white transition-colors">
                      {item.type === 'video' ? <PlayCircle className="w-6 h-6" /> : <Maximize2 className="w-6 h-6" />}
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-slate-900/50 backdrop-blur-md p-2 text-white">
                  {item.type === 'video' ? <Film className="w-4 h-4" /> : <Camera className="w-4 h-4" />}
                </div>
              </div>
            ))}
          </div>

        )}
      </main>




    </div>
  );
};

export default MediaGallery;
