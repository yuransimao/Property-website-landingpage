import React from 'react'
import Image from "../../../assets/ClusterNirwava.jpg"

import { LiaBedSolid, LiaBathSolid } from "react-icons/lia";
import { Card} from "../../../components"
 function Section4() {

    const Data =[{
        Image,
        category: "Rent",
        price:1.300,
        title : "Mitchel Park Plaza Apartments",
        location:"Downtown Dubai, Forte 2",
        section: [{
            title: "2 Beds",
            icon: <LiaBedSolid/>
            },
            {
                title: "2 Baths",
                icon: <LiaBathSolid/>
                }
        ]
    }]
  return (
    <React.Fragment>
        <div className='bg-green-400/5 flex flex-col items-center justify-center p-8 gap-8'>
            <div>
            <h1 className='text-center font-bold lg:text-4xl md:text-3xl text-2xl text-blue-950 py-2'>Recent Property For Recent</h1>
        <p className='text-center font-normal lg:text-base md:text-base text-sm '>
            They will make list of potential employees to be <br/> interviewed based
        </p>
            </div>

            <div className='flex gap-6'>
            {Data.map((item, index) => (
                <Card key={index} {...item}/>
            ))}
            </div>
        </div>

       
    </React.Fragment>
  )
}


export {Section4}
