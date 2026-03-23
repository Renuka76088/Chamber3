import React from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  MessageSquare, 
  Phone, 
  Mail, 
  ChevronRight, 
  ShieldCheck,
  Building 
} from 'lucide-react';

const AppointmentPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pb-20">
      
      {/* 1. Header Section (Matches Site Theme) */}
      <section className="bg-slate-900 text-white py-16 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Book an <span className="text-amber-500">Appointment</span></h1>
          <p className="text-lg text-slate-300 border-l-4 border-amber-500 pl-4 max-w-2xl">
"Schedule a consultation with Parekh Chamber experts. From business registration to legal advice, we are here to help."          </p>
        </div>
        <Calendar className="absolute right-[-5%] top-[-10%] opacity-5 w-80 h-80 text-white" strokeWidth={0.5} />
      </section>

      {/* 2. Main Appointment Content */}
      <main className="max-w-6xl mx-auto mt-12 px-6 grid lg:grid-cols-12 gap-12">
        
        {/* Left Side: Information & Benefits */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-slate-50 p-8 border border-slate-200">
            <h2 className="text-2xl font-bold mb-6 underline decoration-amber-500 underline-offset-8">Visit Guidelines</h2>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="bg-amber-100 p-2 text-amber-600 font-bold text-xs uppercase">01</div>
                <div>
                  <p className="font-bold text-lg leading-tight">Prior Confirmation</p>
                  <p className="text-slate-600 text-sm mt-1">"All appointments must be confirmed 24 hours in advance."</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-amber-100 p-2 text-amber-600 font-bold text-xs uppercase">02</div>
                <div>
                  <p className="font-bold text-lg leading-tight">Document Readiness</p>
                  <p className="text-slate-600 text-sm mt-1">"It is mandatory to carry your business documents and a valid ID proof for verification."</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-amber-100 p-2 text-amber-600 font-bold text-xs uppercase">03</div>
                <div>
                  <p className="font-bold text-lg leading-tight">Virtual Option</p>
                  <p className="text-slate-600 text-sm mt-1">"You can also select an online meeting via Zoom or Google Meet."</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 p-8 text-white rounded-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-amber-500" /> Quick Support
            </h3>
            <p className="text-slate-400 text-sm mb-6">"If you encounter any issues while filling out the form, please contact us immediately."</p>
            <div className="space-y-2 font-mono text-amber-500 font-bold">
                <p>+91 98XXX-XXXXX</p>
                <p>support@parekhchamber.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: Appointment Form */}
        <div className="lg:col-span-7">
          <form className="bg-white border border-slate-200 shadow-2xl p-8 md:p-12 space-y-8">
            <h2 className="text-3xl font-black text-slate-900 border-b pb-4">Schedule <span className="text-amber-600">Now</span></h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-600" /> Full Name
                </label>
                <input type="text" className="w-full border-b-2 border-slate-100 py-3 text-lg focus:border-amber-600 outline-none transition-all" placeholder="Your Name" />
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <Building className="w-4 h-4 text-amber-600" /> Organization
                </label>
                <input type="text" className="w-full border-b-2 border-slate-100 py-3 text-lg focus:border-amber-600 outline-none transition-all" placeholder="Company Name" />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-600" /> Email ID
                </label>
                <input type="email" className="w-full border-b-2 border-slate-100 py-3 text-lg focus:border-amber-600 outline-none transition-all" placeholder="example@mail.com" />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-600" /> Mobile No.
                </label>
                <input type="tel" className="w-full border-b-2 border-slate-100 py-3 text-lg focus:border-amber-600 outline-none transition-all" placeholder="+91" />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-600" /> Preferred Date
                </label>
                <input type="date" className="w-full border-b-2 border-slate-100 py-3 text-lg focus:border-amber-600 outline-none transition-all bg-transparent" />
              </div>

              {/* Time Slot */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" /> Time Slot
                </label>
                <select className="w-full border-b-2 border-slate-100 py-3 text-lg focus:border-amber-600 outline-none bg-transparent">
                  <option>10:00 AM - 12:00 PM</option>
                  <option>02:00 PM - 04:00 PM</option>
                  <option>04:00 PM - 06:00 PM</option>
                </select>
              </div>
            </div>

            {/* Purpose/Message */}
            <div className="space-y-2 pt-4">
              <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-amber-600" /> Purpose of Visit
              </label>
              <textarea className="w-full bg-slate-50 border-2 border-slate-100 p-4 text-lg focus:border-amber-600 outline-none min-h-[120px]" placeholder="Briefly describe your requirements..." />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
                <button type="submit" className="w-full bg-slate-900 text-white py-5 font-bold uppercase text-xs tracking-[0.3em] hover:bg-amber-600 shadow-2xl transition-all flex items-center justify-center gap-3 group">
                  Confirm Appointment <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
                <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-6 flex items-center justify-center gap-2">
                   <ShieldCheck className="w-3 h-3 text-green-500" /> Secure Encryption Active
                </p>
            </div>
          </form>
        </div>
      </main>

      {/* Footer Disclaimer */}
      <footer className="mt-20 py-10 border-t border-slate-100 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
           Parekh Chamber Consultation Services © 2026. Indore HQ.
        </p>
      </footer>

    </div>
  );
};

export default AppointmentPage;