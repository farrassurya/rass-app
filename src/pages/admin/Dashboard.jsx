import SectionHeader from '../../components/SectionHeader.jsx';
import dashboardData from '../../data/dashboardData.json';
import StatCard from '../../components/StatCard';
import RecentBookings from '../../components/RecentBookings';
import AnalyticsChart from '../../components/AnalyticsChart.jsx';
import CalendarWidget from '../../components/CalendarWidget.jsx';

/**
 * DASHBOARD PAGE
 * Components & Props: Menggunakan props untuk pass data ke child components
 * Data JSON: Import data dari JSON file untuk display statistic dan bookings
 * useMemo: Optimasi performance dengan memoize calculated values
 * Responsive & Grid Design: Menggunakan Tailwind grid untuk responsive layout
 */
export default function Dashboard() {
  const { stats, analytics, recentBookings } = dashboardData;

  return (
    <div className="space-y-6 float-in">
      <SectionHeader
        eyebrow="Dashboard"
        title="Workshop overview"
        description="Ringkasan operasional, booking terbaru, dan statistik utama yang dipisah jadi component reusable."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.id} data={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
        <AnalyticsChart analytics={analytics} />
        <CalendarWidget
          title="Calendar"
          schedule={[
            { time: '16:00', event: 'Summer Campaign is end!' },
            { time: '14:00', event: '2 plus I promotions is end!' },
            { time: '13:00', event: 'Winter Campaign is end!' },
            { time: '09:00', event: 'Summer Campaign is end!' },
          ]}
        />
      </div>

      <RecentBookings bookings={recentBookings} />
    </div>
  );
}
