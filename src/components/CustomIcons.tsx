import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  color?: string;
}

/**
 * Menu Icon: Classic school cafeteria lunch compartment tray
 * with divided sections for entrée, sides, drink, and utensils.
 */
export const CafeteriaMenuIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Outer Cafeteria Tray Rim with Rounded Edge */}
      <rect x="2" y="3.5" width="20" height="17" rx="2.75" fill="currentColor" fillOpacity="0.08" strokeWidth="1.75" />
      {/* Top Left: Drink / Milk Carton Compartment */}
      <rect x="3.75" y="5.25" width="4.5" height="4.5" rx="0.75" fill="currentColor" fillOpacity="0.18" strokeWidth="1.2" />
      {/* Top Middle: Vegetable / Side Dish Compartment */}
      <rect x="9.25" y="5.25" width="4.5" height="4.5" rx="0.75" fill="currentColor" fillOpacity="0.18" strokeWidth="1.2" />
      {/* Top Right: Fruit / Dessert Compartment */}
      <rect x="14.75" y="5.25" width="5.5" height="4.5" rx="0.75" fill="currentColor" fillOpacity="0.18" strokeWidth="1.2" />
      {/* Bottom Left & Middle: Large Main Entrée Compartment */}
      <rect x="3.75" y="10.75" width="11.25" height="7.75" rx="1.2" fill="currentColor" fillOpacity="0.18" strokeWidth="1.2" />
      {/* Bottom Right: Utensil Slot */}
      <rect x="16" y="10.75" width="4.25" height="7.75" rx="0.75" fill="currentColor" fillOpacity="0.18" strokeWidth="1.2" />
      {/* Fork silhouette in utensil slot */}
      <path d="M17.3 12.2v2.2m-.6-2.2v1.4m1.2-1.4v1.4m-.6 2.2v2.6" strokeWidth="0.85" />
      {/* Spoon silhouette in utensil slot */}
      <ellipse cx="19.1" cy="13.2" rx="0.55" ry="0.9" fill="currentColor" strokeWidth="0.75" />
      <path d="M19.1 14.1v2.7" strokeWidth="0.85" />
    </svg>
  );
};
export const CafeteriaTrayIcon = CafeteriaMenuIcon;

/**
 * Infinite Campus Icon: Strictly just the bold letters IC as requested
 */
export const ICIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Letter I */}
      <path d="M5 5h4M7 5v14M5 19h4" />
      {/* Letter C */}
      <path d="M19 7a5 5 0 0 0-7 0v10a5 5 0 0 0 7 0" />
    </svg>
  );
};
export const InfiniteCampusLogoIcon = ICIcon;

/**
 * Infinite Campus - Student Icon: A smaller kid figure with an IC badge backpack
 */
export const ICStudentIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Kid Head (smaller height) */}
      <circle cx="12" cy="6.5" r="2.8" />
      {/* Small body */}
      <path d="M12 9.3v6.2" />
      {/* Arms out in cheerful stance */}
      <path d="M8.5 12.5l3.5-1.5 3.5 1.5" />
      {/* Shorter legs */}
      <path d="M9.5 20.5l2.5-5 2.5 5" />
      {/* Small backpack on side */}
      <rect x="14.5" y="10" width="2.5" height="4.5" rx="1" fill="currentColor" fillOpacity="0.3" strokeWidth="1.2" />
    </svg>
  );
};

/**
 * Infinite Campus - Guardian Icon: Male and Female adult figures side-by-side
 */
export const ICGuardianIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Male Guardian (Left) */}
      <circle cx="7.5" cy="5" r="2.2" />
      <path d="M4 11.5c0-1.8 1.4-3 3.5-3s3.5 1.2 3.5 3v5.5H9.2v4.5H5.8v-4.5H4v-5.5z" />

      {/* Female Guardian (Right) */}
      <circle cx="16.5" cy="5" r="2.2" />
      {/* Dress silhouette */}
      <path d="M13.5 11.5c0-1.8 1.2-3 3-3s3 1.2 3 3l1 5.5h-8l1-5.5z" />
      <path d="M15 17v4.5m3-4.5v4.5" />
    </svg>
  );
};

