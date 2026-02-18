import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const promptApi = createApi({
  reducerPath: "promptApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    // update user status
    addPrompt: builder.mutation({
      query: (data) => ({
        url: `/admin/prompt`,
        method: "POST",
        body: data,
      }),
    }),

    // get all prompts
    getPrompts: builder.query({
      query: ({ search, page, limit, skip }) => {
        const params = new URLSearchParams();

        if (search) params.append(`search`, search);
        if (limit) params.append("limit", limit);
        if (page) params.append("page", page);
        if (skip) params.append("skip", skip);

        return {
          url: `/admin/prompt/all?${params.toString()}`,
          // url: `/admin/prompt/all`,
          method: "GET",
        };
      },
    }),

    // update user status
    // updatePrompt: builder.mutation({
    //   query: ({ userId, status }) => ({
    //     url: `/users/approveUserProfile/${userId}`,
    //     method: "PUT",
    //     body: { status },
    //   }),
    // }),

    // delete user
    // deletePrompt: builder.mutation({
    //   query: ({ userId }) => ({
    //     url: `/users/${userId}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const { useAddPromptMutation, useGetPromptsQuery } = promptApi;
