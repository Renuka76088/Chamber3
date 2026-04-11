import React from 'react';
import { Inbox, Clock } from 'lucide-react';

const NoticeBoard = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 flex items-center justify-center py-32 px-6">

      <div className="bg-white border border-dashed border-slate-300 rounded-sm py-20 px-6 flex flex-col items-center justify-center text-center shadow-sm max-w-xl w-full">

        <div className="bg-slate-50 p-6 rounded-full mb-6">
          <Inbox className="w-12 h-12 text-slate-300" strokeWidth={1.5} />
        </div>

        <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">
          At present, No content
        </h2>

        <p className="text-slate-500 mt-2 text-sm">
          There are no active notices or announcements at this moment. Please check back later.
        </p>

        <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 bg-amber-50 px-4 py-2">
          <Clock className="w-3 h-3" /> Updated: April 2026
        </div>

      </div>

    </div>
  );
};

export default NoticeBoard;