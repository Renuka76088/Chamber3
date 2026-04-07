import React from 'react';
import { Gavel, Building2, User, MapPin, Hash, Mail, Phone, AlertTriangle, Upload, Send } from 'lucide-react';

const EAuctionForm = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-20">
      
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Gavel className="w-8 h-8 text-amber-500" />
            <h1 className="text-3xl font-bold">Auction Listing Form</h1>
          </div>
          <p className="text-slate-400 text-sm tracking-widest">Register your entity for the upcoming e-Auction Room</p>
        </div>
      </section>

      {/* Form Body */}
      <div className="max-w-4xl mx-auto -mt-10 px-6">
        <form className="bg-white shadow-2xl rounded-sm border border-slate-200 overflow-hidden">
          
          <div className="p-8 space-y-10">
            
            {/* 1. Participant Information */}
            <section className="space-y-6">
              <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-2">
                <User className="w-5 h-5 text-amber-600" /> Participant Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-xs font-bold uppercase mb-2 text-slate-500">Name of the Participant</label>
                  <input type="text" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none transition-all" placeholder="Full Name of Authorised Person" required />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-xs font-bold uppercase mb-2 text-slate-500">Legal Name of the Business</label>
                  <div className="relative">
                    <input type="text" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none transition-all" placeholder="Enter Registered Business Name" required />
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Contact & Identity Information */}
            <section className="space-y-6">
              <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-2">
                <Building2 className="w-5 h-5 text-amber-600" /> Business Identity
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-xs font-bold uppercase mb-2 text-slate-500">Business Address with Pin code</label>
                  <div className="relative">
                    <textarea className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none h-24" placeholder="Complete address including state and PIN Code" required />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-2 text-slate-500">GST No.</label>
                  <input type="text" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" placeholder="22AAAAA0000A1Z5" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-2 text-slate-500">Mobile No.</label>
                  <input type="tel" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" placeholder="+91 00000-00000" required />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-bold uppercase mb-2 text-slate-500">Email Id</label>
                  <input type="email" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" placeholder="example@business.com" required />
                </div>
              </div>
            </section>

            {/* 3. Documentation */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-2">
                <Upload className="w-5 h-5 text-amber-600" /> KYC Verification
              </h3>
              <div className="border-2 border-dashed border-slate-200 p-10 text-center hover:bg-slate-50 transition-all group rounded-sm">
                <Upload className="w-10 h-10 text-slate-300 mx-auto mb-2 group-hover:text-amber-600 transition-colors" />
                <p className="text-sm font-bold uppercase text-slate-700">Upload GST Certificate</p>
                <p className="text-[10px] text-slate-400 mt-1">Official Registration Document (PDF, JPG - Max 5MB)</p>
                <input type="file" className="hidden" id="auctionDocs" />
                <label htmlFor="auctionDocs" className="mt-4 inline-block bg-slate-900 text-white px-8 py-2.5 text-[10px] font-bold uppercase cursor-pointer hover:bg-amber-600 transition-all">Select File</label>
              </div>
            </section>

            {/* 4. Declaration */}
            <div className="bg-slate-900 p-6 rounded-sm text-white">
              <div className="flex gap-4">
                <AlertTriangle className="w-10 h-10 text-amber-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-amber-500">Declaration of Authenticity</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed italic">
                    I hereby declare that I am the authorized representative of the mentioned business entity. All information provided is true and I accept the terms of the Parekh Chamber e-Auction Management System.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <input type="checkbox" id="confirm" className="accent-amber-500 w-4 h-4 cursor-pointer" />
                    <label htmlFor="confirm" className="text-[10px] font-bold uppercase text-slate-300 cursor-pointer">I agree to the auction terms & conditions</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 pt-6">
              <button type="button" className="flex-1 border-2 border-slate-900 py-4 font-bold uppercase text-xs tracking-widest hover:bg-slate-50 transition-all">
                Save Draft
              </button>
              <button type="submit" className="flex-1 bg-amber-600 text-white py-4 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-amber-500 shadow-xl transition-all">
                <Send className="w-4 h-4" /> Publish Listing
              </button>
            </div>
          </div>

          <footer className="bg-slate-50 py-4 text-center border-t border-slate-200">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Official Document — PAREKH CHAMBER OF TEXTILE</p>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default EAuctionForm;