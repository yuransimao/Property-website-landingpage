import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
function Section5() {
  return (
    <React.Fragment>
      <div className=' flex bg-gradient-to-t from-green-800/10 to-white flex-col items-center justify-center px-4 lg:px-8  py-20 gap-8'>
        <div>
          <h1 className='text-center capitalize font-bold lg:text-4xl md:text-3xl text-2xl text-blue-950 py-2'>Our Plan For Your Stratagies</h1>
          <p className='text-center font-normal lg:text-base md:text-base text-sm '>
            They will make list of potential employees to be <br /> interviewed based.
          </p>
        </div>

        <div className='bg-zinc-900/10 p-2 rounded-md flex gap-20'>
          <button className='bg-blue-900 text-white font-bold py-2 px-6 rounded-md'><h2>Anually</h2>
          </button>
          <button className=' text-black font-bold py-2 px-6 rounded-md'><h2>Monthly</h2>
          </button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>

          <div className='w-full lg:w-[21rem] md:w-[21rem] bg-white rounded-lg  shadow-lg'>

            <div className='flex flex-col items-center gap-6 p-6'>
              <h3 className='text-xl font-semibold text-blue-950'>Lite Plan</h3>
              <p className='text-center font-light lg:text-base md:text-base text-sm '>
                They will make list of potential employees to be interviewed based.
              </p>
              <h2 className='text-2xl font-semibold text-blue-950'>$120/<span className='text-sm font-normal'>mon</span></h2>
              <button className='w-full bg-zinc-800/10 transition hover:bg-slate-900/30  p-1 rounded-sm text-blue-950 font-semibold'><h4>Selct Plan</h4></button>
            </div>

            <div className='p-6'>
              <ul>
                <li className=' flex gap-4 items-center'>
                <span className='text-blue-950'><PiStarFourFill /></span> 
                <h4 className='text-blue-800 text-base'>50 Listings</h4>
                </li>
                
                
              </ul>
            </div>

          </div>

        </div>

      </div>

    </React.Fragment>
  )
}


export { Section5 }