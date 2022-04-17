import React,{useState, useEffect} from "react";
import { Row,Col,Card,Container, Form} from "react-bootstrap";
import { Bookmark } from "@material-ui/icons";
import UserBalanceSeries from "../../graphs/balanceSeries";
import useWindowDimensions from "../../../../utils/sizewindow";
import AreaChartTest from "../../graphs/AreaChartTest";

export default function UserBalancePorfolio({props}){
    const {width,height} = useWindowDimensions();
    return(
        <>
        <h5 style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"20px",letterSpacing:"3px",marginTop:height*0.05}}><Bookmark/>{" "}<strong>账户信息</strong></h5>
        <Form style={{marginTop:"30px"}}>
            <Form.Control type="date"></Form.Control> 
        </Form>
        <br/>
        <div className="mybalance-container">
               <div style={{paddingRight:"30px"}}>
                <Card className="Card-css1" >
                    <Card.Body>   
                        <Card.Text style={{fontSize:"30px"}}>￥1,000{width}</Card.Text>
                        </Card.Body>
                </Card>
               </div>
               <div style={{paddingRight:"30px"}}>
                <Card className="Card-css2" >
                    <Card.Body>   
                        <Card.Text style={{fontSize:"25px"}}>￥1,000,000</Card.Text>   

                        </Card.Body>
    
                </Card>
               </div>
               <div style={{paddingRight:"30px"}}>
                <Card className="Card-css3">
        
                    <Card.Body>   
                        <Card.Text style={{fontSize:"20px"}}>￥0</Card.Text>
                        </Card.Body>
                </Card>
                </div>
                <div style={{paddingRight:"30px"}}>
                <Card className="Card-css4">
                    <Card.Body>   
                        <Card.Text style={{fontSize:"20px"}}>￥0</Card.Text>
                        </Card.Body>
                </Card>
                </div>
        </div>
            <br/>
            <div style={{position:"relative", marginTop:width > 900? null :(width<600? "6%" : "15%"), marginRight:"20px"}}>
            <h5 style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"20px",letterSpacing:"3px"}}><Bookmark/>{" "}<strong>资产曲线</strong></h5>
                <Card className='balance-style'>
                    <AreaChartTest width={width>900? 900 : width-60}/>
                </Card>
            </div>
            </>
       
    )
}