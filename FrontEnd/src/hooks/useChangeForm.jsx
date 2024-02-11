import  { useState } from 'react'
import { UseSchema } from './';


function UseChangeForm() {

    const {HaldleOnclick} = UseSchema()

    const TextBtnSignin = 'Sign in';
    const TextBtnSignup = 'Sign up';
    const [ChangeForms, setChangeForms] = useState(TextBtnSignin);

   

    return {TextBtnSignin, TextBtnSignup,ChangeForms}
}

export { UseChangeForm }