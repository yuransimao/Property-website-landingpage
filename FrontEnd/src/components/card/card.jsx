import React from 'react'
import { Button } from '../button/button'
import P from "prop-types"
import { MdLocationPin } from "react-icons/md";

function Card  ({Image, category, price, title, section=[], location})  {

    const Price = price.toFixed(3).replace(".", ",")
  return (
    <React.Fragment>
        
            <div className='w-full lg:w-96 md:w-96 bg-white rounded-lg p-4 shadow-lg'>

                <div className='w-full rounded-lg overflow-hidden'>
                    <img src={Image} alt="ClusterNirwava" />
                </div>
                <div className='flex flex-col gap-4 py-6'>
                    <div className={`flex justify-between `}>
                    <h4 className='text-zinc-500'>{category}</h4>
                    <h3 className='text-blue-950 font-semibold'>{Price}</h3>
                    </div>

                    <h2 className='font-bold text-blue-950'>{title}</h2>

                    <div className='flex gap-5'>
                       {section?.map((item, index) => (
                         <section className='flex items-center gap-3' key={index}>
                         <span className='rounded-full bg-zinc-200 p-[0.3rem] lg:p-2 md:p-2 sm:p-2  text-blue-950'>
                            {item.icon}
                         </span>
                         <h5 className='text-black text-xs lg:text-sm md:text-sm sm:text-sm  font-medium'>{item.title}</h5>
                     </section>
                       ))}
                    </div>

                    <div className='flex justify-between items-center'> 
                    <div className='flex items-center gap-1 text-zinc-500'>
                        <span><MdLocationPin /></span>
                        <p className='text-sm'>{location}</p>

                    </div>
                    <Button text="View"/>
                    </div>
                </div>
            </div>
        
    </React.Fragment>
  )
}

Card.propTypes = {
  Image: P.string.isRequired,
  price: P.number.isRequired,
  category: P.string.isRequired,
  section: P.arrayOf(
      P.shape({
          title: P.string.isRequired,
      })
  ).isRequired,
  title: P.string.isRequired,
  location: P.string.isRequired,
};
export {Card}

