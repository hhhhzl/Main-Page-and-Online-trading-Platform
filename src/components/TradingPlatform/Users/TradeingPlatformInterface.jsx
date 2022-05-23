import React, {useContext} from "react";
import { Container, Navbar } from "react-bootstrap";
import SideMenuUsers from "./sideMenuUsers";
import NavBarTest from "../navBar";
import { BrowserRouter, Switch, Route, Router, useRouteMatch, useParams } from "react-router-dom";
import Userbalance from "./Portfolio/UserBalance";
import UserMarket from "./Market/market";
import UserStocks from "./Stocks/UserStocks";
import UserTrade from "./Trade/UserTrade";
import AuthContext from "../../../context/AuthContext";
import userPortfolio from "./Portfolio/UserPortforlio";
import StockTrade from "./Stocks/StockTrade";
import StockPriceGraphProfessional from "../../screen/StockPriceGraphProfessional";
import UserPortfolio from "./Portfolio/UserPortforlio";
import PageHeader from "../../screen/PageHeader";



export default function TradePusers(props){
const {username} = useParams();
const {path, url} = useRouteMatch();


    return(
        <div>
            <PageHeader/> 
            <Switch>    
            <Route path={`${path}/trade`}>
                <StockTrade/>
            </Route>  
            <Route path={`${path}`}>
                <StockTrade/>
            </Route>
            <Route path="/eplatform/:username/trade/pro">
                <StockPriceGraphProfessional/>
            </Route>
            <Route path="/eplatform/:username/market">
                <UserMarket/>
            </Route>
            </Switch>
            {/* <Route path="/trade">
                <StockTrade/>
            </Route> */}

        

         
        </div>
    )

}