import React from "react";
import UserBalancePorfolio from "./porfolio";
import UserBalanceSeries from "./balanceSeries";
import UserTradingHistory from "./UserTradingHis";
import { Col, Row } from "react-bootstrap";

export default function Userbalance(){
    return(
        <div>
            <Row className="balance">
                <Col xs={7}>
        <div className ='balance-layout'>
            <UserBalanceSeries/>
        </div>
        </Col>
        <Col xs={5}>
        <div className ='balance-layout2'>
            <UserBalancePorfolio/>
        </div>
        </Col>
        </Row>
        <Row>
            <div className='balance2'>
                <div className = 'balance-layout3'>
                <UserTradingHistory/>
                </div>


            </div>
        </Row>
    </div>
    )

}