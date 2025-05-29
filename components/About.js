"Use client"
import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
       < div>
           <div 
                //    initial={{ opacity: 0, x: 100 }}
                //    transition={{ duration: 2.5 }}
                //    whileInView={{ opacity: 1, x: 0 }}
                //    viewport={{ once: true }}
                    id='About' className=" flex items-center justify-center ">
               <div className="contain-text text-black sm: h-90 flex  rounded-2xl items-center flex-col lg:h-65 bg-orange-100 mt-1 sm: w-90 lg:w-3/4" >
                    <div className="head mt-3 flex justify-center items-center flex-col  sm: h-10">
                        <p className="font-bold text-xl lg:text-3xl">We are Real Estate Investors</p>
                    </div>
                    <div className="sub sm: h-60 sm: w-80 lg:w-2/3 lg:h-32 ">
                        <p className="flex text-center mt-1 lg:justify-center">We are a real estate solutions company that specializes in the purchase, renovation, and remodeling of houses. We are problem-solvers who buy houses "as is" with a fair cash offer, providing an easy and convenient process for the seller.
                            Top Rated Real Estate specializes in ready and off-plan properties across world.
                            Home Roots gain customer trust.

                        </p>
                    </div>
                    <div className="btn">
                        <Link href="/agent"><button className="bg-orange-500 text-cyan-100 font-bold px-6 py-2.5 hover:bg-orange-700 cursor-pointer rounded-full ">Agents</button></Link>
                       {/* <Link href="services"> <button className="bg-orange-500 text-cyan-100 font-bold px-6 py-3.5 hover:bg-orange-700 cursor-pointer rounded-full ml-4 ">Services</button></Link> */}
                    </div>

                </div>
            </div>


           <div
           
                //    initial={{ opacity: 0, y: 100 }}
                //    transition={{ duration: 2.5 }}
                //    whileInView={{ opacity: 1, y: 0 }}
                //    viewport={{ once: true }}
                   className="lg:h-100 sm: h-140 flex justify-evenly items-center sm: flex-col sm: gap- lg:flex-row">
                <div className="pic lg:h-80 overflow-hidden lg:w-1/4 sm: w-2/3 sm: h-100 sm: mt-3">
                <img src="./Image/About.jpg" alt="" className='flex sm: mt- rounded-xs' /></div>
                <div className=" lg:h-80 lg:w-2/5 sm: w-2/3 sm: h-100">
                    <div className="">
                        <ul className='  lg:h-20 sm: h-15 flex justify-evenly items-center'>
                            <li><p className='lg:text-2xl sm: text-xl font-bold'>6+</p>

                                <p className='sm: text-xs'>Years of Excellence</p></li>
                            <li><p className='lg:text-2xl sm: text-xl font-bold'>120+</p>
                                <p className='sm: text-xs'>Project Completed</p></li>

                        </ul>
                        <ul className=' lg:h-20 sm: h-15  flex justify-evenly items-center'>
                            <li ><p className='lg:text-2xl sm: text-xl font-bold'>12+</p>
                            <p className='sm: text-xs'>Mn. Sq. Ft. Delivered</p></li>
                            <li><p className='lg:text-2xl sm: text-xl font-bold'>20+</p>
                            <p className='sm: text-xs'>Ongoing Projects</p></li>
                        </ul>
                        <div className=" sm: h-30 lg:w-lg m-auto flex flex-col  items-center sm: pt-2 lg:pt-3">
                            <p className='sm: text-sm sm: pt-3 lg:pl-10 lg:text-lg'> Top Rated Real Estate specializes in ready and off-plan properties across like India, Dubai, US, UK, Canada more Countries. Welcome to <b>Home Roots real estate.</b></p></div>
                            <a href="#Review " className='text-white text-xs bg-sky-500 px-3 py-0.5 rounded-sm lg:ml-20 hover:bg-sky-700 hover:underline'>Our clients feedback</a>
                        
                    </div>
                </div>

            </div>
            <div className="border-b-1 mt-8 mb-8"></div>

       </div>
    )
}
export default About
