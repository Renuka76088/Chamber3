import React, { useState, useEffect } from "react";
import axios from "axios";
import { Briefcase, MapPin, Clock, IndianRupee, Mail, AlertCircle, Info, ChevronRight, Search } from "lucide-react";

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
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-20">
      
      {/* 1. Header Section */}
      <section className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tight">
            Work With <span className="text-amber-500">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 border-l-4 border-amber-600 pl-6 max-w-2xl">
            "We are constantly looking for talented individuals to join our mission of digitalizing the Indian Textile Sector."
          </p>
        </div>
      </section>

      {/* 2. Content Section */}
      <main className="max-w-7xl mx-auto -mt-10 px-6 relative z-20">
        {loading ? (
          <div className="bg-white p-20 flex flex-col items-center justify-center shadow-xl border border-slate-100">
            <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Scanning Opportunities...</p>
          </div>
        ) : vacancies.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {vacancies.map((job) => (
              <div key={job._id} className="bg-white p-8 border border-slate-200 hover:border-amber-500 transition-all hover:shadow-2xl group">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-slate-900 p-4 text-white group-hover:bg-amber-600 transition-colors">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="bg-slate-100 text-slate-600 px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                    {job.type || "Full-time"}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-amber-600 transition-colors">
                  {job.title}
                </h3>
                
                <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed">
                  {job.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <MapPin className="w-3 h-3 text-amber-600" /> {job.location || "Bengaluru"}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <Clock className="w-3 h-3 text-amber-600" /> {job.experience || "2+ Years"}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <IndianRupee className="w-3 h-3 text-amber-600" /> {job.salary || "Competitive"}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <Mail className="w-3 h-3 text-amber-600" /> {job.email}
                  </div>
                </div>
                
                <button className="w-full border-2 border-slate-900 py-4 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-slate-900 hover:text-white transition-all">
                  Apply Now <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          /* Premium Fallback UI */
          <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden border border-slate-100 relative group">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="p-12 md:p-20 flex flex-col items-center text-center relative z-10">
              <div className="w-24 h-24 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 transition-transform duration-700">
                <AlertCircle className="w-12 h-12 text-slate-300" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">
                Career <span className="text-amber-500">Page</span>
              </h2>
              
              <div className="w-16 h-1 bg-amber-500 mb-10"></div>
              
              <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-widest mb-12">
                ( At present, No Vacancy )
              </p>
              
              <div className="bg-slate-900 text-white p-8 md:p-12 w-full flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <h4 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2">Passive Hiring</h4>
                  <p className="text-sm text-slate-400">Want to be considered for future openings? Send your CV anyway.</p>
                </div>
                <a href="mailto:careers@chamberoftextile.com" className="bg-amber-600 px-8 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-amber-500 transition-colors">
                  Submit CV
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                <Info className="w-3 h-3 text-amber-500" /> Keep checking this space for updates
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Career;