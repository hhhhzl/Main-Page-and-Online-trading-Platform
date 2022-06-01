import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory, useLocation } from "react-router-dom";
import { clearLocalStorage, setPlatformType } from "utils";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
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

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://59.110.238.142:8000/api/users/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    console.log(jwt_decode(data.access));
    if (response.status === 200) {
      setAuthTokens(data);
      setuser(jwt_decode(data.access));
      console.log(user);
      localStorage.setItem("authTokens", JSON.stringify(data));
      setPlatformType("competition")
      history.push(route.from);
    } else {
      alert("Something Went Wrong!");
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
    if (response.status === 200) {
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
    authTokens: authTokens,
    logoutUser: logoutUser,
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

  useEffect(() =>{
    setRoute((prev) => ({to: location.pathname, from: prev.to}))
  },[location])

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
