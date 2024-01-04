import React from "react";
import styles from "./styles.module.scss";
// import { auth } from "../../firebase";
import { Route, Switch } from "react-router-dom";

import Landing from "../Landing/MainContainer";
import AboutPage from "../AboutPage";
import Products from "../Products/Content";
import RegistrationForm from "../Account/Forms";
// import { onAuthStateChanged } from "firebase/auth";

export default function Content() {
  // const activeProductRoute = useAppSelector(
  //   (state) => state.products.activeRoute
  // );
  // const [route, setRoute] = useState(undefined);

  // useEffect(() => {
  //   activeProductRoute && activeProductRoute.length > 0
  //     ? setRoute(activeProductRoute)
  //     : setRoute(undefined);
  // }, [activeProductRoute]);

  // useEffect(() => {
  //   const listen = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setAuthUser(user);
  //     } else {
  //       setAuthUser(null);
  //     }
  //   });
  //   return () => {
  //     listen();
  //   };
  // }, []);

  return (
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Landing} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/account" component={RegistrationForm} />
        {/* {route && (
          <Route
            path={`/products/${activeProductRoute}`}
            component={SingleProductRoute}
          />
        )} */}
      </Switch>
    </div>
  );
}
