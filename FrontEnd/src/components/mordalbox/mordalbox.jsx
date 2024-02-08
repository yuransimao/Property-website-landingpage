import React from 'react'
import PropTypes from 'prop-types'


function Mordalbox({children}) {
  return (
    <React.Fragment>
        <div className='fixed flex items-center justify-center h-dvh w-dvw z-[60] bg-zinc-700/90'>
            {children}
           
        </div>
    </React.Fragment>
  )
}

Mordalbox.propTypes = {}

export {Mordalbox}
