import axios from "axios";
import CONFIG from "../config";

export const getCountriesByLanguage = async language => {
    
    try {
        // const response = await axios.get(`https://www.omdbasspi.com/?apikey=${CONFIG.apiKey}&t=${language}`);
        const response = await axios.get(`http://localhost:3000/api/countries?lang=${language}`);
        return response.data;    
    } catch (error) {
        debugger
        // Criar Toaster
    }
    
};