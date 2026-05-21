import React, { useState, useEffect } from "react";
import { careerApi, careerHeaderApi } from "../utils/api";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, IndianRupee, Mail, AlertCircle, Info, ChevronRight } from "lucide-react";

const Career = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [headerData, setHeaderData] = useState({
    title: 'Career Opportunities',
    description: 'Explore roles across our textile network and help us shape the future of the industry.'
  });
  const siteId = "ParekhChamberofTextile01";

  // Helper to strip HTML tags for short summaries
  const stripHtmlTags = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, "").replace(/&nbsp;/g, " ").trim();
  };

  // Helper to fix word-breaking issues in HTML content
  const fixWordBreaks = (html) => {
    if (!html) return "";
    return html.replace(/&nbsp;/g, " ");
  };

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await careerApi.getJobs(siteId);
        if (response.data.success) {
          setVacancies(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching vacancies:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchHeader = async () => {
      try {
        const res = await careerHeaderApi.getHeader(siteId);
        if (res.data.success && res.data.data) {
          setHeaderData({
            title: res.data.data.title || 'Career Opportunities',
            description: res.data.data.description || 'Explore roles across our textile network and help us shape the future of the industry.'
          });
        }
      } catch (error) {
        console.error("Error fetching header:", error);
      }
    };

    fetchVacancies();
    fetchHeader();
  }, []);


  return (
    <div className="bg-[#f0f4f8] min-h-screen font-sans text-slate-900 pb-24">
      {/* Hero Section / Header */}
      <div className="bg-slate-950 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#fe9a00] rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#fe9a00] rounded-full blur-[100px] opacity-10 -ml-32 -mb-32"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#fe9a00] font-black uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Join Our Ecosystem
          </motion.span> */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            {headerData.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg font-medium"
          >
            {headerData.description}
          </motion.p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto -mt-8 px-6 relative z-20">
        {loading ? (
          <div className="bg-white p-20 flex flex-col items-center justify-center shadow-2xl border border-slate-100 rounded-[2.5rem]">
            <div className="w-12 h-12 border-4 border-[#fe9a00] border-t-transparent rounded-full animate-spin mb-6"></div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Accessing Talent Portal...</p>
          </div>
        ) : vacancies.length > 0 ? (
          <div className="grid grid-cols-1 gap-10">
            {vacancies.map((job, index) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] border border-slate-100 group"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Left Sidebar Info */}
                  <div className="lg:w-1/3 bg-slate-50 p-10 border-b lg:border-b-0 lg:border-r border-slate-100">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="bg-slate-950 p-4 text-white rounded-2xl group-hover:bg-[#fe9a00] transition-colors shadow-lg">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="bg-[#fe9a00]/10 text-[#fe9a00] px-5 py-3 text-[18px] font-semibold uppercase tracking-[0.1em] rounded-xl border border-[#fe9a00]/20 inline-block shadow-sm">
                          {job.title}
                        </span>


                      </div>

                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 mt-1 flex-shrink-0">
                          <MapPin className="w-5 h-5 text-[#fe9a00]" />
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Location</p>
                          <p className="text-sm text-slate-700 font-medium">{job.location}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 mt-1 flex-shrink-0">
                          <IndianRupee className="w-5 h-5 text-[#fe9a00]" />
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Compensation</p>
                          <p className="text-sm text-slate-700 font-medium">{job.salary || "Competitive"}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 mt-1 flex-shrink-0">
                          <Mail className="w-5 h-5 text-[#fe9a00]" />
                        </div>
                        <div className="overflow-hidden w-full">
                          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Contact Email</p>
                          <p className="text-sm text-slate-700 font-medium break-all line-clamp-1 hover:line-clamp-none transition-all cursor-default">
                            {job.contactEmail || job.email}
                          </p>
                        </div>
                      </div>
                    </div>


                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${job.contactEmail || job.email
                        }&su=${encodeURIComponent(`Application for ${job.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
    w-full
    mt-12
    bg-slate-950
    text-white
    py-5
    px-6
    font-black
    text-xs
    uppercase
    tracking-[0.2em]
    flex
    items-center
    justify-center
    gap-4
    rounded-2xl
    shadow-xl
    transition-all
    duration-300
    hover:bg-[#fe9a00]
    hover:shadow-2xl
    hover:-translate-y-1
    active:scale-95
    cursor-pointer
    select-none
    no-underline
  "
                    >
                      <span>Apply Now</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>

                  </div>

                  {/* Right Content Area */}
                  <div className="lg:w-2/3 p-10 lg:p-14">
                    <div className="space-y-12">
                      <div>
                        <div className="flex items-center gap-2 mb-6">
                          <Info className="w-5 h-5 text-[#fe9a00]" />
                          <h4 className="text-[12px] font-black uppercase tracking-widest text-[#fe9a00]">Role Overview</h4>
                        </div>
                        <div
                          className="text-slate-600 leading-relaxed text-base break-normal overflow-hidden rich-text-content"
                          dangerouslySetInnerHTML={{ __html: fixWordBreaks(job.description) }}
                        />
                      </div>

                      {job.experience && (
                        <div>
                          <div className="flex items-center gap-2 mb-6">
                            <AlertCircle className="w-5 h-5 text-[#fe9a00]" />
                            <h4 className="text-[12px] font-black uppercase tracking-widest text-[#fe9a00]">Minimum Requirements</h4>
                          </div>
                          <div
                            className="text-slate-600 leading-relaxed text-base break-normal overflow-hidden rich-text-content"
                            dangerouslySetInnerHTML={{ __html: fixWordBreaks(job.experience) }}
                          />
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* NO VACANCY UI - Simplified */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl border border-slate-100 rounded-[2.5rem] overflow-hidden"
          >
            <div className="p-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <AlertCircle className="w-8 h-8 text-[#fe9a00]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                Career <span className="text-[#fe9a00]">Portal</span>
              </h2>
              <div className="w-12 h-1.5 bg-[#fe9a00] mb-8 rounded-full"></div>
              <p className="text-lg md:text-xl font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                ( At present, No Vacancy )
              </p>
            </div>
          </motion.div>

        )}
      </main>
    </div>
  );
};


export default Career;
