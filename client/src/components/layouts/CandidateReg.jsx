import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { CiLinkedin } from "react-icons/ci";

const CandidateReg = () => {
    return (
        <>
            <form className="candidateform mt-5 mx-10">
                <div className="form 2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex justify-between items-center gap-14">
                    <div>
                        <label className='text-gray' htmlFor="firstName">First Name : *</label><br />
                        <input type="text" required className='border w-[120%] px-4 py-1 outline-none border-gray focus:border-primary ' placeholder='Enter Firstname...' />
                    </div>
                    <div>
                        <label className='text-gray' htmlFor="lastName">Last Name : *</label><br />
                        <input type="text" required className='border w-[120%] px-4 py-1 outline-none border-gray  focus:border-primary' placeholder='Enter Lastname...' />
                    </div>
                </div>
                <div className="form1 2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex justify-between items-center gap-14 mt-5 sm:mt-2">
                    <div>
                        <label className='text-gray' htmlFor="userName">Username : *</label><br />
                        <input type="text" required className='border w-[120%] px-4 py-1 outline-none border-gray focus:border-primary ' placeholder='Enter Username...' />
                    </div>
                    <div>
                        <label className='text-gray' htmlFor="email">Email : *</label><br />
                        <input type="email" required className='border w-[120%] px-4 py-1 outline-none border-gray  focus:border-primary' placeholder='Enter Email...' />
                    </div>
                </div>
                <div className="form2 2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex justify-between items-center gap-14 mt-5 sm:mt-2">
                    <div>
                        <label className='text-gray' htmlFor="password">Password : *</label><br />
                        <input type="password" required className='border w-[120%] px-4 py-1 outline-none border-gray focus:border-primary ' placeholder='Enter Password...' />
                    </div>
                    <div>
                        <label className='text-gray' htmlFor="confirm-password">Confirm Password : *</label><br />
                        <input type="password" required className='border w-[120%] px-4 py-1 outline-none border-gray  focus:border-primary' placeholder='Enter Confirm Password...' />
                    </div>
                </div>
                <div className="form3 mt-5 sm:mt-2">
                    <div>
                        <label className='text-gray' htmlFor="number">Phone No. : *</label><br />
                        <input type="tel" required pattern='[0-9]{10}' className='border xl:w-[35vw] sm:w-[33vw] px-4 py-1 outline-none border-gray focus:border-primary ' placeholder='Enter Phone No...' />
                    </div>
                    <div className='mt-5 2xl:flex xl:flex lg:flex md:flex sm:flex'>
                        <input type="checkbox" className='h-6 w-5' required name="" id="" /><p className=' text-gray'>By clicking checkbox, you agree to our <a href="" className='text-primary'>Terms and Conditions</a>  and <a href="" className='text-primary\ '> Privacy Policy</a> </p>
                    </div>
                </div>
                <div className="form4 mt-10 2xl:flex xl:flex lg:flex items-center justify-between">
                    <div>
                        <button className='border px-6 py-2 rounded-3xl md:w-full sm:w-full border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300'>Sign Up...</button>
                    </div>
                    <div>
                        <a href="" className='text-primary hover:underline md:text-sm sm:text-sm'>Already have an account? Login</a>
                    </div>
                </div>
            </form>
            <div className='flex mt-4 sm:mt-3'>
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-[90%] h-[1%] my-2 bg-red-400 border-0 rounded" />
                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                        <p className='text-primary text-sm'>Or Sign in With</p>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-3">
                <div className='text-3xl  mx-auto flex items-center justify-center'>
                    <div className='relative group'>
                        <button className='group border px-1 py-1 rounded-full ml-3'><FaXTwitter /></button>
                        <div className='absolute top-[110%] left-1 group-hover:top-[100%] transition-all duration-300 invisible group-hover:visible'>
                            <p className='text-lg text-primary underline'>Twitter</p>
                        </div>
                    </div>
                    <div className='relative group'>
                        <button className='group border px-1 py-1 rounded-full ml-3'><FcGoogle /></button>
                        <div className='absolute top-[110%] left-2 group-hover:top-[100%] transition-all duration-300 invisible group-hover:visible'>
                            <p className='text-lg text-primary underline'>Gmail</p>
                        </div>
                    </div>
                    <div className='relative group'>
                        <button className='group border px-1 py-1 rounded-full ml-3'><CiLinkedin /></button>
                        <div className='absolute top-[110%] left-2 group-hover:top-[100%] transition-all duration-300 invisible group-hover:visible'>
                            <p className='text-lg w-20 text-primary underline'>Linked-In</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CandidateReg
