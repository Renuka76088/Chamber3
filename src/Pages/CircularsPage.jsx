import React from 'react';
import { 
  Bell, 
  FileText, 
  Download, 
  Search, 
  Calendar, 
  ArrowRight, 
  ChevronRight, 
  Info,
  History
} from 'lucide-react';

const CircularsPage = () => {
  const circulars = [
    {
      id: "PC/2026/CIR-042",
      date: "15 March, 2026",
      title: "Revised Membership Subscription Fee for FY 2026-27",
      category: "Finance",
      priority: "High"
    },
    {
      id: "PC/2026/CIR-039",
      date: "10 March, 2026",
      title: "Mandatory GST Compliance for Textile Manufacturers",
      category: "Regulatory",
      priority: "Normal"
    },
    {
      id: "PC/2026/CIR-035",
      date: "02 March, 2026",
      title: "Upcoming Export Fair in Indore - Exhibitor Guidelines",
      category: "Events",
      priority: "Urgent"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-20">
      
      {/* 1. Header Section - Desktop Optimized */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="md:w-2/3">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-5 h-5 text-amber-500 animate-bounce" />
                <span className="text-amber-500 uppercase tracking-widest text-xs font-bold">Official Announcements</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">Circulars & <span className="text-amber-500">Notices</span></h1>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl border-l-4 border-slate-700 pl-6">
                Chamber ke sabhi latest updates, policies, aur official notifications yahan dekhein. Hum transparency aur timely communication mein vishwas rakhte hain.
              </p>
            </div>
            
            {/* Search Bar on Header */}
            <div className="w-full md:w-80">
                <div className="relative">
                    <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input 
                      type="text" 
                      placeholder="Search Circular ID..." 
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 text-white focus:bg-white focus:text-slate-900 outline-none transition-all rounded-sm"
                    />
                </div>
            </div>
          </div>
        </div>
        <FileText className="absolute right-[-5%] top-[-10%] opacity-5 w-96 h-96 text-white" strokeWidth={0.5} />
      </section>

      {/* 2. Main Content Feed */}
      <main className="max-w-7xl mx-auto px-6 mt-12 grid lg:grid-cols-4 gap-10">
        
        {/* Sidebar: Categories & Archives */}
        <div className="lg:col-span-1 space-y-8 hidden lg:block">
          <div className="bg-white p-6 border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2 border-b pb-2">
              <History className="w-5 h-5 text-amber-600" /> Archive
            </h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-slate-500">
              <li className="flex justify-between hover:text-amber-600 cursor-pointer transition-colors"><span>March 2026</span> <span>(12)</span></li>
              <li className="flex justify-between hover:text-amber-600 cursor-pointer transition-colors"><span>February 2026</span> <span>(08)</span></li>
              <li className="flex justify-between hover:text-amber-600 cursor-pointer transition-colors"><span>January 2026</span> <span>(15)</span></li>
            </ul>
          </div>

          <div className="bg-amber-600 text-white p-6">
            <Info className="w-8 h-8 mb-4" />
            <p className="text-lg font-bold leading-tight mb-4">Subscribe for Email Alerts</p>
            <p className="text-sm opacity-90 mb-6 font-medium">Koi bhi important update miss na karein. Humein apna email dein.</p>
            <button className="w-full bg-slate-900 text-white py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-all">
                Subscribe Now
            </button>
          </div>
        </div>

        {/* Circulars List */}
        <div className="lg:col-span-3 space-y-4">
          {circulars.map((item, index) => (
            <div key={index} className="bg-white border border-slate-200 p-6 md:p-10 hover:shadow-2xl hover:border-amber-500 transition-all group flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black bg-slate-100 px-3 py-1 rounded-sm text-slate-600">
                    {item.id}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${item.priority === 'Urgent' ? 'text-red-600' : 'text-blue-600'}`}>
                    • {item.priority}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h2>
                <div className="flex items-center gap-6 text-sm text-slate-500 pt-2 font-medium">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {item.date}</span>
                  <span className="flex items-center gap-1 font-bold text-slate-900 underline decoration-amber-500 underline-offset-4">{item.category}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0">
                <button className="flex-1 md:flex-none border-2 border-slate-900 text-slate-900 px-6 py-3 font-bold text-[10px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> PDF
                </button>
                <button className="bg-amber-600 text-white p-3 hover:bg-amber-500 transition-all">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}

          {/* Load More Button */}
          <button className="w-full py-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-amber-600 border-2 border-dashed border-slate-200 mt-8 transition-all">
            View Older Circulars
          </button>
        </div>
      </main>

      {/* Footer Disclaimer */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
          <div className="bg-slate-100 p-8 text-center rounded-sm">
            <p className="text-lg text-slate-500 italic max-w-3xl mx-auto">
              "Official Circulars issued by the Parekh Chamber are legally binding for all registered members. Please ensure you are logged in to access confidential documents."
            </p>
          </div>
      </section>

      <footer className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest">
        © 2026 Parekh Chamber of Textile — Communication Cell
      </footer>
    </div>
  );
};

export default CircularsPage;