import React, { useState, useEffect, useRef } from "react";
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
  const mainContentRef = useRef(null);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden font-sans">
      <Navbar />
      
      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
        {/* MOBILE TRIGGER */}
        <div className="lg:hidden bg-white p-4 flex justify-between items-center z-50 shadow-xl border-b border-slate-100">
            <div className="flex items-center">
             <Link to='/' className="flex items-center gap-3 hover:opacity-95 transition-all group">
  {/* Logo Icon - Image Based */}
  <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-[12px] shadow-lg group-hover:scale-105 transition-transform overflow-hidden bg-white border border-slate-50">
    <img
      src="/10.png"
      alt="Logo"
      className="h-full w-full object-contain scale-110"
    />
  </div>

  {/* Logo Text Section */}
  <div className="flex flex-col justify-center">
    <div className="flex flex-col md:flex-row md:items-baseline md:gap-2 font-sans leading-none">
      <span className="text-slate-900 text-xl md:text-2xl font-black tracking-tighter">
        PAREKH
      </span>
      <span className="text-[#FF6A3D] text-[15px] md:text-2xl font-black tracking-tighter">
        CHAMBER OF TEXTILE
      </span>
    </div>
    
    {/* Location Tag */}
    <div className="text-slate-500 text-[10px] font-bold tracking-[0.15em] font-sans uppercase mt-1 opacity-90">
      BENGALURU, KA, INDIA
    </div>
  </div>
</Link>
            </div>
            <button onClick={() => setIsSidebarOpen(true)} className="flex-shrink-0 p-2.5 bg-slate-900 text-white rounded-xl active:scale-95 transition-all shadow-md ml-2">
                <Menu className="w-7 h-7" />
            </button>
        </div>

        {/* SIDEBAR CONTAINER */}
<aside className={`
  ${isSidebarOpen ? "fixed inset-0 z-[60] bg-white flex" : "hidden lg:flex"} 
  lg:w-85 xl:w-[400px] lg:relative flex-col border-r border-slate-200 bg-slate-50
`}>
  <div className="flex justify-between items-center p-8 border-b lg:hidden bg-slate-900 text-white text-2xl font-black italic shrink-0">
    NAVIGATE <button onClick={() => setIsSidebarOpen(false)} className="p-3 bg-slate-800 rounded-full"><X className="w-8 h-8"/></button>
  </div>

  {/* Scrollable area ko 'h-full' ki jagah 'flex-1' aur padding badha dein */}
  <nav className="flex-1 overflow-y-auto overscroll-contain no-scrollbar py-4">
    <ul className="space-y-0.5 pb-32"> {/* Yahan pb-32 kiya hai taaki last item ke niche space mile */}
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
        <main 
          ref={mainContentRef}
          className="flex-1 h-full overflow-y-auto no-scrollbar bg-white scroll-smooth relative"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;
