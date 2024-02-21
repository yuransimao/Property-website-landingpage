import React, {useRef, useState} from 'react'
import { CiCamera } from "react-icons/ci";
import {useSelector} from 'react-redux'
import { selectUserEmail,selectUserName } from '../../Redux/slice/authslice'
import { auth } from '../../service/service';
import { deleteUser ,EmailAuthProvider, reauthenticateWithCredential,updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Inputs,Button,Mordalbox } from '../../components';
import { FaUserAlt,FaEnvelope, FaLock} from "react-icons/fa";
import {useForm} from 'react-hook-form'
function Profile() {
  const[VisivelMordalBox, setVisivelMordalBox] = useState(false)
  const  InputFile = useRef()
  const [GetImg , setGetImg] =useState('')
  const {register, reset, handleSubmit} = useForm()
  const userEmail = useSelector(selectUserEmail);
  const userName = useSelector(selectUserName);
   
    const Navegation = useNavigate()
  const HandleFile = () => {
    InputFile.current.click()
  }


  const handleSubmitForm = (data) =>{
    const user = auth.currentUser
   if(user){
    updateProfile(user, {
      displayName: data.userNameChange
    }).then(() => alert('Sucess'))

   }

  }

  const DeleteUser = (data) =>{
    
    const user = auth.currentUser;
    const password = data.userPasswordconf
    const credential = EmailAuthProvider.credential(userEmail,password);
  
    reauthenticateWithCredential(user, credential).then(() => {
      deleteUser(user).then(() => {
      
        Navegation('/');
        setVisivelMordalBox(false)
      }).catch((error) => {
        
        console.error("Error deleting user:", error);
      });
    }).catch((error) => {
      
      console.error("Error re-authenticating:", error);
    });
  }
 
  return (
    <React.Fragment>
      <div className=' h-dvh bg-zinc-100 flex gap-10 px-28 py-9 relative'>
        <div className='w-[23%] h-52 bg-white boorder-solid border-[1px] border-zinc-400/30 rounded-md flex flex-col items-center justify-center'>
          <div className='bg-blue-500 h-44 w-44 rounded-full relative overflow-hidden group' >
          {GetImg && <img src={URL.createObjectURL(GetImg)} alt={GetImg.name} className='object-cover'/>}
           <button className='bg-zinc-500/30 text-white transition-all duration-300 opacity-0 group-hover:opacity-100  w-full h-9 bottom-0 absolute flex items-center justify-center ' onClick={HandleFile }><CiCamera  size={28}/></button>
           <input ref={InputFile} type="file" accept='image/*' className='hidden' onChange={e => setGetImg(e.target.files[0])}/>
          </div>
          <h3 className='text-sm font-bold'>@{userName}</h3>
        </div>

        <div className='w-[74%] bg-white p-10 boorder-solid border-[1px] border-zinc-400/40 rounded-md'>
          <h2 className='text-3xl font-bold'>Account Data</h2>
          <form onSubmit={handleSubmit(handleSubmitForm)} className='py-9'>
            <div className='py-4'>
            <Inputs  type='text'  labelName='Username' id='userName' icon={<FaUserAlt size={14} />} RedOnly={false} register={{...register('userNameChange')} } defaultValue={userName}/>
            </div>
             <div>
             <Inputs  type='email'  labelName='Email' id='Email' icon={<FaEnvelope size={14} />} RedOnly={true} defaultValue={userEmail}/>
            </div>
            <div className='py-8 flex justify-between'>

              <div>
               
                  <button className='bg-zinc-300/20 p-2 text-red-600 text-sm font-semibold rounded-md' onClick={() => setVisivelMordalBox(true)} type='button'> Chose my account
                  </button>
              
              </div>
              <div className='flex justify-center gap-5'>
                <button className='border-solid border-2 border-zinc-300 py-3 px-4 rounded  transition-all hover:bg-blue-700 hover:opacity-[0.8] hover:text-white font-semibold' type='button' onClick={() => reset()}> Cancel</button>
                <Button text={'Save'} type='submit'/>
              </div>
            </div>
          </form>
        </div>
      {VisivelMordalBox && <Mordalbox onclick={setVisivelMordalBox} >
      <div className='bg-white rounded-sm overflow-hidden w-11/12 lg:w-2/5 md:w-3/6 sm:w-[70%]'>
        <form onSubmit={handleSubmit( DeleteUser)} className='px-3 lg:px-7 md:px-5 sm:px-3 py-9'>
        <Inputs  type='email'  labelName='Email' id='Email' icon={<FaEnvelope size={14} />} RedOnly={true} defaultValue={userEmail}/>
        <div className='py-2 mb-2'>
              <Inputs  type='password'  labelName='Password' id='password' icon={<FaLock size={14} />}   register={{...register('userPasswordconf')}} RedOnly={false}/>
            </div>
            <div className='flex justify-end py-2 mb-5'>  
            <Button text='Chocse Account' type='submit' />
            </div>
        </form>
        </div>
      </Mordalbox>}
      </div>

    </React.Fragment>
  )
}

export {Profile}