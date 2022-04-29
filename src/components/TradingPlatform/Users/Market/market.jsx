import React, {useState} from 'react';
import UserBalancePorfolio from '../Portfolio/porfolio';
import NavBarTest from '../../navBar';
import { Bookmark } from "@material-ui/icons";
import SideMenuUsers from '../sideMenuUsers';
import useWindowDimensions from "../../../../utils/sizewindow";
import { Col, Row, Card, CardGroup, Collapse, Button, Form , Accordion} from "react-bootstrap";
import '../../eplatform.css'
import UserHolding from '../../screen/UserHolding';
import MarketTopGains from '../../screen/MarketTopGainStocks';
import MarketStockSearch from '../../screen/MarketStockSearch';
import AreaChart from '../../graphs/AreaChart';

export default function UserMarket() {
    const {width,height} = useWindowDimensions();
    const [extend, setExtend] = useState(true)

    const extendbar = () => {
        setExtend(!extend)
      }
    return (
        
    <> 
        <NavBarTest username={'张三'} usertype={"用户"}/>
        

        

        <div className="auto-main-page" style={{
        minWidth: width>1600? width : width>1068? "max-content":null ,
        minHeight:height, top: height*0.1,
        gridTemplateColumns:width > 1068? extend? "14rem  auto": "6rem auto" :"1fr",
        gap:"0.3rem",
        }} >

        <div>
            <SideMenuUsers extendbar={extendbar} extend ={extend}/>
        </div>



        <div className = "auto-main-market" style ={{gridTemplateRows: "17rem 19rem 18rem",gap: "2rem"}}>
        <div className="auto-main-market1" style={{  
        marginTop:"30px"}}>
                <div className='market-layout1'>
                <h5 style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"20px",letterSpacing:"3px", padding:"5px"}}><Bookmark/>{" "}<strong>指数</strong></h5>
                   <div className="market-indicator">
                   <Card>

                        <Button variant="outline-primary">上证</Button>
                        <Button variant="outline-primary">沪深</Button>
                    </Card>
                    <Card>
                        <AreaChart width={width>900? 330 : width-60}/>
                    </Card>

                   </div>
                    
                    
                </div>
                <div className='market-layout2'>
                <h5 style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"20px",letterSpacing:"3px",padding:"5px"}}><Bookmark/>{" "}<strong>上涨/下跌</strong></h5>
                </div>
                <div className='market-layout2'>
                <h5 style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"20px",letterSpacing:"3px",padding:"5px"}}><Bookmark/>{" "}<strong>TOP GAINS</strong></h5>

                <Card style={{width:"100%",borderRadius:"10px"}}>   
                    <Card.Body>
                    <MarketTopGains/>  
                        </Card.Body>           
                    </Card>
                </div>
        </div>



                <div className="auto-main-market2">
                <div  className='market-layout1'>
                <h5 style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"20px",letterSpacing:"3px",padding:"5px"}}><Bookmark/>{" "}<strong>股票搜索</strong></h5>
            
                    <div className="scroll4">
                    <Accordion alwaysOpen defaultActiveKey='0'>
                        <Accordion.Item eventKey="0">
                            <Accordion.Button>市场</Accordion.Button>
                                  
                            <Accordion.Body>
                            
                                <Card>
                                    <Card.Body>
                            <Form>
                            <Form.Group>
                              <Row>
                            <Col xs={6}>
                                <Form.Label className="stock-trade-form" sm={6}>交易所</Form.Label>
                            </Col>
                            <Col xs={6}>
                                <Form.Select>
                                    <option value="">选择市场</option>
                                    <option value="limit_price">上证</option>
                                    <option value="present_price">沪深</option>
                                </Form.Select>
                            </Col>
                            </Row>
                            <br/>
                            <Row>
                            <Col xs={6}>
                                <Form.Label className="stock-trade-form">板块</Form.Label>
                            </Col>
                            <Col xs={6}>
                                <Form.Select>
                                    <option value="">选择板块</option>
                                </Form.Select>
                            </Col>
                            </Row>
                            <br/>
                            <Row>
                            <Col xs={6}>
                                <Form.Label className="stock-trade-form">涨幅</Form.Label>
                            </Col>
                            <Col xs={6}>
                                <Form.Range></Form.Range>
                            </Col>
                            </Row>
                            </Form.Group>
                        </Form>
                        </Card.Body>
                        </Card>
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>行情指标</Accordion.Header>
                            <Accordion.Body>
                            <Card>
                                    <Card.Body>
                            <Form>
                            <Form.Group>
                            <Row>
                            <Col xs={6}>
                                <Form.Label className="stock-trade-form">市值</Form.Label>
                            </Col>
                            <Col xs={6}>
                                <Form.Range></Form.Range>
                            </Col>
                            </Row>
                            <br/>
                            <Row>
                            <Col xs={6}>
                                <Form.Label className="stock-trade-form">成交量</Form.Label>
                            </Col>
                            <Col xs={6}>
                                <Form.Range></Form.Range>
                            </Col>
                            </Row>
                            <br/>
                            <Row>
                            <Col xs={6}>
                                <Form.Label className="stock-trade-form">现价</Form.Label>
                            </Col>
                            <Col xs={6}>
                                <Form.Range></Form.Range>
                            </Col>
                            </Row>
                            <br/>
                            <Row>
                            <Col xs={6}>
                                <Form.Label className="stock-trade-form">换手率</Form.Label>
                            </Col>
                            <Col xs={6}>
                                <Form.Range></Form.Range>
                            </Col>
                            </Row>
                            
                            </Form.Group>
                        </Form>
                        </Card.Body>
                        </Card>

                            </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                            <Accordion.Header>财务指标</Accordion.Header>
                            <Accordion.Body>
                            <Card>
                                    <Card.Body>
                            <Form>
                            <Form.Group>
                            <Row>
                            <Col xs={6}>
                                <Form.Label className="stock-trade-form">市盈率</Form.Label>
                            </Col>
                            <Col xs={6}>
                                <Form.Range></Form.Range>
                            </Col>
                            </Row>
                            <br/>
                            <Row>
                            <Col xs={6}>
                                <Form.Label className="stock-trade-form">每股收益</Form.Label>
                            </Col>
                            <Col xs={6}>
                                <Form.Range></Form.Range>
                            </Col>
                            </Row>
                            <br/>
                            <Row>
                            <Col xs={6}>
                                <Form.Label className="stock-trade-form">P/E</Form.Label>
                            </Col>
                            <Col xs={6}>
                                <Form.Range></Form.Range>
                            </Col>
                            </Row>
                            <br/>
                            <Row>
                            <Col xs={6}>
                                <Form.Label className="stock-trade-form">流通市值</Form.Label>
                            </Col>
                            <Col xs={6}>
                                <Form.Range></Form.Range>
                            </Col>
                            </Row>
                            
                            </Form.Group>
                        </Form>
                        </Card.Body>
                        </Card>

                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Card>
                                    <Card.Body>
                       
                            <Button variant="outline-primary">查看我的观察名单</Button>
                                
                         
                
                        </Card.Body>
                        </Card>
                    </div>
                

                    
                </div>
                <div className='market-layout2'>
                <Card style={{width:"100%",borderRadius:"0px"}}>   
                    <Card.Body>
                    <MarketStockSearch/>  
                        </Card.Body>           
                    </Card>
                </div>      
                </div>


                <div>
                <h5 style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"20px",letterSpacing:"3px"}}>{" "}<strong>板块</strong></h5>
    
           
                <div className="auto-main-market3">        
                    <Card className='cardyes' style={{width:"300px",borderRadius:"10px"}} >
                    <h6 style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"15px",letterSpacing:"3px"}}>{" "}<strong>医药</strong></h6>
                       
                          <MarketTopGains/> 
                       
                    </Card >

                    <Card className='cardyes' style={{borderRadius:"10px"}}   >
                    <h6 style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"15px",letterSpacing:"3px"}}>{" "}<strong>新能源</strong></h6>
                       <MarketTopGains/> 
                    </Card>

                    <Card className='cardyes' style={{borderRadius:"10px"}} >
                    <h6 style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"15px",letterSpacing:"3px"}}>{" "}<strong>钢铁</strong></h6>
                       <MarketTopGains/> 
                    </Card>

                    <Card className='cardyes' style={{borderRadius:"10px"}} >
                    <h6 style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"15px",letterSpacing:"3px"}}>{" "}<strong>煤炭</strong></h6>
                       <MarketTopGains/> 
                    </Card>

                    <Card className='cardyes' style={{borderRadius:"10px"}} >
                    <h6 style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"15px",letterSpacing:"3px"}}>{" "}<strong>医药</strong></h6>
                       
                          <MarketTopGains/> 
                       
                    </Card >

                    

           
                    
                </div>
   
        </div>
        </div>



                </div>
                </>

    )
}