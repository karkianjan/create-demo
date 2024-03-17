import { createSlice } from "@reduxjs/toolkit";
export const postslice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
  },
  reducers: {
    getPostFetch: (state) => {
      state.isLoading = true;
    },

    getPostSuccess: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    getPostFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getPostFetch, getPostSuccess, getPostFailure } =
  postslice.actions;
export default postslice.reducer;
