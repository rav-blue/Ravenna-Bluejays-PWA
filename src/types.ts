export interface PortalItem {
  id: string;
  title: string;
  category: 'daily' | 'campus' | 'parent' | 'staff' | 'phone' | 'sports';
  description: string;
  iconType: 'menu' | 'ic' | 'ic-student' | 'ic-guardian' | 'psa' | 'elementary-staff' | 'hs-staff' | 'elementary-phone' | 'hs-phone' | 'athletics-hudl' | 'calendar' | 'bus';
  actionUrl?: string;
  isModal?: boolean;
  modalType?: 'menu' | 'campus' | 'parent' | 'staff' | 'phone' | 'athletics';
  badge?: string;
  featured?: boolean;
}

export interface StaffMember {
  id: string;
  name: string;
  title: string;
  school: 'Elementary' | 'High School' | 'District';
  email: string;
  phone: string;
  room?: string;
  photoUrl?: string;
}

export interface MenuItem {
  day: string;
  date: string;
  breakfast: string;
  lunchMain: string;
  lunchSide: string;
  dessert?: string;
  milk: string;
}

export interface AthleticsGame {
  id: string;
  sport: 'Football' | 'Basketball' | 'Volleyball';
  opponent: string;
  date: string;
  time: string;
  homeOrAway: 'Home' | 'Away';
  hudlStreamUrl: string;
  isLiveNow?: boolean;
}

export interface AnnouncementPSA {
  id: string;
  title: string;
  date: string;
  content: string;
  audience: 'Parents' | 'Students' | 'All';
  urgent?: boolean;
}
