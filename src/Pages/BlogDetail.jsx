import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogApi, blogHeaderApi, IMAGE_BASE_URL } from '../utils/api';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, MessageCircle } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const siteId = "ParekhChamberofTextile01";

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        // We use the list API and filter locally or if there's a getById API use that.
        // Let's check if there's a getById API in backend. 
        // Based on my previous view of blogRoutes.js, it has router.get('/:id', getBlogById);
        // I should add getById to blogApi in utils/api.js first.
        const response = await blogApi.getById(id);
        if (response.data.success) {
          setBlog(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Blog Not Found</h2>
        <button onClick={() => navigate('/blog')} className="text-amber-600 font-bold flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pb-20">
      {/* 1. Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-100 z-50">
        <div className="h-full bg-amber-500 transition-all duration-300" style={{ width: '100%' }}></div>
      </div>

      {/* 2. Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden">
        <img
          src={blog.thumbnail ? (blog.thumbnail.startsWith("http") ? blog.thumbnail : `${IMAGE_BASE_URL}/${blog.thumbnail}`) : "https://img.freepik.com/premium-photo/colorful-rolled-fabrics-displayed-market-sunset_868797-52239.jpg"}
          className="w-full h-full object-cover"
          alt={blog.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12 md:p-20 pb-20 sm:pb-28">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => navigate('/blog')}
              className="group flex items-center gap-2 text-white/80 hover:text-amber-500 font-bold mb-8 transition-colors uppercase tracking-widest text-xs"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Insights
            </button>

            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="bg-amber-600 text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                {blog.category || "Article"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6 sm:mb-8 tracking-tighter line-clamp-3">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-white/80 border-t border-white/10 pt-6 sm:pt-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-black text-xs sm:text-base">
                  {blog.author?.charAt(0) || 'A'}
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white leading-none mb-1">{blog.author || "Admin"}</p>
                  <p className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest font-bold leading-none">Author</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest leading-none">{new Date(blog.date || blog.createdAt).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 -mt-10 sm:-mt-16 relative z-10">
        <div className="bg-white rounded-sm shadow-2xl p-5 sm:p-12 md:p-16 border border-slate-100">
          <div
            className="blog-content-container rich-text-content prose prose-slate max-w-none prose-sm sm:prose-base md:prose-lg prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-ul:list-disc prose-ul:pl-4 break-normal-custom text-left overflow-visible"
          >
            <div dangerouslySetInnerHTML={{ __html: blog.content?.replace(/&nbsp;|\u00A0/g, ' ').replace(/[\u200B-\u200D\uFEFF\u00AD]/g, '') }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
