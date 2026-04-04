import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, MessageSquare, Send, Bot, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Chatbot States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! Welcome to PAREKH CHAMBER OF TEXTILE . How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botResponse = { 
        role: 'bot', 
        text: "Thank you for reaching out! Our AI is analyzing your request. For immediate assistance, you can also use the WhatsApp button above." 
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
<header className="hidden md:flex w-full bg-[#0d1b2a] backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 px-8 py-4 items-center justify-between transition-all">
  
  {/* LEFT SIDE: Logo Section */}
<div className="flex items-center">
    {/* Logo Link Container */}
    <Link to='/' className="flex items-center gap-4 hover:opacity-95 transition-all group">
        
        {/* 1. Icon Part: Bada aur Mota Rounded Box */}
        <div className="flex items-center justify-center h-12 w-12 bg-[#FF6A3D] rounded-[12px] shadow-md group-hover:scale-105 transition-transform">
            <span className="text-white text-3xl font-black font-sans italic">P</span>
        </div>
        
        {/* 2. Text Part: Company Name (Bada Size) */}
        <div className="flex flex-col gap-0">
            
            {/* Main Name: Extra Bold aur Large */}
            <div className="flex items-baseline gap-2 font-sans">
                <span className="text-[#ffff] text-xl md:text-2xl font-black tracking-tighter">
                    PAREKH
                </span>
                <span className="text-[#FF6A3D] text-xl md:text-2xl font-black tracking-tighter">
                    CHAMBER OF TEXTILE
                </span>
            </div>
            
            {/* Location Part: Isse bhi thoda clear aur bold kiya hai */}
            <div className="text-[#ffff] text-[11px] font-bold tracking-[0.2em] font-sans uppercase opacity-90">
                BENGALURU, KA, INDIA
            </div>
        </div>
        
    </Link>
</div>

  {/* RIGHT SIDE: Info & Action */}
  <div className="flex items-center gap-6">
    
    

    {/* CTA Button */}
    <button className="group relative overflow-hidden bg-[#fff] text-[#0d1b2a] px-7 py-2.5 rounded-full text-sm font-bold tracking-wide hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 active:scale-95">
      <span className="relative z-10 flex items-center gap-2">
        <Link to="/trade-enquiry" className="flex items-center gap-2">
        
        Get Inquiry
        <span className="group-hover:translate-x-1 transition-transform">→</span>
        
        </Link>
      </span>
    </button>
  </div>

</header>

<div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-4">
  {/* Logo Section - Properly Aligned */}


  
  {/* 1. WhatsApp Button (Direct Link) */}
  <a 
    href="https://wa.me/919827098270" // Apna number yahan change karein
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
    title="Chat on WhatsApp"
  >
    <FaWhatsapp size={28} fill="currentColor" />
    
    {/* Tooltip on Hover */}
    <span className="absolute right-16 bg-white text-slate-800 text-xs font-bold px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">
      WhatsApp Us
    </span>
  </a>

  {/* 2. AI Chatbot Window */}
  {isChatOpen && (
    <div className="bg-white w-[350px] sm:w-[400px] h-[500px] shadow-2xl rounded-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-slate-950 p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-amber-600 p-2 rounded-full text-white"><Bot size={20} /></div>
          <div>
            <p className="text-white font-bold text-sm">AI Assistant</p>
            <p className="text-amber-400 text-[10px] uppercase font-bold tracking-wider">Online</p>
          </div>
        </div>
        <button onClick={() => setIsChatOpen(false)} className="text-slate-400 hover:text-white"><X size={20} /></button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-amber-600 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-200 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
        />
        <button type="submit" className="bg-slate-950 text-white p-2 rounded-full hover:bg-amber-600 transition-colors"><Send size={18} /></button>
      </form>
    </div>
  )}

  {/* 3. AI Chatbot Toggle Button */}
  <button 
    onClick={() => setIsChatOpen(!isChatOpen)}
    className={`${isChatOpen ? 'bg-slate-800 rotate-90' : 'bg-slate-950'} text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center`}
  >
    {isChatOpen ? <X size={28} /> : <MessageSquare size={28} />}
  </button>
</div>
    </>
  );
};

export default Navbar;