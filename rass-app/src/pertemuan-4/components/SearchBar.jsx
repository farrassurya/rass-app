export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full">
      <label htmlFor="search" className="mb-2 block text-sm font-semibold text-[color:var(--ink)]">
        Search Destinasi
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Cari nama, kota, atau provinsi..."
        className="w-full rounded-xl border border-[color:var(--p2)] bg-white/90 px-4 py-2.5 text-sm text-[color:var(--ink)] outline-none transition placeholder:text-[color:var(--muted)] focus:border-[color:var(--deep)] focus:ring-2 focus:ring-[color:var(--p1)]"
      />
    </div>
  );
}
