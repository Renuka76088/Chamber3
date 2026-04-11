import React from 'react';
import {

  Search,

  ArrowRight,
  Briefcase, Factory, Handshake, Settings, ShoppingBag, Wrench, Banknote
} from 'lucide-react';

const ChamberServices = () => {
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
    <div className="bg-white min-h-screen font-sans text-slate-900">

      {/* 1. Header Section */}
      <section className="bg-slate-900 text-white py-16 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="md:w-3/4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>

          </div>
        </div>
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 opacity-10">
          <Search className="w-64 h-64 -mr-20 -mt-10" />
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-white border border-slate-200 hover:border-amber-500 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl mb-4">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              {/* <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 group-hover:text-amber-700">
                Learn More <ArrowRight className="w-4 h-4" />
              </button> */}
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-2 h-0 bg-amber-500 group-hover:h-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>





    </div>
  );
};

export default ChamberServices;