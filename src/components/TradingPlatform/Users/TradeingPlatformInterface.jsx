import React from "react";
import { Container, Navbar } from "react-bootstrap";
import SideMenuUsers from "./sideMenuUsers";
import NavBarTest from "../navBar";
import { BrowserRouter, Switch, Route, Router, useRouteMatch } from "react-router-dom";
import Userbalance from "./UserBalance";
import UserMarket from "./market";


export default function tradePusers(){

    return(
        <div>
            <NavBarTest username={'张三'} usertype={"用户"}/>
            <SideMenuUsers/>
            <Switch>
            <Route path="/eplatform/:users">
                <UserMarket/>
            </Route>
            <Route path="/eplatform/:users/market">
                <UserMarket/>
            </Route>
        </Switch>
        </div>
    )

}