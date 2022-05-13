import { combineReducers } from "redux";
import authreducer from "./Auth/AuthReducer";
import userReducer from "./users/user.reducer";

const rootReducer = () =>
    combineReducers({
        users: userReducer,
    })

export default rootReducer;