import React, {useContext} from "react";
import { Container, Navbar } from "react-bootstrap";
import SideMenuUsers from "./sideMenuUsers";
import NavBarTest from "../navBar";
import { BrowserRouter, Switch, Route, Router, useRouteMatch } from "react-router-dom";
import Userbalance from "./Portfolio/UserBalance";
import UserMarket from "./Market/market";
import UserStocks from "./Stocks/UserStocks";
import UserTrade from "./Trade/UserTrade";
import AuthContext from "../../../context/AuthContext";
import userPortfolio from "./Portfolio/UserPortforlio";
import StockTrade from "./Stocks/StockTrade";
import StockPriceGraphProfessional from "../../screen/StockPriceGraphProfessional";
import UserPortfolio from "./Portfolio/UserPortforlio";



export default function TradePusers(props){

    return(
        <div>
            <Switch>
            <Route path="/eplatform/:username">
                <UserPortfolio/>
            </Route>

            <Route path="/eplatform/user/pro">
                <StockPriceGraphProfessional/>
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