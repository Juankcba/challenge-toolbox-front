import { createSlice } from "@reduxjs/toolkit";

export const fileSlice = createSlice({
  name: "files",
  initialState: {
    files: [],
    isLoading: false,
  },
  reducers: {
    startLoadingFlies: (state /* action */) => {
      state.isLoading = true;
    },
    setFiles: (state, action) => {
      state.isLoading = false;
      state.files = action.payload.files;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingFlies, setFiles } = fileSlice.actions;
