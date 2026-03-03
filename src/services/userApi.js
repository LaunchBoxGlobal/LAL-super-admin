import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    // get user profile
    getProfile: builder.query({
      query: () => "/admin/users/my-profile",
    }),

    // get all users
    getUsers: builder.query({
      query: ({
        search,
        page,
        limit,
        skip,
        status,
        isVerified = true,
        isSuspended = true,
      }) => {
        const params = new URLSearchParams();

        if (search) params.append(`search`, search);
        if (status) params.append("status", status);
        if (limit) params.append("limit", limit);
        if (page) params.append("page", page);
        if (skip) params.append("skip", skip);
        if (isVerified) params.append("isVerified", isVerified);
        params.append("isSuspended", isSuspended);

        return {
          url: `/admin/user/all?${params.toString()}`,
        };
      },
    }),

    // update user status
    updateUserStatus: builder.mutation({
      query: ({ userId, status }) => ({
        url: `/admin/users/approveUserProfile/${userId}`,
        method: "PUT",
        body: { status },
      }),
    }),

    // delete user
    deleteUserAccount: builder.mutation({
      query: ({ userId }) => ({
        url: `/admin/users/${userId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetUsersQuery,
  useUpdateUserStatusMutation,
  useDeleteUserAccountMutation,
} = userApi;
