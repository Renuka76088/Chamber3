import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Building2, 
  CheckCircle2, 
  AlertCircle,
  Phone,
  Mail,
  FileText,
  MessageSquare,
  ChevronRight,
  Send,
  Loader2,
  Upload,
  ShieldCheck
} from 'lucide-react';
import { appointmentApi } from '../utils/api';

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    visitorName: '',
    businessName: '',
    visitorAddress: '',
    mobileNo: '',
    email: '',
    proofType: 'Aadhard Card',
    reasonForVisit: '',
  });
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
      if (file) data.append('proofFile', file);
      data.append('siteId', 'ParekhChamberofTextile01');

      const res = await appointmentApi.submit(data);
      if (res.data.success) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMsg(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const requirements = [
    "Valid ID Proof (Aadhaar/ECI/DL/GST)",
    "Mask and Sanitization Compliance",
    "Digital Appointment Confirmation",
    "Punctuality (15 mins prior)"
  ];

  if (isSubmitted) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center p-6">
        <div className="bg-white p-12 text-center shadow-2xl border border-amber-100 max-w-xl">
           <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
           </div>
           <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">Visit Confirmed!</h2>
           <p className="text-slate-500 font-medium leading-relaxed mb-8">
              Your appointment for <strong>{formData.visitorName}</strong> has been successfully scheduled. 
              Our team will contact you on <strong>{formData.mobileNo}</strong> to confirm the exact time and date.
           </p>
           <button 
            onClick={() => window.location.reload()}
            className="bg-slate-900 text-white px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-amber-600 transition-all"
           >
             Book Another Visit
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      
      {/* Dynamic Header */}
      <section className="bg-slate-900 text-white py-16 px-6 border-b-8 border-amber-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-none">
              Visit with <br/><span className="text-amber-500">Appointment</span>
            </h1>
            <p className="text-slate-400 text-sm max-w-md font-medium uppercase tracking-[0.2em]">
              Digital Entry Management Portal • Parekh Chamber
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 border border-slate-700 flex flex-col items-center justify-center">
             <Calendar className="w-8 h-8 text-amber-500 mb-2" />
             <p className="text-2xl font-mono font-bold">2026</p>
             <p className="text-[10px] uppercase font-black text-slate-500">Official Access</p>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto mt-12 px-6 grid lg:grid-cols-12 gap-12">
        
        {/* Left Side: Visit Guidelines */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-slate-50 p-8 border border-slate-200">
            <h2 className="text-2xl font-bold mb-6 underline decoration-amber-500 underline-offset-8">Visit Guidelines</h2>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="bg-amber-100 p-2 text-amber-600 font-bold text-xs uppercase">01</div>
                <div>
                  <p className="font-bold text-lg leading-tight">Identity Verification</p>
                  <p className="text-slate-600 text-sm mt-1">"Please carry the original document selected in the form for physical verification."</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-amber-100 p-2 text-amber-600 font-bold text-xs uppercase">02</div>
                <div>
                  <p className="font-bold text-lg leading-tight">Address Proof</p>
                  <p className="text-slate-600 text-sm mt-1">"Ensure the uploaded residential or business proof is clear and valid."</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-amber-100 p-2 text-amber-600 font-bold text-xs uppercase">03</div>
                <div>
                  <p className="font-bold text-lg leading-tight">Arrival Time</p>
                  <p className="text-slate-600 text-sm mt-1">"Please arrive at the HQ 10 minutes prior to your scheduled time slot."</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 p-8 text-white rounded-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-amber-500" /> Quick Support
            </h3>
            <p className="text-slate-400 text-sm mb-6">"If you encounter any issues while filling out the form, please contact our support team."</p>
            <div className="space-y-2 font-mono text-amber-500 font-bold">
                <p>6353778329</p>
                <p></p>
            </div>
          </div>
        </div>

        {/* Right Side: Appointment Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 shadow-2xl p-8 md:p-12 space-y-8">
            <h2 className="text-3xl font-black text-slate-900 border-b pb-4">Visitor <span className="text-amber-600">Details</span></h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name of the Visitor */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-600" /> Name of the Visitor
                </label>
                <input 
                  type="text" 
                  name="visitorName"
                  value={formData.visitorName}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-slate-100 py-3 text-lg focus:border-amber-600 outline-none transition-all" 
                  placeholder="Enter Full Name" 
                  required
                />
              </div>

              {/* Name of the Business */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-600" /> Name of the Business
                </label>
                <input 
                  type="text" 
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-slate-100 py-3 text-lg focus:border-amber-600 outline-none transition-all" 
                  placeholder="Company Name" 
                  required
                />
              </div>

              {/* Mobile No. */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-600" /> Mobile No.
                </label>
                <input 
                  type="tel" 
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-slate-100 py-3 text-lg focus:border-amber-600 outline-none transition-all" 
                  placeholder="+91" 
                  required
                />
              </div>

              {/* Email Id */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-600" /> Email ID
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-slate-100 py-3 text-lg focus:border-amber-600 outline-none transition-all" 
                  placeholder="example@mail.com" 
                  required
                />
              </div>

              {/* Visitor’s Address */}
              <div className="col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" /> Visitor’s Address with Pin code
                </label>
                <input 
                  type="text" 
                  name="visitorAddress"
                  value={formData.visitorAddress}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-slate-100 py-3 text-lg focus:border-amber-600 outline-none transition-all" 
                  placeholder="Full Address & PIN" 
                  required
                />
              </div>

              {/* Identity Options (Roll-down mode) */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-600" /> Identity Document
                </label>
                <select 
                  name="proofType"
                  value={formData.proofType}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-slate-100 py-3 text-lg focus:border-amber-600 outline-none bg-transparent cursor-pointer"
                >
                  <option>Aadhaar Card</option>
                  <option>ECI Card</option>
                  <option>DL</option>
                  <option>GST Certificate</option>
                </select>
              </div>

              {/* Upload Proof */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <Upload className="w-4 h-4 text-amber-600" /> Upload Proof
                </label>
                <div className="relative">
                  <input type="file" className="hidden" id="proof-upload" onChange={handleFileChange} />
                  <label htmlFor="proof-upload" className="flex items-center justify-between w-full border-b-2 border-slate-100 py-3 text-sm text-slate-400 cursor-pointer hover:border-amber-600 transition-all">
                    {file ? file.name : "Residential / Business Proof"} <Upload className="w-4 h-4" />
                  </label>
                </div>
              </div>
            </div>

            {/* Describe the reason for Visit */}
            <div className="space-y-2 pt-4">
              <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-amber-600" /> Reason for Visit
              </label>
              <textarea 
                name="reasonForVisit"
                value={formData.reasonForVisit}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border-2 border-slate-100 p-4 text-lg focus:border-amber-600 outline-none min-h-[120px]" 
                placeholder="Briefly describe the purpose of your visit..." 
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
                <button type="submit" disabled={loading} className="w-full bg-slate-900 text-white py-5 font-bold uppercase text-xs tracking-[0.3em] hover:bg-amber-600 shadow-2xl transition-all flex items-center justify-center gap-3 group disabled:opacity-70">
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Confirm Visit"}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
                <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-6 flex items-center justify-center gap-2">
                   <ShieldCheck className="w-3 h-3 text-green-500" /> Data Protected by PCT Security
                </p>
            </div>
          </form>
        </div>
      </main>

      {/* Footer Disclaimer */}
      <footer className="mt-20 py-10 border-t border-slate-100 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
          PAREKH CHAMBER OF TEXTILE Consultation Services © 2026.
        </p>
      </footer>

    </div>
  );
};

export default AppointmentPage;