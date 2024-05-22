import React from 'react'
import Navbar from './layouts/Navbar'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import Hometopimg from './home-contain-images/Topimage.jpg'
import Serchimg from './home-contain-images/Worklaptop.jpg'
import Joy from './home-contain-images/Celebrate.jpg'


const Mainpage = () => {
    return (
        <>
            <Navbar />
            <section>
                <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${Hometopimg})` }} id='top-contain' className='bg-center bg-cover  flex flex-col justify-center items-center  h-[500px] gap-10 ' >
                    <h1 className='font-bold text-[45px] text-white'>Aim Higher. Reach Farther. Dream Bigger.</h1>
                    <p className='text-white'>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.</p>
                    <div id='search-bar' className='flex justify-center items-center'>

                        <div >
                            <input className="placeholder:italic placeholder:text-slate-400  bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-[50px] w-[300px]" placeholder="Job Title, Keywords or Phrase" type="text" name="search" />
                        </div>

                        <div><input className="placeholder:italic placeholder:text-slate-400  bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-[50px] w-[300px]" placeholder="City, State or ZIP" type="text" name="search" /></div>

                        <div><input className="placeholder:italic placeholder:text-slate-400  bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-[50px] w-[300px]" placeholder="Select Sector" type="text" name="search" /></div>

                        <div className="w-[50px] h-[50px] text-white border border-yellow-400 border-4 rounded-md justify-center flex items-center text-[25px]">{<FaMagnifyingGlass />}</div>
                    </div>
                    <div id='upload-hiring' className='flex justify-center items-center gap-3'>
                        <div className='flex  items-center border-2 p-2 rounded-sm text-white border-black bg-black/65'><span className='text-[29px]'>{<FaRegArrowAltCircleUp />}</span><p className='text-xl'>Upload Your Resume</p></div>
                        <div className='flex  items-center border-2 p-2 rounded-sm text-white border-black bg-black/65 '><span className='text-[30px]'>{<PiBagFill />}</span ><p className='text-xl'>Hiring? Post a job for free</p></div>
                    </div>
                </div>
                <div id='counting-analyst' className='flex py-4 justify-evenly items-center '>
                    <div className='h-[70px] w-[300px] text-2xl  border-r-2' >123,012 <p className='w-fit'>Jobs Added</p></div>
                    <div className='h-[70px] w-[300px] text-2xl border-r-2'>187,432 <p className='w-fit'>Active Resumes</p></div>
                    <div className='h-[70px] w-[300px] text-2xl '>140,312 <p className='w-fit'>Positions Matched</p></div>
                </div>

                <div id='icon-list' className='flex flex-col justify-center items-center text-center p-14 bg-yellow-200'>
                    <h2 className='font-bold text-[25px]'>POPULAR JOB CATEGORIES</h2>
                    <p>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.</p>
                    <div id='symbolic-grid' className='grid  grid-cols-4 gap-10 items-center m-10'>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] bg-blue-600'></div>
                            <div>
                                SALES & MARKETING
                            </div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] bg-blue-600'></div>
                            <div>
                                AUTOMOBILE JOBS
                            </div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] bg-blue-600'></div>
                            <div>
                                CINSTRUCTION / FACILITIES
                            </div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] bg-blue-600'></div>
                            <div>ACCOUNTING / FINANCE</div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] bg-blue-600'></div>
                            <div>TELECOMMUNICATION</div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] bg-blue-600'></div>
                            <div>EDUCATION TRAINING</div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] bg-blue-600'></div>
                            <div>RESTAURANT / FOOD SERVICE</div>
                            <div>(0 Vacancies)</div>
                        </div>
                        <div className='flex flex-col  items-center'>
                            <div className='h-[100px] w-[100px] bg-blue-600'></div>
                            <div>HEALTH CARE</div>
                            <div>(0 Vacancies)</div>
                        </div>
                    </div>
                    <div className='bg-sky-600 p-2 rounded-sm font-bold text-white'>BROWSE ALL SECTORS</div>
                </div>

                <div id='search-job-contain' className='flex justify-evenly items-center bg-sky-300 h-[600px] p-[50px] '>
                    <div className='w-fit '>
                        <div className='font-bold text-[25px]'>MILLIONS OF JOBS.</div>
                        <div className='font-bold text-[25px]'> FIND THE ONE THAT’S RIGHT FOR YOU.</div>
                        <p className='w-[500px] mt-3'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.</p>
                        <div className='bg-orange-300 p-2 rounded-md w-fit mt-5 text-white font-bold'>SEARCH JOBS</div>
                    </div>
                    <div style={{ backgroundImage: `url(${Serchimg})` }} className='bg-cover bg-center rounded-lg h-[400px] w-[500px]'></div>
                </div>

                <div id='reset-contain' className='flex flex-col justify-center items-center bg-amber-300 h-[400px]'>
                    <div className='font-bold text-[25px]'>FEATURED JOBS LISTINGS</div>
                    <p>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.

                    </p>
                    <div>
                        <div className='flex'><span className='font-bold'>No Record,</span>
                            <p className='ml-2'>Sorry!  Does not match record with your keyword
                                Change your filter keywords to re-submit
                                OR</p></div>
                        <div className='bg-red-800 text-white p-2 rounded-md w-fit mt-5 font-bold'>RESET FILTERS</div>

                    </div>

                </div>

                <div id='swipe-contain' className='h-[400px] bg-emerald-300 flex'>
                    <div style={{ backgroundImage: `url(${Joy})` }} className='bg-center bg-cover h-[400px] w-[700px]'></div>

                    <div className='flex flex-col justify-center items-center  ml-[100px] p-10  bg-white'>
                        <p className='w-[500px] text-3xl'>I just got a job that I applied for via career-fy! I used the site all the time during my job hunt.</p>
                        <div className='border-[1px] w-[400px] mt-4'></div>
                        <div className='flex flex-col justify-items-end text-right  w-[400px] mt-4'>
                            <div className='font-bold'>Richard Anderson</div>
                            <div className='text-zinc-500'>Nevada, USA</div>
                        </div>

                    </div>
                </div>


                <div id='blog-contain' className='bg-white h-[800px] flex flex-col justify-center items-center pt-7'>
                    <div className='font-bold text-3xl'>FROM OUR BLOG</div>
                    <p className='text-slate-400'>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.</p>

                    <div className='flex justify-evenly  w-full h-[700px]  pt-[80px]' >

                        <div className='w-[350px] h-[580px] bg-white flex flex-col  items-center shadow-2xl rounded-md'>
                            <div className='w-[350px] h-[200px] bg-neutral-50 rounded-md'></div>
                            <div className='p-5'>
                                <div className='text-red-500 font-bold'>BLOGS</div>
                                <div className='font-bold text-[20px]'>Hhimself transf text-[20px]ormed in his bed into...</div>
                                <div className='text-sky-500 text-[15px]'>BY ADMIN SEPTEMBER 21, 2024</div>
                                <p className='text-slate-400 m-2'>His room, a proper human room although a little too small, lay peacefully between its four familiar walls. One morning,…</p>
                                <div className='flex gap-5'>
                                    <div className='rounded-md h-[50px] w-[50px] p-2 bg-zinc-600'></div>
                                    <div className='rounded-md h-[50px] w-[50px] p-2 bg-zinc-600'></div>
                                    <div className='rounded-md h-[50px] w-[50px] p-2 bg-zinc-600'></div>
                                    <div className='rounded-md h-[50px] w-[50px] p-2 bg-zinc-600'></div>
                                </div></div>
                            <div className='flex justify-center items-center bg-sky-300 text-white p-[10px] font-bold rounded-md w-[220px] border-2 flex '>READ ARTICLES</div>
                        </div>
                        <div className='w-[350px] h-[580px] bg-white flex flex-col  items-center shadow-2xl rounded-md'>
                            <div className='w-[350px] h-[200px] bg-neutral-50 rounded-md'  ></div>
                            <div className='p-5'>
                                <div className='text-red-500 font-bold'>BLOGS</div>
                                <div className='font-bold text-[20px]'>See his brown b text-[20px]elly, slightly domed and divided...
</div>
                                <div className='text-sky-500 text-[15px]'>BY ADMIN SEPTEMBER 21, 2024</div>
                                <p className='text-slate-400 m-2'>His room, a proper human room although a little too small, lay peacefully between its four familiar walls. One morning,…</p>
                                <div className='flex gap-5'>
                                    <div className='rounded-md h-[50px] w-[50px] p-2 bg-zinc-600'></div>
                                    <div className='rounded-md h-[50px] w-[50px] p-2 bg-zinc-600'></div>
                                    <div className='rounded-md h-[50px] w-[50px] p-2 bg-zinc-600'></div>
                                    <div className='rounded-md h-[50px] w-[50px] p-2 bg-zinc-600'></div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center bg-sky-300 text-white p-[10px] font-bold rounded-md w-[220px] border-2 '>READ ARTICLES</div>
                        </div>
                        <div className='w-[350px] h-[580px] bg-white flex flex-col  items-center shadow-2xl rounded-md'>
                            <div className='w-[350px] h-[200px] bg-neutral-50 rounded-md'></div>
                            <div className='p-5'>
                                <div className='text-red-500 font-bold'>BLOGS</div>
                                <div className='font-bold text-[20px]'>
                                    One morning, when Gregor Samsa woke from troubled ...</div>
                                <div className='text-sky-500 text-[15px]'>BY ADMIN SEPTEMBER 21, 2024</div>
                                <p className='text-slate-400 m-2'>His room, a proper human room although a little too small, lay peacefully between its four familiar walls. One morning,…</p>
                                <div className='flex gap-5'>
                                    <div className='rounded-md h-[50px] w-[50px] p-2 bg-zinc-600'></div>
                                    <div className='rounded-md h-[50px] w-[50px] p-2 bg-zinc-600'></div>
                                    <div className='rounded-md h-[50px] w-[50px] p-2 bg-zinc-600'></div>
                                    <div className='rounded-md h-[50px] w-[50px] p-2 bg-zinc-600'></div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center bg-sky-300 text-white p-[10px] font-bold rounded-md w-[220px] border-2 flex '>READ ARTICLES</div>
                        </div>

                    </div>

                </div>

            </section>



            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default Mainpage
