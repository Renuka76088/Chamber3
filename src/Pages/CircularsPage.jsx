import React from "react";
import { FileText, AlertCircle, Info, Download, Search } from "lucide-react";

const CircularsPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-20">
      
      {/* 1. Header Section */}
      <section className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
              Official <span className="text-amber-500">Circulars</span>
            </h1>
            <p className="text-lg text-slate-400 border-l-4 border-amber-600 pl-6 max-w-2xl">
              "Stay updated with the latest government notifications, chamber mandates, and industrial guidelines."
            </p>
          </div>
          <div className="w-full md:w-80 relative">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
             <input 
               type="text" 
               placeholder="Search circulars..." 
               className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-amber-500 text-white backdrop-blur-md"
             />
          </div>
        </div>
      </section>

      {/* 2. Content Section */}
      <main className="max-w-7xl mx-auto -mt-10 px-6 relative z-20">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden border border-slate-100 relative group">
          
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-amber-500/10 rotate-45 transform translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="p-12 md:p-24 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mb-10 group-hover:bg-amber-100 transition-colors">
              <FileText className="w-12 h-12 text-amber-600" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">
              Circular
            </h2>
            
            <div className="h-px w-32 bg-slate-200 mb-10"></div>
            
            <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-widest mb-12">
              ( At present, No Circular published )
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 w-full max-w-2xl">
                <div className="p-6 border border-slate-100 bg-slate-50/50">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-2">Government</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">No Active Notifications</p>
                </div>
                <div className="p-6 border border-slate-100 bg-slate-50/50">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-2">Chamber</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Up to date</p>
                </div>
                <div className="p-6 border border-slate-100 bg-slate-50/50">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-2">Archive</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">0 Documents</p>
                </div>
            </div>

            <div className="mt-16 flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
              <Info className="w-3 h-3 text-amber-600" /> Notifications are posted directly by the Secretariat
            </div>
          </div>
        </div>

        {/* 3. Subscription Section */}
        <div className="mt-20 max-w-4xl mx-auto bg-slate-900 p-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
            <div className="text-white text-center md:text-left">
                <h3 className="text-xl font-bold uppercase tracking-tight">Email Alerts</h3>
                <p className="text-sm text-slate-400 mt-1">Get instant notifications for new circulars in your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
                <input type="email" placeholder="Enter Email" className="bg-slate-800 border-none px-6 py-3 text-sm text-white focus:outline-none focus:ring-1 ring-amber-500 w-full md:w-64" />
                <button className="bg-amber-600 text-white px-8 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-amber-500 transition-colors">Notify</button>
            </div>
        </div>
      </main>
    </div>
  );
};

export default CircularsPage;