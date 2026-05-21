export default function CheckboxField({ children, className = '', ...props }) {
  return (
    <label className={`flex cursor-pointer items-start gap-2 ${className}`}>
      <input
        type="checkbox"
        className="mt-1 h-4 w-4 rounded border-[#334E68]/70 bg-slate-900/70"
        {...props}
      />
      <span className="text-sm text-[#B8C0CC]">{children}</span>
    </label>
  );
}