// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginFormModal from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import MyListingPage from "./components/MyListing";
import Cart from "./components/Cart"
import MyOrders from "./components/MyOrders";
import HomePage from "./components/HomePage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/products">
            <AllProducts />
          </Route>
          <Route exact path="/products/:id/detail">
            <ProductDetail />
          </Route>
          <Route exact path="/my-listing">
            <MyListingPage />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/my-orders">
            <MyOrders />
          </Route>
          <Route>
            Page Not Found
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
