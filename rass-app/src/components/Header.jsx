import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Search,
  Settings2,
  Sparkles,
  Wrench,
} from './WorkshopIcons.jsx';

/**
 * HEADER COMPONENT
 * Best Practice: Pisahkan layout components menjadi file terpisah untuk reusability & maintainability
 * Props Pattern: Component menerima props untuk toggle sidebar di mobile
 */
export default function Header({ onToggleSidebar }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/72 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden rounded-2xl border border-white/10 bg-white/5 p-2.5 text-slate-100 transition-smooth hover:bg-white/10"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500 via-amber-400 to-amber-600 text-slate-950 shadow-[0_18px_45px_rgba(249,115,22,0.35)] pulse-ring">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <p className="flex items-center gap-2 text-base font-semibold text-white sm:text-lg">
                RevDrive <Sparkles className="h-4 w-4 text-orange-400" />
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-300/80">
                Bengkel Admin
              </p>
            </div>
          </div>
        </div>

        <div className="hidden flex-1 items-center justify-center px-4 lg:flex">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search booking, customer, service..."
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-12 pr-5 text-sm text-white placeholder:text-slate-400 shadow-[0_12px_40px_rgba(2,6,23,0.28)] outline-none transition-smooth focus:border-orange-400/50 focus:bg-white/10 focus:ring-2 focus:ring-orange-500/30"
            />
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="relative rounded-2xl border border-white/10 bg-white/5 p-3 text-white transition-smooth hover:-translate-y-0.5 hover:bg-white/10">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white shadow-lg">
              5
            </span>
          </button>

          <button className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white transition-smooth hover:-translate-y-0.5 hover:bg-white/10">
            <Settings2 className="h-5 w-5" />
          </button>

          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition-smooth hover:bg-white/10"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-orange-400 to-amber-600 text-sm font-bold text-slate-950 shadow-[0_12px_30px_rgba(249,115,22,0.35)]">
                AD
              </div>
              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold leading-4 text-white">Admin</p>
                <p className="text-[11px] text-slate-400">Workshop Owner</p>
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
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-200 transition-smooth hover:bg-white/5"
                >
                  <LogOut className="h-4 w-4 text-orange-400" />
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
