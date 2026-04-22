import React from "react";
import { motion } from "framer-motion";

const CircularsPage = () => {
  return (
    // Mobile par top se space kam karne ke liye items-start (sm: items-center) use kiya hai
    <div className="min-h-screen flex items-start sm:items-center justify-center bg-[#f1f5f9] p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        // Mobile par padding aur border-radius ko kam kiya hai (rounded-3xl vs rounded-[3.5rem])
        className="max-w-4xl w-full bg-white rounded-[2rem] md:rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-white p-10 md:p-24 text-center mt-10 sm:mt-0"
      >
        <h1 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tighter uppercase leading-tight">
          Circular <br />
          <span className="text-[#fe9a00] italic text-lg md:text-2xl block mt-4 tracking-widest font-bold">
            ( At present, No Circular published )
          </span>
        </h1>
      </motion.div>
    </div>
  );
};

export default CircularsPage;