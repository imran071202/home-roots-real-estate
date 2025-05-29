"use client"

import { motion } from 'framer-motion';
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
        transition={{ duration: 2.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
         id="Review" className=" flex  flex-col items-center mb-10" >
        <div className="tag">
            <p className="text-xl font-bold mb-2 rounded-2xl px-3 py-2 hover:bg-orange-100 hover:underline hover:border-1 hover:text-black">Review summary</p>
        </div>
    <div className="slider-container rounded-2xl bg-orange-50 flex justify-evenly items-center sm: h-100 sm: w-90 md:h-100 md:w-190 lg:h-100 lg:w-290">
      <Slider {...settings} className=" text-black flex items-center sm: h-80 sm: w-60 md:h-100 md:w-160 lg:w-250 lg:h-70 ">
{/* 1 */}
        <div className=" rounded-md border-1 sm: h-65 pl-3 pt-3 hover:bg-orange-100">
          
          <div className="sm: h-22 sm: w-22 overflow-hidden rounded-full">
            <img src="/Image/dp7.jpg" alt="" className=" " />
          </div>
         <div className="bio">
            <p className="font-bold mt-2">Sarthak Das</p>
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nulla!</p>
           <div className="star flex mt-4 cursor-pointer">
            <FaStar className="text-yellow-500 "/>
             <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
               <FaStar className="text-yellow-500"/>
               <FaStar className="text-yellow-500"/>
              
            </div>
         </div>
        </div>
{/* 2 */}
       <div className=" rounded-md border-1 sm: h-65 pl-3 pt-3 hover:bg-orange-100 ml-4">
          
          <div className=" sm: h-22 sm: w-22 overflow-hidden rounded-full  border-red-600">
            <img src="/Image/dp2.jpg" alt="" className=" bg-bottom bg-cover " />
          </div>
         <div className="bio">
            <p className="font-bold mt-2">Sahid Khan</p>
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nulla!</p>
           <div className="star flex mt-4 cursor-pointer">
            <FaStar className="text-yellow-500 "/>
             <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-400"/>
               <FaStar className="text-yellow-300"/>
               
               <CiStar className="text-lg"/>
            </div>
         </div>
        </div>

        {/* 3 */}
 <div className=" rounded-md border-1 sm: h-65 pl-3 pt-3 hover:bg-orange-100 ml-8">
          
          <div className=" sm: h-22 sm: w-22 overflow-hidden rounded-full  border-red-600">
            <img src="/Image/dp6.jpg" alt="" className=" bg-center bg-cover" />
          </div>
         <div className="bio">
            <p className="font-bold mt-2">Eva Sophia</p>
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nulla!</p>
           <div className="star flex mt-4 cursor-pointer">
            <FaStar className="text-yellow-500 "/>
             <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-400"/>
               <FaStar className="text-yellow-300"/>
               
               <CiStar className="text-lg"/>
            </div>
         </div>
        </div>
        {/* 4 */}
         <div className="rounded-md border-1 sm: h-65 pl-3 pt-3 hover:bg-orange-100 ml-12">
          
          <div className="dp bg-green-400 sm: h-22 sm: w-22 overflow-hidden rounded-full ">
            <img src="/Image/dp5.jpg" alt="" className=" " />
          </div>
         <div className="bio">
            <p className="font-bold mt-2">Harry </p>
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nulla!</p>
           <div className="star flex mt-4 cursor-pointer">
            <FaStar className="text-yellow-500 "/>
             <FaStar className="text-yellow-400"/>
              <FaStar className="text-yellow-300"/>
               <CiStar className="text-lg"/>
               <CiStar className="text-lg"/>
            </div>
         </div>
        </div>
{/* 5 */}
 <div className="rounded-md border-1 sm: h-65 pl-3 pt-3 hover:bg-orange-100 ml-16">
          
          <div className="dp sm: h-22 sm: w-22 overflow-hidden rounded-full ">
            <img src="/Image/dp4.jpg" alt="" className=" bg-center bg-cover " />
          </div>
         <div className="bio">
            <p className="font-bold mt-2">Prakash Kumar</p>
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nulla!</p>
           <div className="star flex mt-4 cursor-pointer">
            <FaStar className="text-yellow-500 "/>
             <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
               <FaStar className="text-yellow-500"/>
               <FaStar className="text-yellow-500"/>
               
            </div>
         </div>
        </div>
{/* 6 */}
 <div className="rounded-md border-1 sm: h-65 pl-3 pt-3 hover:bg-orange-100 ml-20">
          
          <div className="dp bg-green-400 sm: h-22 sm: w-22 overflow-hidden rounded-full ">
            <img src="/Image/dp3.jpg" alt="" className=" " />
          </div>
         <div className="bio">
            <p className="font-bold mt-2">Olivia Ava</p>
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nulla!</p>
           <div className="star flex mt-4 cursor-pointer">
            <FaStar className="text-yellow-500 "/>
             <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
               <FaStar className="text-yellow-500"/>
               <FaStar className="text-yellow-500"/>
               
         </div>
        </div></div>
{/* 7 */}
 <div className=" rounded-md border-1 sm: h-65 pl-3 pt-3 hover:bg-orange-100 ml-24">
          
          <div className="dp  sm: h-22 sm: w-22 overflow-hidden rounded-full ">
            <img src="/Image/dp9.jpg" alt="" className=" " />
          </div>
         <div className="bio">
            <p className="font-bold mt-2">Avinash Sharma</p>
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nulla!</p>
           <div className="star flex mt-4 cursor-pointer">
            <FaStar className="text-yellow-500 "/>
             <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-400"/>
               <FaStar className="text-yellow-300"/>
               
               <CiStar className="text-lg"/>
            </div>
         </div>
        </div>
        {/* 8 */}
 <div className=" rounded-md border-1 sm: h-65 pl-3 pt-3 hover:bg-orange-100 ml-28">
          
          <div className="dp sm: h-22 sm: w-22 overflow-hidden rounded-full ">
            <img src="/Image/dp1.jpg" alt="" className=" " />
          </div>
         <div className="bio">
            <p className="font-bold mt-2">Priti Singh</p>
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nulla!</p>
           <div className="star flex mt-4 cursor-pointer">
            <FaStar className="text-yellow-500 "/>
             <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-400"/>
               <FaStar className="text-yellow-300"/>
               
               <CiStar className="text-lg"/>
            </div>
         </div>
        </div>
        {/* 9 */}
<div className=" rounded-md border-1 sm: h-65 pl-3 pt-3 hover:bg-orange-100 ml-32  ">
          
          <div className="dp  sm: h-20 sm: w-20 overflow-hidden rounded-full border-2 ">
            <img src="/Image/dp8.jpg" alt="" className=" " />
          </div>
         <div className="bio">
            <p className="font-bold mt-2">Meghna Patel</p>
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nulla!</p>
           <div className="star flex mt-6 cursor-pointer">
            <FaStar className="text-yellow-500 "/>
             <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
               <FaStar className="text-yellow-500"/>
               <FaStar className="text-yellow-500"/>
              
            </div>
         </div>
        </div>
      </Slider>
    </div></motion.div>    <div className="border-b-1 mt-6 mb-8"></div>
    </>

  );
}

export default Responsive;
