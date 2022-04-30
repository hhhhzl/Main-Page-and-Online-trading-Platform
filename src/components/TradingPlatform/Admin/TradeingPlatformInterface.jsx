import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import SideMenuAdmin from "./sideMenuAdmin";
import NavBarTest from "../navBar";
import { Switch, Route, Router, useRouteMatch } from "react-router-dom";
import StockManageTable from "./StockManagement/StockManageTable";
import Admin from "./pages/admin";
import Competition from "./pages/competition";
import Stock from "./pages/stock";
import TeamTable from "./competitionManagement/teamTable";

export default function TradePadmin() {

  let match = useRouteMatch();

  const username = "张三";
  const userType = "管理员"

  return (
    <div>
      <SideMenuAdmin />
      <NavBarTest username={username} usertype={userType} />
      <div className="page">
        <Switch>
          <Route path={`${match.path}/stock`}>
            <Stock />
          </Route>
          <Route path={`${match.path}/competition`}>
            <Competition />
          </Route>
          <Route path={`/:id`}>
            <TeamTable />
          </Route>
          <Route path='/eplat/admin'>
            <Admin />
          </Route>
        </Switch>
      </div>
    </div>
  )

}