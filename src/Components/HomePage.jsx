import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Users, Award, Shield, ArrowRight, Phone, Briefcase, Factory, Handshake, Settings, ShoppingBag, Wrench, Banknote } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Handshake className="w-10 h-10 text-amber-600" />,
      title: "Textile Trade Support to our valued Members"
    },
    {
      icon: <Banknote className="w-10 h-10 text-amber-600" />,
      title: "Textile Finance and Investment Support to our valued Members"
    },
    {
      icon: <Factory className="w-10 h-10 text-amber-600" />,
      title: "Industrial Consultation for establishment of Textile Industries and Plants"
    },
    {
      icon: <Settings className="w-10 h-10 text-amber-600" />,
      title: "Manufacturing Support to the Textile Manufacturers"
    },
    {
      icon: <ShoppingBag className="w-10 h-10 text-amber-600" />,
      title: "Trade Support to the Textile Suppliers & Retailers"
    },
    {
      icon: <Briefcase className="w-10 h-10 text-amber-600" />,
      title: "Trade Consultation for Textile Raw & Finished Products"
    },
    {
      icon: <Wrench className="w-10 h-10 text-amber-600" />,
      title: "Trade Consultation for Textile Machineries and Spares"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">

      {/* 1. COMPACT HERO SECTION */}
      <section className="relative bg-slate-900 py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6 text-center md:text-left order-2 md:order-1">
            <div className="inline-block px-3 py-1 bg-amber-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Official PAREKH CHAMBER OF TEXTILE
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Interweaving Tradition <br className="hidden md:block" /> & Global Trade
            </h1>
            <p className="text-base md:text-lg text-slate-300 max-w-lg leading-relaxed border-l-4 border-amber-600 pl-4 mx-auto md:mx-0 text-left">
              Leading the global textile evolution by connecting artisans,
              manufacturers, and designers since 2007.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button 
                onClick={() => navigate('/membership-enquiry')}
                className="bg-white text-slate-900 px-6 md:px-8 py-3 md:py-4 font-bold uppercase text-xs md:text-sm hover:bg-amber-500 hover:text-white transition-all shadow-md"
              >
                Join Member Portal
              </button>
              <button className="border-2 border-white/50 text-white px-6 md:px-8 py-3 md:py-4 font-bold uppercase text-xs md:text-sm hover:bg-white/10 transition-all">
                Download Brochure
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              src="https://img.freepik.com/premium-photo/colorful-fabric-rainbow-is-popular-choice_1106493-249311.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80"
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg border-4 md:border-8 border-slate-800 shadow-2xl"
              alt="Textile Industry"
            />
          </div>
        </div>
      </section>

      {/* 2. KEY STATS BAR (Empty in original, but keeping structure) */}
      <div className="bg-amber-600 py-4 md:py-6 px-6"></div>

      {/* 3. CORE SERVICES (Compact Grid) */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">

          <div className="mb-8 md:mb-10 border-b-2 border-slate-200 pb-4 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Our Strategic Services
            </h2>
            <p className="text-slate-600 mt-1 text-sm md:text-base">
              Direct support for manufacturers and textile businesses.
            </p>
          </div>

          {/* Dynamic Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-5 md:p-6 border border-slate-200 shadow-sm hover:border-amber-500 transition-all group flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {React.cloneElement(service.icon, { className: "w-8 h-8 md:w-10 md:h-10 text-amber-600" })}
                </div>

                <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. MISSION SUMMARY (Two Column) */}
      <section className="py-12 md:py-16 px-4 md:px-6 border-b border-slate-100">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Defining the future of <br /><span className="text-amber-600">Global Textile Standards</span>
            </h2>
            <p className="text-slate-700 leading-relaxed font-medium text-sm md:text-base">
              The Textile Chamber serves as the central hub for the industry. Our mission is to foster growth, provide ethical standards, and promote sustainable manufacturing.
            </p>
            <ul className="space-y-3 inline-block md:block text-left">
              <li className="flex items-center gap-3 font-bold text-xs md:text-sm text-slate-800">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-amber-600 flex-shrink-0" /> ISO Certified Trade Practices
              </li>
              <li className="flex items-center gap-3 font-bold text-xs md:text-sm text-slate-800">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-amber-600 flex-shrink-0" /> Government Liaison Services
              </li>
            </ul>
            <div className="pt-2">
              <button className="flex items-center gap-2 font-bold text-xs md:text-sm uppercase text-slate-900 border-b-4 border-amber-500 pb-1 hover:text-amber-600 transition-all mx-auto md:mx-0">
                Read Full Mission Statement <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-slate-100 p-6 md:p-8 border-l-4 md:border-l-8 border-slate-900">
            <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Direct Contact for Members</h4>
            <p className="text-slate-600 mb-6 text-xs md:text-sm">Need immediate assistance with registration or trade queries? Our helpdesk is available from 10 AM to 6 PM.</p>
            <a href="tel:+916353778329" className="flex items-center justify-center md:justify-start gap-3 md:gap-4 text-xl md:text-2xl font-bold text-slate-900 hover:text-amber-600 transition-colors">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-amber-600" /> 6353778329
            </a>
          </div>
        </div>
      </section>

      {/* 5. SIMPLE FOOTER */}
      <footer className="py-6 md:py-8 bg-slate-900 text-white text-center text-xs md:text-sm px-4">
        <p>© 2026 PAREKH CHAMBER OF TEXTILE. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;