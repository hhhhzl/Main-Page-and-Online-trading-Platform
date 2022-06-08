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
        {width > 750 ? (<> <div className="bottom-cover-picture animated">
            <div style={{display: "flex"}}>
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
                                    “UFA杯” 由UFA与中信证券联合举办
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
                                    “UFA杯” 由UFA与中信证券联合举办
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
                                    “UFA杯” 由UFA与中信证券联合举办
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: width > 800 ? "120px" : "0px" ,display: "flex"}}>
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
                                    “UFA杯” 由UFA与中信证券联合举办
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
                                    “UFA杯” 由UFA与中信证券联合举办
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
                                    “UFA杯” 由UFA与中信证券联合举办
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>): width > 470 ?(<>
            <div style={{display: "flex",justifyContent: "center"}}>
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
                                    “UFA杯” 由UFA与中信证券联合举办
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
                                    “UFA杯” 由UFA与中信证券联合举办
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: "flex",justifyContent: "center"}}>
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
                                    “UFA杯” 由UFA与中信证券联合举办
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
                                    “UFA杯” 由UFA与中信证券联合举办
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: "flex",justifyContent: "center"}}>
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
                                    “UFA杯” 由UFA与中信证券联合举办
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
                                    “UFA杯” 由UFA与中信证券联合举办
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </>) :<>
          <div style={{display: "flex",justifyContent: "center"}}>
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
                      “UFA杯” 由UFA与中信证券联合举办
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{display: "flex",justifyContent: "center"}}>
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
                      “UFA杯” 由UFA与中信证券联合举办
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{display: "flex",justifyContent: "center"}}>
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
                      “UFA杯” 由UFA与中信证券联合举办
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{display: "flex",justifyContent: "center"}}>
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
                      “UFA杯” 由UFA与中信证券联合举办
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{display: "flex",justifyContent: "center"}}>
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
                      “UFA杯” 由UFA与中信证券联合举办
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{display: "flex",justifyContent: "center"}}>
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
                      “UFA杯” 由UFA与中信证券联合举办
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  src="/corpo.png"
                  style={{ width: "160px", height: "160px", marginRight: "40px" }}
              />
                <Image
                    src="/homeCutout/Group 8100.png"
                    style={{ width: "160px", height: "160px", marginLeft: "40px" }}
                /> </>:<>
                <div>
                  <Image
                      src="/corpo.png"
                      style={{ width: "160px", height: "160px" }}
                  />
                </div>
                <div>
                  <Image
                      src="/homeCutout/Group 8100.png"
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
