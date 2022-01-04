import React from "react";
import { Container, Navbar } from "react-bootstrap";
import SideMenuUsers from "./sideMenuUsers";
import NavBarTest from "../navBar";
import { BrowserRouter, Switch, Route, Router, useRouteMatch } from "react-router-dom";
import Userbalance from "./UserBalance";


export default function tradePusers(){

    return(
        <div>
            <NavBarTest username={'张三'} usertype={"用户"}/>
            <SideMenuUsers/>
            <Switch>
            <Route path="/eplatform/:users">
                <Userbalance/>
            </Route>
          <Route path='/institutions'>
          </Route>
          <Route path='/home'>
    
          </Route>
        </Switch>
        </div>
    )

}