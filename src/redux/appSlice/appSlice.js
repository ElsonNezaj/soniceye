import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  disableHeader: false,
};
export const appSlice = createSlice({
  initialState,
  name: "app",
  reducers: {
    toggleAppHeader: (state, action) => {
      state.disableHeader = action.payload;
    },
  },
});
export const { toggleAppHeader } = appSlice.actions;
export default appSlice.reducer;
