import { createStore,compose,applyMiddleware } from "redux";
import authreducer from "./reducers/Auth/AuthReducer";
import thunk from "redux-thunk";
import watchListReducer from "./reducers/WatchList/WatchListReducer";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,composeEnhancers(applyMiddleware(thunk)),
)

export default store;