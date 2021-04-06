import { combineReducers } from "redux";
import adminReducers from './adminReducers';
import userReducers from './userReducers';
import dataReducers from './dataReducers';
import postReducers from './postReducers'

export default combineReducers({
    adminReducers,userReducers,dataReducers,postReducers
})