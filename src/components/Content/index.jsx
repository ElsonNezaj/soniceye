import React from "react";
import styles from "./styles.module.scss";
import { Route, Switch } from "react-router-dom";

import Landing from "../Landing/MainContainer";
import AboutPage from "../AboutPage";
import Products from "../Products/Content";
import RegistrationForm from "../Account/Forms";
import { useAppSelector } from "../../redux/hooks";
import CartReview from "../CartReview";
import SingleProductRoute from "../Products/SingleProductRoute";

export default function Content() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  return (
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Landing} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart_review" component={CartReview} />
        <Route
          path="/products/:productCode/:productName"
          render={({ match }) => {
            return <SingleProductRoute match={match} />;
          }}
        />
        {!isAuth && (
          <Route exact path="/account" component={RegistrationForm} />
        )}
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
