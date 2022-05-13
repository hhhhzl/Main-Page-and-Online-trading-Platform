
const authState = {
    isLoggedIn: false,
    user :{
        username:"",
        expires_at: "",
        jwttoken: "",
        authorities: [""]
    }
}
const authreducer = (state = authState, action) => {
    return state;
}

export default authreducer;