export default function PanelCard({ children, className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-[0_20px_60px_rgba(2,6,23,0.35)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}