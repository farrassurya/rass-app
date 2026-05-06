import React from 'react';

function IconBase({ children, size = 24, className = '', strokeWidth = 1.9, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function Menu(props) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

export function Search(props) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-3.5-3.5" />
    </IconBase>
  );
}

export function Bell(props) {
  return (
    <IconBase {...props}>
      <path d="M15 17H5l1.3-1.3A3 3 0 0 0 7 13.6V11a5 5 0 0 1 10 0v2.6a3 3 0 0 0 .7 2.1L19 17h-4" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </IconBase>
  );
}

export function Settings2(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.9 4.9l1.4 1.4" />
      <path d="M17.7 17.7l1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.9 19.1l1.4-1.4" />
      <path d="M17.7 6.3l1.4-1.4" />
    </IconBase>
  );
}

export function Sparkles(props) {
  return (
    <IconBase {...props}>
      <path d="M12 3l1.6 4.2L18 9l-4.4 1.8L12 15l-1.6-4.2L6 9l4.4-1.8L12 3Z" />
      <path d="M19 13l.8 2.2L22 16l-2.2.8L19 19l-.8-2.2L16 16l2.2-.8L19 13Z" />
      <path d="M5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" />
    </IconBase>
  );
}

export function Wrench(props) {
  return (
    <IconBase {...props}>
      <path d="M14.7 6.3a4.8 4.8 0 0 0-6.8 6.8l-5.3 5.3 3 3 5.3-5.3a4.8 4.8 0 0 0 6.8-6.8l-3.2 3.2-2.2-.2-.2-2.2 3.2-3.2Z" />
    </IconBase>
  );
}

export function ChevronDown(props) {
  return (
    <IconBase {...props}>
      <path d="m6 9 6 6 6-6" />
    </IconBase>
  );
}

export function ChevronLeft(props) {
  return (
    <IconBase {...props}>
      <path d="m15 6-6 6 6 6" />
    </IconBase>
  );
}

export function LogOut(props) {
  return (
    <IconBase {...props}>
      <path d="M10 17v3H4V4h6v3" />
      <path d="M14 8l4 4-4 4" />
      <path d="M18 12H8" />
    </IconBase>
  );
}

export function ShieldCheck(props) {
  return (
    <IconBase {...props}>
      <path d="M12 2 5 5v6c0 5 3 8.5 7 11 4-2.5 7-6 7-11V5l-7-3Z" />
      <path d="m9.5 12 1.8 1.8L14.8 10" />
    </IconBase>
  );
}

export function LayoutDashboard(props) {
  return (
    <IconBase {...props}>
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="4" rx="2" />
      <rect x="14" y="9" width="7" height="12" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
    </IconBase>
  );
}

export function CalendarCheck2(props) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="17" rx="3" />
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M3 9h18" />
      <path d="m9 14 2 2 4-4" />
    </IconBase>
  );
}

export function Users2(props) {
  return (
    <IconBase {...props}>
      <path d="M16 19c0-2.2-2.2-4-4-4s-4 1.8-4 4" />
      <circle cx="12" cy="8" r="3" />
      <circle cx="6.5" cy="9.5" r="2" />
      <path d="M2 19c0-1.8 1.3-3.4 3.2-4" />
      <circle cx="17.5" cy="9.5" r="2" />
      <path d="M22 19c0-1.8-1.3-3.4-3.2-4" />
    </IconBase>
  );
}

export function CarFront(props) {
  return (
    <IconBase {...props}>
      <path d="M4 12h16l-1.2-4.2A3 3 0 0 0 16 6H8a3 3 0 0 0-2.8 1.8L4 12Z" />
      <path d="M6 12v5" />
      <path d="M18 12v5" />
      <path d="M7 17h10" />
      <circle cx="8.5" cy="15.5" r="1" />
      <circle cx="15.5" cy="15.5" r="1" />
    </IconBase>
  );
}

export function BadgeDollarSign(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v10" />
      <path d="M14.5 9.2c-.8-.8-2.6-1-3.7-.3-.9.6-1 1.7-.2 2.3.8.6 2 .7 3 .9 1.6.3 2.8 1.2 2.4 2.7-.4 1.3-1.8 2.2-3.8 2.2-1.4 0-2.8-.4-3.7-1.3" />
    </IconBase>
  );
}

export function ArrowUpRight(props) {
  return (
    <IconBase {...props}>
      <path d="M7 17 17 7" />
      <path d="M10 7h7v7" />
    </IconBase>
  );
}

export function BadgeCheck(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  );
}

export function Clock3(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </IconBase>
  );
}

export function DollarSign(props) {
  return (
    <IconBase {...props}>
      <path d="M12 4v16" />
      <path d="M15.5 7.2C14.7 6.4 13.5 6 12 6c-2.2 0-4 1.2-4 3s1.8 3 4 3 4 1.2 4 3-1.8 3-4 3c-1.5 0-2.7-.4-3.5-1.2" />
    </IconBase>
  );
}

export function Hourglass(props) {
  return (
    <IconBase {...props}>
      <path d="M6 3h12" />
      <path d="M6 21h12" />
      <path d="M7 4c0 3 5 4 5 8s-5 5-5 9" />
      <path d="M17 4c0 3-5 4-5 8s5 5 5 9" />
    </IconBase>
  );
}

export function CalendarDays(props) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="17" rx="3" />
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M3 9h18" />
      <path d="M7 13h3" />
      <path d="M7 17h3" />
      <path d="M14 13h3" />
      <path d="M14 17h3" />
    </IconBase>
  );
}

export function CircleDollarSign(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v10" />
      <path d="M14.5 9.2c-.8-.8-2.6-1-3.7-.3-.9.6-1 1.7-.2 2.3.8.6 2 .7 3 .9 1.6.3 2.8 1.2 2.4 2.7-.4 1.3-1.8 2.2-3.8 2.2-1.4 0-2.8-.4-3.7-1.3" />
    </IconBase>
  );
}

export function ArrowRight(props) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}
