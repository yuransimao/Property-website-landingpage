import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    userName: null,
    userEmail: null,
    userId: null,
    userPhoto: null,
    isLoggedIn: false,
}

const AuthSlice = createSlice({
    name:'Auth',
    initialState,
    reducers:{
        User_Active : (state, action) =>{
            state.isLoggedIn = true,
            state.userPhoto= state.userPhoto
            state.userEmail = action.payload.userEmail,
            state.userName = action.payload.userName
            state.userId = action.payload.userId

        },
        User_Desatived : (state, action) =>{
            state.isLoggedIn = false;
            state.userPhoto = null;
            state.userEmail = null;
            state.userName = null;
            state.userId = null;
        }
    }
})


export const {User_Active, User_Desatived} = AuthSlice.actions

export const selectIsloggedIn = (state) => state.Auth.isLoggedIn
export const selectIsPhotouser = (state) => state.Auth.userPhoto
export const selectUserEmail = (state) => state.Auth.userEmail
export const selectUserName = (state) => state.Auth.userName
export default AuthSlice.reducer