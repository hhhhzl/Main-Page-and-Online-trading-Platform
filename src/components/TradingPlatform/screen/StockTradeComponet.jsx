import reaat, {useState} from 'react'
import { Card, Collapse, Button, Row, Nav, Form, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../../TradingPlatform/eplatform.css';

export default function StockTradeComponet(props){
  const [validated, setValidated] = useState(false);
  
  const [buyin,setbuyin] = useState(false);
  const [sell,setsell] = useState(false);
  const [orderType, setorderType] = useState("");
  const [amount, setamount] = useState(null);
  const [validTime, setvalidTime] = useState("");
  const [whetherBefore, setwhetherBefore] = useState(false);
  const [isMinloss, setisMinloss] = useState(false);
  const [isMaxwin, setisMaxWin]  = useState(false);
  const [price, setprice] = useState(null);
  const [minlossPrice, setminlossPrice] = useState(null);
  const [maxwinPrice, setmaxwinPrice] = useState(null);

  const Buyin = () => {
      setbuyin(true);
      setsell(false);
  }

  const Sell = () => {
    setsell(true);
    setbuyin(false);
}

const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  
    return (
        <>
        <h6>买入方向*</h6>
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
         </div>   
        
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

<Form.Group style={{paddingTop:"10px", paddingBottom:"10px"}} as={Row}>
<Col sm={6}>
  <Form.Label className="stock-trade-form" sm={6}>
    订单类型*
  </Form.Label>
  
    
    <Form.Select style={{paddingBottom:"10px"}} required value={orderType} onChange={(e) => setorderType(e.target.value)}>
      <option value="">选择下单类型</option>
      <option value="limit_price">限价单</option>
      <option value="present_price">市价单</option>
      
    </Form.Select>
  </Col>
  <Col sm={6}>
  <Form.Label className="stock-trade-form" sm={6}>
    数量（手）*
  </Form.Label>
  <Form.Control
      required
      type="number"
      value={amount}
      onChange={(e) => setamount(e.target.value)}
    ></Form.Control>
  

  </Col>
</Form.Group>

{orderType == "limit_price" ? (<><Form.Group style={{paddingBottom:"10px"}} as={Row}>
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
}




<Form.Group style={{paddingBottom:"10px"}} as={Row}>
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
       
        </Form.Group>
        <hr/>
        <Form.Group  as={Row}>

        <div className="stock-trade-form2">
                  <div style={{textAlign:"left"}}>
                  <h6 style={{fontSize:'16px',padding:"3px"}}>订单金额：</h6>
                  <h6 style={{fontSize:'16px',padding:"3px"}}>购买力：</h6>
                  <h6 style={{fontSize:'16px',padding:"3px"}}>可购数量（手）：</h6>
                </div>
                <div style={{textAlign:"right",paddingRight:"3px"}}>
                  <h6 style={{fontSize:'16px',padding:"3px"}}>1323324</h6>
                  <h6 style={{fontSize:'16px',padding:"3px"}}>123123</h6>
                  <h6 style={{fontSize:'16px',padding:"3px"}}>123</h6>
                </div>
            </div>
</Form.Group>
<hr/>
<Form.Group className="loadingusername" as={Row}>

    <Button
      variant="outline-primary"
      type ="submit"
    >
      下单
    </Button>
</Form.Group>
</Form>
        </>
    )
}