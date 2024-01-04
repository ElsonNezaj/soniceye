import "./App.scss";
import Content from "./components/Content";
import Header from "./components/Header";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "antd";
import { useAppSelector } from "./redux/hooks";

function App() {
  const isFetchingAuth = useAppSelector((state) => state.auth.isFetchingAuth);
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
