"use client"
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image'
import { toast } from 'react-toastify';
import { PiPhoneCallDuotone } from "react-icons/pi";


const About = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6b87daf5-3f0f-47ce-918f-f53190fb7881");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Done");
      toast.success("Form Submitted Successfully")
      
      event.target.reset();
    } else {
      console.log("Error", data);
            toast.error(data.message)

      setResult("");
    }
  };
  return (
    <>
    <motion.div

        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}


         id ="Connect" className=" sm: h-250  lg:h-150 flex lg:justify-around items-center sm: justify-center sm: flex-col md:flex-col lg:flex-row px-4">
       <div className=" flex justify-center flex-col items-center ">

         <div className="sm: heding pb-4 lg:pt-4 sm: pt-0"> 
            <p className='sm: font-bold lg:text-3xl lg:mb-1 sm: text-2xl'>2500+  Happy Customers</p>
            <p className='mt-2 text-center'>Let's Build <br /><span className='text-xl font-semibold'>Your Future Togather</span></p>
        </div>
        <div className="">
             <img src='./Image/hans 2.jpg' alt='ph' height={1400} width={400} className='sm: rounded-lg sm: h-80'/>
        </div></div>

        

<div className="headding sm: mt-8 lg:mt-0 ">
  <p className='mb-2'><b className="text-4xl">Contact</b > <span className='text-xl underline'> with us </span></p>
 


        <form onSubmit={onSubmit}>
          <div className="h-118  lg:w-100 sm: w-75 flex flex-col">
                    <label className='mb-0.5 font-bold'>Your name</label>
                    <input className=" py-3 px-1 rounded-lg mb-4 border-1 outline-0" type="text" name="name" placeholder='Enter your name' required />

                    <label className='mb-0.5 font-bold'>Your phone number</label>
                    <input className=" py-3 px-1 rounded-lg mb-4 border-1  outline-0" type="text" name="Number" placeholder='Enter number' required />

                    <label className='mb-0.5 font-bold'>Your mail id</label>
                    <input className=" py-3 px-1 rounded-lg mb-4 border-1 outline-0" type="email" name="Mail id" placeholder='Enter mail id' required />

                    {/* <label className='mb-0.5 font-bold'>Enter your message</label>
                    <input className="bg-white py-12 px-1 rounded-lg mb-4 border-0 outline-0" type="text" placeholder='Enter message' /> */}

                    <label className='mb-1 font-bold'>Enter your message</label>
                    <textarea name="message" id="" rows="4" cols="50" className= 'border-1  outline-0 rounded-lg px-1 pt-3 mb-4' placeholder='Enter your message' required ></textarea>

                    <button className=' bg-orange-500 text-white  h-15 w-2/2 rounded-xl cursor-pointer font-bold hover:bg-orange-700 flex justify-center items-center  '>{ result ? result : "Send Message"}</button>
                </div></form></div>

        {/* <div className=" sm: btn mt-6">
            <button className='sm: bg-green-500 px-10 py-3 rounded-2xl cursor-pointer font-bold '>Connect With Us</button>
           
        </div> */}
    </motion.div>
    <div className="info flex justify-center mt-10 mb-10 items-center">
          <p className='font-semibold pr-3'>For any queries</p>
         
          <p className=' flex
'><span className='animate-bounce'><PiPhoneCallDuotone className='text-2xl ' /> </span><span className='ml-1.5 hover:underline cursor-pointer font-mono'>91+ 742792****</span></p>
        </div>
       
   
    </>
  )
}

export default About