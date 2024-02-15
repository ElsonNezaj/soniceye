/* eslint-disable react-hooks/exhaustive-deps */
import "./App.scss";
import Content from "./components/Content";
import Header from "./components/Header";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "antd";
import { useAppSelector } from "./redux/hooks";
import { useEffect } from "react";
import { ref, set } from "firebase/database";
import { db } from "./firebase";

function App() {
  const isFetchingAuth = useAppSelector((state) => state.auth.isFetchingAuth);
  const isFetchingLogOut = useAppSelector(
    (state) => state.auth.isFetchingSignOut
  );
  const authUser = useAppSelector((state) => state.auth.authUser);
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  useEffect(() => {
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
      <Header />
      <Content />
    </div>
  );
}

export default App;
