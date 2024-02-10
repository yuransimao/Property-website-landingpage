import React from 'react'
import P from 'prop-types'
import {slideAnimation } from "../../config/motion"
import { RxCross2 } from "react-icons/rx";
import {motion} from "framer-motion"

function Mordalbox({children, onclick}) {
  return (
    <React.Fragment>
        <div className='fixed  h-dvh w-dvw z-[60]' >
      <motion.div {...slideAnimation('down')} className=' bg-zinc-700/90 w-full h-full flex items-center justify-center'>
        <div className='absolute right-4 lg:right-20 md:right-10 sm:right-5 top-8 p-3 z-[60]'> 
             <button  onClick={ () => onclick(false)} className={`pointer p-2 bg-blue-400 rounded-full transition-all hover:bg-blue-600 text-white `}>
              <RxCross2 />
              </button>
             </div>
            {children}
           
        </motion.div>
        </div>
    </React.Fragment>
  )
}

Mordalbox.propTypes = {

  onclick : P.func,

}

export {Mordalbox}
