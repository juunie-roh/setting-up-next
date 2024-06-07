import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tagTypes = ['A', 'B', 'C'] as const;
type Tag = (typeof tagTypes)[number];
type Param = {
  data?: Record<string, any>;
  body?: Record<string, any>;
  url: string;
  tag: Tag;
};
// Query Builder
const buildQuery = (data?: Record<string, any>) =>
  new URLSearchParams(data).toString();

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes,
  endpoints: (builder) => ({
    // Common Endpoints:
    get: builder.query({
      query: (param: Param) =>
        param.data ? `${param.url}?${buildQuery(param.data)}` : param.url,
      providesTags: (_result, _error, param) => [{ type: param.tag }], // Cash Provider Tags
    }),
    post: builder.mutation({
      query: (param: Param) => ({
        url: param.url,
        method: 'POST',
        body: param.body,
      }),
      invalidatesTags: (_result, _error, param) => [{ type: param.tag }], // Cash Invalidator Tags
    }),
  }),
});

// Export the auto-generated hook for the query endpoints
export const { useGetQuery, usePostMutation } = apiSlice;
