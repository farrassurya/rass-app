import { ChevronDown } from './WorkshopIcons.jsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu.jsx';

export default function SelectField({ value, onChange, options, className = '' }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={`flex w-full items-center justify-between rounded-xl border border-[#334E68]/60 bg-slate-900/55 px-3 py-2.5 text-sm text-white outline-none transition-smooth hover:bg-slate-900/70 focus:border-[#7B57E0]/50 focus:ring-2 focus:ring-[#7B57E0]/20 ${className}`}
        >
          <span className="truncate">{value}</span>
          <ChevronDown className="h-4 w-4 text-[#B8C0CC]" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-(--radix-popper-anchor-width)">
        {options.map((option) => (
          <DropdownMenuItem
            key={option}
            onSelect={() => onChange({ target: { value: option } })}
            className={option === value ? 'bg-white/10 text-white' : ''}
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
}