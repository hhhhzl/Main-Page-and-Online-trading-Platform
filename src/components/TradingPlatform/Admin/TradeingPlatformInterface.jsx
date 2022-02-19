import React from "react";
import { Container, Navbar } from "react-bootstrap";
import SideMenuAdmin from "./sideMenuAdmin";
import NavBarTest from "../navBar";
import UsersManageTable from "./UsersManageTable";
import {Switch, Route, Router, useRouteMatch } from "react-router-dom";
import StockManageTable from "./StockManageTable";


export default function tradePadmin(){

    return(
        <div>
         
            <NavBarTest username={'张三'} usertype={"管理员"}/>
            <SideMenuAdmin/>
            <Switch>
            <Route  path='/eplatform/:Stock'>
          <div className='supervisor-interface'>
                <h3>欢迎</h3>
                <br />
                <StockManageTable/>
                </div>
          </Route>
            <Route path="/eplatform/:admin">
                <div className='supervisor-interface'>
                <h3>欢迎</h3>
                <br />
                <UsersManageTable/>
                </div>
            </Route>
          
          <Route path='/home'>
          </Route>
        </Switch>
        </div>
    )

}