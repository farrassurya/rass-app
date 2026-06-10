export default function IconTile({ icon: Icon, label, active = false }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-3 py-3 ${active ? 'border-[#7B57E0]/45 bg-[#7B57E0]/12 text-white' : 'border-white/10 bg-white/5 text-slate-200'}`}
    >
      {Icon ? <Icon className="h-5 w-5" /> : <span className="h-5 w-5 rounded-full bg-white/20" />}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}