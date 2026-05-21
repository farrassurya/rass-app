export default function ColorSwatch({ label, swatchClass, hex }) {
  return (
    <div className="space-y-2">
      <p className="text-lg text-white">{label}</p>
      <div className={`h-20 w-20 rounded-[28px] border border-white/10 ${swatchClass}`} />
      <div className="space-y-1 text-sm text-slate-200">
        <p className="font-semibold text-white">{swatchClass.replace('bg-[', '').replace(']', '')}</p>
        <p className="text-slate-400">{hex}</p>
      </div>
    </div>
  );
}