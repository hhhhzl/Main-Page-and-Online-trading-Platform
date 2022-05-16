import { apiRegisterUser } from "../../api/users";

const AuthActionType ={
    RGISTER_SUCCESS: "RGISTER_SUCCESS",
    RGISTER_FAIL: "RGISTER_FAIL",
}

const RegisterAuthAction = (userState) => {
    return async (dispatch) => {
        try {
            
            const response = await apiRegisterUser(userState);
            let {data} = response.data;
            console.log(response,18)
            console.log(response.data.username,19)
           dispatch({type:AuthActionType.RGISTER_SUCCESS,payload:data});
        }catch (error) {
            console.error(error,21)
            dispatch({type:AuthActionType.RGISTER_FAIL,payload: {}});
        }
        
    }
}

export {RegisterAuthAction, AuthActionType};