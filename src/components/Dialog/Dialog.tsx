import * as DialogPrimitive from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { forwardRef } from 'react';

import { withClassName } from '@/components/HOC/withClassName';

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogTitle = withClassName(
  DialogPrimitive.Title,
  'break-words text-xl font-semibold'
);

export const DialogDescription = withClassName(
  DialogPrimitive.Description,
  'mt-4 mb-6 text-sm text-neutral-500 dark:text-neutral-400'
);

export type DialogContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>;

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[998] animate-overlayShow bg-black/50" />
        <DialogPrimitive.Content
          ref={forwardedRef}
          {...props}
          className={clsx(
            'fixed top-1/2 left-1/2 z-[999] max-h-[85vh] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 animate-dialogContentShow overflow-y-auto overflow-x-hidden rounded-xl bg-white p-6 shadow-xl outline-none dark:bg-neutral-800 md:w-full',
            className
          )}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    );
  }
);
DialogContent.displayName = 'DialogContent';

export const DialogClose = DialogPrimitive.Close;
