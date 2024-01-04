import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetchingAuth: false,
  authUser: undefined,
  isAuth: false,
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
      state.isAuth = true;
      window.location.href = "/";
    },
    getAuthFailed: (state) => {
      state.isFetchingAuth = false;
    },
    getLoginRequested: (state, action) => {
      state.isFetchingAuth = true;
    },
    getLoginSucceded: (state, action) => {
      state.isFetchingAuth = false;
      state.authUser = action.payload;
      state.isAuth = true;
      window.location.href = "/";
    },
    getLoginFailed: (state) => {
      state.isFetchingAuth = false;
    },
  },
});

export const {
  getAuthRequested,
  getAuthSucceded,
  getAuthFailed,
  getLoginRequested,
  getLoginSucceded,
  getLoginFailed,
} = authSlice.actions;
export default authSlice.reducer;
