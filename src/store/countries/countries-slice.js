import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    countries: [],
    error: ''
};

export const getCountries = createAsyncThunk("countries/getCountries", async language => {
    const response = await axios.get(`http://localhost:3000/api/countries?lang=${language}`);
    return response.data;    
});

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        // getcountries: (state, action) => {
        //     state.countries = action.payload
        // }
    },
    extraReducers: builder => {
        builder.addCase(getCountries.pending, state => {
            state.loading = true;
        })
        
        builder.addCase(getCountries.fulfilled, (state, action) => {
            state.loading = false;
            state.countries = action.payload;
            state.error = '';
        })
        
        builder.addCase(getCountries.rejected, (state, action) => {
            state.loading = false;
            state.countries = null;
            state.error = action.error.message;
        })
    }
});

export default countriesSlice.reducer
export const { getcountries }  = countriesSlice.actions;