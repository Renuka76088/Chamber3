import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FileText, Calendar, Clock, Inbox, ShieldCheck, Briefcase } from 'lucide-react';
import { tenderApi } from '../utils/api';

const TenderContract = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = "ParekhChamberofTextile01";

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        setLoading(true);
        const res = await tenderApi.getTenders(siteId);
        if (res.data.success) {
          setTenders(res.data.data || []);
        }
      } catch (error) {
        console.error("Error fetching tenders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTenders();
  }, []);

  // Helper to fix word-breaking issues in HTML content
  const fixWordBreaks = (html) => {
    if (!html) return "";
    return html.replace(/&nbsp;/g, " ").replace(/\u00AD/g, '');
  };

  if (loading) {
    return (
      <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-center py-24">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-500 font-bold uppercase tracking-widest text-xs">Syncing Procurement Hub...</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 font-sans text-slate-900 min-h-screen py-12 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .rich-text-content * {
          white-space: normal !important;
          word-break: normal !important;
          overflow-wrap: break-word !important;
          hyphens: none !important;
          -webkit-hyphens: none !important;
          -ms-hyphens: none !important;
          text-align: left !important;
          font-weight: normal !important;
        }
        .rich-text-content p, .rich-text-content span, .rich-text-content div {
          font-weight: normal !important;
        }
      `}} />
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#fe9a00 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="w-full relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8"
        >
          <div className="max-w-4xl">
            <span className="bg-amber-100 text-amber-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
              Procurement & EOIs
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight uppercase">
              Tenders <span className="text-amber-500">&</span> Contracts
            </h1>
            <p className="text-slate-500 mt-4 text-sm md:text-base font-medium">
              Explore open Expressions of Interest (EOI), tender opportunities, and official contracts from the Chamber of Textile.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-slate-100 shadow-sm self-center md:self-end">
             <ShieldCheck className="w-5 h-5 text-amber-500" />
             <div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Official Portal</p>
               <p className="text-xs font-black text-slate-900 uppercase tracking-widest leading-none">
                 Verified Listings
               </p>
             </div>
          </div>
        </motion.div>

        {/* Tenders List (Column Layout) */}
        {tenders.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border-2 border-dashed border-slate-200 rounded-[3rem] py-24 px-6 flex flex-col items-center justify-center text-center shadow-sm max-w-2xl mx-auto"
          >
            <div className="bg-slate-50 p-8 rounded-full mb-8">
              <Inbox className="w-16 h-16 text-slate-200" strokeWidth={1} />
            </div>
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
              At present, <br />
              <span className="text-amber-500">No EOI published</span>
            </h2>
            <p className="text-slate-400 mt-4 text-xs font-bold uppercase tracking-[0.2em]">
              Parekh e-Trade Market • 2026
            </p>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-10 w-full">
            {tenders.map((tender, index) => (
              <motion.div 
                key={tender._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-[2rem] md:rounded-[3.5rem] border border-slate-100 p-8 md:p-14 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col w-full"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform shadow-sm">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {new Date(tender.date || tender.createdAt).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl md:text-3xl font-black text-slate-900 mb-6 leading-tight group-hover:text-amber-600 transition-colors uppercase tracking-tight">
                  {tender.title}
                </h3>
                
                <div 
                  className="rich-text-content text-slate-600 mb-10 text-sm md:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: fixWordBreaks(tender.description) }}
                />

                {/* Key Points List */}
                {tender.keyPoints && tender.keyPoints.length > 0 && (
                  <div className="space-y-3 mb-10">
                    {tender.keyPoints.map((point, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-md group/point"
                      >
                        <div className="mt-2 w-2 h-2 rounded-full bg-amber-500 shrink-0 shadow-[0_0_8px_rgba(254,154,0,0.4)]"></div>
                        <p className="text-sm md:text-base text-slate-700 font-bold leading-tight uppercase tracking-tight">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2.5 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                      <div className={`w-2.5 h-2.5 rounded-full ${tender.status === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></div>
                      <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">
                        {tender.status || 'Active'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between lg:justify-end gap-8 shrink-0">
                    <div className="flex items-center gap-2.5 text-slate-400">
                       <Clock className="w-4 h-4" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Priority Procurement</span>
                    </div>
                    <div className="w-12 h-12 rounded-[1.25rem] bg-slate-950 text-white flex items-center justify-center group-hover:bg-amber-500 transition-all shadow-lg">
                      <FileText className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TenderContract;
