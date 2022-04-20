import React,{useState, useEffect} from "react";
import { Row,Col,Card,Container, Form, Image} from "react-bootstrap";
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
               <div style={{paddingRight:"15px"}}>
                <Card className="Card-css1" >  
                        <Row style={{width:"100%",height:"100%"}}>
                            <Col style={{}} xs ={4}>
                                <div style={{marginTop:"20px", marginLeft:"20%",width:"55px",height:"55px",backgroundColor:"#f4f7fc",borderRadius:"50px"}}>
                                <Image
                                src = "/portfolioIcon1.png"
                                style={{
                                    marginLeft:"25%",
                                    marginTop:"25%",
                                    width:"50%",
                                    height:"50%",
                                }} 
                                />
                                </div>
                            </Col>
                            <Col xs ={8}>
                                <div style={{marginTop:"10px"}}>
                                <h6 style={{color:"#f4f7fc",fontSize:"14px"}}>我的资产</h6>
                                <h4 style={{color:"#f4f7fc",fontSize:"22px"}}>{" "}￥1000000</h4>
                                <h6 style={{color:"#f4f7fc",fontSize:"14px"}}>较上日: {-1000}</h6>
                                </div>
                               
                            </Col>
                        </Row>
                        
                </Card>
               </div>
               <div style={{paddingRight:"15px"}}>
                <Card className="Card-css2" >
                <Row style={{width:"100%",height:"100%"}}>
                            <Col style={{}} xs ={4}>
                                <div style={{marginTop:"20px", marginLeft:"30%",width:"55px",height:"55px",backgroundColor:"#f4f7fc",borderRadius:"50px"}}>
                                <Image
                                src = "/portfolioIcon2.png"
                                style={{
                                    marginLeft:"25%",
                                    marginTop:"25%",
                                    width:"50%",
                                    height:"50%",
                                }} 
                                />
                                </div>
                            </Col>
                            <Col xs ={8}>
                                <div style={{marginTop:"10px"}}>
                                <h6 style={{color:"#f4f7fc",fontSize:"14px"}}>持仓市值</h6>
                                <h4 style={{color:"#f4f7fc",fontSize:"20px"}}>{" "}￥{100}万</h4>
                                <h6 style={{color:"#f4f7fc",fontSize:"14px"}}>较上日: {-1000}</h6>
                                </div>
                               
                            </Col>
                        </Row>
    
                </Card>
               </div>
               <div style={{paddingRight:"15px"}}>
                <Card className="Card-css3">
        
                <Row style={{width:"100%",height:"100%"}}>
                            <Col style={{}} xs ={4}>
                                <div style={{marginTop:"20px", marginLeft:"30%",width:"55px",height:"55px",backgroundColor:"#f4f7fc",borderRadius:"50px"}}>
                                <Image
                                src = "/portfolioIcon3.png"
                                style={{
                                    marginLeft:"25%",
                                    marginTop:"25%",
                                    width:"50%",
                                    height:"50%",
                                }} 
                                />
                                </div>
                            </Col>
                            <Col xs ={8}>
                                <div style={{marginTop:"10px", marginLeft:"10px"}}>
                                <h6 style={{color:"#f4f7fc",fontSize:"14px"}}>总收益</h6>
                                <h4 style={{color:"#f4f7fc",fontSize:"22px"}}>{" "}{56.6}%</h4>
                                <h6 style={{color:"#f4f7fc",fontSize:"14px"}}>较上日: {-10}%</h6>
                                </div>
                               
                            </Col>
                        </Row>
                </Card>
                </div>
                <div style={{paddingRight:"15px"}}>
                <Card className="Card-css4">
                <Row style={{width:"100%",height:"100%"}}>
                            <Col style={{}} xs ={4}>
                                <div style={{marginTop:"20px", marginLeft:"35%",width:"55px",height:"55px",backgroundColor:"#f4f7fc",borderRadius:"50px"}}>
                                <Image
                                src = "/portfolioIcon4.png"
                                style={{
                                    marginLeft:"25%",
                                    marginTop:"25%",
                                    width:"50%",
                                    height:"50%",
                                }} 
                                />
                                </div>
                            </Col>
                            <Col xs ={8}>
                                <div style={{marginTop:"10px"}}>
                                <h6 style={{color:"#f4f7fc",fontSize:"14px"}}>净盈利</h6>
                                <h4 style={{color:"#f4f7fc",fontSize:"22px"}}>{" "}￥1000000</h4>
                                <h6 style={{color:"#f4f7fc",fontSize:"14px"}}>较上日: {-1000}</h6>
                                </div>
                               
                            </Col>
                        </Row>
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