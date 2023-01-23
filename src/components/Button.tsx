import clsx from 'clsx';
import { forwardRef } from 'react';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = 'button', ...props }, forwardedRef) => {
    return (
      <button
        ref={forwardedRef}
        // eslint-disable-next-line react/button-has-type
        type={type}
        className={clsx(
          'rounded-lg border border-neutral-600 bg-neutral-800 py-2.5 px-5 text-sm font-medium text-neutral-400 hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-neutral-700 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
