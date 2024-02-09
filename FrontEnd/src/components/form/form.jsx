import React, {useState} from 'react'
import { Inputs, Button } from '../'
import { FaUserAlt,FaEnvelope , FaLock} from "react-icons/fa";
import {useForm} from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod"
import z from 'zod';

const schema = z.object({
  userName: z.string().min(2, 'required').transform(userName => { 
    return userName.trim().split(' ').map( name => {
      return name[0].toLocaleUpperCase().concat(name.substring(1))}
    ).join(' ')}),
  userEmail:z.string().nonempty('O formato de email é obrigatorio').email('Formato de e-mail invalido'),
  userPassword: z.string().min(6,'required'),
  userconfPassword: z.string().superRefine((val, ctx) =>{
    if(val != ctx.userPassword){
      throw new Error('As senhas não coincidem');
    }

    return val
  }, { userPassword: z.string() })
})
function Form() {

  const TextBtnSignin = 'Sign in';
  const TextBtnSignup = 'Sign up';
  const [ChangeForms, setChangeForms] = useState(TextBtnSignin);
  const {register, handleSubmit, formState :{errors}} = useForm( {resolver: zodResolver(schema)})


    const haldleOnclick = (e) => {
      const buttonText = e.target.textContent;
      setChangeForms(buttonText)

    }

    const createUser = (data) => {
        console.log(data)
    }

    console.log(errors.userconfPassword)

  return (
    <React.Fragment>
      <div className='bg-white rounded-sm overflow-hidden   w-11/12 lg:w-2/5 md:w-3/6 sm:w-[70%]'>
        <div className='flex items-center justify-between gap-1'>
          <button className={`py-4 px-20 ${ChangeForms !== TextBtnSignin && 'bg-blue-500 text-white'} `} onClick={(e) =>haldleOnclick(e)}><h3>{TextBtnSignin}</h3></button>
          <button className={`py-4 px-20 ${ChangeForms !== TextBtnSignup  && 'bg-blue-500 text-white'}`} onClick={(e) =>haldleOnclick(e)}><h2>{TextBtnSignup}</h2></button>
        </div>
        <div>
          {ChangeForms === TextBtnSignup  ? (
          <form onSubmit={handleSubmit(createUser)} className='px-7 py-9 '>
            
            <Inputs type='text' name='user' labelName='Username' id='userName' icon={<FaUserAlt size={14} />} register={{...register('userName')}} />
            <Inputs type='email' name='email' labelName='Email' id='Email' icon={<FaEnvelope size={14} />} register={{...register('userEmail')}}/>

            <Inputs type='password' name='password' labelName='Password' id='password' icon={<FaLock size={14} />}   register={{...register('userPassword')}}/>
            <Inputs type='password' name='password' labelName='Confirma Password' id='Confpassword' icon={<FaLock size={14}  register={{...register('userconfPassword')}} />} />

            <div className='flex justify-end'>  
            <Button text={TextBtnSignup }/>
            </div>

            <div className='flex flex-col gap-2 items-center justify-center'>
              <h3 className='text-blue-600'>Already have an account ?</h3>
              <a onClick={(e) => haldleOnclick(e)} className='cursor-pointer transition-all duration-700 hover:underline hover:text-red-800'>{TextBtnSignin}</a>
            </div>
            
          </form>):(
            <form action="" className='px-7 py-9 '>
            
            <Inputs type='email' name='email' labelName='Email' id='Email' icon={<FaEnvelope size={14} />} />

            <Inputs type='password' name='password' labelName='Password' id='password' icon={<FaLock size={14} />} />
            
              
            <div className='flex justify-end'>
            <Button text={TextBtnSignin}/>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center'>
              <h3 className='text-blue-600'>Don't have an account ?</h3>
              <a onClick={(e) => haldleOnclick(e)} className='cursor-pointer transition-all duration-700 hover:underline hover:text-red-800'>{TextBtnSignup }</a>
            </div>
          </form>
          )}
        </div>
      </div>

    </React.Fragment>
  )
}

export { Form }