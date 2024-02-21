import React from "react"
import { NavLink } from 'react-router-dom';
import { CiHeart, CiCreditCard1,  CiUser } from "react-icons/ci";
import { SlUserFollow } from "react-icons/sl";
import { FaRegFolderClosed} from "react-icons/fa6";
function Header2() {

    const isActive = ({isActive}) => ( isActive ? 'flex gap-2 items-center justify-left transition-all duration-500 text-blue-700 border-solid border-b-[1px] border-zinc-400 py-4': 'flex gap-2 items-center justify-left transition-all duration-500 hover:text-blue-700 py-4')
    return (
        <React.Fragment>
            <div className="flex justify-center items-center gap-10  bg-zinc-500/10 border-solid border-b-[1px] border-zinc-400/10">
            <NavLink className={isActive} to='/profile/me'>
                    <span>< CiUser size={14} /></span>
                    <h2 className='text-xs uppercase'>Profile</h2>
                </NavLink>
                <NavLink className='flex gap-2 items-center justify-left transition-all duration-500 hover:text-blue-700 py-4'>
                    <span><CiHeart size={14} /></span>
                    <h2 className='text-sm uppercase'>Favorite</h2>
                </NavLink>
                <NavLink className='flex gap-2 items-center justify-left transition-all duration-500 hover:text-blue-700 py-4'>
                    <span><SlUserFollow size={14} /></span>
                    <h2 className='text-sm uppercase'>following</h2>
                </NavLink>
                <NavLink className='flex gap-2 items-center justify-left transition-all duration-500 hover:text-blue-700 '>
                    <span><FaRegFolderClosed size={14} /></span>
                    <h2 className='text-xs uppercase'>My colloctions</h2>
                </NavLink>

                <NavLink className='flex gap-2 items-center justify-left transition-all duration-500 hover:text-blue-700 py-4'>
                    <span>< CiCreditCard1  size={14} /></span> 
                    <h2 className='text-xs uppercase'>My subscription</h2>
                </NavLink>
            </div>
        </React.Fragment>
    )
}


export { Header2 }