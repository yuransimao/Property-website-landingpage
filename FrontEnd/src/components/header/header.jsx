import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { ResponsiveMenu } from './responsive';
function Header() {

    const [VisivelMenu, setVisivelMenu] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", function(){
            this.innerWidth > 1022 && setVisivelMenu(false);
            
        })
    },[])



  return (
    <React.Fragment>
        <div className='w-full fixed -z-50'>
        <div className='flex lg:justify-around  justify-between items-center lg:px-0  px-7 py-9'>
            <div><h2>Dremy</h2></div>


            <div className='hidden lg:flex'>
            <nav>
            <ul className='flex justify-center gap-x-10'>
                <li><NavLink><h4>Home</h4></NavLink></li>
                <li><NavLink><h4>Listings</h4></NavLink></li>
                <li><NavLink><h4>Features</h4></NavLink></li>
                <li><NavLink><h4>Pages</h4></NavLink></li>
            </ul>
                </nav>
            </div>

            <div className='hidden lg:flex gap-x-10'> 
                <button>Add Property</button>
                <button className='bg-blue-500 py-2 px-5 rounded text-white font-medium transition-all hover:opacity-[0.8]'>Sign in</button>
            </div>
        
            <div className='flex lg:hidden'>
            <button onClick={() => setVisivelMenu(true)}><IoIosMenu size={20}/></button>
        </div>

        {VisivelMenu && <ResponsiveMenu setVisivelMenu ={setVisivelMenu}/>}
        </div>

        
        </div>
    </React.Fragment>
  )
}

export {Header}