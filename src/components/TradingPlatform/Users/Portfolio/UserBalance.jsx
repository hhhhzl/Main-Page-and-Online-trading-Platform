import React, {useState} from 'react';
import UserBalancePorfolio from "./porfolio";
import UserBalanceSeries from "../../graphs/balanceSeries";
import UserTradingHistory from "../../screen/UserTradingHis";
import { Col, Row, Card, CardGroup, Container, Image } from "react-bootstrap";
import useWindowDimensions from "../../../../utils/sizewindow";
import UserHolding from '../../screen/UserHolding';
import NavBarTest from '../../navBar';
import SideMenuUsers from '../sideMenuUsers';
import { Bookmark } from "@material-ui/icons";

export default function UserBalance() {
    const {width,height} = useWindowDimensions();
    const [extend, setExtend] = useState(true)

    const extendbar = () => {
        setExtend(!extend)
      }

    return (
        <>
        <NavBarTest username={'张三'} usertype={"用户"}/>
        <div className="auto-main-page">

        <div>
        <SideMenuUsers extendbar={extendbar} extend ={extend}/>
        </div>

        <div >
            <UserBalancePorfolio /> 
    
        </div>



        <div>
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

            </div>
            
           
    </>
    )
}