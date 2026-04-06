import React, { useState } from "react";
import { 
  Menu, X, Home, Info, Phone, Briefcase, 
  Settings, FileText, BarChart3, Gavel, 
  UserPlus, Bell, BookOpen, Calendar, 
  Image, Map, MessageSquare 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from '../assets/logo.png'

// Component Imports (Wahi rahenge jo aapne diye hain)
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import ChamberManagement from "../Pages/ChamberManagement";
import ChamberServices from "../Pages/ChamberServices";
import TradeEnquiryForm from "../Pages/TradeEnquiryForm";
import EQuotationForm from "./EQuotationForm";
import EAuctionForm from "../Pages/EAuctionForm";
import TenderContract from "../Pages/TenderContract";
import Career from "../Pages/Career";
import CircularsPage from "../Pages/CircularsPage";
import BlogPage from "../Pages/BlogPage";
import AppointmentPage from "../Pages/AppointmentPage";
import NoticeBoard from "../Pages/NoticeBoard";
import MediaGallery from "../Pages/MediaGallery";
import Associates from "../Pages/Associates";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

// Icons mapping for better UI
const menuConfig = [
  { name: "Home", icon: <Home size={20} /> },
  { name: "About Us", icon: <Info size={20} /> },
  { name: "Our Chamber Service", icon: <Settings size={20} /> },
  { name: "Blog", icon: <BookOpen size={20} /> },
  { name: "Contact Us", icon: <Phone size={20} /> },
  { name: "Our Chamber Management", icon: <Briefcase size={20} /> },
  { name: "Trade Enquiry", icon: <MessageSquare size={20} /> },
  { name: "e-Quotation", icon: <FileText size={20} /> },
  { name: "e-Auction", icon: <BarChart3 size={20} /> },
  { name: "Tender & Contract", icon: <Gavel size={20} /> },
  { name: "Career Page", icon: <UserPlus size={20} /> },
  { name: "Circular", icon: <Bell size={20} /> },
  { name: "Visit with Appointment", icon: <Calendar size={20} /> },
  { name: "Notice Board", icon: <Bell size={20} /> },
  { name: "Media Gallery", icon: <Image size={20} /> },
  { name: "Our Textile Associates", icon: <Map size={20} /> },
];

const SidebarLayout = () => {
  const [activePage, setActivePage] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handlePageChange = (item) => {
    setActivePage(item);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white overflow-hidden font-sans">
      
      {/* GLOBAL CSS FOR NO-SCROLLBAR */}
    
      
      {/* MOBILE TRIGGER */}
<div className="md:hidden bg-white p-4 flex justify-between items-center z-50 shadow-xl border-b border-slate-100">
    
    {/* Logo Container */}
    <div className="flex items-center">
        <Link to='/' className="flex items-center gap-3 hover:opacity-95 transition-all group">
            
            {/* 1. Icon Part: Isse 20% bada kiya hai (h-12 w-12) */}
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 bg-[#FF6A3D] rounded-[12px] shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-white text-3xl font-black font-sans italic">P</span>
            </div>
            
            {/* 2. Text Part */}
            <div className="flex flex-col leading-[1.1]">
                {/* Main Name: font-black (sabse mota weight) aur size bada kiya hai */}
                <div className="flex flex-col font-sans">
                    <span className="text-slate-900 text-[18px] font-black tracking-tighter leading-none">
                        PAREKH
                    </span>
                    <div className="flex items-center gap-1">
                        <span className="text-[#FF6A3D] text-[15px] font-black tracking-tighter leading-none">
                            CHAMBER
                        </span>
                        <span className="text-[#FF6A3D] text-[15px] font-black tracking-tighter leading-none">
                               OF TEXTILE
                        </span>
                      
                    </div>
                </div>
                
                {/* Location Part: Isse thoda bold aur clear kiya hai */}
                <div className="text-slate-500 text-[9px] font-extrabold tracking-[0.12em] font-sans uppercase mt-0.5">
                    BENGALURU, KA, INDIA
                </div>
            </div>
            
        </Link>
    </div>

    {/* Menu Button: Dark aur Sharp look */}
    <button 
        onClick={() => setIsSidebarOpen(true)} 
        className="flex-shrink-0 p-2.5 bg-slate-900 text-white rounded-xl active:scale-95 transition-all shadow-md ml-2"
    >
        <Menu className="w-7 h-7" />
    </button>
</div>
      {/* SIDEBAR CONTAINER */}
      <aside className={`
        ${isSidebarOpen ? "fixed inset-0 z-[60] bg-white p-0" : "hidden md:flex"} 
        md:w-85 lg:w-[400px] md:relative flex-col border-r border-slate-200 bg-slate-50
      `}>
        
        {/* Sidebar Header - Ultra Bold */}
    

        {/* Mobile Header for Drawer */}
        <div className="flex justify-between items-center p-8 border-b md:hidden bg-slate-900 text-white text-2xl font-black italic">
          NAVIGATE <button onClick={() => setIsSidebarOpen(false)} className="p-3 bg-slate-800 rounded-full"><X className="w-8 h-8"/></button>
        </div>

        {/* NAVIGATION LIST */}
     <nav className="flex-1 h-full overflow-y-auto overscroll-contain no-scrollbar py-4 pb-20">
  <ul className="space-y-0.5">
    {menuConfig.map((item) => (
      <li
        key={item.name}
        onClick={() => {
          handlePageChange(item.name);
          if(window.innerWidth < 768) setIsSidebarOpen(false); // Mobile auto-close
        }}
        className={`cursor-pointer px-8 py-5 font-black text-sm lg:text-[15px] tracking-wider transition-all duration-300 flex items-center gap-5 group border-b border-slate-100 ${
          activePage === item.name 
            ? "bg-slate-900 text-amber-500 border-l-[12px] border-amber-500 shadow-2xl" 
            : "text-slate-500 hover:bg-slate-200 hover:text-slate-900 border-l-[12px] border-transparent"
        }`}
      >
        <span className={`${activePage === item.name ? "text-amber-500" : "text-slate-400 group-hover:text-slate-900"}`}>
          {item.icon}
        </span>
        {item.name}
      </li>
    ))}
  </ul>
</nav>

        {/* Sidebar Footer */}
        <div className="p-8 bg-slate-100 border-t border-slate-200 text-[11px] font-black text-slate-400 uppercase tracking-widest hidden md:block">
           
        </div>
      </aside>

      {/* RIGHT CONTENT AREA - Seamless & Smooth */}
      <main className="flex-1 h-full overflow-y-auto no-scrollbar bg-white scroll-smooth">
        <div className="w-full">
            {activePage === "Home" && <HomePage />}
            {activePage === "About Us" && <AboutUs />}
            {activePage === "Contact Us" && <ContactUs />}
            {activePage === "Our Chamber Management" && <ChamberManagement />}
            {activePage === "Our Chamber Service" && <ChamberServices />}
            {activePage === "Trade Enquiry" && <TradeEnquiryForm />}
            {activePage === "e-Quotation" && <EQuotationForm />}
            {activePage === "e-Auction" && <EAuctionForm />}
            {activePage === "Tender & Contract" && <TenderContract />}
            {activePage === "Career Page" && <Career />}
            {activePage === "Circular" && <CircularsPage />}
            {activePage === "Blog" && <BlogPage/>}
            {activePage === "Visit with Appointment" && < AppointmentPage/>}
            {activePage === "Notice Board" && < NoticeBoard/>}
            {activePage === "Media Gallery" && < MediaGallery/>}
            {activePage === "Our Textile Associates" && < Associates/>}
        </div>

        {/* WHATSAPP */}
       
      </main>
    </div>
  );
};

export default SidebarLayout;