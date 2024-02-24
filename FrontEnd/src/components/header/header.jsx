import React from 'react'
import P from "prop-types"
import { Header2 } from './header2';
import { IoIosMenu,IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { Button } from '../button/button';
import { UseheaderBackgroundActive,} from '../../hooks';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import { auth } from '../../service/service';
import { onAuthStateChanged } from 'firebase/auth';
import { User_Active, User_Desatived, selectIsPhotouser} from '../../Redux/slice/authslice';
import { ShowLogin, ShowLogout } from '../isLoggedIn/isloggedin';
import { FaRegUserCircle } from "react-icons/fa";
function Header({ setVisivelMenu,HandleSign, setShowMenuUser }) {
    const dispach = useDispatch()
    const {BackgroundActive} =UseheaderBackgroundActive()
    const userPhoto = useSelector(selectIsPhotouser)
    const location = useLocation()

     const [showDefaultHeader, setShowDefaultHeader] = useState(true)
    const [locationAct, setLocationActual] =useState('')   
    
    useEffect(() => {
        setLocationActual(location.pathname);
      }, [location.pathname]);
    
    
    useEffect(() => {
      

      if(locationAct === '/profile/me' || locationAct ==='/user/property'){
       setShowDefaultHeader(true)
      }else{
       setShowDefaultHeader(false)
      }


    onAuthStateChanged(auth, (user) => {
        if(user){
        
            dispach(User_Active({
                userEmail: user.email,
                userId: user.uid,
                userPhoto:user.photoURL,
                userName:user.displayName
                
            }))
        }else {
            dispach(User_Desatived())
        }
    })
},[dispach, locationAct])




        
    
  return (
    <React.Fragment>
       {showDefaultHeader  ? (
        <React.Fragment>
        <div className='fixed top-0 w-full right-0 left-0 z-20'>
        <div className='bg-white p-6 flex justify-between items-center border-solid border-b-[1px] border-zinc-400'>
             <NavLink to='/' onClick={ () => setShowMenuUser(false)}><h2 className={`font-bold text-black`}>Dremy</h2></NavLink>
             <div>
             <button className='flex gap- items-center justify-center ' onClick={ () => setShowMenuUser(state => !state)}>
            { userPhoto === null ?
            <div className='p-1 rounded-full bg-white text-blue-600'>
                <FaRegUserCircle size={18}/>
            </div> :
            <div className='w-9 h-9 border-solid border-2 border-blue-700 rounded-full'><img src={userPhoto} className='w-full max-h-full object-cover rounded-full'/></div> 
        } <span className='text-blue-500'> <IoMdArrowDropdown size={20} /></span>
        
        </button>
             </div>
        </div>

      <Header2/>
      </div>
    </React.Fragment>
        ):(
            <div className={`w-full fixed left-0 right-0 z-50  lg:px-0  px-7 py-4 ${BackgroundActive? 'bg-white shadow-lg' : 'bg-transparent'}`}>

            <div className='flex justify-between items-center py-2 px-6'>
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
                    <div className='w-9 h-9 border-solid border-2 border-blue-700 rounded-full'><img src={userPhoto} className='w-full max-h-full object-cover rounded-full'/></div> 
                } <span className='text-blue-500'> <IoMdArrowDropdown size={20} /></span>
                
                </button>
                </ShowLogin>
            
                <div className='flex lg:hidden'>
                <button onClick={() => setVisivelMenu(true)} className={BackgroundActive ? 'text-black' :'text-white'}><IoIosMenu size={20}/></button>
            </div>
            
            
            </div>
            
            
            </div>
)}

    </React.Fragment>
  )
}

Header.propTypes ={
    setVisivelMenu: P.func,
    HandleSign : P.func
}

export {Header}