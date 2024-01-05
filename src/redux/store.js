import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice/productsSlice";
import cartReducer from "./cartSlice/cartSlice";
import authReducer from "./authSlice/authslice";
import createSagaMiddleware from "redux-saga";
import { rootSagas } from "./sagas";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: {
        // Ignore state paths, e.g. state for 'items':
        ignoredPaths: ["auth.authUser"],
      },
      serializableCheck: {
        ignoredPaths: ["auth.authUser"],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSagas);
