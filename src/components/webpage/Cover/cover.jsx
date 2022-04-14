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
    {width > 600 ? <Image
      src = "/background2.jpg"   
      style={{
        position: "relative",
        top: width > 1000 ? "9vh" : "9vh",
        width: width > 600 ? (width) : (width),
        height: width/2.7
      }}
    /> : 
    <Image
      src = "/background1.jpg"   
      style={{
        position: "relative",
        top: width > 1000 ? "9vh" : "9vh",
        width: width > 600 ? (width) : (width),
        height: width/2.18
      }}
    />
    }
    
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
    <div className="arrow animated bounceInDown" style={{top:width > 600 ? width/3.7 + height*0.08 : width/2.9 + height*0.08, left:width/2-85}}>

    <Button className="round-Button" variant="primary" 
    style={{backgroundColor:"#FF6347",fontSize:"18px",paddingLeft:"30px",paddingRight:"30px",color:"white",fontFamily:"MicrosoftYaHei",letterSpacing:"3px"}} size='sm'>报名赛事</Button>
    </div>
  </div>
  )
};
