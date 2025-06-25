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

      <div
      
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              className="body  lg:h-150 sm:h-100 sm: flex justify-center ">

        <div className="slider-container md:relative  mt-5 rounded sm: w-80 sm: h-65 sm: flex sm: justify-center lg:w-300 lg:h-140">
          <Slider {...settings} className=" flex sm: h-50 sm: w-80 lg:h-130 lg:w-280 mt-11 md:mt-0 ">

            <img src="./Image/14 (1).jpg" className=" lg:h-130 bg-cover bg-center rounded-xl sm: h-50 sm: w-60" />

            <img src="./Image/2.jpg" className=" lg:h-130 sm: h-50 bg-cover bg-center rounded-xl" />

            <img src="./Image/14 (2).jpg" className=" lg:h-130 sm: h-50 bg-cover bg-center rounded-xl" />

            <img src="./Image/4.jpg" className=" lg:h-130 sm: h-50 bg-cover bg-center rounded-xl" />

            <img src="./Image/9.jpg" className=" lg:h-130 sm: h-50 bg-cover bg-center rounded-xl" />

            <img src="./Image/1.jpg" className=" lg:h-130 sm: h-50 bg-cover bg-center rounded-xl" />

            <img src="./Image/5.jpg" className=" lg:h-130 sm: h-50 bg-cover bg-center rounded-xl" />


          </Slider>
        </div>

      </div>



      <div className="border-b-1 mt-8 mb-8"></div>


    </>
  );
}

export default Fade;
