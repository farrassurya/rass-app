import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Landing() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeUsers, setActiveUsers] = useState(null);
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  const [statsError, setStatsError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadStats() {
      setIsLoadingStats(true);
      setStatsError('');

      const { count, error } = await supabase.from('users').select('id', { count: 'exact', head: true });

      if (!isMounted) return;

      if (error) {
        setStatsError('Data live stats belum bisa dimuat.');
        setActiveUsers(null);
      } else {
        setActiveUsers(count ?? 0);
      }

      setIsLoadingStats(false);
    }

    loadStats();

    return () => {
      isMounted = false;
    };
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  }

  return (
    <main className="min-h-screen overflow-hidden px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_30px_120px_rgba(2,6,23,0.55)] backdrop-blur-xl sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,87,224,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(83,149,207,0.18),transparent_28%)]" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
                CRM System MVP
              </p>
              <div className="space-y-4">
                <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Kelola prospek, pelanggan, dan follow-up dalam satu tempat.
                </h1>
                <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                  Landing page awal untuk sistem CRM ini. Fokus pada pengelolaan data pelanggan yang rapi,
                  alur kerja yang sederhana, dan onboarding yang cepat untuk tim.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-md sm:p-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-white">Daftar akses awal</h2>
                  <p className="text-sm leading-6 text-slate-300">
                    Masukkan email untuk ikut daftar tunggu atau menerima update produk.
                  </p>
                </div>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <label className="block text-sm font-medium text-slate-200" htmlFor="landing-email">
                    Email kerja
                  </label>
                  <input
                    id="landing-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="nama@perusahaan.com"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition duration-200 focus:border-[#8B6FE8] focus:ring-2 focus:ring-[#8B6FE8]/30"
                  />
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-[#7B57E0] to-[#8B6FE8] px-5 py-3 font-semibold text-white shadow-[0_12px_30px_rgba(123,87,224,0.35)] transition duration-200 hover:from-[#8B6FE8] hover:to-[#9B7EF0]"
                  >
                    Daftar sekarang
                  </button>
                </form>

                {submitted ? (
                  <p className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                    Email berhasil diterima. Kami akan menghubungi Anda segera.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(2,6,23,0.32)] backdrop-blur-md">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Keunggulan CRM & Live Stats</p>
              <h2 className="text-2xl font-semibold text-white">CRM yang fokus ke kecepatan, keteraturan, dan visibilitas data.</h2>
              <p className="max-w-2xl text-sm leading-6 text-slate-300">
                Bagian ini menampilkan alasan utama tim memakai CRM ini sekaligus metrik real-time langsung dari database Supabase.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm font-semibold text-white">Data pelanggan rapi</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Semua kontak tersimpan dalam satu struktur yang mudah dicari.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm font-semibold text-white">Follow-up lebih cepat</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Tim bisa menindaklanjuti prospek tanpa berpindah tools.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm font-semibold text-white">Visibilitas real-time</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Metrik utama dipantau langsung dari database aktif.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_rgba(2,6,23,0.38)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Live Stats</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Pengguna aktif saat ini</h3>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              {isLoadingStats ? (
                <div className="space-y-3">
                  <div className="h-3 w-28 rounded-full bg-white/10 shimmer" />
                  <div className="h-10 w-40 rounded-2xl bg-white/10 shimmer" />
                  <p className="text-sm text-slate-400">Memuat data live dari Supabase...</p>
                </div>
              ) : statsError ? (
                <div className="space-y-3">
                  <p className="text-sm font-medium text-amber-200">{statsError}</p>
                  <p className="text-sm text-slate-400">Silakan coba lagi setelah koneksi database tersedia.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm text-slate-400">Total dari tabel users</p>
                  <p className="text-5xl font-semibold tracking-tight text-white">{activeUsers}</p>
                  <p className="text-sm text-emerald-200">Sinkron dengan data database Supabase.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
