import React from 'react'
import { Inputs } from '../inputs/inputs'

import { FaUserAlt } from "react-icons/fa";
function Form() {
  return (
    <React.Fragment>
       <form action="" className='px-7 py-9 '>
        <Inputs type='text' name='user' labelName='Username' id='userName' icon={<FaUserAlt size={14}/>}/>
        <Inputs type='text' name='user' labelName='Username' id='userName' icon={<FaUserAlt size={14}/>}/>
       </form>
    </React.Fragment>
  )
}

export  {Form}