import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authApi";
import { userApi } from "../services/userApi";
import { promptApi } from "../services/promptQuery";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [promptApi.reducerPath]: promptApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      promptApi.middleware,
    ),
});

setupListeners(store.dispatch);

export default store;
