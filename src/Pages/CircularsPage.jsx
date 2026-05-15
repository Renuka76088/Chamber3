import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { circularApi } from "../utils/api";
import { FileText, Eye, Printer, AlertCircle, Calendar, ChevronRight } from "lucide-react";

const CircularsPage = () => {
  const [circulars, setCirculars] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = "ParekhChamberofTextile01";

  useEffect(() => {
    const fetchCirculars = async () => {
      try {
        const response = await circularApi.getCirculars(siteId);
        if (response.data.success) {
          setCirculars(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching circulars:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCirculars();
  }, []);

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-slate-900 pb-24">
      {/* Hero Section */}
      <div className="bg-slate-950 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fe9a00] rounded-full blur-[120px] opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fe9a00] rounded-full blur-[120px] opacity-10 -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#fe9a00] font-black uppercase tracking-[0.4em] text-xs mb-6 block"
          >
            Communication Portal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-8"
          >
            Official <span className="text-[#fe9a00]">Circulars</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-medium leading-relaxed"
          >
            Access critical industry updates, policy changes, and official notifications issued by the chamber.
          </motion.p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto -mt-12 px-6 relative z-20">
        {loading ? (
          <div className="bg-white p-24 flex flex-col items-center justify-center shadow-2xl border border-slate-100 rounded-[3rem]">
            <div className="w-16 h-16 border-4 border-[#fe9a00] border-t-transparent rounded-full animate-spin mb-8"></div>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">Syncing with database...</p>
          </div>
        ) : circulars.length > 0 ? (
          <div className="space-y-6">
            {circulars.map((circular, index) => (
              <motion.div
                key={circular._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 p-6 md:p-8 group flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 flex-grow">
                  {/* Date Section */}
                  <div className="flex items-center gap-4 min-w-[160px]">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:bg-[#fe9a00] transition-colors">
                      <Calendar className="w-5 h-5 text-[#fe9a00] group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Published On</p>
                      <p className="text-sm font-bold text-slate-700">{circular.publishDate}</p>
                    </div>
                  </div>

                  {/* Divider for Desktop */}
                  <div className="hidden md:block w-px h-12 bg-slate-100"></div>

                  {/* Subject Section */}
                  <div className="flex items-start gap-4 flex-grow">
                    <div className="w-12 h-12 bg-[#fe9a00]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#fe9a00] transition-all">
                      <FileText className="w-5 h-5 text-[#fe9a00] group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Subject</p>
                      <p className="text-base md:text-lg font-bold text-slate-900 leading-tight group-hover:text-[#fe9a00] transition-colors">
                        {circular.subject}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions Section */}
                <div className="flex items-center gap-3 w-full md:w-auto pt-6 md:pt-0 border-t md:border-0 border-slate-50">
                  <a
                    href={circular.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none bg-slate-100 hover:bg-[#fe9a00]/10 text-slate-600 hover:text-[#fe9a00] px-6 py-4 rounded-2xl transition-all font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </a>
                  <a
                    href={circular.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none bg-slate-950 hover:bg-[#fe9a00] text-white px-6 py-4 rounded-2xl transition-all shadow-xl hover:shadow-[#fe9a00]/40 font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* NO CIRCULAR UI */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-white shadow-2xl border border-slate-100 rounded-[3rem] overflow-hidden"
          >
            <div className="p-20 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-slate-50 border border-slate-100 rounded-[2rem] flex items-center justify-center mb-10 shadow-inner">
                <AlertCircle className="w-12 h-12 text-[#fe9a00]" />
              </div>
              <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter leading-none mb-6">
                Circular <br />
                <span className="text-[#fe9a00] italic text-xl block mt-4 tracking-widest font-bold uppercase">
                  ( No Active Publications )
                </span>
              </h2>
              <div className="w-20 h-2 bg-[#fe9a00] mt-10 rounded-full"></div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default CircularsPage;