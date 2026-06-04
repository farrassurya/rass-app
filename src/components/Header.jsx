import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  ChevronDown,
  ChevronLeft,
  LogOut,
  Menu,
  Settings2,
} from './WorkshopIcons.jsx';
import SearchField from './SearchField.jsx';

/**
 * HEADER COMPONENT
 * Best Practice: Pisahkan layout components menjadi file terpisah untuk reusability & maintainability
 * Props Pattern: Component menerima props untuk toggle sidebar di mobile
 * UPDATE: Toolbar diperbarui dengan search bar yang lebih besar dan profil user yang lebih mirip Figma
 */
export default function Header({ onToggleSidebar, onToggleSidebarCollapse, isSidebarCollapsed }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/72 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="rounded-2xl border border-white/10 bg-white/5 p-2.5 text-slate-100 transition-smooth hover:bg-white/10 lg:hidden"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>

          <button
            onClick={onToggleSidebarCollapse}
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-slate-100 shadow-[0_12px_35px_rgba(2,6,23,0.25)] transition-smooth hover:bg-white/10 lg:inline-flex"
            aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <ChevronLeft className={`h-4 w-4 transition-transform ${isSidebarCollapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="flex-1 lg:max-w-lg">
          <SearchField value="" onChange={() => {}} placeholder="Search booking, customer, service..." />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="relative rounded-2xl border border-[#334E68]/70 bg-slate-950/60 p-3 text-white transition-smooth hover:-translate-y-0.5 hover:bg-slate-900/80">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#7B57E0] px-1 text-[10px] font-bold text-white shadow-lg">
              5
            </span>
          </button>

          <button className="rounded-2xl border border-[#334E68]/70 bg-slate-950/60 p-3 text-white transition-smooth hover:-translate-y-0.5 hover:bg-slate-900/80">
            <Settings2 className="h-5 w-5" />
          </button>

          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-3 rounded-full border border-[#334E68]/70 bg-slate-950/60 px-3 py-2 transition-smooth hover:bg-slate-900/80"
            >
              <img
                src="/img/rass3.jpeg"
                alt="Profil pengguna"
                className="h-9 w-9 rounded-full object-cover shadow-[0_12px_30px_rgba(123,87,224,0.22)] ring-2 ring-white/10"
              />
              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold leading-4 text-white">Farrassuryaa</p>
                <p className="text-[11px] text-slate-400">farrassurya12 @gmail.com</p>
              </div>
              <ChevronDown
                className={`h-4 w-4 text-slate-300 transition-transform ${
                  isProfileOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl backdrop-blur-xl">
                <Link
                  to="/login"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-200 transition-smooth hover:bg-slate-900/70"
                >
                  <LogOut className="h-4 w-4 text-[#7B57E0]" />
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
