import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }} // Page upar slide hoga
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-[#0d1b2a] flex items-center justify-center z-[9999] overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="text-center relative z-10 px-6">

        {/* 1. ICON BOX (Navbar Style) */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="h-20 w-20 bg-[#FF6A3D] rounded-[18px] mx-auto mb-8 flex items-center justify-center shadow-[0_0_40px_rgba(255,106,61,0.3)]"
        >
          <span className="text-white text-5xl font-black italic select-none">P</span>
        </motion.div>

        {/* 2. TEXT BRANDING (Sharp & Bold) */}
        <div className="space-y-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-3 font-sans"
          >
            <span className="text-white text-3xl md:text-5xl font-black tracking-tighter">
              PAREKH
            </span>
            <span className="text-[#FF6A3D] text-3xl md:text-5xl font-black tracking-tighter">
              CHAMBER OF TEXTILE
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.5 }}
            className="text-white/60 text-xs md:text-sm font-bold tracking-[0.4em] uppercase mt-4"
          >
            Bengaluru • KA • India
          </motion.div>
        </div>

        {/* 3. PROGRESS TRACK (Orange Accent) */}
        <div className="w-64 h-[2px] bg-white/10 mx-auto mt-12 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-[#FF6A3D]"
          />
        </div>


      </div>

      {/* 4. BOTTOM ACCENT LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="absolute bottom-0 left-0 w-full h-2 bg-[#FF6A3D]"
      />
    </motion.div>
  );
}