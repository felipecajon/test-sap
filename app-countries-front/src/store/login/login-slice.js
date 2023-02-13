import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { CONFIG } from "../../CONFIG";

const initialState = {
    loading: false,
    user: {},
    error: '',
};

export const getLogin = createAsyncThunk("user/getLogin", async (email, pw) => {
    const url = 'https://23672ab4trial.authentication.us10.hana.ondemand.com/oauth/token?grant_type=password&username=paulo.arantes@bs.nttdata.com&password=S@pNtt2023';
    const headersConfig = {
        headers: {
            'Authorization': 'Basic c2ItdGVzdC1zYXAtYmFjay1uZXN0IXQxMzI2MjE6RjkxcUNncmdpZEV5ZjF4eEREb1BnclNRQWdvPQ==',
        } 
    };

    const body = {
        'grant_type': 'password',
        'username': 'paulo.arantes@bs.nttdata.com',
        'password': 'S@pNtt2023'
    };

    const response = await axios.post(url, body, headersConfig);
    return response.data;   
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getLogin.pending, state => {
            state.loading = true;
        })
        
        builder.addCase(getLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = '';
        })
        
        builder.addCase(getLogin.rejected, (state, action) => {
            state.loading = false;
            state.user = {};
            state.error = action.error.message;
        })
    }
});

export default userSlice.reducer
export const { getuser }  = userSlice.actions;