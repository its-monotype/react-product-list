import clsx from 'clsx';

export type TableHeadProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<'thead'>
>;

export function TableHead({ children, className, ...props }: TableHeadProps) {
  return (
    <thead className={clsx('bg-neutral-800', className)} {...props}>
      {children}
    </thead>
  );
}
