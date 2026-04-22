import React from 'react';
import { Network } from 'lucide-react';

const ChamberManagement = () => {
  return (
    <div className="bg-white font-sans text-slate-900">

      {/* Header Section */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">

          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 border border-slate-700 rounded-2xl mb-6">
            <Network className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Chamber Management
          </h1>

          {/* Content */}
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Parekh Chamber of Textile is administered and governed by the highly skilled, experienced and qualified members of the Management.
          </p>

        </div>
      </section>

    </div>
  );
};

export default ChamberManagement;
