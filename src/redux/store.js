import { createStore,compose,applyMiddleware } from "redux";
import authreducer from "./reducers/Auth/AuthReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
    authreducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store;