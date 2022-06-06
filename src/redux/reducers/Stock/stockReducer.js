import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getLastStock, setLastStock} from "../../../utils/index"

const defaultstock = "SH.600030"

const initialState = {
    stock: null,
    state: null,
    loading: true,
}

export const fetchStock = createAsyncThunk(
    "stock/fetchStock",
    async () => {
        const response = getLastStock()
        console.log(response,16)
        if (response){
            return response
        }else{
            return defaultstock
        }
});

export const updateStock = createAsyncThunk(
    "stock/updatestock",
    async (symbol) => {
      setLastStock(symbol)
      const response = getLastStock()
      return response
});


export const StockSlice = createSlice({
    name:"stock",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchStock.pending, (state,action) =>{
            state.state = "pending";
            state.loading = true;
        })
        .addCase(fetchStock.fulfilled, (state,action) =>{
            state.stock = action.payload;
            state.state = "Fullfilled";
            state.loading = false;
        })
        .addCase(fetchStock.rejected, (state,action) =>{
            state.state = "Rejected";
            state.loading = false;
        })



        .addCase(updateStock.pending, (state,action) =>{
            state.state = "pending";
            state.loading = true;
        })
        .addCase(updateStock.fulfilled, (state,action) =>{
            state.stock = action.payload;
            state.state = "Fullfilled";
            state.loading = false;
        })
        .addCase(updateStock.rejected, (state,action) =>{
            state.state = "Rejected";
            state.loading = false;
        })
    }

})
