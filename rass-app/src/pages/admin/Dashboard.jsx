import { useMemo } from 'react';
import dashboardData from '../../data/dashboardData.json';
import StatCard from '../../components/StatCard';
import RecentBookings from '../../components/RecentBookings';
import {
  ArrowRight,
  CalendarCheck2,
  CarFront,
  CircleDollarSign,
  Sparkles,
  Users2,
  Wrench,
} from '../../components/WorkshopIcons.jsx';

/**
 * DASHBOARD PAGE
 * Components & Props: Menggunakan props untuk pass data ke child components
 * Data JSON: Import data dari JSON file untuk display statistic dan bookings
 * useMemo: Optimasi performance dengan memoize calculated values
 * Responsive & Grid Design: Menggunakan Tailwind grid untuk responsive layout
 */
export default function Dashboard() {
  const { stats, recentBookings } = dashboardData;

  const memoizedStats = useMemo(() => stats, [stats]);

  return (
    <div className="space-y-8 float-in">
      <section className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-slate-950/90 via-slate-900/80 to-slate-950/60 p-6 shadow-[0_22px_80px_rgba(2,6,23,0.36)] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl float-slow" />
        <div className="pointer-events-none absolute bottom-0 left-12 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl float-slow" />

        <div className="relative grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-orange-200/90">
              <Sparkles className="h-4 w-4 text-orange-300" />
              RevDrive command center
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Dashboard bengkel yang terasa premium, cepat, dan siap dipresentasikan.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Pantau booking, kendaraan, estimasi pengerjaan, dan revenue dari satu pusat kendali yang eksklusif.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-orange-500 via-amber-500 to-orange-600 px-5 py-3 font-semibold text-slate-950 shadow-[0_18px_40px_rgba(249,115,22,0.35)] transition-smooth hover:-translate-y-0.5">
                <CalendarCheck2 className="h-5 w-5" />
                Tambah Booking
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition-smooth hover:bg-white/10">
                <Wrench className="h-5 w-5 text-orange-300" />
                Kelola Servis
              </button>
            </div>
          </div>

          <div className="glass-panel-light relative overflow-hidden rounded-4xl border border-white/10 p-5 shadow-[0_18px_60px_rgba(2,6,23,0.3)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_36%)]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Workshop flow</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Operational Snapshot</h2>
                </div>
                <div className="rounded-2xl bg-emerald-400/15 px-3 py-2 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
                  Live Sync
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                  <Users2 className="h-5 w-5 text-sky-300" />
                  <p className="mt-3 text-2xl font-semibold text-white">128</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Pelanggan</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                  <CarFront className="h-5 w-5 text-violet-300" />
                  <p className="mt-3 text-2xl font-semibold text-white">95</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Kendaraan</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                  <CalendarCheck2 className="h-5 w-5 text-orange-300" />
                  <p className="mt-3 text-2xl font-semibold text-white">24</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Booking aktif</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                  <CircleDollarSign className="h-5 w-5 text-emerald-300" />
                  <p className="mt-3 text-2xl font-semibold text-white">Rp 18Jt</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Revenue</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                <span>Status alur servis hari ini</span>
                <span className="font-semibold text-orange-300">Menunggu · Dikerjakan · Selesai</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {memoizedStats.map((stat) => (
          <StatCard key={stat.id} data={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.7fr_0.9fr]">
        <RecentBookings bookings={recentBookings} />

        <div className="space-y-6">
          <div className="rounded-4xl border border-white/10 bg-slate-950/75 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.3)]">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Service journey</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Alur servis bengkel</h3>
            <div className="mt-6 space-y-4">
              {[
                { step: 'Booking masuk', desc: 'Pelanggan reservasi sebelum datang', icon: CalendarCheck2, color: 'text-orange-300' },
                { step: 'Estimasi disetujui', desc: 'Biaya muncul dan dikonfirmasi', icon: CircleDollarSign, color: 'text-emerald-300' },
                { step: 'Pengerjaan berlangsung', desc: 'Mekanik menerima instruksi kerja', icon: Wrench, color: 'text-sky-300' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/5 p-4">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/8 ${item.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.step}</p>
                      <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-linear-to-br from-orange-500/15 via-white/5 to-sky-500/10 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.28)]">
            <p className="text-xs uppercase tracking-[0.35em] text-orange-200/80">Quick actions</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Akses cepat</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              {[
                { label: 'Lihat Booking', icon: CalendarCheck2 },
                { label: 'Kelola Pelanggan', icon: Users2 },
                { label: 'Jenis Layanan', icon: Wrench },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button key={item.label} className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-left transition-smooth hover:-translate-y-0.5 hover:bg-white/8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-orange-300 ring-1 ring-white/8 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{item.label}</p>
                        <p className="text-xs text-slate-400">Open section</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-orange-300" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
