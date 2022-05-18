import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import SideMenuAdmin from "./sideMenuAdmin";
import NavBarTest from "../TradingPlatform/navBar";
import { Switch, Route, Router, useRouteMatch } from "react-router-dom";
import StockManageTable from "./StockManagement/StockManageTable";
import Admin from "./pages/admin";
import Competition from "./pages/competition";
import Stock from "./pages/stock";
import Team from "./pages/team";

export default function TradePadmin() {

  let match = useRouteMatch();
  console.log(match)

  const username = "张三";
  const userType = "管理员"

  return (
    <div>
      <SideMenuAdmin />
      <NavBarTest username={username} usertype={userType} />
      <div className="page">
        <Switch>
          <Route path={`${match.path}/admin`}>
            <Admin />
          </Route>
          <Route path={`${match.path}/stock`}>
            <Stock />
          </Route>
          <Route path="/eplat/competition/:id">
            <Team />
          </Route>
          <Route path={`${match.path}/competition`}>
            <Competition />
          </Route>
        </Switch>
      </div>
    </div>
  )

}