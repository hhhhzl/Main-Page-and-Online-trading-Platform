import { React, useState, useEffect } from "react";
import { Navbar, Tabs, Tab } from "react-bootstrap";
import TournamentBg from "../webpage/TournamentBg/tournamentBg";
import Footer from "../MainPage/footer";
import HeaderCreate from "../MainPage/header";
// import Tabs from "../Tab/Tabs";
import Introduce from "./introduce";
import Rules from "./rules";
import Sign from "./sign";
import Finance from "./finance";
import useWindowDimensions from "../../utils/sizewindow";
import "./tournament.css"

export default function MainPage() {
  const { width, height } = useWindowDimensions();
  const [show, setShow] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const delay = () => {
    setTimeout(() => {
      !show && setShow(!show);
    }, 500);
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

  return (
    <>
      <div className="vertical-line" style={{height:height*0.6}}></div>
      <HeaderCreate />
      <div className="main-page-center">
        <TournamentBg />
        <div className="tourament-page">
          <Tabs className="tabs-wrapper" id="">
            <Tab className="tabs-item" eventKey={1} title="赛事介绍">
              <Introduce />
            </Tab>
            <Tab eventKey={2} title="赛事规则">
              <Rules />
            </Tab>
            <Tab eventKey={3} title="财经洞悉">
              <Finance />
            </Tab>
            <Tab eventKey={4} title="如何报名">
              <Sign />
            </Tab>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
}
