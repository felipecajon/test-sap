import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CONFIG } from "../CONFIG";

export const getCountries = createAsyncThunk("countries/getCountries", async ({lang, user}) => {
    const headersConfig = {
        headers: {
            'Authorization': `Bearer ${user.access_token}`,
        } 
    };

    const response = await axios.get(`${CONFIG.baseURL}/countries?lang=${lang}`, headersConfig);
    return response.data;    
});