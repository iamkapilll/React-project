import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { assets } from '../assets/assets';

const Header = () => {
  const backgroundImages = [
    assets.header_img,
    assets.project_img_1,
    assets.project_img_2,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
      setIsFading(true);

      const timeout = setTimeout(() => {
        setIsFading(false);
      }, 1000); // Match transition duration

      return () => clearTimeout(timeout);
    }, 5000); // Change every 5s

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative min-h-screen w-full mb-4 overflow-hidden" id="Header">
      {/* Previous image (fades out) */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backgroundImage: `url(${backgroundImages[prevIndex]})` }}
      />

      {/* Current image (fades in) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 opacity-100"
        style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full">
        <Navbar />

        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
          <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 mt-50">
            Explore the Course that unlocks your dreams
          </h2>
          <div className="space-x-6 mt-16 ">
            <a href="#Programs" className="border border-black px-8 py-3  bg-blue-500 hover:bg-blue-700 rounded">
              Programs
            </a>
            {/* <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded">
              Contact Us
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
  








// import React from 'react'
// import Navbar from './Navbar'

// const Header = () => {
//   return (
//     <div className='min-h-screen mb-4 bg-center flex items-center w-full overflow-hidden bg-cover'
//     style={{backgroundImage: "url('/header_img.jpg')"}} id='Header'>
//          <Navbar />
//          <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
//             <h2 className=' text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore the Course that unlocks your dreams</h2>
//             <div className='space-x-6 mt-16'>
//             <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projects</a>
//             <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
//             </div>  
//          </div>
//     </div>
//   )
// }

// export default Header