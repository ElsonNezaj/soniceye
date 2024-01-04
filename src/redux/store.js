import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice/productsSlice";
import cartReducer from "./cartSlice/cartSlice";
import authReducer from "./authSlice/authslice";
import createSagaMiddleware from "redux-saga";
import { rootSagas } from "./sagas";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
  },
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
