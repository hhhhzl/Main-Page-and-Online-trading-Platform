import React, { useContext, useEffect, useState } from 'react';
import UserBalanceSeries from '../../graphs/balanceSeries';
import UserBalancePorfolio from '../Portfolio/porfolio';
import NavBarTest from '../../navBar';
import SideMenuUsers from '../sideMenuUsers';
import { Col, Row, Card, CardGroup, Button } from "react-bootstrap";
import StockShowBar from '../../screen/StockShowBar';
import GraphTemplate from '../../screen/GraphTemplate';
import WatchList from '../../screen/WatchList';
import AuthContext from '../../../../context/AuthContext';
import axios from 'axios';
import { StockData } from '../../../../static/Stockdata';

export default function UserStocks(props) {
    let {user,logoutUser} = useContext(AuthContext)
    const [kdata, setkdata] = useState(null)
    
    useEffect(()=>{
        setInterval(()=>{
            updataStockdata()
        }, 1000)
    })

    const updataStockdata = () => {
        return axios.post('http://59.110.238.142:8086/api/market/kline', {
            stockCode: 'sh600036',
            timeFrame: '1m'
          })
          .then(function (response) {
            setkdata(response.data.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    
    return (    
    <> 
        <NavBarTest username ={user.username} logoutUser ={logoutUser}/>
        
        <SideMenuUsers/>
        
        <div 
        className="show-bar"
        style={{
        position:"absolute",
        left:"12%",top:"7%",
        right:0, 
        display:"grid",
        gridTemplateColumns:"17% 61% 22%",
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
             <GraphTemplate size={0.513} data = {kdata? kdata : StockData}/>
         </div>
         <div 

        style={{
        borderStyle:"solid",
        borderColor:"#AEAEAE"}}>
             <StockShowBar/>
         </div>
             
         </div>
        
     </>

    )
}