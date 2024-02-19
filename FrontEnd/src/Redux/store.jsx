import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthReducer from './slice/authslice'


const rootReducer = combineReducers({
    Auth: AuthReducer
})
export const store = configureStore({
    reducer:rootReducer
})

export default store