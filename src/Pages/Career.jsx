import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  Mail, 
  Users, 
  CheckCircle, 
  Globe, 
  Send, 
  FileText,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Award
} from 'lucide-react';

const Career = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 pb-20">
      
      {/* 1. Modern Hero Section */}
      <section className="bg-[#0f172a] text-white py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Join Our <span className="text-amber-500">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Explore opportunities to grow with us. Hum ek aisi team bana rahe hain jo innovation aur excellence mein vishwas rakhti hai.
          </p>
        </div>
      </section>

      {/* 2. Main Openings Container */}
      <main className="max-w-6xl mx-auto px-6 -mt-16">
        
        {/* Search / Filter Placeholder (Optional) */}
        <div className="bg-white shadow-sm border border-slate-100 p-4 mb-12 flex justify-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Current Openings (2026 Batch)</h2>
        </div>

        <div className="space-y-16">
          
          {/* JOB 1: HR MANAGER */}
          <div className="bg-white border-t-4 border-amber-500 shadow-xl overflow-hidden group">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
                <div className="space-y-3">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Management | Full Time</span>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900">HR Manager</h3>
                  <p className="flex items-center gap-2 text-lg text-slate-500 font-medium">
                    <MapPin className="w-5 h-5 text-amber-600" /> Bengaluru, Karnataka
                  </p>
                </div>
                <div className="text-left md:text-right bg-slate-50 p-4 border-l-4 md:border-l-0 md:border-r-4 border-amber-500">
                  <p className="text-xs font-bold uppercase text-slate-400">Fixed CTC</p>
                  <p className="text-2xl font-bold text-slate-900">Rs. 5.25 L.P.A.</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Criteria */}
                <div className="space-y-6">
                  <h4 className="text-xl font-bold flex items-center gap-2 border-b pb-2">
                    <Award className="w-5 h-5 text-amber-600" /> Essential Criteria
                  </h4>
                  <ul className="space-y-4 text-lg text-slate-600 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-amber-500 font-bold">•</span>
                      MBA (HR) or Graduate with 8+ years experience in End-to-End recruitment.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-500 font-bold">•</span>
                      Proficiency in English, Hindi, and Regional languages.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-500 font-bold">•</span>
                      Open for official Tour & Travel within India.
                    </li>
                  </ul>
                </div>

                {/* Responsibilities */}
                <div className="space-y-6">
                  <h4 className="text-xl font-bold flex items-center gap-2 border-b pb-2">
                    <Briefcase className="w-5 h-5 text-amber-600" /> Key Responsibilities
                  </h4>
                  <ul className="space-y-3 text-lg text-slate-600 leading-relaxed">
                    <li className="flex gap-3 underline decoration-slate-200 underline-offset-4">Recruitment: CV Shortlisting to Induction</li>
                    <li className="flex gap-3 underline decoration-slate-200 underline-offset-4">Payroll, EPF, ESI & Labour Law Compliance</li>
                    <li className="flex gap-3 underline decoration-slate-200 underline-offset-4">Full & Final Settlements & Relocation</li>
                    <li className="flex gap-3 underline decoration-slate-200 underline-offset-4">Campus Interview Planning & Coordination</li>
                  </ul>
                </div>
              </div>

              {/* HR CTA */}
              <div className="mt-12 bg-slate-900 p-8 rounded-sm flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-white text-center md:text-left">
                  <p className="text-lg font-bold mb-1">Apply for this Position</p>
                  <p className="text-sm text-slate-400">Send resume to: <span className="text-amber-400">hemant.parekh2012@gmail.com</span></p>
                </div>
                <a href="mailto:hemant.parekh2012@gmail.com" className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-4 font-bold uppercase text-xs tracking-widest transition-all">
                  Email CV Now
                </a>
              </div>
            </div>
            <div className="bg-slate-50 px-8 py-3 text-[10px] text-slate-400 italic">
              * Note: Hiring involves a 3-Round interview process. Not a placement consultancy.
            </div>
          </div>

          {/* JOB 2: SOCIAL MEDIA INFLUENCER */}
          <div className="bg-white border-t-4 border-slate-900 shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
                <div className="space-y-3">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Campaign | Brand Promotion</span>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900">Social Media Influencer</h3>
                  <p className="flex items-center gap-2 text-lg text-slate-500 font-medium italic">
                    <Globe className="w-5 h-5 text-slate-400" /> Any Location (Pan India)
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 mb-12">
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-xl text-slate-700 leading-relaxed font-medium border-l-4 border-slate-200 pl-6">
                    Hum experienced influencers ko invite karte hain hamare tangible aur intangible products ki online advertisement ke liye.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <h4 className="font-bold text-sm uppercase text-slate-400">Target Sectors</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Textile", "Paper Industry", "Healthcare", "FMCG", "Tenders"].map(s => (
                                <span key={s} className="bg-slate-100 px-3 py-1 text-xs font-bold">{s}</span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-sm uppercase text-slate-400">Required Platforms</h4>
                        <div className="flex gap-4">
                            <Linkedin className="w-5 h-5 text-slate-400" />
                            <Instagram className="w-5 h-5 text-slate-400" />
                            <Facebook className="w-5 h-5 text-slate-400" />
                            <Youtube className="w-5 h-5 text-slate-400" />
                        </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-8 border border-amber-100">
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-amber-600" /> Quotation Req.
                    </h4>
                    <ul className="text-sm space-y-3 text-slate-600">
                        <li className="flex gap-2"><span>✓</span> Submit in PDF format</li>
                        <li className="flex gap-2"><span>✓</span> Include Payment Terms</li>
                        <li className="flex gap-2"><span>✓</span> Exclude 3rd Party/GST</li>
                    </ul>
                </div>
              </div>

              {/* Influencer CTA */}
              <div className="bg-amber-600 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-white">
                  <p className="text-lg font-bold">Submit Your Quotation</p>
                  <p className="text-sm opacity-90 italic">Ad designs will be provided by us ready for posting.</p>
                </div>
                <a href="mailto:hemant.parekh2012@gmail.com" className="bg-white text-amber-600 px-10 py-4 font-bold uppercase text-xs tracking-widest hover:bg-slate-100 transition-all">
                  Send Proposal
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* 3. Footer / Global Note */}
      <footer className="mt-24 max-w-4xl mx-auto px-6 text-center border-t pt-12">
          <p className="text-lg text-slate-500 italic mb-8">
            "We value talent over titles. If you think you're a fit, we want to hear from you."
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>Official Recruitment Portal</span>
            <span className="hidden md:block">•</span>
            <span>Parekh Chamber of Textile</span>
            <span className="hidden md:block">•</span>
            <span>2026 Batch</span>
          </div>
      </footer>
    </div>
  );
};

export default Career;