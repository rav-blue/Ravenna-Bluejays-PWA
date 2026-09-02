import React from 'react';
import { ANNOUNCEMENTS_PSA_DATA } from '../data/portalData';
import { SideMegaphoneIcon } from './CustomIcons';
import { X, Bell, FileText, ExternalLink, ShieldAlert } from 'lucide-react';

interface ParentResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ParentResourcesModal: React.FC<ParentResourcesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        id="parent-resources-modal-content"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-rose-600 to-pink-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-2xl text-white">
              <SideMegaphoneIcon size={32} color="#ffffff" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">Parent Resources & PSAs</h2>
              <p className="text-xs sm:text-sm text-rose-100 font-medium">Public Announcements & District Handbooks</p>
            </div>
          </div>
          <button
            id="close-parent-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors text-white cursor-pointer"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Important Public Announcements Section */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-rose-900 font-bold text-base">
              <SideMegaphoneIcon size={20} className="text-rose-600" />
              <span>Public Service Announcements (PSAs)</span>
            </div>

            <div className="space-y-3">
              {ANNOUNCEMENTS_PSA_DATA.map((psa) => (
                <div
                  key={psa.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    psa.urgent
                      ? 'bg-rose-50/70 border-rose-300 text-rose-950'
                      : 'bg-slate-50 border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-extrabold flex items-center gap-1.5">
                      {psa.urgent && <ShieldAlert size={16} className="text-rose-600 animate-pulse" />}
                      {psa.title}
                    </h4>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                      {psa.date}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">{psa.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* District Handbooks & Downloads */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <FileText size={18} className="text-rose-600" />
              <span>Parent Links & Handbooks</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://www.ravennabluejays.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-white border border-slate-200 hover:border-rose-400 rounded-xl flex items-center justify-between text-xs font-bold text-slate-800 hover:text-rose-700 transition-all shadow-2xs"
              >
                <span>Student & Family Handbook</span>
                <ExternalLink size={14} className="text-slate-400" />
              </a>

              <a
                href="https://www.ravennabluejays.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-white border border-slate-200 hover:border-rose-400 rounded-xl flex items-center justify-between text-xs font-bold text-slate-800 hover:text-rose-700 transition-all shadow-2xs"
              >
                <span>Bullying Prevention & Safety</span>
                <ExternalLink size={14} className="text-slate-400" />
              </a>

              <a
                href="https://www.ravennabluejays.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-white border border-slate-200 hover:border-rose-400 rounded-xl flex items-center justify-between text-xs font-bold text-slate-800 hover:text-rose-700 transition-all shadow-2xs"
              >
                <span>Health & Vaccination Forms</span>
                <ExternalLink size={14} className="text-slate-400" />
              </a>

              <a
                href="https://www.ravennabluejays.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-white border border-slate-200 hover:border-rose-400 rounded-xl flex items-center justify-between text-xs font-bold text-slate-800 hover:text-rose-700 transition-all shadow-2xs"
              >
                <span>Bus Routes & Transportation</span>
                <ExternalLink size={14} className="text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            id="close-parent-bottom-btn"
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
