export default function FilterSelect({ id, label, value, options, onChange }) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-(--ink)">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-(--p2) bg-white/90 px-4 py-2.5 text-sm text-(--ink) outline-none transition focus:border-(--deep) focus:ring-2 focus:ring-(--p1)"
      >
        <option value="all">Semua</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
