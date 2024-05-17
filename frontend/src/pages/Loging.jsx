import React from "react";
import { NavLink } from "react-router-dom";

const Loging = () => {
  return (
    <section className="h-screen bg-loginBg bg-cover bg-center bg-no-repeat">
      <div className="h-screen w-screen bg-black/55 flex justify-center items-center">
        <div className="bg-white  border w-[400px] pb-5 rounded-lg">
          <div className="flex flex-col items-center">
            <h1 className=" text-[25px] text-center font-bold py-5 text-textBlack">
              sign in to your account
            </h1>
            <form action="#">
              <div className="mb-3">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px]  w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
              <div className="flex  items-center ">
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
                  className="ms-2  font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
                <NavLink className="ml-[60px] text-blue-600  dark:text-blue-500">
                  Forgot password ?
                </NavLink>
              </div>
              <div className="pt-5 flex justify-center">
                <button className=" p-[10px] w-72 border  bg-blue-500 font-bold text-white rounded-[5px]">
                  Log in to your account
                </button>
              </div>
              <div className="pt-2">
                <NavLink className="ml-[60px] text-blue-600  dark:text-blue-500">
                  Dont't have an account ?
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loging;
