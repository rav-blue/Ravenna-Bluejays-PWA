import React from 'react';
import { Search, Sparkles, Phone, ShieldCheck, Bookmark, School } from 'lucide-react';
import {
  CafeteriaMenuIcon,
  ICIcon,
  ICStudentIcon,
  ICGuardianIcon,
  SideMegaphoneIcon,
  KidStickFigureIcon,
  KidStickFigurePhoneIcon,
  AthleticsTrioIcon,
} from './CustomIcons';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}) => {
  const categories = [
    { id: 'all', label: 'All Links', icon: null },
    { id: 'daily', label: 'Menu', icon: <CafeteriaMenuIcon size={16} /> },
    { id: 'campus', label: 'Infinite Campus', icon: <ICIcon size={16} /> },
    { id: 'parent', label: 'Parents / PSA', icon: <SideMegaphoneIcon size={16} /> },
    { id: 'staff', label: 'Staff Directory', icon: <KidStickFigureIcon size={16} /> },
    { id: 'phone', label: 'Call Us', icon: <KidStickFigurePhoneIcon size={16} /> },
    { id: 'sports', label: 'Athletics / Hudl', icon: <AthleticsTrioIcon size={16} /> },
  ];

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        {/* Top Branding Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="flex items-center justify-center flex-shrink-0">
              <img
                src="/logo.png"
                alt="Ravenna Public Schools Podium Block R Logo"
                className="h-12 sm:h-14 w-12 sm:w-14 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/Podium%20Block%20R%20(Royal%20Blue).png';
                }}
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Ravenna Public Schools
                </span>
                <span className="text-[10px] text-slate-400 font-medium">NE District #0069</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5">
                Ravenna Bluejays Portal
              </h1>
            </div>
          </div>

          {/* Quick Direct Actions */}
          <div className="flex items-center gap-2 self-start sm:self-center">
            <a
              href="tel:3084523202"
              className="px-3.5 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
              title="Call Elementary Office"
            >
              <KidStickFigurePhoneIcon size={18} />
              <span className="hidden xs:inline">Elem Call</span>
            </a>

            <a
              href="https://nebraska.infinitecampus.org/campus/portal/ravenna.jsp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              <ICIcon size={18} color="#ffffff" />
              <span>Campus Portal</span>
            </a>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-4 sm:mt-5 relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            id="portal-search-bar"
            type="text"
            placeholder="Search school links, menus, Infinite Campus, staff, phone numbers..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-800/90 border border-slate-700/80 focus:border-blue-500 rounded-2xl text-sm text-white placeholder:text-slate-400 outline-none transition-all shadow-inner"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-white px-2 py-1 bg-slate-700 rounded-md"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills Bar */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`cat-filter-${cat.id}`}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/60'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
