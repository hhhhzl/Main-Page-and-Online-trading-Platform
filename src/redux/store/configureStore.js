import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const configureStore = () => {
    const middlewares = [thunk]
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
    const enhancers = composeEnhancers(applyMiddleware)

    const store = createStore(rootReducer(), enhancers);
    return store;
}

export default configureStore;