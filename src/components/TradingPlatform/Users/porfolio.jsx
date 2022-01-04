import React,{useState, useEffect} from "react";
import { Row,Col } from "react-bootstrap";
import { initialData } from "./testdata";

export default function UserBalancePorfolio({props}){
    return(
        <div className="section">
            <h3 style={{marginLeft:"3%"}}>我的资产</h3>
            <hr/>

            <Row>
                <Col xs={7}>

                <h6 style={{marginLeft:"5%"}}>模拟账户资产</h6>
             
                    <h1 style={{color:"gray",marginLeft:"5%"}}>￥1,000,000</h1>   
                    </Col>
                    <Col xs={5}>
                    <h6 style={{marginLeft:"5%"}}>总收益率</h6>
                <h2 style={{color:"gray",marginLeft:"5%"}}>+0 +0%</h2>  
                    </Col>      

            </Row>
            <hr/>
            <Row>
            <Col xs={4}>
                <h6 style={{marginLeft:"5%"}}>持仓市值</h6>
                <h4 style={{color:"gray",marginLeft:"5%"}}>￥1,000,000</h4>   
            </Col>
            <Col xs={4}>
                <h6 style={{marginLeft:"5%"}}>剩余现金</h6>
                <h4 style={{color:"gray",marginLeft:"5%"}}>￥0</h4>  
            </Col>
            <Col xs={4}>
                <h6 style={{marginLeft:"5%"}}>风险评估</h6>
                <h4 style={{color:"green",marginLeft:"5%"}}>安全</h4>  
            </Col>            

            </Row>
            <br/>
        </div>
       
    )
}