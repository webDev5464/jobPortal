import React from "react";
import { IoClose } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { CiLinkedin } from "react-icons/ci";

const Loging = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-[10px]">
        <div className=" p-5 w-[50%]  shadow-2xl  rounded  ">
          <div className="flex items-center justify-between ">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              LOGIN TO YOUR ACCOUNT
            </h3>
            <button type="button">
              <IoClose color="gray" />
            </button>
          </div>
          <form action="#" className="m-2">
            <div className="flex flex-col">
              <label
                for="email"
                className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Username or Email Address:
              </label>
              <div className="relative flex items-center">
                <FaRegUser className="absolute right-2" />
                <input
                  type="email"
                  className="w-full border px-2 py-1 outline-none border-gray  focus:border-primary"
                  placeholder="Enter Username or Email Address"
                />
              </div>
              <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password:
              </label>
              <div className="relative flex items-center">
                <RiLockPasswordLine className="absolute right-2" />
                <input
                  type="password"
                  className="w-full border px-2 py-1 outline-none border-gray  focus:border-primary"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
                    <div>
                        <button className='border px-6 py-2 rounded-3xl  border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all '>Sign in</button>
                    </div>
                    <div>
                        <NavLink className='text-primary hover:underline '>Forgot Password ?<span className="border-r-2 m-1 border-slate-200"></span></NavLink>
                        <NavLink className='text-primary hover:underline '>Sign In</NavLink>
                    </div>
                    <div className="flex items-center ">
                        <input type="checkbox" className="w" id="checkbox" />
                        <label htmlFor="checkbox" className="mx-2">Save Passowrd</label>
                    </div>
                </div>
          </form>
          <div className='flex mt-6'>
                <div className="flex items-center justify-center w-full">
                    <hr className="w-[97%] h-[1%] my-2 bg-red-400 border-0 rounded" />
                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                        <p className='text-primary text-sm'>Or Sign in With</p>
                    </div>
                </div>
            </div>
            <div className="my-6 ">
                <div className='text-3xl  mx-auto flex items-center justify-center'>
                    <div className='relative group'>
                        <button className='group border px-1 py-1 rounded-full ml-3'><FaXTwitter /></button>
                        <div className='absolute top-[90%] left-1 group-hover:top-[90%] transition-all duration-300 invisible group-hover:visible'>
                            <p className='text-lg text-primary underline'>Twitter</p>
                        </div>
                    </div>
                    <div className='relative group'>
                        <button className='group border px-1 py-1 rounded-full ml-3'><FcGoogle /></button>
                        <div className='absolute top-[90%] left-2 group-hover:top-[90%] transition-all duration-300 invisible group-hover:visible'>
                            <p className='text-lg text-primary underline'>Gmail</p>
                        </div>
                    </div>
                    <div className='relative group'>
                        <button className='group border px-1 py-1 rounded-full ml-3'><CiLinkedin /></button>
                        <div className='absolute top-[90%] left-2 group-hover:top-[90%] transition-all duration-300 invisible group-hover:visible'>
                            <p className='text-lg w-20 text-primary underline'>Linked-In</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Loging;