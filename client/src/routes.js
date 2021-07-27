import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "./store/utils/thunkCreators";
import { Home, SnackbarError } from "./components";
import { UserAccess } from "./components/UserAccess";

const Routes = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUser());
  }, [fetchUser]);

  useEffect(() => {
    if (user.error) {
      // check to make sure error is what we expect, in case we get an unexpected server error object
      if (typeof user.error === "string") {
        setErrorMessage(user.error);
      } else {
        setErrorMessage("Internal Server Error. Please try again");
      }
      setSnackBarOpen(true);
    }
  }, [user.error]);

  if (user.isFetchingUser) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {snackBarOpen && (
        <SnackbarError
          setSnackBarOpen={setSnackBarOpen}
          errorMessage={errorMessage}
          snackBarOpen={snackBarOpen}
        />
      )}
      <Switch>
        <Route
          path="/login"
          render={() => <UserAccess showLoginComponent={true} />}
        />
        <Route
          path="/register"
          render={() => <UserAccess showSignupComponent={true} />}
        />
        <Route
          exact
          path="/"
          render={() =>
            user?.id ? <Home /> : <UserAccess showSignupComponent={true} />
          }
        />
        <Route path="/home" component={Home} />
      </Switch>
    </>
  );
};

export default withRouter(Routes);
