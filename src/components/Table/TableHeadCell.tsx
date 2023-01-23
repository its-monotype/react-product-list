import clsx from 'clsx';

export type TableHeadCellProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<'th'>
>;

export function TableHeadCell({
  children,
  className,
  ...props
}: TableHeadCellProps) {
  return (
    <th className={clsx('px-6 py-3 font-medium', className)} {...props}>
      {children}
    </th>
  );
}
