import { apiAccountConfig } from "api/trading_platform/trade";

const WatchListActionType ={
    ACTION_SUCCESS: "ACTION_SUCCESS",
    ACTION_FAIL:"ACTION_FAIL",
}

const WatchListAction = (userWatchList) => {
    return async (dispatch) => {
        try {  
            const response = await apiAccountConfig(userWatchList);
            let {data} = response.data;
            console.log(response,18)
           dispatch({type:WatchListActionType.ACTION_SUCCESS,payload:data});
        }catch (error) {
            console.error(error,21)
            dispatch({type:WatchListActionType.ACTION_FAIL,payload: {}});
        }
        
    }
}

export {WatchListAction, WatchListActionType};