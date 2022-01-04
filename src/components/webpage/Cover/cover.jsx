import React from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'
import "./cover.css";
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';


export default function Cover() {
  return (
  <div id="#top" className="cover animated">
    <Image
      src = "/home_page.jpg"
      title="Cover image"
      alt="views in the World"     
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%"
      }}
    />
    <div className="overlay" />
       
    <div className="center">
      <p className="greetings">
        <span><strong style={{color:"#FF4500"}}>U</strong> n d e r a d u a t e</span>{' '}{' '}
        <span><strong style={{color:"#FF4500"}}>F</strong> i n a n c e</span>{' '}
        <span><strong style={{color:"#FF4500"}}>A</strong> s s o i a t i o n</span>{' '}

        </p>
      <h1 className="name">
        华金协会
      </h1>
      
    </div>
    <div className="arrow animated bounceInDown">
      <ArrowDropDownCircleIcon fontSize="large" style={{color:"#FF4500",left: "center"}}/>
    </div>
  </div>
  )
};
