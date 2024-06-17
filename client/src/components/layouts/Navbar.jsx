import React, { useState } from 'react'
import logo3 from './logo.png'
import { NavLink } from 'react-router-dom'
import { IoIosNotificationsOutline } from "react-icons/io";
import Register from '../user/Regitser'
import Login from '../Login';
import { useSelector } from 'react-redux';



const Nav2 = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isDropdownVisible1, setIsDropdownVisible1] = useState(false);
    const [isDropdownVisible2, setIsDropdownVisible2] = useState(false);
    const [isDropdownVisible3, setIsDropdownVisible3] = useState(false);
    const [isDropdownVisible4, setIsDropdownVisible4] = useState(false);
    const [isDropdownVisible5, setIsDropdownVisible5] = useState(false);
    let [regForm, setRegForm] = useState(false)
    let [logForm, setLogForm] = useState(false)
    console.log("hii")
    return (
        <div >
            <div className='flex flex-1 items-center justify-between pt-5 pb-5'>
                <div className='flex flex-1 ml-9'>

                    <img className='w-44 h-55' src={logo3} alt="" />~
                </div>
                <div className='flex flex-1'>
                    <ul className='flex items-center justify-around font-semibold li-none  '>
                        <li className='text-black duration-300   relative' onMouseEnter={() => setIsDropdownVisible(true)}
                            onMouseLeave={() => setIsDropdownVisible(false)}><NavLink to={'/'} className='text-primary mx-3 '>Home
                                <div className={`${isDropdownVisible ? 'flex' : 'hidden'} flex-col w-[150px] pb-4 items-start top-6 absolute bg-slate-50 shadow-md `}>
                                    <NavLink to={"/Home/New"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>New</NavLink>
                                    <NavLink to={"/Home/Modern"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Modern</NavLink>
                                    <NavLink to={"/Home/Fancy"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Fancy</NavLink>
                                    <NavLink to={"/Home/Classic"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Classic</NavLink>
                                    <NavLink to={"/Home/Transparent"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Transparent</NavLink>
                                    <NavLink to={"/Home/RTL-LTR"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>RTL-LTR</NavLink>
                                </div>
                            </NavLink>
                        </li >
                        <li className='text-black duration-300 mx-3 relative'
                            onMouseEnter={() => setIsDropdownVisible1(true)}
                            onMouseLeave={() => setIsDropdownVisible1(false)}>
                            <NavLink to={'jobs'}>Jobs
                                <div className={`${isDropdownVisible1 ? 'flex' : 'hidden'} flex-col w-[220px] pb-6 items-start top-6 absolute bg-slate-50 shadow-md `}>
                                    <NavLink to={"/Jobs/JobsWithFilters"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Jobs With Filters</NavLink>
                                    <NavLink to={"/Jobs/JobsWithTopSearch"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Jobs With Top Search</NavLink>
                                    <NavLink to={"/Jobs/JobsWIthNewsAlerts"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Jobs WIth News Alerts</NavLink>
                                    <NavLink to={"/Jobs/JobsByCities"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Jobs By Cities</NavLink>
                                    <NavLink to={"/Jobs/JobsByTypes"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Jobs By Types</NavLink>
                                    <NavLink to={"/Jobs/JobsByDetails"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Jobs By Details</NavLink>
                                </div>
                            </NavLink>
                        </li>
                        <li className='text-black duration-300 mx-3  relative'
                            onMouseEnter={() => setIsDropdownVisible2(true)}
                            onMouseLeave={() => setIsDropdownVisible2(false)}>
                            <NavLink to={'Employer'}>Employers
                                <div className={`${isDropdownVisible2 ? 'flex' : 'hidden'} flex-col w-[220px] pb-6 items-start top-6 absolute bg-slate-50 shadow-md `}>
                                    <NavLink to={"/Employers/EmployersGiid"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Employers Giid</NavLink>
                                    <NavLink to={"/Employers/EmployerListing"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Employer Listing</NavLink>
                                    <NavLink to={"/Employers/EmployerListingW/Mape"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Employer Listing W/Map</NavLink>
                                    <NavLink to={"/Employers/EmployerWithSearch"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Employer With Search</NavLink>
                                    <NavLink to={"/Employers/EmployerDetail"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Employer Detail</NavLink>
                                </div>

                            </NavLink></li>
                        <li className='text-black duration-300 mx-3 relative'
                            onMouseEnter={() => setIsDropdownVisible3(true)}
                            onMouseLeave={() => setIsDropdownVisible3(false)} >
                            <NavLink to={'candidate'}>Candidates
                                <div className={`${isDropdownVisible3 ? 'flex' : 'hidden'} flex-col w-[230px] pb-6 items-start top-6 absolute bg-slate-50 shadow-md `}>
                                    <NavLink to={"/Candidates/CandidatesGiid"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Candidates Giid</NavLink>
                                    <NavLink to={"/Candidates/CandidateListing"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Candidate Listing</NavLink>
                                    <NavLink to={"/Candidates/CandidateListingW/Mape"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Candidate Listing W/Map</NavLink>
                                    <NavLink to={"/Candidates/CandidateWithSearch"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Candidate With Search</NavLink>
                                    <NavLink to={"/Candidates/CandidateEmployerDetail"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Candidate Detail</NavLink>
                                </div>
                            </NavLink></li>
                        <li className='text-black duration-300 mx-3 relative'
                            onMouseEnter={() => setIsDropdownVisible4(true)}
                            onMouseLeave={() => setIsDropdownVisible4(false)}  >
                            <NavLink to={'packages'}>Packages

                                <div className={`${isDropdownVisible4 ? 'flex' : 'hidden'} flex-col w-[180px] pb-4 items-start top-6 absolute bg-slate-50 shadow-md `}>
                                    <NavLink to={"/Packages/CVPackages"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>CV Packages</NavLink>
                                    <NavLink to={"/Packages/JobPackages"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Job Packages</NavLink>

                                </div>
                            </NavLink></li>

                        <li className='text-black duration-300 mx-3 relative '
                            onMouseEnter={() => setIsDropdownVisible5(true)}
                            onMouseLeave={() => setIsDropdownVisible5(false)}>
                            <NavLink to={'pages'}>Pages
                                <div className={`${isDropdownVisible5 ? 'flex' : 'hidden'} flex-col w-[200px] pb-6 items-start top-6 absolute bg-slate-50 shadow-md `}>
                                    <NavLink to={"/about/AboutUs"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>About Us</NavLink>
                                    <NavLink to={"/about/FAQ'S"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>FAQ'S</NavLink>
                                    <NavLink to={"/about/MaintenanceMode"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Maintenance Mode</NavLink>
                                    <NavLink to={"/about/PostNewJob"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Post New Job</NavLink>
                                    <NavLink to={"/about/SignIn/SignUp"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>SignIn/SignUp</NavLink>
                                    <NavLink to={"/about/Contact"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>Contact</NavLink>
                                    <NavLink to={"/about/News"} className='block  px-4  py-2 text-gray-800 hover:text-primary hover:translate-x-2'>News</NavLink>

                                </div>


                            </NavLink></li>
                    </ul>
                </div>
                <div className='flex  flex-1 items-center justify-center font-semibold'>
                    <IoIosNotificationsOutline className=' text-2xl mx-2 ' />
                    <NavLink onClick={() => setRegForm(!regForm)} className=' text-primary hover:text-black duration-300'>Register<span className='border-r-2 border-slate-200 m-1'></span></NavLink>
                    <NavLink onClick={() => setLogForm(!logForm)} className=' text-primary hover:text-black duration-300 '>Sign In</NavLink>
                    <button className=' m-2 p-2 bg-primary text-white  rounded-sm hover:bg-black'>Post New Jobs</button>
                </div>


            </div>
            {regForm && <Register setLogForm={setLogForm} logForm={logForm} setRegForm={setRegForm} />}
            {logForm && <Login regForm={regForm} setRegForm={setRegForm} setLogForm={setLogForm} />}
        </div>
    )
}

export default Nav2
