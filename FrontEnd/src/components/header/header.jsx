import React from 'react'
import P from "prop-types"
import { IoIosMenu,IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { Button } from '../button/button';
import { UseheaderBackgroundActive,} from '../../hooks';
import { useEffect } from 'react';
import { auth } from '../../service/service';
import { onAuthStateChanged } from 'firebase/auth';
import { User_Active, User_Desatived, selectIsPhotouser} from '../../Redux/slice/authslice';
import { ShowLogin, ShowLogout } from '../isLoggedIn/isloggedin';
import { FaRegUserCircle } from "react-icons/fa";
function Header({ setVisivelMenu,HandleSign, setShowMenuUser }) {
    const dispach = useDispatch()
    const {BackgroundActive} =UseheaderBackgroundActive()
    const userPhoto = useSelector(selectIsPhotouser)
    

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if(user){
            console.log(user.displayName)
            dispach(User_Active({
                userEmail: user.email,
                userId: user.uid,
                userPhpto:user.photoURL,
                userName:user.displayName
                
            }))
        }else {
            dispach(User_Desatived())
        }
    })
  },[dispach])
        
    
  return (
    <React.Fragment>
        <div className={`w-full fixed left-0 right-0 z-50  lg:px-0  px-7 py-4 ${BackgroundActive? 'bg-white shadow-lg' : 'bg-transparent'}`}>

        <div className='flex lg:justify-around  justify-between items-center'>
            <div><h2 className={`font-bold ${BackgroundActive ? 'text-black' :'text-white'}`}>Dremy</h2></div>


            <div className='hidden lg:flex'>
            <nav>
            <ul className={`flex justify-center gap-x-10 ${BackgroundActive ? 'text-black' :'text-white'} font-bold`}>
                <li><NavLink><h4>Home</h4></NavLink></li>
                <li><NavLink><h4>Listings</h4></NavLink></li>
                <li><NavLink><h4>Features</h4></NavLink></li>
                <li><NavLink><h4>Pages</h4></NavLink></li>
            </ul>
                </nav>
            </div>
           <ShowLogout>
            <div className='hidden lg:flex gap-x-10'> 
                <button className='text-white' onClick={ HandleSign}><h2>Add Property</h2></button>
               
                 <Button text = "Sign in" onclick={HandleSign}/>
            </div>
            </ShowLogout>

            <ShowLogin>
            

            <button className='flex gap- items-center justify-center ' onClick={ () => setShowMenuUser(state => !state)}> 
                { userPhoto === null ?
                <div className='p-1 rounded-full bg-white text-blue-600'>
                    <FaRegUserCircle size={18}/>
                </div> : 
                <img src={userPhoto}/> 
            } <span className='text-blue-500'> <IoMdArrowDropdown size={20} /></span>
            
            </button>
            </ShowLogin>
        
            <div className='flex lg:hidden'>
            <button onClick={() => setVisivelMenu(true)} className={BackgroundActive ? 'text-black' :'text-white'}><IoIosMenu size={20}/></button>
        </div>

        
        </div>

        
        </div>

    </React.Fragment>
  )
}

Header.propTypes ={
    setVisivelMenu: P.func,
    HandleSign : P.func
}

export {Header}