import React, { useState } from 'react';
import { FileText, Upload, Send, Eye, ShieldCheck, Info, MapPin, Hash, Mail, Phone, Building2, Loader2, CheckCircle2 } from 'lucide-react';
import { tradeEnquiryApi } from '../utils/api';
import PreviewModal from '../Components/PreviewModal';

const TradeEnquiryForm = () => {
  const [formData, setFormData] = useState({
    traderName: '',
    businessName: '',
    businessAddress: '',
    gstNo: '',
    mobileNo: '',
    email: '',
    enquiryType: 'For New Membership',
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
    if (!formData.enquiryType) {
      setErrorMsg("Please select a purpose of enquiry.");
      return;
    }
    setLoading(true);
    setErrorMsg('');

    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => data.append(key, formData[key]));
      if (file) data.append('gstCertificate', file);
      data.append('siteId', 'ParekhChamberofTextile01');

      const res = await tradeEnquiryApi.submit(data);
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
    { key: 'enquiryType', label: 'Purpose of Enquiry' },
  ];

  if (isSubmitted) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center p-6 pb-20">
        <div className="bg-white p-12 text-center shadow-2xl border border-amber-100 max-w-xl rounded-sm">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">Enquiry Received!</h2>
          <p className="text-slate-500 font-medium leading-relaxed mb-8">
            Your trade enquiry for <strong>{formData.businessName}</strong> has been successfully recorded.
            Our team will process your request and get back to you soon.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-slate-900 text-white px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-amber-600 transition-all"
          >
            Back to Form
          </button>
        </div>
      </div>
    );
  }

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
            <form onSubmit={handleSubmit} className="space-y-8">

              {errorMsg && (
                <div className="p-4 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest border-l-4 border-red-500">
                  {errorMsg}
                </div>
              )}

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
                      <input
                        type="text"
                        name="traderName"
                        value={formData.traderName}
                        onChange={handleInputChange}
                        className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none"
                        placeholder="Enter full name"
                        required
                      />
                    </div>
                  </div>

                  {/* Business Name */}
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-bold uppercase mb-2">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none"
                      placeholder="Legal Entity Name"
                      required
                    />
                  </div>

                  {/* Business Address with Pin code */}
                  <div className="col-span-2">
                    <label className="block text-xs font-bold uppercase mb-2">Business Address with Pin code</label>
                    <textarea
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleInputChange}
                      className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none h-24"
                      placeholder="Complete address including state and PIN"
                      required
                    />
                  </div>

                  {/* GST No. */}
                  <div>
                    <label className="block text-xs font-bold uppercase mb-2 flex items-center gap-1">GST No. <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <input
                      type="text"
                      name="gstNo"
                      value={formData.gstNo}
                      onChange={handleInputChange}
                      className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none"
                      placeholder="22AAAAA0000A1Z5"
                    />
                  </div>

                  {/* Mobile No. */}
                  <div>
                    <label className="block text-xs font-bold uppercase mb-2">Mobile No.</label>
                    <input
                      type="tel"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleInputChange}
                      className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none"
                      placeholder="+91 00000-00000"
                      required
                    />
                  </div>

                  {/* Email Id */}
                  <div className="col-span-2">
                    <label className="block text-xs font-bold uppercase mb-2">Email Id</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-slate-200 p-3 rounded-sm focus:ring-1 focus:ring-amber-500 outline-none"
                      placeholder="contact@business.com"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* 3. Options */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold border-b pb-2 flex items-center gap-2">
                  <Building2 className="text-amber-600 w-5 h-5" /> Enquiry Category
                </h3>
                <div className="w-full">
                  <label className="block text-xs font-bold uppercase mb-3">Please Select Purpose of Enquiry</label>
                  <select 
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleInputChange}
                    className="w-full border border-slate-200 p-4 rounded-sm outline-none bg-white font-medium focus:border-amber-500 cursor-pointer"
                  >
                    <option value="" disabled>Choose an option...</option>
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
                <p className="text-xs text-slate-500 mb-4">{file ? file.name : "Please attach your GST registration document (PDF or JPEG)"}</p>
                <input type="file" className="hidden" id="fileUpload" onChange={handleFileChange} />
                <label htmlFor="fileUpload" className="bg-slate-900 text-white px-8 py-2.5 text-xs font-bold cursor-pointer hover:bg-slate-800 transition-all shadow-md">
                  {file ? "CHANGE FILE" : "CHOOSE FILE"}
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
                      <input type="checkbox" id="agree" className="accent-amber-600 w-4 h-4" required />
                      <label htmlFor="agree" className="text-xs font-bold text-slate-600 cursor-pointer">I AGREE TO THE TERMS</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Action Buttons */}
              <div className="flex flex-col md:flex-row gap-4 pt-6">
                <button 
                  type="button" 
                  onClick={() => setShowPreview(true)}
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-slate-900 px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-slate-50 transition-all"
                >
                  <Eye className="w-4 h-4" /> Preview
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-amber-500 shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  Submit Enquiry
                </button>
              </div>

              <PreviewModal 
                isOpen={showPreview}
                onClose={() => setShowPreview(false)}
                data={formData}
                fields={previewFields}
                onConfirm={handleSubmit}
                loading={loading}
                title="Trade Enquiry e-Form Review"
              />

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