import {
  BadgeCheck,
  CalendarDays,
  CarFront,
  Clock3,
  DollarSign,
  Hourglass,
  Sparkles,
} from './WorkshopIcons.jsx';

/**
 * RECENT BOOKINGS COMPONENT
 * Components & Props: Menerima array bookings via props
 * Active State: Status booking ditampilkan dengan warna berbeda (completed, in-progress, pending)
 * Responsive Design: Table yang responsive untuk mobile dan desktop
 */
export default function RecentBookings({ bookings }) {
  const getStatusStyles = (status) => {
    const styles = {
      completed: {
        text: 'text-emerald-300',
        badge: 'bg-emerald-400/15 border-emerald-400/20',
        ring: 'ring-emerald-400/15',
        icon: BadgeCheck,
      },
      'in-progress': {
        text: 'text-sky-300',
        badge: 'bg-sky-400/15 border-sky-400/20',
        ring: 'ring-sky-400/15',
        icon: CarFront,
      },
      pending: {
        text: 'text-amber-300',
        badge: 'bg-amber-400/15 border-amber-400/20',
        ring: 'ring-amber-400/15',
        icon: Hourglass,
      },
    };
    return styles[status] || styles.pending;
  };

  const getStatusLabel = (status) => {
    const labels = {
      completed: 'Selesai',
      'in-progress': 'Dikerjakan',
      pending: 'Pending',
    };
    return labels[status];
  };

  return (
    <div className="overflow-hidden rounded-4xl border border-white/10 bg-slate-950/75 shadow-[0_18px_70px_rgba(2,6,23,0.35)] backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-white/10 to-transparent px-6 py-5">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-orange-300/80">
            <Sparkles className="h-4 w-4" /> Live Operations
          </div>
          <h3 className="mt-2 text-2xl font-semibold text-white">Booking Terbaru</h3>
          <p className="mt-1 text-sm text-slate-400">
            Monitor reservasi, status pengerjaan, dan estimasi biaya.
          </p>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 sm:flex">
          <CalendarDays className="h-4 w-4 text-orange-300" />
          Bengkel Control Feed
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr className="text-left text-xs uppercase tracking-[0.3em] text-slate-400">
              <th className="px-6 py-4 font-semibold">Pelanggan</th>
              <th className="px-6 py-4 font-semibold">Kendaraan</th>
              <th className="px-6 py-4 font-semibold">Layanan</th>
              <th className="px-6 py-4 font-semibold">Jam</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 text-right font-semibold">Harga</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, idx) => {
              const statusStyles = getStatusStyles(booking.status);
              const StatusIcon = statusStyles.icon;

              return (
                <tr
                  key={booking.id}
                  className={`transition-smooth ${idx % 2 === 0 ? 'bg-white/5' : 'bg-white/10'} hover:bg-white/15`}
                >
                  <td className="border-t border-white/10 px-6 py-5">
                    <p className="font-semibold text-white">{booking.customerName}</p>
                    <p className="mt-1 text-xs text-slate-400">{booking.date}</p>
                  </td>
                  <td className="border-t border-white/10 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-orange-300 ring-1 ring-white/10">
                        <CarFront className="h-4 w-4" />
                      </div>
                      <p className="font-medium text-slate-200">{booking.vehicleType}</p>
                    </div>
                  </td>
                  <td className="border-t border-white/10 px-6 py-5 text-slate-300">{booking.serviceType}</td>
                  <td className="border-t border-white/10 px-6 py-5">
                    <span className="inline-flex items-center gap-2 text-slate-200">
                      <Clock3 className="h-4 w-4 text-orange-300" />
                      {booking.time}
                    </span>
                  </td>
                  <td className="border-t border-white/10 px-6 py-5">
                    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${statusStyles.badge} ${statusStyles.text} ${statusStyles.ring}`}>
                      <StatusIcon className="h-3.5 w-3.5" />
                      {getStatusLabel(booking.status)}
                    </span>
                  </td>
                  <td className="border-t border-white/10 px-6 py-5 text-right">
                    <span className="inline-flex items-center gap-1 text-base font-semibold text-white">
                      <DollarSign className="h-4 w-4 text-orange-300" />
                      {booking.amount}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 text-sm text-slate-400">
        <span>Showing the latest operational queue.</span>
        <button className="inline-flex items-center gap-2 font-semibold text-orange-300 transition-smooth hover:text-orange-200">
          View full booking feed
          <Sparkles className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
