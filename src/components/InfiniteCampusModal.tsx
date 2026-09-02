import React from 'react';
import { ICIcon, ICStudentIcon, ICGuardianIcon } from './CustomIcons';
import { X, ExternalLink, ShieldCheck, User, Users } from 'lucide-react';

interface InfiniteCampusModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'main' | 'student' | 'guardian';
}

export const InfiniteCampusModal: React.FC<InfiniteCampusModalProps> = ({ isOpen, onClose, defaultTab = 'main' }) => {
  if (!isOpen) return null;

  const campusUrl = "https://nebraska.infinitecampus.org/campus/portal/ravenna.jsp";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        id="infinite-campus-modal-content"
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-2xl text-white">
              <ICIcon size={36} color="#ffffff" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">Infinite Campus</h2>
              <p className="text-xs sm:text-sm text-blue-200 font-medium">Ravenna School District Portal</p>
            </div>
          </div>
          <button
            id="close-ic-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors text-white cursor-pointer"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Choose your portal destination below to log in to Infinite Campus for grades, schedules, attendance, and student records.
          </p>

          {/* Option 1: IC Main Portal */}
          <a
            href={campusUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 bg-slate-50 hover:bg-blue-50/70 border-2 border-slate-200 hover:border-blue-400 rounded-2xl transition-all shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-3 bg-white rounded-xl shadow-xs border border-slate-200 group-hover:border-blue-300">
                <ICIcon size={28} className="text-blue-700" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900">Infinite Campus Main Portal</h3>
                <p className="text-xs text-slate-500">General District Login Portal</p>
              </div>
            </div>
            <ExternalLink size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
          </a>

          {/* Option 2: IC Student Portal (Smaller Kid Icon) */}
          <a
            href={campusUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 bg-sky-50/50 hover:bg-sky-100/70 border-2 border-sky-200 hover:border-sky-400 rounded-2xl transition-all shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-3 bg-white rounded-xl shadow-xs border border-sky-200 group-hover:border-sky-300">
                <ICStudentIcon size={30} className="text-sky-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-900">IC - Student Portal</h3>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-sky-200 text-sky-800 rounded-md">Student</span>
                </div>
                <p className="text-xs text-slate-600">Access student assignments, report cards, & class schedule</p>
              </div>
            </div>
            <ExternalLink size={18} className="text-sky-500 group-hover:text-sky-700 transition-colors" />
          </a>

          {/* Option 3: IC Guardian Portal (Male & Female Guardian Icon) */}
          <a
            href={campusUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 bg-indigo-50/50 hover:bg-indigo-100/70 border-2 border-indigo-200 hover:border-indigo-400 rounded-2xl transition-all shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-3 bg-white rounded-xl shadow-xs border border-indigo-200 group-hover:border-indigo-300">
                <ICGuardianIcon size={30} className="text-indigo-700" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-900">IC - Guardian Portal</h3>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-indigo-200 text-indigo-800 rounded-md">Parent / Guardian</span>
                </div>
                <p className="text-xs text-slate-600">Parent access for attendance, meal payments, & school notices</p>
              </div>
            </div>
            <ExternalLink size={18} className="text-indigo-500 group-hover:text-indigo-700 transition-colors" />
          </a>

          {/* Additional Info */}
          <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
            <ShieldCheck size={18} className="text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Need IC Login Assistance?</span> Contact Ravenna Public Schools Technology Office at (308) 452-3249 for account reset.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            id="close-ic-bottom-btn"
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
