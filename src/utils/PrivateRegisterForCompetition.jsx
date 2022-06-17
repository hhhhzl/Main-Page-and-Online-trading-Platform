import React, { useContext } from "react";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import { getchoice } from "utils";
import AuthContext from "../context/AuthContext";

const PrivateRegisterForCompetition = ({ children, ...rest }) => {
  let { user, apikey } = useContext(AuthContext);
  return (
          <Route {...rest}>{!user && !apikey? <Redirect to={getchoice()} /> : user && apikey? <Redirect to="/competition"/> : children}</Route>
  );
};

export default PrivateRegisterForCompetition;