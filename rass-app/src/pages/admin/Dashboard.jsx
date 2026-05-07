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
    <div className="space-y-6 float-in">
      {/* UPDATE: Stat cards grid (4 columns) langsung di top sesuai Figma */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {memoizedStats.map((stat) => (
          <StatCard key={stat.id} data={stat} />
        ))}
      </div>

      {/* UPDATE: Revenue Analytics & Calendar Grid sesuai Figma layout */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
        {/* Revenue Analytics Chart */}
        <div className="overflow-hidden rounded-4xl border border-white/10 bg-slate-950/75 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.3)]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">Analytics</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Revenue analytics</h3>
            </div>
            <select className="rounded-lg border border-[#334E68]/70 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-white outline-none">
              <option>Year</option>
              <option>Month</option>
            </select>
          </div>

          {/* UPDATE: Simple revenue chart visualization */}
          <div className="relative h-64 flex items-end justify-between gap-2 px-4 py-8 bg-slate-900/30 rounded-2xl border border-[#334E68]/50">
            <div className="flex-1 h-32 bg-gradient-to-t from-[#7B57E0]/40 to-[#7B57E0]/10 rounded-t-lg border-t border-[#7B57E0]/30"></div>
            <div className="flex-1 h-24 bg-gradient-to-t from-[#5395CF]/40 to-[#5395CF]/10 rounded-t-lg border-t border-[#5395CF]/30"></div>
            <div className="flex-1 h-40 bg-gradient-to-t from-[#7B57E0]/40 to-[#7B57E0]/10 rounded-t-lg border-t border-[#7B57E0]/30"></div>
            <div className="flex-1 h-28 bg-gradient-to-t from-[#5395CF]/40 to-[#5395CF]/10 rounded-t-lg border-t border-[#5395CF]/30"></div>
            <div className="flex-1 h-44 bg-gradient-to-t from-[#7B57E0]/40 to-[#7B57E0]/10 rounded-t-lg border-t border-[#7B57E0]/30"></div>
            <div className="flex-1 h-36 bg-gradient-to-t from-[#5395CF]/40 to-[#5395CF]/10 rounded-t-lg border-t border-[#5395CF]/30"></div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#7B57E0]"></div>
              <span className="text-xs text-[#B8C0CC]">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#5395CF]"></div>
              <span className="text-xs text-[#B8C0CC]">Expenses</span>
            </div>
          </div>
        </div>

        {/* UPDATE: Calendar Widget sesuai Figma */}
        <div className="overflow-hidden rounded-4xl border border-white/10 bg-slate-950/75 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.3)]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">Schedule</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Calendar</h3>
            </div>
            <div className="flex gap-2">
              <button className="rounded-lg border border-[#334E68]/70 bg-slate-950/70 p-2 text-white hover:bg-slate-900">◀</button>
              <button className="rounded-lg border border-[#334E68]/70 bg-slate-950/70 p-2 text-white hover:bg-slate-900">▶</button>
            </div>
          </div>

          <div className="text-xs text-[#B8C0CC] mb-4">Aug 10, Mon · TODAY</div>

          <div className="space-y-2">
            {[
              { time: '16:00', event: 'Summer Campaign is end!' },
              { time: '14:00', event: '2 plus I promotions is end!' },
              { time: '13:00', event: 'Winter Campaign is end!' },
              { time: '09:00', event: 'Summer Campaign is end!' },
            ].map((item, idx) => (
              <div key={idx} className="rounded-lg border border-[#334E68]/50 bg-slate-900/30 p-3">
                <p className="text-xs text-[#B8C0CC]">{item.time}</p>
                <p className="text-sm font-medium text-white mt-1">{item.event}</p>
              </div>
            ))}
          </div>

          <button className="mt-4 w-full rounded-lg border border-[#334E68]/70 bg-slate-950/70 py-2 text-xs font-semibold text-[#7B57E0] hover:bg-slate-900">
            See full calendar →
          </button>
        </div>
      </div>

      {/* UPDATE: Recent Orders Table (full width) sesuai Figma */}
      <RecentBookings bookings={recentBookings} />
    </div>
  );
}
