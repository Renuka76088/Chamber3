import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Users, Award, Shield, ArrowRight, Phone, Briefcase, Factory, Handshake, Settings, ShoppingBag, Wrench, Banknote, Sparkles, Scale, Lightbulb, FileText, ShieldCheck, Presentation, Cpu, FlaskConical, GraduationCap, Rocket, Puzzle, Layers } from 'lucide-react';
import { chamberServiceApi } from '../utils/api';

const HomePage = () => {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const iconMap = {
    'HandThumbUpIcon': Handshake,
    'CurrencyDollarIcon': Banknote,
    'BuildingOfficeIcon': Factory,
    'Cog6ToothIcon': Settings,
    'ShoppingBagIcon': ShoppingBag,
    'BriefcaseIcon': Briefcase,
    'WrenchScrewdriverIcon': Wrench,
    'SparklesIcon': Sparkles,
    'ScaleIcon': Scale,
    'GlobeAltIcon': Globe,
    'UserGroupIcon': Users,
    'LightBulbIcon': Lightbulb,
    'DocumentTextIcon': FileText,
    'ShieldCheckIcon': ShieldCheck,
    'PresentationChartLineIcon': Presentation,
    'CpuChipIcon': Cpu,
    'BeakerIcon': FlaskConical,
    'AcademicCapIcon': GraduationCap,
    'RocketLaunchIcon': Rocket,
    'PuzzlePieceIcon': Puzzle,
    'Square3Stack3DIcon': Layers,
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await chamberServiceApi.getServices('ParekhChamberofTextile01');
        if (res.data.success) {
          // Limit to 6 services for home page to keep it clean
          setServices(res.data.data.slice(0, 6));
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const getIcon = (iconName) => {
    return iconMap[iconName] || Briefcase;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">

      {/* 1. COMPACT HERO SECTION */}
      <section className="relative bg-slate-900 py-10 md:py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-8 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-600/10 border border-amber-600/20 text-amber-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-sm">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
              Official PAREKH CHAMBER OF TEXTILE
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-serif font-semibold leading-[1.1] tracking-tight">
              Interweaving Tradition <br className="hidden md:block" /> & Global Trade
            </h1>
            
            <div className="max-w-lg border-l-2 border-amber-600/50 pl-6 mx-auto md:mx-0">
              <p className="text-base md:text-lg text-slate-400 leading-relaxed text-left font-light italic">
                "Leading the global textile evolution by connecting artisans,
                manufacturers, and designers since 2007."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center md:justify-start">
              <button
                onClick={() => navigate('/membership-enquiry')}
                className="bg-white text-slate-950 px-8 py-4 font-bold uppercase text-[11px] tracking-[0.15em] hover:bg-amber-600 hover:text-white transition-all duration-500 shadow-2xl hover:-translate-y-1"
              >
                Join Member Portal
              </button>
              <button className="border border-white/20 text-white px-8 py-4 font-bold uppercase text-[11px] tracking-[0.15em] hover:bg-white hover:text-slate-950 transition-all duration-500 hover:-translate-y-1">
                Download Brochure
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="w-full h-[250px] sm:h-[320px] md:h-[420px] overflow-hidden rounded-lg border-[10px] border-slate-800 shadow-2xl">
              <img
                src="https://img.freepik.com/premium-photo/colorful-fabric-rainbow-is-popular-choice_1106493-249311.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80"
                className="w-full h-full object-cover"
                alt="Textile Industry"
              />
            </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              [...Array(6)].map((_, i) => (
                <div key={i} className="h-40 bg-slate-100 animate-pulse rounded-sm"></div>
              ))
            ) : (
              services.map((service, index) => {
                const IconComponent = getIcon(service.icon);
                return (
                  <div
                    key={index}
                    className="bg-white p-6 md:p-8 border border-slate-200 shadow-sm hover:border-amber-500 hover:shadow-md transition-all group flex flex-col items-center md:items-start text-center md:text-left h-full"
                  >
                    <div className="mb-6 group-hover:scale-110 transition-transform bg-slate-50 p-3 rounded-sm">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-amber-600" />
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h3>
                  </div>
                );
              })
            )}
          </div>
          
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 font-bold uppercase text-[11px] tracking-[0.15em] hover:bg-amber-600 transition-all duration-300 shadow-lg"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </button>
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