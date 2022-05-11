import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import HomeIcon from '@material-ui/icons/Home';
import { Image } from "react-bootstrap";
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined';
import AssessmentIcon from '@material-ui/icons/AssessmentOutlined';
import { AccessAlarmOutlined, AccountCircleOutlined, AccountTreeOutlined } from "@material-ui/icons";
import BallotIcon from '@material-ui/icons/BallotOutlined';
import { Nav } from 'react-bootstrap';
import { Switch, Route, Link, BrowserRouter, useRouteMatch } from "react-router-dom";
import { Row } from "react-bootstrap";
import '../TradingPlatform/eplatform.css'
import useWindowDimensions from "../../utils/sizewindow";


export default function SideMenuAdmin() {
  const { height, width } = useWindowDimensions();
  let match = useRouteMatch();

  return (
    <div className='side-menu'>
      <Nav>
        <div className='img-center'>
          <Link to="/home">
            <Image
              src="/UFAlogo.jpg"
              height="70%"
              width="70%"
              style={{ marginLeft: "17%", marginTop: "17%", padding: "0.5px 0.5px 0.5px 0.5px" }}
              alt="UFA_logo"
              roundedCircle
            />
          </Link>
        </div>
        <br />
        {console.log(width)}
        <div className='side-container'>
          <Row className='row-padding'>
            <Link
              style={{ color: "white" }}
              to={`${match.url}/admin`}
            >
              <AccountCircleOutlined
                fontSize={width > 530 ? "large" : "medium"}
                color={window.location.pathname === `${match.url}/admin` ? "secondary" : ""}
              />
              {width > 1600 ? (<>用户管理</>) : (<></>)}
            </Link>
          </Row>
          <Row className='row-padding'>
            <Link
              style={{ color: "white" }}
              to={`${match.url}/stock`}
            >
              <AssessmentIcon
                fontSize={width > 530 ? "large" : "medium"}
                color={window.location.pathname === `${match.url}/stock` ? "secondary" : ""}
              />
              {width > 1600 ? (<>股票管理</>) : (<></>)}
            </Link>
          </Row>
          <Row className='row-padding'>
            <Link
              style={{ color: "white" }}
              to={`${match.url}/competition`}
            >
              <AssessmentIcon
                fontSize={width > 530 ? "large" : "medium"}
                color={window.location.pathname === `${match.url}/competition` ? "secondary" : console.log(window.location.pathname)}
              />
              {width > 1600 ? (<>赛事管理</>) : (<></>)}
            </Link>
          </Row>
          <Row className='row-padding'>
            <Link style={{ color: "white" }} to="/eplatform/:News"><AssignmentIcon fontSize={width > 530 ? "large" : "medium"} />{width > 1600 ? (<>新闻管理</>) : (<></>)} </Link>
          </Row>
          <Row className='row-padding'>
            <Link style={{ color: "white" }} to="/eplatform/:Message"><BallotIcon fontSize={width > 530 ? "large" : "medium"} />{width > 1600 ? (<>消息管理</>) : (<></>)} </Link>
          </Row>

        </div>




      </Nav>
    </div>
  )
}
