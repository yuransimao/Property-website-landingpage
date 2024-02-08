import React from 'react'
import { Inputs } from '../inputs/inputs'

function Form() {
  return (
    <React.Fragment>
       <form action="">
        <Inputs type='text' name='user' labelName='Username' id='userName'/>
       </form>
    </React.Fragment>
  )
}

export  {Form}