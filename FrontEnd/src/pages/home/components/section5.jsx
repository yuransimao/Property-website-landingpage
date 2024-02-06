import React from 'react'

import { Cardplan } from '../../../components';

function Section5() {
  const DataPlan =[
    {
      plan: 'Anually',
      title:"Lite Plan",
      price: '$120',
      priceType:'mon',
      description: "They will make list of potential employees to be interviewed based.",
      list: ["50 Listings", "Contact with Agent", "One Year Validity", "7/24 Fully Suport"]
    },
    {
      plan: 'Anually',
      title: "Basic Plan",
      price: '$150',
      priceType:'mon',
      description: "They will make list of potential employees to be interviewed based.",
      list: ["50 Listings", "Contact with Agent", "One Year Validity", "7/24 Fully Suport"]
    },
    {
      plan: 'Anually',
      title: "Plus Plan",
      price: '$220',
      priceType:'mon',
      description: "They will make list of potential employees to be interviewed based.",
      list: ["50 Listings", "Contact with Agent", "One Year Validity", "7/24 Fully Suport"]
    },
  ]

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

        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 py-6'>

            {DataPlan?.map((item, index) => (
              <Cardplan key={index} {...item}/>
            ))}
          

        </div>

      </div>

    </React.Fragment>
  )
}


export { Section5 }