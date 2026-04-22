import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="md:flex w-full bg-[#0d1b2a] backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 px-8 py-4 items-center justify-between transition-all">

        {/* LEFT SIDE: Logo Section */}
        <div className="flex items-center hidden md:flex gap-2">
          <Link to='/' className="flex items-center gap-2 hover:opacity-95 transition-all group">
            {/* Logo Icon */}
            <div className="flex items-center justify-center h-16 w-16 rounded-[12px] shadow-md group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src="/10.png"
                alt="Logo"
                className="h-full w-full object-contain scale-110"
              />
            </div>
            {/* Logo Text */}
            <div className="flex flex-col gap-0">
              <div className="flex items-baseline gap-2 font-sans">
                <span className="text-[#ffff] text-xl md:text-2xl font-black tracking-tighter">
                  PAREKH
                </span>
                <span className="text-[#FF6A3D] text-xl md:text-2xl font-black tracking-tighter">
                  CHAMBER OF TEXTILE
                </span>
              </div>
              <div className="text-[#ffff] text-[11px] font-bold tracking-[0.2em] font-sans uppercase opacity-90">
                BENGALURU, KA, INDIA
              </div>
            </div>
          </Link>
        </div>

        {/* RIGHT SIDE: Action Section */}
        <div className="flex items-center gap-6">
          <button className="group relative overflow-hidden bg-[#fff] text-[#0d1b2a] px-7 py-2.5 rounded-full text-sm font-bold tracking-wide hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              <Link to="/membership-enquiry" className="flex items-center gap-2">
                Get Membership Enquiry
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </span>
          </button>
        </div>

      </header>

      {/* Floating WhatsApp Button - Repositioned to avoid overlap with new Chatbot */}
      <div className="fixed bottom-32 right-8 z-[150] flex flex-col items-end gap-4">
        <a
          href="https://wa.me/916353778329"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group relative border-2 border-white/20"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp size={24} fill="currentColor" />

          <span className="absolute right-16 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-800">
            Direct WhatsApp
          </span>
        </a>
      </div>
    </>
  );
};

export default Navbar;
