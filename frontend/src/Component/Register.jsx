import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (


  < section className="h-screen bg-loginBg bg-cover bg-center bg-no-repeat" >
    <div className="h-screen w-screen bg-black/55 flex justify-center items-center">
      <div className="bg-white  border w-[400px] pb-5 rounded-lg">
        <div className="flex flex-col items-center">
          <h1 className=" text-[25px] text-center font-bold py-5 text-textBlack">
            Sign Up!
          </h1>
          <form action="#">
            <div className="mb-3">
              <label
                for="fullName"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Full Name
              </label>
              <input
                type="fullName"
                id="fullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px]  w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                placeholder="Enter Your Full Name"
                required
              />
            </div>
            <div className="mb-3">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px]  w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                placeholder="abc@gmail.com"
                required
              />
            </div>
            <div className="mb-3">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px]  w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                placeholder="•••••••••"
                required
              />
            </div>
            <div className="mb-3">
              <label
                for="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Contact No
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px]  w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                placeholder="Enter Phone No...."
                required
                pattern="[0-9]{10}"
              />
            </div>
            <div className="flex items-center">
              <div className=" ">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                className="ms-2  font-medium text-gray-900"
              >
                I accept the <a href="" className='text-blue-600 hover:underline'>Terms and Conditions</a> 
              </label>
            </div>
            <div className="pt-5 flex justify-center">
              <button className=" p-[10px] w-72 border  bg-blue-500 font-bold text-white rounded-[5px]">
                Create Account
              </button>
            </div>
            <div className="pt-2">
              <h3 className="ml-[20px] text-black-600  ">
                Already have an Account? <NavLink to={'/login'} className={'text-blue-500 font-semibold'}>Login here...</NavLink>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section >

 ); 
}; 

export default Register;   
