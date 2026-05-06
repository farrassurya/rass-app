import { NavLink } from 'react-router-dom';
import {
  CalendarCheck2,
  ChevronLeft,
  LayoutDashboard,
  LogOut,
  ShieldCheck,
  Users2,
  Wrench,
} from './WorkshopIcons.jsx';

/**
 * SIDEBAR COMPONENT
 * State Management: State untuk mobile sidebar visibility dihandle di parent (MainLayout)
 * Active State: NavLink otomatis memberikan class "active" pada route yang sesuai
 * Responsive Design: Sidebar bisa di-hide di mobile menggunakan state dari parent
 */
export default function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    {
      id: 1,
      label: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard,
      description: 'Ringkasan data bengkel',
    },
    {
      id: 2,
      label: 'Booking',
      path: '/booking',
      icon: CalendarCheck2,
      description: 'Reservasi servis',
    },
    {
      id: 3,
      label: 'Pelanggan',
      path: '/customers',
      icon: Users2,
      description: 'Data pelanggan',
    },
    {
      id: 4,
      label: 'Layanan',
      path: '/services',
      icon: Wrench,
      description: 'Jenis layanan servis',
    },
  ];

  return (
    <>
      {/* Mobile Overlay - Tutup sidebar saat background diklik */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-slate-950/70 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        ></div>
      )}

      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-72 transform border-r border-white/10 bg-slate-950/90 text-white shadow-[0_24px_100px_rgba(2,6,23,0.55)] transition-transform duration-300 ease-out lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500 via-amber-400 to-amber-600 text-slate-950 shadow-[0_16px_45px_rgba(249,115,22,0.35)]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-orange-300/80">RevDrive</p>
                <p className="text-lg font-semibold text-white">Control Panel</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-2xl border border-white/10 bg-white/5 p-2 text-white transition-smooth hover:bg-white/10 lg:hidden"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="border-b border-white/10 p-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_18px_40px_rgba(2,6,23,0.3)]">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Workshop Status</p>
              <div className="mt-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-base font-semibold text-white">Live & Ready</p>
                  <p className="text-sm text-slate-400">All systems synchronized</p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
                  Active
                </span>
              </div>
            </div>
          </div>

          <nav className="hide-scrollbar flex-1 space-y-2 overflow-y-auto p-4">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-4 overflow-hidden rounded-2xl border px-4 py-4 transition-all duration-300 ${
                      isActive
                        ? 'border-orange-400/30 bg-linear-to-r from-orange-500/20 to-amber-500/10 text-white shadow-[0_16px_45px_rgba(249,115,22,0.18)]'
                        : 'border-white/5 bg-white/3 text-slate-300 hover:border-white/10 hover:bg-white/6 hover:text-white'
                    }`
                  }
                  onClick={onClose}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-slate-100 transition-smooth group-hover:scale-105 group-hover:bg-orange-400/15 group-hover:text-orange-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-xs text-slate-400 group-hover:text-slate-300">{item.description}</p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-orange-400/0 transition-all duration-300 group-hover:bg-orange-400" />
                </NavLink>
              );
            })}
          </nav>

          <div className="border-t border-white/10 p-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Admin Access</p>
              <p className="mt-2 text-sm font-semibold text-white">RevDrive Admin Dashboard v1.0</p>
              <p className="mt-1 text-xs text-slate-400">© 2026 Bengkel Management</p>
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition-smooth hover:bg-white/10">
                <LogOut className="h-4 w-4 text-orange-400" />
                Quick Logout
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
