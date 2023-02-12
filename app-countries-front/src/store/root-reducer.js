import {combineReducers} from "redux";
import countriesReducer from "./countries/countries-slice";

const rootReducer = combineReducers({
    countriesReducer    
});

export default rootReducer; 