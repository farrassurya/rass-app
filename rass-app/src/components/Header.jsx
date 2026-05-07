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
 * UPDATE: Toolbar diperbarui dengan search bar yang lebih besar dan profil user yang lebih mirip Figma
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
          <div className="hidden items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-2 shadow-[0_18px_45px_rgba(2,6,23,0.35)] lg:flex">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-[#7B57E0] via-[#8B6FE8] to-[#7B57E0]/80 text-white shadow-[0_18px_45px_rgba(123,87,224,0.35)] pulse-ring">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white">RevDrive</p>
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#B8C0CC]">Bengkel Admin</p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-4">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search booking, customer, service..."
              className="w-full rounded-full border border-[#334E68]/70 bg-slate-950/75 py-3 pl-12 pr-5 text-sm text-white placeholder:text-[#B8C0CC] shadow-[0_12px_40px_rgba(2,6,23,0.28)] outline-none transition-smooth focus:border-[#7B57E0]/40 focus:bg-slate-900/80 focus:ring-2 focus:ring-[#7B57E0]/25"
            />
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#B8C0CC]" />
          </div>
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
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-[#7B57E0] to-[#8B6FE8] text-sm font-bold text-slate-950 shadow-[0_12px_30px_rgba(123,87,224,0.35)]">
                AD
              </div>
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
