import React from "react";
import { Container, Navbar } from "react-bootstrap";
import SideMenuUsers from "./sideMenuUsers";
import NavBarTest from "../navBar";
import { BrowserRouter, Switch, Route, Router, useRouteMatch } from "react-router-dom";
import Userbalance from "./Portfolio/UserBalance";
import UserMarket from "./Market/market";
import UserStocks from "./Trade/UserTrade";
import UserTrade from "./Trade/UserTrade";


export default function tradePusers(){

    return(
        <div>
            <NavBarTest username={'张三'} usertype={"用户"}/>
            <SideMenuUsers/>
            <Switch>
            <Route path="/eplatform/user">
                <Userbalance/>
            </Route>
            <Route path="/market">
                <UserMarket/>
            </Route>
            <Route path="/stocks">
                <UserStocks/>
            </Route>
            <Route path="/eplatform/user/trade">
                <UserTrade/>
            </Route>
        </Switch>
        </div>
    )

}