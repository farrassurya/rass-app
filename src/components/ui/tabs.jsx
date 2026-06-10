import { Tabs } from 'radix-ui';

import { cn } from '@/lib/utils';

function TabsList({ className, ...props }) {
  return (
    <Tabs.List
      data-slot="tabs-list"
      className={cn(
        'inline-flex h-11 items-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-1.5 text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]',
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }) {
  return (
    <Tabs.Trigger
      data-slot="tabs-trigger"
      className={cn(
        'inline-flex h-8 items-center justify-center rounded-xl px-3 text-sm font-medium text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B57E0]/50 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#7B57E0] data-[state=active]:to-[#8B6FE8] data-[state=active]:text-white data-[state=active]:shadow-[0_10px_24px_rgba(123,87,224,0.28)]',
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }) {
  return <Tabs.Content data-slot="tabs-content" className={cn('mt-5 outline-none focus-visible:ring-0', className)} {...props} />;
}

export { Tabs, TabsList, TabsTrigger, TabsContent };