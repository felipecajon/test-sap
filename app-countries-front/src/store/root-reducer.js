import {combineReducers} from "redux";
import countriesReducer from "./countries/countries-slice";
import loginReducer from "./login/login-slice";

const rootReducer = combineReducers({
    countriesReducer,
    loginReducer    
});

export default rootReducer; 