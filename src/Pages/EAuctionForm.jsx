import React, { useState } from 'react';
import { Gavel, Send, FileText, Building2, User, Phone, Mail, MapPin, Upload, Calculator, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';
import { auctionApi } from '../utils/api';
import PreviewModal from '../Components/PreviewModal';
import { Eye } from 'lucide-react';

const EAuctionForm = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => data.append(key, formData[key]));
      if (file) data.append('gstCertificate', file);
      data.append('siteId', 'ParekhChamberofTextile01');

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
            Your e-Auction participation request for <strong>{formData.legalBusinessName}</strong> has been successfully registered.
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
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-20">

      {/* 1. Portal Header */}
      <section className="bg-slate-900 text-white py-12 px-6 border-b-4 border-amber-600">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter flex items-center gap-3">
              <Gavel className="text-amber-500" /> e-Auction Portal
            </h1>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Authorized Bidding & Asset Liquidation</p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto -mt-8 px-6">
        <div className="bg-white shadow-2xl rounded-sm p-8 md:p-12 border border-slate-200">

          <form onSubmit={handleSubmit} className="space-y-12">

            {errorMsg && (
              <div className="p-4 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest border-l-4 border-red-500">
                {errorMsg}
              </div>
            )}

            {/* 2. Business Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tighter border-b-2 border-slate-100 pb-2 flex items-center gap-2">
                <Building2 className="text-amber-600 w-5 h-5" /> Participant Information
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-slate-400">Name of the Participant</label>
                  <input
                    type="text"
                    name="participantName"
                    value={formData.participantName}
                    onChange={handleInputChange}
                    className="w-full border-2 border-slate-100 p-3 rounded-sm focus:border-amber-500 outline-none font-bold text-sm uppercase transition-colors"
                    placeholder="Full Individual Name"
                    required
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-slate-400">Legal Business Name</label>
                  <input
                    type="text"
                    name="legalBusinessName"
                    value={formData.legalBusinessName}
                    onChange={handleInputChange}
                    className="w-full border-2 border-slate-100 p-3 rounded-sm focus:border-amber-500 outline-none font-bold text-sm uppercase transition-colors"
                    placeholder="Registered Company Name"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-slate-400">Business Address with Pin code</label>
                  <textarea
                    name="businessAddress"
                    value={formData.businessAddress}
                    onChange={handleInputChange}
                    className="w-full border-2 border-slate-100 p-3 rounded-sm focus:border-amber-500 outline-none h-24 font-bold text-sm uppercase transition-colors"
                    placeholder="Street, City, State, PIN"
                    required
                  />
                </div>

                <div  className="col-span-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-slate-400">GST No. (Optional)</label>
                  <input
                    type="text"
                    name="gstNo"
                    value={formData.gstNo}
                    onChange={handleInputChange}
                    className="w-full border-2 border-slate-100 p-3 rounded-sm focus:border-amber-500 outline-none font-bold text-sm uppercase transition-colors"
                    placeholder="15-digit GSTIN"
                  />
                </div>

                <div  className="col-span-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-slate-400">Mobile No.</label>
                  <input
                    type="tel"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleInputChange}
                    className="w-full border-2 border-slate-100 p-3 rounded-sm focus:border-amber-500 outline-none font-bold text-sm uppercase transition-colors"
                    placeholder="+91 Contact No."
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-slate-400">Email Id</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-2 border-slate-100 p-3 rounded-sm focus:border-amber-500 outline-none font-bold text-sm transition-colors"
                    placeholder="official@business.com"
                    required
                  />
                </div>
              </div>
            </div>

            {/* 3. Document Upload */}
            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tighter border-b-2 border-slate-100 pb-2 flex items-center gap-2">
                <Upload className="text-amber-600 w-5 h-5" /> Document Verification
              </h3>
              <div className="border-4 border-dotted border-slate-100 p-10 text-center bg-slate-50/50 hover:bg-white hover:border-amber-200 transition-all rounded-sm group">
                <FileText className="w-12 h-12 text-slate-200 mx-auto mb-4 group-hover:text-amber-500 transition-colors" />
                <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-2">GST Registration Certificate</h4>
                <p className="text-[10px] text-slate-400 mb-6 font-bold uppercase tracking-widest">
                  {file ? file.name : "Format: PDF or JPEG (Max 5MB)"}
                </p>
                <input type="file" className="hidden" id="gstCertificate" onChange={handleFileChange} />
                <label htmlFor="gstCertificate" className="bg-slate-900 text-white px-10 py-3 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:bg-amber-600 transition-all shadow-xl">
                  {file ? "Change Document" : "Select File"}
                </label>
              </div>
            </div>

            {/* 4. Declaration */}
            <div className="bg-slate-900 text-white p-8 rounded-sm relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                <AlertTriangle className="w-10 h-10 text-amber-500 shrink-0" />
                <div>
                  <h4 className="font-black text-sm uppercase tracking-widest mb-2 text-amber-500">Declaration of Authenticity</h4>
                  <p className="text-[11px] text-slate-400 font-medium leading-relaxed italic opacity-80 mb-4">
                    I hereby declare that I am the authorized representative of the mentioned business entity. All information provided is true and I accept the terms of the Parekh Chamber e-Auction Management System.
                  </p>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="confirm" className="accent-amber-500 w-4 h-4 cursor-pointer" required />
                    <label htmlFor="confirm" className="text-[10px] font-black uppercase tracking-widest text-slate-300 cursor-pointer">I acknowledge and agree to the auction terms</label>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 pt-6">
              <button
                type="button"
                onClick={() => setShowPreview(true)}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-slate-900 py-4 font-black uppercase text-xs tracking-widest hover:bg-slate-50 transition-all"
              >
                <Eye className="w-4 h-4" /> Preview
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-amber-600 text-white py-4 font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-amber-500 shadow-2xl transition-all disabled:opacity-70"
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
              title="e-Auction Participation Review"
            />
          </form>
        </div>
      </div>

      <footer className="mt-12 text-center">
        <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.5em]">Official Document — PAREKH CHAMBER OF TEXTILE</p>
      </footer>
    </div>
  );
};

export default EAuctionForm;