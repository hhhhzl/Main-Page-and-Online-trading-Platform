import { Route, Redirect, useParams } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateCompetitionRoute = ({ children, ...rest }) => {
  let { user, apikey } = useContext(AuthContext);
  return (
          <Route {...rest}>{!user ? <Redirect to="/login" /> : user && !apikey? <Redirect to="/competition/ranking" /> : children}</Route>
  );
};

export default PrivateCompetitionRoute;