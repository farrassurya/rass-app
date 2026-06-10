export default function FormField({ label, name, value, onChange, type = 'text', placeholder, className = '', autoComplete }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-medium text-[#B8C0CC]">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-[#334E68]/70 bg-slate-900/70 px-4 py-3 text-white placeholder:text-[#B8C0CC] outline-none transition-smooth focus:border-[#7B57E0] focus:ring-2 focus:ring-[#7B57E0]"
      />
    </label>
  );
}