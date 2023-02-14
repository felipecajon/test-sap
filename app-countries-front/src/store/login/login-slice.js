import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { CONFIG } from "../../CONFIG";
import { getLogin } from "../../services/auth-services";

const initialState = {
    pristine: true,
    loading: false,
    user: {},
    error: '',
    isLogged: false
};

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