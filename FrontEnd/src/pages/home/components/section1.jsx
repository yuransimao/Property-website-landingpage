import React from 'react'
import { CiLocationOn } from "react-icons/ci";
function Section1 ()  {
   
  return (
    <React.Fragment>
        <div className={`w-full h-[100vh] flex  flex-col items-center pt-9 justify-center   section-image gap-9`}>

            
            <div className='mb-2' >
                <div className='text-white'><h1 className={`font-medium text-center lg:text-5xl md:text-4xl text-2xl  py-6`}> We'll Build <span className='font-bold'>House Of <br/>Your Dream</span></h1>
                <p className=' font-normal text-center lg:text-base md:text-sm text-xs'>The montioned began rural, oral vernacual that developed from trial <br/> and error to successful.</p>
                </div>
            </div>

            <div>
                <div className='flex flex-col lg:flex-row md:flex-row gap-5 items-center bg-white px-2  py-4 lg:px-4 md:px-4 rounded'>
                    
                   <div className='flex gap-5 border-solid border-neutral-900/10  border-r-2 px-6'>
                   <div className='flex gap-4'>
                    
                    <input type="radio" name="search" id="buy" checked className="checked:bg-green-500" />
                    <label htmlFor="buy">Buy</label>
                    <input type="radio" name="search" id="rent" className="checked:bg-green-500" />
                    <label htmlFor="rent">Rent</label>
                    <input type="radio" name="search" id="sale" className="checked:bg-green-500"/>
                    <label htmlFor="sale">Sale</label>
                    
                   </div>
                    
                   </div>

                   <div>
                    <form action="" className='flex items-center lg:gap-7 md:gap-5 gap-2'>
                        <span className='text-zinc-400'><CiLocationOn size={20}/></span>
                        <input type="search" name="" id="" placeholder='Search for a propety' className='transition-all py-1 pr-0 lg:pr-4 md:pr-4 focus:border-b-2 focus:border-blue-600 '/>
                        <button className='bg-blue-500 py-2 px-1 lg:px-4 md:px-4 sm:px-2 rounded text-white font-medium transition-all hover:opacity-[0.8]'>Search</button>
            
                    </form>
                   </div>
                </div>
            </div>

            
        </div>
    </React.Fragment>
  )
}


export {Section1}