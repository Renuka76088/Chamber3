import React from 'react';
import { Network, Building2, Gavel, FileSignature, Briefcase, BarChart3, Clock3 } from 'lucide-react';

const ChamberManagement = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      
      {/* 1. Header Section */}
      <section className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Chamber Management</h1>
            <p className="text-lg text-slate-300 border-l-4 border-amber-500 pl-4">
              Parekh Chamber of Textile is administered and governed by the highly skilled,
experienced and qualified members of the Management
            </p>
          </div>
          <div className="md:w-1/3 text-center md:text-right">
            <div className="inline-block p-4 border border-slate-700 rounded-lg">
                <Network className="w-12 h-12 text-amber-500 mx-auto md:mr-0 md:ml-auto" strokeWidth={1}/>
                <span className="text-sm uppercase tracking-widest block mt-2">Unified Governance</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Structured Pillars Grid */}

    </div>
  );
};

export default ChamberManagement;