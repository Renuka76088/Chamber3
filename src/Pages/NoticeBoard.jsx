import React from 'react';
import { 
  Megaphone,
  Search, 
  Filter, 
  Inbox,
  Clock,
  Link as LinkIcon,
  ChevronRight,
  BellRing
} from 'lucide-react';

const NoticeBoard = () => {
  // Current status: No content
  const notices = [];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-20">
      
      {/* 1. Header Section */}
      <section className="bg-slate-900 text-white py-16 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="md:w-2/3">
            <div className="flex items-center gap-2 mb-4">
              <Megaphone className="w-5 h-5 text-amber-500" />
              <span className="text-amber-500 uppercase tracking-widest text-[10px] font-bold">Official Announcements</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Digital <span className="text-amber-500">Notice Board</span></h1>
            <p className="text-lg text-slate-300 border-l-4 border-amber-500 pl-4 max-w-2xl">
              "Access all the latest Parekh Chamber Of Textile updates, official orders, and information on upcoming events here."
            </p>
          </div>
          
          <div className="w-full md:w-80 flex gap-2">
            <div className="relative flex-1 opacity-50 cursor-not-allowed">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Find notice..." 
                disabled
                className="w-full bg-slate-800 border border-slate-700 py-3 pl-10 pr-4 text-sm text-white outline-none cursor-not-allowed"
              />
            </div>
            <button disabled className="bg-slate-800 p-3 text-slate-500 cursor-not-allowed">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <main className="max-w-6xl mx-auto mt-12 px-6">
        
        {/* At Present: No Content (Empty State) */}
        <div className="bg-white border border-dashed border-slate-300 rounded-sm py-24 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="bg-slate-50 p-6 rounded-full mb-6">
            <Inbox className="w-12 h-12 text-slate-300" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">At present, No content</h2>
          <p className="text-slate-500 mt-2 max-w-md mx-auto text-sm">
            There are no active notices or announcements at this moment. Please check back later for official updates from the Chamber.
          </p>
          <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 bg-amber-50 px-4 py-2">
            <Clock className="w-3 h-3" /> Updated: April 2026
          </div>
        </div>

        {/* 3. Subscription & Quick Links */}
        <section className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-amber-600 p-8 rounded-sm text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
                <div className="flex items-center gap-4">
                    <BellRing className="w-10 h-10 text-amber-200 shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold uppercase">Stay Informed</h3>
                        <p className="text-amber-100 text-sm mt-1">"Sign up to receive instant notifications for new notices."</p>
                    </div>
                </div>
                <button className="bg-slate-950 text-white px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-slate-800 transition-all border-2 border-slate-900 whitespace-nowrap">
                    Subscribe Now
                </button>
            </div>
            
            <div className="bg-white border border-slate-200 p-8 flex flex-col justify-center rounded-sm">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2 border-b pb-2">
                    <LinkIcon className="w-4 h-4 text-amber-600" /> Useful Links
                </h4>
                <div className="space-y-3 text-sm font-bold">
                    <a href="#" className="flex items-center justify-between text-slate-700 hover:text-amber-600 transition-colors">Member Directory <ChevronRight className="w-4 h-4 text-slate-300" /></a>
                    <a href="#" className="flex items-center justify-between text-slate-700 hover:text-amber-600 transition-colors">Trade Enquiry <ChevronRight className="w-4 h-4 text-slate-300" /></a>
                    <a href="#" className="flex items-center justify-between text-slate-700 hover:text-amber-600 transition-colors">Help Desk <ChevronRight className="w-4 h-4 text-slate-300" /></a>
                </div>
            </div>
        </section>
      </main>

      {/* Footer Disclaimer */}
      <footer className="mt-20 py-10 border-t border-slate-100 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
           Official Notice Board — PAREKH CHAMBER OF TEXTILE. 2026.
        </p>
      </footer>

    </div>
  );
};

export default NoticeBoard;