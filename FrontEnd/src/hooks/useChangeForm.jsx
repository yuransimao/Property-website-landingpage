import  { useState } from 'react'
import { UseSchema } from './useSchema';


function UseChangeForm() {

    const { reset } = UseSchema()

    const TextBtnSignin = 'Sign in';
    const TextBtnSignup = 'Sign up';
    const [ChangeForms, setChangeForms] = useState(TextBtnSignin);

    const haldleOnclick = (e) => {
        const buttonText = e.target.textContent;
        setChangeForms(buttonText);
        reset()
    }

    return {TextBtnSignin, TextBtnSignup,ChangeForms, haldleOnclick}
}

export { UseChangeForm }