import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const notificationApi = createApi({
  reducerPath: "notificationApi",
  baseQuery: baseQuery,
  tagTypes: ["Notifications"],

  endpoints: (builder) => ({
    // post new notification
    createNotification: builder.mutation({
      query: (data) => ({
        url: `/admin/announcement`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Notifications"],
    }),

    // get all notifications
    getNotifications: builder.query({
      query: ({ search, page, limit }) => {
        const params = new URLSearchParams();

        if (search) params.append("search", search);
        if (page) params.append("page", page);
        if (limit) params.append("limit", limit);

        return {
          url: `/admin/announcement/all?${params.toString()}`,
        };
      },
      providesTags: ["Notifications"],
    }),

    // delete notification
    deleteNotification: builder.mutation({
      query: (notificationId) => ({
        url: `/admin/announcement/${notificationId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notifications"],
    }),
  }),
});

export const {
  useCreateNotificationMutation,
  useGetNotificationsQuery,
  useDeleteNotificationMutation,
} = notificationApi;
