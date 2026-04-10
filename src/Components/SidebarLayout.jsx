import React, { useState } from "react";
import { 
  Menu, X, Home, Info, Phone, Briefcase, 
  Settings, FileText, BarChart3, Gavel, 
  UserPlus, Bell, BookOpen, Calendar, 
  Image, Map, MessageSquare 
} from "lucide-react";
import Navbar from "./Navbar";
import { Link, Outlet, useLocation } from "react-router-dom";

// Icons mapping for better UI
const menuConfig = [
  { name: "Home", icon: <Home size={20} />, path: "/" },
  { name: "About Us", icon: <Info size={20} />, path: "/about" },
  { name: "Membership Enquiry", icon: <UserPlus size={20} />, path: "/membership-enquiry" },
  { name: "Contact Us", icon: <Phone size={20} />, path: "/contact" },
  { name: "Our Chamber Service", icon: <Settings size={20} />, path: "/services" },
  { name: "Our Chamber Management", icon: <Briefcase size={20} />, path: "/management" },
  { name: "Trade Enquiry", icon: <MessageSquare size={20} />, path: "/trade-enquiry" },
  { name: "e-Quotation", icon: <FileText size={20} />, path: "/quotation" },
  { name: "e-Auction", icon: <BarChart3 size={20} />, path: "/auction" },
  { name: "Tender & Contract", icon: <Gavel size={20} />, path: "/tender-contract" },
  { name: "Career Page", icon: <UserPlus size={20} />, path: "/career" },
  { name: "Circular", icon: <Bell size={20} />, path: "/circular" },
  { name: "Blog", icon: <BookOpen size={20} />, path: "/blog" },
  { name: "Visit with Appointment", icon: <Calendar size={20} />, path: "/visit-appointment" },
  { name: "Notice Board", icon: <Bell size={20} />, path: "/notice-board" },
  { name: "Media Gallery", icon: <Image size={20} />, path: "/media-gallery" },
  { name: "Our Textile Associates", icon: <Map size={20} />, path: "/associates" },
];

const SidebarLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden font-sans">
      <Navbar />
      
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* MOBILE TRIGGER */}
        <div className="md:hidden bg-white p-4 flex justify-between items-center z-50 shadow-xl border-b border-slate-100">
            <div className="flex items-center">
                <Link to='/' className="flex items-center gap-3 hover:opacity-95 transition-all group">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 bg-[#FF6A3D] rounded-[12px] shadow-lg group-hover:scale-105 transition-transform">
                        <span className="text-white text-3xl font-black font-sans italic">P</span>
                    </div>
                    <div className="flex flex-col leading-[1.1]">
                        <div className="flex flex-col font-sans">
                            <span className="text-slate-900 text-[18px] font-black tracking-tighter leading-none">PAREKH</span>
                            <div className="flex items-center gap-1">
                                <span className="text-[#FF6A3D] text-[15px] font-black tracking-tighter leading-none">CHAMBER</span>
                                <span className="text-[#FF6A3D] text-[15px] font-black tracking-tighter leading-none">OF TEXTILE</span>
                            </div>
                        </div>
                        <div className="text-slate-500 text-[9px] font-extrabold tracking-[0.12em] font-sans uppercase mt-0.5">BENGALURU, KA, INDIA</div>
                    </div>
                </Link>
            </div>
            <button onClick={() => setIsSidebarOpen(true)} className="flex-shrink-0 p-2.5 bg-slate-900 text-white rounded-xl active:scale-95 transition-all shadow-md ml-2">
                <Menu className="w-7 h-7" />
            </button>
        </div>

        {/* SIDEBAR CONTAINER */}
        <aside className={`
          ${isSidebarOpen ? "fixed inset-0 z-[60] bg-white p-0" : "hidden md:flex"} 
          md:w-85 lg:w-[400px] md:relative flex-col border-r border-slate-200 bg-slate-50
        `}>
          <div className="flex justify-between items-center p-8 border-b md:hidden bg-slate-900 text-white text-2xl font-black italic">
            NAVIGATE <button onClick={() => setIsSidebarOpen(false)} className="p-3 bg-slate-800 rounded-full"><X className="w-8 h-8"/></button>
          </div>

          <nav className="flex-1 h-full overflow-y-auto overscroll-contain no-scrollbar py-4 pb-20">
            <ul className="space-y-0.5">
              {menuConfig.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`cursor-pointer px-8 py-5 font-black text-sm lg:text-[15px] tracking-wider transition-all duration-300 flex items-center gap-5 group border-b border-slate-100 ${
                        isActive 
                          ? "bg-slate-900 text-amber-500 border-l-[12px] border-amber-500 shadow-2xl" 
                          : "text-slate-500 hover:bg-slate-200 hover:text-slate-900 border-l-[12px] border-transparent"
                      }`}
                    >
                      <span className={`${isActive ? "text-amber-500" : "text-slate-400 group-hover:text-slate-900"}`}>
                        {item.icon}
                      </span>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* RIGHT CONTENT AREA */}
        <main className="flex-1 h-full overflow-y-auto no-scrollbar bg-white scroll-smooth relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;