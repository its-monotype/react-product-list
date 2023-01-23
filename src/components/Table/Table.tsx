import clsx from 'clsx';

export type TableProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<'table'>
>;

export function Table({ children, className, ...props }: TableProps) {
  return (
    <div className={clsx('relative overflow-x-auto', className)}>
      <table className="w-full text-left text-sm text-neutral-400" {...props}>
        {children}
      </table>
    </div>
  );
}
