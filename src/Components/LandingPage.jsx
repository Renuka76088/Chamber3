import React from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import SidebarLayout from "./SidebarLayout";


const LandingPage = () => {
  return (
    <div className="bg-[#f5f5f7] min-h-screen w-full overflow-x-hidden">


      {/* SIDEBAR LAYOUT - Iska wrapper ab Hero ke content se perfect align hoga */}
      <SidebarLayout />
  
      {/* Extra space bottom */}
      <div className="h-20"></div>
    </div>
  );
};

export default LandingPage;
