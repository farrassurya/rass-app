export default function SelectField({ value, onChange, options, className = '' }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`w-full rounded-xl border border-[#334E68]/60 bg-slate-900/55 px-3 py-2.5 text-sm text-white outline-none transition-smooth focus:border-[#7B57E0]/50 focus:ring-2 focus:ring-[#7B57E0]/20 ${className}`}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}