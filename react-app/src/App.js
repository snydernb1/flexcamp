import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import ActivityCalenderComp from './components/ActivityCalender';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {sessionUser !== null ? (
        <Route path="/home" >
        <Navigation isLoaded={isLoaded} />
        <ActivityCalenderComp />
        {/* <Switch> */}

          </Route>

      // </Switch>
      ) : (
      <Route path="/" >
        <LoginFormPage />
      </Route>
      )}
    </>
  );
}

export default App;
