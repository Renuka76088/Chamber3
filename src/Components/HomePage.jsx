import React from 'react';
import { Globe, Users, Award, Shield, ArrowRight, Phone } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* 1. COMPACT HERO SECTION - High Contrast */}
      <section className="relative bg-slate-900 py-16 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6">
            <div className="inline-block px-3 py-1 bg-amber-600 text-white text-xs font-bold uppercase tracking-widest">
              Official PAREKH CHAMBER

            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              Interweaving Tradition <br /> & Global Trade
            </h1>
            <p className="text-lg text-slate-300 max-w-lg leading-relaxed border-l-4 border-amber-600 pl-4">
              Leading the global textile evolution by connecting artisans, 
              manufacturers, and designers since 1974.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-white text-slate-900 px-8 py-4 font-bold uppercase text-sm hover:bg-amber-500 hover:text-white transition-all shadow-md">
                Join Member Portal
              </button>
              <button className="border-2 border-white/50 text-white px-8 py-4 font-bold uppercase text-sm hover:bg-white/10 transition-all">
                Download Brochure
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
             <img 
                src="https://images.unsplash.com/photo-1636986056375-184676d8ca14?w=600&auto=format&fit=crop" 
                className="w-full h-[400px] object-cover rounded-lg border-8 border-slate-800 shadow-2xl"
                alt="Textile Industry"
             />
          </div>
        </div>
      </section>

      {/* 2. KEY STATS BAR (No Space Waste) */}
      <div className="bg-amber-600 py-6 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
            <div className="border-r border-amber-500 last:border-0">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-[10px] uppercase font-bold tracking-widest">Years Legacy</p>
            </div>
            <div className="border-r border-amber-500 last:border-0">
                <p className="text-3xl font-bold">5000+</p>
                <p className="text-[10px] uppercase font-bold tracking-widest">Active Members</p>
            </div>
            <div className="border-r border-amber-500 last:border-0">
                <p className="text-3xl font-bold">200+</p>
                <p className="text-[10px] uppercase font-bold tracking-widest">Global Brands</p>
            </div>
            <div className="border-r border-amber-500 last:border-0">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-[10px] uppercase font-bold tracking-widest">Trade Events</p>
            </div>
        </div>
      </div>

      {/* 3. CORE SERVICES (Compact Grid) */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 border-b-2 border-slate-200 pb-4">
            <h2 className="text-3xl font-bold text-slate-900">Our Strategic Services</h2>
            <p className="text-slate-600 mt-1">Direct support for manufacturers and textile businesses.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-slate-200 shadow-sm hover:border-amber-500 transition-all">
              <Globe className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Export Support</h3>
              <p className="text-slate-600 text-sm">Simplifying international trade documentation and connecting local units to global buyers.</p>
            </div>
            
            <div className="bg-white p-6 border border-slate-200 shadow-sm hover:border-amber-500 transition-all">
              <Users className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">B2B Networking</h3>
              <p className="text-slate-600 text-sm">Exclusive access to vendor meets, trade fairs, and government industry conferences.</p>
            </div>
            
            <div className="bg-white p-6 border border-slate-200 shadow-sm hover:border-amber-500 transition-all">
              <Shield className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-slate-600 text-sm">Providing industry-standard certifications and quality control workshops for factories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION SUMMARY (Two Column) */}
      <section className="py-16 px-6 border-b border-slate-100">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight">Defining the future of <br /><span className="text-amber-600">Global Textile Standards</span></h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                The Textile Chamber serves as the central hub for the industry. Our mission is to foster growth, provide ethical standards, and promote sustainable manufacturing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 font-bold text-sm text-slate-800">
                   <Award className="w-5 h-5 text-amber-600" /> ISO Certified Trade Practices
                </li>
                <li className="flex items-center gap-3 font-bold text-sm text-slate-800">
                   <Award className="w-5 h-5 text-amber-600" /> Government Liaison Services
                </li>
              </ul>
              <button className="flex items-center gap-2 font-bold text-sm uppercase text-slate-900 border-b-4 border-amber-500 pb-1 hover:text-amber-600 transition-all">
                Read Full Mission Statement <ArrowRight className="w-4 h-4" />
              </button>
           </div>
           
           <div className="bg-slate-100 p-8 border-l-8 border-slate-900">
              <h4 className="text-xl font-bold mb-4">Direct Contact for Members</h4>
              <p className="text-slate-600 mb-6 text-sm">Need immediate assistance with registration or trade queries? Our helpdesk is available from 10 AM to 6 PM.</p>
              <a href="tel:+919876543210" className="flex items-center gap-4 text-2xl font-bold text-slate-900">
                <Phone className="w-6 h-6 text-amber-600" /> +91 98765 43210
              </a>
           </div>
        </div>
      </section>

      {/* 5. SIMPLE FOOTER */}
      <footer className="py-8 bg-slate-900 text-white text-center text-sm">
        <p>© 2026 Textile Chamber. Offices in Indore & Mohali. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;