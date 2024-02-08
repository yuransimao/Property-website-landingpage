import React, {useState} from 'react'
import { Inputs, Button } from '../'
import { FaUserAlt,FaEnvelope , FaLock} from "react-icons/fa";


function Form() {

  const [register, setRegister] = useState('Sign in');


    const haldleOnclick = (e) => {
      const buttonText = e.target.textContent;
      setRegister(buttonText)

    }
  return (
    <React.Fragment>
      <div className='bg-white rounded-sm overflow-hidden w-2/5'>
        <div className='flex items-center justify-between gap-1'>
          <button className={`py-4 px-20 ${register == "Sign in" && 'bg-blue-500 text-white'} `} onClick={(e) =>haldleOnclick(e)}><h3>Sign in</h3></button>
          <button className={`py-4 px-20 ${register == "Register" && 'bg-blue-500 text-white'}`} onClick={(e) =>haldleOnclick(e)}><h2>Register</h2></button>
        </div>
        <div>
          {register === 'Register' ? (
          <form action="" className='px-7 py-9 '>
            <Inputs type='text' name='user' labelName='Username' id='userName' icon={<FaUserAlt size={14} />} />
            <Inputs type='email' name='user' labelName='Email' id='Email' icon={<FaEnvelope size={14} />} />

            <Inputs type='password' name='password' labelName='Password' id='password' icon={<FaLock size={14} />} />
            <Inputs type='password' name='password' labelName='Confirma Password' id='Confpassword' icon={<FaLock size={14} />} />

            <Button text="Register"/>
          </form>):(
            <form action="" className='px-7 py-9 '>
            
            <Inputs type='email' name='user' labelName='Email' id='Email' icon={<FaEnvelope size={14} />} />

            <Inputs type='password' name='password' labelName='Password' id='password' icon={<FaLock size={14} />} />
            

            <Button text="Sign in"/>
          </form>
          )}
        </div>
      </div>

    </React.Fragment>
  )
}

export { Form }