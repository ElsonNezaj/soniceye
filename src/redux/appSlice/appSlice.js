import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  disableHeader: false,
  isResultContainer: false,
};
export const appSlice = createSlice({
  initialState,
  name: "app",
  reducers: {
    toggleAppHeader: (state, action) => {
      state.disableHeader = action.payload;
    },
    toggleResultContainer: (state, action) => {
      state.isResultContainer = action.payload;
    },
  },
});
export const { toggleAppHeader, toggleResultContainer } = appSlice.actions;
export default appSlice.reducer;
