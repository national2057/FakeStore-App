import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const fakeStoreApi = createApi({
  reducerPath: 'fakeStoreApi',
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (builder) => ({
    
    getAllProduct: (builder.query) ({
      query: (query)=>({
        url: "/products",
      })
    }),

    // getProductByTitle: (builder.query) ({
    //   query: (query)=>({
    //     url: "/products",
    //   })
    // }),

    getSingleProduct: (builder.query) ({
      query: (id)=>({
        url: `/products/${id}`,
      })
    }),

    // get

  }),
})

export const {useGetAllProductQuery, useGetSingleProductQuery } = fakeStoreApi