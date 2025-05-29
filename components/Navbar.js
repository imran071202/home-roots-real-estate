"use client"
import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { ImSun } from "react-icons/im";
import { BsMoonStars } from "react-icons/bs";

const Navbar = () => {

  const [show, setshow] = useState(false)

  useEffect(() => {
    if(show){
      document.body.style.overflow = 'hidden'
    }else{
 document.body.style.overflow = 'auto'
    }return ()=>{
 document.body.style.overflow = 'auto'
    }
  
  }, [show])
  

  const [state, setState] = useState("lightMode");

  const change = () => {
    if (state === "lightMode") {
      setState("darkMode")
    } else {
      setState("lightMode")
    }
  }
  useEffect(() => {
    document.querySelector("body").className = state
  }, [state])



  return (
    <>
      <div className="Nav h-20 flex gap-0 justify-between ">
        <div className=" sm:logo sm:flex sm:justify-center sm:items-center sm: h-18 sm: w-1/3  lg:pr-50">
          <Link href='/'><img src="./Image/logo.png" alt="" className='h-25 mt-5  ' /></Link>
        </div>
        {/* //// */}



        {/* laptop bar */}
        <div className="navItem sm: hidden  md:flex justify-center items-center mr-2 mt-2  md:w-2/5 lg:text-4xl lg:justify-evenly ">

          <Link href="/" className='text-xs text-orange-600 font-bold  mr-2 rounded-2xl pb-0.5 h-8 flex justify-center items-center  w-12 lg:text-xl lg:flex hover:lg:text-orange-800 hover:underline'>Home</Link>

          <Link href="/agent" className='text-xs text-orange-600 font-bold  mr-2 rounded-2xl pb-0.5 h-8 flex justify-center items-center  w-12 lg:text-xl lg:flex hover:lg:text-orange-800 hover:underline'>Agent</Link>

          {/* <Link href="/About" className='text-xs font-bold text-orange-600 mr-2 rounded-2xl pb-0.5 h-8 flex justify-center items-center w-12 lg:text-xl lg:flex  hover:lg:text-orange-800 hover:underline'>About</Link> */}

          {/* <Link href="/services" className='text-xs font-bold text-orange-600 mr-2 rounded-2xl pb-0.5 h-8 flex justify-center items-center w-15 lg:text-xl lg:flex hover:lg:text-orange-800 hover:underline '>Services</Link> */}

          <Link href="#Connect" className='text-xs font-bold text-orange-600 mr-2 rounded-2xl pb-0.5 h-8 flex justify-center items-center w-15 lg:text-xl lg:flex hover:lg:text-orange-800 hover:underline '>Contact  </Link>

          {/* <div className='text-3xl text-yellow-300 cursor-pointer'><ImSun /></div>
          <div className='text-3xl  cursor-pointer'><BsMoonStars /></div> */}
          <div className="icon cursor-pointer" onClick={change}>{state == "lightMode" ? <ImSun className='text-3xl text-yellow-500' /> : <BsMoonStars  className='text-3xl text-indigo-200' />}</div>


        </div>
        {/* Mobile bar */}
        <div onClick={() => setshow(true)} className=" md:hidden bar justify-center flex items-center cursor-pointer mr-6 text-orange-500 mt-5 text-2xl"><FaBarsStaggered className='' /></div>


        {/* //// */}

      </div>
      <div className={` md:hidden ${show ? 'fixed w-full mr-6' : 'h-0 w-0'}  flex justify-end items-center lg:hidden `}>
        <div className="option flex  justify-end items-center gap-3 text-md pb-1 pr-5 pl-5 rounded-md mr-2 font-semibold">
          <Link onClick={() => setshow(false)} href="/" className="">Home</Link>
          <Link onClick={() => setshow(false)} href="/agent">Agent</Link>
          <Link onClick={() => setshow(false)} href="#Connect">Connect</Link>        
          <div className="icon cursor-pointer" onClick={change}>{state == "lightMode" ? <ImSun className='lg:text-3xl text-yellow-500 sm: text-xl sm: pt-0.5' /> : <BsMoonStars  className='text-3xl text-indigo-200 sm: text-xl sm: pt-0.5' />}</div>
           <Link onClick={() => setshow(false)} href=""><RxCrossCircled className='font-extrabold text-2xl pt-0.5 cursor-pointer' /></Link>
        </div>
      </div>


    </>
  )
}

export default Navbar