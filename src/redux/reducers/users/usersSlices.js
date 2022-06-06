import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetAllUsers, apiGetUser, apiUpdateUser } from "api/main_platform/users";
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    error: null,
    lastUpdatedAt: null,
  };

  export const fetchUser = createAsyncThunk(
    "users/fetchUser",
    async ({userID}) => {
      const response = await apiGetUser(userID);
      return response.data.data;
    }
  );
  
  export const updateUser = createAsyncThunk(
    "users/updateUsers",
    async ({ userID, data }) => {
      const response = await apiUpdateUser(userID, data);
      return response.data.data;
    }
  );


  export const userSlice = createSlice({
      name:"user",
      initialState,
      reducers:{},
      extraReducers: (builder) =>{
          builder
          .addCase(fetchUser.pending, (state,action) => {
            state.error = null;
            state.loading = true;
          })
          .addCase(fetchUser.fulfilled,(state,action) => {
            state.data = action.payload;
            state.error = null;
            state.loading = false;
            state.lastUpdatedAt = Date.now();
          })
          .addCase(fetchUser.rejected,(state,action) => {
            state.error = action.error.message;
            state.loading = false;
          })


          .addCase(updateUser.pending, (state,action) => {
            state.error = null;
            state.loading = true;
          })
          .addCase(updateUser.fulfilled,(state,action) => {
            state.data = action.payload;
            state.error = null;
            state.loading = false;
            state.lastUpdatedAt = Date.now();
          })
          .addCase(updateUser.rejected,(state,action) => {
            state.error = action.error.message;
            state.loading = false;
          })

        }
  })

  export const selectUser = (state) => state.user.data;