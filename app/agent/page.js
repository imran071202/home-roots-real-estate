"use client"
import { motion } from 'framer-motion';

import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick';
import { IoCallSharp } from "react-icons/io5";
import { RiArrowRightWideFill } from "react-icons/ri";
import { LuHeartHandshake } from "react-icons/lu";
const page = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: "linear"
  };
  return (

    <>
      <div className="agentBody lg:h-130 sm: h-150 lg:flex lg:justify-around sm: justify-center lg:items-center lg:flex-row sm: flex-col sm: flex  sm: items-center  ">
        <div className="pic rounded-2xl overflow-hidden lg:h-fit lg:w-2/6 sm: h-1/4 sm: w-2/3  sm: mb-6">
          <img src="./Image/agentBio.jpg" alt="" /></div>
        <motion.div

          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 3 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="about lg:h-1/2 lg:w-3/5 sm: h-1/2 sm: w-80 ">
          <div className="flex flex-row ">
            <p className='lg:text-4xl sm: text-2xl sm: font-semibold lg:font-bold text-green-700'>Smart Moves Start Here Find Home, Feel Home </p> </div>

          <p className='pt-5 pl-1 lg:text-xl'>We Value, Market, Sell, and Rent Your Property Right. Find Your Perfect Property in the <b>Home Roots. Home Roots </b> connects buyers and sellers with insight, integrity, and innovation. We don’t just close deals we open doors.


          </p>
          <a href="#agent" ><p className='flex items-center pl-1.5 text-blue-600 hover:text-blue-800 hover:underline'>Meet the best team ever! <RiArrowRightWideFill className='mt-1' /><span><LuHeartHandshake className='ml-0.5 mt-2 text-3xl animate-pulse text-red-500 mb-1.5' /></span></p></a>
        </motion.div></div>



      <div className="border-b-1 mt-6 mb-8"></div>

      <div className="agentDet h-130">

        <div className="slide" id='agent'>

          <div className="slider-container sm: h-130 flex flex-col  items-center ">
            <div className="headline mb-12 mt-7 text-center hover:bg-orange-200 hover:text-black hover:cursor-pointer">
              <h3 className='font-bold text-2xl'>Our Real Estate Agents </h3>
              <h4 className='font-normal text-xl'>Here to guide you home - no pressure, just real support.</h4></div>
            <Slider {...settings} className='sm: h-70 sm: w-85 lg:h-80 lg:w-320 '>

              {/* 1 */}
              <div className='flex h-70 justify-center items-center border-b-1  hover:bg-orange-100 hover:text-black'>
                <div className="pic mt-4 lg:h-30 lg:w-30 sm: h-20 sm: w-20 sm: ml-5 lg:ml-37 rounded-full overflow-hidden text-center">
                  <img src="./Image/a2.jpg" alt="" className=' ' />
                </div>
                <div className="name "><p className='  lg: font-semibold sm: text-sm sm: pt-2 lg:text-xl text-center'>Sunny Randhawa</p></div>
                <div className="about"><p className=' mt-2  sm: text-sm lg:text-base text-center '><b>India</b></p>
                  <p className='sm: text-xs sm: mt-3  lg:ml-38 lg:mt-4  flex gap-1 items-center text-center lg:text-base'><IoCallSharp className='sm: text-xs lg:text-lg mt-1 ' />+91700258***</p></div>
              </div>
              {/* 2 */}
              <div className='flex h-70 border-t-1 justify-center items-center hover:bg-orange-100 hover:text-black'>
                <div className="pic mt-4 lg:h-30 lg:w-30 sm: h-20 sm: w-20 sm: ml-5 lg:ml-37 rounded-full overflow-hidden text-center">
                  <img src="./Image/aa1.jpg" alt="" className=' ' />
                </div>
                <div className="name "><p className='  lg: font-semibold sm: text-sm sm: pt-2 lg:text-xl text-center'>Brendon Mccullum</p></div>
                <div className="about"><p className=' mt-2  sm: text-sm lg:text-base text-center '> <b>United Kingdom</b></p>
                  <p className='sm: text-xs sm: mt-3 lg:ml-38 lg:mt-4  flex gap-1 items-center text-center lg:text-base'><IoCallSharp className='sm: text-xs lg:text-lg mt-1' />+4473025***</p></div>
              </div>
              {/* 3 */}
              <div className='flex h-70 border-b-1  justify-center items-center hover:bg-orange-100 hover:text-black'>
                <div className="pic mt-4 lg:h-30 lg:w-30 sm: h-20 sm: w-20 sm: ml-5 lg:ml-37 rounded-full overflow-hidden text-center">
                  <img src="./Image/a6.jpg" alt="" className=' ' />
                </div>
                <div className="name "><p className='  lg: font-semibold sm: text-sm sm: pt-2 lg:text-xl text-center'>Sarah Ayasha </p></div>
                <div className="about"><p className=' mt-2  sm: text-sm lg:text-base text-center '><b>Saudi Arabia</b></p>
                  <p className='sm: text-xs sm: mt-3 lg:ml-38 lg:mt-4  flex gap-1 items-center text-center lg:text-base'><IoCallSharp className='sm: text-xs lg:text-lg mt-1' />+1710258***</p></div>
              </div>
              {/* 4 */}
              <div className='flex h-70 border-t-1 justify-center items-center hover:bg-orange-100 hover:text-black'>
                <div className="pic mt-4 lg:h-30 lg:w-30 sm: h-20 sm: w-20 sm: ml-5 lg:ml-37 rounded-full overflow-hidden text-center">
                  <img src="./Image/a3.jpg" alt="" className=' ' />
                </div>
                <div className="name "><p className='  lg: font-semibold sm: text-sm sm: pt-2 lg:text-xl text-center'> Finn MacAllister</p></div>
                <div className="about"><p className=' mt-2  sm: text-sm lg:text-base text-center '><b>Spain</b></p>
                  <p className='sm: text-xs sm: mt-3 lg:ml-38 lg:mt-4  flex gap-1 items-center text-center lg:text-base'><IoCallSharp className='sm: text-xs lg:text-lg mt-1' />+348525***</p></div>
              </div>
              {/* 5 */}
              <div className='flex h-70 border-b-1  justify-center items-center hover:bg-orange-100 hover:text-black'>
                <div className="pic mt-4 lg:h-30 lg:w-30 sm: h-20 sm: w-20 sm: ml-5 lg:ml-37 rounded-full overflow-hidden text-center">
                  <img src="./Image/a5.jpg" alt="" className=' ' />
                </div>
                <div className="name "><p className='  lg: font-semibold sm: text-sm sm: pt-2 lg:text-xl text-center'>Riku Kenzo</p></div>
                <div className="about"><p className=' mt-2  sm: text-sm lg:text-base text-center '><b>Japan</b></p>
                  <p className='sm: text-xs sm: mt-3 lg:ml-38 lg:mt-4  flex gap-1 items-center text-center lg:text-base'><IoCallSharp className='sm: text-xs lg:text-lg mt-1' />+8198028***</p></div>
              </div>
              {/* 6 */}
              <div className='flex h-70 border-t-1 justify-center items-center hover:bg-orange-100 hover:text-black'>
                <div className="pic mt-4 lg:h-30 lg:w-30 sm: h-20 sm: w-20 sm: ml-5 lg:ml-37 rounded-full overflow-hidden text-center">
                  <img src="./Image/a7.jpg" alt="" className=' ' />
                </div>
                <div className="name "><p className='  lg: font-semibold sm: text-sm sm: pt-2 lg:text-xl text-center'>Jamela Jazmin</p></div>
                <div className="about"><p className=' mt-2  sm: text-sm lg:text-base text-center '><b>UAE</b></p>
                  <p className='sm: text-xs sm: mt-3 lg:ml-38 lg:mt-4  flex gap-1 items-center text-center lg:text-base'><IoCallSharp className='sm: text-xs lg:text-lg mt-1' />+97160025***</p></div>
              </div>
              {/* 7 */}
              <div className='flex h-70 border-b-1  justify-center items-center hover:bg-orange-100 hover:text-black'>
                <div className="pic mt-4 lg:h-30 lg:w-30 sm: h-20 sm: w-20 sm: ml-5 lg:ml-37 rounded-full overflow-hidden text-center">
                  <img src="./Image/a1.jpg" alt="" className=' ' />
                </div>
                <div className="name "><p className='  lg: font-semibold sm: text-sm sm: pt-2 lg:text-xl text-center'>Eka Entan</p></div>
                <div className="about"><p className=' mt-2  sm: text-sm lg:text-base text-center '><b>Indonesia </b></p>
                  <p className='sm: text-xs sm: mt-3 lg:ml-38 lg:mt-4  flex gap-1 items-center text-center lg:text-base'><IoCallSharp className='sm: text-xs lg:text-lg mt-1' />+62800258****</p></div>
              </div>

              {/* 8 */}
              <div className='flex h-70 border-t-1 justify-center items-center hover:bg-orange-100 hover:text-black'>
                <div className="pic mt-4 lg:h-30 lg:w-30 sm: h-20 sm: w-20 sm: ml-5 lg:ml-37 rounded-full overflow-hidden text-center">
                  <img src="./Image/aa2.jpg" alt="" className=' ' />
                </div>
                <div className="name "><p className='  lg: font-semibold sm: text-sm sm: pt-2 lg:text-xl text-center'>Louise F</p></div>
                <div className="about"><p className=' mt-2  sm: text-sm lg:text-base text-center '><b>France</b></p>
                  <p className='sm: text-xs sm: mt-3 lg:ml-38 lg:mt-4  flex gap-1 items-center text-center lg:text-base'><IoCallSharp className='sm: text-xs lg:text-lg mt-1' />+339025***</p></div>
              </div>

              {/* 9 */}
              <div className='flex h-70 border-b-1  justify-center items-center hover:bg-orange-100 hover:text-black'>
                <div className="pic mt-4 lg:h-30 lg:w-30 sm: h-20 sm: w-20 sm: ml-5 lg:ml-37 rounded-full overflow-hidden text-center">
                  <img src="./Image/aa3.jpg" alt="" className=' ' />
                </div>
                <div className="name "><p className='  lg: font-semibold sm: text-sm sm: pt-2 lg:text-xl text-center'>Julian Gündoğan</p></div>
                <div className="about"><p className=' mt-2  sm: text-sm lg:text-base text-center '><b>Germany</b></p>
                  <p className='sm: text-xs sm: mt-3 lg:ml-38 lg:mt-4  flex gap-1 items-center text-center lg:text-base'><IoCallSharp className='sm: text-xs lg:text-lg mt-1' />+498002***</p></div>
              </div>

            </Slider>
          </div>



        </div>
      </div>

      <div className="border-b-1 mt-6 mb-8"></div>

    </>
  )
}

export default page