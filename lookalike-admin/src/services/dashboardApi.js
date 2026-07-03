import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    // get dashboard stats
    getStats: builder.query({
      query: ({ occupationUseage, revenue }) => {
        return {
          url: `/admin/dashboard/stats`,
          method: "GET",
          params: {
            occupationUseage,
            revenue,
          },
        };
      },
    }),
  }),
});

export const { useGetStatsQuery } = dashboardApi;
