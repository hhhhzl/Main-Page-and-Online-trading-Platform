import {React,useState, useEffect} from "react";
import { Navbar } from "react-bootstrap";
import Cover from "../webpage/Cover/cover";
import Aboutus from "../webpage/Aboutus/about-us";
import Contacts from "../webpage/Contacts/contacts";
import Footer from "./footer";
import Review from "../webpage/previousReview/previousreview";
import ReactPlayer from 'react-player';
import Image from 'react-bootstrap/Image';
import Team from "../webpage/Team/team";
import NavbarCreate from "./nav";
import Sidebar from "./Sidebar";
import { ClassNames } from "@emotion/react";



export default function MainPage() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        console.log(isOpen)
        setIsOpen(isOpen)
    }, [isOpen])
    
    return (
        <> 
            {/* <div id="home" className="fix-bar">
             <div className="text-center">   
               <Image src = "/UFAlogo.jpg" title="UFA Logo" id="img-txz" alt="header"  roundedCircle  style={{ position: "relative", marginTop:"0.8vh", width: "8vh", height: "8vh",}}/>
               </div>
            </div>   */}
            <NavbarCreate toggle = {toggle} />
            {isOpen?(<Sidebar isOpen = {isOpen} toggle={toggle}/>):(<></>)}
            <div  className ="main-page-center">
            
                  <Cover /> 
               
            <div className = "about-us-page"> 
             <div  id="aboutus">
             <Aboutus/>  
             </div>
             <div  id ="team">
                <Team />
             </div>
             <div id ="review">
               <Review/> 
             </div>
             <div id ="contactus">
                <Contacts/>  
             </div>                
            </div>
            </div>
            <Footer/>
        </>
    );
}