import React from 'react';
import { 
  FileCheck, 
  FileText, 
  Clock, 
  Briefcase, 
  Download, 
  ChevronRight, 
  ShieldCheck, 
  Search,
  Plus,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';

const TenderContract = () => {
  const activeTenders = [
    {
      id: "TND-2026-088",
      title: "Supply of Organic Cotton for Export Unit",
      authority: "Procurement Division",
      deadline: "25 March, 2026",
      value: "₹ 45,00,00",
      status: "Open",
      type: "Material Supply"
    },
    {
      id: "TND-2026-092",
      title: "Machinery Maintenance Contract - Phase II",
      authority: "Technical Committee",
      deadline: "30 March, 2026",
      value: "₹ 12,50,00",
      status: "Review",
      type: "Services"
    },
    {
      id: "TND-2026-092",
      title: "Machinery Maintenance Contract - Phase II",
      authority: "Technical Committee",
      deadline: "30 March, 2026",
      value: "₹ 12,50,00",
      status: "Review",
      type: "Services"
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-slate-900">
      
      {/* 1. High-Impact Desktop Header */}
      <section className="bg-slate-900 text-white pt-24 pb-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="lg:w-3/5">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-amber-500"></span>
                <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">Official Procurement Portal</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1]">
                Tenders & <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Contracts.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
                Parekh Chamber of Textile provides a unified, secure, and transparent environment for industrial bidding and high-value textile contracts across the BENGALURU region.
              </p>
              <div className="flex flex-wrap gap-5">
                <button className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-3 group">
                  <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" /> Post New Tender
                </button>
                <button className="border border-slate-700 hover:bg-slate-800 text-white px-10 py-5 font-bold text-xs uppercase tracking-widest transition-all">
                  View Archive
                </button>
              </div>
            </div>

            {/* Desktop Stats Card */}
            <div className="lg:w-1/3 hidden lg:block">
              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-sm space-y-8">
                <div>
                  <p className="text-slate-500 text-xs uppercase font-bold mb-1">Active Projects</p>
                  <p className="text-4xl font-bold">24 Active</p>
                </div>
                <div className="h-[1px] bg-slate-700 w-full"></div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-bold mb-1">Total Value Disbursed</p>
                  <p className="text-4xl font-bold text-amber-500">₹ 8.4 Cr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Design */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent"></div>
        <FileCheck className="absolute right-[-10%] top-[-10%] opacity-5 w-[600px] h-[600px] text-white rotate-12" strokeWidth={0.5} />
      </section>

      {/* 2. Main Desktop Content Grid */}
      <main className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* LEFT: Tenders Feed (Col 8) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-4 md:p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-xl font-bold flex items-center gap-3">
                <Clock className="w-6 h-6 text-amber-600" /> Current Opportunities
              </h2>
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Filter by Ref ID or Keywords..." 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none text-sm focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-4">
              {activeTenders.map((tender, index) => (
                <div key={index} className="bg-white border border-slate-200 hover:border-amber-500 transition-all group overflow-hidden">
                  <div className="flex flex-col md:flex-row items-stretch">
                    {/* Tender Status Indicator Side-bar */}
                    <div className={`w-2 ${tender.status === 'Open' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                    
                    <div className="flex-1 p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div className="space-y-1">
                          <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Lot Reference: {tender.id}</p>
                          <h3 className="text-2xl font-bold group-hover:text-amber-600 transition-colors leading-tight">{tender.title}</h3>
                        </div>
                        <span className={`px-4 py-1 text-[10px] font-bold uppercase rounded-full ${tender.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                          {tender.status}
                        </span>
                      </div>

                      <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-2xl">
                        Interested parties are invited to submit their bids for the {tender.type} as per the technical specifications outlined in the tender document.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-50 items-center">
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Issuing Body</p>
                          <p className="text-sm font-bold text-slate-700 flex items-center gap-1"><Briefcase className="w-3 h-3"/> {tender.authority}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Contract Value</p>
                          <p className="text-lg font-black text-slate-900 font-mono italic">{tender.value}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Submission Deadline</p>
                          <p className="text-sm font-bold text-red-600">{tender.deadline}</p>
                        </div>
                        <div className="text-right">
                          <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-amber-600 transition-all">
                            View Docs <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Desktop Sidebar (Col 4) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Upload Section */}
            <div className="bg-white border border-slate-200 shadow-xl p-10 relative group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full -z-10 transition-all group-hover:bg-amber-100"></div>
              <FileText className="w-12 h-12 text-amber-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Submission Portal</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Already awarded a contract? Securely upload your notarized and signed PDF agreements.
              </p>
              
              <div className="space-y-4">
                <div className="border-2 border-dashed border-slate-200 py-12 text-center hover:border-amber-500 hover:bg-slate-50 transition-all cursor-pointer group/upload">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] group-hover/upload:text-amber-600">Click to Select Contract</p>
                </div>
                <button className="w-full bg-slate-950 text-white py-5 font-bold uppercase text-xs tracking-[0.2em] hover:bg-amber-600 transition-all shadow-2xl">
                  Process Submission
                </button>
              </div>
            </div>

            {/* Rules Sidebar */}
            <div className="bg-slate-900 text-white p-10 rounded-sm">
              <ShieldCheck className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="font-bold text-xl mb-6 uppercase tracking-widest">Compliance Registry</h3>
              <ul className="space-y-5">
                {[
                  "Digital signatures must be verified via Class 3 DSC.",
                  "GST Annexure-I must be submitted with bid.",
                  "Performance Bank Guarantee (PBG) of 5% applies."
                ].map((rule, i) => (
                  <li key={i} className="flex gap-4 items-start text-lg text-slate-400 leading-snug">
                    <span className="text-amber-500 font-bold">0{i+1}.</span>
                    {rule}
                  </li>
                ))}
              </ul>
              <button className="mt-10 flex items-center gap-3 text-xs font-bold uppercase text-amber-500 hover:gap-5 transition-all">
                Download Full Guidelines <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* 3. Global Desktop Footer */}
   
    </div>
  );
};

export default TenderContract;