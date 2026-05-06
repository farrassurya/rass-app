import { Sparkles, Wrench } from './WorkshopIcons.jsx';

/**
 * FOOTER COMPONENT
 * Simple component dengan static content
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500 to-amber-600 text-slate-950 shadow-[0_16px_35px_rgba(249,115,22,0.22)]">
            <Wrench className="h-5 w-5" />
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              RevDrive Bengkel Admin <Sparkles className="h-4 w-4 text-orange-400" />
            </p>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Workshop management system</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">React Router</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Tailwind CSS</span>
        </div>

        <p className="text-sm text-slate-400">© 2026 RevDrive. All rights reserved.</p>
      </div>
    </footer>
  );
}
