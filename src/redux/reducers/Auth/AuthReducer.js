import { AuthActionType } from "../../actions/AuthAction";

const authState = {
    isLoggedIn: false,
    user:{
        username:"",
        expires_at: "",
        jwttoken: "",
        authorities: []
    }
}
const authreducer = (state = authState, action) => {
    switch (action.type) {
        case AuthActionType.REGISTER_SUCCESS:
            return {
                isLoggedIn: true,
                user:action.payload,
            };
        case AuthActionType.RGISTER_FAIL:
                return state
        default:
            return state;
    }
}

export default authreducer;