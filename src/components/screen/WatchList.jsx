import { color, height, width } from '@material-ui/system';
import reaat, {useState} from 'react'
import { Card, Collapse, Button, Row, Nav, Col, Badge, InputGroup, Form, Image } from 'react-bootstrap'
import { Bookmark } from "@material-ui/icons";
import '../TradingPlatform/eplatform.css';
import { StarBorder } from '@material-ui/icons';
import { NotificationsNone, KeyboardArrowDown, ArrowDropUp} from '@material-ui/icons';
import UserHolding from './UserHolding';
import WatchListTable from './WatchListTable';
import useWindowDimensions from '../../utils/sizewindow';


export default function WatchList(props) {
  const {width,height} = useWindowDimensions();
    const [displayrow1, setdisplayrow1] = useState(true);
    const [displayrow2, setdisplayrow2] = useState(true);
    const [displayVisible, setDisplayVisible] = useState(true);
    const [vertify, setvertify] = useState(true);
    return (
      <>
      {vertify? ( <>

      <div style={{backgroundColor: "white",
boxShadow: "0px 1px 2px 1px rgba(0, 0, 0, 0.02), 0px 2px 4px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px 1px rgba(0, 0, 0, 0.02), 0px 8px 16px 1px rgba(0, 0, 0, 0.02), 0px 16px 32px 1px rgba(0, 0, 0, 0.02), 0px 32px 64px 1px rgba(0, 0, 0, 0.02)",
borderRadius: "4px 4px 4px 4px",
opacity: 1}}>
      
      <Card style={{width:"100%"}} > 
      <Card.Header style={{backgroundColor:"white", height:"60px"}}>
      <div style={{position:"relative",width:"40%",height:"32px",left:"43%",marginTop:"8px"}}>
          

            <h2 style={{
        fontSize:"16px",
        fontFamily:"Microsoft YaHei UI-Bold",
        fontWeight:"bold",
        paddingTop:"2px",
        color:"#2A2B30",
        lineHeight:"28px",
        }}>自选股</h2>
        </div>
        </Card.Header>
       
    <WatchListTable/> 
   
    </Card>
    

    {/* <div style={{width:"100%"}}>
      <Card>   
        <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
      </Card>
    </div> */}
    </div>
    </>) : (<><Card style={{width:"100%",borderRadius:"10px 10px 0px 0px"}} > 
        <Row>
          <Col xs ={5}>
          <h5 style={{color:" #26409A",fontFamily:"MicrosoftYaHeiUI",paddingTop:"25px",fontSize:"16px",letterSpacing:"0px"}}><Bookmark/>{" "}<strong>观察列表</strong></h5>
          </Col>
          <Col xs ={3}>
            <Badge style={{marginTop:"25px"}} pill bg="success">热门股票</Badge>
          </Col>
          <Col xs ={3}>
          <Badge style={{marginTop:"25px"}} pill bg="success">我的列表</Badge>
          </Col>
          </Row> 
          <div style={{height:height*0.75,overflow:"auto"}}>
            <div style={{marginTop:height*0.33}}>
            <Button style={{width:"80%",marginLeft:"10%"}} >登录</Button> 
            </div>
    </div>
    </Card>
    

  
    </>
       
      )}
     
    
    </>

    )
}