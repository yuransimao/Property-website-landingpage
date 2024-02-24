import React from 'react'
import P from "prop-types"




function Button({text, onclick, type}) {

  
  


return (
  <React.Fragment>
    <button className='bg-blue-700 py-2 px-1 lg:px-4 md:px-4 sm:px-2 rounded text-white font-medium transition-all hover:opacity-[0.8]' onClick={onclick} type={type}>
      <h2>{text}</h2>
    </button>
  </React.Fragment>
)
}

Button.propTypes ={
  text: P.string.isRequired,
  onclick: P.func,
  type: P.string
}

export {Button}