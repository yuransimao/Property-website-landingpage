import React from 'react'
import { MdAddHomeWork , MdOutlineHomeWork} from "react-icons/md";
import { HiHomeModern } from "react-icons/hi2";
import { LiaUsersSolid } from "react-icons/lia";
const Section2 = () => {
  return (
    <React.Fragment>
      <div className='p-10 bg-green-400/5'>
        <h1 className='text-center font-bold lg:text-4xl md:text-3xl text-2xl text-blue-950 py-2'>Achivement</h1>
        <p className='text-center font-normal lg:text-base md:text-base text-sm '>Mentioned beggan rural, oral vernacular that developed frombrial and  successful.</p>

        <div className='columns-1 lg:columns-4 md:columns-4 sm:columns-2  py-9'>
          <div className='flex flex-col justify-center items-center gap-1 p-8 lg:p-0 md:p-0 sm:p-2 '>
            <span className='text-green-500'><MdAddHomeWork size={30}/></span>
           <h3 className='font-bold text-2xl text-blue-950'>2500+</h3>
           <h4 className='font-medium'>Completed Property</h4>
          </div>
          <div className='flex flex-col justify-center items-center gap-1 p-8 lg:p-0 md:p-0 sm:p-2 '>
            <span className='text-green-500'><MdOutlineHomeWork size={30}/></span>
           <h3 className='font-bold text-2xl text-blue-950'>3500+</h3>
           <h4 className='font-medium'>Property Sales</h4>
          </div>
          <div className='flex flex-col justify-center items-center gap-1 p-8 lg:p-0 md:p-0 sm:p-2 '>
            <span className='text-green-500'><HiHomeModern size={30}/></span>
           <h3 className='font-bold text-2xl text-blue-950'>8500+</h3>
           <h4 className='font-medium'>Apartament Rent</h4>
          </div>
          <div className='flex flex-col justify-center items-center gap-1 p-8 lg:p-0 md:p-0 sm:p-2 '>
            <span className='text-green-500'><LiaUsersSolid  size={30}/></span>
           <h3 className='font-bold text-2xl text-blue-950'>4500+</h3>
           <h4 className='font-medium'>Happy Clients</h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export {Section2}