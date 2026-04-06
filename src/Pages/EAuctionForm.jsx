import React from 'react';
import { Gavel, Calendar, DollarSign, Package, FileText, AlertTriangle, Upload } from 'lucide-react';

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
          <p className="text-slate-400 text-sm  tracking-widest">Register your textile lot for the upcoming e-Auction</p>
        </div>
      </section>

      {/* Form Body */}
      <div className="max-w-4xl mx-auto -mt-10 px-6">
        <form className="bg-white shadow-2xl rounded-sm border border-slate-200 overflow-hidden">
          
          <div className="p-8 space-y-10">
            
            {/* 1. Basic Lot Information */}
            <section className="space-y-6">
              <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-2">
                <Package className="w-5 h-5 text-amber-600" /> Lot Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-xs font-bold uppercase mb-2 text-slate-500">Lot Title / Product Name</label>
                  <input type="text" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" placeholder="e.g. 5000kg Surplus Combed Cotton Yarn - Grade A" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-2 text-slate-500">Category</label>
                  <select className="w-full border border-slate-200 p-3 rounded-sm outline-none bg-slate-50">
                    <option>Raw Cotton</option>
                    <option>Finished Fabric</option>
                    <option>Synthetic Yarn</option>
                    <option>Machinery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-2 text-slate-500">Total Quantity (with units)</label>
                  <input type="text" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" placeholder="e.g. 500 Meters / 20 Tons" />
                </div>
              </div>
            </section>

            {/* 2. Pricing & Bidding Rules */}
            <section className="space-y-6">
              <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-2">
                <DollarSign className="w-5 h-5 text-amber-600" /> Pricing Dynamics
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase mb-2 text-slate-500">Base/Reserve Price (₹)</label>
                  <input type="number" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none font-bold" placeholder="Min. Price" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-2 text-slate-500">Incremental Value (₹)</label>
                  <input type="number" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" placeholder="e.g. 5000" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-2 text-slate-500">Security Deposit (EMD)</label>
                  <input type="number" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" placeholder="Refundable Amt" />
                </div>
              </div>
            </section>

            {/* 3. Auction Scheduling */}
            <section className="space-y-6">
              <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-2">
                <Calendar className="w-5 h-5 text-amber-600" /> Scheduling
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase mb-2 text-slate-500">Auction Start Date & Time</label>
                  <input type="datetime-local" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-2 text-slate-500">Auction End Date & Time</label>
                  <input type="datetime-local" className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none" />
                </div>
              </div>
            </section>

            {/* 4. Documentation */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-2">
                <FileText className="w-5 h-5 text-amber-600" /> Inspection Reports
              </h3>
              <div className="border-2 border-dashed border-slate-200 p-10 text-center hover:bg-slate-50 transition-all group">
                <Upload className="w-10 h-10 text-slate-300 mx-auto mb-2 group-hover:text-amber-600" />
                <p className="text-sm font-medium">Upload Quality Certificates & Photos</p>
                <p className="text-[10px] text-slate-400 mt-1 uppercase">Max Size: 10MB (PDF, JPG)</p>
                <input type="file" className="hidden" id="auctionDocs" />
                <label htmlFor="auctionDocs" className="mt-4 inline-block bg-slate-900 text-white px-6 py-2 text-[10px] font-bold uppercase cursor-pointer">Select Files</label>
              </div>
            </section>

            {/* 5. Declaration */}
            <div className="bg-slate-900 p-6 rounded-sm text-white">
              <div className="flex gap-4">
                <AlertTriangle className="w-10 h-10 text-amber-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-amber-500">Seller Declaration</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed italic">
                    I hereby declare that the goods mentioned above are free from any legal disputes and the quality specifications provided are accurate. I understand that the Parekh Chamber reserves the right to cancel any listing if found in violation of trade ethics.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <input type="checkbox" id="confirm" className="accent-amber-500" />
                    <label htmlFor="confirm" className="text-[10px] font-bold uppercase text-slate-300">I accept all auction terms</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 pt-6">
              <button type="button" className="flex-1 border-2 border-slate-900 py-4 font-bold uppercase text-xs tracking-widest hover:bg-slate-50 transition-all">
                Save Draft Listing
              </button>
              <button type="submit" className="flex-1 bg-amber-600 text-white py-4 font-bold uppercase text-xs tracking-widest hover:bg-amber-500 shadow-xl transition-all">
                Publish to Auction Room
              </button>
            </div>
          </div>

          <footer className="bg-slate-50 py-4 text-center border-t border-slate-200">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Parekh Chamber of Textile - Auction Management System</p>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default EAuctionForm;