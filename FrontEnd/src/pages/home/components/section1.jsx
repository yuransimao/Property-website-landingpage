import React from 'react'
import { CiLocationOn } from "react-icons/ci";
function Section1 ()  {
   
  return (
    <React.Fragment>
        <div className={`w-full h-[100vh] flex  flex-col items-center pt-9 justify-center   section-image gap-9`}>

            
            <div className='mb-2' >
                <div className='text-white'><h1 className='font-medium text-center text-5xl  py-6'> We'll Build <span className='font-bold'>House Of <br/>Your Dream</span></h1>
                <p className=' font-normal text-center text-base'>The montioned began rural, oral vernacual that developed from trial <br/> and error to successful.</p>
                </div>
            </div>

            <div>
                <div className='flex gap-5 items-center bg-white p-4 rounded'>
                    
                   <div className='flex gap-5 border-solid border-neutral-900/10  border-r-2 px-6'>
                   <div className='flex gap-4'>
                    
                    <input type="radio" name="search" id="buy" className="checked:bg-green-500" />
                    <label htmlFor="buy">Buy</label>
                    <input type="radio" name="search" id="rent" className="checked:bg-green-500" />
                    <label htmlFor="rent">Rent</label>
                    <input type="radio" name="search" id="sale" className="checked:bg-green-500"/>
                    <label htmlFor="sale">Sale</label>
                    
                   </div>
                    
                   </div>

                   <div>
                    <form action="" className='flex items-center gap-7'>
                        <span className='text-zinc-400'><CiLocationOn size={20}/></span>
                        <input type="search" name="" id="" placeholder='Search for a propety' className='transition-all py-1 pr-6 focus:border-b-2 focus:border-blue-600 '/>
                        <button className='bg-blue-500 py-2 px-5 rounded text-white font-medium transition-all hover:opacity-[0.8]'>Search</button>
            
                    </form>
                   </div>
                </div>
            </div>

            
        </div>
    </React.Fragment>
  )
}


export {Section1}