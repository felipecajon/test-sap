import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { CONFIG } from "../../CONFIG";

const initialState = {
    loading: false,
    countries: [],
    error: '',
    pristine: true,
    searchBy: ''
};

export const getCountries = createAsyncThunk("countries/getCountries", async ({lang, user}) => {
    const headersConfig = {
        headers: {
            'Authorization': `Bearer ${user.access_token}`,
        } 
    };

    const response = await axios.get(`${CONFIG.baseURL}/countries?lang=${lang}`, headersConfig);
    return response.data;    
});

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCountries.pending, state => {
            state.loading = true;
            state.pristine = true;
        })
        
        builder.addCase(getCountries.fulfilled, (state, action) => {
            state.loading = false;
            state.countries = action.payload;
            state.error = '';
            state.pristine = false;
            state.searchBy = action.meta.arg;
        })
        
        builder.addCase(getCountries.rejected, (state, action) => {
            state.loading = false;
            state.countries = [];
            state.error = action.error.message;
            state.pristine = false;
            state.searchBy = action.meta.arg;
        })
    }
});

export default countriesSlice.reducer
export const { getcountries }  = countriesSlice.actions;