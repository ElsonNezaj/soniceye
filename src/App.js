import "./App.scss";
import Content from "./components/Content";
import Header from "./components/Header";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "antd";
import { useAppSelector } from "./redux/hooks";
import { useEffect } from "react";
import { onValue, ref, set } from "firebase/database";
import { db } from "./firebase";

function App() {
  const isFetchingAuth = useAppSelector((state) => state.auth.isFetchingAuth);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const authUser = useAppSelector((state) => state.auth.authUser);

  useEffect(() => {
    if (authUser && isAuth) {
      onValue(ref(db, "/users"), (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const snapData = snapshot.val();
          const keys = Object.keys(snapData);
          const userExists = keys.find((el) => el === authUser.uid);
          if (userExists) {
            return;
          } else {
            set(ref(db, `/users/${authUser.uid}`), {
              ...authUser,
            });
          }
        } else {
          set(ref(db, `/users/${authUser.uid}`), {
            ...authUser,
          });
        }
      });
    }
  }, []);

  return (
    <div className="App">
      {isFetchingAuth && (
        <div className="backdrop">
          <CircularProgress />
          <Typography className="loadingLabel">Signing You In...</Typography>
        </div>
      )}
      <Header />
      <Content />
    </div>
  );
}

export default App;
