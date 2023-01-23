import clsx from 'clsx';

export type TableRowProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<'tr'>
>;

export function TableRow({ children, className, ...props }: TableRowProps) {
  return (
    <tr
      className={clsx('border-neutral-700 bg-neutral-900', className)}
      {...props}
    >
      {children}
    </tr>
  );
}
