import React, { useState } from 'react';
import { PORTAL_ITEMS } from './data/portalData';
import { PortalItem } from './types';
import { Header } from './components/Header';
import { PortalCard } from './components/PortalCard';
import { MenuModal } from './components/MenuModal';
import { InfiniteCampusModal } from './components/InfiniteCampusModal';
import { ParentResourcesModal } from './components/ParentResourcesModal';
import { StaffDirectoryModal } from './components/StaffDirectoryModal';
import { CallUsModal } from './components/CallUsModal';
import { AthleticsModal } from './components/AthleticsModal';
import {
  CafeteriaMenuIcon,
  ICIcon,
  ICStudentIcon,
  ICGuardianIcon,
  SideMegaphoneIcon,
  KidStickFigureIcon,
  KidStickFigurePhoneIcon,
  AthleticsTrioIcon,
} from './components/CustomIcons';
import { Info, ExternalLink, Bookmark, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Modal States
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Filter Portal Items
  const filteredItems = PORTAL_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.badge && item.badge.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCardClick = (item: PortalItem) => {
    if (item.isModal && item.modalType) {
      setActiveModal(item.modalType);
    } else if (item.actionUrl) {
      window.open(item.actionUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col antialiased selection:bg-blue-200">
      {/* Top Header Navigation */}
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        {/* Key Quick Launch Bar */}
        <section id="quick-icon-bar" className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <Bookmark size={14} className="text-blue-600" />
              <span>Ravenna Bluejays Quick Portal Shortcuts</span>
            </h2>
            <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">Tap any icon to open details</span>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2.5 sm:gap-3">
            {/* 1. Menu Icon Shortcut */}
            <button
              onClick={() => setActiveModal('menu')}
              className="p-3 rounded-2xl bg-amber-50 hover:bg-amber-100/80 border border-amber-200 flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02] cursor-pointer"
            >
              <CafeteriaMenuIcon size={28} className="text-amber-600 mb-1" />
              <span className="text-xs font-bold text-amber-950">Cafeteria Menu</span>
              <span className="text-[10px] text-amber-700 font-medium">Cafeteria Tray</span>
            </button>

            {/* 2. Infinite Campus - Main IC */}
            <button
              onClick={() => setActiveModal('campus')}
              className="p-3 rounded-2xl bg-lime-50 hover:bg-lime-100/80 border border-lime-200 flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02] cursor-pointer"
            >
              <ICIcon size={28} className="text-lime-700 mb-1" />
              <span className="text-xs font-bold text-lime-950">Infinite Campus</span>
              <span className="text-[10px] text-lime-700 font-medium">Letters IC</span>
            </button>

            {/* 3. IC - Student */}
            <button
              onClick={() => setActiveModal('campus')}
              className="p-3 rounded-2xl bg-sky-50 hover:bg-sky-100/80 border border-sky-200 flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02] cursor-pointer"
            >
              <ICStudentIcon size={28} className="text-sky-600 mb-1" />
              <span className="text-xs font-bold text-sky-950">IC - Student</span>
              <span className="text-[10px] text-sky-700 font-medium">Smaller Kid</span>
            </button>

            {/* 4. IC - Guardian */}
            <button
              onClick={() => setActiveModal('campus')}
              className="p-3 rounded-2xl bg-indigo-50 hover:bg-indigo-100/80 border border-indigo-200 flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02] cursor-pointer"
            >
              <ICGuardianIcon size={28} className="text-indigo-700 mb-1" />
              <span className="text-xs font-bold text-indigo-950">IC - Guardian</span>
              <span className="text-[10px] text-indigo-700 font-medium">Male & Female</span>
            </button>

            {/* 5. Parent Resources / PSA */}
            <button
              onClick={() => setActiveModal('parent')}
              className="p-3 rounded-2xl bg-rose-50 hover:bg-rose-100/80 border border-rose-200 flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02] cursor-pointer"
            >
              <SideMegaphoneIcon size={28} className="text-rose-600 mb-1" />
              <span className="text-xs font-bold text-rose-950">Parent / PSA</span>
              <span className="text-[10px] text-rose-700 font-medium">Side Megaphone</span>
            </button>

            {/* 6. Elementary Staff / Phone Kid Stick Figure */}
            <button
              onClick={() => setActiveModal('staff')}
              className="p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02] cursor-pointer"
            >
              <KidStickFigureIcon size={28} className="text-emerald-600 mb-1" />
              <span className="text-xs font-bold text-emerald-950">Elem Staff</span>
              <span className="text-[10px] text-emerald-700 font-medium">Kid Stick Figure</span>
            </button>

            {/* 7. Hudl - Athletics ONLY */}
            <button
              onClick={() => setActiveModal('athletics')}
              className="p-3 rounded-2xl bg-orange-50 hover:bg-orange-100/80 border border-orange-200 flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02] cursor-pointer"
            >
              <AthleticsTrioIcon size={28} className="text-orange-600 mb-1" />
              <span className="text-xs font-bold text-orange-950">Hudl Athletics</span>
              <span className="text-[10px] text-orange-700 font-medium">Football, BBall, VBall</span>
            </button>
          </div>
        </section>

        {/* Portal Links Grid */}
        <section id="portal-links-grid" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black tracking-tight text-slate-900">
              {activeCategory === 'all'
                ? 'All School Resources'
                : activeCategory.toUpperCase() + ' Links'}
            </h2>
            <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
              {filteredItems.length} {filteredItems.length === 1 ? 'Resource' : 'Resources'}
            </span>
          </div>

          {filteredItems.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 space-y-2">
              <p className="text-base font-bold text-slate-800">No resources matched "{searchTerm}"</p>
              <p className="text-xs text-slate-500">Try clearing your search term or switching categories.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="mt-2 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <PortalCard key={item.id} item={item} onClick={handleCardClick} />
              ))}
            </div>
          )}
        </section>

        {/* District Motto & Website Banner */}
        <section id="district-motto-section" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs text-center space-y-2">
          <p className="text-sm sm:text-base font-extrabold text-slate-800 tracking-wide">
            Preparing Students Today to Succeed Tomorrow: FAMILY - COMMUNITY - SCHOOL
          </p>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            You can find additional information on our website -{' '}
            <a
              href="https://www.ravennabluejays.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-bold underline underline-offset-2 transition-colors inline-flex items-center gap-1"
            >
              ravennabluejays.org
              <ExternalLink size={14} className="inline ml-0.5" />
            </a>
          </p>
        </section>

        {/* School Info Footer Banner */}
        <section id="district-info-banner" className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-xs font-bold">
              <ShieldCheck size={14} /> Official District Portal
            </div>
            <h3 className="text-xl font-black text-white">Ravenna Public Schools District #0069</h3>
            <p className="text-xs text-slate-400 max-w-xl">
              Providing progressive education and community connection for Bluejays students, parents, and staff in Ravenna, Nebraska.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-center">
            <button
              onClick={() => setActiveModal('phone')}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <KidStickFigurePhoneIcon size={20} color="#ffffff" />
              <span>Call Elementary</span>
            </button>
            <button
              onClick={() => setActiveModal('campus')}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <ICIcon size={20} color="#ffffff" />
              <span>Infinite Campus</span>
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-6 text-center text-xs">
        <p>© {new Date().getFullYear()} Ravenna Public Schools • Bluejays School Portal</p>
      </footer>

      {/* Interactive Modals */}
      <MenuModal isOpen={activeModal === 'menu'} onClose={() => setActiveModal(null)} />
      <InfiniteCampusModal isOpen={activeModal === 'campus'} onClose={() => setActiveModal(null)} />
      <ParentResourcesModal isOpen={activeModal === 'parent'} onClose={() => setActiveModal(null)} />
      <StaffDirectoryModal isOpen={activeModal === 'staff'} onClose={() => setActiveModal(null)} />
      <CallUsModal isOpen={activeModal === 'phone'} onClose={() => setActiveModal(null)} />
      <AthleticsModal isOpen={activeModal === 'athletics'} onClose={() => setActiveModal(null)} />
    </div>
  );
}
