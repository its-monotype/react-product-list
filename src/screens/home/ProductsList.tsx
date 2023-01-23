import { useQuery } from '@tanstack/react-query';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  PaginationState,
  Updater,
  useReactTable,
} from '@tanstack/react-table';
import { AxiosError } from 'axios';
import chroma from 'chroma-js';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import notFoundIll from '@/assets/not-found.svg';
import errorIll from '@/assets/server-error.svg';
import { Button } from '@/components/Button';
import Loader from '@/components/Loader';
import { Pagination } from '@/components/Pagination';
import { SearchIcon } from '@/components/SearchIcon';
import { Table } from '@/components/Table';
import useDebounce from '@/hooks/use-debounce';
import { ProductService } from '@/services/ProductService';
import { PaginatedResponse } from '@/types';
import { Product } from '@/types/product';

import { ProductDetailsDialog } from './ProductDetailsDialog';

const columnHelper = createColumnHelper<Product>();

const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
  }),
  columnHelper.accessor('name', {
    header: 'Name',
  }),
  columnHelper.accessor('year', {
    header: 'Year',
  }),
];

export function ProductsList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const globalFilter = searchParams.get('id') ?? '';
  const pageIndex = searchParams.get('page')
    ? Number(searchParams.get('page')) - 1
    : 0;
  const pageSize = searchParams.get('per_page')
    ? Number(searchParams.get('per_page'))
    : 5;

  const debouncedGlobalFilter = useDebounce(globalFilter, 500);

  const fetchDataOptions = {
    id:
      debouncedGlobalFilter !== '' ? Number(debouncedGlobalFilter) : undefined,
    page: pageIndex + 1,
    per_page: pageSize,
  };

  const { data, isLoading, isError, error } = useQuery<
    PaginatedResponse<Product>,
    AxiosError
  >({
    queryKey: ['products', fetchDataOptions],
    queryFn: () => ProductService.getProducts(fetchDataOptions),
  });

  function handleGlobalFilterChange(value: string) {
    setSearchParams({ id: value });
  }

  function handlePaginationChange(updater: Updater<PaginationState>) {
    const newPagination =
      updater instanceof Function ? updater({ pageIndex, pageSize }) : updater;
    setSearchParams((sp) => {
      sp.set('page', String(newPagination.pageIndex + 1));
      sp.set('per_page', String(newPagination.pageSize));
      return sp;
    });
  }

  const handleDialogOpen = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setSelectedProduct(null);
    setIsDialogOpen(false);
  };

  const table = useReactTable({
    data: data?.data ?? [],
    columns,
    pageCount: data?.total_pages,
    state: {
      globalFilter,
      pagination: { pageIndex, pageSize },
    },
    onGlobalFilterChange: handleGlobalFilterChange,
    onPaginationChange: handlePaginationChange,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualFiltering: true,
    // debugTable: true,
  });

  function renderTableContent() {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center gap-2 py-24">
          <Loader />
          <div className="text-neutral-400">Loading products...</div>
        </div>
      );
    }

    if (isError) {
      if (error.response?.status === 404) {
        return (
          <div className="flex flex-col items-center justify-center gap-6 py-12">
            <img
              src={notFoundIll}
              className="h-36"
              alt="Not found illustration"
            />
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-lg font-bold">No products found</div>
              <div className="mt-2 text-neutral-400">
                Try changing your search criteria and try again.
              </div>
              <Button
                className="mt-4"
                onClick={() => table.setGlobalFilter('')}
              >
                Clear search
              </Button>
            </div>
          </div>
        );
      }
      return (
        <div className="flex flex-col items-center justify-center gap-6 py-12">
          <img src={errorIll} className="h-36" alt="Error illustration" />
          <div className="text-center">
            <div className="text-lg font-bold">
              Whoops, something went wrong
            </div>
            <div className="mt-2 text-red-400">{error.message}</div>
          </div>
        </div>
      );
    }

    return (
      <Table className="mt-6 w-full rounded-lg">
        <Table.Head>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Table.HeadCell key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </Table.HeadCell>
                );
              })}
            </tr>
          ))}
        </Table.Head>
        <Table.Body className="divide-y-0">
          {table.getRowModel().rows.map((row) => {
            return (
              <Table.Row
                className="cursor-pointer font-bold hover:opacity-90"
                key={row.id}
                onClick={() => handleDialogOpen(row.original)}
                style={{
                  backgroundColor: row.original.color,
                  color:
                    chroma(row.original.color).luminance() > 0.4
                      ? chroma(row.original.color).brighten(1.5).hex()
                      : chroma(row.original.color).darken(1.5).hex(),
                }}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Table.Cell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
  return (
    <>
      <div className="mx-auto mt-8 flex max-w-5xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto flex w-full max-w-lg justify-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon />
          </div>
          <input
            className="block w-full rounded-lg border border-neutral-600 bg-neutral-700 p-4 pl-10 text-sm text-white placeholder:text-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            type="number"
            aria-label="Search products by ID"
            placeholder="Search products by ID..."
            value={table.getState().globalFilter}
            onChange={(e) => table.setGlobalFilter(e.target.value)}
          />
        </div>
        {renderTableContent()}
        {!!table.getPageCount() && (
          <Pagination
            currentPage={table.getState().pagination.pageIndex + 1}
            pageCount={table.getPageCount()}
            onPageChange={(page) => table.setPageIndex(page - 1)}
          />
        )}
      </div>
      <ProductDetailsDialog
        product={selectedProduct}
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
      />
    </>
  );
}
