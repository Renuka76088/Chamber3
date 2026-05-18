import React, { useState, useEffect } from 'react';
import { Gavel, Send, FileText, Building2, User, Phone, Mail, MapPin, Upload, Calculator, Loader2, CheckCircle2, AlertTriangle, Eye, Calendar, Inbox } from 'lucide-react';
import { auctionApi, eauctionApi, eauctionHeaderApi, IMAGE_BASE_URL } from '../utils/api';
import PreviewModal from '../Components/PreviewModal';
import { motion } from 'framer-motion';

const EAuctionForm = () => {
  const [auctions, setAuctions] = useState([]);
  const [loadingAuctions, setLoadingAuctions] = useState(true);
  const [headerData, setHeaderData] = useState({
    title: 'e-AUCTION',
    description: 'DIGITAL LIQUIDATION AND TRANSPARENT AUCTION SYSTEM ACROSS OUR CORPORATE ECOSYSTEM.'
  });
  const [formData, setFormData] = useState({
    participantName: '',
    legalBusinessName: '',
    businessAddress: '',
    gstNo: '',
    mobileNo: '',
    email: '',
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
    const fetchAuctions = async () => {
      try {
        setLoadingAuctions(true);
        const res = await eauctionApi.getAuctions(siteId);
        if (res.data.success) {
          setAuctions(res.data.data || []);
        }
      } catch (error) {
        console.error("Error fetching auctions:", error);
      } finally {
        setLoadingAuctions(false);
      }
    };

    const fetchHeader = async () => {
      try {
        const res = await eauctionHeaderApi.getHeader(siteId);
        if (res.data.success && res.data.data) {
          setHeaderData({
            title: res.data.data.title || 'e-Auction',
            description: res.data.data.description || 'Participate in official asset auctions with certified transparency and real-time tracking across our industrial ecosystem.'
          });
        }
      } catch (error) {
        console.error("Error fetching header:", error);
      }
    };

    fetchAuctions();
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

    if (!formData.participantName || !formData.legalBusinessName || !formData.mobileNo || !formData.email) {
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

      const res = await auctionApi.submit(data);
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
    { key: 'participantName', label: 'Name of the Participant' },
    { key: 'legalBusinessName', label: 'Legal Business Name' },
    { key: 'businessAddress', label: 'Business Address' },
    { key: 'gstNo', label: 'GST No.' },
    { key: 'mobileNo', label: 'Mobile No.' },
    { key: 'email', label: 'Email Id' },
  ];

  if (isSubmitted) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center p-6 pb-20">
        <div className="bg-white p-12 text-center shadow-2xl border border-amber-100 max-w-xl rounded-sm">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">Registration Successful!</h2>
          <p className="text-slate-500 font-medium leading-relaxed mb-8">
            Your e-auction participation request for <strong>{formData.legalBusinessName}</strong> has been successfully registered.
            Our auction department will verify your GST details and send you the bidding credentials soon.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-slate-900 text-white px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-amber-600 transition-all"
          >
            Back to Auction Portal
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
            <Gavel className="text-amber-500 w-10 h-10 md:w-14 md:h-14" /> {headerData.title}
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

        {/* 2. Active Auctions List */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-200 pb-6">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-slate-900">
              Active Auctions
            </h2>
          </div>

          {loadingAuctions ? (
            <div className="bg-white p-20 flex flex-col items-center justify-center rounded-sm border border-slate-100 shadow-xl">
              <Loader2 className="w-10 h-10 text-amber-500 animate-spin mb-4" />
              <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Accessing Auction Vault...</p>
            </div>
          ) : auctions.length === 0 ? (
            <div className="bg-white p-16 flex flex-col items-center justify-center rounded-sm border border-slate-100 shadow-xl text-center">
              <Inbox className="w-16 h-16 text-slate-200 mb-6" strokeWidth={1} />
              <h3 className="text-xl font-black text-slate-900 uppercase">No Active Auctions</h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">Check back soon for upcoming bidding events</p>
            </div>
          ) : (
            <div className="space-y-6">
              {auctions.map((auction, index) => (
                <motion.div
                  key={auction._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-sm border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col md:flex-row items-start"
                >
                  {auction.image && (
                    <div className="md:w-[400px] shrink-0 p-4 md:p-6 md:pr-0">
                      <div className="w-full overflow-hidden rounded-xl relative group">
                        <img
                          src={auction.image.startsWith('http') ? auction.image : `${IMAGE_BASE_URL}${auction.image}`}
                          alt={auction.title}
                          className="w-full h-auto max-h-[550px] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  )}
                  <div className="p-8 md:p-10 flex-1">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-amber-600" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          Auction Date: {new Date(auction.date || auction.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${auction.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                        {auction.status || 'Active'}
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 group-hover:text-amber-600 transition-colors leading-tight break-words">
                      {auction.title}
                    </h3>
                    <div
                      className="rich-text-content text-slate-500 text-sm md:text-base leading-relaxed break-words mb-0"
                      dangerouslySetInnerHTML={{ __html: fixWordBreaks(auction.description) }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* 3. Registration Form */}
        <div className="space-y-8 pt-8">
          <div className="flex flex-col md:flex-row items-center gap-4 px-2">
            <div className="h-0.5 bg-slate-200 flex-1 hidden md:block"></div>
            <h2 className="text-sm md:text-lg font-black uppercase tracking-[0.2em] text-slate-400 text-center md:text-left">
              Participant Registration
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

              {/* Business Details */}
              <div className="space-y-8">
                <h3 className="text-lg font-black uppercase tracking-tighter flex items-center gap-3 text-slate-900 border-b-2 border-slate-50 pb-2">
                  <Building2 className="text-amber-600 w-6 h-6" /> Business Information
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-3 text-slate-400">Name of the Participant</label>
                    <input
                      type="text"
                      name="participantName"
                      value={formData.participantName}
                      onChange={handleInputChange}
                      className="w-full border-2 border-slate-100 p-4 rounded-sm focus:border-amber-500 outline-none font-bold text-sm uppercase transition-all"
                      placeholder="Full Individual Name"
                      required
                    />
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-3 text-slate-400">Legal Business Name</label>
                    <input
                      type="text"
                      name="legalBusinessName"
                      value={formData.legalBusinessName}
                      onChange={handleInputChange}
                      className="w-full border-2 border-slate-100 p-4 rounded-sm focus:border-amber-500 outline-none font-bold text-sm uppercase transition-all"
                      placeholder="Registered Company Name"
                      required
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-3 text-slate-400">Business Address with Pin code</label>
                    <textarea
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleInputChange}
                      className="w-full border-2 border-slate-100 p-4 rounded-sm focus:border-amber-500 outline-none h-32 font-bold text-sm uppercase transition-all"
                      placeholder="Street, City, State, PIN"
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
                      placeholder="15-digit GSTIN"
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
                      placeholder="+91 Contact No."
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
                      placeholder="official@business.com"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Document Upload */}
              <div className="space-y-8">
                <h3 className="text-lg font-black uppercase tracking-tighter flex items-center gap-3 text-slate-900 border-b-2 border-slate-50 pb-2">
                  <Upload className="text-amber-600 w-6 h-6" /> Document Verification
                </h3>
                <div className="border-4 border-dotted border-slate-100 p-12 text-center bg-slate-50/50 hover:bg-white hover:border-amber-200 transition-all rounded-sm group">
                  <FileText className="w-16 h-16 text-slate-200 mx-auto mb-6 group-hover:text-amber-500 transition-colors" />
                  <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-3 text-slate-900">GST Registration Certificate</h4>
                  <p className="text-[10px] text-slate-400 mb-8 font-bold uppercase tracking-widest">
                    {file ? file.name : "Format: PDF or JPEG (Max 5MB)"}
                  </p>
                  <input type="file" className="hidden" id="gstCertificate" onChange={handleFileChange} />
                  <label htmlFor="gstCertificate" className="inline-flex items-center justify-center bg-slate-900 text-white px-6 md:px-12 py-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer hover:bg-amber-600 transition-all shadow-2xl rounded-sm whitespace-nowrap min-w-[140px]">
                    {file ? "Change Document" : "Select File"}
                  </label>
                </div>
              </div>

              {/* Declaration */}
              <div className="bg-slate-900 text-white p-10 rounded-sm relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                  <div className="bg-amber-500/20 p-4 rounded-sm">
                    <AlertTriangle className="w-8 h-8 text-amber-500 shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-widest mb-3 text-amber-500">Declaration of Authenticity</h4>
                    <p className="text-[11px] text-slate-400 font-medium leading-relaxed italic opacity-80 mb-6">
                      I hereby declare that I am the authorized representative of the mentioned business entity. All information provided is true and I accept the terms of the Parekh Chamber e-auction Management System.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <input type="checkbox" id="confirm" className="accent-amber-500 w-5 h-5 cursor-pointer rounded-sm" required />
                      </div>
                      <label htmlFor="confirm" className="text-[10px] font-black uppercase tracking-widest text-slate-300 cursor-pointer select-none">I acknowledge and agree to the auction terms</label>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full -mr-24 -mb-24 blur-3xl"></div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-6">
                <button
                  type="button"
                  onClick={() => setShowPreview(true)}
                  className="flex-1 flex items-center justify-center gap-3 border-2 border-slate-900 py-4 md:py-5 rounded-sm font-black uppercase text-[9px] md:text-[10px] tracking-[0.2em] hover:bg-slate-50 transition-all text-slate-900 whitespace-nowrap"
                >
                  <Eye className="w-5 h-5" /> Preview Registration
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-amber-600 text-white py-4 md:py-5 rounded-sm font-black uppercase text-[9px] md:text-[10px] tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-amber-500 shadow-2xl transition-all disabled:opacity-70 whitespace-nowrap"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  Register Participant
                </button>
              </div>

              <PreviewModal
                isOpen={showPreview}
                onClose={() => setShowPreview(false)}
                data={formData}
                fields={previewFields}
                onConfirm={handleSubmit}
                loading={loading}
                title="e-auction Participation Review"
              />
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-20 py-10 text-center border-t border-slate-200">
        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.5em]">Official Document — PAREKH CHAMBER OF TEXTILE — 2026</p>
      </footer>
    </div>
  );
};

export default EAuctionForm;
