import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { ResponsiveMenu } from './responsive';
import { Button } from '../button/button';

function Header() {

    const [VisivelMenu, setVisivelMenu] = useState(false);
    const [BackgroundActive, setBackgroundActive] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", function(){
            this.innerWidth > 1022 && setVisivelMenu(false);
            
        })

        window.addEventListener("scroll", function(){
            this.scrollY > 652 ? setBackgroundActive(true) : setBackgroundActive(false)
        })
    },[])



  return (
    <React.Fragment>
        <div className={`w-full fixed z-50  lg:px-0  px-7 py-4 ${BackgroundActive? 'bg-white shadow-lg' : 'bg-transparent'}`}>

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

            <div className='hidden lg:flex gap-x-10'> 
                <button className='text-white'><h2>Add Property</h2></button>
                <Button text = "Sign in"/>
            </div>
        
            <div className='flex lg:hidden'>
            <button onClick={() => setVisivelMenu(true)} className={BackgroundActive ? 'text-black' :'text-white'}><IoIosMenu size={20}/></button>
        </div>

        {VisivelMenu && <ResponsiveMenu setVisivelMenu ={setVisivelMenu}/>}
        </div>

        
        </div>
    </React.Fragment>
  )
}

export {Header}