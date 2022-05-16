import { color, width } from '@material-ui/system';
import reaat, {useState} from 'react'
import { Card, Collapse, Button, Row, Nav, Dropdown,DropdownButton, Badge, Spinner,Col, Form } from 'react-bootstrap'
import '../TradingPlatform/eplatform.css';
import { StarBorder } from '@material-ui/icons';
import { NotificationsNone, KeyboardArrowDown, ArrowDropUp, ArrowBack, ArrowForward, Edit, ShowChart, BarChart} from '@material-ui/icons';
import useWindowDimensions from '../../utils/sizewindow';
import { IconButton } from '@material-ui/core';
import CandleStickChart from '../graphs/CandlestickChart';


export default function GraphTemplate({
  size,
  data,
  setchartextendleft,
  setchartextendright,
  chartextendleft,
  chartextendright,
}) {
  const {width,height} = useWindowDimensions();
    const [displayrow1, setdisplayrow1] = useState(true);
    const [displayrow2, setdisplayrow2] = useState(true);
    const [displayVisible, setDisplayVisible] = useState(true);
    return (
 <>
        <div  style={{width:"100%"}}>

      <Card style={{borderRadius:"10px 10px 0px 0px"}} >
      <Card.Body  >
        <Row>
          <Col xs ={7}>
          <div>
            {setchartextendleft? (<><IconButton onClick ={() => setchartextendleft(!chartextendleft)}>
              {chartextendleft? <ArrowForward/>: <ArrowBack/>}
          </IconButton></>) : null}
            
          
            {" "}APPL <strong style={{color:"red"}}>160.56 -2.89 -1.23%</strong> 盘后:  0.00 0.00% </div>
             
          
          </Col>
          <Col xs = {5}>
            <div style={{textAlign:"right"}}>
              <Row>
                <Col xs ={3}>
            <Dropdown style={{marginTop:"5px"}} >
              <Dropdown.Toggle size="sm" style={{borderRadius:"25px",height:"26px",width:"80px",paddingLeft:"1px",paddingTop:0}} variant="primary" id="dropdown-basic"><Edit/>画线</Dropdown.Toggle>
              <Dropdown.Menu style={{marginLeft:"0%"}}>
                <Dropdown.Item >趋势线</Dropdown.Item>
                <Dropdown.Item >直线</Dropdown.Item>
                <Dropdown.Item>射线</Dropdown.Item>
                <Dropdown.Item>斐波那契回撤</Dropdown.Item>
                <Dropdown.Item>矩形</Dropdown.Item>
                <Dropdown.Item>趋势通道</Dropdown.Item>
                <hr/>
                <Dropdown.Item>删除所有画线</Dropdown.Item>
                
                </Dropdown.Menu>
              </Dropdown>
              </Col>
              <Col xs ={3}>
              <Dropdown style={{marginTop:"5px"}}>
              <Dropdown.Toggle  size="sm" style={{borderRadius:"25px",height:"26px",width:"80px",paddingLeft:"1px",paddingTop:0}} variant="success" id="dropdown-basic"><ShowChart/>指标</Dropdown.Toggle>
              <Dropdown.Menu style={{marginLeft:"0%"}}>
                均线指标：
                <Dropdown.Item >MA</Dropdown.Item>
                <Dropdown.Item >EMA</Dropdown.Item>
                <Dropdown.Item >SMA</Dropdown.Item>
                <Dropdown.Item >TMA</Dropdown.Item>
                <Dropdown.Item >WMA</Dropdown.Item>
                <Dropdown.Item >布林线</Dropdown.Item>
                <hr/>
                超买超卖指标:
                <Dropdown.Item>MACD</Dropdown.Item>
                <Dropdown.Item>RSI</Dropdown.Item>
                <Dropdown.Item>ATR</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Col>

              <Col xs ={3}>
              <Dropdown style={{marginTop:"5px"}}>
              <Dropdown.Toggle size="sm" style={{borderRadius:"20px",height:"26px",width:"80px",paddingLeft:"1px",paddingTop:0}} variant="primary" id="dropdown-basic"><BarChart/>K线图</Dropdown.Toggle>
              <Dropdown.Menu style={{marginLeft:"0%"}}>
                <Dropdown.Item >蜡烛图</Dropdown.Item>
                <Dropdown.Item >面积图</Dropdown.Item>
                <Dropdown.Item>平均K线图（Heikin-Ashi）</Dropdown.Item>
                <Dropdown.Item>卡吉图（Kagi）</Dropdown.Item>
                <Dropdown.Item>点数图</Dropdown.Item>
                <Dropdown.Item>砖型图（Renko）</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Col>
              
              <Col xs = {3}>
                {setchartextendleft? (<>
                  <IconButton onClick ={() => setchartextendright(!chartextendright)}>
             {chartextendright? <ArrowBack/>: <ArrowForward/>} 
               </IconButton>
                </>):null}
             
              </Col>

               </Row>

               </div>
          </Col>
        </Row>
              
              
            </Card.Body>
            <Card.Footer>
                <Badge style={{color:"black"}}>1分</Badge>
                <Badge style={{color:"black"}}>3分</Badge>
                <Badge style={{color:"black"}}>5分</Badge>
                <Badge style={{color:"black"}}>10分</Badge>
                <Badge style={{color:"black"}}>15分</Badge>
                <Badge style={{color:"black"}}>30分</Badge>
                <Badge style={{color:"black"}}>1小时</Badge>
                <Badge style={{color:"black"}}>2小时</Badge>
                <Badge style={{color:"black"}}>4小时</Badge>
                <Badge style={{color:"black"}}>日K</Badge>
                <Badge style={{color:"black"}}>周K</Badge>
                <Badge style={{color:"black"}}>月K</Badge>
                <Badge style={{color:"black"}}>年K</Badge>
              </Card.Footer>

          
            {data == null? 
               (
                <Card.Body style={{width:"600px", height:"400px"}}>
               <div>
               <Spinner animation="border"  variant="primary" role="status">
                    <span className="visually-hidden">Loading...</span>
               </Spinner>
             </div>
             </Card.Body>)
          :   
              (
                <Card.Body>
              <CandleStickChart w ={size} stockdata = {data}/>
              </Card.Body>)}
          
 
        <Card.Header style={{backgroundColor:""}}>
            公司介绍
            {displayrow1 ? <ArrowDropUp style = {{position:"relative"}}
            onClick={() => setdisplayrow1(!displayrow1)}/> : <KeyboardArrowDown style = {{position:"relative"}}
            onClick={() => setdisplayrow1(!displayrow1)}/>}
       
          
        </Card.Header>
        <Collapse in={displayrow1}>
          <Card.Body>   
          </Card.Body>
        </Collapse>
        <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
      </Card>

    <div style={{width:"100%"}}>
      
    </div>


    
    </div>
    </>

    )
}