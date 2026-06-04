export default function StatusPill({ children, tone = 'neutral', className = '' }) {
  const toneClasses = {
    neutral: 'border-white/10 bg-white/5 text-slate-200',
    purple: 'border-[#7B57E0]/30 bg-[#7B57E0]/12 text-[#DDD4FF]',
    success: 'border-emerald-400/20 bg-emerald-400/15 text-emerald-300',
    warning: 'border-amber-400/20 bg-amber-400/15 text-amber-300',
    info: 'border-sky-400/20 bg-sky-400/15 text-sky-300',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${toneClasses[tone] ?? toneClasses.neutral} ${className}`}
    >
      {children}
    </span>
  );
}