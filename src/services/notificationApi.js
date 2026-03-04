import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const notificationApi = createApi({
  reducerPath: "notificationApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    // post new notification
    createNotification: builder.mutation({
      query: (data) => ({
        url: `/admin/announcement`,
        method: "POST",
        body: data,
      }),
    }),

    // get all users
    getNotifications: builder.query({
      //   query: ({ search, page, limit, skip, status }) => {
      query: () => {
        // const params = new URLSearchParams();

        // if (search) params.append(`search`, search);
        // if (status) params.append("status", status);
        // if (limit) params.append("limit", limit);
        // if (page) params.append("page", page);
        // if (skip) params.append("skip", skip);

        return {
          //   url: `/admin/announcement/all?${params.toString()}`,
          url: `/admin/announcement/all`,
        };
      },
    }),

    // delete user
    deleteNotification: builder.mutation({
      query: ({ notificationId }) => ({
        url: `/admin/announcement/${notificationId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateNotificationMutation,
  useGetNotificationsQuery,
  useDeleteNotificationMutation,
} = notificationApi;
