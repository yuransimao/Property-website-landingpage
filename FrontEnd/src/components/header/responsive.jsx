import React from 'react'
import { NavLink } from 'react-router-dom'
import P from "prop-types"
import { RxCross2 } from "react-icons/rx";
 const ResponsiveMenu = ({setVisivelMenu}) => {
  return (
    <React.Fragment>
         <div className='bg-zinc-900/20  fixed top-0 bottom-0 w-full z-[60] left-0 right-0'>
          <div className='relative'>
          <div className='absolute right-0 p-3 z-[60]'> 
             <button  onClick={() => setVisivelMenu(false)} className={`pointer p-2 bg-zinc-800/60 rounded-full transition-all hover:bg-zinc-800/50 text-white `}>
              <RxCross2 />
              </button>
             </div>

          <div className='absolute flex flex-col justify-between bg-white right-0 w-[90%] md:w-[50%] sm:w-[70%] h-[100vh] p-10 rounded-l'>
            
         
            <nav>
            <ul className='flex  flex-col gap-9 py-4' onClick={() =>setVisivelMenu(false)}>
                <li><NavLink><h4>Home</h4></NavLink></li>
                <li><NavLink><h4>Listings</h4></NavLink></li>
                <li><NavLink><h4>Features</h4></NavLink></li>
                <li><NavLink><h4>Pages</h4></NavLink></li>
            </ul>
                </nav>

                <div className='flex  flex-col gap-2'> 
                <button className='transition-all border-solid border-[1px] border-zinc-800 py-2 px-5 rounded hover:bg-blue-500/50 hover:text-white'>Add Property</button>
                <button className='bg-blue-500 py-2 px-5 rounded text-white font-medium transition-all hover:opacity-[0.8]'>Sign in</button>
            </div>
            </div>
             </div>
             </div>
    </React.Fragment>
  )
}

ResponsiveMenu.propTypes ={
  setVisivelMenu : P.func.isRequired

}
export {ResponsiveMenu}
