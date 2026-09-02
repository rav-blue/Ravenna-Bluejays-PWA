import React, { useState } from 'react';
import { STAFF_DIRECTORY_DATA } from '../data/portalData';
import { KidStickFigureIcon } from './CustomIcons';
import { X, Search, Mail, Phone, Building2, Copy, Check } from 'lucide-react';

interface StaffDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSchoolFilter?: 'All' | 'Elementary' | 'High School' | 'District';
}

export const StaffDirectoryModal: React.FC<StaffDirectoryModalProps> = ({
  isOpen,
  onClose,
  defaultSchoolFilter = 'All',
}) => {
  const [activeSchool, setActiveSchool] = useState<'All' | 'Elementary' | 'High School' | 'District'>(defaultSchoolFilter);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredStaff = STAFF_DIRECTORY_DATA.filter((staff) => {
    const matchesSchool = activeSchool === 'All' || staff.school === activeSchool;
    const matchesSearch =
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSchool && matchesSearch;
  });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        id="staff-directory-modal-content"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-2xl text-white">
              <KidStickFigureIcon size={34} color="#ffffff" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">Staff Directory</h2>
              <p className="text-xs sm:text-sm text-emerald-100 font-medium">Ravenna Elementary & High School Educators</p>
            </div>
          </div>
          <button
            id="close-staff-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors text-white cursor-pointer"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filter and Search Toolbar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 space-y-3">
          <div className="relative">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="staff-search-input"
              type="text"
              placeholder="Search staff by name, title, or grade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 focus:border-emerald-500 rounded-xl text-sm outline-none text-slate-900 placeholder:text-slate-400"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {(['All', 'Elementary', 'High School', 'District'] as const).map((school) => (
              <button
                key={school}
                id={`school-filter-btn-${school}`}
                onClick={() => setActiveSchool(school)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeSchool === school
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {school === 'Elementary' && <KidStickFigureIcon size={16} />}
                <span>{school}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Staff Directory List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3">
          {filteredStaff.length === 0 ? (
            <div className="text-center py-10 text-slate-500 text-sm">
              No staff members found matching "{searchTerm}".
            </div>
          ) : (
            filteredStaff.map((staff) => (
              <div
                key={staff.id}
                className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs"
              >
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-emerald-50 rounded-xl text-emerald-700 border border-emerald-100 flex-shrink-0">
                    {staff.school === 'Elementary' ? (
                      <KidStickFigureIcon size={26} />
                    ) : (
                      <Building2 size={24} />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base font-bold text-slate-900">{staff.name}</h4>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                        staff.school === 'Elementary' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-800'
                      }`}>
                        {staff.school}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-600 mt-0.5">{staff.title}</p>
                    {staff.room && (
                      <p className="text-[11px] text-slate-400 mt-0.5">Location: {staff.room}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100 w-full sm:w-auto justify-end">
                  <a
                    href={`mailto:${staff.email}`}
                    className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    title="Send Email"
                  >
                    <Mail size={14} />
                    <span className="hidden sm:inline">Email</span>
                  </a>

                  <button
                    onClick={() => handleCopy(staff.phone, staff.id)}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Copy Phone/Ext"
                  >
                    {copiedId === staff.id ? <Check size={14} className="text-emerald-600" /> : <Phone size={14} />}
                    <span className="text-[11px]">{copiedId === staff.id ? 'Copied!' : staff.phone}</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            id="close-staff-bottom-btn"
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close Directory
          </button>
        </div>
      </div>
    </div>
  );
};
