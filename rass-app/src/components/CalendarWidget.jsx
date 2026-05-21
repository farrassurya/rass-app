import PanelCard from './PanelCard.jsx';
import PrimaryButton from './PrimaryButton.jsx';

export default function CalendarWidget({ title = 'Calendar', schedule }) {
  return (
    <PanelCard className="p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">Schedule</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
        </div>
        <div className="flex gap-2">
          <button className="rounded-lg border border-[#334E68]/70 bg-slate-950/70 p-2 text-white hover:bg-slate-900">◀</button>
          <button className="rounded-lg border border-[#334E68]/70 bg-slate-950/70 p-2 text-white hover:bg-slate-900">▶</button>
        </div>
      </div>

      <div className="mb-4 text-xs text-[#B8C0CC]">Aug 10, Mon · TODAY</div>

      <div className="space-y-2">
        {schedule.map((item) => (
          <div key={`${item.time}-${item.event}`} className="rounded-lg border border-[#334E68]/50 bg-slate-900/30 p-3">
            <p className="text-xs text-[#B8C0CC]">{item.time}</p>
            <p className="mt-1 text-sm font-medium text-white">{item.event}</p>
          </div>
        ))}
      </div>

      <PrimaryButton variant="secondary" className="mt-4 w-full py-2 text-xs font-semibold text-[#7B57E0]">
        See full calendar →
      </PrimaryButton>
    </PanelCard>
  );
}