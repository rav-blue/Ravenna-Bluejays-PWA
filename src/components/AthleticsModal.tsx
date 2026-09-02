import React from 'react';
import { ATHLETICS_GAMES_DATA } from '../data/portalData';
import { AthleticsTrioIcon } from './CustomIcons';
import { X, ExternalLink, Video, Calendar, Trophy, Radio } from 'lucide-react';

interface AthleticsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AthleticsModal: React.FC<AthleticsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const mainHudlUrl = "https://fan.hudl.com/usa/ne/ravenna/organization/16724/ravenna-high-school/schedule";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        id="athletics-modal-content"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-orange-600 to-amber-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-2xl text-white">
              <AthleticsTrioIcon size={34} color="#ffffff" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">Hudl - Athletics ONLY</h2>
              <p className="text-xs sm:text-sm text-orange-100 font-medium">Football, Basketball & Volleyball Streaming</p>
            </div>
          </div>
          <button
            id="close-athletics-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors text-white cursor-pointer"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Main Hudl Banner */}
          <div className="p-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl border border-slate-700 shadow-md">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <Radio className="text-orange-500 animate-pulse" size={20} />
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Official Bluejays Broadcast Hub</span>
              </div>
              <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 bg-orange-500/20 text-orange-300 border border-orange-500/30 rounded-full">
                Hudl Fan Channel
              </span>
            </div>

            <h3 className="text-lg font-black text-white">Ravenna Bluejays Hudl Live Streams</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Watch home and away coverage for Varsity & JV Football, Basketball, and Volleyball games.
            </p>

            <a
              href={mainHudlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-extrabold transition-all shadow-xs cursor-pointer w-full sm:w-auto"
            >
              <Video size={16} />
              <span>Launch Hudl Bluejays Channel</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Sports Categories Supported */}
          <div>
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <AthleticsTrioIcon size={20} className="text-orange-600" />
              <span>Covered Sports (Football, Basketball & Volleyball)</span>
            </h4>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="p-3 bg-orange-50/70 border border-orange-200 rounded-xl">
                <span className="block text-xl mb-1">🏈</span>
                <span className="text-xs font-bold text-slate-900">Football</span>
                <span className="block text-[10px] text-slate-500">Varsity & JV</span>
              </div>
              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl">
                <span className="block text-xl mb-1">🏀</span>
                <span className="text-xs font-bold text-slate-900">Basketball</span>
                <span className="block text-[10px] text-slate-500">Boys & Girls</span>
              </div>
              <div className="p-3 bg-rose-50/70 border border-rose-200 rounded-xl">
                <span className="block text-xl mb-1">🏐</span>
                <span className="text-xs font-bold text-slate-900">Volleyball</span>
                <span className="block text-[10px] text-slate-500">Varsity & JV</span>
              </div>
            </div>
          </div>

          {/* Upcoming Streams Schedule */}
          <div>
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <Calendar size={16} className="text-orange-600" />
              <span>Upcoming Streamed Games</span>
            </h4>

            <div className="space-y-2.5">
              {ATHLETICS_GAMES_DATA.map((game) => (
                <div
                  key={game.id}
                  className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg border border-slate-200 text-slate-800 font-bold">
                      {game.sport === 'Football' ? '🏈' : game.sport === 'Basketball' ? '🏀' : '🏐'}
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 text-sm">
                        vs. {game.opponent} ({game.homeOrAway})
                      </div>
                      <div className="text-slate-500 text-[11px]">
                        {game.date} • {game.time}
                      </div>
                    </div>
                  </div>

                  <a
                    href={game.hudlStreamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-slate-900 hover:bg-orange-600 text-white rounded-lg font-bold text-[11px] flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Watch Stream</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            id="close-athletics-bottom-btn"
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
