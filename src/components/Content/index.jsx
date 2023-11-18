import React from "react";
import styles from "./styles.module.scss";
import { Route, Switch } from "react-router-dom";

import Landing from "../Landing/MainContainer";
import AboutPage from "../AboutPage";
import Products from "../Products/Content";

export default function Content() {
  return (
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Landing} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </div>
  );
}
