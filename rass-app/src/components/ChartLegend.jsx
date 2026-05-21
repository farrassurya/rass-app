export default function ChartLegend({ items }) {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <div className={`h-3 w-3 rounded-full ${item.dotClass}`} />
          <span className="text-xs text-[#B8C0CC]">{item.label}</span>
        </div>
      ))}
    </div>
  );
}