import { auth } from "../service/service";
import { signOut } from "firebase/auth";


function UseSignOut(){

    const SignOut =  () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.log(error)
          });
    } 

    return {SignOut}
}

export {UseSignOut}