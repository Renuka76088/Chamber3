import React from "react";
import { motion } from "framer-motion";

const TenderContract = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1f5f9] relative overflow-hidden p-6">

      {/* Background Pattern from your Contact Section */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#1e3a8a 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-white p-12 md:p-24 flex items-center justify-center relative z-10"
      >
        <div className="text-center">
          {/* Subtle line decoration */}
          <div className="w-12 h-1 bg-[#fe9a00] mx-auto mb-8 rounded-full"></div>

          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tighter uppercase leading-tight">
            At present, <br />
            <span className="text-[#fe9a00]">No EOI published</span>
          </h1>

          <p className="mt-6 text-slate-500 font-medium tracking-widest text-[10px]">
            Parekh e-Trade Market • 2026
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TenderContract;
