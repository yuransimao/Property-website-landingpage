import React from 'react'
import P from "prop-types"
function Inputs({ type,  id, labelName, icon, register }) {
  return (

    <React.Fragment>
      <div className="flex flex-col relative group py-2 mb-9">
        <label htmlFor={id} className={`absolute top-0 transition-all duration-300 group-focus-within:top-[-1.3rem] group-valid-within:top-[-1.5rem]   flex gap-2 items-center justify-center`}>

          <span className={`bg-zinc-900/10 p-2 rounded-full group-focus-within:bg-blue-900 font-bold group-focus-within:text-white`}>{icon}
          </span>
          <h3 className='group-focus-within:text-blue-800'>{labelName}</h3>
        </label>

        <input type={type}  id={id} className="border-blue-400 border-solid border-b-2 pt-2 bg-transparent focus:border-blue-700" autoComplete='on' {...register}/>
      </div>
    </React.Fragment>
  )
}

Inputs.propTypes = {
  type: P.string.isRequired,
  id: P.string.isRequired,
  labelName: P.string.isRequired
}
export { Inputs }
