import React, { useState, useEffect } from 'react';
import { FileSpreadsheet, Send, Calculator, ClipboardCheck, Building2, Upload, MessageSquare, Loader2, CheckCircle2, Eye, Calendar, Inbox, Clock } from 'lucide-react';
import { quotationApi, equotationApi, equotationHeaderApi } from '../utils/api';
import PreviewModal from '../Components/PreviewModal';
import { motion } from 'framer-motion';

const EQuotationForm = () => {
  const [quotations, setQuotations] = useState([]);
  const [loadingQuotations, setLoadingQuotations] = useState(true);
  const [headerData, setHeaderData] = useState({
    title: 'e-QUOTATION',
    description: 'DIGITAL PRICE SUBMISSION AND PROPOSAL MANAGEMENT FOR APPROVED VENDORS AND TRADERS ACROSS OUR NETWORK.'
  });
  const [formData, setFormData] = useState({
    traderName: '',
    businessName: '',
    businessAddress: '',
    gstNo: '',
    mobileNo: '',
    email: '',
    quotationType: 'Quotation for Textile Raw Materials',
    particulars: '',
  });
  const [showPreview, setShowPreview] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const siteId = "ParekhChamberofTextile01";

  // Helper to fix word-breaking issues in HTML content
  const fixWordBreaks = (html) => {
    if (!html) return "";
    return html.replace(/&nbsp;/g, " ").replace(/\u00AD/g, '');
  };

  useEffect(() => {
    const fetchQuotations = async () => {
      try {
        setLoadingQuotations(true);
        const res = await equotationApi.getQuotations(siteId);
        if (res.data.success) {
          setQuotations(res.data.data || []);
        }
      } catch (error) {
        console.error("Error fetching quotations:", error);
      } finally {
        setLoadingQuotations(false);
      }
    };

    const fetchHeader = async () => {
      try {
        const res = await equotationHeaderApi.getHeader(siteId);
        if (res.data.success && res.data.data) {
          setHeaderData({
            title: res.data.data.title || 'e-Quotation',
            description: res.data.data.description || 'Digital price submission and proposal management for approved vendors and traders across our network.'
          });
        }
      } catch (error) {
        console.error("Error fetching header:", error);
      }
    };

    fetchQuotations();
    fetchHeader();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!formData.traderName || !formData.businessName || !formData.mobileNo || !formData.email) {
      setErrorMsg("Please fill all required fields.");
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => data.append(key, formData[key]));
      if (file) data.append('gstCertificate', file);
      data.append('siteId', siteId);

      const res = await quotationApi.submit(data);
      if (res.data.success) {
        setIsSubmitted(true);
        setShowPreview(false);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMsg(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const previewFields = [
    { key: 'traderName', label: 'Name of the Trader' },
    { key: 'businessName', label: 'Business Name' },
    { key: 'businessAddress', label: 'Business Address' },
    { key: 'gstNo', label: 'GST No.' },
    { key: 'mobileNo', label: 'Mobile No.' },
    { key: 'email', label: 'Email Id' },
    { key: 'quotationType', label: 'Quotation Type' },
    { key: 'particulars', label: 'Scope of Work' },
  ];

  if (isSubmitted) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center p-6 pb-20">
        <div className="bg-white p-12 text-center shadow-2xl border border-amber-100 max-w-xl rounded-sm">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">Quotation Sent!</h2>
          <p className="text-slate-500 font-medium leading-relaxed mb-8">
            Your e-quotation request for <strong>{formData.businessName}</strong> has been successfully received.
            Our procurement team will review your proposal and contact you soon.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-slate-900 text-white px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-amber-600 transition-all"
          >
            Back to Portal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-20 relative overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        .rich-text-content * {
          white-space: normal !important;
          word-break: normal !important;
          overflow-wrap: break-word !important;
          hyphens: none !important;
          -webkit-hyphens: none !important;
          -ms-hyphens: none !important;
          text-align: left !important;
          font-weight: normal !important;
        }
      `}} />

      {/* 1. Portal Header */}
      <section className="bg-slate-900 text-white py-16 px-6 relative overflow-hidden border-b-8 border-amber-500">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter leading-tight flex items-center gap-4"
          >
            <FileSpreadsheet className="text-amber-500 w-10 h-10 md:w-14 md:h-14" /> {headerData.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base font-bold mt-6 max-w-4xl leading-relaxed"
          >
            {headerData.description}
          </motion.p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto -mt-12 px-6 relative z-10 space-y-16">

        {/* 2. Quotation Requests List */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-200 pb-6">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-slate-900">
              Active Requests
            </h2>
          </div>

          {loadingQuotations ? (
            <div className="bg-white p-20 flex flex-col items-center justify-center rounded-sm border border-slate-100 shadow-xl">
              <Loader2 className="w-10 h-10 text-amber-500 animate-spin mb-4" />
              <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Syncing RFQs...</p>
            </div>
          ) : quotations.length === 0 ? (
            <div className="bg-white p-16 flex flex-col items-center justify-center rounded-sm border border-slate-100 shadow-xl text-center">
              <Inbox className="w-16 h-16 text-slate-200 mb-6" strokeWidth={1} />
              <h3 className="text-xl font-black text-slate-900 uppercase">No Active Requests</h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">New quotation requests will appear here</p>
            </div>
          ) : (
            <div className="space-y-6">
              {quotations.map((quote, index) => (
                <motion.div
                  key={quote._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-sm border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-8 md:p-12">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-sm bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-100">
                          <ClipboardCheck className="w-6 h-6" />
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${quote.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                          {quote.status || 'Active'}
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="text-[9px] font-bold uppercase">Date: {new Date(quote.date || quote.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 group-hover:text-amber-600 transition-colors leading-tight tracking-tight break-words">
                      {quote.title}
                    </h3>

                    <div
                      className="rich-text-content text-slate-500 text-sm md:text-base leading-relaxed break-words mb-8"
                      dangerouslySetInnerHTML={{ __html: fixWordBreaks(quote.description) }}
                    />

                    <div className="flex items-center gap-4 pt-8 border-t border-slate-100">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Priority Submission Required</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* 3. Submission Form */}
        <div className="space-y-8 pt-8">
          <div className="flex flex-col md:flex-row items-center gap-4 px-2">
            <div className="h-0.5 bg-slate-200 flex-1 hidden md:block"></div>
            <h2 className="text-sm md:text-lg font-black uppercase tracking-[0.2em] text-slate-400 text-center md:text-left">
              Submission Portal
            </h2>
            <div className="h-0.5 bg-slate-200 flex-1 w-full md:w-auto"></div>
          </div>

          <div className="bg-white shadow-2xl rounded-sm p-8 md:p-12 border border-slate-200 relative overflow-hidden">

            <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
              {errorMsg && (
                <div className="p-4 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest border-l-4 border-red-500">
                  {errorMsg}
                </div>
              )}

              {/* Trader & Business Information */}
              <div className="space-y-8">
                <h3 className="text-lg font-black uppercase tracking-tighter flex items-center gap-3 text-slate-900 border-b-2 border-slate-50 pb-2">
                  <ClipboardCheck className="text-amber-600 w-6 h-6" /> Entity Information
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-3 text-slate-400">Name of the Trader</label>
                    <input
                      type="text"
                      name="traderName"
                      value={formData.traderName}
                      onChange={handleInputChange}
                      className="w-full border-2 border-slate-100 p-4 rounded-sm focus:border-amber-500 outline-none font-bold text-sm uppercase transition-all"
                      placeholder="Enter Full Name"
                      required
                    />
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-3 text-slate-400">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full border-2 border-slate-100 p-4 rounded-sm focus:border-amber-500 outline-none font-bold text-sm uppercase transition-all"
                      placeholder="Legal Entity Name"
                      required
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-3 text-slate-400">Business Address with Pin Code</label>
                    <textarea
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleInputChange}
                      className="w-full border-2 border-slate-100 p-4 rounded-sm focus:border-amber-500 outline-none h-32 font-bold text-sm uppercase transition-all"
                      placeholder="Complete address with PIN"
                      required
                    />
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-3 text-slate-400">GST No.</label>
                    <input
                      type="text"
                      name="gstNo"
                      value={formData.gstNo}
                      onChange={handleInputChange}
                      className="w-full border-2 border-slate-100 p-4 rounded-sm focus:border-amber-500 outline-none font-bold text-sm uppercase transition-all"
                      placeholder="22AAAAA0000A1Z5"
                    />
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-3 text-slate-400">Mobile No.</label>
                    <input
                      type="tel"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleInputChange}
                      className="w-full border-2 border-slate-100 p-4 rounded-sm focus:border-amber-500 outline-none font-bold text-sm uppercase transition-all"
                      placeholder="+91 00000-00000"
                      required
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-3 text-slate-400">Email Id</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-2 border-slate-100 p-4 rounded-sm focus:border-amber-500 outline-none font-bold text-sm transition-all"
                      placeholder="contact@business.com"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Quotation Category */}
              <div className="space-y-8">
                <h3 className="text-lg font-black uppercase tracking-tighter flex items-center gap-3 text-slate-900 border-b-2 border-slate-50 pb-2">
                  <Building2 className="text-amber-600 w-6 h-6" /> Quotation Category
                </h3>
                <div className="relative">
                  <select
                    name="quotationType"
                    value={formData.quotationType}
                    onChange={handleInputChange}
                    className="w-full border-2 border-slate-100 p-5 rounded-sm focus:border-amber-500 outline-none font-bold text-sm uppercase transition-all cursor-pointer appearance-none"
                  >
                    <option value="" disabled>Select Quotation Type...</option>
                    <option>Quotation for Textile Raw Materials</option>
                    <option>Quotation for Textile Finished Products</option>
                    <option>Quotation for Textile Machinery & Spares</option>
                    <option>Others</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Clock className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Description & Scope */}
              <div className="space-y-8">
                <h3 className="text-lg font-black uppercase tracking-tighter flex items-center gap-3 text-slate-900 border-b-2 border-slate-50 pb-2">
                  <MessageSquare className="text-amber-600 w-6 h-6" /> Scope of Work
                </h3>
                <div className="relative">
                  <textarea
                    name="particulars"
                    value={formData.particulars}
                    onChange={handleInputChange}
                    className="w-full h-64 p-6 text-sm bg-slate-50 border-2 border-slate-100 outline-none focus:border-amber-500 transition-all rounded-sm font-medium leading-relaxed"
                    placeholder="Provide a detailed breakdown of items, quantities, and specific services offered..."
                  />
                </div>
              </div>

              {/* Document Upload */}
              <div className="space-y-8">
                <h3 className="text-lg font-black uppercase tracking-tighter flex items-center gap-3 text-slate-900 border-b-2 border-slate-50 pb-2">
                  <Upload className="text-amber-600 w-6 h-6" /> Document Verification
                </h3>
                <div className="bg-slate-900 p-12 text-center rounded-sm border border-amber-500/20 group">
                  <Upload className="w-12 h-12 text-amber-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black text-white text-xs uppercase tracking-[0.2em] mb-3">Upload GST Certificate</h4>
                  <p className="text-[10px] text-slate-400 mb-8 font-bold uppercase tracking-widest">{file ? file.name : "Format: PDF or JPEG (Max 5MB)"}</p>
                  <input type="file" className="hidden" id="gstUpload" onChange={handleFileChange} />
                  <label htmlFor="gstUpload" className="inline-flex items-center justify-center bg-amber-600 text-white px-6 md:px-12 py-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer hover:bg-amber-500 transition-all rounded-sm shadow-2xl whitespace-nowrap min-w-[140px]">
                    {file ? "CHANGE DOCUMENT" : "BROWSE DOCUMENTS"}
                  </label>
                </div>
              </div>

              {/* Submission Buttons */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-6">
                <button
                  type="button"
                  onClick={() => setShowPreview(true)}
                  className="flex-1 flex items-center justify-center gap-3 border-2 border-slate-900 py-4 md:py-5 rounded-sm font-black uppercase text-[9px] md:text-[10px] tracking-[0.2em] hover:bg-slate-50 transition-all text-slate-900 whitespace-nowrap"
                >
                  <Eye className="w-5 h-5" /> Preview Proposal
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-amber-600 text-white py-4 md:py-5 rounded-sm font-black uppercase text-[9px] md:text-[10px] tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-amber-500 shadow-2xl transition-all disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  Final Submission
                </button>
              </div>

              <PreviewModal
                isOpen={showPreview}
                onClose={() => setShowPreview(false)}
                data={formData}
                fields={previewFields}
                onConfirm={handleSubmit}
                loading={loading}
                title="e-quotation Submission Review"
              />
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-20 py-10 text-center border-t border-slate-200">
        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.5em]">Official Digital Document — PAREKH CHAMBER OF TEXTILE — 2026</p>
      </footer>
    </div>
  );
};

export default EQuotationForm;
