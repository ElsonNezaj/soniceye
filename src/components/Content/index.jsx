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
import Contact from "../Contact";
import ProfileContainer from "../Profile/Container";
import Checkout from "../Checkout/Container";

export default function Content() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const isHeaderDisabled = useAppSelector((state) => state.app.disableHeader);
  return (
    <div
      className={`${styles.content} ${
        isHeaderDisabled && styles.noHeaderContainer
      }`}
    >
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Landing} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart_review" component={CartReview} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/profile" component={ProfileContainer} />
        <Route
          path="/products/:productCode/:productName"
          render={({ match }) => {
            return <SingleProductRoute match={match} />;
          }}
        />
        <Route
          path="/checkout/:orderID"
          render={({ match }) => {
            return <Checkout match={match} />;
          }}
        />
        {!isAuth && (
          <Route exact path="/account" component={RegistrationForm} />
        )}
      </Switch>
    </div>
  );
}
