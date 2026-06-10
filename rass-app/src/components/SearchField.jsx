import { Search as SearchIcon } from './WorkshopIcons.jsx';

export default function SearchField({
  value,
  onChange,
  placeholder = 'Search',
  className = '',
  clearable = false,
  onClear,
}) {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#334E68]/60 bg-slate-900/55 py-2.5 pl-11 pr-10 text-sm text-white outline-none transition-smooth placeholder:text-[#B8C0CC] focus:border-[#7B57E0]/50 focus:ring-2 focus:ring-[#7B57E0]/20"
      />
      <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#B8C0CC]" />
      {clearable && value ? (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400 transition-smooth hover:text-white"
          aria-label="Clear search"
        >
          x
        </button>
      ) : null}
    </div>
  );
}