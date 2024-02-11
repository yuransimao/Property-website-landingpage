import {useState} from 'react'
import { UseVisivelMenu } from './useVisivelMenu';

function UseMordalBox(){
    const {setVisivelMenu} = UseVisivelMenu()
    const [showForm, setShowForm] = useState(false);

    const HandleSign = () => {
        setShowForm(true)
        setVisivelMenu(false)
    }
    
    return {showForm, setShowForm, HandleSign}

}

export { UseMordalBox} 