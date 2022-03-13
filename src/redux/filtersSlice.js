import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  author: "",
  rating: "",
  sort: "",
  limit: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryFilter: (state, action) => {
      state.category = action.payload;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    setRatingFilter: (state, action) => {
      state.rating = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});
