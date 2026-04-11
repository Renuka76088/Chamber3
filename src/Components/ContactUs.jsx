import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">

      {/* Header */}
      <section className="bg-slate-50 py-16 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600">
            Get in touch with us for any enquiries or support.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Left Side - Contact Details */}
          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b-2 border-amber-500 pb-2 inline-block">
                Contact Information
              </h2>

              <div className="space-y-6 mt-6">

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span className="text-lg font-medium">6353778329</span>
                </div>

                {/* Trade Enquiry */}
                <div>
                  <p className="text-sm font-semibold text-slate-500">Trade Enquiry</p>
                  <div className="flex items-center gap-3 mt-1">
                    <Mail className="w-5 h-5 text-amber-600" />
                    <a href="mailto:trade-enquiry@parekhchamber.com" className="hover:underline">
                      trade-enquiry@parekhchamber.com
                    </a>
                  </div>
                </div>

                {/* Customer Care */}
                <div>
                  <p className="text-sm font-semibold text-slate-500">Customer Care</p>
                  <div className="flex items-center gap-3 mt-1">
                    <Mail className="w-5 h-5 text-amber-600" />
                    <a href="mailto:customer-care@parekhchamber.com" className="hover:underline">
                      customer-care@parekhchamber.com
                    </a>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <p className="text-sm font-semibold text-slate-500">Services</p>
                  <div className="flex items-center gap-3 mt-1">
                    <Mail className="w-5 h-5 text-amber-600" />
                    <a href="mailto:services@parekhchamber.com" className="hover:underline">
                      services@parekhchamber.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Office Location */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b-2 border-amber-500 pb-2 inline-block">
                Our Location
              </h2>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg font-bold">BENGALURU, KA, INDIA</h3>

                </div>
              </div>
            </div>

          </div>

          {/* Right Side - Google Map */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden border">
            <iframe
              title="Bangalore Location"
              src="https://www.google.com/maps?q=Bangalore%20India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactUs;