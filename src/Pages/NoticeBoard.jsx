import React, { useState, useEffect } from 'react';
import { Megaphone, Calendar, Bell, Inbox, Clock } from 'lucide-react';
import { noticeApi } from '../utils/api';

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = "ParekhChamberofTextile01";

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        setLoading(true);
        const res = await noticeApi.getNotices(siteId);
        if (res.data.success) {
          setNotices(res.data.data || []);
        }
      } catch (error) {
        console.error("Error fetching notices:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  if (loading) {
    return (
      <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-center py-24">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-500 font-bold uppercase tracking-widest text-xs">Syncing Announcements...</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 font-sans text-slate-900 min-h-screen py-12 md:py-24 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-12">
          <div className="max-w-2xl">
            <span className="bg-amber-100 text-amber-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
              Communication Hub
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              Notice <span className="text-amber-500">Board</span>
            </h1>
            <p className="text-slate-500 mt-4 text-sm md:text-base font-medium">
              Stay updated with the latest official announcements, event notifications, and critical alerts from the Chamber of Textile.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-slate-100 shadow-sm self-center md:self-end">
             <Clock className="w-5 h-5 text-amber-500" />
             <div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Last Updated</p>
               <p className="text-xs font-black text-slate-900 uppercase tracking-widest leading-none">
                 {notices.length > 0 ? new Date(notices[0].date).toLocaleDateString(undefined, { month: 'long', year: 'numeric' }) : 'April 2026'}
               </p>
             </div>
          </div>
        </div>

        {/* Notices Grid */}
        {notices.length === 0 ? (
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl py-20 px-6 flex flex-col items-center justify-center text-center shadow-sm max-w-2xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-full mb-8">
              <Inbox className="w-16 h-16 text-slate-200" strokeWidth={1} />
            </div>
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
              Quiet on the board
            </h2>
            <p className="text-slate-400 mt-3 text-sm max-w-sm mx-auto font-medium">
              There are no active notices or announcements at this moment. We'll broadcast updates here as they arrive.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notices.map((notice) => (
              <div key={notice._id} className="group bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {new Date(notice.date).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-4 leading-snug group-hover:text-amber-600 transition-colors uppercase tracking-tight">
                  {notice.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8 flex-1">
                  {notice.description}
                </p>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Official Notice</span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all">
                    <Megaphone className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;