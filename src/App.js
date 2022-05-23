import './App.css';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter, Switch, Route, Router, useRouteMatch } from "react-router-dom";
import RegisterForm from './components/webpage/RegisterLogin/registerForm';
import LoginForm from './components/webpage/RegisterLogin/loginForm';
import TradePadmin from './components/Admin/TradeingPlatformInterface';
import TradePusers from './components/TradingPlatform/Users/TradeingPlatformInterface';
import data from "./static/users.json"
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext';

import { selectAuthUserProfile, selectAuthToken, getTokenProfile } from "./state/slices/auth";

/*users */
import SideMenuUsers from './components/TradingPlatform/Users/sideMenuUsers';
import Userbalance from './components/TradingPlatform/Users/Portfolio/UserBalance';
import UserMarket from './components/TradingPlatform/Users/Market/market';

/*Admin*/
import NavBarTest from './components/TradingPlatform/navBar';
import UserStocks from './components/TradingPlatform/Users/Stocks/UserStocks';
import UserTrade from './components/TradingPlatform/Users/Trade/UserTrade';
import LoginMainLayout from './components/webpage/RegisterLogin/mainLayout';



import Tournament from './components/Tournament/tournament';

// import PageHeader from './components/screen/PageHeader';
// import PendingOrder from './components/screen/PendingOrder';

import UserPortfolio from './components/TradingPlatform/Users/Portfolio/UserPortforlio';
import StockTrade from './components/TradingPlatform/Users/Stocks/StockTrade';
import StockPriceGraphProfessional from './components/screen/StockPriceGraphProfessional';

import EditData from './components/TradingPlatform/Users/EditData'
import PersonalHomepage from './components/TradingPlatform/Users/PersonalHomepage'
import KeyIndicatorSimple from './components/screen/KeyIndicatorSimple'
import KeyIndicatorProfessional from './components/screen/KeyIndicatorProfessional'
import MarketQuotation from './components/screen/MarketQuotation'
import RankingPang from './components/Competition/RankingPang'
import StockSelectionDeviceList from './components/screen/StockSelectionDeviceList'
import StockSelectionDevice from './components/screen/StockSelectionDevice'



import LeadingIndustry from './components/screen/LeadingIndustry'
import AllIndustry from './components/screen/AllIndustry'
import Ranking from './components/TradingPlatform/Users/Ranking/Ranking';
import TeamModelIntro from './components/Competition/team/teamModelIntro';
import Screener from './components/TradingPlatform/Users/screener/screener';




const HomePage = () => {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  )
}



const MakeRouter = () => {
  // const dispatch = useDispatch();
  // const token = useSelector(selectAuthToken);
  // const userInfo = useSelector(selectAuthUserProfile);
  // const userType = userInfo ? userInfo.user_type : null;

  // // if (!token) {
  // //   return <MainPage/>
  // // }

  // useEffect(() => {
  //   if (token && !userInfo) {
  //     dispatch(getTokenProfile())
  //   }
  // }, [dispatch, token, userInfo])


  // let userRouteMap = {
  //   A: <AdminMainPage />,
  //   U: <UserMainPage />,
  // };

  // console.log(userType);
  // let userRoute = userInfo ? userRouteMap[userType] : <Route path='/' component={MainPage} />;
  // console.log(userRoute);


  return (
    <Switch>
      <AuthProvider>
      <Route exact path="/eplatform/:username/trade/pro" component={StockPriceGraphProfessional} />
      {/* <Route exact path="/eplatform/:username/trade" component={StockTrade} /> */}
      <Route exact path="/register" component={LoginMainLayout} />
      <Route exact path="/login" component={LoginMainLayout} />
      <Route exact path="/Vlogin" component={LoginMainLayout} />
      <Route exact path="/forgetpassword" component={LoginMainLayout} />
      <Route exact path="/changepassword" component={LoginMainLayout} />

      <Route exact path= "/eplatform/:username" component ={UserPortfolio}/>
      <Route exact path= "/trade" component ={StockTrade}/>
      <Route exact path= "/market" component ={UserMarket}/>
      <Route exact path= "/screener" component ={Screener}/>
      <Route exact path= "/ranking" component ={Ranking}/>
      <Route exact path= "/invest_notes" component ={RankingPang}/>
      <Route exact path="/eplat" component={TradePadmin} />

      <Route exact path="/home" component={MainPage} /> 
      <Route exact path="/" component={MainPage} /> 










{/* 以下为测试URL */}
       <PrivateRoute exact path="/stocks" component={UserStocks} />
      <PrivateRoute exact path="/competition" component={null} />
      <Route exact path="/tournament" component={Tournament} /> 
	  <Route exact path="/editData" component={EditData}/>
	  <Route exact path="/personalHomepage" component={PersonalHomepage}/>
	  <Route exact path="/keyIndicatorSimple" component={KeyIndicatorSimple}/>
	  <Route exact path="/keyIndicatorProfessional" component={KeyIndicatorProfessional}/>
	  <Route exact path="/marketQuotation" component={MarketQuotation}/>
	  <Route exact path="/rankingPang" component={RankingPang}/>
	  <Route exact path="/stockSelectionDeviceList" component={StockSelectionDevice}/>
    <Route exact path="/leadingIndustry" component={LeadingIndustry}/>
    <Route exact path="/leadingIndustry/allIndustry" component={AllIndustry}/> 
    <Route exact path="/team" component={PersonalHomepage}/>
    <Route exact path="/trade/pro" component={StockPriceGraphProfessional} />
    
	  
      </AuthProvider>
    </Switch>
  );
};

function App() {
  return (
    <>
      {MakeRouter()}
    </>

  );
}

export default App;
