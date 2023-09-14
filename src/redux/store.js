import {combineReducers} from "redux"; 
import { legacy_createStore as createStore } from "redux";
import signupReducer from "./signup";
import loginReducer from "./login";
import dataReducer from "./display";

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({
    signup : signupReducer,
    login : loginReducer,
    data: dataReducer
});
 

export const store = createStore(rootReducer, reduxDevtools)
