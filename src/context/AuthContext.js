import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory, useLocation } from "react-router-dom";
import { clearLocalStorage, getautologin, setPlatformType, cleanAutologin } from "utils";
import { fetchUser } from "redux/reducers/users/usersSlices";
import { useDispatch } from "react-redux";
import { apiGetAllCompetitions, apiGetCompetitionAPIKey, apiGetCompetitiongetInfo, apiGetTeamAccount } from "api/main_platform/competitions";
import { competitionID } from "constants/maps";
import moment from "moment";
import { Modal } from "react-bootstrap";
import { apiGetUser } from "api/main_platform/users";

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
  const [userdata, setuserdata] = useState(() =>
    localStorage.getItem("userSelf")
      ? JSON.parse(localStorage.getItem("userSelf"))
      : null
  );
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

  const [show,setshow] = useState(false)
  const [show1,setshow1] = useState(false)



  ////////////////////////////////////////////////////////////////////////////////////////////////

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
      setshow(true)
    } else{
      setshow1(true)
    }
  };



  /////////////////////////////////////////////////////////////////////////////////////////////////////
  let autologin = async (e) =>{
    let response = await fetch("http://82.157.18.223:10985/api/users/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: getautologin().email,
          password: getautologin().password,
        }),
      });
      let data = await response.json();
      if (data.msg != "The data in request body is invalid." && data.msg != "Unauthorized." ) {
        setAuthTokens(data.data);
        setuser(jwt_decode(data.data.access));
        localStorage.setItem("authTokens", JSON.stringify(data.data));
        cleanAutologin()
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
        setshow(true)
      } else{
        setshow1(true)
      }
  }






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


  let getuserdata = async (id) =>{
    try{
      const response = await apiGetUser(id) 
      localStorage.setItem("userSelf", JSON.stringify(response.data.data.avatar));
      setuserdata(response.data.data.avatar)
    }catch(e){
      console.log(e)
    }
  } 

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

  let contextData = {
    loginUser: loginUser,
    user: user,
    apikey: apikey,
    authTokens: authTokens,
    logoutUser: logoutUser,
    competition: competition,
    team: team,
    autologin: autologin,
    getuserdata: getuserdata,
    userdata: userdata,
    getcompetionapikey: GetCompetitionAPIKey
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
      const response =  await apiGetCompetitiongetInfo()
      if (response.data.msg == "OK."){
        const data = response.data.data.filter(elem => elem.competition == competitionID)
        const team_id = data[0].account
        try{
          const response = await apiGetTeamAccount(team_id)
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
    <>
    <Modal
        show={show}
        centered
        onHide={() =>setshow(false)}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body style={{textAlign:"center"}}>密码错误/邮箱错误/用户不存在</Modal.Body>
        </Modal>

        <Modal
        show={show1}
        centered
        onHide={() =>setshow1(false)}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body style={{textAlign:"center"}}>系统错误，请稍后重试</Modal.Body>
        </Modal>


    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
    </>
  );
};
