import React from 'react'
import {useSelector} from 'react-redux'
import {selectIsloggedIn} from '../../Redux/slice/authslice'

export const ShowLogin = ({children}) =>{
    const isLoggedin = useSelector(selectIsloggedIn)
    if(isLoggedin){
        return children
    }
    return null
}
export const ShowLogout = ({children}) =>{
    const isLoggedin = useSelector(selectIsloggedIn)
    if(!isLoggedin){
        return children
    }
    return null
}
