export default function SectionHeader({ eyebrow, title, description, action, className = '' }) {
  return (
    <div className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${className}`}>
      <div>
        {eyebrow ? <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">{eyebrow}</p> : null}
        <h1 className={`text-3xl font-bold text-white ${eyebrow ? 'mt-2' : ''}`}>{title}</h1>
        {description ? <p className="mt-2 max-w-2xl text-sm text-slate-300">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}