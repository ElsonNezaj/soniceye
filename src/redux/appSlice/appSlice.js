import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  disableHeader: false,
  isResultContainer: false,
  isModelViewOpen: false,
  isOrderDialogOpen: false,
  selectedOrder: undefined,
  selectedOrderKey: undefined,
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
    setSelectedOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },
    setSelectedOrderKey: (state, action) => {
      state.selectedOrderKey = action.payload;
    },
    toggleOrderDialog: (state, action) => {
      state.isOrderDialogOpen = action.payload;
    },
  },
});
export const {
  toggleAppHeader,
  toggleResultContainer,
  toggleModelViewer,
  setSelectedOrder,
  setSelectedOrderKey,
  toggleOrderDialog,
} = appSlice.actions;
export default appSlice.reducer;
