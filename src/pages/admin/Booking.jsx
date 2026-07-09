import { useEffect, useMemo, useState } from 'react';
import SectionHeader from '../../components/SectionHeader.jsx';
import PanelCard from '../../components/PanelCard.jsx';
import RecentBookings from '../../components/RecentBookings';
import StatusPill from '../../components/StatusPill.jsx';
import { supabase } from '../../lib/supabaseClient';
import bookingData from '../../data/bookingData.json';

export default function Booking() {
  const [bookings, setBookings] = useState(bookingData.bookingQueue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function loadBookings() {
      setIsLoading(true);

      const { data, error } = await supabase
        .from('bookings')
        .select('id, customer_name, phone_number, vehicle_type, service_type, preferred_date, preferred_time, status, notes, source, estimated_amount, created_at')
        .order('created_at', { ascending: false });

      if (!isActive) {
        return;
      }

      if (error) {
        setBookings(bookingData.bookingQueue);
        setIsLoading(false);
        return;
      }

      const mappedBookings = (data ?? []).map((booking) => ({
        id: booking.id,
        customerName: booking.customer_name,
        vehicleType: booking.vehicle_type,
        serviceType: booking.service_type,
        date: booking.preferred_date,
        time: booking.preferred_time,
        status: booking.status,
        amount: booking.estimated_amount ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(Number(booking.estimated_amount)) : 'Belum ada estimasi',
      }));

      setBookings(mappedBookings.length > 0 ? mappedBookings : bookingData.bookingQueue);
      setIsLoading(false);
    }

    loadBookings();

    return () => {
      isActive = false;
    };
  }, []);

  const bookingStats = useMemo(
    () => ({
      total: bookings.length,
      pending: bookings.filter((booking) => booking.status === 'pending').length,
      active: bookings.filter((booking) => booking.status === 'in-progress').length,
      completed: bookings.filter((booking) => booking.status === 'completed').length,
    }),
    [bookings]
  );

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Booking"
        title="Manajemen Booking"
        description="Antrian booking yang masuk dari landing page akan tampil di sini setelah tersimpan ke database."
      />

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        {isLoading ? (
          <PanelCard className="p-8">
            <p className="text-sm text-slate-300">Memuat booking terbaru...</p>
          </PanelCard>
        ) : (
          <RecentBookings bookings={bookings} />
        )}

        <PanelCard className="p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">Ringkasan Booking</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Status antrian hari ini</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Ringkasan ini membantu tim melihat jumlah booking yang masuk dan status yang sedang berjalan.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <StatusPill tone="neutral">Total {bookingStats.total}</StatusPill>
            <StatusPill tone="warning">Pending {bookingStats.pending}</StatusPill>
            <StatusPill tone="info">Diproses {bookingStats.active}</StatusPill>
            <StatusPill tone="success">Selesai {bookingStats.completed}</StatusPill>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300">
            Booking yang belum memiliki estimasi biaya akan tetap tampil sebagai antrian yang siap ditindaklanjuti.
          </div>
        </PanelCard>
      </div>
    </div>
  );
}
