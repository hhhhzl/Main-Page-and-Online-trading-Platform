import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { NewsSlice } from "redux/reducers/News/newsSlice";
import { StockSlice } from "redux/reducers/Stock/stockReducer";
import { userSelfSlice } from "redux/reducers/users/userSelf";
import { userSlice } from "redux/reducers/users/usersSlices";
import { watchListSlice } from "redux/reducers/WatchList/WatchListReducer";
import rootReducer from "../reducers/rootReducer";

const configurestore =  configureStore({
    reducer:{
        userInfo:userSlice.reducer,
        watchList: watchListSlice.reducer,
        stock: StockSlice.reducer,
        news: NewsSlice.reducer,
        userInfoself:userSelfSlice.reducer
    }

})

export default configurestore;