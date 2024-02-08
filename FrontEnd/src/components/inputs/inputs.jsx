import React from 'react'
import P from "prop-types"
function Inputs({ type, name, id, labelName, icon }) {
  return (

    <React.Fragment>
      <div className="flex flex-col relative p-7 group">
        <label htmlFor={id} className={`absolute top-9 transition-all duration-300 group-focus-within:top-3 group-focus-within:text-blue-800`}>
          <span></span>{labelName}
        </label>

        <input type={type} name={name} id={id} className="border-blue-400 border-solid border-b-2 pt-3 bg-transparent focus:border-blue-700 capitalize" autoComplete='on'/>
      </div>
    </React.Fragment>
  )
}

Inputs.propTypes = {
  type: P.string.isRequired,
  name: P.string.isRequired,
  id: P.string.isRequired,
  labelName: P.string.isRequired
}
export { Inputs }
