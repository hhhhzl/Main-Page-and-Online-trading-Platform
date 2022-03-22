import {React,useState, useEffect} from "react";
import Navbar from 'react-bootstrap/Navbar';
import HomeIcon from '@material-ui/icons/Home';
import { Image } from "react-bootstrap";
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined';
import AssessmentIcon from '@material-ui/icons/AssessmentOutlined';
import { AccessAlarmOutlined, AccountBalanceWallet, AccountBalanceWalletOutlined, AccountBoxOutlined, AccountCircleOutlined, AccountTreeOutlined } from "@material-ui/icons";
import BallotIcon from '@material-ui/icons/BallotOutlined';
import { Nav, Button } from 'react-bootstrap';
import { Switch, Route, Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import '../eplatform.css'
import useWindowDimensions from "../../../utils/sizewindow";
import { CloseOutlined } from '@material-ui/icons'
import { ViewHeadlineTwoTone } from '@material-ui/icons';
import { IconButton } from "@material-ui/core";


export default function SideMenuUsers() {
  const {height,width} = useWindowDimensions();
  const [open, setopen] = useState(false);

  const handleClose = () => {
    setopen(false)
  }

  const handleOpen = () => {
    setopen(true)
  }

  useEffect(() => {
    console.log(open)
    setopen(open)
  }, [open])

  return (
    <>
    {width >= 600? (
    <div className='side-menu-users' style={{width: "12%"}}>
      <Nav>
      <div className='img-center'>
          <Link to="/home">
          <Image
              src="/UFAlogo.jpg"
              height="70%"
              width="70%"
              style={{marginLeft:"17%", marginTop: "17%", padding:"0.5px 0.5px 0.5px 0.5px"}}
              alt="UFA_logo"
              roundedCircle
            />
          </Link>
          </div>
        <br />    
        
        <Switch>
          <Route path='/eplatform/user'>
            <div className='side-container-users' >
            <Row className='row-padding'>
              <Link  style={{ color: "white",textDecoration:"none", letterSpacing:"5px",fontSize:"20px"}} to="/eplatform/user"><AccountBalanceWalletOutlined fontSize={width>1000?"large":"medium"}/>{" "}个人主页</Link>
            </Row>
            <Row className='row-padding'>   
              <Link  style={{ color: "white",textDecoration:"none", letterSpacing:"5px",fontSize:"20px" }} to="/market"><AssessmentIcon fontSize={width>1000?"large":"medium"} />{" "}市场行情</Link>
            </Row>
            <Row className='row-padding'>   
              <Link  style={{ color: "white",textDecoration:"none", letterSpacing:"5px",fontSize:"20px" }} to="/stocks"><AssessmentIcon fontSize={width>1000?"large":"medium"} />{" "}个股信息</Link>
            </Row>
            <Row className='row-padding'>  
              <Link  style={{ color: "white",textDecoration:"none", letterSpacing:"5px",fontSize:"20px" }} to="/eplatform/user/trade"><AccountBoxOutlined fontSize={width>1000?"large":"medium"}/>{" "}模拟交易</Link>
            </Row>
            <Row className='row-padding'>  
              <Link  style={{ color: "white",textDecoration:"none",letterSpacing:"5px",fontSize:"20px" }} to="/eplatform/user/News"><AssignmentIcon fontSize={width>1000?"large":"medium"}/>{" "}量化回测</Link>
            </Row>
            <Row className='row-padding'>  
              <Link  style={{ color: "white",textDecoration:"none",letterSpacing:"5px",fontSize:"20px" }} to="/eplatform/user/Message"><BallotIcon fontSize={width>1000?"large":"medium"}/>{" "}账户分析</Link>
            </Row>    
            </div>
          </Route>
        </Switch>

        <Switch>
          <Route path='/stocks'>
            <div className='side-container-users' >
            <Row className='row-padding'>
              <Link  style={{ color: "white",textDecoration:"none", letterSpacing:"5px",fontSize:"20px"}} to="/eplatform/user"><AccountBalanceWalletOutlined fontSize={width>1000?"large":"medium"}/>{" "}个人主页</Link>
            </Row>
            <Row className='row-padding'>   
              <Link  style={{ color: "white",textDecoration:"none", letterSpacing:"5px",fontSize:"20px" }} to="/market"><AssessmentIcon fontSize={width>1000?"large":"medium"} />{" "}市场行情</Link>
            </Row>
            <Row className='row-padding'>   
              <Link  style={{ color: "white",textDecoration:"none", letterSpacing:"5px",fontSize:"20px" }} to="/stocks"><AssessmentIcon fontSize={width>1000?"large":"medium"} />{" "}个股信息</Link>
            </Row>
            <Row className='row-padding'>  
              <Link  style={{ color: "white",textDecoration:"none", letterSpacing:"5px",fontSize:"20px" }} to="/eplatform/user/trade"><AccountBoxOutlined fontSize={width>1000?"large":"medium"}/>{" "}模拟交易</Link>
            </Row>
            <Row className='row-padding'>  
              <Link  style={{ color: "white",textDecoration:"none",letterSpacing:"5px",fontSize:"20px" }} to="/eplatform/user/News"><AssignmentIcon fontSize={width>1000?"large":"medium"}/>{" "}量化回测</Link>
            </Row>
            <Row className='row-padding'>  
              <Link  style={{ color: "white",textDecoration:"none",letterSpacing:"5px",fontSize:"20px" }} to="/eplatform/user/Message"><BallotIcon fontSize={width>1000?"large":"medium"}/>{" "}账户分析</Link>
            </Row>    
            </div>
          </Route>
        </Switch>
      </Nav>

    </div>
          
      ) :
    //when window width is smaller than 550px
      (
     
          <>
          <div className ="icon-css">
            <IconButton onClick ={() => handleOpen()}>
            <ViewHeadlineTwoTone fontSize="large"  />
            </IconButton>

          </div>
          <div className='side-menu-users' style={{minHeight:height,opacity:!open?0:0.9}}>
            

            {open ? (
              <>
              <div>
              <IconButton onClick ={() => handleClose()}>
              <CloseOutlined fontSize="large" />
              </IconButton>
            </div>
            <Nav>  
        <Switch>
          <Route path='/eplatform/:users'>
            <div className='side-container-users'>
            <Row className='row-padding'>
              <Link  style={{ color: "white",textDecoration:"none" }} to="/eplatform/:users"><AccountBalanceWalletOutlined fontSize="large"/>主页</Link>
            </Row>
            <Row className='row-padding'>   
              <Link  style={{ color: "white",textDecoration:"none" }} to="/eplatform/:users/market"><AssessmentIcon fontSize="large" />市场</Link>
            </Row>
            <Row className='row-padding'>  
              <Link  style={{ color: "white",textDecoration:"none" }} to="/eplatform/:users/AccountAnalyst"><AccountBoxOutlined fontSize="large"/>账户</Link>
            </Row>
            <Row className='row-padding'>  
              <Link  style={{ color: "white",textDecoration:"none" }} to="/eplatform/:users/News"><AssignmentIcon fontSize="large"/>量化平台</Link>
            </Row>
            <Row className='row-padding'>  
              <Link  style={{ color: "white",textDecoration:"none" }} to="/eplatform/:users/Message"><BallotIcon fontSize="large"/>新闻消息</Link>
            </Row>
            
            </div>
          </Route>
        </Switch>
      </Nav>
      </>
      ) : (<></>) }
      

    </div>
    </>

        )
        
        
  

      }
    
    </>
  )
}

/*
<Navbar className = 'side-text' expand="lg">
                  <NavDropdown style={{color: "white"}} title = "Dropdown">
                      <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item  href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item  href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item  href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
          </Navbar>
*/