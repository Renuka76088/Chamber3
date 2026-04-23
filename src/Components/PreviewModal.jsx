import React from 'react';
import { X, CheckCircle2, ChevronRight } from 'lucide-react';

const PreviewModal = ({ isOpen, onClose, data, fields, onConfirm, loading, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="bg-slate-900 text-white px-8 py-6 flex justify-between items-center border-b-4 border-amber-500">
          <div>
            <h3 className="text-xl font-black uppercase tracking-tighter">Review Information</h3>
            <p className="text-slate-400 text-[10px] tracking-widest mt-1">{title || 'Please verify your details before final submission'}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 transition-colors rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-slate-50/50">
          <div className="space-y-4">
            {fields.map((field, idx) => (
              <div key={idx} className="bg-white p-4 border border-slate-100 shadow-sm flex flex-col gap-1">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{field.label}</span>
                <span className="text-slate-900 font-bold">
                  {data[field.key] || <span className="text-slate-300 italic">Not Provided</span>}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 bg-white border-t border-slate-100 flex flex-col md:flex-row gap-4">
          <button
            onClick={onClose}
            className="flex-1 border-2 border-slate-900 py-4 font-black uppercase text-xs tracking-widest hover:bg-slate-50 transition-all text-slate-900"
          >
            Edit Details
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-[2] bg-amber-600 text-white py-4 font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-amber-500 shadow-xl transition-all disabled:opacity-70"
          >
            {loading ? (
              <div className="h-4 w-4 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
            ) : (
              <CheckCircle2 size={16} />
            )}
            Confirm & Submit
          </button>
        </div>

        {/* Background Decoration */}
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default PreviewModal;
