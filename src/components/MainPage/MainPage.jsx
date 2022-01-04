import React from "react";
import { Navbar } from "react-bootstrap";
import Cover from "../webpage/Cover/cover";
import Navigation from "./navigation";
import Aboutus from "../webpage/Aboutus/about-us";
import Contacts from "../webpage/Contacts/contacts";
import Footer from "./footer";
import Review from "../webpage/previousReview/previousreview";
import ReactPlayer from 'react-player';
import Image from 'react-bootstrap/Image';
import Team from "../webpage/Team/team";



export default function MainPage() {
    return (
        <div > 
            <div className="fix-bar">
                <div className="text-center">   
               <Image src = "/UFAlogo.jpg" title="head image" id="img-txz" alt="header"   roundedCircle  style={{ position: "relative", width: "7vh", height: "7vh",}}/>
               </div>
            </div>
            <Cover />      
            <div className = "about-us-page">
              <Navigation /> 
              <Aboutus/>
              <Team/>
              <Review/> 
              <Contacts/>    
              <Footer/>
            </div>
        </div>
    );
}