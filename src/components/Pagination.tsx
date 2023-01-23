import { Button } from './Button';

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  pageCount,
  onPageChange,
}: PaginationProps) {
  const canPreviousPage = currentPage > 1;
  const canNextPage = currentPage < pageCount;

  const handlePreviousPage = () => onPageChange(currentPage - 1);
  const handleNextPage = () => onPageChange(currentPage + 1);

  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="text-sm text-neutral-400">
        Page <span className="text-white">{currentPage}</span> of{' '}
        <span className="text-white">{pageCount}</span>
      </div>
      <div className="flex items-center gap-2">
        <Button onClick={handlePreviousPage} disabled={!canPreviousPage}>
          Previous
        </Button>
        <Button onClick={handleNextPage} disabled={!canNextPage}>
          Next
        </Button>
      </div>
    </div>
  );
}
