import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "./filtersSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
  },
});

export default store;
