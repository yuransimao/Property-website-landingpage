import React from 'react'
import PropTypes from 'prop-types'

import { RxCross2 } from "react-icons/rx";
function Mordalbox({children, onclick}) {
  return (
    <React.Fragment>
        <div className='fixed flex items-center justify-center h-dvh w-dvw z-[60] bg-zinc-700/100' >
        <div className='absolute left-4 top-8 p-3 z-[60]'> 
             <button  onClick={ () => onclick(false)} className={`pointer p-2 bg-zinc-800/60 rounded-full transition-all hover:bg-zinc-800/50 text-white `}>
              <RxCross2 />
              </button>
             </div>
            {children}
           
        </div>
    </React.Fragment>
  )
}

Mordalbox.propTypes = {}

export {Mordalbox}
