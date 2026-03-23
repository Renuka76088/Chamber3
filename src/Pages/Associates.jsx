import React, { useState } from 'react';
import { MapPin, Globe, Building2, ChevronRight, Info, ExternalLink } from 'lucide-react';

const Associates = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Map Data based on your screenshot
  const associates = [
    { id: 1, name: "Parekh Fabrics", city: "Rajasthan Region", type: "Fabric Hub", top: "25%", left: "20%" },
    { id: 2, name: "Parekh Silk", city: "Gujarat Region", type: "Silk Specialist", top: "42%", left: "18%" },
    { id: 3, name: "Parekh Rayon", city: "Madhya Pradesh", type: "Rayon Manufacturing", top: "45%", left: "45%" },
    { id: 4, name: "Parekh Linen", city: "West Bengal / East", type: "Linen Imports", top: "40%", left: "75%" },
    { id: 5, name: "Parekh e-Trade Market", city: "Maharashtra", type: "Digital Trading", top: "60%", left: "35%" },
    { id: 6, name: "Parekh Chamber of Textile", city: "Karnataka / South", type: "Headquarters", top: "78%", left: "32%" },
    { id: 7, name: "Parekh Southern Polyfabrics", city: "Tamil Nadu", type: "Polyfabric Unit", top: "80%", left: "42%" }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pb-20">
      
      {/* 1. Header Section */}
      <section className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">
            Our Textile <span className="text-amber-500">Associates</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 border-l-4 border-amber-600 pl-6 max-w-3xl">
          "A pan-India footprint for HC Parekh & Associates. We are proud to have established centers of textile excellence throughout the country."
          </p>
        </div>
        <Globe className="absolute right-[-10%] top-[-20%] opacity-10 w-96 h-96 text-amber-500" strokeWidth={0.5} />
      </section>

      {/* 2. Interactive Map & List Section */}
      <main className="max-w-7xl mx-auto mt-16 px-6 grid lg:grid-cols-12 gap-12">
        
        {/* Left Side: India Map UI */}
        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-sm p-4 relative min-h-[600px] flex items-center justify-center overflow-hidden shadow-inner">
          <div className="relative w-full max-w-md aspect-[4/5] bg-contain bg-no-center " 
               style={{ backgroundImage: `url('https://img.freepik.com/premium-vector/map-name-india-orange-yellow-vector-illustration_968957-10807.jpg?w=1480')` ,
                  backgroundRepeat: 'no-repeat', // Isse image repeat nahi hogi
      backgroundPosition: 'center',
               }}>
                
          </div>
          
          {/* Map Hotspots */}
          <div className="absolute inset-0">
            {associates.map((loc) => (
              <div 
                key={loc.id}
                className="absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ top: loc.top, left: loc.left }}
                onMouseEnter={() => setSelectedLocation(loc)}
              >
                <div className="relative">
                  <div className="bg-amber-600 w-4 h-4 rounded-full animate-ping absolute inset-0 opacity-75"></div>
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg transition-colors cursor-pointer ${selectedLocation?.id === loc.id ? 'bg-slate-900 scale-125' : 'bg-red-600'}`}></div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-1 px-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest z-50">
                    {loc.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-6 left-6 text-slate-400 flex items-center gap-2">
            <Info className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest italic">Interative Map: Hover over points</span>
          </div>
        </div>

        {/* Right Side: Detailed Directory */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Location Directory</h2>
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {associates.map((loc) => (
              <div 
                key={loc.id} 
                className={`p-6 border transition-all cursor-pointer ${selectedLocation?.id === loc.id ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-100 hover:border-amber-500'}`}
                onMouseEnter={() => setSelectedLocation(loc)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${selectedLocation?.id === loc.id ? 'text-amber-500' : 'text-slate-400'}`}>
                      {loc.city}
                    </span>
                    <h3 className="text-xl font-bold mt-1 leading-tight">{loc.name}</h3>
                    <p className={`text-sm mt-2 ${selectedLocation?.id === loc.id ? 'text-slate-400' : 'text-slate-500'}`}>
                      {loc.type} expertise with premium quality standards.
                    </p>
                  </div>
                  <MapPin className={`w-5 h-5 ${selectedLocation?.id === loc.id ? 'text-amber-500' : 'text-slate-200'}`} />
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100/10 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Active Unit</span>
                  <ChevronRight className="w-4 h-4 text-amber-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 3. Global Reach Section */}
      <section className="mt-24 px-6">
        <div className="max-w-7xl mx-auto bg-slate-50 p-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Our Expansion <span className="text-amber-600 underline decoration-4 underline-offset-8">Strategy</span></h2>
            <p className="text-slate-600 leading-relaxed mb-8">
             "HC Parekh & Associates is committed to transforming India’s textile landscape. From the cotton hubs of Rajasthan to the polyfabric units of the South, we deliver quality and trust everywhere."
            </p>
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 shadow-sm border-l-4 border-amber-600">
                    <span className="block text-2xl font-black">07</span>
                    <span className="text-[10px] font-bold uppercase text-slate-400">Strategic Units</span>
                </div>
                <div className="bg-white p-4 shadow-sm border-l-4 border-amber-600">
                    <span className="block text-2xl font-black">2026</span>
                    <span className="text-[10px] font-bold uppercase text-slate-400">Target Scale</span>
                </div>
            </div>
          </div>
          <div className="bg-slate-900 p-10 text-white rounded shadow-2xl">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-500" /> Regional Partnership
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
             "Interested in associating with one of our units? Register now through our Trade Enquiry Portal."
            </p>
            <button className="w-full bg-amber-600 py-4 font-bold uppercase text-xs tracking-widest hover:bg-amber-500 transition-all flex items-center justify-center gap-2">
                Official Enquiry <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="mt-20 py-10 border-t border-slate-100 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
           HC PAREKH & ASSOCIATES | www.hcparekh.com | Textile Network India
        </p>
      </footer>
    </div>
  );
};

export default Associates;