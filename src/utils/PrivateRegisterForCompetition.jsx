import { Route, Redirect, useParams } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRegisterForCompetition = ({ children, ...rest }) => {
  let { user, apikey } = useContext(AuthContext);
  return (
          <Route {...rest}>{!user && !apikey? <Redirect to="/login" /> : user && apikey? <Redirect to="/competition"/> : children}</Route>
  );
};

export default PrivateRegisterForCompetition;