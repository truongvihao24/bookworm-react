import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { filtersSlice } from "./filtersSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
