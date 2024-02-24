import React from 'react'
import P from "prop-types"
function Inputs({ type,  id, labelName, icon, register, RedOnly, defaultValue }) {
  return (

    <React.Fragment>
      <div className="flex  group bg-slate-800/10   rounded-sm overflow-hiddend">
        <label htmlFor={id} className={` text-white transition-all duration-300 w-[8%] flex justify-center items-center rounded-sm bg-blue-400 group-focus-within:bg-blue-500 `}>

          <span className={``}>{icon}
          </span>
          
        </label>

        <input type={type}  id={id} className=" p-3 placeholder:text-black placeholder:text-sm focus:border-blue-700 bg-transparent w-11/12" autoComplete='on' placeholder={labelName} {...register} readOnly={RedOnly} defaultValue={defaultValue}/>
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
