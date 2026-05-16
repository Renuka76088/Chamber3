import { useState, useEffect } from 'react';
import {
  Search,
  ArrowRight,
  Briefcase, Factory, Handshake, Settings, ShoppingBag, Wrench, Banknote,
  Sparkles, Scale, Globe, Users, Lightbulb, FileText, ShieldCheck, 
  Presentation, Cpu, FlaskConical, GraduationCap, Rocket, Puzzle, Layers
} from 'lucide-react';
import { chamberServiceApi } from '../utils/api';

const ChamberServices = () => {
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
          setServices(res.data.data);
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
    <div className="bg-white min-h-screen font-sans text-slate-900">

      {/* 1. Header Section */}
      <section className="bg-slate-900 text-white py-12 md:py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="w-full md:w-3/4">
            {/* Font size responsive: text-3xl for phone, text-6xl for desktop */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 uppercase tracking-tight">
              Our Services
            </h1>
            <div className="h-1.5 w-20 bg-amber-500 rounded-full"></div>
          </div>
        </div>

        {/* Background Pattern - Hidden on small mobile to avoid layout shifts */}
        <div className="absolute top-0 right-0 opacity-10 hidden sm:block">
          <Search className="w-48 h-48 md:w-64 md:h-64 -mr-10 md:-mr-20 -mt-10" />
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const IconComponent = getIcon(service.icon);
                return (
                  <div
                    key={index}
                    className="group p-6 md:p-8 bg-white border border-slate-200 hover:border-amber-500 transition-all duration-300 hover:shadow-xl relative overflow-hidden flex flex-col items-center md:items-start text-center md:text-left h-full"
                  >
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 bg-slate-50 p-3 rounded-sm">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-amber-600" />
                    </div>

                    <h3 className="text-lg md:text-xl font-bold leading-tight mb-4 group-hover:text-amber-700 transition-colors">
                      {service.title}
                    </h3>

                    {/* Corner Accent - Animated border */}
                    <div className="absolute top-0 right-0 w-1 md:w-2 h-0 bg-amber-500 group-hover:h-full transition-all duration-300"></div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Optional: Simple Footer/Contact hint */}
      <section className="bg-slate-50 py-10 px-6 border-t border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">
            Official Services Portal — 2026
          </p>
        </div>
      </section>

    </div>
  );
};

export default ChamberServices;