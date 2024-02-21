import React from 'react'
import { Inputs , Button } from '../'
import { FaUserAlt,FaEnvelope , FaLock} from "react-icons/fa";
import {motion} from "framer-motion"
import { headTextAnimation } from "../../config/motion"
import { UseSchema, UseSchemaLoggin, UseMordalBox} from '../../hooks';



function Form() {
  const {register, handleSubmit, errors, createUser, TextBtnSignin, TextBtnSignup,ChangeForms, handleChangeForms} =UseSchema()
  const {setShowForm} =UseMordalBox()
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    errors: errorsLogin,
    Login
  } = UseSchemaLoggin();
  
 

  return (
    <React.Fragment>
      <div className='bg-white rounded-sm overflow-hidden w-11/12 lg:w-2/5 md:w-3/6 sm:w-[70%]'>
        <div className='flex items-center justify-between gap-1'>
          <button  className={`py-4 px-7 lg:px-20 md:16 sm:px-8 ${ChangeForms !== TextBtnSignin && 'bg-blue-500 text-white'} `} onClick={(e) =>handleChangeForms(e)}><h3>{TextBtnSignin}</h3></button>
          <button className={`py-4 px-7 lg:px-20 md:16 sm:px-8 ${ChangeForms !== TextBtnSignup  && 'bg-blue-500 text-white'}`} onClick={(e) =>handleChangeForms(e)}><h2>{TextBtnSignup}</h2></button>
        </div>
        <div>
          {ChangeForms === TextBtnSignup  ? (

            <motion.div {...headTextAnimation}>
          <form onSubmit={handleSubmit(createUser)} className='px-3 lg:px-7 md:px-5 sm:px-3 py-9 '>
            
            <div className='py-2 mb-2'>
              <Inputs  type='text'  labelName='Username' id='userName' icon={<FaUserAlt size={14} />} register={{...register('userName')}} RedOnly={false} />
             {errors.userName &&  <span className='text-sm text-red-600 transition-all duration-500 px-1 pt-3'>{errors.userName.message}</span>}
            </div>

            <div className='py-2 mb-2'>
              <Inputs  type='email'  labelName='Email' id='Email' icon={<FaEnvelope size={14} />} register={{...register('userEmail')}} RedOnly={false} />
              {errors.userEmail &&  <span className='text-sm text-red-600 transition-all duration-500 px-1 pt-3'>{errors.userEmail.message}</span>}
            </div>

            <div className='py-2 mb-2'>
              <Inputs  type='password'  labelName='Password' id='password' icon={<FaLock size={14} />}   register={{...register('userPassword')}} RedOnly={false}/>

              {errors.userPassword &&  <span className='text-sm text-red-600 transition-all duration-500 px-1 pt-3'>{errors.userPassword.message}</span>}
            </div>

            <div className='py-2 mb-2'>
              <Inputs  type='password'  labelName='Confirma Password' id='userconfPassword' icon={<FaLock size={14}/>} register={{...register('userconfPassword')}} RedOnly={false} />

              {errors.userconfPassword &&  <span className='text-sm text-red-600 transition-all duration-500 px-1 pt-3'>{
              errors.userconfPassword.message}</span>}
            </div>

            <div className='flex justify-end py-2 mb-5'>  
            <Button text={TextBtnSignup } type='submit' onclick={ () => setShowForm(false)}/>
            </div>

            <div className='flex flex-col gap-2 items-center justify-center'>
              <h3 className='text-blue-600'>Already have an account ?</h3>
              <a onClick={(e) => handleChangeForms(e)} className='cursor-pointer transition-all duration-700 hover:underline hover:text-red-800'>{TextBtnSignin}</a>
            </div>
            
          </form>
          </motion.div>
          ):(

            
            <form onSubmit={handleSubmitLogin(Login)} className='px-3 lg:px-7 md:px-5 sm:px-3 py-9'>
            
            <div className='py-2 mb-2'>
              <Inputs  type='email'  labelName='Email' id='Email' icon={<FaEnvelope size={14} />} 
              register={{...registerLogin('email')}} RedOnly={false} />
              {errorsLogin?.email &&  <span className='text-sm text-red-600 transition-all duration-500 px-1 pt-3'>{errorsLogin?.email.message}</span>}
            </div>

            <div className='py-2 mb-2'>
              <Inputs  type='password'  labelName='Password' id='password' icon={<FaLock size={14} />} register={{...registerLogin('password')}} RedOnly={false} />
              {errorsLogin?.password &&  <span className='text-sm text-red-600 transition-all duration-500 px-1 pt-3'>{errorsLogin?.password.message}</span>}
            </div>
            
              
            <div className='flex justify-between py-2 mb-4'>
            <a className='text-sm cursor-pointer transition-all duration-500 hover:underline' > Forgot password ?</a>
            <Button text={TextBtnSignin} type='submit'  onclick={ () => setShowForm(false)}/>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center'>
              <h3 className='text-blue-600'>Don't have an account ?</h3>
              <a onClick={(e) => handleChangeForms(e)} className='cursor-pointer transition-all duration-700 hover:underline hover:text-red-800'>{TextBtnSignup }</a>
            </div>
          </form>
          )}
        </div>
      </div>

    </React.Fragment>
  )
}

export { Form }