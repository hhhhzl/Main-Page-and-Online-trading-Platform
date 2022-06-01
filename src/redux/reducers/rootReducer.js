import { combineReducers } from "redux";
import authreducer from "./Auth/AuthReducer";
import userReducer from "./users/user.reducer";
import watchListReducer from "./WatchList/WatchListReducer"

const rootReducer = () =>
    combineReducers({
        auth: authreducer,
        watchlist: watchListReducer,
    })

export default rootReducer;