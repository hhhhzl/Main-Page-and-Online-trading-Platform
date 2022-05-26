import { Route, Redirect, useParams } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useContext(AuthContext);
  let { username } = useParams();
  console.log(username);

  return (
    <>
      {username ? (
        <>
          <Route {...rest}>
            {user.username != username || !user ? (
              <Redirect to="/login" />
            ) : (
              children
            )}
          </Route>
        </>
      ) : (
        <>
          <Route {...rest}>{!user ? <Redirect to="/login" /> : children}</Route>
        </>
      )}
    </>
  );
};

export default PrivateRoute;
