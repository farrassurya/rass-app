import { X } from 'lucide-react';
import { Dialog } from 'radix-ui';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

function DialogPortal({ ...props }) {
  return <Dialog.Portal data-slot="dialog-portal" {...props} />;
}

function DialogOverlay({ className, ...props }) {
  return (
    <Dialog.Overlay
      data-slot="dialog-overlay"
      className={cn('fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', className)}
      {...props}
    />
  );
}

function DialogContent({ className, children, ...props }) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <Dialog.Content
        data-slot="dialog-content"
        className={cn(
          'fixed left-1/2 top-1/2 z-50 grid w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 gap-5 rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.55)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:w-full',
          className,
        )}
        {...props}
      >
        {children}
        <Dialog.Close asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 h-8 w-8 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
          >
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Button>
        </Dialog.Close>
      </Dialog.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }) {
  return <div data-slot="dialog-header" className={cn('flex flex-col gap-2 text-center sm:text-left', className)} {...props} />;
}

function DialogFooter({ className, ...props }) {
  return <div data-slot="dialog-footer" className={cn('flex flex-col-reverse gap-3 sm:flex-row sm:justify-end', className)} {...props} />;
}

function DialogTitle({ className, ...props }) {
  return <Dialog.Title data-slot="dialog-title" className={cn('text-2xl font-semibold tracking-tight text-white', className)} {...props} />;
}

function DialogDescription({ className, ...props }) {
  return <Dialog.Description data-slot="dialog-description" className={cn('text-sm leading-6 text-slate-300', className)} {...props} />;
}

export { Dialog, DialogPortal, DialogOverlay, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription };