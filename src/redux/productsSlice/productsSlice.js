import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeRoute: "",
  activeRouteData: {},
};

export const productsSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    saveActiveRoute: (state, action) => {
      state.activeRoute = action.payload;
    },
    saveActionRouteData: (state, action) => {
      state.activeRouteData = action.payload;
    },
    clearActiveRouteData: (state) => {
      state.activeRouteData = {};
      state.activeRoute = "";
    },
  },
});

export const { saveActionRouteData, saveActiveRoute, clearActiveRouteData } =
  productsSlice.actions;
export default productsSlice.reducer;
