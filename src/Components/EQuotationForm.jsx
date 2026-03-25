import React, { useState } from 'react';
import { FileSpreadsheet, Plus, Trash2, Send, Calculator, ClipboardCheck } from 'lucide-react';

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
          <div className="text-right">
            <span className="text-xs text-slate-500 block">Reference No:</span>
            <span className="text-amber-500 font-mono font-bold">QTN-2026-001</span>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto -mt-8 px-6">
        <div className="bg-white shadow-xl rounded-sm p-8 border border-slate-200">
          
          <form className="space-y-10">
            
            {/* 2. Vendor Information */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-bold flex items-center gap-2 mb-1">
                  <ClipboardCheck className="w-5 h-5 text-amber-600" /> Vendor Details
                </h3>
                <p className="text-xs text-slate-500">Information of the quoting entity</p>
              </div>
              <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Company Name</label>
                  <input type="text" className="w-full border-b border-slate-300 p-2 focus:border-amber-600 outline-none transition-all" placeholder="Enter Full Legal Name" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">GST Number</label>
                  <input type="text" className="w-full border-b border-slate-300 p-2 focus:border-amber-600 outline-none transition-all" placeholder="22AAAAA0000A1Z5" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Valid Upto</label>
                  <input type="date" className="w-full border-b border-slate-300 p-2 focus:border-amber-600 outline-none transition-all" />
                </div>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* 3. Quotation Items Table */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-amber-600" /> Itemized Breakdown
                </h3>
                <button type="button" className="flex items-center gap-2 text-[10px] font-bold bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 transition-all">
                  <Plus className="w-3 h-3" /> Add New Item
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-y border-slate-200">
                      <th className="p-3 text-[10px] font-bold uppercase text-slate-600">S.No</th>
                      <th className="p-3 text-[10px] font-bold uppercase text-slate-600">Description of Goods</th>
                      <th className="p-3 text-[10px] font-bold uppercase text-slate-600">HSN Code</th>
                      <th className="p-3 text-[10px] font-bold uppercase text-slate-600 text-center">Qty</th>
                      <th className="p-3 text-[10px] font-bold uppercase text-slate-600">Unit Price (₹)</th>
                      <th className="p-3 text-[10px] font-bold uppercase text-slate-600">Total</th>
                      <th className="p-3 text-[10px] font-bold uppercase text-slate-600"></th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-slate-100">
                      <td className="p-3 text-slate-400">01</td>
                      <td className="p-3"><input type="text" className="w-full bg-transparent outline-none focus:text-amber-600" placeholder="e.g. Pure Silk Fabric (60 GSM)" /></td>
                      <td className="p-3"><input type="text" className="w-full bg-transparent outline-none" placeholder="5208" /></td>
                      <td className="p-3 text-center"><input type="number" className="w-16 bg-slate-50 p-1 text-center outline-none" placeholder="0" /></td>
                      <td className="p-3"><input type="number" className="w-24 bg-slate-50 p-1 outline-none" placeholder="0.00" /></td>
                      <td className="p-3 font-bold">₹ 0.00</td>
                      <td className="p-3"><button className="text-slate-300 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Financial Summary */}
            <div className="flex flex-col md:flex-row gap-8 justify-between bg-slate-50 p-6 rounded-sm border border-slate-100">
              <div className="md:w-1/2 space-y-4">
                <label className="block text-[10px] font-bold uppercase text-slate-500">Terms & Conditions / Special Notes</label>
                <textarea className="w-full h-32 p-3 text-sm bg-white border border-slate-200 outline-none focus:border-amber-500" placeholder="Enter payment terms, delivery timelines, etc." />
              </div>
              <div className="md:w-1/3 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Subtotal:</span>
                  <span className="font-bold">₹ 0.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">GST (18%):</span>
                  <span className="font-bold">₹ 0.00</span>
                </div>
                <div className="flex justify-between text-sm text-amber-700 font-bold border-t border-slate-200 pt-2">
                  <span>Grand Total:</span>
                  <span className="text-xl">₹ 0.00</span>
                </div>
                <p className="text-[10px] text-slate-400 italic text-right">Includes all applicable taxes</p>
              </div>
            </div>

            {/* 5. Submission */}
            <div className="flex flex-col md:flex-row gap-4">
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