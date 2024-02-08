import React from 'react'
import PropTypes from 'prop-types'


function Mordalbox({children}) {
  return (
    <React.Fragment>
        <div className='fixed flex items-center justify-center h-dvh w-dvw z-[60] bg-zinc-700/60 overflow-hidden'>
            <div className='bg-white rounded-sm overflow-hidden'>
            <div className='flex items-center  gap-1'>
               <button className='py-4 px-20 bg-blue-500 text-white'><h3>Sign in</h3></button>
               <button className='py-4 px-20'><h2>Register</h2></button>
            </div>
           <div>
           {children}
           </div>
            </div>
           
        </div>
    </React.Fragment>
  )
}

Mordalbox.propTypes = {}

export {Mordalbox}
