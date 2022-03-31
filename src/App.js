import './App.css';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter, Switch, Route, Router, useRouteMatch } from "react-router-dom";
import RegisterForm from './components/MainPage/registerForm';
import LoginForm from './components/MainPage/loginForm';
import tradePadmin from './components/TradingPlatform/Admin/TradeingPlatformInterface';
import tradePusers from './components/TradingPlatform/Users/TradeingPlatformInterface';
import data from "./static/users.json"
import useToken from './useToken';

import { selectAuthUserProfile, selectAuthToken, getTokenProfile } from "./state/slices/auth";

/*users */
import SideMenuUsers from './components/TradingPlatform/Users/sideMenuUsers';
import Userbalance from './components/TradingPlatform/Users/Portfolio/UserBalance';
import UserMarket from './components/TradingPlatform/Users/Market/market';

/*Admin*/
import UsersManageTable from './components/TradingPlatform/Admin/UsersManageTable';
import NavBarTest from './components/TradingPlatform/navBar';
import SideMenuAdmin from './components/TradingPlatform/Admin/sideMenuAdmin';
import UserStocks from './components/TradingPlatform/Users/Stocks/UserStocks';
import UserTrade from './components/TradingPlatform/Users/Trade/UserTrade';
import StockManageTable from './components/TradingPlatform/Admin/StockManageTable';



const UserMainPage = () => {
  return (
    <div>
      <NavBarTest username={'张三'} usertype={"用户"} />
      <SideMenuUsers />
      <Switch>
        <Route path="/eplatform/user">
          <Userbalance />
        </Route>
        <Route path="/eplatform/user/market">
          <UserMarket />
        </Route>
      </Switch>
    </div>

  );
};

const AdminMainPage = () => {

  return (
    <div>
      <NavBarTest username={'张三'} usertype={"管理员"} />
      <SideMenuAdmin />
      <Switch>
        <Route path="/eplatform/admin">
          <div className='supervisor-interface'>
            <h3>欢迎</h3>
            <br />
            <UsersManageTable />
          </div>
        </Route>
        <Route path='/stock'>
          <div className='supervisor-interface'>
            <h3>欢迎</h3>
            <br />
            <StockManageTable />
          </div>
        </Route>
        <Route path='/home'>
        </Route>
      </Switch>
    </div>

  );
};


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


  let userRouteMap = {
    A: <AdminMainPage />,
    U: <UserMainPage />,
  };

  // console.log(userType);
  // let userRoute = userInfo ? userRouteMap[userType] : <Route path='/' component={MainPage} />;
  // console.log(userRoute);


  return (
    <Switch>
      <Route exact path="/eplatform/user" component={tradePusers} />
      <Route exact path="/eplatform/user/trade" component={UserTrade} />
      <Route exact path="/eplatform/" component={tradePadmin} />
      <Route exact path="/eplatform/stock" component={StockManageTable} />
      <Route exact path="/stocks" component={UserStocks} />
      <Route exact path="/register" component={RegisterForm} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/home" component={MainPage} />
      <Route exact path="/" component={MainPage} />
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
