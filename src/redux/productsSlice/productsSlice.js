import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: "row",
};

export const productsSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    changeView: (state, action) => {
      state.view = action.payload;
    },
  },
});

export const { changeView } = productsSlice.actions;
export default productsSlice.reducer;
