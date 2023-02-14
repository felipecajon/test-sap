import { createSlice } from "@reduxjs/toolkit";
import { getCountries } from "../../services/countries-services";

const initialState = {
    loading: false,
    countries: [],
    error: '',
    pristine: true,
    searchBy: ''
};

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
            state.searchBy = action.meta.arg.lang;
        })
        
        builder.addCase(getCountries.rejected, (state, action) => {
            state.loading = false;
            state.countries = []
            state.error = action.error.message;
            state.pristine = false;
            state.searchBy = action.meta.arg.lang;
        })
    }
});

export default countriesSlice.reducer
export const { getcountries }  = countriesSlice.actions;