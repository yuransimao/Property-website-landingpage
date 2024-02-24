import React from 'react'
import { selectUserEmail,selectUserName,selectIsPhotouser} from '../../Redux/slice/authslice'
import { useSelector } from 'react-redux';
import { Button } from '../';

import { Link } from 'react-router-dom';
import { CiHeart, CiCreditCard1,CiPower } from "react-icons/ci";
import { SlUserFollow } from "react-icons/sl";
import { FaRegFolderClosed,FaQuinscape } from "react-icons/fa6";
import { IoBagAddOutline } from "react-icons/io5";
import { UseSignOut} from '../../hooks';
function MenuUser({setShowMenuUser}){
    const {SignOut} =UseSignOut()
    const userEmail = useSelector(selectUserEmail);
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectIsPhotouser)
    const HandleClick = () => {
        setShowMenuUser(state => !state)
        SignOut()
    }
    return(
        <React.Fragment>
            <div className='relative'>
            <div className='absolute z-20 right-2 top-16 h-[90vh] rounded-md w-1/4 bg-white p-6 shadow-lg shadow-cyan-500/20'>
               <div className=' flex gap-9  border-solid border-b-[1px] border-zinc-400 py-8'>
                <div className='img w-16 h-16 object-cover overflow-hidden rounded-full clip-circle'>
                    <img src={userPhoto} alt="osk" className='w-full max-h-full object-cover' />
                </div>
                <div >
                    <h3 className='text-sm'>{userName}</h3>
                    <h4 className='text-sm text-zinc-400 leading-8'>{userEmail}</h4>
                   <Link to='/profile/me' onClick={() => setShowMenuUser(state => !state) }>
                   <Button text='Edit profile'/>
                   </Link>
                </div>

               </div>

               <div className='py-8 flex flex-col gap-6 border-solid border-b-[1px] border-zinc-400 '>
               <Link className='flex gap-2 items-center justify-left transition-all duration-500 hover:text-blue-700' to='/user/property'>
                    <span><IoBagAddOutline size={16} /></span> 
                    <h2 className='text-sm uppercase'>Add property</h2>
                    </Link>
                <Link className='flex gap-2 items-center justify-left transition-all duration-500 hover:text-blue-700'>
                    <span><CiHeart size={16} /></span> 
                    <h2 className='text-sm uppercase'>Favorite</h2>
                    </Link>
                <Link className='flex gap-2 items-center justify-left transition-all duration-500 hover:text-blue-700'>
                    <span><SlUserFollow  size={16} /></span> 
                    <h2 className='text-sm uppercase'>following</h2>
                    </Link>
                    <Link className='flex gap-2 items-center justify-left transition-all duration-500 hover:text-blue-700 '>
                    <span><FaRegFolderClosed  size={16} /></span> 
                    <h2 className='text-sm uppercase'>My colloctions</h2>
                    </Link>
                </div>

                <div className='py-8 flex flex-col gap-6 border-solid border-b-[1px] border-zinc-400 '>
                <Link className='flex gap-2 items-center justify-left transition-all duration-500 hover:text-blue-700'>
                    <span>< CiCreditCard1  size={16} /></span> 
                    <h2 className='text-sm uppercase'>My subscription</h2>
                    </Link>
                <Link className='flex gap-2 items-center justify-left transition-all duration-500 hover:text-blue-700'>
                    <span><FaQuinscape size={16} /></span> 
                    <h2 className='text-sm uppercase'>Faq</h2>
                    </Link>
                    
                </div>

                <div className='py-8  '>
                <button className='flex gap-2 items-center justify-left transition-all duration-500 hover:text-blue-700' onClick={HandleClick}>
                    <span>< CiPower  size={16} /></span> 
                    <h2 className='text-sm uppercase'>Log Out</h2>
                    </button>
                
                    
                </div>

                
            </div>
            </div>
        </React.Fragment>
    )
}


export { MenuUser } 