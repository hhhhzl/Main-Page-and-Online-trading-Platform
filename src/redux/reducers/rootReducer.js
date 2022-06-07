import { combineReducers } from "redux";
import authreducer from "./Auth/AuthReducer";

const rootReducer = () =>
    combineReducers({
        auth: authreducer,
    })

export default rootReducer;