import React from 'react';
import UserBalancePorfolio from "./porfolio";
import UserBalanceSeries from "./balanceSeries";
import UserTradingHistory from "./UserTradingHis";
import { Col, Row } from "react-bootstrap";

export default function UserMarket() {
    return (
        <div className='balance-main'>
            <div className='balance-parent'>
                <div className='balance-left balance-style'>
                    <UserBalanceSeries />
                </div>
                <div className='balance-right balance-style'>
                    <UserBalancePorfolio />
                </div>
            </div>
            <div className='balance-parent'>
                <div className='balance-bottom balance-style'>
                    <div className='balance-transaction'>
                        <UserTradingHistory />
                    </div>
                </div>
            </div>
        </div>
        /*         <div>
                    <Row className="balance">
                        <Col>
                            <div className='balance-layout'>
                                <UserBalanceSeries />
                            </div>
                        </Col>
                        <Col>
                            <div className='balance-layout2'>
                                <UserBalancePorfolio />
                            </div>
                        </Col>
                    </Row>
                </div> */

    )
}