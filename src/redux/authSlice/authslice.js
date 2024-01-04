import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetchingAuth: false,
  authUser: undefined,
};

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    getAuthRequested: (state, action) => {
      state.isFetchingAuth = true;
    },
    getAuthSucceded: (state, action) => {
      state.isFetchingAuth = false;
      state.authUser = action.payload;
    },
    getAuthFailed: (state) => {
      state.isFetchingAuth = false;
    },
  },
});

export const { getAuthRequested, getAuthSucceded, getAuthFailed } =
  authSlice.actions;
export default authSlice.reducer;
