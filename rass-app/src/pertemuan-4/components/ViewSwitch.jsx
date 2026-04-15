export default function ViewSwitch({ activeView, onChange }) {
  const views = [
    { key: "guest", label: "Guest" },
    { key: "admin", label: "Admin" }
  ];

  return (
    <div className="inline-flex rounded-xl border border-[color:var(--p2)]/80 bg-white/90 p-1 shadow-sm">
      {views.map((view) => (
        <button
          key={view.key}
          type="button"
          onClick={() => onChange(view.key)}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            activeView === view.key
              ? "bg-[color:var(--deep)] text-white shadow"
              : "text-[color:var(--ink)] hover:bg-[color:var(--p1)]/50"
          }`}
        >
          {view.label}
        </button>
      ))}
    </div>
  );
}
