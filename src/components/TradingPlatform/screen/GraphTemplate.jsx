import { color, width } from '@material-ui/system';
import reaat, {useState} from 'react'
import { Card, Collapse, Button, Row, Nav, Dropdown,DropdownButton, Badge } from 'react-bootstrap'
import '../../TradingPlatform/eplatform.css';
import { StarBorder } from '@material-ui/icons';
import { NotificationsNone, KeyboardArrowDown, ArrowDropUp, ArrowBack, ArrowForward, Edit, ShowChart, BarChart} from '@material-ui/icons';
import UserHolding from './UserHolding';
import CandleChart from '../graphs/CandleChart';


export default function GraphTemplate(props) {
    const [displayrow1, setdisplayrow1] = useState(true);
    const [displayrow2, setdisplayrow2] = useState(true);
    const [displayVisible, setDisplayVisible] = useState(true);
    return (
 <>
        <div  style={{width:"100%"}}>

      <Card style={{position:"fixed",top:"7.3%"}} >
      <Card.Body  >
              
              <span><h6><ArrowBack/>{" "}APPL <strong style={{color:"red"}}>160.56 -2.89 -1.23%</strong> 盘后:  0.00 0.00% 
             {"  "}<Button size ='sm' >画线 <Edit/> </Button>{" "}
             <Button size ='sm'>指标 <ShowChart/> </Button>{" "}
             <Button size ='sm'>K线图 <BarChart/> </Button>{" "}
               <ArrowForward/></h6>{' '}</span>   
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
          <Card.Body>
              <CandleChart w ={props.size} h={0.65} stockData = {props.data}/>
          </Card.Body>
 
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