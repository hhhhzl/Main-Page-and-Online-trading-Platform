import { color, width } from '@material-ui/system';
import reaat, {useState} from 'react'
import { Card, Collapse, Button, Row, Nav, Col } from 'react-bootstrap'
import '../../TradingPlatform/eplatform.css';
import { StarBorder } from '@material-ui/icons';
import { NotificationsNone, KeyboardArrowDown, ArrowDropUp} from '@material-ui/icons';
import UserHolding from './UserHolding';
import WatchListTable from './WatchListTable';


export default function WatchList(props) {
    const [displayrow1, setdisplayrow1] = useState(true);
    const [displayrow2, setdisplayrow2] = useState(true);
    const [displayVisible, setDisplayVisible] = useState(true);
    return (
 
        <div  style={{width:"100%"}}>
        <div>

          
      <Card >  
          <Card.Body style={{textAlign:"center"}}>
         <div className="d-grid gap-2">
          <h4>观察列表</h4>
          </div>
          </Card.Body>
          <Card.Body>

          <div className="d-grip gap-2">
          <Row>
             <Col xs ={6}>
             <Button style={{width:"100%",right:0}} variant="outline-secondary">热门股票</Button>
             </Col>
             <Col xs ={6}>
             <Button style={{width:"100%"}} variant="outline-secondary">我的列表</Button>
             </Col>
             </Row>
         </div>   
          </Card.Body>
      </Card>
    </div>
        
    <WatchListTable/> 
    <div style={{width:"100%"}}>
      <Card>   
        <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
      </Card>
    </div>
    
    </div>

    )
}