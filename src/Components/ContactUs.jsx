import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      
      {/* 1. Page Header - Bilkul Saaf aur Bada */}
      <section className="bg-slate-50 py-16 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600">
         "Get in touch with us to join the Textile Chamber or for any inquiries."
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          
          {/* Left: Contact Details (Office Addresses) */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b-2 border-amber-500 pb-2 inline-block">
              Visit Our Office
              </h2>
              
              <div className="space-y-8 mt-6">
                {/* BENGALURU Office */}
                <div className="flex gap-4">
                  <div className="mt-1">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Gujrat Office (M.P.)</h3>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                     
                    </p>
                  </div>
                </div>

                {/* Mohali Office */}
              
              </div>
            </div>

            <div className="pt-6 space-y-4 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-slate-400" />
                <span className="text-lg font-medium">+91 1111 1111</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-slate-400" />
                <span className="text-lg font-medium">info@textilechamber.in</span>
              </div>
            </div>
          </div>

          {/* Right: Message Form - Simple Inputs */}
         <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
    <div>
      <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
      <input 
        type="text" 
        className="w-full border-2 border-slate-300 p-3 rounded focus:border-amber-500 outline-none text-lg"
        placeholder="Enter your name here"
      />
    </div>

    <div>
      <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number or Email</label>
      <input 
        type="text" 
        className="w-full border-2 border-slate-300 p-3 rounded focus:border-amber-500 outline-none text-lg"
        placeholder="Enter your mobile number or email"
      />
    </div>

    <div>
      <label className="block text-sm font-bold text-slate-700 mb-2">Your Question / Message</label>
      <textarea 
        rows={4} 
        className="w-full border-2 border-slate-300 p-3 rounded focus:border-amber-500 outline-none text-lg"
        placeholder="What would you like to ask?"
      ></textarea>
    </div>

    <button className="w-full bg-slate-900 text-white py-4 rounded font-bold text-lg hover:bg-slate-800 flex items-center justify-center gap-3 transition-colors">
      Send Message <Send className="w-5 h-5" />
    </button>
  </form>
</div>

        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="py-10 bg-slate-100 text-center text-slate-500 text-sm">
        <p>© 2026 Textile Chamber. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;