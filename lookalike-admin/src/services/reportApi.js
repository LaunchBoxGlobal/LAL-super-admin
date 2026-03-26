import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const reportApi = createApi({
  reducerPath: "reportApi",
  baseQuery: baseQuery,
  tagTypes: ["Reports", "User"],

  endpoints: (builder) => ({
    // get all reports
    getReports: builder.query({
      query: ({ search, page } = {}) => {
        const params = new URLSearchParams();

        if (search) params.append("search", search);
        if (page) params.append("page", page);

        return {
          url: `/admin/report/all?${params.toString()}`,
          method: "GET",
        };
      },

      providesTags: (result) =>
        result
          ? [
              { type: "Reports", id: "LIST" },
              ...result?.result?.data?.map((report) => ({
                type: "Reports",
                id: report.id,
              })),
            ]
          : [{ type: "Reports", id: "LIST" }],
    }),

    // suspend user
    suspendUser: builder.mutation({
      query: (userId) => ({
        url: `/admin/user/${userId}/suspend`,
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "Reports", id: "LIST" }],
    }),

    // unsuspend user
    unsuspendUser: builder.mutation({
      query: ({ userId, reportId }) => ({
        url: `/admin/user/${userId}/unsuspend/${reportId}`,
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "Reports", id: "LIST" }],
    }),
  }),
});

export const {
  useGetReportsQuery,
  useSuspendUserMutation,
  useUnsuspendUserMutation,
} = reportApi;
