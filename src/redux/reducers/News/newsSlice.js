import { ControlCameraOutlined } from "@material-ui/icons";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetCompetitionRequestsMemeber, apiGetJoinTeamRequest } from "api/main_platform/competitions";
import { apiGetAdminMessageRecipient, apiGetSelfAdminMessages, apiReadAdminMessage } from "api/main_platform/user_messages";


const getAdminMessage = async () =>{
    try {
        const responseR = await apiGetSelfAdminMessages()
        const messageNews = responseR.data.data
        const row_before = []
        try {
            const newNewsArray = await Promise.all(messageNews.map(async function(message) {
                const responseUser = await apiGetAdminMessageRecipient(message.id);
                const Leaderdata = responseUser.data.data;
                return Leaderdata;
            }));
            for (let i = 0; i < messageNews.length; i++) {
                const readInfo = newNewsArray[i].recipient
                const messageFinal = messageNews[i]
                messageFinal.is_read = readInfo.is_read
                messageFinal.status = "Message"
                row_before.push(messageFinal)
                }
            return row_before
        }catch(e){

        }
    }catch(e){

    }
}

const getRequests = async (team, user_id) =>{
    let before_filter= [] 
    let row_before = []
    console.log(team,user_id)
    try{
        // member
        if (!team || team.leader != user_id){
            const response2 = await apiGetCompetitionRequestsMemeber()
            const requests = response2.data.data
            for (let i = 0; i < requests.length; i++){
                before_filter = requests[i]   
                before_filter.created_at = before_filter.request_time
                if (["P"].includes(before_filter.status)){
                    before_filter.is_read = false
                }else{
                    before_filter.is_read = true
                }
                row_before.push(before_filter)
            } 
            return row_before
        } else if (team && team.leader == user_id){
            const response2 = await apiGetJoinTeamRequest(team.id)
            const requests = response2.data.data
            for (let i = 0; i < requests.length; i++){
                before_filter = requests[i]   
                before_filter.created_at = before_filter.request_time
                if (["P"].includes(before_filter.status)){
                    before_filter.is_read = false
                }else{
                    before_filter.is_read = true
                }
                row_before.push(before_filter)
            } 
            return row_before
        }
    }catch(e){
        console.log(e)
    }
}

const initialState = {
    news: [],
    state: null,
    loading: true,
    read_or_not:null
}

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async ({team, user_id}) => {
        let read = false
        try{   
            const newArrays = await Promise.all([getAdminMessage(),getRequests(team, user_id)])
            let unsortArray = []
            let mergedArray = []
            let sortedArray = []
            for (let i = 0; i < newArrays.length; i++){
                    for (let j = 0; j < newArrays[i].length; j++) {
                        mergedArray = newArrays[i][j]
                        if (mergedArray.is_read == false){
                                read = true
                        }    
                        unsortArray.push(mergedArray)
                    }       
            } 
            sortedArray = unsortArray.sort((a,b) => Date.parse(b.created_at) - Date.parse(a.created_at))
            for (let i = 0; i< sortedArray.length; i++){
                sortedArray[i].message_id = i + 1
           }
            return {sortedArray,read}
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
            state.news = action.payload.sortedArray;
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