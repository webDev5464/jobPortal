import React from 'react'
import footerimg from "../user/logo.jpg"
import { HiArrowSmallRight } from "react-icons/hi2";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaGooglePlusG } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";


const Footer = () => {
  return (
    <>
      <div className='bg-zinc-900 px-20 py-5'>

        <div className='flex items-center justify-between px-16'>
          <div className='mx-3 '>
            <img src={footerimg} alt="" />
            <p className='w-[350px] mt-14 text-[#999999] pt-'>Sed consequat sapien faus quam bibendum convallis quis in nulla. Pellentesque volutpat odio eget diam cursus semper.</p>
            <div className='p-12'> <button className='p-2 bg-orange-400 rounded-md w-fit font-bold cursor-pointer hover:border-orange-400 hover:bg-white hover:text-orange-400 text-white -ml-12'>LEARN MORE</button>
            </div>
          </div>

          <div className="saperate3 flex justify-between w-[50%]">
            <div className=' '>
              <h3 className='text-white my-3 font-bold text-xl'>Quick links</h3>
              <ul className='text-[#999999]'>
                <li className='flex items-center hover:text-yellow-500 list-disc' >Job packages</li>
                <li className='flex items-center hover:text-yellow-500'>post New job</li>
                <li className='flex items-center hover:text-yellow-500'>jobs Listing</li>
                <li className='flex items-center hover:text-yellow-500'>jobs Style Grid</li>
                <li className='flex items-center hover:text-yellow-500'>Employer Listing</li>
                <li className='flex items-center hover:text-yellow-500'>Employers Grid</li>
              </ul>
            </div>
            <div className=''>
              <h3 className='text-white my-3 font-bold text-xl'>For Candidates</h3>
              <ul className='text-[#999999]'>
                <li className='flex items-center hover:text-yellow-500'>User Dashboard</li>
                <li className='flex items-center hover:text-yellow-500'>CV Packages</li>
                <li className='flex items-center hover:text-yellow-500'>Candidate Listing</li>
                <li className='flex items-center hover:text-yellow-500'>Candidate Grid</li>
                <li className='flex items-center hover:text-yellow-500'>About us</li>
                <li className='flex items-center hover:text-yellow-500'> Contact us</li>
              </ul>
            </div>
            <div className=''>
              <h3 className='text-white my-3 font-bold text-xl'> For Employers</h3>
              <ul className='text-[#999999]'>
                <li className='flex items-center hover:text-yellow-500'>post New job</li>
                <li className='flex items-center hover:text-yellow-500'>Employer Listing</li>
                <li className='flex items-center hover:text-yellow-500'>Employer Grid </li>
                <li className='flex items-center hover:text-yellow-500'>Job packages</li>
                <li className='flex items-center hover:text-yellow-500'>Jobs Listing</li>
                <li className='flex items-center hover:text-yellow-500'>jobs Style Grid</li>
              </ul>
            </div>

          </div>


        </div>
        <hr className='text-yellow-400 text-center m-auto w-11/12' />



        <div className="footer2 flex justify-between px-16 py-5 items-center">
          <div className='text-[#999999]'>
            <p>My Blog © 2024, All Right Reserved - <navlink><span className='text-blue-400'>by Eyecix</span></navlink></p>
          </div>
          <div className='flex gap-3 '>

            <a href="https://www.facebook.com/login/" className='text-[#999999] hover:text-white text-4xl hover:scale-110'><CiFacebook /></a>


            <a href="https://x.com/?lang=en-in" className='text-[#999999] hover:text-white text-4xl hover:scale-110'><CiTwitter />
            </a>

            <a href="http://https://www.google.co.in/ " className='text-[#999999] hover:text-white text-4xl hover:scale-110'><FaGooglePlusG />
            </a>

            <a href="http://https://in.linkedin.com/" className='text-[#999999] hover:text-white text-[28px] hover:scale-110'><SlSocialLinkedin />
            </a>

          </div>
        </div>


      </div>


    </>
  )
}

export default Footer