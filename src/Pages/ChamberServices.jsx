import React from 'react';
import { 
  Globe, 
  ShoppingCart, 
  Search, 
  MessageSquare, 
  BarChart, 
  ShieldCheck, 
  ArrowRight,
  Truck
} from 'lucide-react';

const ChamberServices = () => {
  const services = [
    {
      title: "e-Auction Platform",
      desc: "A transparent digital marketplace for bulk yarn and fabric bidding, ensuring fair market prices for manufacturers and buyers.",
      icon: <ShoppingCart className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Global Trade Enquiry",
      desc: "Direct access to international export leads and domestic trade queries specifically curated for the textile sector.",
      icon: <Globe className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Quality Certification",
      desc: "Standardized testing and 'Chamber Approved' tags that boost the credibility of your textile products in global markets.",
      icon: <ShieldCheck className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Market Analytics",
      desc: "Monthly reports on textile price trends, demand forecasting, and raw material availability updates.",
      icon: <BarChart className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "B2B Networking",
      desc: "Member-only directory and networking events to connect weavers directly with large-scale retail brands.",
      icon: <MessageSquare className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Logistics Support",
      desc: "Subsidized shipping rates and supply chain coordination for small-scale textile units through our partner network.",
      icon: <Truck className="w-8 h-8 text-amber-600" />,
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      
      {/* 1. Header Section */}
      <section className="bg-slate-900 text-white py-16 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="md:w-3/4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-400 border-l-4 border-amber-500 pl-6 leading-relaxed">
              Empowering the textile ecosystem through digital innovation, market access, and industrial standardisation.
            </p>
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
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 group-hover:text-amber-700">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-2 h-0 bg-amber-500 group-hover:h-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Specialized Support Section */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://img.freepik.com/free-photo/line-hanging-textured-fabrics-different-colors-shades_181624-5610.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80" 
              alt="Handloom Artisan" 
              className="w-full h-96 object-cover shadow-2xl rounded-sm"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 italic">"Advancing Tradition with Technology"</h2>
            <p className="text-slate-700 leading-relaxed">
              Beyond commercial services, we provide dedicated support for <strong>Handloom Revival</strong>. This includes digital archiving of traditional patterns and providing GI-Tagging assistance to authentic weavers in the BENGALURU and regional textile clusters.
            </p>
            <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-white border-l-4 border-slate-900 shadow-sm">
                    <span className="font-bold text-amber-600">01.</span>
                    <span className="text-sm font-medium">Free skill development workshops for member artisans.</span>
                </div>
                <div className="flex gap-4 p-4 bg-white border-l-4 border-slate-900 shadow-sm">
                    <span className="font-bold text-amber-600">02.</span>
                    <span className="text-sm font-medium">Legal assistance for Patent and Copyright filing.</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Inquiry CTA */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Have a Specific Business Need?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Our consultancy wing helps textile startups and established industries with custom solutions ranging from machinery setup to export documentation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-amber-600 text-white px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-amber-500 transition-all">
              Request a Consultation
            </button>
            <button className="border border-slate-700 text-white px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-slate-800 transition-all">
              Download Service Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 border-t border-slate-200 text-center text-slate-500 text-xs bg-white">
        © 2026 Textile Chamber.  All Rights Reserved.
      </footer>
    </div>
  );
};

export default ChamberServices;