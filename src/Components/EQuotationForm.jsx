import React, { useState } from 'react';
import { FileSpreadsheet, Send, Calculator, ClipboardCheck, Building2, Upload, MessageSquare } from 'lucide-react';

const EQuotationForm = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-20">
      
      {/* 1. Dynamic Header */}
      <section className="bg-slate-900 text-white py-12 px-6 border-b-4 border-amber-600">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">e-Quotation Portal</h1>
            <p className="text-slate-400 text-sm uppercase tracking-widest">Digital Procurement & Price Submission</p>
          </div>
        
        </div>
      </section>

      <div className="max-w-5xl mx-auto -mt-8 px-6">
        <div className="bg-white shadow-xl rounded-sm p-8 border border-slate-200">
          
          <form className="space-y-10">
            
            {/* 2. Trader & Business Information */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-bold flex items-center gap-2 mb-1">
                  <ClipboardCheck className="w-5 h-5 text-amber-600" /> Quotation Details
                </h3>
                <p className="text-xs text-slate-500">Information of the quoting entity</p>
              </div>
              
              <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Name of the Trader</label>
                  <input type="text" className="w-full border-b border-slate-300 p-2 focus:border-amber-600 outline-none transition-all" placeholder="Enter Full Name" />
                </div>
                
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Business Name</label>
                  <input type="text" className="w-full border-b border-slate-300 p-2 focus:border-amber-600 outline-none transition-all" placeholder="Legal Entity Name" />
                </div>

                <div className="col-span-2">
                  <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Business Address with Pin Code</label>
                  <textarea className="w-full border-b border-slate-300 p-2 focus:border-amber-600 outline-none transition-all h-20" placeholder="Complete address with PIN" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">GST No.</label>
                  <input type="text" className="w-full border-b border-slate-300 p-2 focus:border-amber-600 outline-none transition-all" placeholder="22AAAAA0000A1Z5" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Mobile No.</label>
                  <input type="tel" className="w-full border-b border-slate-300 p-2 focus:border-amber-600 outline-none transition-all" placeholder="+91 00000-00000" />
                </div>

                <div className="col-span-2">
                  <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Email Id</label>
                  <input type="email" className="w-full border-b border-slate-300 p-2 focus:border-amber-600 outline-none transition-all" placeholder="contact@business.com" />
                </div>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* 3. Quotation Category (Roll-down) */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-bold flex items-center gap-2 mb-1">
                  <Building2 className="w-5 h-5 text-amber-600" /> Category
                </h3>
                <p className="text-xs text-slate-500">Select quotation type</p>
              </div>
              <div className="md:col-span-2">
                <label className="block text-[10px] font-bold uppercase text-slate-500 mb-2">Options (Select One)</label>
                <select className="w-full border border-slate-200 p-3 rounded-sm outline-none bg-white focus:border-amber-600 cursor-pointer text-sm font-medium">
                  <option value="" disabled selected>Select Quotation Type...</option>
                  <option>Quotation for Textile Raw Materials</option>
                  <option>Quotation for Textile Finished Products</option>
                  <option>Quotation for Textile Machinery & Spares</option>
                  <option>Others</option>
                </select>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* 4. Description & Services */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-bold flex items-center gap-2 mb-1">
                  <MessageSquare className="w-5 h-5 text-amber-600" /> Scope of Work
                </h3>
                <p className="text-xs text-slate-500">Detail your products or services</p>
              </div>
              <div className="md:col-span-2">
                <label className="block text-[10px] font-bold uppercase text-slate-500 mb-2">Description of the Products & Services</label>
                <textarea 
                  className="w-full h-48 p-4 text-sm bg-slate-50 border border-slate-200 outline-none focus:border-amber-600 focus:bg-white transition-all rounded-sm" 
                  placeholder="Provide a detailed breakdown of items, quantities, and specific services offered..."
                />
              </div>
            </div>

            {/* 5. Document Upload Section */}
            <div className="bg-slate-900 p-8 text-center rounded-sm">
              <Upload className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <h4 className="font-bold text-white text-sm uppercase mb-1">Upload GST Certificate</h4>
              <p className="text-[10px] text-slate-400 mb-4">Verification required for legal procurement (PDF/JPEG)</p>
              <input type="file" className="hidden" id="gstUpload" />
              <label htmlFor="gstUpload" className="inline-block border-2 border-amber-600 text-amber-600 px-8 py-2 text-xs font-bold cursor-pointer hover:bg-amber-600 hover:text-white transition-all">
                BROWSE FILES
              </label>
            </div>

            {/* 6. Submission Buttons */}
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <button type="button" className="flex-1 border-2 border-slate-900 py-4 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                <Calculator className="w-4 h-4" /> Save as Draft
              </button>
              <button type="submit" className="flex-1 bg-amber-600 text-white py-4 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-amber-500 shadow-lg shadow-amber-200 transition-all">
                <Send className="w-4 h-4" /> Final Submission
              </button>
            </div>

          </form>

        </div>
      </div>
      
      <footer className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest">
        Official Digital Document — PAREKH CHAMBER OF TEXTILE 
      </footer>
    </div>
  );
};

export default EQuotationForm;