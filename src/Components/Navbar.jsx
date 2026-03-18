import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);

  const navLinkStyle = "text-slate-800 hover:text-amber-600 font-bold text-lg py-4 md:py-0 border-b md:border-none border-slate-100 block transition-all";

  return (
  
    <nav className="bg-white border-b-2 border-slate-200 sticky top-0 z-[100] w-full shadow-sm">
      {/* Container sync with SidebarLayout width */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        
        {/* Logo */}
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-bold text-slate-950 tracking-tight">
            Parekh<span className="text-amber-600 italic">Chamber</span>
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              
              
          
            </div>
            

          </div>
        </div>

        {/* Buttons & Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-slate-600 font-bold hover:text-black">Log in</button>
          <button className="bg-slate-950 text-white px-5 py-2 font-bold uppercase text-[10px] tracking-widest hover:bg-amber-600 transition-all">
            Join Now
          </button>
          
          <button 
            className="md:hidden p-2 text-slate-900 border border-slate-200 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU - Fixed to cover full screen width */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 fixed left-0 right-0 w-full shadow-2xl z-50 overflow-y-auto max-h-screen">
          <div className="flex flex-col px-6 py-6 space-y-1">
            
            {/* Mobile Home Dropdown */}
            <div className="border-b border-slate-100">
              <button 
                onClick={() => setIsHomeOpen(!isHomeOpen)}
                className="w-full flex justify-between items-center text-slate-800 py-4 font-bold text-lg uppercase"
              >
                Home <ChevronDown className={`w-5 h-5 transition-transform ${isHomeOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isHomeOpen && (
                <div className="bg-slate-50 rounded mb-4 overflow-hidden">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Link 
                      key={num} 
                      to={`/home-${num}`} 
                      onClick={() => setIsOpen(false)}
                      className="block px-8 py-4 text-slate-600 hover:text-amber-600 border-b border-slate-200 last:border-0"
                    >
                      - Home Version {num}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" onClick={() => setIsOpen(false)} className={navLinkStyle + " uppercase"}>About Us</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className={navLinkStyle + " uppercase"}>Blog News</Link>
            <Link to="/gallery" onClick={() => setIsOpen(false)} className={navLinkStyle + " uppercase"}>Photo Gallery</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={navLinkStyle + " uppercase border-none"}>Contact Us</Link>
            
            <div className="pt-8 pb-10">
               <button className="w-full bg-slate-900 text-white py-4 font-bold rounded uppercase tracking-widest text-sm">Log in</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;