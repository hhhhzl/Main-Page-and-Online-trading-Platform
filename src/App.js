import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage/MainPage";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TradePadmin from "./components/Admin/TradeingPlatformInterface";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

import LoginMainLayout from "./components/webpage/RegisterLogin/mainLayout";
import UserSummary from "pages/UserSummary";
import TradeSimple from "pages/TradeSimple";
import TradePro from "pages/TradePro";
import MarketView from "pages/MarketView";
import Ranking from "pages/Ranking";
import Picking from "pages/Picking";
import InvestNotes from "pages/InvestNotes";
import TeamEntry from "components/Competition/TeamRegister/TeamEntry";
import TeamAgreeProcessCreate from "components/Competition/TeamRegister/TeamAgreeProcessCreate";
import TeamAgreeProcessJoin from "components/Competition/TeamRegister/TeamAgreeProcessJoin";
import Tournament from './components/Tournament/tournament'; 


const HomePage = () => {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

const RedirectComponent = (to) => {
  return () => <Redirect to={to} />;
};

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
        <Route exact path="/register" component={LoginMainLayout} />
        <Route exact path="/login" component={LoginMainLayout} />
        <Route exact path="/Vlogin" component={LoginMainLayout} />
        <Route exact path="/forgetpassword" component={LoginMainLayout} />
        <Route exact path="/changepassword" component={LoginMainLayout} />
        <Route exact path="/home" component={MainPage} />
        <Route exact path="/" component={MainPage} />
        <PrivateRoute exact path="/team/register" component={TeamEntry} />
        <PrivateRoute exact path="/team/create" component={TeamAgreeProcessCreate} />
        <PrivateRoute exact path="/team/join" component={TeamAgreeProcessJoin} />
        <Route exact path="/tournament" component={Tournament} />

        <PrivateRoute
          exact
          path="/eplatform"
          component={RedirectComponent("/eplatform/summary")}
        />
        <PrivateRoute
          exact
          path="/eplatform/summary"
          component={UserSummary}
        />
        <PrivateRoute exact path="/eplatform/trade" component={TradeSimple} />
        <PrivateRoute
          exact
          path="/eplatform/trade/pro"
          component={TradePro}
        />
        <PrivateRoute exact path="/eplatform/market" component={MarketView} />
        <PrivateRoute exact path="/eplatform/picking" component={Picking} />
        <PrivateRoute exact path="/eplatform/ranking" component={Ranking} />
        <PrivateRoute
          exact
          path="/eplatform/invest_notes"
          component={InvestNotes}
        />

        <PrivateRoute
          exact
          path="/oiashdypiaDASneWRFOA/admin"
          component={TradePadmin}
        />
      </AuthProvider>
    </Switch>
  );
};

function App() {
  return <>{MakeRouter()}</>;
}

export default App;