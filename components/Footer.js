// import React from 'react'

// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer
"use client"
import React from 'react'
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className=" sm: bg-gray-900 pt-2 text-white flex justify-between px-10  ">
        <div className="logo sm: hidden lg:block ml-40 ">
          <Link href='/'><img src="./Image/logo.png" alt="" className='h-25' /></Link>
        </div>

        <div className=' sm: footer flex justify-around items-center w-1/2 '>

          <div className="sm: footerAbout flex  gap-15 md:flex justify-between ">
            <div className="sm: contact ">
              <p className='sm: font-bold mb-1 md:text-xl lg:'>Contact Us</p>
              <ul className='sm: text-sm'>
                <li>shaikhimran****5@gmail.com</li>
                <li>7427*****7</li>
              </ul>
            </div>
            <div className="sm: follow md:text-xl mr-3">
              <p className='sm: font-bold mb-1'>Follow us</p>
              <ul className='sm: flex flex-row  gap-3 text-SM pt-2'>
                <a href="https://github.com/imran071202" target="_blank"
                  rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://x.com/Imran___02" target="_blank"
                  rel="noopener noreferrer"><FaXTwitter /></a>
                <a href="https://www.linkedin.com/in/imran-shaikh-163372241/" target="_blank"
                  rel="noopener noreferrer"><FaLinkedin /></a>
              </ul>
            </div>
          </div>

        </div></div>
      <div className="copyright bg-black h-5  text-white flex flex-row justify-center items-center  py-0.4">

        <ul className='text-xs'>

          <li className='flex flex-row gap-2'><FaCopyright className='pt-0.5 text-sm' /> 2025 , homeroots inc.</li>
        </ul>
      </div>

    </>
  )
}

export default Footer