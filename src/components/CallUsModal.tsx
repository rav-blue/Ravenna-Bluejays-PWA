import React from 'react';
import { KidStickFigurePhoneIcon } from './CustomIcons';
import { X, Phone, Building2, MapPin, Clock } from 'lucide-react';

interface CallUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallUsModal: React.FC<CallUsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        id="call-us-modal-content"
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-sky-600 to-blue-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-2xl text-white">
              <KidStickFigurePhoneIcon size={34} color="#ffffff" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">Call Us & Contact</h2>
              <p className="text-xs sm:text-sm text-sky-100 font-medium">Ravenna Public Schools Direct Lines</p>
            </div>
          </div>
          <button
            id="close-call-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors text-white cursor-pointer"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {/* Elementary Phone Card (Featuring Kid Stick Figure Phone Icon) */}
          <div className="p-4 bg-emerald-50/70 border-2 border-emerald-200 rounded-2xl flex items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3.5">
              <div className="p-3 bg-white rounded-xl shadow-xs border border-emerald-200">
                <KidStickFigurePhoneIcon size={32} className="text-emerald-600" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-emerald-200 text-emerald-800 rounded-md">
                  Elementary School
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">Elementary Office Phone</h3>
                <p className="text-xs text-slate-600">Principal & Elementary Attendance</p>
              </div>
            </div>
            <a
              href="tel:3084523202"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              <Phone size={14} />
              <span>(308) 452-3202</span>
            </a>
          </div>

          {/* High School Phone Card */}
          <div className="p-4 bg-sky-50/70 border-2 border-sky-200 rounded-2xl flex items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3.5">
              <div className="p-3 bg-white rounded-xl shadow-xs border border-sky-200">
                <Building2 size={28} className="text-sky-600" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-sky-200 text-sky-800 rounded-md">
                  High School & MS
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">High School Office</h3>
                <p className="text-xs text-slate-600">Secondary Office & Athletics</p>
              </div>
            </div>
            <a
              href="tel:3084523249"
              className="px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              <Phone size={14} />
              <span>(308) 452-3249</span>
            </a>
          </div>

          {/* District Office Phone Card */}
          <div className="p-4 bg-indigo-50/70 border-2 border-indigo-200 rounded-2xl flex items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3.5">
              <div className="p-3 bg-white rounded-xl shadow-xs border border-indigo-200">
                <Building2 size={28} className="text-indigo-600" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-indigo-200 text-indigo-800 rounded-md">
                  District Admin
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">Superintendent Office</h3>
                <p className="text-xs text-slate-600">District Administration & Tech</p>
              </div>
            </div>
            <a
              href="tel:3084523249"
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              <Phone size={14} />
              <span>(308) 452-3249</span>
            </a>
          </div>

          {/* Office Hours & Address */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-700">
            <div className="flex items-center gap-2 font-medium">
              <Clock size={16} className="text-slate-500" />
              <span>Office Hours: Monday - Friday, 7:30 AM - 4:00 PM</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <MapPin size={16} className="text-slate-500" />
              <span>Ravenna Public Schools, 417 S Seneca St, Ravenna, NE 68869</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            id="close-call-bottom-btn"
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
