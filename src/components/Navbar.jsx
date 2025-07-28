import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(()=>{
        if(showMobileMenu){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
        return () =>{
            document.body.style.overflow = 'auto'
        }
    },[showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-0  '>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent border-b-2 border-white '>
            <img className='w-12 h-auto md:w-16 lg:w-20 object-contain rounded-full' src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-gray-800 font-boldrounded-4xl px-12 py-3 bg-neutral-400 rounded-2xl'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Courses" className='cursor-pointer hover:text-gray-400'>Courses</a>
                <a href="#Contact" className='cursor-pointer hover:text-gray-400'>Contact</a>
            </ul>
            {/* <button className='hidden md:block bg-amber-400 px-8 py-2 rounded-full'>Sign Up</button> */}
            {/* the hamburber icon for mobile */}
            <img onClick={() => setShowMobileMenu(true)}
             src={assets.menu_icon}
              className='md:hidden w-7' alt="" />
        </div>
        {/* for mobile menu  */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'w-0 h-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>

            <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={()=> setShowMobileMenu(false)}
                src={assets.cross_icon} 
                 className='w-6' alt="" />
            </div>

            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a onClick={()=> setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Programs</a>
                <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
            </ul>
        </div>

    </div>
  )
}

export default Navbar