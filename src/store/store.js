import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./apis";
import { fileSlice } from "./slices/files";

export const store = configureStore({
  reducer: {
    files: fileSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
