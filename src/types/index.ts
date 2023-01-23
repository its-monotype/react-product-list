export interface PaginatedResponse<TData> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: TData[];
}

export interface PaginatedQuery {
  page?: number;
  per_page?: number;
  id?: number;
}
