import React from "react";

export const InputField = ({ label, name, value, onChange, error, placeholder }) => (
  <div className="mb-6 group">
    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400/80 mb-2 transition-all group-focus-within:text-cyan-300">
      {label}
    </label>
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full bg-[#0f172a]/80 border-2 p-4 rounded-xl text-white font-bold outline-none transition-all placeholder:text-slate-600 ${
        error ? "border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]" : "border-white/5 focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
      }`}
    />
    {error && <p className="text-red-400 text-[9px] mt-2 font-black uppercase italic tracking-widest">⚠ {error}</p>}
  </div>
);

export const SelectField = ({ label, name, value, onChange, error, options }) => (
  <div className="mb-6">
    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400/80 mb-2">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full bg-[#0f172a]/80 border-2 p-4 rounded-xl text-white font-bold cursor-pointer outline-none transition-all appearance-none ${
        error ? "border-red-500/50" : "border-white/5 focus:border-cyan-500"
      }`}
    >
      <option value="" className="bg-slate-900 text-slate-500">Choose {label}</option>
      {options.map((opt) => (<option key={opt.val} value={opt.val} className="bg-slate-900">{opt.label}</option>))}
    </select>
  </div>
);