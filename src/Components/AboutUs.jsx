import React from 'react';
import { History, Target, Eye, Quote, Users, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      
      {/* 1. Compact Header Section */}
      <section className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">The PAREKH CHAMBER</h1>
            <p className="text-lg text-slate-300 border-l-4 border-amber-500 pl-4">
              Providing a unified platform for weavers, manufacturers, and textile professionals since 1974. We bridge the gap between traditional craft and global markets.
            </p>
          </div>
          <div className="md:w-1/3 text-center md:text-right">
             <div className="inline-block p-4 border border-slate-700 rounded-lg">
                <span className="text-amber-500 text-4xl font-bold block">50+</span>
                <span className="text-sm uppercase tracking-widest">Years of Excellence</span>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Structured Information Grid (Less Space) */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="p-6 bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <History className="w-6 h-6 text-amber-600" />
              <h3 className="text-xl font-bold">Our Legacy</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Founded as a cooperative to protect local weavers' interests, growing into a national authority on textile standards and business.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-amber-600" />
              <h3 className="text-xl font-bold">Our Mission</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              To promote modernization in manufacturing while ensuring fair wages and sustainable growth for the entire supply chain.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-amber-600" />
              <h3 className="text-xl font-bold">Our Vision</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              To be the most trusted textile network by 2030, recognized for innovation, authenticity, and ethical global trade.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Main Narrative (Two-Column, No Overlap) */}
      <section className="py-12 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://media.istockphoto.com/id/171583308/photo/denim-textile-industry-big-weaving-room-hdr.webp?a=1&b=1&s=612x612&w=0&k=20&c=Twkye7uE4XNG9Qg5XkF_hLYsW3aGzM8WVrnRTTsgXkw=" 
              alt="Textile Facility" 
              className="w-full h-80 object-cover rounded shadow-md"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 underline decoration-amber-500 underline-offset-8">Who We Are</h2>
            <p className="text-slate-700 leading-relaxed">
              The Textile Chamber is more than an organization; it is a community of artisans and industry leaders dedicated to the art of weaving. We focus on both handloom heritage and high-tech industrial fabrics.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Every year, we connect over 200 global brands with 5,000+ local artisans, ensuring that our rich textile heritage continues to thrive in the modern era.
            </p>
            
            {/* Simple Bullet List for quick reading */}
            <div className="grid grid-cols-2 gap-4 pt-4 text-sm font-bold">
                <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-600" /> Govt. Approved
                </div>
                <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-600" /> Quality Certified
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact/Join CTA (Simple Box) */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto bg-amber-600 p-8 rounded text-white flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold">Interested in Joining Our Network?</h2>
            <p className="text-amber-100 mt-1">Become a member of the most respected textile community.</p>
          </div>
          <button className="bg-slate-950 text-white px-10 py-3 font-bold uppercase text-xs tracking-widest hover:bg-slate-800 transition-all border-2 border-slate-900 shadow-lg">
            Register Now
          </button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-6 border-t border-slate-200 text-center text-slate-500 text-xs">
        © 2026 Textile Chamber. Indore | Mohali. All Rights Reserved.
      </footer>
    </div>
  );
};

export default AboutUs;