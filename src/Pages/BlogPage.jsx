import React, { useState, useEffect } from 'react';
import { blogApi, IMAGE_BASE_URL } from '../utils/api';
import { Clock, User, ArrowRight, Search, Tag, TrendingUp, Calendar, BookOpen, Quote, } from 'lucide-react';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = "ParekhChamberofTextile01";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogApi.getBlogs(siteId);
        if (response.data.success) {
          setBlogs(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">

      {/* 1. Header Section */}
      {/* <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Chamber <span className="text-amber-500">Insights</span></h1>
            <p className="text-lg text-slate-300 border-l-4 border-amber-500 pl-4 max-w-2xl">
              “Join and participate in our nation-wide campaign to digitalize the Textile Sector, one of the largest sectors of India”.
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
      </section> */}

      {/* 2. Blog Feed / Fallback */}
      <section className="py-12 pt-2 px-6">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Loading Insights...</p>
            </div>
          ) : blogs.length > 0 ? (
            <>
              <div className="flex items-center gap-2 mb-8">
                <BookOpen className="text-amber-600 w-5 h-5" />
                <h2 className="text-2xl font-bold uppercase tracking-widest text-sm">Latest Articles</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((post, index) => (
                  <article key={post._id || index} className="flex flex-col bg-slate-50 border border-slate-200 group hover:shadow-xl transition-all h-full">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.thumbnail ? `${IMAGE_BASE_URL}/${post.thumbnail}` : "https://img.freepik.com/premium-photo/colorful-rolled-fabrics-displayed-market-sunset_868797-52239.jpg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 bg-amber-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                        {post.category || "General"}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date || post.createdAt).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime || "5 min read"}</span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h3>

                      <div className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3 overflow-hidden">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                      </div>

                      <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                          <User className="w-3 h-3 text-amber-600" /> {post.author || "Admin"}
                        </div>
                        <button className="text-amber-600 font-black text-xs uppercase tracking-widest flex items-center gap-1 hover:gap-3 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            /* Premium Fallback UI */
            <div className="max-w-4xl mx-auto py-12">
              <div className="bg-slate-900 overflow-hidden relative group">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-amber-500/20 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-800 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                <div className="relative p-8 md:p-16 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-amber-500/10 flex items-center justify-center rounded-full mb-8 border border-amber-500/20">
                    <Quote className="text-amber-500 w-10 h-10" />
                  </div>

                  <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                    Blog & <span className="text-amber-500">Article</span>
                  </h2>

                  <div className="relative mb-12 max-w-2xl">
                    <p className="text-xl md:text-2xl text-slate-300 italic font-light leading-relaxed">
                      “Join and participate in our nation-wide campaign to digitalize the Textile Sector, one of the largest sectors of India”.
                    </p>
                  </div>

                  <div className="h-px w-24 bg-amber-500 mb-8"></div>

                  <div className="space-y-1">
                    <p className="text-white font-bold text-xl uppercase tracking-widest">HC Parekh</p>
                    <p className="text-amber-500 font-medium text-sm">Textile Manufacturer & Entrepreneur</p>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">India</p>
                  </div>


                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
