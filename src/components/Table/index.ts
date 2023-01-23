import { Table as InternalTable } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHead } from './TableHead';
import { TableHeadCell } from './TableHeadCell';
import { TableRow } from './TableRow';

type TableType = typeof InternalTable & {
  Head: typeof TableHead;
  HeadCell: typeof TableHeadCell;
  Body: typeof TableBody;
  Row: typeof TableRow;
  Cell: typeof TableCell;
};

const Table = InternalTable as TableType;

Table.Head = TableHead;
Table.HeadCell = TableHeadCell;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export type { TableProps } from './Table';
export type { TableBodyProps } from './TableBody';
export type { TableCellProps } from './TableCell';
export type { TableHeadProps } from './TableHead';
export type { TableHeadCellProps } from './TableHeadCell';
export type { TableRowProps } from './TableRow';

export { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow };
