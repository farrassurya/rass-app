export default function UserPreview({ name, email, image }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
      <img src={image} alt={name} className="h-10 w-10 rounded-full object-cover" />
      <div>
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-xs text-[#B8C0CC]">{email}</p>
      </div>
    </div>
  );
}