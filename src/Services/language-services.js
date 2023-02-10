import axios from "axios";
import CONFIG from "../config";

export const getCountriesByLanguage = async language => {
    
    try {
        const response = await axios.get(`https://www.omdbasspi.com/?apikey=${CONFIG.apiKey}&t=${language}`);
        return response.data;    
    } catch (error) {
        debugger
        // Criar Toaster
    }
    
};