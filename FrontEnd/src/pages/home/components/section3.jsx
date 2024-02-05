import React from 'react'
import { FaHeart } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
function Section3() {
    return (
    <React.Fragment>
    <div className='px-4 lg:px-24 md:px-12 sm:px-6  py-4 lg:py-16 md:py-8'>
        <h1 className={`font-bold text-blue-950 lg:text-4xl md:text-4xl text-2xl  py-6`}>
            Featured Property
        </h1>

    <div className='h-auto lg:h-[28rem] flex flex-col lg:flex-row gap-10 py-4'>
        <div className='flex items-end h-80 lg:h-full  sm:h-96 w-full lg:w-2/4 p-8 rounded Paradise'>
            <div className='flex w-full justify-between items-center bg-white rounded px-4 py-2'>
                <div>
                    <h3 className={`font-bold text-blue-950`}>Paradise Residence</h3>
                    <div className='flex items-center gap-1 text-zinc-500'>
                        <span><MdLocationPin /></span>
                        <p>Laweyan, Surakaya</p>

                    </div>

                </div>
                <button className='rounded-full bg-zinc-200 p-3 text-blue-950 transition-all hover:bg-fuchsia-300'>
                    <span>
                        <FaHeart />
                    </span>
                </button>
            </div>


        </div>

        <div className='w-full lg:w-3/5 flex flex-col gap-5'>
            <div className=' h-80 lg:h-full  sm:h-96  w-full flex items-end bg-slate-400 rounded p-8 ClusterNirwava'>
            <div className='flex w-full justify-between items-center bg-white rounded px-4 py-2'>
                <div>
                    <h3 className={`font-bold text-blue-950`}>Cluster Nirwava</h3>
                    <div className='flex items-center gap-1 text-zinc-500'>
                        <span><MdLocationPin /></span>
                        <p>Dubai, Production City</p>

                    </div>

                </div>
                <button className='rounded-full bg-zinc-200 p-3 text-blue-950 transition-all hover:bg-fuchsia-300'>
                    <span>
                        <FaHeart />
                    </span>
                </button>
            </div>

            </div>
            <div className='h-80 lg:h-full  sm:h-96 w-full flex items-end bg-black rounded  p-8 SrikandiHousing'>
            <div className='flex w-full justify-between items-center bg-white rounded px-4 py-2'>
                <div>
                    <h3 className={`font-bold text-blue-950`}>Srikandi Housing</h3>
                    <div className='flex items-center gap-1 text-zinc-500'>
                        <span><MdLocationPin /></span>
                        <p>Downtown Dubai, Forte 2</p>

                    </div>

                </div>
                <button className='rounded-full bg-zinc-200 p-3 text-blue-950 transition-all hover:bg-fuchsia-300'>
                    <span>
                        <FaHeart />
                    </span>
                </button>
            </div>

            </div>
        </div>

        </div>
    </div>
    </React.Fragment>
    )
}

export { Section3 }