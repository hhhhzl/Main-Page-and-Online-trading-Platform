import React, { useState } from "react";
import "./contacts.css";
import Image from "react-bootstrap/Image";
import useWindowDimensions from "../../../utils/sizewindow";

const Contacts = () => {
  const [validated, setValidated] = useState(false);
  const { width, height } = useWindowDimensions();

  return (
    <div className="section" style={{ padding: "120px 0px 0px 0px" }}>
      <div className="text-center">
        <Image
          src="/homeCutout/Group 81@2x.png"
          style={{ width: "248px", height: "79px" }}
        />
      </div>
        {width > 750 ? (<> 
        <div className="bottom-cover-picture animated">
            <div style={{display: "flex"}}>
                <div className="flex-center flex-center-margin">
                    <div className="introduction-box1">
                        <div>
                            <div className="box-image flex-center">
                                <Image
                                    src="/homeCutout/Offerbang.png"
                                    title="https://offerbang.io/?wpm=2.32.2.1"
                                    style={{
                                        marginTop:
                                            width > 1500
                                                ? "110px"
                                                : width > 1350
                                                ? "110px"
                                                : width > 960
                                                    ? "93.35px"
                                                    : "67.5px",
                                        width:
                                            width > 1500
                                                ? "240px"
                                                : width > 1350
                                                ? "240px"
                                                : width > 960
                                                    ? "190px"
                                                    : "140px",
                                        height:
                                            width > 1500
                                                ? "80px"
                                                : width > 1350
                                                ? "80px"
                                                : width > 960
                                                    ? "63.3px"
                                                    : "45.16px",
                                    }}
                                />
                            </div>

                            <div>
                                {/* <div
                                    style={{
                                        color: "#6E7184",
                                        fontWeight: "400",
                                        fontFamily:
                                            "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                        fontSize: width > 960 ? "16px" : "14px",
                                        paddingTop: width > 1000 ? "92px" : "70px",
                                        lineHeight: "28px",
                                    }}
                                >
                                    “UFA金融大赛” 由UFA与中信证券联合举办
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="flex-center flex-center-margin"
                >
                    <div className="introduction-box1">
                        <div>
                            <div className="box-image flex-center">
                                <Image
                                    src="/homeCutout/CUSSA.png"
                                    title = "https://www.cussa.org/"
                                    style={{
                                        marginTop:
                                            width > 1500
                                                ? "50px"
                                                : width > 1350
                                                ? "50px"
                                                : width > 960
                                                    ? "50px"
                                                    : "50px",
                                        width:
                                            width > 1500
                                                ? "200px"
                                                : width > 1350
                                                ? "200px"
                                                : width > 960
                                                    ? "150px"
                                                    : "80px",
                                        height:
                                            width > 1500
                                                ? "200px"
                                                : width > 1350
                                                ? "200px"
                                                : width > 960
                                                    ? "150px"
                                                    : "80px",
                                    }}
                                />
                            </div>
                            <div className="title"></div>
                            <div>
                                {/* <div
                                    style={{
                                        color: "#6E7184",
                                        fontWeight: "400",
                                        fontFamily:
                                            "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                        fontSize: width > 960 ? "16px" : "14px",
                                        paddingTop: width > 1000 ? "92px" : "70px",
                                        lineHeight: "28px",
                                    }}
                                >
                                    “UFA金融大赛” 由UFA与中信证券联合举办
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-center flex-center-margin">
                    <div className="introduction-box1">
                        <div>
                            <div className="box-image flex-center">
                                <Image
                                    src="/homeCutout/ACCEPTU.png"
                                    title= "https://acceptu.com/"        
                                    style={{
                                        marginTop:
                                            width > 1500
                                                ? "110px"
                                                : width > 1350
                                                ? "110px"
                                                : width > 960
                                                    ? "93.35px"
                                                    : "67.5px",
                                        width:
                                            width > 1500
                                                ? "240px"
                                                : width > 1350
                                                ? "240px"
                                                : width > 960
                                                    ? "190px"
                                                    : "140px",
                                        height:
                                            width > 1500
                                                ? "80px"
                                                : width > 1350
                                                ? "80px"
                                                : width > 960
                                                    ? "63.3px"
                                                    : "45.16px",
                                    }}
                                />
                            </div>

                            <div>
                                {/* <div
                                    style={{
                                        color: "#6E7184",
                                        fontWeight: "400",
                                        fontFamily:
                                            "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                        fontSize: width > 960 ? "16px" : "14px",
                                        paddingTop: width > 1000 ? "92px" : "70px",
                                        lineHeight: "28px",
                                    }}
                                >
                                    “UFA金融大赛” 由UFA与中信证券联合举办
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div style={{ marginTop: width > 800 ? "120px" : "0px" ,display: "flex"}}>
                <div className="flex-center flex-center-margin">
                    <div className="introduction-box">
                        <div>
                            <div className="box-image flex-center">
                                <Image
                                    src="/homeCutout/Group 1010.png"
                                    style={{
                                        width:
                                            width > 1500
                                                ? "160px"
                                                : width > 1350
                                                ? "140px"
                                                : width > 960
                                                    ? "120px"
                                                    : "100px",
                                        height:
                                            width > 1500
                                                ? "160px"
                                                : width > 1350
                                                ? "140px"
                                                : width > 960
                                                    ? "120px"
                                                    : "100px",
                                    }}
                                />
                            </div>

                            <div>
                                <div
                                    style={{
                                        color: "#6E7184",
                                        fontWeight: "400",
                                        fontFamily:
                                            "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                        fontSize: width > 960 ? "16px" : "14px",
                                        paddingTop: width > 1000 ? "92px" : "70px",
                                        lineHeight: "28px",
                                    }}
                                >
                                    “UFA金融大赛” 由UFA与中信证券联合举办
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="flex-center flex-center-margin"
                >
                    <div className="introduction-box">
                        <div>
                            <div className="box-image flex-center">
                                <Image
                                    src="/homeCutout/Group 1020.png"
                                    style={{
                                        width:
                                            width > 1500
                                                ? "160px"
                                                : width > 1350
                                                ? "140px"
                                                : width > 960
                                                    ? "120px"
                                                    : "100px",
                                        height:
                                            width > 1500
                                                ? "160px"
                                                : width > 1350
                                                ? "140px"
                                                : width > 960
                                                    ? "120px"
                                                    : "100px",
                                    }}
                                />
                            </div>
                            <div className="title"></div>
                            <div>
                                <div
                                    style={{
                                        color: "#6E7184",
                                        fontWeight: "400",
                                        fontFamily:
                                            "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                        fontSize: width > 960 ? "16px" : "14px",
                                        paddingTop: width > 1000 ? "92px" : "70px",
                                        lineHeight: "28px",
                                    }}
                                >
                                    “UFA金融大赛” 由UFA与中信证券联合举办
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-center flex-center-margin">
                    <div className="introduction-box">
                        <div>
                            <div className="box-image flex-center">
                                <Image
                                    src="/homeCutout/Group 1003.png"
                                    style={{
                                        width:
                                            width > 1500
                                                ? "160px"
                                                : width > 1350
                                                ? "140px"
                                                : width > 960
                                                    ? "120px"
                                                    : "100px",
                                        height:
                                            width > 1500
                                                ? "160px"
                                                : width > 1350
                                                ? "140px"
                                                : width > 960
                                                    ? "120px"
                                                    : "100px",
                                    }}
                                />
                            </div>

                            <div>
                                <div
                                    style={{
                                        color: "#6E7184",
                                        fontWeight: "400",
                                        fontFamily:
                                            "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                        fontSize: width > 960 ? "16px" : "14px",
                                        paddingTop: width > 1000 ? "92px" : "70px",
                                        lineHeight: "28px",
                                    }}
                                >
                                    “UFA金融大赛” 由UFA与中信证券联合举办
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div></>): width > 470 ?(<>
            <div style={{display: "flex",justifyContent: "center"}}>
                <div className="flex-center flex-center-margin">
                    <div className="introduction-box1">
                        <div>
                            <div className="box-image flex-center">
                                <Image
                                   src="/homeCutout/Offerbang.png"
                                   title="https://offerbang.io/?wpm=2.32.2.1"
                                   style={{
                                       marginTop:
                                           width > 1500
                                               ? "110px"
                                               : width > 1350
                                               ? "110px"
                                               : width > 960
                                                   ? "93.35px"
                                                   : "65.5px",
                                       width:
                                           width > 1500
                                               ? "240px"
                                               : width > 1350
                                               ? "240px"
                                               : width > 960
                                                   ? "190px"
                                                   : "140px",
                                       height:
                                           width > 1500
                                               ? "80px"
                                               : width > 1350
                                               ? "80px"
                                               : width > 960
                                                   ? "63.3px"
                                                   : "45.16px",
                                   }}
                                />
                            </div>

                            {/* <div>
                                <div
                                    style={{
                                        color: "#6E7184",
                                        fontWeight: "400",
                                        fontFamily:
                                            "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                        fontSize: width > 960 ? "16px" : "14px",
                                        paddingTop: width > 1000 ? "92px" : "70px",
                                        lineHeight: "28px",
                                    }}
                                >
                                    “UFA金融大赛” 由UFA与中信证券联合举办
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <div
                    className="flex-center flex-center-margin"
                >
                    <div className="introduction-box">
                        <div>
                            <div className="box-image flex-center">
                                <Image
                                    src="/homeCutout/Group 1020.png"
                                    style={{
                                        width:
                                            width > 1500
                                                ? "160px"
                                                : width > 1350
                                                ? "140px"
                                                : width > 960
                                                    ? "120px"
                                                    : "100px",
                                        height:
                                            width > 1500
                                                ? "160px"
                                                : width > 1350
                                                ? "140px"
                                                : width > 960
                                                    ? "120px"
                                                    : "100px",
                                    }}
                                />
                            </div>
                            <div className="title"></div>
                            <div>
                                <div
                                    style={{
                                        color: "#6E7184",
                                        fontWeight: "400",
                                        fontFamily:
                                            "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                        fontSize: width > 960 ? "16px" : "14px",
                                        paddingTop: width > 1000 ? "92px" : "70px",
                                        lineHeight: "28px",
                                    }}
                                >
                                    “UFA金融大赛” 由UFA与中信证券联合举办
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div style={{display: "flex",justifyContent: "center"}}>
                <div className="flex-center flex-center-margin">
                    <div className="introduction-box1">
                        <div>
                            <div className="box-image flex-center">
                                <Image
                                    src="/homeCutout/CUSSA.png"
                                    title = "https://www.cussa.org/"
                                    style={{
                                        marginTop:
                                            width > 1500
                                                ? "50px"
                                                : width > 1350
                                                ? "50px"
                                                : width > 960
                                                    ? "50px"
                                                    : "30px",
                                        width:
                                            width > 1500
                                                ? "200px"
                                                : width > 1350
                                                ? "200px"
                                                : width > 960
                                                    ? "150px"
                                                    : "100px",
                                        height:
                                            width > 1500
                                                ? "200px"
                                                : width > 1350
                                                ? "200px"
                                                : width > 960
                                                    ? "150px"
                                                    : "100px",
                                    }}
                                />
                            </div>

                            {/* <div>
                                <div
                                    style={{
                                        color: "#6E7184",
                                        fontWeight: "400",
                                        fontFamily:
                                            "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                        fontSize: width > 960 ? "16px" : "14px",
                                        paddingTop: width > 1000 ? "92px" : "70px",
                                        lineHeight: "28px",
                                    }}
                                >
                                    “UFA金融大赛” 由UFA与中信证券联合举办
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <div
                    className="flex-center flex-center-margin"
                >
                    <div className="introduction-box">
                        <div>
                            <div className="box-image flex-center">
                                <Image
                                    src="/homeCutout/Group 1020.png"
                                    style={{
                                        width:
                                            width > 1500
                                                ? "160px"
                                                : width > 1350
                                                ? "140px"
                                                : width > 960
                                                    ? "120px"
                                                    : "100px",
                                        height:
                                            width > 1500
                                                ? "160px"
                                                : width > 1350
                                                ? "140px"
                                                : width > 960
                                                    ? "120px"
                                                    : "100px",
                                    }}
                                />
                            </div>
                            <div className="title"></div>
                            <div>
                                <div
                                    style={{
                                        color: "#6E7184",
                                        fontWeight: "400",
                                        fontFamily:
                                            "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                        fontSize: width > 960 ? "16px" : "14px",
                                        paddingTop: width > 1000 ? "92px" : "70px",
                                        lineHeight: "28px",
                                    }}
                                >
                                    “UFA金融大赛” 由UFA与中信证券联合举办
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div style={{display: "flex",justifyContent: "center"}}>
                <div className="flex-center flex-center-margin">
                    <div className="introduction-box1">
                        <div>
                            <div className="box-image flex-center">
                                <Image
                                    src="/homeCutout/ACCEPTU.png"
                                    title= "https://acceptu.com/"        
                                    style={{
                                        marginTop:
                                            width > 1500
                                                ? "110px"
                                                : width > 1350
                                                ? "110px"
                                                : width > 960
                                                    ? "93.35px"
                                                    : "67.5px",
                                        width:
                                            width > 1500
                                                ? "240px"
                                                : width > 1350
                                                ? "240px"
                                                : width > 960
                                                    ? "190px"
                                                    : "140px",
                                        height:
                                            width > 1500
                                                ? "80px"
                                                : width > 1350
                                                ? "80px"
                                                : width > 960
                                                    ? "63.3px"
                                                    : "45.16px",
                                    }}
                                />
                            </div>

                            {/* <div>
                                <div
                                    style={{
                                        color: "#6E7184",
                                        fontWeight: "400",
                                        fontFamily:
                                            "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                        fontSize: width > 960 ? "16px" : "14px",
                                        paddingTop: width > 1000 ? "92px" : "70px",
                                        lineHeight: "28px",
                                    }}
                                >
                                    “UFA金融大赛” 由UFA与中信证券联合举办
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <div
                    className="flex-center flex-center-margin"
                >
                    <div className="introduction-box">
                        <div>
                            <div className="box-image flex-center">
                                <Image
                                    src="/homeCutout/Group 1020.png"
                                    style={{
                                        width:
                                            width > 1500
                                                ? "160px"
                                                : width > 1350
                                                ? "140px"
                                                : width > 960
                                                    ? "120px"
                                                    : "100px",
                                        height:
                                            width > 1500
                                                ? "160px"
                                                : width > 1350
                                                ? "140px"
                                                : width > 960
                                                    ? "120px"
                                                    : "100px",
                                    }}
                                />
                            </div>
                            <div className="title"></div>
                            <div>
                                <div
                                    style={{
                                        color: "#6E7184",
                                        fontWeight: "400",
                                        fontFamily:
                                            "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                                        fontSize: width > 960 ? "16px" : "14px",
                                        paddingTop: width > 1000 ? "92px" : "70px",
                                        lineHeight: "28px",
                                    }}
                                >
                                    “UFA金融大赛” 由UFA与中信证券联合举办
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
     </>) :<>
          <div style={{display: "flex",justifyContent: "center"}}>
            <div className="flex-center flex-center-margin">
              <div className="introduction-box1">
                <div>
                  <div className="box-image flex-center">
                    <Image
                        src="/homeCutout/Offerbang.png"
                        title="https://offerbang.io/?wpm=2.32.2.1"
                        style={{
                            marginTop:
                                width > 1500
                                    ? "110px"
                                    : width > 1350
                                    ? "110px"
                                    : width > 960
                                        ? "93.35px"
                                        : "50px",
                            width:
                                width > 1500
                                    ? "240px"
                                    : width > 1350
                                    ? "240px"
                                    : width > 960
                                        ? "190px"
                                        : "140px",
                            height:
                                width > 1500
                                    ? "80px"
                                    : width > 1350
                                    ? "80px"
                                    : width > 960
                                        ? "63.3px"
                                        : "45.16px",
                        }}
                    />
                  </div>

                  {/* <div>
                    <div
                        style={{
                          color: "#6E7184",
                          fontWeight: "400",
                          fontFamily:
                              "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                          fontSize: width > 960 ? "16px" : "14px",
                          paddingTop: width > 1000 ? "92px" : "70px",
                          lineHeight: "28px",
                        }}
                    >
                      “UFA金融大赛” 由UFA与中信证券联合举办
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div style={{display: "flex",justifyContent: "center"}}>
            <div className="flex-center flex-center-margin">
              <div className="introduction-box1">
                <div>
                  <div className="box-image flex-center">
                    <Image
                        src="/homeCutout/CUSSA.png"
                        title = "https://www.cussa.org/"
                        style={{
                            marginTop:
                                width > 1500
                                    ? "50px"
                                    : width > 1350
                                    ? "50px"
                                    : width > 960
                                        ? "50px"
                                        : "25px",
                            width:
                                width > 1500
                                    ? "200px"
                                    : width > 1350
                                    ? "200px"
                                    : width > 960
                                        ? "150px"
                                        : "100px",
                            height:
                                width > 1500
                                    ? "200px"
                                    : width > 1350
                                    ? "200px"
                                    : width > 960
                                        ? "150px"
                                        : "100px",
                        }}
                
                    />
                  </div>

                  {/* <div>
                    <div
                        style={{
                          color: "#6E7184",
                          fontWeight: "400",
                          fontFamily:
                              "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                          fontSize: width > 960 ? "16px" : "14px",
                          paddingTop: width > 1000 ? "92px" : "70px",
                          lineHeight: "28px",
                        }}
                    >
                      “UFA金融大赛” 由UFA与中信证券联合举办
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div style={{display: "flex",justifyContent: "center"}}>
            <div className="flex-center flex-center-margin">
              <div className="introduction-box1">
                <div>
                  <div className="box-image flex-center">
                    <Image
                        src="/homeCutout/ACCEPTU.png"
                        title= "https://acceptu.com/"        
                        style={{
                            marginTop:
                                width > 1500
                                    ? "110px"
                                    : width > 1350
                                    ? "110px"
                                    : width > 960
                                        ? "93.35px"
                                        : "50px",
                            width:
                                width > 1500
                                    ? "240px"
                                    : width > 1350
                                    ? "240px"
                                    : width > 960
                                        ? "190px"
                                        : "140px",
                            height:
                                width > 1500
                                    ? "80px"
                                    : width > 1350
                                    ? "80px"
                                    : width > 960
                                        ? "63.3px"
                                        : "45.16px",
                        }}
                    />
                  </div>

                  {/* <div>
                    <div
                        style={{
                          color: "#6E7184",
                          fontWeight: "400",
                          fontFamily:
                              "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                          fontSize: width > 960 ? "16px" : "14px",
                          paddingTop: width > 1000 ? "92px" : "70px",
                          lineHeight: "28px",
                        }}
                    >
                      “UFA金融大赛” 由UFA与中信证券联合举办
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div style={{display: "flex",justifyContent: "center"}}>
            <div className="flex-center flex-center-margin">
              <div className="introduction-box">
                <div>
                  <div className="box-image flex-center">
                    <Image
                        src="/homeCutout/Group 1010.png"
                        style={{
                          width:
                              width > 1500
                                  ? "160px"
                                  : width > 1350
                                  ? "140px"
                                  : width > 960
                                      ? "120px"
                                      : "100px",
                          height:
                              width > 1500
                                  ? "160px"
                                  : width > 1350
                                  ? "140px"
                                  : width > 960
                                      ? "120px"
                                      : "100px",
                        }}
                    />
                  </div>

                  <div>
                    <div
                        style={{
                          color: "#6E7184",
                          fontWeight: "400",
                          fontFamily:
                              "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                          fontSize: width > 960 ? "16px" : "14px",
                          paddingTop: width > 1000 ? "92px" : "70px",
                          lineHeight: "28px",
                        }}
                    >
                      “UFA金融大赛” 由UFA与中信证券联合举办
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div style={{display: "flex",justifyContent: "center"}}>
            <div className="flex-center flex-center-margin">
              <div className="introduction-box">
                <div>
                  <div className="box-image flex-center">
                    <Image
                        src="/homeCutout/Group 1010.png"
                        style={{
                          width:
                              width > 1500
                                  ? "160px"
                                  : width > 1350
                                  ? "140px"
                                  : width > 960
                                      ? "120px"
                                      : "100px",
                          height:
                              width > 1500
                                  ? "160px"
                                  : width > 1350
                                  ? "140px"
                                  : width > 960
                                      ? "120px"
                                      : "100px",
                        }}
                    />
                  </div>

                  <div>
                    <div
                        style={{
                          color: "#6E7184",
                          fontWeight: "400",
                          fontFamily:
                              "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                          fontSize: width > 960 ? "16px" : "14px",
                          paddingTop: width > 1000 ? "92px" : "70px",
                          lineHeight: "28px",
                        }}
                    >
                      “UFA金融大赛” 由UFA与中信证券联合举办
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div style={{display: "flex",justifyContent: "center"}}>
            <div className="flex-center flex-center-margin">
              <div className="introduction-box">
                <div>
                  <div className="box-image flex-center">
                    <Image
                        src="/homeCutout/Group 1010.png"
                        style={{
                          width:
                              width > 1500
                                  ? "160px"
                                  : width > 1350
                                  ? "140px"
                                  : width > 960
                                      ? "120px"
                                      : "100px",
                          height:
                              width > 1500
                                  ? "160px"
                                  : width > 1350
                                  ? "140px"
                                  : width > 960
                                      ? "120px"
                                      : "100px",
                        }}
                    />
                  </div>

                  <div>
                    <div
                        style={{
                          color: "#6E7184",
                          fontWeight: "400",
                          fontFamily:
                              "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                          fontSize: width > 960 ? "16px" : "14px",
                          paddingTop: width > 1000 ? "92px" : "70px",
                          lineHeight: "28px",
                        }}
                    >
                      “UFA金融大赛” 由UFA与中信证券联合举办
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </>}
      <div style={{ background: "#F5F6F8" }}>
        <div className="section" style={{ padding: " 120px 0px" }}>
          <div className="text-center">
            <Image
              src="/homeCutout/Group 127@2x.png"
              style={{ width: "248px", height: "79px" }}
            />
          </div>

          <div className="text-center" style={{ paddingTop: "80px" }}>
            <div style={{marginBottom:"43px"}}>
              {width > 500 ? <>  <Image
                  src="/homeCutout/ufa-qr.jpg"
                  style={{ width: "160px", height: "160px", marginRight: "40px" }}
              />
                <Image
                    src="/homeCutout/chen-qr.jpg"
                    style={{ width: "160px", height: "160px", marginLeft: "40px" }}
                /> </>:<>
                <div>
                  <Image
                      src="/homeCutout/ufa-qr.jpg"
                      style={{ width: "160px", height: "160px" }}
                  />
                </div>
                <div>
                  <Image
                      src="/homeCutout/chen-qr.jpg"
                      style={{ width: "160px", height: "160px",marginTop:"40px"}}
                  />
                </div>
              </>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
