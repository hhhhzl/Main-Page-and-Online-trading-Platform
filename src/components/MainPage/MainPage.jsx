import { React, useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import Cover from "../webpage/Cover/cover";
import Aboutus from "../webpage/Aboutus/about-us";
import Contacts from "../webpage/Contacts/contacts";
import Footer from "./footer";
import Review from "../webpage/previousReview/previousreview";
import Executive from "../webpage/Executive/executive";
import ReactPlayer from "react-player";
import Image from "react-bootstrap/Image";
import Team from "../webpage/Team/team";
import NavbarCreate from "./nav";
import Sidebar from "./Sidebar";
import { ClassNames } from "@emotion/react";
import HeaderCreate from './header'
import Fade from "react-reveal/Fade";
import { clearLocalStorage } from "utils";

export default function MainPage() {
  const [show, setShow] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const delay = () => {
    setTimeout(() => {
      !show && setShow(!show);
    }, 200);
  };
  delay();
  useEffect(() => {
    const handleScroll = () => {
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrolledDownEnough = 85 < bodyScrollTop ? true : false;
      setScrolledDownEnough(scrolledDownEnough);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledDownEnough]);

  useEffect(() => {
    console.log(isOpen);
    setIsOpen(isOpen);
  }, [isOpen]);

  useEffect(() =>{
    clearLocalStorage()
  })


  return (
    <>
      {/* <div id="home" className="fix-bar">
             <div className="text-center">
               <Image src = "/UFAlogo.jpg" title="UFA Logo" id="img-txz" alt="header"  roundedCircle  style={{ position: "relative", marginTop:"0.8vh", width: "8vh", height: "8vh",}}/>
               </div>
            </div>   */}
      {/* 隐藏头部导航 */}
      {/* <NavbarCreate toggle = {toggle} /> */}
      <HeaderCreate toggle={toggle} />
      {isOpen ? (<Sidebar isOpen={isOpen} toggle={toggle} />) : null}
      <div className="main-page-center">
        <Cover />
        <div className="about-us-page">
          {/* <Fade bottom when={show}> */}
            <div id="aboutus">
              <Aboutus />
            </div>
          {/* </Fade> */}

          <Fade bottom duration={150} delay={150} fraction={0.1}>
            <div id="team">
              <Team />
            </div>
          </Fade>

          <Fade bottom duration={150} delay={150} fraction={0.1}>
            <div id="executive">
              <Executive />
            </div>
          </Fade>

          <Fade bottom duration={150} delay={150} fraction={0.1}>
            <div id="review" style={{ background: "#F5F6F8" }}>
              <Review />
            </div>
          </Fade>

          <Fade bottom duration={150} delay={150} fraction={0.1}>
            <div id="contactus">
              <Contacts />
            </div>
          </Fade>
        </div>
      </div>
      <Fade bottom duration={150} delay={150} fraction={0.1}>
        <Footer />
      </Fade>
    </>
  );
}
