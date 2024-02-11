import React from 'react'
import {motion} from "framer-motion"
import {headTextAnimation } from "../../../config/motion"
import { Cardplan } from '../../../components';
import { UseFilterCardPlan } from '../../../hooks';
  
function Section5() {

    const {PlanFilter, HandleFilterPlan, Plan} = UseFilterCardPlan();
 
  

  return (
    <React.Fragment>
      <div className=' flex bg-gradient-to-b from-white via-white to-green-900/5 flex-col items-center justify-center px-4 lg:px-24 md:px-12 sm:px-6  py-4 lg:py-16 md:py-8 gap-8'>
        <div>
          <h1 className='text-center capitalize font-bold lg:text-4xl md:text-3xl text-2xl text-blue-950 py-2'>Our Plan For Your Stratagies</h1>
          <p className='text-center font-normal lg:text-base md:text-base text-sm '>
            They will make list of potential employees to be <br /> interviewed based.
          </p>
        </div>

        <div className='bg-zinc-900/10 p-2 rounded-md flex gap-20'>
          <button className={` ${Plan == "Anually" ? 'bg-blue-900  text-white' : 'bg-transparent text-black'}  font-bold py-2 px-6 rounded-md`}
          onClick={(e) => HandleFilterPlan(e)  }
          >
          <h2>Anually</h2>
          </button>
          <button className={` ${Plan == "Monthly" ? 'bg-blue-900 text-white' : 'bg-transparent text-black'}  font-bold py-2 px-6 rounded-md`} onClick={(e) => HandleFilterPlan(e)}><h2>Monthly</h2>
          </button>
        </div>
          
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 py-6'>

            {PlanFilter?.map((item, index) => (
              <motion.div {...headTextAnimation} key={index} >
              <Cardplan {...item} index={index}/>
              </motion.div>
            ))}
          

        </div>
        
      </div>

    </React.Fragment>
  )
}


export { Section5 }