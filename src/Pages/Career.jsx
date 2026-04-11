import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, IndianRupee, Mail, AlertCircle, Info, ChevronRight } from "lucide-react";

const Career = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = "ParekhChamberofTextile01";

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/careers?siteId=${siteId}`);
        if (response.data.success) {
          setVacancies(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching vacancies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVacancies();
  }, []);

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-slate-900 pb-20">



      <main className="max-w-7xl mx-auto mt-10 px-6 relative z-20">
        {loading ? (
          <div className="bg-white p-20 flex flex-col items-center justify-center shadow-xl border border-slate-100 rounded-2xl">
            <div className="w-12 h-12 border-4 border-[#fe9a00] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Scanning...</p>
          </div>
        ) : vacancies.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {vacancies.map((job) => (
              <div key={job._id} className="bg-white p-8 border border-slate-200 hover:border-[#fe9a00] transition-all hover:shadow-2xl group rounded-2xl">
                <div className="flex justify-between mb-6">
                  <div className="bg-slate-950 p-4 text-white group-hover:bg-[#fe9a00] transition-colors rounded-xl">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="bg-slate-100 text-slate-600 px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full self-start">
                    {job.type || "Full-time"}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-[#fe9a00] transition-colors">{job.title}</h3>
                <p className="text-slate-600 mb-8 line-clamp-3 text-sm">{job.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest"><MapPin className="w-3 h-3 text-[#fe9a00]" /> {job.location}</div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest"><Clock className="w-3 h-3 text-[#fe9a00]" /> {job.experience}</div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest"><IndianRupee className="w-3 h-3 text-[#fe9a00]" /> {job.salary}</div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest"><Mail className="w-3 h-3 text-[#fe9a00]" /> {job.email}</div>
                </div>
                <button className="w-full border-2 border-slate-950 py-4 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-slate-950 hover:text-white transition-all rounded-xl">
                  Apply Now <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          /* NO VACANCY UI */
          <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden border border-slate-100 rounded-[3rem] group">
            <div className="p-12 md:p-20 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center mb-10 shadow-inner">
                <AlertCircle className="w-10 h-10 text-slate-300" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                Career <span className="text-[#fe9a00]">Page</span>
              </h2>
              <div className="w-16 h-1.5 bg-[#fe9a00] mb-8 rounded-full"></div>
              <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-widest mb-12">
                ( At present, No Vacancy )
              </p>
              <div className="bg-slate-950 text-white p-8 md:p-10 w-full rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <h4 className="text-[#fe9a00] font-bold uppercase tracking-widest text-xs mb-1">Passive Hiring</h4>
                  <p className="text-xs text-slate-400 italic">Submit your CV for future openings</p>
                </div>
                <a href="mailto:careers@chamberoftextile.com" className="bg-[#fe9a00] text-white px-10 py-4 font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-slate-950 transition-all rounded-xl">
                  Submit CV
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Career;