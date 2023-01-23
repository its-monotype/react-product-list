import { $axios } from '@/lib/axios';
import { PaginatedQuery, PaginatedResponse } from '@/types';
import { Product } from '@/types/product';

const ENDPOINT = '/products';

export const ProductService = {
  async getProducts({ page, per_page, id }: PaginatedQuery) {
    const { data } = await $axios.get<PaginatedResponse<Product>>(ENDPOINT, {
      params: {
        page,
        per_page,
        id,
      },
    });
    // Inside the data object, we have the data wich can be array of products or a object of single product, we need to transform it to be always array of products even if it's a single product. That backend behavior is strange, but we need to handle it.
    if (data.data instanceof Array) {
      return data;
    }
    return {
      ...data,
      data: [data.data],
    };
  },
};
