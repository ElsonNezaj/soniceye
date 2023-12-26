import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Route, Switch } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

import Landing from "../Landing/MainContainer";
import AboutPage from "../AboutPage";
import Products from "../Products/Content";

export default function Content() {
  const activeProductRoute = useAppSelector(
    (state) => state.products.activeProductRoute
  );
  const [route, setRoute] = useState(undefined);

  useEffect(() => {
    activeProductRoute && activeProductRoute.length > 0
      ? setRoute(activeProductRoute)
      : setRoute(undefined);
  }, [activeProductRoute]);

  return (
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Landing} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/products" component={Products} />
        {route && (
          <Route path={`/products/${route}`} component={<>HELLO WORLD</>} />
        )}
      </Switch>
    </div>
  );
}
