import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CONFIG } from "../CONFIG";

export const getLogin = createAsyncThunk("user/getLogin", async (payload) => {
    const url = `${CONFIG.authenticationURL}&username=${payload.email}&password=${payload.pw}`;
    const headersConfig = {
        headers: {
            'Authorization': 'Basic c2ItdGVzdC1zYXAtYmFjay1uZXN0IXQxMzI2MjE6RjkxcUNncmdpZEV5ZjF4eEREb1BnclNRQWdvPQ==',
        } 
    };

    const response = await axios.get(url,headersConfig);
    return response.data;   
});