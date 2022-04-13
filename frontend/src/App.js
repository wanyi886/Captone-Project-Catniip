// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginFormModal from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AllProducts from "./components/AllProducts";


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
            Home
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/products">
            <AllProducts />
          </Route>
          <Route path="/my-listing">
            My Listing
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
