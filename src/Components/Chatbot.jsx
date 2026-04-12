import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Phone, Mail, Calendar, ExternalLink, Headset } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('menu'); // 'menu', 'appointment', 'contact', 'etrade'
  const navigate = useNavigate();

  const options = [
    { id: 'appointment', label: 'Book Appointment', icon: <Calendar size={16} /> },
    { id: 'contact', label: 'Contact Support', icon: <Phone size={16} /> },
    { id: 'etrade', label: 'Etrade Inquiry', icon: <ExternalLink size={16} /> }
  ];

  const handleOptionClick = (id) => {
    if (id === 'appointment') {
      navigate('/visit-appointment');
      setIsOpen(false);
    } else {
      setView(id);
    }
  };

  const resetChat = () => {
    setView('menu');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      {/* Chat Bubble Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-slate-900 rotate-90' : 'bg-amber-600 hover:bg-amber-500'
          } w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform active:scale-95`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 bg-white shadow-2xl overflow-hidden shadow-slate-900/10 border border-slate-100 animate-in slide-in-from-bottom-5 duration-300">

          {/* Header */}
          <div className="bg-slate-900 text-white p-6 border-b-4 border-amber-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-600/10 rounded-full flex items-center justify-center border border-amber-500/20">
                <Headset className="text-amber-500" size={20} />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-white">Chamber Assistant</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Online • Official Support</p>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 min-h-[300px] flex flex-col justify-between">

            {/* Main Menu */}
            {view === 'menu' && (
              <div className="space-y-6">
                <div className="bg-slate-50 p-4 border-l-4 border-amber-600">
                  <p className="text-sm font-bold text-slate-700 leading-relaxed italic">
                    "Hello! Welcome to Parekh Chamber of Textile. How can we assist you today?"
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleOptionClick(opt.id)}
                      className="flex items-center justify-between p-4 bg-white border border-slate-100 hover:border-amber-600 group transition-all shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 group-hover:text-amber-600 transition-colors">{opt.icon}</span>
                        <span className="text-xs font-black uppercase tracking-widest text-slate-900">{opt.label}</span>
                      </div>
                      <ChevronRight size={14} className="text-slate-300 group-hover:text-amber-600 transition-all transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Appointment View */}
            {view === 'appointment' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="bg-amber-50 p-4 border-l-4 border-amber-500">
                  <h4 className="text-[10px] font-black uppercase text-amber-600 mb-1">Official Visit</h4>
                  <p className="text-xs font-bold text-slate-800 leading-relaxed">
                    You can book a digital appointment for an official visit through our portal.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase font-black text-slate-400">Prerequisites:</p>
                  <ul className="text-[10px] space-y-2 text-slate-600 font-bold uppercase tracking-tight">
                    <li className="flex items-center gap-2">• Valid ID Proof (Aadhaar/DL)</li>
                    <li className="flex items-center gap-2">• Scheduled arrival time</li>
                  </ul>
                </div>
                <Link
                  to="/visit-appointment"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-slate-900 text-white py-4 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest hover:bg-amber-600 transition-all"
                >
                  Go to Portal <ChevronRight size={14} />
                </Link>
              </div>
            )}

            {/* Contact View */}
            {view === 'contact' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="bg-slate-50 p-4 border-l-4 border-slate-900">
                  <h4 className="text-[10px] font-black uppercase text-slate-900 mb-1">Quick Contact</h4>
                  <p className="text-xs font-bold text-slate-800 leading-relaxed">
                    Our team is available Mon-Sat, 10:00 AM - 6:00 PM.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 text-slate-900"><Phone size={14} /></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone</p>
                      <p className="text-xs font-bold">+91 6353778329</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 text-slate-900"><Mail size={14} /></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">General Email</p>
                      <p className="text-xs font-bold">customer-care@parekhchamber.com</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Etrade View */}
            {view === 'etrade' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="bg-slate-900 text-white p-4 border-l-4 border-amber-500 shadow-xl">
                  <h4 className="text-[10px] font-black uppercase text-amber-500 mb-1">Etrade Inquiry</h4>
                  <p className="text-xs font-bold text-slate-300 leading-relaxed">
                    Dedicated support for our digital trading platform services.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Etrade Support Email</p>
                    <p className="text-xs font-bold text-amber-600">trade-enquiry@parekhchamber.com</p>
                  </div>
                  <div className="bg-slate-50 p-4 border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Business Hours</p>
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-tighter italic">24/7 Digital Monitoring</p>
                  </div>
                </div>
              </div>
            )}

            {/* Footer / Back Button */}
            {view !== 'menu' && (
              <button
                onClick={resetChat}
                className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-amber-600 transition-colors flex items-center justify-center gap-1 mx-auto"
              >
                Back to Main Menu
              </button>
            )}

          </div>

          {/* Quick Disclaimer */}
          <div className="bg-slate-50 py-3 text-center border-t border-slate-100">
            <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">
              Automated Assistant • Parekh Chamber Of Textile
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
