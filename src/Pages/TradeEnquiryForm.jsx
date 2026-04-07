import React from 'react';
import { FileText, Upload, Send, Eye, ShieldCheck, Info, MapPin, Hash, Mail, Phone, Building2 } from 'lucide-react';

const TradeEnquiryForm = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-20">
      
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Trade Enquiry</h1>
          <p className="text-amber-500 font-medium tracking-wide uppercase text-sm">Parekh Chamber of Textile • Digital Portal</p>
        </div>
      </section>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto -mt-10 px-6">
        <div className="bg-white shadow-2xl rounded-sm border border-slate-200 overflow-hidden">
          
          <div className="p-8">
            <form className="space-y-8">
              
            
              {/* 2. Business & Trader Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold border-b pb-2 flex items-center gap-2">
                  <FileText className="text-amber-600 w-5 h-5" /> Trader Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Name of the Trader */}
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-bold uppercase mb-2">Name of the Trader</label>
                    <div className="relative">
                       <input type="text" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" placeholder="Enter full name" required />
                    </div>
                  </div>

                  {/* Business Name */}
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-bold uppercase mb-2">Business Name</label>
                    <input type="text" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" placeholder="Legal Entity Name" required />
                  </div>

                  {/* Business Address with Pin code */}
                  <div className="col-span-2">
                    <label className="block text-xs font-bold uppercase mb-2">Business Address with Pin code</label>
                    <textarea className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none h-24" placeholder="Complete address including state and PIN" required />
                  </div>

                  {/* GST No. */}
                  <div>
                    <label className="block text-xs font-bold uppercase mb-2 flex items-center gap-1">GST No. <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <input type="text" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" placeholder="22AAAAA0000A1Z5" />
                  </div>

                  {/* Mobile No. */}
                  <div>
                    <label className="block text-xs font-bold uppercase mb-2">Mobile No.</label>
                    <input type="tel" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" placeholder="+91 00000-00000" required />
                  </div>

                  {/* Email Id */}
                  <div className="col-span-2">
                    <label className="block text-xs font-bold uppercase mb-2">Email Id</label>
                    <input type="email" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" placeholder="contact@business.com" />
                  </div>
                </div>
              </div>

              {/* 3. Options (Roll-down mode) */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold border-b pb-2 flex items-center gap-2">
                  <Building2 className="text-amber-600 w-5 h-5" /> Enquiry Category
                </h3>
                <div className="w-full">
                  <label className="block text-xs font-bold uppercase mb-3">Please Select Purpose of Enquiry</label>
                  <select className="w-full border border-slate-200 p-4 rounded-sm outline-none bg-white font-medium focus:border-amber-500 cursor-pointer">
                    <option value="" disabled selected>Choose an option...</option>
                    <option>For New Membership</option>
                    <option>For Finance & Investment</option>
                    <option>For Manufacturing Support</option>
                    <option>For Textile Retail and Supply Support</option>
                    <option>For Textile Consultancy</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>

              {/* 4. Document Upload Section (GST Certificate) */}
              <div className="border-2 border-dashed border-slate-200 p-8 text-center rounded-sm hover:border-amber-500 transition-colors bg-slate-50/50">
                <Upload className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                <h4 className="font-bold text-sm uppercase mb-2">Upload GST Certificate</h4>
                <p className="text-xs text-slate-500 mb-4">Please attach your GST registration document (PDF or JPEG)</p>
                <input type="file" className="hidden" id="fileUpload" />
                <label htmlFor="fileUpload" className="bg-slate-900 text-white px-8 py-2.5 text-xs font-bold cursor-pointer hover:bg-slate-800 transition-all shadow-md">
                  CHOOSE FILE
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
                        <input type="checkbox" id="agree" className="accent-amber-600 w-4 h-4" />
                        <label htmlFor="agree" className="text-xs font-bold text-slate-600 cursor-pointer">I AGREE TO THE TERMS</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Action Buttons */}
              <div className="flex flex-col md:flex-row gap-4 pt-6">
                <button type="button" className="flex-1 flex items-center justify-center gap-2 border-2 border-slate-900 px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-slate-50 transition-all">
                  <Eye className="w-4 h-4" /> Preview
                </button>
                <button type="submit" className="flex-1 flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-amber-500 shadow-lg transition-all">
                  <Send className="w-4 h-4" /> Submit Enquiry
                </button>
              </div>

            </form>
          </div>
          
          <footer className="bg-slate-900 py-4 px-8 text-center">
            <p className="text-slate-500 text-[10px] uppercase tracking-tighter">Official Portal of Parekh Chamber of Textile • Verified Business Gateway</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default TradeEnquiryForm;