import { React, useState, useEffect } from "react";
import { Navbar, Tabs, Tab, Nav } from "react-bootstrap";
import TournamentBg from "../webpage/TournamentBg/tournamentBg";
import Footer from "../MainPage/footer";
import HeaderCreate from "../MainPage/header";
// import Tabs from "../Tab/Tabs";
import Introduce from "./introduce";
import Rules from "./rules";
import Sign from "./sign";
import Finance from "./finance";
import ASide from "../MainPage/ASide";
import useWindowDimensions from "../../utils/sizewindow";
import "./tournament.css";
import { clearLocalStorage } from "utils";

export default function MainPage() {
  const { width, height } = useWindowDimensions();
  const [show, setShow] = useState(false);
  const [eventKey, setEventKey] = useState(1);

  const [isOpen, setIsOpen] = useState(false);
  const [defaultPage, setDefaultPage] = useState(1);

  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeEventKey = (param) => {
    document.documentElement.scrollTop = 475;
    setEventKey(param);
  };

  const delay = () => {
    setTimeout(() => {
      !show && setShow(!show);
    }, 500);
  };
  delay();

  useEffect(() => {
    clearLocalStorage();
  });

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
    setEventKey(eventKey);
  }, [isOpen, eventKey]);

  return (
    <>
      {/* <div className="vertical-line" style={{height:height*0.6}}></div> */}
      <HeaderCreate toggle={toggle} />
      {/* {isOpen ? (<Sidebar isOpen={isOpen} toggle={toggle} />) : null} */}
      {isOpen ? <ASide isOpen={isOpen} toggle={toggle} /> : null}
      <div className="main-page-center">
        <TournamentBg />
        <div className="tourament-page">
          <Tab.Container activeKey={eventKey} onSelect={(k) => setEventKey(k)}>
            <Nav className="tabs-wrapper">
              <Nav.Item>
                <Nav.Link className="tabs-item" eventKey={1}>
                  <span className={eventKey == 1 ? '' : 'tab-link'}>赛事介绍</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={2}>
                  <span className={eventKey == 2 ? '' : 'tab-link'}>赛事规则</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={3}>
                  <span className={eventKey == 3 ? '' : 'tab-link'}>财经洞悉</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={4}>
                  <span className={eventKey == 4 ? '' : 'tab-link'}>如何报名</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey={1}>
                <Introduce changeEventKey={changeEventKey} />
              </Tab.Pane>
              <Tab.Pane eventKey={2}>
                <Rules changeEventKey={changeEventKey} />
              </Tab.Pane>
              <Tab.Pane eventKey={3}>
                <Finance />
              </Tab.Pane>
              <Tab.Pane eventKey={4}>
                <Sign />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
          {/* <Tabs
            className="tabs-wrapper"
            id=""
            activeKey={eventKey}
            onSelect={(k) => setEventKey(k)}
          >
            <Tab className="tabs-item" eventKey={1} title="赛事介绍">
              <Introduce changeEventKey={changeEventKey} />
            </Tab>
            <Tab eventKey={2} title="赛事规则">
              <Rules changeEventKey={changeEventKey} />
            </Tab>
            <Tab eventKey={3} title="财经洞悉">
              <Finance />
            </Tab>
            <Tab eventKey={4} title="如何报名">
              <Sign />
            </Tab>
          </Tabs> */}
        </div>
      </div>

      <Footer eventKey={eventKey}/>
    </>
  );
}
