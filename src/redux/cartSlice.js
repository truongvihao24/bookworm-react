import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsList: [],
  itemsCount: 0,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
