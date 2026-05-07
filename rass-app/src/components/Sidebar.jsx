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
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#7B57E0] via-[#8B6FE8] to-[#7B57E0]/80 text-white shadow-[0_16px_45px_rgba(123,87,224,0.35)]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white">RevDrive</p>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#B8C0CC]">Bengkel Admin</p>
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
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 shadow-[0_18px_40px_rgba(2,6,23,0.3)]">
              <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">Workshop Status</p>
              <div className="mt-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-base font-semibold text-white">Live & Ready</p>
                  <p className="text-sm text-slate-400">All systems synchronized</p>
                </div>
                <span className="rounded-full bg-[#47A785]/15 px-3 py-1 text-xs font-semibold text-[#47A785] ring-1 ring-[#47A785]/20">
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
                        ? 'border-l-4 border-[#7B57E0] bg-slate-950/80 text-white shadow-[0_16px_45px_rgba(123,87,224,0.18)]'
                        : 'border-white/5 bg-slate-950/40 text-slate-300 hover:border-white/10 hover:bg-slate-950/70 hover:text-white'
                    }`
                  }
                  onClick={onClose}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-slate-100 transition-smooth group-hover:scale-105 group-hover:bg-[#7B57E0]/15 group-hover:text-[#7B57E0]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-xs text-slate-400 group-hover:text-slate-300">{item.description}</p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-[#7B57E0]/0 transition-all duration-300 group-hover:bg-[#7B57E0]" />
                </NavLink>
              );
            })}
          </nav>

          <div className="border-t border-white/10 p-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Admin Access</p>
              <p className="mt-2 text-sm font-semibold text-white">RevDrive Admin Dashboard v1.0</p>
              <p className="mt-1 text-xs text-slate-400">© 2026 Bengkel Management</p>
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#7B57E0]/10 px-4 py-3 text-sm font-semibold text-[#E3E3E3] transition-smooth hover:bg-[#7B57E0]/15">
                <LogOut className="h-4 w-4 text-[#7B57E0]" />
                Quick Logout
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
