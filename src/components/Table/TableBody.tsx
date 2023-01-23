import clsx from 'clsx';

export type TableBodyProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<'tbody'>
>;

export function TableBody({ children, className, ...props }: TableBodyProps) {
  return (
    <tbody
      className={clsx('divide-y border-t border-neutral-700', className)}
      {...props}
    >
      {children}
    </tbody>
  );
}
