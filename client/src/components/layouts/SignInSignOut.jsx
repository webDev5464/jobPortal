import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { PiBuildingApartment } from "react-icons/pi";
import { ImFacebook2 } from "react-icons/im";
import { SiMastodon } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Footer from "../user/Footer"


const SignInSignOut = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const options = ['Accounting/Finance', 'Automotive Jobs', 'Construction / Facilities', 'Education Training', 'Health Care'];




    return (
        <div>
            <div className='flex items-end justify-center bg-slate-500 p-16'>
                <h1 className='text-white text-3xl font-semibold '>SignIn / SignUp</h1>
            </div>

            <div className='flex items-center justify-center bg-zinc-800 text-white p-2'>
                <NavLink className='font-semibold'>Home</NavLink>
                <span className='mx-2'>
                    <FaAngleRight />
                </span>
                <NavLink className='font-semibold'>SignIn/SignUp</NavLink>
            </div>

            <div className='flex gap-6'>

                <div className=' mt-10 ml-8 w-[600px] h-[580px] bg-[#F6F6F6]  '>
                    <h1 className='text-3xl font-bold ml-7 mt-8'>Login to our site</h1>
                    <div>
                        <p className='ml-7 mt-6'>Enter the username and password to login:</p>
                    </div>

                    <div className='mx-7 my-2 mt-9'>
                        <input className='px-16 py-2 mx-2 rounded shadow-md w-[510px]' type="text" placeholder='username/Email Address' />
                    </div>
                    <div className='mx-7'>
                        <input className='px-16 py-2 mx-2 my-5 rounded shadow-md w-[510px]' type="text" placeholder='password' />
                    </div>

                    <div className=' justify-between items-center flex mx-8 mt-5 '>
                        <button className='bg-[#13B5EA] text-white px-7 py-1 rounded'>LOGIN</button>
                        <span className=''>Forgot your password? </span>
                    </div>

                    <h2 className='flex items-center justify-center mt-9 mb-10 text-2xl text-slate-600'>or login with:</h2>
                    <div className='flex gap-7 mx-20' >
                        <div className="">
                            <div className="flex items-center w-[200px] py-2 rounded pl-5 bg-primary">
                                <NavLink
                                    className="text-primary hover:underline "
                                    to="/forgot-password"
                                >
                                    <RiTwitterXFill className='text-2xl text-white' />
                                </NavLink>
                                <div>

                                    <span className="border-r-2 m-1 border-slate-200"></span>
                                </div>

                                <NavLink className=" text-white hover:underline  " >
                                    Login with Twitter
                                </NavLink>
                            </div>
                        </div>

                        <div className="">
                            <div className="flex items-center  w-[200px] py-2 rounded bg-primary pl-4">
                                <NavLink
                                    className="text-primary hover:underline "
                                    to="/forgot-password"
                                >
                                    <FcGoogle className='text-2xl' />
                                </NavLink>
                                <div>

                                    <span className="border-r-2 m-1 border-slate-200"></span>
                                </div>

                                <NavLink className="text-white hover:underline " to="/sign-up">
                                    Sign in with Google
                                </NavLink>
                            </div>
                        </div>



                    </div>

                    <div className=" ml-20">
                        <div className="flex items-center w-[200px] py-2 rounded mt-2 bg-primary pl-5 ">
                            <NavLink
                                className="text-primary hover:underline "
                                to="/forgot-password"
                            >
                                <FaLinkedinIn className='text-2xl text-white' />
                            </NavLink>
                            <div>

                                <span className="border-r-2 m-1 border-slate-200"></span>
                            </div>

                            <NavLink className=" text-white hover:underline " to="/sign-up">
                                Login with Linkdin
                            </NavLink>
                        </div>
                    </div>






                </div>

                <div className=' w-[630px] mt-10 bg-[#F6F6F6]'>
                    <h1 className='font-bold text-3xl ml-6 mt-8'>Sign up now</h1>
                    <p className='mt-6 ml-6'>Fill the form below to get instant access:</p>
                    <div className='flex items-center justify-center gap-9 mt-9 mb-2'>
                        <div className="">
                            <div className="flex items-center  w-[230px] py-2 px-14 rounded mt-2 bg-primary">
                                <NavLink
                                    className="text-primary hover:underline "
                                    to="/forgot-password"
                                >
                                    <FaRegUser className='text-2xl text-white' />
                                </NavLink>
                                <div>

                                    <span className="border-r-2 m-1 border-slate-200"></span>
                                </div>

                                <NavLink className=" text-white hover:underline  " to="/sign-up">
                                    Candidate
                                </NavLink>
                            </div>
                        </div>


                        <div className="">
                            <div className="flex items-center border w-[230px] py-2 px-14  rounded mt-2 hover:bg-primary text-white">
                                <NavLink
                                    className="text-primary hover:underline "
                                    to="/forgot-password"
                                >
                                    <PiBuildingApartment className='text-2xl text-black hover:text-white' />
                                </NavLink>
                                <div>

                                    <span className="border-r-2 m-1 border-slate-200"></span>
                                </div>

                                <NavLink className="  text-black hover:text-white hover:underline  " to="/sign-up">
                                    Employer
                                </NavLink>
                            </div>
                        </div>




                    </div>
                    <div className=''>

                        <div className='ml-8 mt-5'>
                            <input className='w-[530px] py-2 rounded shadow-md pl-16' type="text" placeholder='First Name' />
                        </div>
                        <div className='ml-8 mt-5' >
                            <input className=' w-[530px] py-2 rounded shadow-md pl-16' type="text" placeholder='Last Name' />
                        </div>
                        <div className='ml-8 mt-5'>
                            <input className=' w-[530px] py-2  rounded shadow-md pl-16' type="text" placeholder='User Name' />
                        </div>
                        <div className='ml-8 mt-5'>
                            <input className=' w-[530px] py-2  rounded shadow-md pl-16' type="text" placeholder='Email' />
                        </div>
                        <div className='ml-8 mt-5'>
                            <input className=' w-[530px] py-2  rounded shadow-md pl-16' type="number" placeholder='Phone Number' />
                        </div>

                    </div>


                    <div className="relative inline-block text-left">
                        <div>
                            <button
                                type="button"
                                className="inline-flex justify-center  ml-8 mt-5 w-[530px] text-slate-400 rounded-md  shadow-md px-4 py-2 bg-white text-md font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                                onClick={toggleDropdown}
                            >
                                {selectedOption  || 'Select an option'}
                                <svg
                                    className="-mr-1 ml-[270px] h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06-.02L10 10.94l3.71-3.75a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.25a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>

                        {isOpen && (
                            <div className="origin-top-right absolute left-8 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1">
                                    {options.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleOptionClick(option)}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>







                    <div className='ml-8 mt-2'>
                        <input className='w-[530px] py-2 shadow-md rounded pl-16 mt-5' type="password" placeholder='password' />
                    </div>

                    <div className='ml-8 mt-2'>
                        <input className='w-[530px] py-2 shadow-md rounded pl-16 mt-5' type="password" placeholder=' Conform password' />
                    </div>

                    <div className='flex  ml-5'>
                        <input className='mx-2' type="checkbox" name="" id="" /><h1 className='flex items-center justify-center mx-2 my-2'>By clicking checkbox, you agree to our Terms and Conditions and <br></br>Privacy Policy</h1>
                    </div>

                    <div className='mb-5 ml-5 mt-2'>
                        <button className='px-8 py-1 bg-[#13B5EA] rounded text-white'>SIGN UP</button>
                    </div>


                </div>

            </div>

            <div>
                <div className='flex gap-3 mt-32 ml-28'>
                    <button className='p-2 text-2xl bg-primary rounded'><ImFacebook2 /></button>
                    <button className='p-2 text-2xl bg-primary rounded'><SiMastodon /></button>
                    <button className='p-2 text-2xl bg-primary rounded'><MdEmail /></button>
                    <button className='p-2 text-2xl bg-primary rounded'><IoMdAdd /></button>
                </div>
            </div>
            <div className='mt-10'>
                <Footer />
            </div>

        </div>
    )
}

export default SignInSignOut
