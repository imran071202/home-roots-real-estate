"use client"
import React from "react";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import { FaRegFaceSmileBeam } from "react-icons/fa6";

function Fade() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>

      <motion.div
      
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              className="body  lg:h-150 sm:h-100 sm: flex justify-center ">

        <div className=" sm: relative slider-container md:relative mt-3 items-center rounded sm: w-80 sm: h-65 sm: flex sm: justify-center lg:w-300 lg:h-140">
          <Slider {...settings} className=" flex sm: h-50 sm: w-80 lg:h-140 lg:w-280 ">

            <img src="./Image/14 (1).jpg" className=" lg:h-140 bg-cover bg-center rounded-xl sm: h-50 sm: w-60" />

            <img src="./Image/2.jpg" className=" lg:h-140 sm: h-50 bg-cover bg-center rounded-xl" />

            <img src="./Image/14 (2).jpg" className=" lg:h-140 sm: h-50 bg-cover bg-center rounded-xl" />

            <img src="./Image/4.jpg" className=" lg:h-140 sm: h-50 bg-cover bg-center rounded-xl" />

            <img src="./Image/9.jpg" className=" lg:h-140 sm: h-50 bg-cover bg-center rounded-xl" />

            <img src="./Image/1.jpg" className=" lg:h-140 sm: h-50 bg-cover bg-center rounded-xl" />

            <img src="./Image/5.jpg" className=" lg:h-140 sm: h-50 bg-cover bg-center rounded-xl" />


          </Slider>
        </div>

      </motion.div>


      <motion.div
//  whileHover={{
//                 scale: [null, 1.1, 1.6],
//                 transition: {
//                     duration: 0.5,
//                     times: [0, 0.6, 1],
//                     ease: ["easeInOut", "easeOut"],
//                 },
//             }}
//             transition={{
//                 duration: 0.3,
//                 ease: "easeOut",
//             }}
        
// 2
            // animate={{
            //     scale: [1, 2, 2, 1, 1],
            //     rotate: [0, 0, 180, 180, 0],
            //     borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            // }}
            // transition={{
            //     duration: 2,
            //     ease: "easeInOut",
            //     times: [0, 0.2, 0.5, 0.8, 1],
            //     repeat: Infinity,
            //     repeatDelay: 0,
            // }}
          
// 3
//  animate={{ x: [10, 1000, 10],x: [10, 1000, 10] }}
// 4
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}

        className="lg:absolute lg:top-29 lg:left-93 sm: absolute sm: top-35 sm: left-20  ">
        <p className=" animate-pulse
       sm: font-bold text-green-800 font-serif sm: text-sm  lg:text-5xl lg:font-bold ">WELCOME TO HOME ROOTS</p>
        <p className="sm: font-bold text-orange-800 font-serif sm: text-xs lg:text-xl text-center mt-2 lg:font-bold  ">Let me help you<br /> find the  home of your dreams.<FaRegFaceSmileBeam className="mx-auto text-2xl mt-2 animate-pulse" /> 
        <a href="#About"><button className="font-serif px-7 cursor-pointer hover:bg-orange-100 py-1.5 rounded-2xl opacity-80 z-10  bg-gray-300 mt-1 text-orange-900 border-1 border-gray-500">About</button></a></p>
</motion.div>

      <div className="border-b-1 mt-8 mb-8"></div>


    </>
  );
}

export default Fade;
