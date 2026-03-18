import React, { useState } from "react";
import { 
  Menu, X, Home, Info, Phone, Briefcase, 
  Settings, FileText, BarChart3, Gavel, 
  UserPlus, Bell, BookOpen, Calendar, 
  Image, Map, MessageSquare 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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

// Icons mapping for better UI
const menuConfig = [
  { name: "Home", icon: <Home size={20} /> },
  { name: "About Us", icon: <Info size={20} /> },
  { name: "Contact Us", icon: <Phone size={20} /> },
  { name: "Our Chamber Service", icon: <Settings size={20} /> },
  { name: "Our Chamber Management", icon: <Briefcase size={20} /> },
  { name: "Trade Enquiry (e-Form)", icon: <MessageSquare size={20} /> },
  { name: "e-Quotation (e-Form)", icon: <FileText size={20} /> },
  { name: "e-Auction (e-Form)", icon: <BarChart3 size={20} /> },
  { name: "Tender & Contract", icon: <Gavel size={20} /> },
  { name: "Career Page", icon: <UserPlus size={20} /> },
  { name: "Circular", icon: <Bell size={20} /> },
  { name: "Blog", icon: <BookOpen size={20} /> },
  { name: "Visit with Appointment", icon: <Calendar size={20} /> },
  { name: "Notice Board", icon: <Bell size={20} /> },
  { name: "Media Gallery", icon: <Image size={20} /> },
  { name: "Our Textile Associates (India Map)", icon: <Map size={20} /> },
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
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      {/* MOBILE TRIGGER */}
      <div className="md:hidden bg-slate-900 text-white p-5 flex justify-between items-center z-50 shadow-xl">
        <h2 className="font-black uppercase tracking-tighter text-lg italic">
          Parekh <span className="text-amber-500">Chamber</span>
        </h2>
        <button onClick={() => setIsSidebarOpen(true)} className="p-2 bg-slate-800 rounded-lg">
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* SIDEBAR CONTAINER */}
      <aside className={`
        ${isSidebarOpen ? "fixed inset-0 z-[60] bg-white p-0" : "hidden md:flex"} 
        md:w-85 lg:w-[400px] md:relative flex-col border-r border-slate-200 bg-slate-50
      `}>
        
        {/* Sidebar Header - Ultra Bold */}
        <div className="hidden md:block p-10 border-b border-slate-200 bg-slate-900 text-white">
          <h2 className="text-3xl font-black uppercase tracking-tighter italic leading-none">
            Parekh <br />
            <span className="text-amber-500 text-xl">Chamber</span>
          </h2>
          <div className="h-1.5 w-16 bg-amber-500 mt-5"></div>
          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.4em] mt-5">Management Portal</p>
        </div>

        {/* Mobile Header for Drawer */}
        <div className="flex justify-between items-center p-8 border-b md:hidden bg-slate-900 text-white text-2xl font-black italic">
          NAVIGATE <button onClick={() => setIsSidebarOpen(false)} className="p-3 bg-slate-800 rounded-full"><X className="w-8 h-8"/></button>
        </div>

        {/* NAVIGATION LIST */}
        <nav className="flex-1 overflow-y-auto no-scrollbar py-2">
          <ul className="space-y-0.5">
            {menuConfig.map((item) => (
              <li
                key={item.name}
                onClick={() => handlePageChange(item.name)}
                className={`cursor-pointer px-8 py-5 font-black text-sm lg:text-[15px] uppercase tracking-wider transition-all duration-300 flex items-center gap-5 group border-b border-slate-100 ${
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
           Official Tech Unit | Indore, MP
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
            {activePage === "Trade Enquiry (e-Form)" && <TradeEnquiryForm />}
            {activePage === "e-Quotation (e-Form)" && <EQuotationForm />}
            {activePage === "e-Auction (e-Form)" && <EAuctionForm />}
            {activePage === "Tender & Contract" && <TenderContract />}
            {activePage === "Career Page" && <Career />}
            {activePage === "Circular" && <CircularsPage />}
            {activePage === "Blog" && <BlogPage/>}
            {activePage === "Visit with Appointment" && < AppointmentPage/>}
            {activePage === "Notice Board" && < NoticeBoard/>}
            {activePage === "Media Gallery" && < MediaGallery/>}
            {activePage === "Our Textile Associates (India Map)" && < Associates/>}
        </div>

        {/* WHATSAPP */}
        <a href="https://wa.me/91731404XXXX" target="_blank" rel="noreferrer" 
           className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_15px_50px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-90 transition-all">
          <FaWhatsapp className="w-9 h-9" />
        </a>
      </main>
    </div>
  );
};

export default SidebarLayout;