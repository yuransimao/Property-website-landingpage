import React from 'react'
import Image from "../../../assets/sala2.jpg"
import Sala from "../../../assets/sala.jpg"
import Room from "../../../assets/room.jpg"
import { LiaBedSolid, LiaBathSolid } from "react-icons/lia";
import { SlSizeActual } from "react-icons/sl";
import { Card} from "../../../components"
 function Section4() {

    const Data =[
    {
        Image:Sala,
        category: "Rent",
        price:1.300,
        title : "Mitchel Park Plaza Apartments",
        location:"Dubai Production City",
        section: [{
            title: "2 Beds",
            icon: <LiaBedSolid/>
            },
            {
            title: "2 Baths",
            icon: <LiaBathSolid/>
            },{
            title: "1800 sqft",
            icon: <SlSizeActual/>
            }
        ]
    },
    {
        Image:Room,
        category: "Rent",
        price:1.300,
        title : "Cottonwood Creek Apartments",
        location:"Dubai South world Central",
        section: [{
            title: "3 Beds",
            icon: <LiaBedSolid/>
            },
            {
            title: "2 Baths",
            icon: <LiaBathSolid/>
            },{
            title: "1600 sqft",
            icon: <SlSizeActual/>
            }
        ]
    },
    {
        Image,
        category: "Rent",
        price:1.300,
        title : "Ridge St Joseph Apartments",
        location:"Downtown Dual, Forte 2",
        section: [{
            title: "4 Beds",
            icon: <LiaBedSolid/>
            },
            {
            title: "3 Baths",
            icon: <LiaBathSolid/>
            },{
            title: "1800 sqft",
            icon: <SlSizeActual/>
            }
        ]
    }
    ]
  return (
    <React.Fragment>
        <div className='bg-green-400/5 flex flex-col items-center justify-center px-4 lg:px-8  py-8 gap-8'>
            <div>
            <h1 className='text-center font-bold lg:text-4xl md:text-3xl text-2xl text-blue-950 py-2'>Recent Property For Recent</h1>
        <p className='text-center font-normal lg:text-base md:text-base text-sm '>
            They will make list of potential employees to be <br/> interviewed based
        </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {Data.map((item, index) => (
                <Card key={index} {...item}/>
            ))}
            </div>
        </div>

       
    </React.Fragment>
  )
}


export {Section4}
