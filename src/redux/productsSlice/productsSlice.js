import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: "row",
};

export const productsSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    toggleProductsView: (state, action) => {
      state.view = action.payload;
    },
  },
});

export const { toggleProductsView } = productsSlice.actions;
export default productsSlice.reducer;
