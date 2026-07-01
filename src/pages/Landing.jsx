import { useState } from 'react';

export default function Landing() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  }

  return (
    <main className="min-h-screen overflow-hidden px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl items-center justify-center">
        <section className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_30px_120px_rgba(2,6,23,0.55)] backdrop-blur-xl sm:p-12 lg:p-16">
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
      </div>
    </main>
  );
}
