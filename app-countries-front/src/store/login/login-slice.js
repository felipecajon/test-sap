import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { CONFIG } from "../../CONFIG";

const initialState = {
    pristine: true,
    loading: false,
    user: {},
    error: '',
    isLogged: false
};

export const getLogin = createAsyncThunk("user/getLogin", async (payload) => {
    payload.email = 'paulo.arantes@bs.nttdata.com';
    payload.pw = 'S@pNtt2023';
    
    const url = `${CONFIG.authenticationURL}&username=${payload.email}&password=${payload.pw}`;
    const headersConfig = {
        headers: {
            'Authorization': 'Basic c2ItdGVzdC1zYXAtYmFjay1uZXN0IXQxMzI2MjE6RjkxcUNncmdpZEV5ZjF4eEREb1BnclNRQWdvPQ==',
        } 
    };

    const response = await axios.get(url,headersConfig);
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
            state.isLogged = true;
            state.pristine = false;
        })
        
        builder.addCase(getLogin.rejected, (state, action) => {
            state.loading = false;
            state.user = {};
            state.error = action.error.message;
            state.isLogged = false;
            state.pristine = false;
        })
    }
});

export default userSlice.reducer
export const { getuser }  = userSlice.actions;