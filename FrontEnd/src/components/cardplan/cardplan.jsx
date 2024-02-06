import React from 'react'
import { PiStarFourFill } from "react-icons/pi";

function Cardplan  ({title, price, description,priceType, list=[]}){

    return(
    <React.Fragment>
        <div className='w-full lg:w-[21rem] md:w-96 bg-white rounded-lg  shadow-lg'>

<div className='flex flex-col items-center gap-6 p-6'>
  <h3 className='text-xl font-semibold text-blue-950'>{title}</h3>
  <p className='text-center font-light lg:text-base md:text-base text-sm '>
    {description}
  </p>
  <h2 className='text-2xl font-semibold text-blue-950'>{price}/
  <span className='text-sm font-normal'>{priceType}</span>
  </h2>
  <button className='w-full bg-zinc-800/10 transition hover:bg-slate-900/30  p-1 rounded-sm text-blue-950 font-semibold'><h4>Selct Plan</h4></button>
</div>

<div className='p-6'>
  <ul>

    {list?.map((item, index) => (
         <li className=' flex gap-4 items-center' key={index}>
         <span className='text-blue-950'><PiStarFourFill /></span> 
         <h4 className='text-blue-800 text-base'>{item}</h4>
         </li>
    ))}
   
    
    
  </ul>
</div>

</div>
    </React.Fragment>
  )
}


export{Cardplan}