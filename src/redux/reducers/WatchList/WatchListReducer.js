import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getWatchList, setWatchlist, addWatchlist} from "../../../utils/index"

const initialState = {
    config:{
        watchlist:[] 
    },
    status: null,
    loading: true,
}

export const fetchWatchList = createAsyncThunk(
    "watchlist/fetchwatchlists",
    async () => {
        const response = getWatchList()
      return response
});

export const updateWatchList = createAsyncThunk(
    "watchlist/updatewatchlists",
    async (symbol) => {
      addWatchlist(symbol)
      const response = getWatchList()
      return response
});

export const removeWatchList = createAsyncThunk(
    "watchlist/removewatchlist",
    async (symbol) =>{
      let watchlist = getWatchList()
      console.log("here-------------")
      let deletewatchList = watchlist.filter(elem => elem != symbol)
      setWatchlist(deletewatchList)
      const response = getWatchList()
      return response
    }
    
)

export const watchListSlice = createSlice({
    name:"watchList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchWatchList.pending, (state,action) =>{
            state.status = "pending";
            state.loading = true;
        })
        .addCase(fetchWatchList.fulfilled, (state,action) =>{
            state.config.watchlist = action.payload;
            state.status = "Fullfilled";
            state.loading = false;
        })
        .addCase(fetchWatchList.rejected, (state,action) =>{
            state.status = "Rejected";
            state.loading = false;
        })



        .addCase(updateWatchList.pending, (state,action) =>{
            state.status = "pending";
            state.loading = true;
        })
        .addCase(updateWatchList.fulfilled, (state,action) =>{
            state.config.watchlist = action.payload;
            state.status = "Fullfilled";
            state.loading = false;
        })
        .addCase(updateWatchList.rejected, (state,action) =>{
            state.status = "Rejected";
            state.loading = false;
        })


        .addCase(removeWatchList.pending, (state,action) =>{
            state.status = "pending";
            state.loading = true;
        })
        .addCase(removeWatchList.fulfilled, (state,action) =>{
            state.config.watchlist = action.payload;
            state.status = "Fullfilled";
            state.loading = false;
        })
        .addCase(removeWatchList.rejected, (state,action) =>{
            state.status = "Rejected";
            state.loading = false;
        })
    }

})
