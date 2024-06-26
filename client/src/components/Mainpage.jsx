import React from 'react'
import Navbar from './layouts/Navbar'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import Hometopimg from './home-contain-images/Topimage.jpg'
import Serchimg from './home-contain-images/Worklaptop.jpg'
import Joy from './home-contain-images/Celebrate.jpg'
import Clock from './home-contain-images/Clockwork.jpg'
import Grouppic from './home-contain-images/Groupwork.jpg'
import Menbook from './home-contain-images/Menbook.jpg'

import { FaChartBar } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { FaTruckLoading } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdOutlineCellTower } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { GiHospitalCross } from "react-icons/gi";



import { FaFacebook, FaSnapchatGhost } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdWhatsapp } from "react-icons/md";


import TestimonialSwiper from './user/mianPage/TestimonialSwiper';
import Footer from './user/Footer';




const Mainpage = () => {
    return (
        <>
            <Navbar />
            <section>
                <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${Hometopimg})` }} id='top-contain' className='bg-center bg-cover  flex flex-col justify-center items-center  h-[500px] gap-10 ' >
                    <h1 className='font-bold text-[45px] text-white'>Aim Higher. Reach Farther. Dream Bigger.</h1>
                    <p className='text-white'>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.</p>
                    <div id='search-bar' className='flex justify-center items-center gap-2'>

                        <div >
                            <input className="placeholder:italic placeholder:text-slate-400  bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-[50px] w-[300px]" placeholder="Job Title, Keywords or Phrase" type="text" name="search" />
                        </div>

                        <div><input className="placeholder:italic placeholder:text-slate-400  bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-[50px] w-[300px]" placeholder="City, State or ZIP" type="text" name="search" /></div>

                        <div><input className="placeholder:italic placeholder:text-slate-400  bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-[50px] w-[300px]" placeholder="Select Sector" type="text" name="search" /></div>

                        <div className="w-[50px] h-[50px] text-white  border-yellow-600 border-4 rounded-md justify-center flex items-center text-[25px]">{<FaMagnifyingGlass />}</div>
                    </div>
                    <div id='upload-hiring' className='flex justify-center items-center gap-3'>
                        <div className='flex  items-center border-2 p-2 rounded-sm text-white border-black bg-black/65'><span className='text-[29px]'>{<FaRegArrowAltCircleUp />}</span><p className='text-xl ml-1'>Upload Your Resume</p></div>
                        <div className='flex  items-center border-2 p-2 rounded-sm text-white border-black bg-black/65 '><span className='text-[30px]'>{<FaBriefcase />}</span ><p className='text-xl ml-1'>Hiring? Post a job for free</p></div>
                    </div>
                </div>
                <div id='counting-analyst' className='flex py-4  justify-evenly pr-[80px] '>
                    <div className='h-[70px] w-[400px] text-4xl  flex flex-col justify-center items-center' >123,012 <p className='w-fit text-zinc-400 text-xl '>Jobs Added</p></div>
                    <div className='w-[3px] h-[70px] bg-black'></div>
                    <div className='h-[70px] w-[300px] text-4xl  flex flex-col justify-center mr-5 items-center'>187,432 <p className='w-fit text-zinc-400 text-xl'>Active Resumes</p></div>
                    <div className='w-[3px] h-[70px] bg-black'></div>
                    <div className='h-[70px] w-[300px] text-4xl flex flex-col justify-center items-center '>140,312 <p className='w-fit text-zinc-400 text-xl '>Positions Matched</p></div>
                </div>


                <div id='icon-list' className='flex flex-col justify-center items-center text-center  h-[680px] border-2 border-zinc-400 bg-white shadow-lg rounded-md'>
                    <h2 className='font-bold text-[25px]'>POPULAR JOB CATEGORIES</h2>
                    <p className='text-zinc-400'>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.</p>
                    <div id='symbolic-grid' className='grid  grid-cols-4 gap-10 items-center m-10'>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] hover:border-2 hover:border-yellow-500 rounded-md flex justify-center items-center cursor-pointer'><span className='text-yellow-500 text-7xl'>{<FaChartBar />}</span></div>
                            <div className='font-bold'>
                                SALES & MARKETING
                            </div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] hover:border-2 hover:border-yellow-500 rounded-md flex justify-center items-center cursor-pointer'><span className='text-yellow-500 text-7xl'>{< IoCarSport />}</span></div>
                            <div className='font-bold'>
                                AUTOMOBILE JOBS
                            </div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] hover:border-2 hover:border-yellow-500 rounded-md flex justify-center items-center cursor-pointer'><span className='text-yellow-500 text-7xl'>{<FaTruckLoading />}</span></div>
                            <div className='font-bold'>
                                CINSTRUCTION / FACILITIES
                            </div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] hover:border-2 hover:border-yellow-500 rounded-md flex justify-center items-center cursor-pointer'><span className='text-yellow-500 text-7xl'>{<FaFileInvoiceDollar />}</span></div>
                            <div className='font-bold'>ACCOUNTING / FINANCE</div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] hover:border-2 hover:border-yellow-500 rounded-md flex justify-center items-center cursor-pointer'><span className='text-yellow-500 text-7xl'>{<MdOutlineCellTower />}</span></div>
                            <div className='font-bold'>TELECOMMUNICATION</div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] hover:border-2 hover:border-yellow-500 rounded-md flex justify-center items-center cursor-pointer'><span className='text-yellow-500 text-7xl'>{<FaBookReader />}</span></div>
                            <div className='font-bold'>EDUCATION TRAINING</div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] hover:border-2 hover:border-yellow-500 rounded-md flex justify-center items-center cursor-pointer'><span className='text-yellow-500 text-7xl'>{< IoFastFood />}</span></div>
                            <div className='font-bold'>RESTAURANT / FOOD SERVICE</div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] hover:border-2 hover:border-yellow-500 rounded-md flex justify-center items-center cursor-pointer'><span className='text-yellow-500 text-7xl'>{<GiHospitalCross />}</span></div>
                            <div className='font-bold'>HEALTH CARE</div>
                            <div>(0 Vacancies)</div>
                        </div>
                    </div>
                    <div className='bg-white-600 p-2 rounded-md font-bold text-yellow-600 cursor-pointer w-[250px] h-[50px] flex justify-center items-center border-2 hover:bg-yellow-500 hover:text-white duration-[0.6s]'>BROWSE ALL SECTORS</div>
                </div>

                <div id='search-job-contain' className='flex justify-evenly items-center  h-[600px] p-[50px] '>
                    <div className='w-fit '>
                        <div className='font-bold text-[50px]'>MILLIONS OF JOBS.</div>
                        <div className='font-bold text-[25px]'> FIND THE ONE THAT’S RIGHT FOR YOU.</div>
                        <p className='w-[500px] mt-3 text-zinc-400 '>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.</p>
                        <div className='mt-5 h-[50px] w-[200px] '><div className='bg-orange-400 p-2 rounded-md w-fit  text-white font-bold cursor-pointer hover:border-[1px] hover:border-orange-400 hover:bg-white hover:text-orange-400'>SEARCH JOBS</div></div>
                    </div>

                    <div style={{ backgroundImage: `url(${Serchimg})` }} className='bg-cover bg-center border-orange-400 duration-[0.5s] border-2 hover:border-[15px] shadow-xl rounded-lg h-[400px] w-[500px] '></div>
                </div>

                <div id='reset-contain' className='flex flex-col justify-center items-center  h-[400px] bg-slate-200 rounded-lg border-zinc-500 shadow-lg'>
                    <div className='font-bold text-[50px]'>FEATURED JOBS LISTINGS</div>
                    <p className='text-zinc-500 mt-5'>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.

                    </p>
                    <div>
                        <div className='flex'><span className='font-bold'>No Record,</span>
                            <p className='ml-2 text-zinc-500'>Sorry!  Does not match record with your keyword
                                Change your filter keywords to re-submit
                                OR</p></div>
                        <div className=' flex justify-center items-center'> <div className='bg-red-800 text-white p-2 rounded-md mt-6 w-fit h-[40px]  font-bold cursor-pointer hover:border-[1px] hover:border-red-800 hover:bg-slate-200 hover:text-red-800'>RESET FILTERS</div></div>

                    </div>

                </div>
                <br />
                <br />

                <div id='swipe-contain' className='h-[500px]  flex justify-evenly mt-[100px]'>
                    <div className="w-1/3 flex items-center">
                        <TestimonialSwiper reverse={false} />
                    </div>

                    <div style={{ backgroundImage: `url(${Joy})` }} className='bg-center bg-cover h-full w-1/3 rounded-md '></div>
                    <div className="w-1/3 flex items-center">
                        <TestimonialSwiper reverse={true} />
                    </div>

                </div>


                <div id='blog-contain' className='bg-white h-[800px] flex flex-col justify-center items-center pt-7 mt-[100px]'>
                    <div className='font-bold text-3xl'>FROM OUR BLOG</div>
                    <p className='text-slate-400 p-2'>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.</p>

                    <div className='flex justify-evenly items-center w-full h-[700px] ' >

                        <div className='w-[350px] h-[550px] bg-white flex flex-col  items-center shadow-2xl rounded-md '>
                            <div style={{ backgroundImage: `url(${Menbook})` }} className='bg-cover bg-center w-[350px] h-[200px] bg-neutral-50 rounded-md'></div>
                            <div className='p-5'>
                                <div className='text-red-500 font-bold'>BLOGS</div>
                                <div className='font-bold text-[20px]'>Hhimself transf text-[20px]ormed in his bed into...</div>
                                <div className='text-sky-500 text-[15px]'>BY ADMIN SEPTEMBER 21, 2024</div>
                                <p className='text-slate-400 my-2'>His room, a proper human room although a little too small, lay peacefully between its four familiar walls. One morning,…</p>
                                <div className='flex gap-5'>
                                    <div className='rounded-md h-[40px] w-[40px] p-2 flex justify-center items-center bg-blue-700'><span className='text-2xl text-white ' >{<FaFacebook />}</span></div>
                                    <div className='rounded-md h-[40px] w-[40px] p-2 flex justify-center items-center bg-yellow-400'><span className='text-2xl text-white'>{<FaSnapchatGhost />}</span></div>
                                    <div className='rounded-md h-[40px] w-[40px] p-2 flex justify-center items-center bg-[#25D366]'><span className='text-2xl text-white' >{<MdWhatsapp />}</span></div>
                                    <div className='rounded-md h-[40px] w-[40px] p-2 flex justify-center items-center bg-[#FF0000]'><span className='text-2xl text-white' >{<IoIosMail />}</span></div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center bg-sky-300 text-white p-[10px] font-bold rounded-md w-[310px] border-2  '>READ ARTICLES</div>
                        </div>
                        <div className='w-[350px] h-[550px] bg-white flex flex-col  items-center shadow-2xl rounded-md '>
                            <div style={{ backgroundImage: `url(${Grouppic})` }} className='bg-cover bg-center w-[350px] h-[200px] bg-neutral-50 rounded-md'  ></div>
                            <div className='p-5'>
                                <div className='text-red-500 font-bold'>BLOGS</div>
                                <div className='font-bold text-[20px]'>See his brown b text-[20px]elly, slightly domed and divided...
                                </div>
                                <div className='text-sky-500 text-[15px]'>BY ADMIN SEPTEMBER 21, 2024</div>
                                <p className='text-slate-400 my-2'>His room, a proper human room although a little too small, lay peacefully between its four familiar walls. One morning,…</p>
                                <div className='flex gap-5'>
                                    <div className='rounded-md h-[40px] w-[40px] p-2  flex justify-center items-center bg-blue-700'><span className='text-2xl text-white ' >{<FaFacebook />}</span></div>
                                    <div className='rounded-md h-[40px] w-[40px] p-2  flex justify-center items-center bg-yellow-400'><span className='text-2xl text-white'>{<FaSnapchatGhost />}</span></div>
                                    <div className='rounded-md h-[40px] w-[40px] p-2  flex justify-center items-center bg-[#25D366]'><span className='text-2xl text-white' >{<MdWhatsapp />}</span></div>
                                    <div className='rounded-md h-[40px] w-[40px] p-2  flex justify-center items-center bg-[#FF0000]'><span className='text-2xl text-white' >{<IoIosMail />}</span></div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center bg-sky-300 text-white p-[10px] font-bold rounded-md w-[310px] border-2 '>READ ARTICLES</div>
                        </div>
                       

                            <div className=' bg-white flex flex-col  items-center shadow-2xl rounded-md  w-[350px] h-[550px]  '>

                            <div style={{ backgroundImage: `url(${Clock})` }} className='bg-cover bg-center w-[350px] h-[200px] bg-neutral-50 rounded-md'></div>
                            <div className='p-5'>
                                <div className='text-red-500 font-bold'>BLOGS</div>
                                <div className='font-bold text-[20px]'>
                                    One morning, when Gregor Samsa woke from troubled ...</div>
                                <div className='text-sky-500 text-[15px]'>BY ADMIN SEPTEMBER 21, 2024</div>
                                <p className='text-slate-400 my-2'>His room, a proper human room although a little too small, lay peacefully between its four familiar walls. One morning,…</p>
                                <div className='flex gap-5'>
                                    <div className='rounded-md h-[40px] w-[40px] p-2 flex justify-center items-center bg-blue-700'><span className='text-2xl text-white ' >{<FaFacebook />}</span></div>
                                    <div className='rounded-md h-[40px] w-[40px] p-2 flex justify-center items-center bg-yellow-400'><span className='text-2xl text-white'>{<FaSnapchatGhost />}</span></div>
                                    <div className='rounded-md h-[40px] w-[40px] p-2 flex justify-center items-center bg-[#25D366]'><span className='text-2xl text-white' >{<MdWhatsapp />}</span></div>
                                    <div className='rounded-md h-[40px] w-[40px] p-2 flex justify-center items-center bg-[#FF0000]'><span className='text-2xl text-white' >{<IoIosMail />}</span></div>                              </div>
                            </div>
                            <div className='flex justify-center items-center bg-sky-300 text-white p-[10px] font-bold rounded-md w-[310px] border-2  '>READ ARTICLES</div>
                        </div>
                        </div>

                    </div>

                

            </section>
            <Footer/>



        </>
    )
}

export default Mainpage
