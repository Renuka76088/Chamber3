import { useState, useEffect } from 'react';
import { Network, User, Linkedin, Mail } from 'lucide-react';
import { managementApi, IMAGE_BASE_URL } from '../utils/api';

const ChamberManagement = () => {
  const [content, setContent] = useState({ heading: '', description: '' });
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const siteId = 'ParekhChamberofTextile01';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contentRes, membersRes] = await Promise.all([
          managementApi.getContent(siteId),
          managementApi.getMembers(siteId)
        ]);

        if (contentRes.data.success) setContent(contentRes.data.data);
        if (membersRes.data.success) setMembers(membersRes.data.data);
      } catch (error) {
        console.error("Error fetching management data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white font-sans text-slate-900 pb-20">

      {/* 1. Header Section */}
      <section className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full -ml-24 -mb-24 blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 border border-slate-700 rounded-2xl mb-8 shadow-xl">
            <Network className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            {content.title || "Our Chamber Management"}
          </h1>

          {/* Description */}
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
          <div 
            className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-medium break-words text-left [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-2 [&_li]:ml-4"
            dangerouslySetInnerHTML={{ 
              __html: (content.description || "Parekh Chamber of Textile is administered and governed by the highly skilled, experienced and qualified members of the Management.")
                .replace(/&nbsp;/g, ' ') 
            }}
          />
        </div>
      </section>

      {/* 2. Team Section */}
      {members.length > 0 && (
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-xs">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Meet Our Distinguished Board</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {members.map((member) => (
              <div 
                key={member._id} 
                className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100/80 shadow-md hover:shadow-[0_32px_64px_-15px_rgba(245,158,11,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
              >
                {/* Image Container with Inset Frame */}
                <div className="m-3.5 rounded-[1.75rem] overflow-hidden aspect-square bg-slate-50 relative shadow-inner">
                  {member.image ? (
                    <img 
                      src={member.image.startsWith('http') ? member.image : `${IMAGE_BASE_URL}${member.image}`} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                      <User className="w-14 h-14 text-slate-300/80" />
                    </div>
                  )}
                </div>

                {/* Info Block */}
                <div className="px-5 pb-6 pt-1 text-center">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-500 transition-colors leading-tight">
                      {member.name}
                    </h3>
                    <div className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-50 rounded-full border border-amber-100/50">
                      <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse"></span>
                      <span className="text-[9px] font-black text-amber-700 uppercase tracking-widest">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Accent Border Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. Official Portal Notice (Matching Services Page) */}
      <section className="mt-12 bg-slate-50 py-10 px-6 border-t border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">
            Official Management Portal — 2026
          </p>
        </div>
      </section>

    </div>
  );
};

export default ChamberManagement;
