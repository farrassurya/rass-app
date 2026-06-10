import { Check, ChevronRight, Circle } from 'lucide-react';
import { DropdownMenu } from 'radix-ui';

import { cn } from '@/lib/utils';

function DropdownMenuTrigger({ ...props }) {
  return <DropdownMenu.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuContent({ className, sideOffset = 8, ...props }) {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-44 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-1 text-slate-200 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          className,
        )}
        {...props}
      />
    </DropdownMenu.Portal>
  );
}

function DropdownMenuItem({ className, inset, variant = 'default', ...props }) {
  return (
    <DropdownMenu.Item
      data-slot="dropdown-menu-item"
      className={cn(
        'relative flex cursor-default select-none items-center rounded-xl px-3 py-2 text-sm outline-none transition-colors focus:bg-white/10 focus:text-white data-disabled:pointer-events-none data-disabled:opacity-50',
        inset && 'pl-8',
        variant === 'destructive' && 'text-[#FF9B92] focus:bg-[#F53B30]/15 focus:text-[#FFB4AE]',
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuLabel({ className, inset, ...props }) {
  return <DropdownMenu.Label data-slot="dropdown-menu-label" className={cn('px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400', inset && 'pl-8', className)} {...props} />;
}

function DropdownMenuSeparator({ className, ...props }) {
  return <DropdownMenu.Separator data-slot="dropdown-menu-separator" className={cn('-mx-1 my-1 h-px bg-white/10', className)} {...props} />;
}

function DropdownMenuShortcut({ className, ...props }) {
  return <span data-slot="dropdown-menu-shortcut" className={cn('ml-auto text-xs tracking-widest text-slate-500', className)} {...props} />;
}

function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
  return (
    <DropdownMenu.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      checked={checked}
      className={cn('relative flex cursor-default select-none items-center rounded-xl py-2 pl-8 pr-3 text-sm outline-none transition-colors focus:bg-white/10 focus:text-white data-disabled:pointer-events-none data-disabled:opacity-50', className)}
      {...props}
    >
      <span className="absolute left-3 flex size-4 items-center justify-center">
        <DropdownMenu.ItemIndicator>
          <Check className="size-4" />
        </DropdownMenu.ItemIndicator>
      </span>
      {children}
    </DropdownMenu.CheckboxItem>
  );
}

function DropdownMenuRadioItem({ className, children, ...props }) {
  return (
    <DropdownMenu.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn('relative flex cursor-default select-none items-center rounded-xl py-2 pl-8 pr-3 text-sm outline-none transition-colors focus:bg-white/10 focus:text-white data-disabled:pointer-events-none data-disabled:opacity-50', className)}
      {...props}
    >
      <span className="absolute left-3 flex size-4 items-center justify-center">
        <DropdownMenu.ItemIndicator>
          <Circle className="size-2 fill-current" />
        </DropdownMenu.ItemIndicator>
      </span>
      {children}
    </DropdownMenu.RadioItem>
  );
}

function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
  return (
    <DropdownMenu.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      className={cn('flex cursor-default select-none items-center rounded-xl px-3 py-2 text-sm outline-none transition-colors focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white', inset && 'pl-8', className)}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto size-4" />
    </DropdownMenu.SubTrigger>
  );
}

function DropdownMenuSubContent({ className, ...props }) {
  return <DropdownMenu.SubContent data-slot="dropdown-menu-sub-content" className={cn('z-50 min-w-44 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-1 text-slate-200 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl', className)} {...props} />;
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};