
export const Reducers = (state, action) => {

   switch(action.type){
    case 'User_active':{

        const {userEmail,userName, userId,  } = action.payload
        return{
            ...state,
           isLoggedIn: true,
           userName,
           userEmail,
           userId,
        }
    }
    case 'Remove_User_Active':{
       return{
        ...state,
        isLoggedIn: false,
        userName:null,
        userEmail:null,
        userId:null,
       }
    }
   }

}