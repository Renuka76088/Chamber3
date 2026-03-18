import React from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import SidebarLayout from "./SidebarLayout";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <div className="bg-[#f5f5f7] min-h-screen w-full overflow-x-hidden">
      {/* Navbar is already w-full inside its own component */}
      <Navbar />

   

      {/* SIDEBAR LAYOUT - Iska wrapper ab Hero ke content se perfect align hoga */}
      <SidebarLayout />
      
      {/* Extra space bottom */}
      <div className="h-20"></div>
    </div>
  );
};

export default LandingPage;
