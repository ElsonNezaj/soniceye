/* eslint-disable react-hooks/exhaustive-deps */
import "./App.scss";
import Content from "./components/Content";
import Header from "./components/Header";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "antd";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useEffect } from "react";
import { ref, set } from "firebase/database";
import { db } from "./firebase";
import { signOutFailed } from "./redux/authSlice/authslice";
import ConfirmPassword from "./components/Shared/ConfirmPassword";
import LogOutModal from "./components/Shared/LogOutModal";
import ModelViewer from "./components/Shared/ModelViewer";
import OrderDialog from "./components/Shared/OrderDialog";

function App() {
  const dispatch = useAppDispatch();
  const isFetchingAuth = useAppSelector((state) => state.auth.isFetchingAuth);
  const isFetchingLogOut = useAppSelector(
    (state) => state.auth.isFetchingSignOut
  );
  const authUser = useAppSelector((state) => state.auth.authUser);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const isHeaderDisabled = useAppSelector((state) => state.app.disableHeader);

  useEffect(() => {
    dispatch(signOutFailed());
    return () => {
      set(ref(db, `/cartItems/${authUser?.uid}`), cartItems);
    };
  }, []);

  return (
    <div className="App">
      {(isFetchingAuth || isFetchingLogOut) && (
        <div className="backdrop">
          <CircularProgress />
          <Typography className="loadingLabel">
            {isFetchingAuth
              ? "Signing You In..."
              : isFetchingLogOut
              ? "Signig Out..."
              : ""}
          </Typography>
        </div>
      )}
      {!isHeaderDisabled && <Header />}
      <Content />
      <ConfirmPassword />
      <LogOutModal />
      <ModelViewer />
      <OrderDialog />
    </div>
  );
}

export default App;
