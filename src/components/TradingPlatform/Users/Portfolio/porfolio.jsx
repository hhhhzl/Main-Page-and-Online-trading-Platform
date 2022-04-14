import React,{useState, useEffect} from "react";
import { Row,Col,Card,Container, Form} from "react-bootstrap";
import { Bookmark } from "@material-ui/icons";
import UserBalanceSeries from "../../graphs/balanceSeries";
import useWindowDimensions from "../../../../utils/sizewindow";

export default function UserBalancePorfolio({props}){
    const {width,height} = useWindowDimensions();
    return(
        <>
        <h5 style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"20px",letterSpacing:"3px"}}><Bookmark/>{" "}<strong>账户信息</strong></h5>
        <Form>
            <Form.Control type="date"></Form.Control> 
        </Form>
        <br/>
        <div className="mybalance-container">
               <div style={{paddingRight:"30px"}}>
                <Card className="Card-css1" >
                    <Card.Header style={{fontSize:"20px"}}>我的资产</Card.Header>
                    <Card.Body>   
                        <Card.Text style={{fontSize:"30px"}}>￥1,000</Card.Text>
                        </Card.Body>
                </Card>
               </div>
               <div style={{paddingRight:"30px"}}>
                <Card className="Card-css2" >
                    <Card.Header style={{fontSize:"20px"}}>持仓市值</Card.Header>
                    <Card.Body>   
                        <Card.Text style={{fontSize:"25px"}}>￥1,000,000</Card.Text>   

                        </Card.Body>
    
                </Card>
               </div>
               <div style={{paddingRight:"30px"}}>
                <Card className="Card-css3">
                    <Card.Header style={{fontSize:"20px"}}>净盈利</Card.Header>
                    <Card.Body>   
                        <Card.Text style={{fontSize:"20px"}}>￥0</Card.Text>
                        </Card.Body>
                </Card>
                </div>
                <div style={{paddingRight:"30px"}}>
                <Card className="Card-css4">
                    <Card.Header style={{fontSize:"20px"}}>净盈利</Card.Header>
                    <Card.Body>   
                        <Card.Text style={{fontSize:"20px"}}>￥0</Card.Text>
                        </Card.Body>
                </Card>
                </div>
        </div>
            <br/>
            <div style={{position:"relative", marginTop:width > 1024? null :(width<600? "25%" : "15%")}}>
            <h5 style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"20px",letterSpacing:"3px"}}><Bookmark/>{" "}<strong>资产曲线</strong></h5>
                <Card className='balance-style'>
                    <UserBalanceSeries w={0.56} h ={0.5} />
                </Card>
            </div>
            </>
       
    )
}