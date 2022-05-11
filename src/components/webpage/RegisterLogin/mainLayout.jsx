import { ArrowBack, Opacity } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import './loginpage.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import data from "../../../static/users.json"
import { Redirect, useHistory } from "react-router";
import { BrowserRouter, Switch, Route, Router, useRouteMatch } from "react-router-dom";
import PropTypes from 'prop-types';
import AuthContext from "../../../context/AuthContext";
import useWindowDimensions from "../../../utils/sizewindow";
import { borderBottom, fontWeight } from "@material-ui/system";
import { IconButton } from '@material-ui/core';
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import VertificationCode from "./VerificationCode";
import VertificationLogin from "./vertificationLogin";
import ForgetPassword from "./fogetPassword";
import ChangePassword from "./ChangePassword";
import SideMenuLogin from "./SideMenuLogin"

export default function LoginMainLayout({setToken}) {
  const {width, height} = useWindowDimensions();

  return (
      <>
      
    <div>
      {width > 800? <>
      <Image
      src = "/loginback.jpg"    
      style={{
        position: "absolute",
        left: -500,
        top: 0,
        width:width,
        height:"100%"
      }}
    /></> : null}      
    <div className ="login-interface" style={{width: width > 800? "50%": "100%", marginLeft:width > 800 ? "50%": null}}>
          <Switch>
            <Route path="/register">
                <RegisterForm/>
            </Route>
            <Route path="/login">
                <LoginForm/>
            </Route>
            <Route path="/changepassword">
                <ChangePassword/>
            </Route>
            <Route path="/Vlogin">
                <VertificationLogin/>
            </Route>
            <Route path="/forgetpassword">
                <ForgetPassword/>
            </Route>
          </Switch>
    </div>

    
    </div>

</>
  );
}

