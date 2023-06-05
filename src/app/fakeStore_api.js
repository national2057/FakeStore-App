import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const fakeStoreApi = createApi({
  reducerPath: 'fakeStoreApi',
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({

    getAllProduct: (builder.query)({
      query: (query) => ({
        url: "/products",
      })
    }),

    getSingleProduct: (builder.query)({
      query: (id) => ({
        url: `/products/${id}`,
      })
    }),

    getProductByCategory: (builder.query)({
      query: (query) => ({
        url: "/categories",
      })
    }),

    // get

  }),
})

export const { useGetAllProductQuery, useGetSingleProductQuery, useGetProductByCategoryQuery, } = fakeStoreApi