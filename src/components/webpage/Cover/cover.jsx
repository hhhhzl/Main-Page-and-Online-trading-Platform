import React from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'
import "./cover.css";
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import useWindowDimensions from "../../../utils/sizewindow";


  

export default function Cover() {
  const {width,height} = useWindowDimensions();
  return (
  <div id="home" className="cover animated">
    <Image
      src = "/background1.jpg"   
      style={{
        position: "relative",
        marginTop: width > 1000 ? "0vh" : "8vh",
        width: width > 600 ? (width) : (width),
        height: width/2.186
      }}
    />
    <div className="overlay" />
       
    {/* <div className="center">
      <p className="greetings">
        <span><strong style={{color:"#FF4500"}}>U</strong> n d e r a d u a t e</span>{' '}{' '}
        <span><strong style={{color:"#FF4500"}}>F</strong> i n a n c e</span>{' '}
        <span><strong style={{color:"#FF4500"}}>A</strong> s s o i a t i o n</span>{' '}

        </p>
        <br/>
      <h1 className="name">
         UFA金融协会
      </h1>
      
    </div> */}
    <div className="arrow animated bounceInDown">
    <Button className="round-Button" variant="primary" 
    style={{backgroundColor:"#FF6347",color:"white",fontFamily:"MicrosoftYaHei",letterSpacing:"3px"}} size='sm'>报名赛事</Button>
    </div>
  </div>
  )
};
