import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authApi";
import { userApi } from "../services/userApi";
import { promptApi } from "../services/promptQuery";
import { dashboardApi } from "../services/dashboardApi";
import { notificationApi } from "../services/notificationApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [promptApi.reducerPath]: promptApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [notificationApi.reducerPath]: notificationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      promptApi.middleware,
      dashboardApi.middleware,
      notificationApi.middleware,
    ),
});

setupListeners(store.dispatch);

export default store;
