import React from 'react';
import UserBalanceSeries from '../../graphs/balanceSeries';
import UserBalancePorfolio from '../Portfolio/porfolio';
import NavBarTest from '../../navBar';
import SideMenuUsers from '../sideMenuUsers';
import { Col, Row, Card, CardGroup } from "react-bootstrap";
import StockShowBar from '../../screen/StockShowBar';
import GraphTemplate from '../../screen/GraphTemplate';
import WatchList from '../../screen/WatchList';
import StockTradeBar from '../../screen/StockTradeBar';

export default function UserTrade() {
    return (
        
    <> 
        <NavBarTest username={'张三'} usertype={"用户"}/>
        <SideMenuUsers/>
        <div 
        className="show-bar"
        style={{
        position:"absolute",
        left:"12%",top:"7%",
        right:0, 
        display:"grid",
        gridTemplateColumns:"17% 58% 25%",
        borderStyle:"solid",
        borderColor:"#AEAEAE"
        }}>

       <div 
        style={{
      
        borderStyle:"solid",
        borderColor:"#AEAEAE"}}>
             <WatchList/>
         </div>
         <div 
        style={{   
        borderStyle:"solid",
        borderColor:"#AEAEAE"}}>
             <GraphTemplate size={0.487}/>
         </div>
         <div 

        style={{
        borderStyle:"solid",
        borderColor:"#AEAEAE"}}>
             <StockTradeBar/>
         </div>
             
         </div>
        
     </>

    )
}