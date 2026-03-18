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
              Understanding how The PAREKH CHAMBER operates, structures its governance, and manages its association of textile professionals for collective growth.
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
      <section className="py-12 px-6">
        <h2 className="text-center text-3xl font-bold mb-10 text-slate-900">Core Management Pillars</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Card 1: Association Structure */}
          <div className="p-6 bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-7 h-7 text-amber-600" />
              <h3 className="text-xl font-bold">Association Structure</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Organized hierarchy defining relationships between individual weavers, manufacturing units, and the central executive body.
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 list-disc list-inside">
                <li>Hierarchical Org Chart</li>
                <li>Zonal Committees</li>
                <li>Sector-Specific Wings</li>
            </ul>
          </div>

          {/* Card 2: Regulatory Compliance */}
          <div className="p-6 bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Gavel className="w-7 h-7 text-amber-600" />
              <h3 className="text-xl font-bold">Regulatory Compliance</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Strict adherence to governmental textile regulations, quality standards, and environmental norms across all member units.
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 list-disc list-inside">
                <li>Government Liaison</li>
                <li>ISO & Quality Audit</li>
                <li>Legal & Ethical Frameworks</li>
            </ul>
          </div>

          {/* Card 3: Membership Ethics */}
          <div className="p-6 bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <FileSignature className="w-7 h-7 text-amber-600" />
              <h3 className="text-xl font-bold">Membership Ethics</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Enforcing a uniform code of conduct to maintain fair trade practices, protect intellectual property, and ensure fair wages.
            </p>
             <ul className="text-xs text-slate-500 space-y-1.5 list-disc list-inside">
                <li>Code of Conduct Enrollment</li>
                <li>Fair Wage Monitoring</li>
                <li>Dispute Resolution Mechanism</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Operational Workflow */}
      <section className="py-12 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 underline decoration-amber-500 underline-offset-8">Managing Operations</h2>
            <p className="text-slate-700 leading-relaxed">
              We leverage modern technology and structured processes to oversee the daily functions of the association. From processing new memberships to managing large-scale textile events, our operations are streamlined for efficiency and transparency.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm">
              Our central management team coordinate resources, facilitates trade, and provides a centralized platform for information exchange.
            </p>
            
            {/* Simple Bullet List */}
            <div className="grid grid-cols-2 gap-4 pt-4 text-sm font-bold">
                <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-amber-600" /> Resource Management
                </div>
                <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-amber-600" /> Centralized Reports
                </div>
            </div>
          </div>
          <div>
            <img 
              src="https://media.istockphoto.com/id/1038082736/photo/cotton-chord-spools.jpg?s=612x612&w=0&k=20&c=kcRAlKizMGQPg6LH1kzAKlP4XS4C5CUQPQURRVRKWWE=" 
              alt="Chamber Operations Team" 
              className="w-full h-80 object-cover rounded shadow-md"
            />
          </div>
        </div>
      </section>

       {/* 4. Strategic Governance */}
      <section className="py-12 px-6">
         <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Strategic Governance</h2>
            <p className="text-slate-700 leading-relaxed text-lg">
                The Chamber is governed by an elected board of directors comprising veteran weavers, modern manufacturers, and business strategists. They meet quarterly to set policies, review operational benchmarks, and chart the long-term direction of the association, ensuring we remain relevant in the evolving global textile landscape.
            </p>
         </div>
      </section>

      {/* 5. Process Flow CTA */}
      <section className="py-12 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto bg-amber-600 p-8 rounded text-white flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold">Ready to Engage in Our Governance?</h2>
            <p className="text-amber-100 mt-1">Review our bylaws and upcoming committee meeting schedule.</p>
          </div>
          <button className="bg-slate-950 text-white px-10 py-3 font-bold uppercase text-xs tracking-widest hover:bg-slate-800 transition-all border-2 border-slate-900 shadow-lg flex items-center gap-2">
            <Clock3 className='w-4 h-4'/>
            View Governance Timeline
          </button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-6 border-t border-slate-200 text-center text-slate-500 text-xs">
        © 2026 Textile Chamber. Indore | Mohali. All Rights Reserved.
      </footer>
    </div>
  );
};

export default ChamberManagement;