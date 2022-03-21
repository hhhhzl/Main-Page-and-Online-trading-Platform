import { color, width } from '@material-ui/system';
import reaat, {useState} from 'react'
import { Card, Collapse, Button, Row, Nav } from 'react-bootstrap'
import '../../TradingPlatform/eplatform.css';
import { StarBorder } from '@material-ui/icons';
import { NotificationsNone, KeyboardArrowDown, ArrowDropUp} from '@material-ui/icons';
import UserHolding from './UserHolding';


export default function StockShowBar(props) {
    const [displayrow1, setdisplayrow1] = useState(true);
    const [displayrow2, setdisplayrow2] = useState(true);
    const [displayVisible, setDisplayVisible] = useState(true);
    return (
 
        <div  style={{width:"100%"}}>
        <div>
      <Card >
          <Card.Body>
            <span><h6>APPL NASDAQ</h6>{' '}</span>
            <h6>苹果公司</h6>
            <h2 style={{color:"red"}}>160.56 <h6 style={{color:"red"}}>-2.89 -1.23%</h6></h2>
            <small>盘后： 267.29 0.00 0.00% 2022/03/18 16:12</small>
          </Card.Body>
          <Card.Footer>
              <StarBorder/> {' '} <NotificationsNone/>
            </Card.Footer>
      </Card>
    </div>
        <div style={{width:"100%"}}>
      <Card>
        <Card.Header style={{backgroundColor:""}}>
          关键指标

            {displayVisible ? <ArrowDropUp style = {{position:"relative"}}
            onClick={() => setDisplayVisible(!displayVisible)}/> : <KeyboardArrowDown style = {{position:"relative"}}
            onClick={() => setDisplayVisible(!displayVisible)}/>}
       
          
        </Card.Header>
        <Collapse in={displayVisible}>
          <Card.Body>
              <div className="indicator-report-sheet">
                  <div style={{textAlign:"left"}}>
                  <h6 style={{fontSize:'12px'}}>开盘</h6>
                  <h6 style={{fontSize:'12px'}}>最高</h6>
                  <h6 style={{fontSize:'12px'}}>成交额</h6>
                  <h6 style={{fontSize:'12px'}}>成交均量(3月)</h6>
                  <h6 style={{fontSize:'12px'}}>52周最高</h6>
                  <h6 style={{fontSize:'12px'}}>总市值</h6>
                  <h6 style={{fontSize:'12px'}}>P/E</h6>
                  <h6 style={{fontSize:'12px'}}>每股收益</h6>
                  <h6 style={{fontSize:'12px'}}>换手率</h6>
                  <h6 style={{fontSize:'12px'}}>总股本</h6>
                  <h6 style={{fontSize:'12px'}}>流通市值</h6>
                  <h6 style={{fontSize:'12px'}}>每手股数</h6>
                </div>
                <div style={{textAlign:"right",paddingRight:"5px"}}>
                  <h6 style={{fontSize:'12px'}}>开盘</h6>
                  <h6 style={{fontSize:'12px'}}>最高</h6>
                  <h6 style={{fontSize:'12px'}}>成交额</h6>
                  <h6 style={{fontSize:'12px'}}>成交均量</h6>
                  <h6 style={{fontSize:'12px'}}>52周最高</h6>
                  <h6 style={{fontSize:'12px'}}>总市值</h6>
                  <h6 style={{fontSize:'12px'}}>P/E</h6>
                  <h6 style={{fontSize:'12px'}}>每股收益</h6>
                  <h6 style={{fontSize:'12px'}}>换手率</h6>
                  <h6 style={{fontSize:'12px'}}>总股本</h6>
                  <h6 style={{fontSize:'12px'}}>流通市值</h6>
                  <h6 style={{fontSize:'12px'}}>每手股数</h6>
                </div>
                <div style={{textAlign:"left", paddingLeft:"5px"}}>
                  <h6 style={{fontSize:'12px'}}>昨收</h6>
                  <h6 style={{fontSize:'12px'}}>最低</h6>
                  <h6 style={{fontSize:'12px'}}>成交额</h6>
                  <h6 style={{fontSize:'12px'}}>振幅</h6>
                  <h6 style={{fontSize:'12px'}}>52周低</h6>
                  <h6 style={{fontSize:'12px'}}>市盈率</h6>
                  <h6 style={{fontSize:'12px'}}>股息</h6>
                  <h6 style={{fontSize:'12px'}}>股息收益率</h6>
                  <h6 style={{fontSize:'12px'}}>市净率</h6>
                  <h6 style={{fontSize:'12px'}}>流通股本</h6>
                  <h6 style={{fontSize:'12px'}}>总股本</h6>  
                  <h6 style={{fontSize:'12px'}}>除权日期</h6>
                </div>
                <div style={{textAlign:"right"}}>
                  <h6 style={{fontSize:'12px'}}>开盘</h6>
                  <h6 style={{fontSize:'12px'}}>最高</h6>
                  <h6 style={{fontSize:'12px'}}>成交额</h6>
                  <h6 style={{fontSize:'12px'}}>成交均量(3月)</h6>
                  <h6 style={{fontSize:'12px'}}>52周最高</h6>
                  <h6 style={{fontSize:'12px'}}>总市值</h6>
                  <h6 style={{fontSize:'12px'}}>P/E</h6>
                  <h6 style={{fontSize:'12px'}}>每股收益</h6>
                  <h6 style={{fontSize:'12px'}}>换手率</h6>
                  <h6 style={{fontSize:'12px'}}>总股本</h6>
                  <h6 style={{fontSize:'12px'}}>流通市值</h6>
                  <h6 style={{fontSize:'12px'}}>每手股数</h6>
                </div>
            </div>
            
          </Card.Body>
        </Collapse>
        <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
      </Card>
    </div>

    <div style={{width:"100%"}}>
      <Card>
        <Card.Header style={{backgroundColor:""}}>
            持仓
            {displayrow1 ? <ArrowDropUp style = {{position:"relative"}}
            onClick={() => setdisplayrow1(!displayrow1)}/> : <KeyboardArrowDown style = {{position:"relative"}}
            onClick={() => setdisplayrow1(!displayrow1)}/>}        
        </Card.Header>
        <Collapse in={displayrow1}>
          <Card.Body>
            <UserHolding/>     
          </Card.Body>
        </Collapse>
        <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
      </Card>
    </div>


    
    </div>

    )
}


