import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  disableHeader: false,
  isResultContainer: false,
  isModelViewOpen: false,
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
    toggleModelViewer: (state, action) => {
      state.isModelViewOpen = action.payload;
    },
  },
});
export const { toggleAppHeader, toggleResultContainer, toggleModelViewer } =
  appSlice.actions;
export default appSlice.reducer;
