import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetJoinTeamRequest } from "api/main_platform/competitions";
import { apiGetSelfAdminMessages } from "api/main_platform/user_messages";


const initialState = {
    news: null,
    state: null,
    loading: true,
}

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async (id) => {
        try {
            const responseR = await apiGetSelfAdminMessages()
            const messageNews = responseR.data.data
            // try{
            //     console.log(id)
            //     const request = await apiGetJoinTeamRequest(id)
            //     console.log(id,request)
            //     const TeamNews = request.data.data
            //     const message = [...messageNews,...TeamNews]
            //     return message
            // }catch(e){
            //     console.log(e)
            // }
            return messageNews
        }catch(e){
            console.log(e)
        }
        
        
        
        
        

});

export const updateNews = createAsyncThunk(
    "news/updatenews",
    async (symbol) => {
      const response = true
      return response
});


export const NewsSlice = createSlice({
    name:"news",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchNews.pending, (state,action) =>{
            state.state = "pending";
            state.loading = true;
        })
        .addCase(fetchNews.fulfilled, (state,action) =>{
            state.news = action.payload;
            state.state = "Fullfilled";
            state.loading = false;
        })
        .addCase(fetchNews.rejected, (state,action) =>{
            state.state = "Rejected";
            state.loading = false;
        })



        .addCase(updateNews.pending, (state,action) =>{
            state.state = "pending";
            state.loading = true;
        })
        .addCase(updateNews.fulfilled, (state,action) =>{
            state.news = action.payload;
            state.state = "Fullfilled";
            state.loading = false;
        })
        .addCase(updateNews.rejected, (state,action) =>{
            state.state = "Rejected";
            state.loading = false;
        })
    }

})