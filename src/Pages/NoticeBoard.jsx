import React from 'react';
import { 
  Pin, 
  AlertCircle, 
  Calendar, 
  ArrowRight, 
  Search, 
  Filter, 
  Download, 
  Link as LinkIcon,
  Megaphone,
  ChevronRight
} from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    {
      id: "NT-2026-001",
      title: "Annual General Meeting (AGM) - April 2026",
      date: "March 18, 2026",
      tag: "Event",
      desc: "All registered members are invited to attend the AGM at the Indore Corporate Office to discuss the 2026-27 roadmap.",
      priority: "High"
    },
    {
      id: "NT-2026-005",
      title: "Revised GST Slab for Garment Exporters",
      date: "March 15, 2026",
      tag: "Compliance",
      desc: "Important update regarding tax exemptions for MSME textile units. Please download the attached PDF for details.",
      priority: "Normal"
    },
    {
      id: "NT-2026-009",
      title: "Power Shutdown Notice: Industrial Area Sector A",
      date: "March 12, 2026",
      tag: "Alert",
      desc: "Maintenance work by MP Electricity Board on March 20th. Production units are advised to plan accordingly.",
      priority: "Urgent"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-20">
      
      {/* 1. Header Section (Matches About Us Style) */}
      <section className="bg-slate-900 text-white py-16 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="md:w-2/3">
            <div className="flex items-center gap-2 mb-4">
              <Megaphone className="w-5 h-5 text-amber-500 animate-pulse" />
              <span className="text-amber-500 uppercase tracking-widest text-[10px] font-bold">Official Announcements</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Digital <span className="text-amber-500">Notice Board</span></h1>
            <p className="text-lg text-slate-300 border-l-4 border-amber-500 pl-4 max-w-2xl">
"Access all the latest Parekh Chamber Of Textile updates, official orders, and information on upcoming events here."
            </p>
          </div>
          
          <div className="w-full md:w-80 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Find notice..." 
                className="w-full bg-slate-800 border border-slate-700 py-3 pl-10 pr-4 text-sm text-white outline-none focus:border-amber-500"
              />
            </div>
            <button className="bg-amber-600 p-3 text-white">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Notice Board Grid */}
      <main className="max-w-6xl mx-auto mt-12 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notices.map((notice, index) => (
            <div key={index} className="bg-white border-t-4 border-amber-500 shadow-lg p-6 flex flex-col hover:-translate-y-2 transition-transform duration-300">
              
              {/* Top Meta */}
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[10px] font-bold px-2 py-1 uppercase tracking-widest ${
                  notice.priority === 'Urgent' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-600'
                }`}>
                  {notice.priority} Priority
                </span>
                <Pin className={`w-4 h-4 ${notice.priority === 'Urgent' ? 'text-amber-600 fill-amber-600' : 'text-slate-300'}`} />
              </div>

              {/* Title & Date */}
              <div className="mb-4">
                <span className="text-[10px] text-amber-600 font-black uppercase tracking-widest">{notice.tag}</span>
                <h3 className="text-xl font-bold mt-1 leading-tight text-slate-900 group-hover:text-amber-600">
                  {notice.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-2 font-bold uppercase tracking-tighter">
                  <Calendar className="w-3 h-3" /> {notice.date}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {notice.desc}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-amber-600 flex items-center gap-1">
                  <Download className="w-3 h-3" /> PDF Detail
                </button>
                <button className="bg-slate-900 text-white p-2 hover:bg-amber-600 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Important Links Sidebar Layout (Optional) */}
        <section className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-amber-600 p-8 rounded text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
                <div>
                    <h3 className="text-2xl font-bold">Sign Up for Instant SMS Alerts</h3>
                    <p className="text-amber-100 mt-1">"Don't miss any urgent notices."</p>
                </div>
                <button className="bg-slate-950 text-white px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-slate-800 transition-all border-2 border-slate-900">
                    Subscribe
                </button>
            </div>
            
            <div className="bg-white border border-slate-200 p-8 flex flex-col justify-center">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <LinkIcon className="w-4 h-4 text-amber-600" /> Useful Links
                </h4>
                <div className="space-y-2 text-sm font-bold">
                    <a href="#" className="flex items-center justify-between border-b py-2 hover:text-amber-600">Download Directory <ChevronRight className="w-4 h-4" /></a>
                    <a href="#" className="flex items-center justify-between border-b py-2 hover:text-amber-600">Membership e-Form <ChevronRight className="w-4 h-4" /></a>
                </div>
            </div>
        </section>
      </main>

      {/* Footer Disclaimer */}
      <footer className="mt-20 py-10 border-t border-slate-100 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
           Official Notice Board — Parekh Chamber of Textile. 2026.
        </p>
      </footer>

    </div>
  );
};

export default NoticeBoard;