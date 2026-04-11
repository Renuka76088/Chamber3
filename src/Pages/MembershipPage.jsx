import React, { useState } from 'react';
import {
  Users,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Gem,
  Factory,
  Briefcase,
  Upload,
  Eye,
  Send,
  Building2,
  Phone,
  Mail,
  Globe,
  Loader2,
  Lock,
  Unlock,
  AlertCircle
} from 'lucide-react';
import { membershipApi, authorizedPersonApi } from '../utils/api';
import PreviewModal from '../Components/PreviewModal';

const MembershipPage = () => {
  const [formData, setFormData] = useState({
    authorizedOfficialName: '',
    officialCodeNo: '',
    applicantName: '',
    businessTitle: '',
    businessAddress: '',
    mobileNo: '',
    emailId: '',
    websiteUrl: '',
    natureOfBusiness: '',
    categoryOfBusiness: 'Proprietorship',
  });
  const [showPreview, setShowPreview] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [validating, setValidating] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleValidate = async () => {
    if (!formData.authorizedOfficialName || !formData.officialCodeNo) {
      setErrorMsg("Please enter both Authorized Name and Official Code.");
      return;
    }

    setValidating(true);
    setErrorMsg('');

    try {
      const res = await authorizedPersonApi.validate({
        name: formData.authorizedOfficialName,
        code: formData.officialCodeNo
      });

      if (res.data.success) {
        setIsValidated(true);
      }
    } catch (error) {
      console.error("Validation Error:", error);
      const msg = error.response?.data?.message || "Invalid credentials or Server unreachable.";
      setErrorMsg(msg);
    } finally {
      setValidating(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidated) {
      setErrorMsg("Please validate your official credentials first.");
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => data.append(key, formData[key]));
      if (file) data.append('document', file);
      data.append('siteId', 'ParekhChamberofTextile01');

      const res = await membershipApi.submit(data);
      if (res.data.success) {
        setIsSubmitted(true);
        setShowPreview(false);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMsg(error.response?.data?.message || "Network Error: Could not reach server. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const previewFields = [
    { key: 'authorizedOfficialName', label: 'Authorized Official' },
    { key: 'officialCodeNo', label: 'Official Code' },
    { key: 'applicantName', label: 'Applicant Name' },
    { key: 'businessTitle', label: 'Business Title' },
    { key: 'businessAddress', label: 'Business Address' },
    { key: 'mobileNo', label: 'Mobile No.' },
    { key: 'emailId', label: 'Email ID' },
    { key: 'websiteUrl', label: 'Website URL' },
    { key: 'natureOfBusiness', label: 'Nature of Business' },
    { key: 'categoryOfBusiness', label: 'Business Category' },
  ];

  const benefits = [
    { title: "Textile Trade Support to our valued Members", icon: <Briefcase className="w-5 h-5 text-amber-500" /> },
    { title: "Textile Finance and Investment Support to our valued Members", icon: <Gem className="w-5 h-5 text-amber-500" /> },
    { title: "Industrial Consultation for establishment of Textile Industries and Plants", icon: <Factory className="w-5 h-5 text-amber-500" /> },
    { title: "Manufacturing Support to the Textile Manufacturers", icon: <CheckCircle2 className="w-5 h-5 text-amber-500" /> },
    { title: "Trade Support to the Textile Suppliers & Retailers", icon: <Users className="w-5 h-5 text-amber-500" /> },
    { title: "Trade Consultation for Textile Raw & Finished Products ", icon: <FileText className="w-5 h-5 text-amber-500" /> },
    { title: "Trade Consultation for Textile Machineries and Spares ", icon: <FileText className="w-5 h-5 text-amber-500" /> },
  ];

  if (isSubmitted) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center p-6">
        <div className="bg-white p-12 text-center shadow-2xl border border-amber-100 max-w-xl">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">Application Submitted!</h2>
          <p className="text-slate-500 font-medium leading-relaxed mb-8">
            Your membership request for <strong>{formData.businessTitle}</strong> has been successfully recorded.
            Our authorized officials will review your documents and contact you shortly.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-slate-900 text-white px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-amber-600 transition-all"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">

      {/* Mini Header */}
      <section className="bg-slate-900 text-white py-12 px-6 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Chamber <span className="text-amber-500">Membership</span>
            </h1>
            <p className="text-slate-400 text-sm mt-2 max-w-xl font-medium">
              Empowering the Textile ecosystem through manufacturing support, trade consultation, and industrial growth.
            </p>
          </div>
          <div className="bg-slate-800 p-4 border border-slate-700 hidden lg:block">
            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500">Status</p>
            <p className="text-xl font-mono">ENROLLMENT OPEN 2026</p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto py-12 px-6 grid lg:grid-cols-12 gap-8">

        {/* Left Side: Info Panel */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 shadow-md border-l-4 border-slate-900">
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-600" /> Eligibility
            </h2>
            <p className="text-slate-700 text-xs leading-relaxed font-bold uppercase tracking-tight">
              Registered Textile Manufacturers, Suppliers, Traders, Retailers and professionals associated with the Textile Sector are eligible to apply.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-sm shadow-xl">
            <h3 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 border-b border-slate-800 pb-2">Exclusive Benefits</h3>
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="p-2 bg-slate-800 rounded group-hover:bg-amber-500 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-slate-300 text-[10px] font-bold uppercase tracking-wide group-hover:text-white transition-colors">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-8">
          <div className="bg-white shadow-2xl border border-slate-200 overflow-hidden">

            {/* Form Step Status */}
            <div className={`p-4 text-center ${isValidated ? 'bg-green-600' : 'bg-amber-600'} text-white transition-colors duration-500`}>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-2">
                {isValidated ? (
                  <><Unlock className="w-3 h-3" /> Credentials Verified • Full Access Granted</>
                ) : (
                  <><Lock className="w-3 h-3" /> Official Validation Required to Start</>
                )}
              </p>
            </div>

            <div className="p-8 md:p-12">
              {errorMsg && (
                <div className="mb-8 p-4 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest border-l-4 border-red-500 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5" />
                  {errorMsg}
                </div>
              )}

              {/* STEP 1: OFFICIAL VALIDATION */}
              {!isValidated ? (
                <div className="space-y-10 animate-in fade-in duration-500">
                  <div className="text-center max-w-md mx-auto">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock className="text-slate-400 w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-black uppercase tracking-tighter">Official Access</h2>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Please enter your authorized credentials</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Authorized Official Name</label>
                      <input
                        type="text"
                        name="authorizedOfficialName"
                        value={formData.authorizedOfficialName}
                        onChange={handleInputChange}
                        className="w-full border-b-4 border-slate-100 py-3 px-4 outline-none focus:border-amber-500 transition-all font-bold text-sm uppercase"
                        placeholder="AS RECORDED"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Official Code No.</label>
                      <input
                        type="text"
                        name="officialCodeNo"
                        value={formData.officialCodeNo}
                        onChange={handleInputChange}
                        className="w-full border-b-4 border-slate-100 py-3 px-4 outline-none focus:border-amber-500 transition-all font-bold text-sm uppercase"
                        placeholder="CH-XXXX-2026"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleValidate}
                    disabled={validating}
                    className="w-full bg-slate-900 text-white py-5 font-black uppercase text-xs tracking-[0.4em] hover:bg-amber-600 transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    {validating ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShieldCheck className="w-5 h-5" />}
                    {validating ? "Verifying..." : "Validate & Unlock Form"}
                  </button>
                </div>
              ) : (
                /* STEP 2: FULL MEMBERSHIP FORM */
                <form onSubmit={handleSubmit} className="space-y-12 animate-in zoom-in-95 duration-500">

                  <div className="flex justify-between items-center border-b pb-4">
                    <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-2">
                      <FileText className="text-amber-600" /> Prescribed Application
                    </h3>
                    <div className="text-[9px] font-black bg-green-100 text-green-700 px-3 py-1 uppercase tracking-widest flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Active Official: {formData.authorizedOfficialName}
                    </div>
                  </div>

                  {/* Applicant Details */}
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Name of Applicant</label>
                        <input
                          type="text"
                          name="applicantName"
                          value={formData.applicantName}
                          onChange={handleInputChange}
                          placeholder="INDIVIDUAL NAME"
                          className="w-full bg-slate-50 p-4 font-bold text-sm border-0 focus:ring-4 focus:ring-amber-500/20 outline-none uppercase transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Title of Business</label>
                        <input
                          type="text"
                          name="businessTitle"
                          value={formData.businessTitle}
                          onChange={handleInputChange}
                          placeholder="FIRM / COMPANY NAME"
                          className="w-full bg-slate-50 p-4 font-bold text-sm border-0 focus:ring-4 focus:ring-amber-500/20 outline-none uppercase transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Address of the Business</label>
                      <textarea
                        rows="3"
                        name="businessAddress"
                        value={formData.businessAddress}
                        onChange={handleInputChange}
                        placeholder="FULL OFFICE ADDRESS WITH PIN CODE"
                        className="w-full bg-slate-50 p-4 font-bold text-sm border-0 focus:ring-4 focus:ring-amber-500/20 outline-none resize-none uppercase transition-all"
                        required
                      ></textarea>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mob No.</label>
                        <input
                          type="tel"
                          name="mobileNo"
                          value={formData.mobileNo}
                          onChange={handleInputChange}
                          placeholder="+91"
                          className="w-full bg-slate-50 p-4 font-bold text-sm border-0 focus:ring-4 focus:ring-amber-500/20 outline-none transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email ID</label>
                        <input
                          type="email"
                          name="emailId"
                          value={formData.emailId}
                          onChange={handleInputChange}
                          placeholder="MAIL@OFFICIAL.COM"
                          className="w-full bg-slate-50 p-4 font-bold text-sm border-0 focus:ring-4 focus:ring-amber-500/20 outline-none transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">URL (if any)</label>
                        <input
                          type="url"
                          name="websiteUrl"
                          value={formData.websiteUrl}
                          onChange={handleInputChange}
                          placeholder="WWW.BUSINESS.COM"
                          className="w-full bg-slate-50 p-4 font-bold text-sm border-0 focus:ring-4 focus:ring-amber-500/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 pt-4">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Nature of Business</label>
                        <div className="flex flex-wrap gap-3">
                          {['Retailer', 'Wholesaler', 'Manufacturer', 'Other'].map((n) => (
                            <label key={n} className={`flex items-center gap-3 px-4 py-3 text-[10px] font-black cursor-pointer transition-all border-2 ${formData.natureOfBusiness === n ? 'border-amber-600 bg-amber-50' : 'border-slate-100 bg-white hover:border-slate-300'}`}>
                              <input
                                type="radio"
                                name="natureOfBusiness"
                                value={n}
                                checked={formData.natureOfBusiness === n}
                                onChange={handleInputChange}
                                className="hidden"
                                required
                              /> {n.toUpperCase()}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Category</label>
                        <select
                          name="categoryOfBusiness"
                          value={formData.categoryOfBusiness}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 p-4 font-black text-[10px] uppercase outline-none focus:ring-4 focus:ring-amber-500/20 border-0 cursor-pointer"
                        >
                          <option>Proprietorship</option>
                          <option>Partnership</option>
                          <option>LLP</option>
                          <option>Private Limited</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Documents */}
                  <div className="space-y-6 pt-10 border-t">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Legal Document (GST/MSME/Trade License)</label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-40 border-4 border-slate-100 border-dashed rounded-sm cursor-pointer bg-slate-50 hover:bg-slate-100 hover:border-amber-300 transition-all">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-10 h-10 mb-3 text-slate-300" />
                            <p className="mb-2 text-xs text-slate-600 font-black uppercase tracking-widest">{file ? file.name : 'Choose File'}</p>
                            <p className="text-[10px] text-slate-400 font-bold tracking-tighter">MAX SIZE: 5MB (PDF, PNG, JPG)</p>
                          </div>
                          <input type="file" className="hidden" onChange={handleFileChange} />
                        </label>
                      </div>
                    </div>

                    <div className="bg-slate-900 p-8 shadow-2xl relative overflow-hidden">
                      <div className="relative z-10 flex items-start gap-4">
                        <input type="checkbox" className="mt-1 w-5 h-5 accent-amber-500 cursor-pointer" required />
                        <div className="text-[10px] text-slate-400 font-medium leading-relaxed italic">
                          <strong className="text-amber-500 uppercase not-italic block mb-2 tracking-[0.2em] font-black">Declaration & Undertaking</strong>
                          “I have read the Terms & Conditions of subscription for membership. All documents uploaded are true to the best of my knowledge.”
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col md:flex-row gap-4 pt-6">
                    <button
                      type="button"
                      onClick={() => setShowPreview(true)}
                      className="flex-1 bg-slate-50 text-slate-500 py-5 font-black uppercase text-xs tracking-[0.3em] hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" /> Preview
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-[2] bg-amber-600 text-white py-5 font-black uppercase text-xs tracking-[0.4em] hover:bg-amber-500 shadow-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                    >
                      {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                      Submit Application
                    </button>
                  </div>

                  <PreviewModal
                    isOpen={showPreview}
                    onClose={() => setShowPreview(false)}
                    data={formData}
                    fields={previewFields}
                    onConfirm={handleSubmit}
                    loading={loading}
                    title="Chamber Membership Application Review"
                  />

                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-200 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.6em] font-black">
          OFFICIAL PORTAL — PAREKH CHAMBER OF TEXTILE — 2026.
        </p>
      </footer>

    </div>
  );
};

export default MembershipPage;