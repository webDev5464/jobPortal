import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

const SignInSignOut = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    "Accounting/Finance",
    "Automotive Jobs",
    "Construction / Facilities",
    "Education Training",
    "Health Care",
  ];

  return (
    <div className="flex flex-col">
      <div className="flex items-end justify-center bg-slate-500 p-16 md:p-20">
        <h1 className="text-white text-4xl md:text-4xl font-semibold">
          SignIn / SignUp
        </h1>
      </div>

      <div className="flex items-center justify-center bg-zinc-800 text-white p-2">
        <NavLink className="font-semibold">Home</NavLink>
        <span className="mx-2">
          <FaAngleRight />
        </span>
        <NavLink className="font-semibold ">SignIn/SignUp</NavLink>
      </div>

      <div className="flex m-4  sm:flex-col md:flex-col md:items-center lg:px-4 xl:px-4 gap-6 ">
        <div className="mt-10  h-[600px] w-full md:w-[600px] bg-[#F6F6F6] p-4 md:p-8 ">
          <h1 className="text-2xl md:text-3xl font-bold">Login to our site</h1>
          <p className="mt-4">Enter the username and password to login:</p>

          <div className="mt-6">
            <input
              className="px-4 md:px-16 py-2 w-full rounded shadow-md"
              type="text"
              placeholder="Username/Email Address"
            />
          </div>
          <div className="mt-4">
            <input
              className="px-4 md:px-16 py-2 w-full rounded shadow-md"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="flex  justify-between items-center mt-5 sm:flex flex-row">
            <button className="bg-[#13B5EA]  text-white px-6 py-2 mb-5 mt-5 rounded">
              LOGIN
            </button>
            <span>Forgot your password?</span>
          </div>

          <h2 className="flex items-center justify-center mt-9 mb-10 text-xl text-slate-600">
            or login with:
          </h2>
          <div className="flex flex-col  items-center md:flex-row gap-4">
            <div className="flex items-center border py-2 w-[250px] rounded bg-primary px-4">
              <RiTwitterXFill className="text-2xl text-white" />
              <div className="mx-2 border-r-2 border-slate-200"></div>
              <NavLink className="text-white hover:underline">
                Login with Twitter
              </NavLink>
            </div>

            <div className="flex items-center border py-2 w-[250px] rounded bg-primary px-4">
              <FcGoogle className="text-2xl" />
              <div className="mx-2 border-r-2 border-slate-200"></div>
              <NavLink className="text-white hover:underline">
                Sign in with Google
              </NavLink>
            </div>

            <div className="flex items-center border py-2 w-[250px] rounded bg-primary px-4">
              <FaLinkedinIn className="text-2xl text-white" />
              <div className="mx-2 border-r-2 border-slate-200"></div>
              <NavLink className="text-white hover:underline">
                Login with LinkedIn
              </NavLink>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[630px] mt-10 bg-[#F6F6F6] p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold">Sign up now</h1>
          <p className="mt-4">Fill the form below to get instant access:</p>
          <div className="flex flex-row md:flex-row gap-4 mt-6">
            <div className="flex items-center w-full md:w-[230px] py-2 px-4 rounded bg-primary">
              <FaRegUser className="text-2xl text-white" />
              <div className="mx-2 border-r-2 border-slate-200"></div>
              <NavLink className="text-white hover:underline">
                Candidate
              </NavLink>
            </div>

            <div className="flex items-center w-full md:w-[230px] py-2 px-4 rounded border hover:bg-primary">
              <PiBuildingApartment className="text-2xl text-black hover:text-white" />
              <div className="mx-2 border-r-2 border-slate-200"></div>
              <NavLink className="text-black hover:text-white hover:underline">
                Employer
              </NavLink>
            </div>
          </div>

          <div className="mt-6">
            <input
              className="w-full py-2 rounded shadow-md px-4"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="mt-4">
            <input
              className="w-full py-2 rounded shadow-md px-4"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="mt-4">
            <input
              className="w-full py-2 rounded shadow-md px-4"
              type="text"
              placeholder="User Name"
            />
          </div>
          <div className="mt-4">
            <input
              className="w-full py-2 rounded shadow-md px-4"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mt-4">
            <input
              className="w-full py-2 rounded shadow-md px-4"
              type="number"
              placeholder="Phone Number"
            />
          </div>

          <div className="relative mt-4">
            <button
              type="button"
              className="inline-flex justify-between items-center w-full py-2 px-4 bg-white text-md font-medium text-gray-700 rounded-md shadow-md focus:outline-none"
              onClick={toggleDropdown}
            >
              {selectedOption || "Select an option"}
              <svg
                className="h-5 w-5"
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

            {isOpen && (
              <div className="origin-top-right absolute left-0 mt-2 w-full md:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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

          <div className="mt-4">
            <input
              className="w-full py-2 rounded shadow-md px-4"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mt-4">
            <input
              className="w-full py-2 rounded shadow-md px-4"
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          <div className="flex items-start mt-4">
            <input className="mx-2 mt-1" type="checkbox" id="terms" />
            <label htmlFor="terms" className="flex-grow text-sm">
              By clicking checkbox, you agree to our Terms and Conditions and
              Privacy Policy
            </label>
          </div>

          <div className="mt-4">
            <button className="w-full py-2 bg-[#13B5EA] rounded text-white">
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-10 md:mt-32 mb-6 justify-center">
        <button className="border p-2 text-2xl bg-primary rounded">
          <ImFacebook2  className="hover:text-white"/>
        </button>
        <button className="border p-2 text-2xl bg-primary rounded">
          <SiMastodon className="hover:text-white" />
        </button>
        <button className="border p-2 text-2xl bg-primary rounded">
          <MdEmail className="hover:text-white" />
        </button>
        <button className="border p-2 text-2xl bg-primary rounded">
          <IoMdAdd className="hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default SignInSignOut;