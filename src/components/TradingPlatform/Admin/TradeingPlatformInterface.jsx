import React from "react";
import { Container, Navbar } from "react-bootstrap";
import SideMenuAdmin from "./sideMenuAdmin";
import NavBarTest from "../navBar";
import { BrowserRouter, Switch, Route, Router, useRouteMatch } from "react-router-dom";
import UsersManageTable from "./UsersManageTable";

export default function tradePadmin(){

    return(
        <div>
            <NavBarTest username={'张三'} usertype={"管理员"}/>
            <SideMenuAdmin/>
            <Switch>
            <Route path="/eplatform/:admin">
                <div className='supervisor-interface'>
                <h3>欢迎</h3>
                <br />
                <UsersManageTable/>
                </div>

            </Route>
          <Route path='/institutions'>
          </Route>
          <Route path='/home'>
    
          </Route>
        </Switch>
        </div>
    )

}