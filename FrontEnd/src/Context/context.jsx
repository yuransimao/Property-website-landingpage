import {  createContext } from "react";
import { useReducer } from "react";
import { Reducers } from "./reducer/reducer";
import { InitialState } from "./initialState/initialstate";

export const UserProviderContext = createContext();


function UserProvider ({children}){
    const Value = useReducer(Reducers, InitialState);

    return(
        <UserProviderContext.Provider value={Value}>
                {children}
        </UserProviderContext.Provider>
    )
}

export {UserProvider}