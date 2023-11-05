import React from "react";
import styles from "./styles.module.scss";
import Landing from "../Landing/MainContainer";

import { Route, Switch } from "react-router-dom";

export default function Content() {
  return (
    <div className={styles.content}>
      {/* <Landing /> */}
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/home" component={Landing} />
      </Switch>
    </div>
  );
}
