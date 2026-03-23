import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, MessageSquare, Send, Bot, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Chatbot States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! Welcome to HC Parekh Chamber. How can I help you today?' }
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
      {/* Existing Navbar Structure */}
      <nav className="bg-white border-b-2 border-slate-200 sticky top-0 z-[100] w-full shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-12">
          <div className="flex items-center gap-10">
            <h1 className="text-2xl font-bold text-slate-950 tracking-tight">
              Parekh<span className="text-amber-600 italic">Chamber</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-slate-600 font-bold hover:text-black">Log in</button>
            <button className="bg-slate-950 text-white px-5 py-2 font-bold uppercase text-[10px] tracking-widest hover:bg-amber-600 transition-all">
              Join Now
            </button>
            <button className="md:hidden p-2 text-slate-900 border border-slate-200 rounded" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- FLOATING ACTION BUTTONS (Bottom Right) --- */}
      <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-4">
        
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