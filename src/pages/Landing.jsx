import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export default function Landing() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: 'idle', text: '' });
  const [activeUsers, setActiveUsers] = useState(null);
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  const [statsError, setStatsError] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const normalizedEmail = trimmedEmail.toLowerCase();

    if (!trimmedEmail) {
      setSubmitted(false);
      setFormMessage({ type: 'error', text: 'Masukkan alamat email terlebih dahulu.' });
      return;
    }

    if (!emailPattern.test(normalizedEmail)) {
      setSubmitted(false);
      setFormMessage({ type: 'error', text: 'Format email tidak valid. Cek kembali alamat email Anda.' });
      return;
    }

    setIsSubmitting(true);
    setFormMessage({ type: 'loading', text: 'Menyimpan data ke Supabase...' });

    try {
      const { count, error: duplicateError } = await supabase
        .from('leads')
        .select('id', { count: 'exact', head: true })
        .ilike('email', normalizedEmail);

      if (duplicateError) {
        throw duplicateError;
      }

      if ((count ?? 0) > 0) {
        setSubmitted(false);
        setFormMessage({ type: 'error', text: 'Email ini sudah terdaftar. Gunakan email lain.' });
        return;
      }

      const { error } = await supabase.from('leads').insert([{ email: normalizedEmail, source: 'landing_page' }]);

      if (error) {
        throw error;
      }

      setSubmitted(true);
      setEmail('');
      setFormMessage({ type: 'success', text: 'Email berhasil disimpan ke tabel leads di Supabase.' });
    } catch (error) {
      console.error('Landing form submit error:', error);
      setSubmitted(false);
      setFormMessage({
        type: 'error',
        text: 'Data belum tersimpan. Pastikan tabel leads dan policy Supabase sudah mengizinkan insert.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main id="top" className="min-h-screen overflow-hidden px-4 pb-8 pt-4 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="sticky top-4 z-30">
          <div className="rounded-full border border-white/10 bg-slate-950/80 px-5 py-4 shadow-[0_20px_60px_rgba(2,6,23,0.35)] backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <a href="#top" className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-[0_12px_30px_rgba(123,87,224,0.35)]">
                  <img src="/img/LogoProjectS4.png" alt="Rev Drive Autosolution" className="h-full w-full object-cover" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">Rev Drive Autosolution</span>
                  <span className="block text-[11px] uppercase tracking-[0.32em] text-slate-400">CRM Landing Page</span>
                </span>
              </a>

              <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
                <a href="#features" className="transition hover:text-white">
                  Fitur
                </a>
                <a href="#pricing" className="transition hover:text-white">
                  Harga
                </a>
                <Link to="/login" className="transition hover:text-white">
                  Login
                </Link>
              </nav>

              <button
                type="button"
                aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
                aria-expanded={isMenuOpen}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
                onClick={() => setIsMenuOpen((current) => !current)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            {isMenuOpen ? (
              <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/90 p-4 md:hidden">
                <div className="flex flex-col gap-3 text-sm font-medium text-slate-200">
                  <a href="#features" className="rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                    Fitur
                  </a>
                  <a href="#pricing" className="rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                    Harga
                  </a>
                  <Link to="/login" className="rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </header>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_30px_120px_rgba(2,6,23,0.55)] backdrop-blur-xl sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,87,224,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(83,149,207,0.18),transparent_28%)]" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
                CRM System PRD v3
              </p>
              <div className="space-y-4">
                <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Kelola prospek, pelanggan, dan follow-up dalam satu tempat.
                </h1>
                <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                  CRM untuk tim yang ingin data rapi, alur kerja lebih cepat, dan visibilitas real-time tanpa perpindahan tools yang tidak perlu.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Pipeline tracking</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Lead management</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Live metrics</span>
              </div>
            </div>

            <div className="relative" id="contact">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-md sm:p-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-white">Daftar akses awal</h2>
                  <p className="text-sm leading-6 text-slate-300">
                    Masukkan email untuk menyimpan data pendaftaran ke tabel leads di Supabase.
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
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-[#7B57E0] to-[#8B6FE8] px-5 py-3 font-semibold text-white shadow-[0_12px_30px_rgba(123,87,224,0.35)] transition duration-200 hover:from-[#8B6FE8] hover:to-[#9B7EF0] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? 'Menyimpan...' : 'Daftar sekarang'}
                  </button>
                </form>

                <div aria-live="polite" className="mt-4 min-h-12">
                  {formMessage.type === 'loading' ? (
                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                      <span className="mr-3 inline-flex h-2.5 w-2.5 rounded-full bg-[#8B6FE8] shimmer" />
                      {formMessage.text}
                    </div>
                  ) : null}

                  {formMessage.type === 'success' ? (
                    <p className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                      {formMessage.text}
                    </p>
                  ) : null}

                  {formMessage.type === 'error' ? (
                    <p className="rounded-xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                      {formMessage.text}
                    </p>
                  ) : null}
                </div>

                {submitted ? <p className="mt-2 text-sm text-emerald-200">Pendaftaran berhasil diproses dan tersimpan.</p> : null}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(2,6,23,0.32)] backdrop-blur-md">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Keunggulan CRM & Live Stats</p>
              <h2 className="text-2xl font-semibold text-white">CRM yang fokus ke kecepatan, keteraturan, dan visibilitas data.</h2>
              <p className="max-w-2xl text-sm leading-6 text-slate-300">
                Alur kerja dirancang singkat, data pelanggan tersusun, dan metrik utama dibaca langsung dari database.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm font-semibold text-white">Data pelanggan rapi</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Kontak dan riwayat lead disimpan dalam satu struktur yang mudah ditelusuri.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm font-semibold text-white">Follow-up lebih cepat</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Tim bisa langsung menindaklanjuti prospek tanpa pindah tools.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm font-semibold text-white">Visibilitas real-time</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Data statistik dibaca langsung dari Supabase secara live.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_rgba(2,6,23,0.38)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Live Stats</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Pengguna aktif saat ini</h3>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              {isLoadingStats ? (
                <div className="space-y-3" aria-live="polite">
                  <div className="h-3 w-32 rounded-full bg-white/10 shimmer" />
                  <div className="h-10 w-40 rounded-2xl bg-white/10 shimmer" />
                  <p className="text-sm text-slate-400">Mengambil data live dari Supabase...</p>
                </div>
              ) : statsError ? (
                <div className="space-y-3" aria-live="polite">
                  <p className="text-sm font-medium text-amber-200">{statsError}</p>
                  <p className="text-sm text-slate-400">Silakan periksa tabel users dan policy read di Supabase.</p>
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

        <section id="pricing" className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(2,6,23,0.32)] backdrop-blur-md sm:p-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Pricing Plan</p>
            <h2 className="text-2xl font-semibold text-white">Paket harga yang sederhana untuk tahap komplit.</h2>
            <p className="text-sm leading-6 text-slate-300">
              Tiga paket berikut hanya sebagai struktur awal untuk validasi positioning produk CRM.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <article className="rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-6">
              <p className="text-sm font-semibold text-slate-300">Free</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-semibold text-white">Rp0</span>
                <span className="pb-1 text-sm text-slate-400">/bulan</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">Cocok untuk mencoba alur CRM dasar.</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>• 1 workspace</li>
                <li>• Dashboard dasar</li>
                <li>• Simpan lead sederhana</li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Mulai Gratis
              </a>
            </article>

            <article className="rounded-[1.5rem] border border-[#8B6FE8]/40 bg-linear-to-br from-[#7B57E0]/25 to-slate-950/70 p-6 shadow-[0_24px_70px_rgba(123,87,224,0.25)]">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-white">Pro</p>
                <span className="rounded-full border border-[#8B6FE8]/40 bg-[#8B6FE8]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#D6C7FF]">
                  Popular
                </span>
              </div>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-semibold text-white">Rp149K</span>
                <span className="pb-1 text-sm text-slate-300">/bulan</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">Untuk tim kecil yang butuh pipeline rapi dan cepat.</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-100">
                <li>• Semua fitur Free</li>
                <li>• Live stats database</li>
                <li>• Priority support</li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-[#7B57E0] to-[#8B6FE8] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(123,87,224,0.35)] transition hover:from-[#8B6FE8] hover:to-[#9B7EF0]">
                Pilih Pro
              </a>
            </article>

            <article className="rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-6">
              <p className="text-sm font-semibold text-slate-300">Enterprise</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-semibold text-white">Custom</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">Untuk kebutuhan integrasi, skala, dan kontrol yang lebih luas.</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>• Multi-team access</li>
                <li>• Integrasi lanjutan</li>
                <li>• Support implementasi</li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Hubungi Tim
              </a>
            </article>
          </div>
        </section>

        <footer className="rounded-[2rem] border border-white/10 bg-slate-950/75 px-8 py-8 shadow-[0_24px_80px_rgba(2,6,23,0.28)] backdrop-blur-md sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:items-start">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-[#7B57E0] to-[#8B6FE8] text-sm font-bold text-white">
                  CRM
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">CRM Platform</p>
                  <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Customer relationship system</p>
                </div>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-400">
                CRM untuk tim yang ingin memindahkan proses manual ke alur kerja yang lebih terukur, lebih cepat, dan lebih mudah dipantau.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Navigasi</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
                <a href="#features" className="transition hover:text-white">
                  Fitur
                </a>
                <a href="#pricing" className="transition hover:text-white">
                  Harga
                </a>
                <Link to="/login" className="transition hover:text-white">
                  Login
                </Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Status</p>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                Landing page PRD v3 selesai dengan navbar, pricing, footer, dan submit lead ke Supabase.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-sm text-slate-500">
            © 2026 CRM Platform. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}