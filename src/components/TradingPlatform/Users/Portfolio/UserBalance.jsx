import React from 'react';
import UserBalancePorfolio from "./porfolio";
import UserBalanceSeries from "../../graphs/balanceSeries";
import UserTradingHistory from "../../screen/UserTradingHis";
import { Col, Row, Card, CardGroup, Container, Image } from "react-bootstrap";
import useWindowDimensions from "../../../../utils/sizewindow";
import UserHolding from '../../screen/UserHolding';

export default function UserBalance() {
    const {width,height} = useWindowDimensions();
    return (
        <>
        
        <div className='balance-main'>
            <UserBalancePorfolio />
            

            <Container className='balance-left'>
                <Card className='balance-style'>
                    <Card.Header>资产曲线</Card.Header>
                    <UserBalanceSeries w={0.56} h ={0.5} />
                </Card>
            </Container>



            <div className='balance-bottom1'>
                <div className='balance-style'>
                    <div className='balance-transaction'>
                        <UserTradingHistory />
                    </div>
                </div>
            </div>

            <div className='balance-bottom2'>
                <div className='balance-style'>
                    <div className='balance-transaction'>
                        <UserHolding />
                    </div>
                </div>
            </div>
        </div>    
    </>
    )
}