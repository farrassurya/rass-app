import { Link } from 'react-router-dom';

export default function PrimaryButton({ children, type = 'button', variant = 'primary', className = '', to, ...props }) {
  const variants = {
    primary:
      'bg-gradient-to-r from-[#7B57E0] to-[#8B6FE8] text-white shadow-[0_12px_30px_rgba(123,87,224,0.35)] hover:from-[#8B6FE8] hover:to-[#9B7EF0]',
    secondary: 'border border-[#334E68]/70 bg-slate-950/70 text-white hover:bg-slate-900/70',
    ghost: 'bg-white/5 text-slate-100 hover:bg-white/10',
  };

  const classNameValue = `inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold transition-smooth disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classNameValue} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classNameValue} {...props}>
      {children}
    </button>
  );
}