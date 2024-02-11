import { createSlice } from "@reduxjs/toolkit";
import { ref, set } from "firebase/database";
import { db } from "../../firebase";

const initialState = {
  isFetchingAuth: false,
  isFetchingSignOut: false,
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
    signOutRequested: (state, action) => {
      set(ref(db, `/cartItems/${action.payload.uid}`), action.payload.items);
      state.isFetchingSignOut = true;
    },
    signOutSucceded: (state) => {
      state.isFetchingSignOut = false;
      state.authUser = undefined;
      state.isAuth = false;
    },
    signOutFailed: (state) => {
      state.isFetchingSignOut = true;
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
  signOutRequested,
  signOutSucceded,
  signOutFailed,
} = authSlice.actions;
export default authSlice.reducer;
