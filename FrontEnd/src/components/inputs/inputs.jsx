import React from 'react'
import P from "prop-types"
function Inputs({ type, name, id, labelName, icon }) {
  return (

    <React.Fragment>
      <div className="flex flex-col relative group py-2 mb-9">
        <label htmlFor={id} className={`absolute top-0 transition-all duration-300 group-focus-within:top-[-1rem]   flex gap-2 items-center justify-center`}>

          <span className={`bg-zinc-900/10 p-2 rounded-full group-focus-within:bg-blue-900 font-bold group-focus-within:text-white`}>{icon}
          </span>
          <h3 className='group-focus-within:text-blue-800'>{labelName}</h3>
        </label>

        <input type={type} name={name} id={id} className="border-blue-400 border-solid border-b-2 pt-2 pl-2 bg-transparent focus:border-blue-700 capitalize " autoComplete='on'/>
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
