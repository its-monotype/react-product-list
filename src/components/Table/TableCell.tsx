import clsx from 'clsx';

export type TableCellProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<'td'>
>;

export function TableCell({ children, className, ...props }: TableCellProps) {
  return (
    <td className={clsx('px-6 py-4', className)} {...props}>
      {children}
    </td>
  );
}
