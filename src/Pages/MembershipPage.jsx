import React from 'react';
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
  Globe
} from 'lucide-react';

const MembershipPage = () => {
  const benefits = [
    { title: "Textile Trade Support to our valued Members", icon: <Briefcase className="w-5 h-5 text-amber-500" /> },
    { title: "Textile Finance and Investment Support to our valued Members", icon: <Gem className="w-5 h-5 text-amber-500" /> },
    { title: "Industrial Consultation for establishment of Textile Industries and Plants", icon: <Factory className="w-5 h-5 text-amber-500" /> },
    { title: "Manufacturing Support to the Textile Manufacturers", icon: <CheckCircle2 className="w-5 h-5 text-amber-500" /> },
    { title: "Trade Support to the Textile Suppliers & Retailers", icon: <Users className="w-5 h-5 text-amber-500" /> },
    { title: "Trade Consultation for Textile Raw & Finished Products ", icon: <FileText className="w-5 h-5 text-amber-500" /> },
    { title: "Trade Consultation for Textile Machineries and Spares ", icon: <FileText className="w-5 h-5 text-amber-500" /> },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      
      {/* Mini Header - Compact and Clear */}
      <section className="bg-slate-900 text-white py-12 px-6 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Chamber <span className="text-amber-500">Membership</span>
            </h1>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Empowering the Textile ecosystem through manufacturing support, trade consultation, and industrial growth.
            </p>
          </div>
          <div className="bg-slate-800 p-4 border border-slate-700 hidden lg:block">
             <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500">Membership Status</p>
             <p className="text-xl font-mono">ENROLLMENT OPEN 2026</p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto py-12 px-6 grid lg:grid-cols-12 gap-8">
        
        {/* Left Side: Info Panel (Sticky on Desktop) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Eligibility Section */}
          <div className="bg-white p-6 shadow-md border-l-4 border-slate-900">
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-600" /> Eligibility Criteria
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
             The Registered Textile Manufacturers, Suppliers, Traders, Retailers and all other
professionals who are directly or indirectly associated with the Textile Sector are
eligible to apply for the Membership
            </p>
          </div>

          {/* Benefits Grid - Compact */}
          <div className="bg-slate-900 p-6 rounded-sm shadow-xl">
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 border-b border-slate-800 pb-2">Exclusive Benefits</h3>
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="p-2 bg-slate-800 rounded group-hover:bg-amber-500 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-slate-300 text-[11px] font-bold uppercase group-hover:text-white">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

         
        </div>

        {/* Right Side: e-Form Container */}
        <div className="lg:col-span-8">
          <div className="bg-white shadow-2xl border border-slate-200">
            {/* Form Header */}
            <div className="bg-slate-50 border-b border-slate-200 px-8 py-6">
              <h3 className="text-xl font-black uppercase flex items-center gap-2">
                <FileText className="text-amber-600" /> Prescribed Application Form
              </h3>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Digital Submission v2.0</p>
            </div>

            <form className="p-8 md:p-10 space-y-10">
              
              {/* Section 1: Official Use */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-amber-600 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-amber-600"></span> Chamber Official Details
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="group">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Authorized Official Name</label>
                      <input type="text" className="w-full border-b-2 border-slate-100 py-2 outline-none focus:border-amber-500 transition-colors" />
                   </div>
                   <div className="group">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Official Code No.</label>
                      <input type="text" className="w-full border-b-2 border-slate-100 py-2 outline-none focus:border-amber-500 transition-colors" />
                   </div>
                </div>
              </div>

              {/* Section 2: Business & Applicant Details */}
              <div className="space-y-6">
                <h4 className="text-[10px] font-black text-amber-600 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-amber-600"></span> Applicant Information
                </h4>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-900 flex items-center gap-2 uppercase"><Users className="w-3 h-3"/> Name of Applicant</label>
                    <input type="text" placeholder="Individual Name" className="w-full bg-slate-50 p-3 text-sm border-0 focus:ring-2 focus:ring-amber-500 outline-none" required />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-900 flex items-center gap-2 uppercase"><Building2 className="w-3 h-3"/> Title of Business</label>
                    <input type="text" placeholder="Firm/Company Name" className="w-full bg-slate-50 p-3 text-sm border-0 focus:ring-2 focus:ring-amber-500 outline-none" required />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-900 uppercase">Address of the Business</label>
                  <textarea rows="2" placeholder="Full Address with Landmark & PIN" className="w-full bg-slate-50 p-3 text-sm border-0 focus:ring-2 focus:ring-amber-500 outline-none resize-none"></textarea>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-900 flex items-center gap-2 uppercase"><Phone className="w-3 h-3"/> Mob No.</label>
                    <input type="tel" placeholder="+91" className="w-full bg-slate-50 p-3 text-sm border-0 focus:ring-2 focus:ring-amber-500 outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-900 flex items-center gap-2 uppercase"><Mail className="w-3 h-3"/> Email ID</label>
                    <input type="email" placeholder="mail@textile.com" className="w-full bg-slate-50 p-3 text-sm border-0 focus:ring-2 focus:ring-amber-500 outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-900 flex items-center gap-2 uppercase"><Globe className="w-3 h-3"/> URL (if any)</label>
                    <input type="url" placeholder="www.website.com" className="w-full bg-slate-50 p-3 text-sm border-0 focus:ring-2 focus:ring-amber-500 outline-none" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 pt-4">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400">Nature of Business</label>
                      <div className="flex flex-wrap gap-2">
                        {['Retailer', 'Wholesaler', 'Manufacturer', 'Other'].map((n) => (
                          <label key={n} className="flex items-center gap-2 bg-slate-100 px-3 py-2 text-xs font-bold cursor-pointer hover:bg-amber-100 transition-colors">
                            <input type="radio" name="nature" className="accent-amber-600" /> {n}
                          </label>
                        ))}
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400">Category of Business</label>
                      <select className="w-full bg-slate-100 p-3 text-xs font-bold uppercase outline-none focus:bg-amber-50 border-0">
                         <option>Proprietorship</option>
                         <option>Partnership</option>
                         <option>LLP</option>
                         <option>Private Limited</option>
                         <option>Other</option>
                      </select>
                   </div>
                </div>
              </div>

              {/* Section 3: Documents & Legal */}
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-900 uppercase">Upload Legal Document (GST/MSME/Trade License)</label>
                  <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-200 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-all">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-3 text-slate-400" />
                              <p className="mb-2 text-sm text-slate-500 font-semibold uppercase">Click to upload file</p>
                              <p className="text-xs text-slate-400">PDF, PNG, JPG (MAX. 5MB)</p>
                          </div>
                          <input type="file" className="hidden" />
                      </label>
                  </div>
                </div>

                <div className="bg-slate-900 p-6 shadow-inner">
                   <div className="flex items-start gap-4">
                      <input type="checkbox" className="mt-1 w-5 h-5 accent-amber-500" required />
                      <div className="text-[11px] text-slate-400 leading-relaxed italic">
                        <strong className="text-amber-500 uppercase not-italic block mb-1">Declaration & Undertaking</strong>
                        “I have read the Terms & Conditions of subscription for the membership in the Chamber of Textile. All the information provided by me and the documents uploaded thereof are true and authentic to the best of my knowledge and belief”
                      </div>
                   </div>
                </div>
              </div>

              {/* Sticky Action Footer inside Card */}
              <div className="flex gap-4 pt-6">
                <button type="button" className="flex-1 bg-slate-100 text-slate-600 py-4 font-black uppercase text-xs tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" /> Preview
                </button>
                <button type="submit" className="flex-[2] bg-amber-600 text-white py-4 font-black uppercase text-xs tracking-[0.2em] hover:bg-amber-500 shadow-xl transition-all flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Submit Application
                </button>
              </div>

            </form>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-200 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
           Official Digital Membership Portal — PAREKH CHAMBER OF TEXTILE. 2026.
        </p>
      </footer>

    </div>
  );
};

export default MembershipPage;