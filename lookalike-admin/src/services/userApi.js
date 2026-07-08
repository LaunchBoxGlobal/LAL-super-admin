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
        isVerified = false,
        isSuspended = false,
        membershipStatus,
        minAge,
        maxAge,
        startDate,
        endDate,
        gender,
      }) => {
        const params = new URLSearchParams();

        if (search) params.append("search", search);
        if (limit) params.append("limit", limit);
        if (page) params.append("page", page);
        if (skip) params.append("skip", skip);

        // if (isVerified !== undefined) params.append("isVerified", isVerified);
        if (isSuspended !== undefined)
          params.append("isSuspended", isSuspended);

        // "all" means "no filter" from the dropdown, so don't send it
        if (membershipStatus && membershipStatus !== "all") {
          params.append("membershipStatus", membershipStatus);
        }

        // numbers: `if (minAge)` would drop a legitimate 0, so check for
        // undefined/null instead
        if (minAge !== undefined && minAge !== null) {
          params.append("minAge", minAge);
        }
        if (maxAge !== undefined && maxAge !== null) {
          params.append("maxAge", maxAge);
        }

        if (startDate) params.append("startDate", startDate);
        if (endDate) params.append("endDate", endDate);

        if (gender && gender !== "everyone") {
          params.append("gender", gender);
        }

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
