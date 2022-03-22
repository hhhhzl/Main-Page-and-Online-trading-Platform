import React from 'react';
import UserBalanceSeries from '../../graphs/balanceSeries';
import UserBalancePorfolio from '../Portfolio/porfolio';
import NavBarTest from '../../navBar';
import SideMenuUsers from '../sideMenuUsers';
import { Col, Row, Card, CardGroup } from "react-bootstrap";

export default function UserMarket() {
    return (
        
    <> 
        <NavBarTest username={'张三'} usertype={"用户"}/>
        <SideMenuUsers/>
             <div>
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
                </div> 
                </>

    )
}