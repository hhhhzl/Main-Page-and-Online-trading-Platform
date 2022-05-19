import React, { useContext, useEffect, useState } from 'react';
import NavBarTest from '../../navBar';
import SideMenuUsers from '../sideMenuUsers';
import AuthContext from '../../../../context/AuthContext';
import axios from 'axios';
import useWindowDimensions from "../../../../utils/sizewindow";
import PorforlioMoveGraph from '../../../screen/PortforlioMoveGraph';
import StockShowBar from '../../../screen/StockShowBar';
import GraphTemplate from '../../../screen/GraphTemplate';
import WatchList from '../../../screen/WatchList';
import StockPriceGraphSimplify from '../../../screen/StockPriceGraphSimplify';
import TeamModelIntro from '../../../Competition/team/teamModelIntro';
import MarketOverview from '../../../screen/MarketOverView';
import StockPriceGraphProfessional from '../../../screen/StockPriceGraphProfessional';



export default function UserStocks(props) {
    const {width,height} = useWindowDimensions();
    let {user,logoutUser} = useContext(AuthContext)
    const [kdata, setkdata] = useState(null)
    const [extend, setExtend] = useState(true)
    const [chartextendleft, setchartextendleft] = useState(false)
    const [chartextendright, setchartextendright] = useState(false)

    const extendbar = () => {
        setExtend(!extend)
      }
    
    // useEffect(()=>{
    //     setInterval(()=>{
    //         updataStockdata()
            
    //     }, 10000)
    // })

    // const updataStockdata = () => {
    //     return axios.post('http://59.110.238.142:8086/api/market/kline', {
    //         stockCode: 'sh600036',
    //         timeFrame: '1m'
    //       })
    //       .then(function (response) {
    //         console.log(response.data.data)
    //         setkdata(response.data.data)
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
    
    
    return (    
    <> 
        <NavBarTest username ={user.username} logoutUser ={logoutUser}/>
        {/* <div 
        style={{width:width,height:height,
        marginTop:"0px",marginLeft:"0%",borderRight:"1px",borderColor:"black"}}>
             <StockPriceGraphProfessional/>
         </div> */}
         





        {(!chartextendleft && !chartextendright)? (<>
          <div 
        className="auto-main-page"
        style={{
        minWidth: width>1600? width : width>1068? "max-content":null ,
        minHeight:height, top: height*0.1,
        gridTemplateColumns:width > 1068? extend? "13rem 17rem auto 25rem": "6rem 19rem auto 27rem" :"1fr",
        gap:"0.3rem",
        }}>

          <div>
          <SideMenuUsers extendbar={extendbar} extend ={extend}/>
          </div>

 
       <div 
        style={{
        marginTop:"30px",marginLeft:"2%",marginRight:"2%"}}>
          
             <WatchList/>
         </div>

         <div 
        style={{   
        marginTop:"30px",
        }}>
             <GraphTemplate 
             size={0.45} 
             data = {kdata} 
             setchartextendleft ={setchartextendleft} 
             setchartextendright={setchartextendright}
             chartextendleft={chartextendleft}
             chartextendright={chartextendright}
             />
         </div>

         <div 
        style={{
        marginTop:"30px",marginLeft:"2%",marginRight:"5%"}}>
             <StockShowBar/>
         </div>
             
         </div>
        </>) : (chartextendleft && !chartextendright)? (<>
          <div 
        className="auto-main-page"
        style={{
        minWidth: width>1600? width : width>1068? "max-content":null ,
        minHeight:height, top: height*0.1,
        gridTemplateColumns:width > 1068? extend? "13rem auto 25rem": "6rem auto 27rem" :"1fr",
        gap:"0.3rem",
        }}>

          <div>
          <SideMenuUsers extendbar={extendbar} extend ={extend}/>
          </div>

         <div 
        style={{   
        marginTop:"30px",
        }}>
             <GraphTemplate 
             size={0.45} 
             data = {kdata} 
             setchartextendleft ={setchartextendleft} 
             setchartextendright={setchartextendright}
             chartextendleft={chartextendleft}
             chartextendright={chartextendright}/>
         </div>

         <div 
        style={{
        marginTop:"30px",marginLeft:"2%",marginRight:"5%"}}>
             <StockShowBar/>
         </div>
             
         </div>
        </>) : (!chartextendleft && chartextendright)? (<>
          <div 
        className="auto-main-page"
        style={{
        minWidth: width>1600? width : width>1068? "max-content":null ,
        minHeight:height, top: height*0.1,
        gridTemplateColumns:width > 1068? extend? "13rem 17rem auto": "6rem 19rem auto" :"1fr",
        gap:"0.3rem",
        }}>

          <div>
          <SideMenuUsers extendbar={extendbar} extend ={extend}/>
          </div>

 
       <div 
        style={{  
        marginTop:"30px",marginLeft:"2%",marginRight:"2%"}}>
          
             <WatchList/>
         </div>

         <div 
        style={{   
        marginTop:"30px",
        }}>
             <GraphTemplate 
             size={0.5} 
             data = {kdata} 
             setchartextendleft ={setchartextendleft} 
             setchartextendright={setchartextendright}
             chartextendleft={chartextendleft}
             chartextendright={chartextendright}/>
         </div>
             
         </div>

        </>) : (<>
          <div 
        className="auto-main-page"
        style={{
        minWidth: width>1600? width : width>1068? "max-content":null ,
        minHeight:height, top: height*0.1,
        gridTemplateColumns:width > 1068? extend? "13rem auto ": "6rem auto" :"1fr",
        gap:"0.3rem",
        }}>

          <div>
          <SideMenuUsers extendbar={extendbar} extend ={extend}/>
          </div>


         <div 
        style={{   
        marginTop:"30px",
        }}>
             <GraphTemplate 
             size={0.45} 
             data = {kdata} 
             setchartextendleft ={setchartextendleft} 
             setchartextendright={setchartextendright}
             chartextendleft={chartextendleft}
             chartextendright={chartextendright}/>
         </div>

             
         </div>
          

        </>) }
       
        
     </>

    )
}