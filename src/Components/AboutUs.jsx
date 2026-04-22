import React from 'react';
import { History, Target, Eye, Quote, Users, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-white font-sans text-slate-900">

      {/* 1. Compact Header Section */}
      <section className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">PAREKH CHAMBER OF TEXTILE  </h1>

          </div>
          <div className="md:w-1/3 text-center md:text-right">

          </div>
        </div>
      </section>



      {/* 3. Main Narrative (Two-Column, No Overlap) */}
      <section className="py-12 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://img.freepik.com/premium-photo/person-working-embroidery-workshop_862994-169582.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80"
              alt="Textile Facility"
              className="w-full h-80 object-cover rounded shadow-md"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 underline decoration-amber-500 underline-offset-8">About Us</h2>
            <p className="text-slate-700 leading-relaxed">
              Parekh Chamber of Textile is one of the trusted Textile Association and Group of the
              Registered Textile Trade Members, Textile Manufacturers, Textile Suppliers, Textile
              Designers, Dyeing Masters and Textile Entrepreneurs of India.
            </p>


          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
