import React from "react";
import { motion } from "framer-motion";

const CircularsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1f5f9] p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl w-full bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-white p-16 md:p-24 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tighter uppercase leading-tight">
          Circular <br />
          <span className="text-[#fe9a00] italic text-2xl md:text-2xl block mt-4 tracking-widest font-bold">
            ( At present, No Circular published )
          </span>
        </h1>
      </motion.div>
    </div>
  );
};

export default CircularsPage;