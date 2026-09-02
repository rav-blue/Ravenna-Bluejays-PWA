import React from 'react';
import { PortalItem } from '../types';
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
import { ExternalLink, Phone, Users, Calendar } from 'lucide-react';

interface PortalCardProps {
  item: PortalItem;
  onClick: (item: PortalItem) => void;
}

export const PortalCard: React.FC<PortalCardProps> = ({ item, onClick }) => {
  const renderIcon = () => {
    const iconSize = 32;
    switch (item.iconType) {
      case 'menu':
        return <CafeteriaMenuIcon size={iconSize} className="text-amber-500 dark:text-amber-400" />;
      case 'ic':
        return <ICIcon size={iconSize} className="text-blue-600 dark:text-blue-400" />;
      case 'ic-student':
        return <ICStudentIcon size={iconSize} className="text-sky-500 dark:text-sky-400" />;
      case 'ic-guardian':
        return <ICGuardianIcon size={iconSize} className="text-indigo-600 dark:text-indigo-400" />;
      case 'psa':
        return <SideMegaphoneIcon size={iconSize} className="text-rose-500 dark:text-rose-400" />;
      case 'elementary-staff':
        return <KidStickFigureIcon size={iconSize} className="text-emerald-600 dark:text-emerald-400" />;
      case 'hs-staff':
        return <Users size={iconSize} className="text-teal-600 dark:text-teal-400" />;
      case 'elementary-phone':
        return <KidStickFigurePhoneIcon size={iconSize} className="text-emerald-500 dark:text-emerald-400" />;
      case 'hs-phone':
        return <Phone size={iconSize} className="text-blue-500 dark:text-blue-400" />;
      case 'athletics-hudl':
        return <AthleticsTrioIcon size={iconSize} className="text-orange-500 dark:text-orange-400" />;
      case 'calendar':
        return <Calendar size={iconSize} className="text-violet-500 dark:text-violet-400" />;
      default:
        return <ICIcon size={iconSize} className="text-blue-600" />;
    }
  };

  const getCategoryColor = () => {
    switch (item.category) {
      case 'daily':
        return 'border-amber-200 bg-amber-50/50 hover:border-amber-400 text-amber-900';
      case 'campus':
        return 'border-blue-200 bg-blue-50/50 hover:border-blue-400 text-blue-900';
      case 'parent':
        return 'border-rose-200 bg-rose-50/50 hover:border-rose-400 text-rose-900';
      case 'staff':
        return 'border-emerald-200 bg-emerald-50/50 hover:border-emerald-400 text-emerald-900';
      case 'phone':
        return 'border-sky-200 bg-sky-50/50 hover:border-sky-400 text-sky-900';
      case 'sports':
        return 'border-orange-200 bg-orange-50/50 hover:border-orange-400 text-orange-900';
      default:
        return 'border-slate-200 bg-slate-50 hover:border-slate-300 text-slate-900';
    }
  };

  return (
    <button
      id={`portal-card-${item.id}`}
      onClick={() => onClick(item)}
      className={`group relative flex flex-col justify-between text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer w-full bg-white ${getCategoryColor()}`}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-white shadow-xs border border-slate-100 group-hover:scale-105 transition-transform duration-200 flex items-center justify-center">
            {renderIcon()}
          </div>
          {item.badge && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-900/5 text-slate-800 border border-slate-200">
              {item.badge}
            </span>
          )}
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-900 tracking-tight transition-colors">
          {item.title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-blue-700">
        <span>{item.isModal ? 'Open Interactive Details' : 'Launch Resource'}</span>
        <ExternalLink size={14} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
      </div>
    </button>
  );
};
