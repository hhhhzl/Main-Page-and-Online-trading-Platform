import React,{useState, useEffect} from "react";
import { Row,Col,Card,Container } from "react-bootstrap";

export default function UserBalancePorfolio({props}){
    return(
        <Container className="mybalance-container">
               <div style={{paddingRight:"40px"}}>
                <Card className="Card-css" >
                    <Card.Header style={{fontSize:"20px"}}>我的资产</Card.Header>
                    <Card.Body>   
                        <Card.Text style={{fontSize:"30px"}}>￥1,000,000</Card.Text>
                        </Card.Body>
                        <Card.Header style={{fontSize:"15px"}}>总收益率</Card.Header>
                    <Card.Body>   
                        <Card.Text style={{fontSize:"30px"}}>+0 +0%</Card.Text>
                        </Card.Body>
                </Card>
               </div>
               <div style={{paddingRight:"25px",paddingLeft:"20px"}}>
                <Card className="Card-css" >
                    <Card.Header style={{fontSize:"20px"}}>持仓市值</Card.Header>
                    <Card.Body>   
                        <Card.Text style={{fontSize:"25px"}}>￥1,000,000</Card.Text>   

                        </Card.Body>
                        <Card.Header style={{fontSize:"20px"}}>剩余现金流</Card.Header>
                        <Card.Body>   
                        <Card.Text style={{fontSize:"25px"}}>￥0</Card.Text>   

                        </Card.Body>
                </Card>
               </div>
               <div style={{paddingRight:"30px"}}>
                <Card className="Card-css">
                    <Card.Header style={{fontSize:"20px"}}>净盈利</Card.Header>
                    <Card.Body>   
                        <Card.Text style={{fontSize:"20px"}}>￥0</Card.Text>
                        </Card.Body>
                        <Card.Header style={{fontSize:"20px"}}>风险评估</Card.Header>
                    <Card.Body>   
                        <Card.Text style={{fontSize:"20px"}}>安全</Card.Text>
                        </Card.Body>
                </Card>
                </div>
            </Container>
       
    )
}