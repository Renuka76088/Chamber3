import React from 'react';
import { Clock, User, ArrowRight, Search, Tag, TrendingUp, Calendar, BookOpen } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      title: "BENGALURU's Cotton Legacy: From Chanderi to Modern Looms",
      excerpt: "A journey through BENGALURU's textile history: How we evolved from traditional handlooms to become a modern industrial powerhouse.",
      author: "Prakash Agrawal",
      date: "18 March, 2026",
      readTime: "7 min read",
      category: "Heritage",
      image: "https://img.freepik.com/free-photo/realistic-satin-silk-red-color-ai-generated-image_511042-663.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80"
    },
    {
      title: "How AI is Revolutionizing Fabric Quality Control",
      excerpt: "How Parekh Chamber of Textile is partnering with LabelzAI to use smart data annotation for achieving zero defects.",
      author: "Tech Cell",
      date: "12 March, 2026",
      readTime: "5 min read",
      category: "Innovation",
      image: "https://img.freepik.com/premium-photo/fabric-samples-curtains-blue-light-blue-colors-fabric-threads-sewing-curtains_718727-916.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80"
    },
    {
      title: "Export Guidelines for Small Scale Weavers (2026)",
      excerpt:"New government norms and MSME benefits designed to empower textile manufacturers in BENGALURU and Mohali for global market success.",
      author: "Legal Dept",
      date: "05 March, 2026",
      readTime: "10 min read",
      category: "Compliance",
      image: "https://img.freepik.com/premium-photo/colorful-rolled-fabrics-displayed-market-sunset_868797-52239.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      
      {/* 1. Header Section (Matches About Us Style) */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Chamber <span className="text-amber-500">Insights</span></h1>
            <p className="text-lg text-slate-300 border-l-4 border-amber-500 pl-4 max-w-2xl">
              “Join and participate in our nation-wide campaign to digitalize the Textile
Sector, one of the largest sectors of India”.

            </p>
          </div>
          <div className="w-full md:w-80 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-slate-800 border border-slate-700 py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-amber-500 text-white"
            />
          </div>
        </div>
      </section>

      {/* 2. Blog Feed Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="text-amber-600 w-5 h-5" />
            <h2 className="text-2xl font-bold uppercase tracking-widest text-sm">Latest Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="flex flex-col bg-slate-50 border border-slate-200 group hover:shadow-xl transition-all">
                <div className="relative h-52 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-amber-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <User className="w-3 h-3 text-amber-600" /> {post.author}
                    </div>
                    <button className="text-amber-600 font-black text-xs uppercase tracking-widest flex items-center gap-1 hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

 


    </div>
  );
};

export default BlogPage;