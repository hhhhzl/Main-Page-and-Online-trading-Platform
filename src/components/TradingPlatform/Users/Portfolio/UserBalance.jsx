import React, {useState} from 'react';
import UserBalancePorfolio from "./porfolio";
import UserBalanceSeries from "../../graphs/balanceSeries";
import UserTradingHistory from "../../screen/UserTradingHis";
import { Col, Row, Card, CardGroup, Container, Image } from "react-bootstrap";
import useWindowDimensions from "../../../../utils/sizewindow";
import UserHolding from '../../screen/UserHolding';
import NavBarTest from '../../navBar';
import SideMenuUsers from '../sideMenuUsers';

export default function UserBalance() {
    const {width,height} = useWindowDimensions();
    const [extend, setExtend] = useState(true)

    const extendbar = () => {
        setExtend(!extend)
      }

    return (
        <>
        <NavBarTest username={'张三'} usertype={"用户"}/>
        <div className="auto-main-page" 
        style={{minWidth: width>1600? width : width>1068? "max-content":null ,
        minHeight:height, top: height*0.1,
        gridTemplateColumns: width > 1068? extend? "13rem auto 32rem": "6rem auto 35rem" :"1fr"}}>
        <div >
        <SideMenuUsers extendbar={extendbar} extend ={extend}/>
        </div>

        <div style={{marginLeft:"20px", marginRight:"20px"}} >
            <UserBalancePorfolio /> 
        </div>

        <div style={{marginTop: height*0.05}}>
            <div className='balance-bottom1' >
                    <Card className='balance-transaction'>
                    <Card.Body>
                        <UserTradingHistory />
                        </Card.Body>
                    </Card>     
            </div>

            <div className='balance-bottom2' >
  
                    <Card className='balance-transaction'>
                        <Card.Body>
                            <UserHolding />
                        </Card.Body>
                    </Card>
        
            </div>
        </div>

            </div>
            
           
    </>
    )
}