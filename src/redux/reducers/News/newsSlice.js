import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetJoinTeamRequest } from "api/main_platform/competitions";
import { apiGetAdminMessageRecipient, apiGetSelfAdminMessages, apiReadAdminMessage } from "api/main_platform/user_messages";



const initialState = {
    news: [],
    state: null,
    loading: true,
    read_or_not:null
}

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async ({team, user_id}) => {
        console.log(".......................................",team, user_id)
        try {
            const responseR = await apiGetSelfAdminMessages()
            const messageNews = responseR.data.data
            const teamlist = []
            let read = false

            try {
                const newNewsArray = await Promise.all(messageNews.map(async function(message) {
                    const responseUser = await apiGetAdminMessageRecipient(message.id);
                    const Leaderdata = responseUser.data.data;
                    return Leaderdata;
                }));
                for (let i = 0; i < messageNews.length; i++) {
                    const readInfo = newNewsArray[i].recipient
                    if (!readInfo.is_read){
                        read = true
                    } 
                    const messageFinal = messageNews[i]
                    messageFinal.is_read = readInfo.is_read
                    teamlist.push(messageFinal)
                    }
           
                const requestdata = []
                let row = []
                let before_filter = []
                let row_before = []
                try{
                        const response2 = await apiGetJoinTeamRequest(team? team.id : null)
                        const requests = response2.data.data  
                            for (let i = 0; i < requests.length; i++){
                                before_filter = requests[i]
                                if (requests[i].status == "P"){
                                    read = true
                                    before_filter.is_read = false   
                                }else {
                                    before_filter.is_read = true
                                }      
                                before_filter.created_at = before_filter.request_time
                                row_before.push(before_filter)
                            }      
                    }catch(e){
                        console.log(e)
                    }

                if (team?.leader != user_id){
                     row = row_before.filter(elem => elem.requester == user_id)
                }else{
                    row = row_before
                }
                console.log(row)
                const messagetotal = [].concat(teamlist,row)
                const messageSorted = messagetotal.sort((a,b) => Date.parse(b.created_at) - Date.parse(a.created_at))
                for (let i = 0; i< messageSorted.length; i++){
                    messageSorted[i].message_id = i + 1
                }
                return {messageSorted, read}
            } catch (e) {
                console.log(e);
            }
        }catch(e){
            console.log(e)
        }
});

export const updateNews = createAsyncThunk(
    "news/updatenews",
    async (id) => {
      const response = await apiReadAdminMessage(id)
      return response.data.data
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
            state.news = action.payload.messageSorted;
            state.state = "fulfilled";
            state.loading = false;
            state.read_or_not = action.payload.read
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
            state.state = "fullfilled";
            state.loading = false;
        })
        .addCase(updateNews.rejected, (state,action) =>{
            state.state = "rejected";
            state.loading = false;
        })
    }

})