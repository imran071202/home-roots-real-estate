"use client"
import React from 'react'
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '@/components/Navbar'
import Contain from '@/components/Contain'
import Review from '@/components/Review'
import About from '@/components/About';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// import Agent from '@/app/Agent'





const page = () => {
  return (
    <>

      
      <Contain />
      <About />
      <Review />


      <div>

      </div>
    </>
  )
}

export default page