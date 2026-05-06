import { ArrowUpRight, BadgeDollarSign, CalendarCheck2, CarFront, Sparkles, Users2 } from './WorkshopIcons.jsx';

/**
 * STAT CARD COMPONENT
 * Components & Props: Component yang menerima data via props
 * Responsive Design: Menggunakan Tailwind untuk responsive sizing
 * Conditional Styling: Warna background berdasarkan color prop
 */
export default function StatCard({ data }) {
  const colorClasses = {
    blue: 'from-sky-500/20 via-sky-400/10 to-cyan-400/5 border-sky-400/20',
    purple: 'from-violet-500/20 via-violet-400/10 to-fuchsia-400/5 border-violet-400/20',
    orange: 'from-orange-500/20 via-amber-400/10 to-rose-400/5 border-orange-400/20',
    green: 'from-emerald-500/20 via-emerald-400/10 to-lime-400/5 border-emerald-400/20',
  };

  const iconBg = {
    blue: 'bg-sky-500/15 text-sky-300 ring-sky-400/20',
    purple: 'bg-violet-500/15 text-violet-300 ring-violet-400/20',
    orange: 'bg-orange-500/15 text-orange-300 ring-orange-400/20',
    green: 'bg-emerald-500/15 text-emerald-300 ring-emerald-400/20',
  };

  const trendColor = {
    blue: 'text-sky-300',
    purple: 'text-violet-300',
    orange: 'text-orange-300',
    green: 'text-emerald-300',
  };

  const iconMap = {
    'Total Pelanggan': Users2,
    'Total Kendaraan': CarFront,
    'Booking Aktif': CalendarCheck2,
    'Total Pendapatan': BadgeDollarSign,
  };

  const Icon = iconMap[data.label] || Sparkles;

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border bg-linear-to-br ${colorClasses[data.color]} p-px shadow-[0_18px_60px_rgba(2,6,23,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(2,6,23,0.35)]`}
    >
      <div className="relative h-full rounded-3xl border border-white/8 bg-slate-950/70 p-5 backdrop-blur-xl">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/5 blur-2xl transition-opacity duration-300 group-hover:bg-white/10" />
        <div className="flex items-start justify-between gap-4">
          <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${iconBg[data.color]} shadow-lg transition-transform duration-300 group-hover:scale-105`}>
            <Icon className="h-6 w-6" />
          </div>
          <span className={`inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold ${trendColor[data.color]}`}>
            <ArrowUpRight className="h-3.5 w-3.5" />
            {data.trend}
          </span>
        </div>

        <div className="mt-5">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{data.label}</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-[2.1rem]">{data.value}</p>
        </div>

        <div className="mt-5 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
          <span>Updated just now</span>
          <span className="inline-flex items-center gap-1 text-orange-300">
            <Sparkles className="h-3.5 w-3.5" /> Live metric
          </span>
        </div>
      </div>
    </div>
  );
}
