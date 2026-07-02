/**
 * FOOTER COMPONENT
 * Simple component dengan static content
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#7B57E0] to-[#8B6FE8] shadow-[0_16px_35px_rgba(123,87,224,0.22)]">
            <img src="/img/LogoProjectS4.png" alt="RevDrive Autosolution" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">RevDrive Autosolution</p>
            <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">Customer relationship system</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-[#B8C0CC]">
          <span className="rounded-full border border-[#334E68]/70 bg-slate-950/70 px-3 py-2">React Router</span>
          <span className="rounded-full border border-[#334E68]/70 bg-slate-950/70 px-3 py-2">Tailwind CSS</span>
        </div>

        <p className="text-sm text-[#B8C0CC]">© 2026 RevDrive Autosolution. All rights reserved.</p>
      </div>
    </footer>
  );
}
