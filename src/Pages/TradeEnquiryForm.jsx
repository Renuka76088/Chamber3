import React, { useState } from 'react';
import { FileText, Upload, Send, Eye, ShieldCheck, Info } from 'lucide-react';

const TradeEnquiryForm = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-20">
      
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Apply for Membership</h1>
          <p className="text-amber-500 font-medium tracking-wide uppercase text-sm">Enquiry Submission Portal</p>
        </div>
      </section>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto -mt-10 px-6">
        <div className="bg-white shadow-2xl rounded-sm border border-slate-200 overflow-hidden">
          
          <div className="p-8">
            <form className="space-y-8">
              
              {/* 1. Internal Office Section */}
              <div className="bg-slate-50 p-6 border-l-4 border-slate-900 space-y-4">
                <div className="flex items-center gap-2 mb-2 text-slate-500">
                  <Info className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Office Use Only</span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase mb-2 text-slate-700">Authorized Official Name</label>
                    <input type="text" className="w-full border-b-2 border-slate-200 p-2 focus:border-amber-500 outline-none transition-colors bg-transparent" placeholder="Name of Official" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase mb-2 text-slate-700">Chamber Code No.</label>
                    <input type="text" className="w-full border-b-2 border-slate-200 p-2 focus:border-amber-500 outline-none transition-colors bg-transparent" placeholder="Enter Code" />
                  </div>
                </div>
              </div>

              {/* 2. Applicant Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold border-b pb-2 flex items-center gap-2">
                  <FileText className="text-amber-600 w-5 h-5" /> Applicant Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-bold uppercase mb-2">Name of the Applicant</label>
                    <input type="text" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" required />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-bold uppercase mb-2">Title of Textile Business</label>
                    <input type="text" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" placeholder="Company Name" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-bold uppercase mb-2">Address of the Business</label>
                    <textarea className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none h-24" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase mb-2">Mobile No.</label>
                    <input type="tel" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase mb-2">Email Id</label>
                    <input type="email" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-bold uppercase mb-2">URL (Website if any)</label>
                    <input type="url" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" placeholder="https://..." />
                  </div>
                </div>
              </div>

              {/* 3. Classification Section */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase mb-3">Nature of Business</label>
                  <select className="w-full border border-slate-200 p-3 rounded-sm outline-none bg-white">
                    <option>Retailer</option>
                    <option>Wholesaler</option>
                    <option>Manufacturer</option>
                    <option>Exporter</option>
                    <option>Others</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-3">Category of Business</label>
                  <select className="w-full border border-slate-200 p-3 rounded-sm outline-none bg-white">
                    <option>Proprietorship</option>
                    <option>Partnership</option>
                    <option>LLP</option>
                    <option>Private Limited</option>
                    <option>Limited (Ltd.)</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* 4. Document Upload Section */}
              <div className="border-2 border-dashed border-slate-200 p-8 text-center rounded-sm hover:border-amber-500 transition-colors">
                <Upload className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                <h4 className="font-bold text-sm uppercase mb-2">Upload Supporting Documents</h4>
                <p className="text-xs text-slate-500 mb-4">Attach GST, MSME, Trade License, or CIN (PDF or JPEG)</p>
                <input type="file" className="hidden" id="fileUpload" multiple />
                <label htmlFor="fileUpload" className="bg-slate-900 text-white px-6 py-2 text-xs font-bold cursor-pointer hover:bg-slate-800 transition-all">
                  Browse Files
                </label>
              </div>

              {/* 5. Undertaking Section */}
              <div className="bg-amber-50 p-6 border border-amber-100 rounded-sm">
                <div className="flex gap-4">
                  <ShieldCheck className="w-10 h-10 text-amber-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm uppercase mb-2 underline decoration-amber-500 underline-offset-4">Undertaking</h4>
                    <p className="text-sm text-slate-700 leading-relaxed italic">
                      "I have read the Terms & Conditions of subscription for the membership in the Chamber of Textile. All the information provided by me and the documents uploaded thereof are true and authentic to the best of my knowledge and belief."
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                        <input type="checkbox" id="agree" className="accent-amber-600" />
                        <label htmlFor="agree" className="text-xs font-bold text-slate-600">I AGREE TO THE TERMS</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Action Buttons */}
              <div className="flex flex-col md:flex-row gap-4 pt-6">
                <button type="button" className="flex-1 flex items-center justify-center gap-2 border-2 border-slate-900 px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-slate-50 transition-all">
                  <Eye className="w-4 h-4" /> Preview Application
                </button>
                <button type="submit" className="flex-1 flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-amber-500 shadow-lg transition-all">
                  <Send className="w-4 h-4" /> Submit Form
                </button>
              </div>

            </form>
          </div>
          
          <footer className="bg-slate-900 py-4 px-8 text-center">
            <p className="text-slate-500 text-[10px] uppercase tracking-tighter">Secure 256-bit Encrypted Membership Gateway</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default TradeEnquiryForm;