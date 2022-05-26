import React from "react";
import {Badge, Button} from "react-bootstrap";
import {Row, Col, Container} from "react-bootstrap";
import {Image} from "react-bootstrap";
import "./executive.css";
import {Bookmark} from "@material-ui/icons";
import useWindowDimensions from "../../../utils/sizewindow";
import {fontWeight} from "@material-ui/system";

export default function Executive() {
    const {width, height} = useWindowDimensions();

    return (
        <div className="section" style={{padding: "120px 0px", paddingBottom: "0px"}}>
            <div className="text-center">
                <Image
                    src="/homeCutout/Group 71.png"
                    style={{width: "286px", height: "79px"}}
                />
            </div>

            <div className="team-intro-block" style={{marginTop: "80px"}}>
                <br/>
                {width > 650 ? (<>
                    <div className="bootom-parent">
                        <div className="text-center text-center-bootom-right">
                            <Image
                                className="bottom-shadow-people-image"
                                src="/homeCutout/chenbolin.png"
                                title="head image"
                                id="img-txz"
                                alt="header"
                                style={{
                                    position: "relative",

                                }}
                            />
                            <div className="bottom-shadow-image">
                                <Image
                                    className="bottom-shadow-image-son"
                                    src="/homeCutout/Rectangle 656.png"
                                    title="head image"
                                    id="img-txz"
                                    alt="header"
                                />
                            </div>
                            <div className="bottom-shadow-text">
                                <div className="school">密歇根大学 大三</div>
                                <div className="name">主席 | 陈柏霖 Max</div>
                            </div>
                        </div>
                        <div className="text-center  text-center-bootom-left text-center-bootom-right">
                            <Image
                                className="bottom-shadow-people-image"
                                src="/homeCutout/helitong.png"
                                title="head image"
                                id="img-txz"
                                alt="header"
                                style={{
                                    position: "relative",
                                }}
                            />
                            <div className="bottom-shadow-image">
                                <Image
                                    className="bottom-shadow-image-son"
                                    src="/homeCutout/Rectangle 656.png"
                                    title="head image"
                                    id="img-txz"
                                    alt="header"
                                />
                            </div>
                            <div className="bottom-shadow-text">
                                <div className="school">香港大学 大四</div>
                                <div className="name">何丽童 Stella</div>
                            </div>
                        </div>
                        <div className="text-center  text-center-bootom-left">
                            <Image
                                className="bottom-shadow-people-image"
                                src="/homeCutout/hezhilin.png"
                                title="head image"
                                id="img-txz"
                                alt="header"
                                style={{
                                    position: "relative",
                                }}
                            />
                            <div className="bottom-shadow-image">
                                <Image
                                    className="bottom-shadow-image-son"
                                    src="/homeCutout/Rectangle 656.png"
                                    title="head image"
                                    id="img-txz"
                                    alt="header"
                                />
                            </div>
                            <div className="bottom-shadow-text">
                                <div className="school">南加州大学 大三</div>
                                <div className="name">何炙霖 Hector</div>
                            </div>
                        </div>
                    </div>
                    <div className="bootom-parent">
                        <div className="text-center text-center-bootom-right">
                            <Image
                                className="bottom-shadow-people-image"
                                src="/homeCutout/heruohang.png"
                                title="head image"
                                id="img-txz"
                                alt="header"
                                style={{
                                    position: "relative",

                                }}
                            />
                            <div className="bottom-shadow-image">
                                <Image
                                    className="bottom-shadow-image-son"
                                    src="/homeCutout/Rectangle 656.png"
                                    title="head image"
                                    id="img-txz"
                                    alt="header"
                                />
                            </div>
                            <div className="bottom-shadow-text">
                                <div className="school">密歇根大学 大三</div>
                                <div className="name">贺若航 Harris</div>
                            </div>
                        </div>

                        <div className="text-center  text-center-bootom-left">
                            <Image
                                className="bottom-shadow-people-image"
                                src="/homeCutout/chenhaonan.png"
                                title="head image"
                                id="img-txz"
                                alt="header"
                                style={{
                                    position: "relative",
                                }}
                            />
                            <div className="bottom-shadow-image">
                                <Image
                                    className="bottom-shadow-image-son"
                                    src="/homeCutout/Rectangle 656.png"
                                    title="head image"
                                    id="img-txz"
                                    alt="header"
                                />
                            </div>
                            <div className="bottom-shadow-text">
                                <div className="school">密歇根大学 大三</div>
                                <div className="name">陈昊楠 Norman</div>
                            </div>
                        </div>
                    </div>
                </>) : (<>
                    <div className="small-bottom">
                        <Image
                            src="/homeCutout/chenbolin.png"
                            title="head image"
                            id="img-txz"
                            alt="header"
                            style={{
                                position: "relative",
                            }}
                        />
                        <Image
                            className="bottom-shadow-image-son"
                            src="/homeCutout/Rectangle 656.png"
                            title="head image"
                            id="img-txz"
                            alt="header"
                        />
                        <div className="bottom-shadow-text">
                            <div className="school">密歇根大学 大三</div>
                            <div className="name">主席 | 陈柏霖 Max</div>
                        </div>
                    </div>
                    <div className="small-bottom">
                        <Image
                            src="/homeCutout/helitong.png"
                            title="head image"
                            id="img-txz"
                            alt="header"
                            style={{
                                position: "relative",
                            }}
                        />
                        <Image
                            className="bottom-shadow-image-son"
                            src="/homeCutout/Rectangle 656.png"
                            title="head image"
                            id="img-txz"
                            alt="header"
                        />
                        <div className="bottom-shadow-text">
                            <div className="school">香港大学 大四</div>
                            <div className="name">何丽童 Stella</div>
                        </div>
                    </div>
                    <div className="small-bottom">
                        <Image
                            src="/homeCutout/hezhilin.png"
                            title="head image"
                            id="img-txz"
                            alt="header"
                            style={{
                                position: "relative",
                            }}
                        />
                        <Image
                            className="bottom-shadow-image-son"
                            src="/homeCutout/Rectangle 656.png"
                            title="head image"
                            id="img-txz"
                            alt="header"
                        />
                        <div className="bottom-shadow-text">
                            <div className="school">南加州大学 大三</div>
                            <div className="name">何炙霖 Hector</div>
                        </div>
                    </div>
                    <div className="small-bottom">
                        <Image
                            src="/homeCutout/heruohang.png"
                            title="head image"
                            id="img-txz"
                            alt="header"
                            style={{
                                position: "relative",
                            }}
                        />
                        <Image
                            className="bottom-shadow-image-son"
                            src="/homeCutout/Rectangle 656.png"
                            title="head image"
                            id="img-txz"
                            alt="header"
                        />
                        <div className="bottom-shadow-text">
                            <div className="school">密歇根大学 大三</div>
                            <div className="name">贺若航 Harris</div>
                        </div>
                    </div>
                    <div className="small-bottom">
                        <Image
                            src="/homeCutout/chenhaonan.png"
                            title="head image"
                            id="img-txz"
                            alt="header"
                            style={{
                                position: "relative",
                            }}
                        />
                        <Image
                            className="bottom-shadow-image-son"
                            src="/homeCutout/Rectangle 656.png"
                            title="head image"
                            id="img-txz"
                            alt="header"
                        />
                        <div className="bottom-shadow-text">
                            <div className="school">密歇根大学 大三</div>
                            <div className="name">陈昊楠 Norman</div>
                        </div>
                    </div>
                </>)}
            </div>
        </div>
    );
}