/**
 * Parent Resources / PSA Icon: Megaphone looking from the side profile (pointing right)
 */
export const SideMegaphoneIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Rear Mouthpiece */}
      <path d="M3 9.5h2v5H3z" fill="currentColor" fillOpacity="0.2" />
      {/* Megaphone Cone Body pointing side right */}
      <path d="M5 9.5L14 5v14L5 14.5V9.5z" />
      {/* Handle underneath */}
      <path d="M8 13.5V19a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-4.8" />
      {/* Sound Waves emitting out to the right side */}
      <path d="M17 9a4 4 0 0 1 0 6" />
      <path d="M20 7a7 7 0 0 1 0 10" />
    </svg>
  );
};

/**
 * Staff Directory / Elementary Staff Icon: Stick figure from a kid's drawing
 */
export const KidStickFigureIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Hand-drawn style round head */}
      <circle cx="12" cy="6" r="4" strokeWidth="2" />
      {/* Two eyes */}
      <circle cx="10.5" cy="5.2" r="0.5" fill={color} />
      <circle cx="13.5" cy="5.2" r="0.5" fill={color} />
      {/* Big curved smile */}
      <path d="M10.2 7.2a2 2 0 0 0 3.6 0" strokeWidth="1.5" />
      {/* Stick body with slight wiggle */}
      <path d="M12 10v7" />
      {/* Slightly uneven stick arms */}
      <path d="M6 13l6-2 6 2" />
      {/* Stick legs spread out */}
      <path d="M7.5 21l4.5-4 4.5 4" />
    </svg>
  );
};

/**
 * Call Us / Elementary Phone Icon: Kid stick figure drawing holding a phone receiver
 */
export const KidStickFigurePhoneIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Kid stick figure head */}
      <circle cx="10" cy="6" r="3.5" />
      {/* Smile */}
      <path d="M8.5 7a1.5 1.5 0 0 0 3 0" strokeWidth="1.3" />
      {/* Stick body */}
      <path d="M10 9.5v6.5" />
      {/* Left arm waving */}
      <path d="M5 12l5-1" />
      {/* Right arm holding phone receiver up to ear */}
      <path d="M10 11l5-3" />
      {/* Phone receiver in hand next to ear */}
      <path d="M16 5.5a1.5 1.5 0 0 1 2 2l-1 2.5a1 1 0 0 1-1.2.5l-1.8-.6" fill="currentColor" fillOpacity="0.2" />
      {/* Stick legs */}
      <path d="M6.5 21l3.5-5 3.5 5" />
    </svg>
  );
};

/**
 * Hudl - Athletics ONLY Icon: Football, Basketball, & Volleyball trio icon
 */
export const AthleticsTrioIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Football (top left) */}
      <path d="M2 8c0-3.3 2.7-6 6-6 1.5 0 3 1.5 3 3 0 3.3-2.7 6-6 6-1.5 0-3-1.5-3-3z" />
      <line x1="4.5" y1="4.5" x2="7.5" y2="7.5" />
      <line x1="5" y1="7" x2="7" y2="5" />
      {/* Basketball (bottom left) */}
      <circle cx="7" cy="17" r="4" />
      <line x1="3" y1="17" x2="11" y2="17" />
      <line x1="7" y1="13" x2="7" y2="21" />
      {/* Volleyball (right) */}
      <circle cx="17" cy="12" r="4.5" />
      <line x1="12.5" y1="12" x2="21.5" y2="12" />
      <path d="M14.5 9.5c2 1.5 2 3.5 0 5" />
      <path d="M19.5 9.5c-2 1.5-2 3.5 0 5" />
    </svg>
  );
};
export const HudlIcon = AthleticsTrioIcon;
export const HudlAthleticsIcon = AthleticsTrioIcon;

