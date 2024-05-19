import { useEffect, useState } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { FaBuildingCircleArrowRight } from "react-icons/fa6";
import { RiUserSharedFill } from "react-icons/ri";
import CandidateReg from './CandidateReg';
import EmployerReg from './EmployerReg';

const Register = () => {
    let [myActive, setMyActive] = useState('Candidate')

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>
            <div className="">
                <div className="relative bg-slate-600 bg-opacity-10 h-[110vh] w-screen">
                    <div data-aos="fade-down" data-aos-duration="500" className="absolute mt-3 rounded-md left-[30%] h-[110vh] w-[40%] 2xl:w-[40%] md:w-[40%] bg-white">
                        <div className='2xl:flex xl:flex lg:flex md:flex sm:flex justify-between items-center mx-8 my-5'>
                            <h3 className='text-xl font-semibold text-gray'>SIGNUP TO YOUR ACCOUNT</h3>
                            <NavLink to={-1}><IoMdClose className='cursor-pointer text-gray' /></NavLink>
                        </div>
                        <div className='2xl:flex xl:flex lg:flex md:flex sm:flex sm:mb-10'>
                            <div className="inline-flex items-center justify-center w-full">
                                <hr className="w-[90%] h-[1%] my-2 bg-red-400 border-0 rounded" />
                                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                                    <p className='text-primary text-sm'>Choose Your Account Type</p>
                                </div>
                            </div>
                        </div>
                        <div className="box 2xl:flex xl:flex lg:flex md:flex items-center justify-between mx-10 mt-5">
                            <button onClick={() => setMyActive('Candidate')} className={`first sm:mb-2 cursor-pointer relative border px-10 py-6 ${myActive == 'Candidate' ? 'border-primary bg-primary text-white' : ''}`}>
                                <h3 className='text-xl font-semibold'>Candidate</h3>
                                <p className='text-[10px]'>I want best Company for my Career.</p>
                                <div>
                                    <RiUserSharedFill className={`absolute -top-4 p-1 left-[44%] border rounded-full text-3xl ${myActive == 'Candidate' ? 'border-primary bg-primary ' : 'border-black bg-white text-black'}`} />
                                </div>
                            </button>
                            <button onClick={() => setMyActive('Employer')} className={`second sm:mb-2 cursor-pointer relative border px-10 py-6 ${myActive == 'Employer' ? 'border-primary bg-primary text-white' : ''}`}>
                                <h3 className='text-xl font-semibold'>Employer</h3>
                                <p className='text-[10px]'>Want to Hire the Best Employee.</p>
                                <div>
                                    <FaBuildingCircleArrowRight className={`absolute -top-4 p-1 left-[44%] border border-gray rounded-full text-center text-3xl ${myActive == 'Employer' ? 'border-primary bg-primary ' : 'border-black bg-white text-black'}`} />
                                </div>
                            </button>
                        </div>
                        {myActive === 'Candidate' && <CandidateReg />}
                        {myActive === 'Employer' && <EmployerReg />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
