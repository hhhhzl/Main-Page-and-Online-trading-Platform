import { WatchListActionType } from "redux/actions/WatchListAction";

const WatchListState = {
    config:{
        
    }
}
const watchListReducer = (state = WatchListState, action) => {
    switch (action.type) {
        case WatchListActionType.ACTION_SUCCESS:
            return {
                config:action.payload,
            };
        case WatchListActionType.ACTION_FAIL:
                return state
        default:
            return state;
    }
}

export default watchListReducer;