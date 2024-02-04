import "./App.scss";
import Content from "./components/Content";
import Header from "./components/Header";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "antd";
import { useAppSelector } from "./redux/hooks";
import { useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "./firebase";

function App() {
  const isFetchingAuth = useAppSelector((state) => state.auth.isFetchingAuth);

  useEffect(() => {
    onValue(ref(db, "/orders"), (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
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
