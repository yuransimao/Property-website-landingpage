import React from 'react'
import {useSelector} from 'react-redux'
import {selectIsloggedIn} from '../../Redux/slice/authslice'
 function ShowLogIn({childrin}) {

    const isLoggedIn = useSelector(selectIsloggedIn)
  
    if(isLoggedIn ){
        
        return childrin
    }
    return null
}

function ShowLogOut({childrin}) {

    const isLoggedIn = useSelector(selectIsloggedIn)
    if(isLoggedIn ){
        return childrin
    }
    return null
}

export{ShowLogIn, ShowLogOut}