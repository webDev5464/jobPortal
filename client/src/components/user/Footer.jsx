import React from 'react'
import footerimg from "../user/logo.jpg"
import { HiArrowSmallRight } from "react-icons/hi2";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
   <>
   <div className='bg-zinc-900 h-96 relative'>

   <div className='flex items-center justify-around'>
    <div className='mx-3 '>
        <img  src={footerimg} alt="" />
        <p className='w-[350px] mt-14 text-white pt-'>sed consequat sapien faus quam bibendum covallis quis in nulla.pellentesque volutpat odio eget diam cursus semper</p>
       <div className='p-12'> <button className='p-2 bg-primary rounded-sm hover:bg-yellow-400 text-black -ml-12'>LARAN MORE</button> 
       </div>
    </div>
  
    <div className=''>
                    <h4 className='text-white my-3 font-bold'>Quick links</h4>
                    <ul className='text-white '>
                      <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight /></span>Job packages</li>
                      <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight /></span>post New job</li>
                      <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight /></span>jobs Listing</li>
                      <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight />  </span>jobs Style Grid</li>
                      <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight />  </span>Employer Listing</li>
                      <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight />  </span>Employers Grid</li>
                    </ul>
                </div>
                <div className=''>
                    <h4 className='text-white my-3 font-bold'>For Candidates</h4>
                   <ul className='text-white'>
            <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight /></span>User Dashboard</li> 
            <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight /></span>CV Packages</li> 
            <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight /></span>Candidate Listing</li>
            <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight /></span>Candidate Grid</li>
            <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight /></span>About us</li> 
            <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight /></span> Contact us</li>
                   </ul>
                </div>
                <div className=''>
                    <h4 className='text-white my-3 font-bold'> For Employers</h4>
                   <ul className='text-white'>
                     <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight /></span>post New job</li>
                     <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight /></span>Employer Listing</li>
                     <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight /></span>Employer  Grid </li>
                     <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight /></span>Job packages</li>
                     <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight /></span>Jobs Listing</li>
                     <li className='flex items-center   hover:text-blue-400'><span className='mx-1'> <HiArrowSmallRight /></span>jobs Style Grid</li>
                   </ul>
                </div>
                

                
   </div> 
   <hr className='text-yellow-200 pt-3' />
   <div className='text-white pl-16'>
      <p>My Blog © 2024, All Right Reserved - <navlink><span className='text-blue-400'>by Eyecix</span></navlink></p>
    </div>
    <div className='flex justify-self-end absolute top-80 right-12 text-2xl gap-3 '>

    <a href="https://www.facebook.com/login/" className='text-white border rounded-3xl p-3 hover:bg-primary'><FaFacebookSquare /></a>
    

    <a href="https://x.com/?lang=en-in" className='text-white border rounded-3xl p-3 hover:bg-primary'><FaXTwitter /></a>

    <a href="http://https://www.google.co.in/ " className='text-white border rounded-3xl p-3 hover:bg-primary'><FaGooglePlus /></a>

    <a href="http://https://in.linkedin.com/" className='text-white border rounded-3xl p-3 hover:bg-primary'><TiSocialLinkedinCircular /></a>
    
    </div>


   </div>

 
   </>
  )
}

export default Footer