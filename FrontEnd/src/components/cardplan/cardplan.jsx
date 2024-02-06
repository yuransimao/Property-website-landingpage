import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import P from "prop-types"
function Cardplan({ title, price, description, priceType, list = [], index }) {
  const IndexPar = index % 2 !==0;
  return (
    <React.Fragment>
      <div className='w-full lg:w-[21rem] md:w-96  bg-white rounded-lg  shadow-lg overflow-hidden'>

        <div className={`flex flex-col items-center gap-6 p-6 ${ IndexPar && 'bg-blue-900'}`}>
          <h3 className={`text-xl font-semibold ${IndexPar ? 'text-white': 'text-blue-950'}`}>{title}</h3>
          <p className={`text-center font-light lg:text-base md:text-base text-sm ${IndexPar && 'text-white'}`}>
            {description}
          </p>
          <h2 className={`text-2xl font-semibold ${IndexPar ? 'text-white': 'text-blue-950'}`}>${price}/
            <span className='text-sm font-normal'>{priceType}</span>
          </h2>
          <button className={`w-full  transition hover:bg-slate-900/20  p-1 rounded-sm text-blue-950 font-semibold ${IndexPar ? 'bg-white': 'bg-zinc-800/10'}`}><h4>Selct Plan</h4></button>
        </div>

        <div className='p-6'>
          <ul className='flex flex-col gap-4'>

            {list?.map((item, index) => (
              <li className=' flex gap-4 items-center' key={index}>
                <span className='text-blue-950'><PiStarFourFill /></span>
                <h4 className='text-blue-800 text-sm'>{item}</h4>
              </li>
            ))}



          </ul>
        </div>

      </div>
    </React.Fragment>
  )
}



Cardplan.propTypes ={
  title : P.string.isRequired,
  price: P.number.isRequired,
  description: P.string.isRequired, 
  priceType: P.string.isRequired, 
  list: P.arrayOf(P.string.isRequired), 
  index : P.number
}


export { Cardplan }