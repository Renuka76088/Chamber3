import React from 'react';
import { Inbox, Clock } from 'lucide-react';

const NoticeBoard = () => {
  return (
    // py-32 ko hata kar responsive padding di hai (py-12 mobile ke liye, py-24 desktop ke liye)
    // items-start se start karke md:items-center kiya hai taaki mobile pe top se chipka rahe
    <div className="bg-slate-50 font-sans text-slate-900 flex items-start md:items-center justify-center min-h-[80vh] py-12 md:py-24 px-6">

      <div className="bg-white border border-dashed border-slate-300 rounded-sm py-12 md:py-20 px-6 flex flex-col items-center justify-center text-center shadow-sm max-w-xl w-full mt-4 md:mt-0">

        <div className="bg-slate-50 p-4 md:p-6 rounded-full mb-6">
          <Inbox className="w-10 h-10 md:w-12 md:h-12 text-slate-300" strokeWidth={1.5} />
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-slate-900 uppercase tracking-tight">
          At present, No content
        </h2>

        <p className="text-slate-500 mt-2 text-xs md:text-sm max-w-xs mx-auto">
          There are no active notices or announcements at this moment. Please check back later.
        </p>

        <div className="mt-6 flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 bg-amber-50 px-4 py-2">
          <Clock className="w-3 h-3" /> Updated: April 2026
        </div>

      </div>

    </div>
  );
};

export default NoticeBoard;