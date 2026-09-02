import React, { useState } from 'react';
import { LUNCH_MENU_DATA } from '../data/portalData';
import { CafeteriaMenuIcon } from './CustomIcons';
import { X, Calendar, Utensils, AlertCircle } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const [selectedDay, setSelectedDay] = useState<number>(0);

  if (!isOpen) return null;

  const activeMenu = LUNCH_MENU_DATA[selectedDay] || LUNCH_MENU_DATA[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        id="menu-modal-content"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-2xl text-white">
              <CafeteriaMenuIcon size={32} color="#ffffff" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">Breakfast & Lunch Menu</h2>
              <p className="text-xs sm:text-sm text-amber-100 font-medium">Ravenna Bluejays School Cafeteria</p>
            </div>
          </div>
          <button
            id="close-menu-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors text-white cursor-pointer"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Day Selector Bar */}
        <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex gap-2 overflow-x-auto no-scrollbar">
          {LUNCH_MENU_DATA.map((item, index) => (
            <button
              key={item.day}
              id={`menu-day-btn-${index}`}
              onClick={() => setSelectedDay(index)}
              className={`flex-1 min-w-[90px] py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                selectedDay === index
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <div>{item.day}</div>
              <div className="text-[10px] opacity-80 font-normal">{item.date}</div>
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Active Meal Details Card */}
          <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-3 py-1 rounded-full">
                {activeMenu.day}, {activeMenu.date} Menu
              </span>
              <span className="text-xs font-medium text-amber-700 flex items-center gap-1">
                <Utensils size={14} /> Freshly Prepared
              </span>
            </div>

            <div className="space-y-4">
              {/* Breakfast */}
              <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-xs">
                <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">🌅 Breakfast Served 7:30 - 8:00 AM</h4>
                <p className="text-base font-semibold text-slate-900">{activeMenu.breakfast}</p>
              </div>

              {/* Lunch Main */}
              <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-xs">
                <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">🍽️ Lunch Entrée</h4>
                <p className="text-base font-extrabold text-slate-900">{activeMenu.lunchMain}</p>
                <p className="text-sm text-slate-600 mt-1"><span className="font-semibold text-slate-700">Sides:</span> {activeMenu.lunchSide}</p>
                {activeMenu.dessert && (
                  <p className="text-xs font-medium text-amber-800 mt-2 bg-amber-100/50 inline-block px-2.5 py-1 rounded-md">
                    🍰 Dessert: {activeMenu.dessert}
                  </p>
                )}
              </div>

              {/* Beverage */}
              <div className="text-xs text-slate-600 flex items-center gap-2 px-1">
                <span className="font-semibold text-slate-800">🥛 Milk Included:</span> {activeMenu.milk}
              </div>
            </div>
          </div>

          {/* Pricing & Info Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <span className="font-bold text-slate-900 block mb-0.5">Meal Pricing (2026-2027)</span>
              <span className="text-slate-600">Student Lunch: $2.85 | Elem Breakfast: $1.75 | Adult: $4.50</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs flex items-center gap-2">
              <AlertCircle size={18} className="text-amber-600 flex-shrink-0" />
              <span className="text-slate-600">Free & Reduced Meal applications are accessible on Infinite Campus.</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            id="close-menu-bottom-btn"
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close Menu
          </button>
        </div>
      </div>
    </div>
  );
};
