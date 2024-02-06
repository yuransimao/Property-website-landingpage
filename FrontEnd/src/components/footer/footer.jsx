import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa";
function Footer()  {
  return (
    <React.Fragment>
        <div >
            <div className={`grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 px-4 lg:px-24 md:px-12 sm:px-6  py-4 lg:py-16 md:py-8 gap-20`}>
                <div className='flex flex-col gap-6'>
                <h2 className='text-2xl font-bold text-blue-950'>Dremy</h2>
                <p className='text-xs lg:text-sm md:text-sm sm:text-sm'>People most commonly get pets for companionship, to project a home or property or becausecare </p>

                <div className='flex items-center gap-3'>
                    <Link className='p-2 border-solid border-[1px] border-blue-900 rounded-full text-blue-950 transition-all hover:bg-blue-900 hover:text-white'>
                        <span><FaFacebookF /></span>
                    </Link>
                    <Link className='p-2 border-solid border-[1px] border-blue-900 rounded-full text-blue-950 transition-all hover:bg-blue-900 hover:text-white'>
                        <span><FaInstagram /></span>
                    </Link>
                    <Link className='p-2 border-solid border-[1px] border-blue-900 rounded-full text-blue-950 transition-all hover:bg-blue-900 hover:text-white'>
                        <span><FaLinkedinIn /></span>
                    </Link>
                    
                </div>
                </div>

                <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold text-blue-950'>Home</h2>

                <ul className='flex flex-col gap-3'>
                    <li className='text-base text-blue-950 font-medium'><Link><h3>Appraise</h3></Link></li>
                    <li className='text-base text-blue-950 font-medium'><Link><h3>Buy</h3></Link></li>
                    <li className='text-base text-blue-950 font-medium'><Link><h3>Sell</h3></Link></li>
                    <li className='text-base text-blue-950 font-medium'><Link><h3>How it works ?</h3></Link></li>
                </ul>
                </div>

                <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold text-blue-950'>Company</h2>

                <ul className='flex flex-col gap-3'>
                    <li className='text-base text-blue-950 font-medium'><Link><h3>About us</h3></Link></li>
                    <li className='text-base text-blue-950 font-medium'><Link><h3>Reviews</h3></Link></li>
                    <li className='text-base text-blue-950 font-medium'><Link><h3>Faqs</h3></Link></li>
                    <li className='text-base text-blue-950 font-medium'><Link><h3>Stories</h3></Link></li>
                </ul>
                </div>

                <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold text-blue-950'>Contact</h2>

                <ul className='flex flex-col gap-3'>
                    <li className='text-base text-blue-950 font-medium'><Link><h3>+244 924 666 999</h3></Link></li>
                    <li className='text-base text-blue-950 font-medium'><Link><h3>info.propy.com</h3></Link></li>
                    <li className='text-base text-blue-950 font-medium'><Link><h3>Contact us</h3></Link></li>
                    <li className='text-base text-blue-950 font-medium'><Link><h3>Terms of service</h3></Link></li>
                </ul>
                </div>

            </div>

            <div className='bg-blue-900 text-center p-5 font-bold text-white'>
                <h4>Copyright &#xA9; 2024 Dremy All rights reserved</h4>
            </div>
        </div>
    </React.Fragment>
  )
}

export {Footer}