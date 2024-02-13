import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    userName: null,
    userEmail: null,
    userId: null,
    isLoggedIn: false,
}

const AuthSlice = createSlice({
    name:'Auth',
    initialState,
    reducers:{
        User_active : (state, action) =>{
            state.isLoggedIn = true,
            
            state.userEmail = action.payload.userEmail,
            state.userName = action.payload.userName
            state.userId = action.payload.userId

        },
        User_Desatived : (state, action) =>{
            state.isLoggedIn = false,
            
            state.userEmail = null,
            state.userName = null,
            state.userId = null
        }
    }
})


export const {User_active, User_Desatived} = AuthSlice.actions

export const selectIsloggedIn = (state) => state.Auth.isLoggedIn

export default AuthSlice.reducer