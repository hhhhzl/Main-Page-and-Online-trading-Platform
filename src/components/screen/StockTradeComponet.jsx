import reaat, {useEffect, useState} from 'react'
import { Card, Collapse, Button, Row, Nav, Form, Col, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'components/TradingPlatform/eplatform.css';

export default function StockTradeComponet({
  vertify,
  stockdata
}){
  const [validated, setValidated] = useState(false);
  const [option,setoption] = useState("buy");
  const [orderType, setorderType] = useState("limit_price");
  const [amount, setamount] = useState(null);
  const [price, setprice] = useState(null);
  const [totalPrice,setTotalPrice] = useState('0.00');

	 const handlePrice = value=>{
		setprice(value)
		if(amount != null){
			setTotalPrice(value * amount)
		}
	 }
	 
	 const handleAmount = value=>{
		setamount(value);
		if(price != null){
			setTotalPrice(value * price);
		}
	 }
 


  ////Not use////
  const [validTime, setvalidTime] = useState("");
  const [whetherBefore, setwhetherBefore] = useState(false);
  const [isMinloss, setisMinloss] = useState(false);
  const [isMaxwin, setisMaxWin]  = useState(false);
  const [minlossPrice, setminlossPrice] = useState(null);
  const [maxwinPrice, setmaxwinPrice] = useState(null);

const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  useEffect(()=>{
    setoption(option)
  },[option])


  
    return (
        <>

<div style={{width:"100%",background: "#FFFFFF",
boxShadow: "0px 1px 2px 1px rgba(0, 0, 0, 0.02), 0px 2px 4px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px 1px rgba(0, 0, 0, 0.02), 0px 8px 16px 1px rgba(0, 0, 0, 0.02), 0px 16px 32px 1px rgba(0, 0, 0, 0.02), 0px 32px 64px 1px rgba(0, 0, 0, 0.02)",
borderRadius: "4px 4px 4px 4px",
opacity: "1",

 }}>
      <Card >
        <Card.Header style={{backgroundColor:"white", height:"60px"}}>
          <div style={{position:"relative",width:"90%",height:"32px",left:"28%",marginTop:"8px"}}>
            <Row><Col xs= {3}>
            <Form style={{width:"92%", marginLeft:"4%",backgroundColor:"white"}}>
<Form.Group >
    <Form.Select style={{marginBottom:"20px",
    fontSize:"14px",
    fontFamily:"Microsoft YaHei UI-Bold",
    backgroundColor:"#F5F6F8",
    fontWeight:"bold",
    color:"#2A2B30",
    lineHeight:"24px",
     padding:"0px  0px 0px 8px",width:"62px",height:"32px",borderRadius: "4px",opacity: 1,border: "1px solid #C0C3CE"}} value={option} onChange={(e) => setoption(e.target.value)}>
      <option value="buy">买入</option>
      <option value="sell">卖出</option>    
    </Form.Select>
</Form.Group>
</Form>
 
            </Col>
            
            <Col xs ={7} style={{marginLeft:"-3%",height:"32px"}}>

            <h2 style={{
        fontSize:"16px",
        fontFamily:"Microsoft YaHei UI-Bold",
        fontWeight:"bold",
        paddingTop:"2px",
        color:"#2A2B30",
        lineHeight:"28px",
        letterSpacing:"2px",
        }}>{stockdata? stockdata.名称: null}</h2>
            
            
            </Col></Row>
        

</div>
          


            {/* {displayVisible ? <ArrowDropUp style = {{position:"relative"}}
            onClick={() => setDisplayVisible(!displayVisible)}/> : <KeyboardArrowDown style = {{position:"relative"}}
            onClick={() => setDisplayVisible(!displayVisible)}/>} */}
       
          
        </Card.Header>
        <Collapse in= {true}>
          <Card.Body>      

{/* 
        <div className="d-grip gap-2">
          <Row>
             <Col xs ={6}>
             <Button 
             style={{width:"100%",right:0, backgroundColor: buyin? "green" : null}} 
             variant="outline-success" 
             onClick={() => Buyin()}
             ><h6 style={{textAlign:"left",paddingBottom:"0",color: buyin? "white" : null}}>买入</h6></Button>
             </Col>
             <Col xs ={6}>
             <Button 
             style={{width:"100%", backgroundColor: sell? "red" : null}}
             onClick={() => Sell()}
             variant="outline-danger">
                 <h6 style={{textAlign:"right",paddingBottom:"0", color:sell? "white" : null}}>卖出</h6></Button>
             </Col>
             </Row>
         </div>    */}


         {option == "buy"?
/// *************************buy in form***********************************88////
         <>
          <Form style={{width:"92%", marginLeft:"4%",backgroundColor:"white"}} noValidate validated={validated} onSubmit={handleSubmit}>

<Form.Group style={{paddingTop:"10px", paddingBottom:"4px"}}>

  <Form.Label className="stock-trade-form" >
    订单类型
  </Form.Label>
    <Form.Select style={{marginBottom:"20px",padding:"12px 12px 12px 16px",height: "48px",borderRadius: "4px",opacity: 1,border: "1px solid #C0C3CE", fontSize:"14px",
    fontFamily:"Microsoft YaHei UI-Bold",
    fontWeight:"400",
    color:"#2A2B30",
    lineHeight:"24px"}} required value={orderType} onChange={(e) => setorderType(e.target.value)}>
      <option value="limit_price">限价单</option>
      <option value="present_price">市价单</option>
      
    </Form.Select>
 
  
</Form.Group>

<Form.Group style={{paddingBottom:"10px"}} as={Row}>
<Col sm={6}>
<Form.Label className="stock-trade-form">
    买入价格
  </Form.Label>
  {/* <Form.Control
      required

      style={{paddingBottom:"10px",height: "48px",borderRadius: "4px 4px 4px 4px",opacity: 1,border: "1px solid #C0C3CE"}}
      type="number"
      value={amount}
      onChange={(e) => setamount(e.target.value)}
    ></Form.Control> */}
	
     <InputGroup  style={{height:"48px"}}>
     <InputGroup.Text style={{backgroundColor:"white"}}>$</InputGroup.Text>
    <Form.Control style={{borderLeftColor:"white"}} 
    aria-label="Amount (to the nearest dollar)" 
    placeholder="0.00"
    required
    type="float"
    defaultValue={null}
    type="number"
    onChange={(e)=>handlePrice(e.target.value)}
    />
         
          </InputGroup>
  </Col>
  <Col sm={6}>
  <Form.Label className="stock-trade-form">
    买入单数
  </Form.Label>
  <Form.Control
      required
      type='number'
      min='0'
      style={{paddingBottom:"10px",height: "48px",borderRadius: "4px 4px 4px 4px",opacity: 1,border: "1px solid #C0C3CE"}}
      onChange={(e) => handleAmount(e.target.value)}
    ></Form.Control>
  </Col>
</Form.Group>

{/* {orderType == "limit_price" ? (<><Form.Group style={{paddingBottom:"10px"}} as={Row}>
  <Form.Label className="stock-trade-form" sm={6}>
      成交价*
  </Form.Label>
  <Form.Control
      required
      isValid
      type="number"
      defaultValue={null}
      value={price}
      onChange={(e) => setprice(e.target.value)}
    ></Form.Control>
</Form.Group></>)
: 
orderType == "present_price" ? (<>
<Form.Group style={{paddingBottom:"10px"}} as={Row}>
  <Form.Label className="stock-trade-form" sm={6}>
      成交价*
  </Form.Label>
  <Form.Control
      required
      type="number"
      value={150}
    ></Form.Control>
</Form.Group>

</>):null
} */}




{/* <Form.Group style={{paddingBottom:"10px"}} as={Row}>
<Col sm={6}>
  <Form.Label className="stock-trade-form" sm={6}>
    有效期*
  </Form.Label>
  
    
    <Form.Select  required value={validTime} onChange={(e) => setvalidTime(e.target.value)}>
      <option value="">选择有效期</option>
      <option value="daily">当日有效</option>
      <option value="until_cancel">取消前有效</option>
      
    </Form.Select>
  </Col>
  <Col sm={6}>
  <Form.Label className="stock-trade-form" sm={6}>
    包含盘前盘后
  </Form.Label>
  <Form.Check
      type="switch"
      value={whetherBefore}
      onChange={(e) => setwhetherBefore(!whetherBefore)}
    ></Form.Check>
  </Col>
</Form.Group> */}

{/* <Form.Group  as={Row}>
  
         <Col sm={6}>
             <Row>
                 <Col xs={6}>
                 <Form.Check
      type="switch"
      value={isMinloss}
      onChange={(e) => setisMinloss(!isMinloss)}
    ></Form.Check>   
          </Col>
          <Col xs ={6}>
          <Form.Label className="stock-trade-form" xs={6}>
            止损单
          </Form.Label>
          
    </Col>
    </Row>

    {isMinloss? (<> 
        <Form.Label className="stock-trade-form" xs={6}>
            止损价
          </Form.Label>
          
            <Form.Control
              require
              type="number"
              value={minlossPrice}
              onChange={(e) => setminlossPrice(e.target.value)}
            ></Form.Control>
            <h6 style={{paddingTop:"5px"}} >预计亏损:{(minlossPrice-price) * amount 
            ? (<>
            <h6>{(minlossPrice-price) * amount * 100}元</h6>
            </>) 
            : 
            (<div>请填写交易价/止损价/数量</div>)
            }</h6>
    </>) : null}

        
          </Col>

          <Col sm={6}>
          <Row>
                 <Col xs={6}>
          <Form.Label className="stock-trade-form" xs={6}>
            止盈单
          </Form.Label>
          </Col>
          <Col xs ={6}>
          <Form.Check
      type="switch"
      value={isMaxwin}
      onChange={(e) => setisMaxWin(!isMaxwin)}
    ></Form.Check>
    </Col>
    </Row>

    {isMaxwin ? (<>
        <Form.Label className="stock-trade-form" xs={6}>
            止盈价
          </Form.Label>
            <Form.Control
              required
              type="number"
              value={maxwinPrice}
              max={2}
              strict
              onChange={(e) => setmaxwinPrice(e.target.value)}
            ></Form.Control>
            <h6 style={{paddingTop:"5px"}}>预计盈利:{(maxwinPrice-price) * amount ?
            (<>
            <h6>{(maxwinPrice-price) * amount * 100}元</h6>
            </>) : (<>
                <div>请填写交易价/止损价/数量</div>
            </>)
            }
            </h6>
    </>) : null}
                   
          </Col>
       
        </Form.Group> */}
       
        <Form.Group  as={Row}>

        <div className="stock-trade-form2" style={{marginTop:"20px"}}>
                  <div style={{textAlign:"left"}}>
                  <h6 className="stock-trade-form" style={{padding:"3px"}}>预估总价：</h6>
                  {/* <h6 style={{fontSize:'16px',padding:"3px"}}>购买力：</h6>
                  <h6 style={{fontSize:'16px',padding:"3px"}}>可购数量（手）：</h6> */}
                </div>
                <div style={{textAlign:"right",paddingRight:"3px"}}>
                  <h6 style={{fontSize: "24px",fontFamily: "Futura",fontWeight: "600",color: "#2A2B30",lineHeight: "40px",letterSpacing: "1px"}}>￥{totalPrice}</h6>
                  {/* <h6 style={{fontSize:'16px',padding:"3px"}}>123123</h6>
                  <h6 style={{fontSize:'16px',padding:"3px"}}>123</h6> */}
                </div>
            </div>
</Form.Group>

<Form.Group className="loadingusername" as={Row} style={{width:"98%", marginTop:"10px",marginLeft:"1%", height:"48px",background:"linear-gradient(135deg,#2B8CFF 0%, #2346FF 100%)", borderRadius:"4px 4px 4px 4px"}}>
{/* {vertify? <Button
      variant="outline-primary"
      type ="submit"
    >
      下单
    </Button>  : 
            (<>
            <Button style={{width:"80%",marginLeft:"10%"}} >登录</Button> 
            </>) }   */}

<Button
      variant="outline-primary"
      type ="submit"
      style={{color:"white"}}
    >
      下单
    </Button>



    
</Form.Group>
</Form>


         </> : 
         
         
/* /* /// *************************sell off form***********************************//// */ */         
         <>



         <Form style={{width:"92%", marginLeft:"4%",backgroundColor:"white"}} noValidate validated={validated} onSubmit={handleSubmit}>

<Form.Group style={{paddingTop:"10px", paddingBottom:"4px"}}>

  <Form.Label className="stock-trade-form" >
    订单类型
  </Form.Label>
  <Form.Select style={{marginBottom:"20px",padding:"12px 12px 12px 16px",height: "48px",borderRadius: "4px",opacity: 1,border: "1px solid #C0C3CE", fontSize:"14px",
    fontFamily:"Microsoft YaHei UI-Bold",
    fontWeight:"400",
    color:"#2A2B30",
    lineHeight:"24px"}} required value={orderType} onChange={(e) => setorderType(e.target.value)}>
      <option value="limit_price">限价单</option>
      <option value="present_price">市价单</option>
      
    </Form.Select>
 
  
</Form.Group>

<Form.Group style={{paddingBottom:"10px"}} as={Row}>
<Col sm={6}>
<Form.Label className="stock-trade-form">
    卖出价格
  </Form.Label>
  {/* <Form.Control
      required

      style={{paddingBottom:"10px",height: "48px",borderRadius: "4px 4px 4px 4px",opacity: 1,border: "1px solid #C0C3CE"}}
      type="number"
      value={amount}
      onChange={(e) => setamount(e.target.value)}
    ></Form.Control> */}
     <InputGroup  style={{height:"48px"}}>
     <InputGroup.Text style={{backgroundColor:"white"}}>$</InputGroup.Text>
    <Form.Control style={{borderLeftColor:"white"}} 
    aria-label="Amount (to the nearest dollar)" 
    placeholder="0.00"
    type="number"
    required

    />
         
          </InputGroup>
  </Col>
  <Col sm={6}>
  <Form.Label className="stock-trade-form">
    卖出单数
  </Form.Label>
  <Form.Control
      required
      style={{paddingBottom:"10px",height: "48px",borderRadius: "4px 4px 4px 4px",opacity: 1,border: "1px solid #C0C3CE"}}
      type="number"
      value={amount}
      onChange={(e) => setamount(e.target.value)}
    ></Form.Control>
  </Col>
</Form.Group>


{/* <Form.Group style={{paddingTop:"10px", paddingBottom:"4px"}}>

  <Form.Label className="stock-trade-form" >
    期限
  </Form.Label>
    <Form.Select style={{marginBottom:"20px",paddingBottom:"10px",height: "48px",borderRadius: "4px",opacity: 1,border: "1px solid #C0C3CE"}} required value={orderType} onChange={(e) => setorderType(e.target.value)}>
      <option style={{fontSize:"12px"}} value="">选择期限类型</option>
      <option value="today">当日生效</option>
      <option value="">取消前有效</option>
      
    </Form.Select>
 
  
</Form.Group> */}




{/* {orderType == "limit_price" ? (<><Form.Group style={{paddingBottom:"10px"}} as={Row}>
  <Form.Label className="stock-trade-form" sm={6}>
      成交价*
  </Form.Label>
  <Form.Control
      required
      isValid
      type="number"
      defaultValue={null}
      value={price}
      onChange={(e) => setprice(e.target.value)}
    ></Form.Control>
</Form.Group></>)
: 
orderType == "present_price" ? (<>
<Form.Group style={{paddingBottom:"10px"}} as={Row}>
  <Form.Label className="stock-trade-form" sm={6}>
      成交价*
  </Form.Label>
  <Form.Control
      required
      type="number"
      value={150}
    ></Form.Control>
</Form.Group>

</>):null
} */}




{/* <Form.Group style={{paddingBottom:"10px"}} as={Row}>
<Col sm={6}>
  <Form.Label className="stock-trade-form" sm={6}>
    有效期*
  </Form.Label>
  
    
    <Form.Select  required value={validTime} onChange={(e) => setvalidTime(e.target.value)}>
      <option value="">选择有效期</option>
      <option value="daily">当日有效</option>
      <option value="until_cancel">取消前有效</option>
      
    </Form.Select>
  </Col>
  <Col sm={6}>
  <Form.Label className="stock-trade-form" sm={6}>
    包含盘前盘后
  </Form.Label>
  <Form.Check
      type="switch"
      value={whetherBefore}
      onChange={(e) => setwhetherBefore(!whetherBefore)}
    ></Form.Check>
  </Col>
</Form.Group>

<Form.Group  as={Row}>
  
         <Col sm={6}>
             <Row>
                 <Col xs={6}>
                 <Form.Check
      type="switch"
      value={isMinloss}
      onChange={(e) => setisMinloss(!isMinloss)}
    ></Form.Check>   
          </Col>
          <Col xs ={6}>
          <Form.Label className="stock-trade-form" xs={6}>
            止损单
          </Form.Label>
          
    </Col>
    </Row>

    {isMinloss? (<> 
        <Form.Label className="stock-trade-form" xs={6}>
            止损价
          </Form.Label>
          
            <Form.Control
              require
              type="number"
              value={minlossPrice}
              onChange={(e) => setminlossPrice(e.target.value)}
            ></Form.Control>
            <h6 style={{paddingTop:"5px"}} >预计亏损:{(minlossPrice-price) * amount 
            ? (<>
            <h6>{(minlossPrice-price) * amount * 100}元</h6>
            </>) 
            : 
            (<div>请填写交易价/止损价/数量</div>)
            }</h6>
    </>) : null}

        
          </Col>

          <Col sm={6}>
          <Row>
                 <Col xs={6}>
          <Form.Label className="stock-trade-form" xs={6}>
            止盈单
          </Form.Label>
          </Col>
          <Col xs ={6}>
          <Form.Check
      type="switch"
      value={isMaxwin}
      onChange={(e) => setisMaxWin(!isMaxwin)}
    ></Form.Check>
    </Col>
    </Row>

    {isMaxwin ? (<>
        <Form.Label className="stock-trade-form" xs={6}>
            止盈价
          </Form.Label>
            <Form.Control
              required
              type="number"
              value={maxwinPrice}
              max={2}
              strict
              onChange={(e) => setmaxwinPrice(e.target.value)}
            ></Form.Control>
            <h6 style={{paddingTop:"5px"}}>预计盈利:{(maxwinPrice-price) * amount ?
            (<>
            <h6>{(maxwinPrice-price) * amount * 100}元</h6>
            </>) : (<>
                <div>请填写交易价/止损价/数量</div>
            </>)
            }
            </h6>
    </>) : null}
                   
          </Col>
       
        </Form.Group> */}
        <Form.Group  as={Row}>

        <div className="stock-trade-form2" style={{marginTop:"20px"}}>
                  <div style={{textAlign:"left"}}>
                  <h6 className="stock-trade-form" style={{padding:"3px"}}>预估总价：</h6>
                  {/* <h6 style={{fontSize:'16px',padding:"3px"}}>购买力：</h6>
                  <h6 style={{fontSize:'16px',padding:"3px"}}>可购数量（手）：</h6> */}
                </div>
                <div style={{textAlign:"right",paddingRight:"3px"}}>
                  <h6 style={{fontSize: "24px",fontFamily: "Futura",fontWeight: "600",color: "#2A2B30",lineHeight: "40px",letterSpacing: "1px"}}>￥0.00</h6>
                  {/* <h6 style={{fontSize:'16px',padding:"3px"}}>123123</h6>
                  <h6 style={{fontSize:'16px',padding:"3px"}}>123</h6> */}
                </div>
            </div>
</Form.Group>




<Form.Group className="loadingusername" as={Row} style={{width:"98%", marginTop:"10px",marginBottom:"36px",marginLeft:"1%", height:"48px",background:"linear-gradient(135deg,#2B8CFF 0%, #2346FF 100%)", borderRadius:"4px 4px 4px 4px"}}>
{/* {vertify? <Button
      variant="outline-primary"
      type ="submit"
    >
      下单
    </Button>  : 
            (<>
            <Button style={{width:"80%",marginLeft:"10%"}} >登录</Button> 
            </>) }   */}

<Button
      variant="outline-primary"
      type ="submit"
      style={{color:"white"}}
    >
      下单
    </Button>
</Form.Group>
</Form>
         </>}
          </Card.Body>
        </Collapse>
      </Card>
    </div>

       
        
       
        </>
    )
}