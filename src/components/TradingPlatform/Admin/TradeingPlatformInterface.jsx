import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import SideMenuAdmin from "./sideMenuAdmin";
import NavBarTest from "../navBar";
import UsersManageTable from "./UsersManageTable";
import { Switch, Route, Router, useRouteMatch } from "react-router-dom";
import StockManageTable from "./StockManageTable";

export default function tradePadmin() {


  const username = "张三";
  const userType = "管理员"

  return (
    <div>
      <SideMenuAdmin />
      <NavBarTest username={username} usertype={userType} />
      <div className="page">
        <Switch>
          {/* <Route path='/eplatform/:Stock'>
          <div className='supervisor-interface'>
            <h3>欢迎</h3>
            <br />
            <StockManageTable />
          </div>
        </Route> */}
          <div className='supervisor-interface'>
            <h3>欢迎</h3>
            <br />
            <UsersManageTable />
          </div>

          <Route path='/home'>
          </Route>
        </Switch>
      </div>
    </div>
  )

}