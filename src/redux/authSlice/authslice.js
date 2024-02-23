import { createSlice } from "@reduxjs/toolkit";
import { ref, set } from "firebase/database";
import { db } from "../../firebase";

const initialState = {
  isFetching: false,
  isFetchingAuth: false,
  isFetchingSignOut: false,
  authUser: undefined,
  isAuth: false,
  isSignOutConfirm: false,
  isConfirmPassword: false,
  updateData: undefined,
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
    getLoginRequested: (state) => {
      state.isFetchingAuth = true;
    },
    getLoginSucceded: (state) => {
      state.isFetchingAuth = false;
      state.isAuth = true;
    },
    setLoginDataFromDatabase: (state, action) => {
      state.authUser = action.payload;
    },
    getLoginFailed: (state) => {
      state.isFetchingAuth = false;
    },
    signOutRequested: (state, action) => {
      action.payload?.state !== "no-update" &&
        set(
          ref(db, `/cartItems/${action.payload?.uid}`),
          action.payload?.items
        );
      state.isFetchingSignOut = true;
    },
    signOutSucceded: (state) => {
      state.isFetchingSignOut = false;
      state.authUser = undefined;
      state.isAuth = false;
      window.location.href = "/";
    },
    signOutFailed: (state) => {
      state.isFetchingSignOut = false;
    },
    setUpdatedUserDataFromDatabase: (state, action) => {
      state.authUser = action.payload;
    },
    toggleConfirmSignOut: (state, action) => {
      state.isSignOutConfirm = action.payload;
    },
    toggleConfirmPassword: (state, action) => {
      state.isConfirmPassword = action.payload.status;
      state.updateData = action.payload.data;
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
  setLoginDataFromDatabase,
  setUpdatedUserDataFromDatabase,
  toggleConfirmSignOut,
  toggleConfirmPassword,
} = authSlice.actions;
export default authSlice.reducer;
