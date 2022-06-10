import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory, useLocation } from "react-router-dom";
import { clearLocalStorage, setPlatformType } from "utils";
import { fetchUser } from "redux/reducers/users/usersSlices";
import { useDispatch } from "react-redux";
import { apiGetAllCompetitions, apiGetCompetitionAPIKey, apiGetTeamAccount } from "api/main_platform/competitions";
import { competitionID } from "constants/maps";
import moment from "moment";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [user, setuser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const [apikey, setapikey] = useState(null);
  const [competition, setcompetition] = useState(null)
  const [team, setteam] = useState(null)
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [loading, setloading] = useState(true);

  const location = useLocation()
  const [route, setRoute] = useState({
    to: location.pathname,
    from: location.pathname
  });

  const history = useHistory();

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://82.157.18.223:10985/api/users/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    if (data.msg != "The data in request body is invalid." && data.msg != "Unauthorized." ) {
      setAuthTokens(data.data);
      setuser(jwt_decode(data.data.access));
      localStorage.setItem("authTokens", JSON.stringify(data.data));
      dispatch(fetchUser(jwt_decode(data.data.access).user_id))
      GetCompetitionAPIKey()
      if (route.from == "/eplatform"){
         setPlatformType("eplatform")
        history.push(route.from);
      }else if (route.from == "/competition"){
       setPlatformType("competition")
        history.push(route.from);
      } else if (route.from == "/team/register"){
          setPlatformType("competition")
          history.push('/competition')        
      }else{
        history.push('/')
      }
    } else if (data.data.detail == "No active account found with the given credentials") {
      alert("密码错误/邮箱错误/用户不存在");
    } else{
      alert("系统错误,请稍后重试...");
    }
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setuser(null);
    localStorage.removeItem("authTokens");
    clearLocalStorage();
    history.push("/");
  };

  

  let updataToken = async () => {
    console.log("update");
    let response = await fetch("http://59.110.238.142:8000/api/users/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens.refresh }),
    });
    let data = await response.json();
    if (data.msg != "The data in request body is invalid") {
      setAuthTokens(data);
      setuser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      loginUser();
    }
  };

  let contextData = {
    loginUser: loginUser,
    user: user,
    apikey: apikey,
    authTokens: authTokens,
    logoutUser: logoutUser,
    competition:competition,
    team:team,
  };

  // useEffect(()=>{
  //     let fourMinutes = 1000 * 60 *4
  //     let interval = setInterval(() => {
  //         if (authTokens){
  //             updataToken()
  //         }
  //     }, fourMinutes)
  //     return () => clearInterval(interval)
  // },[authTokens,loading])

  const GetCompetitionAPIKey = async () =>{
    try{
      const response = await apiGetCompetitionAPIKey(competitionID)
      if (response.data.msg == "OK."){
        const apikey = response.data.data.api_key
        setapikey(apikey)
      }else{
        setapikey(null)
      }
    }catch(e){

    }
  }

  const GetCompetitions = async (id) =>{
    try{
      const response = await apiGetAllCompetitions(id)
      if (response.data.msg == "OK."){
        const competitions = response.data.data
        const competition_want = competitions.filter((elem) => elem.id == competitionID)
        let competition_time = {}
        competition_time.register = competition_want[0].registration_time
        competition_time.start = competition_want[0].start_time
        competition_time.end = competition_want[0].end_time
        setcompetition(competition_time)
      }else{
        setcompetition(null)
      }
    }catch(e){
      console.log(e)
    }
  }

  const GetCompetitionTeam = async (id) =>{
    try{
      const response = await apiGetTeamAccount(1)
      if (response.data.msg == "OK."){
        const teamA = response.data.data
        console.log(teamA,163)
        setteam(teamA)
      }else{
        setteam(null)
      }
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() =>{
    setRoute((prev) => ({to: location.pathname, from: prev.to}))
  },[location])


  ///////////////////////有user后自动请求apikey
  useEffect(() =>{
    if (user){
      GetCompetitions(null)
      GetCompetitionAPIKey()
    }
  },[user])

  useEffect(() =>{
    if (!user){
      GetCompetitions(null)
      setapikey(null)
    }
  },[user])


  /////////////////////有apikey后自动请求team
  useEffect(() =>{
    if (apikey){
      GetCompetitionTeam(null)
      GetCompetitions(null)
    }
  },[apikey])

  useEffect(()=>{
    if (!apikey){
      GetCompetitions(null)
      setteam(null)
    }
  },[apikey])

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
