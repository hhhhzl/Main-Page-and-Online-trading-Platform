import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetAllUsers, apiGetUser, apiUpdateUser } from "api/main_platform/users";
import axios from "axios";

const initialState = {
    dataself: [],
    loading: false,
    error: null,
    lastUpdatedAt: null,
    status:null
  };

  export const fetchUserSelf = createAsyncThunk(
    "users/fetchUserSelfself",
    async (userID) => {
      const response = await apiGetUser(userID);
      return response.data.data;
    }
  );
  
  export const updateUserSelf = createAsyncThunk(
    "users/updateUserSelfself",
    async ({ data }) => {
      const response = await apiUpdateUser(data);
      return response.data.data;
    }
  );


  export const userSelfSlice = createSlice({
      name:"userInfoself",
      initialState,
      reducers:{},
      extraReducers: (builder) =>{
          builder
          .addCase(fetchUserSelf.pending, (state,action) => {
            state.error = null;
            state.loading = true;
            state.status = "pending"
          })
          .addCase(fetchUserSelf.fulfilled,(state,action) => {
            state.dataself = action.payload;
            state.error = null;
            state.loading = false;
            state.lastUpdatedAt = Date.now();
            state.status = "fulfilled"
          })
          .addCase(fetchUserSelf.rejected,(state,action) => {
            state.error = action.error.message;
            state.loading = false;
            state.status = "reject"
          })


          .addCase(updateUserSelf.pending, (state,action) => {
            state.error = null;
            state.loading = true;
          })
          .addCase(updateUserSelf.fulfilled,(state,action) => {
            state.dataself = action.payload;
            state.error = null;
            state.loading = false;
            state.lastUpdatedAt = Date.now();
          })
          .addCase(updateUserSelf.rejected,(state,action) => {
            state.error = action.error.message;
            state.loading = false;
          })

        }
  })