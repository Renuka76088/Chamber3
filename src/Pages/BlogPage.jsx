import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogApi, blogHeaderApi, IMAGE_BASE_URL } from '../utils/api';
import { Clock, User, ArrowRight, Search, Tag, TrendingUp, Calendar, BookOpen, Quote, } from 'lucide-react';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [header, setHeader] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const siteId = "ParekhChamberofTextile01";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [blogRes, headerRes] = await Promise.all([
          blogApi.getBlogs(siteId),
          blogHeaderApi.getHeader(siteId)
        ]);

        if (blogRes.data.success) {
          setBlogs(blogRes.data.data);
        }
        if (headerRes.data.success) {
          setHeader(headerRes.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredBlogs = blogs.filter(post => 
    post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">

      {/* 1. Header Section */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
              {header?.title?.split(' ')[0] || 'CHAMBER'} <span className="text-amber-500">{header?.title?.split(' ').slice(1).join(' ') || 'INSIGHTS'}</span>
            </h1>
            <p className="text-lg text-slate-300 border-l-4 border-amber-500 pl-4 max-w-2xl">
              {header?.description || "“Join and participate in our nation-wide campaign to digitalize the Textile Sector, one of the largest sectors of India”."}
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right gap-2">
            <div className="w-12 h-1 bg-amber-500 mb-2"></div>
            <h2 className="text-xl font-black text-white uppercase tracking-tighter">
              {header?.authorName || "HC PAREKH"}
            </h2>
            <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.2em]">
              {header?.authorRole || "Textile Manufacturer & Entrepreneur"}
            </p>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
              {header?.country || "INDIA"}
            </p>
            
          </div>
        </div>
      </section>

      {/* 2. Blog Feed */}
      <section className="py-12 pt-2 px-6">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Loading Insights...</p>
            </div>
          ) : filteredBlogs.length > 0 ? (
            <>
              <div className="flex items-center gap-2 mb-8 mt-8">
                <BookOpen className="text-amber-600 w-5 h-5" />
                <h2 className="text-2xl font-bold uppercase tracking-widest text-sm">Latest Articles</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((post, index) => (
                  <article key={post._id || index} className="flex flex-col bg-slate-50 border border-slate-200 group hover:shadow-xl transition-all h-full rounded-sm overflow-hidden cursor-pointer" onClick={() => navigate(`/blog/${post._id}`)}>
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.thumbnail ? (post.thumbnail.startsWith("http") ? post.thumbnail : `${IMAGE_BASE_URL}/${post.thumbnail}`) : "https://img.freepik.com/premium-photo/colorful-rolled-fabrics-displayed-market-sunset_868797-52239.jpg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 bg-amber-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                        {post.category || "Article"}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date || post.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h3>

                      <div className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 overflow-hidden break-words text-left">
                        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/<[^>]*>?/gm, '').replace(/&nbsp;|\u00A0/g, ' ').replace(/[\u200B-\u200D\uFEFF\u00AD]/g, '') }} />
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
            <>
              {/* No Search Results or No Blogs */}
              <div className="py-24 text-center">
                <div className="bg-slate-50 p-10 rounded-full inline-block mb-6 border border-slate-100">
                  <Quote className="text-slate-200 w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-slate-400 uppercase tracking-[0.2em]">No Articles Published Yet</h3>
                <p className="text-slate-400 mt-2 font-medium">Check back later for fresh insights and industry updates.</p>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
